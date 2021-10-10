using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ChatEngineRebase.Models
{
    public class Chat
    {
        [Key]
        public Guid Id { get; set; }

        public string Name { get; set; }
        public ICollection<Message> Messages { get; set; } = new List<Message>();

        public ICollection<ChatUser> Users { get; set; } = new List<ChatUser>();

        public ChatType Type { get; set; }
    }
}
