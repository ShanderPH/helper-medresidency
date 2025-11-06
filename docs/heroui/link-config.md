# Link

**Purpose**: The Link component allows users to navigate between pages, styled to resemble a hyperlink and semantically rendering an `<a>` tag.

### Installation

To install the Link component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add link`
*   **pnpm**: `pnpm add @heroui/link`
*   **npm**: `npm install @heroui/link`
*   **yarn**: `yarn add @heroui/link`
*   **bun**: `bun add @heroui/link`

### Import

**Individual Import**:
```javascript
import { Link } from "@heroui/link";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Link } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use the `Link` component to create navigation elements that are visually styled as hyperlinks and semantically render an `<a>` HTML tag.
2.  **Disabled State**: Use the `isDisabled` prop to disable the link, preventing user interaction and indicating it is currently unavailable.
3.  **Size Control**: Control the size of the link using the `size` prop to fit various design contexts.
4.  **Color Schemes**: Apply different color schemes with the `color` prop to match the application's theme or convey specific states.
5.  **Underline Behavior**: Customize the underline behavior using the `underline` prop (e.g., `none`, `hover`, `always`, `active`, `focus`) for visual emphasis.
6.  **External Links**: Set `isExternal` to `true` to automatically add `target="_blank"` and `rel="noopener noreferrer"` attributes, ensuring external links open in a new tab securely.
7.  **Custom Anchor Icon**: Customize the icon for external links using the `endContent` prop, typically to indicate that the link leads to an external resource.
8.  **Block Link**: Use the `isBlock` prop to render the link as a block element with a hover effect, useful for larger clickable areas.
9.  **Polymorphic Component**: The `as` prop allows customizing the underlying React element type used to render the component, providing flexibility for semantic HTML or integration with other libraries.
10. **Routing Integration**: The `Link` component is compatible with client-side routers like Next.js and React Router, enabling seamless navigation within single-page applications.
11. **Advanced Customization**: For advanced customization needs, use the `useLink` hook.
12. **Accessibility**: The component supports mouse, touch, and keyboard interactions. It provides support for navigation links via `<a>` elements or custom element types via ARIA attributes. Disabled links are also supported, and keyboard users can activate links using the Enter key, ensuring a fully accessible navigation experience.