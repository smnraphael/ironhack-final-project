import Sort from "./Sort";

const TopJobOffers = () => {
  return (
    <div>
      <div className="h-5 w-full"></div>
      <div className="flex justify-between items-center pb-2">
        <div className="text-2xl font-bold">Showing x jobs</div>
        <Sort />
      </div>
    </div>
  );
};

export default TopJobOffers;
