# Divider

**Purpose**: The Divider component is used to visually separate content sections on a page, enhancing readability and organization.

### Installation

To install the Divider component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add divider`
*   **pnpm**: `pnpm add @heroui/divider`
*   **npm**: `npm install @heroui/divider`
*   **yarn**: `yarn add @heroui/divider`
*   **bun**: `bun add @heroui/divider`

### Import

**Individual Import**:
```javascript
import { Divider } from "@heroui/divider";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Divider } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Employ the Divider component to create clear visual distinctions between different content blocks, improving the layout and user experience.
2.  **Orientation**: The `orientation` prop determines whether the divider is `horizontal` (default) or `vertical`. Choose the orientation that best suits the layout and content flow.
3.  **Content Inclusion**: The Divider can be used with or without content. When content is provided, it will be rendered within the divider, often used for labels or icons.
4.  **Accessibility**: The component automatically adds a `separator` role for assistive technologies, ensuring it is properly announced. It supports both horizontal and vertical orientations and can be rendered as an HTML `<hr>` element or a custom element type for flexibility.
5.  **Data Attributes**: The `data-orientation` attribute is available on the `base` element, providing a clear indication of the divider's orientation for styling or scripting purposes.