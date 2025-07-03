import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../constants/theme';
export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.background,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.bold,
    color: colors.primary,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.bold,
    marginLeft: 10,
  },
});
