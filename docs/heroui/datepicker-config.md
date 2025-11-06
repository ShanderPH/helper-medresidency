# DatePicker

**Purpose**: The DatePicker component combines a DateInput and a Calendar popover, allowing users to easily enter or select a date and time value.

### Installation

To install the DatePicker component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add date-picker`
*   **pnpm**: `pnpm add @heroui/date-picker`
*   **npm**: `npm install @heroui/date-picker`
*   **yarn**: `yarn add @heroui/date-picker`
*   **bun**: `bun add @heroui/date-picker`

### Import

**Individual Import**:
```javascript
import { DatePicker } from "@heroui/date-picker";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { DatePicker } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use DatePicker to provide a comprehensive solution for date and time selection, combining keyboard input with a visual calendar.
2.  **Controlled vs. Uncontrolled**: Supports both controlled (`value`, `onChange`) and uncontrolled (`defaultValue`) states for managing the selected date and time.
3.  **Disabled State**: Use the `isDisabled` prop to disable the entire date picker, preventing any interaction.
4.  **Read-Only State**: Set the `isReadOnly` prop to make the date picker immutable while still allowing it to be focused.
5.  **Required Field**: Mark the input as required using the `isRequired` prop.
6.  **Visual Variants**: Apply different visual styles using the `variant` prop.
7.  **Label Placement**: Control the label's position using `labelPlacement` (`inside`, `outside`, `outside-left`).
8.  **Content Augmentation**: Add custom elements to the start or end of the input using `startContent` and `endContent`.
9.  **Description**: Provide additional context or instructions with the `description` prop.
10. **Error Messaging**: Combine `isInvalid` and `errorMessage` to display validation feedback.
11. **Time Zones**: Supports `ZonedDateTime` objects for time zone awareness. Requires `@internationalized/date` for full functionality.
12. **Granularity**: Control the smallest displayed unit (e.g., `day`, `minute`) using the `granularity` prop.
13. **Date Range Restriction**: Restrict selectable dates using `minValue` and `maxValue` props.
14. **International Calendar Support**: Supports various calendar systems based on locale. Can be overridden with Unicode calendar locale extension via `I18nProvider`.
15. **Hide Time Zone**: Use the `hideTimeZone` option when the time zone is displayed elsewhere or is implicitly understood.
16. **Hourly Cycle**: Override the default 12/24-hour format using the `hourCycle` prop.
17. **Custom Styling**: Customize slots using `classNames` for tailored visual designs.
18. **Accessibility**: Built with native input elements, supporting ARIA attributes for required, invalid states, and labeling. Provides keyboard navigation and accessibility for date selection.