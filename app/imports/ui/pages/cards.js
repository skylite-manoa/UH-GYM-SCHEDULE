/**
 * Created by chris on 4/12/17.
 */

import { Template } from 'meteor/templating';
import { Workout } from '/imports/api/workout/workout.js';

Template.Card_Page.helpers({

  /**
   * Returns a cursor to profiles, sorted by last name.
   */
  workoutList() {
    return Workout.find();
  },
});
