# Calendar

**Purpose**: A Calendar component displays one or more date grids, allowing users to navigate between date ranges and select dates.

### Installation

To install the Calendar component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add calendar`
*   **pnpm**: `pnpm add @heroui/calendar`
*   **npm**: `npm install @heroui/calendar`
*   **yarn**: `yarn add @heroui/calendar`
*   **bun**: `bun add @heroui/calendar`

### Import

**Individual Import**:
```javascript
import { Calendar } from "@heroui/calendar";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Calendar } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Controlled vs. Uncontrolled**: Provide an initial uncontrolled value using `defaultValue` or manage the selected date programmatically using the `value` prop for controlled behavior.
2.  **Disabled State**: Use the `isDisabled` prop to disable the entire calendar, preventing any date selection or focus.
3.  **Read-Only State**: Set the `isReadOnly` prop to make the calendar's value immutable, while still allowing it to be focused.
4.  **Date Range Restriction**: Restrict the selectable dates by setting `minValue` and `maxValue` props.
5.  **Unavailable Dates**: Use the `isDateUnavailable` prop with a callback function to mark specific dates (e.g., holidays, booked slots) as unselectable.
6.  **Controlled Focused Value**: Control the initially focused date and the visible month using `focusedValue` and `onFocusChange`. `defaultFocusedValue` can be used to set the initial focused date without full control.
7.  **Invalid Dates**: Indicate an invalid selection using the `isInvalid` prop, which can be combined with an `errorMessage` slot for visual feedback and accessibility.
8.  **Accessibility**: Calendar components are built with robust keyboard navigation (Space, Enter, Arrow keys) and include ARIA attributes to ensure enhanced accessibility for all users.