let totalPrice=4500;
if(totalPrice>6000)
{
    totalPrice-=totalPrice*.15;
    console.log(totalPrice);

}
else if(totalPrice>3000)
{
    totalPrice-=totalPrice*.05;
    console.log(totalPrice);

}
else{
    console.log("No Discount");
}
//2
let foodPrice=500;
let peopleAge=15;
if(peopleAge<12)
{
    console.log("Food is free!!");
}
else if(peopleAge<60)
{
    foodPrice-=foodPrice*0.5;
    console.log(foodPrice);
}
else
{
    console.log(foodPrice);
}
//3
const accBalance=25000;
if(accBalance<1000)
{
    console.log("please Deposit");
}
else if(accBalance<5000)
{
    console.log("BinDas!!Enjoy your life")
}
else{
    console.log("Plz marry meee!!");
}
//4
const xmMarks=69;
if(xmMarks<50)
{
    console.log("fail")
}
else if(xmMarks<80)
{
    console.log("pass")
}
else{
    console.log("A +");
}
//5
const bookPage=673;
if(bookPage<100)
{
    console.log("Small book.");

}
else if(bookPage<=500)
{
    console.log("Mid-size book");
}
else{
    console.log("heart-attack size book");
}
//6
const temp =-10;
if(temp<0)
{
    console.log("Ice");

}
else if(temp<=20)
{
    console.log("Cold COld");

}
else{
    console.log("Hot hot");
}
//7
const level=62;
if(level<10)
{
    console.log("novice");
}
else if(level<50)
{
    console.log("Expert");
}
else{
    console.log("Pro-gamer");
}
