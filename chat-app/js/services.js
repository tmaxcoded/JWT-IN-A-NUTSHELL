


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


let createRoom = (formdata) => {

    axios.post("https://localhost:44386/api/chatroom/createroom",formdata)
     .then(res => {
        console.log("mressage sent with response", res)
        let {status,data} = res;
        if(status === 200){
            appendRoom(data.result)
            location.reload();
        }
     })
     .catch(err => {
         console.log("error from server", err)
     })
}


let sendChatMessage = (formdata) => {

    axios.post("https://localhost:44386/api/chatroom/createmessage",formdata)
     .then(res => {
        console.log("mressage sent with response", res)
        let {status,data} = res;
        if(status === 200){
           console.log(data.result)
           mapSingleMessages(data.result)
           $("#typed-message-id").val('');
        }
     })
     .catch(err => {
         console.log("error from server", err)
     })
}

let getRooms = (userId) => {

    axios.get(`https://localhost:44386/api/chatroom/getrooms/${userId}`)
     .then(res => {
        console.log("mressage sent with response", res)
        let {status,data} = res;
        if(status === 200){
           mapRooms(data.result)
           console.log(data.result);
        }
     })
     .catch(err => {
         console.log("error from server", err)
     })
}

let getRooms = () => {

    axios.get(`https://localhost:44386/api/chatroom/getrooms`)
     .then(res => {
        console.log("mressage sent with response", res)
        let {status,data} = res;
        if(status === 200){
           mapRooms(data.result)
           console.log(data.result);
        }
     })
     .catch(err => {
         console.log("error from server", err)
     })
}



let getChatRoom = (id) => {

    axios.get(`https://localhost:44386/api/chatroom/getChat/${id}`)
     .then(res => {
        //console.log("mressage sent with response", res)
        let {status,data} = res;
        if(status === 200){
            //mapRooms(data.result)
            console.log("get chat room service", data)
            document.querySelector("#whom-am-chatting > span").innerHTML = data.name + " " + "room";
            document.querySelector("#whom-am-chatting > p").innerText = data.messages.length + " " + "messages";
            document.querySelector("#whom-am-chatting-img > img").src = './img/25540.jpg';
            // console.log("returned data =>  ", data)
           $("#msg_card_bd").empty();
           //alert("ye...... am here!")
           console.log("data ==>", data)
        mapMessages(data.messages);
           
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


let appendCurrentChatChat = (user) => {
    console.log("yes it enters apped current chat chat ==>")
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

    createimagealone.src ='./img/25540.jpg'
    createmessagecontainerdiv.innerHTML =user.text
    createmessagecontainerdivinnerspn.innerText = addDate(new Date(user.timeStamp));

    element.appendChild(createJustifyContetStartDiv)
    createJustifyContetStartDiv.append(createmessagecontainerdiv,createImageContentMessageDiv)
    createmessagecontainerdiv.appendChild(createmessagecontainerdivinnerspn)
    createImageContentMessageDiv.appendChild(createimagealone)
    
}


let addDate = (date_format) => {
    let date  = date_format.getDate()+'/'+ date_format.getMonth()  +'/'+date_format.getFullYear() ;
    let time = date_format.getHours() + ":" + date_format.getMinutes() + ":" + date_format.getSeconds();

    return date + " " + time;
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




let appendRoom = (user) =>{
    console.log("user room returned", user)

let element = document.getElementById("action_menu_id")
let createIcon = document.createElement("i");
let llist = document.createElement("li");

llist.setAttribute("chat-room-id",user.id)
llist.id = "chat-room-id-list-" + user.id
llist.innerHTML =`${user.name}`;
element.appendChild(llist)
//llist.appendChild(createIcon)

}

let mapUsers = (dataArray) => {
    dataArray.forEach(user => {
        console.log(user)
       appendHtml(user)
       appendLeftmostChat(user)
       appendRightMostChat(user)
    })
}


let mapRooms = (dataArray) => {
    dataArray.forEach(user => {
        console.log(user)
        appendRoom(user)
        chatRoomClicked();
       
    })
}

let mapMessages = (dataArray) => {
    if(dataArray){
        dataArray.forEach(user => {
            console.log("messages ==> ", user)
            appendCurrentChatChat(user)
            //chatRoomClicked();
           
        })
    }

    console.log("nothing to map!!")
  
}

let mapSingleMessages = (message) => {
    
        console.log("single array ==>", message)
        appendCurrentChatChat(message)
        //chatRoomClicked();
       

}

let chatRoomClicked = () => {
    let allRooms = document.querySelectorAll("#action_menu_id > li")
    
    allRooms.forEach(img => {
        console.log(img)
           img.addEventListener('click', (e)=> {
               e.preventDefault();
               
               //alert(e.target.getAttribute("chat-room-id"))
               $("#direct-message-chatid").val(e.target.getAttribute("chat-room-id"));
               //console.log("value set for dom ==> ",  $("#direct-message-chatid").val())

               getChatRoom(e.target.getAttribute("chat-room-id"))
   
           })
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











   




