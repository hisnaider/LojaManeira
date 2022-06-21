import React, {useContext, useEffect} from 'react'
import {View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native'
import {Context} from '../context/Context'
import { Ionicons } from '@expo/vector-icons';
import useProdutos from "../hooks/useProdutos"
import CartItens from "../components/carrinhoComponents/cartItens"

const Carrinho = ({navigation}) => {
    const [mostrarProdutos, produtos] = useProdutos();

    const {state:{curtidos}, descurtir} = useContext(Context)

    const mostrarProduto = (data) => {
        return ()=> navigation.navigate("produto", {data})
    }

    return (
        <View style={{marginTop:45, flex:1}}>
            <Text style={styles.texto}>Curtidos</Text>
            <FlatList
                data={curtidos}
                keyExtractor={curtidos=>curtidos}
                renderItem={({item})=>{
                    return (
                        <>
                            <TouchableOpacity onPress={()=>descurtir(item)} style={{position: "absolute", alignSelf:"flex-end", marginHorizontal:15, marginVertical:25, right:0}}>
                                <Ionicons name="heart" size={35} color="#ff8800" />
                            </TouchableOpacity>
                            <CartItens 
                                data={item}
                                telaProduto={mostrarProduto}>
                            </CartItens>
                        </>
                    )}    
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    texto:{
        fontSize:40,
        fontWeight: 'bold',
        marginHorizontal:15,
    },
    bottomBar:{
        flexDirection:"row",
        height:75,
        width:"100%", 
        backgroundColor:"#ff8800", 
        borderTopLeftRadius:45, 
        borderTopRightRadius:45,
        justifyContent: "space-between",
        alignItems: "center"
    }
})

export default Carrinho