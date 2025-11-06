# Badge

**Purpose**: Badges are used to display small numerical values or status descriptors for UI elements, providing quick visual cues.

### Installation

To install the Badge component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add badge`
*   **pnpm**: `pnpm add @heroui/badge`
*   **npm**: `npm install @heroui/badge`
*   **yarn**: `yarn add @heroui/badge`
*   **bun**: `bun add @heroui/badge`

### Import

**Individual Import**:
```javascript
import { Badge } from "@heroui/badge";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Badge } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Size Control**: Adjust the size of the badge using the `size` prop to fit different contexts.
2.  **Color-Coded Status**: Apply different colors using the `color` prop to convey various meanings or statuses (e.g., `success` for positive, `danger` for critical).
3.  **Visual Variants**: Choose from different visual styles using the `variant` prop to match the application's aesthetic.
4.  **Placement**: Position the badge relative to its child element using the `placement` prop for optimal visual integration.
5.  **Shapes**: Define the shape of the badge (e.g., `circle`, `square`) using the `shape` prop for better visual alignment and context.
6.  **Visibility Control**: Control the badge's visibility with the `isInvisible` prop, allowing for dynamic display based on conditions.
7.  **Content**: Badges can display numerical values or short text (e.g., "new"). Keep content concise and relevant.
8.  **Outline Control**: Set `showOutline={false}` to remove the default outline if it conflicts with the design.
9.  **Accessibility**: Do not rely solely on badge content for accessibility. Always provide a comprehensive description using `aria-label` for screen readers to ensure all users understand the badge's purpose.
10. **Custom Styling**: The `Badge` component provides `base` (container) and `badge` (content) slots for custom styling using `classNames`.