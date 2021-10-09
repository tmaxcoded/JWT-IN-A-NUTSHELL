using AuthenicationServer.Entities;
using AuthenicationServer.Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthenicationServer.Business_logic.services
{
    public interface IAuthenticationManager
    {
        Task<bool> ValidateUser(UserForAuthenticationDto userForAuth);

        Task<User> ValidateUserById(GetUserByIdDto userForAuth);

        Task<string> ValidateUserByEmail(UserForAuthenticationDto userForAuth);
        Task<string> CreateToken();

    }
}
