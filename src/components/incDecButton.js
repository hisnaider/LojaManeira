import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import { Ionicons } from '@expo/vector-icons';

const IncDecButton = ({inc, dec, quant}) => {
    return (
        <View style={{flexDirection:"row", alignItems: "center", justifyContent: "space-between"}}>
            <TouchableOpacity>
                <Ionicons name="remove" size={25} color="black"/>
            </TouchableOpacity>
            <Text style={{fontSize:20, marginHorizontal:10}}>{item.quant}</Text>
            <TouchableOpacity>
                <Ionicons name="add" size={25} color="black"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})

export default IncDecButton;