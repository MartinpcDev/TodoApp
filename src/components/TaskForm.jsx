import { useState } from 'react'
import { Tag } from './Tag'

export const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: '',
    status: 'todo',
    tags: []
  })

  const checkTag = tag => {
    return taskData.tags.some(item => item === tag)
  }

  const selectTag = tag => {
    if (taskData.tags.some(item => item === tag)) {
      const filterTags = taskData.tags.filter(item => item !== tag)
      setTaskData(prev => {
        return { ...prev, tags: filterTags }
      })
    } else {
      setTaskData(prev => {
        return { ...prev, tags: [...prev.tags, tag] }
      })
    }
  }

  const handleChange = e => {
    const { name, value } = e.target
    setTaskData(prev => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(taskData)
    setTasks(prev => {
      return [...prev, taskData]
    })
    setTaskData({
      task: '',
      status: 'todo',
      tags: []
    })
  }

  return (
    <header className='flex items-center justify-center border-b-[1px] border-solid border-[#dcdcdc]'>
      <form className='w-[40%] pb-8' onSubmit={handleSubmit}>
        <input
          className='w-full text-[20px] font-[500] bg-[#f9f9f9] text-[#000] border-[1px] border-solid border-[#dfe3e6] rounded-md p-2 mb-4 placeholder-[#686868]'
          value={taskData.task}
          type='text'
          placeholder='Enter your task'
          name='task'
          onChange={handleChange}
        />
        <div className='flex items-center justify-between'>
          <div>
            <Tag
              tagName='HTML'
              selectTag={selectTag}
              selected={checkTag('HTML')}
            />
            <Tag
              tagName='CSS'
              selectTag={selectTag}
              selected={checkTag('CSS')}
            />
            <Tag
              tagName='JavaScript'
              selectTag={selectTag}
              selected={checkTag('JavaScript')}
            />
            <Tag
              tagName='React'
              selectTag={selectTag}
              selected={checkTag('React')}
            />
          </div>
          <div className='flex text-center flex-wrap justify-center items-center gap-1'>
            <select
              className='font-[500] text-[16px] border-[1px] border-solid border-[#999] rounded-md w-[120px] h-10 py-0 px-[5px]'
              value={taskData.status}
              name='status'
              onChange={handleChange}
            >
              <option value='todo'>To do</option>
              <option value='doing'>Doing</option>
              <option value='done'>Done</option>
            </select>
            <button
              className='font-[500] text-base bg-[#6457f9] text-[#fff] rounded-md h-10 py-1 px-3 ml-3 border-none cursor-pointer text-center'
              type='submit'
            >
              +Add
            </button>
          </div>
        </div>
      </form>
    </header>
  )
}
