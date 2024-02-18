import Image from "next/image";
import styles from "./page.module.css";
import MainContent from "../../components/MainContent";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function Home() {
  return (
  <>
    <NavBar />
    <MainContent />
    <Footer />
  </>
  );
}
