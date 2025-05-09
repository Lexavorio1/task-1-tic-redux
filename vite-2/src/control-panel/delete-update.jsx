import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../actions";
import styles from '../App.module.css'

export const UseTwoBtns = (id, title) => {
  const dispatch = useDispatch();

  const onDeleteButton = (id) => {
    dispatch(deleteTodo(id))
  };

  const onUpdateButton = (id, title) => {
    dispatch(updateTodo(id, title))
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
