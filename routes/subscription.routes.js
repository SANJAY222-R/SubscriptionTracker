import { Router } from "express";
const subscriptionRouter = Router();
import { authorize } from "../middlewares/authorize.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "get all subscriptions " });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "get subscription details " });
});

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "update a subscription  " });
});

subscriptionRouter.delete("/", (req, res) => {
  res.send({ title: "delete a subscription" });
});

subscriptionRouter.get("/user/:id",authorize,getUserSubscriptions);

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "cancel a subscription  " });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "get upcoming renewals" });
});

export default subscriptionRouter;
