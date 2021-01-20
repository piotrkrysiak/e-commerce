using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;
namespace Application.Products
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
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

                var product = await _context.ProductsDb.FindAsync(request.Id);
                if (product == null)
                {
                    throw new Exception("Could not find product");
                }

                _context.Remove(product);

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