# Pagination

**Purpose**: The Pagination component allows you to display the active page and navigate between multiple pages.

### Installation

To install the Pagination component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add pagination`
*   **pnpm**: `pnpm add @heroui/pagination`
*   **npm**: `npm install @heroui/pagination`
*   **yarn**: `yarn add @heroui/pagination`
*   **bun**: `bun add @heroui/pagination`

### Import

HeroUI exports three pagination-related components:

*   **Pagination**: The main component for displaying pagination controls.
*   **PaginationItem**: An internal component used to display an individual page item.
*   **PaginationCursor**: An internal component used to display the current active page.

**Individual Import**:
```javascript
import { Pagination, PaginationItem, PaginationCursor } from "@heroui/pagination";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Pagination, PaginationItem, PaginationCursor } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `Pagination` to enable users to navigate through large sets of data by displaying page numbers and controls.
2.  **Component Structure**: Consists of `Pagination` as the main wrapper, `PaginationItem` for individual page links, and `PaginationCursor` for the visual indicator of the current page.
3.  **Disabled State**: Use the `isDisabled` prop to disable the entire pagination component, preventing any interaction.
4.  **Size Control**: Control the size of the pagination elements using the `size` prop.
5.  **Color Schemes**: Apply different color schemes with the `color` prop to match the application's theme.
6.  **Visual Variants**: Customize the style of pagination items using the `variant` prop.
7.  **Navigation Controls**: Display `next` and `previous` buttons by setting `showControls` to `true`.
8.  **Looping Navigation**: Enable continuous navigation by setting `loop` to `true`, allowing the page cursor to wrap around from the last page to the first and vice versa.
9.  **Initial Page**: Set the starting page using the `initialPage` prop.
10. **Compact Version**: Display a reduced version of the pagination by setting `isCompact` to `true`, suitable for limited space.
11. **Shadow Effect**: Add a shadow below the active page item using the `showShadow` prop for visual emphasis.
12. **Controlled State**: Manage the active page using `page` and `onPageChange` props for controlled component behavior.
13. **Sibling Pages**: Control the number of pages shown immediately before and after the current page using the `siblings` prop.
14. **Boundary Pages**: Control the number of pages shown at the beginning and end of the pagination using the `boundaries` prop.
15. **Custom Item Rendering**: Customize the rendering of individual pagination items using the `renderItem` prop for unique designs.
16. **Custom Styling**: Customize various slots (`base`, `wrapper`, `prev`, `next`, `item`, `cursor`, `forwardIcon`, `ellipsis`, `chevronNext`) using `classNames`.
17. **Advanced Customization**: For highly specific implementations, use the `usePagination` hook.
18. **Data Attributes**: The `base` element includes various `data-*` attributes (e.g., `data-controls`, `data-loop`, `data-dots-jump`, `data-total`, `data-active-page`) for advanced styling and state management.
19. **Accessibility**: The root node has a `navigation` role. Pagination items have `aria-label` attributes for accessibility, which can be overridden with `getItemAriaLabel`. Items are in tab order with `tabindex="0"` and support keyboard navigation.