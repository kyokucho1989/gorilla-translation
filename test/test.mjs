import test from "node:test";
import { strict as assert } from "assert";
import Gorilla from "../index.js";

const testAbc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const testUhoAbc =
  "ウッホウホ？ ウッホウーッ ウッホウーホ ウッホウ！ ウッホウ？ ウッホホゥ ウッホホッホ ウッホホホッ ウッホホホゥ ウッホホ！ ウホッウゥ ウホッウッホ ウホッウホッ ウホッウホウ ウホッウホホ ウホッウホー ウホッウホ？ ウホッウーッ ウホッウーホ ウホッウ！ ウホッウ？ ウホッホゥ ウホッホッホ ウホッホホッ ウホッホホゥ ウホッホ！";
const testKana =
  "あいうえおかきくけこがぎぐげごさしすせそざじずぜぞたちつてとだぢづでどなにぬねのはひふへほばびぶべぼぱぴぷぺぽまみむめもやゆよらりるれろわをんゃゅょ";

const testUhoKana =
  "ウ！ウ？ ウ！ホッホ ウ！ホホゥ ウ？ウゥ ウ？ウホッ ウ？ウホウ ウ？ウホー ウ？ウーッ ウ？ウ！ ウ？ホゥ ウ？ウホホ ウ？ウホ？ ウ？ウーホ ウ？ウ？ ウ？ホッホ ウ？ホホッ ウ？ホ！ ホゥウッホ ホゥウホウ ホゥウホー ウ？ホホゥ ホゥウゥ ホゥウホッ ホゥウホホ ホゥウホ？ ホゥウーッ ホゥウ！ ホゥホッホ ホゥホホゥ ホッホウゥ ホゥウーホ ホゥウ？ ホゥホホッ ホゥホ！ ホッホウッホ ホッホウホッ ホッホウホウ ホッホウホホ ホッホウホー ホッホウホ？ ホッホウーッ ホッホウ？ ホッホホホッ ホホッウゥ ホホッウホウ ホッホウーホ ホッホホゥ ホッホホホゥ ホホッウッホ ホホッウホホ ホッホウ！ ホッホホッホ ホッホホ！ ホホッウホッ ホホッウホー ホホッウホ？ ホホッウーッ ホホッウーホ ホホッウ！ ホホッウ？ ホホッホッホ ホホッホホゥ ホホゥウゥ ホホゥウッホ ホホゥウホッ ホホゥウホウ ホホゥウホホ ホホゥウホー ホホゥウーッ ホホゥウ？ ホホゥホゥ ホホッホゥ ホホッホホッ ホホッホ！";

test("ABCの翻訳がうまくいくか", () => {
  // This test passes because it does not throw an exception.
  assert.strictEqual(Gorilla.convertToUho(testAbc), testUhoAbc);
  assert.strictEqual(Gorilla.convertToHuman(testUhoAbc), testAbc);
});

test("ひらがなの翻訳がうまくいくか", () => {
  assert.strictEqual(Gorilla.convertToUho(testKana), testUhoKana);
  assert.strictEqual(Gorilla.convertToHuman(testUhoKana), testKana);
});
