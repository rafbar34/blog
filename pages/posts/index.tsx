import {useRouter} from 'next/router';
import styles from '../../styles/posts/posts.module.css';
import {CardsList} from '@/components/common/posts/cards-list';

const AllPostsPage = ({dummy_data}) => {
  const router = useRouter();
  console.log(dummy_data);
  return (
    <div className={styles.container}>
      <CardsList dummy_data={dummy_data} />
    </div>
  );
};
export default AllPostsPage;

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const dummy_data = [
    {
      img: 'https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ',
      content: 'lorem ipsim',
      title: 'test123',
    },
    {
      img: 'https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ',
      content: 'lorem ipsim',
      title: 'test123',
    },
    {
      img: 'https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ',
      content: 'lorem ipsim',
      title: 'test123',
    },
    {
      img: 'https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ',
      content: 'lorem ipsim',
      title: 'test123',
    },
    {
      img: 'https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ',
      content: 'lorem ipsim',
      title: 'test123',
    },
    {
      img: 'https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ',
      content: 'lorem ipsim',
      title: 'test123',
    },
    {
      img: 'https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ',
      content: 'lorem ipsim',
      title: 'test123',
    },
    {
      img: 'https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ',
      content: 'lorem ipsim',
      title: 'test123',
    },
    {
      img: 'https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ',
      content: 'lorem ipsim',
      title: 'test123',
    },
  ];

  return {
    props: {
      dummy_data,
    },
    revalidate: 1600,
  };
}
