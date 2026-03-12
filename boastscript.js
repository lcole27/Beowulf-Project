function generateBoast(){

const boasts = [

"\"They had seen me boltered in the blood of enemies when I battled and bound five beasts, raided a troll-nest and in the night-sea slaughtered sea-brutes. I have suffered extremes and avenged the Geats (their enemies brought it upon themselves, I devastated them). Now I mean to be a match for Grendel, settle the outcome in single combat\" (419-426).",

"\"I have heard moreover that the monster scorns in his reckless way to use weapons; therefore, to heighten Hygelac's fame and gladden his heart, I hereby renounce sword and the shelter of the broad shield, the heavy war-board: hand-to-hand is how it will be, a life-and-death fight with the fiend. Whichever one death fellsmust deem it a just judgement by God\" (433-441).",

"\"Time and again, foul things attacked me, lurking and stalking, but I lashed out, gave as good as I got with my sword. My flesh was not for feasting on, there would be no monsters gnawing and gloating over their banquet at the bottom of the sea. Instead, in the morning, mangled and sleeping the sleep of the sword, they slopped and floated like the ocean's leavings. From now on sailors would be safe, the deep-sea raids were over for good\" (559-569).",

"\"I had a fixed purpose when I put to sea. As I sat in the boat with my band of men, I meant to perform to the uttermost what your people wanted or perish in the attempt, in the fiend's clutches. And I shall fulfil that purpose, prove myself with a proud deed or meet my death here in the mead-hall\"(632-638).",

"\"When it comes to fighting, I count myself as dangerous any day as Grendel. So it won't be a cutting edge I'll wield to mow him down, easily as I might. He has no idea of the arts of war, of shield or sword-play, although he does possess a wild strength. No weapons, therefore, for either this night: unarmed he shall face me if face me he dares. And may the Divine Lord in His wisdom grant the glory of victory to whichever side He sees fit\" (677-687).",

"\"I risked my life often when I was young. Now I am old, but as king of the people I shall pursue this fight for the glory of winning, if the evil one will only abandon his earth-fort and face me in the open\" (2511-2515)."

];

const randomIndex = Math.floor(Math.random() * boasts.length);

document.getElementById("boastBox").innerText = boasts[randomIndex];

}
