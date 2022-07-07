let ppt = prompt(`ဒီနေ့မြန်မာလိုဘယ်နှရက်နေ့ပါလဲ?`);
let errorMsg = `Myanmar Date valid number are 1 to 15. မြန်မာပြက္ခဒိန်တွင် ရက်သည် ၁ မှ ၁၅ အထိသာရှိပါသည်။ မိမိထည့်သွင်းသောရက်မှာ ${ppt} ဖြစ်နေပါသည်။`;
let errorApiMsg = document.querySelector('.errMSG');
function Api(){
if(ppt == 0 || ppt > 15){
    alert(errorMsg);
    location.reload();
}else{
    doApi();
}
}
function doApi(){
    let getMmDay = ppt;
    let getday = getMmDay * 100; 
    let hourbytide = getMmDay * 25; 
    let result = getday - hourbytide; 
    let tidebyhour = result /100; 
    let Uphour = Math.floor(tidebyhour);
    let tidebyminute = result - Uphour * 100;
    let divd = tidebyminute / 25;
    let minute = divd * 15;
    
    let Downhour = Uphour + 12;
    
    let BASE_API = {
        getHour : Uphour,
        getDownHour : Downhour,
        getMinute : minute
    };
    console.log(BASE_API);
    
    // let BASE_API2 = `today is  ${getMmDay}th, Tide Up time is  ${Uphour}:${minute}PM and Tide Down time is ${Downhour}:${minute}PM`;
    
    // let BASE_API1 = `ဒီနေ့ကမြန်မာလို ${getMmDay} ရက်နေ့ဖြစ်ပြီး , ဒီ‌နေ့ ${Uphour}နာရီ${minute}မိနစ်မှာရေတက်ပါမည်။ရေကျမဲ့အချိန်ကတော့${Downhour}နာရီ${minute}မိနစ်ဖြစ်ပါတယ်။`;
    
   };

Api();




