import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const EventData = new Mongo.Collection('EventData');

/**
 * Create the schema for EventtData
 */
export const EventDataSchema = new SimpleSchema({
  first: {
    label: 'first',
    type: String,
    optional: false,
    max: 200,
  },
  last: {
    label: 'last',
    type: String,
    optional: false,
    max: 200,
  },
  first: {
    label: 'first',
    type: String,
    optional: false,
    max: 200,
  },
  email: {
    label: 'email',
    type: String,
    optional: false,
  },
  number: {
    label: 'number',
    type: String,
    optional: false,
    max: 200,
  },
  goal: {
    label: 'goal',
    type: String,
    optional: false,
    max: 500,
  },
  start: {
    label: 'Start time of the event',
    type: String,
    optional: false,
  },
  end: {
    label: 'End time of the event',
    type: String,
    optional: false,
  },
  startValue: {
    label: 'Start time stored as an integer',
    type: Number,
    optional: false,
  },
  endValue: {
    label: 'End time stored as an integer',
    type: Number,
    optional: false,
    // Validate that the end value is not before the start value.
    custom: function startAndEnd() {
      let x = 0;
      if (this.value < this.field('startValue').value || this.value === this.field('startValue').value) {
        x = 'endValue';
      }
      return x;
    },
  },
  startString: {
    label: 'Start time of event represented as a string',
    type: String,
    optional: false,
  },
  endString: {
    label: 'End time of event represented as a string',
    type: String,
    optional: false,
  },
});


EventData.attachSchema(EventDataSchema);
