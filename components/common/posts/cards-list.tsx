import styles from '../../../styles/posts/posts.module.css'
import {PostsType} from '@/types/posts';
import { Card } from './card';

export const CardsList = ({posts}: Array<PostsType>) => {

  return (
    <div className={styles.box_cards}>
      {posts.map((item: PostsType) => (
        <Card props={item}/>
      ))}
    </div>
  );
};
