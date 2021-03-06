var __hasProp = Object.prototype.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

define(['lib/subscriber'], function(Subscriber) {
  'use strict';
  var Model;
  return Model = (function(_super) {

    __extends(Model, _super);

    function Model() {
      Model.__super__.constructor.apply(this, arguments);
    }

    _(Model.prototype).defaults(Subscriber);

    Model.prototype.getAttributes = function() {
      return this.attributes;
    };

    Model.prototype.disposed = false;

    Model.prototype.dispose = function() {
      var prop, properties, _i, _len;
      if (this.disposed) return;
      this.trigger('dispose', this);
      this.unsubscribeAllEvents();
      properties = 'collection attributes _escapedAttributes _previousAttributes _callbacks'.split(' ');
      for (_i = 0, _len = properties.length; _i < _len; _i++) {
        prop = properties[_i];
        delete this[prop];
      }
      this.disposed = true;
      return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
    };

    return Model;

  })(Backbone.Model);
});
