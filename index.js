

// var img ="images/X.png";
var count =0;
var winner =0;
  


 var len =document.querySelectorAll(".Photo").length;
 var cell1=document.querySelector(".one");
 var cell2=document.querySelector(".two");
 var cell3=document.querySelector(".three");
 var cell4=document.querySelector(".four");
 var cell5=document.querySelector(".five");
 var cell6=document.querySelector(".six");
 var cell7=document.querySelector(".seven");
 var cell8=document.querySelector(".eight");
 var cell9=document.querySelector(".nine");
    
            for(var i=0;i<document.querySelectorAll(".Photo").length;i++)
            {
                var Photo =document.querySelectorAll(".Photo")[i].addEventListener("click",function O()
                {
                    
                    if(count%2===0&&winner===0)
                    {
                        this.setAttribute("src","images/X.png");
                    count++;
                    console.log(count);
                
                    }
                    else if(count%2!=0&&winner===0)
                    {
                        this.setAttribute("src","images/O.png");
                        count++;
                        console.log(count);
                        
                    }
                    else
                    {
                        this.setAttribute("src","images/empty.png");
                    }
                    
                    
                    

                    var updatedCell1 = cell1.getAttribute("src");
                    var updatedCell2 = cell2.getAttribute("src");
                    var updatedCell3 = cell3.getAttribute("src");
                    var updatedCell4 = cell4.getAttribute("src");
                    var updatedCell5 = cell5.getAttribute("src");
                    var updatedCell6 = cell6.getAttribute("src");
                    var updatedCell7 = cell7.getAttribute("src");
                    var updatedCell8 = cell8.getAttribute("src");
                    var updatedCell9 = cell9.getAttribute("src");
                    
                    if(updatedCell1==="images/X.png" && updatedCell2==="images/X.png" && updatedCell3==="images/X.png")
                    {
                        document.querySelector("h1").innerHTML="X = winner";
                        
                        setTimeout(function(){
                            window.location.reload();
                         }, 2000);
                         winner=1;

                        
                        
                        
                    }
                    else if (updatedCell4==="images/X.png" && updatedCell5==="images/X.png" && updatedCell6==="images/X.png")
                    {
                        document.querySelector("h1").innerHTML="X = winner";
                        setTimeout(function(){
                            window.location.reload();
                         }, 2000);
                         winner=1;

                        

                        
                    }
                    else if (updatedCell7==="images/X.png" && updatedCell8==="images/X.png" && updatedCell9==="images/X.png")
                    {
                        document.querySelector("h1").innerHTML="X = winner";
                        setTimeout(function(){
                            window.location.reload();
                         }, 2000);
                         winner=1;

                        
                    }
                    else if (updatedCell1==="images/X.png" && updatedCell5==="images/X.png" && updatedCell9==="images/X.png")
                    {
                        document.querySelector("h1").innerHTML="X = winner";
                        setTimeout(function(){
                            window.location.reload();
                         }, 2000);
                         winner=1;

                        
                    }
                    else if (updatedCell3==="images/X.png" && updatedCell5==="images/X.png" && updatedCell7==="images/X.png")
                    {
                        document.querySelector("h1").innerHTML="X = winner";
                        setTimeout(function(){
                            window.location.reload();
                         }, 2000);
                         winner=1;

                        
                    }
                    else if (updatedCell1==="images/X.png" && updatedCell4==="images/X.png" && updatedCell7==="images/X.png")
                    {
                        document.querySelector("h1").innerHTML="X = winner";
                        setTimeout(function(){
                            window.location.reload();
                         }, 2000);
                         winner=1;

                        
                    }
                    else if (updatedCell2==="images/X.png" && updatedCell5==="images/X.png" && updatedCell8==="images/X.png")
                    {
                        document.querySelector("h1").innerHTML="X = winner";
                        setTimeout(function(){
                            window.location.reload();
                         }, 2000);
                         winner=1;

                        
                    }
                    else if (updatedCell3==="images/X.png" && updatedCell6==="images/X.png" && updatedCell9==="images/X.png")
                    {
                        document.querySelector("h1").innerHTML="X = winner";
                        setTimeout(function(){
                            window.location.reload();
                         }, 2000);
                         winner=1;

                        
                    }
                    
                    if(updatedCell1==="images/O.png" && updatedCell2==="images/O.png" && updatedCell3==="images/O.png")
                    {
                        document.querySelector("h1").innerHTML="O = winner";
                        setTimeout(function(){
                            window.location.reload();
                         }, 2000);
                         winner=1;

                        
                    }
                    else if (updatedCell4==="images/O.png" && updatedCell5==="images/O.png" && updatedCell6==="images/O.png")
                    {
                        document.querySelector("h1").innerHTML="O = winner";
                        setTimeout(function(){
                            window.location.reload();
                         }, 2000);
                         winner=1;

                        
                    }
                    else if (updatedCell7==="images/O.png" && updatedCell8==="images/O.png" && updatedCell9==="images/O.png")
                    {
                        document.querySelector("h1").innerHTML="O = winner";
                        setTimeout(function(){
                            window.location.reload();
                         }, 2000);
                         winner=1;

                        
                    }
                    else if (updatedCell1==="images/O.png" && updatedCell5==="images/O.png" && updatedCell9==="images/O.png")
                    {
                        document.querySelector("h1").innerHTML="O = winner";

                        setTimeout(function(){
                            window.location.reload();
                         }, 2000);
                         winner=1;

                        
                    }
                    else if (updatedCell3==="images/O.png" && updatedCell5==="images/O.png" && updatedCell7==="images/O.png")
                    {
                        document.querySelector("h1").innerHTML="O = winner";
                        setTimeout(function(){
                            window.location.reload();
                         }, 2000);
                         winner=1;

                        
                    }
                    else if (updatedCell1==="images/O.png" && updatedCell4==="images/O.png" && updatedCell7==="images/O.png")
                    {
                        document.querySelector("h1").innerHTML="O = winner";
                        setTimeout(function(){
                            window.location.reload();
                         }, 2000);
                         winner=1;

                        
                    }
                    else if (updatedCell2==="images/O.png" && updatedCell5==="images/O.png" && updatedCell8==="images/O.png")
                    {
                        document.querySelector("h1").innerHTML="O = winner";
                        setTimeout(function(){
                            window.location.reload();
                         }, 2000);
                         winner=1;

                        
                    }
                    else if (updatedCell3==="images/O.png" && updatedCell6==="images/O.png" && updatedCell9==="images/O.png")
                    {
                        document.querySelector("h1").innerHTML="O = winner";
                        setTimeout(function(){
                            window.location.reload();
                         }, 2000);
                         winner=1;

                        
                    }
                    
                } );
                
                
                    
                       
                    
                
            }
            document.querySelector(".custom-button").addEventListener("click",function reloadPage() {
                location.reload();
            });
                        

            
            
            
   

    


    
 
 


    
    


        
        
    
   
