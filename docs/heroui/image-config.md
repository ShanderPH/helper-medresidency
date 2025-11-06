# Image

**Purpose**: The Image component is used to display images with built-in support for fallback mechanisms.

### Installation

To install the Image component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add image`
*   **pnpm**: `pnpm add @heroui/image`
*   **npm**: `npm install @heroui/image`
*   **yarn**: `yarn add @heroui/image`
*   **bun**: `bun add @heroui/image`

### Import

**Individual Import**:
```javascript
import { Image } from "@heroui/image";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Image } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use the `Image` component to display images, leveraging its integrated fallback capabilities for a robust user experience.
2.  **Blurred Effect**: Apply a blurred effect to the image using the `isBlurred` prop, which creates a duplicate and blurs the image for a subtle visual enhancement.
3.  **Zoom Effect**: Enable a zoom effect on hover with the `isZoomed` prop, providing an interactive element for users.
4.  **Animated Loading**: The component includes a `skeleton` animation for loading states and an `opacity` animation when the image successfully loads, ensuring a smooth and visually appealing user experience during image loading.
5.  **Fallback Mechanism**: Utilize the `fallbackSrc` prop to specify a fallback image that will be displayed if the primary `src` is still loading, fails to load, or is not found.
6.  **Next.js Integration**: The HeroUI `Image` component is compatible with the Next.js `Image` component. However, note that HeroUI's `Image` is client-side and uses hooks for loading states and animations. If these specific features are not required, consider using the native Next.js `Image` component directly for potential server-side optimizations.
7.  **Custom Styling**: Customize various image slots (`img`, `wrapper`, `zoomedWrapper`, `blurredImg`) using the `classNames` prop for fine-grained control over the image's appearance.
8.  **Accessibility**: Always ensure that images have appropriate `alt` attributes. This is crucial for screen readers and overall accessibility, providing descriptive text for users who cannot see the image.