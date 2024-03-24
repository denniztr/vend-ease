import CropSquareIcon from '@mui/icons-material/CropSquare';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const TodoItem = () => {
  return (
    <div className="w-full h-16 pl-1 mt-3 first:mt-0">
      <div className="h-full flex gap-4">
        <div className="flex items-center">
          <CropSquareIcon className="cursor-pointer hover:text-gray-700" />
        </div>
        <div className="bg-gray-300/50 rounded-md w-full relative cursor-pointer">
          <div className="h-full px-2 py-1 flex flex-col justify-evenly">
            <div className="max-w-[calc(100%-11px)] h-12 overflow-hidden">
              <h4 className="text-xs 2xl:text-sm">
                Настройка ТА 2405 на складе, проверка рецептов, настройка
                платежных систем
              </h4>
            </div>

            <div className="flex justify-between font-semibold text-xs text-gray-500">
              <p>Кирилл Барковский</p>
              <p>Срок: 30.05.2024</p>
            </div>
          </div>
          <DeleteForeverIcon className="text-red-700 absolute right-1 top-1 cursor-pointer transition duration-500 hover:text-red-800 w-5" />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
