const asyncHandler = (funct) => (req, res, next) => funct(req, res, next).catch(next);
module.exports = {
  asyncHandler
};

