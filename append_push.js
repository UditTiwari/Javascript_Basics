lessons = [
    {
      id: "273",
      title: "Variables",
      length: 12
    },
    {
      id: "295",
      title: "Conditionals",
      length: 7
    },
    {
      id: "299",
      title: "Functions",
      length: 9
    }
    ]; 

lessonsTitle = []

lessons.forEach(function(lesson){lessonsTitle.push(lesson.title)});
console.log(lessonsTitle)