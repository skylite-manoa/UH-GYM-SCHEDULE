/**
 * Created by chris on 4/17/17.
 */

import { Tracker } from 'meteor/tracker';

let isPast = (date) => {
  let today = moment().format();
  return moment(today).isAfter(date);
};

Template.events.onCreated( () => {
  let template = Template.instance();
  template.subscribe('events');
});

Template.events.onRendered(() => {
  $('#events-calendar').fullCalendar({

    events(start, end, timezone, callback) {
      let data = Events.find().fetch().map((event) => {
        event.editable = !isPast(event.start);
        return event;
      });

      if (data) {
        callback(data);
      }
    },

    eventRender( event, element ) {
      element.find( '.fc-content' ).html(
          `<h4>${ event.title }</h4>
        `
      );
    },
    dayClick( date ) {
      Session.set( 'eventModal', { type: 'add', date: date.format() } );
      $( '#add-edit-event-modal' ).modal( 'show' );
    },
    eventClick( event ) {
      Session.set( 'eventModal', { type: 'edit', event: event._id } );
      $( '#add-edit-event-modal' ).modal( 'show' );
    },

    /*
    Tracker.autorun( () => {
      Events.find().fetch();
      $( '#events-calendar' ).fullCalendar( 'refetchEvents' );
    }),
    */

    events: [
      { title: 'Event Title 1', start: '2017-04-18', end: '2017-04-19', editable: true  },
      { title: 'Event Title 2', start: '2017-04-20', end: '2017-04-21', editable: true }
    ]
  });
});




Template.addEditEventModal.events({
  'submit form' ( event, template ) {
    event.preventDefault();

    let eventModal = Session.get( 'eventModal' ),
        submitType = eventModal.type === 'edit' ? 'editEvent' : 'addEvent',
        eventItem  = {
          title: template.find( '[name="title"]' ).value,
          start: template.find( '[name="start"]' ).value,
          end: template.find( '[name="end"]' ).value,
          type: template.find( '[name="type"] option:selected' ).value,
          guests: parseInt( template.find( '[name="guests"]' ).value, 10 )
        };

    if ( submitType === 'editEvent' ) {
      eventItem._id   = eventModal.event;
    }

    Meteor.call( submitType, eventItem, ( error ) => {
      if ( error ) {
        Bert.alert( error.reason, 'danger' );
      } else {
        Bert.alert( `Event ${ eventModal.type }ed!`, 'success' );
        closeModal();
      }
    });
  }
});


/*
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
*/
