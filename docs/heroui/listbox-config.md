# Listbox

**Purpose**: A Listbox displays a list of options and allows a user to select one or more of them.

### Installation

To install the Listbox component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add listbox`
*   **pnpm**: `pnpm add @heroui/listbox`
*   **npm**: `npm install @heroui/listbox`
*   **yarn**: `yarn add @heroui/listbox`
*   **bun**: `bun add @heroui/listbox`

### Import

HeroUI exports three listbox-related components:

*   **Listbox**: The main wrapper component.
*   **ListboxSection**: The component that contains a group of listbox items.
*   **ListboxItem**: The component that represents a listbox item.

**Individual Import**:
```javascript
import { Listbox, ListboxSection, ListboxItem } from "@heroui/listbox";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Listbox, ListboxSection, ListboxItem } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use Listbox to present a list of options from which users can select one or multiple items.
2.  **Component Structure**: Consists of `Listbox` as the main container, `ListboxSection` for grouping, and `ListboxItem` for individual options.
3.  **Dynamic Items**: Supports both static and dynamic collections of items. For dynamic data, pass the `items` prop to `Listbox`.
4.  **Disabled Items**: Disable specific listbox items using the `disabledKeys` prop on the `Listbox` component. Ensure items have unique keys.
5.  **Visual Variants**: Customize the hover style of listbox items using the `variant` prop on `Listbox`.
6.  **Selection Modes**: Set `selectionMode` to `single` for single item selection or `multiple` for multiple selections. Use `disallowEmptySelection={false}` to allow no selection.
7.  **Icons**: Include `startContent` or `endContent` props on `ListboxItem` to add icons. Using `currentColor` for icon color will match text color.
8.  **Description**: Add a description to `ListboxItem` using the `description` prop for additional context.
9.  **Top & Bottom Content**: Add custom content above and below the listbox items using `topContent` and `bottomContent` props.
10. **Sections**: Group related listbox items using `ListboxSection`. Sections without a title require an `aria-label` for accessibility.
11. **Routing Integration**: `ListboxItem` is designed to work with client-side routers like Next.js and React Router.
12. **Virtualization**: Enable `isVirtualized` for efficient rendering of large lists by only rendering visible items (utilizes `@tanstack/react-virtual`).
13. **Custom Styling**: Customize `Listbox` items using `itemClasses` (for all items) or individual `ListboxItem` slots (`base`, `wrapper`, `title`, `description`, `selectedIcon`). `ListboxSection` slots include `base`, `heading`, `group`, and `divider`.
14. **Accessibility**: Exposed to assistive technology as a `listbox` via ARIA attributes. Supports single/multiple selection, disabled items, sections, labeling, mouse/touch/keyboard interactions, tab stop focus management, keyboard navigation (arrow keys, home/end, page up/down, select all, clear), and typeahead. Automatic scrolling is supported during keyboard navigation.