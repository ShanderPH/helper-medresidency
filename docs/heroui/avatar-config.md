# Avatar

**Purpose**: The Avatar component is used to represent a user, displaying a profile picture, initials, or a fallback icon.

### Installation

To install the Avatar component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add avatar`
*   **pnpm**: `pnpm add @heroui/avatar`
*   **npm**: `npm install @heroui/avatar`
*   **yarn**: `yarn add @heroui/avatar`
*   **bun**: `bun add @heroui/avatar`

### Import

HeroUI exports three avatar-related components:

*   **Avatar**: The main component for displaying an avatar.
*   **AvatarGroup**: A wrapper component for displaying a group of avatars.
*   **AvatarIcon**: The default icon used as a fallback when the image fails to load.

**Individual Import**:
```javascript
import { Avatar, AvatarGroup, AvatarIcon } from "@heroui/avatar";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Avatar, AvatarGroup, AvatarIcon } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Size Control**: Adjust the avatar's size using the `size` prop.
2.  **Disabled State**: Use the `isDisabled` prop to visually disable an avatar, indicating it's non-interactive.
3.  **Bordered Style**: Apply a border to the avatar using the `isBordered` prop.
4.  **Radius Customization**: Modify the border-radius with the `radius` prop for different shapes.
5.  **Color Schemes**: Customize the avatar's background color using the `color` prop.
6.  **Fallback Mechanism**: When the `src` image fails to load, initials are generated from the `name` prop. If `name` is also absent, a default icon is used. Ensure `showFallback` is `true` to enable these fallback behaviors.
7.  **Custom Fallback Content**: Provide a custom component for fallback content using the `fallback` prop.
8.  **Custom Initials Logic**: Customize the logic for generating initials by passing a function to the `getInitials` prop.
9.  **AvatarGroup Usage**: Use `<AvatarGroup>` to display multiple avatars. It supports `max` to limit the number of visible avatars, `total` to show the total count, and `renderCount` for custom count rendering.
10. **Group Grid Layout**: Set `isGrid` on `AvatarGroup` to arrange avatars in a grid layout.
11. **Custom Styling**: Customize individual slots (`base`, `img`, `fallback`, `name`, `icon`) using the `classNames` prop for fine-grained styling.
12. **Accessibility**: Avatars include `data-hover`, `data-focus`, and `data-focus-visible` attributes for accessibility, particularly when `isFocusable` is `true` or when the avatar acts as a `button` via the `as` prop.