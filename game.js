import { createDeck } from "./func";

let selection = document.querySelector('#container')
selection.addEventListener('click', function(ele){
    if(ele.target != ele.target.id){
        var clickedItem = ele.target.id
        //console.log(clickedItem)
        switch(clickedItem){
            case 'hit':
                console.log('21 I win')
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