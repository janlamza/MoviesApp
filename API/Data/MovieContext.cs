using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class MovieContext : DbContext
    {
        public MovieContext(DbContextOptions options) : base(options){}
        public DbSet<AppMovie> Movies { get; set;}
    }
}
