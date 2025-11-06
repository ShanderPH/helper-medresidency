# Number Input

**Purpose**: The Number Input component is designed for users to enter a number, and increase or decrease the value using stepper buttons.

### Installation

To install the Number Input component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add number-input`
*   **pnpm**: `pnpm add @heroui/number-input`
*   **npm**: `npm install @heroui/number-input`
*   **yarn**: `yarn add @heroui/number-input`
*   **bun**: `bun add @heroui/number-input`

### Import

**Individual Import**:
```javascript
import { NumberInput } from "@heroui/number-input";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { NumberInput } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `NumberInput` for numerical data entry, offering optional stepper buttons for incrementing or decrementing values.
2.  **Disabled State**: Use the `isDisabled` prop to prevent user interaction with the number input.
3.  **Read-Only State**: Set the `isReadOnly` prop to make the input immutable while keeping it focusable.
4.  **Required Field**: Mark the input as required using the `isRequired` prop.
5.  **Size Control**: Control the input field's size with the `size` prop.
6.  **Color Schemes**: Apply different color schemes using the `color` prop.
7.  **Visual Variants**: Choose from various visual styles using the `variant` prop.
8.  **Radius Customization**: Adjust the border-radius using the `radius` prop.
9.  **Label Placement**: Position the label `inside`, `outside`, or `outside-left` using `labelPlacement`.
10. **Clearable Input**: Use `isClearable` to add a clear button that appears when the input has a value.
11. **Hide Stepper Buttons**: Use `hideStepper` to hide the increment/decrement buttons if they are not needed.
12. **Content Augmentation**: Add custom elements to the start or end of the input using `startContent` and `endContent`.
13. **Label**: Provide a descriptive label for the input using the `label` prop.
14. **Description**: Provide additional context or instructions with the `description` prop.
15. **Min/Max Value**: Set `minValue` and `maxValue` to restrict the acceptable numerical range.
16. **Wheel Disabled**: Use `isWheelDisabled` to prevent changing the value with the scroll wheel.
17. **Format Options**: Use `formatOptions` to format the displayed number (e.g., currency, percentage, unit), compatible with `Intl.NumberFormat`.
18. **Error Messaging**: Combine `isInvalid` and `errorMessage` for validation feedback. `errorMessage` is only shown when `isInvalid` is `true`.
19. **Controlled State**: Manage the input value using `value` and `onValueChange` props for controlled component behavior. It also supports native `onChange` for integration with form libraries.
20. **Form Integration**: Integrate with the `Form` component for state management and validation. Supports custom validation via the `validate` prop, real-time validation, and server-side validation via the `validationErrors` prop on the `Form` component.
21. **Custom Styling**: Customize slots (`base`, `label`, `mainWrapper`, `inputWrapper`, `innerWrapper`, `input`, `clearButton`, `stepperButton`, `stepperWrapper`, `description`, `errorMessage`) using `classNames`.
22. **Data Attributes**: The `base` element includes `data-invalid`, `data-required`, `data-readonly`, `data-hover`, `data-focus`, `data-focus-within`, `data-focus-visible`, `data-disabled`, `data-filled`, `data-has-elements`, `data-has-helper`, `data-has-description`, and `data-has-value`.
23. **Accessibility**: Built with a native `<input type="number">`, supporting ARIA attributes for labeling, required/invalid states, and help text, ensuring an accessible user experience.