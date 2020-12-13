using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class MovieDto
    {
        [Required]
        public string MovieName { get; set; }
        public string Year { get; set; }
        public int runtime { get; set; }
        [Required]
        public string genres { get; set; }
        public string summary { get; set; }
        public string image { get; set; }
       [Required]
        public string torrent { get; set; }
    }
}
