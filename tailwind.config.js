const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide_up: {
          "0%": {
            transform: "translateY(100%)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slide_down: {
          "0%": {
            transform: "translateY(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
        },
        wheel: {
          "0%": {
            transform: "translateY(0)",
          },
          "30%": {
            transform: "translateY(2.8rem)",
          },
          
        },
      },
      animation: {
        profile: "profile_animation 5s ease-in-out infinite",
        wheel: "wheel 2s ease infinite",
        slideUp: "slide_up 0.2s ease-out forwards",
        slideDown: "slide_down 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
