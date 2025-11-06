# Scroll Shadow

**Purpose**: The Scroll Shadow component applies top and bottom shadows when content overflows on scroll, providing a visual cue that there is more content to view.

### Installation

To install the Scroll Shadow component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add scroll-shadow`
*   **pnpm**: `pnpm add @heroui/scroll-shadow`
*   **npm**: `npm install @heroui/scroll-shadow`
*   **yarn**: `yarn add @heroui/scroll-shadow`
*   **bun**: `bun add @heroui/scroll-shadow`

### Import

**Individual Import**:
```javascript
import { ScrollShadow } from "@heroui/scroll-shadow";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { ScrollShadow } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `ScrollShadow` to visually indicate that content within a container is scrollable and that there is more content beyond the current view, enhancing user experience.
2.  **Visibility Control**: Control the visibility of the shadows using the `visibility` prop, which can be `auto` (default), `top`, `bottom`, `left`, `right`, `both`, or `none`, depending on the desired effect and scroll direction.
3.  **Orientation**: Set the `orientation` prop to `horizontal` or `vertical` (default) to match the direction of the scrollable content and the applied shadows.
4.  **Enable/Disable Effect**: Use the `isEnabled` prop to explicitly enable or disable the scroll shadow effect.
5.  **Offset Adjustment**: Adjust the shadow offset using the `offset` prop to fine-tune its position relative to the content.
6.  **Size Control**: Control the size (thickness) of the shadow using the `size` prop.
7.  **Custom Styling**: Customize slots (`base`, `topShadow`, `bottomShadow`, `leftShadow`, `rightShadow`) using `classNames` for tailored visual designs.
8.  **Hide Scrollbar**: Use the `hideScrollBar` property to hide vertical and horizontal scrollbars while maintaining full scroll functionality, creating a cleaner interface.
9.  **Event Handling**: The `onVisibilityChange` event is triggered when the visibility of the scroll shadows changes, allowing for dynamic reactions to scroll events.
10. **Accessibility**: Enhances visual cues for scrollable content, improving usability for all users by making the presence of hidden content more apparent.