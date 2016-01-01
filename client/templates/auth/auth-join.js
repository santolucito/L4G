var ERRORS_KEY = 'joinErrors';

Template.join.onCreated(function() {
  Session.set(ERRORS_KEY, {});
});

Template.join.helpers({
  errorMessages: function() {
    return _.values(Session.get(ERRORS_KEY));
  },
  errorClass: function(key) {
    return Session.get(ERRORS_KEY)[key] && 'error';
  }
});

Template.join.events({
  'submit': function(event, template) {
    event.preventDefault();
    var email = template.$('[name=email]').val();
    var password = template.$('[name=password]').val();
    var confirm = template.$('[name=confirm]').val();
    var firstName = template.$('[name=firstName]').val()
    var lastName = template.$('[name=lasttName]').val()
    var roleButtons = $('input[type=radio]:checked')
    var role = '';
    if (roleButtons.length==1){
      role = roleButtons[0].id
    }
    var education = template.$('[name=education]').val()
    var major = template.$('[name=major]').val()


    var errors = {};

    if (! email) {
      errors.email = 'Email required';
    }

    if (! password) {
      errors.password = 'Password required';
    }

    if (confirm !== password) {
      errors.confirm = 'Please confirm your password';
    }

    if (role == '') {
      errors.role = 'Please select a role';
    }
    if (!/^[a-zA-Z]*$/.test(firstName) && !/^[a-zA-Z]*$/.test(lasttName)) {
      errors.role = 'Please enter a name with characters from the set [a-zA-Z]';
    }

    Session.set(ERRORS_KEY, errors);
    if (_.keys(errors).length) {
      return;
    }

    var profile =
      {role:role
      ,firstName:firstName
      ,lastName:lastName
      ,education:education
      ,major:major}

    Accounts.createUser({
      email: email,
      password: password,
      profile: profile,
    }, function(error) {
      if (error) {
        return Session.set(ERRORS_KEY, {'none': error.reason});
      }
      Router.go('/');
    });
  }
});
