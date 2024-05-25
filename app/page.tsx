import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Title from "@/components/Title/Title";
import MyComponent from "@/components/MyComponent/MyComponent";
import Clock from "@/components/Clock/Clock";
import ContactMe from "@/components/Contact-me/ContactMe";

export default function Home() {
  return(
    <div className={styles.main} id="home">
      <Navbar />
      <Title />
      <ContactMe />
    </div>
  );
}
