# Date Range Picker

**Purpose**: The Date Range Picker combines two DateInputs and a RangeCalendar popover, allowing users to enter or select a date and time range.

### Installation

To install the Date Range Picker component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add date-picker`
*   **pnpm**: `pnpm add @heroui/date-picker`
*   **npm**: `npm install @heroui/date-picker`
*   **yarn**: `yarn add @heroui/date-picker`
*   **bun**: `bun add @heroui/date-picker`

### Import

**Individual Import**:
```javascript
import { DateRangePicker } from "@heroui/date-picker";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { DateRangePicker } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use Date Range Picker to enable users to select a start and end date/time, combining input fields with a calendar popover.
2.  **Disabled State**: Use the `isDisabled` prop to disable the entire date range picker.
3.  **Read-Only State**: Set the `isReadOnly` prop to make the date range picker immutable.
4.  **Required Field**: Mark the input as required using the `isRequired` prop.
5.  **Visual Variants**: Apply different visual styles using the `variant` prop.
6.  **Visible Months**: Control the number of months displayed in the calendar popover (up to 3) using the `visibleMonths` prop.
7.  **Custom First Day of Week**: Set the `firstDayOfWeek` prop to customize the start day of the week in the calendar.
8.  **Page Behavior**: Adjust pagination behavior (single month or by `visibleMonths`) using the `pageBehavior` prop.
9.  **Label Placement**: Control the label's position using `labelPlacement` (`inside`, `outside`, `outside-left`).
10. **Description**: Provide additional context with the `description` prop.
11. **Error Messaging**: Combine `isInvalid` and `errorMessage` to display validation feedback.
12. **Month and Year Pickers**: Enable `showMonthAndYearPickers` for direct month and year selection, noting it's disabled if `visibleMonths` > 1.
13. **Time Fields**: Time fields are automatically included when `CalendarDateTime` or `ZonedDateTime` objects are provided as values.
14. **Selector Icon**: Customize the selector icon using the `selectorIcon` prop and its placement with `selectorButtonPlacement`.
15. **Controlled State**: Manage the input value using `value` and `onChange` props for controlled component behavior.
16. **Time Zones**: Supports `ZonedDateTime` objects for time zone awareness. Requires `@internationalized/date`.
17. **Granularity**: Control the smallest displayed unit (e.g., `day`, `minute`) using the `granularity` prop.
18. **Date Range Restriction**: Restrict selectable date ranges using `minValue` and `maxValue` props.
19. **International Calendar Support**: Supports various calendar systems based on locale. Can be overridden with Unicode calendar locale extension via `I18nProvider`.
20. **Unavailable Dates**: Mark specific dates as unavailable using the `isDateUnavailable` callback. Invalid states are displayed for unavailable dates.
21. **Non-Contiguous Ranges**: Use `allowsNonContiguousRanges` to enable selection even with unavailable dates in between, though the value remains a single range.
22. **Presets**: The component supports presets, implying predefined date range options for quick selection.
23. **Custom Styling**: Customize slots (`base`, `label`, `inputWrapper`, `input`, `innerWrapper`, `clearButton`, `helperWrapper`, `description`, `errorMessage`) using `classNames`.
24. **Accessibility**: Built with native input elements, supporting ARIA attributes for required, invalid states, and labeling. Provides keyboard navigation and accessibility for date range selection.