import { Provider } from 'react-redux'
import { Field } from './components/field'
import { Info } from './components/information'
import { store } from './store'
import styles from './App.module.css'

export const App = () => {
  const restart = () => {
    store.dispatch({ type: 'RESTART_GAME' })
  }

  return (
    <Provider store={store}>
      <div className={styles.game}>
        <Info />
        <button onClick={restart}>Начать заново</button>
        <Field />
      </div>
    </Provider>
  )
}