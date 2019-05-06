const app = require("./App");

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test("creates new programme and adds to localDepo", () => {
  app.newProgramme("New show", "A description", true)
  expect(51).toBe(app.programmes.length;
});
