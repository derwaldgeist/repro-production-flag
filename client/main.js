Meteor.startup(function() {
  console.log('result of meteor method test');
  Meteor.call('test', (error, success) => console.dir({
    error,
    success
  }));
});
