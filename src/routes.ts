import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import TeachersController from './controllers/TeachersController';

const routes = express.Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const teachersController = new TeachersController()

routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

routes.get('/teachers', teachersController.index)
export default routes;
