using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using UCmsApi.Data;
using UCmsApi.Models;

namespace UCmsApi.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly UCmsApiContext _context;
        public UsersController(UCmsApiContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] User user)
        {
            var username = _context.Users.FirstOrDefault(x => x.Username == user.Username);
            if (username != null)
                return Json("userExists");
            else
            {
                _context.Users.Add(user);
                _context.SaveChanges();

                return Json("ok");
            }
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] User user)
        {
            var username = _context.Users.FirstOrDefault(x => x.Username == user.Username && x.Password == user.Password);
            if (username != null)
            {
                return Json(user.Username);

            }
            else
            {
                return Json("invalidLogin");
            }
        }
    }

    //POST api/users/register

}