# kevinlinp.org Development Guide

## Build Commands
- `npm start` - Start development server with hot reloading
- `npm run build` - Build production files to dist/

## Project Overview
This is a personal website/resume project using:
- Parcel for bundling
- Pug for templating
- JSON Schema for resume data validation

## Code Style Guidelines
- **Formatting**: Follow 2-space indentation for all files
- **Naming**: Use kebab-case for filenames, camelCase for JavaScript variables
- **Templates**: Organize reusable Pug components in _includes directory
- **CSS**: Use semantic class names, follow BEM methodology where appropriate
- **JavaScript**: Prefer modern ES6+ features, avoid jQuery where possible
- **Error Handling**: Use appropriate try/catch blocks for async operations

## File Structure
- `/src` - Source files (Pug templates, CSS, JavaScript)
- `/dev` - Development resources (schemas, snippets)
- `/dist` - Build output (don't edit directly)

## Best Practices
- Keep template logic simple, extract complex logic to JavaScript
- Ensure responsive design works on all device sizes
- Run build before committing changes to ensure everything compiles correctly