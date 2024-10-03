import Logo from "@/components/logo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#5DC9A8] min-h-screen flex flex-col xl:flex-row items-center justify-center gap-10">
      <Image
        src="https://bytegrad.com/course-assets/react-nextjs/petsoft-preview.png"
        alt="PetSoft image preview"
        width={519}
        height={472}
      />
      <div>
        <Logo />
        <h1 className="text-5xl font-semibold max-w-[500px] my-6">
          Manage your <span className="font-extrabold">pet daycare</span> with
          ease
        </h1>
        <p className="text-2xl font-medium max-w-[600px]">
          Use PetSoft to easily keep track pets under your care. Get lifetime
          access for $299.
        </p>
        <div className="mt-10">
          <button>Sign up</button>
        </div>
      </div>
    </main>
  );
}
