import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Workout = new Mongo.Collection('Workout');

/**
 * Create the schema for Stuff
 */
export const WorkoutSchema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Workout',
      placeholder: 'Bench Press',
    },
  },
  time: {
    label: 'Time',
    type: String,
    optional: false,
    autoform: {
      group: 'Workout',
      placeholder: '3',
    },
  },
});

Workout.attachSchema(WorkoutSchema);
