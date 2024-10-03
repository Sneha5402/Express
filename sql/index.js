const sequelize = require('./config/database')
const Student = require('./models/students');
const course = require('./models/courses');


Student.hasMany(course);

async function syncAndSeed() {
  try {
    // Synchronize the models with the database (force: true will drop and recreate the tables)
    await sequelize.sync({ force: true });
 
    const students = await Student.bulkCreate([
      { name: "Sneha S", email: "snehasakthi02@gmail.com", age: 22 },
      { name: "John Doe", email: "johndoe@gmail.com", age: 25 },
      // { name: "Priya", email: "priyae@gmail.com", age: 21 },
    ]);
    console.log("All students:", students);

    const courseInstance = await course.create({ course_name: "Maths" });
    console.log("course name", courseInstance);

// // table rename
//     const rename= await sequelize.query('ALTER TABLE students RENAME TO newstudents');
//     console.log(rename);

// // column name change
    // const column=await sequelize.query('ALTER TABLE students RENAME COLUMN emailid TO email');
    // console.log(column);

// // // drop the column
    // const drop=await sequelize.query('ALTER TABLE students DROP COLUMN dob');
    // console.log('Column deleted successfully.',drop);

// // delete the row
//        const deletedRows = await Student.destroy({
//       where: {
//         id: 2 
//       }
//     });
//     console.log("delete",deletedRows)

  } catch (error) {
    console.log(error);
  }
}

syncAndSeed();



