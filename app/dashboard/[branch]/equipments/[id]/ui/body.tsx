import { Branch } from '@/app/interface/branch';
import PrimaryImage from '@/app/ui/image/image';



interface BodyProps {
  equipment: Branch;
}

const Body: React.FC<BodyProps> = ({ equipment }) => {
  return (
    <div className="min-h-full flex flex-col flex-nowrap">
      <div className="flex flex-row gap-4">
        <PrimaryImage />
        <main className="w-full flex flex-col gap-1">
          <div>main info</div>
        </main>
      </div>
    </div>
  );
};

export default Body;
