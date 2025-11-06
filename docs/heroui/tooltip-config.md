# Tooltip

**Purpose**: Tooltips display a brief, informative message that appears when a user interacts with an element.

### Installation

To install the Tooltip component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add tooltip`
*   **pnpm**: `pnpm add @heroui/tooltip`
*   **npm**: `npm install @heroui/tooltip`
*   **yarn**: `yarn add @heroui/tooltip`
*   **bun**: `bun add @heroui/tooltip`

### Import

**Individual Import**:
```javascript
import { Tooltip } from "@heroui/tooltip";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Tooltip } from â€˜@heroui/reactâ€™;
```

> For individual installation, please note that you should add `./node_modules/@heroui/theme/dist/components/popover.js` to your `tailwind.config.js` file instead since tooltip reuses popover styles.

### Usage Rules and Best Practices

1.  **Purpose**: Use `Tooltip` to display a brief, informative message that appears when a user interacts with an element (e.g., hovers over, focuses on), providing contextual help or information.
2.  **With Arrow**: Tooltips can be displayed with an arrow pointing to the trigger element, enhancing visual association.
3.  **Color Schemes**: Apply different color schemes with the `color` prop (e.g., `default`, `primary`, `secondary`, `success`, `warning`, `danger`, `foreground`) to match the application's theme or convey status.
4.  **Placements**: Control the tooltip's position relative to the trigger element using various `placement` options (e.g., `top-start`, `top`, `top-end`, `bottom-start`, `bottom`, `bottom-end`, `left-start`, `left`, `left-end`, `right-start`, `right`, `right-end`).
5.  **Offset**: Adjust the distance between the tooltip and its trigger using the `offset` prop.
6.  **Controlled State**: Manage the tooltip's open/closed state programmatically using `isOpen` and `onOpenChange` props.
7.  **Delay**: Control the `open` and `close` delay of the tooltip with `delay` and `closeDelay` props, respectively, to prevent premature or lingering tooltips.
8.  **Custom Content**: The tooltip content can be customized to include `ReactNode` elements, allowing for rich and dynamic messages.
9.  **Custom Motion**: `Tooltip` offers a `motionProps` property to customize the `enter` / `exit` animation, leveraging Framer Motion variants for dynamic transitions.
10. **Customizable Slots**: Customizable slots include `base` (main tooltip container) and `arrow` (for the tooltip arrow), allowing for detailed styling.
11. **Custom Styles**: Customize the `Tooltip` component by passing custom Tailwind CSS classes to the component slots.
12. **Data Attributes**: The `base` element includes `data-open` (when the tooltip is open), `data-placement` (the placement of the tooltip), and `data-disabled` (when the tooltip is disabled) attributes for styling and state management.
13. **Accessibility**: Provides keyboard focus management and cross-browser normalization. Supports hover management and cross-browser normalization. Offers labeling support for screen readers (aria-describedby). Exposed as a tooltip to assistive technology via ARIA. Matches native tooltip behavior with a delay on hover of the first tooltip and no delay on subsequent tooltips, ensuring a consistent and accessible user experience.