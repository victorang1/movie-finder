import "regenerator-runtime";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import main from './script/view/main.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';

import "./script/components/app-header.js";

document.addEventListener("DOMContentLoaded", main());