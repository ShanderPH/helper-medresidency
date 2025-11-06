# Alert

**Purpose**: Alerts are temporary notifications that provide concise feedback about an action or event.

### Installation

To install the Alert component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add alert`
*   **pnpm**: `pnpm add @heroui/alert`
*   **npm**: `npm install @heroui/alert`
*   **yarn**: `yarn add @heroui/alert`
*   **bun**: `bun add @heroui/alert`

### Import

**Individual Import**:
```javascript
import { Alert } from "@heroui/alert";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Alert } from '@heroui/react';
```

### Usage Rules and Best Practices

1.  **Color-Coded Feedback**: Utilize the `color` prop (e.g., `default`, `primary`, `secondary`, `success`, `warning`, `danger`) to convey the nature and severity of the notification.
2.  **Visual Variants**: Choose from `solid`, `bordered`, `flat`, and `faded` variants to align with the application's design language.
3.  **Border Radius**: Adjust the `radius` prop (e.g., `none`, `sm`, `md`, `lg`, `full`) to control the alert's border-radius.
4.  **Custom Iconography**: Override the default icon with a custom one by using the `icon` prop.
5.  **Icon Visibility**: To remove the icon entirely, set `hideIcon` to `true`. For bordered alerts, `hideIconWrapper` can be set to `true` to hide the icon's background.
6.  **End Content for Actions**: Use the `endContent` prop to embed additional actions or elements, such as buttons or links, within the alert.
7.  **Controlled Visibility**: For dynamic display and dismissal, manage the alert's visibility using the `isVisible` and `onVisibleChange` props.
8.  **Custom Styling**: Customize the alert's appearance by passing custom Tailwind CSS classes to its slots, including `base`, `title`, `description`, and `closeButton`.
9.  **Advanced Customization**: For highly specific requirements, use the `useAlert` hook to build a custom alert component from the ground up.
10. **Accessibility**: Alerts are assigned a `role="alert"` to ensure they are announced by screen readers, making them accessible to all users.