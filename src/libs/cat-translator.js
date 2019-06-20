export default class CatTranslator {
	static translateText(text) {
		let findWord = '',
			finalText = '';

		text.split('').map(char => {
			switch (char) {
				case '<':
					finalText += this.wordToMeow(findWord);
					findWord = null;
					finalText += char;
					break;
				case '>':
					findWord = '';
					finalText += char;
					break;
				case ' ':
				case ',':
				case '.':
				case '?':
				case '\n':
					finalText += this.wordToMeow(findWord);
					findWord = '';
					finalText += char;
					break;
				default:
					if (findWord === null) {
						finalText += char;
					} else {
						findWord += char;
					}
					break;
			}
		});

		return finalText;
	}

	static wordToMeow(word) {
		if (word !== '') {
			return 'Mi';
		}

		return '';
	}
}
