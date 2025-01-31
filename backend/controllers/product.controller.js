import Product from "../models/product.model.js";
import mongoose from "mongoose";


export const getProdcuts  = async (req, res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json({success:true, data: products})
    }catch(error){
        console.log("Error in fetching products:", error.message);
        res.status(500).json({success:false, message:"Server Error"});
    }

};
export const createProduct = async (req, res)=>{
    const product = req.body; // user will send this data
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false, message:"Please fill in all fields"});

    }

    const newProduct = new Product(product);
    try{
        await newProduct.save(); //save it to the database
        res.status(201).json({success:true, data: newProduct});

    }catch(error){
        console.error("Error in Create Product", error.message);
        res.status(500).json({success:false, message:"Server Error"});
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ success: false, message: "Invalid Product ID" });
        }

        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }


        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
export const deleteProduct = async (req,res)=>{ // it will dynamic
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product ID" });
    }
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message:"Product deleted"});
    }catch(error){
        console.log("Error in Finding Product" , error.message);
        res.status(500).json({success:false, message:"Server Error"});
    }
};