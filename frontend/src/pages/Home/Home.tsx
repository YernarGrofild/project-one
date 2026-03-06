import { useState, type CSSProperties } from "react";
import photo1 from "../../assets/photo1.jpg";
import styles from "./Home.module.scss";

export default function Home() {
  const year = new Date().getFullYear();
  const [isGiftOpen, setIsGiftOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const promoCode = "8march{c3rt1f1c4t_";
  const primer = "flag{fl4g_3x4mpl3}"

  const wishes = [
    {
      title: "Тепла в каждом дне",
      text: "Пусть рядом всегда будут люди, рядом с которыми легко дышать, улыбаться и чувствовать опору.",
    },
    {
      title: "Вдохновения и роста",
      text: "Желаем смелых идей, уверенных решений и внутренней силы для красивых перемен.",
    },
    {
      title: "Счастья и гармонии",
      text: "Пусть в доме будет уют, в сердце спокойствие, а в жизни много светлых моментов.",
    },
  ];

  const moments = [
    {
      title: "Мягкое начало весны",
      text: "Пусть утро встречает хорошими новостями, а день наполняется маленькими радостями.",
    },
    {
      title: "Теплые слова рядом",
      text: "Пусть рядом будут те, кто слышит, поддерживает и ценит вас искренне и по-настоящему.",
    },
    {
      title: "Смелость мечтать",
      text: "Пусть каждая важная мечта получает шанс стать реальностью уже в этом году.",
      easterEgg: "4 часть твой номер телефона каспи :) Теперь после того как ты нашла все 4 части - соедини их вместе поочередно и в конце не забудь добавить }",
    },
  ];

  const springWords = [
    "2 часть",
    "улыбки",
    "нежность",
    "w0m3ns_d4y_",
    "свет",
    "забота",
  ];

  const petals = Array.from({ length: 16 }, (_, index) => index);

  const getPetalStyle = (index: number): CSSProperties => {
    const size = 10 + (index % 4) * 5;

    return {
      left: `${(index * 11 + 5) % 95}%`,
      width: `${size}px`,
      height: `${Math.round(size * 1.35)}px`,
      animationDelay: `${(index * 1.05).toFixed(2)}s`,
      animationDuration: `${12 + (index % 5) * 2}s`,
      opacity: 0.22 + (index % 4) * 0.12,
    };
  };

  const handleCopyPromo = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(promoCode);
      } else {
        const area = document.createElement("textarea");
        area.value = promoCode;
        document.body.appendChild(area);
        area.select();
        document.execCommand("copy");
        area.remove();
      }

      setIsCopied(true);
      window.setTimeout(() => setIsCopied(false), 1800);
    } catch {
      setIsCopied(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.motionField} aria-hidden="true">
        <span className={`${styles.glow} ${styles.glowOne}`} />
        <span className={`${styles.glow} ${styles.glowTwo}`} />
        <span className={`${styles.glow} ${styles.glowThree}`} />

        {petals.map((index) => (
          <span
            key={index}
            className={styles.petalDrop}
            style={getPetalStyle(index)}
          />
        ))}
      </div>

      <header className={styles.topBar}>
        <div className={styles.topInner}>
          <span className={styles.brand}>Epstein File #3</span>
          <span className={styles.date}>f0r_k4sp1_</span>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.waveBanner}>
          

          <div className={`${styles.waveText} ${styles.reveal} ${styles.delayOne}`}>
            <p className={styles.waveKicker}>Читай внимательно</p>
            <h2>Внизу есть подарочек для тебя :)</h2>
          </div>
        </section>

        <section className={`${styles.hero} ${styles.reveal} ${styles.delayTwo}`}>
          <div className={styles.heroText}>
            <p className={styles.kicker}>Международный женский день</p>
            <h1 className={styles.title}>С 8 Марта Диана!</h1>
            <p className={styles.lead}>
              Я не хочу писать сюда бАНАЛЬНОЕ поздравление но скажу что я впервые поздравляю кого-то в таком виде. Но и тебя впервые поздравляют в таком виде :D
            </p>
            <p className={styles.lead}>
              Хочу для примера сделать простую игру где нужно найти флаг. Флаг будет примерно такой - {primer}. Это задачи которые мы решаем на 
              соревнованиях но очень упрощенно :)
            </p>

            <div className={styles.actions}>
              <a href="#wishes" className={styles.primaryCta}>
                Читать пожелания
              </a>
            </div>

          </div>

          <div className={styles.heroArt} aria-hidden="true">
            <div className={styles.orbit}>
              <span className={styles.core} />
              <span className={`${styles.ring} ${styles.ringOne}`} />
              <span className={`${styles.ring} ${styles.ringTwo}`} />

              <span className={`${styles.orbitPetal} ${styles.petalOne}`} />
              <span className={`${styles.orbitPetal} ${styles.petalTwo}`} />
              <span className={`${styles.orbitPetal} ${styles.petalThree}`} />
              <span className={`${styles.orbitPetal} ${styles.petalFour}`} />
              <span className={`${styles.orbitPetal} ${styles.petalFive}`} />
              <span className={`${styles.orbitPetal} ${styles.petalSix}`} />
              <span className={`${styles.orbitPetal} ${styles.petalSeven}`} />
              <span className={`${styles.orbitPetal} ${styles.petalEight}`} />
            </div>

            <p className={styles.artLabel}>8 марта</p>
          </div>
        </section>

        <section className={`${styles.photoSection} ${styles.reveal} ${styles.delayThree}`}>
          <div className={styles.photoHead}>
            <h2>Сидел на работе и писал этот сайт</h2>
          </div>

          <div className={styles.photoGrid}>
            <article className={styles.photoCard}>
              <div className={styles.photoPlaceholder}>
                <img src={photo1} alt="Фото 1" className={styles.photoImage} />
              </div>
            </article>
          </div>
        </section>

        <section className={`${styles.ribbon} ${styles.reveal} ${styles.delayFour}`}>
          <div className={styles.track}>
            {springWords.concat(springWords).map((word, index) => (
              <span key={`${word}-${index}`}>{word}</span>
            ))}
          </div>
        </section>

        <section
          id="wishes"
          className={`${styles.cards} ${styles.reveal} ${styles.delayFive}`}
        >
          {wishes.map((wish, index) => (
            <article key={wish.title} className={styles.card}>
              <span className={styles.cardIndex}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2>{wish.title}</h2>
              <p>{wish.text}</p>
            </article>
          ))}
        </section>

        <section
          id="moments"
          className={`${styles.story} ${styles.reveal} ${styles.delaySix}`}
        >
          <h2>Пусть этот день подарит</h2>

          <div className={styles.storyGrid}>
            {moments.map((moment, index) => (
              <article key={moment.title} className={styles.storyItem}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{moment.title}</h3>
                <p>{moment.text}</p>
                {"easterEgg" in moment && (
                  <p className={styles.easterEggText}>{moment.easterEgg}</p>
                )}
              </article>
            ))}
          </div>
        </section>

        <footer className={`${styles.closing} ${styles.reveal} ${styles.delaySeven}`}>
          <p>
            Пусть весна раскроет новые мечты и даст силы для самых красивых
            начинаний.
          </p>
          <strong>С благодарностью, Ернар</strong>
          <div className={styles.closingActions}>
            <button
              type="button"
              className={styles.openMessageBtn}
              onClick={() => setIsGiftOpen(true)}
            >
              Нажми для подарка
            </button>
          </div>
        </footer>
      </main>

      {isGiftOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsGiftOpen(false)}>
          <div
            className={styles.modalCard}
            role="dialog"
            aria-modal="true"
            aria-label="Праздничное сообщение"
            onClick={(event) => event.stopPropagation()}
          >
            <p className={styles.modalKicker}>Подарок</p>
            <h3 className={styles.modalTitle}>Лови флаг</h3>
            <p className={styles.modalText}>
              Но как видишь он не полный, тут лишь первая его часть. Остальная часть раскидана по всему сайту. Всего их 4.
            </p>

            <div className={styles.promoBox}>
              <span className={styles.promoLabel}>Твой код</span>
              <strong className={styles.promoCode}>{promoCode}</strong>
              <button
                type="button"
                className={styles.copyPromoBtn}
                onClick={handleCopyPromo}
              >
                {isCopied ? "Скопировано" : "Скопировать"}
              </button>
            </div>

            <p className={styles.modalHint}>Сохрани этот код в заметках.</p>
            <button
              type="button"
              className={styles.closeModalBtn}
              onClick={() => setIsGiftOpen(false)}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
