Package.describe({
  name: 'dhruv:polymer-firebase-element',
  version: '0.0.1',
  summary: 'Adds the firebase-element (element wrapper for Firebase API) Web Component to Meteor',
  git: 'https://github.com/dhruvrajan/meteor-polymer-firebase-element.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('webapp', 'server');
  api.use(['templating'], 'client');
  api.use(['underscore'], ['client', 'server']);
  api.versionsFrom('0.9.0');
  api.addFiles('polymer-firebase-element.js', 'server');
});

Npm.depends({
  bower: '1.3.12'
});
