import {Router} from "express";
const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
    res.send({title: "get all subscriptions "})
});

subscriptionRouter.get("/:id", (req, res) => {
    res.send({title: "get subscription details "})
});

subscriptionRouter.post("/", (req, res) => {
    res.send({title: "create a subscription"})
});

subscriptionRouter.put("/:id", (req, res) => {
    res.send({title: "update a subscription  "})
});

subscriptionRouter.delete("/", (req, res) => {
    res.send({title: "delete a subscription"})
});

subscriptionRouter.get("/user/:id", (req, res) => {
    res.send({title: "get all user subscription details "})
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
    res.send({title: "cancel a subscription  "})
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
    res.send({title: "get upcoming renewals"})
});

export default subscriptionRouter;