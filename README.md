# Exhibition Template

This is a template repository for exhibitions using [Nextra](https://nextra.site), [Next.js](https://nextjs.org) and [React](https://react.dev).

You can use this template to create your own exhibition website.

Read the [Getting Started Guide](https://uib-ub.github.io/exhibition-template/documentation) for more information or jump right in and [create your own exhibition website](https://github.com/new?template_name=exhibition-template&template_owner=uib-ub).

## Tech Stack

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). [Nextra](https://nextra.site) is used for markdown-based pages.

- [Next.js](https://nextjs.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Shadcn UI](https://ui.shadcn.com)
- [Nextra](https://nextra.site)

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploying

The exhibition can deployed to GitHub Pages using the configuration in `.github/workflows/build.yaml`. If you decide to deploy to [Vercel](https://vercel.com) or another host you can ignore og delete the `.github/workflows/build.yaml` folder.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Nextra](https://nextra.site/) - documentation for Nextra.

## Components

Components are stored in the `src/components` folder. Using Shadcn UI components as base is recommended. These are stored in the `src/components/ui` folder. Add new components from using the Shadcn CLI.

```bash
npx shadcn@latest add <component>
```

### Developing UI with AI

You can use AI to develop UI components. Try [v0.dev](https.//v0.dev)! Describe the components you want and let _v0_ create it for you. 

### Work component using Clover-IIIF workaround

NB! `clover-iiif` is pegged to `2.12.0` as later versions are not compatible with the latest version of `next.js`. it is also necessary  to override the version of `react` and `react-dom` to `19.0.0` in the `package.json` file. As well as `openseadragon` to `5.0.1`. See [this issue](https://github.com/samvera-labs/clover-iiif/issues/291) for more information.

```json
"overrides": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "openseadragon": "^5.0.1"
  }
```

## Sitemap

The sitemap is generated using the `sitemap.ts` file and serves a `/sitemap.xml` route. It does not work in dev using Turbopack. In production it works, `npm run build && npm run start`, and using `npm run dev:webpack` works. See [this issue](https://github.com/shuding/nextra/issues/4274) for Nextra implementation details.

The domain must be changed to production domain in the `sitemap.ts` file.

Checking the sitemaps in the browser:

```bash
npm run dev:webpack
curl -s http://localhost:3000/sitemap.xml | xmllint --format -
```