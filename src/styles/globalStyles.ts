import {StyleSheet} from 'react-native';
import {colors, fontFamilies, fontSizes, spacings} from '../constants';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentScrollContainer: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
  },
  spaceBetween: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  jusEnd: {
    justifyContent: 'flex-end',
  },
  selfCenter: {
    alignSelf: 'center',
  },
  shadow: {
    shadowColor: 'rgba(0,0,0,0.35)',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  section: {
    paddingHorizontal: spacings.space_24,
    paddingVertical: spacings.space_16,
  },
  dot: {
    position: 'absolute',
    right: -spacings.space_4,
    top: -spacings.space_4,
    backgroundColor: colors.dark,
    width: spacings.space_15,
    height: spacings.space_15,
    borderRadius: 100,
  },
  text: {
    fontSize: fontSizes.size14,
    color: colors.dark,
    fontFamily: fontFamilies.poppinsRegular,
  },
});
export default globalStyles;
