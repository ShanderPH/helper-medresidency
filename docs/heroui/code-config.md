# Code

**Purpose**: The Code component is used to display inline code snippets within text.

### Installation

To install the Code component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add code`
*   **pnpm**: `pnpm add @heroui/code`
*   **npm**: `npm install @heroui/code`
*   **yarn**: `yarn add @heroui/code`
*   **bun**: `bun add @heroui/code`

### Import

**Individual Import**:
```javascript
import { Code } from "@heroui/code";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Code } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use the `Code` component specifically for displaying inline code snippets to differentiate them from regular text.
2.  **Size Control**: Control the size of the code snippet using the `size` prop (e.g., `sm`, `md`, `lg`).
3.  **Color Schemes**: Apply different color schemes with the `color` prop (e.g., `default`, `primary`, `secondary`, `success`, `warning`, `danger`) to match the application's theme.
4.  **Radius Customization**: Adjust the border-radius using the `radius` prop (e.g., `none`, `sm`, `md`, `lg`, `full`) for visual styling.
5.  **Content**: The actual code to be displayed should be passed as children to the `Code` component.
6.  **Accessibility**: Ensure that the code content is readable and understandable. For complex code or when the code is part of an image, consider providing alternative text or descriptions to aid accessibility.