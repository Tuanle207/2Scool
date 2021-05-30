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

                // one Course has many Classes
                b.HasMany(b => b.Classes)
                    .WithOne(e => e.Course)
                    .HasForeignKey(f => f.CourseId);

                // one Course has many Regulations
                b.HasMany(b => b.Regulations)
                    .WithOne(e => e.Course)
                    .HasForeignKey(f => f.CourseId);

                // one Course has many Activities
                b.HasMany(b => b.Activities)
                    .WithOne(e => e.Course)
                    .HasForeignKey(f => f.CourseId);
                b.ConfigureByConvention();
            });
            
            builder.Entity<Grade>(b => 
            {
                b.ToTable(ScoolConsts.DbTablePrefix + nameof(Grade), ScoolConsts.DbSchema);
                b.ConfigureByConvention();
            });

            builder.Entity<Class>(b => 
            {
                b.ToTable(ScoolConsts.DbTablePrefix + nameof(Class), ScoolConsts.DbSchema);

                // one Class has one form Teacher
                b.HasOne(b => b.FormTeacher)
                    .WithOne(e => e.FormClass)
                    .HasForeignKey<Class>(b => b.FormTeacherId);

                // one Class has one form Grade
                b.HasOne(b => b.Grade)
                    .WithMany()
                    .HasForeignKey(f => f.GradeId);

                b.HasMany(b => b.Students)
                    .WithOne(e => e.Class)
                    .HasForeignKey(f => f.ClassId);
                b.ConfigureByConvention();
            });

            builder.Entity<Student>(b =>
            {
                b.ToTable(ScoolConsts.DbTablePrefix + nameof(Student), ScoolConsts.DbSchema);
                b.ConfigureByConvention();
            });

            builder.Entity<Teacher>(b =>
            {
                b.ToTable(ScoolConsts.DbTablePrefix + nameof(Teacher), ScoolConsts.DbSchema);

                b.ConfigureByConvention();
            });

            builder.Entity<RegulationType>(b =>
            {
                b.ToTable(ScoolConsts.DbTablePrefix + nameof(RegulationType), ScoolConsts.DbSchema);
                b.ConfigureByConvention();
            });

            builder.Entity<Regulation>(b =>
            {
                b.ToTable(ScoolConsts.DbTablePrefix + nameof(Regulation), ScoolConsts.DbSchema);
                b.HasOne(b => b.RegulationType)
                    .WithMany()
                    .HasForeignKey(f => f.RegulationTypeId)
                    .IsRequired();
                b.HasOne(b => b.Criteria)
                    .WithMany(b => b.Regulations)
                    .HasForeignKey(f => f.CriteriaId)
                    .IsRequired();
                b.ConfigureByConvention();
            });

            builder.Entity<Criteria>( b =>
            {
                b.ToTable(ScoolConsts.DbTablePrefix + nameof(Criteria), ScoolConsts.DbSchema);
                b.ConfigureByConvention();
            });

            builder.Entity<Activity>( b =>
            {
                b.ToTable(ScoolConsts.DbTablePrefix + nameof(Activity), ScoolConsts.DbSchema);
                b.HasMany(b => b.Participants)
                    .WithOne(e => e.Activity)
                    .HasForeignKey(f => f.ActivityId);
                b.ConfigureByConvention();
            });

            builder.Entity<ActivityParticipant>( b =>
            {
                b.ToTable(ScoolConsts.DbTablePrefix + nameof(ActivityParticipant), ScoolConsts.DbSchema);
                b.ConfigureByConvention();
            });

            builder.Entity<LessonsRegister>( b =>
            {
                b.ToTable(ScoolConsts.DbTablePrefix + nameof(LessonsRegister), ScoolConsts.DbSchema);
                b.ConfigureByConvention();
            });

            builder.Entity<TaskAssignment>( b =>
            {
                b.ToTable(ScoolConsts.DbTablePrefix + nameof(TaskAssignment), ScoolConsts.DbSchema);
                // TODO: configure one-to-many relationship between TaskAssignment - User
                //b.HasOne(b => b.User)
                //    .WithMany()
                //    .HasForeignKey(f => f.UserId);
                //b.Ignore(b => b.User);
                b.ConfigureByConvention();
            });
            

            // builder.Entity<YourEntityHere>( b =>
            // {
            //     b.ToTable(ScoolConsts.DbTablePrefix + nameof(YourEntityHere), ScoolConsts.DbSchema);
            //     
            //     b.ConfigureByConvention();
            // });
        }
    }
}