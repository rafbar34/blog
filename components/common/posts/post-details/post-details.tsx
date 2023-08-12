import styles from '../../../../styles/posts/post-details/details.module.css';
export const PostDetails = () => {
  return (
    <div>
      <div className={styles.box_details}>
        <h1 className={styles.header_details}>title</h1>
        <div className={styles.content_details}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, soluta
          illo ad laborum nobis fugit accusantium numquam temporibus ullam aut
          debitis hic quis, inventore corrupti ipsa harum totam delectus
          praesentium?
        </div>
      </div>
    </div>
  );
};
