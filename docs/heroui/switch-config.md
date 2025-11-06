# Switch

**Purpose**: The Switch component is used as an alternative between checked and not checked states.

### Installation

To install the Switch component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add switch`
*   **pnpm**: `pnpm add @heroui/switch`
*   **npm**: `npm install @heroui/switch`
*   **yarn**: `yarn add @heroui/switch`
*   **bun**: `bun add @heroui/switch`

### Import

**Individual Import**:
```javascript
import { Switch } from "@heroui/switch";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Switch } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `Switch` as a clear visual toggle to represent an alternative between two states: checked (on) and unchecked (off).
2.  **Labeling**: Include a descriptive label using the `children` prop or `label` prop to provide context for the switch.
3.  **Disabled State**: Use the `isDisabled` prop to disable the switch, preventing user interaction.
4.  **Size Control**: Control the size of the switch using the `size` prop (e.g., `sm`, `md`, `lg`).
5.  **Color Schemes**: Apply different color schemes with the `color` prop to match the application's theme or indicate status.
6.  **Thumb Icon**: Add an icon inside the switch's thumb using the `thumbIcon` prop for enhanced visual feedback.
7.  **Content Augmentation**: Add icons or other content to the start and end of the switch using `startContent` and `endContent` props.
8.  **Controlled State**: Manage the switch's state using `isSelected` and `onValueChange` (or `onChange`) props for controlled component behavior. It also supports native `onChange` for integration with form libraries.
9.  **Custom Styling**: Customize slots (`base`, `wrapper`, `hiddenInput`, `thumb`, `label`, `startContent`, `endContent`, `thumbIcon`) using `classNames` for fine-grained visual control.
10. **Advanced Customization**: For highly specific implementations, use the `useSwitch` hook.
11. **Data Attributes**: The `base` element includes `data-selected`, `data-pressed`, `data-readonly`, `data-hover`, `data-focus`, `data-focus-visible`, and `data-disabled` attributes for styling and state management.
12. **Accessibility**: Built with a native HTML `<input type="checkbox">` element, supporting keyboard navigation (Tab, Space), focus management, ARIA attributes, and labeling, ensuring an accessible user experience.