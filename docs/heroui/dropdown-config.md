# Dropdown

**Purpose**: The Dropdown component displays a list of actions or options that a user can choose from.

### Installation

To install the Dropdown component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add dropdown`
*   **pnpm**: `pnpm add @heroui/dropdown`
*   **npm**: `npm install @heroui/dropdown`
*   **yarn**: `yarn add @heroui/dropdown`
*   **bun**: `bun add @heroui/dropdown`

### Import

HeroUI exports five dropdown-related components:

*   **Dropdown**: The main wrapper component, extending the `Popover` component and inheriting its props.
*   **DropdownTrigger**: The component that activates the dropdown menu.
*   **DropdownMenu**: The container for dropdown items.
*   **DropdownSection**: Used to group related dropdown items.
*   **DropdownItem**: Represents an individual item within the dropdown.

**Individual Import**:
```javascript
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@heroui/dropdown";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use Dropdown to present a list of actions or options to the user in a compact, accessible manner.
2.  **Component Structure**: Utilize `Dropdown` as the main wrapper, `DropdownTrigger` to define the element that opens the dropdown, `DropdownMenu` to contain the options, `DropdownSection` for grouping, and `DropdownItem` for individual choices.
3.  **Dynamic Items**: Supports both static and dynamic collections of items. For dynamic data, pass the `items` prop to `DropdownMenu`.
4.  **Disabled Items**: Disable specific dropdown items using the `disabledKeys` prop on `DropdownMenu`. Ensure each item has a unique `key`.
5.  **Action Handling**: Use the `onAction` prop on `DropdownMenu` to capture the `key` of the selected item when an action is performed.
6.  **Visual Variants**: Customize the hover style of dropdown items using the `variant` prop on `DropdownMenu` (e.g., `solid`, `bordered`, `light`, `flat`, `faded`, `shadow`).
7.  **Selection Modes**: Set `selectionMode` to `single` for single item selection or `multiple` for multiple selections. Use `disallowEmptySelection={false}` to allow the user to deselect all items.
8.  **Keyboard Shortcuts**: Add keyboard shortcuts to `DropdownItem` using the `shortcut` prop. Note that event handling for these shortcuts must be implemented manually.
9.  **Icons**: Include `startContent` or `endContent` props on `DropdownItem` to add icons. Using `currentColor` for icon color will automatically match the text color.
10. **Description**: Add a descriptive text to `DropdownItem` using the `description` prop for more context.
11. **Sections**: Group related dropdown items using `DropdownSection`. Sections without a title require an `aria-label` for accessibility.
12. **Custom Trigger**: Any React component can serve as a trigger by wrapping it within `DropdownTrigger`.
13. **Backdrop Customization**: As an extension of `Popover`, `Dropdown` accepts `Popover` props, including `backdrop` for customizing the overlay behavior.
14. **Routing Integration**: `DropdownItem` is designed to work seamlessly with client-side routers like Next.js and React Router.
15. **Custom Styling**: Customize `DropdownMenu` items using `itemClasses` (for all items) or individual `DropdownItem` slots (`base`, `wrapper`, `title`, `description`, `shortcut`, `selectedIcon`). `DropdownSection` slots include `base`, `heading`, `group`, and `divider`.
16. **Accessibility**: Implemented with ARIA roles (`button`, `menu`), supporting single/multiple selection, disabled items, sections, complex labeling, keyboard navigation (Arrow keys, Home/End, Page Up/Down, typeahead), and virtualized scrolling for long lists to ensure a fully accessible experience.