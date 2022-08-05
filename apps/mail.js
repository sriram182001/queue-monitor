const sparkPost=require('sparkpost');
const recipients=require('./mailrecipients.js')

module.exports=async(sub,text)=>{
   const client=new sparkPost(`${process.env.API_KEY}`);
   const res=await client.transmissions.send({
    content:{
       from:'sriram.r@mailer.noforms.io',
       subject:sub,
       text:text
    },
    recipients:recipients
})
//.then((res)=>console.log(res)).catch((err)=>console.log(err)) 
return res;
}

