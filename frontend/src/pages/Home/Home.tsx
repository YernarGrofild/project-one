import { useState, type CSSProperties } from "react";
import photo1 from "../../assets/photo1.jpg";
import styles from "./Home.module.scss";

export default function Home() {
  const [isGiftOpen, setIsGiftOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const promoCode = "8march{c3rt1f1c4t_";
  const primer = "flag{fl4g_3x4mpl3}"


  return (
    <div className={styles.page}>
      <div className={styles.motionField} aria-hidden="true">
        <span className={`${styles.glow} ${styles.glowOne}`} />
        <span className={`${styles.glow} ${styles.glowTwo}`} />
        <span className={`${styles.glow} ${styles.glowThree}`} />
      </div>

      <main className={styles.main}>

        <section className={`${styles.hero} ${styles.reveal} ${styles.delayTwo}`}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>Интереснро, а ты все еще сюда заходишь? =)</h1>
          </div>

          <div className={styles.heroArt} aria-hidden="true">
            <div className={styles.flowerScene}>
              <div className={`${styles.flower} ${styles.flowerLeft}`}>
                <span className={styles.flowerStem} />
                <span className={`${styles.flowerLeaf} ${styles.flowerLeafLeft}`} />
                <span className={`${styles.flowerLeaf} ${styles.flowerLeafRight}`} />
                <div className={styles.blossom}>
                  <span className={`${styles.blossomPetal} ${styles.blossomPetalOne}`} />
                  <span className={`${styles.blossomPetal} ${styles.blossomPetalTwo}`} />
                  <span className={`${styles.blossomPetal} ${styles.blossomPetalThree}`} />
                  <span className={`${styles.blossomPetal} ${styles.blossomPetalFour}`} />
                  <span className={`${styles.blossomPetal} ${styles.blossomPetalFive}`} />
                  <span className={`${styles.blossomPetal} ${styles.blossomPetalSix}`} />
                  <span className={styles.flowerCore} />
                </div>
              </div>

              <div className={`${styles.flower} ${styles.flowerCenter}`}>
                <span className={styles.flowerStem} />
                <span className={`${styles.flowerLeaf} ${styles.flowerLeafLeft}`} />
                <span className={`${styles.flowerLeaf} ${styles.flowerLeafRight}`} />
                <div className={styles.blossom}>
                  <span className={`${styles.blossomPetal} ${styles.blossomPetalOne}`} />
                  <span className={`${styles.blossomPetal} ${styles.blossomPetalTwo}`} />
                  <span className={`${styles.blossomPetal} ${styles.blossomPetalThree}`} />
                  <span className={`${styles.blossomPetal} ${styles.blossomPetalFour}`} />
                  <span className={`${styles.blossomPetal} ${styles.blossomPetalFive}`} />
                  <span className={`${styles.blossomPetal} ${styles.blossomPetalSix}`} />
                  <span className={styles.flowerCore} />
                </div>
              </div>

              <div className={`${styles.flower} ${styles.flowerRight}`}>
                <span className={styles.flowerStem} />
                <span className={`${styles.flowerLeaf} ${styles.flowerLeafLeft}`} />
                <span className={`${styles.flowerLeaf} ${styles.flowerLeafRight}`} />
                <div className={styles.blossom}>
                  <span className={`${styles.blossomPetal} ${styles.blossomPetalOne}`} />
                  <span className={`${styles.blossomPetal} ${styles.blossomPetalTwo}`} />
                  <span className={`${styles.blossomPetal} ${styles.blossomPetalThree}`} />
                  <span className={`${styles.blossomPetal} ${styles.blossomPetalFour}`} />
                  <span className={`${styles.blossomPetal} ${styles.blossomPetalFive}`} />
                  <span className={`${styles.blossomPetal} ${styles.blossomPetalSix}`} />
                  <span className={styles.flowerCore} />
                </div>
              </div>

              <span className={styles.flowerGround} />
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
