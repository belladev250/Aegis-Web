'use strict';

module.exports = {
  async submit(ctx) {
    const { formType, formData } = ctx.request.body;
    const file = ctx.request.files?.file;

    if (!formType || !formData) {
      return ctx.badRequest('Missing formType or formData');
    }

    try {
      let parsedFormData;

      // ✅ Handle both JSON (contact form) and multipart (file upload)
      try {
        parsedFormData =
          typeof formData === 'string' ? JSON.parse(formData) : formData;
      } catch (e) {
        parsedFormData = formData;
      }

      await strapi.service('api::send-form.email').send({
        formType,
        formData: parsedFormData,
        file,
      });

      ctx.send({ message: 'Email sent successfully' });
    } catch (err) {
      console.error('Email error:', err);
      ctx.throw(500, 'Failed to send email');
    }
  },
};
