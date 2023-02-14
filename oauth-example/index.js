const express = require('express');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const cookieSession = require('cookie-session');
const config = require('./config.js');

app.use(cookieSession({
    maxAge: 60 * 1000,
    keys: ['12345']
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
        clientID: config.oauthConfig.Google.clientID,
        clientSecret: config.oauthConfig.Google.clientSecret,
        callbackURL: 'http://localhost:8000/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        done(null,profile);
    }
));

passport.serializeUser((user, done) => {
    done(null,user);
});

passport.deserializeUser((user, done) => {
    done(null,user);
});

function isUserAuthenticated(req, res, next) {
    if(req.user) {
        next();
    } else {
        res.send('You must login');
    }
}

app.get('/',(req,res) => {
    res.render('index.ejs');
});

app.get('/auth/google', passport.authenticate('google', {
   scope: ['https://www.googleapis.com/auth/userinfo.profile'] 
}));

app.get('/auth/google/callback', passport.authenticate('google'), (req,res) => {
    res.redirect('/secret');
 });

 app.get('/secret',isUserAuthenticated, (req, res) => {
    res.send('You have reached the secret route');
 });

 app.get('/logout', (req,res) => {
    req.logout();
    res.redirect('/');
 });

 app.listen(8000, () => {
    console.log('Server Started!...');
 });