let errorMsg = {
    msg : "error",
    msg_content : `Myanmar Date valid number are 1 to 15. မြန်မာပြက္ခဒိန်တွင် ရက်သည် ၁ မှ ၁၅ အထိသာရှိပါသည်။ မိမိထည့်သွင်းသောရက်မှာ  ဖြစ်နေပါသည်။`,
};


let Tide = function (mmd){
    return new Promise( (resolve,reject)=>{
        let exp = mmd == 0 || mmd > 15;
        if(!exp) resolve(doApi(mmd))
        else reject(errorMsg)
    })
}

function doApi(mmd = 2){
    var Uphour = Math.floor(((mmd * 100) - (mmd * 25)) /100);
    var minute = (((mmd * 100) - (mmd * 25)) - Uphour * 100) / 25 * 15;
    var Downhour = Uphour + 6;
    let BASE_API  = {
        Uphour,
        minute,
       Downhour
   }};

module.exports  = Tide;