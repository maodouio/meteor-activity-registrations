Router.map(function() {
  this.route('activityRegistrations', {
    template: 'activityRegistrations',
    path: '/activities/:_id/registrations/',
    waitOn: function () {
      return Meteor.subscribe('activityRegistrations', this.params._id);
    },
    data: function() {
      return {
        registrations: Registrations.find({}, {sort: {createdAt: 1}}),
        enrollments: Enrollments.find(),
        activity: Activities.findOne(),
        user: Meteor.users.findOne({_id: this.params._id}),
        userprofiles: UserProfiles.find(),
        logintype: '/activities/' + this.params._id + '/registrations/'
      };
    }
  });
});
