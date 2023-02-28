const { Router } = require("express")

const UsersController = require("../controllers/UsersController")

const userRoutes = Router()


function myMiddleware(request, response, next) {
  console.log("Você passou pelo middleware")

  next()
}





const usersController = new UsersController()

userRoutes.post("/", myMiddleware, usersController.create)

module.exports = userRoutes
