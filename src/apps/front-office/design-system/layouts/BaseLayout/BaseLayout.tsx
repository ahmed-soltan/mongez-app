import Footer from "../Footer";
import Header from "../Header";

export type BaseLayoutProps = {
  children: React.ReactNode;
};

/**
 * Base layout can be used to wrap all pages
 */
export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-5">
        <Header />
        <main className=" w-full">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
