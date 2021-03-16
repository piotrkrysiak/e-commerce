using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class ProductEntityAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_ProductsDb",
                table: "ProductsDb");

            migrationBuilder.RenameTable(
                name: "ProductsDb",
                newName: "Products");

            migrationBuilder.RenameColumn(
                name: "Labael",
                table: "Products",
                newName: "Label");

            migrationBuilder.RenameColumn(
                name: "Discryption",
                table: "Products",
                newName: "Description");

            migrationBuilder.RenameColumn(
                name: "Availabity",
                table: "Products",
                newName: "Availability");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Products",
                table: "Products",
                column: "Id");

            migrationBuilder.InsertData(
                table: "Values",
                columns: new[] { "Id", "Name" },
                values: new object[] { 4, "Value 104" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Products",
                table: "Products");

            migrationBuilder.DeleteData(
                table: "Values",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.RenameTable(
                name: "Products",
                newName: "ProductsDb");

            migrationBuilder.RenameColumn(
                name: "Label",
                table: "ProductsDb",
                newName: "Labael");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "ProductsDb",
                newName: "Discryption");

            migrationBuilder.RenameColumn(
                name: "Availability",
                table: "ProductsDb",
                newName: "Availabity");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProductsDb",
                table: "ProductsDb",
                column: "Id");
        }
    }
}
