import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function customhooksfunction(){
    const [todo , setTodos]=useState([])

    useEffect(()=>{
        axios.get("")
            .then((res)=>{
                setTodos(res.data.todo)
            })
    },[])
    return todo

}
 function CustomHooks() {
    
    const todos = customhooksfunction()
    

  return (
    <div>{todos.map(function(index){

    })}</div>
  )
}

export default CustomHooks
