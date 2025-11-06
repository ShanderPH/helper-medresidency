# User

**Purpose**: The User component is used to display user information with an avatar and name.

### Installation

To install the User component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add user`
*   **pnpm**: `pnpm add @heroui/user`
*   **npm**: `npm install @heroui/user`
*   **yarn**: `yarn add @heroui/user`
*   **bun**: `bun add @heroui/user`

### Import

**Individual Import**:
```javascript
import { User } from "@heroui/user";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { User } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use the `User` component to display user information, typically consisting of an avatar, name, and an optional description or role.
2.  **Avatar Props**: Refer to the `Avatar` component documentation for more details on customizing the `avatarProps`.
3.  **Link Description**: The description can be rendered as a link, allowing for clickable user roles or handles.
4.  **Customizable Slots**: Customizable slots include `base` (the main container), `wrapper` (for name and description), `name` (for the user's name), and `description` (for the user's description).
5.  **Data Attributes**: The `User` component has `data-focus` and `data-focus-visible` attributes on the `root` element only when `isFocusable` is `true`, which are based on `useFocusRing` for accessibility and styling.