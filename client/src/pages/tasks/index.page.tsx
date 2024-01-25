import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { apiClient } from 'src/utils/apiClient';
import { userAtom } from '../../atoms/user';
import styles from './tasks.module.css';
import type { TaskModel } from '$/api/@types/models';

const TasksPage = () => {
  const [user] = useAtom(userAtom);
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  const fetchTasks = async () => {
    const tasks = await apiClient.private.tasks.$get().catch((e: unknown) => {
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
        <h1>Tasks</h1>
        <ul className={styles.tasksList}>
          {tasks.map((task) => (
            <li key={task.id} className={styles.taskItem}>
              <h2>{task.label}</h2>
              <p>{task.done ? 'Completed' : 'Pending'}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TasksPage;
