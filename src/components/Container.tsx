/**
 * Custom status bar
  - Check on Iphone 15 -> Done
  - Check on Iphone 13 -> Done 
  - Check on Iphone SE -> Done
  - Check on Android -> Done
 */

/**
 * Custom safe area
 * - Check safe area in Iphone 15
 * - Check safe area in Iphone 13
 * - Check in Iphone SE
 * - Check on Android
 */

// Custom container with view
// Custom safe area with iphone and android
// Custom dynamic island in iphone 15
// Custom container with scroll view
// Custom container with input scroll view
// Custom container with scroll view when use flalist

import React, {ReactNode} from 'react';
import {
  ColorValue,
  StatusBarStyle,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import {globalStyles} from '../styles';
import FocusAwareStatusBar from './FocusAwareStatusBar';

type Props = {
  styleContainer?: StyleProp<ViewStyle>;
  children: ReactNode;
  barStyle?: StatusBarStyle;
  bgBarStyle?: ColorValue;
  hiddenBar?: boolean;
};

const Container = (props: Props) => {
  const {children, styleContainer, barStyle, bgBarStyle, hiddenBar} = props;
  return (
    <View style={[globalStyles.container, styleContainer]}>
      <FocusAwareStatusBar
        hidden={hiddenBar}
        barStyle={barStyle}
        backgroundColor={bgBarStyle}
      />
      {children}
    </View>
  );
};

export default Container;
