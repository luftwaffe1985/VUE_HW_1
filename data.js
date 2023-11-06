// Задание 1
// Создать кнопку "Перевернуть". При клике на кнопку текст кнопки, должен перевернуться и отобразиться в обратном порядке.
// Задание 2
// есть список элементов. Пользователь может добавлять новые элементы списка с текстом “Новый элемент списка” нажав на кнопку "Добавить".
// 3. *Дополнительное задание: При клике на элемент списка он должен быть удален. (по желанию)

Vue.createApp({
  data() {
    return {
      buttonText: "Turn over",
      listOfElements: ["elem 1", "elem 2", "elem 3", "elem 4", "elem 5"],
      newElement: "New elem",
    };
  },
  methods: {
    reverseButtonText() {
      this.buttonText = this.buttonText.split("").reverse().join("");
    },
    addNewElementToList() {
      this.listOfElements.push(this.newElement);
    },
    deleteElementFromList(event) {
      event.target.remove();
    },
  },
}).mount("#app");
