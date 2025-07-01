import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 10,
  },

  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  location: {
    fontSize: 13,
    color: '#777',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
  },

  graphStyle: {
    borderRadius: 8,
    marginBottom: 10,
  },

  waterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },

  waterCup: {
    width: 22,
    height: 44,
    backgroundColor: '#36A2EB',
    borderRadius: 5,
  },

  progressBar: {
    height: 8,
    borderRadius: 4,
    marginTop: 5,
    backgroundColor: '#E0E0E0',
  },

  kcalText: {
    fontSize: 13,
    color: '#555',
    marginBottom: 16,
  },

  btn: {
    width: '100%',
    maxWidth: 300,          
    alignSelf: 'center',
    backgroundColor: '#2E7D32',
    padding: 12,            
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },

  btnSecondary: {
    width: '100%',
    maxWidth: 300,          
    alignSelf: 'center',
    backgroundColor: '#2E7D32',
    padding: 12,            
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },

  logoutBtn: {
    width: '100%',
    maxWidth: 300,          
    alignSelf: 'center',
    backgroundColor: '#E53935',
    padding: 12,            
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },

  btnText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },

  logoutText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});