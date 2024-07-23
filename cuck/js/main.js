let swiggy=[
            {
	          img:"e.jpg",
			  name:"Parotta",
			  rate:"4.2",
			  min:"25mins",
			  money:"Rs.200 for two"
			 
			  
             },
			 
			 {
	          img:"f.jpg",
			  name:"Noodles",
			  rate:"4.3",
			  min:"25mins",
			  money:"Rs.250 for two"
			  
             },
			 
			 {
	          img:"g.jpg",
			  name:"Anderson",
			  rate:"3.7",
			  min:"25mins",
			  money:"Rs.400 for two"
             },
			 {
				 img:"h.jpg",
				 name:"Snacks",
				 rate:"4.1",
				 min:"25mins",
				 money:"Rs.300 for two"
				  
			 },
			 {
				 img:"i.jpg",
				 name:"Chicken",
				 rate:"4.5",
				 min:"25mins",
				 money:"Rs.500  for two"
			 },
			 {
                 img:"j.jpg",
                 name:"Briyani",
				 rate:"4.4",
				 min:"25mins",
				 money:"Rs.800  for two"
             },
			 {
				  img:"k.jpg",
				  name:"Manpanai briyani",
				  rate:"4.9",
				  min:"25mins",
				  money:"Rs.600 for two"
			 },
			 {
				 img:"o.jpg",
				  name:"Idly",
				  rate:"4.8",
				  min:"25mins",
				  money:"Rs.100 for two"
			 },
			 {
				 img:"p.jpg",
				  name:"Pizza",
				  rate:"3.3",
				  min:"25mins",
				  money:"Rs.450 for two"
			 },
			 {
				 img:"q.jpg",
				  name:"Bergar",
				  rate:"3.9",
				  min:"25mins",
				  money:"Rs.500 for two"
			 },
			 {
				 img:"r.jpg",
				  name:"Role parrota",
				  rate:"4.5",
				  min:"25mins",
				  money:"Rs.350 for two"
			 },
			 {
				 img:"s.jpg",
				  name:"Milkshake",
				  rate:"5.5",
				  min:"25mins",
				  money:"Rs.100 for two"
			 }
        			 
			 
             ]
			 
			 // var row=document.getElementById{"row"}
function food(swiggy){
// var row=document.getElementById("row")
// var indx=0
 
swiggy.map((e)=>{

var row=document.querySelector("#row")
row.setAttribute("class","row")


var col=document.createElement("div")
col.setAttribute("class","over col-lg-3 col-12 col-sm-6 mb-5")


  var imgItem=document.createElement("div")
    imgItem.setAttribute("class","imgItem")
	
	
var image=document.createElement("img")
   image.setAttribute("src",e.img)
   image.style.width="100%"
    // image.setAttribute("class","card")
   

             var food=document.createElement("div")
               food.setAttribute("class","food")
                var foodname=document.createElement("h3")
                   foodname.innerHTML=e.name
				   
				   
				    var iconlogo=document.createElement("div")
                    iconlogo.setAttribute("class","iconlogo")
					
					 var icon=document.createElement("i")
                         icon.setAttribute("class","fa fa-star-o bg-success text-light")
	                      icon.innerHTML=e.rate
				   
                var span=document.createElement("span")
				         span.setAttribute("class","fw-bolder px-3")
                         span.innerHTML="."
  
                var time=document.createElement("span")
                         time.innerHTML=e.min
     
	           var dot=document.createElement("span")
				         dot.setAttribute("class","fw-bolder px-3")
                         dot.innerHTML="."
  
	 
                var fixed=document.createElement("span")
                         fixed.innerHTML=e.money
  
row.append(col)
col.appendChild(imgItem)
imgItem.append(image,food)
food.append(foodname,iconlogo)
iconlogo.append(icon,span,time,dot,fixed)





})
}
      //sorting in rating of food
 food(swiggy)

         function rating(){
          let rate= swiggy.sort(function (a,b){
			 return b.rate-a.rate
		  })			 
		  // var row=document.getElementById("row")
          row.innerHTML=""
               food(rate)		  
		 }