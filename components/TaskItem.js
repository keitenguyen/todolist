import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TaskItem = ({task, index, onDeleteTask, onUpdateState, onLoadTask}) => {
  const onUpdate = item => {
    onUpdateState(item);
  };

  const onDelete = item => {
    onDeleteTask(item);
  };

  const onLoad = item => {
    onLoadTask(item);
  };

  return (
    <View style={styles.container}>
      <Text
        style={[styles.taskContent, task && task.isDone && styles.taskDone]}>
        {index + 1}. {task.content}
      </Text>
      <View>
        <Text>
          <TouchableOpacity
            onPress={() => {
              onUpdate(task);
            }}>
            <Text style={[styles.iconWrapper, task.isDone && styles.iconUndo, !task.isDone && styles.iconDone]}>
              {task.isDone && <Icon name="undo" size={15} color="#fff" />}
              {!task.isDone && <Icon name="check" size={15} color="#fff" />}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              onLoad(task);
            }}>
            <Text style={[styles.iconWrapper, styles.iconEdit]}>
              <Icon name="edit" size={15} color="#fff" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              onDelete(task);
            }}>
            <Text style={[styles.iconWrapper, styles.iconDelete]}>
              <Icon name="trash" size={15} color="#fff" />
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 5,
    paddingTop: 5,
  },
  taskContent: {
    flex: 1,
  },
  taskDone: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  iconWrapper: {
    padding: 3,
    marginLeft: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  iconUndo: {
    backgroundColor: '#00c0ef',
  },
  iconDelete: {
    backgroundColor: '#dd4b39',
  },
  iconEdit: {
    backgroundColor: '#f39c12',
  },
  iconDone: {
    backgroundColor: '#00a65a',
  },
});

export default TaskItem;
