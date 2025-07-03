import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    fontFamily: fonts.bold,
    marginBottom: 24,
    textAlign: 'center',
    color: colors.primary,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    fontSize: 16,
    width: '100%',
    maxWidth: 320,
    alignSelf: 'center',
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  button: {
    width: '100%',
    maxWidth: 320,
    alignSelf: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  cancelButton: {
    width: '100%',
    maxWidth: 320,
    alignSelf: 'center',
    backgroundColor: colors.error,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  buttonText: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 16,
  },
});
