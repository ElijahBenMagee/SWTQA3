function retireForm(){
         //try{
	     var w = parseFloat(document.getElementById("curSal").value);
	     var a = parseFloat(document.getElementById("curAge").value);
	     var s = parseFloat(document.getElementById("saved").value);
	     var g = parseFloat(document.getElementById("goal").value);
	 document.getElementById("retireErr").innerHTML = retire(a,w,s,g);	 

         //   if (a+g/(w*s*1.35/100) >= 100){
	 //	      document.getElementById("retireErr").innerHTML = "Goal cannot be met. You will die first";
         //   }else{
		document.getElementById("retireErr").innerHTML = a+g/(w*s*1.35/100) + " years old.";
	 //   }


         //}
	 //catch(err){
	 //     document.getElementById("retireErr").innerHTML = "Bad input, try again.";
	      //document.getElementById("retireErr").name = err.message;
	 
         //}
	 //return 3;
      }

function retire(a,w,s,g){
	 
         try{
	   
            if (a+g/(w*s*1.35/100) >= 100){
		      return"Goal cannot be met. You will die first";
            }else{
		return  a+g/(w*s*1.35/100) + " years old.";
	    }


         }
	 catch(err){
	      return "Bad input, try again.";
	     
	 
         }
	 return 3;
      }

module.exports = retire;