# Setup Guide - Running the CS Club Website Without Database

## Prerequisites

1. **Node.js** (version 20 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **pnpm** (package manager)
   - Install: `npm install -g pnpm`
   - Verify: `pnpm --version`

## Quick Start

### Step 1: Install Dependencies

```bash
pnpm install
```

### Step 2: Create Environment File

Create a `.env.local` file in the root directory with the following variables:

```env
# Skip environment validation (set to true during development)
SKIP_ENV_VALIDATION=true

# Server environment variables
REDIS_URI=redis://localhost:6379
SQUARE_ACCESS_TOKEN=your_square_token
SQUARE_LOCATION_ID=your_location_id

# Client environment variables
NEXT_PUBLIC_DRIVE_LINK=https://drive.google.com
NEXT_PUBLIC_PAYLOAD_URI=http://localhost:8000

# Optional - Authentication (requires Keycloak setup)
# AUTH_KEYCLOAK_ID=your_keycloak_id
# AUTH_KEYCLOAK_SECRET=your_keycloak_secret
# NEXT_PUBLIC_KEYCLOAK_REDIRECT_URI=http://localhost:3000
# NEXT_PUBLIC_AUTH_REALM=your_realm
# NEXT_PUBLIC_CONTAINER_KEYCLOAK_ENDPOINT=http://localhost:8080
# NEXT_PUBLIC_LOCAL_KEYCLOAK_URL=http://localhost:8080

# Optional - Email/SMTP (for sending emails)
# SMTP_HOST=smtp.gmail.com
# SMTP_USER=your_email@gmail.com
# SMTP_PASS=your_password
# SMTP_EMAIL_ADDRESS=your_email@gmail.com

# Optional - Discord integration
# DISCORD_TOKEN=your_discord_token
# NEXT_PUBLIC_DISCORD_REDIRECT_URI=http://localhost:3000/discord-oauth-callback
# NEXT_PUBLIC_DISCORD_CLIENT_ID=your_discord_client_id
# NEXT_PUBLIC_DISCORD_CLIENT_SECRET=your_discord_secret
```

**Note**: The only **required** variables are:
- `SKIP_ENV_VALIDATION=true` (to bypass validation during development)
- `REDIS_URI` (you'll need Redis running)
- `SQUARE_ACCESS_TOKEN` and `SQUARE_LOCATION_ID` (if using Square payments)
- `NEXT_PUBLIC_DRIVE_LINK` and `NEXT_PUBLIC_PAYLOAD_URI`

All others are optional for basic functionality.

### Step 3: Run Redis (if needed)

If you're using features that require Redis, you'll need to have Redis running:

**Option 1: Using Docker**
```bash
docker run -d -p 6379:6379 redis:latest
```

**Option 2: Install Redis locally**
- Windows: Use WSL or Docker
- Mac: `brew install redis && redis-server`
- Linux: `sudo apt-get install redis-server`

### Step 4: Run the Development Server

```bash
pnpm run dev
```

The site will be available at: **http://localhost:3000**

## Using Docker (Alternative Method)

If you prefer to use Docker with all services:

```bash
docker compose -f docker-compose-dev.yml up --build
```

This will start:
- The website on port 3000
- Redis on port 6379
- Keycloak on port 8080 (for authentication)

## What's Changed

Since the database has been removed:

✅ **No database setup needed** - skip `pnpm run db:push`
✅ **No database migrations** - no drizzle commands
✅ **Simplified authentication** - users can still sign in
✅ **Static content works** - events, gallery, about pages all functional

## Troubleshooting

### Port 3000 already in use
```bash
# Change the port in your .env.local
PORT=3001
```

### Redis connection errors
- Make sure Redis is running: `redis-cli ping`
- Or set a dummy Redis URI: `REDIS_URI=redis://localhost:6379`

### Environment validation errors
- Make sure `SKIP_ENV_VALIDATION=true` is set in `.env.local`

## Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint
- `pnpm run format` - Format code with Prettier

## Next Steps

1. Open http://localhost:3000 in your browser
2. Browse the site - home, about, events, gallery pages all work
3. Test authentication (if Keycloak is configured)
4. Customize the content as needed

Enjoy your database-free website! 🎉
