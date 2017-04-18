/**
 * Created by chris on 4/17/17.
 */
Template.events.onRendered(() => {
  $('#events-calendar').fullCalendar({

    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay,listWeek'
    },
    defaultDate: '2017-04-12',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [

      {
        title: 'Squats',
        start: '2017-04-01T18:00:00'
      },

      {
        title: 'Bench Press',
        start: '2017-04-12T20:00:00'
      },
      {
        title: 'Deadlift',
        start: '2017-04-13T07:00:00'
      },
      {
        title: 'Chin ups',
        start: '2017-04-28T01:15:00',
        end: '2017-04-29T09:45:00'
      }

    ]

  });
});

Events = new Mongo.Collection('events');

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

let EventsSchema = new SimpleSchema({
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
  'type': {
    type: String,
    label: 'What type of event is this?',
    allowedValues: ['Birthday', 'Corporate', 'Wedding', 'Miscellaneous']
  },
  'guests': {
    type: Number,
    label: 'The number of guests expected at this event.'
  }
});

Events.attachSchema(EventsSchema);
