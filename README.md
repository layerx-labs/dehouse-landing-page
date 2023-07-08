## 📣 Introduction

This project is a proposal to the [_DeHouse Website + CMS_ bounty on Bepro Network](https://app.bepro.network/bepro/polygon/bounty?id=15&repoId=17) website where the goal is to create a dynamic and user-friendly website with a simple content management system (CMS) to manage multiple co-working space locations and community events, and based on a specific [design](https://www.figma.com/file/T0hql5KJwMuuctHK5PGx5K/DeHouse?node-id=15%3A9&t=OFA80fTem3tHibIo-1).

## 🚀 Quick start

First, we need to setup the environment and install the dependencies (like Apollo and Keystone):

```bash
# .env
NEXT_PUBLIC_APP_URL='http://localhost:3000'
ASSET_BASE_URL='http://localhost:3000'
KEYSTONE_PORT=5000
SESSION_SECRET=12345678901234567890123456789012
SESSION_MAX_AGE=2592000
KEYSTONE_API_URL='http://localhost:5000/api/graphql'
DATABASE_URL=postgresql://***
AVAILABILITY_FORM_URL='https://dehouse-form-url.com'
```

```bash
npm install
```

And then we only need to fire up the project:

```bash
npx keystone dev # to fireup the CMS powered by Keystone
npm run dev # to fireup the website
```

Now you can access the app through these links:

- Apollo Server: http://localhost:5000/api/graphql
- Keystone CMS: http://localhost:5000
- Frontend: http://localhost:3000

⚠️ Remember to add some events, locations, and testimonials on CMS first.

## 📂 App structure

```
.
├── app
│   ├── components
|   │   ├── ...
|   │   ├── ui
|   │   │   ├── button-link
|   │   │   ├── icons
|   │   │   ├── panel
|   │   │   ├── section
│   ├── global.css
│   ├── layout.tsx
│   └── page.tsx
├── graphql
│   ├── queries.ts
├── lib
│   └── client.ts
├── public
│   └── ...
├── utils
│   └── brands.tsx
├── auth.ts
├── keystone.ts
├── next.config.js
├── package.json
├── schema.graphql
├── schema.prisma
├── schema.ts
└── tsconfig.json
```

## 💅 Styling

The project is made with CSS Modules and support design tokens through the `app/globals.css` file divided into multiple sections, like:

- Colors
- Layout
- Misc
- Typography
- Buttons
- Nav
- Panels
- Benefits
- Testimonials
- Footer

The project is ready to support multiple themes, like _light_ and _dark_ modes, through the design tokens and easily created with this code:

```html
<!-- app/layout.tsx -->
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
```

```css
/* app/globals.css */
@media (prefers-color-scheme: light) {
  :root {
    --white: #ffffff;
    --black: #000000;
    --grey50: #f1f1f3;
    ...
  }
}
```

## 📦 Database

![CleanShot 2023-07-08 at 16 18 48@2x](https://github.com/ickas/dehouse-landing/assets/2805206/53082de2-21f2-4fe6-8f6a-504558bda3be)

The database has three tables:

1. Users → users that have access to the CMS
2. Events → events that appear on the agenda section (image, ane, date, description, website, and option to show or not on the landing page)
3. Locations → spaces that appear on the locations section (image, name, address, description, amenities)
4. Testimonials → messages from clients and partners (avatar, name, message, Twitter, and an option to show or not on the landing page)
