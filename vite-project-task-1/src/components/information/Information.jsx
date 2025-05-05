import { connect, useSelector } from 'react-redux';
import { selectInfo } from '../../selectors'

const InfoComponent = ({ isGameEnded, isDraw }) => {
  const currentPlayer = useSelector(selectInfo)
  if (isGameEnded) return <div>Победитель: {currentPlayer}</div>
  if (isDraw) return <div>Ничья!</div>;
  return <div>Текущий ход: {currentPlayer}</div>
}

const mapStateToProps = (state) => ({
  currentPlayer: state.currentPlayer,
  isGameEnded: state.isGameEnded,
  isDraw: state.isDraw
})

export const Info = connect(mapStateToProps)(InfoComponent)