Meteor.startup(function() {
  console.log('calling meteor method test');
  Meteor.call('test', (error, success) => console.dir({
    error,
    success
  }));
});
