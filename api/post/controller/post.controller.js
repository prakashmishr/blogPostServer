const response = require('../../../response')
const postModel = require('../model/post.model')
const verify = require('../../../middleware/verify.token')

exports.getPost = async (req, res)=>{
  try {
    const post = await postModel.find()
    if(post){
      console.log("post", post)
      response.success_message(post, res)
    }
  } catch (error) {
    data = {
      message:"error in reading post"
    }
    response.error_message(data, res)
  }
}


exports.getSinglePost = async (req, res)=>{
  try {
    const id = req.params.id
    const post = await postModel.findById(id)
    if(post){
      console.log("post", post)
      response.success_message(post, res)
    }
  } catch (error) {
    data = {
      message:"error in reading post"
    }
    response.error_message(data, res)
  }
}

exports.addPost = async (req, res)=>{
  try {
    // const details = req.body
  const auth_user = verify.verify_token(req.headers.token).details
  
    const details = {
title:req.body.title,
content:req.body.content,
userId: auth_user.id,
author: auth_user.email
    }
    
    const addPost = await postModel.create({...details})
    if(addPost){
      data = {
        meaasge:"Post added sucessfully"
      }
      response.success_message(data, res)
    }
  } catch (error) {
    console.log("error", error)
    data = {
      message:"error in creating post"
    }
    response.error_message(data, res)
    
  }
}


exports.deletePost = async (req, res)=>{
  try {
    const id = req.params.id
    const deletePost = await postModel.findByIdAndDelete(id)
    if(deletePost){
      data = {
        meaasge:"Post deleted sucessfully"
      }
      response.success_message(data, res)
    }
  } catch (error) {
    data = {
      message:"error in deleting post"
    }
    response.error_message(data, res)
  }
}


exports.updatePost = async (req, res)=>{
  try {
    const id = req.params.id
    const updatedData = req.body
    const updatePost = await postModel.findByIdAndUpdate(id,{...updatedData})
    if(updatePost){
      data = {
        meaasge:"Post updated sucessfully"
      }
      response.success_message(data, res)
    }
  } catch (error) {
    data = {
      message:"error in updating post"
    }
    response.error_message(data, res)
  }
}