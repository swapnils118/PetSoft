"use client";

import { useState, createContext } from "react";

export const PetContext = createContext(null);

export default function PetContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pets, setpets] = useState([]);
  const [selectedPetId, setSelectedPetId] = useState(null);

  return (
    <PetContext.Provider value={{ pets, selectedPetId }}>
      {children}
    </PetContext.Provider>
  );
}
