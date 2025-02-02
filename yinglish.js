const nodejieba = require("nodejieba");

const translate = (text, licentious = 0.5) => {
    const cutText = nodejieba.tag(text);

    return cutText
        .map(({ word, tag }) => {
            if (Math.random() > licentious) return word;

            if (["，", "。", ",", "."].includes(word)) return "……";
            if (["!", "！"].includes(word)) return "❤";

            if (word.length > 1 && Math.random() < 0.5) {
                return `${word[0]}……${word}`;
            }

            if (tag.startsWith("n") && Math.random() < 0.5) {
                word = "〇".repeat(word.length);
            }

            return `……${word}`;
        })
        .join("");
};

module.exports = translate;

