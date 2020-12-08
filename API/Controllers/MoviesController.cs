using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MoviesController : Controller
    {
        private readonly MovieContext _movieContext;
        public MoviesController(MovieContext movieContext)
        {
            _movieContext = movieContext;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppMovie>>> GetMovies()
        {
            return await _movieContext.Movies.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<AppMovie>> GetMovies(int id)
        {
            return await _movieContext.Movies.FindAsync(id);
        }

    }
}
