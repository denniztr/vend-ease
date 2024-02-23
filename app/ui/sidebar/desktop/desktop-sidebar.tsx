import AccordionUi from "./ui/accordion";

const SidebarDesktop = () => {
  return (
    <div className=" hidden md:block md:h-full md:bg-white md:rounded-md md:shadow-xl md:shadow-blue-gray-900/5 ">
      <div className="mb-5 p-4">
        <h5 className="font-semibold text-gray-700">VendEase</h5>
      </div>
      <AccordionUi />
    </div>
  );
};

export default SidebarDesktop;
