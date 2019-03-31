import { run } from './app/app';
import './main.css';
import { AlertService } from './app/alert.service';
import { ComponetService } from './app/component.service';

const alertService = new AlertService();
const componentService = new ComponetService();

run(alertService, componentService);
