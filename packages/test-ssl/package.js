Package.describe({
  name: 'test:ssl',
  version: '0.0.1',
  summary: 'Force SSL in production app only.',
  prodOnly: true
});


Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('force-ssl');
});
