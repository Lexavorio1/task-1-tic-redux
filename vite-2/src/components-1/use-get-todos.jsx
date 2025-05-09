import { useState, useEffect } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { axiosTodosSuccess } from '../actions'

export const useGetTodoList = (flagLoading) => {

    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    
      useEffect(()=>{
        setIsLoading(true)
        axios.get('http://localhost:2016/todos')
              .then((loadedData)=> {
                dispatch(axiosTodosSuccess(loadedData.data))
              })
              .finally(()=>{
                setIsLoading(false)
              })
      }, [dispatch, flagLoading])

    

      return { isLoading }
}