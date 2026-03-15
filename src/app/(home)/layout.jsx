import Header from "@/components/base/header";
import Footer from "@/components/base/footer";
import Preloader from "../../components/base/preloader";

export default function HomeLayout({ children }) {
  return (
    <>
      <Preloader />
      <Header />
      {children}
      <Footer />
    </>
  );
}
