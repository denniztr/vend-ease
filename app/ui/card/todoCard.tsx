import Heading from './ui/heading';
import TodoItem from './ui/todoItem';

const TodoCard = () => {
  return (
    <div className="h-full p-6 bg-white rounded-lg relative overflow-hidden">
      <Heading>Задачи</Heading>
      <div className="h-full pb-10">
        <div className="max-h-[100%] overflow-auto">
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
