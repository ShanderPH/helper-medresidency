# HeroUI Components Customization Rules

This document outlines the installation, import, and usage rules for various HeroUI components, formatted for Windsurf Cascade customization.



## Accordion

**Purpose**: The Accordion component is designed to display a list of high-level options that can expand or collapse to reveal more detailed information.

### Installation

To install the Accordion component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add accordion`
*   **pnpm**: `pnpm add @heroui/accordion`
*   **npm**: `npm install @heroui/accordion`
*   **yarn**: `yarn add @heroui/accordion`
*   **bun**: `bun add @heroui/accordion`

### Import

**Individual Import**:
```javascript
import { Accordion, AccordionItem } from "@heroui/accordion";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Accordion, AccordionItem } from '@heroui/react';
```

### Usage Rules and Best Practices

1.  **Basic Structure**: Use `<Accordion>` as the main container and `<AccordionItem>` for each individual collapsible section.
2.  **Subtitle**: Enhance clarity by adding a `subtitle` prop to `AccordionItem` for additional context.
3.  **Multiple Expansion**: To allow users to open multiple accordion items simultaneously, set the `selectionMode` prop of `<Accordion>` to `"multiple"`.
4.  **Compact Display**: For a more condensed visual presentation, apply the `isCompact` prop to the `<Accordion>` component.
5.  **Visual Variants**: Choose from `light`, `shadow`, `bordered`, and `splitted` variants for `<Accordion>` to align with the design requirements.
6.  **Default Expanded Items**: Utilize the `defaultExpandedKeys` prop on `<Accordion>` with an array of keys to pre-expand specific items upon initial render.
7.  **Disabled Items**: To prevent user interaction with certain items, use the `disabledKeys` prop on `<Accordion>` with an array of keys corresponding to the items to be disabled.
8.  **Start Content**: Integrate custom content before the item's title by using the `startContent` prop on `AccordionItem`.
9.  **Custom Indicator**: The expand/collapse indicator can be customized using the `indicator` prop on `AccordionItem`.
10. **Custom Animations**: For custom enter/exit animations, apply `motionProps` on `AccordionItem`. This requires familiarity with Framer Motion.
11. **Controlled State**: For controlled behavior, manage the `selectedKeys` prop on `<Accordion>` to programmatically control which items are open.
12. **Custom Styling**: Styles can be customized using `className` on `<Accordion>`, `itemClasses` on `<Accordion>` (for global item styling), or `classNames` on `AccordionItem` (for individual item styling).
13. **Accessibility**: The component inherently supports keyboard navigation and includes essential ARIA attributes such as `aria-expanded`, `aria-disabled`, and `aria-controls` for enhanced accessibility.



## Autocomplete

**Purpose**: The Autocomplete component combines a text input with a listbox, enabling users to filter a list of options based on their query.

### Installation

To install the Autocomplete component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add autocomplete`
*   **pnpm**: `pnpm add @heroui/autocomplete`
*   **npm**: `npm install @heroui/autocomplete`
*   **yarn**: `yarn add @heroui/autocomplete`
*   **bun**: `bun add @heroui/autocomplete`

### Import

HeroUI exports three autocomplete-related components:

*   **Autocomplete**: The primary wrapper component.
*   **AutocompleteSection**: Used for grouping autocomplete items.
*   **AutocompleteItem**: Represents an individual autocomplete option.

**Individual Import**:
```javascript
import { Autocomplete, AutocompleteItem, AutocompleteSection } from "@heroui/autocomplete";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Autocomplete, AutocompleteItem, AutocompleteSection } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Basic Structure**: Employ `<Autocomplete>` as the main container, `<AutocompleteSection>` for logical grouping, and `<AutocompleteItem>` for each selectable option.
2.  **Custom Item Rendering**: Customize the appearance of `AutocompleteItem` children to display richer content beyond simple text.
3.  **Empty Content Customization**: Modify the `emptyContent` prop within `listboxProps` to provide a custom message when no matching results are found.
4.  **Filtering Logic**: Override the default filtering mechanism by using the `defaultFilter` prop or by supplying a pre-filtered `items` prop.
5.  **Asynchronous Operations**: For server-side data loading and filtering, integrate with `useAsyncList` (from `react-aria`). Use the `isLoading` prop to display a loading indicator during data fetching.
6.  **Virtualization for Large Lists**: Enable the `isVirtualized` prop for efficient rendering of extensive lists. Ensure `maxListboxHeight` and `itemHeight` are correctly configured, especially when using custom item heights.
7.  **Section Organization**: Utilize `AutocompleteSection` to categorize and group related autocomplete items, improving user experience for complex data sets.
8.  **Granular Styling**: Customize any component slot using the `classNames` property. For fine-grained control over sub-components, use `popoverProps`, `listboxProps`, and `inputProps`.



## Alert

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



## Avatar

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



## Badge

**Purpose**: Badges are used to display small numerical values or status descriptors for UI elements, providing quick visual cues.

### Installation

To install the Badge component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add badge`
*   **pnpm**: `pnpm add @heroui/badge`
*   **npm**: `npm install @heroui/badge`
*   **yarn**: `yarn add @heroui/badge`
*   **bun**: `bun add @heroui/badge`

### Import

**Individual Import**:
```javascript
import { Badge } from "@heroui/badge";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Badge } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Size Control**: Adjust the size of the badge using the `size` prop to fit different contexts.
2.  **Color-Coded Status**: Apply different colors using the `color` prop to convey various meanings or statuses (e.g., `success` for positive, `danger` for critical).
3.  **Visual Variants**: Choose from different visual styles using the `variant` prop to match the application's aesthetic.
4.  **Placement**: Position the badge relative to its child element using the `placement` prop for optimal visual integration.
5.  **Shapes**: Define the shape of the badge (e.g., `circle`, `square`) using the `shape` prop for better visual alignment and context.
6.  **Visibility Control**: Control the badge's visibility with the `isInvisible` prop, allowing for dynamic display based on conditions.
7.  **Content**: Badges can display numerical values or short text (e.g., "new"). Keep content concise and relevant.
8.  **Outline Control**: Set `showOutline={false}` to remove the default outline if it conflicts with the design.
9.  **Accessibility**: Do not rely solely on badge content for accessibility. Always provide a comprehensive description using `aria-label` for screen readers to ensure all users understand the badge's purpose.
10. **Custom Styling**: The `Badge` component provides `base` (container) and `badge` (content) slots for custom styling using `classNames`.



## Breadcrumbs

**Purpose**: Breadcrumbs display a hierarchy of links to the current page or resource in an application, facilitating user navigation.

### Installation

To install the Breadcrumbs component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add breadcrumbs`
*   **pnpm**: `pnpm add @heroui/breadcrumbs`
*   **npm**: `npm install @heroui/breadcrumbs`
*   **yarn**: `yarn add @heroui/breadcrumbs`
*   **bun**: `bun add @heroui/breadcrumbs`

### Import

HeroUI exports two breadcrumb-related components:

*   **Breadcrumbs**: The main wrapper component.
*   **BreadcrumbItem**: Represents an individual breadcrumb item.

**Individual Import**:
```javascript
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Breadcrumbs, BreadcrumbItem } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use Breadcrumbs to clearly indicate the user's current location within a hierarchical structure, aiding navigation.
2.  **Disabled Items**: While `isDisabled` can be used on `BreadcrumbItem` to prevent navigation, the last item (representing the current page) should generally not be disabled.
3.  **Size Customization**: Adjust the size of the breadcrumbs using the `size` prop.
4.  **Color Schemes**: Customize the color scheme of the breadcrumbs using the `color` prop.
5.  **Visual Variants**: Apply different visual styles using the `variant` prop.
6.  **Underline Behavior**: Control the underline behavior (e.g., `none`, `hover`, `always`, `active`, `focus`) using the `underline` prop.
7.  **Radius Adjustment**: Adjust the border-radius of breadcrumb items with the `radius` prop.
8.  **Routing Integration**: Integrate with client-side routers (e.g., Next.js, React Router) by configuring the `BreadcrumbItem` component appropriately.
9.  **Controlled State**: Manage the active item using `isCurrent` and `onAction` props. `onPress` can handle click events for individual items.
10. **Content Augmentation**: Add custom elements before or after breadcrumb items using `startContent` and `endContent`.
11. **Custom Separator**: Customize the separator between items using the `separator` prop.
12. **Complex Items**: `BreadcrumbItem` can accept any React element as children, allowing for complex items like dropdowns within the breadcrumb trail.
13. **Collapsing Long Paths**: For long breadcrumb paths, use `maxItems`, `itemsBeforeCollapse`, and `itemsAfterCollapse` to collapse items into an ellipsis, improving readability. The ellipsis item can be customized with `renderEllipsis`.
14. **Custom Styling**: Customize `Breadcrumbs` styles with `classNames` and `BreadcrumbItem` styles with `itemClasses`.
15. **Accessibility**: The component is implemented as an ordered list with keyboard support and ARIA attributes (`aria-current`, `aria-expanded`, `aria-disabled`) for enhanced accessibility and localized labeling.



## Button

**Purpose**: Buttons allow users to perform actions and make choices with a single tap.

### Installation

To install the Button component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add button`
*   **pnpm**: `pnpm add @heroui/button`
*   **npm**: `npm install @heroui/button`
*   **yarn**: `yarn add @heroui/button`
*   **bun**: `bun add @heroui/button`

### Import

HeroUI exports two button-related components:

*   **Button**: The main component for displaying a button.
*   **ButtonGroup**: A wrapper component for displaying a group of buttons.

**Individual Import**:
```javascript
import { Button, ButtonGroup } from "@heroui/button";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Button, ButtonGroup } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use Buttons to enable users to perform actions or make selections with a single interaction.
2.  **Disabled State**: Use the `isDisabled` prop to prevent user interaction with the button.
3.  **Size Control**: Adjust the button's size using the `size` prop (e.g., `sm`, `md`, `lg`).
4.  **Radius Customization**: Modify the border-radius using the `radius` prop (e.g., `none`, `sm`, `md`, `lg`, `full`).
5.  **Color Schemes**: Apply different color schemes with the `color` prop (e.g., `default`, `primary`, `secondary`, `success`, `warning`, `danger`) to indicate importance or status.
6.  **Visual Variants**: Choose from various visual styles using the `variant` prop (e.g., `solid`, `faded`, `bordered`, `light`, `flat`, `ghost`, `shadow`) to match design requirements.
7.  **Loading State**: Use the `isLoading` prop to display a `Spinner` component inside the button, indicating an ongoing action. The spinner can be customized via the `spinner` prop.
8.  **Icons**: Enhance buttons with `startContent` or `endContent` props to include icons.
9.  **Icon-Only Buttons**: For buttons without text, use the `isIconOnly` prop and pass the icon as `children`.
10. **Custom Styling**: Customize button appearance by passing custom Tailwind CSS classes to component slots. Tailwind Merge ensures no class conflicts.
11. **Advanced Customization**: For highly specific implementations, use the `useButton` hook.
12. **ButtonGroup**: Use `<ButtonGroup>` to logically group related buttons. It supports `isDisabled` to disable all contained buttons simultaneously.
13. **Accessibility**: Buttons are semantically rendered with a `role="button"` to ensure proper accessibility for assistive technologies.



## Calendar

**Purpose**: A Calendar component displays one or more date grids, allowing users to navigate between date ranges and select dates.

### Installation

To install the Calendar component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add calendar`
*   **pnpm**: `pnpm add @heroui/calendar`
*   **npm**: `npm install @heroui/calendar`
*   **yarn**: `yarn add @heroui/calendar`
*   **bun**: `bun add @heroui/calendar`

### Import

