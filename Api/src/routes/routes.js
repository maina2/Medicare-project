import { signup, login, registerDoctor, loginDoctor} from '../controllers/Authenticate.js';
import { io } from '../../server.js'; // Import the io instance from server.js

const routes = (app) => {
  app.route('/auth/signup').post(signup);
  app.route('/auth/login').post(login);
  app.route('/auth/registerDoctor').post(registerDoctor);
  app.route('/auth/loginDoctor').post(loginDoctor);

  // Example Socket.IO event from a route
  app.route('/example').post((req, res) => {
    const { message } = req.body;

    // Emit the message to all connected clients
    io.emit('message', message);

    res.status(200).json({ message: 'Message sent' });
  });
};

export default routes;