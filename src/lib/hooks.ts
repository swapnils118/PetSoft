import { PetContext } from "@/contexts/pet-context-provider";
import { SearchContext } from "@/contexts/search-context-provider";
import { useContext } from "react";

// Pet context
export function usePetContext() {
  const context = useContext(PetContext);

  if (!context) {
    throw new Error("usePetContext must be used within a PetContextProvider");
  }
  return context;
}

// Use search context
export function useSearchContext() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearchContext must be used within a SearchContextProvider");
  }
  return context;
}
