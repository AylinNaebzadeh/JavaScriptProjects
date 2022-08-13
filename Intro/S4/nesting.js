const user = {
    info: {
        name: "Aylin",
        lastname: "Naebzadeh"
    },
    GPA: "18",
    hobbies: ["eating", "sleeping"]
};

console.log(user);
console.log(user["info"]);
console.log(user["info"].name);
console.log(user["hobbies"][0]);


const user_list = [
    {
        name: "Aylin",
        lastname: "Naebzadeh"
    },
    "Shy",
    ["Backond", "Full Satck"]
];

console.log(user_list[0]["name"]);