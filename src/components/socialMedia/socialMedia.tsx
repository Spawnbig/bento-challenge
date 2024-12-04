import styles from "./styles.module.css";
import starsImage from "../../assets/images/illustration-five-stars.webp";

const SocialMediaCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardTitle}>
        <h2 className={styles.title}>
          Social Media <span className={styles.xten}>10x</span>{" "}
          <span className={styles.faster}>Faster</span> with AI
        </h2>
      </div>
      <div className={styles.cardBody}>
        <img src={starsImage} width={"40%"} />
        <p>Over 4,000 5-star reviews</p>
      </div>
    </div>
  );
};

export default SocialMediaCard;