**Individual Import**:
```javascript
import { Calendar } from "@heroui/calendar";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Calendar } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Controlled vs. Uncontrolled**: Provide an initial uncontrolled value using `defaultValue` or manage the selected date programmatically using the `value` prop for controlled behavior.
2.  **Disabled State**: Use the `isDisabled` prop to disable the entire calendar, preventing any date selection or focus.
3.  **Read-Only State**: Set the `isReadOnly` prop to make the calendar's value immutable, while still allowing it to be focused.
4.  **Date Range Restriction**: Restrict the selectable dates by setting `minValue` and `maxValue` props.
5.  **Unavailable Dates**: Use the `isDateUnavailable` prop with a callback function to mark specific dates (e.g., holidays, booked slots) as unselectable.
6.  **Controlled Focused Value**: Control the initially focused date and the visible month using `focusedValue` and `onFocusChange`. `defaultFocusedValue` can be used to set the initial focused date without full control.
7.  **Invalid Dates**: Indicate an invalid selection using the `isInvalid` prop, which can be combined with an `errorMessage` slot for visual feedback and accessibility.
8.  **Accessibility**: Calendar components are built with robust keyboard navigation (Space, Enter, Arrow keys) and include ARIA attributes to ensure enhanced accessibility for all users.



## Card

**Purpose**: The Card component serves as a flexible container for text, photos, and actions, all related to a single subject.

### Installation

To install the Card component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add card`
*   **pnpm**: `pnpm add @heroui/card`
*   **npm**: `npm install @heroui/card`
*   **yarn**: `yarn add @heroui/card`
*   **bun**: `bun add @heroui/card`

### Import

HeroUI exports four card-related components:

*   **Card**: The main component for displaying a card.
*   **CardHeader**: Typically used for the title or heading of a card.
*   **CardBody**: Contains the primary content of the card.
*   **CardFooter**: Commonly used for actions or supplementary information at the bottom of the card.

**Individual Import**:
```javascript
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Card, CardHeader, CardBody, CardFooter } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Structure**: Organize card content using `<CardHeader>` for titles, `<CardBody>` for the main content, and `<CardFooter>` for actions or additional information.
2.  **Visual Separation**: Combine with the `Divider` component for clear visual separation between sections within the card.
3.  **Image Integration**: Integrate `Image` components for visual content. Use `isFooterBlurred` on the `Card` to apply a blur effect to the footer when it overlays an image.
4.  **Composition**: Cards are designed to be highly composable, allowing integration with other HeroUI components to create complex and rich layouts.
5.  **Blurred Effect**: Apply `isBlurred` to the `Card` for a blurred background effect. Ensure an appropriate background is provided to an ancestor element for this effect to be visible.
6.  **Pressable Cards**: Set `isPressable` to `true` to make the entire card interactive, behaving like a button. Use the `onPress` callback to handle interactions.
7.  **Cover Images**: To use an image as a cover for the card, place the `Image` component outside the `<CardBody>`.
8.  **Custom Styling**: Customize card elements (`base`, `header`, `body`, `footer`) using the `classNames` prop for tailored visual designs.
9.  **Accessibility**: Cards include `data-hover`, `data-focus`, `data-focus-visible`, `data-disabled`, and `data-pressed` attributes to ensure accessibility, especially when they are interactive elements.



## Checkbox & CheckboxGroup

**Purpose**: Checkboxes allow users to select one or more items from a list. `CheckboxGroup` is used to group a set of related checkboxes.

### Installation

To install the Checkbox components, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add checkbox`
*   **pnpm**: `pnpm add @heroui/checkbox`
*   **npm**: `npm install @heroui/checkbox`
*   **yarn**: `yarn add @heroui/checkbox`
*   **bun**: `bun add @heroui/checkbox`

### Import

HeroUI exports two checkbox-related components:

*   **Checkbox**: The individual checkbox component.
*   **CheckboxGroup**: The root component that wraps the label and the group of checkboxes.

**Individual Import**:
```javascript
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Checkbox, CheckboxGroup } from '@heroui/react';
```

### Usage Rules and Best Practices

#### Checkbox

1.  **Disabled State**: Use the `isDisabled` prop to disable interaction with a single checkbox.
2.  **Size Control**: Adjust the checkbox size using the `size` prop (e.g., `sm`, `md`, `lg`).
3.  **Color Schemes**: Apply different color schemes with the `color` prop.
4.  **Radius Customization**: Modify the border-radius using the `radius` prop (e.g., `none`, `sm`, `md`, `lg`, `full`).
5.  **Indeterminate State**: Use `isIndeterminate` to set a checkbox to an indeterminate state, which is useful for representing a parent checkbox whose children have a mix of selected and unselected states.

#### CheckboxGroup

1.  **Group Disabling**: Use the `isDisabled` prop on `CheckboxGroup` to disable the entire group of checkboxes.
2.  **Horizontal Layout**: Arrange checkboxes horizontally by setting `orientation="horizontal"` on the `CheckboxGroup`.
3.  **Controlled State**: Manage the selected values of the group using the `value` and `onValueChange` props for controlled behavior.
4.  **Validation**: Use the `isInvalid` prop to indicate an invalid selection, and provide an `errorMessage` for user feedback.
5.  **Custom Styling**: Customize the `CheckboxGroup` component by passing custom Tailwind CSS classes to its slots (`base`, `wrapper`, `label`, `description`, `errorMessage`).
6.  **Advanced Customization**: For highly specific implementations, use the `useCheckboxGroup` hook.
7.  **Accessibility**: The components are built with native HTML input elements, ensuring support for keyboard navigation and ARIA attributes for a fully accessible experience.



## Chip

**Purpose**: A Chip is a small block of essential information that represents an input, attribute, or action.

### Installation

To install the Chip component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add chip`
*   **pnpm**: `pnpm add @heroui/chip`
*   **npm**: `npm install @heroui/chip`
*   **yarn**: `yarn add @heroui/chip`
*   **bun**: `bun add @heroui/chip`

### Import

**Individual Import**:
```javascript
import { Chip } from "@heroui/chip";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Chip } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use Chips to represent small, essential pieces of information such as inputs, attributes, or actions in a compact visual form.
2.  **Disabled State**: Use the `isDisabled` prop to disable interaction with the chip.
3.  **Size Control**: Control the chip size with the `size` prop (e.g., `sm`, `md`, `lg`).
4.  **Color Schemes**: Apply different color schemes using the `color` prop to convey various meanings or statuses.
5.  **Radius Customization**: Adjust the border-radius using the `radius` prop (e.g., `full`, `lg`, `md`, `sm`).
6.  **Visual Variants**: Choose from various visual styles using the `variant` prop (e.g., `solid`, `bordered`, `light`, `flat`, `faded`, `shadow`, `dot`).
7.  **Content Augmentation**: Add custom elements to the start or end of the chip using `startContent` and `endContent` props.
8.  **Closable Chips**: If the `onClose` prop is provided, a close button will be visible, allowing the chip to be dismissed. The close icon can be customized by overriding `endContent`.
9.  **Avatar Integration**: Integrate an `Avatar` component within the chip for user representation, often used in contact or tag chips.
10. **List of Chips**: Chips can be effectively used in lists to represent multiple selections, tags, or categories.
11. **Custom Styling**: Customize chip elements (`base`, `content`, `dot`, `avatar`, `closeButton`) using the `classNames` prop for fine-grained styling.
12. **Accessibility**: Ensure proper `aria-label` is used for chips, especially when their content is not fully descriptive, as relying solely on visual content for accurate announcement is not advisable for screen readers.



## Circular Progress

**Purpose**: Circular progress indicators are used to signify an undetermined waiting period or to visually represent the duration of a process.

### Installation

To install the Circular Progress component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add progress`
*   **pnpm**: `pnpm add @heroui/progress`
*   **npm**: `npm install @heroui/progress`
*   **yarn**: `yarn add @heroui/progress`
*   **bun**: `bun add @heroui/progress`

### Import

**Individual Import**:
```javascript
import { CircularProgress } from "@heroui/progress";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { CircularProgress } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Employ Circular Progress indicators to visually communicate an ongoing process, whether its duration is known (determinate) or unknown (indeterminate).
2.  **Accessibility**: Always provide an `aria-label` prop when the `label` prop is not used, ensuring accessibility for screen readers.
3.  **Size Control**: Adjust the size of the circular progress indicator using the `size` prop.
4.  **Color Schemes**: Apply different color schemes with the `color` prop to match the application's theme or convey status.
5.  **Labeling**: Include a descriptive label using the `label` prop to provide context for the progress.
6.  **Value Display**: Display the current progress value using the `value` prop for determinate progress indicators.
7.  **Value Formatting**: Customize how the value is displayed (e.g., as a percentage, with specific units) using the `formatOptions` prop, which is compatible with `Intl.NumberFormat`.
8.  **Custom Styling**: Customize the `CircularProgress` component by passing custom Tailwind CSS classes to its various slots (`base`, `svgWrapper`, `svg`, `track`, `indicator`, `value`, `label`).
9.  **Data Attributes**: The component includes `data-indeterminate` and `data-disabled` attributes, which can be used for styling and managing state.
10. **Accessibility**: The component is exposed to assistive technology as a progress bar via ARIA attributes, supporting labeling and internationalized number formatting for both determinate and indeterminate states.



## Code

**Purpose**: The Code component is used to display inline code snippets within text.

### Installation

To install the Code component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add code`
*   **pnpm**: `pnpm add @heroui/code`
*   **npm**: `npm install @heroui/code`
*   **yarn**: `yarn add @heroui/code`
*   **bun**: `bun add @heroui/code`

### Import

**Individual Import**:
```javascript
import { Code } from "@heroui/code";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Code } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use the `Code` component specifically for displaying inline code snippets to differentiate them from regular text.
2.  **Size Control**: Control the size of the code snippet using the `size` prop (e.g., `sm`, `md`, `lg`).
3.  **Color Schemes**: Apply different color schemes with the `color` prop (e.g., `default`, `primary`, `secondary`, `success`, `warning`, `danger`) to match the application's theme.
4.  **Radius Customization**: Adjust the border-radius using the `radius` prop (e.g., `none`, `sm`, `md`, `lg`, `full`) for visual styling.
5.  **Content**: The actual code to be displayed should be passed as children to the `Code` component.
6.  **Accessibility**: Ensure that the code content is readable and understandable. For complex code or when the code is part of an image, consider providing alternative text or descriptions to aid accessibility.



## DateInput

**Purpose**: The DateInput component allows users to enter and edit date and time values using a keyboard, with each part of a date value displayed in an individually editable segment.

### Installation

