let grades = [
    {firstname: document.getElementByTagName("fname"),
        lastname: document.getElementByTagName("lname"),
        pointearn: document.getElementByTagName("ptearn"),
        pointpossible: document.getElementByTagName("ptpos")},
];


let percentage = (grades.pointearn / grades.pointpossible) * 100;
document.getElementById("name").innerHTML = grades.firstname + grades.lastname;
document.getElementById("percent").innerHTML = percentage;



if (percentage <= 100 && percentage >= 90) {
    document.getElementById("letter").innerHTML = "A";
}
else if (percentage <= 89 && percentage > 80) {
    document.getElementById("letter").innerHTML = "B";
}
else if (percentage <= 79 && percentage > 70) {
    document.getElementById("letter").innerHTML = "C";
}
else if (percentage <= 69 && percentage > 60) {
    document.getElementById("letter").innerHTML = "D";
}
else {
    document.getElementById("letter").innerHTML = "F";
}
function compareGrade (a, b)
{
    if (a.pointearn < b.pointearn)
        return -1;
    if (a.pointearn > b.pointearn)
        return 1;
    else
        return 0;
}
grades.sort(compareGrade);

function comparePercent (a, b)
{
    if (a.pointpossible < b.pointpossible)
        return -1;
    if (a.pointpossible > b.pointpossible)
        return 1;
    else
        return 0;
}
grades.sort(comparePercent);
document.getElementById("sort").innerHTML = "compareGrade" + "comparePercent";