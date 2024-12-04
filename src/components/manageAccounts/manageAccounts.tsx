import styles from "./style.module.css";
import followersImage from "../../assets/images/illustration-multiple-platforms.webp";

const ManageMultipleAccountsCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardTitle}>
        <img src={followersImage} alt="followers" />
        <h1 className={styles.title}>
          Manage multiple accounts and platforms.
        </h1>
      </div>
    </div>
  );
};

export default ManageMultipleAccountsCard;
