/* eslint-disable react/prop-types */

import { Button } from "@nextui-org/react";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

const Card = ({ product, updateTotalAmount }) => {
  const { name, image, price, id } = product;
  const [isClick, setIsClick] = useState(false);
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);

      updateTotalAmount(-price);
    }
  };

  const handleIncrease = () => {
    setCount(count + 1);

    updateTotalAmount(price);
  };

  const handleToggle = (price) => {
    setIsClick(!isClick);
    setCount((previewCount) => previewCount + 1);

    updateTotalAmount(price);
  };

  return (
    <div className="block rounded-lg  shadow-xl dark:bg-surface-dark  ">
      <div className="relative overflow-hidden bg-cover bg-no-repeat  ">
        <img
          className="rounded-t-lg h-[160px] w-full sm:h-[230px] md:h-[250px] lg:h-[270px]"
          src={image}
          alt=""
        />
      </div>
      <div className="px-2 py-3 md:p-6 text-surface dark:text-white">
        <h5 className="mb-2 text-md md:text-xl font-medium leading-tight">
          {name}
        </h5>
        <h5 className="mb-3 text-sm leading-tight">
          {id === "001" && (
            <span className="pr-2 text-gray-400 line-through">₹500</span>
          )}
          ₹{price}
        </h5>

        <div className="items-center">
          {isClick ? (
            <div className="flex gap-4 items-center">
              <Button
                isIconOnly
                aria-label="Decrease"
                size="sm"
                onClick={() => handleDecrease(price)}
              >
                <span className="text-4xl">-</span>
              </Button>
              <span className="text-2xl">{count}</span>
              <Button
                isIconOnly
                aria-label="Increase"
                size="sm"
                onClick={() => handleIncrease(price)}
              >
                <span className="text-4xl">+</span>
              </Button>
            </div>
          ) : (
            <Button
              isIconOnly
              color="secondary"
              aria-label="Add to cart"
              size="sm"
              onClick={() => handleToggle(price)}
            >
              <ShoppingCart size={16} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
