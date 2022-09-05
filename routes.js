module.exports = app => {
    app.use("/v2", require("./products/routes/index"));
};