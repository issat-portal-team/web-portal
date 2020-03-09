import * as express from "express";

export const register = ( app: express.Application ) => {
    const oidc = app.locals.oidc;

    // define a route handler for the default home page
    app.get( "/", ( req: any, res ) => {
      return res.send({ res: 'home' })
    } );

    // define a secure route handler for the login page that redirects to /guitars
    app.get( "/login",  ( req, res ) => {
        return res.send({ res: 'logged in' })
    } );

    // define a route to handle logout
    app.get( "/logout", ( req: any, res ) => {
        return res.send({ res: 'logged out' })
    } );

};
