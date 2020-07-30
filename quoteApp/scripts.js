var quotes = [
    {quote: '"Take care of all your memories. For you cannot relive them."', author: 'Bob Dylan'},
   {quote: '"Keep love in your heart. A life without it is like a sunless garden when the flowers are dead."', author: 'Oscar Wilde'},
    {quote: '"Without continual growth and progress, such words as improvement, achievement, and success have no meaning."', author: 'Benjamin Franklin'},
   {quote: '"I try not to worry about things I can\'t do anything about."', author:  'Christopher Walken'},
   {quote: '"It\'s unbelievable how much you don\'t know about the game you\'ve been playing all your life."', author: 'Mickey Mantle'},
];

    
 $(document).ready(function() {
   
   $('#text').text(quotes[0].quote);
   $('#author').text(quotes[0].author);

  $('#new-quote').click(function() {
   var quotesLength = quotes.length;
   var rand = Math.floor(Math.random() * quotesLength);
    $("#text").text(quotes[rand].quote).animate('show', 'slow');
    $("#author").text(quotes[rand].author);
  });

  $('#tweet-quote').click(function() {
    window.open('https://twitter.com/intent/tweet?text=' + $('#text').text() + " " + $('#author').text());
  });

});