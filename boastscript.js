function generateBoast(){

const boasts = [

"I am Beowulf, son of Ecgtheow, the strongest of the Geats. In my youth I bound five giants, chased a tribe of monsters from the earth, and slew sea-beasts beneath the waves.",

"Breca boasted of swimming prowess, yet I swam longer and stronger. All night I fought the sea-beasts with naked sword and returned alive while their corpses drifted in the morning tide.",

"I shall grapple with Grendel hand to hand, man against monster, strength against strength. Let fate decide which of us shall feast in Heorot tomorrow.",

"Never have I feared battle. The strength of thirty men resides in this grip. Let any creature of darkness test it if they dare.",

"The dragon may burn kingdoms and guard ancient gold, yet I shall meet him steel to scale and win glory or die as a king should.",

"I seek no sword when glory calls. My hands alone are weapons enough for any fiend that walks the night.",

"Let Unferth speak his jealous lies — my deeds speak louder than any drunken tongue.",

"The fame of warriors lives longer than their bones. Therefore I fight, so my name will be sung long after I am dust."

];

const randomIndex = Math.floor(Math.random() * boasts.length);

document.getElementById("boastBox").innerText = boasts[randomIndex];

}
