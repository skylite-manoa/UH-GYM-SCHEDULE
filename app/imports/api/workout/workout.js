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



// temp
export const Events = new Mongo.Collection('events');

/*
Events.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Events.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});
*/

export const EventsSchema = new SimpleSchema({
  'title': {
    type: String,
    label: 'The title of this event.'
  },
  'start': {
    type: String,
    label: 'When this event will start.'
  },
  'end': {
    type: String,
    label: 'When this event will end.'
  },

  /*
  'type': {
    type: String,
    label: 'What type of event is this?',
    allowedValues: ['Birthday', 'Corporate', 'Wedding', 'Miscellaneous']
  },
  'guests': {
    type: Number,
    label: 'The number of guests expected at this event.'
  }
  */
});

Events.attachSchema(EventsSchema);
