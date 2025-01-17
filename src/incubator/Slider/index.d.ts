import React, { ReactElement } from 'react';
import { StyleProp, ViewStyle, ViewProps, AccessibilityProps } from 'react-native';
export interface SliderProps extends AccessibilityProps {
    /**
     * Initial value
     */
    value?: number;
    /**
     * Track minimum value
     */
    minimumValue?: number;
    /**
     * Track maximum value
     */
    maximumValue?: number;
    /**
     * Initial minimum value (when useRange is true)
     */
    initialMinimumValue?: number;
    /**
     * Initial maximum value (when useRange is true)
     */
    initialMaximumValue?: number;
    /**
     * Step value of the slider. The value should be between 0 and (maximumValue - minimumValue)
     */
    step?: number;
    /**
     * The color used for the track from minimum value to current value
     */
    minimumTrackTintColor?: string;
    /**
     * The track color
     */
    maximumTrackTintColor?: string;
    /**
     * Custom render instead of rendering the track
     */
    renderTrack?: () => ReactElement | ReactElement[];
    /**
     * Callback for onValueChange
     */
    onValueChange?: (value: number) => void;
    /**
     * Callback that notifies about slider seeking is started
     */
    onSeekStart?: () => void;
    /**
     * Callback that notifies about slider seeking is finished
     */
    onSeekEnd?: () => void;
    /**
     * Callback that notifies when the reset function was invoked
     */
    onReset?: () => void;
    /**
     * The container style
     */
    containerStyle?: StyleProp<ViewStyle>;
    /**
     * The track style
     */
    trackStyle?: StyleProp<ViewStyle>;
    /**
     * The thumb style
     */
    thumbStyle?: ViewStyle;
    /**
     * The active (during press) thumb style
     */
    activeThumbStyle?: ViewStyle;
    /**
     * If true the Slider will not change it's style on press
     */
    disableActiveStyling?: boolean;
    /**
     * Defines how far a touch event can start away from the thumb.
     */
    thumbHitSlop?: ViewProps['hitSlop'];
    /**
     * Thumb color
     */
    thumbTintColor?: string;
    /**
     * If true the Slider will be disabled and will appear in disabled color
     */
    disabled?: boolean;
    /**
     * If true the Slider will display a second thumb for the min value
     */
    useRange?: boolean;
    /**
     * If true the min and max thumbs will not overlap
     */
    useGap?: boolean;
    /**
     * Callback for onRangeChange. Returns values object with the min and max values
     */
    onRangeChange?: (values: {
        min: number;
        max: number;
    }) => void;
    /**
     * If true the Slider will stay in LTR mode even if the app is on RTL mode
     */
    disableRTL?: boolean;
    /**
     * If true the component will have accessibility features enabled
     */
    accessible?: boolean;
    /**
     * The slider's test identifier
     */
    testID?: string;
    /**
     * Whether to use the new Slider implementation using Reanimated
     */
    migrate?: boolean;
}
interface Statics {
    reset: () => void;
}
declare const _default: React.ComponentType<SliderProps> & Statics;
export default _default;
