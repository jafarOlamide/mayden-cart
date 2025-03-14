import React from "react";
import useAuthStore from "../../core/store/useAuthStore";
// import useShoppingListStore from "../../core/store/useShoppingListStore";
import { useNavigate } from "react-router";

const Navigation = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  //   const { setCurrentUser } = useShoppingListStore();

  const handleLogout = () => {
    logout();
    // setCurrentUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-lg font-semibold text-indigo-600">
              Mayden Shopping List App
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-700 mr-2">
              Hi, {user?.name || "User"}
            </span>
            <button
              onClick={handleLogout}
              className="px-3 py-1 text-sm text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
