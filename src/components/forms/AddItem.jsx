import React, { useState } from "react";
import useShoppingListStore from "../../core/store/useShoppingListStore";

const AddItem = () => {
  const { addItem } = useShoppingListStore();

  const [newItemName, setNewItemName] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItemName.trim()) {
      addItem({
        name: newItemName.trim(),
        price: parseFloat(newItemPrice) || 0,
      });
      setNewItemName("");
      setNewItemPrice("");
    }
  };

  return (
    <div className="px-4 py-5 sm:px-6 border-b border-gray-200 bg-gray-50">
      <form
        onSubmit={handleAddItem}
        className="flex flex-col sm:flex-row gap-3"
      >
        <div className="flex-grow">
          <label htmlFor="item-name" className="sr-only">
            Item name
          </label>
          <input
            type="text"
            id="item-name"
            placeholder="Add new item..."
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            className="h-12 block w-full rounded-md border-gray-300 pl-7 pr-12 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
            required
          />
        </div>
        <div className="w-full sm:w-32">
          <label htmlFor="item-price" className="sr-only">
            Price
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center h-12 pl-3">
              <span className="text-gray-500">£</span>
            </div>
            <input
              type="number"
              id="item-price"
              placeholder="0.00"
              min="0"
              step="0.01"
              value={newItemPrice}
              onChange={(e) => setNewItemPrice(e.target.value)}
              className="h-12 block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
            />
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddItem;
