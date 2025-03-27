# kevinlinp.org Development Guide

## Build Commands
- `npm run dev` - Start development server with hot reloading
- `npm run build` - Build production files 
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code

## Project Overview
This is a personal website/resume project using:
- SvelteKit for the framework
- Svelte 5 with runes for reactivity
- Vite for bundling
- Cloudflare Pages for deployment

## Code Style Guidelines
- **Formatting**: Follow 2-space indentation for all files
- **Naming**: Use kebab-case for filenames, camelCase for JavaScript variables
- **Components**: Place reusable Svelte components in $lib/components
- **CSS**: Use Svelte's scoped styles with semantic class names
- **JavaScript**: Prefer modern ES6+ features and Svelte reactivity primitives
- **Error Handling**: Use try/catch blocks for async operations

## File Structure
- `/src/routes` - Pages and routes (SvelteKit file-based routing)
- `/src/lib` - Library code (components, utilities, data)
- `/src/lib/components` - Reusable Svelte components
- `/src/styles` - Global styles
- `/static` - Static assets that get copied to the build (favicon, etc.)

## Best Practices
- Use $lib alias for imports from the lib directory
- Utilize Svelte's reactive declarations and stores for state management
- Static site generation is enabled, avoid unnecessary client-side code
- Keep components small and focused on a single responsibility