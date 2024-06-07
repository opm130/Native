import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import Dibujar from "./Styles";
import { Task } from "./App";

interface ItemProps
   {
    item:Task;
    markDone:()=>void;
    deleteFuntion:()=>void;
   }


export default function RenderItem({item,markDone,deleteFuntion}:ItemProps){
    return(
      <View style={Dibujar.tareascontenedor}>
        <TouchableOpacity onPress={markDone}>
        <Text 
        style={item.estado ? Dibujar.TextoDone: Dibujar.text}
        >
        {item.titulo}
      </Text>
      <Text style={Dibujar.text}>
        {item.fecha.toDateString()}
      </Text>
      </TouchableOpacity>
      
     { 
      item.estado &&
     <TouchableOpacity 
     style={Dibujar.removeBoton}
     onPress={deleteFuntion}
     >
        <Text style={Dibujar.wtext}>
          Eliminar
        </Text>
      </TouchableOpacity>}
  
      </View>
    )
  }

