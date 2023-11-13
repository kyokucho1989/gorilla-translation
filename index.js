const replacementPatterns = [
  "ウゥ",
  "ウッホ",
  "ウホッ",
  "ウホウ",
  "ウホホ",
  "ウホー",
  "ウホ？",
  "ウーッ",
  "ウーホ",
  "ウ！",
  "ウ？",
  "ホゥ",
  "ホッホ",
  "ホホッ",
  "ホホゥ",
  "ホ！",
]; // 置き換えパターン

const kanaCharCodeShiftValue = 12200;
const romanCharCodeShiftValue = 43;

class Gorilla {
  static convertToHuman(text) {
    let decryptedArray = text.split(" ");
    let charCodeArray = [];
    for (let i = 0; i < decryptedArray.length; i++) {
      let beforeAnalysisChar = decryptedArray[i];
      let charCode;
      let charHexCode;
      for (let j = 0; j < replacementPatterns.length; j++) {
        if (beforeAnalysisChar === replacementPatterns[j]) {
          charHexCode = j.toString(16);
          charCode = parseInt(charHexCode, 16);
          charCodeArray.push(charCode);
          break;
        }
        for (let k = 0; k < replacementPatterns.length; k++) {
          if (
            beforeAnalysisChar ===
            replacementPatterns[j] + replacementPatterns[k]
          ) {
            charHexCode = j.toString(16) + k.toString(16);
            charCode = parseInt(charHexCode, 16);
            charCodeArray.push(charCode);
            break;
          }
        }
      }
    }
    return this.convertCharCodeToText(charCodeArray);
  }

  static convertToUho(originalText) {
    //入力値のチェック
    const regex = new RegExp("[^あ-んア-ンA-Za-z0-9。,、.]");
    if (regex.test(originalText)) {
      throw new Error(
        `無効な入力です。ひらがな小文字（ゃゅょ以外）や、漢字や記号(!?・スペース)は含めないでください。`
      );
    }

    // カタカナをひらがなに変換。小文字を大文字に変換
    let replacedText = this.convertHiragana(originalText).toUpperCase();
    // 文字列を文字コードに変換。扱いやすいようにシフト
    let charCodeText = this.convertCharCode(replacedText);
    // 10進数の文字コードを16進数に変換
    let hexCharCodeText = charCodeText.map((char) => char.toString(16));
    // 16種類の文字をゴリラ語に置き換え
    const gorillaText = hexCharCodeText.map((char) => {
      return char.replace(/[0123456789abcdef]/g, (match) => {
        return replacementPatterns[parseInt(match, 16)];
      });
    });
    return gorillaText.join(" ");
  }

  static convertHiragana(text) {
    let replacedText = text.replace(/[\u30a1-\u30f6]/g, function (match) {
      const chr = match.charCodeAt(0) - 0x60;
      return String.fromCharCode(chr);
    });
    return replacedText;
  }

  static convertCharCode(text) {
    return text.split("").map(function (char) {
      let charCode = char.charCodeAt(0);
      if (charCode > 100) {
        charCode = charCode - kanaCharCodeShiftValue;
      } else {
        charCode = charCode - romanCharCodeShiftValue;
      }
      return charCode;
    });
  }

  static convertCharCodeToText(charArray) {
    let codeArray = charArray.map(function (charCode) {
      if (charCode > 50) {
        charCode = charCode + kanaCharCodeShiftValue;
      } else {
        charCode = charCode + romanCharCodeShiftValue;
      }
      return charCode;
    });
    return String.fromCharCode(...codeArray);
  }
}
export default Gorilla;
