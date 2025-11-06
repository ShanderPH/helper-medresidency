# Skeleton

**Purpose**: The Skeleton component serves as a placeholder to indicate a loading state and the expected shape of a component.

### Installation

To install the Skeleton component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add skeleton`
*   **pnpm**: `pnpm add @heroui/skeleton`
*   **npm**: `npm install @heroui/skeleton`
*   **yarn**: `yarn add @heroui/skeleton`
*   **bun**: `bun add @heroui/skeleton`

### Import

**Individual Import**:
```javascript
import { Skeleton } from "@heroui/skeleton";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Skeleton } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `Skeleton` as a visual placeholder to communicate to users that content is loading, providing an indication of the layout and structure to expect.
2.  **Standalone or Wrapper**: The component can be used standalone or as a wrapper around existing content. By default, it will take the shape of its children when used as a wrapper.
3.  **Loaded State Control**: Use the `isLoaded` prop to control when the skeleton animation stops and the actual child component content is displayed.
4.  **Custom Styling**: Customize slots (`base`, `content`) using `classNames` for tailored visual designs.
5.  **Data Attributes**: The `base` element includes the `data-loaded` attribute, which can be used for styling based on the loaded state.
6.  **Accessibility**: Provides a visual cue for loading content, significantly improving user experience by managing expectations and communicating that content is on its way.