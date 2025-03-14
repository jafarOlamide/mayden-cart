import React from "react";
import useShoppingListStore from "../core/store/useShoppingListStore";
import priceFormat from "../core/utils/priceFormat";
import RemoveIcon from "./svg-icons/RemoveIcon";

const ShoppingListItem = () => {
  const { items, removeItem, togglePicked } = useShoppingListStore();

  return (
    <ul className="divide-y divide-gray-200">
      {items.length === 0 ? (
        <li className="px-4 py-6 text-center text-gray-500">
          Your shopping list is empty. Add items!
        </li>
      ) : (
        items.map((item) => (
          <li
            key={item.id}
            className="px-4 py-4 flex items-center justify-between"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={item.picked}
                onChange={() => togglePicked(item.id)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span
                className={`ml-3 text-sm ${
                  item.picked ? "line-through text-gray-500" : "text-gray-700"
                }`}
              >
                {item.name}
              </span>
            </div>
            <div className="flex items-center">
              <span
                className={`text-sm font-medium mr-4 ${
                  item.picked ? "text-gray-500" : "text-indigo-600"
                }`}
              >
                {priceFormat(item.price)}
              </span>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <RemoveIcon />
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default ShoppingListItem;
