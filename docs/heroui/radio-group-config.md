# Radio Group

**Purpose**: Radio Groups allow users to select a single option from a list of mutually exclusive options.

### Installation

To install the Radio Group component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add radio`
*   **pnpm**: `pnpm add @heroui/radio`
*   **npm**: `npm install @heroui/radio`
*   **yarn**: `yarn add @heroui/radio`
*   **bun**: `bun add @heroui/radio`

### Import

HeroUI exports two radio-related components:

*   **RadioGroup**: The wrapper component for a group of radio buttons.
*   **Radio**: The component for an individual radio button option.

**Individual Import**:
```javascript
import { RadioGroup, Radio } from "@heroui/radio";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { RadioGroup, Radio } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `RadioGroup` when users need to select exactly one option from a predefined set of choices.
2.  **Component Structure**: Consists of `RadioGroup` as the wrapper for the collection of `Radio` components, each representing a single option.
3.  **Disabled State**: Use the `isDisabled` prop to disable the entire radio group or individual `Radio` buttons, preventing user interaction.
4.  **Default Value**: Set an initial selected value using the `defaultValue` prop for uncontrolled components.
5.  **Description**: Add a description to individual radio buttons using the `description` prop for additional context.
6.  **Horizontal Layout**: Arrange radio buttons horizontally by setting `orientation="horizontal"` on the `RadioGroup` component.
7.  **Controlled State**: Manage the selected value using `value` and `onValueChange` props for controlled component behavior. It also supports native `onChange` for integration with form libraries.
8.  **Invalid State**: Indicate an invalid state for the entire group using the `isInvalid` prop on `RadioGroup`.
9.  **Custom Styling**: Customize slots for both `RadioGroup` (`base`, `wrapper`, `label`, `description`, `errorMessage`) and `Radio` (`base`, `wrapper`, `hiddenInput`, `labelWrapper`, `label`, `control`, `description`) using `classNames`.
10. **Advanced Customization**: For highly specific implementations, use the `useRadio` hook.
11. **Data Attributes**: `RadioGroup` has a `data-orientation` attribute. `Radio` elements include `data-selected`, `data-pressed`, `data-invalid`, `data-readonly`, `data-hover-unselected`, `data-hover`, `data-focus`, `data-focus-visible`, and `data-disabled` attributes for styling and state management.
12. **Accessibility**: Exposed to assistive technology via ARIA attributes. Built with native HTML `<input type="radio">` elements. Supports keyboard navigation (arrow keys), focus management, and proper labeling for both the group and individual radio buttons, ensuring an accessible user experience.