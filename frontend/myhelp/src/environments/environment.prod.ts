export const environment = {
  api: 'http://localhost:8080/api',
  production: true
};

export const paths = {
  getAllHelpOffers: '/help-offer',
  getAllHelpOffersByExecutionUser: '/help-offer/execution-user',
  getAllHelpOffersReservedByExecutionUser: '/help-offer/reserved-by-user',
  countAllHelpOffers: '/help-offer/count',
  countAllHelpOffersByExecutionUser: '/help-offer/count/execution-user',
  countAllHelpOffersReservedByExecutionUser: '/help-offer/count/reserved-by-user',
  signUp: '/auth/signup',
  login: '/auth/signin',
  createHelpOffer: '/help-offer',
  reserveHelpOffer: '/help-offer/reserve'
}
