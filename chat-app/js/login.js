var userId = "";
(function(){


   $(".form-signin").submit((e)=>{
    
      e.preventDefault();
      console.log(e.target)
      let formData = new FormData(e.target)
      loginservice(formData);
   })


   let loginservice = (formdata) =>{
     axios.post("https://localhost:44345/api/authentication/login",formdata)
     .then(res => {
        console.log("mressage sent with response", res)
        let {status,data} = res;
        if(status === 200){
            // store in local db
            console.log(JSON.stringify(data))
            userId = data.userId;
            storeUserCredentialsLocaly(JSON.stringify(data),"saved")
            //window.location.replace("index.html");
            window.location.href = "index.html"
            
        }
     })
     .catch(err => {
         console.log("error from server", err)
     })
   }


   let storeUserCredentialsLocaly = (data,userid) => {
       localStorage.setItem(userid,data)
   }
}())