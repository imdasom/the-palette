(window.webpackJsonp = window.webpackJsonp || []).push([[2], {
  19: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return l
    });
    var a = n(2), l = Object(a.a)()
  }, 24: function (e, t, n) {
    e.exports = n(33)
  }, 33: function (e, t, n) {
    "use strict";
    n.r(t);
    var a = n(0), l = n.n(a), c = n(21), r = n.n(c), i = n(5), o = n(8), m = n(9), u = n(11), s = n(10), d = n(12),
      p = function (e) {
        function t() {
          var e, n;
          Object(o.a)(this, t);
          for (var a = arguments.length, l = new Array(a), c = 0; c < a; c++) l[c] = arguments[c];
          return (n = Object(u.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(l)))).onClickAddItem = function (e) {
            var t = n.props, a = t.itemList, l = t.itemPolicy, c = t.eventHandlers;
            if (a.length >= l.maxItemLength) alert("max item count: ".concat(l.maxItemLength)); else {
              var r = a.concat({uiItemId: (new Date).getTime(), itemName: "", itemPrice: ""});
              c.updateItemList(e, r)
            }
          }, n
        }

        return Object(d.a)(t, e), Object(m.a)(t, [{
          key: "render", value: function () {
            var e = this.props.itemList.map(function (e) {
              return l.a.createElement("li", {
                "data-testid": "itemComponent",
                key: e.uiItemId
              }, l.a.createElement("select", null, l.a.createElement("option", {value: ""}, "\ud314\ub808\ud2b8 \uc885\ub958\ub97c \uc120\ud0dd\ud558\uc138\uc694"), l.a.createElement("option", {value: "COLOR"}, "\uc0c9\uc0c1"), l.a.createElement("option", {value: "PATTERN"}, "\ud328\ud134"), l.a.createElement("option", {value: "IMAGE"}, "\uc774\ubbf8\uc9c0")), l.a.createElement("input", {
                type: "text",
                placeholder: "name",
                value: e.itemName
              }))
            });
            return l.a.createElement(a.Fragment, null, l.a.createElement("h4", null, "Create New Palette"), l.a.createElement("div", null, l.a.createElement("input", {
              type: "text",
              placeholder: "palette name"
            })), l.a.createElement("div", null, l.a.createElement("button", {
              type: "button",
              onClick: this.onClickAddItem
            }, "+ Add Item")), l.a.createElement("div", null, l.a.createElement("ul", null, e)))
          }
        }]), t
      }(a.Component), h = function (e) {
        function t() {
          var e, n;
          Object(o.a)(this, t);
          for (var a = arguments.length, l = new Array(a), c = 0; c < a; c++) l[c] = arguments[c];
          return (n = Object(u.a)(this, (e = Object(s.a)(t)).call.apply(e, [this].concat(l)))).state = {
            itemList: [],
            itemPolicy: {maxItemLength: 5}
          }, n.updateItemList = function (e, t) {
            n.setState({itemList: t})
          }, n
        }

        return Object(d.a)(t, e), Object(m.a)(t, [{
          key: "render", value: function () {
            var e = this.state, t = e.itemList, n = e.itemPolicy;
            return l.a.createElement(a.Fragment, null, l.a.createElement("h2", null, "Dynamic Child UI Test Page"), l.a.createElement(p, {
              itemList: t,
              eventHandlers: {updateItemList: this.updateItemList},
              itemPolicy: n
            }))
          }
        }]), t
      }(a.Component), E = Object(a.lazy)(function () {
        return Promise.all([n.e(0), n.e(4), n.e(1), n.e(6)]).then(n.bind(null, 315))
      }), v = Object(a.lazy)(function () {
        return Promise.all([n.e(0), n.e(1), n.e(7)]).then(n.bind(null, 316))
      }), b = n(19);
    var f = function () {
      return l.a.createElement("div", null, l.a.createElement(i.b, {history: b.a}, l.a.createElement(a.Suspense, {fallback: l.a.createElement("div", null, "Loading...")}, l.a.createElement("div", null, l.a.createElement(i.a, {
        exact: !0,
        path: "/",
        component: E
      }), l.a.createElement(i.c, null, l.a.createElement(i.a, {
        exact: !0,
        path: "/palette/new",
        component: E
      }), l.a.createElement(i.a, {exact: !0, path: "/palette/:id", component: v}), l.a.createElement(i.a, {
        exact: !0,
        path: "/tdd/dynamic-child",
        component: h
      }))))))
    };
    Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
    var y = n(14);
    r.a.render(l.a.createElement(y.a, null, l.a.createElement(f, null)), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function (e) {
      e.unregister()
    })
  }
}, [[24, 3, 5]]]);
//# sourceMappingURL=main.0a473685.chunk.js.map