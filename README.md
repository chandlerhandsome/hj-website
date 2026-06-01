# HJ Fence Website

Static English corporate website for HJ Fence, ready for GitHub and Vercel deployment.

## Pages

- `index.html` - Home
- `products.html` - Products
- `solutions.html` - Solutions
- `factory.html` - Factory & Quality
- `contact.html` - Contact

## Local Preview

```bash
npm run dev
```

Then open:

```text
http://localhost:4173
```

## Build

```bash
npm run build
```

The deployable files will be generated in `dist/`.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Vercel will use `vercel.json` automatically:
   - Build Command: `npm run build`
   - Output Directory: `dist`

No framework preset is required.
