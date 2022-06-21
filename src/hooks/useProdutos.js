import {useState, useEffect} from "react"
import loja from "../api/loja"

export default () => {
    const [produtos, setProdutos] = useState([])
    const [produtosErro, setProdutosErro] = useState("")
    const controller = new AbortController()

    const mostrarProdutos = async (valor) => {
        await loja.get(
            `/products${valor}`,{
                signal: controller.signal
            }
            ).then((res)=>setProdutos(res.data)
            ).catch((err)=>setProdutosErro(err))
    }

    const abortRequest = () => {
        controller.abort()
    }

    useEffect(async ()=>{
        await mostrarProdutos("")
    },[])
    
    return [mostrarProdutos, produtos, abortRequest, produtosErro]
}
