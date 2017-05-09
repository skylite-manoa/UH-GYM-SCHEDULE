import { Template } from 'meteor/templating';
import { EventData } from '../../api/eventdata/eventdata.js';

Template.List_Personal_Page.helpers({
  /**
   * @returns {*} All of the EventData documents.
   */
  eventDataList() {
    return EventData.find();
  },
});

Template.List_Personal_Page.onCreated(function onCreated() {
  this.subscribe('EventData');
});
