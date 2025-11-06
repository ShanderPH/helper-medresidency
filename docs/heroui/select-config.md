# Select

**Purpose**: A Select component displays a collapsible list of options and allows a user to select one or more of them.

### Installation

To install the Select component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add select`
*   **pnpm**: `pnpm add @heroui/select`
*   **npm**: `npm install @heroui/select`
*   **yarn**: `yarn add @heroui/select`
*   **bun**: `bun add @heroui/select`

### Import

HeroUI exports three select-related components:

*   **Select**: The main component, which is a wrapper for the other components.
*   **SelectSection**: The component that contains a group of select items.
*   **SelectItem**: The component that represents a select item.

**Individual Import**:
```javascript
import { Select, SelectSection, SelectItem } from "@heroui/select";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Select, SelectSection, SelectItem } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `Select` to provide a user-friendly way to choose one or multiple options from a collapsible list.
2.  **Component Structure**: Consists of `Select` as the main wrapper, `SelectSection` for grouping related options, and `SelectItem` for individual options.
3.  **Dynamic Items**: Supports both static and dynamic collections of items. For dynamic data, integrate with `useAsyncList` and `useInfiniteScroll` for asynchronous loading and pagination.
4.  **Multiple Selection**: Enable multiple selections by setting `selectionMode="multiple"`.
5.  **Disabled State**: Use the `isDisabled` prop to disable the select component, preventing user interaction.
6.  **Disabled Items**: Disable specific items within the list using the `disabledKeys` prop.
7.  **Required Field**: Mark the select as required using the `isRequired` prop, which adds a visual indicator (e.g., a danger asterisk) to the label.
8.  **Size Control**: Control the size of the select component using the `size` prop.
9.  **Color Schemes**: Apply different color schemes with the `color` prop to match the application's theme.
10. **Visual Variants**: Customize the visual style using the `variant` prop.
11. **Radius Customization**: Adjust the border radius using the `radius` prop.
12. **Label Placement**: Position the label `inside`, `outside`, or `outside-left` using the `labelPlacement` prop. The default is `outside` if no label is passed.
13. **Content Augmentation**: Add content to the start or end of the select input using `startContent` and `endContent` props (e.g., icons).
14. **Item Content Customization**: Customize `SelectItem` with `startContent` and `endContent` props for richer item display.
15. **Custom Selector Icon**: Replace the default `chevron-down` icon with a custom one using the `selectorIcon` prop. Use `disableSelectorIconRotation` to prevent the icon from rotating.
16. **Scroll Shadow**: The component uses `ScrollShadow` internally. Disable it or customize its behavior using `scrollShadowProps` or `showScrollIndicators`.
17. **Description**: Add a descriptive text using the `description` prop for additional context.
18. **Error Messaging**: Display an error message in conjunction with `isInvalid` using the `errorMessage` prop.
19. **Clearable**: Add a clear button that appears when a value is selected using the `isClearable` prop.
20. **Controlled State**: Manage selected values using `selectedKeys` and `onSelectionChange` (or `onChange`) for controlled component behavior.
21. **Controlling Open State**: Control the open/closed state of the dropdown using `isOpen` and `onOpenChange` (or `onClose`).
22. **Custom Items**: Customize the rendering of `SelectItem` children for unique display needs.
23. **Custom Render Value**: Provide a `renderValue` function to customize how the selected value is displayed. This is particularly useful for displaying multiple selected items (e.g., with `Chip` components) and requires `isMultiline` for proper wrapping.
24. **Virtualization**: Enable `isVirtualized` for efficient rendering of large lists. Ensure `maxListboxHeight` and `itemHeight` are correctly set, especially for custom item heights.
25. **Sections**: Group related items using `SelectSection`. Customize section styles with `classNames` on `SelectSection`.
26. **Customizing the Select**: Customize any slot using the `classNames` property. Use `popoverProps` and `listboxProps` for fine-grained control over sub-components.
27. **Value Attribute**: The `key` property of `SelectItem` should be used for form submission values, not a `value` attribute directly on `SelectItem`.