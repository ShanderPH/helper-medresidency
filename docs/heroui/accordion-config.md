# Accordion

**Purpose**: The Accordion component is designed to display a list of high-level options that can expand or collapse to reveal more detailed information.

### Installation

To install the Accordion component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add accordion`
*   **pnpm**: `pnpm add @heroui/accordion`
*   **npm**: `npm install @heroui/accordion`
*   **yarn**: `yarn add @heroui/accordion`
*   **bun**: `bun add @heroui/accordion`

### Import

**Individual Import**:
```javascript
import { Accordion, AccordionItem } from "@heroui/accordion";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Accordion, AccordionItem } from '@heroui/react';
```

### Usage Rules and Best Practices

1.  **Basic Structure**: Use `<Accordion>` as the main container and `<AccordionItem>` for each individual collapsible section.
2.  **Subtitle**: Enhance clarity by adding a `subtitle` prop to `AccordionItem` for additional context.
3.  **Multiple Expansion**: To allow users to open multiple accordion items simultaneously, set the `selectionMode` prop of `<Accordion>` to `"multiple"`.
4.  **Compact Display**: For a more condensed visual presentation, apply the `isCompact` prop to the `<Accordion>` component.
5.  **Visual Variants**: Choose from `light`, `shadow`, `bordered`, and `splitted` variants for `<Accordion>` to align with the design requirements.
6.  **Default Expanded Items**: Utilize the `defaultExpandedKeys` prop on `<Accordion>` with an array of keys to pre-expand specific items upon initial render.
7.  **Disabled Items**: To prevent user interaction with certain items, use the `disabledKeys` prop on `<Accordion>` with an array of keys corresponding to the items to be disabled.
8.  **Start Content**: Integrate custom content before the item's title by using the `startContent` prop on `AccordionItem`.
9.  **Custom Indicator**: The expand/collapse indicator can be customized using the `indicator` prop on `AccordionItem`.
10. **Custom Animations**: For custom enter/exit animations, apply `motionProps` on `AccordionItem`. This requires familiarity with Framer Motion.
11. **Controlled State**: For controlled behavior, manage the `selectedKeys` prop on `<Accordion>` to programmatically control which items are open.
12. **Custom Styling**: Styles can be customized using `className` on `<Accordion>`, `itemClasses` on `<Accordion>` (for global item styling), or `classNames` on `AccordionItem` (for individual item styling).
13. **Accessibility**: The component inherently supports keyboard navigation and includes essential ARIA attributes such as `aria-expanded`, `aria-disabled`, and `aria-controls` for enhanced accessibility.