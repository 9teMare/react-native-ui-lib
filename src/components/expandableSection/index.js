import React, { useMemo } from 'react';
import { LayoutAnimation, StyleSheet } from 'react-native';
import View from "../view";
import TouchableOpacity from "../touchableOpacity";
import { useDidUpdate } from "../../hooks";
/**
 * @description: ExpandableSection component to render expanded section below or above the sectionHeader
 * @example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ExpandableSectionScreen.tsx
 * @gif: https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/ExpandableSection/ExpandableSection.gif?raw=true
 */

function ExpandableSection(props) {
  const {
    expanded,
    sectionHeader,
    children,
    top,
    testID
  } = props;

  /**
   * TODO: move to reanimated LayoutAnimation after updating to version 2.3.0
   * after migration, trigger the animation only in useDidUpdate.
   */
  const animate = () => {
    LayoutAnimation.configureNext({
      ...LayoutAnimation.Presets.easeInEaseOut,
      duration: 300
    });
  };
  const onPress = () => {
    props.onPress?.();
    animate();
  };
  useDidUpdate(() => {
    animate();
  }, [expanded]);
  const accessibilityState = useMemo(() => {
    return {
      expanded
    };
  }, [expanded]);
  return <View style={styles.container}>
      {top && expanded && children}
      <TouchableOpacity onPress={onPress} testID={testID} accessibilityState={accessibilityState}>
        {sectionHeader}
      </TouchableOpacity>
      {!top && expanded && children}
    </View>;
}
export default ExpandableSection;
const styles = StyleSheet.create({
  container: {
    overflow: 'hidden'
  }
});