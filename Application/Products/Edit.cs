
using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Products
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public int? StoreId { get; set; }
            public string SerialNumber { get; set; }
            public string Name { get; set; }
            public string MainPhoto { get; set; }
            public string Photo { get; set; }
            public string Producent { get; set; }
            public string Model { get; set; }
            public double? Price { get; set; }
            public double? ShippingCost { get; set; }
            public string Currency { get; set; }
            public string Discryption { get; set; }
            public double? Discount { get; set; }
            public bool? Availabity { get; set; }
            public int? BuyersAmount { get; set; }
            public int? FeedbackAmount { get; set; }
            public string Labael { get; set; }
            public double? Rating { get; set; }
            public DateTime? AddedDate { get; set; }
            public DateTime? EndDate { get; set; }
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
                var product = await _context.Products.FindAsync(request.Id);

                if (product == null)
                {
                    throw new Exception("Could not find product");
                }
                    product.StoreId = request.StoreId  ?? product.StoreId ;
                    product.SerialNumber = request.SerialNumber  ?? product.SerialNumber ;
                    product.Name = request.Name  ?? product.Name ;
                    product.MainPhoto = request.MainPhoto  ?? product.MainPhoto ;
                    product.Photo = request.Photo  ?? product.Photo ;
                    product.Producent = request.Producent  ?? product.Producent ;
                    product.Model = request.Model  ?? product.Model ;
                    product.Price = request.Price  ?? product.Price ;
                    product.ShippingCost = request.ShippingCost  ?? product.ShippingCost ;
                    product.Currency = request.Currency  ?? product.Currency ;
                    product.Description = request.Discryption  ?? product.Description ;
                    product.Discount = request.Discount  ?? product.Discount ;
                    product.Availability = request.Availabity  ?? product.Availability ;
                    product.BuyersAmount = request.BuyersAmount  ?? product.BuyersAmount ;
                    product.FeedbackAmount = request.FeedbackAmount  ?? product.FeedbackAmount ;
                    product.Label = request.Labael ?? product.Label ;
                    product.Rating = request.Rating ?? product.Rating ;
                    product.AddedDate = request.AddedDate  ?? product.AddedDate ;
                    product.EndDate = request.EndDate ?? product.EndDate ;


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