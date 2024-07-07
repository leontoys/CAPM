
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("project1.controller.View1", {

		/**
		 *  Hook for initializing the controller
		 */
		onInit : function () {
			var oJSONData = {
					busy : false
				},
				oModel = new JSONModel(oJSONData);

			this.getView().setModel(oModel, "appView");
		}
	});
});
