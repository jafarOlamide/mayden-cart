import React, { useState } from "react";
import useShoppingListStore from "../core/store/useShoppingListStore";
import Navigation from "../components/layouts/Navigation";
import AddItem from "../components/forms/AddItem";
import ShoppingListFooter from "../components/ShoppingListFooter";
import ShoppingListItem from "../components/ShoppingListItem";
import priceFormat from "../core/utils/priceFormat";

const ShoppingListPage = () => {
  const { items, getTotal, getItemsCount, getCompletedCount } =
    useShoppingListStore();

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />

      <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h1 className="text-lg font-medium text-gray-900">
              Your Shopping List
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              {getItemsCount()} items ({getCompletedCount()} picked) - Total:{" "}
              {priceFormat(getTotal())}
            </p>
          </div>

          <AddItem />

          <ShoppingListItem />

          {items.length > 0 && <ShoppingListFooter />}
        </div>
      </div>
    </div>
  );
};

export default ShoppingListPage;
