var mongoose=require("mongoose");
const AutoIncrementFactory = require('mongoose-sequence');
 
// const connection = await mongoose.createConnection('mongodb://...');
 
const AutoIncrement = AutoIncrementFactory(mongoose);
var Schema=mongoose.Schema;
var newSchema= new Schema({
    task:{type:String},
    category:{type:String},
    dueDate:{type:String},
    Sno:{type:Number},
    creationDate: {type: Date, default: new Date()},
    updationDate: {type: Date, default: new Date()},
    
});
newSchema.plugin(AutoIncrement, {inc_field: 'Sno', disable_hooks: true});
module.exports=mongoose.model("task",newSchema);