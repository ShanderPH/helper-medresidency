# Chip

**Purpose**: A Chip is a small block of essential information that represents an input, attribute, or action.

### Installation

To install the Chip component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add chip`
*   **pnpm**: `pnpm add @heroui/chip`
*   **npm**: `npm install @heroui/chip`
*   **yarn**: `yarn add @heroui/chip`
*   **bun**: `bun add @heroui/chip`

### Import

**Individual Import**:
```javascript
import { Chip } from "@heroui/chip";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Chip } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use Chips to represent small, essential pieces of information such as inputs, attributes, or actions in a compact visual form.
2.  **Disabled State**: Use the `isDisabled` prop to disable interaction with the chip.
3.  **Size Control**: Control the chip size with the `size` prop (e.g., `sm`, `md`, `lg`).
4.  **Color Schemes**: Apply different color schemes using the `color` prop to convey various meanings or statuses.
5.  **Radius Customization**: Adjust the border-radius using the `radius` prop (e.g., `full`, `lg`, `md`, `sm`).
6.  **Visual Variants**: Choose from various visual styles using the `variant` prop (e.g., `solid`, `bordered`, `light`, `flat`, `faded`, `shadow`, `dot`).
7.  **Content Augmentation**: Add custom elements to the start or end of the chip using `startContent` and `endContent` props.
8.  **Closable Chips**: If the `onClose` prop is provided, a close button will be visible, allowing the chip to be dismissed. The close icon can be customized by overriding `endContent`.
9.  **Avatar Integration**: Integrate an `Avatar` component within the chip for user representation, often used in contact or tag chips.
10. **List of Chips**: Chips can be effectively used in lists to represent multiple selections, tags, or categories.
11. **Custom Styling**: Customize chip elements (`base`, `content`, `dot`, `avatar`, `closeButton`) using the `classNames` prop for fine-grained styling.
12. **Accessibility**: Ensure proper `aria-label` is used for chips, especially when their content is not fully descriptive, as relying solely on visual content for accurate announcement is not advisable for screen readers.