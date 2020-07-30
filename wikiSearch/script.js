$(document).ready(function() {
  $('#search').click(function() {
      var searchQuery = $('#searchQuery').val();
    var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchQuery + "&format=json&callback=?";
    
    $.ajax({
      type:"GET",
      url:api,
      dataType: "json",
      success: function(data) {
        $('#output').html('');
        for (i=0;i<data[1].length;i++) {
        $('#output').prepend("<li><a href= " + data[3][i] + ">" + data[1][i] + "</a><p>"+data[2][i]+"</p></li>");
        }
      },
      error: function(errorMessage){
        alert("Something went wrong! Check your code")
      }
      
      });
    });                   
  });