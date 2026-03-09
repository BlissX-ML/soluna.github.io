function errorHandler(err, req, res, next) {
    // res.statusCod 表示响应对象属性。如果前面没设置状态码，就默认 500
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    let message = err.message;

    res.status(statusCode).json({
        message,
        // err.stack 显示错误发生的位置和调用链
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
}

export { errorHandler };
