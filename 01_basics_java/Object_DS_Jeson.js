const course = {
    teacher_name : "hitesh",
    course_name : "learning js",
    course_fee : 999
}

// console.log(course.teacher_name)
/* If you want to get teacher name repeatedly, you can use below method for Destructuring */

const {teacher_name} = course

console.log(teacher_name)

/* if you want to short name or rename then use following method */

const {teacher_name:tname} = course

console.log(tname)

//JESON
/* Jeson write same as like Objects, but the Keys name will type in String */

// {
//     "teacher_name" : "hitesh",
//     "course_name" : "learning js",
//     "course_fee" : 1999    
// }

// Object format APi:  https://api.github.com/users/hiteshchoudary

//Famous APi : https://randomuser.me/

//Jeson format tools for understanding the JESON code : 