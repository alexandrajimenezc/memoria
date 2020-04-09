document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray =

        [
            {
                name: 'carahappy',
                img: 'images/carahappy.png'
            },
            {
                name: 'carahappy',
                img: 'images/carahappy.png'
            },
            {
                name: 'gato',
                img: 'images/gato.png'
            },
            {
                name: 'gato',
                img: 'images/gato.png'
            },
            {
                name: 'gatogris',
                img: 'images/gatogris.png'
            },
            {
                name: 'gatogris',
                img: 'images/gatogris.png'
            },
            {
                name: 'hongomario',
                img:'images/hongomario.png'
            },
            {
                name: 'hongomario',
                img:'images/hongomario.png'
            },
            {
                name: 'iroman',
                img:'images/iroman.png'
            },
            {
                name: 'iroman',
                img:'images/iroman.png'
            },
            {
                name: 'miniom400',
                img:'images/miniom400.png'
            },
            {
                name: 'miniom400',
                img:'images/miniom400.png'
            }
        ]
        cardArray.sort(()=> 0.5 - Math.random())

        const grid = document.querySelector('.grid');
        const resultDisplay= document.querySelector('#result')
        var cardsChosen =[];
        var cardsChosenId =[];
        var cardsWon = [];
        
        //create yur board
        function createBoard(){
            for(let i=0; i<cardArray.length; i++){
                var card = document.createElement('img')
                card.setAttribute('src', 'images/logobatman.png')
                card.setAttribute('data-id',i)
                card.addEventListener('click', flipCard)
                grid.appendChild(card)
          
            }
        }


//check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId= cardsChosenId[1]
    if(cardsChosen[0] === cardsChosen[1]){
        //alert('You found a match')
        cards[optionOneId].setAttribute('src','images/superman.png')
        cards[optionTwoId].setAttribute('src','images/superman.png')
        cardsWon.push(cardsChosen)
    }else{
      //  alert('sorry try again')
        cards[optionOneId].setAttribute('src','images/logobatman.png')
        cards[optionTwoId].setAttribute('src','images/logobatman.png')
        
    }
    cardsChosen =[]
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = '¡¡LO LOGRASTE , FELICIDADES!!'
        
    }
}


//flip your card
function flipCard(){
     var cardId = this.getAttribute('data-id')
     cardsChosen.push(cardArray[cardId].name)
     cardsChosenId.push(cardId)
     this.setAttribute('src',cardArray[cardId].img)
     if(cardsChosen.length === 2){
         setTimeout(checkForMatch,500)
     }

} 


createBoard()

})