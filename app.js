import {MDCRipple} from '@material/ripple';
import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCTextField} from '@material/textfield';

const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
iconButtonRipple.unbounded = true;
const backButtonRipple = new MDCRipple(document.querySelector('.back-button'));
backButtonRipple.unbounded = true;
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
const convButtonRipple = new MDCRipple(document.querySelector('.convertButton'));