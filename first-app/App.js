import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

 const data=[1,2,3,4,5]
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.box1}>へろう</Text>
      <Text style={styles.box2}>へろー</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column-reverse'
  },
  box1:{
    height:100,
    backgroundColor:"green",
    flex:1
  },
  box2:{

  }
});
