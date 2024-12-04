import styles from "./styles.module.css";
import chartImage from "../../assets/images/illustration-schedule-posts.webp";

const ScheduleToSocialMediaCard = () => {
  return (
    <div className={styles.containerCard}>
      <h1 className={styles.title}>Schedule to social media.</h1>
      <img src={chartImage} />
      <p>
        Optimize post timings to publish content at the perfect time for your
        audience.
      </p>
    </div>
  );
};

export default ScheduleToSocialMediaCard;
