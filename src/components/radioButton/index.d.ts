import React from 'react';
import { TextStyle, StyleProp, ImageSourcePropType, ImageStyle, ViewStyle } from 'react-native';
import { ViewProps } from '../view';
import { RadioGroupContextProps } from '../radioGroup/RadioGroupContext';
export type RadioButtonProps = RadioGroupContextProps & ViewProps & {
    /**
     * The identifier value of the radio button. must be different than other RadioButtons in the same group
     */
    value?: string | number | boolean;
    /**
     * When using RadioButton without a RadioGroup, use this prop to toggle selection
     */
    selected?: boolean;
    /**
     * Invoked when pressing the button
     */
    onPress?: (selected: boolean) => void;
    /**
     * Whether the radio button should be disabled
     */
    disabled?: boolean;
    /**
     * The color of the radio button
     */
    color?: string;
    /**
     * The size of the radio button, affect both width & height
     */
    size?: number;
    /**
     * The radio button border radius
     */
    borderRadius?: number;
    /**
     * A label for the radio button description
     */
    label?: string;
    /**
     * Label style
     */
    labelStyle?: TextStyle;
    /**
     * Icon image source
     */
    iconSource?: ImageSourcePropType;
    /**
     * Icon image style
     */
    iconStyle?: ImageStyle;
    /**
     * Should the icon be on the right side of the label
     */
    iconOnRight?: boolean;
    /**
     * Should the content be rendered left to the button
     */
    contentOnLeft?: boolean;
    /**
     * Additional styling for the container
     */
    containerStyle?: StyleProp<ViewStyle>;
};
declare const _default: React.ComponentClass<RadioButtonProps, any>;
export default _default;
