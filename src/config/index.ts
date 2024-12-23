import { env } from '@/env';

export const siteConfig = {
    siteName: 'Warike',
    siteUrl: env.NEXT_PUBLIC_APP_URL,
    siteDescription: 'Unlock your Business potential',
    companyName: 'Warike UG',
}

export function isDev(){
   return  env.NODE_ENV !== "production" ? true : false
}

export const DASHBOARD_DATE_FORMAT = "DD/MM/YYYY";