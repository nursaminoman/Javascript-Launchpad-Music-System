  var myBtn = document.querySelectorAll("button");
    
   for(var i=0;i<myBtn.length;i++){
   
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        this.classList.add("shadow");
        var myBtnText = this.innerHTML;
        // console.log(myBtnText);
         soundEffect(myBtnText);
    });
    
    document.querySelectorAll("button")[i].addEventListener("mouseout",function(){
        this.classList.remove("shadow");
        var myBtnText = this.innerHTML;
        console.log(myBtnText);
    });

   }


 function soundEffect(myBtnText){

    switch(myBtnText){
        case "1":
        var sound = new Audio("sound/1.wav");
        sound.play();
        break;

        case "2":
        var sound = new Audio("sound/2.wav");
        sound.play();
        break;

        case "3":
        var sound = new Audio("sound/3.wav");
        sound.play();
        break;

        case "3":
            var sound = new Audio("sound/3.wav");
            sound.play();
            break;

       case "4":
        var sound = new Audio("sound/4.wav");
        sound.play();
        break;

       case "5":
        var sound = new Audio("sound/5.wav");
        sound.play();
        break;

       case "6":
        var sound = new Audio("sound/6.wav");
        sound.play();
        break;

            case "7":
            var sound = new Audio("sound/7.wav");
            sound.play();
            break;
    
            case "8":
            var sound = new Audio("sound/8.wav");
            sound.play();
            break;
    
            case "9":
            var sound = new Audio("sound/9.wav");
            sound.play();
            break;
    
            case "10":
                var sound = new Audio("sound/10.wav");
                sound.play();
                break;
    
           case "11":
            var sound = new Audio("sound/11.wav");
            sound.play();
            break;
    
           case "12":
            var sound = new Audio("sound/12.wav");
            sound.play();
            break;
    
           case "13":
            var sound = new Audio("sound/13.wav");
            sound.play();
            break;
            case "14":
                var sound = new Audio("sound/14.wav");
                sound.play();
                break;
        
                case "15":
                var sound = new Audio("sound/15.wav");
                sound.play();
                break;
        
                case "16":
                var sound = new Audio("sound/16.wav");
                sound.play();
                break;
        
                case "17":
                    var sound = new Audio("sound/17.wav");
                    sound.play();
                    break;
        
               case "18":
                var sound = new Audio("sound/18.wav");
                sound.play();
                break;
        
               case "19":
                var sound = new Audio("sound/19.wav");
                sound.play();
                break;
        
               case "20":
                var sound = new Audio("sound/20.wav");
                sound.play();
                break;

                case "21":
                    var sound = new Audio("sound/21.wav");
                    sound.play();
                    break;
            
                    case "22":
                    var sound = new Audio("sound/22.wav");
                    sound.play();
                    break;
            
                    case "23":
                    var sound = new Audio("sound/23.wav");
                    sound.play();
                    break;
            
                    case "24":
                        var sound = new Audio("sound/24.wav");
                        sound.play();
                        break;
     }
 }
