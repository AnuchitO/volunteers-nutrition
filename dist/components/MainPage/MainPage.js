"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var MainPage = (function (_super) {
    __extends(MainPage, _super);
    function MainPage() {
        _super.apply(this, arguments);
    }
    MainPage.prototype.render = function () {
        return React.createElement("div", {className: "container"}, 
            React.createElement("div", {className: "row"}, 
                React.createElement("div", {className: "col-md-6"}, 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-md-9"}, 
                            React.createElement("div", {className: "form-group form-group-label"}, 
                                React.createElement("label", {className: "floating-label", for: "search"}, "Search"), 
                                React.createElement("input", {className: "form-control", id: "search", type: "text"}))
                        ), 
                        React.createElement("div", {className: "col-md-3"}, 
                            React.createElement("div", {className: "form-group form-group-label"}, 
                                React.createElement("button", {className: "btn btn-brand"}, "Create")
                            )
                        )), 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-md-12"}, 
                            React.createElement("div", {className: "table-responsive"}, 
                                React.createElement("table", {className: "table"}, 
                                    React.createElement("thead", null, 
                                        React.createElement("tr", null, 
                                            React.createElement("th", null, "NO"), 
                                            React.createElement("th", null, "Name"), 
                                            React.createElement("th", null, "Phone Number"))
                                    ), 
                                    React.createElement("tbody", null, 
                                        React.createElement("tr", null, 
                                            React.createElement("td", null, "1"), 
                                            React.createElement("td", null, "Junji"), 
                                            React.createElement("td", null, "090-1619-3144")), 
                                        React.createElement("tr", null, 
                                            React.createElement("td", null, "2"), 
                                            React.createElement("td", null, "Kazunori"), 
                                            React.createElement("td", null, "090-1619-1111")), 
                                        React.createElement("tr", null, 
                                            React.createElement("td", null, "3"), 
                                            React.createElement("td", null, "Satoka"), 
                                            React.createElement("td", null, "090-1619-2222"))))
                            )
                        )
                    )), 
                React.createElement("div", {className: "col-md-6"}, 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("form", {className: "content-inner", onSubmit: ""}, 
                            React.createElement("div", {className: "row"}, 
                                React.createElement("div", {className: "col-md-7"}, 
                                    React.createElement("div", {className: "form-group form-group-label"}, 
                                        React.createElement("label", {className: "floating-label", for: "no"}, "No"), 
                                        React.createElement("input", {className: "form-control", id: "no", type: "text"})), 
                                    React.createElement("div", {className: "form-group form-group-label"}, 
                                        React.createElement("label", {className: "floating-label", for: "name"}, " Name "), 
                                        React.createElement("input", {className: "form-control", id: "name", type: "text"})), 
                                    React.createElement("div", {className: "form-group form-group-label"}, 
                                        React.createElement("label", {className: "floating-label", for: "phone-number"}, " Phone Number "), 
                                        React.createElement("input", {className: "form-control", id: "phone-number", type: "email"})), 
                                    React.createElement("div", {className: "form-group form-group-label"}, 
                                        React.createElement("label", {className: "floating-label", for: "email"}, " Email "), 
                                        React.createElement("input", {className: "form-control", id: "email", type: "email"})), 
                                    React.createElement("div", {className: "form-group form-group-label"}, 
                                        React.createElement("label", {className: "floating-label", for: "sex"}, " Sex "), 
                                        React.createElement("input", {className: "form-control", id: "sex", type: "sex"}))), 
                                React.createElement("div", {className: "col-md-5"}, 
                                    React.createElement("div", {className: "row text-center"}, 
                                        React.createElement("div", {className: "col-md-12"}, 
                                            React.createElement("div", {className: "form-group form-group-label"}, 
                                                React.createElement("button", {className: "btn btn-green"}, "Start"), 
                                                React.createElement("button", {className: "btn btn-red"}, "Exit"))
                                        )
                                    ), 
                                    React.createElement("div", {className: "row"}, 
                                        React.createElement("div", {className: "col-md-12 text-center"}, 
                                            React.createElement("button", {className: "btn btn-brand"}, "Call")
                                        )
                                    ), 
                                    React.createElement("div", {className: "row"}, 
                                        React.createElement("div", {className: "col-md-12"}, 
                                            React.createElement("div", {className: "form-group form-group-label"}, 
                                                React.createElement("button", {className: "btn btn-green"}, "Transfer"), 
                                                React.createElement("button", {className: "btn btn-orange"}, "Hold"), 
                                                React.createElement("button", {className: "btn btn-red"}, "Trun Off"))
                                        )
                                    ))), 
                            React.createElement("div", {className: "row"}, 
                                React.createElement("div", {className: "col-md-12"}, 
                                    React.createElement("div", {className: "form-group form-group-label"}, 
                                        React.createElement("label", {className: "floating-label", for: "note"}, " Note "), 
                                        React.createElement("textarea", {className: "form-control textarea-autosize", id: "note", rows: "4"}))
                                )
                            ), 
                            React.createElement("div", {className: ""}, 
                                React.createElement("button", {className: "btn btn-brand pull-right"}, "Edit")
                            ))
                    ), 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "col-md-12"}, 
                            React.createElement("h5", null, "Search"), 
                            React.createElement("div", {className: "table-responsive"}, 
                                React.createElement("table", {className: "table"}, 
                                    React.createElement("thead", null, 
                                        React.createElement("tr", null, 
                                            React.createElement("th", null, "NO"), 
                                            React.createElement("th", null, "Name"), 
                                            React.createElement("th", null, "Phone Number"))
                                    ), 
                                    React.createElement("tbody", null, 
                                        React.createElement("tr", null, 
                                            React.createElement("td", null, "1"), 
                                            React.createElement("td", null, "Junji"), 
                                            React.createElement("td", null, "090-1619-3144")), 
                                        React.createElement("tr", null, 
                                            React.createElement("td", null, "2"), 
                                            React.createElement("td", null, "Kazunori"), 
                                            React.createElement("td", null, "090-1619-1111")), 
                                        React.createElement("tr", null, 
                                            React.createElement("td", null, "3"), 
                                            React.createElement("td", null, "Satoka"), 
                                            React.createElement("td", null, "090-1619-2222"))))
                            ))
                    )))
        );
    };
    return MainPage;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MainPage;