To install the DateInput component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add date-input`
*   **pnpm**: `pnpm add @heroui/date-input`
*   **npm**: `npm install @heroui/date-input`
*   **yarn**: `yarn add @heroui/date-input`
*   **bun**: `bun add @heroui/date-input`

### Import

**Individual Import**:
```javascript
import { DateInput } from "@heroui/date-input";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { DateInput } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use DateInput for precise keyboard entry and editing of date and time values, where individual segments (e.g., day, month, year) are editable.
2.  **Disabled State**: Use the `isDisabled` prop to disable the entire date input, preventing user interaction.
3.  **Read-Only State**: Set the `isReadOnly` prop to make the input immutable while still allowing it to be focused.
4.  **Required Field**: Mark the input as required using the `isRequired` prop.
5.  **Visual Variants**: Apply different visual styles using the `variant` prop.
6.  **Label Placement**: Control the label's position using `labelPlacement` (`inside`, `outside`, `outside-left`).
7.  **Content Augmentation**: Add custom elements to the start or end of the input using `startContent` and `endContent`.
8.  **Description**: Provide additional context or instructions with the `description` prop.
9.  **Error Messaging**: Combine `isInvalid` and `errorMessage` to display validation feedback. `errorMessage` can be a function for dynamic messages.
10. **Controlled State**: Manage the input value using `value` and `onChange` props for controlled component behavior.
11. **Time Zones**: Supports `ZonedDateTime` objects for time zone awareness, displaying abbreviations and handling daylight saving. Requires `@internationalized/date` for full functionality.
12. **Granularity**: Control the smallest displayed unit (e.g., `day`, `minute`) using the `granularity` prop.
13. **Date Range Restriction**: Restrict selectable dates using `minValue` and `maxValue` props.
14. **International Calendar Support**: Supports various calendar systems (Gregorian, Hebrew, Islamic, etc.) based on locale. This can be overridden with Unicode calendar locale extension via `I18nProvider`.
15. **Hide Time Zone**: Use the `hideTimeZone` option when the time zone is displayed elsewhere or is implicitly understood.
16. **Hourly Cycle**: Override the default 12/24-hour format using the `hourCycle` prop.
17. **Custom Styling**: Customize slots (`base`, `label`, `inputWrapper`, `input`, `innerWrapper`, `clearButton`, `helperWrapper`, `description`, `errorMessage`) using `classNames`.
18. **Accessibility**: Built with native `<input>` elements, supporting ARIA attributes for required, invalid states, and labeling. Individual segments are focusable and editable for keyboard navigation, enhancing accessibility.



## DatePicker

**Purpose**: The DatePicker component combines a DateInput and a Calendar popover, allowing users to easily enter or select a date and time value.

### Installation

To install the DatePicker component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add date-picker`
*   **pnpm**: `pnpm add @heroui/date-picker`
*   **npm**: `npm install @heroui/date-picker`
*   **yarn**: `yarn add @heroui/date-picker`
*   **bun**: `bun add @heroui/date-picker`

### Import

**Individual Import**:
```javascript
import { DatePicker } from "@heroui/date-picker";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { DatePicker } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use DatePicker to provide a comprehensive solution for date and time selection, combining keyboard input with a visual calendar.
2.  **Controlled vs. Uncontrolled**: Supports both controlled (`value`, `onChange`) and uncontrolled (`defaultValue`) states for managing the selected date and time.
3.  **Disabled State**: Use the `isDisabled` prop to disable the entire date picker, preventing any interaction.
4.  **Read-Only State**: Set the `isReadOnly` prop to make the date picker immutable while still allowing it to be focused.
5.  **Required Field**: Mark the input as required using the `isRequired` prop.
6.  **Visual Variants**: Apply different visual styles using the `variant` prop.
7.  **Label Placement**: Control the label's position using `labelPlacement` (`inside`, `outside`, `outside-left`).
8.  **Content Augmentation**: Add custom elements to the start or end of the input using `startContent` and `endContent`.
9.  **Description**: Provide additional context or instructions with the `description` prop.
10. **Error Messaging**: Combine `isInvalid` and `errorMessage` to display validation feedback.
11. **Time Zones**: Supports `ZonedDateTime` objects for time zone awareness. Requires `@internationalized/date` for full functionality.
12. **Granularity**: Control the smallest displayed unit (e.g., `day`, `minute`) using the `granularity` prop.
13. **Date Range Restriction**: Restrict selectable dates using `minValue` and `maxValue` props.
14. **International Calendar Support**: Supports various calendar systems based on locale. Can be overridden with Unicode calendar locale extension via `I18nProvider`.
15. **Hide Time Zone**: Use the `hideTimeZone` option when the time zone is displayed elsewhere or is implicitly understood.
16. **Hourly Cycle**: Override the default 12/24-hour format using the `hourCycle` prop.
17. **Custom Styling**: Customize slots using `classNames` for tailored visual designs.
18. **Accessibility**: Built with native input elements, supporting ARIA attributes for required, invalid states, and labeling. Provides keyboard navigation and accessibility for date selection.



## Date Range Picker

**Purpose**: The Date Range Picker combines two DateInputs and a RangeCalendar popover, allowing users to enter or select a date and time range.

### Installation

To install the Date Range Picker component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add date-picker`
*   **pnpm**: `pnpm add @heroui/date-picker`
*   **npm**: `npm install @heroui/date-picker`
*   **yarn**: `yarn add @heroui/date-picker`
*   **bun**: `bun add @heroui/date-picker`

### Import

**Individual Import**:
```javascript
import { DateRangePicker } from "@heroui/date-picker";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { DateRangePicker } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use Date Range Picker to enable users to select a start and end date/time, combining input fields with a calendar popover.
2.  **Disabled State**: Use the `isDisabled` prop to disable the entire date range picker.
3.  **Read-Only State**: Set the `isReadOnly` prop to make the date range picker immutable.
4.  **Required Field**: Mark the input as required using the `isRequired` prop.
5.  **Visual Variants**: Apply different visual styles using the `variant` prop.
6.  **Visible Months**: Control the number of months displayed in the calendar popover (up to 3) using the `visibleMonths` prop.
7.  **Custom First Day of Week**: Set the `firstDayOfWeek` prop to customize the start day of the week in the calendar.
8.  **Page Behavior**: Adjust pagination behavior (single month or by `visibleMonths`) using the `pageBehavior` prop.
9.  **Label Placement**: Control the label's position using `labelPlacement` (`inside`, `outside`, `outside-left`).
10. **Description**: Provide additional context with the `description` prop.
11. **Error Messaging**: Combine `isInvalid` and `errorMessage` to display validation feedback.
12. **Month and Year Pickers**: Enable `showMonthAndYearPickers` for direct month and year selection, noting it's disabled if `visibleMonths` > 1.
13. **Time Fields**: Time fields are automatically included when `CalendarDateTime` or `ZonedDateTime` objects are provided as values.
14. **Selector Icon**: Customize the selector icon using the `selectorIcon` prop and its placement with `selectorButtonPlacement`.
15. **Controlled State**: Manage the input value using `value` and `onChange` props for controlled component behavior.
16. **Time Zones**: Supports `ZonedDateTime` objects for time zone awareness. Requires `@internationalized/date`.
17. **Granularity**: Control the smallest displayed unit (e.g., `day`, `minute`) using the `granularity` prop.
18. **Date Range Restriction**: Restrict selectable date ranges using `minValue` and `maxValue` props.
19. **International Calendar Support**: Supports various calendar systems based on locale. Can be overridden with Unicode calendar locale extension via `I18nProvider`.
20. **Unavailable Dates**: Mark specific dates as unavailable using the `isDateUnavailable` callback. Invalid states are displayed for unavailable dates.
21. **Non-Contiguous Ranges**: Use `allowsNonContiguousRanges` to enable selection even with unavailable dates in between, though the value remains a single range.
22. **Presets**: The component supports presets, implying predefined date range options for quick selection.
23. **Custom Styling**: Customize slots (`base`, `label`, `inputWrapper`, `input`, `innerWrapper`, `clearButton`, `helperWrapper`, `description`, `errorMessage`) using `classNames`.
24. **Accessibility**: Built with native input elements, supporting ARIA attributes for required, invalid states, and labeling. Provides keyboard navigation and accessibility for date range selection.



## Divider

**Purpose**: The Divider component is used to visually separate content sections on a page, enhancing readability and organization.

### Installation

To install the Divider component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add divider`
*   **pnpm**: `pnpm add @heroui/divider`
*   **npm**: `npm install @heroui/divider`
*   **yarn**: `yarn add @heroui/divider`
*   **bun**: `bun add @heroui/divider`

### Import

**Individual Import**:
```javascript
import { Divider } from "@heroui/divider";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Divider } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Employ the Divider component to create clear visual distinctions between different content blocks, improving the layout and user experience.
2.  **Orientation**: The `orientation` prop determines whether the divider is `horizontal` (default) or `vertical`. Choose the orientation that best suits the layout and content flow.
3.  **Content Inclusion**: The Divider can be used with or without content. When content is provided, it will be rendered within the divider, often used for labels or icons.
4.  **Accessibility**: The component automatically adds a `separator` role for assistive technologies, ensuring it is properly announced. It supports both horizontal and vertical orientations and can be rendered as an HTML `<hr>` element or a custom element type for flexibility.
5.  **Data Attributes**: The `data-orientation` attribute is available on the `base` element, providing a clear indication of the divider's orientation for styling or scripting purposes.



## Dropdown

**Purpose**: The Dropdown component displays a list of actions or options that a user can choose from.

### Installation

To install the Dropdown component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add dropdown`
*   **pnpm**: `pnpm add @heroui/dropdown`
*   **npm**: `npm install @heroui/dropdown`
*   **yarn**: `yarn add @heroui/dropdown`
*   **bun**: `bun add @heroui/dropdown`

### Import

HeroUI exports five dropdown-related components:

*   **Dropdown**: The main wrapper component, extending the `Popover` component and inheriting its props.
*   **DropdownTrigger**: The component that activates the dropdown menu.
*   **DropdownMenu**: The container for dropdown items.
*   **DropdownSection**: Used to group related dropdown items.
*   **DropdownItem**: Represents an individual item within the dropdown.

**Individual Import**:
```javascript
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@heroui/dropdown";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use Dropdown to present a list of actions or options to the user in a compact, accessible manner.
2.  **Component Structure**: Utilize `Dropdown` as the main wrapper, `DropdownTrigger` to define the element that opens the dropdown, `DropdownMenu` to contain the options, `DropdownSection` for grouping, and `DropdownItem` for individual choices.
3.  **Dynamic Items**: Supports both static and dynamic collections of items. For dynamic data, pass the `items` prop to `DropdownMenu`.
4.  **Disabled Items**: Disable specific dropdown items using the `disabledKeys` prop on `DropdownMenu`. Ensure each item has a unique `key`.
5.  **Action Handling**: Use the `onAction` prop on `DropdownMenu` to capture the `key` of the selected item when an action is performed.
6.  **Visual Variants**: Customize the hover style of dropdown items using the `variant` prop on `DropdownMenu` (e.g., `solid`, `bordered`, `light`, `flat`, `faded`, `shadow`).
7.  **Selection Modes**: Set `selectionMode` to `single` for single item selection or `multiple` for multiple selections. Use `disallowEmptySelection={false}` to allow the user to deselect all items.
8.  **Keyboard Shortcuts**: Add keyboard shortcuts to `DropdownItem` using the `shortcut` prop. Note that event handling for these shortcuts must be implemented manually.
9.  **Icons**: Include `startContent` or `endContent` props on `DropdownItem` to add icons. Using `currentColor` for icon color will automatically match the text color.
10. **Description**: Add a descriptive text to `DropdownItem` using the `description` prop for more context.
11. **Sections**: Group related dropdown items using `DropdownSection`. Sections without a title require an `aria-label` for accessibility.
12. **Custom Trigger**: Any React component can serve as a trigger by wrapping it within `DropdownTrigger`.
13. **Backdrop Customization**: As an extension of `Popover`, `Dropdown` accepts `Popover` props, including `backdrop` for customizing the overlay behavior.
14. **Routing Integration**: `DropdownItem` is designed to work seamlessly with client-side routers like Next.js and React Router.
15. **Custom Styling**: Customize `DropdownMenu` items using `itemClasses` (for all items) or individual `DropdownItem` slots (`base`, `wrapper`, `title`, `description`, `shortcut`, `selectedIcon`). `DropdownSection` slots include `base`, `heading`, `group`, and `divider`.
16. **Accessibility**: Implemented with ARIA roles (`button`, `menu`), supporting single/multiple selection, disabled items, sections, complex labeling, keyboard navigation (Arrow keys, Home/End, Page Up/Down, typeahead), and virtualized scrolling for long lists to ensure a fully accessible experience.



## Drawer

**Purpose**: The Drawer component displays a panel that slides in from the edge of the screen, containing supplementary content.

