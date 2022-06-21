import React from 'react'
import {View, StyleSheet, ActivityIndicator} from "react-native"
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import {LinearGradient} from "expo-linear-gradient"

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)


const cardPrincipalLoading = () => {
    const Load = () => {
        return (
            <View style={styles.container}>
                <ShimmerPlaceholder 
                    height={25}
                    width={245}
                    shimmerColors={["transparent","#ededed","transparent"]}
                />
                <ShimmerPlaceholder 
                    height={25}
                    width={125}
                    shimmerColors={["transparent","#ededed","transparent"]}
                />
                <View style={{flexDirection:"row",height:30, justifyContent: "space-between", marginVertical: 10}}>
                    <ShimmerPlaceholder 
                        height={30}
                        width={100}
                        shimmerColors={["transparent","#ededed","transparent"]}
                        style={{marginBottom:5}}
                    />
                    <ShimmerPlaceholder 
                        height={25}
                        width={100}
                        shimmerColors={["transparent","#ededed","transparent"]}
                        style={{marginBottom:5}}
                    />
                </View>
                <ActivityIndicator color="#ededed" size={125} style={{ flex:1}}/>
            </View>     
        )
    }

    return (
        <View style={{flexDirection:"row"}}>
            <Load/>
            <Load/>
            <Load/>
        </View>
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

export default cardPrincipalLoading