# CS Club Website

This is the official repository for the University of Adelaide Computer Science Club (CS Club) website. It is built using [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/).

## Getting Started

### Prerequisites

- Node.js 20 or higher
- pnpm package manager

### Quick Start

1. **Install dependencies**
```bash
pnpm install
```

2. **Create `.env.local` file** (minimal setup):
```env
SKIP_ENV_VALIDATION=true
REDIS_URI=redis://localhost:6379
SQUARE_ACCESS_TOKEN=dummy
SQUARE_LOCATION_ID=dummy
NEXT_PUBLIC_DRIVE_LINK=https://drive.google.com
NEXT_PUBLIC_PAYLOAD_URI=http://localhost:8000
```

3. **Run the development server**
```bash
pnpm run dev
```

4. **Open your browser**
Visit [http://localhost:3000](http://localhost:3000) to see the result.

### Using Docker (Optional)

For a full setup with Redis and Keycloak:
```bash
docker compose -f docker-compose-dev.yml up --build
```

For detailed setup instructions, see [SETUP_GUIDE.md](SETUP_GUIDE.md).

## Contributing

We welcome contributions to enhance the CS Club Website! If you find any issues, have suggestions, or want to request a feature, please follow our [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License.
See [LICENSE](LICENSE) for details.
