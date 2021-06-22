import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import TextBox from './TextBox';
import TaskItem from './TaskItem';

export const ListTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [singleTask, setSingleTask] = useState(null);

  const onUpdateTask = async task => {
    const found = tasks.find(item => item.id === task.id);
    if (found && found.content === task.content) {
      return;
    }

    // Chua co task
    if (!found) {
      await setTasks([...tasks, task]);
      return;
    }

    // Neu da co task
    found.content = task.content;
    await setTasks([...tasks]);
    if (singleTask !== null) {
      await setSingleTask(null);
    }
  };

  const onUpdateState = task => {
    const found = tasks.find(item => item.id === task.id);
    if (found) {
      found.isDone = !found.isDone;
      setTasks([...tasks]);
    }
  };

  const onDeleteTask = task => {
    const listTasks = tasks.filter(item => task.id !== item.id);
    setTasks(listTasks);
  };

  const onLoadTask = task => {
    setSingleTask(task);
  };

  const renderItem = ({item, index}) => {
    return (
      <TaskItem
        task={item}
        onUpdateState={onUpdateState}
        onDeleteTask={onDeleteTask}
        onLoadTask={onLoadTask}
        index={index}
      />
    );
  };

  const keyExtractor = item => item.id;

  return (
    <View style={styles.container}>
      <TextBox onUpdateTask={onUpdateTask} task={singleTask} />
      <View style={styles.flatListWrapper}>
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F3',
    height: '100%',
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  flatListWrapper: {
    marginTop: 30,
    flex: 1,
  },
});
