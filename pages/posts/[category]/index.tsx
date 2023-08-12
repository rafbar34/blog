import {useRouter} from 'next/router';
import styles from '../../../styles/posts/posts.module.css';
import {CardsList} from '@/components/common/posts/cards-list';

const AllPostsPage = () => {
  const router = useRouter();
  const dummy_data = [
    {
      img: 'https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ',
      content: 'lorem ipsim',
      title: 'test123',
      category: 'cake',
    },
    {
      img: 'https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ',
      content: 'lorem ipsim',
      title: 'test123',
      category: 'dinner',
    },
    {
      img: 'https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ',
      content: 'lorem ipsim',
      title: 'test123',
      category: 'fast-food',
    },
    {
      img: 'https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ',
      content: 'lorem ipsim',
      title: 'test123',
      category: 'fast-food',
    },
    {
      img: 'https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ',
      content: 'lorem ipsim',
      title: 'test123',
      category: 'fast-food',
    },
    {
      img: 'https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ',
      content: 'lorem ipsim',
      title: 'test123',
      category: 'cake',
    },
    {
      img: 'https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ',
      content: 'lorem ipsim',
      title: 'test123',
      category: 'cake',
    },
    {
      img: 'https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ',
      content: 'lorem ipsim',
      title: 'test123',
      category: 'cake',
    },
    {
      img: 'https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ',
      content: 'lorem ipsim',
      title: 'test123',
      category: 'cake',
    },
  ];
  const filteredData = dummy_data.filter((item)=>{
    return router.query.category === item.category
  })
  return (
    <div className={styles.container}>
      <CardsList dummy_data={filteredData} />
    </div>
  );
};
export default AllPostsPage;
