"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'John Doe',
          email: 'john@hotmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Maria',
          email: 'maria@hotmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Diego',
          email: 'diego@hotmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },
};
