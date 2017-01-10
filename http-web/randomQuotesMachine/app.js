// - Random quotes application that has the following commands:
//     - `show-quote  - display a quote
//     - `next` should be invoked to see the next quote
//     - `list-quotes` - View a formatted list of available quotes



var request = require('request');

console.log("************App loads in a moment************");

// get the qoutes from the given quotes Api and store it in the variable 'quotes' 
request('https://quotesondesign.com/wp-json/posts? filter[posts_per_page]=20&callback=', function (error, response, body) {
    //if api request is successful
   if (!error && response.statusCode == 200) {
        const readline = require('readline');
        var quotes = JSON.parse(body);

    const io = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Please Enter a Command> '
    });

    io.prompt();

    io.on('line', (line) => {
        var command = line.trim();
        command=command.toLowerCase();

        switch(command) {
            case 'list-commands':
                listComands();
                break;
            case 'show-a-quote':
                console.log(showAQuote(quotes));
                break;

            case 'list-quotes':
                console.log(listQuotes(quotes));
                break;

            case 'next':
                console.log(showAQuote(quotes));
                break;

            default:
            console.log("Don't recognize '" + line +"' please Type list-commands to view command");
            break;
        }
      io.prompt();
    }).on('close', () => {
      console.log('********Have a great day!********');
      process.exit(0);
    });
  }
});
    //function to list all available commands  
    function listComands(){
        console.log(
           " '\n'show-a-quote : display a quote'\n' next : should be invoked to see the next quotes'\n' list-quotes : View a formatted list of available quotes'\n'list-commands :to list available commands")
    };
    
    //function to select a random quote from the api result
    function getRandomQuote(quotes){
        var randQuotes = Math.floor(Math.random()*quotes.length);
        return quotes[randQuotes];
    };
    
    //function to display a quote
    function showAQuote(quotes){
        var quote= getRandomQuote(quotes);
        var content= quote.content.substring(quote.content.indexOf(">")+1,quote.content.lastIndexOf("<"));
        var author = quote.title;
        
        return '\n'+(" ' "+content+" by "+author)+'\n';
        

    }

    // function to list 5 available quotes
    function listQuotes(quotes){
        for (var i=1; i<=5; i++){
            console.log(showAQuote(quotes));
        }

    };

     