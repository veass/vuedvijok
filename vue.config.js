module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles.sass";` // Подключение глобального стиля
      }
    }
  }
};