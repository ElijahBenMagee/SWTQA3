function retireForm(){
	 
         try{
	     var w = parseFloat(document.getElementById("curSal").value);
	     var a = parseFloat(document.getElementById("curAge").value);
	     var s = parseFloat(document.getElementById("saved").value);
	     var g = parseFloat(document.getElementById("goal").value);
            //document.getElementById("bodyErr").innerHTML = h;      
            //document.getElementById("bodyErr").innerHTML = w*.45/((0.025*h)**2);
            if (a+g/(w*s*1.35/100) >= 100){
		      document.getElementById("retireErr").innerHTML = "Goal cannot be met. You will die first";
            }else{
		document.getElementById("retireErr").innerHTML = a+g/(w*s*1.35/100) + " years old.";
	    }


         }
	 catch(err){
	      document.getElementById("retireErr").innerHTML = "Bad input, try again.";
	      document.getElementById("retireErr").name = err.message;
	 
         }
	 return 3;
      }

function retire(){
	 
         try{
	     var w = parseFloat(document.getElementById("curSal").value);
	     var a = parseFloat(document.getElementById("curAge").value);
	     var s = parseFloat(document.getElementById("saved").value);
	     var g = parseFloat(document.getElementById("goal").value);
            //document.getElementById("bodyErr").innerHTML = h;      
            //document.getElementById("bodyErr").innerHTML = w*.45/((0.025*h)**2);
            if (a+g/(w*s*1.35/100) >= 100){
		      document.getElementById("retireErr").innerHTML = "Goal cannot be met. You will die first";
            }else{
		document.getElementById("retireErr").innerHTML = a+g/(w*s*1.35/100) + " years old.";
	    }


         }
	 catch(err){
	      document.getElementById("retireErr").innerHTML = "Bad input, try again.";
	      document.getElementById("retireErr").name = err.message;
	 
         }
	 return 3;
      }

module.exports = retire;