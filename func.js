export class Blackjack{
    constructor(){
        this.deck = createDeck()
        this.playerhand = []
        this.house = []
        this.currenthand = 0
        this.stop = false
    }
    bust(hand){
        if(hand>21){
            return 'True'
        }
        else return false

    }
    calchand(hand){
        return hand.map((num)=>Object.values(num)[0]).reduce((acc,val) => acc+val,0)
    }
    dealer(){
        do{
            this.house.push(this.deck.pop())
            console.log(this.house)
        }while(this.calchand(this.house)>=17)
        return this.bust(this.house) ? 'Bust' : this.calchand(this.house)
    }
    blackJack(hand){
        if(hand===21){
            return true
        }
        else return false
    }
    hit(){
        this.playerhand.push(this.deck.pop())
    }

}

export default function startgame(){
    let game = new Blackjack()
    
    do{
        for(let hands = 0 ; hands<=1; hands++ ){
            game.playerhand.push(game.deck.pop())
            game.house.push(game.deck.pop())
        }
        let selection = document.querySelector('#container')
        selection.addEventListener('click', function(ele){
            if(ele.target != ele.target.id){
                var clickedItem = ele.target.id
            //console.log(clickedItem)
                switch(clickedItem){
                    case 'hit':
                        game.hit()
                        console.log(game.calchand(game.playerhand))
                        break;
                    case 'stand':
                        console.log(' Dealer i hope you bust')
                        break;
                    case 'split':
                        console.log(' never split tens')
                        break;
                    case 'double':
                        console.log(' Double or nothing ')
                        break;

                }

            }
            ele.stopPropagation();
        })
        console.log(game.playerhand)
        console.log(game.house)
        game.stop = true
    }while(game.stop===false)
    

}
const func =(hand)=> hand <= 21

export function createDeck(){
    let suits = ['♥','♠', '♣','♦']
    let values = ['Ace','King','Queen','Jack', 10,
                  9,8,7,6,5,4,3,2]
    let deck = []             
    for(let i = 0 ; i<=suits.length-1 ; i++){
        for(let j = 0; j<=values.length-1 ; j++){
            let key = `${values[j]+' '+suits[i]}`
            switch(values[j]){
                case 'Ace':
                    //current hand needs too be added
                    deck.push({[key]: func()})
                    break;
                case 'King':    
                    deck.push({[key]: 10})
                    break;
                case 'Jack':
                    deck.push({[key]: 10})
                    break;
                case 'Queen':
                    deck.push({[key]: 10})
                    break;
                default:
                    deck.push({[key]: values[j]})    
                    break;
            }
        }
    }             
    return shuffle(deck)
}
function shuffle(deck){
    for (let i = deck.length-1; i > 0;i--){
        const j = Math.floor(Math.random()* (i+1))
        const temp = deck[j]
        deck[j]= deck[i]
        deck[i]=temp
    }
    return deck
}
function dealHands(){

}
function dealerUI(){
    // Insurance //  side bets // soft 17 stop at 17 bust or 18 / 19 / 20 / 21
}
function renderCardsValue(){

}
function playersUI(hand){


}
function stand(){


}
function hitme(){

}
function split(){

}
function doubled(){

}