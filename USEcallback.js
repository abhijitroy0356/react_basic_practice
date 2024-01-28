import React from 'react'
import { memo,useCallback,useState } from 'react'

 function USEcallback() {
    const [cnt , setCnt]=useState(0);

     const inputfunction = useCallback(()=>{
        console.log("hello")
    },[]
     )


  return (
   <>
    <CountButoon inputfunction={inputfunction}/>
    <button onClick={()=>{
        setCnt(cnt+1)
    }}> click me {cnt}</button>
    </>
  )
}

const CountButoon = memo(({inputfunction})=>{
    console.log("child render")

    return (
    <div>
        <button>click</button>
    </div>
    )
})
export default USEcallback