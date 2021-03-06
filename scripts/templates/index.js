const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const componentGenerator = require('./component/index.js');
const prettierConfigFile = require('../../prettier.config');

module.exports = plop => {
  plop.setGenerator('component', componentGenerator);
  plop.setActionType('prettify', (answers, config, plop) => {
    const folderPath = `${path.join(
      __dirname,
      `../../src/${answers.typeOfComponent}`,
      plop.getHelper('pascalCase')(answers.componentName),
    )}`;
    fs.readdirSync(folderPath).forEach(file => {
      const fileName = path.join(folderPath, file);
      let parser = 'babel';
      switch (path.extname(fileName)) {
        case '.js':
        case '.mjs':
        case '.ts':
          parser = 'babel';
          break;
        case '.css':
        case '.scss':
          parser = 'css';
          break;
        case '.json':
          parser = 'json';
          break;
        case '.md':
          parser = 'markdown';
          break;
        case '.html':
          parser = 'html';
          break;
        case '.tsx':
          parser = 'typescript';
          break;
        default:
          parser = 'babel';
      }
      const prettierConfig = {
        ...prettierConfigFile,
        parser,
      };
      const fileString = fs.readFileSync(fileName).toString();
      const prettierString = prettier.format(fileString, prettierConfig);
      fs.writeFileSync(fileName, prettierString);
    });
    try {
      return folderPath;
    } catch (err) {
      throw err;
    }
  });
};
