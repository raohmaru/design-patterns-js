import DataModel from './model.js';
import View1 from './view1.js';
import View2 from './view2.js';
import Controller from './controller.js';

const model = new DataModel();
const view1 = new View1(model);
const view2 = new View2(model);
const ctrl = new Controller(model);
ctrl.start();