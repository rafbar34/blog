import styles from '../styles/home/home.module.css';

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <h1>Hello on my culinary blog</h1>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eum
          mollitia, odit magnam ut laudantium provident neque. Ratione ad
          ducimus neque, eveniet corporis accusamus delectus pariatur
          praesentium fugiat in quod.lorem
        </div>
      </div>
    </div>
  );
}
