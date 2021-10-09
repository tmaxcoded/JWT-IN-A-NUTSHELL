using Microsoft.EntityFrameworkCore.Migrations;

namespace AuthenicationServer.Migrations
{
    public partial class addrolestodb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "c6b75a80-a0af-47ff-a7cd-011316fb2b68", "0529ee31-3524-4b24-a628-4116063583a2", "Manager", null });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "d22ecf73-9ad1-48f1-bfdf-d6bea49c9695", "209af6be-0cad-424e-881c-03efbeb1aafb", "Administrator", null });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "050571dc-51fc-4739-a660-d1a8da45cb06", "8d7b3695-6104-4fed-9d30-f7a12155e871", "Users", null });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "050571dc-51fc-4739-a660-d1a8da45cb06");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c6b75a80-a0af-47ff-a7cd-011316fb2b68");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d22ecf73-9ad1-48f1-bfdf-d6bea49c9695");
        }
    }
}
