const labels = document.querySelectorAll(".form-control label");

// map -> define a function --> defines array --> defined function 
// grabs items from defined array --> then the map creats a new array with those items 
labels.forEach(function(label) {
    label.innerHTML =  label.innerText
    .split("")
    .map((letter, index) => `<span style="transition-delay: ${index * 50}ms">${letter}</span>`)
    .join("");
})