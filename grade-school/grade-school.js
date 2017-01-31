function School(){
  this.students = {};
  
  this.add = function(student, grade){
    this.students[grade] = this.grade(grade).concat(student).sort()
  };

  this.grade = function(grade){
    return this.students[grade] || []
  }

  this.roster = function(){
    return this.students
  }
}

module.exports = School
