import CategoryModel from "../models/CategoryModel.js";
import slugify from "slugify";
export const createCategoryContoller=async(req,res)=>{
    try{
        const {name}=req.body
        if(!name){
            return res.status(401).send({message:"Name is Required"})
        }
        const existingCategory=await CategoryModel.findOne({name})
        if(existingCategory){
            return res.status(200).send({
                success:true,
                message:"Category Already Exists"
            });
        }
        const category=await new CategoryModel({
             name,
             slug:slugify(name),
            }).save();
            res.status(201).send({
                success:true,
                message:"New Category Created",
                category
            });
    }catch(err)
    {
        console.log(err)
        res.status(500).send({
            success:false,
            err,
            message:'Error in Category'
        })
    }
};

//update category
export const updateCategoryContoller=async(req,res)=>{
    try{
        const {name}=req.body;
        const {id}=req.params
        const category=await CategoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
        res.status(200).send({
            success:true,
            message:"Category Updated Successfully",
            category,
        });

    }catch(err)
    {
        console.log(err)
        res.status(500).send({
            sucess:false,
            err,
            message:"Error while updating the Category"
        })
    }
};

//get all categories
export const categoryController=async(req,res)=>{
    try{
        const category=await CategoryModel.find({});
        res.status(200).send({
            success:true,
            message:"Categories List",
            category,
        });
    }catch(err)
    {
        console.log(err)
        res.status(500).send({
            sucess:false,
            message:"Error while fetching all Categories",
            err
        })
    }
};

//single category
export const singleCategoryController=async(req,res)=>{
    try{
        const category=await CategoryModel.findOne({slug:req.params.slug})
        res.status(200).send({
            success:true,
            message:"Fetched a single category successfully",
            category
        })
    }catch(err)
    {
        console.log(err)
        res.staus(500).send({
            success:false,
            message:"Error while fetching a single category"
        })
    }
}

//delete category
export const deleteCategoryController=async(req,res)=>{
    try{
        const {id}=req.params
        await CategoryModel.findByIdAndDelete(id)
        res.status(200).send({
            success:true,
            message:"Category Deleted Sucessfully"
        })

    }catch(err)
    {
        console.log(err)
        res.status(500).send({
            success:false,
            message:"Error while deleting a category"
        })
    }

};