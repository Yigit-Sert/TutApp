import { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currenCourseGoals =>
      [...currenCourseGoals, { text: enteredGoalText, id: Math.random().toString() }]));
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        {/* use flatlist to have more optimized scrolling instead of scrollview */}
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text} />;
        }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}    /* this is a design choice here */ />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16

  },
  goalsContainer: {
    flex: 5
  }
});