using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Scool.Migrations
{
    public partial class Add_Some_Entites : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AppCourse",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StartTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FinishTime = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppCourse", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AppTeacher",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Dob = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppTeacher", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AppRegulation",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Point = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CriteriaId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CourseId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    RegulationTypeId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppRegulation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AppRegulation_AppCourse_CourseId",
                        column: x => x.CourseId,
                        principalTable: "AppCourse",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AppClass",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CourseId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    GradeId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    FormTeacherId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    FormTeacherId1 = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    NoStudents = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppClass", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AppClass_AppCourse_FormTeacherId",
                        column: x => x.FormTeacherId,
                        principalTable: "AppCourse",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AppClass_AppTeacher_FormTeacherId1",
                        column: x => x.FormTeacherId1,
                        principalTable: "AppTeacher",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AppClass_FormTeacherId",
                table: "AppClass",
                column: "FormTeacherId");

            migrationBuilder.CreateIndex(
                name: "IX_AppClass_FormTeacherId1",
                table: "AppClass",
                column: "FormTeacherId1",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AppRegulation_CourseId",
                table: "AppRegulation",
                column: "CourseId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AppClass");

            migrationBuilder.DropTable(
                name: "AppRegulation");

            migrationBuilder.DropTable(
                name: "AppTeacher");

            migrationBuilder.DropTable(
                name: "AppCourse");
        }
    }
}
