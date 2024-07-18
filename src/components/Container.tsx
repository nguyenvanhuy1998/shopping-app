import React, {ReactNode} from 'react';
import {
  ColorValue,
  StatusBarStyle,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {globalStyles} from '../styles';
import FocusAwareStatusBar from './FocusAwareStatusBar';

type Props = {
  styleContainer?: StyleProp<ViewStyle>;
  children: ReactNode;
  barStyle?: StatusBarStyle;
  bgBarStyle?: ColorValue;
  hiddenBar?: boolean;
  isScrollView?: boolean;
  isNoArea?: boolean;
};

const Container: React.FC<Props> = ({
  children,
  styleContainer,
  barStyle,
  bgBarStyle,
  hiddenBar,
  isScrollView = true,
  isNoArea,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        globalStyles.container,
        isNoArea
          ? {}
          : {
              paddingTop: insets.top,
              paddingBottom: insets.bottom,
              paddingLeft: insets.left,
              paddingRight: insets.right,
            },
        styleContainer,
      ]}>
      <FocusAwareStatusBar
        hidden={hiddenBar}
        barStyle={barStyle}
        backgroundColor={bgBarStyle}
      />
      {isScrollView ? (
        <KeyboardAwareScrollView
          alwaysBounceVertical={false}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={globalStyles.contentScrollContainer}>
          {children}
        </KeyboardAwareScrollView>
      ) : (
        children
      )}
    </View>
  );
};

export default Container;
