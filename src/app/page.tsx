/* eslint-disable @next/next/no-img-element */
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <main className="landingPageflex flex-col items-center min-h-screen min-w-screen gap-10 overflow-x-hidden relative">
      {/* <Navbar page="Setsuna" /> */}
      {/* LANDING PAGE CODE GOES HERE! */}
      <Sidebar/>
      <Footer />
    </main>
  );
}
