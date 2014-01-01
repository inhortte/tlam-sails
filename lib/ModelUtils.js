module.exports = {
  nextId: function(model, cb) {
    model.find({limit: 1, sort: '_id desc'}).done(function(err, sp) {
      if(sp.length > 0) {
        cb((parseInt(sp[0].id) + 1).toString());
      } else {
        cb('1');
      }
    });
  }
};
