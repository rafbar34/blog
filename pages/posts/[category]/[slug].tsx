import {PostDetails} from '@/components/common/posts/post-details/post-details';
import styles from '../../../styles/posts/post-details/details.module.css';
import {useRouter} from 'next/router';
import {PostCard, PostType} from '@/types/posts';
import {useSelector} from 'react-redux';
const DetailsPostPage = ({detailsPost}: PostCard) => {

  return (
    <div className={styles.container}>
      {detailsPost === null ? (
        'Error code 500'
      ) : (
        <PostDetails filtered={detailsPost[0]} />
      )}
    </div>
  );
};
export default DetailsPostPage;

export async function getServerSideProps(context: {query: {slug: PostType[]}}) {
  try {
    const response = await fetch('http://localhost:3000/api/allPosts');
    const fetchedData = await response.json();
    const detailsPost = fetchedData.posts.filter((item: PostCard) => {
      return item._id === context.query.slug;
    });
    return {
      props: {
        detailsPost: detailsPost,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        detailsPost: null,
      },
    };
  }
}
