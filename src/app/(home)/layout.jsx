import Header from "@/components/base/header";
import Footer from "@/components/base/footer";

export default function HomeLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
