Package.describe({
  name: 'maodouio:activity-registrations',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Maodou.io activity-registrations package.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/maodouio/meteor-activity-registrations',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('aldeed:simple-schema@1.3.2', ["server", "client"]);
  api.use('iron:router@1.0.12', ["server", "client"]);
  api.use('aldeed:collection2@2.3.3', ["server", "client"]);
  api.use('aldeed:autoform@5.1.2', ["server", "client"]);
  api.use('matb33:collection-hooks@0.8.0', ["server", "client"]);

  api.addFiles("lib/collections.js");
  api.addFiles("lib/routes.js");

  api.addFiles("client/startup.js", "client");

  api.addFiles("server/permissions/registrations.js", "server");
  api.addFiles("server/publications/registrations.js", "server");

  api.export('Registrations');
});
