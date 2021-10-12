using ChatEngineRebase.Business.Persistence;
using ChatEngineRebase.Hubs;
using ChatEngineRebase.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatEngineRebase.Controllers
{
    [Route("[controller]")]
    public class ChatController: Controller
    {
        private readonly IHubContext<ChatHub> _hubContext;

        public ChatController(IHubContext<ChatHub> hubContext)
        {
            _hubContext = hubContext;
        }

        [HttpPost("[action]/[connectionId]/[roomName]")]
        public async Task<IActionResult> JoinRoom(string connectionId, string roomName )
        {
            await _hubContext.Groups.AddToGroupAsync(connectionId, roomName);
            return Ok();
        }



        [HttpPost("[action]/[connectionId]/[roomName]")]
        public async Task<IActionResult> LeaveRoom(string connectionId, string roomName)
        {
            await _hubContext.Groups.RemoveFromGroupAsync(connectionId, roomName);
            return Ok();
        }

        [HttpPost("[action]/[connectionId]/[roomName]")]
        public async Task<IActionResult> SendMessage(string message, string roomName,string chatId, [FromServices] ChatEngineRepositoryContext _context)
        {
            var _message = new Message()
            {
                ChatId = new Guid(chatId),
                Text = message,
                TimeStamp = DateTime.Now,
                Name = " Deualt"
            };

            _context.Message.Add(_message);

            await _context.SaveChangesAsync();
            await _hubContext.Clients.Group(roomName).SendAsync("recieveMessage",_message);
            return Ok();
        }
    }
}
