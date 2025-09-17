using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using api.Models;
using api.Dtos.Stock;
using api.Mappers;

namespace api.Controllers
{
    [Route("api/[controller]")]

    public class StockController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        public StockController(ApplicationDBContext context)
        {
            _context = context;

        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var stock = _context.Stocks.ToList()
            .Select(s => s.ToStockDto());
            return Ok(stock);

        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var stock = _context.Stocks.FirstOrDefault(s => s.Id == id);
            if (stock == null)
            {
                return NotFound();
            }
            return Ok(stock.ToStockDto());
        }

        [HttpPost]
        public IActionResult Create([FromBody] CreateStockDto stockDto)
        {
            if (stockDto == null)
            {
                return BadRequest();
            }
            var stock = stockDto.ToStockFromCreateDTO();
            _context.Stocks.Add(stock);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetById), new { id = stock.Id }, stock.ToStockDto());
        }

    }
}