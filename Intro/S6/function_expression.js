// when functions are stored in variables, annonymous, have no name
// functions are not objects, but they behave like objects

let algebra = function (z, w)
{
    return (z + w) / (z - w);
};
console.log(algebra(15, 25));


function averageAylinScore(score, aylinScore)
{
    return (aylinScore + 10) / score;
}

let aysaScore = function (score, aysaScore)
{
    return aysaScore / score;
}


const scores = [averageAylinScore, aysaScore];
for (let i = 0; i < scores.length; i++)
{
    let result = scores[i](100, 20);
}

for (let avg of scores)
{
    let result = avg(100, 20);
    console.log(result)
}

const scoresObject = {
    aylin: averageAylinScore,
    aysa: aysaScore
};

console.log(scoresObject.aylin(100, 20))

