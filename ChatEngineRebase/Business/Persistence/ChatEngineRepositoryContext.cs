using ChatEngineRebase.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChatEngineRebase.Business.Persistence
{
    public class ChatEngineRepositoryContext:DbContext
    {
        public ChatEngineRepositoryContext(DbContextOptions<ChatEngineRepositoryContext> context): base(context)
        {

        }


        public DbSet<Message> Message { get; set; }
        public DbSet<Chat> Chat { get; set; }

        public DbSet<User> User { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }
    }
}
