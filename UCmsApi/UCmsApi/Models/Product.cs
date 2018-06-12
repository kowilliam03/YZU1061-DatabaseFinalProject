using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UCmsApi.Models
{
    public class Product
    {
        public int ID { get; set; }
        public string College { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public int  Price { get; set; }
        public string Desc { get; set; }
        public string Connect { get; set; }
        public string Owner { get; set; }
    }
}
