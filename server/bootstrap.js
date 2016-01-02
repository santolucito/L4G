// if the database is empty on server start, create some sample data.

//first user has email "mark@amherst.edu" and password "mark"
//others follow same style

Meteor.startup(function () {
  Meteor.users.remove({})
  var profiles = [
    {role:STUDENT
    ,firstName:"Mark"
    ,lastName:"Santolucito"
    ,education:"Amherst College"
    ,major:"Computer Science"},

    {role:STUDENT
    ,firstName:"Fiona"
    ,lastName:"Santolucito"
    ,education:"Weslyan University"
    ,major:"Neuroscience"},

    {role:INVESTOR
    ,firstName:"Fred"
    ,lastName:"Shepard"
    ,education:"Amherst College"
    ,major:"Economics"},

    {role:INVESTOR
    ,firstName:"Jack"
    ,lastName:"Sprat"
    ,education:"Amherst College"
    ,major:"Computer Science"}
  ]

  var makeTestUser = function(p){
    console.log(p.firstName.toLowerCase()+"@"+
                p.education.substr(0,p.education.indexOf(' ')).toLowerCase()+".edu");
    Accounts.createUser({
      email: p.firstName.toLowerCase()+"@"+
             p.education.substr(0,p.education.indexOf(' ')).toLowerCase()+".edu",
      password: p.firstName.toLowerCase(),
      profile: p,
    })
  }

  profiles.map(makeTestUser);
  console.log("DEBUG MODE: ADDED USERS");
}
);
