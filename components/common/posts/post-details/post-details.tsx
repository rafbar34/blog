import styles from '../../../../styles/posts/post-details/details.module.css';
export const PostDetails = ({filtered}) => {
  return (
    <div>
      <div className={styles.box_details}>
        <h1 className={styles.header_details}>{filtered.title}</h1>
        <div className={styles.content_details}>{filtered.content}</div>
      </div>
    </div>
  );
};
