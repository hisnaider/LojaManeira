import React,{useState,useEffect} from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity, ActivityIndicator} from "react-native"
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import {LinearGradient} from "expo-linear-gradient"

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

const CartItensLoading = () => {

    return (
        <View style={{flexDirection:"row"}}>
            <View style={styles.container}>
                <ActivityIndicator color="#ededed" size={75}/>
            </View>
            <View style={{flexDirection:"column", justifyContent: "center", flex:1, marginLeft:20}}>
                <View style={{flex:1, justifyContent: "center", marginRight:30}}>
                <ShimmerPlaceholder 
                    height={20}
                    width={210}
                    shimmerColors={["transparent","#ededed","transparent"]}
                />
                <ShimmerPlaceholder 
                    height={20}
                    width={175}
                    shimmerColors={["transparent","#ededed","transparent"]}
                />
                </View>
                <ShimmerPlaceholder 
                    height={25}
                    width={75}
                    shimmerColors={["transparent","#ededed","transparent"]}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:135, 
        width:135, 
        elevation:5, 
        backgroundColor:"white", 
        borderRadius:25,
        justifyContent: "center",
        alignItems: "center"
    },
    texto:{
        flex:1, 
        fontSize:20, 
        alignSelf:"center", 
        fontWeight:"bold"
    }
})

export default CartItensLoading