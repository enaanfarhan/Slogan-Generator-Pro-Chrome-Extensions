let taglinesJson = ["A day full of Excellence" , "a life full of Simplicity" , "A Moments of Technology" , "a power that Shines you" , "A revolutionary business of people" , "A source of innovation and excellence" , "Accelerating the Tech with confidence" , "An intellectual imagination" , "Assurance of standing out" , "be BEtter Today" , "Because it’s done differently" , "Best Tech, Best Future" , "Better vision for better connection" , "Building better networks" , "Building the Future with Tech" , "Bussiness has no boundries" , "Change is Miracles" , "Change your Life Today" , "Commited power to next generation" , "Committed for Better Business" , "Communication made simple" , "Connecting Better for Better Vision" , "Connecting Better World" , "Connecting Business Need with IT" , "Connecting people" , "Creating value with Tech" , "Delivering Innovation" , "Digital Agent for your Business" , "Digitally Sure" , "Do More. Be More" , "Does Tech or Doesn’t Tech" , "Dream to the power of infinity" , "Empowering change empowering Tech" , "Empowering Tomorrow" , "Empowering your Business Need" , "Enabling the age of Tech" , "Enhance your Tech need" , "Enhancing experience with enhanced technology" , "Enhancing the simple" , "Enjoy the Spirit of Joy" , "Ensuring Futures" , "Ensuring miracles with passion" , "Evolving prudently" , "Expanding Technology reach" , "Expanding the experience of empowering" , "Experience Full of Ideas" , "Feel the Tech" , "Full of Tech Senses" , "Future begins here" , "Go Further for more" , "Going further for better" , "Good technology in the hands of good people" , "Good THings. Good technology" , "Great Tech Great Business" , "Helping Business With Tech" , "Ideas for imagination" , "Increasing the velocity of Tech" , "Infinite possibilities" , "Innovation for a business treat" , "Innovation in Every Step" , "Innovation is our partner" , "Innovation right here" , "Inspiring minds" , "Inspiring Tech Needs for Business" , "Inspiring technology" , "Invent Today, Do more Tomorrow" , "Inventing and making it happen" , "Inventing not for business, inventing for tomorrow" , "Inventing Tech for tomorrow" , "IT slogans" , "It’s brilliant to reach out" , "Leading the power of a network" , "Let innovation go further" , "Let your business be an innovation addict" , "Let’s make IT done" , "Make a new Better way" , "Make belief in building business" , "Make your Day Today" , "Making believe in possibilities" , "Making challenges possible" , "Making it make sense with honesty" , "making Things better" , "Mechanism of making history" , "More Tech more possibilities" , "More View, Tech View" , "Old fashioned Tech with a modern touch" , "One-stop solutions" , "Our Passion, Your Business" , "Our Technology, A New Passion" , "Perfect is Tech, Tech is true, True is our work" , "Possibilities meets Technology" , "Power of Next Generation" , "Powering future" , "Powering you for tomorrow" , "pushing limits with brilliance" , "Respect for Tech" , "Revolutionary Step for Revolutionary Business" , "Saving Tech for next" , "Serving and connecting with IT" , "Serving Information, Serving you" , "Serving IT to Served you" , "Serving simple information for complex connections" , "Serving technology better" , "Sharing Innovation for life" , "Sharing the virtual world" , "Simple is more Creative" , "Simplified your business" , "Software full of Performance" , "Strength be infinite" , "Take the World at new Level" , "Taking Tech to the new level" , "Taking technology forward with possibilities" , "Taking you to strength" , "Tech at work" , "Tech for Business Treat" , "Tech for tomorrow" , "Tech Freedom, inspire next" , "Tech is True" , "Tech need Simplified" , "Tech Soul for your Business" , "Tech which makes Sense" , "Tech without excuses" , "technology for pioneers" , "Technology made simple" , "Technology made with Trust" , "The business that makes sense" , "The chief of the smallest world" , "The essentials of modern Tech" , "The future is IT" , "The future of connections" , "The Future of Network" , "The goal of Tech" , "The Heart of your Tech need" , "The implementation of true Tech" , "The intellectual Tech" , "The internation generation is the information generation" , "The joy of Tech Spirit" , "The perfect digital agent" , "The Perfect Tech Experience" , "The potential for progress" , "The potentials of tomorrow" , "The power of potential" , "The power of thinking" , "The simplified technology" , "The software for the tech heartbeat" , "The soul of Tech" , "the source of revolution" , "The technology for the next vision" , "The technology works for Tomorrow" , "The ultimate possibility of future" , "The world of simple technology" , "Think different to be the best" , "Think outside the hexagon" , "Think small think different" , "Think tech, Choose us" , "Thinking for the essentials for the next level" , "Treat with technology" , "Values and intellect" , "Virtual WOrld for a Virtual need" , "Vision to Simplified You" , "When Tech meets empowerment" , "Working on a digital dream","You Think, We Did","YOur Partner For Innovations","Your Vision, Our Tech"]
let indexNumber = 0;
let taglineLen = 0;
let sloganText = '';

let showSlogan = () => {  
  taglineLen = (taglinesJson.length);            
  indexNumber = Math.floor((Math.random() * taglineLen));
  sloganText = taglinesJson[indexNumber];	
  $("#dvTagline").text(sloganText);
}
  
//Rendom - button click
$("#btnRandom").click(function(){    
    indexNumber = Math.floor((Math.random() * taglineLen));	
    sloganText = taglinesJson[indexNumber];		
    $("#dvTagline").text(sloganText);
    
    
}); 

//Previous - button click
$("#btnPrevious").click(function(){
    indexNumber -= 1;
    if (indexNumber < 0) indexNumber = taglineLen-1;
    sloganText = taglinesJson[indexNumber];		
    $("#dvTagline").text(sloganText);	
    
    
}); 

//Next - button click
$("#btnNext").click(function(){	
    indexNumber += 1;    
    if (indexNumber > taglineLen-1) indexNumber = 0;
    sloganText = taglinesJson[indexNumber];		
    $("#dvTagline").text(sloganText);    
}); 

//First - button click
$("#btnFirst").click(function(){
    indexNumber = 0;    
    sloganText = taglinesJson[indexNumber];		
    $("#dvTagline").text(sloganText);   
    
});

//First - button click
$("#btnLast").click(function(){	
    indexNumber = taglineLen-1;    
    sloganText = taglinesJson[indexNumber];		
    $("#dvTagline").text(sloganText);
});

//Copy - button click
$("#btnCopy").click(function(){	 
    
    var element = document.getElementById("dvTagline");
    var range, selection, worked;

    if (document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } 					
    else if (window.getSelection) {
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }

    try {
        document.execCommand("copy");        
        var oldTextOfCopyButton = $("#btnCopy").text();        
        $("#btnCopy").html("Copied &#128522;");

        setTimeout(function() {
            $("#btnCopy").html(oldTextOfCopyButton);
        }, 1000);
    }
    catch (err) {
        console.log("Unable to copy text");
    }
});

showSlogan();