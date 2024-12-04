import styles from "./styles.module.css";
import avatarIconsImage from "../../assets/images/illustration-audience-growth.webp";

const FasterAudienceCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardTitle}>
        <h2 className={styles.title}>{">56%"}</h2>
        <h5 className={styles.subtitle}>faster audience growth</h5>
      </div>
      <div className={styles.cardBody}>
        <img src={avatarIconsImage} height={50} />
      </div>
    </div>
  );
};

export default FasterAudienceCard;
