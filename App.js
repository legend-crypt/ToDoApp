import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList,Alert } from 'react-native';
import AddTodo from './components/addtodo';
import Header from './components/header';
import TodoItem from './components/todoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

const pressHandler = (key) => {
  setTodos((prevTodos) => {
    return prevTodos.filter(todos => todos.key != key);
  })
}

const submitHandler = (text) => {
  if(text.length > 3){
    setTodos(prevTodos => {
      return [
        { text, key: Math.random().toString() },
        ...prevTodos
      ];
    });
  } else {
    Alert.alert('OOPS', 'Todo must be over 3 characters long', [
      {text: 'Understood'}
    ]);
  }
}

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,

    
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});