### Installation

To install the Drawer component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add drawer`
*   **pnpm**: `pnpm add @heroui/drawer`
*   **npm**: `npm install @heroui/drawer`
*   **yarn**: `yarn add @heroui/drawer`
*   **bun**: `bun add @heroui/drawer`

### Import

HeroUI exports five drawer-related components:

*   **Drawer**: The main component for displaying a drawer.
*   **DrawerContent**: The wrapper for other drawer components.
*   **DrawerHeader**: The header section of the drawer.
*   **DrawerBody**: The main content area of the drawer.
*   **DrawerFooter**: The footer section of the drawer.

**Individual Import**:
```javascript
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from "@heroui/drawer";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use Drawer to present supplementary content or navigation in a panel that slides in from the edge of the screen, without obscuring the main content entirely.
2.  **Component Structure**: Utilize `Drawer` as the main container, `DrawerContent` to wrap its internal sections, and `DrawerHeader`, `DrawerBody`, and `DrawerFooter` for structured content.
3.  **Focus Management**: When open, the drawer manages focus within its boundaries, and the content behind it becomes inert. Focus is automatically set to the first tabbable element inside the drawer upon opening and returns to the trigger element upon closing.
4.  **Size Control**: Control the drawer's width or height using the `size` prop (e.g., `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `full`).
5.  **Non-Dismissible Behavior**: To prevent the drawer from closing when clicking the overlay, set `isDismissable={false}`. To disable closing via the Escape key, use `isKeyboardDismissDisabled={true}`.
6.  **Placement**: Position the drawer to slide in from `left`, `right` (default), `top`, or `bottom` using the `placement` prop.
7.  **Form Integration**: Drawers are suitable for containing forms, as they handle focus within their content. For convenience, consider using `autoFocus` on the first input field within the drawer.
8.  **Backdrop Customization**: Customize the overlay (backdrop) with `transparent`, `opaque` (default), or `blur` options using the `backdrop` prop.
9.  **Custom Animations**: Use the `motionProps` property to define custom enter/exit animations, which integrates with Framer Motion.
10. **Custom Styling**: Customize drawer slots (`wrapper`, `base`, `backdrop`, `header`, `body`, `footer`, `closeButton`) using the `classNames` prop for tailored visual designs.
11. **Accessibility**: Content outside the drawer is hidden from assistive technologies when the drawer is open. The component supports closing via outside interaction or the Escape key, manages focus for accessibility, and prevents page scrolling behind the open drawer.



## Form

**Purpose**: The Form component is designed to group inputs, allowing users to submit data to a server, with robust support for field validation errors.

### Installation

To install the Form component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add form`
*   **pnpm**: `pnpm add @heroui/form`
*   **npm**: `npm install @heroui/form`
*   **yarn**: `yarn add @heroui/form`
*   **bun**: `bun add @heroui/form`

### Import

**Individual Import**:
```javascript
import { Form } from "@heroui/form";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Form } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use the `Form` component to logically group input elements and facilitate data submission to a server, including comprehensive support for validation and error handling.
2.  **Anatomy**: A `Form` acts as a container for input elements and associated submit/reset buttons. When labeled with `aria-label` or `aria-labelledby`, it becomes a navigable form landmark for assistive technologies, enhancing accessibility.
3.  **Events**: The `onSubmit` event is triggered upon form submission (e.g., by pressing Enter or clicking a submit button). The `onReset` event is triggered when a reset button is activated.
4.  **Validation**: The component supports native HTML constraint validation with a customizable UI. It also allows for custom validation functions and server-side validation. Server-side errors can be passed via the `validationErrors` prop and are automatically cleared when the associated field is modified.
5.  **Validation Behavior**: By default, it uses native validation. For real-time error display without blocking submission, `validationBehavior` can be set to `"aria"`. This behavior can be configured at the form level, field level, or globally via `HeroUI Provider`.
6.  **Accessibility**: The `Form` component is built upon a native HTML `<form>` element, providing inherent support for ARIA labeling for form landmarks and full browser autofill features. It offers robust support for various validation states and messages, ensuring an accessible user experience.



## Image

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



## Input

**Purpose**: The Input component allows users to enter text, serving various purposes such as forms, search fields, and more.

### Installation

To install the Input component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add input`
*   **pnpm**: `pnpm add @heroui/input`
*   **npm**: `npm install @heroui/input`
*   **yarn**: `yarn add @heroui/input`
*   **bun**: `bun add @heroui/input`

### Import

**Individual Import**:
```javascript
import { Input } from "@heroui/input";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Input } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use the `Input` component for any scenario requiring text input from the user, such as in forms or search functionalities.
2.  **Disabled State**: Use the `isDisabled` prop to prevent user interaction with the input field.
3.  **Read-Only State**: Set the `isReadOnly` prop to make the input field immutable, preventing direct editing while still allowing its value to be displayed.
4.  **Required Field**: Mark the input as required using the `isRequired` prop, which typically displays a visual indicator like a danger asterisk.
5.  **Size Control**: Control the input field's size using the `size` prop.
6.  **Color Schemes**: Apply different color schemes with the `color` prop to match the application's theme or convey status.
7.  **Visual Variants**: Choose from various visual styles using the `variant` prop to align with design requirements.
8.  **Radius Customization**: Adjust the border-radius using the `radius` prop.
9.  **Label Placement**: Position the label `inside`, `outside`, `outside-left`, or `outside-top` using the `labelPlacement` prop for optimal layout.
10. **Password Input**: For password fields, set `type="password"`. This automatically includes a visibility toggle for user convenience.
11. **Clearable Input**: Use `isClearable` to add a clear button that becomes visible when the input field contains a value.
12. **Content Augmentation**: Add custom elements to the start or end of the input field using `startContent` and `endContent` props (e.g., icons, currency symbols).
13. **Description**: Provide additional context or instructions with the `description` prop.
14. **Error Messaging**: Combine `isInvalid` and `errorMessage` to display validation feedback. The `errorMessage` is only shown when `isInvalid` is `true`.
15. **Controlled State**: Manage the input value using `value` and `onValueChange` props for controlled component behavior. It also supports native `onChange` for integration with form libraries like Formik and React Hook Form.
16. **Form Integration**: Integrate with the `Form` component for comprehensive state management and validation. It supports native HTML constraints (`isRequired`, `minLength`, `maxLength`, `pattern`, `type="email"`, `type="url"`), custom validation via the `validate` prop, real-time validation, and server-side validation via the `validationErrors` prop on the `Form` component.
17. **Custom Styling**: Customize various slots (`base`, `label`, `mainWrapper`, `inputWrapper`, `innerWrapper`, `input`, `clearButton`, `helperWrapper`, `description`, `errorMessage`) using `classNames`.
18. **Advanced Customization**: For highly specific implementations, use the `useInput` hook.
19. **Accessibility**: Built with a native `<input>` element, supporting ARIA attributes for labeling, required, invalid states, and help text. It also supports various input events for a fully accessible experience.



## Input OTP

**Purpose**: The Input OTP component enables users to enter one-time passwords (OTP) or similar short, numerical codes.

### Installation

To install the Input OTP component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add input-otp`
*   **pnpm**: `pnpm add @heroui/input-otp`
*   **npm**: `npm install @heroui/input-otp`
*   **yarn**: `yarn add @heroui/input-otp`
*   **bun**: `bun add @heroui/input-otp`

### Import

**Individual Import**:
```javascript
import { InputOtp } from "@heroui/input-otp";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { InputOtp } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `InputOtp` specifically for entering one-time passwords (OTP) or other short, fixed-length numerical codes.
2.  **Disabled State**: Use the `isDisabled` prop to prevent user interaction with the component.
3.  **Read-Only State**: Set the `isReadOnly` prop to make the input read-only while maintaining its visual appearance.
4.  **Required Field**: Mark the input as required using the `isRequired` prop.
5.  **Size Control**: Customize the size of the `InputOtp` using the `size` prop (e.g., `sm`, `md`, `lg`). The default size is `md`.
6.  **Color Schemes**: Change the color scheme using the `color` prop to match the application's theme.
7.  **Visual Variants**: Apply different visual styles using the `variant` prop (e.g., `flat`, `bordered`, `underlined`, `faded`). The default variant is `flat`.
8.  **Radius Customization**: Adjust the border-radius using the `radius` prop (e.g., `none`, `sm`, `md`, `lg`, `full`). The default radius is `md`.
9.  **Password Type**: Set `type="password"` to mask the input characters, suitable for secured PINs or sensitive codes.
10. **Description**: Provide additional context or instructions with the `description` prop.
11. **Error Messaging**: Display custom error messages using the `errorMessage` prop, typically in conjunction with the `isInvalid` prop to indicate validation failures.
12. **Allowed Characters**: Control the accepted input characters using the `allowedKeys` prop, which takes a regex pattern. The default is `^[0-9]*$` for numerical digits.
13. **Controlled State**: Manage the input value using `value` and `onValueChange` props for controlled component behavior.
14. **React Hook Form Integration**: The component is compatible with React Hook Form for streamlined validation and submission handling.
15. **Length Configuration**: Set the number of input segments using the `length` prop (e.g., 4 for PINs, 6 for authentication codes).
16. **Custom Styling**: Customize component slots (`base`, `wrapper`, `input`, `segmentWrapper`, `segment`, `caret`, `passwordChar`, `helperWrapper`, `description`, `errorMessage`) using `classNames` for fine-grained visual control.
17. **Data Attributes**: The `base` element includes `data-invalid`, `data-required`, `data-readonly`, `data-filled`, and `data-disabled`. Individual `segment` elements include `data-active`, `data-focus`, `data-focus-visible`, and `data-has-value` for styling and state management.
18. **Accessibility**: Built on top of the `input-otp` library with ARIA attributes for required and invalid states. It supports keyboard navigation (Tab, Arrow keys, Backspace) for individual segments, ensuring an accessible user experience.



## Kbd

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



## Link

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



## Listbox

**Purpose**: A Listbox displays a list of options and allows a user to select one or more of them.

### Installation

To install the Listbox component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add listbox`
*   **pnpm**: `pnpm add @heroui/listbox`
*   **npm**: `npm install @heroui/listbox`
*   **yarn**: `yarn add @heroui/listbox`
*   **bun**: `bun add @heroui/listbox`

### Import

HeroUI exports three listbox-related components:

*   **Listbox**: The main wrapper component.
*   **ListboxSection**: The component that contains a group of listbox items.
*   **ListboxItem**: The component that represents a listbox item.

**Individual Import**:
```javascript
import { Listbox, ListboxSection, ListboxItem } from "@heroui/listbox";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Listbox, ListboxSection, ListboxItem } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use Listbox to present a list of options from which users can select one or multiple items.
2.  **Component Structure**: Consists of `Listbox` as the main container, `ListboxSection` for grouping, and `ListboxItem` for individual options.
3.  **Dynamic Items**: Supports both static and dynamic collections of items. For dynamic data, pass the `items` prop to `Listbox`.
4.  **Disabled Items**: Disable specific listbox items using the `disabledKeys` prop on the `Listbox` component. Ensure items have unique keys.
5.  **Visual Variants**: Customize the hover style of listbox items using the `variant` prop on `Listbox`.
6.  **Selection Modes**: Set `selectionMode` to `single` for single item selection or `multiple` for multiple selections. Use `disallowEmptySelection={false}` to allow no selection.
7.  **Icons**: Include `startContent` or `endContent` props on `ListboxItem` to add icons. Using `currentColor` for icon color will match text color.
8.  **Description**: Add a description to `ListboxItem` using the `description` prop for additional context.
9.  **Top & Bottom Content**: Add custom content above and below the listbox items using `topContent` and `bottomContent` props.
10. **Sections**: Group related listbox items using `ListboxSection`. Sections without a title require an `aria-label` for accessibility.
11. **Routing Integration**: `ListboxItem` is designed to work with client-side routers like Next.js and React Router.
12. **Virtualization**: Enable `isVirtualized` for efficient rendering of large lists by only rendering visible items (utilizes `@tanstack/react-virtual`).
13. **Custom Styling**: Customize `Listbox` items using `itemClasses` (for all items) or individual `ListboxItem` slots (`base`, `wrapper`, `title`, `description`, `selectedIcon`). `ListboxSection` slots include `base`, `heading`, `group`, and `divider`.
14. **Accessibility**: Exposed to assistive technology as a `listbox` via ARIA attributes. Supports single/multiple selection, disabled items, sections, labeling, mouse/touch/keyboard interactions, tab stop focus management, keyboard navigation (arrow keys, home/end, page up/down, select all, clear), and typeahead. Automatic scrolling is supported during keyboard navigation.



