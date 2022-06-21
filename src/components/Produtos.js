import React, {useContext, useRef} from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet, Animated} from "react-native"
import {Context} from "../context/Context"
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 


const Produtos = ({data, route}) => {

    const {state:{cart, curtidos}, addProduto, incrementar, curtir, descurtir} = useContext(Context)

    const curtirAnim = useRef(new Animated.Value(1)).current
    const cartAnim = useRef(new Animated.Value(1)).current

    const add = () => {
        Animated.sequence([
            Animated.timing(cartAnim, {
                toValue:2,
                duration:150,
                useNativeDriver: true
            }),
            Animated.timing(cartAnim, {
                toValue:1,
                duration:100,
                useNativeDriver: true
            })
        ]).start()
    }

    const gostar = () => {
        Animated.sequence([
            Animated.timing(curtirAnim, {
                toValue:2,
                duration:150,
                useNativeDriver: true
            }),
            Animated.timing(curtirAnim, {
                toValue:1,
                duration:100,
                useNativeDriver: true
            })
        ]).start()
    }

        return (
        <TouchableOpacity style={styles.container} onPress={route(data)}>
            <View style={styles.icone}>
                <Animated.View
                    style={{transform:[{scale: curtirAnim}]}}>
                    {!curtidos.filter(prod=>prod == data.id).length
                        ?
                            <TouchableOpacity onPress={()=>{
                                gostar()
                                curtir(data.id)}}
                            >
                                <Ionicons name="heart-outline" size={28} color="black"/>
                            </TouchableOpacity>
                            
                        :   
                            <TouchableOpacity onPress={()=>{descurtir(data.id)}}>
                                <Ionicons name="heart" size={28} color="#ff8800" />
                            </TouchableOpacity>
                    }
                </Animated.View>
                <Animated.View
                    style={{transform:[{scale: cartAnim}]}}>
                    {!cart.filter(prod=>prod.id == data.id).length
                        ? 
                            <View>
                                <TouchableOpacity onPress={()=>{
                                    add()
                                    addProduto(data.id, data.price)}}
                                >
                                    <Ionicons name="cart-outline" size={28} color="black" />
                                </TouchableOpacity>
                            </View>
                            
                        : 
                            <TouchableOpacity onPress={()=>incrementar(data.id, 0)}>
                                <MaterialIcons name="done" size={28} color="#ff8800" />
                            </TouchableOpacity>
                    }
                </Animated.View>
            </View>
            <Image source={{uri: data.image}} style={styles.imagem}/>
            <View style={{flex:1, padding:10}}>
                <Text numberOfLines={1} style={{color:"grey"}}>{data.title}</Text>
                <Text style={styles.texto}>R$ {data.price}</Text>
            </View>
            
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    icone:{
        flexDirection: 'row', 
        justifyContent: "space-between",
        margin:10
    },
    container:{
        flexGrow: 1,
        margin: 10,
        width:150,
        height:214,
        borderRadius: 25,
        backgroundColor: "white",
        elevation:5
    },

    imagem:{
        marginHorizontal:10,
        height:100, 
        width:"90%", 
        resizeMode:"contain",
        alignSelf: "center",
    },
    texto:{
        alignSelf: "center",
        fontSize:20,
        color:"#ff8800"
    }
})

export default Produtos

/*touchAnim.interpolate({inputRange: [0,1000],outputRange: ["0deg", "360deg"]})*/