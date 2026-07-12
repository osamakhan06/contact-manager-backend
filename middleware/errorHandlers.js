const constant = require("../constant");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constant.VALIDATION_ERROR:
            res.status(statusCode).json({
                title: "VALIDATION ERROR",
                message: err.message,
                stackTrace: err.stack,
            });
            break;

        case constant.NOT_FOUND:
            res.status(statusCode).json({
                title: "NOT FOUND",
                message: err.message,
                stackTrace: err.stack,
            });
            break;

        case constant.FORBIDDEN:
            res.status(statusCode).json({
                title: "FORBIDDEN",
                message: err.message,
                stackTrace: err.stack,
            });
            break;

        case constant.UNAUTHORIZED:
            res.status(statusCode).json({
                title: "UNAUTHORIZED",
                message: err.message,
                stackTrace: err.stack,
            });
            break;

        case constant.SERVER_ERROR:
            res.status(statusCode).json({
                title: "SERVER ERROR",
                message: err.message,
                stackTrace: err.stack,
            });
            break;

        default:
            res.status(500).json({
                title: "SERVER ERROR",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
    }
};

module.exports = errorHandler;
