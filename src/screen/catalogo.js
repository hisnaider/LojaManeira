import React, {useState, useContext} from 'react'
import {View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native'
import { SearchBar } from '@rneui/themed';
import useProdutos from '../hooks/useProdutos'
import Produtos from "../components/Produtos"
import Categoria from "../components/categoria"
import { AntDesign } from '@expo/vector-icons';

const Catalogo = ({navigation}) => {
    const [carregar, setCarregar] = useState(false)
    const [mostrarProdutos, produtos, produtosErro] = useProdutos();

    const telaDoProduto = (data) => {
        return ()=> navigation.navigate("produto", {data})
    }

    const trocarCategoria = async (valor) => {
        setCarregar(true)
        await mostrarProdutos(valor)
        setCarregar(false)

    }
    return (
        <View style={{marginHorizontal:15, marginTop:45, flex:1}}>
            <View style={{flexDirection:"row",alignItems: "center", justifyContent: "space-between"}}>
                <Text style={styles.texto}>Catalogo</Text>
                <AntDesign name="search1" size={35} color="black" />
            </View>
            <Categoria trocarCategoria={trocarCategoria}/>
            {carregar || !produtos.length
                ? <ActivityIndicator color="#ff8800" size={100} style={{position: "absolute", height:"100%", width:"100%"}}/>
                : <FlatList
                    data={produtos}
                    keyExtractor={produtos => produtos.id}
                    numColumns={2}
                    renderItem={({item})=>{
                        return (
                            <Produtos data={item} route={telaDoProduto}/>
                        )
                    }}
                />
            }
        
            
        </View>
    )
}


const styles = StyleSheet.create({
    texto:{
        fontSize:40,
        fontWeight: 'bold'

    }
})

export default Catalogo