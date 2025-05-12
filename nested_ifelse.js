//1
const getInvitation=true;
const haveMoney=780;
if(getInvitation==true){
    console.log("go to Program");
    if(haveMoney>=1000)
        console.log("Buy a gift");
    else{
        console.log("No gift");
    }
}
else{
    console.log("remove from friendlist");
}
//2
const haveGuest=true;
if(haveGuest==true)
{
    console.log("guest comeing");
    const haveTea=false;
    if(haveTea==true)
    {
        const haveBiscut=false;
        if(haveBiscut=True)
        {
            console.log("Have your tea and biscut");
        }
        else{
            console.log("Tea is ready");
        }
    }
    else{
        console.log("watch star jalsha serial");
    }
}
else{
    console.log("no guest coming")
}
//3
const activeAccount=true;
if(activeAccount==true)
{
    const isPremium=true;
    if(isPremium==true)
    {
        console.log("Enjoy premium feature");
    }
    else{
        console.log("Watch free version.");
    }

}
else{
    console.log("Activate your account")
}
//4
const foodInFreeze=false;
if(foodInFreeze==true){
    console.log("Cook in oven");
}
else{
    const isFoodPanda=false;
    if(isFoodPanda==true){
        console.log("Order in FoodPanda");
    }
    else{
        console.log("Let's sleep");
    }
}
//5
const personInParty=105;
if(personInParty>100)
{
    const allWithGift=false;
    if(allWithGift==true)
    {
        console.log("Let's party all night");
    }
    else{
        console.log("Party with myself");
    }
}
else("No man no party");