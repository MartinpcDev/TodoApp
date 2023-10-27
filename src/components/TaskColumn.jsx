import { TaskCard } from './TaskCard'

export const TaskColumn = ({ title, icon, tasks, status }) => {
  return (
    <section className='w-[33.33%] m-5'>
      <h2 className='flex items-center'>
        <img className='w-[30px] mr-[5px]' src={icon} alt='' />
        {title}
      </h2>
      {tasks.map((task, index) => task.status === status && (
        <TaskCard key={index} title={task.task} tags={task.tags} />)
      )}
    </section>
  )
}
