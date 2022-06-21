import React, {useState} from 'react'
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native'
import {Button} from '@rneui/themed'

const Categoria = ({trocarCategoria}) => {
    const [selec, setSelec] = useState("")
    const category = [
        {nome: "Todos", valor: ""},
        {nome: "Eletronicos", valor: "/category/electronics"},
        {nome: "Joias", valor: "/category/jewelery"},
        {nome: "Roupas femininas", valor: "/category/women's clothing"},
        {nome: "Roupas masculinas", valor: "/category/men's clothing"}
    ]

    return (
        <View style={{marginVertical:15}}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={category}
                keyExtractor={category => category.nome}
                renderItem={({item, index})=>{
                    return (
                        <Button 
                            type="clear"
                            title={item.nome}
                            containerStyle={{marginRight:30}}
                            titleStyle={{color:selec==index ? "#ff8800" : "grey", fontSize:20,}}
                            onPress={()=>{
                                if (selec!=index){
                                    trocarCategoria(item.valor)
                                    setSelec(index)
                                }
                            }}
                        />

                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    texto:{
        fontSize:20,
        paddingRight:50
    }
})

export default Categoria