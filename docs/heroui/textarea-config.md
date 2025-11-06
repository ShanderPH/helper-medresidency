# Textarea

**Purpose**: The Textarea component is a multi-line input which allows you to write large texts.

### Installation

To install the Textarea component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add input`
*   **pnpm**: `pnpm add @heroui/input`
*   **npm**: `npm install @heroui/input`
*   **yarn**: `yarn add @heroui/input`
*   **bun**: `bun add @heroui/input`

### Import

**Individual Import**:
```javascript
import { Textarea } from "@heroui/input";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Textarea } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `Textarea` for multi-line text input, enabling users to enter and edit large blocks of text.
2.  **Disabled State**: Use the `isDisabled` prop to disable the textarea, preventing user interaction.
3.  **Read-Only State**: Use the `isReadOnly` prop to make the textarea read-only, displaying content without allowing modifications.
4.  **Required Field**: Use the `isRequired` prop to mark the textarea as required, which adds a visual indicator (e.g., a danger asterisk) to the label.
5.  **Clearable**: Use the `isClearable` prop to add a clear button that appears when the textarea contains a value, allowing users to quickly clear the input.
6.  **Autosize**: The textarea grows automatically based on its content. Control minimum and maximum height with `minRows` and `maxRows` props. This feature is based on `react-textarea-autosize`.
7.  **Disable Autosize**: Use the `disableAutosize` prop to disable the automatic resizing feature if a fixed height is desired.
8.  **Visual Variants**: Customize the visual style using the `variant` prop.
9.  **Error Messaging**: Combine `isInvalid` and `errorMessage` properties to display an invalid textarea with a descriptive error message, guiding users to correct their input.
10. **Description**: Add a descriptive text using the `description` prop for additional context or instructions.
11. **Controlled State**: Manage the textarea's value using `value` and `onValueChange` props for controlled component behavior. It also supports native `onChange` for integration with form libraries like Formik and React Hook Form.
12. **Customizable Slots**: Customizable slots include `base`, `label`, `inputWrapper`, `input`, `description`, `errorMessage`, and `headerWrapper`, allowing for detailed styling.
13. **Data Attributes**: The `Textarea` component includes `data-invalid`, `data-required`, `data-readonly`, `data-hover`, `data-focus`, `data-focus-visible`, and `data-disabled` attributes for styling and state management.
14. **Accessibility**: Built with a native `<input>` element. Provides visual and ARIA labeling support. Supports change, clipboard, composition, selection, and input events. Required and invalid states are exposed to assistive technology via ARIA. Support for description and error message help text linked to the input via ARIA, ensuring a fully accessible user experience.