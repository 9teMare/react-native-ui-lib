import _map from "lodash/map";
import _isUndefined from "lodash/isUndefined";
import React, { useCallback, useMemo, useRef, useState, forwardRef } from 'react';
import { StyleSheet } from 'react-native';
import { Constants } from "../../commons/new";
import { useCombinedRefs } from "../../hooks";
import TextField from "../textField";
import Chip from "../chip";
const removeIcon = require("./assets/xSmall.png");
export let ChipsInputChangeReason = /*#__PURE__*/function (ChipsInputChangeReason) {
  ChipsInputChangeReason["Added"] = "added";
  ChipsInputChangeReason["Removed"] = "removed";
  return ChipsInputChangeReason;
}({});
const ChipsInput = forwardRef((props, refToForward) => {
  const fieldRef = useCombinedRefs(refToForward);
  const {
    chips = [],
    defaultChipProps,
    invalidChipProps,
    leadingAccessory,
    onChange,
    fieldStyle,
    maxChips,
    ...others
  } = props;
  const [markedForRemoval, setMarkedForRemoval] = useState(undefined);
  const fieldValue = useRef(others.value);
  const addChip = useCallback(() => {
    const reachedMaximum = maxChips && chips?.length >= maxChips;
    if (fieldValue.current && !reachedMaximum) {
      const newChip = {
        label: fieldValue.current
      };
      setMarkedForRemoval(undefined);
      // @ts-expect-error
      fieldRef.current.clear();
      fieldValue.current = '';
      /* NOTE: Delay change event to give clear field time to complete and avoid a flickering */
      setTimeout(() => {
        onChange?.([...chips, newChip], ChipsInputChangeReason.Added, newChip);
      }, 0);
    }
  }, [onChange, chips, maxChips]);
  const removeMarkedChip = useCallback(() => {
    if (!_isUndefined(markedForRemoval)) {
      const removedChip = chips?.splice(markedForRemoval, 1);
      onChange?.([...chips], ChipsInputChangeReason.Removed, removedChip?.[0]);
      setMarkedForRemoval(undefined);
    }
  }, [chips, markedForRemoval, onChange]);
  const onChipPress = useCallback(({
    customValue: index
  }) => {
    const selectedChip = chips[index];
    selectedChip?.onPress?.();
    setMarkedForRemoval(index);
  }, [chips]);
  const onChangeText = useCallback(value => {
    fieldValue.current = value;
    props.onChangeText?.(value);
    if (!_isUndefined(markedForRemoval)) {
      setMarkedForRemoval(undefined);
    }
  }, [props.onChangeText, markedForRemoval]);
  const onKeyPress = useCallback(event => {
    props.onKeyPress?.(event);
    const keyCode = event?.nativeEvent?.key;
    const pressedBackspace = keyCode === Constants.backspaceKey;
    if (pressedBackspace && !fieldValue.current && chips.length > 0) {
      if (_isUndefined(markedForRemoval) || markedForRemoval !== chips.length - 1) {
        setMarkedForRemoval(chips.length - 1);
      } else {
        removeMarkedChip();
      }
    }
  }, [chips, props.onKeyPress, markedForRemoval, removeMarkedChip]);
  const chipList = useMemo(() => {
    return <>
        {leadingAccessory}
        {_map(chips, (chip, index) => {
        const isMarkedForRemoval = index === markedForRemoval;
        return <Chip key={index} customValue={index}
        // resetSpacings
        // paddingH-s2
        marginR-s2 marginB-s2 dismissIcon={removeIcon} recorderTag={'mask'} {...defaultChipProps} {...chip.invalid ? invalidChipProps : undefined} {...chip} onPress={onChipPress} onDismiss={isMarkedForRemoval ? removeMarkedChip : undefined} />;
      })}
      </>;
  }, [chips, leadingAccessory, defaultChipProps, removeMarkedChip, markedForRemoval]);
  return <TextField
  // @ts-expect-error
  ref={fieldRef} leadingAccessory={chipList} blurOnSubmit={false} style={styles.input} {...others} onChangeText={onChangeText} onSubmitEditing={addChip} fieldStyle={[fieldStyle, styles.fieldStyle]} onKeyPress={onKeyPress} accessibilityHint={props.editable ? 'press keyboard delete button to remove last tag' : undefined} />;
});
const styles = StyleSheet.create({
  fieldStyle: {
    flexWrap: 'wrap'
  },
  input: {
    flexGrow: undefined
  }
});
// @ts-expect-error
ChipsInput.changeReasons = {
  ADDED: 'added',
  REMOVED: 'removed'
};
export default ChipsInput;