Meteor.publishComposite("activityRegistrations", function(activityId) {
  return {
    find: function() {
      return Activities.find({_id: activityId});
    },
    children: [
      {
        find: function(activity) {
          return Registrations.find({activityId: activity._id});
        },
        children: [
          {
            find: function(registration) {
              return Meteor.users.find({_id: registration.userId});
            },
          }
        ]
      },
      {
        find: function (activity) {
          return Enrollments.find({activityId: activity._id});
        }
      },
      {
        find: function(activity) {
          return Like.collection.find({linkedObjectId: activity._id});
        }
      }
    ],
  };
});
