import Logo from "@/components/logo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-y-5 min-h-screen justify-center items-center  ">
      <Logo />
      {children}
    </div>
  );
}
