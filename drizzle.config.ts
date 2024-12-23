import { type Config } from "drizzle-kit";

import { env } from "@/env";

export default {
    out: './drizzle',
    schema: [
        "./src/server/db/schemas/",
    ],
    dialect: "postgresql",
    dbCredentials: {
        url: env.DATABASE_URL,
    },
    tablesFilter: ["webapp_*"],
} satisfies Config;