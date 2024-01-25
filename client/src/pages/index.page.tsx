import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { apiClient } from 'src/utils/apiClient';
import { userAtom } from '../atoms/user';
import styles from './index.module.css';
import type { TaskModel } from '$/api/@types/models';

const Home = () => {
  const [user] = useAtom(userAtom);
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  const fetchTasks = async () => {
    const tasks = await apiClient.public.tasks.$get().catch((e: unknown) => {
      console.error(e);
      return [];
    });

    setTasks(tasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (!tasks) return <div>Loading...</div>;

  return (
    <>
      <BasicHeader user={user} />
      <div className={styles.container}>
        <ul className={styles.postsList}>
          {tasks.map((task) => (
            <li key={task.id} className={styles.postItem}>
              <h2>{task.label}</h2>
              <p>{task.done ? 'Completed' : 'Pending'}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
