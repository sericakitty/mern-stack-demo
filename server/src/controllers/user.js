const userRouter = require('express').Router();
const User = require('../modals/User');



userRouter.get('/users', async (req, res) => {
  const users = await User
   .find({})
   .populate('user', { name: 1, text: 1 })
   res.json(users)
});

userRouter.post('/', (req, res) => {
 const name = String(req.body.name);
 const text = String(req.body.text);
 const user = new User({
     name,
     text
 });
 user.save().then(savedUser => {
     res.status(201).json(savedUser);
 });
});


module.exports = userRouter;