import React from 'react'
import {Text, View, StyleSheet, Image, FlatList, TouchableOpacity} from "react-native"
import { Ionicons } from '@expo/vector-icons'; 


const CardPrincipal = ({data, route}) => {
    return (
        <FlatList
            data={data}
            keyExtractor={data=>data.id}
            horizontal
            renderItem={({item})=>{
                return (
                    <TouchableOpacity style={styles.container} onPress={route("produto", item)}>
                        <>
                            <Text style={{fontSize:20, color:"grey"}} numberOfLines={2}>{item.title}</Text>
                            <View style={{flexDirection:"row", alignItems: "center"}}>
                                <Text style={{fontSize:25, color:"#ff8800", justifyContent: "space-between", flex:1}}>R$ {item.price}</Text>
                                <Text>Avaliação {item.rating.rate}</Text>
                            </View>
                        </>
                        
                        <Image source={{uri: item.image}} style={styles.imagem}/>
                        <Ionicons name="arrow-forward" size={50} color="#ff8800" style={{alignSelf:"flex-end"}}/>
                    </TouchableOpacity>
                )
                
            }}
        />
    )
}

const styles = StyleSheet.create({
    imagem:{
        marginHorizontal:10,
        height:175, 
        aspectRatio:1,
        resizeMode:"contain",
        alignSelf: "center",
    },
    container:{
        height:350, 
        width:275, 
        alignSelf:"center", 
        marginTop:45,
        marginBottom:25,
        marginHorizontal:20,
        borderRadius:25, 
        elevation:5, 
        backgroundColor:"white",
        padding:15,
        justifyContent: "space-between",
    }
})

export default CardPrincipal