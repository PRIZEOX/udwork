import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';
import { createHash } from 'crypto';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';
import { UserStatus } from '../enums/user.status';
@Injectable()
export class MailerService {
  constructor(
    private readonly configService: ConfigService,
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get('SMTP_HOST'),
      port: this.configService.get('SMTP_PORT'),
      secure: this.configService.get('SMTP_SECURE'), // true for 465, false for other ports
      auth: {
        user: this.configService.get('SMTP_USER'),
        pass: this.configService.get('SMTP_PASSWORD'),
      },
    });
  }
  private readonly logger = new Logger(MailerService.name);
  private transporter;
  public confirm(token, email) {
    const hash = createHash('sha256')
      .update(email + this.configService.get('HASH_SALT'))
      .digest('hex');
    return token === hash;
  }
  public async sendRecoverMessage(email): Promise<void> {
    const hash = createHash('sha256')
      .update(email + this.configService.get('HASH_SALT'))
      .digest('hex');
    const link =
      this.configService.get('RECOVER_LINK') + `?token=${hash}&email=${email}`;
    this.logger.log(link);
    const info = await this.transporter.sendMail({
      from: this.configService.get('SMTP_SENDER'),
      to: email,
      subject: 'Удалтон: восстановление пароля',
      html: `
      <p>Вы запросили сброс пароля с платформы Удалтон инвестиции.
      Пожалуйста, пройдите по <a href=${link}>этой ссылке</a> 
      чтобы установить новый пароль.</p>
      `,
    });
    this.logger.log(info);
  }
  public async sendEmailConfirmation(user): Promise<void> {
    const hash = createHash('sha256')
      .update(user.email + this.configService.get('HASH_SALT'))
      .digest('hex');
    const link =
      this.configService.get('CONFIRM_LINK') +
      `?token=${hash}&email=${user.email}`;
    this.logger.log(link);
    const info = await this.transporter.sendMail({
      from: this.configService.get('SMTP_SENDER'),
      to: user.email,
      subject: 'Registration ✔',
      html: `
      <p>Your email was registered at instagig.
      Please follow <a href=${link}>this link</a> 
      to finish the registration process.</p>
      `,
    });
    this.logger.log(info);
  }
  public async sendWithdrawRequest(uuid, sum): Promise<void> {
    const user = await this.usersService.findByUuid(uuid);
    let warning = '';
    if (user.terrorist) {
      warning =
        'ВНИМАНИЕ! Пользователь заморожен в связи с причастностью к спискам террористов и экстремистов.';
    }
    const info = await this.transporter.sendMail({
      from: this.configService.get('SMTP_SENDER'),
      to: this.configService.get('SUPPORT_EMAIL'),
      subject: 'Запрос на вывод средств',
      html: `
      <p>
      Инвестор с ЛС № ${uuid} (${user.orgName}, ${user.email}) запросил вывод суммы ${sum} р.
      </p>
      <p style='color:#d76363'>${warning}</p>
      `,
    });
    this.logger.log(info);
  }
  public async sendTicket({ email, uuid, topic, text }): Promise<void> {
    let id;
    let user: User;
    if (uuid) {
      user = await this.usersService.findByUuid(uuid);
      id = `№ ${uuid} (${user.orgName}, ${user.email})`;
    } else {
      id = email;
    }
    const info = await this.transporter.sendMail({
      from: this.configService.get('SMTP_SENDER'),
      to: this.configService.get('SUPPORT_EMAIL'),
      subject: 'Запрос с платформы: ' + topic,
      html:
        text +
        `
      <p>
      Идентификатор отправителя: ${id}
      </p>
      `,
    });
    this.logger.log(info);
  }
  public async sendAccountCreated(email): Promise<void> {
    const info = await this.transporter.sendMail({
      from: this.configService.get('SMTP_SENDER'),
      to: [this.configService.get('SUPPORT_EMAIL')],
      subject: `Запрос на идентификацию ${email}`,
      html: `
      <p>
      Пользователь с email ${email} отправил запрос на идентификацию
      </p>
      `,
    });
    this.logger.log(info);
  }
  public async sendStatusChanged(user, status, declineReason): Promise<void> {
    let html;
    switch (status) {
      case UserStatus.DECLINED:
        html = `<p>
          Уважаемый клиент! Для прохождения идентификации недостаточно информации.
        </p><p>
          ${declineReason}
        </p>`;
        break;
      case UserStatus.IDENTIFIED:
        html = `<p>
          Уважаемый клиент! Благодарим Вас за предоставление документов, идентификация успешно пройдена.
        </p>`;
        break;
      case UserStatus.CLIENT:
        html = `<p>
          Уважаемый клиент! Ваша компания принята Удмуртской платформой по
          привлечению инвестиций на обслуживание.
        </p>`;
        break;
    }
    const info = await this.transporter.sendMail({
      from: this.configService.get('SMTP_SENDER'),
      to: user.email,
      subject: `Уведомление с платформы Удалтон`,
      html,
    });
    this.logger.log(info);
  }
  public async sendMessage(topic, text, user): Promise<void> {
    const info = await this.transporter.sendMail({
      from: this.configService.get('SMTP_SENDER'),
      to: user.email,
      subject: 'Уведомление с платформы Удалтон: ' + topic,
      html:
        text +
        `
      <p>
      С уважением, команда Удалтон инвестиции
      </p>
      `,
    });
    this.logger.log(info);
  }
}
