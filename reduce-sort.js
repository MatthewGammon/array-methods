//Games
// Send game title, estmated price, platform, and personal rating

const games = [
    {title:'The Witcher 3', price:40, platform:'PC',rating:10},
    {title:'Splatoon 2!', price:30, platform:'Switch',rating:5},
    {title:'Monster Hunter Rise', price:60, platform:'Switch',rating:9.5},
    {title:'Antiyoy', price:0, platform:'Mobile',rating:4},
    {title:'Minecraft', price:20, platform:'PC',rating:5},
    {title:'Tetris', price:0.99, platform:'Mobile',rating:10},
    {title:'Returnal', price:69.99, platform:'PS5',rating:8.5},
    {title:'Resident Evil 8', price:79.99, platform:'PS4',rating:10},
];
let acc = 0;
for (let i = 0; i < games.length; i++) {
    const price = games[i].price;
    acc+=price;
}
//console.log(acc);

let total = games.reduce((acc, game)=>acc+game.price,0);
//console.log(total);

games.sort((gameA,gameB)=> gameB.rating-gameA.rating)


games.sort((gameA, gameB)=> gameA.title.toLowerCase()< gameB.title.toLowerCase()?1:-1);
console.log(games);