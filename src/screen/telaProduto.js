import React, {useContext} from "react"
import {View, Text, Image, ScrollView, StyleSheet, TouchableOpacity} from "react-native"
import {Button} from '@rneui/themed'
import { Ionicons } from '@expo/vector-icons'; 
import {Context} from "../context/Context"


const TelaProduto = ({navigation, route}) => {
    const {data} = route.params
    const {state:{cart, curtidos}, addProduto, curtir, descurtir} = useContext(Context)
    return (
        <View style={{flex:1}}>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Ionicons name="arrow-back" size={35} color="black" />
                </TouchableOpacity>
                {!curtidos.filter(prod=>prod == data.id).length
                    ? 
                        <TouchableOpacity onPress={()=>curtir(data.id)}>
                            <Ionicons name="heart-outline" size={35} color="black" />
                        </TouchableOpacity>
                    :
                        <TouchableOpacity onPress={()=>curtir(descurtir.id)}>
                            <Ionicons name="heart-outline" size={35} color="#ff8800" />
                        </TouchableOpacity>
                }
            </View>
            <View style={{flex:1,backgroundColor:"white"}}>
                <View style={{height:350, width:"100%", alignItems: "center", justifyContent: "center"}}>
                    <Image source={{uri: data.image}} style={styles.imagem}/>
                </View>
                <View style={styles.produtoInfo}>
                    <View style={{flex:1, padding:25}}>
                        <Text style={{fontSize:25,}}>{data.title}</Text>
                        <Text style={{color:"grey", marginTop:25, fontSize:15}}>Descrição</Text>
                        <Text style={{color:"black", marginTop:5, }}>{data.description}</Text>
                    </View>
                    <View style={styles.bottomContainer}>
                        <Text style={{color: 'white', fontSize:27, marginLeft:35}}>R$ {data.price}</Text>
                        {!cart.filter(prod=>prod.id == data.id).length
                            ? <Button
                                title="Adicionar"
                                icon={{
                                    name: "cart-outline",
                                    type: "ionicon",
                                    color: "black"
                                }}
                                containerStyle={{
                                    borderRadius:20,
                                    marginHorizontal:20}}
                                buttonStyle={{backgroundColor:"white"}}
                                titleStyle={{color:"black"}}
                                activeOpacity={0}
                                onPress={()=>addProduto(data.id, data.price)}
                            />
                            : <Button
                                title="Adicionado"
                                icon={{
                                    name: "done",
                                    type: "materialIcons ",
                                    color: "black"
                                }}
                
                                containerStyle={{
                                    borderRadius:20,
                                    marginHorizontal:20}}
                                buttonStyle={{backgroundColor:"white"}}
                                titleStyle={{color:"black"}}
                                activeOpacity={0}
                                onPress={()=>navigation.navigate("carrinho")}
                            />
                        }
                        
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    iconContainer:{
        flexDirection:"row",
        alignItems: "center", 
        justifyContent: "space-between",
        marginHorizontal:20, 
        marginTop:50,
    },
    produtoInfo:{
        flex:1, 
        backgroundColor:"#f7f7f7",
        borderTopLeftRadius:45,
        borderTopRightRadius:45,
        
    },
    bottomContainer:{
        height:75, 
        backgroundColor:"#ff8800", 
        borderRadius:30,
        flexDirection:"row",
        margin:20,
        alignItems: "center",
        justifyContent: "space-between",
    },
    imagem:{
        height:"90%",
        aspectRatio:1,
        resizeMode:"contain",
    }
})

export default TelaProduto;