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
        console.error('Error:', error);
      } catch (error) {
        console.error('Error:', error);
      }
    },
    validateSentence(tokens) {

    // Extract the list of tags from tokens
    const tags = tokens.map(token => token.tag);

    // Define patterns for valid sentences
    const patterns = [
        // Simple sentence: Noun + Verb
        // Compound sentence: Noun + Verb + Conjunction + Noun + Verb
        ['NN', 'VV', 'CNJ', 'NN', 'VV'],
        // Complex sentence: Pronoun + Noun + Verb or Noun + Verb + Pronoun
        ['NN', 'VV', 'NN', 'JJA'],

        ['PPER', 'NN', 'VV'],
        ['NN', 'VV', 'PPER'],
        ['NR', 'VV', 'NN'],
        ['NR', 'VV', 'NN',],
        ['NR', 'VV', 'NR',],
        ['NN', 'VV', 'NN',],
        ['ADV', 'NR', 'VV', 'NN'],
        ['ADV', 'NR', 'VV', 'NN',],
        ['ADV', 'NR', 'VV', 'NR',],
        ['ADV', 'NN', 'VV', 'NN',],
        ['ADV', 'NR', 'VV', 'ADV', 'NN'],
        ['ADV', 'NR', 'VV', 'ADV', 'NN',],
        ['ADV', 'NR', 'VV', 'ADV', 'NR',],
        ['ADV', 'NN', 'VV', 'ADV', 'NN',],
        ['PPER','vv','NN'],
        ['PPER','vv','NR']
    ];
    for (let pattern of patterns) {
      if (tokens.length === pattern.length) {
          let match = true;
          for (let i = 0; i < tokens.length; i++) {
              if (tokens[i].tag !== pattern[i]) {
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
