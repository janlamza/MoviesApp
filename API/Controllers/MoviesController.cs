using API.Data;
using API.DTOs;
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


        [HttpPost("addMovie")]
        public async Task<ActionResult> AddMovie(MovieDto movieDto)
        {
            bool rez = await _movieContext.Movies.AnyAsync(x => x.MovieName == movieDto.MovieName);
            if (rez) return BadRequest("Movie already exists");

            var movie = new AppMovie
            {
                MovieName = movieDto.MovieName,
                Year = movieDto.Year,
                runtime = movieDto.runtime,
                genres = movieDto.genres,
                summary = movieDto.summary,
                image = movieDto.image,
                torrent = movieDto.torrent
            };
            _movieContext.Movies.Add(movie);
            var result = await _movieContext.SaveChangesAsync();

            if (result > 0) 
                return Ok("Movie saved to database");
            else 
                return BadRequest("Movie not saved to database");
        }


        [HttpPut("edit")]
        public async Task<ActionResult> EditMovie(AppMovie appMovie)
        {

            _movieContext.Entry(appMovie).State = EntityState.Modified;
            if (await _movieContext.SaveChangesAsync() > 0) return Ok();
            return BadRequest("Failed to update Movie!");
        }

        [HttpDelete("delete")]
        public async Task<ActionResult> DeleteMovie(MovieDeleteDTO deleteDTO)
        {
            AppMovie movie = await _movieContext.Movies.FindAsync(deleteDTO.id);
            if (movie == null) return NotFound("movie not found");
            _movieContext.Remove(movie);
            if (await _movieContext.SaveChangesAsync() > 0) return Ok();
            return BadRequest("Error deleting object");
        }

    }
}
