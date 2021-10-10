using ChatEngineRebase.Business.Persistence;
using ChatEngineRebase.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatEngineRebase.Controllers
{
    [ApiController]
    [Route("api/chatroom")]
    public class ChatRoomController: ControllerBase
    {
        private readonly ChatEngineRepositoryContext _context;

        public ChatRoomController(ChatEngineRepositoryContext context)
        {
            _context = context;
        }

        [HttpPost("createroom")]
        public IActionResult CreateRoom([FromForm] Room room)
        {
            _context.Chat.Add(new Chat
            {

            });
            return Ok();
        }
    }
}
