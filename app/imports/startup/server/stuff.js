import { Events } from '../../api/workout/workout.js';
import { EventsData } from '../../api/eventdata/eventdata.js';
import { _ } from 'meteor/underscore';

const workoutSeeds = [
  { title: 'press', start: '2017-04-25', end: '2017-04-26', editable: true  },
  { title: 'squat', start: '2017-04-25', end: '2017-04-26', editable: true  },
  { title: 'deadlift', start: '2017-04-25', end: '2017-04-26', editable: true  },
];

if (Events.find().count() === 0) {
  _.each(workoutSeeds, function seedWorkouts(e) {
    Events.insert(e);
  });
}
/*
const eventSeeds = [
  { title: 'press', start: '2017-04-25', end: '2017-04-26', startValue: 4,  endValue: 5, startString: 'ok', endString: 'dokie' },
];

if (EventData.find().count() === 0) {
  _.each(eventSeeds, function seedEvents(e) {
    EventData.insert(e);
  });
}
*/
