import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../actions";
import styles from '../App.module.css'

export const UseTwoBtns = ({ id, title }) => {
  const dispatch = useDispatch();

  const onDeleteButton = (id) => {
    dispatch(deleteTodo(id))
  };

  const onUpdateButton = (id) => {
    const newTitle = prompt("Введите новый текст дела", title)
    dispatch(updateTodo(id, newTitle))
  };

  return (
    <div className={styles.btns}>
      <button
        onClick={() => {
          onUpdateButton(id, title);
        }}
      >
        Изменить
      </button>
      <button
        className={styles.delete}
        onClick={() => {
            onDeleteButton(id);
        }}
      >
        Удалить
      </button>
    </div>
  );
};
