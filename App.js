import React, {useContext} from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import {Provider, Context} from "./src/context/Context"
import Home from "./src/screen/home"
import Catalogo from "./src/screen/catalogo"
import Curtidos from "./src/screen/curtidos"
import Carrinho from "./src/screen/carrinho"
import Perfil from "./src/screen/perfil"
import TelaProduto from "./src/screen/telaProduto"

const Tema = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background:"white"
  }
}

const tabIcons = (route, color) => {
  switch (route.name) {
    case "inicio":
      return <Ionicons name="home" size={24} color={color} />
    case "catalogo":
      return <Ionicons name="list" size={24} color={color} />
    case "curtidos":
      return <Ionicons name="heart" size={24} color={color} />
    case "carrinho":
      return <Ionicons name="cart" size={24} color={color} />
    case "perfil":
      return <Ionicons name="person" size={24} color={color} />
    default:
      return <Ionicons name="close" size={24} color={color} />
  }
}

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator()

function TabScreen() {
  const {state:{cart}} = useContext(Context)
  return (
    <Tab.Navigator 
        screenOptions={({route}) => (
          
          {tabBarIcon: (color) => {
            return tabIcons(route, color.color)
            },
            tabBarActiveTintColor: "#ff8800",
            tabBarInactiveTintColor: "grey"
          }
        )}
      >
        <Tab.Screen name="inicio" component={Home} options={{headerShown: false, title:"Inicio", gestureDirection: 'vertical-inverted'}}/>
        <Tab.Screen name="catalogo" component={Catalogo} options={{headerShown: false, title:"Catalogo", gestureDirection: 'vertical-inverted'}}/>
        <Tab.Screen name="curtidos" component={Curtidos} options={{headerShown: false, title:"Curtidos", gestureDirection: 'vertical-inverted'}}/>
        <Tab.Screen name="carrinho" component={Carrinho} options={
          {
            headerShown: false, 
            title:"Carrinho",
            tabBarBadge:cart.length,
            tabBarBadgeStyle:{backgroundColor:"#ff8800", color:"white", opacity:cart.length ? 1 : 0},
            gestureDirection: 'vertical-inverted'
          }
        }/>
        <Tab.Screen name="perfil" component={Perfil} options={{headerShown: false, title:"Perfil",gestureDirection: 'vertical-inverted'}}/>
      </Tab.Navigator>
  )
}
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};


function App() {
  return (
    <NavigationContainer theme={Tema}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={TabScreen} options={{
    transitionSpec: {
      open: config,
      close: config,
    },
  }}/>
        <Stack.Screen name="produto" component={TelaProduto} options={{
    transitionSpec: {
      open: config,
      close: config,
    },
  }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default () => {
  return (
    <Provider>
      <App/>
    </Provider>
  )
}
