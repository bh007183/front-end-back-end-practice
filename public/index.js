
function Show(){
   
$.ajax({
  method: "GET",
  url: "/api/country",
  
}).then(function(data){
  $(".container").empty()
  for(let i = 0; i < data.length; i++){
    $(".container").append(`<div class="card">
  <div class="Country">${data[i].country}</div>
  <div class="Population">${data[i].population}</div>
  <div class="GDP">${data[i].GDP}</div>
</div>`)

  }
    
})
}
Show()


$(".button").on("click", function(event){
    const createdObject = {
       country: $(".country").val(),
       population:$(".population").val(),
       GDP:$(".gdp").val()
    }
    $.ajax({
      method: "POST",
      url: "/api/country",
      data: createdObject
    }).then(function(data){
      Show()
    })
    

})
