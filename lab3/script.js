/////////////////////////////// part 1 //////////////////////////
function fun1() 
{  
        var username= prompt ("please enter your username");
        var password= prompt ("please enter your Password");
        if (username == 'admin' && password == '421$$')
        {
            alert('Welcome login success !')
        }
        else
        {
            if( username !='admin')
            {
                alert('Incorrect Username');
            }
            else if(password !='421$$')
            {
                alert('Incorrect Password');
            }
        }   
}  

    function fun2()
    {
        var result;
        var num1= parseInt(prompt ("please enter first number")) ;
        var op= prompt ("please enter the operation");
        var num2= parseInt(prompt ("please enter second number"));
        
        switch(op)
        {
            case '+':
             result= num1 + num2;
             alert(`result is : ${result}`);
             break; 
             case '-':
             result= num1 - num2;
             alert(`result is : ${result}`);
             break; 
             case '*':
             result= num1 * num2;
             alert(`result is : ${result}`);
             break; 
             case '/':
             result= num1 / num2;
             alert(`result is : ${result}`);
             break;
             case '%':
             result= num1 % num2;
             alert(`result is : ${result}`);
             break;       
        }
    }

    ////////////////////////Part 2 ////////////////////////////

    function fun3()
    {
        var mysum =0;
        var avg = 0;
        var nums=parseInt(prompt ("How many numbers you want to enter ?")) ;
        const numarr =new Array();
        for (var i =0 ;i<nums ; i++)
        {
            var value =parseInt(prompt('please enter values !'));
            numarr.push(value);
        }
        for (var i =0 ;i<numarr.length ; i++)
        {
            mysum+=numarr[i];
            avg = mysum/nums;
        }
        alert('the sum of the values you entered is '+mysum);
        alert('the average of the values you entered is '+avg);   
    }

    function fun4()
    {   var contsobj=new Object();
        var contactsarr =new Array();
        do{
            var operation=prompt ("please enter an operation");
            if (operation == 'add')
            {
                var contact=prompt ("please enter contact name");
                var phone=prompt ("please enter phone number");
               
                contsobj.cname =contact;
                contsobj.phone= phone;         
            }//end add
            contactsarr.push(contsobj);
            console.log(contactsarr);

            if (operation == 'search')
            {
                var search=prompt ("please enter what to search about");
                searchmyarr(search);
                function searchmyarr(input)
                {
                    for(var i=0;i<contactsarr.length;i++)
                    {
                        if(input == contactsarr[i].cname || input == contactsarr[i].phone)
                        {
                            alert('contact found!');
                            alert('contact data -> name is '+contactsarr[i].cname +' and phone is '+contactsarr[i].phone);
                        }
                        else
                        {
                            alert('sorry contact not found!');
                        }
                    }
                }
            } // end search 
        }while(operation !='')            
    }


///////////////// part 3 //////////////////////


    function fun5()
    {
        //Object predefined methods
        let person = {
            calacage:function(age)
            {
                return this.age *2 ;
            }
        }
        person1 = {
            pname:'maro',
            age: 25,
            phone : 3256485643
        };
        person3 = {
            pname:'heba',
            address:'25 1st street - new york'
        };

        let person2 = Object.create(person1); 
        console.log(person2);
        alert('1- create() method created a prototype copy of the main object check console')
        
        let person4= Object.assign(person3,person1); // to target from source
        console.log(person4);
         alert('2- assign() method takes props and data from source object and put it in target obj check console')

      
       console.log(person.calacage.call(person1));
       alert('3- call() method access some object proberty and use it with other object check console');

       console.log(person.calacage.apply(person1));
       alert('4- apply() method access some object proberty and use it with other object same as call method check console');

          var age =person.calacage.bind(person1);
          console.log(age());
          alert('5- bind() method, with it an object can borrow a method from another object. check console');

        let frozenobj =Object.freeze(person1);
        frozenobj.pname='sayed'; // will not assigned
        console.log(frozenobj);
        alert('6- With the freeze() method, freezes an object that prevents new properties from being added to it check console');


        console.log(Object.is('25', 25));   // false
        alert('7- is() method, compare two values and return true or false check console');

        console.log(Object.entries(person1));
        alert('8- entries() method, converting an object data to and associative array check console');


        console.log(Object.hasOwn(person1, 'age')); // true
        alert('9- hasOwn() method,if the object has the property or not check console');

        console.log(Object.getOwnPropertyNames(person1)); //
        alert('10- getOwnPropertyNames() method,the method displays the obj prop as array check console');



    }
    function fun6()
    {
        // Array predefined methods
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        const ages = [32, 33, 16, 40];
        function checkAge(age) {
        return age > 18;
        }
       
        const finalarr = fruits.concat(ages);
        console.log(finalarr);
        alert('1- concat() method,gathering two array in one array check console');
       
        console.log(ages.every(checkAge));
        alert('2- every() method, checks if all the array elments passes the the function given check console');
  
        const someof = fruits.slice(1, 4);
        console.log(someof); 
        alert('3- slice() method,take parts from array according to given start and end index values check console');

        const result1 = ages.filter(checkAge);
        console.log(result1);
        alert('4- filter() method,fiters the array elements to qualify the given function  check console');

        console.log(ages.find(checkAge));
        alert('5- find() method,finds the element in array according to the given function check console');

        console.log(ages.findIndex(checkAge));
        alert('6- findIndex() method,finds the index of the element in array according to the given function check console');

        console.log(fruits.includes("Mango")); 
        alert('7- includes() method,checks if the element in the array or not check console');

        let result = Array.isArray(fruits); 
        console.log(result);
        alert('8- isArray() method,checks if given object is  array or not check console');

        fruits.push("Kiwi");
        console.log(fruits); 
        alert('9- push() method,adding new element to array check console');

        fruits.pop("Kiwi");
        console.log(fruits); 
        alert('10- pop() method,removing  element from array check console');

        console.log(fruits.fill("NewFruit")); 
        alert('11- fill() method, replaces all the array elements with the given value check console');

    }



    function fun7()
    {
        //Write a nested function and explain the closure -> lexical environment.

            function parent() 
            {
                let x = 50;
                console.log('from parent '+x); // 50
                function child() 
                {
                    console.log(x);//can't access lexical declaration 'x' before initialization
                    //let x = 30 ; 
                    console.log('from child '+x);
                    alert("check if it's declared in the child scope then result is 30 ,if not declared here then check if the parent has the value of x if so keep it 50")
               
                }
               
                child();
            }
            parent();
                    

    }