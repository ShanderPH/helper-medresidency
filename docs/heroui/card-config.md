# Card

**Purpose**: The Card component serves as a flexible container for text, photos, and actions, all related to a single subject.

### Installation

To install the Card component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add card`
*   **pnpm**: `pnpm add @heroui/card`
*   **npm**: `npm install @heroui/card`
*   **yarn**: `yarn add @heroui/card`
*   **bun**: `bun add @heroui/card`

### Import

HeroUI exports four card-related components:

*   **Card**: The main component for displaying a card.
*   **CardHeader**: Typically used for the title or heading of a card.
*   **CardBody**: Contains the primary content of the card.
*   **CardFooter**: Commonly used for actions or supplementary information at the bottom of the card.

**Individual Import**:
```javascript
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Card, CardHeader, CardBody, CardFooter } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Structure**: Organize card content using `<CardHeader>` for titles, `<CardBody>` for the main content, and `<CardFooter>` for actions or additional information.
2.  **Visual Separation**: Combine with the `Divider` component for clear visual separation between sections within the card.
3.  **Image Integration**: Integrate `Image` components for visual content. Use `isFooterBlurred` on the `Card` to apply a blur effect to the footer when it overlays an image.
4.  **Composition**: Cards are designed to be highly composable, allowing integration with other HeroUI components to create complex and rich layouts.
5.  **Blurred Effect**: Apply `isBlurred` to the `Card` for a blurred background effect. Ensure an appropriate background is provided to an ancestor element for this effect to be visible.
6.  **Pressable Cards**: Set `isPressable` to `true` to make the entire card interactive, behaving like a button. Use the `onPress` callback to handle interactions.
7.  **Cover Images**: To use an image as a cover for the card, place the `Image` component outside the `<CardBody>`.
8.  **Custom Styling**: Customize card elements (`base`, `header`, `body`, `footer`) using the `classNames` prop for tailored visual designs.
9.  **Accessibility**: Cards include `data-hover`, `data-focus`, `data-focus-visible`, `data-disabled`, and `data-pressed` attributes to ensure accessibility, especially when they are interactive elements.