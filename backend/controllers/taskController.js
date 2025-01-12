const { taskModel } = require('../model/relaciones'); // Importando el modelo Task de relaciones

class TaskController {
  // Método para crear una nueva tarea
  static async createTask(req, res) {
    try {
      const { task, status } = req.body;
      const newTask = await taskModel.create({ task, status });
      res.status(201).json(newTask);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Método para obtener todas las tareas
  static async getAllTasks(req, res) {
    try {
      const tasks = await taskModel.findAll();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Método para obtener una tarea específica por ID
  static async getTaskById(req, res) {
    try {
      const { id } = req.params;
      const task = await taskModel.findByPk(id);
      if (task) {
        res.status(200).json(task);
      } else {
        res.status(404).json({ message: 'Task not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Método para actualizar una tarea
  static async updateTask(req, res) {
    try {
      const { id } = req.params;
      const { task, status } = req.body;
      const updated = await taskModel.update({ task, status }, { where: { id } });
      if (updated[0]) {
        res.status(200).json({ message: 'Task updated' });
      } else {
        res.status(404).json({ message: 'Task not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Método para eliminar una tarea
  static async deleteTask(req, res) {
    try {
      const { id } = req.params;
      const deleted = await taskModel.destroy({ where: { id } });
      if (deleted) {
        res.status(200).json({ message: 'Task deleted' });
      } else {
        res.status(404).json({ message: 'Task not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = TaskController;
