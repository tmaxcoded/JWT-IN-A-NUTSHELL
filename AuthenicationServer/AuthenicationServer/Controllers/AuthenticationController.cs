using AuthenicationServer.Business_logic.services;
using AuthenicationServer.Entities;
using AuthenicationServer.Entities.DTOS;
using AuthenicationServer.Entities.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthenicationServer.Controllers
{
    [Route("api/authentication")]
    [ApiController]
    public class AuthenticationController: ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;
        private readonly IAuthenticationManager _authManager;

        public AuthenticationController(IMapper mapper,
            UserManager<User> userManager,
            IAuthenticationManager authManager)
        {
            _mapper = mapper;
            _userManager = userManager;
            _authManager = authManager;
        }


        [HttpPost]
        
        public async Task<IActionResult> RegisterUser([FromBody] UserForRegistrationDto userForRegistration)
        {
            try
            {
                var user = _mapper.Map<User>(userForRegistration);
                var result = await _userManager.CreateAsync(user, userForRegistration.Password);
                if (!result.Succeeded)
                {
                    foreach (var error in result.Errors)
                    {
                        ModelState.TryAddModelError(error.Code, error.Description);
                    }
                    return BadRequest(ModelState);
                }
                //await _userManager.AddToRolesAsync(user, userForRegistration.Roles);
                return StatusCode(201);
            }
            catch (Exception ex)
            {

                return StatusCode(StatusCodes.Status500InternalServerError, new {status="500",message="internal server error" });
            }
            
            
        }

        [HttpPost("login")]
        public async Task<IActionResult> Authenticate([FromBody] UserForAuthenticationDto user)
        {
            try
            {
                if (!await _authManager.ValidateUser(user))
                {
                    return Unauthorized();
                }
                return Ok(new { statuscode = "200", message = "success", userId = await _authManager.ValidateUserByEmail(user), Token = await _authManager.CreateToken(), });
            }
            catch (Exception)
            {

                throw;
            }
        }

        [Authorize]
        [HttpPost("user")]

        public async Task<IActionResult> GetUserById([FromBody] GetUserByIdDto user)
        {
            try
            {
                var getUser = await _authManager.ValidateUserById(user);
                if (getUser == null)
                {
                    return Unauthorized();
                }
                return Ok(new { statuscode = "200", message = "success", result = getUser });
            }
            catch (Exception ex)
            {

                return StatusCode(StatusCodes.Status500InternalServerError, new { status = "500", message = "internal server error" });
            }
           
        }

    }
}
