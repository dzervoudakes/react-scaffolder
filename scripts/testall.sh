# Run all tasks for a template
cd generators/app/templates/$1 && npm install && npm run lint && npm run stylelint && npm run docs && npm test && npm run build && npm run clean
