import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style={styles.goalsItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalsItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#333333',
    },
    goalText: {
        color: 'white',
    },
});