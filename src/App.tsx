import { Header } from './components/Header'
import styles from './App.module.css'

import './global.css'
import { Input } from './components/Input'
import { Button } from './components/Button'

function App() {

  return (
    <div>
      <Header />

      <div
        className={styles.inputContainer}
      >
        <Input id={'1'} content={''} />
        <Button buttonType='create'/>
      </div>

      <div className={styles.task}>

      </div>
    </div>
  )
}

export default App