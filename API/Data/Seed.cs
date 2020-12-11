using API.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace API.Data
{
    public class Seed
    {
        public static async Task SeedMovies(MovieContext context)
        {
            if (await context.Movies.AnyAsync()) return;

            var moviesData = await System.IO.File.ReadAllTextAsync("Data/MoviesSeedData.json");
            var movies = JsonSerializer.Deserialize<List<AppMovie>>(moviesData);
            foreach(var movie in movies)
            {
                context.Movies.Add(movie);
            }
            await context.SaveChangesAsync();
        }
    }
}
