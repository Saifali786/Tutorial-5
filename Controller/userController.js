const users = require("../model/userList");
const { v4: uuidv4 } = require("uuid");

function getUsers(req, res) {
  try {
    if (users.length === 0) {
      res.status(404).json({
        messsage: "No users found",
        sucess: false,
      });
    } else {
      res.status(200).json({
        message: "User retrieved",
        success: true,
        users: users,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Error",
      success: false,
    });
  }
}

function getUser(req, res) {
  const userId = req.params.id;
  try {
    if (users.length === 0) {
      res.status(404).json({
        messsage: "No users found",
        sucess: false,
      });
    } else {
      const user = users.find((user) => user.id == userId);
      console.log(user);
      if (user) {
        res.status(200).json({
          success: true,
          user: user,
        });
      } else {
        res.status(404).json({ message: "Error" });
      }
    }
  } catch (err) {
    res.status(500).json({
      message: "Error",
      success: false,
    });
  }
}

function addUser(req, res) {
  const input = req.body;
  try {
    if (input?.email && input?.firstName) {
      users.push({ ...input, id: uuidv4() });
      res.status(201).json({
        message: "User added",
        success: true,
      });
    } else {
      res.status(404).json({
        message: "User cannot be created due to bad request",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Error",
      success: false,
    });
  }
}

function updateUser(req, res) {
  const userId = req.params.id;
  const updatedInformation = req.body;
  try {
    if (users.length === 0) {
      res.status(404).json({
        messsage: "No users found",
        sucess: false,
      });
    } else {
      const user = users.find((user) => user.id == userId);
      console.log(user);
      if (user) {
        user.email = updatedInformation.email;
        user.firstName = updatedInformation.firstName;
        res.status(200).json({
          message: "User Updated",
          success: true,
        });
      } else {
        res.status(404).json({ message: "No user found" });
      }
    }
  } catch (err) {
    res.status(500).json({
      message: "Error",
      success: false,
    });
  }
}
module.exports = { getUsers, getUser, addUser, updateUser };

// app.get("/users", function (req, res) {
//   try {
//     if (users.length === 0) {
//       res.status(404).json({
//         messsage: "No users found",
//         sucess: false,
//       });
//     } else {
//       res.status(200).json({
//         message: "User retrieved",
//         success: true,
//         users: users,
//       });
//     }
//   } catch (err) {
//     res.status(500).json({
//       message: "Error",
//       success: false,
//     });
//   }
// });

// app.get("/user/:id", function (req, res) {
//   const userId = req.params.id;
//   try {
//     if (users.length === 0) {
//       res.status(404).json({
//         messsage: "No users found",
//         sucess: false,
//       });
//     } else {
//       const user = users.find((user) => user.id == userId);
//       console.log(user);
//       if (user) {
//         res.status(200).json({
//           success: true,
//           user: user,
//         });
//       } else {
//         res.status(404).json({ message: "Error" });
//       }
//     }
//   } catch (err) {
//     res.status(500).json({
//       message: "Error",
//       success: false,
//     });
//   }
// });

// app.post("/add", function (req, res) {
//   const input = req.body;
//   try {
//     if (input?.email && input?.firstName) {
//       users.push({ ...input, id: uuidv4() });
//       res.status(201).json({
//         message: "User added",
//         success: true,
//       });
//     } else {
//       res.status(404).json({
//         message: "User cannot be created due to bad request",
//       });
//     }
//   } catch (err) {
//     res.status(500).json({
//       message: "Error",
//       success: false,
//     });
//   }
// });

// app.put("/update/:id", function (req, res) {
//   const userId = req.params.id;
//   const updatedInformation = req.body;
//   try {
//     if (users.length === 0) {
//       res.status(404).json({
//         messsage: "No users found",
//         sucess: false,
//       });
//     } else {
//       const user = users.find((user) => user.id == userId);
//       console.log(user);
//       if (user) {
//         user.email = updatedInformation.email;
//         user.firstName = updatedInformation.firstName;
//         res.status(200).json({
//           message: "User Updated",
//           success: true,
//         });
//       } else {
//         res.status(404).json({ message: "No user found" });
//       }
//     }
//   } catch (err) {
//     res.status(500).json({
//       message: "Error",
//       success: false,
//     });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });
