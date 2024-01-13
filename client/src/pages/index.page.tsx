import type { Post } from '$/api/@types';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { apiClient } from 'src/utils/apiClient';
import { userAtom } from '../atoms/user';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const [posts, setPosts] = useState<Post[]>();

  const fetchPosts = async () => {
    const posts = await apiClient.public.posts.$get().catch((e) => {
      console.error(e);
      return [];
    });

    setPosts(posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (!posts) return <div>Loading...</div>;

  return (
    <>
      <BasicHeader user={user} />
      <div className={styles.container}>
        <ul className={styles.postsList}>
          {posts.map((post) => (
            <li key={post.id} className={styles.postItem}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
