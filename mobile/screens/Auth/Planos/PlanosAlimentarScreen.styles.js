import { StyleSheet } from "react-native";
import { colors, fonts } from "../../../constants/theme";
export const styles = StyleSheet.create({
  container: {
    padding: 60,
    backgroundColor: colors.background,
    flex: 1,
  },
  newButton: {
    width: '100%',
    maxWidth: 300,          
    alignSelf: 'center',
    backgroundColor: '#2E7D32',
    padding: 12,            
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  newButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.bold,
    marginLeft: 10,
  },
  card: {
    backgroundColor: colors.white,
    padding: 20,
    marginTop: 15,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  nome: {
    fontSize: 20,
    fontFamily: fonts.bold,
    color: colors.primary,
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.textDark,
    marginBottom: 4,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  button: {
    width: '100%',
    maxWidth: 300,          
    alignSelf: 'center',
    backgroundColor: '#2E7D32',
    padding: 12,            
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  detailsButton: {
    backgroundColor: colors.primaryLight,
  },
  buttonText: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 16,
  },
  emptyText: {
    textAlign: "center",
    fontFamily: fonts.regular,
    color: colors.textLight,
    marginTop: 20,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  backButtonText: {
    marginLeft: 8,
    fontSize: 18,
    color: colors.primary,
    fontFamily: fonts.bold,
  },
});
