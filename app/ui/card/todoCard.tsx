import AddBoxIcon from '@mui/icons-material/AddBox';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import TodoItem from './ui/todo';

const TodoCard = () => {
  return (
    <div className="bg-white rounded-lg h-full px-6 py-6 relative overflow-hidden">
      <div className="h-full">
        <div className="flex justify-between pb-4">
          <div className="flex items-center gap-4">
            <div>
              <PlayArrowIcon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold">Задачи</h3>
          </div>
          <div>
            <AddBoxIcon className="w-7 h-7" />
          </div>
        </div>
        <div className="pt-4 pb-8 flex flex-col gap-4 max-h-[100%] overflow-auto content-center">
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
