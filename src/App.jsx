import { TaskColumn } from './components/TaskColumn'
import { TaskForm } from './components/TaskForm'
import todoIcon from './assets/direct-hit.png'
import doingIcon from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'
import { useState } from 'react'

export const App = () => {
  const [tasks, setTasks] = useState([])
  console.log('tasks', tasks)
  return (
    <div className='grid grid-rows-[150px] auto-rows-auto gap-4'>
      <TaskForm setTasks={setTasks} />
      <main className='flex justify-evenly px-5 py-[8%]'>
        <TaskColumn title='To do' icon={todoIcon} tasks={tasks} status='todo' />
        <TaskColumn
          title='Doing'
          icon={doingIcon}
          tasks={tasks}
          status='doing'
        />
        <TaskColumn title='Done' icon={doneIcon} tasks={tasks} status='done' />
      </main>
    </div>
  )
}
