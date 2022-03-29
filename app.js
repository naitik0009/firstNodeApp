const { response } = require("express");
const express = require("express");
const req = require("express/lib/request");
const todo = require("./models/todo");
const app = express();
//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());
//routes
app.get("/", async (req, response) => {
  const data = await todo.todo.find();
  response.render("index", { data: data });
});
app.get("/api", async (request, response) => {
  const result = await todo.todo.find();
  response.send(result);
});
app.post("/add/todo", async function (request, response) {
  const data = request.body;
  const result = await todo.todo.create({ todo: data.todo });
  console.log(result);
  response.redirect("/");
});
app.get("/delete/:_id", async function (request, response) {
  console.log(request.params);
  const result = await todo.todo.findByIdAndDelete(request.params._id);
  console.log(result);
  response.redirect("/");
});
app.listen(5500, () => console.log("server started listening on port 5500"));
