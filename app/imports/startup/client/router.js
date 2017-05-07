import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});


FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/personal-page', {
  name: 'Personal_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Personal_Page' });
  },
});

FlowRouter.route('/edit-personal/:_id', {
  name: 'Edit_Personal_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Personal_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};

FlowRouter.route('/add-workout', {
  name: 'Add_Workout_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Workout_Page' });
  },
});

FlowRouter.route('/edit-workout/:_id', {
  name: 'Edit_Workout_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Workout_Page' });
  },
});

FlowRouter.route('/calendar', {
  name: 'Calendar_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Calendar_Page' });
  },
});

FlowRouter.route('/list-personal', {
  name: 'List_Personal_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Personal_Page' });
  },
});

FlowRouter.route('/about', {
  name: 'About_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'About_Page' });
  },
});
