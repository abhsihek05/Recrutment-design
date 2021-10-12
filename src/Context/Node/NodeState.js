import React, { useEffect, useState } from "react";
import NodeContnext from "./NodeContext";


const NodeState = (props) =>{

    

    const S1 = {
            name: "abhsihek",
            class: "10A"
        }

        const [state,setstate] = useState(S1);    

        const update  = () => {
            setTimeout (() => {
                setstate({
                    name:"raju",
                    class :  "23 B"
                })
            }, 2000);
        }


       
        
      useEffect(
           () => {

            
          }
      )


    return(
        <>
            <NodeContnext.Provider value={{state,update}}  >
                    {props.children}
            </NodeContnext.Provider>
        </>  
    )
}

export default NodeState; 