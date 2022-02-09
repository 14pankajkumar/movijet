namespace NodeJS {
    interface ProcessEnv extends NodeJS.ProcessEnv {
        EMAIL_SERVER: string
        EMAIL_FROM: string
        APPLE_ID: string
        APPLE_TEAM_ID: string
        APPLE_PRIVATE_KEY: string
        APPLE_KEY_ID: string
        AUTH0_ID: string
        AUTH0_SECRET: string
        AUTH0_DOMAIN: string
        FACEBOOK_ID: string
        FACEBOOK_SECRET: string
        GITHUB_ID: string
        GITHUB_SECRET: string
        GOOGLE_CLIENT_ID: string
        GOOGLE_CLIENT_SECRET: string
        TWITTER_ID: string
        TWITTER_SECRET: string
        DATABASE_URL: string
        SECRET: string
        NEXT_PUBLIC_GRAPH_API_KEY: string
        GRAPH_AUTH_KEY: string
        API_KEY: string
        BASE_URL: string
        NEXT_PUBLIC_USER_AVATAR_URL: string
        NEXT_PUBLIC_IMAGE_BASE_URL: string
        NEXT_PUBLIC_GA_KEY: string
        NEXT_PUBLIC_SITE_URL: string
    }
}