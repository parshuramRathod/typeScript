var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Eventmanagement = /** @class */ (function () {
    function Eventmanagement() {
    }
    Eventmanagement.prototype.display = function () {
        console.log("Event organized for engagement ceremony");
    };
    return Eventmanagement;
}());
var Organizer = /** @class */ (function (_super) {
    __extends(Organizer, _super);
    function Organizer(id, name) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        return _this;
    }
    Organizer.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("".concat(this.id, " ").concat(this.name));
    };
    return Organizer;
}(Eventmanagement));
var Eventt = /** @class */ (function (_super) {
    __extends(Eventt, _super);
    function Eventt(id, name, discription, startTime) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.discription = discription;
        _this.startTime = startTime;
        return _this;
    }
    Eventt.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("".concat(this.id, " ").concat(this.name, " ").concat(this.discription, " ").concat(this.startTime));
    };
    return Eventt;
}(Eventmanagement));
var Venue = /** @class */ (function (_super) {
    __extends(Venue, _super);
    function Venue(id, name, discription, address) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.discription = discription;
        _this.address = address;
        return _this;
    }
    Venue.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("".concat(this.id, " ").concat(this.name, " ").concat(this.discription, " ").concat(this.address));
    };
    return Venue;
}(Eventmanagement));
var eventmanagment = new Array(new Organizer(1122, "Rajmudra"), new Eventt(1122, "Rajmudra", "Engagement ceremony", "18:00"), new Venue(1122, "Rajmudra", "Engagement ceremony", "Nirmiti Lawns vijapur road solapur"));
for (var _i = 0, eventmanagment_1 = eventmanagment; _i < eventmanagment_1.length; _i++) {
    var eve = eventmanagment_1[_i];
    eve.display();
}
