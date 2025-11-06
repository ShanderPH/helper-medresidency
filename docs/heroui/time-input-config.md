# Time Input

**Purpose**: The `TimeInput` component consists of a label, and a group of segments representing each unit of a time (e.g., hours, minutes, and seconds). Each segment is individually focusable and editable by the user, by typing or using the arrow keys to increment and decrement the value. This approach allows values to be formatted and parsed correctly regardless of the locale or time format, and offers an easy and error-free way to edit times using the keyboard.

### Installation

To install the Time Input component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add date-input`
*   **pnpm**: `pnpm add @heroui/date-input`
*   **npm**: `npm install @heroui/date-input`
*   **yarn**: `yarn add @heroui/date-input`
*   **bun**: `bun add @heroui/date-input`

### Import

**Individual Import**:
```javascript
import { TimeInput } from "@heroui/date-input";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { TimeInput } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `TimeInput` to allow users to input time values (hours, minutes, seconds) with individual segment editing, providing a structured and accessible way to enter time.
2.  **Placeholder**: The component displays a placeholder by default, guiding the user on the expected input format.
3.  **Default Value**: An initial, uncontrolled value can be provided using the `defaultValue` prop. For controlled values, use the `value` prop to manage the component's state programmatically.
4.  **Time Values**: Time values should be provided using objects from the `@internationalized/date` package. This library handles correct international date and time manipulation across calendars, time zones, and other localization concerns, ensuring robust time handling.
5.  **Output Type**: By default, `TimeInput` will emit `Time` objects in the `onChange` event. However, if a `CalendarDateTime` or `ZonedDateTime` object is passed as the `value` or `defaultValue`, values of that type will be emitted, changing only the time and preserving the date components.
6.  **Accessibility**: Each segment (hours, minutes, seconds) is individually focusable and editable. The component supports keyboard navigation (arrow keys) for incrementing and decrementing values. Values are formatted and parsed correctly regardless of the locale or time format, offering an easy and error-free way to edit times using the keyboard. It is built with ARIA attributes for enhanced accessibility.