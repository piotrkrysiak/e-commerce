using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class ProductDbEntityAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ProductsDb",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    StoreId = table.Column<int>(nullable: false),
                    SerialNumber = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    MainPhoto = table.Column<string>(nullable: true),
                    Photo = table.Column<string>(nullable: true),
                    Producent = table.Column<string>(nullable: true),
                    Model = table.Column<string>(nullable: true),
                    Price = table.Column<double>(nullable: false),
                    ShippingCost = table.Column<double>(nullable: false),
                    Currency = table.Column<string>(nullable: true),
                    Discryption = table.Column<string>(nullable: true),
                    Discount = table.Column<double>(nullable: false),
                    Availabity = table.Column<bool>(nullable: false),
                    BuyersAmount = table.Column<int>(nullable: false),
                    FeedbackAmount = table.Column<int>(nullable: false),
                    Labael = table.Column<string>(nullable: true),
                    Rating = table.Column<double>(nullable: false),
                    AddedDate = table.Column<DateTime>(nullable: false),
                    EndDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductsDb", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProductsDb");
        }
    }
}
