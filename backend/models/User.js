const mongoose=require('mongoose');

Schema=mongoose.Schema;

userSchema=new Schema({
	name: {
		type: String,
		required: false,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	
});


module.exports=User=mongoose.model('user', userSchema);