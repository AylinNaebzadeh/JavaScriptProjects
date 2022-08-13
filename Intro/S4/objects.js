// object => store key value pairs

const address = {
    country: "Iran",
    city: "Ahvaz"
};

console.log(address);
// accessing the object data
console.log(address.city, "very polluted");
console.log(`${address.country} has many beautiful sceneries`);

const person ={
    name: "Aylin",
    Age: 31,
    'Full Address': "Ahvaz. Iran",
    job: "Backend Developer at ABDAL",
    2002: "DoB"
};

console.log(person);
console.log(person.Age);
console.log(person["Age"]);
console.log(person[2002]);
console.log(person["2002"]);
console.log(person["Full Address"]);



