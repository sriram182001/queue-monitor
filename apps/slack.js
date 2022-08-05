const Axios=require('axios');
const channels=require('./slackrecipients')

module.exports=async (name)=>{
  try{
  ret=[]
  const url = 'https://slack.com/api/chat.postMessage';
  for(const i of channels)
  {
    const res = await Axios.post(url, {
      channel:i,
      text:name
    }, { headers: { authorization: `Bearer ${process.env.TOKEN}` } });
    ret.push(res.data)
  }
  return ret
  }
  catch(err){
   return err
  }
}
