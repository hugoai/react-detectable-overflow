"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_resize_detector_1 = require("react-resize-detector");
var defaultTag = 'div';
var defaultStyle = {
    width: '100%',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
};
var DetectableOverflow = /** @class */ (function (_super) {
    __extends(DetectableOverflow, _super);
    function DetectableOverflow(props) {
        var _this = _super.call(this, props) || this;
        _this.ref = null;
        _this.state = { isOverflowed: false };
        _this.updateState = _this.updateState.bind(_this);
        return _this;
    }
    DetectableOverflow.prototype.componentDidMount = function () {
        this.updateState();
    };
    DetectableOverflow.prototype.componentDidUpdate = function () {
        this.updateState();
    };
    DetectableOverflow.prototype.updateState = function () {
        if (this.ref === null) {
            return;
        }
        var newState = this.ref.offsetWidth !== this.ref.scrollWidth;
        if (newState === this.state.isOverflowed) {
            return;
        }
        this.setState({ isOverflowed: newState });
        if (this.props.onChange) {
            this.props.onChange(newState);
        }
    };
    DetectableOverflow.prototype.render = function () {
        var _this = this;
        var tag = this.props.tag ? this.props.tag : defaultTag;
        var style = this.props.style ? this.props.style : defaultStyle;
        var className = this.props.className ? this.props.className : '';
        var props = {
            style: style,
            className: className,
            ref: function (el) {
                _this.ref = (el instanceof HTMLElement) ? el : null;
            },
        };
        return React.createElement(tag, props, React.createElement(react_resize_detector_1.default, { handleWidth: true, onResize: this.updateState }), this.props.children);
    };
    return DetectableOverflow;
}(React.Component));
exports.DetectableOverflow = DetectableOverflow;
//# sourceMappingURL=DetectableOverflow.js.map