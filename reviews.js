const reviews = [

{
name:"Hrothgar",
img:"images/hrothgar.jpg",
stars:"★★★★★",
text:"Absolutely legendary service. Showed up without invitation and saved Denmark. Grendel had been ruining my mead hall for years. Beowulf showed up, ripped his arm off, and saved the kingdom. And also killed his mother. 11/10 would hire again."
},

{
name:"Wiglaf",
img:"images/wiglaf.png",
stars:"★★★★★",
text:"10/10 Amazing king amazing warrior will totally stand behind him even if no one else does. If Beowulf dies, we will certainly be invaded by the Frisians and Swedes and God knows who else. We've simply made too many enemies to survive for long without Beowulf. Obviously this isn't a great situation, we're all just praying that Beo's immortal at this point. And also really hoping he doesn't try to kill this dragon by himself, because then he might die and then we all die. If you read these, please live. Our people are desperate, so please please please don't die."
},

{
name:"Onela the Swede",
img:"images/onela.jpg",
stars:"★☆☆☆☆",
text:"Terrible experience. For totally legitimate reasons involving dynastic honor and whatnot, my bro Ohthere and I were at war with the Geats after King Hrethel’s death all throughout Hygelac’s reign. The real mess started when I ousted my traitor nephews and reclaimed the Swedish throne. Hygelac’s son King Headred (Beo’s cousin, btw) stupidly helped my traitor nephews, and so I had to kill him, obviously. So then Beowulf helped my nephew kill me in a “comfortless campaign.” It was all very convoluted, and now I am dead. \n Rooting for my people to destroy the Geats once Beowulf is dead. #Pray4Swedes"
},

{
name:"Dragon",
img:"images/dragon.jpg",
stars:"☆☆☆☆☆",
text:"0/10. See, I've been minding my own business and guarding my treasure peacefully for centuries. Then some thief takes my stuff. The king catches the thief, and instead of just RETURNING MY GOLD, this dummie decides he's going to fight me. Ever heard of diplomacy? Extremely rude and excessively stupid. Will update once I kill."
}

];

let index = 0;

function showReview(){

if(index >= reviews.length){
index = 0;
}

const review = reviews[index];

const container = document.getElementById("reviewContainer");

const card = document.createElement("div");
card.className = "review-card";

card.innerHTML = `
<img src="${review.img}">
<div>
<strong>${review.name}</strong>
<div class="stars">${review.stars}</div>
<p>${review.text}</p>
</div>
`;

container.prepend(card);

index++;
}
