# Table

**Purpose**: Tables are used to display tabular data using rows and columns. They allow users to quickly scan, sort, compare, and take action on large amounts of data.

### Installation

To install the Table component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add table`
*   **pnpm**: `pnpm add @heroui/table`
*   **npm**: `npm install @heroui/table`
*   **yarn**: `yarn add @heroui/table`
*   **bun**: `bun add @heroui/table`

### Import

HeroUI exports 6 table-related components:

*   **Table**: The main component to display a table.
*   **TableHeader**: The header of the table.
*   **TableBody**: The body of the table.
*   **TableColumn**: The column of the table.
*   **TableRow**: The row of the table.

### Usage Rules and Best Practices

1.  **Purpose**: Use `Table` to display tabular data, allowing users to scan, sort, compare, and take action on large amounts of data.
2.  **Dynamic Data**: Use `columns` and `items` props for dynamic data rendering, which offers significant performance benefits for large collections.
3.  **Empty State**: Use the `emptyContent` prop to render a custom component when the table is empty. The `hideHeader` prop can be used to hide the header in this state.
4.  **Wrapper**: Use the `removeWrapper` prop to remove the default `div` wrapper with its shadow and border radius, except for virtualized tables where the wrapper is required.
5.  **Custom Cells**: Render any component inside table cells, often based on the column key, for rich and flexible data presentation.
6.  **Striped Rows**: Use the `isStriped` prop to render striped rows, which improves readability for large datasets.
7.  **Selection**: Use the `selectionMode` prop (`single` or `multiple`) to enable row selection. `defaultSelectedKeys` sets the initial selection, and `disallowEmptySelection` prevents deselecting the last selected row.
8.  **Controlled Selection**: Use `selectedKeys` and `onSelectionChange` for programmatic control over row selection.
9.  **Disabled Rows**: Use the `disabledKeys` prop to disable specific rows, preventing them from being selected.
10. **Selection Behavior**: The `selectionBehavior` prop (`toggle` or `replace`) controls how selection is handled. The `onRowAction` prop allows triggering actions on rows.
11. **Sorting**: Use the `allowsSorting` prop on `TableColumn` and `sortDescriptor` with `onSortChange` on the `Table` to enable sorting. The `useAsyncList` hook is recommended for managing sorted data.
12. **Sort Icon**: Customize the sort icon with the `sortIcon` prop.
13. **Loading More Data**: Use the `bottomContent` prop to add a component for loading more data, such as a button or pagination controls.
14. **Pagination**: Integrate with the `Pagination` component for paginating table data, including support for asynchronous and infinite pagination scenarios.
15. **Virtualization**: Use the `isVirtualized` prop for efficient rendering of large datasets by only rendering visible items.
16. **Custom Styles**: Customize various slots using the `classNames` prop for fine-grained visual control.
17. **Accessibility**: The component is built with ARIA roles and attributes for accessibility, supporting keyboard navigation, selection, and sorting to ensure a fully accessible experience.