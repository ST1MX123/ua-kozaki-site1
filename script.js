const express = require('express');
const session = require('express-session');
const passport = require('passport');
const SteamStrategy = require('passport-steam').Strategy;
const path = require('path');

const app = express();

const STEAM_API_KEY = 'ТУТ_ТВІЙ_STEAM_API_KEY';

passport.use(new SteamStrategy({
    returnURL: 'https://your-app-name.onrender.com/auth/steam/return',
    realm: 'https://your-app-name.onrender.com/',
    apiKey: STEAM_API_KEY
}, (identifier, profile, done) => done(null, profile)));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

app.use(session({
    secret: 'kozaki',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname)));

app.get('/auth/steam', passport.authenticate('steam'));

app.get('/auth/steam/return',
passport.authenticate('steam', { failureRedirect: '/' }),
(req, res) => res.redirect('/')
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


