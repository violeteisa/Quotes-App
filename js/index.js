



var quotes=[
' “Be yourself; everyone else is already taken.”' ,
"“So many books, so little time.”",
' “You only live once, but if you do it right, once is enough.”',
'“Be the change that you wish to see in the world.”',
"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",



];


var author=[
    '― Oscar Wilde', 
    '― Frank Zappa' , 
    ' ― Mae West' ,
    ' ― Mahatma Gandhi'
    ,'― Bernard M. Baruch'

];
var previousIndex="";

function getRandom(){
    var randomIndex;


    do{
        randomIndex = Math.floor(Math.random() * quotes.length);
    }while(randomIndex === previousIndex);
    previousIndex = randomIndex;
    
    var randomQuote = quotes[randomIndex];
    var randomAuthor = author[randomIndex];
    document.getElementById('quote').innerHTML = randomQuote;
    document.getElementById('author').innerHTML = randomAuthor;
}


