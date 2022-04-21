using Microsoft.EntityFrameworkCore;
using RobberLanguageAPI.Models;

namespace RobberLanguageAPI.Data
{
    public class RobberTranslationDBContext : DbContext
    {
        public DbSet<Translation> Translations { get; set; }
        public RobberTranslationDBContext(DbContextOptions<RobberTranslationDBContext> options) : base(options){}
    }
}
