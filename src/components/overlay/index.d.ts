import React, { PureComponent } from 'react';
import { ImageSourcePropType } from 'react-native';
declare const OVERLY_TYPES: {
    VERTICAL: string;
    TOP: string;
    BOTTOM: string;
    SOLID: string;
};
export declare enum OverlayIntensityType {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high"
}
export type OverlayTypeType = typeof OVERLY_TYPES[keyof typeof OVERLY_TYPES];
export type OverlayTypes = {
    /**
     * The type of overlay to set on top of the image
     */
    type?: OverlayTypeType;
    /**
     * The intensity of the gradient, default is 'LOW'.
     */
    intensity?: OverlayIntensityType;
    /**
     * The overlay color
     */
    color?: string;
    /**
     * Custom overlay content to be rendered on top of the image
     */
    customContent?: JSX.Element;
};
/**
 * @description: Overlay view with types (default, top, bottom, solid)
 * @extends: Image
 * @extendsLink: https://reactnative.dev/docs/image
 */
declare class Overlay extends PureComponent<OverlayTypes> {
    static displayName: string;
    static overlayTypes: {
        VERTICAL: string;
        TOP: string;
        BOTTOM: string;
        SOLID: string;
    };
    static intensityTypes: typeof OverlayIntensityType;
    getStyleByType(type?: string | undefined): ("" | {
        bottom: undefined;
        top: number;
        height: string;
    } | {
        tintColor: string;
    } | undefined)[] | ("" | {
        bottom: number;
        top: undefined;
        height: string;
        transform: {
            scaleY: number;
        }[];
    } | {
        tintColor: string;
    } | undefined)[] | {
        backgroundColor: string | undefined;
    } | undefined;
    renderCustomContent: () => React.JSX.Element;
    renderImage: (style: any, source: ImageSourcePropType) => React.JSX.Element;
    getImageSource: (type?: OverlayTypeType, intensity?: OverlayIntensityType) => any;
    render(): React.JSX.Element;
}
export default Overlay;
