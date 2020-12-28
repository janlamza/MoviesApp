using API.DTOs;
using API.Entities;
using API.Interfaces;
using API.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    
    public class AccountController : Controller
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<AppRole> _roleManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly ITokenService _tokenService;

        public AccountController(UserManager<AppUser> userManager,RoleManager<AppRole> roleManager, SignInManager<AppUser> signInManager, ITokenService tokenService)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _signInManager = signInManager;
            _tokenService = tokenService;
        }


        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            if (await userExists(registerDto.Username)) return BadRequest("Username is taken!");

            AppUser user = new AppUser
            {
                UserName = registerDto.Username,
            };

            var result = await _userManager.CreateAsync(user, registerDto.password);
            if (!result.Succeeded) return BadRequest(result.Errors);
            var roleResult =await _userManager.AddToRoleAsync(user, "Member");
            if (!roleResult.Succeeded) return BadRequest(roleResult.Errors);

            return new UserDto
            {
                Username = user.UserName,
                Token = await _tokenService.CreateToken(user),
            };
        }


        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {

            
            AppUser user = await _userManager.Users.SingleOrDefaultAsync(x => x.UserName == loginDto.username);
            if (user == null) return BadRequest("Invalid username");
            
            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.password, false);
            if (!result.Succeeded) return Unauthorized();
            
            return new UserDto
            {
                Username = user.UserName,
                Token = await _tokenService.CreateToken(user)
                
            };

        }

        public async Task<bool> userExists(string username)
        {
            return await _userManager.Users.AnyAsync(x => x.UserName == username);
        }
    
    }
}
