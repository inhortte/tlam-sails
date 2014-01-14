var jwt = require('jwt-simple');

function newRefreshToken(access_token, cb) {
  RefreshToken.create({
    access_token_id: access_token.id,
    token_type: '',
    refresh_token: access_token.access_token,
    expiry: 14400,
    salty: 'smafco'
  }).done(function(err, rt) {
    cb(rt);
  });
}

function newAccessToken(user, cb) {
  AccessToken.create({
    access_token: JSON.stringify(user),
    token_type: 'bearer',
    user_id: user.id,
    expiry: 3600, // one hour
    salty: 'thurk'
  }).done(function(err, at) {
    cb(at);
  });
}

function rfc6749Response(access_token, refresh_token, cb) {
  cb({
    access_token: access_token.access_token,
    token_type: access_token.token_type,
    expires_in: access_token.expiry,
    refresh_token: refresh_token.refresh_token
  });
}

module.exports = {
  newRefreshToken: newRefreshToken,
  newAccessToken: newAccessToken,
  rfc6749Response: rfc6749Response
};
