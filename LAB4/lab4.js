////////lab4 1-using constructor function ////////////////////////
// function Person(fullname, money,sleep_mood,health_Rate)
// {
//     this.fullname = fullname
//     this.money = money
//     this.sleep_mood = sleep_mood
//     this.health_Rate = health_Rate 
// }
// Person.prototype.Eat= function (meals) {
//     if(meals == 3)
//     {
//         this.health_Rate = 100;
//     }
//     else if(meals == 2)
//     {
//         this.health_Rate = 75;
//     }
//     else if(meals == 1)
//     {
//         this.health_Rate = 50;
//     }
//     return this.health_Rate;
//                                 }


//   Person.prototype.Sleep= function (hours) {
//     if(hours == 7){
//         this.sleep_mood='Happy'; 
//     }
//     else if(hours > 7){
//         this.sleep_mood='Lazy';
//     }
//     else if(hours < 7){
//         this.sleep_mood='tired';
//     }
//     return this.sleep_mood;
//   }

//   Person.prototype.Buy= function (items) {
//     for(let i=0;i<items;i++)
//            {
//             this.money = this.money-10;
//            }
//            return this.money;
//   }
       


/////// 2-using classes //////////////////////////
//     class Person
//     {
//       constructor (fullname, money,sleep_mood,health_Rate) {
//             this.fullname = fullname
//             this.money = money
//             this.sleep_mood = sleep_mood
//             this.health_Rate = health_Rate

//           }
        
//           Sleep(hours){
//             if(hours == 7){
//                 this.sleep_mood='Happy'; 
//             }
//             else if(hours > 7){
//                 this.sleep_mood='Lazy';
//             }
//             else if(hours < 7){
//                 this.sleep_mood='tired';
//             }
//             return this.sleep_mood;
//           }

//           Eat(meals) {
//             if(meals == 3)
//             {
//                 this.health_Rate = 100;
//             }
//             else if(meals == 2)
//             {
//                 this.health_Rate = 75;
//             }
//             else if(meals == 1)
//             {
//                 this.health_Rate = 50;
//             }
//             return this.health_Rate;
//           }

//           Buy(items){
//            for(let i=0;i<items;i++)
//            {
//             this.money = this.money-10;
//            }
//            return this.money;
           
//           }
    
//     }

// both function constructor and classes can be intiated and called with this way 'new keyword'
// const maro = new Person('maro',100,6,'Happy',75);

//////////////  3- Using Objects Linking to Other Objects (OLOO)//////////
// const Person = {
//     init(fullname, money,sleep_mood,health_Rate) {
//         this.fullname = fullname
//         this.money = money
//         this.sleep_mood = sleep_mood
//         this.health_Rate = health_Rate
//         this.Sleep = function (hours) {
//                 if(hours == 7){
//                     this.sleep_mood='Happy'; 
//                 }
//                 else if(hours > 7){
//                     this.sleep_mood='Lazy';
//                 }
//                 else if(hours < 7){
//                     this.sleep_mood='tired';
//                 }
//                 return this.sleep_mood;     }// end sleep

//         this.Eat= function (meals) {
//                 if(meals == 3)
//                 {
//                     this.health_Rate = 100;
//                 }
//                 else if(meals == 2)
//                 {
//                     this.health_Rate = 75;
//                 }
//                 else if(meals == 1)
//                 {
//                     this.health_Rate = 50;
//                 }
//                 return this.health_Rate;
//                                             }
//         this.Buy= function (items) {
//             for(let i=0;i<items;i++)
//                 {
//                     this.money = this.money-10;
//                 }
//                 return this.money;
//         }

//         return this
//     }
// }

// const maro = Object.create(Person).init('maro',100,6,'Happy',75);


//////////////// 4-using Factory Function ///////////////
function Person (fullname,money,sleep_mood,health_Rate)
{
    return{
        fullname,
        money,
        sleep_mood,
        health_Rate,
  

        Sleep(hours)
        {
            if(hours == 7){
                    sleep_mood='Happy'; 
                }
                else if(hours > 7){
                    sleep_mood='Lazy';
                }
                else if(hours < 7){
                    sleep_mood='tired';
                }
                return sleep_mood;
        },
        Eat(meals)
        {
            if(meals == 3)
                {
                    health_Rate = 100;
                }
                else if(meals == 2)
                {
                    health_Rate = 75;
                }
                else if(meals == 1)
                {
                    health_Rate = 50;
                }
                return health_Rate;
        },
        Buy(items)
        {
            for(let i=0;i<items;i++)
            {
                money = money-10;
            }
            return money;
        }
   }
}

const maro = Person('maro',100,6,'Happy',75);
///////////////////////////////////////////////////////// common /////
console.log(maro) // maro
console.log(maro.Eat(2));   
console.log(maro.Sleep(6));   
console.log(maro.Buy(2));   



















    