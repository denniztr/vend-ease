interface ParkCardProps {
  label: string;
  quantity: number;
  styles: string;
}

const ParkCard: React.FC<ParkCardProps> = ({ label, quantity, styles }) => {
  console.log(label);
  return (
    <div className="bg-white rounded-lg h-full w-1/3">
      <div className="text-center text-base font-bold p-1">
        <h5 className={styles}>
          {label}:
          <span className="ml-2 text-black font-semibold">{quantity}</span>
        </h5>
      </div>
    </div>
  );
};

export default ParkCard;
