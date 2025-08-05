'use strict';

module.exports = {
  async submit(ctx) {
    const { formType, formData } = ctx.request.body;

    if (!formType || !formData) {
      return ctx.badRequest('Missing formType or formData');
    }

    try {
      await strapi.service('api::send-form.email').send({ formType, formData });
      ctx.send({ message: 'Email sent successfully' });
    } catch (err) {
      console.error('Email error:', err);
      ctx.throw(500, 'Failed to send email');
    }
  },
};
