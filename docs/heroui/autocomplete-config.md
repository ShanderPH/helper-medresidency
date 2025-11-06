# Autocomplete

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