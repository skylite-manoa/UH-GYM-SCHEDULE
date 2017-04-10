import { Template } from 'meteor/templating';
import { Workout } from '../../api/workout/workout.js';

Template.List_Workout_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  workoutList() {
    return Workout.find();
  },
});
