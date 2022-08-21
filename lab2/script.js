function fun1() 
{  
    do{
        var age= prompt ("please enter your age");
        if (isNaN(age))
        {
            alert('Please Enter Valid Number')
        }
        else
        {
            if( age >= 1 && age <= 10)
            {
                alert('You are Child');
            }
            else if( age >= 11 && age <= 18)
            {
                alert('You are Teenager');
            }
            else if( age >= 19 && age <= 50)
            {
                alert('You are grown up');
            }
            else if( age > 50)
            {
                alert('You are Old');
            }
        }
             
     }while(age!==null)

   
}  

    function fun2()
    {
        var word= prompt ("please enter a string");
        const vowels =['a','o','e','i','u'];
        const wordarr = word.split(''); // covert the word to array
        const mycount= new Array(); // to count the vowels in the string
       
        for(let i =0 ; i< wordarr.length ; i++)
        {
            if(vowels.includes(wordarr[i])) // check if the character in the vowels array
            {
                mycount.push(wordarr[i]) // add it to count array
            }
        }
        alert(`vowels count is: ${mycount.length}`);


    }


    function fun3()
    {
        var time=parseInt(prompt ("please enter a time hour")) ;

        if(time == 0 || time == 24)
        {
            alert(`the time is: 12 AM`);
        }
        else if(time > 0 && time <12){
            alert(`the time is: ${time} AM`);
        }
        else if (time >12 && time<24) 
        {
            time = time%12 ;
            alert(`the time is: ${time} PM`);
        }
        if(time == 12)
        alert(`the time is: ${time} PM`);
        
    }