import React, {useState, useContext, useEffect, useRef} from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Button, Animated} from 'react-native'
import {Context} from '../context/Context'
import { Ionicons } from '@expo/vector-icons';
import useProdutos from "../hooks/useProdutos"
import CartItens from "../components/carrinhoComponents/cartItens"

const Carrinho = ({navigation}) => {

    const {state:{cart, valorTotal}, incrementar, selecionar, mudarValorTotal} = useContext(Context)

    const [mostrarProdutos, produtos, produtosErro] = useProdutos();

    const carrinhoAnim = useRef(new Animated.Value(75)).current


    const showBottomBar = () => {
        Animated.timing(carrinhoAnim, {
            toValue:0,
            duration:500,
            useNativeDriver: true
        }).start()
    }

    const unshowBottomBar = () => {
        Animated.timing(carrinhoAnim, {
            toValue:75,
            duration:250,
            useNativeDriver: true
        }).start()
    }

    const mostrarProduto = (data) => {
        return ()=> navigation.navigate("produto", {data})
    }

    useEffect(async()=>{
        const calcularValor = async (selec) => {
            for (let i = 0;i<selec.length;i++) {
                const data = produtos.filter(prod=>prod.id == selec[i].id)[0]
                valor = valor+data.price*selec[i].quantidade
            }
            return valor
        }
        let valor = 0
        const selec = cart.filter(prod=>prod.selecionado == true)
        valor = await calcularValor(selec)
        mudarValorTotal(valor)
        if(valor > 0) showBottomBar()
        else unshowBottomBar()
    },[cart])


    return (
        <View style={{marginTop:45, flex:1}}>
            <Text style={styles.texto}>Carrinho</Text>
            <Button title="asd" onPress={()=>setT(!t)}/>

            <FlatList
                data={cart}
                keyExtractor={cart=>cart.id}
                renderItem={({item})=>{
                    return (
                        <>
                            <TouchableOpacity onPress={()=>{
                                selecionar(item.id)
                                }} style={styles.selecionar}>
                                {item.selecionado
                                    ? <View style={{backgroundColor:"#ff8800", height:20, width:20, borderRadius:90}}/>
                                    : null
                                }
                            </TouchableOpacity>
                            
                            <CartItens data={item.id} telaProduto={mostrarProduto}>
                        
                                <View style={{flexDirection:"row", alignItems: "center", justifyContent: "space-between"}}>
                                    <TouchableOpacity onPress={()=>incrementar(item.id, item.quantidade-1)}>
                                        <Ionicons name="remove" size={25} color="black"/>
                                    </TouchableOpacity>
                                    <Text style={{fontSize:20, marginHorizontal:10}}>{item.quantidade}</Text>
                                    <TouchableOpacity onPress={()=>incrementar(item.id, item.quantidade+1)}>
                                        <Ionicons name="add" size={25} color="black"/>
                                    </TouchableOpacity>
                                </View>
                            </CartItens>
                        </>
                    )
                }}
            />
            <Animated.View style={[styles.bottomBar, {transform:[{translateY:carrinhoAnim}]}]}>
                <Text style={{color: 'white', fontSize:27, marginLeft:35}}>R$ {Math.round(valorTotal*100)/100}</Text>
            </Animated.View>
            
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
    },
    selecionar:{
        position: "absolute", 
        alignSelf:"flex-end", 
        marginHorizontal:15, 
        marginVertical:25, 
        right:0, 
        borderWidth:1, 
        borderRadius:90, 
        height:27, 
        width:27, 
        alignItems:"center", 
        justifyContent: "center"
    }
})

export default Carrinho


/*
<IncDecButton
                                    inc={()=>incrementar(data.id, item.quantidade+1)}
                                    dec={()=>incrementar(data.id, item.quantidade-1)}
                                    quant={item.quantidade}
                                />*/



/*{t
                ?
                    <Animated.View style={[styles.bottomBar, {transform:[{translateY:carrinhoAnim}]}]}>
                        <Text style={{color: 'white', fontSize:27, marginLeft:35}}>R$ {Math.round(valorTotal*100)/100}</Text>
                    </Animated.View>
                : null
            }*/