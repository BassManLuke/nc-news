const apiRouter = require("express").Router()
const articlesRouter = require("./articles-router")

const {
    deleteComment,
} = require("../controllers/comments.controllers");
const { getTopics } = require("../controllers/topics.controllers");
const { getUsers } = require("../controllers/users.controllers");
const endpoints = require("../endpoints.json");


apiRouter.get("/", (request, response) => {
    response.status(200).send({ endpoints });
});

apiRouter.get("/topics", getTopics);

apiRouter.get("/users", getUsers);

apiRouter.use("/articles", articlesRouter)

apiRouter.delete("/comments/:comment_id", deleteComment);

module.exports = apiRouter