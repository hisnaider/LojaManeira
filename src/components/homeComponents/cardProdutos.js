import React from 'react'
import {Text, View, FlatList, StyleSheet,Image, TouchableOpacity} from "react-native"
import { Ionicons } from '@expo/vector-icons'; 


const CardProdutos = ({data, route}) => {
    return (
        <FlatList
            data={data}
            keyExtractor={data=>data.id}
            horizontal
            renderItem={({item, index})=>{
                return (
                    <>
                      <TouchableOpacity onPress={route("produto",item)} style={styles.itemContainer}>
                        <Image source={{uri:item.image}} style={styles.imagem}/>
                        <Text numberOfLines={1} style={{color:"grey"}}>{item.title}</Text>
                        <Text style={{fontSize:20, flex:1, color:"#ff8800"}}>R$ {item.price}</Text>
                    </TouchableOpacity>  
                    {index == 3
                        ?
                            <TouchableOpacity onPress={route("catalogo")} style={[styles.itemContainer,{backgroundColor:"#ff8800", justifyContent: "space-between", padding:20}]}>
                                <Text style={{color:"white", fontSize:20}}>Ir para catalogo</Text>
                                <Ionicons name="arrow-forward" size={35} color="white" style={{alignSelf:"flex-end"}}/>
                            </TouchableOpacity>
                        :null
                    }
                    
                    </>
                    
                )
                
            }}
        />            
    )
}

const styles = StyleSheet.create({
    itemContainer:{
        width:150, 
        height:150, 
        backgroundColor:"white", 
        alignItems: "center",
        justifyContent: "space-between",
        elevation:5,
        marginVertical:25, 
        borderRadius:25, 
        marginHorizontal:10
    },
    imagem:{
        marginHorizontal:10,
        marginVertical:10,
        height:80, 
        width:"90%", 
        resizeMode:"contain",
        alignSelf: "center",
    },
})

export default CardProdutos