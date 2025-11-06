# Circular Progress

**Purpose**: Circular progress indicators are used to signify an undetermined waiting period or to visually represent the duration of a process.

### Installation

To install the Circular Progress component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add progress`
*   **pnpm**: `pnpm add @heroui/progress`
*   **npm**: `npm install @heroui/progress`
*   **yarn**: `yarn add @heroui/progress`
*   **bun**: `bun add @heroui/progress`

### Import

**Individual Import**:
```javascript
import { CircularProgress } from "@heroui/progress";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { CircularProgress } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Employ Circular Progress indicators to visually communicate an ongoing process, whether its duration is known (determinate) or unknown (indeterminate).
2.  **Accessibility**: Always provide an `aria-label` prop when the `label` prop is not used, ensuring accessibility for screen readers.
3.  **Size Control**: Adjust the size of the circular progress indicator using the `size` prop.
4.  **Color Schemes**: Apply different color schemes with the `color` prop to match the application's theme or convey status.
5.  **Labeling**: Include a descriptive label using the `label` prop to provide context for the progress.
6.  **Value Display**: Display the current progress value using the `value` prop for determinate progress indicators.
7.  **Value Formatting**: Customize how the value is displayed (e.g., as a percentage, with specific units) using the `formatOptions` prop, which is compatible with `Intl.NumberFormat`.
8.  **Custom Styling**: Customize the `CircularProgress` component by passing custom Tailwind CSS classes to its various slots (`base`, `svgWrapper`, `svg`, `track`, `indicator`, `value`, `label`).
9.  **Data Attributes**: The component includes `data-indeterminate` and `data-disabled` attributes, which can be used for styling and managing state.
10. **Accessibility**: The component is exposed to assistive technology as a progress bar via ARIA attributes, supporting labeling and internationalized number formatting for both determinate and indeterminate states.