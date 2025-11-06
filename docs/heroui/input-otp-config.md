# Input OTP

**Purpose**: The Input OTP component enables users to enter one-time passwords (OTP) or similar short, numerical codes.

### Installation

To install the Input OTP component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add input-otp`
*   **pnpm**: `pnpm add @heroui/input-otp`
*   **npm**: `npm install @heroui/input-otp`
*   **yarn**: `yarn add @heroui/input-otp`
*   **bun**: `bun add @heroui/input-otp`

### Import

**Individual Import**:
```javascript
import { InputOtp } from "@heroui/input-otp";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { InputOtp } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `InputOtp` specifically for entering one-time passwords (OTP) or other short, fixed-length numerical codes.
2.  **Disabled State**: Use the `isDisabled` prop to prevent user interaction with the component.
3.  **Read-Only State**: Set the `isReadOnly` prop to make the input read-only while maintaining its visual appearance.
4.  **Required Field**: Mark the input as required using the `isRequired` prop.
5.  **Size Control**: Customize the size of the `InputOtp` using the `size` prop (e.g., `sm`, `md`, `lg`). The default size is `md`.
6.  **Color Schemes**: Change the color scheme using the `color` prop to match the application's theme.
7.  **Visual Variants**: Apply different visual styles using the `variant` prop (e.g., `flat`, `bordered`, `underlined`, `faded`). The default variant is `flat`.
8.  **Radius Customization**: Adjust the border-radius using the `radius` prop (e.g., `none`, `sm`, `md`, `lg`, `full`). The default radius is `md`.
9.  **Password Type**: Set `type="password"` to mask the input characters, suitable for secured PINs or sensitive codes.
10. **Description**: Provide additional context or instructions with the `description` prop.
11. **Error Messaging**: Display custom error messages using the `errorMessage` prop, typically in conjunction with the `isInvalid` prop to indicate validation failures.
12. **Allowed Characters**: Control the accepted input characters using the `allowedKeys` prop, which takes a regex pattern. The default is `^[0-9]*$` for numerical digits.
13. **Controlled State**: Manage the input value using `value` and `onValueChange` props for controlled component behavior.
14. **React Hook Form Integration**: The component is compatible with React Hook Form for streamlined validation and submission handling.
15. **Length Configuration**: Set the number of input segments using the `length` prop (e.g., 4 for PINs, 6 for authentication codes).
16. **Custom Styling**: Customize component slots (`base`, `wrapper`, `input`, `segmentWrapper`, `segment`, `caret`, `passwordChar`, `helperWrapper`, `description`, `errorMessage`) using `classNames` for fine-grained visual control.
17. **Data Attributes**: The `base` element includes `data-invalid`, `data-required`, `data-readonly`, `data-filled`, and `data-disabled`. Individual `segment` elements include `data-active`, `data-focus`, `data-focus-visible`, and `data-has-value` for styling and state management.
18. **Accessibility**: Built on top of the `input-otp` library with ARIA attributes for required and invalid states. It supports keyboard navigation (Tab, Arrow keys, Backspace) for individual segments, ensuring an accessible user experience.