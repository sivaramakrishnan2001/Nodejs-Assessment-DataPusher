
export const ErrorHandling = (err, req, res, next) => {
    if (err.stack) {
        res.status(err.status || 500).json({ error: err.message });
    }
    else {
        next();
    }
};
