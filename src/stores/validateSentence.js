import { defineStore } from 'pinia';
import axios from 'axios';

export const validateSentenceStore = defineStore('validateSentenceStore', {
  state: () => ({
    sentence: '',
    result: ''
  }),
  actions: {
    async checkSentence() {
      try {
        const response = await axios.post('https://api.aiforthai.in.th/tpos', 
          new URLSearchParams({ text: this.sentence }), 
          {
            headers: {
              'Apikey': 'FcKKUQ6ufY1QKywUnYERv7sxg7wT93Q3',
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );

        // Log the entire response to understand its structure
        console.log('API Response:', response);

        // Extract tokens correctly from the response
        const tokens = response.data.tags; // Ensure this path is correct

        // Additional logging to debug token extraction
    

        this.result = this.validateSentence(tokens) ? 'ประโยคถูกต้อง' : 'ประโยคไม่ถูกต้อง';
      } catch (error) {
        console.error('Error:', error);
        this.result = 'Error occurred while checking the sentence';
      }
    },
    validateSentence(tokens) {
      // Define patterns for valid sentences
      const patterns = [
        ['NN', 'VV', 'CNJ', 'NN', 'VV'],
        ['NN', 'VV', 'NN', 'JJA'],
        ['PPER', 'NN', 'VV'],
        ['NN', 'VV', 'PPER'],
        ['NR', 'VV', 'NN'],
        ['NR', 'VV', 'NN'],
        ['NR', 'VV', 'NR'],
        ['NN', 'VV', 'NN'],
        ['ADV', 'NR', 'VV', 'NN'],
        ['ADV', 'NR', 'VV', 'NN'],
        ['ADV', 'NR', 'VV', 'NR'],
        ['ADV', 'NN', 'VV', 'NN'],
        ['ADV', 'NR', 'VV', 'ADV', 'NN'],
        ['ADV', 'NR', 'VV', 'ADV', 'NN'],
        ['ADV', 'NR', 'VV', 'ADV', 'NR'],
        ['ADV', 'NN', 'VV', 'ADV', 'NN'],
        ['PPER', 'VV', 'NN'],
        ['PPER', 'VV', 'NR']
      ];

      for (let pattern of patterns) {
        if (tokens.length === pattern.length) {
          let match = true;
          for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] !== pattern[i]) {
              match = false;
              break;
            }
          }
          if (match) {
            return true;
          }
        }
      }
      return false;
    }
  },
});
