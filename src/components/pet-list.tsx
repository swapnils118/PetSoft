"use client";

import { usePetContext } from "@/lib/hooks";
import Image from "next/image";

export default function PetList() {
  const { pets, handleChangeSelectedPetId } = usePetContext();
  return (
    <ul className="bg-white border-b border-black/[0.08]">
      {pets.map((pet) => (
        <li key={pet.id}>
          <button
            onClick={() => handleChangeSelectedPetId(pet.id)}
            className="flex items-center gap-3 h-[70px] w-full cursor-pointer px-5 text-base hover:bg-[#EFF1F2] focus:bg-[#EFF1F2] transition"
          >
            <Image
              src={pet.imageUrl}
              alt="Pet image"
              width={45}
              height={45}
              className=" w-[45px] h-[45px] rounded-full object-cover"
            />
            <p className="font-semibold">{pet.name}</p>
          </button>
        </li>
      ))}
    </ul>
  );
}
