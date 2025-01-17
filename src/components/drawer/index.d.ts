import React, { PureComponent, ReactNode, RefObject } from 'react';
import { Animated, ViewStyle, TextStyle } from 'react-native';
import Swipeable, { SwipeableProps } from './Swipeable';
interface DrawerItemProps {
    width?: number;
    background?: string;
    text?: string;
    icon?: number;
    onPress?: Function;
    keepOpen?: boolean;
    style?: ViewStyle;
    testID?: string;
    customElement?: ReactNode;
}
interface DrawerProps {
    /**
     * The drawer animation bounciness
     */
    bounciness?: number;
    /**
     * OnDragStart handler
     */
    onDragStart?: Function;
    /**
     * The bottom layer's items to appear when opened from the right
     */
    rightItems?: DrawerItemProps[];
    /**
     * The bottom layer's item to appear when opened from the left (a single item)
     */
    leftItem?: DrawerItemProps;
    /**
     * Set a different minimum width
     */
    itemsMinWidth?: number;
    /**
     * The color for the text and icon tint of the items
     */
    itemsTintColor?: string;
    /**
     * The items' icon size
     */
    itemsIconSize?: number;
    /**
     * The items' text style
     */
    itemsTextStyle?: TextStyle;
    /**
     * Perform the animation in natively
     */
    useNativeAnimations?: boolean;
    /**
     * Whether to allow a full left swipe
     */
    fullSwipeLeft?: boolean;
    /**
     * Threshold for a left full swipe (0-1)
     */
    fullLeftThreshold?: number;
    /**
     * Callback for left item full swipe
     */
    onFullSwipeLeft?: Function;
    /**
     * Callback for left item toggle swipe
     */
    onToggleSwipeLeft?: Function;
    /**
     * Callback for just before left item full swipe
     */
    onWillFullSwipeLeft?: Function;
    /**
     * Whether to allow a full right swipe
     */
    fullSwipeRight?: boolean;
    /**
     * Threshold for a right full swipe (0-1)
     */
    fullRightThreshold?: number;
    /**
     * Callback for right item full swipe
     */
    onFullSwipeRight?: Function;
    /**
     * Callback for just before right item full swipe
     */
    onWillFullSwipeRight?: Function;
    /**
     * Whether to disable the haptic
     */
    disableHaptic?: boolean;
    /**
     * Style
     */
    style?: ViewStyle;
    /**
     * Callback for open action
     */
    onSwipeableWillOpen?: Function;
    /**
     * Callback for close action
     */
    onSwipeableWillClose?: Function;
    /**
     * Custom value of any type to pass on to the component and receive back in the action callbacks
     */
    customValue?: any;
    /**
     * Used as testing identifier
     */
    testID?: string;
    children?: React.ReactNode;
}
/**
 * @description: Drawer Component
 * @important: If your app works with RNN, your screen must be wrapped
 * with gestureHandlerRootHOC from 'react-native-gesture-handler'. see
 * @importantLink: https://docs.swmansion.com/react-native-gesture-handler/docs/installation/
 * @gif: https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Drawer/Drawer.gif?raw=true
 */
declare class Drawer extends PureComponent<DrawerProps> {
    static displayName: string;
    static defaultProps: {
        itemsTintColor: string;
        itemsIconSize: number;
    };
    leftRender: SwipeableProps['renderLeftActions'];
    rightRender: SwipeableProps['renderLeftActions'];
    _swipeableRow: RefObject<Swipeable>;
    animationOptions: SwipeableProps['animationOptions'];
    leftActionX: Animated.Value;
    constructor(props: DrawerProps);
    private getLeftActionsContainerStyle;
    private getRightActionsContainerStyle;
    private getActionsContainerStyle;
    /** Actions */
    closeDrawer: () => void;
    openLeft: () => void;
    openLeftFull: () => void;
    toggleLeft: () => void;
    openRight: () => void;
    openRightFull: () => void;
    /** Events */
    private onActionPress;
    private onSwipeableWillOpen;
    private onSwipeableWillClose;
    private onToggleSwipeLeft;
    private animateItem;
    /** Accessability */
    private getAccessibilityActions;
    private onAccessibilityAction;
    /** Renders */
    private renderLeftActions;
    private renderRightActions;
    private renderActions;
    private renderAction;
    render(): React.JSX.Element;
}
export { DrawerProps, DrawerItemProps };
declare const _default: React.ComponentClass<DrawerProps, any> & typeof Drawer;
export default _default;
