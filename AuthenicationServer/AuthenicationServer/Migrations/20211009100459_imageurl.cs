using Microsoft.EntityFrameworkCore.Migrations;

namespace AuthenicationServer.Migrations
{
    public partial class imageurl : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<string>(
                name: "ImgUrl",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "9023cc9e-835d-498b-b054-65aa2956f6fc", "fea3df51-46b3-46bb-9fc8-77f8bb81f024", "Manager", null });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "917f2e75-c152-4c81-a9f7-402803387fa1", "f6e4f5ce-8ee6-4739-aaf2-f98eb5c2c0cf", "Administrator", null });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "ea092591-d450-4af2-825a-8cf1298332a5", "6cda8204-7666-46d2-9aa8-7c1faef2fcb3", "Users", null });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9023cc9e-835d-498b-b054-65aa2956f6fc");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "917f2e75-c152-4c81-a9f7-402803387fa1");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ea092591-d450-4af2-825a-8cf1298332a5");

            migrationBuilder.DropColumn(
                name: "ImgUrl",
                table: "AspNetUsers");

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
    }
}
