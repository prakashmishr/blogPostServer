const express = require('express');
const { getPost, addPost, deletePost, updatePost, getSinglePost } = require('../controller/post.controller');
const router = express.Router();



// router.get('/', validator,postGet);

router.route('/').get(getPost).post(addPost).delete(deletePost)
router.route('/:id').get(getSinglePost).delete(deletePost).put(updatePost)
module.exports = router;






