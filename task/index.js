const fetchRouter = require("router");
var router = fetchRouter();


router.post("", require("./task.controller").sendTaskDetails);


module.exports = router;