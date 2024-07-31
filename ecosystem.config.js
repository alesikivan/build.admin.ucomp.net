module.exports = {
  apps : [{
    script: './core/admin.ucomp.js',
    env : {
      'PORT': 80,
      'NODE_ENV' : 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : ['77.37.49.238'],
      ref  : 'origin/main',
      repo : 'https://github.com/alesikivan/build.admin.ucomp.net',
      path : '/root/apps/admin.ucomp.net',
      'pre-deploy-local': '',
      'post-deploy' : 'pm2 delete admin.ucomp && pm2 start ./core/admin.ucomp.js --name admin.ucomp && pm2 save --force',
      'pre-setup': ''
    }
  }
};
