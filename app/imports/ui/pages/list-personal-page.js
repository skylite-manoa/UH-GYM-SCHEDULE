import { Template } from 'meteor/templating';
import { Personals } from '../../api/personals/personals.js';

Template.List_Personal_Page.helpers({

  personalsList() {

    /*
    let test = []
    test.push({first:'Chris', last:'yeager', email:'h@mail.com', telephone: '123', height: '43', weight: '21', goals: 'nothin'});

    return test;
    */

   return Personals.find();
  },
});

Template.List_Personal_Page.onCreated(function onCreated() {
  this.subscribe('Personals');
});