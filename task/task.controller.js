const Detail = require("./task.model");

// api for Sending task detail
exports.sendTaskDetails = async (req, res) => {
  if (req.body) {
    try {
      let retDoc = new Detail(req.body);
      let count = await Detail.count();
      retDoc.Sno = count + 1;
      await retDoc.save();
      return res.json(retDoc);
    } catch (err) {
      return res.json({ success: true, data: "", message: err });
    }
  } else {
    return res.json({ success: false, data: "", message: "Parameter Missing" });
  }
};

// api for get task detail
exports.getTaskDetail = async (req, res) => {
  let getTaskDetail = await Detail.find().sort({ Sno: 1 });
  return res.json({ success: true, data: getTaskDetail, message: "found" });
};
exports.updateTaskDetail = async (req, res) => {
  if (req.body.category && req.body._id) {
    try {
      let changes = [];
      let updateTaskDetail = await Detail.findOneAndUpdate(
        { _id: req.body._id },
        { $set: { category: req.body.category } },

        { new: true }
      );
      if (Array.isArray(req.body.SnoChange)) {
        for (let item of req.body.SnoChange) {
          let change = await Detail.findOneAndUpdate(
            { _id: item._id },
            { $set: { Sno: item.Sno } },
            { new: true }
          );
          changes.push(change);
        }
      }
      updateTaskDetail.changes = changes;
      return res.json(updateTaskDetail);
    } catch (err) {
      return res.json({ success: false, data: "", message: err });
    }
  } else {
    return res.json({ success: false, message: "error.." });
  }
};
// api for delete task
exports.deleteTask = async (req, res) => {
  if (req.body._id) {
    try {
      let deleteTask = await Detail.findOneAndDelete({ _id: req.body._id });
      return res.json({ success: true, data: deleteTask });
    } catch (err) {
      return res.json({ success: false, data: "", message: err });
    }
  } else {
    return res.json({ success: false, data: "", message: "parameter missing" });
  }
};

