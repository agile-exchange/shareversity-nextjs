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
         "email":"princyverma589@gmail.com",
         "name":"Simple-service-Bot"
      }
    //   ,
    //   "reply_to":{
    //      "email":"sam.smith@example.com",
    //      "name":"Sam Smith"
    //   }
    };
    
         var axios = require("axios").default;
         
         var options = {
         method: 'POST',
         url: 'https://api.sendgrid.com/v3/mail/send',
         headers: {Authorization: 'Bearer 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',
         // headers: {Authorization: 'Bearer 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',

         
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

   // console.log("email: " + params.email);
   // console.log("decodeURIComponent " + decodeURIComponent(params.email));
    const result = await applyNow(decodeURIComponent(params.email));

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