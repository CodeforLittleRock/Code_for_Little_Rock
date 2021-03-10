import usersController from "./users";

export default function registerRoutes(app) {
  usersController(app);
}