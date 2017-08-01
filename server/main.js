import {
  Meteor
}
from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  'test' () {
    console.log('called');
    return 'Success';
  }
});
