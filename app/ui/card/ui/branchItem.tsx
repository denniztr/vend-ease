import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const BranchItem = () => {
  return (
    <div className="w-full h-16 border-b-[1px] mt-2 first:mt-0 ">
      <div className="h-full flex flex-col justify-around relative">
        <div>
          <h3 className="text-xs 2xl:text-sm font-semibold">
            Великие Луки
            <span className="ml-2 text-gray-500 font-normal">
              Сигорицкий проезд, дом 2
            </span>
          </h3>
        </div>
        <div className="flex flex-row justify-between text-xs">
          <div>
            <p className="text-black">
              ТА в парке: <span>100</span>
            </p>
          </div>
          <div>
            <p className="text-green-700">
              ТА в работе: <span className="text-black">100</span>
            </p>
          </div>
          <div>
            <p className="text-red-800">
              Ошибки: <span className="text-black">100</span>
            </p>
          </div>
          <div>
            <p className="text-gray-600">
              Склад: <span className="text-black">100</span>
            </p>
          </div>
        </div>
        <MoreHorizIcon className="absolute right-0 top-0 text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default BranchItem;
