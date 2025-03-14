import React from "react";
import priceFormat from "../core/utils/priceFormat";
import useShoppingListStore from "../core/store/useShoppingListStore";

const ShoppingListFooter = () => {
  const { clearList, getTotal } = useShoppingListStore();
  return (
    <div className="px-4 py-4 sm:px-6 bg-gray-50 border-t border-gray-200">
      <div className="flex justify-between items-center">
        <button
          onClick={clearList}
          className="text-sm text-red-600 hover:text-red-500"
        >
          Clear list
        </button>
        <div className="text-right">
          <p className="text-sm font-medium text-gray-900">
            Total: {priceFormat(getTotal())}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingListFooter;
