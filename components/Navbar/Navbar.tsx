import styles from "./navbar.module.css"

export default function Navbar() {
    return (
        <div className={styles["nav-container"]} id="">
            <div className={styles["nav-flex"]}>
                <a href="#home" className={styles["nav-item"]}>
                    Home
                </a>
                <a href="#contact" className={styles["nav-item"]}>
                    Contact
                </a>
            </div>
        </div>
    )
}
