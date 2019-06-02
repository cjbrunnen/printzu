'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    
    //* HOME
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return "Home - Explore PrintZu";
        }
    });

    //* USERS
    server.route({
        method: 'GET',
        path: '/profile/:id',
        handler:(request, h) => {
            return "My Profile";
        }
    });
    server.route({
        method: 'GET',
        path: '/account/:id',
        handler: (request, h) => {
            return "My Account";
        }
    });
    server.route({
        method: 'GET',
        path: '/messages',
        handler:(request, h) => {
            return "Messages";
        }
    });
    server.route({
        method: 'GET',
        path: '/new-user',
        handler:(request, h) => {
            return "Create new user";
        }
    });
    server.route({
        method: 'POST',
        path: '/profile/:id/edit',
        handler:(request, h) => {
            return "Edit user";
        }
    });
    server.route({
        method: "POST",
        path: '/forgot-password',
        handler:(request, h) => {
            return "Forgot password";
        }
    });

    //* ITEMS
    server.route({
        method: 'GET',
        path: '/blueprint/:id',
        handler:(request, h) => {
            return "Individual item overview";
        }
    });
    server.route({
        method: 'POST',
        path: '/new',
        handler:(request, h) => {
            return "Add new item";
        }
    });
    server.route({
        method: 'GET',
        path: '/saved-searches',
        handler:(request, h) => {
            return "My saved searches";
        }
    });
    server.route({
        method: 'GET',
        path: '/saved-sellers',
        handler:(request, h) => {
            return "My saved sellers";
        }
    });
    server.route({
        method: 'GET',
        path: '/category/:id',
        handler:(request, h) => {
            return "Category search";
        }
    });

    //* CART
    server.route({
        method: 'GET',
        path: '/cart',
        handler:(request, h) => {
            return "Cart";
        }
    });


    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();