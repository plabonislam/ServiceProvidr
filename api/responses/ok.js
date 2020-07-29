module.exports = function ok(data) {
  this.req.accepts("application/json");
  // -> 'application/json'

  this.req.accepts("json");
  return this.res.status(200).json(data);
};
