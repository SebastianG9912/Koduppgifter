using Microsoft.EntityFrameworkCore;
using RobberLanguageAPI.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

string path = @"Server=(localdb)\mssqllocaldb;Database=Translations";
builder.Services.AddDbContext<RobberTranslationDBContext>(options => options.UseSqlServer(path));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

using (var scope = app.Services.CreateScope())
{
    var ctx = scope.ServiceProvider.GetRequiredService<RobberTranslationDBContext>();

    ctx.Database.EnsureDeleted();
    ctx.Database.EnsureCreated();
}
app.Run();
