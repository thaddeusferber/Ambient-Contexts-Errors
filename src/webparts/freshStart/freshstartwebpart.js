"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var sp_lodash_subset_1 = require("@microsoft/sp-lodash-subset");
var FreshStartWebPart_module_scss_1 = require("./FreshStartWebPart.module.scss");
var strings = require("FreshStartWebPartStrings");
var sp_1 = require("@pnp/sp"); //added per https://pnp.github.io/pnpjs/documentation/getting-started/
var FreshStartWebPart = (function (_super) {
    __extends(FreshStartWebPart, _super);
    function FreshStartWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //added next method per: https://pnp.github.io/pnpjs/documentation/getting-started/
    FreshStartWebPart.prototype.onInit = function () {
        var _this = this;
        return _super.prototype.onInit.call(this).then(function (_) {
            // other init code may be present
            sp_1.sp.setup({
                spfxContext: _this.context
            });
        });
    };
    FreshStartWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + FreshStartWebPart_module_scss_1["default"].freshStart + "\">\n        <div class=\"" + FreshStartWebPart_module_scss_1["default"].container + "\">\n          <div class=\"" + FreshStartWebPart_module_scss_1["default"].row + "\">\n            <div class=\"" + FreshStartWebPart_module_scss_1["default"].column + "\">\n              <span class=\"" + FreshStartWebPart_module_scss_1["default"].title + "\">Welcome to SharePoint!</span>\n              <p class=\"" + FreshStartWebPart_module_scss_1["default"].subTitle + "\">Customize SharePoint experiences using Web Parts.</p>\n              <p class=\"" + FreshStartWebPart_module_scss_1["default"].description + "\">" + sp_lodash_subset_1.escape(this.properties.description) + "</p>\n              <a href=\"https://aka.ms/spfx\" class=\"" + FreshStartWebPart_module_scss_1["default"].button + "\">\n                <span class=\"" + FreshStartWebPart_module_scss_1["default"].label + "\">Learn more</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>";
    };
    Object.defineProperty(FreshStartWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    FreshStartWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return FreshStartWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports["default"] = FreshStartWebPart;
