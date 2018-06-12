using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UCmsApi.Data;
using UCmsApi.Models;

namespace UCmsApi.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private readonly UCmsApiContext _context;
        public ProductController(UCmsApiContext context)
        {
            _context = context;
        }

        public IActionResult Get()
        {
            List<Product> product = _context.Product.ToList();
            return Json(product);
        }

        [HttpGet("usercollege/{college}")]
        public IActionResult Get(string college)
        {
            List<Product> products = _context.Product.ToList().FindAll(x => x.College.Contains(college));

            if (products == null)
            {
                return Json("NoUsedBook");
            }
            return Json(products);
        }

        [HttpGet("user/{owner}")]
        public IActionResult UserDetail(string owner)
        {
            List<Product> products = _context.Product.ToList().FindAll(x => x.Owner == owner);

            if (products == null)
            {
                return Json("NoBook");
            }
            return Json(products);
        }

        [HttpPost("add")]
        public IActionResult Add([FromBody] Product product)
        {
            int count = _context.Product.Count() + 1;
            product.ID = count;
            _context.Product.Add(product);
            _context.SaveChanges();

            return Json("ok");

        }

        [HttpGet("find/{target}")]
        public IActionResult Find(string target)
        {
            List<Product> products = _context.Product.ToList().FindAll(x => x.Title.Contains(target));

            if (products == null)
            {
                return Json("NoUsedBook");
            }
            return Json(products);

        }


        [HttpGet("edit/{id}")]
        public IActionResult Edit(int id)
        {
            List<Product> product = _context.Product.ToList().FindAll(x => x.ID == id);

            if (product == null)
            {
                return Json("ProductNotFound");
            }
            return Json(product);   
        }

        [HttpDelete("delete/{title}/{owner}")]
        public IActionResult Delete(string title,string owner)
        {
            Product product = _context.Product.SingleOrDefault(x => x.Title == title && x.Owner == owner);
            _context.Remove(product);
            _context.SaveChanges();

            return Json("ok");
        }
    }
}