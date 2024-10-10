"use client";

import { usePetContext } from "@/lib/hooks";
import Image from "next/image";

export default function PetDetails() {
  const { selectedPet } = usePetContext();
  return (
    <section className="w-full h-full">
      <div>
        <Image
          src={selectedPet?.imageUrl}
          alt="Selected pet image"
          width={75}
          height={75}
          className="rounded-full object-cover w-[75px] h-[75px]"
        />

        <h2 className="text-3xl font-semibold leading-7 ml-5">
          {selectedPet?.name}
        </h2>
      </div>
    </section>
  );
}
