import { connect, useDispatch } from 'react-redux'
import { setCurrentPlayer } from '../../actions'
import styles from './Field.module.css'

const FieldComponent = ({ cells, isGameEnded, isDraw }) => {
  const dispatch = useDispatch()
  const onCurrentPlayer = (index) => {
    dispatch(setCurrentPlayer(index))
  }
  return (
    <div className={styles.btns}>
      {cells.map((cell, index) => (
        <button
          key={index}
          onClick={() => onCurrentPlayer(index)}
          className={`${styles.btn} ${cell ? styles[`btn-${cell}`] : ''}`}
          disabled={cell || isGameEnded || isDraw}
        >
          {cell}
        </button>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  cells: state.cells,
  isGameEnded: state.isGameEnded,
  isDraw: state.isDraw
})

export const Field = connect(mapStateToProps)(FieldComponent);