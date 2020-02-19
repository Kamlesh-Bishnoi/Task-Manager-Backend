const fetchRouter = require("router");
var router = fetchRouter();


router.post("", require("./task.controller").sendTaskDetails);
router.get("",require("./task.controller").getTaskDetail);
router.post("/update",require("./task.controller").updateTaskDetail);
router.delete("/delete",require("./task.controller").deleteTask);


module.exports = router;