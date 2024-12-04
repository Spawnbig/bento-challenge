import button from "../../assets/images/illustration-create-post.webp";
import styles from "./styles.module.css";

const CreatePostCard = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>
          Create and schedule content <span>quicker.</span>
        </h2>
      </div>
      <div>
        <button className={styles.button}>
          <img src={button} width={200} />
        </button>
      </div>
    </div>
  );
};

export default CreatePostCard;
