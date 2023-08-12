import styles from '../../../styles/posts/posts.module.css'
import {PostsType} from '@/types/posts';
import { Card } from './card';

export const CardsList = ({dummy_data}: Array<PostsType>) => {

  return (
    <div className={styles.box_cards}>
      {dummy_data.map((item: PostsType) => (
        <Card props={item}/>
      ))}
    </div>
  );
};
