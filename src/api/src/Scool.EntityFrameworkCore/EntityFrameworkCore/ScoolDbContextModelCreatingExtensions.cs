using Microsoft.EntityFrameworkCore;
using Scool.Domain.Courses.Model;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace Scool.EntityFrameworkCore
{
    public static class ScoolDbContextModelCreatingExtensions
    {
        public static void ConfigureScool(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            builder.Entity<Course>(b => {
              b.ToTable(ScoolConsts.DbTablePrefix + "Courses", ScoolConsts.DbSchema);
              b.ConfigureByConvention();
            });

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(ScoolConsts.DbTablePrefix + "YourEntities", ScoolConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}