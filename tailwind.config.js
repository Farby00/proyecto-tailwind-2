/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "360px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    extend: {
      backgroundImage: {
        biryani: "url('../img/biryani.jpg')",
        burger: "url('../img/burger.jpg')",
        cake: "url('../img/cake.jpg')",
        chocolate: "url('../img/chocolate.jpg')",
        chocolatedrink: "url('../img/chocolate_Drink.jpg')",
        foodplate: "url('../img/Food-Plate.png')",
        gallary1: "url('../img/gallary_1.jpg')",
        gallary2: "url('../img/gallary_2.jpg')",
        gallary3: "url('../img/gallary_3.jpg')",
        gallary4: "url('../img/gallary_4.jpg')",
        gallary5: "url('../img/gallary_5.jpg')",
        gallary6: "url('../img/gallary_6.jpg')",
        hotdog: "url('../img/Hot_dog.jpg')",
        icecream: "url('../img/ice_cream.jpg')",
        juice: "url('../img/juse.jpg')",
        lasagna: "url('../img/lasagna.jpg')",
        pasta: "url('../img/pasta.jpg')",
        pizza: "url('../img/pizza.jpg')",
        sandwich: "url('../img/sandwich.jpg')",
        spanchi: "url('../img/Spanchi.jpg')",
        customer1: "url('../img/review_1.png')",
        customer2: "url('../img/review_2.png')",
        customer3: "url('../img/review_3.png')",
        customer4: "url('../img/review_4.png')",
        chef1: "url('../img/chef1.png')",
        chef2: "url('../img/chef2.png')",
        chef3: "url('../img/chef3.jpg')",
        chef4: "url('../img/chef4.jpg')",
        formImg: "url('../img/order_image.png')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#FAC031",
        secondary: "#8D8080",
        tertiary: "#BAABAB",
      }),
      textColor: {
        primary: "#FAC031",
        secondary: "#8D8080",
        tertiary: "#BAABAB",
      },

      fontFamily: {
        mvBoli: ["MV Boli"],
      },
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      red: colors.red,
      lime: colors.lime,
      blue: colors.blue,

      custom: {
        default: "#CC2D4A",
        light: "white",
      },
    },
  },

  variants: {
    width: ["responsive", "hover", "focus"],
    scrollbar: ["rounded"],
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("tailwind-scrollbar-hide"),
  ],
};