## Modal

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



## Navbar

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



## Number Input

**Purpose**: The Number Input component is designed for users to enter a number, and increase or decrease the value using stepper buttons.

### Installation

To install the Number Input component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add number-input`
*   **pnpm**: `pnpm add @heroui/number-input`
*   **npm**: `npm install @heroui/number-input`
*   **yarn**: `yarn add @heroui/number-input`
*   **bun**: `bun add @heroui/number-input`

### Import

**Individual Import**:
```javascript
import { NumberInput } from "@heroui/number-input";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { NumberInput } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `NumberInput` for numerical data entry, offering optional stepper buttons for incrementing or decrementing values.
2.  **Disabled State**: Use the `isDisabled` prop to prevent user interaction with the number input.
3.  **Read-Only State**: Set the `isReadOnly` prop to make the input immutable while keeping it focusable.
4.  **Required Field**: Mark the input as required using the `isRequired` prop.
5.  **Size Control**: Control the input field's size with the `size` prop.
6.  **Color Schemes**: Apply different color schemes using the `color` prop.
7.  **Visual Variants**: Choose from various visual styles using the `variant` prop.
8.  **Radius Customization**: Adjust the border-radius using the `radius` prop.
9.  **Label Placement**: Position the label `inside`, `outside`, or `outside-left` using `labelPlacement`.
10. **Clearable Input**: Use `isClearable` to add a clear button that appears when the input has a value.
11. **Hide Stepper Buttons**: Use `hideStepper` to hide the increment/decrement buttons if they are not needed.
12. **Content Augmentation**: Add custom elements to the start or end of the input using `startContent` and `endContent`.
13. **Label**: Provide a descriptive label for the input using the `label` prop.
14. **Description**: Provide additional context or instructions with the `description` prop.
15. **Min/Max Value**: Set `minValue` and `maxValue` to restrict the acceptable numerical range.
16. **Wheel Disabled**: Use `isWheelDisabled` to prevent changing the value with the scroll wheel.
17. **Format Options**: Use `formatOptions` to format the displayed number (e.g., currency, percentage, unit), compatible with `Intl.NumberFormat`.
18. **Error Messaging**: Combine `isInvalid` and `errorMessage` for validation feedback. `errorMessage` is only shown when `isInvalid` is `true`.
19. **Controlled State**: Manage the input value using `value` and `onValueChange` props for controlled component behavior. It also supports native `onChange` for integration with form libraries.
20. **Form Integration**: Integrate with the `Form` component for state management and validation. Supports custom validation via the `validate` prop, real-time validation, and server-side validation via the `validationErrors` prop on the `Form` component.
21. **Custom Styling**: Customize slots (`base`, `label`, `mainWrapper`, `inputWrapper`, `innerWrapper`, `input`, `clearButton`, `stepperButton`, `stepperWrapper`, `description`, `errorMessage`) using `classNames`.
22. **Data Attributes**: The `base` element includes `data-invalid`, `data-required`, `data-readonly`, `data-hover`, `data-focus`, `data-focus-within`, `data-focus-visible`, `data-disabled`, `data-filled`, `data-has-elements`, `data-has-helper`, `data-has-description`, and `data-has-value`.
23. **Accessibility**: Built with a native `<input type="number">`, supporting ARIA attributes for labeling, required/invalid states, and help text, ensuring an accessible user experience.



## Pagination

**Purpose**: The Pagination component allows you to display the active page and navigate between multiple pages.

### Installation

To install the Pagination component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add pagination`
*   **pnpm**: `pnpm add @heroui/pagination`
*   **npm**: `npm install @heroui/pagination`
*   **yarn**: `yarn add @heroui/pagination`
*   **bun**: `bun add @heroui/pagination`

### Import

HeroUI exports three pagination-related components:

*   **Pagination**: The main component for displaying pagination controls.
*   **PaginationItem**: An internal component used to display an individual page item.
*   **PaginationCursor**: An internal component used to display the current active page.

**Individual Import**:
```javascript
import { Pagination, PaginationItem, PaginationCursor } from "@heroui/pagination";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Pagination, PaginationItem, PaginationCursor } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `Pagination` to enable users to navigate through large sets of data by displaying page numbers and controls.
2.  **Component Structure**: Consists of `Pagination` as the main wrapper, `PaginationItem` for individual page links, and `PaginationCursor` for the visual indicator of the current page.
3.  **Disabled State**: Use the `isDisabled` prop to disable the entire pagination component, preventing any interaction.
4.  **Size Control**: Control the size of the pagination elements using the `size` prop.
5.  **Color Schemes**: Apply different color schemes with the `color` prop to match the application's theme.
6.  **Visual Variants**: Customize the style of pagination items using the `variant` prop.
7.  **Navigation Controls**: Display `next` and `previous` buttons by setting `showControls` to `true`.
8.  **Looping Navigation**: Enable continuous navigation by setting `loop` to `true`, allowing the page cursor to wrap around from the last page to the first and vice versa.
9.  **Initial Page**: Set the starting page using the `initialPage` prop.
10. **Compact Version**: Display a reduced version of the pagination by setting `isCompact` to `true`, suitable for limited space.
11. **Shadow Effect**: Add a shadow below the active page item using the `showShadow` prop for visual emphasis.
12. **Controlled State**: Manage the active page using `page` and `onPageChange` props for controlled component behavior.
13. **Sibling Pages**: Control the number of pages shown immediately before and after the current page using the `siblings` prop.
14. **Boundary Pages**: Control the number of pages shown at the beginning and end of the pagination using the `boundaries` prop.
15. **Custom Item Rendering**: Customize the rendering of individual pagination items using the `renderItem` prop for unique designs.
16. **Custom Styling**: Customize various slots (`base`, `wrapper`, `prev`, `next`, `item`, `cursor`, `forwardIcon`, `ellipsis`, `chevronNext`) using `classNames`.
17. **Advanced Customization**: For highly specific implementations, use the `usePagination` hook.
18. **Data Attributes**: The `base` element includes various `data-*` attributes (e.g., `data-controls`, `data-loop`, `data-dots-jump`, `data-total`, `data-active-page`) for advanced styling and state management.
19. **Accessibility**: The root node has a `navigation` role. Pagination items have `aria-label` attributes for accessibility, which can be overridden with `getItemAriaLabel`. Items are in tab order with `tabindex="0"` and support keyboard navigation.



## Popover

**Purpose**: The Popover component is a **non-modal** dialog that floats around its disclosure, commonly used for displaying additional rich content on top of something.

### Installation

To install the Popover component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add popover`
*   **pnpm**: `pnpm add @heroui/popover`
*   **npm**: `npm install @heroui/popover`
*   **yarn**: `yarn add @heroui/popover`
*   **bun**: `bun add @heroui/popover`

### Import

HeroUI exports three popover-related components:

*   **Popover**: The main component for displaying a popover.
*   **PopoverTrigger**: The component that triggers the popover to open.
*   **PopoverContent**: The component that contains the popover's content.

**Individual Import**:
```javascript
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Popover, PopoverTrigger, PopoverContent } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `Popover` to display supplementary, non-modal content that is contextually related to a trigger element, without interrupting the user's workflow.
2.  **Component Structure**: Consists of `Popover` as the main container, `PopoverTrigger` for the element that opens the popover, and `PopoverContent` for the content displayed within the popover.
3.  **Arrow Indicator**: Include an arrow pointing to the trigger element using the `showArrow` prop for better visual association.
4.  **Color Schemes**: Apply different color schemes with the `color` prop to match the application's theme.
5.  **Placement**: Control the popover's position relative to the trigger using the `placement` prop (e.g., `top`, `bottom`, `left`, `right`, and their `start`/`end` variations).
6.  **Offset Adjustment**: Adjust the distance between the popover and its trigger using the `offset` prop.
7.  **Controlled State**: Manage the popover's open state using `isOpen` and `onOpenChange` props for controlled component behavior.
8.  **Title Props**: Use `titleProps` on `PopoverContent` to ensure the title is correctly exposed to assistive technologies, especially when passing a function as a child.
9.  **Form Integration**: `Popover` handles focus within its content, making it suitable for forms. Focus returns to the trigger on close. For convenience, use `autoFocus` on the first input field within the popover.
10. **Backdrop Customization**: Customize the backdrop with `transparent` (default), `opaque`, or `blur` options using the `backdrop` prop. Custom backdrops can also be applied via the `backdrop` slot.
11. **Custom Animations**: Use the `motionProps` property to define custom enter/exit animations, which integrates with Framer Motion.
12. **Custom Trigger**: The `PopoverTrigger` can be customized to any React element, allowing for flexible trigger designs.
13. **Custom Styling**: Customize popover slots (`base`, `trigger`, `backdrop`, `content`) using `classNames` for tailored visual designs.
14. **Accessibility**: The trigger and popover are semantically associated via ARIA attributes. Content outside the popover is hidden from assistive technologies when open. The popover closes on outside interaction or by pressing the Escape key. Focus is managed on mount/unmount, and the popover is positioned relative to its trigger, automatically adjusting to avoid viewport overlap. Scrolling is prevented outside the popover, ensuring a focused user experience.



## Progress

**Purpose**: The Progress component allows you to view the progress of any activity.

### Installation

To install the Progress component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add progress`
*   **pnpm**: `pnpm add @heroui/progress`
*   **npm**: `npm install @heroui/progress`
*   **yarn**: `yarn add @heroui/progress`
*   **bun**: `bun add @heroui/progress`

### Import

**Individual Import**:
```javascript
import { Progress } from "@heroui/progress";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Progress } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `Progress` to visually represent the progress of any activity, providing immediate feedback to the user.
2.  **Accessibility**: Ensure an `aria-label` is provided if the `label` prop is not used, to make the component accessible to screen readers.
3.  **Size Control**: Control the size of the progress bar using the `size` prop.
4.  **Color Schemes**: Apply different color schemes with the `color` prop to match the application's theme or indicate status (e.g., success, warning, danger).
5.  **Indeterminate State**: Use `isIndeterminate` to display an indeterminate progress bar when the duration of an operation is unknown.
6.  **Striped Style**: Apply a striped visual style using the `isStriped` prop for a distinct appearance.
7.  **Labeling**: Provide a descriptive label using the `label` prop. If `label` is provided, an `aria-label` is not strictly necessary as the label serves the same purpose.
8.  **Value Display**: Display the current progress value using the `value` prop for determinate progress indicators.
9.  **Value Formatting**: Customize the display format of the value using `formatOptions`, which is compatible with `Intl.NumberFormat` for internationalized number formatting.
10. **Custom Styling**: Customize various slots (`base`, `labelWrapper`, `label`, `value`, `track`, `indicator`) using `classNames` for fine-grained visual control.
11. **Data Attributes**: The `base` element includes `data-indeterminate` and `data-disabled` attributes, which can be used for styling and state management.
12. **Accessibility**: The component is exposed to assistive technology as a progress bar via ARIA attributes. It supports labeling, internationalized number formatting, and both determinate and indeterminate progress. It exposes `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and `aria-valuetext` attributes to convey the current progress to assistive technologies.



## Radio Group

**Purpose**: Radio Groups allow users to select a single option from a list of mutually exclusive options.

### Installation

To install the Radio Group component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add radio`
*   **pnpm**: `pnpm add @heroui/radio`
*   **npm**: `npm install @heroui/radio`
*   **yarn**: `yarn add @heroui/radio`
*   **bun**: `bun add @heroui/radio`

