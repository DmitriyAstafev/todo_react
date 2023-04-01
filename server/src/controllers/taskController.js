const { Task } = require("../../db/models");

class TaskController {
  async create(req, res) {
    try {
      const { title, description } = req.body;
      console.log(req.body);
      const newTask = await Task.create({
        title,
        description,
      });
      res.json(newTask);
    } catch (error) {
      console.log(error);
    }
  }

  async getTasks(req, res) {
    try {
      const allTasks = await Task.findAll();
      res.json(allTasks);
    } catch (error) {
      console.log(error);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.body;
      console.log(req.body, "ffff");
      await Task.destroy({
        where: { id },
      });
      res.json(id);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new TaskController();
