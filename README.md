# ModelHitch showcase

A responsive React + Vite landing page for ModelHitch. Includes provider filters, an illustrative routing diagram, installation tabs, clipboard controls, native SDK links, and agent integration guides.

## Development

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Deploy the generated `dist/` directory to a static host. No server, environment variables, or AI credentials are needed for the showcase.

## Content

Edit `src/main.jsx` for copy, providers, commands, and package URLs. Edit `src/style.css` for the visual design. The displayed routing is an illustration; this page does not make inference requests.

Capabilities were checked against the ModelHitch repository and installed CLI v2.3.1 on September 30, 2026. SDK capabilities vary; TypeScript core and bridge features should not be assumed to exist in every native SDK.

Google Fonts supplies DM Sans and Space Grotesk; system sans-serif is the fallback. Icons come from Lucide.