### Import

HeroUI exports two radio-related components:

*   **RadioGroup**: The wrapper component for a group of radio buttons.
*   **Radio**: The component for an individual radio button option.

**Individual Import**:
```javascript
import { RadioGroup, Radio } from "@heroui/radio";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { RadioGroup, Radio } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `RadioGroup` when users need to select exactly one option from a predefined set of choices.
2.  **Component Structure**: Consists of `RadioGroup` as the wrapper for the collection of `Radio` components, each representing a single option.
3.  **Disabled State**: Use the `isDisabled` prop to disable the entire radio group or individual `Radio` buttons, preventing user interaction.
4.  **Default Value**: Set an initial selected value using the `defaultValue` prop for uncontrolled components.
5.  **Description**: Add a description to individual radio buttons using the `description` prop for additional context.
6.  **Horizontal Layout**: Arrange radio buttons horizontally by setting `orientation="horizontal"` on the `RadioGroup` component.
7.  **Controlled State**: Manage the selected value using `value` and `onValueChange` props for controlled component behavior. It also supports native `onChange` for integration with form libraries.
8.  **Invalid State**: Indicate an invalid state for the entire group using the `isInvalid` prop on `RadioGroup`.
9.  **Custom Styling**: Customize slots for both `RadioGroup` (`base`, `wrapper`, `label`, `description`, `errorMessage`) and `Radio` (`base`, `wrapper`, `hiddenInput`, `labelWrapper`, `label`, `control`, `description`) using `classNames`.
10. **Advanced Customization**: For highly specific implementations, use the `useRadio` hook.
11. **Data Attributes**: `RadioGroup` has a `data-orientation` attribute. `Radio` elements include `data-selected`, `data-pressed`, `data-invalid`, `data-readonly`, `data-hover-unselected`, `data-hover`, `data-focus`, `data-focus-visible`, and `data-disabled` attributes for styling and state management.
12. **Accessibility**: Exposed to assistive technology via ARIA attributes. Built with native HTML `<input type="radio">` elements. Supports keyboard navigation (arrow keys), focus management, and proper labeling for both the group and individual radio buttons, ensuring an accessible user experience.



## Range Calendar

**Purpose**: A Range Calendar consists of a grouping element containing one or more date grids (e.g., months), and navigation buttons for moving through time. It allows users to select a date range.

### Installation

To install the Range Calendar component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add calendar`
*   **pnpm**: `pnpm add @heroui/calendar`
*   **npm**: `npm install @heroui/calendar`
*   **yarn**: `yarn add @heroui/calendar`
*   **bun**: `bun add @heroui/calendar`

### Import

**Individual Import**:
```javascript
import { RangeCalendar } from "@heroui/calendar";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { RangeCalendar } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `RangeCalendar` to provide an interactive calendar interface for users to select a range of dates.
2.  **Default Value**: An initial, uncontrolled value can be provided using the `defaultValue` prop. For controlled values, use the `value` prop.
3.  **Date Values**: Date values should be provided using objects from the `@internationalized/date` package, which handles international date manipulation, time zones, and localization.
4.  **Unavailable Dates**: Mark specific dates as unavailable using the `isDateUnavailable` prop, which accepts a callback function. Unavailable dates remain focusable but cannot be selected.
5.  **Focused Date**: Control the focused date (and visible month) using `focusedValue` and `onFocusChange` props. `defaultFocusedValue` sets the initial focused date.
6.  **Non-Contiguous Ranges**: The `allowsNonContiguousRanges` prop enables the selection of ranges even with unavailable dates in between. The `onChange` event still emits a single range, but unavailable dates are not visually selected.
7.  **Disabled State**: Use the `isDisabled` prop to disable the entire calendar, preventing selection or focus on cells.
8.  **Read-Only State**: Use the `isReadOnly` prop to make the calendar read-only, preventing any changes to the selected range.
9.  **Min/Max Value**: Restrict the selectable date range using `minValue` and `maxValue` props.
10. **Visible Months**: Control the number of months displayed at once using the `visibleMonths` prop.
11. **Week Start Day**: Set the first day of the week using the `weekStartDay` prop (0 for Sunday, 1 for Monday, etc.).
12. **Custom Styling**: Customize slots (`base`, `header`, `title`, `previousButton`, `nextButton`, `grid`, `cell`, `cellContent`) using `classNames` for tailored visual designs.
13. **Advanced Customization**: For highly specific implementations, use the `useRangeCalendar` hook.
14. **Accessibility**: Exposed to assistive technology as a calendar via ARIA attributes. Supports keyboard navigation (arrow keys, page up/down, home/end), focus management, and labeling. Dates are announced with their availability status. Provides `aria-label` for month and year navigation buttons, ensuring an accessible user experience.



## Scroll Shadow

**Purpose**: The Scroll Shadow component applies top and bottom shadows when content overflows on scroll, providing a visual cue that there is more content to view.

### Installation

To install the Scroll Shadow component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add scroll-shadow`
*   **pnpm**: `pnpm add @heroui/scroll-shadow`
*   **npm**: `npm install @heroui/scroll-shadow`
*   **yarn**: `yarn add @heroui/scroll-shadow`
*   **bun**: `bun add @heroui/scroll-shadow`

### Import

**Individual Import**:
```javascript
import { ScrollShadow } from "@heroui/scroll-shadow";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { ScrollShadow } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `ScrollShadow` to visually indicate that content within a container is scrollable and that there is more content beyond the current view, enhancing user experience.
2.  **Visibility Control**: Control the visibility of the shadows using the `visibility` prop, which can be `auto` (default), `top`, `bottom`, `left`, `right`, `both`, or `none`, depending on the desired effect and scroll direction.
3.  **Orientation**: Set the `orientation` prop to `horizontal` or `vertical` (default) to match the direction of the scrollable content and the applied shadows.
4.  **Enable/Disable Effect**: Use the `isEnabled` prop to explicitly enable or disable the scroll shadow effect.
5.  **Offset Adjustment**: Adjust the shadow offset using the `offset` prop to fine-tune its position relative to the content.
6.  **Size Control**: Control the size (thickness) of the shadow using the `size` prop.
7.  **Custom Styling**: Customize slots (`base`, `topShadow`, `bottomShadow`, `leftShadow`, `rightShadow`) using `classNames` for tailored visual designs.
8.  **Hide Scrollbar**: Use the `hideScrollBar` property to hide vertical and horizontal scrollbars while maintaining full scroll functionality, creating a cleaner interface.
9.  **Event Handling**: The `onVisibilityChange` event is triggered when the visibility of the scroll shadows changes, allowing for dynamic reactions to scroll events.
10. **Accessibility**: Enhances visual cues for scrollable content, improving usability for all users by making the presence of hidden content more apparent.



## Select

**Purpose**: A Select component displays a collapsible list of options and allows a user to select one or more of them.

### Installation

To install the Select component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add select`
*   **pnpm**: `pnpm add @heroui/select`
*   **npm**: `npm install @heroui/select`
*   **yarn**: `yarn add @heroui/select`
*   **bun**: `bun add @heroui/select`

### Import

HeroUI exports three select-related components:

*   **Select**: The main component, which is a wrapper for the other components.
*   **SelectSection**: The component that contains a group of select items.
*   **SelectItem**: The component that represents a select item.

**Individual Import**:
```javascript
import { Select, SelectSection, SelectItem } from "@heroui/select";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Select, SelectSection, SelectItem } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `Select` to provide a user-friendly way to choose one or multiple options from a collapsible list.
2.  **Component Structure**: Consists of `Select` as the main wrapper, `SelectSection` for grouping related options, and `SelectItem` for individual options.
3.  **Dynamic Items**: Supports both static and dynamic collections of items. For dynamic data, integrate with `useAsyncList` and `useInfiniteScroll` for asynchronous loading and pagination.
4.  **Multiple Selection**: Enable multiple selections by setting `selectionMode="multiple"`.
5.  **Disabled State**: Use the `isDisabled` prop to disable the select component, preventing user interaction.
6.  **Disabled Items**: Disable specific items within the list using the `disabledKeys` prop.
7.  **Required Field**: Mark the select as required using the `isRequired` prop, which adds a visual indicator (e.g., a danger asterisk) to the label.
8.  **Size Control**: Control the size of the select component using the `size` prop.
9.  **Color Schemes**: Apply different color schemes with the `color` prop to match the application's theme.
10. **Visual Variants**: Customize the visual style using the `variant` prop.
11. **Radius Customization**: Adjust the border radius using the `radius` prop.
12. **Label Placement**: Position the label `inside`, `outside`, or `outside-left` using the `labelPlacement` prop. The default is `outside` if no label is passed.
13. **Content Augmentation**: Add content to the start or end of the select input using `startContent` and `endContent` props (e.g., icons).
14. **Item Content Customization**: Customize `SelectItem` with `startContent` and `endContent` props for richer item display.
15. **Custom Selector Icon**: Replace the default `chevron-down` icon with a custom one using the `selectorIcon` prop. Use `disableSelectorIconRotation` to prevent the icon from rotating.
16. **Scroll Shadow**: The component uses `ScrollShadow` internally. Disable it or customize its behavior using `scrollShadowProps` or `showScrollIndicators`.
17. **Description**: Add a descriptive text using the `description` prop for additional context.
18. **Error Messaging**: Display an error message in conjunction with `isInvalid` using the `errorMessage` prop.
19. **Clearable**: Add a clear button that appears when a value is selected using the `isClearable` prop.
20. **Controlled State**: Manage selected values using `selectedKeys` and `onSelectionChange` (or `onChange`) for controlled component behavior.
21. **Controlling Open State**: Control the open/closed state of the dropdown using `isOpen` and `onOpenChange` (or `onClose`).
22. **Custom Items**: Customize the rendering of `SelectItem` children for unique display needs.
23. **Custom Render Value**: Provide a `renderValue` function to customize how the selected value is displayed. This is particularly useful for displaying multiple selected items (e.g., with `Chip` components) and requires `isMultiline` for proper wrapping.
24. **Virtualization**: Enable `isVirtualized` for efficient rendering of large lists. Ensure `maxListboxHeight` and `itemHeight` are correctly set, especially for custom item heights.
25. **Sections**: Group related items using `SelectSection`. Customize section styles with `classNames` on `SelectSection`.
26. **Customizing the Select**: Customize any slot using the `classNames` property. Use `popoverProps` and `listboxProps` for fine-grained control over sub-components.
27. **Value Attribute**: The `key` property of `SelectItem` should be used for form submission values, not a `value` attribute directly on `SelectItem`.



## Skeleton

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



## Slider

**Purpose**: A Slider allows a user to select one or more values within a range.

### Installation

To install the Slider component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add slider`
*   **pnpm**: `pnpm add @heroui/slider`
*   **npm**: `npm install @heroui/slider`
*   **yarn**: `yarn add @heroui/slider`
*   **bun**: `bun add @heroui/slider`

### Import

