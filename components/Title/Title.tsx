import styles from "./title.module.css"

export default function Title() {
    return(
        <div className={styles.titleContainer}>
            <div className={styles.leftContainer}>
                <img className={styles.titleImg}></img>
            </div>
            <div className={styles.rightContainer}>
                <h1 className={styles.title}>My Website</h1>
                <p className={styles.subTitle}>New Coder/Programmer</p>
                <a className="button" target="_blank" href="https://github.com/TheNoviceOrNot">Here is my account</a>
            </div>
        </div>
    )
}
