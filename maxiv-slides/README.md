# MAX IV Slides

Slidev presentation for MAX IV application with Tailwind CSS matching the main CV design system.

## Getting Started

```bash
# Install dependencies (if not already done)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Export to PDF
npm run export
```

## Features

- ✨ Same design tokens as the main CV site
- 🎨 Tailwind CSS v4 with custom theme
- 📝 Markdown-based slides
- 🎯 Syntax highlighting
- 📱 Responsive design

## Customization

The design system variables are defined in `style.css` and match the main CV site:
- `--primary`, `--secondary`, `--accent` colors
- `--background`, `--foreground` for light/dark modes
- `--muted`, `--border` for UI elements

Use Tailwind utilities in your slides:
- `bg-primary`, `bg-secondary`, `bg-accent`
- `text-muted`
- Standard Tailwind classes: `flex`, `gap-4`, `rounded-lg`, etc.