**Individual Import**:
```javascript
import { Slider } from "@heroui/slider";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Slider } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `Slider` to enable users to select one or more numerical values within a predefined range, offering a visual and interactive input method.
2.  **Disabled State**: Use the `isDisabled` prop to disable the slider, preventing user interaction.
3.  **Size Control**: Control the size of the slider using the `size` prop.
4.  **Radius Customization**: Adjust the border radius using the `radius` prop.
5.  **Color Schemes**: Apply different color schemes with the `color` prop to match the application's theme.
6.  **Vertical Orientation**: Change the orientation to vertical using `orientation="vertical"`.
7.  **Visible Steps**: Display small dots on each step of the slider using the `showSteps` prop for clearer value indication.
8.  **Marks**: Display labels on each step using the `marks` prop to provide specific value context.
9.  **Range Slider**: To create a range slider, pass an array of values to the `value` or `defaultValue` prop.
10. **Fill Offset**: Set where the fill should start using the `fillOffset` prop, useful for custom visual representations.
11. **Tooltip**: Show a tooltip with the current thumb value on hover or drag using `showTooltip`. Customize tooltip properties with `tooltipProps`.
12. **Outline**: Add a small outline to the slider's thumbs using the `showOutline` prop for visual emphasis.
13. **Content Augmentation**: Add `ReactNode` content to the start and end of the slider using `startContent` and `endContent` props.
14. **Value Formatting**: Format values using `formatOptions` (compatible with `Intl.NumberFormat`) or the `getValue` prop. Use `tooltipValueFormatOptions` for formatting values displayed in tooltips.
15. **Hiding Elements**: Hide the displayed value with `hideValue` and hide the thumbs with `hideThumb` if not needed.
16. **Controlled State**: Control the slider's value using `value` and `onChange` props. Use `onChangeEnd` to capture the value only when dragging stops.
17. **Custom Thumb**: Customize the thumb's appearance using the `renderThumb` prop. For range sliders, the `index` prop indicates which thumb is being rendered.
18. **Custom Label**: Customize the label using the `renderLabel` prop.
19. **Custom Value Display**: Customize the value label element using the `renderValue` prop.
20. **Custom Tooltip Content**: Customize tooltip content using the `getTooltipValue` prop. Note that `tooltipProps.content` takes precedence if both are provided.
21. **Disable Thumb Scale**: Disable the thumb scale animation with `disableThumbScale`.
22. **Custom Styles**: Customize various slots (`base`, `labelWrapper`, `label`, `value`, `step`, `mark`, `trackWrapper`, `track`, `filler`, `thumb`, `startContent`, `endContent`) using `classNames`.
23. **Data Attributes**: The `Slider` component has `data-hover` and `data-orientation` attributes. Thumbs have `data-dragging`, `data-focus-visible`, `data-hover`, and `data-pressed` attributes for styling and state management.
24. **Accessibility**: Supports single and multiple thumbs, mouse, touch, and keyboard navigation (arrow keys, page up/down, home/end), multi-touch, track interaction, horizontal/vertical orientations, custom min/max/step values, disabling, prevents text selection, ARIA exposure, hidden native input elements for screen readers, labeling support, an `<output>` element for current values, and internationalized number formatting, ensuring a fully accessible experience.



## Snippet

**Purpose**: The Snippet component can be used to display inline or multiline code snippets.

### Installation

To install the Snippet component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add snippet`
*   **pnpm**: `pnpm add @heroui/snippet`
*   **npm**: `npm install @heroui/snippet`
*   **yarn**: `yarn add @heroui/snippet`
*   **bun**: `bun add @heroui/snippet`

### Import

**Individual Import**:
```javascript
import { Snippet } from "@heroui/snippet";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Snippet } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `Snippet` to clearly present code fragments, whether they are inline within text or span multiple lines.
2.  **Size Control**: Control the size of the snippet using the `size` prop.
3.  **Color Schemes**: Apply different color schemes with the `color` prop to match the application's theme.
4.  **Visual Variants**: Customize the visual style using the `variant` prop.
5.  **Custom Symbol**: Customize the symbol displayed before the code using the `symbol` prop.
6.  **Hide Copy Button**: Hide the copy button by setting `hideCopyButton` to `true` if copy functionality is not desired.
7.  **Custom Tooltip**: Customize the tooltip for the copy button using `tooltipProps`.
8.  **Multiline Support**: The component inherently supports multiline code snippets, making it suitable for displaying longer code blocks.
9.  **Custom Icons**: Customize the copy and copied icons using `copyIcon` and `checkIcon` props for a personalized look.
10. **Custom Styles**: Customize slots (`base`, `content`, `pre`, `symbol`, `copyButton`, `copyIcon`, `checkIcon`) using `classNames` for fine-grained visual control.
11. **Accessibility**: Provides a clear and accessible way to display code snippets, with built-in copy functionality for user convenience.



## Spacer

**Purpose**: The Spacer component is used to add space between components, facilitating layout and visual separation.

### Installation

To install the Spacer component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add spacer`
*   **pnpm**: `pnpm add @heroui/spacer`
*   **npm**: `npm install @heroui/spacer`
*   **yarn**: `yarn add @heroui/spacer`
*   **bun**: `bun add @heroui/spacer`

### Import

**Individual Import**:
```javascript
import { Spacer } from "@heroui/spacer";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Spacer } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `Spacer` to add customizable empty space between components, facilitating clear layout and visual separation within your UI.
2.  **Horizontal Spacing**: Use the `x` prop to define horizontal space. Values are based on the Tailwind Spacing Scale.
3.  **Vertical Spacing**: Use the `y` prop to define vertical space. Values are based on the Tailwind Spacing Scale.
4.  **Default Spacing**: If neither `x` nor `y` is specified, both default to `"1"` (which corresponds to 0.25rem or 4px in Tailwind's default scale), providing a minimal separation.
5.  **Custom Styles**: While not explicitly detailed in the provided documentation, like other HeroUI components, `Spacer` likely supports `classNames` for custom styling of its base element, allowing for tailored visual adjustments.
6.  **Server Component**: The documentation indicates that `Spacer` can be used as a server component, which can be beneficial for performance in certain React environments.
7.  **Accessibility**: By providing clear visual hierarchy and readability through proper spacing, `Spacer` indirectly benefits users of assistive technologies by making content easier to parse and understand.



## Spinner

**Purpose**: The Spinner component expresses an unspecified wait time or displays the length of a process.

### Installation

To install the Spinner component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add spinner`
*   **pnpm**: `pnpm add @heroui/spinner`
*   **npm**: `npm install @heroui/spinner`
*   **yarn**: `yarn add @heroui/spinner`
*   **bun**: `bun add @heroui/spinner`

### Import

**Individual Import**:
```javascript
import { Spinner } from "@heroui/spinner";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Spinner } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `Spinner` to visually indicate an ongoing process or an unspecified waiting time, providing feedback to the user.
2.  **Accessibility**: By default, `Spinner` adds `Loading` as `aria-label`. This is crucial for accessibility. Customize it using the `label` or `aria-label` prop to provide more specific context.
3.  **Size Control**: Control the size of the spinner using the `size` prop.
4.  **Color Schemes**: Apply different color schemes with the `color` prop to match the application's theme or convey status.
5.  **Labeling**: Display a text label alongside the spinner using the `label` prop to provide additional context.
6.  **Label Colors**: Customize the color of the label using the `labelColor` prop.
7.  **Visual Variants**: Choose from various visual styles using the `variant` prop, such as `default`, `simple`, `gradient`, `spinner`, `wave`, or `dots`, to best suit the context.
8.  **Custom Styles**: Customize slots (`base`, `wrapper`, `circle1`, `circle2`, `dots`, `spinnerBars`, `label`) using `classNames` for fine-grained visual control.
9.  **Server Component**: The documentation indicates that `Spinner` can be used as a server component, which can be beneficial for performance in certain React environments.
10. **Accessibility**: Ensures that loading states are communicated effectively to all users, including those using assistive technologies, through ARIA attributes and customizable labels.



## Switch

**Purpose**: The Switch component is used as an alternative between checked and not checked states.

### Installation

To install the Switch component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add switch`
*   **pnpm**: `pnpm add @heroui/switch`
*   **npm**: `npm install @heroui/switch`
*   **yarn**: `yarn add @heroui/switch`
*   **bun**: `bun add @heroui/switch`

### Import

**Individual Import**:
```javascript
import { Switch } from "@heroui/switch";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Switch } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `Switch` as a clear visual toggle to represent an alternative between two states: checked (on) and unchecked (off).
2.  **Labeling**: Include a descriptive label using the `children` prop or `label` prop to provide context for the switch.
3.  **Disabled State**: Use the `isDisabled` prop to disable the switch, preventing user interaction.
4.  **Size Control**: Control the size of the switch using the `size` prop (e.g., `sm`, `md`, `lg`).
5.  **Color Schemes**: Apply different color schemes with the `color` prop to match the application's theme or indicate status.
6.  **Thumb Icon**: Add an icon inside the switch's thumb using the `thumbIcon` prop for enhanced visual feedback.
7.  **Content Augmentation**: Add icons or other content to the start and end of the switch using `startContent` and `endContent` props.
8.  **Controlled State**: Manage the switch's state using `isSelected` and `onValueChange` (or `onChange`) props for controlled component behavior. It also supports native `onChange` for integration with form libraries.
9.  **Custom Styling**: Customize slots (`base`, `wrapper`, `hiddenInput`, `thumb`, `label`, `startContent`, `endContent`, `thumbIcon`) using `classNames` for fine-grained visual control.
10. **Advanced Customization**: For highly specific implementations, use the `useSwitch` hook.
11. **Data Attributes**: The `base` element includes `data-selected`, `data-pressed`, `data-readonly`, `data-hover`, `data-focus`, `data-focus-visible`, and `data-disabled` attributes for styling and state management.
12. **Accessibility**: Built with a native HTML `<input type="checkbox">` element, supporting keyboard navigation (Tab, Space), focus management, ARIA attributes, and labeling, ensuring an accessible user experience.



## Table

**Purpose**: Tables are used to display tabular data using rows and columns. They allow users to quickly scan, sort, compare, and take action on large amounts of data.

### Installation

To install the Table component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add table`
*   **pnpm**: `pnpm add @heroui/table`
*   **npm**: `npm install @heroui/table`
*   **yarn**: `yarn add @heroui/table`
*   **bun**: `bun add @heroui/table`

### Import

HeroUI exports 6 table-related components:

*   **Table**: The main component to display a table.
*   **TableHeader**: The header of the table.
*   **TableBody**: The body of the table.
*   **TableColumn**: The column of the table.
*   **TableRow**: The row of the table.

### Usage Rules and Best Practices

1.  **Purpose**: Use `Table` to display tabular data, allowing users to scan, sort, compare, and take action on large amounts of data.
2.  **Dynamic Data**: Use `columns` and `items` props for dynamic data rendering, which offers significant performance benefits for large collections.
3.  **Empty State**: Use the `emptyContent` prop to render a custom component when the table is empty. The `hideHeader` prop can be used to hide the header in this state.
4.  **Wrapper**: Use the `removeWrapper` prop to remove the default `div` wrapper with its shadow and border radius, except for virtualized tables where the wrapper is required.
5.  **Custom Cells**: Render any component inside table cells, often based on the column key, for rich and flexible data presentation.
6.  **Striped Rows**: Use the `isStriped` prop to render striped rows, which improves readability for large datasets.
7.  **Selection**: Use the `selectionMode` prop (`single` or `multiple`) to enable row selection. `defaultSelectedKeys` sets the initial selection, and `disallowEmptySelection` prevents deselecting the last selected row.
8.  **Controlled Selection**: Use `selectedKeys` and `onSelectionChange` for programmatic control over row selection.
9.  **Disabled Rows**: Use the `disabledKeys` prop to disable specific rows, preventing them from being selected.
10. **Selection Behavior**: The `selectionBehavior` prop (`toggle` or `replace`) controls how selection is handled. The `onRowAction` prop allows triggering actions on rows.
11. **Sorting**: Use the `allowsSorting` prop on `TableColumn` and `sortDescriptor` with `onSortChange` on the `Table` to enable sorting. The `useAsyncList` hook is recommended for managing sorted data.
12. **Sort Icon**: Customize the sort icon with the `sortIcon` prop.
13. **Loading More Data**: Use the `bottomContent` prop to add a component for loading more data, such as a button or pagination controls.
14. **Pagination**: Integrate with the `Pagination` component for paginating table data, including support for asynchronous and infinite pagination scenarios.
15. **Virtualization**: Use the `isVirtualized` prop for efficient rendering of large datasets by only rendering visible items.
16. **Custom Styles**: Customize various slots using the `classNames` prop for fine-grained visual control.
17. **Accessibility**: The component is built with ARIA roles and attributes for accessibility, supporting keyboard navigation, selection, and sorting to ensure a fully accessible experience.



