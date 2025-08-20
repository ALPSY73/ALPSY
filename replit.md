# Overview

This is a full-stack web application for a psychology practice website built with React and Express. The application serves as a professional website for psychologist Sébastien Stuhec, featuring sections for services, testimonials, contact information, and practice details. The frontend is built with React, TypeScript, and modern UI components, while the backend uses Express.js with PostgreSQL database integration through Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **UI Components**: Comprehensive set of Radix UI primitives wrapped in custom components
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build System**: Vite with custom configuration for development and production builds

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Structure**: RESTful API with `/api` prefix for all endpoints
- **Middleware**: Custom logging middleware for request tracking and error handling
- **Development Server**: Integrated Vite development server for hot module replacement
- **Session Storage**: In-memory storage with interface for future database integration

## Data Storage
- **Database**: PostgreSQL configured through Drizzle ORM
- **ORM**: Drizzle with schema-first approach and Zod validation
- **Schema**: User management with username/password fields
- **Migrations**: Drizzle Kit for database schema management
- **Connection**: Neon serverless PostgreSQL database connection

## Authentication & Authorization
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Session Management**: PostgreSQL session store with connect-pg-simple
- **User Schema**: Basic user model with UUID primary keys and unique usernames

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe database queries and schema management

## UI & Styling
- **Radix UI**: Unstyled, accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Pre-built component library based on Radix UI
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking
- **TanStack React Query**: Server state management and caching
- **Wouter**: Lightweight routing solution

## Asset Management
- **Static Assets**: Images and media files stored in attached_assets directory
- **Font Integration**: Google Fonts for typography (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)

## Development Environment
- **Replit Integration**: Custom plugins for development environment integration
- **Error Handling**: Runtime error overlay for development debugging
- **Hot Reload**: Vite HMR integration for development efficiency