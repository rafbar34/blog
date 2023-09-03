import styles from '../../../styles/posts/posts.module.css';
import {PostCard, PostType, PostsType} from '@/types/posts';
import {Card} from './card';

export const CardsList = ({posts}: PostCard) => {
  return (
    <div className={styles.box_cards}>
      {posts.map((item: PostType) => (
        <Card props={item} />
      ))}
    </div>
  );
};
