import React, { useContext, useEffect } from "react"
import NodeContnext from "../Context/Node/NodeContext"


const Check = () => {

    const a = useContext(NodeContnext);

    useEffect(()=>{
        a.update();

    },[])
    return (
    <>
        <h1>hellow my name</h1>
        <h3>{a.state.name} and {a.state.class} </h3>
    </>
    )
}

export default Check;