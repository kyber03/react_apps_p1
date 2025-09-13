<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# my-react-apps
React Mini Apps 6- Part 1(Timer handling, Multi components, Props handling, usage of react-chart.js, Shadcn UI, Activity tracker,Message app), Part 2-(Basic rendering, conditional, Basic props handling, API calls(weather App)

# 🚀 My React Apps Collection
Each folder (`Day1`, `Day2`, …) contains a standalone React app built with **Vite + TypeScript + Tailwind CSS**.

---

## 📂 Project List

### 🔹 [DM Delay, Mood Mail Generator & Time Tracker](./Day1)
A collection of 3 small apps:
- **DM Delay App** → Simulates message delays for practice/testing.  
- **Mood Mail Generator** → Generates messages based on user mood input.  
- **Time Tracker with Chart** → Tracks activities and visualizes them using charts.  

📸 Screenshots available in [`Day1/takeaways/`](./Day1/takeaways).

---

## 🛠️ Tech Stack
- **React (with Vite)**
- **TypeScript**
- **Tailwind CSS**
- **ShadCN/UI components**
- **Recharts (for charts)**

---

## 💡 How to Run Locally

Clone this repo and navigate into any day’s folder (e.g. `Day1`):

```bash
git clone https://github.com/kyber03/my-react-apps.git
cd my-react-apps/Day1
npm install
npm run dev
>>>>>>> c60c9a0863a1076d03105cd8f229912d92d94665
