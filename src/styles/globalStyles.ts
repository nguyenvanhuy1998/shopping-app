import {StyleSheet} from 'react-native';
import {spacings} from '../constants';

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
  center: {
    alignItems: 'center',
    justifyContent: 'center',
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
});
export default globalStyles;
