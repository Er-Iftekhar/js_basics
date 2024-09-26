const task3Element = document.getElementById('task-3');

function displayGreetings(){
    alert("Hi there");
}

function displayName(name){
    alert(name);
}

displayGreetings();
displayName("Yasar");
task3Element.addEventListener("click", displayGreetings);

function concatinator(str1, str2, str3){
    return str1 + str2 + str3;
}

alert(concatinator("Hi", "I am", "here"));