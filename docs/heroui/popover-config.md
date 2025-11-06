# Popover

**Purpose**: The Popover component is a **non-modal** dialog that floats around its disclosure, commonly used for displaying additional rich content on top of something.

### Installation

To install the Popover component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add popover`
*   **pnpm**: `pnpm add @heroui/popover`
*   **npm**: `npm install @heroui/popover`
*   **yarn**: `yarn add @heroui/popover`
*   **bun**: `bun add @heroui/popover`

### Import

HeroUI exports three popover-related components:

*   **Popover**: The main component for displaying a popover.
*   **PopoverTrigger**: The component that triggers the popover to open.
*   **PopoverContent**: The component that contains the popover's content.

**Individual Import**:
```javascript
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Popover, PopoverTrigger, PopoverContent } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `Popover` to display supplementary, non-modal content that is contextually related to a trigger element, without interrupting the user's workflow.
2.  **Component Structure**: Consists of `Popover` as the main container, `PopoverTrigger` for the element that opens the popover, and `PopoverContent` for the content displayed within the popover.
3.  **Arrow Indicator**: Include an arrow pointing to the trigger element using the `showArrow` prop for better visual association.
4.  **Color Schemes**: Apply different color schemes with the `color` prop to match the application's theme.
5.  **Placement**: Control the popover's position relative to the trigger using the `placement` prop (e.g., `top`, `bottom`, `left`, `right`, and their `start`/`end` variations).
6.  **Offset Adjustment**: Adjust the distance between the popover and its trigger using the `offset` prop.
7.  **Controlled State**: Manage the popover's open state using `isOpen` and `onOpenChange` props for controlled component behavior.
8.  **Title Props**: Use `titleProps` on `PopoverContent` to ensure the title is correctly exposed to assistive technologies, especially when passing a function as a child.
9.  **Form Integration**: `Popover` handles focus within its content, making it suitable for forms. Focus returns to the trigger on close. For convenience, use `autoFocus` on the first input field within the popover.
10. **Backdrop Customization**: Customize the backdrop with `transparent` (default), `opaque`, or `blur` options using the `backdrop` prop. Custom backdrops can also be applied via the `backdrop` slot.
11. **Custom Animations**: Use the `motionProps` property to define custom enter/exit animations, which integrates with Framer Motion.
12. **Custom Trigger**: The `PopoverTrigger` can be customized to any React element, allowing for flexible trigger designs.
13. **Custom Styling**: Customize popover slots (`base`, `trigger`, `backdrop`, `content`) using `classNames` for tailored visual designs.
14. **Accessibility**: The trigger and popover are semantically associated via ARIA attributes. Content outside the popover is hidden from assistive technologies when open. The popover closes on outside interaction or by pressing the Escape key. Focus is managed on mount/unmount, and the popover is positioned relative to its trigger, automatically adjusting to avoid viewport overlap. Scrolling is prevented outside the popover, ensuring a focused user experience.