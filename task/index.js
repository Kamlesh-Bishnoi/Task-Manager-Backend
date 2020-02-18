const fetchRouter = require("router");
var router = fetchRouter();


router.post("", require("./task.controller").sendTaskDetails);
router.get("",require("./task.controller").getTaskDetail);


module.exports = router;