

var connection = new signalR.HubConnectionBuilder().withUrl("/chat").build()

var _connectionId = ''

connection.on("recieveMessage", function(data){
  console.log(data)
})



var joinSgnalRChatRoom = function(roomName){
    url = `/Chat/JoinRoom/${_connectionId}/${roomName}`
    axios.post(url,null)
    .then(res => {
        console.log("connection established! ROMM JOINED!", res)
    })
    .catch(err => console.error("FAILED TO JOIN ROOM => ",err))
}

connection.start()
.then(function(){
  connection.invoke('getConnectionId').then(function(connectionId){
    _connectionId = connectionId
    joinSgnalRChatRoom("Girls")
  })
}).catch(function(err){
    console.log(err)
})