import { Stuff } from '../../api/stuff/stuff.js';
import { Workout } from '../../api/workout/workout.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const stuffSeeds = [
  { name: 'Basket', quantity: 3 },
  { name: 'Bicycle', quantity: 2 },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Stuff.find().count() === 0) {
  _.each(stuffSeeds, function seedStuffs(stuff) {
    Stuff.insert(stuff);
  });
}


const workoutSeeds = [
  { name: 'Bench press', time: 5 },
  { name: 'Squat', time: 8 },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Workout.find().count() === 0) {
  _.each(workoutSeeds, function seedWorkouts(e) {
    Workout.insert(e);
  });
}

