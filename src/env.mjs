import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
    server: {
        SMTP_HOST: z.string().min(1).optional(),
        SMTP_USER: z.string().min(1).optional(),
        SMTP_PASS: z.string().min(1).optional(),
        SMTP_EMAIL_ADDRESS: z.string().min(1).email().optional(),
    },
    client: {
        NEXT_PUBLIC_UMAMI_WEBSITE_ID: z.string().optional(),
        NEXT_PUBLIC_PAYLOAD_URI: z.string().url(),
    },
    experimental__runtimeEnv: {
        NEXT_PUBLIC_UMAMI_WEBSITE_ID: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
        NEXT_PUBLIC_PAYLOAD_URI: process.env.NEXT_PUBLIC_PAYLOAD_URI,
    },
    skipValidation: process.env.SKIP_ENV_VALIDATION,
});
