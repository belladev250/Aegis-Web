module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/send-form',
      handler: 'send-form.submit',
      config: {
        auth: false,
      },
    },
  ],
};
