/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];
//thegreatjogger.com
//thebigjogger.com
//thegreatracoon.com
//thebigracoon.com
//ourgreatjogger.com
//ourbigjoger.com
//ourgreatracoon.com
//ourbigracoon.com

const generateDomain = (array1, array2, array3) => {
  const generator = [];
  if ((array1.lemgth = array2.length) && (array2.length = array3.length)) {
    console.log("tableau de meme longueur");
  }
  let longueur = array1.length * array2.length * array2.length;
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      for (let k = 0; k < array3.length; k++) {
        const domainName = array1[i] + array2[j] + array3[k] + ".com <br>";
        generator.push(domainName);
      }
    }
  }
  return generator.join("");
};
console.log(generateDomain(pronoun, adj, noun));

window.onload = function() {
  //write your code here
  document.getElementById("generateDomain").innerHTML = generateDomain(
    pronoun,
    adj,
    noun
  );
};
