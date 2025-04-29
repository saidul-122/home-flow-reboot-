
# TaskMaster - Personal Task Management Application

## Overview

TaskMaster is a comprehensive task management application that helps you organize your personal and professional life. With a clean, intuitive interface and powerful features, TaskMaster makes task management simple and efficient.

## Features

- **User Authentication**: Secure login and signup system
- **Dashboard**: Personalized dashboard showing your tasks and progress
- **Task Management**: Create, edit, delete, and organize tasks
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface built with React and Tailwind CSS

## Tech Stack

This project is built with modern web technologies:

- **Frontend**:
  - React 18
  - TypeScript
  - Tailwind CSS
  - shadcn/ui components
  - React Router for navigation
  - TanStack React Query for data fetching

- **Tools & Libraries**:
  - Vite for fast development and building
  - Recharts for data visualization
  - Lucide React for icons
  - React Hook Form for form handling
  - Zod for validation

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```sh
git clone <repository-url>
```

2. Navigate to the project directory:
```sh
cd taskmaster
```

3. Install dependencies:
```sh
npm install
# or
yarn install
```

4. Start the development server:
```sh
npm run dev
# or
yarn dev
```

5. Open your browser and visit `http://localhost:8080` to see the application.

## Project Structure

```
src/
├── components/        # Reusable UI components
├── contexts/          # React context providers
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and helpers
├── pages/             # Page components
└── main.tsx           # Application entry point
```

## Deployment

This project can be deployed on any static hosting service. For the easiest deployment experience, use the built-in Lovable publishing feature:

1. Click on "Publish" in the Lovable interface
2. Follow the prompts to deploy your application
3. Your application will be available at the provided URL

## Custom Domain Setup

To connect a custom domain to your application:

1. Navigate to Project > Settings > Domains in Lovable
2. Click "Connect Domain"
3. Follow the instructions to set up DNS records
4. Wait for DNS propagation (usually 24-48 hours)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons by [Lucide](https://lucide.dev)
