let ques = document.getElementById('ques');
let a1 = document.getElementById('a1');
let a2 = document.getElementById('a2');
ques.innerHTML = 'Would you consider your face to be longer than it is wide?';
a1.innerHTML='Think so...';
a2.innerHTML='Not really...';


a1.addEventListener("click", function(){
    ques.innerHTML = "Considerably?";
    a1.innerHTML = "Definitely";
    a2.innerHTML = "Enough to notice";
    a1.addEventListener("click", function(){
        ques.innerHTML='Your face is oblong';
        a1.hidden= true;
        a2.hidden = true;
    })
        
    a2.addEventListener("click", function(){
        ques.innerHTML = "Is your jawline glenty rounded?";
        a1.innerHTML = "Yes";
        a2.innerHTML = "No";
        a1.addEventListener("click", function(){
            ques.innerHTML='Are your checkbones narrower than your forehead';
            a1.innerHTML= "Yes";
            a2.innerHTML= "No";
            a1.hidden=false;
            a2.hidden=false;
            a1.addEventListener("click", function(){
                ques.innerHTML = "Your face is heart";
                a1.hidden = true;
                a2.hidden = true;
            })
            a2.addEventListener("click", function(){
            ques.innerHTML = "Your face is oval";
            a1.hidden= true;
            a2.hidden =true;
            })
        })
        a2.addEventListener("click", function(){
            ques.innerHTML='Are your checkbones pronounced';
            a1.innerHTML= 'yes';
            a2.innerHTML= 'no';
            a1.addEventListener("click", function(){
                ques.innerHTML='Your face is diamond';
                a1.hidden= true;
                a2.hidden= true;
            })
            a2.addEventListener("click", function(){
                ques.innerHTML='Your face is triangle';
                a1.hidden=true;
                a2.hidden=true;
            })    
        })
    })        
})

a2.addEventListener("click", function(){
    ques.innerHTML = "Not even a little?";
    a1.innerHTML = "Enough to notice";
    a2.innerHTML = "Nope";
    a1.addEventListener("click", function(){
        ques.innerHTML = "Is your jawline glenty rounded?";
        a1.innerHTML = "Yes";
        a2.innerHTML = "No";
        a1.addEventListener("click", function(){
            ques.innerHTML='Are your checkbones narrower than your forehead';
            a1.innerHTML= "Yes";
            a2.innerHTML= "No";
            a1.hidden=false;
            a2.hidden=false;
            a1.addEventListener("click", function(){
                ques.innerHTML = "Your face is heart";
                a1.hidden = true;
                a2.hidden = true;
            })
            a2.addEventListener("click", function(){
            ques.innerHTML = "Your face is oval";
            a1.hidden= true;
            a2.hidden =true;
            })
        })
        a2.addEventListener("click", function(){
            ques.innerHTML='Are your checkbones pronounced';
            a1.innerHTML= 'yes';
            a2.innerHTML= 'no';
            a1.addEventListener("click", function(){
                ques.innerHTML='Your face is diamond';
                a1.hidden= true;
                a2.hidden= true;
            })
            a2.addEventListener("click", function(){
                ques.innerHTML='Your face is triangle';
                a1.hidden=true;
                a2.hidden=true;
            })    
        })
    })  
    a2.addEventListener("click", function(){
        ques.innerHTML="How's that jawline of yours?";
        a1.innerHTML= "Hard";
        a2.innerHTML= "Soft";
        a1.hidden=false;
        a2.hidden=false;
        a1.addEventListener("click", function(){
            ques.innerHTML = "Your face is square";
            a1.hidden = true;
            a2.hidden = true;
        })
        a2.addEventListener("click", function(){
        ques.innerHTML = "Your face is round";
        a1.hidden= true;
        a2.hidden =true;
        })
    })      
})