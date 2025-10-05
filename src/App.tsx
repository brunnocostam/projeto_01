import { Header } from './components/Header'
import { Input } from './components/Input'
import { Task } from './components/Task'

import { ClipboardText } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid'

import styles from './App.module.css'
import './global.css'
import { useState } from 'react'


function App() {

const [tasks, setTasks] = useState([
  {
    id: uuidv4(),
    title: "Primeira Tarefa.",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "Segunda Tarefa.",
    isDone: true,
  },
])

function handleNewTask (taskTitle: string) {
  const newTask = {
    id: uuidv4(),
    title: taskTitle,
    isDone: false
  }

  setTasks([...tasks, newTask])

}

function deleteNewTask(taskId: string){
  const filterOutDeletedTask = tasks.filter(item => item.id !== taskId)

  setTasks([...filterOutDeletedTask])
}

function toggleTaskComplete(taskId: string) {
  const updatedTasks = tasks.map(task => {
    if (task.id === taskId) {
      return {
        ...task,
        isDone: !task.isDone
      }
    }
    return task
  })

  setTasks(updatedTasks)
}

const totalTasks = tasks.length
const completedTasks = tasks.filter(item => item.isDone === true).length

  return (
    <div>
      <Header />

      <div
        className={styles.inputContainer}
      >
        <Input handleNewTask={handleNewTask} />
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.counters}>
          <p className={styles.createdTasks}>
              Tarefas criadas
              <span className={styles.totalCreatedTasks} >{totalTasks}</span>
          </p>
          <p className={styles.concludedTasks}>
            Concluídas
            <span className={styles.totalConcludedTasks} >{`${completedTasks} de ${totalTasks}`}</span>
          </p>
        </div>
        <div className={styles.taskContainer}>
          {tasks.length === 0
          ? <div className={styles.emptyTasksContainer}>
              <span className={styles.clipBoardIcon}>
                <ClipboardText size={56}/>
              </span>
              <p className={styles.emptyTasksBoldText}>
                Você ainda não tem tarefas cadastradas
              </p>
              <p className={styles.emptyTasksNotBoldText}>
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          : tasks.map(task => {
            return (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                isDone={task.isDone}
                onDelete={deleteNewTask}
                onToggle={toggleTaskComplete}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App