import createDataContext from "./createDataContext"

const curtidasReducer = (state, action) => {
    switch (action.type) {
        case "curtir":
            return [...state, action.id]
        case "remover":
            return state.filter(prod=>prod != action.id)
        default:
            return state
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

export const {Context, Provider} = createDataContext(
    curtidasReducer,
    {curtir, descurtir},
    []
)