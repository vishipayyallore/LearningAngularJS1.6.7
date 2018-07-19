"use strict";

import { FirstController } from "./first.component";

// define the `phonecatApp` module
angular.module("sampleApp", [
  "firstPage"
])
.controller("FirstController", FirstController);