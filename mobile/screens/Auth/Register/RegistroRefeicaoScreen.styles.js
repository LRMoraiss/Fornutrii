import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 20,
  },

  scrollContent: {
    width: '100%',
    maxWidth: 350,
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingBottom: 40,
  },

  title: {
    fontSize: 24,
    fontFamily: fonts.bold,
    color: colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },

  label: {
    fontSize: 16,
    fontFamily: fonts.bold,
    color: colors.primaryDark,
    marginBottom: 6,
    marginTop: 12,
  },

  input: {
    height: 45,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: colors.white,
    marginBottom: 12,
    width: '100%',
  },

  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 20,
    width: '100%',
  },
  dateButtonText: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 16,
    marginLeft: 8,
  },

  saveButton: {
    backgroundColor: colors.success,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
    width: '100%',
    maxWidth: 300,
    alignSelf: 'center',
  },

  cancelButton: {
    backgroundColor: colors.error,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
    width: '100%',
    maxWidth: 300,
    alignSelf: 'center',
  },

  buttonText: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 16,
  },

  loading: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 18,
    color: colors.textLight,
  },
});
