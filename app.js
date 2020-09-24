var express=require('express');
var app=express();
var hotelList = require('./hotel.json');

app.listen('3000',function(req,res){
console.log("listening to port 3000");

})

app.get('/showhotel',function(req,res){
   res.send(hotelList);
   })

app.get('/showcity',function(req,res){
   var sublist=[];
   city=req.query.city;
   var flag=0;
   for(const elem in hotelList)
   {
   if(hotelList[elem].city==city){
      sublist.push(hotelList[elem]);
      flag=1;
   }
   }
   if(flag==0)
   res.send("city not found");
   res.send(sublist)
   
})
app.get('/showtype',function(req,res){
    var type = req.query.type;
    var sublist =[];
    var flag =0;
    for(const i in hotelList){
        if(hotelList[i].type == type){
            flag = 1;
            sublist.push(hotelList[i]);
            
        }
    }
    
    if(flag == 0)
        res.send('type not found');
        res.send(sublist);
})

app.get("/showcuisine", function(req, res)
{
    cuisine = req.query.cuisine;
    searchcuisine = [];
    hotelList.forEach(element =>
    {
        for (const key in element.cuisine)
        {
            if(cuisine == element.cuisine[key])
            {
                searchcuisine.push(element.name);
            }
        }
    });
    res.send(searchcuisine);
})