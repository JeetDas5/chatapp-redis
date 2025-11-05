# Chat App Monorepo

This repository contains a full-stack chat application built with a modern monorepo structure. It leverages Next.js for the frontend, a custom Node.js server for backend logic, and shared packages for configuration and UI components.

## Project Structure

```
chat-app/
├── apps/
│   ├── docs/        # Documentation site (Next.js)
│   ├── server/      # Backend server (Node.js/TypeScript)
│   └── web/         # Main web app (Next.js)
├── packages/
│   ├── eslint-config/      # Shared ESLint config
│   ├── typescript-config/  # Shared TypeScript config
│   └── ui/                 # Shared UI components (React)
├── turbo.json      # Turborepo configuration
├── package.json    # Root dependencies and scripts
└── README.md       # Project overview
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
1. Clone the repository:
	 ```sh
	 git clone https://github.com/JeetDas5/chatapp-redis.git[https://github.com/JeetDas5/chatapp-redis.git]
	 cd chatapp-redis
	 ```
2. Install dependencies:
	 ```sh
	 npm install
	 # or
	 yarn install
	 ```

### Running the Apps
- **Web App**:
	```sh
	cd apps/web
	npm run dev
	```
- **Server**:
	```sh
	cd apps/server
	npm run dev
	```
- **Docs**:
	```sh
	cd apps/docs
	npm run dev
	```

### Monorepo Commands
- Build all apps/packages:
	```sh
	npm run build
	```
- Lint all apps/packages:
	```sh
	npm run lint
	```

## Features
- Real-time chat using WebSockets
- Modern UI with reusable components
- Shared configuration for TypeScript and ESLint
- Documentation site for onboarding and API reference

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a pull request

Made with ❤️ by Jeet Das