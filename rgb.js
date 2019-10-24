var block = document.querySelectorAll(".blockcolor");
var displayColor = document.getElementById("rgbdisplay");
var reset = document.querySelector("#resetgame");
var gameResult = document.getElementById("gameresult");
var easyLevel = document.getElementById("easy");
var hardLevel = document.getElementById("hard");
var header = document.querySelector("header");
var numberOfBlock = 6;
var color = colorGenerate(numberOfBlock);
var winningColor = winningColorSelect();
applyingColorToBlock(numberOfBlock);

for(var i=0 ; i < numberOfBlock ; i++)
{
    //adding click event
    block[i].addEventListener("click", function(){
        
        //taking the value of the color of the block
        var x = this.style.backgroundColor;
        //checking the color to winning color
        if(winningColor === x)
        {
            header.style.backgroundColor = x;
            gameResult.textContent = "Correct!";
            reset.textContent = "PLAY AGAIN";
            winningColorToAllBlock(x);
        } else
        {
            this.style.backgroundColor = "black";
            gameResult.textContent = "Try Again!"
        }

    });
}

reset.addEventListener("click", function(){
    //generating array of random color
   color = colorGenerate(numberOfBlock);
    //appling to all block
    applyingColorToBlock(numberOfBlock);
    //selecting winning color
    winningColorSelect();
    var y = reset.textContent;
    if( y === "PLAY AGAIN")
    {
        reset.textContent = "NEW COLOR"
    }
    header.style.backgroundColor = "rgb(59, 156, 188)";
    gameResult.textContent = "";
});

//level hard conditions
hardLevel.addEventListener("click", function(){
    easyLevel.classList.remove("levelofgame");
    hardLevel.classList.add("levelofgame");
    numberOfBlock = 6;
    //generating array of random color
   color = colorGenerate(numberOfBlock);
   //appling to all block
   applyingColorToBlock(numberOfBlock);
   //selecting winning color
   winningColorSelect();
   if( reset.textContent === "PLAY AGAIN")
    {
        reset.textContent = "NEW COLOR"
    }
   header.style.backgroundColor = "rgb(59, 156, 188)";
   gameResult.textContent = "";

   //displaying six block
   for(var i=0; i < 6 ; i++)
   {
       block[i].style.display = "block";
   }

});

//easy level condition
easyLevel.addEventListener("click", function(){
    easyLevel.classList.add("levelofgame");
    hardLevel.classList.remove("levelofgame");
    numberOfBlock = 3;
    //generating array of random color
   color = colorGenerate(numberOfBlock);
   //appling to all block
   applyingColorToBlock(numberOfBlock);
   //selecting winning color
   winningColorSelect();
   if( reset.textContent === "PLAY AGAIN")
    {
        reset.textContent = "NEW COLOR"
    }
   header.style.backgroundColor = "rgb(59, 156, 188)";
   gameResult.textContent = "";

   //displaying six block
   for(var i=0; i < 6 ; i++)
   {
       if(color[i])
       {
        block[i].style.display = "block";
       }else{
        block[i].style.display = "none";
       }
       
   }


});


//generating array of random color
function colorGenerate(limit){
    colorArray = [];
    for(var i = 0; i < limit ; i++)
    {
        var red   =   Math.floor(Math.random()*256);
        var green =   Math.floor(Math.random()*256);
        var blue  =   Math.floor(Math.random()*256);
        var x     = "rgb(" + red + ", " + green + ", " + blue + ")" ;
        colorArray[i] = x; 
    }
    return colorArray;
}

//applying the generated random color of array to each block  
function applyingColorToBlock(limit){
    for(var i=0 ; i<limit ;i++)
    {
        block[i].style.backgroundColor = color[i];
    }
}

//selecting the winning score and displaying on window
function winningColorSelect(){
    var y = Math.floor(Math.random()*color.length);
    winningColor = colorArray[y];
    displayColor.textContent = winningColor;
    return winningColor;
}

//if user select winning color than applying to every block
function winningColorToAllBlock(x){
    for(var i = 0 ; i < numberOfBlock ; i++)
    {
        block[i].style.backgroundColor = x;
    }
}
