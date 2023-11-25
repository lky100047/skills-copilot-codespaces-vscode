function skillsMember() {
  // Get the current member's ID
  var memberId = Session.get('memberId');
  // Get the current member's skills
  var memberSkills = Members.findOne({_id: memberId}).skills;
  // Add the skills to the page context
  var skills = [];
  _.each(memberSkills, function(skillId) {
    skills.push(Skills.findOne({_id: skillId}));
  });
  return skills;
}