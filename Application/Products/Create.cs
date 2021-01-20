using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Products
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public int StoreId { get; set; }
            public string SerialNumber { get; set; }
            public string Name { get; set; }
            public string MainPhoto { get; set; }
            public string Photo { get; set; }
            public string Producent { get; set; }
            public string Model { get; set; }
            public double Price { get; set; }
            public double ShippingCost { get; set; }
            public string Currency { get; set; }
            public string Discryption { get; set; }
            public double Discount { get; set; }
            public bool Availabity { get; set; }
            public int BuyersAmount { get; set; }
            public int FeedbackAmount { get; set; }
            public string Labael { get; set; }
            public double Rating { get; set; }
            public DateTime AddedDate { get; set; }
            public DateTime EndDate { get; set; }

        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var product = new Product
                {
                    Id = request.Id ,
                    StoreId = request.StoreId ,
                    SerialNumber = request.SerialNumber ,
                    Name = request.Name ,
                    MainPhoto = request.MainPhoto ,
                    Photo = request.Photo ,
                    Producent = request.Producent ,
                    Model = request.Model ,
                    Price = request.Price ,
                    ShippingCost = request.ShippingCost ,
                    Currency = request.Currency ,
                    Discryption = request.Discryption ,
                    Discount = request.Discount ,
                    Availabity = request.Availabity ,
                    BuyersAmount = request.BuyersAmount ,
                    FeedbackAmount = request.FeedbackAmount ,
                    Labael = request.Labael,
                    Rating = request.Rating,
                    AddedDate = request.AddedDate ,
                    EndDate = request.EndDate 
                };

                _context.ProductsDb.Add(product);
                var sucess = await _context.SaveChangesAsync() > 0;
                if (sucess)
                {
                    return Unit.Value;
                }
                throw new Exception("Problem saving changes");
            }
        }
    }
}