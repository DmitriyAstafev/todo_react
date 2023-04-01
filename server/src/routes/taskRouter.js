const Router = require('express');

const router = new Router();
const TaskController = require('../controllers/taskController');

router.get('/', TaskController.getTasks);
router.post('/', TaskController.create);
router.delete('/', TaskController.delete);

module.exports = router;
