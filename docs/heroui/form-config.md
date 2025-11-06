# Form

**Purpose**: The Form component is designed to group inputs, allowing users to submit data to a server, with robust support for field validation errors.

### Installation

To install the Form component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add form`
*   **pnpm**: `pnpm add @heroui/form`
*   **npm**: `npm install @heroui/form`
*   **yarn**: `yarn add @heroui/form`
*   **bun**: `bun add @heroui/form`

### Import

**Individual Import**:
```javascript
import { Form } from "@heroui/form";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Form } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use the `Form` component to logically group input elements and facilitate data submission to a server, including comprehensive support for validation and error handling.
2.  **Anatomy**: A `Form` acts as a container for input elements and associated submit/reset buttons. When labeled with `aria-label` or `aria-labelledby`, it becomes a navigable form landmark for assistive technologies, enhancing accessibility.
3.  **Events**: The `onSubmit` event is triggered upon form submission (e.g., by pressing Enter or clicking a submit button). The `onReset` event is triggered when a reset button is activated.
4.  **Validation**: The component supports native HTML constraint validation with a customizable UI. It also allows for custom validation functions and server-side validation. Server-side errors can be passed via the `validationErrors` prop and are automatically cleared when the associated field is modified.
5.  **Validation Behavior**: By default, it uses native validation. For real-time error display without blocking submission, `validationBehavior` can be set to `"aria"`. This behavior can be configured at the form level, field level, or globally via `HeroUI Provider`.
6.  **Accessibility**: The `Form` component is built upon a native HTML `<form>` element, providing inherent support for ARIA labeling for form landmarks and full browser autofill features. It offers robust support for various validation states and messages, ensuring an accessible user experience.