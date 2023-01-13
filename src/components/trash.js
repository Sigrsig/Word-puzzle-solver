!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(
        require("react"),
        require("react-dom"),
        require("react-redux"),
        require("foundation"),
        require("user"),
        require("redux"),
        require("redux-thunk"),
        require("classnames"),
        require("@tweenjs/tween.js"),
        require("fontfaceobserver"),
        require("responsive"),
        require("reselect"),
        require("prop-types")
      )
    : "function" == typeof define && define.amd
    ? define(
        [
          "react",
          "react-dom",
          "react-redux",
          "foundation",
          "user",
          "redux",
          "redux-thunk",
          "classnames",
          "@tweenjs/tween.js",
          "fontfaceobserver",
          "responsive",
          "reselect",
          "prop-types",
        ],
        t
      )
    : t(
        (e = e || self).React,
        e.ReactDOM,
        e.ReactRedux,
        e.Foundation,
        e.User,
        e.Redux,
        e.ReduxThunk,
        e.classNames,
        e.TWEEN,
        e.FontFaceObserver,
        e.Responsive,
        e.Reselect,
        e.PropTypes
      );
})(this, function (s, a, e, f, c, n, r, l, u, i, d, t, o) {
  "use strict";
  var p = "default" in s ? s.default : s;
  (a = a && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a),
    (r =
      r && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r),
    (l =
      l && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l),
    (u =
      u && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u),
    (i =
      i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i),
    (o =
      o && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o);
  var m = s.createContext({
    getVariant: function () {
      return null;
    },
    reportExposure: function (e) {
      return null;
    },
    tests: {},
    hasAbraLoaded: !1,
  });
  function y(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var r,
            o,
            i = [],
            a = !0,
            c = !1;
          try {
            for (
              n = n.call(e);
              !(a = (r = n.next()).done) &&
              (i.push(r.value), !t || i.length !== t);
              a = !0
            );
          } catch (e) {
            (c = !0), (o = e);
          } finally {
            try {
              a || null == n.return || n.return();
            } finally {
              if (c) throw o;
            }
          }
          return i;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return b(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? b(e, t)
            : void 0;
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function b(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function v(t, e) {
    var n,
      r = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        r.push.apply(r, n)),
      r
    );
  }
  function g(r) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? v(Object(o), !0).forEach(function (e) {
            var t, n;
            (t = r),
              (e = o[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = e);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
        : v(Object(o)).forEach(function (e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
          });
    }
    return r;
  }
  function h(e) {
    var t,
      n,
      r =
        (null === (t = window.config) || void 0 === t
          ? void 0
          : t.AbraConfig) || {};
    f.abra.init(
      window.abra.config,
      {
        agent_id:
          (null === (t = window.config) ||
          void 0 === t ||
          null === (n = t.userInfo) ||
          void 0 === n
            ? void 0
            : n.agentID) || f.agentIdCookie,
        regi_id: e,
      },
      r
    );
  }
  h();
  function w(e) {
    var t = e.children,
      n = e.regiId,
      r = (e = y(s.useState(O), 2))[0],
      o = e[1],
      i = (e = y(s.useState(!1), 2))[0],
      a = e[1];
    return (
      s.useEffect(
        function () {
          h(n), o(g({}, f.abra.getTests())), a(!0);
        },
        [n]
      ),
      (e = s.useMemo(
        function () {
          return {
            tests: r,
            getVariant: function (e) {
              return r[e];
            },
            reportExposure: function (e) {
              return f.abra.reportExposure(e);
            },
            hasAbraLoaded: i,
          };
        },
        [r, i]
      )),
      p.createElement(m.Provider, { value: e }, t)
    );
  }
  var O = g({}, f.abra.getTests()),
    S = "LetterBoxed/ADD_LETTER",
    E = "LetterBoxed/REMOVE_LETTER",
    j = "LetterBoxed/ADD_WORD",
    P = "LetterBoxed/ANIMATE_START",
    k = "LetterBoxed/ANIMATE_END",
    x = "LetterBoxed/COMPLETE_GAME",
    C = "LetterBoxed/RESET_GAME",
    _ = "LetterBoxed/UNLOCK_GAME",
    z = "LetterBoxed/LOCK_GAME",
    L = "LetterBoxed/SHOW_ERROR_MESSAGE",
    A = "LetterBoxed/SHOW_SUCCESS_MESSAGE",
    D = "LetterBoxed/CLEAR_MESSAGE",
    N = "NORTH",
    R = "EAST",
    T = "SOUTH",
    W = "WEST";
  function B(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return M(e);
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return M(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? M(e, t)
            : void 0;
        }
      })(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function M(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function I(t, e) {
    var n,
      r = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        r.push.apply(r, n)),
      r
    );
  }
  function q(r) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? I(Object(o), !0).forEach(function (e) {
            var t, n;
            (t = r),
              (e = o[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = e);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
        : I(Object(o)).forEach(function (e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
          });
    }
    return r;
  }
  var $ = {
      activeWord: "",
      activeLetter: "",
      submittedWords: [],
      animating: !1,
      isLocked: !1,
      isCompleted: !1,
      message: {},
      previousSuccess: !1,
    },
    U = q(
      {
        id: 0,
        expiration: 0,
        printDate: "",
        sides: ["ADR", "MEO", "BXU", "ITS"],
        dictionary: [],
        par: 0,
        ourSolution: [],
        yesterdaysSides: [],
        yesterdaysSolution: [],
        editor: "",
        editorImage: "",
      },
      $
    ),
    H = ["date"];
  function F(t, e) {
    var n,
      r = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        r.push.apply(r, n)),
      r
    );
  }
  function G(r) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? F(Object(o), !0).forEach(function (e) {
            var t, n;
            (t = r),
              (e = o[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = e);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
        : F(Object(o)).forEach(function (e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
          });
    }
    return r;
  }
  function X(e, t) {
    if (null == e) return {};
    var n,
      r = (function (e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), 0 <= t.indexOf(n) || (o[n] = e[n]);
        return o;
      })(e, t);
    if (Object.getOwnPropertySymbols)
      for (var o = Object.getOwnPropertySymbols(e), i = 0; i < o.length; i++)
        (n = o[i]),
          0 <= t.indexOf(n) ||
            (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    return r;
  }
  var Y = n.combineReducers({
    puzzleContainer: function () {
      var e =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : U,
        t = 1 < arguments.length ? arguments[1] : void 0;
      switch (t.type) {
        case S:
          return q(
            q({}, e),
            {},
            { activeLetter: t.payload, activeWord: e.activeWord + t.payload }
          );
        case E:
          var n = e.activeLetter,
            r = e.activeWord,
            o = e.submittedWords;
          return (
            1 === e.activeWord.length && 0 < e.submittedWords.length
              ? ((r = e.submittedWords.slice(-1).pop()),
                (o = e.submittedWords.slice(0, -1)))
              : ((n = e.activeWord.slice(-2, -1)),
                (r = e.activeWord.slice(0, -1))),
            q(
              q({}, e),
              {},
              { activeLetter: n, activeWord: r, submittedWords: o }
            )
          );
        case j:
          return q(
            q({}, e),
            {},
            {
              activeWord: e.activeLetter,
              submittedWords: [].concat(B(e.submittedWords), [e.activeWord]),
            }
          );
        case P:
          return q(q({}, e), {}, { animating: !0 });
        case k:
          return q(q({}, e), {}, { animating: !1 });
        case C:
          return q(q({}, e), $);
        case z:
          return q(q({}, e), {}, { isLocked: !0 });
        case _:
          return q(q({}, e), {}, { isLocked: !1 });
        case x:
          return q(q({}, e), {}, { isCompleted: !0 });
        case L:
          return q(
            q({}, e),
            {},
            { message: { isError: !0, value: t.payload } }
          );
        case A:
          return q(
            q({}, e),
            {},
            {
              message: { isError: !1, value: t.payload },
              previousSuccess: !e.previousSuccess,
            }
          );
        case D:
          return q(q({}, e), {}, { message: {} });
        default:
          return e;
      }
    },
  });
  function V(t, e) {
    var n,
      r = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        r.push.apply(r, n)),
      r
    );
  }
  function J(r) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? V(Object(o), !0).forEach(function (e) {
            var t, n;
            (t = r),
              (e = o[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = e);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
        : V(Object(o)).forEach(function (e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
          });
    }
    return r;
  }
  var K = function (e) {
    function r() {}
    function o(e, t) {
      return e.classList.add(t), e;
    }
    function t(e, t) {
      return e.classList.remove(t), e;
    }
    var n,
      i,
      a,
      c,
      l = "pzm",
      u = "".concat(l, "-system"),
      s = "".concat(l, "-modals-wrapper"),
      f = "".concat(l, "-submodal"),
      d = "".concat(l, "-modal"),
      p = "".concat(d, "-content"),
      m = "".concat(d, "-ex"),
      y = "".concat(l, "-active"),
      b = J({ root: document.body, onOpen: r, onClose: r, modals: [] }, e),
      v = {},
      g = o(b.root, u),
      h = o(document.createElement("div"), f),
      w = o(document.createElement("div"), s);
    w.setAttribute("tabindex", "0");
    function O(e) {
      e.target === w && _.close();
    }
    function S(e) {
      "Escape" === e.key && (e.preventDefault(), _.close());
    }
    function E(e) {
      if (!v[e])
        throw new Error(
          "unknown modal "
            .concat(e, "\n\nchoose one of\n\t")
            .concat(Object.keys(v).join("\n\t"), "\n")
        );
      return v[e];
    }
    function j(e, t, n) {
      var r = C(t),
        n = n && C(n);
      b[e] && b[e](r, n), t[e] && t[e](r, n);
    }
    function P(e) {
      var t;
      if (!e.name || v[e.name]) throw new Error("modals need a unique name");
      var n = J(
        J(
          {
            meta: {},
            create: r,
            id: "".concat(l, "-").concat(e.name),
            className: "",
            onOpen: r,
            onClose: r,
            closeByEx: !0,
            closeByBgClick: !0,
            viewTime: 0,
            viewCount: 0,
            subModalContent: void 0,
          },
          e
        ),
        {},
        {
          root: o(document.createElement("div"), p),
          wrap: o(document.createElement("div"), d),
        }
      );
      n.wrap.setAttribute("id", n.id),
        n.closeByEx &&
          ((n.ex = o(document.createElement("div"), m)),
          (n.ex.innerHTML = "×"),
          n.ex.setAttribute("role", "button"),
          n.ex.setAttribute("tabindex", "0"),
          n.ex.addEventListener("click", _.close),
          n.ex.addEventListener("keydown", function (e) {
            ("Enter" !== e.key && "NumpadEnter" !== e.key) ||
              (e.preventDefault(), e.stopPropagation(), _.close());
          }),
          n.wrap.appendChild(n.ex)),
        null !== (t = n.subModalContent) &&
          void 0 !== t &&
          t.name &&
          ((n.subRoot = o(
            document.createElement("div"),
            "".concat(l, "-submodal-content-").concat(e.name)
          )),
          h.appendChild(n.subRoot),
          o(n.wrap, "".concat(l, "-with-").concat(n.subModalContent.name))),
        n.wrap.appendChild(n.root),
        n.className && o(n.wrap, n.className),
        w.appendChild(n.wrap),
        Object.assign(n, n.create(C(n), _)),
        (v[n.name] = n);
    }
    function k(e, t) {
      e !== (n && n.name) &&
        ((e = E(e)),
        (i = t),
        (e.viewCount += 1),
        (c = Date.now()),
        o(e.wrap, y),
        e.subRoot && o(e.subRoot, y),
        w.focus(),
        e.closeByBgClick && w.addEventListener("click", O),
        (e.closeByBgClick || e.closeByEx) &&
          document.body.addEventListener("keydown", S),
        j("onOpen", e, n),
        (n = e));
    }
    function x(e) {
      n &&
        ((a = "string" == typeof e ? e : void 0),
        (n.viewTime += Date.now() - c),
        t(n.wrap, y),
        n.subRoot && t(n.subRoot, y),
        n.closeByBgClick && w.removeEventListener("click", O),
        (n.closeByBgClick || n.closeByEx) &&
          document.body.removeEventListener("keydown", S),
        (e = n),
        (n = void 0),
        j("onClose", e));
    }
    var C = function (e) {
        return {
          root: e.root,
          subRoot: e.subRoot,
          name: e.name,
          meta: e.meta,
          viewTime: e.viewTime,
          viewCount: e.viewCount,
          openTrigger: i,
          closeTrigger: a,
        };
      },
      _ = {
        add: function (e) {
          P(e);
        },
        get: function (e) {
          return C(E(e));
        },
        getAll: function () {
          var t = this;
          return Object.keys(v).map(function (e) {
            return t.get(e);
          });
        },
        open: function (e, t) {
          n ? x() : o(g, y), k(e, t);
        },
        close: function () {
          t(g, y), x();
        },
        getContent: function () {
          return w;
        },
        setScrimColor: function (e) {
          w.style.background = e;
        },
      };
    return g.appendChild(w), b.modals.forEach(P), w.appendChild(h), _;
  };
  function Z(t, e) {
    var n,
      r = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        r.push.apply(r, n)),
      r
    );
  }
  function Q(r) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? Z(Object(o), !0).forEach(function (e) {
            var t, n;
            (t = r),
              (e = o[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = e);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
        : Z(Object(o)).forEach(function (e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
          });
    }
    return r;
  }
  var ee = {
      root: document.getElementById("portal-game-modals"),
      modals: [],
      onOpen: function () {},
      onClose: function () {},
    },
    te = ["modalSystem"];
  function ne() {
    return (ne =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            r = arguments[t];
          for (n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }).apply(this, arguments);
  }
  function re(e, t) {
    if (null == e) return {};
    var n,
      r = (function (e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), 0 <= t.indexOf(n) || (o[n] = e[n]);
        return o;
      })(e, t);
    if (Object.getOwnPropertySymbols)
      for (var o = Object.getOwnPropertySymbols(e), i = 0; i < o.length; i++)
        (n = o[i]),
          0 <= t.indexOf(n) ||
            (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    return r;
  }
  function oe(e) {
    var n = e.modalSystem,
      r = re(e, te);
    return n.getAll().map(function (e) {
      var t = e.name,
        e = e.meta.Content;
      return a.createPortal(
        p.createElement(
          e,
          ne(
            {
              open: function () {
                return n.open(t);
              },
              close: n.close,
            },
            r,
            { modalSystem: n }
          )
        ),
        n.get(t).root
      );
    });
  }
  var ie = function (t) {
    return new Promise(function (e) {
      setTimeout(e, t);
    });
  };
  function ae(t, e, n) {
    (e = e < t),
      (n = n.find(function (e) {
        return e.minWidth <= t;
      }));
    return (d.isMobile && !e && n.mobile) || n.desktop;
  }
  var ce = function (e) {
      return e.puzzleContainer;
    },
    le = t.createSelector(ce, function (e) {
      var r = e.activeWord,
        o = e.activeLetter,
        i = e.submittedWords,
        e = e.sides,
        a = [];
      return (
        e.map(function (e, n) {
          return e.split("").map(function (t) {
            return (
              a.push({
                letter: t,
                isActiveLetter: o === t,
                isInActiveWord: !!r.includes(t),
                isUsed: i.some(function (e) {
                  return e.includes(t);
                }),
                side: (function (e) {
                  switch (e) {
                    case 0:
                      return N;
                    case 1:
                      return R;
                    case 2:
                      return T;
                    case 3:
                      return W;
                    default:
                      throw new Error("Unknown side number: ".concat(e));
                  }
                })(n),
              }),
              ""
            );
          });
        }),
        a
      );
    });
  function ue(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return se(e);
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return se(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? se(e, t)
            : void 0;
        }
      })(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function se(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function fe(t, e) {
    var n,
      r = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        r.push.apply(r, n)),
      r
    );
  }
  function de(r) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? fe(Object(o), !0).forEach(function (e) {
            var t, n;
            (t = r),
              (e = o[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = e);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
        : fe(Object(o)).forEach(function (e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
          });
    }
    return r;
  }
  function pe(e) {
    var t = e.isLocked;
    return e.animating || t;
  }
  var me = function (e) {
      return /[A-Z]{1}/.test(e) && 1 === e.length;
    },
    ye = function (e, t) {
      return !!e.find(function (e) {
        return e.letter === t;
      });
    },
    be = function (e, t, n) {
      var r = e.find(function (e) {
          return e.letter === t;
        }),
        e = e.find(function (e) {
          return e.letter === n;
        });
      return r && e && r.side === e.side;
    },
    ve = function (e) {
      return e.filter(function (e, t, n) {
        return n.indexOf(e) === t;
      });
    },
    ge = { black: "#000", white: "#FFF", pink: "#F9B5AB", palePink: "#FEF0ED" },
    he = { letter: "letter", point: "point" },
    we = {
      isActive: "isActive",
      isSubmitted: "isSubmitted",
      isAnimating: "isAnimating",
    },
    Oe = { active: "active", inactive: "inactive", animating: "animating" },
    Se = 0.65,
    Ee = {
      letterWidth: 26,
      letterHeight: 32,
      letterPadding: 8,
      pointSize: 17,
      pointPadding: 8,
    },
    je = [
      {
        minWidth: 768,
        desktop: { canvasSize: 400, dotRadius: 8, fontSize: 32, lineWidth: 4 },
        mobile: { canvasSize: 500, dotRadius: 9, fontSize: 38, lineWidth: 4.5 },
      },
      {
        minWidth: 444,
        desktop: { canvasSize: 400, dotRadius: 8, fontSize: 32, lineWidth: 4 },
      },
      {
        minWidth: 321,
        desktop: {
          canvasSize: 320,
          dotRadius: 7.15,
          fontSize: 28,
          lineWidth: 4,
        },
      },
      {
        minWidth: 0,
        desktop: { canvasSize: 225, dotRadius: 6, fontSize: 22, lineWidth: 4 },
      },
    ],
    Pe = [
      { minWidth: 768, desktop: { fontSize: 34 }, mobile: { fontSize: 36 } },
      { minWidth: 444, desktop: { fontSize: 28 }, mobile: { fontSize: 28 } },
      { minWidth: 321, desktop: { fontSize: 28 }, mobile: { fontSize: 28 } },
      { minWidth: 0, desktop: { fontSize: 28 }, mobile: { fontSize: 24 } },
    ];
  function ke(t, e) {
    var n,
      r = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        r.push.apply(r, n)),
      r
    );
  }
  function xe(r) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? ke(Object(o), !0).forEach(function (e) {
            var t, n;
            (t = r),
              (e = o[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = e);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
        : ke(Object(o)).forEach(function (e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
          });
    }
    return r;
  }
  function Ce(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return _e(e);
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return _e(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? _e(e, t)
            : void 0;
        }
      })(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function _e(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function ze() {
    var e,
      t,
      n,
      r,
      o,
      i,
      a,
      c,
      l,
      u,
      s =
        0 < arguments.length && void 0 !== arguments[0]
          ? arguments[0]
          : he.letter,
      f = 1 < arguments.length ? arguments[1] : void 0,
      d = 2 < arguments.length ? arguments[2] : void 0,
      p = f.startingX,
      m = f.startingY,
      y = f.squareSize,
      b = f.padding,
      v = d.fontSize,
      f = d.dotRadius,
      d =
        (y -
          y *
            (3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : 1)) /
        2;
    return (
      s === he.point
        ? ((e = p + b + d),
          (t = p + y / 2),
          (n = p + y - b - d),
          (r = m + b + d),
          (o = m + y / 2),
          (i = m + y - b - d),
          (a = m + d),
          (c = m + y - d),
          (l = p + d),
          (u = p + y - d))
        : s === he.letter &&
          ((t = (e = p + b) + y / 2 - b),
          (n = p + y - b),
          (r = m + b + v / 3),
          (o = m + y / 2 + v / 3),
          (i = m + y - b + v / 3),
          (a = m - f - b / 4),
          (c = m + y + v + f + b / 12),
          (l = p - v / 2 - b / 2.5),
          (u = p + y + v / 2 + b / 2.5)),
      [].concat(
        [
          { x: e, y: a },
          { x: t, y: a },
          { x: n, y: a },
        ],
        [
          { x: u, y: r },
          { x: u, y: o },
          { x: u, y: i },
        ],
        [
          { x: e, y: c },
          { x: t, y: c },
          { x: n, y: c },
        ],
        [
          { x: l, y: r },
          { x: l, y: o },
          { x: l, y: i },
        ]
      )
    );
  }
  function Le(e, t) {
    return e.x === t.x && e.y === t.y;
  }
  function Ae(e, t) {
    return (
      (Le(e.from, t.from) || Le(e.from, t.to)) &&
      (Le(e.to, t.from) || Le(e.to, t.to))
    );
  }
  function De(t, e) {
    var n = 0;
    return (
      e.forEach(function (e) {
        Ae(e, t) && (n += 1);
      }),
      n
    );
  }
  function Ne(e, t) {
    return $e(qe(e, t));
  }
  function Re(e, t) {
    for (
      var n = Ee.letterWidth,
        r = Ee.letterHeight,
        o = Ee.letterPadding,
        i = { x: n / 2 + o, y: r + o },
        a = Ee.pointSize / 2 + Ee.pointPadding,
        c = 0;
      c < t.length;
      c += 1
    ) {
      var l = t[c],
        u = l.letterCoords,
        l = l.pointCoords;
      if (Ue(u, e, i) || He(l, e, a)) return t[c];
    }
    return null;
  }
  function Te(e, t) {
    var n = e;
    return (
      t === Oe.active
        ? (n = xe(xe({}, e), {}, { isActiveLetter: !0, isInActiveWord: !0 }))
        : t === Oe.inactive
        ? (n = xe(xe({}, e), {}, { isActiveLetter: !1, isInActiveWord: !0 }))
        : t === Oe.animating &&
          (n = xe(
            xe({}, e),
            {},
            {
              isActiveLetter: !1,
              isInActiveWord: !1,
              isUsed: !1,
              isAnimating: !0,
            }
          )),
      n
    );
  }
  function We(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Se;
    return {
      startingX: e * ((1 - t) / 2),
      startingY: e * ((1 - t) / 2),
      squareSize: e * t,
      padding: e / 10,
    };
  }
  function Be(e) {
    return [e / 30, e / 38];
  }
  var Me = function (e, o) {
      var i = e.split(""),
        a = [];
      if (i.length < 2) return null;
      for (var t = 1; t < i.length; t += 1)
        !(function (e) {
          var t = i[e - 1],
            n = i[e],
            r = o.find(function (e) {
              return e.letter === t;
            }).pointCoords,
            e = o.find(function (e) {
              return e.letter === n;
            }).pointCoords;
          a.push({ from: r, to: e });
        })(t);
      return a;
    },
    Ie = function (e, o) {
      var i = e.split(""),
        a = [];
      if (i.length < 2) return null;
      for (var t = 1; t < i.length; t += 1)
        !(function (e) {
          var t = i[e - 1],
            n = i[e],
            r = {
              from: o.find(function (e) {
                return e.letter === t;
              }).pointCoords,
              to: o.find(function (e) {
                return e.letter === n;
              }).pointCoords,
            };
          a.forEach(function (e) {
            Ae(e, r) && ((r.from = e.from), (r.to = e.to));
          }),
            a.push(r);
        })(t);
      return a;
    },
    qe = function (e, n) {
      return Ce(e).reduce(function (e, t) {
        return [].concat(Ce(e), Ce(Me(t, n)));
      }, []);
    },
    $e = function (n) {
      return (
        n &&
        n.map(function (e, t) {
          return (
            (e.repeated = De(e, n.slice(0, t))), (e.repeatCount = De(e, n)), e
          );
        })
      );
    },
    Ue = function (e, t, n) {
      return Math.abs(e.x - t.x) < n.x && e.y - t.y < n.y && 0 < e.y - t.y;
    },
    He = function (e, t, n) {
      return Math.abs(e.x - t.x) < n && Math.abs(e.y - t.y) < n;
    },
    Fe = function (e, t) {
      var n = parseInt(e.slice(1), 16),
        r = t < 0 ? 0 : 255,
        o = t < 0 ? -1 * t : t,
        e = n >> 16,
        t = (n >> 8) & 255,
        n = 255 & n;
      return "#".concat(
        (
          16777216 +
          65536 * (Math.round((r - e) * o) + e) +
          256 * (Math.round((r - t) * o) + t) +
          (Math.round((r - n) * o) + n)
        )
          .toString(16)
          .slice(1)
      );
    };
  function Ge(e) {
    return (Ge =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  var Xe = ["letterCoords"],
    Ye = ["pointCoords"];
  function Ve(e, t) {
    if (null == e) return {};
    var n,
      r = (function (e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), 0 <= t.indexOf(n) || (o[n] = e[n]);
        return o;
      })(e, t);
    if (Object.getOwnPropertySymbols)
      for (var o = Object.getOwnPropertySymbols(e), i = 0; i < o.length; i++)
        (n = o[i]),
          0 <= t.indexOf(n) ||
            (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    return r;
  }
  function Je(t, e) {
    var n,
      r = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        r.push.apply(r, n)),
      r
    );
  }
  function Ke(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? Je(Object(n), !0).forEach(function (e) {
            rt(t, e, n[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Je(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
    }
    return t;
  }
  function Ze(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function Qe(e, t) {
    return (Qe =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function et(n) {
    var r = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var e,
        t = nt(n);
      return (function (e, t) {
        {
          if (t && ("object" === Ge(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
        }
        return tt(e);
      })(
        this,
        r
          ? ((e = nt(this).constructor), Reflect.construct(t, arguments, e))
          : t.apply(this, arguments)
      );
    };
  }
  function tt(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function nt(e) {
    return (nt = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function rt(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  var ot,
    it,
    at,
    ct,
    lt = (function () {
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && Qe(e, t);
      })(o, p.Component);
      var e,
        t,
        n,
        r = et(o);
      function o(e) {
        var m;
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, o),
          rt(tt((m = r.call(this, e))), "getCtx", function () {
            return m.canvas.current.getContext("2d");
          }),
          rt(tt(m), "getAdjustedMousePosition", function (e) {
            var t = m.canvas.current.getBoundingClientRect(),
              e = e.clientX ? e : e.changedTouches[0];
            return { x: e.clientX - t.left, y: e.clientY - t.top };
          }),
          rt(tt(m), "setScale", function (e) {
            var t = m.getCtx();
            t.save(),
              t.scale(window.devicePixelRatio, window.devicePixelRatio),
              e(),
              t.restore();
          }),
          rt(tt(m), "animate", function (e) {
            window.requestAnimationFrame(m.animate), u.update(e);
          }),
          rt(tt(m), "animateLines", function () {
            var e,
              t = m.props.puzzle,
              n = ((e = t.activeWord), (t = m.letters), $e(Me(e, t)));
            n.forEach(function (e, t) {
              return m.animateLineDraw(e, t === n.length - 1);
            });
            for (var r = 1; r < m.tweens.length; r += 1)
              m.tweens[r - 1].chain(m.tweens[r]);
            m.tweens[0].start();
          }),
          rt(tt(m), "animateLineDraw", function (t, e) {
            var n = t.from,
              r = t.to,
              o = m.letters.find(function (e) {
                e = e.pointCoords;
                return e.x === n.x && e.y === n.y;
              }),
              i = m.letters.find(function (e) {
                e = e.pointCoords;
                return e.x === r.x && e.y === r.y;
              }),
              a = new u.Tween(Ke({}, o.pointCoords))
                .to(Ke({}, i.pointCoords), 350)
                .onUpdate(function (e) {
                  m.drawOnAnimationUpdate(t, o, i, e);
                })
                .interpolation(u.Interpolation.Linear)
                .easing(u.Easing.Exponential.InOut)
                .onComplete(function () {
                  return m.drawOnAnimationComplete(o, i, e);
                });
            m.tweens.push(a);
          }),
          rt(tt(m), "calculateCoordinates", function () {
            var e =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1,
              t = m.state.canvasSize,
              n = ze(he.letter, We(t), m.state),
              e = ze(he.point, We(t), m.state, e);
            m.updateLetterState(he.letter, n), m.updateLetterState(he.point, e);
          }),
          rt(tt(m), "drawSquare", function () {
            var e =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1,
              t = m.state.canvasSize,
              n = We(t),
              r = n.startingX,
              o = n.startingY,
              i = n.squareSize,
              t = (i - i * e) / 2,
              n = m.getCtx();
            (n.fillStyle = ge.white), n.fillRect(r + t, o + t, i * e, i * e);
          }),
          rt(tt(m), "drawSquareOutline", function () {
            var e =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1,
              t = m.state,
              n = t.canvasSize,
              r = t.lineWidth,
              o = We(n),
              i = o.startingX,
              a = o.startingY,
              t = o.squareSize,
              n = (t - t * e) / 2,
              o = m.getCtx();
            (o.strokeStyle = ge.black),
              (o.lineWidth = r - 1),
              o.strokeRect(i + n, a + n, t * e, t * e);
          }),
          rt(tt(m), "drawLetter", function (e, t) {
            var n,
              r,
              o,
              i = m.state.fontSize,
              o =
                ((n = (a = e).isActiveLetter),
                (r = a.isInActiveWord),
                (o = a.isUsed),
                (a = {
                  strokeStyle: ge.white,
                  fillStyle: ge.white,
                  fontWeight: 600,
                }),
                (n && r) || r
                  ? (a = {
                      strokeStyle: ge.black,
                      fillStyle: ge.black,
                      fontWeight: 600,
                    })
                  : o &&
                    (a = {
                      strokeStyle: ge.black,
                      fillStyle: ge.black,
                      fontWeight: 500,
                    }),
                a),
              a = m.getCtx();
            (a.textAlign = "center"),
              (a.font = ""
                .concat(o.fontWeight, " ")
                .concat(i, "px nyt-franklin")),
              (a.strokeStyle = o.strokeStyle),
              (a.fillStyle = o.fillStyle),
              a.fillText(e.letter, t.x, t.y);
          }),
          rt(tt(m), "drawLetters", function () {
            m.letters.forEach(function (e) {
              var t = e.letterCoords,
                e = Ve(e, Xe);
              return m.drawLetter(e, t);
            });
          }),
          rt(tt(m), "drawPoint", function (e, t) {
            var n,
              r,
              o = m.state,
              i = o.dotRadius,
              a = o.lineWidth,
              e =
                ((n = (c = e).isActiveLetter),
                (r = e.isInActiveWord),
                (o = e.isUsed),
                (e = e.isAnimating),
                (c = { strokeStyle: ge.black, fillStyle: ge.white }),
                n && r
                  ? (c = { strokeStyle: ge.pink, fillStyle: ge.black })
                  : r
                  ? (c = { strokeStyle: ge.pink, fillStyle: ge.white })
                  : o
                  ? (c = { strokeStyle: ge.black, fillStyle: ge.pink })
                  : e && (c = { strokeStyle: ge.white, fillStyle: ge.pink }),
                c),
              c = m.getCtx();
            (c.lineWidth = a - 1),
              (c.strokeStyle = e.strokeStyle),
              (c.fillStyle = e.fillStyle),
              c.beginPath(),
              c.arc(t.x, t.y, i, 0, 2 * Math.PI, !1),
              c.fill(),
              c.stroke();
          }),
          rt(tt(m), "drawPoints", function () {
            m.letters.forEach(function (e) {
              var t = e.pointCoords,
                e = Ve(e, Ye);
              return m.drawPoint(e, t);
            });
          }),
          rt(tt(m), "drawLine", function (e) {
            var t,
              n = e.from,
              r = e.to,
              o = e.repeated,
              i = void 0 === o ? 0 : o,
              a = e.repeatCount,
              c = void 0 === a ? 0 : a,
              l =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : we.isActive,
              u = m.state,
              s = u.canvasSize,
              f = u.lineWidth,
              d = we.isActive,
              p = we.isAnimating,
              u =
                ((t = l),
                (o = i),
                (e = we.isAnimating),
                (a = we.isSubmitted),
                (u = ge.pink),
                t === e && 0 < o
                  ? (u = Fe(ge.pink, -o / 15))
                  : t === a && (u = ge.palePink),
                u),
              s = l === d ? Be(s) : [],
              f = l === p ? f + c : f + i,
              i = m.getCtx();
            i.save(),
              (i.strokeStyle = u),
              (i.fillStyle = u),
              (i.lineWidth = f),
              i.setLineDash(s),
              i.beginPath(),
              i.moveTo(n.x, n.y),
              i.lineTo(r.x, r.y),
              (i.globalCompositeOperation = "source-atop"),
              i.stroke(),
              i.restore();
          }),
          rt(tt(m), "drawLines", function () {
            var e,
              t = m.props.puzzle,
              n = m.state.currentLine,
              r = Ne(t.submittedWords, m.letters),
              t = ((e = t.activeWord), (t = m.letters), $e(Ie(e, t)));
            r &&
              r.map(function (e) {
                return m.drawLine(e, we.isSubmitted);
              }),
              t &&
                t.map(function (e) {
                  return m.drawLine(e);
                }),
              n && m.drawLine(n);
          }),
          rt(tt(m), "drawPuzzle", function () {
            m.calculateCoordinates(),
              m.setScale(function () {
                m.drawSquare(),
                  m.drawLines(),
                  m.drawSquareOutline(),
                  m.drawPoints(),
                  m.drawLetters();
              });
          }),
          rt(tt(m), "clearPuzzle", function () {
            m.getCtx().clearRect(
              0,
              0,
              m.canvas.current.width,
              m.canvas.current.height
            );
          }),
          rt(tt(m), "clearSquare", function () {
            var e = m.state,
              t = e.canvasSize,
              n = e.dotRadius,
              r = e.lineWidth,
              o = We(t),
              e = o.startingX,
              t = o.startingY,
              o = o.squareSize,
              r = n + r;
            m.getCtx().clearRect(e - r, t - r, o + 2 * r, o + 2 * r);
          }),
          rt(tt(m), "updateLetterState", function (n, r) {
            var e = m.letters.map(function (e, t) {
              return Ke(Ke({}, e), {}, rt({}, "".concat(n, "Coords"), r[t]));
            });
            m.letters = e;
          }),
          rt(tt(m), "squish", function () {
            var e = m.props,
              o = e.puzzle,
              i = e.actions,
              t = function (e) {
                var t = e.scale,
                  e = m.getCtx();
                e.save(),
                  m.calculateCoordinates(t),
                  e.scale(window.devicePixelRatio, window.devicePixelRatio),
                  m.clearSquare(),
                  m.drawSquare(t),
                  m.drawLines(t),
                  m.drawSquareOutline(t),
                  m.drawPoints(),
                  e.restore();
              },
              n = { scale: 1 },
              e = new u.Tween(n).to({ scale: 0.85 }, 100).onUpdate(t),
              t = new u.Tween(n).to({ scale: 1 }, 100).onUpdate(t);
            e.chain(t).start(),
              ie(100).then(function () {
                var e, t, n, r;
                i.showMessage(
                  ((t = (e = o).previousSuccess),
                  (n = o.submittedWords),
                  (r = void 0 === n ? [] : n),
                  (n = o.isCompleted),
                  (e = o.activeWord),
                  (r.length ? r[r.length - 1] : e).length < 7
                    ? t
                      ? "Nice!"
                      : "Awesome!"
                    : n
                    ? "Savant!"
                    : "Genius!"),
                  !1
                );
              }),
              ie(800).then(i.clearErrorMessage);
          }),
          rt(tt(m), "interactionDown", function (e) {
            var t, n;
            (e.touches && 1 < e.touches.length) ||
              (e.preventDefault(),
              (n = (t = m.props).puzzle),
              (t = t.actions),
              n.animating ||
                ((e = m.getAdjustedMousePosition(e)),
                (e = Re(e, m.letters)),
                (n = n.activeLetter),
                !e ||
                  ("" !== n && e.letter !== n) ||
                  ("" === n && t.addLetter(e.letter),
                  (m.startingPos = e.pointCoords))));
          }),
          rt(tt(m), "interactionMove", function (e) {
            var t, n, r, o, i, a, c;
            (e.touches && 1 < e.touches.length) ||
              (e.preventDefault(),
              (a = (i = m.props).puzzle),
              (t = i.actions),
              (c = m.state.canvasSize),
              a.animating ||
                ((n = m.getAdjustedMousePosition(e)),
                (r = Re(n, m.letters)),
                (o = a.activeLetter),
                m.startingPos &&
                  ((i = n),
                  (e = We(c)),
                  (a = e.startingX),
                  (c = e.startingY),
                  (e = e.squareSize),
                  i.x >= a && i.x <= a + e && i.y >= c && i.y <= c + e) &&
                  (m.setState({ currentLine: { from: m.startingPos, to: n } }),
                  r &&
                    r.letter !== o &&
                    !be(m.letters, r.letter, o) &&
                    (t.addLetter(r.letter), (m.startingPos = r.pointCoords)))));
          }),
          rt(tt(m), "interactionUp", function (e) {
            var t, n;
            (e.touches && 1 < e.touches.length) ||
              (e.preventDefault(),
              (n = (t = m.props).puzzle),
              (t = t.actions),
              n.animating ||
                ((e = m.getAdjustedMousePosition(e)),
                (e = Re(e, m.letters)),
                (n = n.activeLetter),
                m.setState({ currentLine: null }),
                e &&
                  e.letter !== n &&
                  (t.addLetter(e.letter), (m.startingPos = null))));
          }),
          rt(tt(m), "addEventListeners", function () {
            var t = !1;
            m.canvas.current.addEventListener("mousedown", function (e) {
              e.preventDefault(), (t = !0), m.interactionDown(e);
            }),
              m.canvas.current.addEventListener("mousemove", function (e) {
                e.preventDefault(), t && m.interactionMove(e);
              }),
              m.canvas.current.addEventListener("mouseup", function (e) {
                e.preventDefault(), (t = !1), m.interactionUp(e);
              }),
              m.canvas.current.addEventListener("touchstart", function (e) {
                m.interactionDown(e);
              }),
              m.canvas.current.addEventListener("touchmove", function (e) {
                m.interactionMove(e);
              }),
              m.canvas.current.addEventListener("touchend", function (e) {
                m.interactionUp(e);
              });
          }),
          rt(tt(m), "drawOnAnimationUpdate", function (e, t, n, r) {
            var o = m.props.puzzle,
              i = m.letters.find(function (e) {
                e = e.letter;
                return o.activeLetter === e;
              }),
              a = {
                from: t.pointCoords,
                to: r,
                repeated: e.repeated,
                repeatCount: e.repeatCount,
              };
            m.setScale(function () {
              m.drawLine(a, we.isAnimating),
                m.drawPoint(Te(i, Oe.inactive), i.pointCoords),
                m.drawPoint(Te(t, Oe.active), t.pointCoords),
                m.drawPoint(Te(n, Oe.inactive), n.pointCoords);
            });
          }),
          rt(tt(m), "drawOnAnimationComplete", function (e, t, n) {
            var r = m.props.actions;
            m.setScale(function () {
              m.drawPoint(Te(e, Oe.animating), e.pointCoords),
                m.drawPoint(Te(t, Oe.active), t.pointCoords);
            }),
              n && (r.addWord(), (m.tweens = []));
          }),
          (m.tweens = []),
          (m.startingPos = null),
          (m.canvas = p.createRef()),
          (m.letters = e.puzzle.letters),
          (m.state = Ke(
            Ke({}, ae(window.innerWidth, window.innerHeight, je)),
            {},
            { currentLine: null }
          )),
          window.addEventListener("resize", function () {
            var e, t, n;
            document.body.clientWidth > window.innerWidth ||
              ((e = m.props.actions),
              (t = ae(window.innerWidth, window.innerHeight, je)),
              (n = m.state),
              t.canvasSize !== n.canvasSize &&
                (e.endAnimation(), m.setState(t)));
          }),
          m
        );
      }
      return (
        (e = o),
        (t = [
          {
            key: "componentDidMount",
            value: function () {
              var e = this;
              new i("nyt-franklin").load().then(function () {
                e.drawPuzzle(), e.addEventListeners();
              }),
                window.requestAnimationFrame(this.animate);
            },
          },
          {
            key: "shouldComponentUpdate",
            value: function () {
              return !this.props.puzzle.animating;
            },
          },
          {
            key: "componentDidUpdate",
            value: function (e) {
              var t = this.props.puzzle;
              t.letters !== e.puzzle.letters &&
                ((this.letters = t.letters), (this.startingPos = null)),
                this.clearPuzzle(),
                this.drawPuzzle(),
                t.animating &&
                  !e.puzzle.animating &&
                  (this.squish(), ie(230).then(this.animateLines));
            },
          },
          {
            key: "render",
            value: function () {
              var e = this.state.canvasSize;
              return p.createElement("canvas", {
                ref: this.canvas,
                width: e * window.devicePixelRatio,
                height: e * window.devicePixelRatio,
                style: { width: e, height: e },
              });
            },
          },
        ]) && Ze(e.prototype, t),
        n && Ze(e, n),
        o
      );
    })(),
    ut = ["modal", "gameplay", "settings", "general"],
    st = ["tech", "gameplay", "settings"],
    ft =
      ((ot = "LB"),
      (it = f.getGameData().id),
      (at = "".concat(ot, "-").concat(it)),
      (ct = {
        interaction: {
          custom: function (e) {
            var t = e.module,
              n = t.name,
              e = t.element,
              t = e.name,
              e = e.label;
            dt(
              "moduleInteraction",
              void 0 === n ? "gameplay" : n,
              t,
              void 0 === e ? "" : e,
              "",
              1 < arguments.length && void 0 !== arguments[1] && arguments[1]
            );
          },
          modal: function () {},
          gameplay: function () {},
          settings: function () {},
          general: function () {},
        },
        impression: {
          custom: function (e) {
            var t = e.module,
              n = t.name,
              e = t.region,
              t = t.label;
            dt(
              "impression",
              void 0 === n ? "gameplay" : n,
              e,
              void 0 === t ? "" : t
            );
          },
          tech: function () {},
          gameplay: function () {},
          settings: function () {},
        },
      }),
      ut.forEach(function (n) {
        ct.interaction[n] = function (e, t) {
          return dt(
            "moduleInteraction",
            n,
            e,
            t,
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null
          );
        };
      }),
      st.forEach(function (n) {
        ct.impression[n] = function (e, t) {
          return dt("impression", n, e, t);
        };
      }),
      ct);
  function dt(e, t, n, r, o, i) {
    f.track(
      e,
      "moduleInteraction" === e
        ? {
            module: {
              name: t,
              context: at,
              label: o,
              element: {
                name: n || "",
                label: "string" == typeof r ? r : JSON.stringify(r),
              },
            },
            eventData: {
              pageType: "game",
              type: i ? "ob_click" : "click",
              trigger: "module",
              status: "",
            },
          }
        : {
            module: {
              name: t,
              context: at,
              region: n || "",
              label: "string" == typeof r ? r : JSON.stringify(r),
            },
          }
    );
  }
  function pt(e) {
    if (void 0 === bt.localStorage) return !1;
    var t = bt.localStorage.getItem(vt);
    if (t)
      try {
        if (e === JSON.parse(t).printDate) return !0;
        gt();
      } catch (e) {
        gt(), console.error("could not parse local progress: ".concat(t));
      }
    return !1;
  }
  function mt(e, t) {
    return !ht(e, t);
  }
  function yt(e) {
    var t = e.modals,
      n = e.actions,
      r = e.animating,
      o = e.printDate,
      i = c.useUser().userType;
    return a.createPortal(
      p.createElement(
        p.Fragment,
        null,
        p.createElement(
          "span",
          { className: "pz-toolbar-left" },
          d.isMobile &&
            p.createElement("span", {
              role: "button",
              className: "pz-toolbar-button lb-toolbar-button__soln",
              onClick: function () {
                r ||
                  (ft.interaction.settings("yesterday-solution"),
                  t.open("yesterday", "toolbar"));
              },
              "data-full": "Yesterday’s Answers",
              "data-short": "Yesterday",
            }),
          p.createElement("span", {
            role: "button",
            className: "pz-toolbar-button lb-toolbar-button__help",
            onClick: function () {
              !r &&
                mt(o, i.hasXwd) &&
                (ft.interaction.settings("how-to-play"),
                t.open("help", "toolbar"));
            },
            "data-full": "Help",
            "data-short": "Help",
          }),
          p.createElement("span", {
            role: "button",
            className: "pz-toolbar-button lb-toolbar-button__restart",
            onClick: function () {
              mt(o, i.hasXwd) &&
                (ft.interaction.gameplay("reset-game", n.puzzle.par),
                n.resetGame());
            },
            "data-full": "Restart",
            "data-short": "Restart",
          })
        ),
        p.createElement(
          "span",
          { className: "pz-toolbar-right" },
          !d.isMobile &&
            p.createElement("span", {
              role: "button",
              className: "pz-toolbar-button lb-toolbar-button__soln",
              onClick: function () {
                r ||
                  (ft.interaction.settings("yesterday-solution"),
                  t.open("yesterday", "toolbar"));
              },
              "data-full": "Yesterday’s Answers",
              "data-short": "",
            })
        )
      ),
      wt
    );
  }
  var bt = "undefined" == typeof window ? {} : window,
    vt = "letterboxed-today",
    gt = function () {
      bt.localStorage.removeItem(vt);
    },
    ht = function (e, t) {
      return !t && pt(e);
    },
    wt = document.getElementById(
      "".concat(d.isMobile ? "js-mobile" : "portal-game", "-toolbar")
    );
  function Ot(e) {
    return (Ot =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function St(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function Et(e, t) {
    return (Et =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function jt(n) {
    var r = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var e,
        t = Pt(n);
      return (function (e, t) {
        {
          if (t && ("object" === Ot(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
        }
        return (function (e) {
          if (void 0 !== e) return e;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        })(e);
      })(
        this,
        r
          ? ((e = Pt(this).constructor), Reflect.construct(t, arguments, e))
          : t.apply(this, arguments)
      );
    };
  }
  function Pt(e) {
    return (Pt = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  yt.defaultProps = { actions: { puzzle: {}, resetGame: function () {} } };
  var kt = (function () {
    !(function (e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        t && Et(e, t);
    })(o, p.Component);
    var e,
      t,
      n,
      r = jt(o);
    function o(e) {
      return (
        (function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, o),
        ((e = r.call(this, e)).firstUseLetters = []),
        e
      );
    }
    return (
      (e = o),
      (t = [
        {
          key: "render",
          value: function () {
            var n = this,
              e = this.props,
              t = e.word,
              r = e.usedLetters,
              o = e.addUsedLetter;
            return p.createElement(
              "span",
              { className: "lb-word-list__word" },
              t.split("").map(function (e, t) {
                t = p.createElement("span", { key: t, className: "opaque" }, e);
                return r.includes(e)
                  ? n.firstUseLetters.includes(e)
                    ? t
                    : e
                  : (o(e), n.firstUseLetters.push(e), t);
              })
            );
          },
        },
      ]) && St(e.prototype, t),
      n && St(e, n),
      o
    );
  })();
  function xt(e) {
    return (xt =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function Ct(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function _t(e, t) {
    return (_t =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function zt(n) {
    var r = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var e,
        t = At(n);
      return (function (e, t) {
        {
          if (t && ("object" === xt(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
        }
        return Lt(e);
      })(
        this,
        r
          ? ((e = At(this).constructor), Reflect.construct(t, arguments, e))
          : t.apply(this, arguments)
      );
    };
  }
  function Lt(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function At(e) {
    return (At = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function Dt(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  var Nt = (function () {
    !(function (e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        t && _t(e, t);
    })(o, p.Component);
    var e,
      t,
      n,
      r = zt(o);
    function o(e) {
      var t;
      return (
        (function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, o),
        Dt(Lt((t = r.call(this, e))), "componentDidUpdate", function () {
          t.usedLetters = [];
        }),
        Dt(Lt(t), "addUsedLetter", function (e) {
          t.usedLetters.push(e);
        }),
        (t.usedLetters = []),
        t
      );
    }
    return (
      (e = o),
      (t = [
        {
          key: "render",
          value: function () {
            var n = this,
              e = this.props.puzzle.submittedWords;
            return p.createElement(
              p.Fragment,
              null,
              p.createElement(
                "div",
                { className: "lb-word-list-length" },
                e.length,
                " ",
                1 < e.length ? "words" : "word"
              ),
              p.createElement(
                "div",
                { className: "lb-word-list-container" },
                p.createElement(
                  "div",
                  { className: "lb-word-list" },
                  e.map(function (e, t) {
                    return p.createElement(kt, {
                      key: t,
                      word: e,
                      usedLetters: n.usedLetters,
                      addUsedLetter: n.addUsedLetter,
                    });
                  })
                )
              )
            );
          },
        },
      ]) && Ct(e.prototype, t),
      n && Ct(e, n),
      o
    );
  })();
  function Rt(e) {
    return (Rt =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function Tt(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function Wt(e, t) {
    return (Wt =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function Bt(n) {
    var r = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var e,
        t = It(n);
      return (function (e, t) {
        {
          if (t && ("object" === Rt(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
        }
        return Mt(e);
      })(
        this,
        r
          ? ((e = It(this).constructor), Reflect.construct(t, arguments, e))
          : t.apply(this, arguments)
      );
    };
  }
  function Mt(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function It(e) {
    return (It = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function qt(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  Nt.defaultProps = { puzzle: o.shape({}) };
  function $t() {
    document.getElementsByClassName("lb-text-field")[0].scrollLeft += 9999;
  }
  var Ut = (function () {
    !(function (e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        t && Wt(e, t);
    })(o, p.Component);
    var e,
      t,
      n,
      r = Bt(o);
    function o(e) {
      var i;
      return (
        (function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, o),
        qt(Mt((i = r.call(this, e))), "getFontSize", function (e) {
          var t = Mt(i),
            n = t.fontBreak,
            r = t.fontSize,
            o = t.fontBreakMaxLength;
          if (e < n) return r;
          t = d.isMobile ? 0.5 : 1;
          return r - (Math.min(e, o) - n) * t;
        }),
        qt(Mt(i), "getLineHeightSize", function (e) {
          var t = Mt(i),
            n = t.fontBreak,
            t = t.fontBreakMaxLength;
          return (d.isMobile ? 34 : 38) + Math.max((Math.min(e, t) - n) / 4, 0);
        }),
        (i.fontBreak = 15),
        (i.fontBreakMaxLength = 21),
        (i.scrollableBreak = 20),
        (i.fontSize = ae(window.innerWidth, window.innerHeight, Pe).fontSize),
        i
      );
    }
    return (
      (e = o),
      (t = [
        {
          key: "componentDidMount",
          value: function () {
            var e = this.props.action;
            $t(),
              window.addEventListener(
                "keydown",
                function () {
                  e.apply(void 0, arguments), $t();
                },
                !1
              );
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            var e = this.props.action;
            window.removeEventListener("keydown", e);
          },
        },
        {
          key: "render",
          value: function () {
            var e = this.props,
              t = e.value,
              n = e.children,
              r = e.submittedWords,
              e = e.par;
            return p.createElement(
              "div",
              { className: "lb-text-field-wrapper" },
              p.createElement(
                "div",
                { className: "lb-text-field-container" },
                p.createElement(
                  "div",
                  {
                    className: l("lb-text-field", {
                      "not-empty": !!t.length,
                      scrollable: t.length > this.scrollableBreak,
                    }),
                    style: {
                      fontSize: "".concat(this.getFontSize(t.length), "px"),
                      lineHeight: "".concat(
                        this.getLineHeightSize(t.length),
                        "px"
                      ),
                    },
                  },
                  t.split("").map(function (e, t) {
                    return p.createElement(
                      "span",
                      { key: "".concat(e, "-").concat(t) },
                      e
                    );
                  }),
                  p.createElement(
                    "span",
                    { className: "lb-text-field__caret" },
                    " "
                  )
                )
              ),
              p.createElement("hr", { className: "lb-text-field-underline" }),
              n,
              0 === r.length &&
                p.createElement(
                  "div",
                  { className: "lb-par no-words" },
                  "Try to solve in ",
                  e,
                  " ",
                  1 < e ? "words" : "word"
                )
            );
          },
        },
      ]) && Tt(e.prototype, t),
      n && Tt(e, n),
      o
    );
  })();
  Ut.defaultProps = { children: void 0 };
  function Ht(e) {
    return (
      (e = e.message),
      p.createElement(
        "div",
        {
          className: l("lb-message-box", {
            "error-message": e && e.isError,
            "success-message": e && !1 === e.isError,
          }),
        },
        e.value && p.createElement("span", { className: "lb-message" }, e.value)
      )
    );
  }
  function Ft(e) {
    var t;
    return 2 * e < 1
      ? ((t = 2 * e), 0.5 * Math.pow(t, 3))
      : ((t = e - 2), 0.5 * Math.pow(t, 3) + 2);
  }
  function Gt() {
    return Date.now();
  }
  var Xt = "top",
    Yt = "position",
    Vt = "overflow",
    Jt = "visibility",
    Kt = "minHeight",
    Zt = "backgroundColor",
    Qt = "hidden",
    en = "static",
    tn = "visible",
    nn = "relative",
    rn = "absolute",
    on = "on-stage",
    an = "fly-in",
    cn = "fly-out",
    ln = "slide-up",
    un = "modal-card",
    sn = "sequence-animation",
    fn = 400,
    dn = function (e, t, n) {
      e.style[t] = n;
    },
    pn = function (e, t) {
      e.classList.add(t);
    },
    mn = function (e, t) {
      e.length
        ? e.forEach(function (e) {
            e.classList.remove(t);
          })
        : e.classList.remove(t);
    },
    yn = function (i, a, c, l, u) {
      var s =
          5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : Ft,
        f =
          6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : "px";
      return new Promise(function (n) {
        var r = l - c,
          o = Gt();
        (function e() {
          var t = 1 <= (t = (Gt() - o) / u) ? 1 : t;
          (i.style[a] = Math.min(c + s(t) * r + f, l)),
            1 === t ? n() : window.requestAnimationFrame(e);
        })();
      });
    },
    bn = function (e, t) {
      var n = 0;
      return (
        e.forEach(function (e) {
          e &&
            ((n += t), dn(e, "transitionDelay", "".concat(n, "ms")), pn(e, ln));
        }),
        n
      );
    },
    vn = function (t, n, e) {
      var r = document.querySelectorAll(".".concat(ln)),
        o = document.querySelector(".".concat(un));
      return (
        e && e(),
        pn(n, on),
        pn(n, "playtab-fade-in"),
        mn(t, "playtab-fade-in"),
        ie(600).then(function () {
          r.length && mn(r, ln);
          var e = n.querySelector(".".concat(sn));
          e
            ? ie(bn(Array.from(e.children).concat(o), 25)).then(function () {
                return mn(t, on), Promise.resolve();
              })
            : mn(t, on);
        }),
        Promise.resolve()
      );
    };
  function gn(e) {
    return (gn =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function hn() {
    return (hn =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            r = arguments[t];
          for (n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }).apply(this, arguments);
  }
  function wn(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function On(e, t) {
    return (On =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function Sn(n) {
    var r = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var e,
        t = jn(n);
      return (function (e, t) {
        {
          if (t && ("object" === gn(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
        }
        return En(e);
      })(
        this,
        r
          ? ((e = jn(this).constructor), Reflect.construct(t, arguments, e))
          : t.apply(this, arguments)
      );
    };
  }
  function En(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function jn(e) {
    return (jn = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function Pn(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return kn(e);
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return kn(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? kn(e, t)
            : void 0;
        }
      })(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function kn(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  var xn = {
    $black: "#000",
    $white: "#fff",
    $blue1: "#083aaa",
    $blue2: "#2860d8",
    $blue3: "#4f85e5",
    $blue35: "#5aa0d5",
    $blue4: "#a7d8ff",
    $blue5: "#dcefff",
    $blue7: "#477aaa",
    $purple1: "#5960ec",
    "$error-red": "#ce2424",
    $gray1: "#333",
    $gray2: "#959595",
    $gray3: "#ccc",
    $gray4: "#dcdcdc",
    $gray5: "#e6e6e6",
    $gray6: "#f4f4f4",
    $gray7: "#fafafa",
    $gray8: "#c4c4c4",
    $gray9: "#c2c2c2",
    $gray10: "#d9d9d9",
    $gray11: "#eee",
    $newsGray10: "#dfdfdf",
    $newsGray25: "#c7c7c7",
    $newsGray50: "#8b8b8b",
    $newsGray60: "#727272",
    $newsGray85: "#363636",
    $newsGray100: "#121212",
    $blueGray1: "#787886",
    $gold1: "#c4a200",
    $gold2: "#e2c32f",
    $yellow1: "#ffda00",
    $green1: "#6dc3a1",
    $statsPink: "#f93aa7",
    $statsYellow: "#ffc600",
    "$spelling-bee-yellow": "#f8cd05",
    "$letter-boxed-pink": "#faa6a4",
    "$vertex-tan": "#f7f5f6",
    $bannerBlue: "#4d88f9",
    "$daily-crossword-blue": "#6493e6",
    "$mini-crossword-blue": "#95befa",
    "$spelling-bee-gold": "#f7da21",
    "$tiles-green": "#b5e352",
    "$letter-boxed-red": "#e05c56",
    "$vertex-turquoise": "#00a2b3",
    "$sudoku-orange": "#fb9b00",
  };
  function Cn(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var r,
            o,
            i = [],
            a = !0,
            c = !1;
          try {
            for (
              n = n.call(e);
              !(a = (r = n.next()).done) &&
              (i.push(r.value), !t || i.length !== t);
              a = !0
            );
          } catch (e) {
            (c = !0), (o = e);
          } finally {
            try {
              a || null == n.return || n.return();
            } finally {
              if (c) throw o;
            }
          }
          return i;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return _n(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? _n(e, t)
            : void 0;
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function _n(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  var zn = function (e) {
    var t = e.momentSystem,
      n = e.transitionTo,
      r = e.barBgColor,
      o = void 0 === r ? "rgba(0, 0, 0, 0.2)" : r,
      r = e.barColor,
      r = void 0 === r ? "#FFF" : r,
      e = e.hasLoaded,
      i = void 0 !== e && e,
      e = Cn(s.useState(10), 2),
      a = e[0],
      c = e[1],
      e = Cn(s.useState(null), 2),
      l = e[0],
      u = e[1];
    return (
      s.useEffect(
        function () {
          var e;
          i
            ? (clearTimeout(l), t.transition("loading", n))
            : a <= 100 &&
              ((e = setTimeout(function () {
                c(a + 20 * Math.random());
              }, 30 + 150 * Math.random())),
              u(e));
        },
        [a, i]
      ),
      p.createElement(
        "div",
        {
          className: "pz-loader",
          id: "pz-loading-bar",
          style: { background: o },
        },
        p.createElement("div", {
          className: "pz-loader__fill",
          style: { background: r, right: "".concat(Math.max(100 - a, 0), "%") },
        })
      )
    );
  };
  function Ln() {
    return (Ln =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            r = arguments[t];
          for (n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }).apply(this, arguments);
  }
  function An(e) {
    return p.createElement(
      "button",
      Ln({ type: "button", className: "pz-hybrid-back pz-hide-web" }, e),
      p.createElement("span", { className: "pz-hybrid-back__text" }, "Back")
    );
  }
  var Dn = function () {
      return !window.isHybridWebView ||
        !window.NativeBridge ||
        "ios" === window.newsreaderAppPlatform
        ? null
        : p.createElement(An, { onClick: window.NativeBridge.gamesBackToHub });
    },
    Nn = function (e) {
      var t = e.icon,
        e = e.size;
      return p.createElement("div", {
        className: l("pz-moment__icon", void 0 === e ? "large" : e, t),
      });
    },
    Rn = function (e) {
      var t = e.text,
        e = e.size;
      return p.createElement(
        "h1",
        { className: l("pz-moment__title", void 0 === e ? "large" : e) },
        t
      );
    },
    Tn = function (e) {
      var t = e.text,
        e = e.variant;
      return p.createElement("h1", {
        className: l("pz-moment__description", void 0 === e ? "default" : e),
        dangerouslySetInnerHTML: { __html: t },
      });
    },
    Wn = function (e) {
      (e = e.plays), (e = void 0 === e ? "" : e);
      return (
        e &&
        p.createElement("p", {
          className: l("pz-moment__plays"),
          dangerouslySetInnerHTML: { __html: e },
        })
      );
    },
    Bn = function (e) {
      e = e.children;
      return p.createElement("div", { className: "pz-moment__body" }, e);
    },
    Mn = function (e) {
      var t = e.action,
        n = e.text,
        r = e.color,
        o = e.variant,
        e = e.icon;
      return p.createElement(
        "button",
        {
          type: "button",
          className: l("pz-moment__button", void 0 === r ? "primary" : r, o),
          onClick: t,
        },
        n,
        "locked" === e &&
          p.createElement("div", { className: "pz-moment__button--padlock" })
      );
    },
    In = function (e) {
      e = e.date;
      return p.createElement("span", { className: "pz-moment__info-date" }, e);
    },
    qn = function (e) {
      e = e.editor;
      return e
        ? p.createElement(
            "span",
            { className: "pz-moment__info-editor" },
            "Edited by ".concat(e)
          )
        : null;
    },
    $n = function (e) {
      e = e.children;
      return p.createElement("span", { className: "pz-moment__info-text" }, e);
    },
    Un = function (e) {
      var t = e.bgColor,
        e = e.children;
      return p.createElement(
        "div",
        {
          className: "pz-moment",
          style: { backgroundColor: xn[void 0 === t ? "$gray3" : t] },
        },
        e
      );
    },
    Hn = function (e) {
      return (
        "oxford" === e.promo &&
        p.createElement(
          "p",
          null,
          p.createElement("a", {
            href: "https://www.oxforddictionaries.com",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "pz-moment__promo",
          })
        )
      );
    },
    Fn = ["icon", "title", "bgColor", "description", "isActive"];
  function Gn(e, t) {
    if (null == e) return {};
    var n,
      r = (function (e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), 0 <= t.indexOf(n) || (o[n] = e[n]);
        return o;
      })(e, t);
    if (Object.getOwnPropertySymbols)
      for (var o = Object.getOwnPropertySymbols(e), i = 0; i < o.length; i++)
        (n = o[i]),
          0 <= t.indexOf(n) ||
            (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    return r;
  }
  function Xn(e) {
    var t = e.icon,
      n = e.title,
      r = void 0 === (i = e.bgColor) ? "$gray3" : i,
      o = e.description,
      i = e.isActive,
      e = Gn(e, Fn);
    return (
      p.useEffect(function () {
        document.getElementById("js-hook-pz-moment__loading").style[
          "background-color"
        ] = xn[r];
      }, []),
      p.createElement(
        "div",
        { className: "pz-loader-container" },
        p.createElement(Dn, null),
        p.createElement(Nn, { icon: t, size: "large" }),
        p.createElement(Rn, { text: n, size: "large" }),
        p.createElement(Tn, { text: o }),
        i && p.createElement(zn, e)
      )
    );
  }
  var Yn = ["hasLoaded"];
  function Vn(t, e) {
    var n,
      r = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        r.push.apply(r, n)),
      r
    );
  }
  function Jn(r) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? Vn(Object(o), !0).forEach(function (e) {
            var t, n;
            (t = r),
              (e = o[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = e);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
        : Vn(Object(o)).forEach(function (e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
          });
    }
    return r;
  }
  function Kn(e, t) {
    if (null == e) return {};
    var n,
      r = (function (e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), 0 <= t.indexOf(n) || (o[n] = e[n]);
        return o;
      })(e, t);
    if (Object.getOwnPropertySymbols)
      for (var o = Object.getOwnPropertySymbols(e), i = 0; i < o.length; i++)
        (n = o[i]),
          0 <= t.indexOf(n) ||
            (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    return r;
  }
  function Zn() {
    return (Zn =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            r = arguments[t];
          for (n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }).apply(this, arguments);
  }
  function Qn(e) {
    return (
      (e = e.game),
      p.createElement(
        Un,
        { bgColor: e.bgColor },
        p.createElement(
          "div",
          { className: "pz-moment__container alternate" },
          p.createElement(Dn, null),
          p.createElement(
            "div",
            { className: "pz-moment__content sequence-animation" },
            p.createElement(Nn, { icon: e.icon, size: "large" }),
            p.createElement(Rn, { text: e.title, size: "large" }),
            p.createElement(Tn, e.description),
            p.createElement(Wn, e.meta),
            p.createElement(
              "div",
              { className: "pz-moment__button-wrapper" },
              (e.buttons || []).map(function (e, t) {
                return p.createElement(Mn, Zn({}, e, { key: t }));
              }),
              e.bodyText && p.createElement(Bn, null, e.bodyText)
            ),
            p.createElement(
              "p",
              { className: "pz-moment__info" },
              p.createElement(In, { date: e.date }),
              p.createElement(qn, { editor: e.editor }),
              e.infoText && p.createElement($n, null, e.infoText)
            ),
            p.createElement(Hn, { promo: e.promo })
          )
        )
      )
    );
  }
  function er(e, t) {
    return (
      (e = sr(e)),
      window.isHybridWebView && window.NativeBridge
        ? window.NativeBridge.gamesAuthenticateUser("subscribe")
            .then(function (e) {
              if (!e.success) throw new Error(e.error);
              window.dispatchEvent(
                new CustomEvent("gamesUserCredentialChanged", { detail: e })
              ),
                lr(e.values.gamesAuthenticateUser, t);
            })
            .catch(function (e) {
              console.error("Failed to authenticate user", e);
            })
        : ar(e)
        ? cr(e)
        : window.location.assign(e),
      0
    );
  }
  var tr,
    nr,
    rr,
    or,
    ir,
    ar = function () {
      var e =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
      return 0 === e.indexOf("nytimes://") || 0 === e.indexOf("nytxwd://");
    },
    cr = function () {
      var e =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
        t =
          1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : document;
      if (!e) return null;
      t = t.createElement("a");
      (t.href = e), t.click();
    },
    lr = function (e, t) {
      t({
        isLoggedIn: e.isUserLoggedIn,
        hasXwd: e.isSubscribed,
        regiId: e.regiID,
        nytsCookie: e.nytsCookie,
      });
    },
    ur = "https://www.nytimes.com/subscription/games",
    sr = function (e) {
      var t =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : window;
      if (!t || !t.navigationLinks || !t.navigationLinks.subscribe) return ur;
      t = t.navigationLinks.subscribe;
      return e && t[e] ? t[e] : ur;
    },
    fr =
      ((tr = [
        {
          name: "loading",
          Content: function (e) {
            var t = e.hasLoaded,
              t = Jn(
                Jn(Jn({}, Kn(e, Yn)), {
                  bgColor: "$letter-boxed-pink",
                  barBgColor: "rgba(255, 255, 255, 0.6)",
                  barColor: "black",
                  transitionTo: "welcome",
                }),
                {},
                { hasLoaded: t }
              );
            return p.createElement(Xn, t);
          },
        },
        {
          name: "welcome",
          Content: function (e) {
            function t() {
              ft.interaction.custom(
                {
                  module: {
                    element: { name: "letter-boxed", label: "subscribe" },
                  },
                },
                !0
              );
            }
            var n = e.puzzle,
              r = c.useUser().userType,
              o = "reg" === r.entitlement || "anon" === r.entitlement,
              e = pt(n.printDate),
              r = n.printDate.split("-"),
              r = {
                icon: "letter-boxed",
                title: "Letter Boxed",
                date: ""
                  .concat(
                    {
                      "01": "January",
                      "02": "February",
                      "03": "March",
                      "04": "April",
                      "05": "May",
                      "06": "June",
                      "07": "July",
                      "08": "August",
                      "09": "September",
                      10: "October",
                      11: "November",
                      12: "December",
                    }[r[1]],
                    " "
                  )
                  .concat(r[2], ", ")
                  .concat(r[0]),
                bgColor: "$letter-boxed-pink",
                buttons: [
                  {
                    text: "Play",
                    action: function () {
                      f.mobileNavTools.activate(),
                        mr.transition("welcome", "game"),
                        ft.interaction.gameplay(
                          "letter-boxed",
                          "start-game",
                          n.par
                        );
                    },
                  },
                ],
                description: {
                  text: "Create words using letters around the square.",
                },
                meta: { plays: "" },
                editor: n.editor,
                promo: "oxford",
              };
            return (
              e &&
                o &&
                ((r.meta.plays = "0 plays left today"),
                (r.buttons[0].color = "secondary"),
                (r.buttons[0].icon = "locked"),
                (r.buttons[0].action = function () {
                  ft.interaction.custom({
                    module: {
                      element: {
                        name: "letter-boxed",
                        label: "play-subscribe",
                      },
                    },
                  });
                }),
                r.buttons.push({
                  text: "Subscribe",
                  action: function () {
                    er("letterBoxedCard"), t();
                  },
                })),
              !e &&
                o &&
                (r.buttons.push({
                  text: "Subscribe",
                  color: "secondary",
                  action: function () {
                    er("letterBoxedCard"), t();
                  },
                }),
                (r.meta.plays = "1 play left today")),
              p.createElement(Qn, { game: r })
            );
          },
        },
      ]),
      (nr = document.getElementById("portal-game-moments")),
      (rr = [].concat(
        Pn(
          tr.map(function (e) {
            return e.name;
          })
        ),
        ["game"]
      )),
      (or = { sequencingClass: sn }),
      ((ir = (function () {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && On(e, t);
        })(o, s.Component);
        var e,
          t,
          n,
          r = Sn(o);
        function o(e) {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, o),
            ((e = r.call(this, e)).state = { currentMoment: "" }),
            (or.load = e.load.bind(En(e))),
            (or.getCurrentMoment = e.getCurrentMoment.bind(En(e))),
            (or.transition = e.momentTransition.bind(En(e))),
            (or.reanimateMoment = function (t) {
              ie(fn).then(function () {
                var e = document
                  .getElementById("js-hook-pz-moment__".concat(t))
                  .querySelector(".".concat(sn));
                e && bn(Array.from(e.children), 200);
              });
            }.bind(En(e))),
            e
          );
        }
        return (
          (e = o),
          (t = [
            {
              key: "componentDidMount",
              value: function () {
                var e;
                (e = document.getElementById("js-hook-pz-moment__game")) &&
                  pn(e, "pz-moment__frame");
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e, t) {
                var n = this.state.currentMoment,
                  r = this.props.onEnter;
                t.currentMoment !== n && r(n);
              },
            },
            {
              key: "getCurrentMoment",
              value: function () {
                return this.state.currentMoment;
              },
            },
            {
              key: "momentTransition",
              value: function (e, t) {
                var n = this;
                if (rr.includes(e) && rr.includes(t))
                  return (function (t, n, e) {
                    if (window.isPlayTab) return vn(t, n, e);
                    var r = document.getElementById("js-hook-game-wrapper"),
                      o = t.offsetHeight,
                      i = document.querySelector(".".concat(un)),
                      a = document.querySelectorAll(".".concat(ln));
                    dn(r, Zt, t.style.backgroundColor || "white"),
                      dn(r, Yt, nn),
                      dn(r, Vt, Qt),
                      dn(r, Kt, "".concat(o, "px")),
                      dn(n, Jt, Qt),
                      dn(n, Yt, rn),
                      dn(n, Xt, 0),
                      pn(n, on),
                      dn(t, Yt, rn),
                      dn(t, Xt, 0),
                      pn(t, cn),
                      e && e();
                    var c = n.offsetHeight;
                    return (
                      window.isHybridWebView &&
                        dn(
                          document.body,
                          Zt,
                          t.style.backgroundColor || "white"
                        ),
                      ie(fn).then(function () {
                        a.length && mn(a, ln), dn(n, Jt, tn), pn(n, an);
                        var e = n.querySelector(".".concat(sn));
                        e && bn(Array.from(e.children).concat(i), 25),
                          yn(r, Kt, o, c, fn).then(function () {
                            mn(t, on),
                              mn(t, cn),
                              mn(n, an),
                              dn(r, Yt, en),
                              dn(r, Vt, tn),
                              dn(r, Kt, 0),
                              dn(t, Yt, en),
                              dn(n, Yt, nn);
                          });
                      }),
                      new Promise(function (e) {
                        return setTimeout(e, fn);
                      })
                    );
                  })(dr(e), dr(t), function () {
                    return n.setState({ currentMoment: t });
                  });
                console.error(
                  "".concat(e, " or ").concat(t, " is not a registered moment")
                );
              },
            },
            {
              key: "load",
              value: function (e) {
                var t;
                rr.includes(e)
                  ? ((t = dr(e)),
                    pn(t, on),
                    this.setState({ currentMoment: e }))
                  : console.error("".concat(e, " is not a registered moment"));
              },
            },
            {
              key: "render",
              value: function () {
                var n = this.state.currentMoment,
                  r = this.props.contentProps;
                return a.createPortal(
                  p.createElement(
                    p.Fragment,
                    null,
                    tr.map(function (e) {
                      var t = e.name,
                        e = e.Content;
                      return p.createElement(
                        "section",
                        {
                          className: l(
                            "pz-moment__frame pz-moment__".concat(t),
                            { "playtab-fade-in": "loading" === t }
                          ),
                          key: t,
                          id: "js-hook-pz-moment__".concat(t),
                        },
                        p.createElement(
                          e,
                          hn({ momentSystem: or, isActive: n === t }, r)
                        )
                      );
                    })
                  ),
                  nr
                );
              },
            },
          ]) && wn(e.prototype, t),
          n && wn(e, n),
          o
        );
      })()).defaultProps = { onEnter: function () {}, contentProps: {} }),
      { Moments: ir, momentSystem: or });
  function dr(e) {
    return document.getElementById("js-hook-pz-moment__".concat(e));
  }
  var pr = fr.Moments,
    mr = fr.momentSystem;
  function yr(e) {
    return (yr =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function br(t, e) {
    var n,
      r = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        r.push.apply(r, n)),
      r
    );
  }
  function vr(r) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? br(Object(o), !0).forEach(function (e) {
            var t, n;
            (t = r),
              (e = o[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = e);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
        : br(Object(o)).forEach(function (e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
          });
    }
    return r;
  }
  function gr(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function hr(e, t) {
    return (hr =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function wr(n) {
    var r = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var e,
        t = Or(n);
      return (function (e, t) {
        {
          if (t && ("object" === yr(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
        }
        return (function (e) {
          if (void 0 !== e) return e;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        })(e);
      })(
        this,
        r
          ? ((e = Or(this).constructor), Reflect.construct(t, arguments, e))
          : t.apply(this, arguments)
      );
    };
  }
  function Or(e) {
    return (Or = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  t = (function () {
    !(function (e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        t && hr(e, t);
    })(o, p.PureComponent);
    var e,
      t,
      n,
      r = wr(o);
    function o() {
      return (
        (function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, o),
        r.apply(this, arguments)
      );
    }
    return (
      (e = o),
      (t = [
        {
          key: "componentDidMount",
          value: function () {
            mr.load("loading");
          },
        },
        {
          key: "componentDidUpdate",
          value: function (e) {
            var t = this.props,
              n = t.puzzle,
              r = t.modalSystem,
              t = t.user.userType;
            n.isCompleted &&
              !1 === e.puzzle.isCompleted &&
              (ft.interaction.gameplay("solve-game", n.submittedWords.length),
              t.hasXwd
                ? r.open("congrats", "congrats")
                : ((function (e) {
                    if (void 0 === bt.localStorage) return;
                    try {
                      bt.localStorage.setItem(
                        vt,
                        JSON.stringify({ printDate: e })
                      );
                    } catch (e) {
                      console.error("local storage failure:", e);
                    }
                  })(n.printDate),
                  r.open("congratsSubscribe", "congratsSubscribe")));
          },
        },
        {
          key: "render",
          value: function () {
            var e = this.props,
              t = e.puzzle,
              n = e.actions,
              r = e.modalSystem,
              o = e.user,
              i = t.animating,
              e = o.hasLoaded,
              o = t.message.isError;
            return p.createElement(
              "div",
              { className: "lb-content-box" },
              p.createElement(pr, {
                contentProps: { puzzle: t, hasLoaded: e },
              }),
              p.createElement(yt, {
                modals: r,
                actions: n,
                animating: i,
                printDate: t.printDate,
              }),
              p.createElement(oe, {
                modalSystem: r,
                data: vr({}, t),
                actions: n,
              }),
              p.createElement(
                "div",
                { className: "lb-game-container" },
                p.createElement(
                  "div",
                  { className: "lb-word-container" },
                  p.createElement(
                    Ut,
                    {
                      value: t.activeWord,
                      action: n.handleTextChange,
                      submittedWords: t.submittedWords,
                      par: t.par,
                    },
                    o && p.createElement(Ht, { message: t.message })
                  ),
                  p.createElement(
                    "div",
                    { className: "lb-list-container" },
                    0 < t.submittedWords.length &&
                      p.createElement(Nt, this.props)
                  ),
                  p.createElement(
                    "div",
                    {
                      className: l("lb-par", {
                        hidden: !t.submittedWords.length,
                      }),
                    },
                    "Try to solve in ",
                    t.par,
                    " ",
                    1 < t.par ? "words" : "word"
                  )
                ),
                p.createElement(
                  "div",
                  { className: "lb-square-container" },
                  !o && p.createElement(Ht, { message: t.message }),
                  p.createElement(lt, this.props),
                  p.createElement(
                    "div",
                    { className: "lb-button-container" },
                    p.createElement(
                      "button",
                      {
                        type: "button",
                        className: "lb-button",
                        onClick: n.removeLetter,
                      },
                      "Delete"
                    ),
                    p.createElement(
                      "button",
                      {
                        type: "button",
                        className: "lb-button",
                        onClick: n.submitWord,
                      },
                      "Enter"
                    )
                  )
                )
              )
            );
          },
        },
      ]) && gr(e.prototype, t),
      n && gr(e, n),
      o
    );
  })();
  t.defaultProps = { puzzle: {}, actions: {} };
  var Sr = c.withUser(t);
  function Er(e) {
    return (Er =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function jr(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return Pr(e);
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return Pr(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? Pr(e, t)
            : void 0;
        }
      })(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function Pr(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function kr(t, e) {
    var n,
      r = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        r.push.apply(r, n)),
      r
    );
  }
  function xr(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? kr(Object(n), !0).forEach(function (e) {
            Dr(t, e, n[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : kr(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
    }
    return t;
  }
  function Cr(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function _r(e, t) {
    return (_r =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function zr(n) {
    var r = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var e,
        t = Ar(n);
      return (function (e, t) {
        {
          if (t && ("object" === Er(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
        }
        return Lr(e);
      })(
        this,
        r
          ? ((e = Ar(this).constructor), Reflect.construct(t, arguments, e))
          : t.apply(this, arguments)
      );
    };
  }
  function Lr(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function Ar(e) {
    return (Ar = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function Dr(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  var Nr = (function () {
    !(function (e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        t && _r(e, t);
    })(o, p.PureComponent);
    var e,
      t,
      n,
      r = zr(o);
    function o(e) {
      var t, c;
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, o),
        Dr(Lr((c = r.call(this, e))), "getCtx", function () {
          return c.canvas.current.getContext("2d");
        }),
        Dr(Lr(c), "setScale", function (e) {
          var t = c.getCtx();
          t.save(),
            t.scale(window.devicePixelRatio, window.devicePixelRatio),
            e(),
            t.restore();
        }),
        Dr(Lr(c), "drawPuzzle", function () {
          c.calculateCoordinates(),
            c.setScale(function () {
              var e = c.props.config;
              c.drawSquare(),
                c.drawLines(),
                e.outlineColor && c.drawSquareOutline(),
                e.pointStyle && c.drawPoints(),
                e.letterStyle && c.drawLetters();
            });
        }),
        Dr(Lr(c), "clearPuzzle", function () {
          c.getCtx().clearRect(
            0,
            0,
            c.canvas.current.width,
            c.canvas.current.height
          );
        }),
        Dr(Lr(c), "calculateCoordinates", function () {
          var e = c.props.config,
            t = ze(he.letter, c.squareInfo, e),
            e = ze(he.point, c.squareInfo, e);
          c.updateLetterState(he.letter, t), c.updateLetterState(he.point, e);
        }),
        Dr(Lr(c), "drawSquare", function () {
          var e = c.props.config,
            t = c.squareInfo,
            n = t.startingX,
            r = t.startingY,
            o = t.squareSize,
            t = c.getCtx();
          (t.fillStyle = e.squareColor), t.fillRect(n, r, o, o);
        }),
        Dr(Lr(c), "updateLetterState", function (n, r) {
          var e = c.letters.map(function (e, t) {
            return xr(xr({}, e), {}, Dr({}, "".concat(n, "Coords"), r[t]));
          });
          c.letters = e;
        }),
        Dr(Lr(c), "drawLines", function () {
          var e = c.props.solution,
            e = Ne(e, c.letters);
          e &&
            e.map(function (e) {
              return c.drawLine(e, we.isSubmitted);
            });
        }),
        Dr(Lr(c), "drawLine", function (e) {
          var t = e.from,
            n = e.to,
            r = c.props.config,
            o = r.canvasSize,
            i = r.lineWidth,
            a = r.lineStyle,
            e = a.color,
            r = a.isDashed,
            a = a.lineCap,
            i = i - 1,
            r = r ? Be(o) : [],
            o = c.getCtx();
          o.save(),
            (o.strokeStyle = e),
            (o.fillStyle = e),
            (o.lineWidth = i),
            (o.lineCap = a),
            o.setLineDash(r),
            o.beginPath(),
            o.moveTo(t.x, t.y),
            o.lineTo(n.x, n.y),
            o.stroke(),
            o.restore();
        }),
        Dr(Lr(c), "drawSquareOutline", function () {
          var e = c.props.config,
            t = c.squareInfo,
            n = t.startingX,
            r = t.startingY,
            o = t.squareSize,
            t = c.getCtx();
          (t.strokeStyle = e.outlineColor),
            (t.lineWidth = e.lineWidth - 1),
            t.strokeRect(n, r, o, o);
        }),
        Dr(Lr(c), "drawPoint", function (e) {
          var t = c.props.config,
            n = t.dotRadius,
            r = t.lineWidth,
            o = t.pointStyle,
            t = c.getCtx();
          (t.lineWidth = r - 1),
            (t.strokeStyle = o.strokeStyle),
            (t.fillStyle = o.fillStyle),
            t.beginPath(),
            t.arc(e.x, e.y, n, 0, 2 * Math.PI, !1),
            t.fill(),
            t.stroke();
        }),
        Dr(Lr(c), "drawPoints", function () {
          c.letters.forEach(function (e) {
            e = e.pointCoords;
            return c.drawPoint(e);
          });
        }),
        Dr(Lr(c), "drawLetter", function (e, t) {
          var n = c.props.config,
            r = n.fontSize,
            o = n.letterStyle,
            n = c.getCtx();
          (n.textAlign = "center"),
            (n.font = ""
              .concat(o.fontWeight, " ")
              .concat(r, "px nyt-franklin")),
            (n.strokeStyle = o.strokeStyle),
            (n.fillStyle = o.fillStyle),
            n.fillText(e, t.x, t.y);
        }),
        Dr(Lr(c), "drawLetters", function () {
          c.letters.forEach(function (e) {
            var t = e.letter,
              e = e.letterCoords;
            return c.drawLetter(t, e);
          });
        });
      var n = c.props.config;
      return (
        (c.canvas = p.createRef()),
        (c.letters = (t = []).concat.apply(
          t,
          jr(
            e.sides.map(function (e) {
              return e.split("").map(function (e) {
                return { letter: e };
              });
            })
          )
        )),
        (c.squareInfo = We(n.canvasSize, n.squarePercentage)),
        c
      );
    }
    return (
      (e = o),
      (t = [
        {
          key: "componentDidMount",
          value: function () {
            var e = this;
            new i("nyt-franklin").load().then(function () {
              return e.drawPuzzle();
            });
          },
        },
        {
          key: "componentDidUpdate",
          value: function () {
            this.clearPuzzle(), this.drawPuzzle();
          },
        },
        {
          key: "render",
          value: function () {
            var e = this.props.config.canvasSize;
            return p.createElement("canvas", {
              ref: this.canvas,
              width: e * window.devicePixelRatio,
              height: e * window.devicePixelRatio,
              style: { width: e, height: e },
            });
          },
        },
      ]) && Cr(e.prototype, t),
      n && Cr(e, n),
      o
    );
  })();
  Nr.defaultProps = {
    config: o.shape({
      squareColor: ge.white,
      outlineColor: null,
      pointStyle: null,
      letterStyle: null,
      lineStyle: { isDashed: !1, color: ge.pink, lineCap: "round" },
      canvasSize: 200,
      squarePercentage: 0.9,
      dotRadius: 2,
      fontSize: 12,
      lineWidth: 5,
    }),
  };
  function Rr() {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
      t =
        1 < arguments.length && void 0 !== arguments[1]
          ? arguments[1]
          : document.documentElement,
      n = Object.entries(window.abra.tests)
        .map(function (e) {
          return e.join("=");
        })
        .join(","),
      r = e.regiId || "[NONE]",
      o = window.env.version || "[N/A]";
    return [
      "Hybrid summary:",
      "Platform: ".concat(window.newsreaderAppPlatform ? "News App" : "XW App"),
      "Viewport Size: ".concat(t.clientWidth, " x ").concat(t.clientHeight),
      "Logged In: ".concat(e.isLoggedIn ? "Yes" : "No"),
      "Xwd: ".concat(e.hasXwd ? "Yes" : "No"),
      "Regi: ".concat(r),
      "NYTS: ".concat(e.nytsCookie ? "Yes" : "No"),
      "Web Version: ".concat(o),
      "Flags: ".concat(n),
    ];
  }
  function Tr(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var r,
            o,
            i = [],
            a = !0,
            c = !1;
          try {
            for (
              n = n.call(e);
              !(a = (r = n.next()).done) &&
              (i.push(r.value), !t || i.length !== t);
              a = !0
            );
          } catch (e) {
            (c = !0), (o = e);
          } finally {
            try {
              a || null == n.return || n.return();
            } finally {
              if (c) throw o;
            }
          }
          return i;
        }
      })(e, t) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return Wr(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Map" ===
            (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
            "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? Wr(e, t)
            : void 0;
        }
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function Wr(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function Br(e) {
    var t = void 0 === (c = e.subject) ? "" : c,
      n = void 0 === (r = e.href) ? "" : r,
      r = void 0 === (c = e.children) ? "" : c,
      o = void 0 === (c = e.type) ? "feedback" : c,
      i = void 0 === (c = e.user) ? {} : c,
      a = void 0 !== (c = e.useEnhancedHybridDebugInfo) && c,
      c = (e = Tr(s.useState("mailto:nytgames@nytimes.com"), 2))[0],
      l = e[1],
      u = window.isHybridWebView && window.NativeBridge;
    return (
      s.useEffect(function () {
        f.getFeedbackLink(t).then(l);
      }, []),
      (e = n && t ? t : ""),
      (c = n ? "".concat(n, "?subject=").concat(e) : c),
      p.createElement(
        "a",
        {
          "aria-label": "Send feedback to nytgames@nytimes.com",
          rel: u ? void 0 : "noopener noreferrer",
          target: u ? void 0 : "_blank",
          href: u ? void 0 : c,
          onClick: function (e) {
            u &&
              (e.preventDefault(),
              null !== (e = window.NativeBridge) &&
                void 0 !== e &&
                e.gamesSendEmail({
                  type: o,
                  debugInfo: (a
                    ? function () {
                        var e =
                            0 < arguments.length && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          t = new Date().getTimezoneOffset(),
                          n =
                            (null === (n = window.sentryConfig) || void 0 === n
                              ? void 0
                              : n.release) || "[N/A]",
                          n = [
                            "Timezone: ".concat(
                              "UTC".concat(0 < t ? "" : "+").concat(t / -60)
                            ),
                            "Build: ".concat(n),
                          ];
                        return Rr(e).concat(n).join("\n");
                      }
                    : function () {
                        return Rr(
                          0 < arguments.length && void 0 !== arguments[0]
                            ? arguments[0]
                            : {}
                        ).join("\n");
                      })(i),
                }));
          },
          title: "nytgames@nytimes.com",
        },
        r
      )
    );
  }
  function Mr(e) {
    var t = (c = e.data).submittedWords,
      n = c.par,
      r = c.sides,
      o = e.primaryButton,
      i = e.parDescription,
      a = e.subParDescription,
      c = e.warnPlayerOnLimit,
      e = t.length <= n ? "Congratulations!" : "Super solving!",
      a =
        t.length <= n
          ? p.createElement(
              "span",
              null,
              p.createElement(
                "p",
                null,
                "You solved within ",
                n,
                " ",
                1 < n ? "words" : "word",
                "."
              ),
              " ",
              p.createElement("p", null, i)
            )
          : p.createElement("span", null, a);
    return p.createElement(
      p.Fragment,
      null,
      p.createElement(
        "div",
        { className: "lb-modal__square" },
        p.createElement(Nr, { solution: t, sides: r, config: qr })
      ),
      p.createElement("h3", { className: "lb-modal__title" }, e),
      c &&
        p.createElement(
          "div",
          { className: "lb-modal__limitHit" },
          "No plays left today"
        ),
      p.createElement(
        "div",
        { className: "lb-modal__content" },
        p.createElement("div", { className: "lb-modal__description" }, a),
        p.createElement(
          "div",
          { className: "lb-button__wrapper" },
          p.createElement(
            "button",
            {
              type: "button",
              className: "pz-modal__button lb-button restart dark",
              onClick: o.onClick,
            },
            o.text
          ),
          p.createElement(
            "button",
            {
              type: "button",
              className: "pz-modal__button lb-button white more",
              onClick: function () {
                var e;
                ft.interaction.custom(
                  {
                    module: {
                      element: { name: "letter-boxed", label: "more-puzzles" },
                    },
                  },
                  !0
                ),
                  window.isHybridWebView && window.NativeBridge
                    ? window.NativeBridge.gamesBackToHub()
                    : window.isPlayTab
                    ? (((e = document.createElement("a")).href =
                        "nytimes://play"),
                      e.click())
                    : (window.location.href = "/crosswords");
              },
            },
            "View all games"
          )
        )
      )
    );
  }
  var Ir = {
      squareColor: ge.white,
      outlineColor: ge.black,
      pointStyle: { strokeStyle: ge.black, fillStyle: ge.white },
      letterStyle: {
        strokeStyle: ge.black,
        fillStyle: ge.black,
        fontWeight: 700,
      },
      lineStyle: { isDashed: !1, color: ge.pink, lineCap: "butt" },
      canvasSize: 120,
      squarePercentage: 0.65,
      dotRadius: 2,
      fontSize: 12,
      lineWidth: 3,
    },
    qr = {
      squareColor: ge.white,
      outlineColor: null,
      pointStyle: null,
      letterStyle: null,
      lineStyle: { isDashed: !1, color: ge.pink, lineCap: "round" },
      canvasSize: 200,
      squarePercentage: 0.9,
      dotRadius: 2,
      fontSize: 12,
      lineWidth: 5,
    },
    $r = {
      squareColor: ge.white,
      outlineColor: ge.black,
      pointStyle: { strokeStyle: ge.black, fillStyle: ge.white },
      letterStyle: {
        strokeStyle: ge.black,
        fillStyle: ge.black,
        fontWeight: 700,
      },
      lineStyle: { isDashed: !0, color: ge.pink, lineCap: "butt" },
      canvasSize: 120,
      squarePercentage: 0.65,
      dotRadius: 2,
      fontSize: 12,
      lineWidth: 3,
    },
    Ur = ["WORDS"],
    Hr = ["WMY", "TOI", "HND", "SLR"],
    Fr = function () {
      return p.createElement(
        p.Fragment,
        null,
        p.createElement("h3", { className: "lb-modal__title" }, "How to Play"),
        p.createElement(
          "p",
          { className: "lb-modal__sub-heading" },
          "Create words using letters",
          p.createElement("br", null),
          "round the square"
        ),
        p.createElement(
          "div",
          { className: "lb-modal__preview-square" },
          p.createElement(Nr, { solution: Ur, sides: Hr, config: $r })
        ),
        p.createElement(
          "div",
          { className: "lb-modal__content" },
          p.createElement(
            "ul",
            { className: "lb-modal__list" },
            p.createElement("li", null, "Connect letters to spell words"),
            p.createElement(
              "li",
              null,
              "Words must be at least 3 letters long"
            ),
            p.createElement("li", null, "Letters can be reused"),
            p.createElement(
              "li",
              null,
              "Consecutive letters cannot be from the same side"
            ),
            p.createElement(
              "li",
              null,
              "The last letter of a word becomes the first letter of the next word",
              p.createElement("br", null),
              "e.g. THY > YES > SINCE"
            ),
            p.createElement(
              "li",
              null,
              "Words cannot be proper nouns or hyphenated"
            ),
            p.createElement("li", null, "No cussing either, sorry"),
            p.createElement("li", null, "Use all letters to solve!")
          ),
          p.createElement(
            "p",
            { className: "lb-modal__more-info" },
            "New puzzles are released daily at 3 a.m. ET."
          ),
          p.createElement(
            "p",
            { className: "lb-modal__more-info" },
            "Have feedback? Email us at",
            p.createElement("br", null),
            p.createElement(
              Br,
              { subject: "Letter Boxed Feedback" },
              "nytgames@nytimes.com"
            ),
            "."
          )
        )
      );
    },
    Gr = function (e) {
      var t = e.data,
        e = t.yesterdaysSolution,
        t = t.yesterdaysSides;
      return p.createElement(
        p.Fragment,
        null,
        p.createElement(
          "h3",
          { className: "lb-modal__title" },
          "Our Solution to Yesterday’s Puzzle"
        ),
        p.createElement(
          "div",
          { className: "lb-modal__content" },
          p.createElement(
            "div",
            { className: "lb-modal__wordlist" },
            e.map(function (e, t) {
              return p.createElement(
                "div",
                {
                  className: "lb-word-list__word",
                  key: "".concat(e, "-").concat(t),
                },
                e
              );
            })
          ),
          p.createElement(
            "div",
            { className: "lb-modal__square" },
            p.createElement(Nr, { solution: e, sides: t, config: Ir })
          )
        )
      );
    };
  Mr.defaultProps = { warnPlayerOnLimit: !1 };
  var Xr = function (e) {
      var t = e.data,
        n = e.actions,
        r = e.modalSystem,
        e = "For an extra challenge, try to solve with "
          .concat(t.par, " ")
          .concat(1 < t.par ? "words" : "word", " or less.");
      return p.createElement(Mr, {
        primaryButton: {
          onClick: function () {
            ft.interaction.gameplay("play-again", t.par),
              r.close("congrats"),
              n.resetGame();
          },
          text: "Play again",
        },
        data: t,
        parDescription: "Come back tomorrow for more.",
        subParDescription: e,
      });
    },
    Yr = function (e) {
      var t = e.data,
        n = "Subscribe for unlimited play.",
        e = "Can you solve with "
          .concat(t.par, " ")
          .concat(1 < t.par ? "words" : "word", " or less? ")
          .concat(n);
      return p.createElement(Mr, {
        primaryButton: {
          onClick: function () {
            ft.interaction.custom(
              {
                module: {
                  element: {
                    name: "letter-boxed-congrats",
                    label: "subscribe",
                  },
                },
              },
              !0
            ),
              (window.location.href = sr("letterBoxedCard"));
          },
          text: "Subscribe",
        },
        data: t,
        parDescription: n,
        subParDescription: e,
        warnPlayerOnLimit: !0,
      });
    };
  function Vr(e) {
    return { type: "LetterBoxed/LETTER_NOT_FOUND", payload: e };
  }
  function Jr(o) {
    return function (e, t) {
      return (
        (n = t()),
        (r = o),
        (t = void 0 !== n.puzzleContainer ? n : { puzzleContainer: de({}, n) }),
        (n = le(t)),
        (t = ce(t).activeLetter),
        me(r) && ye(n, r) && !be(n, r, t)
          ? e({ type: S, payload: o })
          : e(Vr(o))
      );
      var n, r;
    };
  }
  function Kr() {
    return function (e, t) {
      pe(ce(t())) || e({ type: E });
    };
  }
  function Zr() {
    return { type: D };
  }
  function Qr(e) {
    return { type: L, payload: e };
  }
  function eo(e) {
    return { type: A, payload: e };
  }
  function to(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
    return function (n, r) {
      n((t ? Qr : eo)(e)),
        ie(t ? 1200 : 800).then(function () {
          var e = r().puzzleContainer.message,
            t = e.value,
            e = e.isError;
          t && e && n(Zr());
        });
    };
  }
  function no() {
    return function (e, t) {
      var n,
        r = ce(t());
      pe(r) ||
        ((n = r.activeWord).length && 2 < n.length
          ? ((n = (t = r).dictionary),
            (t = r.activeWord),
            n.includes(t)
              ? (r.message.value && e(Zr()), e({ type: P }))
              : e(to("Not a word", !0)))
          : e(to("Too short", !0)));
    };
  }
  function ro() {
    return { type: x };
  }
  function oo() {
    return { type: k };
  }
  fr = Object.freeze({
    __proto__: null,
    letterNotFound: Vr,
    addLetter: Jr,
    removeLetter: Kr,
    clearErrorMessage: Zr,
    showErrorMessage: Qr,
    showSuccessMessage: eo,
    showMessage: to,
    submitWord: no,
    handleTextChange: function (n) {
      return function (e, t) {
        pe(ce(t())) ||
          ("BACKSPACE" === (t = n.key.toUpperCase())
            ? (n.preventDefault(), e(Kr()))
            : "ENTER" === t
            ? (n.preventDefault(), e(no()))
            : e(Jr(t)));
      };
    },
    completeGame: ro,
    endAnimation: oo,
    addWord: function () {
      return function (e, t) {
        e(oo()), e({ type: j });
        var n,
          r,
          o = ce(t());
        (t = (n = o).submittedWords),
          (o = o.sides),
          (t = (n = []).concat.apply(
            n,
            ue(
              t.map(function (e) {
                return e.split("");
              })
            )
          )),
          (r = ve(t)),
          (t = []).concat
            .apply(
              t,
              ue(
                o.map(function (e) {
                  return e.split("");
                })
              )
            )
            .every(function (e) {
              return r.includes(e);
            }) && e(ro());
      };
    },
    resetGame: function () {
      return function (e, t) {
        pe(ce(t())) || e({ type: C });
      };
    },
    lockGame: function () {
      return { type: z };
    },
    unlockGame: function () {
      return { type: _ };
    },
  });
  function io(e) {
    return (io =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function ao(t, e) {
    var n,
      r = Object.keys(t);
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
        r.push.apply(r, n)),
      r
    );
  }
  function co(r) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? ao(Object(o), !0).forEach(function (e) {
            var t, n;
            (t = r),
              (e = o[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = e);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
        : ao(Object(o)).forEach(function (e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
          });
    }
    return r;
  }
  function lo(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function uo(e, t) {
    return (uo =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function so(n) {
    var r = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var e,
        t = fo(n);
      return (function (e, t) {
        {
          if (t && ("object" === io(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
        }
        return (function (e) {
          if (void 0 !== e) return e;
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        })(e);
      })(
        this,
        r
          ? ((e = fo(this).constructor), Reflect.construct(t, arguments, e))
          : t.apply(this, arguments)
      );
    };
  }
  function fo(e) {
    return (fo = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  t = (function () {
    !(function (e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        t && uo(e, t);
    })(o, p.PureComponent);
    var e,
      t,
      n,
      r = so(o);
    function o(e) {
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, o);
      var t,
        n = (t = r.call(this, e)).props,
        e = n.lockGame,
        e = { onClose: n.unlockGame, onOpen: e },
        n =
          (co({}, n.puzzle),
          [
            {
              name: "help",
              meta: { Content: Fr },
              onClose: f.mobileNavTools.activate,
            },
            {
              name: "congratsSubscribe",
              meta: { Content: Yr },
              closeByEx: !1,
              closeByBgClick: !1,
              onOpen: function () {
                ft.impression.custom({
                  module: { name: "congrats-modal", region: "letter-boxed" },
                }),
                  ft.impression.custom({
                    module: {
                      name: "hardpaywall",
                      region: "letter-boxed-no-plays-congrats",
                    },
                  });
              },
            },
            {
              name: "yesterday",
              meta: { Content: Gr },
              onClose: f.mobileNavTools.activate,
            },
            {
              name: "congrats",
              meta: { Content: Xr },
              closeByEx: !1,
              onOpen: function () {
                return ft.impression.custom({
                  module: { name: "congrats-modal", region: "letter-boxed" },
                });
              },
            },
          ]);
      return (
        (t.modalSystem = (function (e, t) {
          t = Q(Q({}, ee), {}, { modals: e }, t);
          return K(t);
        })(n, e)),
        t
      );
    }
    return (
      (e = o),
      (t = [
        {
          key: "render",
          value: function () {
            var e = this.props.puzzle;
            return p.createElement(Sr, {
              actions: this.props,
              puzzle: co({}, e),
              modalSystem: this.modalSystem,
            });
          },
        },
      ]) && lo(e.prototype, t),
      n && lo(e, n),
      o
    );
  })();
  t.defaultProps = { puzzle: {}, abra: {} };
  (o = co({}, fr)),
    (fr = e.connect(function (e) {
      return { puzzle: co(co({}, ce(e)), {}, { letters: le(e) }) };
    }, o)(t)),
    (o = document.getElementById("pz-game-root")),
    (t = (function (e) {
      e.date;
      var t = X(e, H),
        e = G(G({}, U), t),
        t = [n.applyMiddleware(r)];
      return (
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          t.push(window.__REDUX_DEVTOOLS_EXTENSION__()),
        n.createStore(Y, { puzzleContainer: e }, n.compose.apply(void 0, t))
      );
    })(f.getGameData()));
  a.render(
    p.createElement(
      w,
      null,
      p.createElement(
        e.Provider,
        { store: t },
        p.createElement(c.UserProvider, null, p.createElement(fr, null))
      )
    ),
    o
  );
});
