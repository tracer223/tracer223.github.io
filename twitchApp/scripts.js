$('document').ready(function(){
  
    var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin"];
    
    function getStreamLogo(index) {
      var url = "https://wind-bow.gomix.me/twitch-api/channels/" + streamers[index] + "/?callback=?";
      console.log(url);
      
      $.getJSON(url, function(data){
        if (data.error){
        $("#streamLogo"+index).html("<img src=https://wordfaqs.mvps.org/images/RedX4.gif>");
        }
        else {
          $("#streamLogo"+index).html("<img src="+data.logo+">");
        }
      });
    }
    
    // output stream logo
    console.log(getStreamLogo(0));
    getStreamLogo(1);
    getStreamLogo(2);
    getStreamLogo(3);
    getStreamLogo(4);
    getStreamLogo(5);
    getStreamLogo(6);
    getStreamLogo(7);
    getStreamLogo(8);
    
    function getStreamName(index){
      var url = "https://wind-bow.gomix.me/twitch-api/channels/"+streamers[index]+"/?callback=?";
      
      $.getJSON(url, function(data){
        console.log(data.display_name);
        if (data.error){
          $("#displayName"+index).html("Non-retrievable");
        }
        else {
      $("#displayName"+index).html(data.display_name);
        }
      });
    }
      
      // output stream display name
    getStreamName(0);
    getStreamName(1);
    getStreamName(2);
    getStreamName(3);
    getStreamName(4);
    getStreamName(5);
    getStreamName(6);
    getStreamName(7);
    getStreamName(8);
    
    function getStreamStatus(index){
    var url = "https://wind-bow.gomix.me/twitch-api/streams/" + streamers[index] +"/?callback=?";
    //console.log(url);
      // get status of stream
      $.getJSON(url, function(data){
        //console.log(data);
        if (data.stream===null) {
          $("#streamStatus"+index).html("<a target='blank' href=https://www.twitch.tv/"+ streamers[index] +">Channel OFFLINE</a>");
        } else if (data.error==="Not Found") {
          console.log(data.error);
          $("#streamStatus"+index).html("Channel DEACTIVATED");
        }
        else {
          $("#streamStatus"+index).html("<a target='blank' href=https://www.twitch.tv/"+ streamers[index] +">Channel ONLINE, currently streaming " + data.stream.game + "</a>");
        }
      });
    }
    
    
    // output stream statuses
    console.log(getStreamStatus(0));
    getStreamStatus(1);
    getStreamStatus(2);
    getStreamStatus(3);
    getStreamStatus(4);
    getStreamStatus(5);
    getStreamStatus(6);
    getStreamStatus(7);
    getStreamStatus(8);
    
    });
   