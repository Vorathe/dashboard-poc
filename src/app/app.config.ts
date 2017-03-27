import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.config');

export interface IAppConfig {
  domain: String;
  appURI: Object;
}

export const AppConfig: IAppConfig = {
  domain: 'https://fipro2-dev.i.daimler.com',
  appURI: {
    dealers: '/fipro/gatewayService/dashboard/b2x/dashboardService/rest/dealers/getAllDealers',
    summary: '/fipro/gatewayService/dashboard/b2x/dashboardService/rest/dashboard/dashboardSummary',
    creditDetails: '/fipro/gatewayService/dashboard/b2x/dashboardService/rest/dashboard/detailedCreditApp',
    fundingDetails: '/fipro/gatewayService/dashboard/b2x/dashboardService/rest/dashboard/detailedFunding',
    login: '/fipro/gatewayService/dashboard/b2x/dashboardService/oauth/token',
    feedback: '/fipro/gatewayService/feedback/b2x/feedbackService/rest/feedback/saveFeedback'
  }
};
