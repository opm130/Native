import React from "react";
import {View,Text,StyleSheet,TextInput} from  "react-native"

const styles= StyleSheet.create({
  contenedor:{
    width:'100%',
    padding:20
  },
  titulos:{
    fontSize:20,
    color:'red'
  }
})

export default function App(){
  return(
    <View style={styles.contenedor}>
      <Text style={styles.titulos}>
        Hola
      </Text>
      <View>
        <TextInput placeholder="Agregar"/>
      </View>
    </View>
  )}