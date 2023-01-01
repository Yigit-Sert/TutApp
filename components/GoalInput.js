import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}>
                </TextInput>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler}></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel}></Button>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:16,
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop:16
    },
    button:{
        width:100,
        marginHorizontal:8,
    }
});