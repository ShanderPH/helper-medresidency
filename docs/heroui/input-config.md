# Input

**Purpose**: The Input component allows users to enter text, serving various purposes such as forms, search fields, and more.

### Installation

To install the Input component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add input`
*   **pnpm**: `pnpm add @heroui/input`
*   **npm**: `npm install @heroui/input`
*   **yarn**: `yarn add @heroui/input`
*   **bun**: `bun add @heroui/input`

### Import

**Individual Import**:
```javascript
import { Input } from "@heroui/input";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Input } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use the `Input` component for any scenario requiring text input from the user, such as in forms or search functionalities.
2.  **Disabled State**: Use the `isDisabled` prop to prevent user interaction with the input field.
3.  **Read-Only State**: Set the `isReadOnly` prop to make the input field immutable, preventing direct editing while still allowing its value to be displayed.
4.  **Required Field**: Mark the input as required using the `isRequired` prop, which typically displays a visual indicator like a danger asterisk.
5.  **Size Control**: Control the input field's size using the `size` prop.
6.  **Color Schemes**: Apply different color schemes with the `color` prop to match the application's theme or convey status.
7.  **Visual Variants**: Choose from various visual styles using the `variant` prop to align with design requirements.
8.  **Radius Customization**: Adjust the border-radius using the `radius` prop.
9.  **Label Placement**: Position the label `inside`, `outside`, `outside-left`, or `outside-top` using the `labelPlacement` prop for optimal layout.
10. **Password Input**: For password fields, set `type="password"`. This automatically includes a visibility toggle for user convenience.
11. **Clearable Input**: Use `isClearable` to add a clear button that becomes visible when the input field contains a value.
12. **Content Augmentation**: Add custom elements to the start or end of the input field using `startContent` and `endContent` props (e.g., icons, currency symbols).
13. **Description**: Provide additional context or instructions with the `description` prop.
14. **Error Messaging**: Combine `isInvalid` and `errorMessage` to display validation feedback. The `errorMessage` is only shown when `isInvalid` is `true`.
15. **Controlled State**: Manage the input value using `value` and `onValueChange` props for controlled component behavior. It also supports native `onChange` for integration with form libraries like Formik and React Hook Form.
16. **Form Integration**: Integrate with the `Form` component for comprehensive state management and validation. It supports native HTML constraints (`isRequired`, `minLength`, `maxLength`, `pattern`, `type="email"`, `type="url"`), custom validation via the `validate` prop, real-time validation, and server-side validation via the `validationErrors` prop on the `Form` component.
17. **Custom Styling**: Customize various slots (`base`, `label`, `mainWrapper`, `inputWrapper`, `innerWrapper`, `input`, `clearButton`, `helperWrapper`, `description`, `errorMessage`) using `classNames`.
18. **Advanced Customization**: For highly specific implementations, use the `useInput` hook.
19. **Accessibility**: Built with a native `<input>` element, supporting ARIA attributes for labeling, required, invalid states, and help text. It also supports various input events for a fully accessible experience.