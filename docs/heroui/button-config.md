# Button

**Purpose**: Buttons allow users to perform actions and make choices with a single tap.

### Installation

To install the Button component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add button`
*   **pnpm**: `pnpm add @heroui/button`
*   **npm**: `npm install @heroui/button`
*   **yarn**: `yarn add @heroui/button`
*   **bun**: `bun add @heroui/button`

### Import

HeroUI exports two button-related components:

*   **Button**: The main component for displaying a button.
*   **ButtonGroup**: A wrapper component for displaying a group of buttons.

**Individual Import**:
```javascript
import { Button, ButtonGroup } from "@heroui/button";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Button, ButtonGroup } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use Buttons to enable users to perform actions or make selections with a single interaction.
2.  **Disabled State**: Use the `isDisabled` prop to prevent user interaction with the button.
3.  **Size Control**: Adjust the button's size using the `size` prop (e.g., `sm`, `md`, `lg`).
4.  **Radius Customization**: Modify the border-radius using the `radius` prop (e.g., `none`, `sm`, `md`, `lg`, `full`).
5.  **Color Schemes**: Apply different color schemes with the `color` prop (e.g., `default`, `primary`, `secondary`, `success`, `warning`, `danger`) to indicate importance or status.
6.  **Visual Variants**: Choose from various visual styles using the `variant` prop (e.g., `solid`, `faded`, `bordered`, `light`, `flat`, `ghost`, `shadow`) to match design requirements.
7.  **Loading State**: Use the `isLoading` prop to display a `Spinner` component inside the button, indicating an ongoing action. The spinner can be customized via the `spinner` prop.
8.  **Icons**: Enhance buttons with `startContent` or `endContent` props to include icons.
9.  **Icon-Only Buttons**: For buttons without text, use the `isIconOnly` prop and pass the icon as `children`.
10. **Custom Styling**: Customize button appearance by passing custom Tailwind CSS classes to component slots. Tailwind Merge ensures no class conflicts.
11. **Advanced Customization**: For highly specific implementations, use the `useButton` hook.
12. **ButtonGroup**: Use `<ButtonGroup>` to logically group related buttons. It supports `isDisabled` to disable all contained buttons simultaneously.
13. **Accessibility**: Buttons are semantically rendered with a `role="button"` to ensure proper accessibility for assistive technologies.