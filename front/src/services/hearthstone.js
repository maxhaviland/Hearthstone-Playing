import axios from 'axios';

export const hearthstoneService = {
  api: axios.create({ 
    baseURL: process.env.HEARHSTONE_API 
  }),

  getCards(params) {
    try {
      const response = await api.get('/cards');
    } catch(error) {
      return {
        cards: [],
        total: 0,
        status: 500
      }
    }
  }
};

