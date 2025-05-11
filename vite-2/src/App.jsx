import { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash'
import {
    AddTodoListForm,
    UseAddTodoList,
    fetchTodos,
} from './components-1'
import { UseTwoBtns } from './control-panel'
import styles from './App.module.css'

export const App = () => {

    const [showForm, setShowForm] = useState(false)
    const toggleFormVisibility = () => {
        setShowForm(!showForm)
    }

    const debouncedSetSearchPhrase = debounce((value) => {
      setSearchPhrase(value)
    }, 300)

    const [flagLoading, setFlagLoading] = useState(false)
    const setFlags = () => setFlagLoading(!flagLoading)

    const { onAdd } = UseAddTodoList(setFlags)
    const dispatch = useDispatch();
    const { todoList, isLoading } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchTodos(flagLoading));
  }, [dispatch, flagLoading])
    
    const [searchPhrase, setSearchPhrase] = useState('')
    const [isSorted, setIsSorted] = useState(false)

    const handleAddPerson = async (todo) => {
        onAdd(todo)
        setShowForm(false)
        setFlags()
    }

    const filteredTodos = todoList.filter(todo =>
        todo.title.toLowerCase().includes(searchPhrase.toLowerCase())
    )

    const sortedTodos = [...filteredTodos].sort((a, b) => {
        if (isSorted) {
            return a.title.localeCompare(b.title);
        }
        return 0
    })

    const toggleSort = () => {
        setIsSorted(!isSorted)
    }

    return (
        <div className={styles.app}>
            <button
                className={styles.addButton}
                onClick={toggleFormVisibility}
            >
                {showForm ? 'Скрыть форму' : 'Добавить дело'}
            </button>

            {showForm && (
                <AddTodoListForm
                    onAdd={handleAddPerson}
                    onCancel={toggleFormVisibility}
                />
            )}
            <input
            type="text"
            placeholder="Поиск..."
            value={searchPhrase}
            onChange={(e) => debouncedSetSearchPhrase(e.target.value)}
            className={styles.searchInput}
            />

            <button onClick={toggleSort} className={styles.sortButton}>
                {isSorted ? 'Выключить сортировку' : 'Включить сортировку'}
            </button>

            <ul>
                {isLoading
                    ? <div className={styles.loader}></div>
                    : sortedTodos.map(({ id, title }) => (
                        <li className={styles.list} key={id}>
                            {title}
                            <div className={styles.btns}>
                            <UseTwoBtns id={id} title={title} />
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    )
}