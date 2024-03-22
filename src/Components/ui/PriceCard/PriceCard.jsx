/* eslint-disable react/prop-types */
const PriceCard = ({ totalAmount, productCount }) => {
  return (
    <div className="md:place-content-center  md:grid mt-12">
      <div className=" bg-[#4C52C4] w-full md:w-[400px]  flex pr-6 pl-3 py-3 rounded-lg items-center justify-between">
        <div className="flex gap-4">
          <p className="px-2 py-[3px] rounded-full bg-[#00E5C9]">
            {productCount}
          </p>
          <p className="text-md text-white">In your cart</p>
        </div>
        <div>
          <p className="text-end text-white">
            ₹ <span className="pl-1"> {totalAmount} </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default PriceCard;
