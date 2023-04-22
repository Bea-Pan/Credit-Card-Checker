// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
function validateCred(cardNumber){
    
    const newList = cardNumber.slice(0,-1); //the array without the last digit
    const reversedList = [];//reversed list 
    const doubledList = [];//every odd index multiplied by 2 and if result bigger than 9 subtract 9
    let summedList = [];


    for (let i = newList.length - 1; i >= 0; i--){
         reversedList.push(newList[i]);//reversing the list
    }

    //console.log(reversedList)

    for (let z = 0; z <= reversedList.length -1; z += 2){
        if (reversedList[z] * 2 > 9) {
            doubledList.push((reversedList[z] * 2) -9 ); //if result oof multipliedby 2 > 9, subtract 9
        } else {
            doubledList.push(reversedList[z] * 2)//every odd index multiplied by 2
        }
    }

    //console.log(doubledList);

    for (let x = 1; x <= reversedList.length -1;  x += 2 ){
        doubledList.push(reversedList[x])//pushed even index to the doubledList 
    }

    
    const initialValue = 0;
    summedList = doubledList.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue); //summing all numbers from doubledList 
    //console.log(summedList)
    
    let lastDigitCardNum = cardNumber.slice(-1);//the last digit of the original cardNumber
    lastDigitCardNum = parseInt(lastDigitCardNum)//hanging the output to 'number'
    //console.log(lastDigitCardNum);

    summedList = summedList + lastDigitCardNum;//adding the last digit of cardNumber to summedList
    //console.log(summedList);

    /*if the summedList divided by 10 = 0 the card is valid*/

    if (summedList % 10 === 0){
        return true;
    } else {
        return false
    }   
    
}

console.log(validateCred(valid1));


const falseCards = [];//this will need to be called as parameter for the idInvalidCardCompanies function

function findInvalidCards(batch){

    for (let i = 0; i < batch.length; i++){
        let creditCard = batch[i];
        if((validateCred(creditCard) === false)){
            falseCards.push(batch[i]);
        }
    }     
    return falseCards
    
}
console.log(falseCards)
console.log(findInvalidCards(batch));
//console.log(falseCards[1])



 function idInvalidCardCompanies(badCards){

    let badCardCompnies = [];
    let noDuplicates = [];
    
    for (let i = 0; i < badCards.length; i++){
        if (badCards[i][0] === 3){
            badCardCompnies.unshift('American Express');
        } else if (badCards[i][0] === 4){
            badCardCompnies.unshift('Visa');
        } else if (badCards[i][0] === 5){
            badCardCompnies.unshift('Mastercard');
        } else if (badCards[i][0] === 6){
            badCardCompnies.unshift('Discover');
        } else {
            badCardCompnies.unshift('Company not found')
        }
    }
  
    //console.log(badCardCompnies)
    noDuplicates = [...new Set(badCardCompnies)]
    console.log(noDuplicates);
    
 }


console.log(idInvalidCardCompanies(falseCards))
