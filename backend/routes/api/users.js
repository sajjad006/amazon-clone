const express=require('express');
const bcrypt = require('bcrypt');
const router=express.Router();
const user=require('../../models/User');

router.get('/', (req, res) => {
	User.find()
		.then(items => res.json(items))
		.catch(err => res.status(400).json({error: "something went wrong"}))
});

// get products with specific id
router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json({ error: err }));
});

// create product
router.post("/", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  if (!newUser.email || !newUser.password) {
    return res.status(400).json({ success: false, error: "all fields are compulsory" });
  }

  User.findOne({email: newUser.email})
      .then((item) => {
        if (item==null) {
          const hash = bcrypt.hashSync(newUser.password, 10);
          newUser.password=hash;

          newUser
            .save()
            .then((item) => res.json({success: true, user: item}));
        }
        else{
          res.json({ success: false, error: "User already exists." })  
        }
      })
      .catch((err) => res.status(400).json({ success: false, error: "something went wrong" }));
});

// update product with specific id
router.put("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((item) => {
      updatedUser = req.body;

      item.name = updatedUser.name ? updatedUser.name : item.name;
      item.email = updatedUser.email ? updatedUser.email : item.email;
      item.password = updatedUser.password ? updatedUser.password : item.password;
      item.save().then((item) => res.json({ msg: "member updated" }));
    })
    .catch((err) => res.status(400).json({ msg: "Member not found." }));
});

// delete products with specific id
router.delete("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(400).json({ error: "Member not found." }));
});




module.exports=router;