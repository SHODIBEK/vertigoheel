/* eslint-disable func-names */
import header from "./components/header";
import { ieFix } from "./vendor/ie-fix";
import { vhFix } from "./vendor/vh-fix";
import { actualYear } from "./modules/actualYear";
import { headerFixed } from "./components/headerFixed";

ieFix();
vhFix();
actualYear();
header.init();
headerFixed();
