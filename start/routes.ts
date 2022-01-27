/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

//pages
Route.get('/', async({ view }) => {
  return view.render('login')
})

Route.get('/main', async ({ view }) => {
  return view.render('main')
})

Route.get('/profile', async ({ view }) => {
  return view.render('profile')
})


//users
Route.get('/users-list', async ({ view }) => {
  return view.render('users/liste')
})

Route.get('/users-view', async ({ view }) => {
  return view.render('users/view')
})

Route.get('/users-edit', async ({ view }) => {
  return view.render('users/edit')
})

//invoice
Route.get('/invoice-list', async ({ view }) => {
  return view.render('invoice/liste')
})

Route.get('/invoice-view', async ({ view }) => {
  return view.render('invoice/view')
})

Route.get('/invoice-edit', async ({ view }) => {
  return view.render('invoice/edit')
})

Route.get('/invoice-print', async ({ view }) => {
  return view.render('invoice/print')
})

//chat

Route.get('/discussions', async ({ view }) => {
  return view.render('chat/main')
})

//signaux
Route.get('/signaux', async ({ view }) => {
  return view.render('signaux/signaux')
})

Route.get('/list-signaux', async ({ view }) => {
  return view.render('signaux/list-signaux')
})

Route.get('/commenter-signal', async ({ view }) => {
  return view.render('signaux/edit-signaux')
})

Route.get('/voir-signal', async ({ view }) => {
  return view.render('signaux/view-signaux')
})
