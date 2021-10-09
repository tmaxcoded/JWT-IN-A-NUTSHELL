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

        public ICollection<Message> Messages { get; set; } = new List<Message>();

        public ICollection<User> Users { get; set; } = new List<User>();

        public ChatType Type { get; set; }
    }
}
