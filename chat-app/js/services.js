
let appendHtml = () =>{
    element.appendChild(llist)
}



let mapUsers = (dataArray) => {
   
    dataArray.map(user => {
        let {email,firstName,lastName,id,phoneNumber,userName}= user;
        console.log(email,firstName,id)
        
       appendHtml()
       // appendHtmlNew();
       
        
            
    })

}


let getAllUsers = () => {

    axios.get("https://localhost:44345/api/authentication/users")
     .then(res => {
        console.log("mressage sent with response", res)
        let {status,data} = res;
        if(status === 200){
            // store in local db
            mapUsers(data.result)
            
            console.log(email,firstName,id)
            
            
        }
     })
     .catch(err => {
         console.log("error from server", err)
     })
}



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
createUserInfoSpan.className ="info-span";
creatImageDivs.className ="rounded-circle user_img";
createOnlineUserInfoDiv.className ="online_icon";

creatImageDivs.src = "https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg";





// let appendHtml = () => {
    
//     let element = document.getElementById("ui-list")
//     let elementchild = document.getElementById("img_cont_id")

//     element.appendChild(LIElement())
//     .appendChild(DivElementWithDFlexAtrributes())
//     .append(DivElementWithImag_contAtrributes(),DivElementWithUserInfoAtrributes())
//     .appendChild(ImageElementWithAtrributes())

// }

// let appendHtmlNew = (elementchild) => {
    
//     elementchild.appendChild(ImageElementWithAtrributes())

//     console.log("yaya", elementchild);
// }

// let LIElement = () => {
//     return document.createElement("li")
// } 

// let DivElementWithDFlexAtrributes = () => {
//     divElement = document.createElement("div");

//     divElement.className="d-flex bd-highlight"

//     divElement.id = "d-flex-id"

    

//     return divElement;
    
// } 


// let DivElementWithImag_contAtrributes = () => {
//     divElement = document.createElement("div");

//     divElement.className="img_cont"
//     divElement.id ="img_cont_id"
   
   

//     return divElement;
    
// } 


// let DivElementWithUserInfoAtrributes = () => {
//     divElement = document.createElement("div");

//     divElement.className="user_info"
   
   

//     return divElement;
    
// } 

// let UserInformationSpan = () => {
//     divElement = document.createElement("span");

//     divElement.innerText="kunle"
   
   

//     return divElement;
// }

// let ImageElementWithAtrributes = () => {
//     divElement = document.createElement("img");

//     divElement.className="rounded-circle user_img"
//     divElement.src ="https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg"


//     divElement
//     return divElement;
    
// } 

// let  SpanElementWithAtrributes = () => {
//     divElement = document.createElement("span");

//     divElement.className="online_icon"

//     return divElement;
    
// } 



