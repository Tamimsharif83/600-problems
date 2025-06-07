console.log("1st problem\n");
const player={
    name:"Mahmudullah",
    age:40,
    sports:'cricket',
    team:'Bangla Tiger'

}
console.log(player.team);
console.log("2nd problem\n");
const laptop={
    brand:"Hp",
    price:"96k BDT",
    hardDisc:"4GB",
    ram:"8GB",
    screenSize:"1920 x 1080"
}
console.log(laptop.screenSize);

console.log("3rd problem\n");
const favPlace={
    name:"Cox's Bazar",
    distance:"400km",
    popularity:"high"

}
console.log(favPlace['popularity']);
console.log("4th problem\n");
const phone={
    name:'nokia',
    color:'black',
    price:'5000tk'
}
console.log(phone['price']);
console.log("5th problem\n");
const library={
    name:"Public Library",
    location:"Dhaka",
    books:5000
}
console.log(library.location);

console.log("6th problem\n");
const movie={
    title:"Inception",
    director:"Nolan",
    rating:9
}
console.log(movie['rating']);
console.log("7th problem\n");
const collage={
    name:"NDC",
    established:1949,
    groups:['science','arts','commerce']
}
console.log(collage['groups'][2]);
console.log("8th problem\n");
const family={
    father:{
        name:'Liaquat',
        age:52,
        profession:"Businessman"
    },
    mother:{
        name:"Parvin",
        age:47,
        profession:'HouseWife'


    }

}
const totalAge=family.father.age+family.mother.age;
console.log(totalAge);
