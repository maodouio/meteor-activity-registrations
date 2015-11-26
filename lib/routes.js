Router.map(function() {
  // activityRegistrations
  // ------------useractivities--------------------------------
  this.route('activityRegistrations', {
    template: 'activityRegistrations',
    path: '/activities/:_id/registrations/',
    waitOn: function () {
      Meteor.subscribe('images');
      console.log('this.params._id is :', this.params._id);
      return Meteor.subscribe('activityRegistrations', this.params._id);
    },
    data: function() {
      return {
        registrations: Registrations.find(),
        enrollments: Enrollments.find(),
        activities: Activities.find(),
        user: Meteor.users.findOne({_id: this.params._id}),
      };
    },
  });
});
