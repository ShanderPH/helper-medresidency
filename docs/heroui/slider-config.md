# Slider

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