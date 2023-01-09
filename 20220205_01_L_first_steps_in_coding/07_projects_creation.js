// 20220205 - JavaScript - Programming Basics - First Steps in Coding
// 07 - Projects Creation - judge: https://judge.softuni.org/Contests/Compete/Index/2399#6


function projectsCreation(input) {
  let name = input[0];
  let numberProjects = Number(input[1]);
  let totalTime = numberProjects * 3;

  let result = `The architect ${name} will need ${totalTime} hours to complete ${numberProjects} project/s.`
  console.log(result);
}

projectsCreation(["Kristiana", "3"]);
