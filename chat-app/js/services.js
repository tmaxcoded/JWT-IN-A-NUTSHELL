


var _userId = '';

let getAllUsers = () => {

    axios.get("https://localhost:44345/api/authentication/users")
     .then(res => {
        console.log("mressage sent with response", res)
        let {status,data} = res;
        if(status === 200){
            // store in local db
            mapUsers(data.result)
            let retrievedUserId = getIndividualClickedImages();
            
           
           
            
        }
     })
     .catch(err => {
         console.log("error from server", err)
     })
}


let appendRightMostChat = (user) => {
    let element = document.getElementById("msg_card_bd")
    let createJustifyContetStartDiv = document.createElement("div");
    let createImageContentMessageDiv = document.createElement("div");
    let createimagealone = document.createElement("img");

    let createmessagecontainerdiv= document.createElement("div");

    let createmessagecontainerdivinnerspn= document.createElement("span");

    createJustifyContetStartDiv.className = "d-flex justify-content-end mb-4";
    createImageContentMessageDiv.className = "img_cont_msg";
    createimagealone.className = "rounded-circle user_img_msg";
    createmessagecontainerdiv.className ="msg_cotainer_send";
    createmessagecontainerdivinnerspn.className ="msg_time_send";

    createimagealone.src = user.imgUrl
    createmessagecontainerdiv.innerHTML ="Hi Khalid i am good tnx how about you?"
    createmessagecontainerdivinnerspn.innerHTML ="8:40 AM, Today";

    element.appendChild(createJustifyContetStartDiv)
    createJustifyContetStartDiv.append(createmessagecontainerdiv,createImageContentMessageDiv)
    createmessagecontainerdiv.appendChild(createmessagecontainerdivinnerspn)
    createImageContentMessageDiv.appendChild(createimagealone)
    
}


let appendLeftmostChat = (user) => {
    let element = document.getElementById("msg_card_bd")
    let createJustifyContetStartDiv = document.createElement("div");
    let createImageContentMessageDiv = document.createElement("div");
    let createimagealone = document.createElement("img");

    let createmessagecontainerdiv= document.createElement("div");

    let createmessagecontainerdivinnerspn= document.createElement("span");

    createJustifyContetStartDiv.className = "d-flex justify-content-start mb-4";
    createImageContentMessageDiv.className = "img_cont_msg";
    createimagealone.className = "rounded-circle user_img_msg";
    createmessagecontainerdiv.className ="msg_cotainer";
    createmessagecontainerdivinnerspn.className ="msg_time";

    createimagealone.src = user.imgUrl
    createmessagecontainerdiv.innerHTML ="Hi, how are you samim?"
    createmessagecontainerdivinnerspn.innerHTML ="8:40 AM, Today";

    element.appendChild(createJustifyContetStartDiv)
    createJustifyContetStartDiv.append(createImageContentMessageDiv,createmessagecontainerdiv)
    createImageContentMessageDiv.appendChild(createimagealone)
    createmessagecontainerdiv.appendChild(createmessagecontainerdivinnerspn)
}

let appendHtml = (user) =>{
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
createUserInfoSpan.innerHTML =user.firstName;
createUserInfoSpan.className ="info-span";
creatImageDivs.className ="rounded-circle user_img";
creatImageDivs.id="id_user_img";
createOnlineUserInfoDiv.className ="online_icon";
createParagraphForUserInfo.innerHTML =`${user.firstName} is online`;

creatImageDivs.src = user.imgUrl;
creatImageDivs.setAttribute("user-id",user.id)
creatImageDivs.setAttribute("first-name",user.firstName)
creatImageDivs.setAttribute("user-image-url",user.imgUrl)


    element.appendChild(llist)
    llist.appendChild(createDflexDiv)
    createDflexDiv.append(createImageConentDiv,createUserInfoDiv)
    createImageConentDiv.append(creatImageDivs,createOnlineUserInfoDiv)
    createUserInfoDiv.append(createUserInfoSpan,createParagraphForUserInfo)
}

let mapUsers = (dataArray) => {
    dataArray.forEach(user => {
        console.log(user)
       appendHtml(user)
       appendLeftmostChat(user)
       appendRightMostChat(user)
    })
}


let getIndividualClickedImages = () => {

    //let _userId = '';
    // console.log(email,firstName,id)
    let allImages = document.querySelectorAll('#id_user_img')
          

    allImages.forEach(img => {
     console.log(img)
        img.addEventListener('click', (e)=> {
            e.preventDefault();
            //alert("you")
            //console.log(e.target.getAttribute("user-id")); whom-am-chatting-img
            document.querySelector("#whom-am-chatting > span").innerHTML = e.target.getAttribute("first-name")
            document.querySelector("#whom-am-chatting-img > img").src = e.target.getAttribute("user-image-url")
           // changeChatProfile.ine
            _userId = e.target.getAttribute("user-id")

        })
    })
    console.log('retrievedUserId',_userId);
    //return _userId;
}











   




