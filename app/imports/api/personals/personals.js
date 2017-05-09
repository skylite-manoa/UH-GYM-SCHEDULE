import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Personals = new Mongo.Collection('Personals');

/**
 * Create the schema for Stuff
 */
export const PersonalsSchema = new SimpleSchema({
  name: {
    label: 'name',
    type: String,
    optional: false,
    max: 200,
  },
  email: {
    label: 'email',
    type: String,
    optional: false,
    max: 200,
  },
  number: {
    label: 'number',
    type: String,
    optional: false,
    max: 200,
  },
  height: {
    label: 'height',
    type: String,
    optional: false,
    max: 200,
  },
  weight: {
    label: 'weight',
    type: String,
    optional: false,
    max: 200,
  },
  goal: {
    label: 'goal',
    type: String,
    optional: false,
    max: 200,
  },
});

Personals.attachSchema(PersonalsSchema);
