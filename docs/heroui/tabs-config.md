# Tabs

**Purpose**: The Tabs component organizes content into multiple sections and allows users to navigate between them.

### Installation

To install the Tabs component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add tabs`
*   **pnpm**: `pnpm add @heroui/tabs`
*   **npm**: `npm install @heroui/tabs`
*   **yarn**: `yarn add @heroui/tabs`
*   **bun**: `bun add @heroui/tabs`

### Import

HeroUI exports two tabs-related components:

*   **Tabs**: The main component to display a tab list.
*   **Tab**: The component to display a tab item. The children of this component will be displayed as the content of the tab.

**Individual Import**:
```javascript
import { Tabs, Tab } from "@heroui/tabs";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Tabs, Tab } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `Tabs` to structure and present content in a segmented manner, allowing users to easily switch between different views or categories.
2.  **Component Structure**: Consists of `Tabs` as the main container for the tab list, and `Tab` for each individual tab item. The content associated with each tab is rendered as children of the `Tab` component.
3.  **Dynamic Tabs**: Render tabs dynamically using the `items` prop, which is useful for data-driven tab creation.
4.  **Disabled Tabs**: Use the `isDisabled` prop on the `Tabs` component to disable the entire tab set. For individual tabs, use the `isDisabled` prop on the `Tab` component.
5.  **Size Control**: Control the size of the tabs using the `size` prop.
6.  **Radius Customization**: Adjust the border radius using the `radius` prop for visual styling.
7.  **Color Schemes**: Apply different color schemes with the `color` prop to match the application's theme.
8.  **Visual Variants**: Customize the visual style using the `variant` prop.
9.  **With Icons**: Enhance visual clarity by adding icons to tabs.
10. **Controlled State**: Manage the selected tab using `onSelectionChange` and `selectedKey` props for controlled component behavior.
11. **Placement**: Change the position of the tabs using the `placement` prop (default is `top`). Options include `top`, `bottom`, `start`, and `end`.
12. **Vertical Orientation**: Change the orientation of the tabs to vertical using the `orientation="vertical"` prop. Note that this invalidates the `placement` prop.
13. **Links**: Tab items can be rendered as links by passing the `href` prop to the `Tab` component. The component is compatible with client-side routers like Next.js and React Router for seamless navigation.
14. **Form Integration**: Tabs can be integrated with forms to organize form sections.
15. **Customizable Slots**: The component provides several customizable slots, including `base`, `tabList`, `tab`, `tabContent`, `cursor`, `panel`, and `tabWrapper`, allowing for detailed styling.
16. **Custom Styles**: Customize the `Tabs` component by passing custom Tailwind CSS classes to its component slots.
17. **Data Attributes**: The `Tab` element includes `data-selected`, `data-disabled`, `data-hover`, `data-hover-selected`, `data-focus`, `data-focus-visible`, and `data-pressed` attributes for styling and state management.
18. **Accessibility**: Supports mouse, touch, and keyboard interactions. Includes keyboard event support for arrow keys, handles disabled tabs, and follows the ARIA tabs pattern, semantically linking tabs and their associated tab panels. It also provides focus management for tab panels without any focusable children, ensuring an accessible user experience.