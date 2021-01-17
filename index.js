const { METHODS } = require("http")
const { url } = require("inspector")

$.ajax({
    url:"/index.html",
    METHODS:"GET"
})
    


$(".button").on("click", function(event){
    console.log("button workds")

    const note = {
        Country: $(".Country").val(),
        Population: $(".Population").val(),
        GDP: $(".GDP").val()
    }
 
$(".container").append(`<div class="card">
<div class="Country">${Country}</div>
<div class="Population">${Population}</div>
<div class="GDP">${GDP}</div>
</div> `)

$.ajax({
    url: "/api/notes",
    data: note,
    method: "POST",
  });
})
