
function bodyForm(){
	 
    
	     var h1 = parseInt(document.getElementById("heightf").value);
	     var h2 = parseInt(document.getElementById("heighti").value);
	     var w = parseInt(document.getElementById("weight").value);
             document.getElementById("bodyErr").innerHTML = body(h1,h2,w);
           
      }

function body(h1,h2,w){
	 
         try{
	   
             var h = h1*12+h2;
             var bmi = w*0.45/((0.025*h)*(0.025*h));
            if (h == 0){
		throw "Bad";
		}
            if (bmi < 18.5){
			//return w*0.45/((0.025*h)*(0.025*h)) + "<br>underweight";
                        return "underweight"; 
   	   }
            else if (bmi >= 18.5 && bmi < 25){
		      //return w*0.45/((0.025*h)*(0.025*h)) + "<br>normal weight";
		      return "normal weight";
            }
            else if (bmi < 30 && bmi >= 25){
		      return "overweight";
		      //return w*0.45/((0.025*h)*(0.025*h)) + "<br>overweight";
		      }
            else {
			return "obese";
		      //return w*0.45/((0.025*h)*(0.025*h)) + "<br>obese";
		      }

         }
	 catch (err){
	      return "Bad input, try again.";
	 
         }
      }
module.exports = body;