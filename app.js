
var prompt = require('prompt');

  prompt.start();

  prompt.get(['mmdate'], function (err, result) {
    
     let errorMsg = `Myanmar Date valid number are 1 to 15. မြန်မာပြက္ခဒိန်တွင် ရက်သည် ၁ မှ ၁၅ အထိသာရှိပါသည်။ မိမိထည့်သွင်းသောရက်မှာ  ဖြစ်နေပါသည်။`;

    // let value = result.mmdate;

    // console.log( result.mmdate);
     let value = result.mmdate;
    //  console.log( value);
     if(value.type ==! Number){
         console.log(errorMsg);
     }else{
     console.log('you typed ' + value);

     }
// let ppt = value;

// console.log(ppt);

// function Api()

// {

// if(ppt == 0 || ppt > 15)

// {

//     console.log(errorMsg);

// }
// else
// {

//     doApi();

// }

// }

function doApi()

{

    let getMmDay = ppt;

    let getday = getMmDay * 100; 

    let hourbytide = getMmDay * 25; 

    let result = getday - hourbytide; 

    let tidebyhour = result /100; 

    let Uphour = Math.floor(tidebyhour);

    let tidebyminute = result - Uphour * 100;

    let divd = tidebyminute / 25;

    let minute = divd * 15;
    
    let Downhour = Uphour + 6;
    
    class BASE_API  

    {

         Uphour;

         Downhour;

         minute;
    };

    console.log(BASE_API);
    
   };

// Api();

    

    // }

});
