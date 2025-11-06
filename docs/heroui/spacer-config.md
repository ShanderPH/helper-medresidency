# Spacer

**Purpose**: The Spacer component is used to add space between components, facilitating layout and visual separation.

### Installation

To install the Spacer component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add spacer`
*   **pnpm**: `pnpm add @heroui/spacer`
*   **npm**: `npm install @heroui/spacer`
*   **yarn**: `yarn add @heroui/spacer`
*   **bun**: `bun add @heroui/spacer`

### Import

**Individual Import**:
```javascript
import { Spacer } from "@heroui/spacer";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Spacer } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `Spacer` to add customizable empty space between components, facilitating clear layout and visual separation within your UI.
2.  **Horizontal Spacing**: Use the `x` prop to define horizontal space. Values are based on the Tailwind Spacing Scale.
3.  **Vertical Spacing**: Use the `y` prop to define vertical space. Values are based on the Tailwind Spacing Scale.
4.  **Default Spacing**: If neither `x` nor `y` is specified, both default to `"1"` (which corresponds to 0.25rem or 4px in Tailwind's default scale), providing a minimal separation.
5.  **Custom Styles**: While not explicitly detailed in the provided documentation, like other HeroUI components, `Spacer` likely supports `classNames` for custom styling of its base element, allowing for tailored visual adjustments.
6.  **Server Component**: The documentation indicates that `Spacer` can be used as a server component, which can be beneficial for performance in certain React environments.
7.  **Accessibility**: By providing clear visual hierarchy and readability through proper spacing, `Spacer` indirectly benefits users of assistive technologies by making content easier to parse and understand.