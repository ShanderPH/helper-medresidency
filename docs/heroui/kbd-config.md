# Kbd

**Purpose**: The Kbd component is used to visually display which key or combination of keys performs a given action.

### Installation

To install the Kbd component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add kbd`
*   **pnpm**: `pnpm add @heroui/kbd`
*   **npm**: `npm install @heroui/kbd`
*   **yarn**: `yarn add @heroui/kbd`
*   **bun**: `bun add @heroui/kbd`

### Import

**Individual Import**:
```javascript
import { Kbd } from "@heroui/kbd";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Kbd } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Employ the `Kbd` component to clearly indicate keyboard shortcuts or key presses that trigger specific actions within the application.
2.  **Key Representation**: The specific key or key combination (e.g., `⌘K`, `⌘⇧N`, `⌥⌘P`) should be passed as children to the `Kbd` component.
3.  **Custom Styling**: Customize Kbd slots (`base`, `abbr`, `content`) using `classNames` for tailored visual designs.
4.  **Accessibility**: Each command key automatically includes a `title` attribute that describes the action the key performs, significantly enhancing accessibility for users of assistive technologies.