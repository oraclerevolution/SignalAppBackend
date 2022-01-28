"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/', async ({ view }) => {
    return view.render('login');
});
Route_1.default.get('/main', async ({ view }) => {
    return view.render('main');
});
Route_1.default.get('/profile', async ({ view }) => {
    return view.render('profile');
});
Route_1.default.get('/users-list', async ({ view }) => {
    return view.render('users/liste');
});
Route_1.default.get('/users-view', async ({ view }) => {
    return view.render('users/view');
});
Route_1.default.get('/users-edit', async ({ view }) => {
    return view.render('users/edit');
});
Route_1.default.get('/invoice-list', async ({ view }) => {
    return view.render('invoice/liste');
});
Route_1.default.get('/invoice-view', async ({ view }) => {
    return view.render('invoice/view');
});
Route_1.default.get('/invoice-edit', async ({ view }) => {
    return view.render('invoice/edit');
});
Route_1.default.get('/invoice-print', async ({ view }) => {
    return view.render('invoice/print');
});
Route_1.default.get('/discussions', async ({ view }) => {
    return view.render('chat/main');
});
Route_1.default.get('/signaux', async ({ view }) => {
    return view.render('signaux/signaux');
});
Route_1.default.get('/list-signaux', async ({ view }) => {
    return view.render('signaux/list-signaux');
});
Route_1.default.get('/commenter-signal', async ({ view }) => {
    return view.render('signaux/edit-signaux');
});
Route_1.default.get('/voir-signal', async ({ view }) => {
    return view.render('signaux/view-signaux');
});
//# sourceMappingURL=routes.js.map