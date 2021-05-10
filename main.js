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

let tetris = games.find((game)=> game.title==='Tetris');
//console.log(tetris);

let lowCostGames = games.filter((game)=>game.price<40);
//console.log(lowCostGames)

let gameTitles = games.map((game)=>{
    game.price = game.price+100;
   return game.price
});
console.log(gameTitles);

let switchGames = games.some((game)=>game.price===0);
console.log(switchGames);

let arefreeGames = games.every((game)=>game.price===0);
console.log(arefreeGames);

