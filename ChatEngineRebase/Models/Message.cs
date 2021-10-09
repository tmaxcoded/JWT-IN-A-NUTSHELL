using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ChatEngineRebase.Models
{
    public class Message
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }

        public string Text { get; set; }

        public DateTime TimeStamp { get; set; }
    }
}
