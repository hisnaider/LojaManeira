import React,{useState,useEffect} from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity, ActivityIndicator} from "react-native"
import CartItensLoading from "./cartItensLoading"
import useProdutos from "../../hooks/useProdutos"

const CartItens = ({navigation, data, telaProduto, children}) => {

    const [produtos, setProdutos] = useState(null)

    const getProduct = async() => {
        try {
            const prod = await fetch(`https://fakestoreapi.com/products/${data}`)
            const json = await prod.json()
            setProdutos(json)
    }catch (err) {console.log(err)}}

    useEffect(()=>{
        getProduct()
    },[])
    return (
        <View style={{flexDirection:"row", marginVertical:25, marginHorizontal:15,}}>
            {produtos
            ?
                <>
                    <TouchableOpacity style={{elevation:5, backgroundColor:"white", borderRadius:25,}} onPress={telaProduto(produtos)}>
                        <Image source={{uri:produtos.image}}  style={styles.imagem}/>
                    </TouchableOpacity>
                    <View style={{flexDirection:"column", justifyContent: "center", flex:1, marginLeft:20}}>
                        <View style={{flex:1, justifyContent: "center", marginRight:30}}>
                            <Text style={{fontSize:20,}} numberOfLines={3}>{produtos.title}</Text>
                        </View>
                        <View style={{flexDirection: "row", justifyContent:"space-between"}}>
                            <Text style={styles.texto}>R$ {produtos.price}</Text>
                            {children}
                        </View>
                    </View>
                </>
            : <CartItensLoading/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    imagem:{
        height:115, 
        width:115, 
        resizeMode:"contain",
        margin:10
    },
    texto:{
        flex:1, 
        fontSize:20, 
        alignSelf:"center", 
        fontWeight:"bold"
    }
})

export default CartItens