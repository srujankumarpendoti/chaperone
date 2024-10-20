/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "left-image":
          "url('https://res.cloudinary.com/dr8jg61z3/image/upload/v1729352186/chaperone/Ellipse_40_aks5mb.png')",
        "right-image":
          "url('https://res.cloudinary.com/dr8jg61z3/image/upload/v1729352189/chaperone/Ellipse_41_bf0vlr.png')",
      },
    },
  },
  plugins: [],
};
