import { TaskCard } from './TaskCard';

export const TaskColumn = ({ title, icon }) => {
	return (
		<section className='w-[33.33%] m-5'>
			<h2 className='flex items-center'>
				<img className='w-[30px] mr-[5px]' src={icon} alt='' />
				{title}
			</h2>
			<TaskCard />
		</section>
	);
};
