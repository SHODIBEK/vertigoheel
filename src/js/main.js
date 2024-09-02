/* eslint-disable func-names */
import header from "./components/header";
import { ieFix } from "./vendor/ie-fix";
import { vhFix } from "./vendor/vh-fix";
import { actualYear } from "./modules/actualYear";
import { headerFixed } from "./components/headerFixed";
import MicroModal from "micromodal";

ieFix();
vhFix();
actualYear();
header.init();
headerFixed();
MicroModal.init({
	openTrigger: "data-modal-open",
	closeTrigger: "data-modal-close",
	openClass: "is-open",
	awaitOpenAnimation: true,
	awaitCloseAnimation: true,
	disableScroll: true,
});
