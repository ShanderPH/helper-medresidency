# Range Calendar

**Purpose**: A Range Calendar consists of a grouping element containing one or more date grids (e.g., months), and navigation buttons for moving through time. It allows users to select a date range.

### Installation

To install the Range Calendar component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add calendar`
*   **pnpm**: `pnpm add @heroui/calendar`
*   **npm**: `npm install @heroui/calendar`
*   **yarn**: `yarn add @heroui/calendar`
*   **bun**: `bun add @heroui/calendar`

### Import

**Individual Import**:
```javascript
import { RangeCalendar } from "@heroui/calendar";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { RangeCalendar } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `RangeCalendar` to provide an interactive calendar interface for users to select a range of dates.
2.  **Default Value**: An initial, uncontrolled value can be provided using the `defaultValue` prop. For controlled values, use the `value` prop.
3.  **Date Values**: Date values should be provided using objects from the `@internationalized/date` package, which handles international date manipulation, time zones, and localization.
4.  **Unavailable Dates**: Mark specific dates as unavailable using the `isDateUnavailable` prop, which accepts a callback function. Unavailable dates remain focusable but cannot be selected.
5.  **Focused Date**: Control the focused date (and visible month) using `focusedValue` and `onFocusChange` props. `defaultFocusedValue` sets the initial focused date.
6.  **Non-Contiguous Ranges**: The `allowsNonContiguousRanges` prop enables the selection of ranges even with unavailable dates in between. The `onChange` event still emits a single range, but unavailable dates are not visually selected.
7.  **Disabled State**: Use the `isDisabled` prop to disable the entire calendar, preventing selection or focus on cells.
8.  **Read-Only State**: Use the `isReadOnly` prop to make the calendar read-only, preventing any changes to the selected range.
9.  **Min/Max Value**: Restrict the selectable date range using `minValue` and `maxValue` props.
10. **Visible Months**: Control the number of months displayed at once using the `visibleMonths` prop.
11. **Week Start Day**: Set the first day of the week using the `weekStartDay` prop (0 for Sunday, 1 for Monday, etc.).
12. **Custom Styling**: Customize slots (`base`, `header`, `title`, `previousButton`, `nextButton`, `grid`, `cell`, `cellContent`) using `classNames` for tailored visual designs.
13. **Advanced Customization**: For highly specific implementations, use the `useRangeCalendar` hook.
14. **Accessibility**: Exposed to assistive technology as a calendar via ARIA attributes. Supports keyboard navigation (arrow keys, page up/down, home/end), focus management, and labeling. Dates are announced with their availability status. Provides `aria-label` for month and year navigation buttons, ensuring an accessible user experience.