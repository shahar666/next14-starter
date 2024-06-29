import Image from 'next/image'
import styles from './singlePost.module.css'

const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/19789121/pexels-photo-19789121/free-photo-of-close-up-of-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image
                        className={styles.avatar}
                        src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                        alt=''
                        width={50}
                        height={50}
                    />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Jeff Jefferson</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01/01/2024</span>
                    </div>
                </div>
                <div className={styles.content}>description</div>
            </div>
        </div>
    )
}

export default SinglePostPage