# Navbar

**Purpose**: The Navbar component provides a responsive navigation header positioned at the top of the page, supporting branding, links, navigation, and a collapsible menu.

### Installation

To install the Navbar component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add navbar`
*   **pnpm**: `pnpm add @heroui/navbar`
*   **npm**: `npm install @heroui/navbar`
*   **yarn**: `yarn add @heroui/navbar`
*   **bun**: `bun add @heroui/navbar`

### Import

HeroUI exports seven navbar-related components:

*   **Navbar**: The main component of the navigation bar.
*   **NavbarBrand**: Used for branding elements (e.g., logo, site title).
*   **NavbarContent**: A wrapper for navbar items.
*   **NavbarItem**: Represents an individual item within the navbar.
*   **NavbarMenuToggle**: A component for toggling the mobile navigation menu.
*   **NavbarMenu**: A container for menu items in the collapsible navigation.
*   **NavbarMenuItem**: Represents an individual item within the collapsible menu.

**Individual Import**:
```javascript
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/navbar";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `Navbar` to create a consistent and responsive navigation header at the top of your application, integrating branding, navigation links, and a collapsible menu for smaller screens.
2.  **Component Structure**: The Navbar consists of `Navbar`, `NavbarBrand`, `NavbarContent`, `NavbarItem`, `NavbarMenuToggle`, `NavbarMenu`, and `NavbarMenuItem` to build a complete navigation system.
3.  **Positioning**: Use the `position` prop to control the navbar's placement. The default is `sticky`, but it can be set to `static`.
4.  **Hide on Scroll**: Implement `shouldHideOnScroll` to automatically hide the navbar when the user scrolls down, providing more screen real estate.
5.  **Collapsible Menu**: For responsive designs, use `NavbarMenuToggle` to trigger `NavbarMenu`. Control its open state with `isMenuOpen` and `onMenuOpenChange`. Animations can be disabled with `disableAnimation={true}` on the `Navbar`.
6.  **Border**: Add a visual separation with a bottom border using the `isBordered` prop.
7.  **Blur Effect**: Disable the default blur effect by setting `isBlurred={false}` if a sharp background is desired.
8.  **Dropdown Integration**: `Dropdown` components can be seamlessly integrated as `NavbarItem`s for sub-menus or contextual actions.
9.  **Avatar Integration**: Easily embed `Avatar` components within the navbar, often combined with a `Dropdown` to create user profile menus.
10. **Search Input**: The navbar can accommodate search inputs for quick access to search functionality.
11. **Active Item Customization**: `NavbarItem` includes a `data-active` attribute when `isActive` is `true`, allowing for custom styling of the currently active navigation link.
12. **Custom Styling**: Customize individual navbar slots (`base`, `wrapper`, `brand`, `content`, `item`, `toggle`, `toggleIcon`, `menu`, `menuItem`) using the `classNames` prop for fine-grained control over appearance.
13. **Data Attributes**: The `Navbar` component exposes `data-menu-open` and `data-hidden` attributes. `NavbarContent` has `data-justify`. `NavbarItem` has `data-active`. `NavbarMenuToggle` has `data-open`, `data-pressed`, `data-hover`, `data-focus-visible`. `NavbarMenuItem` has `data-active`. These attributes can be used for advanced styling and state management.
14. **Accessibility**: The Navbar ensures proper navigation and interaction for all users, including those using assistive technologies, through semantic HTML and appropriate ARIA attributes.