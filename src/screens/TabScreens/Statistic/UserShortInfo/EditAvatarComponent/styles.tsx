import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 150,
    height: 80,
    zIndex: 10,
    borderRadius: 5,
    elevation: 5,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    marginBottom: 10,
  },
});

export { styles };
