// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View,Button ,Text} from 'react-native';
import React, {useState} from "react"
import { useNavigation } from '@react-navigation/native';


export default function login({navigation}) {

  const navigate = useNavigation();

  return (
    <View style={styles.container}>
      
      <View style={styles.container2}>
        <TextInput
          style={{width: 200, height:50,border:"10px",textAlign:'center',backgroundColor:"white"}}

          placeholder="User"
      />
      <TextInput
          style={{width: 200,height:50, border:"10px",textAlign:'center',backgroundColor:"white", marginTop:"10px"}}
          
          placeholder="Password"
      />
      {/* <StatusBar style="auto" /> */}
      <Button
      
          onPress={() => {navigate.navigate('Voltar')}}
          title="Enter"
          color="#404258"
      />

      
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#6B728E',
    alignItems: 'center',
    justifyContent: 'center',
    display:"block"
  },
  container2: {
   
    backgroundColor: '#6B728E',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:"80%",
    justifyContent:"space-evely"
  },
  
 
});
