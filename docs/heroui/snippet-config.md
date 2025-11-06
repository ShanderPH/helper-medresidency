# Snippet

**Purpose**: The Snippet component can be used to display inline or multiline code snippets.

### Installation

To install the Snippet component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add snippet`
*   **pnpm**: `pnpm add @heroui/snippet`
*   **npm**: `npm install @heroui/snippet`
*   **yarn**: `yarn add @heroui/snippet`
*   **bun**: `bun add @heroui/snippet`

### Import

**Individual Import**:
```javascript
import { Snippet } from "@heroui/snippet";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Snippet } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `Snippet` to clearly present code fragments, whether they are inline within text or span multiple lines.
2.  **Size Control**: Control the size of the snippet using the `size` prop.
3.  **Color Schemes**: Apply different color schemes with the `color` prop to match the application's theme.
4.  **Visual Variants**: Customize the visual style using the `variant` prop.
5.  **Custom Symbol**: Customize the symbol displayed before the code using the `symbol` prop.
6.  **Hide Copy Button**: Hide the copy button by setting `hideCopyButton` to `true` if copy functionality is not desired.
7.  **Custom Tooltip**: Customize the tooltip for the copy button using `tooltipProps`.
8.  **Multiline Support**: The component inherently supports multiline code snippets, making it suitable for displaying longer code blocks.
9.  **Custom Icons**: Customize the copy and copied icons using `copyIcon` and `checkIcon` props for a personalized look.
10. **Custom Styles**: Customize slots (`base`, `content`, `pre`, `symbol`, `copyButton`, `copyIcon`, `checkIcon`) using `classNames` for fine-grained visual control.
11. **Accessibility**: Provides a clear and accessible way to display code snippets, with built-in copy functionality for user convenience.