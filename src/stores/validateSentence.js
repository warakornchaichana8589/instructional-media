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
        const apiKey = 'FcKKUQ6ufY1QKywUnYERv7sxg7wT93Q3';
        const url = `https://api.aiforthai.in.th/tpos`;
        const response = await axios.get(url, {
          params: { text: this.sentence },
          headers: {
            'Apikey': apiKey
          }
        });

        const tokens = response.data.words.map((word, index) => ({
          word,
          tag: response.data.tags[index]
        }));

        console.log(tokens);
        const isValid = this.validateSentence(tokens);
        this.result = isValid ? 'ประโยคถูกต้อง' : 'ประโยคไม่ถูกต้อง';
      } catch (error) {
        console.error('Error:', error);
        this.result = 'เกิดข้อผิดพลาดในการตรวจสอบประโยค';
      }
    },
    validateSentence(tokens) {
      const isNoun = tag => tag === 'NN' || tag === 'NR';
    const isVerb = tag => tag === 'VV';
    const isConjunction = tag => tag === 'CNJ';
    const isPronoun = tag => tag === 'PPER';

    // Check if the sentence has at least one noun and one verb
    const hasSubjectPredicate = tokens.some(token => isNoun(token.tag)) &&
                                 tokens.some(token => isVerb(token.tag));

    if (!hasSubjectPredicate) {
        return false;
    }

    // Extract the list of tags from tokens
    const tags = tokens.map(token => token.tag);

    // Define patterns for valid sentences
    const patterns = [
        // Simple sentence: Noun + Verb
        ['NN', 'VV'],
        // Compound sentence: Noun + Verb + Conjunction + Noun + Verb
        ['NN', 'VV', 'CNJ', 'NN', 'VV'],
        // Complex sentence: Pronoun + Noun + Verb or Noun + Verb + Pronoun
        ['PPER', 'NN', 'VV'],
        ['NN', 'VV', 'PPER'],
        ['NR', 'VV', 'NN'],
        ['NN', 'VV', 'NN', 'JJA'],
    ];

    // Check if any of the patterns match the sequence of tags
    for (let pattern of patterns) {
        if (tags.length === pattern.length) {
            let match = true;
            for (let i = 0; i < tags.length; i++) {
                const tagName = pattern[i];
                if (tagName === 'NOUN' && !isNoun(tags[i])) {
                    match = false;
                    break;
                } else if (tagName === 'VERB' && !isVerb(tags[i])) {
                    match = false;
                    break;
                } else if (tagName === 'CONJ' && !isConjunction(tags[i])) {
                    match = false;
                    break;
                } else if (tagName === 'PRON' && !isPronoun(tags[i])) {
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
