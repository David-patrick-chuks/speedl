const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: {
          500: "#7C5CFC",
          900: "#1D1178"
          
        },
        Success: {
          100: "#3B6506",

        },
        secondary: {
          200:"#C3D4E9",
          500: "#1A202C",

        }
      },
  
    },
  },
  plugins: [],
});
