// Core Imports

// Custom Imports
const Role = require("./../../models/role");
const CONFIG = require("./../../config");

module.exports = async (req, res, next) => {
  console.log(`role-middleware/index.js === Role.find ==`);
  const defaultRoles = await Role.find({
    title: ["admin", "tutor", "student"],
  });
  console.log(defaultRoles);
  const adminRoleIndex = defaultRoles.findIndex((el) => el.title == "admin");
  const tutorRoleIndex = defaultRoles.findIndex((el) => el.title == "tutor");
  const studentRoleIndex = defaultRoles.findIndex(
    (el) => el.title == "student"
  );
  // creating admin role if does not exists
  if (adminRoleIndex < 0) {
    await Role.create({
      title: "admin",
      description: "admin role of app",
    });
  }
  // creating tutor role if does not exists
  if (tutorRoleIndex < 0) {
    await Role.create({
      title: "tutor",
      description: "tutor role of app",
    });
  }
  // creating student role if does not exists
  if (studentRoleIndex < 0) {
    await Role.create({
      title: "student",
      description: "student role of app",
    });
  }
  return next();
};
