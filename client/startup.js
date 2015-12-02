
Meteor.startup(function () {
  console.log("Package activity-registrations startup...");
  console.log("Session.set('hasPackageActivityRegistrations', true);");
  Session.set('hasPackageActivityRegistrations', true);
});
