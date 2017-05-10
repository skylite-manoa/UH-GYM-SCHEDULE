import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { _ } from 'meteor/underscore';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Personals, PersonalsSchema } from '../../api/personals/personals.js';

const displayErrorMessages = 'displayErrorMessages';

Template.Personal_Page.onCreated(function onCreated() {
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = PersonalsSchema.namedContext('Personal_Page');
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

  'submit .contact-data-form'(event, instance) {
    event.preventDefault();
    // Get name (text field)
    const first = event.target.First.value;
    const last = event.target.Last.value;
    const email = event.target.Email.value;
    const telephone = event.target.Telephone.value;
    const height = event.target.Height.value;
    const weight = event.target.Weight.value;
    const goals = event.target.Goal.value;

    const newContactData = { first, last, email, telephone, height, weight, goals };
    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that newContactData reflects what will be inserted.
    PersonalsSchema.clean(newContactData);
    // Determine validity.
    instance.context.validate(newContactData);

    // check if telephone number is entered correctly
    let teleValid = false;

    if (telephone.length === 12
        && !isNaN(telephone.slice(0, 3))
        && telephone[3] === '-'
        && !isNaN(telephone.slice(4, 7))
        && telephone[7] === '-'
        && !isNaN(telephone.slice(8, 11))) {
      teleValid = true;
    }

    if (instance.context.isValid() && teleValid) {
      Personals.insert(newContactData);
      instance.messageFlags.set(displayErrorMessages, false);
      FlowRouter.go('Home_Page');
    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },

});
