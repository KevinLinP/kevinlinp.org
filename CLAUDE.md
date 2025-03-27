# Claude Instructions

## Project Structure

- SvelteKit application (root directory) - active project
- Eleventy with Pug templates (/eleventy) - deprecated, kept for reference only

## Commands

- Development: `npm run dev` or `vite dev`
- Build: `npm run build` or `vite build`
- Format: `npm run format` or `prettier --write .`
- Lint: `npm run lint` or `prettier --check . && eslint .`
- Test (all): `npm run test` or `npm run test:unit -- --run`
- Test (single): `npm run test:unit -- --run src/path/to/file.test.js`

## Code Style

- Format: Use Prettier (tabs, single quotes, no trailing commas, 100 char width)
- Linting: ESLint with Svelte plugins
- Components: Svelte components with .svelte extension
- Tests: Vitest with Testing Library (files named _.test.js or _.spec.js)
- Templates: Pug templates in legacy Eleventy project
- Structure: Follow SvelteKit conventions for routes and components
- Types: Use JSDoc annotations for TypeScript checking
- Naming: camelCase for variables/functions, PascalCase for components
- Error handling: Prefer try/catch blocks with descriptive error messages
