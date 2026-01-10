import { create } from 'zustand';

interface KasparroStore {
  // Selection state
  selectedBrandId: string | null;
  selectedModuleId: string | null;

  // Actions
  setSelectedBrandId: (brandId: string | null) => void;
  setSelectedModuleId: (moduleId: string | null) => void;
  resetSelection: () => void;
}

export const useKasparroStore = create<KasparroStore>((set) => ({
  // Initial state
  selectedBrandId: null,
  selectedModuleId: null,

  // Actions
  setSelectedBrandId: (brandId) => set({ selectedBrandId: brandId }),
  setSelectedModuleId: (moduleId) => set({ selectedModuleId: moduleId }),
  resetSelection: () => set({ selectedBrandId: null, selectedModuleId: null }),
}));
