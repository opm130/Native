import React from "react";
import {View,Text,TextInput,TouchableOpacity,FlatList} from 'react-native'
import Dibujar from "./Styles";
import RenderItem from "./RendeItem";

const tareas=[
  {
    titulo:"Lavar baño",
    estado:false,
    fecha:new Date()
  },
  {
    titulo:"Lavar loza",
    estado:true,
    fecha:new Date()
  },
  {
    titulo:"Lavar soldadura",
    estado:false,
    fecha:new Date()
  }
]
export interface Task{
  titulo:string,
  estado:boolean,
  fecha: Date
}


export default function App(){
  const markDone=()=>{console.log("Hola")}
  const deleteFuntion=()=>{console.log("Hola2")}
return(
  <View style={Dibujar.contenedor}>
    <Text style={Dibujar.titulo}>
      Hola nati
    </Text>
    <View style={Dibujar.inputcontainer}>
      <TextInput style={Dibujar.textinput} placeholder="Agregar"/>
      <TouchableOpacity style={Dibujar.boton}>
        <Text style={Dibujar.wtext}>
          Enviar
        </Text>
      </TouchableOpacity>
    </View>
    <View>
      <FlatList
        renderItem={({item})=>
        (<RenderItem
        item={item}
        markDone={markDone}
        deleteFuntion={deleteFuntion}
        />)}
      data={tareas}
      />
    </View>
  </View>
)
}