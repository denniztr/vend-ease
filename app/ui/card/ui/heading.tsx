
import Link from 'next/link';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LaunchIcon from '@mui/icons-material/Launch';


interface HeadingProps {
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <div className="flex justify-between pb-4">
      <div className="flex items-center gap-4">
        <div>
          <PlayArrowIcon className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-semibold">{children}</h3>
      </div>
      <div>
        <Link href='/dashboard/add'>
          <AddBoxIcon className="w-6 h-6 cursor-pointer" />
        </Link>
        <LaunchIcon className="ml-1 w-6 h-6 text-gray-500/50 cursor-pointer transition duration-500 hover:text-gray-600" />
      </div>
    </div>
  );
};

export default Heading;
