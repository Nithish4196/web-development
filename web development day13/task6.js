function bmical(Weight,height){
    var bmi=Weight/(height*height);
    return Math.round(bmi);

}
var bmi=bmical(65,1.8);
console.log(`your weight is:`+bmi)
if(bmi<18.5){
    console.log(`you are under wait`);
}
else if(bmi>=18.5 && bmi<=24.9){
    console.log(`you have a normal weight`)
}
else{
    console.log(`you are overweight`)
}