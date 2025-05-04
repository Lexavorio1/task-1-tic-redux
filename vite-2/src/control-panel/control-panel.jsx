import { useDispatch } from 'react-redux'
import { addTodo, deleteTodo, updateTodo } from '../actions'


export const ControlPanel = () => {
    const dispatch = useDispatch()

    const onAddTodo = () => {
        dispatch(addTodo)
    }
    const onDeleteTodo = () => {
        dispatch(deleteTodo)
    }
    const onUpdateTodo = () => {
        dispatch(updateTodo)
    }

    return (
        <div>
            <button onClick={onAddTodo}>Добавить дело</button>
            <button onClick={onDeleteTodo}>Удалить</button>
            <button onClick={onUpdateTodo}>Изменить</button>
        </div>
    )
}