import React,{ useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function AddTodo({submitHandler}){
    const [text, setText] = useState();
    const changeHandler = (val) => {
        setText(val);
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new task...'
                onChangeText = {changeHandler}
            />
            <Button onPress={()=>submitHandler(text)} title='AddTodo' color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 12,
        paddingVertical: 6,
        paddingHorizontal: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})