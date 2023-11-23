import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const Detail =()=>{
    const params = useParams()

    const {store} = useContext(Context)

    const details = ()=> {
        const search = store.characters.find((item)=> item._id == params.id)
    }

    useEffect(()=> {
        details()
    },[])

    return(
        <>
            <h1>detalle</h1>
        </>
    )
}

export default Detail;