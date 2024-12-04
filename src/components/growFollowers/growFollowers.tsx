import styles from "./styles.module.css";
import growFollowersImage from "../../assets/images/illustration-grow-followers.webp";

const GrowFollowersCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.bodyContainer}>
        <img src={growFollowersImage} />
        <h2 className={styles.title}>Grow followers with non-stop content.</h2>
      </div>
    </div>
  );
};

export default GrowFollowersCard;
