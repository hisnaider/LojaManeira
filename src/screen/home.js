import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Image, ActivityIndicator, ScrollView} from 'react-native'
import useProdutos from '../hooks/useProdutos'
import CardProdutos from "../components/homeComponents/cardProdutos"
import CardPrincipal from "../components/homeComponents/cardPrincipal"
import CardProdutosLoading from "../components/homeComponents/cardProdutosLoading"
import CardPrincipalLoading from '../components/homeComponents/cardPrincipalLoading'


const Home = ({navigation}) => {
    const [mostrarProdutos, produtos, produtosErro] = useProdutos();

    const telaDoProduto = (rota,data) => {
        return ()=> navigation.navigate(rota, {data})
    }

    return (
        <ScrollView style={{marginTop:45, flex:1, height:"100%"}}>
            <Text style={{fontSize:40, fontWeight:"bold",marginHorizontal:15}}>Inicio</Text>
                {produtos.length 
                    ?<CardPrincipal data={produtos.sort((a,b)=>(a.rating.rate > b.rating.rate)?-1:1).slice(0,3)} route={telaDoProduto}/>

                    :<CardPrincipalLoading/>
                }
            <View style={{marginTop:30}}>
                <View style={{marginHorizontal:15}}>
                    <Text style={{fontSize:30, fontWeight:"bold",}}>Pra economizar</Text>
                    <Text style={{fontSize:15, color:"grey",}}>Só os produto mais baratos!!!</Text>
                </View>
                {produtos.length
                    ?<CardProdutos data={produtos.sort((a,b)=>(a.price > b.price)?1:-1).slice(0,4)} route={telaDoProduto}/>
                    :<CardProdutosLoading/>
                }
            </View>
            <View style={{marginTop:30}}>
                <View style={{marginHorizontal:15}}>
                    <Text style={{fontSize:30, fontWeight:"bold",}}>Pra ostentar</Text>
                    <Text style={{fontSize:15, color:"grey",}}>Só os produto mais caro!!!</Text>
                </View>
                {produtos.length
                    ?<CardProdutos data={produtos.sort((a,b)=>(a.price > b.price)?1:-1).slice(-5,-1).reverse()} route={telaDoProduto}/>
                    :<CardProdutosLoading/>
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    texto:{
        fontSize:40,
        fontWeight: 'bold',
    },
})

export default Home