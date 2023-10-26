import { TaskColumn } from './components/TaskColumn';
import { TaskForm } from './components/TaskForm';
import todoIcon from './assets/direct-hit.png';
import doingIcon from './assets/glowing-star.png';
import doneIcon from './assets/check-mark-button.png';

export const App = () => {
	return (
		<div className='grid grid-rows-[150px] auto-rows-auto gap-4'>
			<TaskForm />
			<main className='flex justify-evenly px-5 py-[8%]'>
				<TaskColumn title='To do' icon={todoIcon} />
				<TaskColumn title='Doing' icon={doingIcon} />
				<TaskColumn title='Done' icon={doneIcon} />
			</main>
		</div>
	);
};
