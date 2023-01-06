export enum OfferStatus {
  DRAFT = 'Подготовка',
  APPROVAL = 'На рассмотрении',
  RETURNED = 'Доработка',
  PUBLISHED = 'Опубликовано',
  FULFILLED_MIN = 'Минимальная сумма собрана',
  FULFILLED_MAX = 'Максимальная сумма собрана',
  REVOKED_SYSTEM = 'Отозвано по требованию платформы',
  REVOKED_LENDER = 'Отозвано по инициативе заемщика',
  REVOKED_TIME = 'Истек срок предложения',
  AGREEMENT = 'Договор инвестирования заключен',
  COMPLETED = 'Средства перечислены заемщику',
  ARCHIVED = 'Средства возвращены инвестору',
}
