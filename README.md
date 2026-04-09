## Getting Started

## Tech Stack

- **React + TypeScript**
- **Vite**
- **Vitest + React Testing Library**
- **Storybook** - Build UI components and pages in isolation
- **SCSS Modules**

```bash
npm install
```

## Scripts

| Command             | Description                   |
| ------------------- | ----------------------------- |
| `npm run dev`       | Start the Vite dev server     |
| `npm run test`      | Run tests with Vitest         |
| `npm run storybook` | Launch Storybook on port 6006 |


## App preview:

https://github.com/user-attachments/assets/2fbf4039-dfe1-4176-8ef7-ee3bb71715d1

## StoryBook preview:

https://github.com/user-attachments/assets/da88ec2a-9b48-4b1d-b9e3-88341c538507

## Accordion Component

The `Accordion` component manages its own state and supports both single
and multi-expand modes. Each accordion item can also be set
open on initial render by passing `open: true` on the item.

## Future improvements:

* UI : Update the UI to have a more modern look and Feel. This would would be just cosmetics. Also have added multiple varients of the component, which could be toggled on StoryBook. 

* Performance : The automatic docs generation isn't wired up yet due to a missing configuration in Storybook. Getting this working would mean consumers could read usage docs without ever opening the source code.

* Design tokens : Moving colors, spacing, and typography into a shared tokens file would make the library themeable and ready for brand usage

* Folder structure : `AccordionItem` would move into its own subfolder, and a `components/common` directory would house shared components like `Text` and `Icon` as the library grows

* Accessibility UI : Current styling is minimal, final component would need to go further, sufficient colors across all states (default, hover, focus, disabled), and visible focus ring that meets regulations.

