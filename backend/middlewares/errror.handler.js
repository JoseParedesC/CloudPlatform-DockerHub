function logErrors (err, req, res, next){
    console.log(err);
    next(err);
}

function handleNotFoundError(err, req, res, next){
    res.status(404).json({ message: err.message, stack: error.stack })
}

function handleValidationError(err, req, res, next) {
  res.status(400).json({ message: err.message });
}

export default {
    logErrors,
    handleNotFoundError,
    handleValidationError,
}