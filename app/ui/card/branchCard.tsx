import Heading from './ui/heading';
import BranchItem from './ui/branchItem';

const BranchCard = () => {
  return (
    <div className="h-full p-6 bg-white rounded-lg overflow-hidden">
      <Heading>Филиалы</Heading>
      <div className="h-full pb-10">
        <div className="max-h-[100%] overflow-auto">
          <BranchItem />
          <BranchItem />
          <BranchItem />
          <BranchItem />
          <BranchItem />
        </div>
      </div>
    </div>
  );
};

export default BranchCard;
