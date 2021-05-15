using Microsoft.EntityFrameworkCore;
using Scool.Domain.Common;
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

            builder.Entity<Course>(b => 
            {
                b.ToTable(ScoolConsts.DbTablePrefix + nameof(Course), ScoolConsts.DbSchema);
                b.HasMany(b => b.Classes)
                    .WithOne(e => e.Course)
                    .HasForeignKey(f => f.FormTeacherId);
                b.HasMany(b => b.Regulations)
                    .WithOne(e => e.Course).HasForeignKey(f => f.CourseId);
                b.ConfigureByConvention();
            });
            
            builder.Entity<Class>(b => 
            {
                b.ToTable(ScoolConsts.DbTablePrefix + nameof(Class), ScoolConsts.DbSchema);

                //b.HasOne(b => b.FormTeacher)
                //    .WithOne(e => e.Class)
                //    .HasForeignKey(f => f.FormTeacherId);
                b.ConfigureByConvention();
            });

            builder.Entity<Teacher>(b =>
            {
                b.ToTable(ScoolConsts.DbTablePrefix + nameof(Teacher), ScoolConsts.DbSchema);

                //b.HasOne(b => b.Class).WithOne(e => e.FormTeacher).HasForeignKey(f => f.)
            });

            builder.Entity<Regulation>(b =>
            {
                b.ToTable(ScoolConsts.DbTablePrefix + nameof(Regulation), ScoolConsts.DbSchema);
                b.ConfigureByConvention();
            });

            //builder.


            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(ScoolConsts.DbTablePrefix + "YourEntities", ScoolConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}