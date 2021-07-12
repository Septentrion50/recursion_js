const findSquareRoot = (num) => {
    const find = (guess, square, lastSmallGuess, lastLargeGuess) => {
      var smallerArray = [];
      var greaterArray = [];

      if(square === num){
        return guess;
      } else if(square > num){
          greaterArray.push(guess);
          return find(((guess + lastSmallGuess) / 2), ((guess + lastSmallGuess) / 2) * ((guess + lastSmallGuess) / 2), lastSmallGuess, greaterArray[greaterArray.length-1]);
      } else if(square < num){
          smallerArray.push(guess);
          return find(((guess + lastLargeGuess) / 2), ((guess + lastLargeGuess) / 2) * ((guess + lastLargeGuess) / 2), smallerArray[smallerArray.length-1], lastLargeGuess);
    } 
  }
  return find(num / 2, (num / 2) * (num / 2), 0, 0);
}

console.log(findSquareRoot(25));