# Breadcrumbs

**Purpose**: Breadcrumbs display a hierarchy of links to the current page or resource in an application, facilitating user navigation.

### Installation

To install the Breadcrumbs component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add breadcrumbs`
*   **pnpm**: `pnpm add @heroui/breadcrumbs`
*   **npm**: `npm install @heroui/breadcrumbs`
*   **yarn**: `yarn add @heroui/breadcrumbs`
*   **bun**: `bun add @heroui/breadcrumbs`

### Import

HeroUI exports two breadcrumb-related components:

*   **Breadcrumbs**: The main wrapper component.
*   **BreadcrumbItem**: Represents an individual breadcrumb item.

**Individual Import**:
```javascript
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Breadcrumbs, BreadcrumbItem } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use Breadcrumbs to clearly indicate the user's current location within a hierarchical structure, aiding navigation.
2.  **Disabled Items**: While `isDisabled` can be used on `BreadcrumbItem` to prevent navigation, the last item (representing the current page) should generally not be disabled.
3.  **Size Customization**: Adjust the size of the breadcrumbs using the `size` prop.
4.  **Color Schemes**: Customize the color scheme of the breadcrumbs using the `color` prop.
5.  **Visual Variants**: Apply different visual styles using the `variant` prop.
6.  **Underline Behavior**: Control the underline behavior (e.g., `none`, `hover`, `always`, `active`, `focus`) using the `underline` prop.
7.  **Radius Adjustment**: Adjust the border-radius of breadcrumb items with the `radius` prop.
8.  **Routing Integration**: Integrate with client-side routers (e.g., Next.js, React Router) by configuring the `BreadcrumbItem` component appropriately.
9.  **Controlled State**: Manage the active item using `isCurrent` and `onAction` props. `onPress` can handle click events for individual items.
10. **Content Augmentation**: Add custom elements before or after breadcrumb items using `startContent` and `endContent`.
11. **Custom Separator**: Customize the separator between items using the `separator` prop.
12. **Complex Items**: `BreadcrumbItem` can accept any React element as children, allowing for complex items like dropdowns within the breadcrumb trail.
13. **Collapsing Long Paths**: For long breadcrumb paths, use `maxItems`, `itemsBeforeCollapse`, and `itemsAfterCollapse` to collapse items into an ellipsis, improving readability. The ellipsis item can be customized with `renderEllipsis`.
14. **Custom Styling**: Customize `Breadcrumbs` styles with `classNames` and `BreadcrumbItem` styles with `itemClasses`.
15. **Accessibility**: The component is implemented as an ordered list with keyboard support and ARIA attributes (`aria-current`, `aria-expanded`, `aria-disabled`) for enhanced accessibility and localized labeling.