import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Sistem Informasi</Text>
      <Text style={styles.text}>Fakultas Sains dan Teknologi</Text>
      <Text style={styles.text}>Egi Gunawan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0B0FF',
  },
  text: {
    fontSize: 30,
    color: '#4B0082'
  }
});

export default App;