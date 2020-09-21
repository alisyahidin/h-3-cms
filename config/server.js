module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://h3cms.h-three.id',
  admin: {
    auth: {
      secret: 'EmFnbRLlClH6xqPzh7R+yzVNRmkDO4gg+18yDrM7fANHCumrU+bnHoet5Vi5xYjib55Zpj56o34unRwRnrUcwQ=='
    }
  }
});
