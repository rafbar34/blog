import { PostDetails } from '@/components/common/posts/post-details/post-details'
import styles from '../../../styles/posts/post-details/details.module.css'
const DetailsPostPage = () =>{
    return(
    <div className={styles.container}>
        <PostDetails/>
    </div>)
}
export default DetailsPostPage