function School(){
  this.students = [];
  this.add = function(student, grade){
    this.students.push([student,grade]);
  };

  this.grade = function(grade){
    return this.students.reduce(function(acc,elem){
      if (elem[1] == grade) {
        acc.push(elem[0])
      }
      return acc
    },[]).sort()
  }

 this.list_grades = function(){
   return  this.students.reduce(function(acc,elem){
     if (!acc.includes(elem[1])) {
       acc.push(elem[1])
     }
     return acc
   },[])
 }

  this.roster = function(){
    grades = this.list_grades();
    output = {}
    for (var iter = 0; iter < grades.length; iter++) {
      output[grades[iter]] = this.grade(grades[iter]);
    }
    return output;
  }

}

module.exports = School
