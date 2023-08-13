import {useRouter} from 'next/router';
import styles from '../../../styles/posts/posts.module.css';
import {CardsList} from '@/components/common/posts/cards-list';
import {useMemo} from 'react';
import {GetStaticPaths} from 'next';
const CategoryPage = ({filterCategories}) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {filterCategories === null ? (
        'Error code 500'
      ) : (
        <CardsList posts={filterCategories} />
      )}
    </div>
  );
};
export default CategoryPage;

export async function getStaticProps({params}) {
  try {
    const response = await fetch('http://localhost:3000/api/allPosts');
    const fetchedData = await response.json();
    const filterCategories = fetchedData.posts.filter((item) => {
      return item.category === params.category;
    });
    return {
      props: {
        filterCategories: filterCategories,
      },
      revalidate: 1600,
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        filterCategories: null,
      },
      revalidate: 1600,
    };
  }
}
export const getStaticPaths: GetStaticPaths = async () => {
  const data = [{name: 'breakfasts'}, {name: 'lunch'}, {name: 'dinner'}];
  const paths = data.map((items) => {
    return {
      params: {category: items.name},
    };
  });
  return {
    paths: paths,
    fallback: 'blocking', // false or "blocking"
  };
};
