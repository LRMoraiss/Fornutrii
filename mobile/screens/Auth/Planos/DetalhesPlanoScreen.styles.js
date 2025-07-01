import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: colors.background,
  },

  title: {
    fontSize: 26,
    fontFamily: fonts.bold,
    color: colors.primary,
    marginBottom: 20,
    textAlign: "center",
  },

  label: {
    fontSize: 17,
    fontFamily: fonts.bold,
    marginTop: 16,
    marginBottom: 4,
    color: colors.primaryDark,
  },

  value: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.textDark,
    lineHeight: 22,
  },

  loading: {
    marginTop: 60,
    textAlign: "center",
    fontSize: 18,
    color: colors.textLight,
    fontFamily: fonts.regular,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.success,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 4,
    elevation: 2,
  },

  backButtonText: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.success,
    marginLeft: 8,
  },
});
