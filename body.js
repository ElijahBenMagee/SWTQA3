function bodyForm(){
	 
         try{
	     var h1 = parseInt(document.getElementById("heightf").value);
	     var h2 = parseInt(document.getElementById("heighti").value);
	     var w = parseInt(document.getElementById("weight").value);
             var h = h1*12+h2;
             var bmi = w*0.45/((0.025*h)**2);
             //document.getElementById("bodyErr").innerHTML = h;      
            document.getElementById("bodyErr").innerHTML = w*0.45/((0.025*h)**2);
            if (bmi < 18.5){

		      document.getElementById("bodyErr").innerHTML = w*0.45/((0.025*h)**2) + "<br>underweight";
            }
            else if (bmi >= 18.5 && bmi < 25){
		      document.getElementById("bodyErr").innerHTML = w*0.45/((0.025*h)**2) + "<br>normal weight";
            }
            else if (bmi < 30 && bmi >= 25){
		      document.getElementById("bodyErr").innerHTML = w*0.45/((0.025*h)**2) + "<br>overweight";
		      }
            else if (bmi >= 30){
		      document.getElementById("bodyErr").innerHTML = w*0.45/((0.025*h)**2) + "<br>obese";
		      }

         }
	 catch{
	      document.getElementById("bodyErr").innerHTML = "Bad input, try again.";
	 
         }
      }
