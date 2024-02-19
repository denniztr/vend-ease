import ItemsList from "./ui/items-list";

const SidebarDesktop = () => {
  return (
    <div className="h-full bg-white rounded-md shadow-xl shadow-blue-gray-900/5 ">
      <div className="mb-5 p-4">
        <h5 className="font-semibold text-gray-700">VendEase</h5>
      </div>
      <ItemsList />
    </div>
  );
};

export default SidebarDesktop;
