import fs from "fs";
import os from "os";

function logSystemInfo(){
    let info={
        cpu:os.cpus(),
        memory:os.totalmem(),
        platform:os.platform()

    };
    
    fs.appendFile("systemInfo.txt",JSON.stringify(info,null,2),(err)=>{
        if(err){
            return err;
        }
        return "system info. logged successfully";
    });


}
setInterval(logSystemInfo,3000);
setTimeout(()=>{
    clearInterval(logSystemInfo);
    return "system info. logging stopped";
},6000);