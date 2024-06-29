import Image from "next/image";
import styles from "./home.module.css"

const Home = () => {
  //throw new Error('Error in homepage!');
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative Thoughts Agency.</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Deleniti laboriosam voluptas ab mollitia suscipit neque soluta! Voluptate ab corrupti provident,
        illo aspernatur corporis eligendi, et eius tempore reprehenderit itaque explicabo?
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contacts</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="" fill className={styles.brandImg} />
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
    </div>
  </div>;
};

export default Home;