import styles from "./styles.module.css";
import consistentScheduleImage from "../../assets/images/illustration-consistent-schedule.webp";

const MaintainConsistent = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <h1 className={styles.title}>
          Maintain a consistent posting schedule.
        </h1>
      </div>
      <div className={styles.cardBody}>
        <img src={consistentScheduleImage} />
      </div>
    </div>
  );
};

export default MaintainConsistent;
