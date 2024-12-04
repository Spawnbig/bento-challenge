import styles from "./styles.module.css";
import image from "../../assets/images/illustration-ai-content.webp";

const WriteUsingAICard = () => {
  return (
    <div className={styles.cardContainer}>
      <h1 className={styles.title}>Write your content using AI.</h1>
      <img src={image} className={styles.img} />
    </div>
  );
};

export default WriteUsingAICard;
