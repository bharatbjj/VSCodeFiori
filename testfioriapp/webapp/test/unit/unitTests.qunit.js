/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"bb/myapp/demo/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});