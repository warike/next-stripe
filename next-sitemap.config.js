import {env} from "./src/env.js";

/** @type {import('next-sitemap').IConfig} */

export default  {
    siteUrl: env.NEXT_PUBLIC_APP_URL  || '',
    generateRobotsTxt: true,
}