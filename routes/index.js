var express = require('express');
var router = express.Router();
const ServiceController = require("../controllers/ServiceController");
const UserController = require("../controllers/UserController");
const RoleController = require("../controllers/RoleController");
const CategoryController = require("../controllers/CategoryController");
const TagController = require("../controllers/TagController");
const CompanyController = require("../controllers/CompanyController");
const MenuController = require("../controllers/MenuController");
var cors = require('cors');

router.use(cors());
// Upload File 
router.post('/api/v1/upload', cors(), ServiceController.upload);
// Company
router.get('/api/v1/company/:id', cors(), CompanyController.findOne);
router.put('/api/v1/company/:id', cors(), CompanyController.update);
// Menu
router.get('/api/v1/menu/:id', cors(), MenuController.findOne);
router.put('/api/v1/menu/:id', cors(), MenuController.update);
// User
router.get('/api/v1/user', cors(), UserController.find);
router.get('/api/v1/user/:id', cors(), UserController.findOne);
router.post('/api/v1/user', cors(), UserController.create);
router.put('/api/v1/user/:id', cors(), UserController.update);
router.delete('/api/v1/user/:id', cors(), UserController.destroy);
// Role
router.get('/api/v1/role', RoleController.find);
router.get('/api/v1/role/:id', cors(), RoleController.findOne);
router.post('/api/v1/role', RoleController.create);
router.put('/api/v1/role/:id', RoleController.update);
router.delete('/api/v1/role/:id', RoleController.destroy);
// Category
router.get('/api/v1/category', CategoryController.find);
router.get('/api/v1/category/:id', CategoryController.findOne);
router.post('/api/v1/category', CategoryController.create);
router.put('/api/v1/category/:id', CategoryController.update);
router.delete('/api/v1/category/:id', CategoryController.destroy);
// Tags
router.get('/api/v1/tag', TagController.find);
router.get('/api/v1/tag/:id', TagController.findOne);
router.post('/api/v1/tag', TagController.create);
router.put('/api/v1/tag/:id', TagController.update);
router.delete('/api/tag/:id', TagController.destroy);

module.exports = router;