"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const search_controllers_1 = require("../controllers/search.controllers");
const search_middlewares_1 = require("../middlewares/search.middlewares");
const users_middlewares_1 = require("../middlewares/users.middlewares");
const express_1 = require("express");
const searchRouter = (0, express_1.Router)();
searchRouter.get('/', users_middlewares_1.accessTokenValidator, users_middlewares_1.verifiedUserValidator, search_middlewares_1.searchValidator, search_controllers_1.searchController);
exports.default = searchRouter;
