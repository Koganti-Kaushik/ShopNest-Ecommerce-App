import express from 'express';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { categoryController, createCategoryContoller, deleteCategoryController, singleCategoryController, updateCategoryContoller } from '../controllers/CategoryController.js';

const router=express.Router()

//routes
router.post('/create-category',requireSignIn,isAdmin,createCategoryContoller)

//update category
router.put('/update-category/:id',requireSignIn,isAdmin,updateCategoryContoller)

//get all category
router.get('/get-category',categoryController)

//get a single category
router.get('/single-category/:slug',singleCategoryController)

//delete category
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController)

export default router
