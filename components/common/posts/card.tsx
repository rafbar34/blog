import {useRouter} from 'next/router';
import styles from '../../../styles/posts/posts.module.css';

export const Card = ({props}: any) => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push(`/posts/${props.category}/${props.title}`);
      }}
      className={styles.card}>
      <div className={styles.box_images}>
        <img
          className={styles.image}
          src={props.img}
        />
      </div>

      <div className={styles.box_content}>
        <h4>{props.title}</h4>
        {props.content}
      </div>
    </button>
  );
};
