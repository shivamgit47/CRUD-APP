import express from "express";
import {addUser,allUsers, getUser,editUser,deleteUser} from "../controller/user-controller.js";

const router = express.Router();

router.post('/AddUser',addUser);

router.get('/AllUsers',allUsers);

router.get('/:id',getUser);

// router.post('/:id',editUser); it works same like put ,put is for update
router.put('/:id',editUser);


router.delete('/:id',deleteUser);


export default router;

// Express Routers are a way to organize your Express application such that your primary app.js file does not become bloated and difficult to reason about. As you’re building an Express application or API, you’ll soon notice that the routes continue to pile up in app.js. This makes the file quite long and hard to read. As we add functionality to an application, this file would get long and cumbersome. The solution to this in Express is Routers. Routers are like mini versions of Express applications. They provide functionality for handling route matching, requests, and sending responses, but they do not start a separate server or listen on their own ports. Routers use all the .get(), .put(), .post(), and .delete() routes that you are now familiar with.

// Express.Router
// To create an instance of an Express Router, we call the .Router() method on the top-level Express import. Then to use that router, we mount it at a certain path using app.use() and pass in the router as the second argument. This router will now be used for all paths that begin with that path segment. To create a router to handle all requests beginning with /hello, the code would look like this:

// const helloRouter = express.Router();
 
// app.use('/hello', helloRouter);