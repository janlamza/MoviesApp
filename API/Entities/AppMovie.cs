using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class AppMovie
    {
        
        public int Id { get; set; }
        public string MovieName { get; set; }
        public string Year { get; set; }
        public int runtime { get; set; }
        public string genres { get; set; }
        public string summary { get; set; }
        public string image { get; set; }
        public string torrent { get; set; }

    }
}
