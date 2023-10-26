import { Tag } from './Tag';

export const TaskForm = () => {
	return (
		<header className='flex items-center justify-center border-b-[1px] border-solid border-[#dcdcdc]'>
			<form className='w-[40%]'>
				<input
					className='w-full text-[20px] font-[500] bg-[#f9f9f9] text-[#000] border-[1px] border-solid border-[#dfe3e6] rounded-md p-2 mb-4 placeholder-[#686868]'
					type='text'
					placeholder='Enter your task'
				/>
				<div className='flex items-center justify-between'>
					<div>
						<Tag tagName='HTML' />
						<Tag tagName='CSS' />
						<Tag tagName='JavaScript' />
						<Tag tagName='React' />
					</div>
					<div>
						<select className='font-[500] text-[16px] border-[1px] border-solid border-[#999] rounded-md w-[120px] h-10 py-0 px-[5px]'>
							<option value='todo'>To do</option>
							<option value='doing'>Doing</option>
							<option value='done'>Done</option>
						</select>
						<button
							className='font-[500] text-base bg-[#6457f9] text-[#fff] rounded-md h-10 py-1 px-3 ml-3 border-none cursor-pointer'
							type='submit'>
							+ Add Task
						</button>
					</div>
				</div>
			</form>
		</header>
	);
};
