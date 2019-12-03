let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");
console.log(styles);

// Замените значение в середине на «Классика».
// Ваш код для поиска значения в середине должен работать для массивов с любой длиной.

if (styles.length % 2 === 1) {
  const pohyi = styles.length / 2 - 0.5;
  styles [pohyi] = "классика";
}

const deleted = styles.shift();
console.log(deleted);

styles.unshift("Чёрная рэпчина", "Регги");
console.log(styles);

1 - 0
3 - 1
5 - 2
7 - 3
9 - 4

