async function applyNow(email) {

    const m2={
      "personalizations":[
         {
            "to":[
               {
                  "email":email,
                  "name":"Meha Verma"
               }
            ],
            "subject":"Student Profile Shared at Shareversity"
         }
      ],
      "content":[
         {
            "type":"text/plain",
            "value":" <p> Hello, </p>  <p> A new profile has been shared to you Job Post. </p>  <p> Thanks, Shareversity Team! </p>"
         }
      ],
      "from":{
         "email":process.env.SEND_GRID_FROM_EMAIL,
         "name":"Sharversity-Bot"
      }
    };
    
         var axios = require("axios").default;
         
         var options = {
         method: 'POST',
         url: 'https://api.sendgrid.com/v3/mail/send',
         headers: {Authorization: 'Bearer ' + process.env.SEND_GRID_API_KEY,
         
         'Content-Type': 'application/json'},
         data: JSON.stringify(m2)
         };
      
         return axios.request(options).then(function (response) {
         console.log("response: " + response.status);
         return response;
      }).catch(function (error) {
      console.error(error);
      });
};


export default async function Apply({params}) {
   let result = {};
   if(params.email.length!=0 && process.env.SEND_GRID_API_KEY.length>0){
     result = await applyNow(decodeURIComponent(params.email));
   }

    console.log("result response: " + result.status);

    if(result.status=="202"){
        return (
            <>
                {/* <main className={styles.main}> */}
                  <p>Profile shared successfully!</p>
                {/* </main> */}
            </>
          );

    } else{
        return (
            <>
                {/* <main className={styles.main}> */}
                  <p>Profile not shared</p>
                {/* </main> */}
            </>
          );
    }
   
}