# Drawer

**Purpose**: The Drawer component displays a panel that slides in from the edge of the screen, containing supplementary content.

### Installation

To install the Drawer component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add drawer`
*   **pnpm**: `pnpm add @heroui/drawer`
*   **npm**: `npm install @heroui/drawer`
*   **yarn**: `yarn add @heroui/drawer`
*   **bun**: `bun add @heroui/drawer`

### Import

HeroUI exports five drawer-related components:

*   **Drawer**: The main component for displaying a drawer.
*   **DrawerContent**: The wrapper for other drawer components.
*   **DrawerHeader**: The header section of the drawer.
*   **DrawerBody**: The main content area of the drawer.
*   **DrawerFooter**: The footer section of the drawer.

**Individual Import**:
```javascript
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from "@heroui/drawer";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use Drawer to present supplementary content or navigation in a panel that slides in from the edge of the screen, without obscuring the main content entirely.
2.  **Component Structure**: Utilize `Drawer` as the main container, `DrawerContent` to wrap its internal sections, and `DrawerHeader`, `DrawerBody`, and `DrawerFooter` for structured content.
3.  **Focus Management**: When open, the drawer manages focus within its boundaries, and the content behind it becomes inert. Focus is automatically set to the first tabbable element inside the drawer upon opening and returns to the trigger element upon closing.
4.  **Size Control**: Control the drawer's width or height using the `size` prop (e.g., `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `full`).
5.  **Non-Dismissible Behavior**: To prevent the drawer from closing when clicking the overlay, set `isDismissable={false}`. To disable closing via the Escape key, use `isKeyboardDismissDisabled={true}`.
6.  **Placement**: Position the drawer to slide in from `left`, `right` (default), `top`, or `bottom` using the `placement` prop.
7.  **Form Integration**: Drawers are suitable for containing forms, as they handle focus within their content. For convenience, consider using `autoFocus` on the first input field within the drawer.
8.  **Backdrop Customization**: Customize the overlay (backdrop) with `transparent`, `opaque` (default), or `blur` options using the `backdrop` prop.
9.  **Custom Animations**: Use the `motionProps` property to define custom enter/exit animations, which integrates with Framer Motion.
10. **Custom Styling**: Customize drawer slots (`wrapper`, `base`, `backdrop`, `header`, `body`, `footer`, `closeButton`) using the `classNames` prop for tailored visual designs.
11. **Accessibility**: Content outside the drawer is hidden from assistive technologies when the drawer is open. The component supports closing via outside interaction or the Escape key, manages focus for accessibility, and prevents page scrolling behind the open drawer.