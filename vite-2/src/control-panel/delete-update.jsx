import { useDispatch } from "react-redux";
import { UseUpdate, UseDelete } from '../components-1'
import styles from '../App.module.css'

export const UseTwoBtns = ({ id, title }) => {
  const dispatch = useDispatch();

  const onDeleteButton = (id) => {
    dispatch(UseDelete(id))
  };

  const onUpdateButton = (id) => {
    const newTitle = prompt("Введите новый текст дела", title)
    if (newTitle !== null) {
      dispatch(UseUpdate(id, newTitle));
    }
  };

  return (
    <div className={styles.btns}>
      <button
        onClick={() => {
          onUpdateButton(id);
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
