import styles from "./page.module.css";
import MyComponent from "@/components/MyComponent/MyComponent";
import Clock from "@/components/Clock/Clock";

export default function Page() {
  return(
    <div className={styles.page}>
      <MyComponent />
      <Clock />
    </div>
  );
}
