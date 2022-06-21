import createDataContext from "./createDataContext"

const geralReducer = (state, action) => {
    switch (action.type) {
        case "addcarrinho":
            return {...state, cart:[...state.cart, {id:action.payload.id, quantidade: 1, selecionado:false}]}
        case "remover":
            return {...state, cart:state.cart.filter(prod=>prod.id != action.id)}
        case "incrementar":
            return {...state, cart:state.cart.map((prod)=>{
                return prod.id == action.payload.id
                    ? {...prod, quantidade: action.payload.valor}
                    : prod
                })
            }
        case "selecionar":
            return {...state, cart:state.cart.map((prod)=>{
                return prod.id == action.id
                    ? {...prod, selecionado: !prod.selecionado}
                    : prod
                })
            }
        case "curtir":
            return {...state, curtidos:[...state.curtidos, action.id]}
        case "descurtir":
            return {...state, curtidos:state.curtidos.filter(prod=>prod != action.id)}
        case "mudarValor":
            return {...state, valorTotal:action.valor}
        default:
            return state
    }
}

const addProduto = dispatch =>{
    try{
        return (id, valor) => {
            dispatch({type: "addcarrinho", payload:{id, valor}})
        }
    } catch(e){
        consolge.log(e)
    }
}

const incrementar = dispatch => {
    return (id, valor) => {
        if (valor > 0){
            dispatch({type: "incrementar", payload:{id, valor}})
        }
        else dispatch({type: "remover", id})
    }
}

const selecionar = dispatch => {
    return (id) => {
        dispatch({type: "selecionar", id})
    }
}

const curtir = dispatch =>{
    return (id) => {
         dispatch({type: "curtir", id})

    }
}

const descurtir = dispatch => {
    return (id) => {
        dispatch({type: "descurtir", id})
    }
}

const mudarValorTotal = dispatch => {
    return (valor) => {
        dispatch({type: "mudarValor", valor})
    }
}

export const {Context, Provider} = createDataContext(
    geralReducer,
    {addProduto, incrementar, selecionar, mudarValorTotal, curtir, descurtir},
    {cart:[], curtidos:[], valorTotal:0}
)