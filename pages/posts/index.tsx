import {useRouter} from 'next/router';
import {useEffect} from 'react';
import styles from '../../styles/posts/posts.module.css';
import {CardsList} from '@/components/common/posts/cards-list';
import {PostsType} from '@/types/posts';
import {useSelector, useDispatch} from 'react-redux';
import {fetchAllPosts} from '@/slices/postsSlice';

const AllPostsPage = ({fetchedPosts}: PostsType) => {
  const getPosts = useSelector((state) => state.posts.posts);
  const getStatus = useSelector((state) => state.posts.status);
  const fetchPostsDispatch = useDispatch();
  useEffect(() => {
    try {
      fetchPostsDispatch(fetchAllPosts());
    } catch (err) {
      console.log(err);
    }
  }, []);

  if (getStatus === 'pending') {
    return <div> loading</div>;
  }
  return (
    <div className={styles.container}>
      <CardsList posts={getPosts} />
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
