const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let membersIsArray = members instanceof Array;
  if(!membersIsArray) {
    return false
  }

  let dreamTeamName = '';
  let tempStore = [];

  members.forEach(member => {
    if(typeof member === 'string') {
      let name = member.split(' ').join('').toUpperCase();
      tempStore.push(name[0]);
    }
  });

  dreamTeamName = tempStore.sort().join('');
  
  return dreamTeamName
};