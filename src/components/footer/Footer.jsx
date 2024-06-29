import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>ShaharDev</div>
            <div className={styles.text}>
                Shahar creative thoghts agency @ all rights reserved.
            </div>
        </div>
    )
}

export default Footer