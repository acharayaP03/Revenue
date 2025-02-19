# Revenue Admin dashboard

This dashboard is built with Material ui for UI, Nivo for charts and Formik and yup for form validation.

Also contains theme switcher which has been extended with custom theme with material ui theme.

![image](https://github.com/user-attachments/assets/dbfc45d5-f1e1-409b-a7c9-4c1dbfdd18c7)

![image](https://github.com/user-attachments/assets/b1fab475-94c3-4e6e-88c6-bb824dfe22a3)

![image](https://github.com/user-attachments/assets/a1615650-3d71-4b08-af07-a6c3e5ff8077)

![image](https://github.com/user-attachments/assets/d020c5ea-0a8d-4d23-a45c-b4fa99ed196c)


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
