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
  checkin: {
    label: 'checkin',
    type: String,
    optional: false,
    autoform: {
      group: 'Workout',
      placeholder: '9:00',
    },
  },
  checkout: {
    label: 'checkout',
    type: String,
    optional: false,
    autoform: {
      group: 'Workout',
      placeholder: '9:30',
    },
  },
});

Workout.attachSchema(WorkoutSchema);
