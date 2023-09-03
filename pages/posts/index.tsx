import {useRouter} from 'next/router';
import styles from '../../styles/posts/posts.module.css';
import {CardsList} from '@/components/common/posts/cards-list';
import { PostsType} from '@/types/posts';

const AllPostsPage = ({fetchedPosts}:PostsType) => {
  console.log(typeof fetchedPosts);
  return (
    <div className={styles.container}>
      <CardsList posts={fetchedPosts.posts} />
    </div>
  );
};
export default AllPostsPage;

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const response = await fetch('http://localhost:3000/api/allPosts');
  const fetchedPosts = await response.json();
  return {
    props: {
      fetchedPosts: fetchedPosts,
    },
    revalidate: 1600,
  };
}
