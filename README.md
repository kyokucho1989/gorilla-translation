# gorilla-translation

ウホウホ

# ウ？ウホホ ウ！ホッホ ホホゥウゥ ウ！ホホゥ

ウ？ホゥ ホッホウホ？ ウホッウホウ ウホッウホー ウホッウホッ ホッホウーッ ウ？ホッホ ホホゥウホッ ホホゥウッホ ホッホウホ？ ウ？ホゥ ホッホウゥ ホッホウーホ ホホゥウ？ ホホッウホウ ホホゥホゥ ホホッホッホ ウ？ウーッ ウ？ホ！ ホホッウホ？ ホゥウッホ

# Install

Install with npm:

```terminal
$ npm install gorilla-translation
```

# Usage

## Japanese -> Gorilla

```javascript
import Gorilla from "gorilla-translation";
Gorilla.convertToUho("こんにちは、わたしはゴリラです。");

// Output: ウ？ホゥ ホホゥホゥ ホッホウホウ ホゥウ！ ホッホウーッ ウホーウ！ ホホゥウーッ ホゥウーッ ウ？ホ！ ホッホウーッ ウ？ホッホ ホホゥウホッ ホホゥウッホ ホゥホ！ ホゥウッホ ウホーウ？
```

## Gorilla -> Japanese

```javascript
import Gorilla from "gorilla-translation";
Gorilla.convertToHuman(
  "ホッホウーホ ホッホウホッ ホッホウホッ ウ？ウーッ ホホゥウホホ",
);

// Outpu: ばななくれ
```

# Keep in mind:

- This translation service does not support Kanji, lowercase letters

- After translating alphabets (both uppercase and lowercase) and Katakana into Gorilla language, the output will be a combination of uppercase letters and Hiragana

## example:

```javascript
Gorilla.convertToUho("バナナぁ 頂戴!");

/*
Error: 無効な入力です。ひらがな小文字（ゃゅょ以外）や、漢字や記号(!?・スペース)は含めないでください。
*/

Gorilla.convertToUho("バナナくれ");

// Output: ホッホウーホ ホッホウホッ ホッホウホッ ウ？ウーッ ホホゥウホホ

Gorilla.convertToHuman(
  "ホッホウーホ ホッホウホッ ホッホウホッ ウ？ウーッ ホホゥウホホ",
);

// Output: ばななくれ
```
