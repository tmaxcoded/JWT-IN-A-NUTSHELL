using ChatEngineRebase.Business.Persistence;
using ChatEngineRebase.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatEngineRebase.Controllers
{
    [ApiController]
    [Route("api/chatroom")]
    [Produces("application/json")]
    public class ChatRoomController: ControllerBase
    {
        private readonly ChatEngineRepositoryContext _context;

        public ChatRoomController(ChatEngineRepositoryContext context)
        {
            _context = context;
        }


        [HttpPost("createroom")]
        public async Task<IActionResult> CreateRoom([FromForm] Room room)
        {
            var newRomm = new Chat
            {
                Name = room.RoomName,
                Type = ChatType.Room
            };
            newRomm.Users.Add(new ChatUser()
            {
                UserId = new Guid(room.UserId)
            }) ;
            _context.Chat.Add(newRomm);

            await _context.SaveChangesAsync();
            return Ok(new { status ="success", message="room created!", result=newRomm });
        }

        [HttpGet("getChat/{id}")]
        public async Task<IActionResult> GetChat(string id)
        {
            try
            {
                var getId = new Guid(id.ToUpper());
                var data = await _context.Chat.Include(x => x.Messages)
                    .FirstOrDefaultAsync(x => x.Id.Equals(getId));


                return Ok(data);
            }
            catch (Exception ex)
            {

                throw;
            }
           
        }



        [HttpGet("joinroom/{chatId}/{userId}")]
        public async Task<IActionResult> joinroom(string chatId, string userId)
        {
            try
            {
                var chatuser = new ChatUser()
                {
                    ChatId = new Guid(chatId),
                    UserId = new Guid(userId)
                };

                _context.ChatUser.Add(chatuser);
                await _context.SaveChangesAsync();

                return RedirectToAction("GetChat", new { id = chatId });
            }
            catch (Exception ex)
            {

                throw;
            }

        }

        [HttpPost("createmessage")]
        public async Task<IActionResult> GetChat([FromForm]messageVm messagemodel)
        {
            var _message = new Message()
            {
                ChatId = new Guid(messagemodel.chatid),
                Text = messagemodel.message,
                TimeStamp = DateTime.Now,
                Name =" Deualt"
            };

            _context.Message.Add(_message);

            await _context.SaveChangesAsync();

            return Ok(new { status = "success", message = "room created!", result = _message });
        }



        [HttpGet("getrooms/{userId}")]
        public async Task<IActionResult> GetRooms(string userId)
        {

            if (String.IsNullOrEmpty(userId))
            {
                return Ok(new { status = "success", message = "room created!", result = String.Empty});
            }
            var chats = await _context
                .ChatUser
                .Include(x => x.Chat)
                .Where(x => x.UserId == new Guid(userId))
                .Select(x => x.Chat)
                .ToListAsync();

            //await _context.SaveChangesAsync();
            return Ok(new { status = "success", message = "room created!", result = chats });
        }

        [HttpGet("getrooms")]
        public async Task<IActionResult> GetRooms()
        {

           
            var chats = await _context.Chat.ToListAsync();                

            
            return Ok(new { status = "success", message = "room created!", result = chats });
        }
    }
}
