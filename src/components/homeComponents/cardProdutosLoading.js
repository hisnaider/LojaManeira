import React from 'react'
import {View, StyleSheet, ActivityIndicator} from "react-native"
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import {LinearGradient} from "expo-linear-gradient"

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

const CardProdutosLoading = () => {

    const Load = () => {
        return (
            <View style={styles.itemContainer}>
                <ActivityIndicator color="#ededed" size={100} style={{}}/>
                <ShimmerPlaceholder 
                    height={15}
                    width={125}
                    shimmerColors={["transparent","#ededed","transparent"]}
                />
                <ShimmerPlaceholder 
                    height={25}
                    width={75}
                    shimmerColors={["transparent","#ededed","transparent"]}
                    style={{marginBottom:5}}
                />
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
})

export default CardProdutosLoading