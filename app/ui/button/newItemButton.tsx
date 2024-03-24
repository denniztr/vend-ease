import AddSharpIcon from '@mui/icons-material/AddSharp';

const NewItemButton = () => {
  return (
    <div className="h-full w-28 bg-black text-white flex justify-around items-center py-1 pr-1 rounded-sm cursor-pointer">
      <AddSharpIcon className="w-5" />
      <p className="text-sm font-normal">Добавить</p>
    </div>
  );
};

export default NewItemButton;
