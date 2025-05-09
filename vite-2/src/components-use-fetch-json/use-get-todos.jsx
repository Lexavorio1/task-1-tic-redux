import { useState, useEffect } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { axiosTodosSuccess } from '../actions'

export const useGetTodoList = (flagLoading) => {

    const [todoList, setTodoList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    
      useEffect(()=>{
        setIsLoading(true)
        axios.get('http://localhost:2016/todos')
              .then((loadedData)=> loadedData.data)
              .then((loadedProducts)=>{
                setTodoList(loadedProducts)
                dispatch(axiosTodosSuccess(todoList))
              })
              .finally(()=>{
                setIsLoading(false)
              })
      }, [flagLoading])

    

      return { todoList, isLoading }
}