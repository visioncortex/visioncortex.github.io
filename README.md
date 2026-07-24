<div align="center">

  <img src="public/visioncortex-banner.png"/>
  <h1>Vision Cortex Research Lab</h1>

  <p>
    <strong>The official website of Vision Cortex</strong>
  </p>

</div>

### Stack

- Vite
- React
- Tailwind CSS
- MDX for preserved research articles

### Development

`npm run dev` starts a local development server at http://localhost:3000/.

### Build

`npm run build` generates the static site in `dist/`.

The build also writes route entry files for the legacy article URLs:

- `/symcode-docs/`
- `/impression-docs/`
- `/vtracer-docs/`
- `/shape-sense-docs/`
- `/reversi-docs/`

### Publish

Publishing is handled by GitHub Actions in `.github/workflows/deploy.yml`.
The workflow builds the site and deploys the `dist/` artifact to GitHub Pages.
