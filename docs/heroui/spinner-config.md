# Spinner

**Purpose**: The Spinner component expresses an unspecified wait time or displays the length of a process.

### Installation

To install the Spinner component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add spinner`
*   **pnpm**: `pnpm add @heroui/spinner`
*   **npm**: `npm install @heroui/spinner`
*   **yarn**: `yarn add @heroui/spinner`
*   **bun**: `bun add @heroui/spinner`

### Import

**Individual Import**:
```javascript
import { Spinner } from "@heroui/spinner";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Spinner } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `Spinner` to visually indicate an ongoing process or an unspecified waiting time, providing feedback to the user.
2.  **Accessibility**: By default, `Spinner` adds `Loading` as `aria-label`. This is crucial for accessibility. Customize it using the `label` or `aria-label` prop to provide more specific context.
3.  **Size Control**: Control the size of the spinner using the `size` prop.
4.  **Color Schemes**: Apply different color schemes with the `color` prop to match the application's theme or convey status.
5.  **Labeling**: Display a text label alongside the spinner using the `label` prop to provide additional context.
6.  **Label Colors**: Customize the color of the label using the `labelColor` prop.
7.  **Visual Variants**: Choose from various visual styles using the `variant` prop, such as `default`, `simple`, `gradient`, `spinner`, `wave`, or `dots`, to best suit the context.
8.  **Custom Styles**: Customize slots (`base`, `wrapper`, `circle1`, `circle2`, `dots`, `spinnerBars`, `label`) using `classNames` for fine-grained visual control.
9.  **Server Component**: The documentation indicates that `Spinner` can be used as a server component, which can be beneficial for performance in certain React environments.
10. **Accessibility**: Ensures that loading states are communicated effectively to all users, including those using assistive technologies, through ARIA attributes and customizable labels.