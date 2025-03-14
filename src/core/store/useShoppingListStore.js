import { create } from 'zustand';
import { persist } from 'zustand/middleware';


const useShoppingListStore = create(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => set((state) => ({
        items: [...state.items, { 
          ...item, 
          id: Date.now().toString() + Math.floor(Math.random() * 10000),
          picked: false 
        }]
      })),
      
      removeItem: (itemId) => set((state) => ({
        items: state.items.filter(item => item.id !== itemId)
      })),
      
      togglePicked: (itemId) => set((state) => ({
        items: state.items.map(item => 
          item.id === itemId 
            ? { ...item, picked: !item.picked } 
            : item
        )
      })),
      
      clearList: () => set({ items: [] }),
      
      getTotal: () => {
        const state = get();
        return state.items.reduce(
          (total, item) => total + (parseFloat(item.price) || 0), 
          0
        );
      },
      
      getItemsCount: () => {
        const state = get();
        return state.items.length;
      },
      
      getCompletedCount: () => {
        const state = get();
        return state.items.filter(item => item.picked).length;
      }
    }),
    {
      name: 'shopping-list-storage',
    }
  )
);

export default useShoppingListStore;