## Tabs

**Purpose**: The Tabs component organizes content into multiple sections and allows users to navigate between them.

### Installation

To install the Tabs component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add tabs`
*   **pnpm**: `pnpm add @heroui/tabs`
*   **npm**: `npm install @heroui/tabs`
*   **yarn**: `yarn add @heroui/tabs`
*   **bun**: `bun add @heroui/tabs`

### Import

HeroUI exports two tabs-related components:

*   **Tabs**: The main component to display a tab list.
*   **Tab**: The component to display a tab item. The children of this component will be displayed as the content of the tab.

**Individual Import**:
```javascript
import { Tabs, Tab } from "@heroui/tabs";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Tabs, Tab } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `Tabs` to structure and present content in a segmented manner, allowing users to easily switch between different views or categories.
2.  **Component Structure**: Consists of `Tabs` as the main container for the tab list, and `Tab` for each individual tab item. The content associated with each tab is rendered as children of the `Tab` component.
3.  **Dynamic Tabs**: Render tabs dynamically using the `items` prop, which is useful for data-driven tab creation.
4.  **Disabled Tabs**: Use the `isDisabled` prop on the `Tabs` component to disable the entire tab set. For individual tabs, use the `isDisabled` prop on the `Tab` component.
5.  **Size Control**: Control the size of the tabs using the `size` prop.
6.  **Radius Customization**: Adjust the border radius using the `radius` prop for visual styling.
7.  **Color Schemes**: Apply different color schemes with the `color` prop to match the application's theme.
8.  **Visual Variants**: Customize the visual style using the `variant` prop.
9.  **With Icons**: Enhance visual clarity by adding icons to tabs.
10. **Controlled State**: Manage the selected tab using `onSelectionChange` and `selectedKey` props for controlled component behavior.
11. **Placement**: Change the position of the tabs using the `placement` prop (default is `top`). Options include `top`, `bottom`, `start`, and `end`.
12. **Vertical Orientation**: Change the orientation of the tabs to vertical using the `orientation="vertical"` prop. Note that this invalidates the `placement` prop.
13. **Links**: Tab items can be rendered as links by passing the `href` prop to the `Tab` component. The component is compatible with client-side routers like Next.js and React Router for seamless navigation.
14. **Form Integration**: Tabs can be integrated with forms to organize form sections.
15. **Customizable Slots**: The component provides several customizable slots, including `base`, `tabList`, `tab`, `tabContent`, `cursor`, `panel`, and `tabWrapper`, allowing for detailed styling.
16. **Custom Styles**: Customize the `Tabs` component by passing custom Tailwind CSS classes to its component slots.
17. **Data Attributes**: The `Tab` element includes `data-selected`, `data-disabled`, `data-hover`, `data-hover-selected`, `data-focus`, `data-focus-visible`, and `data-pressed` attributes for styling and state management.
18. **Accessibility**: Supports mouse, touch, and keyboard interactions. Includes keyboard event support for arrow keys, handles disabled tabs, and follows the ARIA tabs pattern, semantically linking tabs and their associated tab panels. It also provides focus management for tab panels without any focusable children, ensuring an accessible user experience.



## Toast

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



## Textarea

**Purpose**: The Textarea component is a multi-line input which allows you to write large texts.

### Installation

To install the Textarea component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add input`
*   **pnpm**: `pnpm add @heroui/input`
*   **npm**: `npm install @heroui/input`
*   **yarn**: `yarn add @heroui/input`
*   **bun**: `bun add @heroui/input`

### Import

**Individual Import**:
```javascript
import { Textarea } from "@heroui/input";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Textarea } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `Textarea` for multi-line text input, enabling users to enter and edit large blocks of text.
2.  **Disabled State**: Use the `isDisabled` prop to disable the textarea, preventing user interaction.
3.  **Read-Only State**: Use the `isReadOnly` prop to make the textarea read-only, displaying content without allowing modifications.
4.  **Required Field**: Use the `isRequired` prop to mark the textarea as required, which adds a visual indicator (e.g., a danger asterisk) to the label.
5.  **Clearable**: Use the `isClearable` prop to add a clear button that appears when the textarea contains a value, allowing users to quickly clear the input.
6.  **Autosize**: The textarea grows automatically based on its content. Control minimum and maximum height with `minRows` and `maxRows` props. This feature is based on `react-textarea-autosize`.
7.  **Disable Autosize**: Use the `disableAutosize` prop to disable the automatic resizing feature if a fixed height is desired.
8.  **Visual Variants**: Customize the visual style using the `variant` prop.
9.  **Error Messaging**: Combine `isInvalid` and `errorMessage` properties to display an invalid textarea with a descriptive error message, guiding users to correct their input.
10. **Description**: Add a descriptive text using the `description` prop for additional context or instructions.
11. **Controlled State**: Manage the textarea's value using `value` and `onValueChange` props for controlled component behavior. It also supports native `onChange` for integration with form libraries like Formik and React Hook Form.
12. **Customizable Slots**: Customizable slots include `base`, `label`, `inputWrapper`, `input`, `description`, `errorMessage`, and `headerWrapper`, allowing for detailed styling.
13. **Data Attributes**: The `Textarea` component includes `data-invalid`, `data-required`, `data-readonly`, `data-hover`, `data-focus`, `data-focus-visible`, and `data-disabled` attributes for styling and state management.
14. **Accessibility**: Built with a native `<input>` element. Provides visual and ARIA labeling support. Supports change, clipboard, composition, selection, and input events. Required and invalid states are exposed to assistive technology via ARIA. Support for description and error message help text linked to the input via ARIA, ensuring a fully accessible user experience.



## Time Input

**Purpose**: The `TimeInput` component consists of a label, and a group of segments representing each unit of a time (e.g., hours, minutes, and seconds). Each segment is individually focusable and editable by the user, by typing or using the arrow keys to increment and decrement the value. This approach allows values to be formatted and parsed correctly regardless of the locale or time format, and offers an easy and error-free way to edit times using the keyboard.

### Installation

To install the Time Input component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add date-input`
*   **pnpm**: `pnpm add @heroui/date-input`
*   **npm**: `npm install @heroui/date-input`
*   **yarn**: `yarn add @heroui/date-input`
*   **bun**: `bun add @heroui/date-input`

### Import

**Individual Import**:
```javascript
import { TimeInput } from "@heroui/date-input";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { TimeInput } from â€˜@heroui/reactâ€™;
```

### Usage Rules and Best Practices

1.  **Purpose**: Use `TimeInput` to allow users to input time values (hours, minutes, seconds) with individual segment editing, providing a structured and accessible way to enter time.
2.  **Placeholder**: The component displays a placeholder by default, guiding the user on the expected input format.
3.  **Default Value**: An initial, uncontrolled value can be provided using the `defaultValue` prop. For controlled values, use the `value` prop to manage the component's state programmatically.
4.  **Time Values**: Time values should be provided using objects from the `@internationalized/date` package. This library handles correct international date and time manipulation across calendars, time zones, and other localization concerns, ensuring robust time handling.
5.  **Output Type**: By default, `TimeInput` will emit `Time` objects in the `onChange` event. However, if a `CalendarDateTime` or `ZonedDateTime` object is passed as the `value` or `defaultValue`, values of that type will be emitted, changing only the time and preserving the date components.
6.  **Accessibility**: Each segment (hours, minutes, seconds) is individually focusable and editable. The component supports keyboard navigation (arrow keys) for incrementing and decrementing values. Values are formatted and parsed correctly regardless of the locale or time format, offering an easy and error-free way to edit times using the keyboard. It is built with ARIA attributes for enhanced accessibility.



## Tooltip

**Purpose**: Tooltips display a brief, informative message that appears when a user interacts with an element.

### Installation

To install the Tooltip component, use one of the following package managers:

*   **CLI**: `npx heroui-cli@latest add tooltip`
*   **pnpm**: `pnpm add @heroui/tooltip`
*   **npm**: `npm install @heroui/tooltip`
*   **yarn**: `yarn add @heroui/tooltip`
*   **bun**: `bun add @heroui/tooltip`

### Import

**Individual Import**:
```javascript
import { Tooltip } from "@heroui/tooltip";
```

**Global Import**:
```javascript
// Assuming global import is handled by the framework or a central file
// e.g., in a main.js or App.js file:
// import { Tooltip } from â€˜@heroui/reactâ€™;
```

> For individual installation, please note that you should add `./node_modules/@heroui/theme/dist/components/popover.js` to your `tailwind.config.js` file instead since tooltip reuses popover styles.

### Usage Rules and Best Practices

1.  **Purpose**: Use `Tooltip` to display a brief, informative message that appears when a user interacts with an element (e.g., hovers over, focuses on), providing contextual help or information.
2.  **With Arrow**: Tooltips can be displayed with an arrow pointing to the trigger element, enhancing visual association.
3.  **Color Schemes**: Apply different color schemes with the `color` prop (e.g., `default`, `primary`, `secondary`, `success`, `warning`, `danger`, `foreground`) to match the application's theme or convey status.
4.  **Placements**: Control the tooltip's position relative to the trigger element using various `placement` options (e.g., `top-start`, `top`, `top-end`, `bottom-start`, `bottom`, `bottom-end`, `left-start`, `left`, `left-end`, `right-start`, `right`, `right-end`).
5.  **Offset**: Adjust the distance between the tooltip and its trigger using the `offset` prop.
6.  **Controlled State**: Manage the tooltip's open/closed state programmatically using `isOpen` and `onOpenChange` props.
7.  **Delay**: Control the `open` and `close` delay of the tooltip with `delay` and `closeDelay` props, respectively, to prevent premature or lingering tooltips.
8.  **Custom Content**: The tooltip content can be customized to include `ReactNode` elements, allowing for rich and dynamic messages.
9.  **Custom Motion**: `Tooltip` offers a `motionProps` property to customize the `enter` / `exit` animation, leveraging Framer Motion variants for dynamic transitions.
10. **Customizable Slots**: Customizable slots include `base` (main tooltip container) and `arrow` (for the tooltip arrow), allowing for detailed styling.
11. **Custom Styles**: Customize the `Tooltip` component by passing custom Tailwind CSS classes to the component slots.
12. **Data Attributes**: The `base` element includes `data-open` (when the tooltip is open), `data-placement` (the placement of the tooltip), and `data-disabled` (when the tooltip is disabled) attributes for styling and state management.
13. **Accessibility**: Provides keyboard focus management and cross-browser normalization. Supports hover management and cross-browser normalization. Offers labeling support for screen readers (aria-describedby). Exposed as a tooltip to assistive technology via ARIA. Matches native tooltip behavior with a delay on hover of the first tooltip and no delay on subsequent tooltips, ensuring a consistent and accessible user experience.



## User

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


