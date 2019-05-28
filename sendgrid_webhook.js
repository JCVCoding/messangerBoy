const localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'hughmungus65' }, function(err, tunnel) {
  console.log('LT running')
});