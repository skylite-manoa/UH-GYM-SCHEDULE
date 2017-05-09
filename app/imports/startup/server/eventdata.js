import { EventData } from '../../api/eventdata/eventdata.js';
import { _ } from 'meteor/underscore';

/**
 * A list of contacts to pre-fill the collection
 * @type {*[]}
 */

const eventDataSeeds = [
  {
    first: 'Philip',
    last: 'Johnson',
    email: 'johnson@hawaii.edu',
    number: '808-956-3489',
    goal: 'Stay Healthy',
  },
];

/**if (EventData.find().count() === 0) {
  _.each(eventDataSeeds, function seedEventData(stuff) {
    EventData.insert(stuff);
  });
}*/
