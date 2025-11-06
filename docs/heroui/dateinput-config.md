# DateInput

**Purpose**: The DateInput component allows users to enter and edit date and time values using a keyboard, with each part of a date value displayed in an individually editable segment.

### Installation

To install the DateInput component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add date-input`
*   **pnpm**: `pnpm add @heroui/date-input`
*   **npm**: `npm install @heroui/date-input`
*   **yarn**: `yarn add @heroui/date-input`
*   **bun**: `bun add @heroui/date-input`

### Import

**Individual Import**:
```javascript
import { DateInput } from "@heroui/date-input";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { DateInput } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use DateInput for precise keyboard entry and editing of date and time values, where individual segments (e.g., day, month, year) are editable.
2.  **Disabled State**: Use the `isDisabled` prop to disable the entire date input, preventing user interaction.
3.  **Read-Only State**: Set the `isReadOnly` prop to make the input immutable while still allowing it to be focused.
4.  **Required Field**: Mark the input as required using the `isRequired` prop.
5.  **Visual Variants**: Apply different visual styles using the `variant` prop.
6.  **Label Placement**: Control the label's position using `labelPlacement` (`inside`, `outside`, `outside-left`).
7.  **Content Augmentation**: Add custom elements to the start or end of the input using `startContent` and `endContent`.
8.  **Description**: Provide additional context or instructions with the `description` prop.
9.  **Error Messaging**: Combine `isInvalid` and `errorMessage` to display validation feedback. `errorMessage` can be a function for dynamic messages.
10. **Controlled State**: Manage the input value using `value` and `onChange` props for controlled component behavior.
11. **Time Zones**: Supports `ZonedDateTime` objects for time zone awareness, displaying abbreviations and handling daylight saving. Requires `@internationalized/date` for full functionality.
12. **Granularity**: Control the smallest displayed unit (e.g., `day`, `minute`) using the `granularity` prop.
13. **Date Range Restriction**: Restrict selectable dates using `minValue` and `maxValue` props.
14. **International Calendar Support**: Supports various calendar systems (Gregorian, Hebrew, Islamic, etc.) based on locale. This can be overridden with Unicode calendar locale extension via `I18nProvider`.
15. **Hide Time Zone**: Use the `hideTimeZone` option when the time zone is displayed elsewhere or is implicitly understood.
16. **Hourly Cycle**: Override the default 12/24-hour format using the `hourCycle` prop.
17. **Custom Styling**: Customize slots (`base`, `label`, `inputWrapper`, `input`, `innerWrapper`, `clearButton`, `helperWrapper`, `description`, `errorMessage`) using `classNames`.
18. **Accessibility**: Built with native `<input>` elements, supporting ARIA attributes for required, invalid states, and labeling. Individual segments are focusable and editable for keyboard navigation, enhancing accessibility.