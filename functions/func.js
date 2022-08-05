const arr=require('../jobs.js');
const Bull=require('bull');
const cnt=require('./count.js');
const slack=require('../apps/slack.js');
const mail=require('../apps/mail.js')

const a=['failed','waiting','delayed']
module.exports=async ()=>{
    try{
    for(let i=0;i<arr.length;i++)
        {
            const res=await cnt(new Bull(`${arr[i].name}`,`redis://127.0.0.1:${arr[i].port}`));
            console.log(res);
            for(const j of a)
            {
                if(res[j]>300)
                {
                    console.log(await slack(`${arr[i].name} is critical, ${j} is over 300,${j}count:${res.failed}`));
                    console.log(await mail(`${arr[i].name} is critical`,`${j} is over 300,${j}count:${res.failed}`))
                }
            }
            
        }  
    } 
    catch (error) {
            console.log(error)
        }
    
}

