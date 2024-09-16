const data = [
    {name: "John", age: "23", occupation: "Business", location: "USA"},
    {name: "Cena", age: "26", occupation: "Engineer", location: "USA"},
    {name: "Emily", age: "30", occupation: "Designer", location: "Canada"},
    {name: "Michael", age: "28", occupation: "Teacher", location: "UK"},
    {name: "Sophia", age: "22", occupation: "Student", location: "Australia"},
    {name: "David", age: "35", occupation: "Doctor", location: "USA"},
    {name: "Lucas", age: "29", occupation: "Accountant", location: "Germany"},
    {name: "Olivia", age: "27", occupation: "Marketing Manager", location: "France"},
    {name: "Daniel", age: "40", occupation: "Consultant", location: "Brazil"},
    {name: "Mia", age: "24", occupation: "Chef", location: "Italy"},
    {name: "James", age: "33", occupation: "Architect", location: "USA"},
    {name: "Ava", age: "21", occupation: "Student", location: "India"},
    {name: "Ethan", age: "25", occupation: "Data Scientist", location: "Canada"},
    {name: "Isabella", age: "34", occupation: "Lawyer", location: "Australia"},
    {name: "Matthew", age: "32", occupation: "Software Developer", location: "UK"},
    {name: "Charlotte", age: "29", occupation: "Nurse", location: "South Africa"},
    {name: "Andrew", age: "37", occupation: "Sales Manager", location: "USA"},
    {name: "Amelia", age: "26", occupation: "Artist", location: "Spain"},
    {name: "Joshua", age: "31", occupation: "Pilot", location: "New Zealand"},
    {name: "Ella", age: "24", occupation: "Engineer", location: "Japan"},
    {name: "Benjamin", age: "39", occupation: "Pharmacist", location: "Mexico"},
    {name: "Lily", age: "22", occupation: "Student", location: "South Korea"},
    {name: "Samuel", age: "28", occupation: "Financial Analyst", location: "Singapore"},
    {name: "Zoe", age: "27", occupation: "Scientist", location: "Germany"},
    {name: "Ryan", age: "36", occupation: "Mechanic", location: "USA"},
    {name: "Grace", age: "25", occupation: "Researcher", location: "France"},
    {name: "Jacob", age: "33", occupation: "Dentist", location: "UK"},
    {name: "Sophie", age: "24", occupation: "Interior Designer", location: "Canada"},
    {name: "Aaron", age: "29", occupation: "Photographer", location: "Australia"},
    {name: "Madison", age: "35", occupation: "Veterinarian", location: "USA"},
    {name: "Logan", age: "31", occupation: "IT Specialist", location: "India"},
    {name: "Harper", age: "22", occupation: "Model", location: "Brazil"},
    {name: "Mason", age: "28", occupation: "Civil Engineer", location: "Spain"},
    {name: "Evelyn", age: "27", occupation: "Psychologist", location: "South Africa"},
    {name: "Dylan", age: "32", occupation: "Fitness Trainer", location: "USA"},
    {name: "Hannah", age: "23", occupation: "Musician", location: "Italy"},
    {name: "Liam", age: "26", occupation: "Business Analyst", location: "Canada"},
    {name: "Victoria", age: "30", occupation: "Fashion Designer", location: "Germany"},
    {name: "Noah", age: "34", occupation: "Chef", location: "France"},
    {name: "Aiden", age: "25", occupation: "Journalist", location: "Australia"},
    {name: "Scarlett", age: "29", occupation: "Biologist", location: "UK"},
    {name: "Henry", age: "36", occupation: "Carpenter", location: "USA"},
    {name: "Riley", age: "23", occupation: "Dancer", location: "Mexico"},
    {name: "Sebastian", age: "28", occupation: "Actor", location: "South Korea"},
    {name: "Layla", age: "24", occupation: "Graphic Designer", location: "New Zealand"},
    {name: "Owen", age: "31", occupation: "Engineer", location: "USA"},
    {name: "Chloe", age: "27", occupation: "Chef", location: "Brazil"},
    {name: "Isaac", age: "35", occupation: "Scientist", location: "Japan"},
    {name: "Mila", age: "26", occupation: "Teacher", location: "Singapore"}
  ]

//   data.forEach((item)=>console.log(item));

// let myData = data.filter((item) => item.age > "33")

let myData = data.map((item) => {return item});

// for(let item of data){
//     if(item.name === "Noah" ){
//         console.log(item)
//     }
// }

console.log(myData);
  