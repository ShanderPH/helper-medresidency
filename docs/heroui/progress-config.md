# Progress

**Purpose**: The Progress component allows you to view the progress of any activity.

### Installation

To install the Progress component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add progress`
*   **pnpm**: `pnpm add @heroui/progress`
*   **npm**: `npm install @heroui/progress`
*   **yarn**: `yarn add @heroui/progress`
*   **bun**: `bun add @heroui/progress`

### Import

**Individual Import**:
```javascript
import { Progress } from "@heroui/progress";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Progress } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `Progress` to visually represent the progress of any activity, providing immediate feedback to the user.
2.  **Accessibility**: Ensure an `aria-label` is provided if the `label` prop is not used, to make the component accessible to screen readers.
3.  **Size Control**: Control the size of the progress bar using the `size` prop.
4.  **Color Schemes**: Apply different color schemes with the `color` prop to match the application's theme or indicate status (e.g., success, warning, danger).
5.  **Indeterminate State**: Use `isIndeterminate` to display an indeterminate progress bar when the duration of an operation is unknown.
6.  **Striped Style**: Apply a striped visual style using the `isStriped` prop for a distinct appearance.
7.  **Labeling**: Provide a descriptive label using the `label` prop. If `label` is provided, an `aria-label` is not strictly necessary as the label serves the same purpose.
8.  **Value Display**: Display the current progress value using the `value` prop for determinate progress indicators.
9.  **Value Formatting**: Customize the display format of the value using `formatOptions`, which is compatible with `Intl.NumberFormat` for internationalized number formatting.
10. **Custom Styling**: Customize various slots (`base`, `labelWrapper`, `label`, `value`, `track`, `indicator`) using `classNames` for fine-grained visual control.
11. **Data Attributes**: The `base` element includes `data-indeterminate` and `data-disabled` attributes, which can be used for styling and state management.
12. **Accessibility**: The component is exposed to assistive technology as a progress bar via ARIA attributes. It supports labeling, internationalized number formatting, and both determinate and indeterminate progress. It exposes `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and `aria-valuetext` attributes to convey the current progress to assistive technologies.