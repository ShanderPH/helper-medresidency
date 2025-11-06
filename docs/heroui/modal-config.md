# Modal

**Purpose**: The Modal component displays a dialog with custom content that requires user attention or provides additional information.

### Installation

To install the Modal component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add modal`
*   **pnpm**: `pnpm add @heroui/modal`
*   **npm**: `npm install @heroui/modal`
*   **yarn**: `yarn add @heroui/modal`
*   **bun**: `bun add @heroui/modal`

### Import

HeroUI exports five modal-related components:

*   **Modal**: The main component for displaying a modal dialog.
*   **ModalContent**: The wrapper for other modal components.
*   **ModalHeader**: The header section of the modal.
*   **ModalBody**: The main content area of the modal.
*   **ModalFooter**: The footer section of the modal.

**Individual Import**:
```javascript
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/modal";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `Modal` to present critical information or require user interaction in a focused, overlaying dialog.
2.  **Component Structure**: Utilize `Modal` as the main container, `ModalContent` to wrap its internal sections, and `ModalHeader`, `ModalBody`, and `ModalFooter` for structured content within the dialog.
3.  **Focus Management**: When open, the modal traps focus within its boundaries, and content behind it becomes inert. Focus is automatically set to the first tabbable element inside the modal upon opening and returns to the trigger element upon closing.
4.  **Size Control**: Control the modal's dimensions using the `size` prop (e.g., `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `full`).
5.  **Non-Dismissible Behavior**: To prevent the modal from closing when clicking the overlay, set `isDismissable={false}`. To disable closing via the Escape key, use `isKeyboardDismissDisabled={true}`.
6.  **Placement**: Control the modal's position using the `placement` prop (e.g., `auto`, `top`, `top-center`, `bottom`, `bottom-center`, `center`). `auto` centers on desktop and places at the bottom on mobile.
7.  **Scroll Behavior**: Set `scrollBehavior` to `inside` for scrollable modal content or `outside` for scrollable content with a fixed modal.
8.  **Form Integration**: Modals are suitable for containing forms, as they handle focus within their content. For convenience, use `autoFocus` on the first input field within the modal.
9.  **Backdrop Customization**: Customize the overlay (backdrop) with `transparent`, `opaque` (default), or `blur` options using the `backdrop` prop. Custom backdrops can also be applied via the `backdrop` slot.
10. **Custom Animations**: Use the `motionProps` property to define custom enter/exit animations, which integrates with Framer Motion.
11. **Draggable Modals**: Enable dragging the modal by clicking and dragging the header using the `isDraggable` prop. `draggableOverflow` allows dragging beyond the viewport.
12. **Custom Styling**: Customize modal slots (`wrapper`, `base`, `backdrop`, `header`, `body`, `footer`, `closeButton`) using the `classNames` prop for tailored visual designs.
13. **Accessibility**: Content outside the modal is hidden from assistive technologies when the modal is open. The component supports closing via outside interaction or the Escape key, manages focus for accessibility, and prevents page scrolling behind the open modal.