import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";
import BackgroundPattern from "@/components/background-pattern";
import PetContextProvider from "@/contexts/pet-context-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackgroundPattern />
      <div className="max-w-[1050px] flex flex-col min-h-screen mx-auto px-4">
        <AppHeader />
        <PetContextProvider>{children}</PetContextProvider>
        <AppFooter />
      </div>
    </>
  );
}
