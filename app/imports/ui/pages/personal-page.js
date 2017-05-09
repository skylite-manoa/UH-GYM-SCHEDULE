import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { EventData, EventDataSchema } from '../../api/eventdata/eventdata.js';

/* eslint-disable no-param-reassign */

const displayErrorMessages = 'displayErrorMessages';

Template.Personal_Page.onCreated(function onCreated() {
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = EventDataSchema.namedContext('Personal_Page');
});

Template.Personal_Page.helpers({
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  fieldError(fieldName) {
    const invalidKeys = Template.instance().context.invalidKeys();
    const errorObject = _.find(invalidKeys, (keyObj) => keyObj.name === fieldName);
    return errorObject && Template.instance().context.keyErrorMessage(errorObject.name);
  },
});

Template.Personal_Page.events({
  'submit .eventdata-data-form'(event, instance) {
    event.preventDefault();
    // Get name (text field)
    const first = event.target.First.value;
    const last = event.target.Last.value;
    const email = event.target.Email.value;
    const number = event.target.Number.value;
    const goal = event.target.Goal.value;

    const newEventData = { first, last, email, number, goal };
    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that newEventData reflects what will be inserted.
    EventDataSchema.clean(newEventData);
    // Determine validity.
    instance.context.validate(newEventData);
    if (instance.context.isValid()) {
      EventData.insert(newEventData);
      instance.messageFlags.set(displayErrorMessages, false);
      FlowRouter.go('Personal_Page');
    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});

