# Checkbox & CheckboxGroup

**Purpose**: Checkboxes allow users to select one or more items from a list. `CheckboxGroup` is used to group a set of related checkboxes.

### Installation

To install the Checkbox components, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add checkbox`
*   **pnpm**: `pnpm add @heroui/checkbox`
*   **npm**: `npm install @heroui/checkbox`
*   **yarn**: `yarn add @heroui/checkbox`
*   **bun**: `bun add @heroui/checkbox`

### Import

HeroUI exports two checkbox-related components:

*   **Checkbox**: The individual checkbox component.
*   **CheckboxGroup**: The root component that wraps the label and the group of checkboxes.

**Individual Import**:
```javascript
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Checkbox, CheckboxGroup } from '@heroui/react';
```

### Usage Rules and Best Practices

#### Checkbox

1.  **Disabled State**: Use the `isDisabled` prop to disable interaction with a single checkbox.
2.  **Size Control**: Adjust the checkbox size using the `size` prop (e.g., `sm`, `md`, `lg`).
3.  **Color Schemes**: Apply different color schemes with the `color` prop.
4.  **Radius Customization**: Modify the border-radius using the `radius` prop (e.g., `none`, `sm`, `md`, `lg`, `full`).
5.  **Indeterminate State**: Use `isIndeterminate` to set a checkbox to an indeterminate state, which is useful for representing a parent checkbox whose children have a mix of selected and unselected states.

#### CheckboxGroup

1.  **Group Disabling**: Use the `isDisabled` prop on `CheckboxGroup` to disable the entire group of checkboxes.
2.  **Horizontal Layout**: Arrange checkboxes horizontally by setting `orientation="horizontal"` on the `CheckboxGroup`.
3.  **Controlled State**: Manage the selected values of the group using the `value` and `onValueChange` props for controlled behavior.
4.  **Validation**: Use the `isInvalid` prop to indicate an invalid selection, and provide an `errorMessage` for user feedback.
5.  **Custom Styling**: Customize the `CheckboxGroup` component by passing custom Tailwind CSS classes to its slots (`base`, `wrapper`, `label`, `description`, `errorMessage`).
6.  **Advanced Customization**: For highly specific implementations, use the `useCheckboxGroup` hook.
7.  **Accessibility**: The components are built with native HTML input elements, ensuring support for keyboard navigation and ARIA attributes for a fully accessible experience.