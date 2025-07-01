import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
  height: 48,
  borderWidth: 1,
  borderColor: '#DDDDDD',
  borderRadius: 8,
  paddingHorizontal: 16,
  marginBottom: 8,
  fontSize: 16,
  width: '100%',
  maxWidth: 400,       
  alignSelf: 'center', 
},
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    alignSelf: 'center',
    width: '100%',
    maxWidth: 400,
  },
  passwordInput: {
    flex: 1,
    height: 50,
  },
  loginButton: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    backgroundColor: '#2E7D32',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#2E7D32',
    textAlign: 'center',
    marginTop: 16,
    fontSize: 14,
    fontWeight: '500',
  },
});
