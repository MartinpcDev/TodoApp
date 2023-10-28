import { TaskColumn } from './components/TaskColumn'
import { TaskForm } from './components/TaskForm'
import todoIcon from './assets/direct-hit.png'
import doingIcon from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'
import { useState, useEffect } from 'react'

const oldTasks = localStorage.getItem('tasks')
console.log(oldTasks)

export const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex)
    setTasks(newTasks)
  }

  console.log('tasks', tasks)

  return (
    <div className='grid grid-rows-[150px] auto-rows-auto gap-4 font-code'>
      <TaskForm setTasks={setTasks} />
      <main className='flex justify-evenly px-5 py-[8%]'>
        <TaskColumn
          title='To do'
          icon={todoIcon}
          tasks={tasks}
          status='todo'
          handleDelete={handleDelete}
        />
        <TaskColumn
          title='Doing'
          icon={doingIcon}
          tasks={tasks}
          status='doing'
          handleDelete={handleDelete}
        />
        <TaskColumn
          title='Done'
          icon={doneIcon}
          tasks={tasks}
          status='done'
          handleDelete={handleDelete}
        />
      </main>
    </div>
  )
}
