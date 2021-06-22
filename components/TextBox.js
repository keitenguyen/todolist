import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

const TextBox = ({task, onUpdateTask}) => {
  const [text, setText] = useState('');
  useEffect(() => {
    if (task !== null) {
      setText(task.content);
    }
  }, [task]);

  const onInputChange = input => {
    if (text === input) {
      return;
    }

    setText(input);
  };

  const onSubmitTask = () => {
    if (text === '') {
      return;
    }

    let item;
    if (task === null) {
      item = {
        content: text,
        isDone: false,
        id: new Date().getTime().toString(),
      };
    } else {
      item = {...task, content: text};
    }

    onUpdateTask(item);
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={onInputChange}
        value={text}
        placeholder={'Nhập tên công việc'}
      />
      <TouchableOpacity style={styles.btnSubmit} onPress={onSubmitTask}>
        <Text style={styles.textSubmit}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TextBox;

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#cecece',
    flex: 1,
  },
  btnSubmit: {
    height: 40,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'coral',
  },
  textSubmit: {
    color: '#fff',
  },
});
