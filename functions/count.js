module.exports=async (obj)=>{
    return {'completed':await obj.getCompletedCount(),
    'failed':await obj.getFailedCount(),
    'waiting':await obj.getWaitingCount(),
    'delayed':await obj.getDelayedCount(),
    }}