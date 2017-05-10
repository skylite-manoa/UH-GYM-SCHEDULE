import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Personals = new Mongo.Collection('Personals');

/**
 * Create the schema for Stuff
 */
export const PersonalsSchema = new SimpleSchema({
<<<<<<< HEAD
  name: {
    label: 'name',
=======
  first: {
    label: 'first',
    type: String,
    optional: false,
    max: 200,
  },
  last: {
    label: 'last',
>>>>>>> 1ed09861709707752566178c6c9104ffba926f68
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
<<<<<<< HEAD
    max: 200,
=======
    max: 500,
>>>>>>> 1ed09861709707752566178c6c9104ffba926f68
  },
});

Personals.attachSchema(PersonalsSchema);
