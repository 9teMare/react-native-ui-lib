import React from 'react';
import { ColorPaletteProps } from '../colorPalette';
import { ColorPickerDialogProps } from './ColorPickerDialog';
interface Props extends ColorPickerDialogProps, Pick<ColorPaletteProps, 'onValueChange'> {
    /**
     * Array of colors for the picker's color palette (hex values)
     */
    colors: string[];
    /**
     * The value of the selected swatch // TODO: rename prop 'selectedValue'
     */
    value?: string;
    /**
     * The index of the item to animate at first render (default is last)
     */
    animatedIndex?: number;
    /**
     * Accessibility labels as an object of strings, ex.
     * {
     *  addButton: 'add custom color using hex code',
     *  dismissButton: 'dismiss',
     *  doneButton: 'done',
     *  input: 'custom hex color code'
     * }
     */
    accessibilityLabels?: {
        addButton?: string;
        dismissButton?: string;
        doneButton?: string;
        input?: string;
    };
    testID?: string;
    /**
     * The ColorPicker's background color
     */
    backgroundColor?: string;
}
export type ColorPickerProps = Props;
declare const _default: React.ComponentClass<Props, any>;
export default _default;
