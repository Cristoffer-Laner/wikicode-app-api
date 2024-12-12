
import { Router } from 'express';
import { taskCreate, taskDelete, taskIndex, taskUpdate } from '../controllers/taskController.js';

const taskRouter = Router();

taskRouter
    .get('/', taskIndex)
    .post('/create', taskCreate)
    .put('/update/:item', taskUpdate)
    .delete('/delete/:item', taskDelete)

export default taskRouter;