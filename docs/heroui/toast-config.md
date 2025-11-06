# Toast

**Purpose**: Toasts are temporary notifications that provide concise feedback about an action or event.

### Installation

To install the Toast component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add toast`
*   **pnpm**: `pnpm add @heroui/toast`
*   **npm**: `npm install @heroui/toast`
*   **yarn**: `yarn add @heroui/toast`
*   **bun**: `bun add @heroui/toast`

### Import

**Individual Import**:
```javascript
import { addToast, ToastProvider } from "@heroui/toast";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { addToast, ToastProvider } from â€˜@heroui/reactâ€™;
```

### Requirement

The `ToastProvider` must be added to the application before using the `addToast` function. This is required to initialize the context for managing toasts.

### Usage Rules and Best Practices

1.  **Purpose**: Use `Toast` to provide temporary, concise feedback about an action or event to the user, without interrupting their workflow.
2.  **Provider**: The `ToastProvider` must be added to the root of the application to initialize the context for managing toasts. This is a prerequisite for using the `addToast` function.
3.  **Color Schemes**: Toast comes with 6 color variants to convey different meanings (e.g., `default`, `primary`, `secondary`, `success`, `warning`, `danger`), allowing for clear communication of message types.
4.  **Visual Variants**: Customize the visual style using the `variant` prop (e.g., `solid`, `bordered`, `flat`) to match the application's design system.
5.  **Radius Customization**: Adjust the border radius using the `radius` prop (e.g., `none`, `small`, `medium`, `large`, `full`) for visual styling.
6.  **Placement**: Control the toast's position on the viewport (e.g., `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`) to ensure it doesn't obstruct critical content.
7.  **Close Toast**: Programmatically close toasts using `closeToast` for individual toasts or `closeAllToasts` functions to dismiss all active toasts.
8.  **Custom Styles**: Customize the alert by passing custom Tailwind CSS classes to the component slots for fine-grained visual control.
9.  **Custom Close Icon**: Pass a custom close icon to the toast using the `closeIcon` prop and a custom class name to the `closeButton` slot for personalized branding.
10. **Global Toast Props**: Pass global toast props to the `ToastProvider` to apply consistent settings (e.g., duration, placement) to all toasts across the application.
11. **Data Attributes**: The `Toast` component includes `data-has-title`, `data-has-description`, `data-animation`, `data-placement`, and `data-drag-value` attributes, which can be used for advanced styling and state management.
12. **Slots**: Customizable slots include `base`, `title`, `description`, `icon`, `loadingComponent`, `content`, `motionDiv`, `progressTrack`, `progressIndicator`, `closeButton`, `closeIcon`, allowing for extensive customization.
13. **Accessibility**: Toast has a role of `alert` for assistive technologies. All Toasts are present in a `ToastRegion`. The close button has `aria-label="Close"` by default. When no toasts are present, the `ToastRegion` is removed from the DOM, ensuring a clean accessibility tree.