module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
      "no-mixed-spaces-and-tabs": 0, // disable rule

    },
    "globals": {
        "$": true,
        "require": true,
        "process": true
      }
}
