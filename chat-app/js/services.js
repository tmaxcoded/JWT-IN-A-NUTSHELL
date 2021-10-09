

let element = document.getElementById("ui-list")
let llist = document.createElement("li");
let createDflexDiv = document.createElement("div");
let createImageConentDiv = document.createElement("div");
let createUserInfoDiv = document.createElement("div");
let createUserInfoSpan = document.createElement("span");
let creatImageDivs = document.createElement("img");
let createOnlineUserInfoDiv = document.createElement("span");
let createParagraphForUserInfo = document.createElement("p");

createDflexDiv.className = "d-flex bd-highlight";
createImageConentDiv.className = "img_cont";
createUserInfoDiv.className = "user_info";
createUserInfoSpan.innerHTML ="Sami Rafi";
createUserInfoSpan.className ="info-span";
creatImageDivs.className ="rounded-circle user_img";
createOnlineUserInfoDiv.className ="online_icon";
createParagraphForUserInfo.innerHTML ="Sami is online"

creatImageDivs.src = "https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg";


let getAllUsers = () => {

    axios.get("https://localhost:44345/api/authentication/users")
     .then(res => {
        console.log("mressage sent with response", res)
        let {status,data} = res;
        if(status === 200){
            // store in local db
            mapUsers(data.result)
            
           // console.log(email,firstName,id)
            
            
        }
     })
     .catch(err => {
         console.log("error from server", err)
     })
}



let mapUsers = (dataArray) => {
    dataArray.forEach(user => {
       appendHtml()
    })
}


let appendHtml = () =>{
    element.appendChild(llist)
    llist.appendChild(createDflexDiv)
    createDflexDiv.append(createImageConentDiv,createUserInfoDiv)
    createImageConentDiv.append(creatImageDivs,createOnlineUserInfoDiv)
    createUserInfoDiv.append(createUserInfoSpan,createParagraphForUserInfo)
}



   




