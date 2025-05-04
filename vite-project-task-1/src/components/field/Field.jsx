import { connect } from 'react-redux'
import styles from './Field.module.css'

const FieldComponent = ({ cells, makeMove, isGameEnded, isDraw }) => {
  return (
    <div className={styles.btns}>
      {cells.map((cell, index) => (
        <button
          key={index}
          onClick={() => makeMove(index)}
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

const mapDispatchToProps = (dispatch) => ({
  makeMove: (index) => dispatch({ type: 'SET_CURRENT_PLAYER', payload: index })
})

export const Field = connect(mapStateToProps, mapDispatchToProps)(FieldComponent);