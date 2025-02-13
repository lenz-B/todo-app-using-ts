"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const app = (0, express_1.default)();
const port = 8921;
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../views'));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use('/', taskRoutes_1.default);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
