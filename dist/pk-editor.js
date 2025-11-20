import mS, { useRef as rS, useState as um, useEffect as D2, useCallback as uE, StrictMode as cE } from "react";
import x2 from "react-dom";
var xg = { exports: {} }, cp = {};
var O2;
function iE() {
  if (O2) return cp;
  O2 = 1;
  var L = Symbol.for("react.transitional.element"), ze = Symbol.for("react.fragment");
  function Nt(B, ae, he) {
    var Ye = null;
    if (he !== void 0 && (Ye = "" + he), ae.key !== void 0 && (Ye = "" + ae.key), "key" in ae) {
      he = {};
      for (var J in ae)
        J !== "key" && (he[J] = ae[J]);
    } else he = ae;
    return ae = he.ref, {
      $$typeof: L,
      type: B,
      key: Ye,
      ref: ae !== void 0 ? ae : null,
      props: he
    };
  }
  return cp.Fragment = ze, cp.jsx = Nt, cp.jsxs = Nt, cp;
}
var ip = {};
var M2;
function oE() {
  return M2 || (M2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function L(j) {
      if (j == null) return null;
      if (typeof j == "function")
        return j.$$typeof === Ft ? null : j.displayName || j.name || null;
      if (typeof j == "string") return j;
      switch (j) {
        case de:
          return "Fragment";
        case wl:
          return "Profiler";
        case Kt:
          return "StrictMode";
        case dl:
          return "Suspense";
        case F:
          return "SuspenseList";
        case W:
          return "Activity";
      }
      if (typeof j == "object")
        switch (typeof j.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), j.$$typeof) {
          case rl:
            return "Portal";
          case Pe:
            return j.displayName || "Context";
          case He:
            return (j._context.displayName || "Context") + ".Consumer";
          case Jl:
            var I = j.render;
            return j = j.displayName, j || (j = I.displayName || I.name || "", j = j !== "" ? "ForwardRef(" + j + ")" : "ForwardRef"), j;
          case ut:
            return I = j.displayName || null, I !== null ? I : L(j.type) || "Memo";
          case St:
            I = j._payload, j = j._init;
            try {
              return L(j(I));
            } catch {
            }
        }
      return null;
    }
    function ze(j) {
      return "" + j;
    }
    function Nt(j) {
      try {
        ze(j);
        var I = !1;
      } catch {
        I = !0;
      }
      if (I) {
        I = console;
        var lt = I.error, at = typeof Symbol == "function" && Symbol.toStringTag && j[Symbol.toStringTag] || j.constructor.name || "Object";
        return lt.call(
          I,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          at
        ), ze(j);
      }
    }
    function B(j) {
      if (j === de) return "<>";
      if (typeof j == "object" && j !== null && j.$$typeof === St)
        return "<...>";
      try {
        var I = L(j);
        return I ? "<" + I + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function ae() {
      var j = Et.A;
      return j === null ? null : j.getOwner();
    }
    function he() {
      return Error("react-stack-top-frame");
    }
    function Ye(j) {
      if (Ct.call(j, "key")) {
        var I = Object.getOwnPropertyDescriptor(j, "key").get;
        if (I && I.isReactWarning) return !1;
      }
      return j.key !== void 0;
    }
    function J(j, I) {
      function lt() {
        O || (O = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          I
        ));
      }
      lt.isReactWarning = !0, Object.defineProperty(j, "key", {
        get: lt,
        configurable: !0
      });
    }
    function je() {
      var j = L(this.type);
      return Q[j] || (Q[j] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), j = this.props.ref, j !== void 0 ? j : null;
    }
    function Ge(j, I, lt, at, Xe, Ka) {
      var Te = lt.ref;
      return j = {
        $$typeof: re,
        type: j,
        key: I,
        props: lt,
        _owner: at
      }, (Te !== void 0 ? Te : null) !== null ? Object.defineProperty(j, "ref", {
        enumerable: !1,
        get: je
      }) : Object.defineProperty(j, "ref", { enumerable: !1, value: null }), j._store = {}, Object.defineProperty(j._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(j, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(j, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Xe
      }), Object.defineProperty(j, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ka
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    }
    function Ta(j, I, lt, at, Xe, Ka) {
      var Te = I.children;
      if (Te !== void 0)
        if (at)
          if (ql(Te)) {
            for (at = 0; at < Te.length; at++)
              ft(Te[at]);
            Object.freeze && Object.freeze(Te);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else ft(Te);
      if (Ct.call(I, "key")) {
        Te = L(j);
        var $a = Object.keys(I).filter(function(Jf) {
          return Jf !== "key";
        });
        at = 0 < $a.length ? "{key: someKey, " + $a.join(": ..., ") + ": ...}" : "{key: someKey}", ht[Te + at] || ($a = 0 < $a.length ? "{" + $a.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          at,
          Te,
          $a,
          Te
        ), ht[Te + at] = !0);
      }
      if (Te = null, lt !== void 0 && (Nt(lt), Te = "" + lt), Ye(I) && (Nt(I.key), Te = "" + I.key), "key" in I) {
        lt = {};
        for (var Ea in I)
          Ea !== "key" && (lt[Ea] = I[Ea]);
      } else lt = I;
      return Te && J(
        lt,
        typeof j == "function" ? j.displayName || j.name || "Unknown" : j
      ), Ge(
        j,
        Te,
        lt,
        ae(),
        Xe,
        Ka
      );
    }
    function ft(j) {
      xt(j) ? j._store && (j._store.validated = 1) : typeof j == "object" && j !== null && j.$$typeof === St && (j._payload.status === "fulfilled" ? xt(j._payload.value) && j._payload.value._store && (j._payload.value._store.validated = 1) : j._store && (j._store.validated = 1));
    }
    function xt(j) {
      return typeof j == "object" && j !== null && j.$$typeof === re;
    }
    var be = mS, re = Symbol.for("react.transitional.element"), rl = Symbol.for("react.portal"), de = Symbol.for("react.fragment"), Kt = Symbol.for("react.strict_mode"), wl = Symbol.for("react.profiler"), He = Symbol.for("react.consumer"), Pe = Symbol.for("react.context"), Jl = Symbol.for("react.forward_ref"), dl = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), ut = Symbol.for("react.memo"), St = Symbol.for("react.lazy"), W = Symbol.for("react.activity"), Ft = Symbol.for("react.client.reference"), Et = be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ct = Object.prototype.hasOwnProperty, ql = Array.isArray, hl = console.createTask ? console.createTask : function() {
      return null;
    };
    be = {
      react_stack_bottom_frame: function(j) {
        return j();
      }
    };
    var O, Q = {}, Z = be.react_stack_bottom_frame.bind(
      be,
      he
    )(), ot = hl(B(he)), ht = {};
    ip.Fragment = de, ip.jsx = function(j, I, lt) {
      var at = 1e4 > Et.recentlyCreatedOwnerStacks++;
      return Ta(
        j,
        I,
        lt,
        !1,
        at ? Error("react-stack-top-frame") : Z,
        at ? hl(B(j)) : ot
      );
    }, ip.jsxs = function(j, I, lt) {
      var at = 1e4 > Et.recentlyCreatedOwnerStacks++;
      return Ta(
        j,
        I,
        lt,
        !0,
        at ? Error("react-stack-top-frame") : Z,
        at ? hl(B(j)) : ot
      );
    };
  })()), ip;
}
var R2;
function fE() {
  return R2 || (R2 = 1, process.env.NODE_ENV === "production" ? xg.exports = iE() : xg.exports = oE()), xg.exports;
}
var Qt = fE(), qg = { exports: {} }, op = {}, Yg = { exports: {} }, dS = {};
var U2;
function sE() {
  return U2 || (U2 = 1, (function(L) {
    function ze(O, Q) {
      var Z = O.length;
      O.push(Q);
      t: for (; 0 < Z; ) {
        var ot = Z - 1 >>> 1, ht = O[ot];
        if (0 < ae(ht, Q))
          O[ot] = Q, O[Z] = ht, Z = ot;
        else break t;
      }
    }
    function Nt(O) {
      return O.length === 0 ? null : O[0];
    }
    function B(O) {
      if (O.length === 0) return null;
      var Q = O[0], Z = O.pop();
      if (Z !== Q) {
        O[0] = Z;
        t: for (var ot = 0, ht = O.length, j = ht >>> 1; ot < j; ) {
          var I = 2 * (ot + 1) - 1, lt = O[I], at = I + 1, Xe = O[at];
          if (0 > ae(lt, Z))
            at < ht && 0 > ae(Xe, lt) ? (O[ot] = Xe, O[at] = Z, ot = at) : (O[ot] = lt, O[I] = Z, ot = I);
          else if (at < ht && 0 > ae(Xe, Z))
            O[ot] = Xe, O[at] = Z, ot = at;
          else break t;
        }
      }
      return Q;
    }
    function ae(O, Q) {
      var Z = O.sortIndex - Q.sortIndex;
      return Z !== 0 ? Z : O.id - Q.id;
    }
    if (L.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var he = performance;
      L.unstable_now = function() {
        return he.now();
      };
    } else {
      var Ye = Date, J = Ye.now();
      L.unstable_now = function() {
        return Ye.now() - J;
      };
    }
    var je = [], Ge = [], Ta = 1, ft = null, xt = 3, be = !1, re = !1, rl = !1, de = !1, Kt = typeof setTimeout == "function" ? setTimeout : null, wl = typeof clearTimeout == "function" ? clearTimeout : null, He = typeof setImmediate < "u" ? setImmediate : null;
    function Pe(O) {
      for (var Q = Nt(Ge); Q !== null; ) {
        if (Q.callback === null) B(Ge);
        else if (Q.startTime <= O)
          B(Ge), Q.sortIndex = Q.expirationTime, ze(je, Q);
        else break;
        Q = Nt(Ge);
      }
    }
    function Jl(O) {
      if (rl = !1, Pe(O), !re)
        if (Nt(je) !== null)
          re = !0, dl || (dl = !0, Et());
        else {
          var Q = Nt(Ge);
          Q !== null && hl(Jl, Q.startTime - O);
        }
    }
    var dl = !1, F = -1, ut = 5, St = -1;
    function W() {
      return de ? !0 : !(L.unstable_now() - St < ut);
    }
    function Ft() {
      if (de = !1, dl) {
        var O = L.unstable_now();
        St = O;
        var Q = !0;
        try {
          t: {
            re = !1, rl && (rl = !1, wl(F), F = -1), be = !0;
            var Z = xt;
            try {
              e: {
                for (Pe(O), ft = Nt(je); ft !== null && !(ft.expirationTime > O && W()); ) {
                  var ot = ft.callback;
                  if (typeof ot == "function") {
                    ft.callback = null, xt = ft.priorityLevel;
                    var ht = ot(
                      ft.expirationTime <= O
                    );
                    if (O = L.unstable_now(), typeof ht == "function") {
                      ft.callback = ht, Pe(O), Q = !0;
                      break e;
                    }
                    ft === Nt(je) && B(je), Pe(O);
                  } else B(je);
                  ft = Nt(je);
                }
                if (ft !== null) Q = !0;
                else {
                  var j = Nt(Ge);
                  j !== null && hl(
                    Jl,
                    j.startTime - O
                  ), Q = !1;
                }
              }
              break t;
            } finally {
              ft = null, xt = Z, be = !1;
            }
            Q = void 0;
          }
        } finally {
          Q ? Et() : dl = !1;
        }
      }
    }
    var Et;
    if (typeof He == "function")
      Et = function() {
        He(Ft);
      };
    else if (typeof MessageChannel < "u") {
      var Ct = new MessageChannel(), ql = Ct.port2;
      Ct.port1.onmessage = Ft, Et = function() {
        ql.postMessage(null);
      };
    } else
      Et = function() {
        Kt(Ft, 0);
      };
    function hl(O, Q) {
      F = Kt(function() {
        O(L.unstable_now());
      }, Q);
    }
    L.unstable_IdlePriority = 5, L.unstable_ImmediatePriority = 1, L.unstable_LowPriority = 4, L.unstable_NormalPriority = 3, L.unstable_Profiling = null, L.unstable_UserBlockingPriority = 2, L.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, L.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ut = 0 < O ? Math.floor(1e3 / O) : 5;
    }, L.unstable_getCurrentPriorityLevel = function() {
      return xt;
    }, L.unstable_next = function(O) {
      switch (xt) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = xt;
      }
      var Z = xt;
      xt = Q;
      try {
        return O();
      } finally {
        xt = Z;
      }
    }, L.unstable_requestPaint = function() {
      de = !0;
    }, L.unstable_runWithPriority = function(O, Q) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var Z = xt;
      xt = O;
      try {
        return Q();
      } finally {
        xt = Z;
      }
    }, L.unstable_scheduleCallback = function(O, Q, Z) {
      var ot = L.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? ot + Z : ot) : Z = ot, O) {
        case 1:
          var ht = -1;
          break;
        case 2:
          ht = 250;
          break;
        case 5:
          ht = 1073741823;
          break;
        case 4:
          ht = 1e4;
          break;
        default:
          ht = 5e3;
      }
      return ht = Z + ht, O = {
        id: Ta++,
        callback: Q,
        priorityLevel: O,
        startTime: Z,
        expirationTime: ht,
        sortIndex: -1
      }, Z > ot ? (O.sortIndex = Z, ze(Ge, O), Nt(je) === null && O === Nt(Ge) && (rl ? (wl(F), F = -1) : rl = !0, hl(Jl, Z - ot))) : (O.sortIndex = ht, ze(je, O), re || be || (re = !0, dl || (dl = !0, Et()))), O;
    }, L.unstable_shouldYield = W, L.unstable_wrapCallback = function(O) {
      var Q = xt;
      return function() {
        var Z = xt;
        xt = Q;
        try {
          return O.apply(this, arguments);
        } finally {
          xt = Z;
        }
      };
    };
  })(dS)), dS;
}
var hS = {};
var C2;
function rE() {
  return C2 || (C2 = 1, (function(L) {
    process.env.NODE_ENV !== "production" && (function() {
      function ze() {
        if (Jl = !1, St) {
          var O = L.unstable_now();
          Et = O;
          var Q = !0;
          try {
            t: {
              He = !1, Pe && (Pe = !1, F(W), W = -1), wl = !0;
              var Z = Kt;
              try {
                e: {
                  for (Ye(O), de = B(be); de !== null && !(de.expirationTime > O && je()); ) {
                    var ot = de.callback;
                    if (typeof ot == "function") {
                      de.callback = null, Kt = de.priorityLevel;
                      var ht = ot(
                        de.expirationTime <= O
                      );
                      if (O = L.unstable_now(), typeof ht == "function") {
                        de.callback = ht, Ye(O), Q = !0;
                        break e;
                      }
                      de === B(be) && ae(be), Ye(O);
                    } else ae(be);
                    de = B(be);
                  }
                  if (de !== null) Q = !0;
                  else {
                    var j = B(re);
                    j !== null && Ge(
                      J,
                      j.startTime - O
                    ), Q = !1;
                  }
                }
                break t;
              } finally {
                de = null, Kt = Z, wl = !1;
              }
              Q = void 0;
            }
          } finally {
            Q ? Ct() : St = !1;
          }
        }
      }
      function Nt(O, Q) {
        var Z = O.length;
        O.push(Q);
        t: for (; 0 < Z; ) {
          var ot = Z - 1 >>> 1, ht = O[ot];
          if (0 < he(ht, Q))
            O[ot] = Q, O[Z] = ht, Z = ot;
          else break t;
        }
      }
      function B(O) {
        return O.length === 0 ? null : O[0];
      }
      function ae(O) {
        if (O.length === 0) return null;
        var Q = O[0], Z = O.pop();
        if (Z !== Q) {
          O[0] = Z;
          t: for (var ot = 0, ht = O.length, j = ht >>> 1; ot < j; ) {
            var I = 2 * (ot + 1) - 1, lt = O[I], at = I + 1, Xe = O[at];
            if (0 > he(lt, Z))
              at < ht && 0 > he(Xe, lt) ? (O[ot] = Xe, O[at] = Z, ot = at) : (O[ot] = lt, O[I] = Z, ot = I);
            else if (at < ht && 0 > he(Xe, Z))
              O[ot] = Xe, O[at] = Z, ot = at;
            else break t;
          }
        }
        return Q;
      }
      function he(O, Q) {
        var Z = O.sortIndex - Q.sortIndex;
        return Z !== 0 ? Z : O.id - Q.id;
      }
      function Ye(O) {
        for (var Q = B(re); Q !== null; ) {
          if (Q.callback === null) ae(re);
          else if (Q.startTime <= O)
            ae(re), Q.sortIndex = Q.expirationTime, Nt(be, Q);
          else break;
          Q = B(re);
        }
      }
      function J(O) {
        if (Pe = !1, Ye(O), !He)
          if (B(be) !== null)
            He = !0, St || (St = !0, Ct());
          else {
            var Q = B(re);
            Q !== null && Ge(
              J,
              Q.startTime - O
            );
          }
      }
      function je() {
        return Jl ? !0 : !(L.unstable_now() - Et < Ft);
      }
      function Ge(O, Q) {
        W = dl(function() {
          O(L.unstable_now());
        }, Q);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), L.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var Ta = performance;
        L.unstable_now = function() {
          return Ta.now();
        };
      } else {
        var ft = Date, xt = ft.now();
        L.unstable_now = function() {
          return ft.now() - xt;
        };
      }
      var be = [], re = [], rl = 1, de = null, Kt = 3, wl = !1, He = !1, Pe = !1, Jl = !1, dl = typeof setTimeout == "function" ? setTimeout : null, F = typeof clearTimeout == "function" ? clearTimeout : null, ut = typeof setImmediate < "u" ? setImmediate : null, St = !1, W = -1, Ft = 5, Et = -1;
      if (typeof ut == "function")
        var Ct = function() {
          ut(ze);
        };
      else if (typeof MessageChannel < "u") {
        var ql = new MessageChannel(), hl = ql.port2;
        ql.port1.onmessage = ze, Ct = function() {
          hl.postMessage(null);
        };
      } else
        Ct = function() {
          dl(ze, 0);
        };
      L.unstable_IdlePriority = 5, L.unstable_ImmediatePriority = 1, L.unstable_LowPriority = 4, L.unstable_NormalPriority = 3, L.unstable_Profiling = null, L.unstable_UserBlockingPriority = 2, L.unstable_cancelCallback = function(O) {
        O.callback = null;
      }, L.unstable_forceFrameRate = function(O) {
        0 > O || 125 < O ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Ft = 0 < O ? Math.floor(1e3 / O) : 5;
      }, L.unstable_getCurrentPriorityLevel = function() {
        return Kt;
      }, L.unstable_next = function(O) {
        switch (Kt) {
          case 1:
          case 2:
          case 3:
            var Q = 3;
            break;
          default:
            Q = Kt;
        }
        var Z = Kt;
        Kt = Q;
        try {
          return O();
        } finally {
          Kt = Z;
        }
      }, L.unstable_requestPaint = function() {
        Jl = !0;
      }, L.unstable_runWithPriority = function(O, Q) {
        switch (O) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            O = 3;
        }
        var Z = Kt;
        Kt = O;
        try {
          return Q();
        } finally {
          Kt = Z;
        }
      }, L.unstable_scheduleCallback = function(O, Q, Z) {
        var ot = L.unstable_now();
        switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? ot + Z : ot) : Z = ot, O) {
          case 1:
            var ht = -1;
            break;
          case 2:
            ht = 250;
            break;
          case 5:
            ht = 1073741823;
            break;
          case 4:
            ht = 1e4;
            break;
          default:
            ht = 5e3;
        }
        return ht = Z + ht, O = {
          id: rl++,
          callback: Q,
          priorityLevel: O,
          startTime: Z,
          expirationTime: ht,
          sortIndex: -1
        }, Z > ot ? (O.sortIndex = Z, Nt(re, O), B(be) === null && O === B(re) && (Pe ? (F(W), W = -1) : Pe = !0, Ge(J, Z - ot))) : (O.sortIndex = ht, Nt(be, O), He || wl || (He = !0, St || (St = !0, Ct()))), O;
      }, L.unstable_shouldYield = je, L.unstable_wrapCallback = function(O) {
        var Q = Kt;
        return function() {
          var Z = Kt;
          Kt = Q;
          try {
            return O.apply(this, arguments);
          } finally {
            Kt = Z;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(hS)), hS;
}
var _2;
function q2() {
  return _2 || (_2 = 1, process.env.NODE_ENV === "production" ? Yg.exports = sE() : Yg.exports = rE()), Yg.exports;
}
var H2;
function dE() {
  if (H2) return op;
  H2 = 1;
  var L = q2(), ze = mS, Nt = x2;
  function B(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ae(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function he(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function Ye(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function J(l) {
    if (l.tag === 31) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function je(l) {
    if (he(l) !== l)
      throw Error(B(188));
  }
  function Ge(l) {
    var n = l.alternate;
    if (!n) {
      if (n = he(l), n === null) throw Error(B(188));
      return n !== l ? null : l;
    }
    for (var u = l, i = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (i = s.return, i !== null) {
          u = i;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return je(s), l;
          if (r === i) return je(s), n;
          r = r.sibling;
        }
        throw Error(B(188));
      }
      if (u.return !== i.return) u = s, i = r;
      else {
        for (var m = !1, v = s.child; v; ) {
          if (v === u) {
            m = !0, u = s, i = r;
            break;
          }
          if (v === i) {
            m = !0, i = s, u = r;
            break;
          }
          v = v.sibling;
        }
        if (!m) {
          for (v = r.child; v; ) {
            if (v === u) {
              m = !0, u = r, i = s;
              break;
            }
            if (v === i) {
              m = !0, i = r, u = s;
              break;
            }
            v = v.sibling;
          }
          if (!m) throw Error(B(189));
        }
      }
      if (u.alternate !== i) throw Error(B(190));
    }
    if (u.tag !== 3) throw Error(B(188));
    return u.stateNode.current === u ? l : n;
  }
  function Ta(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = Ta(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var ft = Object.assign, xt = Symbol.for("react.element"), be = Symbol.for("react.transitional.element"), re = Symbol.for("react.portal"), rl = Symbol.for("react.fragment"), de = Symbol.for("react.strict_mode"), Kt = Symbol.for("react.profiler"), wl = Symbol.for("react.consumer"), He = Symbol.for("react.context"), Pe = Symbol.for("react.forward_ref"), Jl = Symbol.for("react.suspense"), dl = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), ut = Symbol.for("react.lazy"), St = Symbol.for("react.activity"), W = Symbol.for("react.memo_cache_sentinel"), Ft = Symbol.iterator;
  function Et(l) {
    return l === null || typeof l != "object" ? null : (l = Ft && l[Ft] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ct = Symbol.for("react.client.reference");
  function ql(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ct ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case rl:
        return "Fragment";
      case Kt:
        return "Profiler";
      case de:
        return "StrictMode";
      case Jl:
        return "Suspense";
      case dl:
        return "SuspenseList";
      case St:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case re:
          return "Portal";
        case He:
          return l.displayName || "Context";
        case wl:
          return (l._context.displayName || "Context") + ".Consumer";
        case Pe:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case F:
          return n = l.displayName || null, n !== null ? n : ql(l.type) || "Memo";
        case ut:
          n = l._payload, l = l._init;
          try {
            return ql(l(n));
          } catch {
          }
      }
    return null;
  }
  var hl = Array.isArray, O = ze.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ot = [], ht = -1;
  function j(l) {
    return { current: l };
  }
  function I(l) {
    0 > ht || (l.current = ot[ht], ot[ht] = null, ht--);
  }
  function lt(l, n) {
    ht++, ot[ht] = l.current, l.current = n;
  }
  var at = j(null), Xe = j(null), Ka = j(null), Te = j(null);
  function $a(l, n) {
    switch (lt(Ka, n), lt(Xe, l), lt(at, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? Ov(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = Ov(n), l = e0(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    I(at), lt(at, l);
  }
  function Ea() {
    I(at), I(Xe), I(Ka);
  }
  function Jf(l) {
    l.memoizedState !== null && lt(Te, l);
    var n = at.current, u = e0(n, l.type);
    n !== u && (lt(Xe, l), lt(at, u));
  }
  function k(l) {
    Xe.current === l && (I(at), I(Xe)), Te.current === l && (I(Te), or._currentValue = Z);
  }
  var Kf, $f;
  function Ln(l) {
    if (Kf === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        Kf = n && n[1] || "", $f = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Kf + l + $f;
  }
  var ti = !1;
  function ne(l, n) {
    if (!l || ti) return "";
    ti = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var X = function() {
                throw Error();
              };
              if (Object.defineProperty(X.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(X, []);
                } catch (x) {
                  var C = x;
                }
                Reflect.construct(l, [], X);
              } else {
                try {
                  X.call();
                } catch (x) {
                  C = x;
                }
                l.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                C = x;
              }
              (X = l()) && typeof X.catch == "function" && X.catch(function() {
              });
            }
          } catch (x) {
            if (x && C && typeof x.stack == "string")
              return [x.stack, C.stack];
          }
          return [null, null];
        }
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        i.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = i.DetermineComponentFrameRoot(), m = r[0], v = r[1];
      if (m && v) {
        var T = m.split(`
`), U = v.split(`
`);
        for (s = i = 0; i < T.length && !T[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; s < U.length && !U[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (i === T.length || s === U.length)
          for (i = T.length - 1, s = U.length - 1; 1 <= i && 0 <= s && T[i] !== U[s]; )
            s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (T[i] !== U[s]) {
            if (i !== 1 || s !== 1)
              do
                if (i--, s--, 0 > s || T[i] !== U[s]) {
                  var q = `
` + T[i].replace(" at new ", " at ");
                  return l.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", l.displayName)), q;
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      ti = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Ln(u) : "";
  }
  function cm(l, n) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ln(l.type);
      case 16:
        return Ln("Lazy");
      case 13:
        return l.child !== n && n !== null ? Ln("Suspense Fallback") : Ln("Suspense");
      case 19:
        return Ln("SuspenseList");
      case 0:
      case 15:
        return ne(l.type, !1);
      case 11:
        return ne(l.type.render, !1);
      case 1:
        return ne(l.type, !0);
      case 31:
        return Ln("Activity");
      default:
        return "";
    }
  }
  function xr(l) {
    try {
      var n = "", u = null;
      do
        n += cm(l, u), u = l, l = l.return;
      while (l);
      return n;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var im = Object.prototype.hasOwnProperty, me = L.unstable_scheduleCallback, om = L.unstable_cancelCallback, ei = L.unstable_shouldYield, qr = L.unstable_requestPaint, Ul = L.unstable_now, jg = L.unstable_getCurrentPriorityLevel, Yr = L.unstable_ImmediatePriority, jr = L.unstable_UserBlockingPriority, dc = L.unstable_NormalPriority, Gg = L.unstable_LowPriority, fm = L.unstable_IdlePriority, sp = L.log, rp = L.unstable_setDisableYieldValue, li = null, ra = null;
  function xu(l) {
    if (typeof sp == "function" && rp(l), ra && typeof ra.setStrictMode == "function")
      try {
        ra.setStrictMode(li, l);
      } catch {
      }
  }
  var Kl = Math.clz32 ? Math.clz32 : sm, dp = Math.log, hp = Math.LN2;
  function sm(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (dp(l) / hp | 0) | 0;
  }
  var qu = 256, hn = 262144, hc = 4194304;
  function Wa(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Je(l, n, u) {
    var i = l.pendingLanes;
    if (i === 0) return 0;
    var s = 0, r = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var v = i & 134217727;
    return v !== 0 ? (i = v & ~r, i !== 0 ? s = Wa(i) : (m &= v, m !== 0 ? s = Wa(m) : u || (u = v & ~l, u !== 0 && (s = Wa(u))))) : (v = i & ~r, v !== 0 ? s = Wa(v) : m !== 0 ? s = Wa(m) : u || (u = i & ~l, u !== 0 && (s = Wa(u)))), s === 0 ? 0 : n !== 0 && n !== s && (n & r) === 0 && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function mn(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function ho(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ai() {
    var l = hc;
    return hc <<= 1, (hc & 62914560) === 0 && (hc = 4194304), l;
  }
  function Wf(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function mo(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Gr(l, n, u, i, s, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var v = l.entanglements, T = l.expirationTimes, U = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var q = 31 - Kl(u), X = 1 << q;
      v[q] = 0, T[q] = -1;
      var C = U[q];
      if (C !== null)
        for (U[q] = null, q = 0; q < C.length; q++) {
          var x = C[q];
          x !== null && (x.lane &= -536870913);
        }
      u &= ~X;
    }
    i !== 0 && kf(l, i, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~n));
  }
  function kf(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var i = 31 - Kl(n);
    l.entangledLanes |= n, l.entanglements[i] = l.entanglements[i] | 1073741824 | u & 261930;
  }
  function wn(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var i = 31 - Kl(u), s = 1 << i;
      s & n | l[i] & n && (l[i] |= n), u &= ~s;
    }
  }
  function Aa(l, n) {
    var u = n & -n;
    return u = (u & 42) !== 0 ? 1 : Xr(u), (u & (l.suspendedLanes | n)) !== 0 ? 0 : u;
  }
  function Xr(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function rm(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Qr() {
    var l = Q.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : fr(l.type));
  }
  function dm(l, n) {
    var u = Q.p;
    try {
      return Q.p = l, n();
    } finally {
      Q.p = u;
    }
  }
  var yn = Math.random().toString(36).slice(2), ue = "__reactFiber$" + yn, $l = "__reactProps$" + yn, mc = "__reactContainer$" + yn, Vr = "__reactEvents$" + yn, hm = "__reactListeners$" + yn, mp = "__reactHandles$" + yn, mm = "__reactResources$" + yn, Jn = "__reactMarker$" + yn;
  function Zr(l) {
    delete l[ue], delete l[$l], delete l[Vr], delete l[hm], delete l[mp];
  }
  function ni(l) {
    var n = l[ue];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[mc] || u[ue]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = qn(l); l !== null; ) {
            if (u = l[ue]) return u;
            l = qn(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function ui(l) {
    if (l = l[ue] || l[mc]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function yo(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(B(33));
  }
  function ci(l) {
    var n = l[mm];
    return n || (n = l[mm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function It(l) {
    l[Jn] = !0;
  }
  var ii = /* @__PURE__ */ new Set(), yc = {};
  function pc(l, n) {
    Kn(l, n), Kn(l + "Capture", n);
  }
  function Kn(l, n) {
    for (yc[l] = n, l = 0; l < n.length; l++)
      ii.add(n[l]);
  }
  var Lr = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), wr = {}, po = {};
  function vo(l) {
    return im.call(po, l) ? !0 : im.call(wr, l) ? !1 : Lr.test(l) ? po[l] = !0 : (wr[l] = !0, !1);
  }
  function go(l, n, u) {
    if (vo(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var i = n.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function Jr(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function Yu(l, n, u, i) {
    if (i === null) l.removeAttribute(u);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + i);
    }
  }
  function za(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Kr(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function ym(l, n, u) {
    var i = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    );
    if (!l.hasOwnProperty(n) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var s = i.get, r = i.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(m) {
          u = "" + m, r.call(this, m);
        }
      }), Object.defineProperty(l, n, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(m) {
          u = "" + m;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function $r(l) {
    if (!l._valueTracker) {
      var n = Kr(l) ? "checked" : "value";
      l._valueTracker = ym(
        l,
        n,
        "" + l[n]
      );
    }
  }
  function pm(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), i = "";
    return l && (i = Kr(l) ? l.checked ? "true" : "false" : l.value), l = i, l !== u ? (n.setValue(l), !0) : !1;
  }
  function Ff(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Xg = /[\n"\\]/g;
  function Da(l) {
    return l.replace(
      Xg,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function If(l, n, u, i, s, r, m, v) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + za(n)) : l.value !== "" + za(n) && (l.value = "" + za(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? oi(l, m, za(n)) : u != null ? oi(l, m, za(u)) : i != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? l.name = "" + za(v) : l.removeAttribute("name");
  }
  function Pf(l, n, u, i, s, r, m, v) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null)) {
        $r(l);
        return;
      }
      u = u != null ? "" + za(u) : "", n = n != null ? "" + za(n) : u, v || n === l.value || (l.value = n), l.defaultValue = n;
    }
    i = i ?? s, i = typeof i != "function" && typeof i != "symbol" && !!i, l.checked = v ? l.checked : !!i, l.defaultChecked = !!i, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m), $r(l);
  }
  function oi(l, n, u) {
    n === "number" && Ff(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function So(l, n, u, i) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && i && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + za(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, i && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function vm(l, n, u) {
    if (n != null && (n = "" + za(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + za(u) : "";
  }
  function gm(l, n, u, i) {
    if (n == null) {
      if (i != null) {
        if (u != null) throw Error(B(92));
        if (hl(i)) {
          if (1 < i.length) throw Error(B(93));
          i = i[0];
        }
        u = i;
      }
      u == null && (u = ""), n = u;
    }
    u = za(n), l.defaultValue = u, i = l.textContent, i === u && i !== "" && i !== null && (l.value = i), $r(l);
  }
  function $n(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var yp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function pp(l, n, u) {
    var i = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? i ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : i ? l.setProperty(n, u) : typeof u != "number" || u === 0 || yp.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function vp(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(B(62));
    if (l = l.style, u != null) {
      for (var i in u)
        !u.hasOwnProperty(i) || n != null && n.hasOwnProperty(i) || (i.indexOf("--") === 0 ? l.setProperty(i, "") : i === "float" ? l.cssFloat = "" : l[i] = "");
      for (var s in n)
        i = n[s], n.hasOwnProperty(s) && u[s] !== i && pp(l, s, i);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && pp(l, r, n[r]);
  }
  function Sm(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Qg = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), ts = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ka(l) {
    return ts.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function pn() {
  }
  var Wr = null;
  function kr(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Wn = null, fi = null;
  function es(l) {
    var n = ui(l);
    if (n && (l = n.stateNode)) {
      var u = l[$l] || null;
      t: switch (l = n.stateNode, n.type) {
        case "input":
          if (If(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Da(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var i = u[n];
              if (i !== l && i.form === l.form) {
                var s = i[$l] || null;
                if (!s) throw Error(B(90));
                If(
                  i,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              i = u[n], i.form === l.form && pm(i);
          }
          break t;
        case "textarea":
          vm(l, u.value, u.defaultValue);
          break t;
        case "select":
          n = u.value, n != null && So(l, !!u.multiple, n, !1);
      }
    }
  }
  var bo = !1;
  function bm(l, n, u) {
    if (bo) return l(n, u);
    bo = !0;
    try {
      var i = l(n);
      return i;
    } finally {
      if (bo = !1, (Wn !== null || fi !== null) && (lf(), Wn && (n = Wn, l = fi, fi = Wn = null, es(n), l)))
        for (n = 0; n < l.length; n++) es(l[n]);
    }
  }
  function ml(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var i = u[$l] || null;
    if (i === null) return null;
    u = i[n];
    t: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) || (l = l.type, i = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !i;
        break t;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        B(231, n, typeof u)
      );
    return u;
  }
  var ju = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ls = !1;
  if (ju)
    try {
      var To = {};
      Object.defineProperty(To, "passive", {
        get: function() {
          ls = !0;
        }
      }), window.addEventListener("test", To, To), window.removeEventListener("test", To, To);
    } catch {
      ls = !1;
    }
  var Gu = null, Tm = null, Fr = null;
  function Em() {
    if (Fr) return Fr;
    var l, n = Tm, u = n.length, i, s = "value" in Gu ? Gu.value : Gu.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var m = u - l;
    for (i = 1; i <= m && n[u - i] === s[r - i]; i++) ;
    return Fr = s.slice(l, 1 < i ? 1 - i : void 0);
  }
  function Ir(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function as() {
    return !0;
  }
  function gp() {
    return !1;
  }
  function Cl(l) {
    function n(u, i, s, r, m) {
      this._reactName = u, this._targetInst = s, this.type = i, this.nativeEvent = r, this.target = m, this.currentTarget = null;
      for (var v in l)
        l.hasOwnProperty(v) && (u = l[v], this[v] = u ? u(r) : r[v]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? as : gp, this.isPropagationStopped = gp, this;
    }
    return ft(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = as);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = as);
      },
      persist: function() {
      },
      isPersistent: as
    }), n;
  }
  var vc = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ns = Cl(vc), Eo = ft({}, vc, { view: 0, detail: 0 }), Vg = Cl(Eo), Am, zm, us, Pr = ft({}, Eo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Fa,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== us && (us && l.type === "mousemove" ? (Am = l.screenX - us.screenX, zm = l.screenY - us.screenY) : zm = Am = 0, us = l), Am);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : zm;
    }
  }), Ao = Cl(Pr), Sp = ft({}, Pr, { dataTransfer: 0 }), bp = Cl(Sp), Tp = ft({}, Eo, { relatedTarget: 0 }), td = Cl(Tp), Dm = ft({}, vc, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ep = Cl(Dm), si = ft({}, vc, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), ri = Cl(si), vn = ft({}, vc, { data: 0 }), Ap = Cl(vn), Om = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, kn = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, zp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function gn(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = zp[l]) ? !!n[l] : !1;
  }
  function Fa() {
    return gn;
  }
  var ed = ft({}, Eo, {
    key: function(l) {
      if (l.key) {
        var n = Om[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = Ir(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? kn[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fa,
    charCode: function(l) {
      return l.type === "keypress" ? Ir(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Ir(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), ld = Cl(ed), Mm = ft({}, Pr, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Sn = Cl(Mm), Zg = ft({}, Eo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fa
  }), Dp = Cl(Zg), Op = ft({}, vc, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Lg = Cl(Op), Rm = ft({}, Pr, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), wg = Cl(Rm), Mp = ft({}, vc, {
    newState: 0,
    oldState: 0
  }), Um = Cl(Mp), ad = [9, 13, 27, 32], zo = ju && "CompositionEvent" in window, di = null;
  ju && "documentMode" in document && (di = document.documentMode);
  var Yl = ju && "TextEvent" in window && !di, Cm = ju && (!zo || di && 8 < di && 11 >= di), cs = " ", gc = !1;
  function nd(l, n) {
    switch (l) {
      case "keyup":
        return ad.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function _m(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var hi = !1;
  function Rp(l, n) {
    switch (l) {
      case "compositionend":
        return _m(n);
      case "keypress":
        return n.which !== 32 ? null : (gc = !0, cs);
      case "textInput":
        return l = n.data, l === cs && gc ? null : l;
      default:
        return null;
    }
  }
  function Jg(l, n) {
    if (hi)
      return l === "compositionend" || !zo && nd(l, n) ? (l = Em(), Fr = Tm = Gu = null, hi = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Cm && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Hm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Fn(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Hm[l.type] : n === "textarea";
  }
  function Bm(l, n, u, i) {
    Wn ? fi ? fi.push(i) : fi = [i] : Wn = i, n = lr(n, "onChange"), 0 < n.length && (u = new ns(
      "onChange",
      "change",
      null,
      u,
      i
    ), l.push({ event: u, listeners: n }));
  }
  var mi = null, Sc = null;
  function yi(l) {
    Av(l, 0);
  }
  function Do(l) {
    var n = yo(l);
    if (pm(n)) return l;
  }
  function Nm(l, n) {
    if (l === "change") return n;
  }
  var ud = !1;
  if (ju) {
    var Wl;
    if (ju) {
      var bn = "oninput" in document;
      if (!bn) {
        var xm = document.createElement("div");
        xm.setAttribute("oninput", "return;"), bn = typeof xm.oninput == "function";
      }
      Wl = bn;
    } else Wl = !1;
    ud = Wl && (!document.documentMode || 9 < document.documentMode);
  }
  function cd() {
    mi && (mi.detachEvent("onpropertychange", id), Sc = mi = null);
  }
  function id(l) {
    if (l.propertyName === "value" && Do(Sc)) {
      var n = [];
      Bm(
        n,
        Sc,
        l,
        kr(l)
      ), bm(yi, n);
    }
  }
  function Up(l, n, u) {
    l === "focusin" ? (cd(), mi = n, Sc = u, mi.attachEvent("onpropertychange", id)) : l === "focusout" && cd();
  }
  function Cp(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Do(Sc);
  }
  function bc(l, n) {
    if (l === "click") return Do(n);
  }
  function pi(l, n) {
    if (l === "input" || l === "change")
      return Do(n);
  }
  function _p(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var jl = typeof Object.is == "function" ? Object.is : _p;
  function Ia(l, n) {
    if (jl(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), i = Object.keys(n);
    if (u.length !== i.length) return !1;
    for (i = 0; i < u.length; i++) {
      var s = u[i];
      if (!im.call(n, s) || !jl(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function qm(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Ym(l, n) {
    var u = qm(l);
    l = 0;
    for (var i; u; ) {
      if (u.nodeType === 3) {
        if (i = l + u.textContent.length, l <= n && i >= n)
          return { node: u, offset: n - l };
        l = i;
      }
      t: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break t;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = qm(u);
    }
  }
  function vi(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? vi(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Tc(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = Ff(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = Ff(l.document);
    }
    return n;
  }
  function is(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var os = ju && "documentMode" in document && 11 >= document.documentMode, Ec = null, Oo = null, Pa = null, Tn = !1;
  function od(l, n, u) {
    var i = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Tn || Ec == null || Ec !== Ff(i) || (i = Ec, "selectionStart" in i && is(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), Pa && Ia(Pa, i) || (Pa = i, i = lr(Oo, "onSelect"), 0 < i.length && (n = new ns(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: i }), n.target = Ec)));
  }
  function Xu(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var En = {
    animationend: Xu("Animation", "AnimationEnd"),
    animationiteration: Xu("Animation", "AnimationIteration"),
    animationstart: Xu("Animation", "AnimationStart"),
    transitionrun: Xu("Transition", "TransitionRun"),
    transitionstart: Xu("Transition", "TransitionStart"),
    transitioncancel: Xu("Transition", "TransitionCancel"),
    transitionend: Xu("Transition", "TransitionEnd")
  }, Mo = {}, Ac = {};
  ju && (Ac = document.createElement("div").style, "AnimationEvent" in window || (delete En.animationend.animation, delete En.animationiteration.animation, delete En.animationstart.animation), "TransitionEvent" in window || delete En.transitionend.transition);
  function $t(l) {
    if (Mo[l]) return Mo[l];
    if (!En[l]) return l;
    var n = En[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in Ac)
        return Mo[l] = n[u];
    return l;
  }
  var fs = $t("animationend"), jm = $t("animationiteration"), fd = $t("animationstart"), gi = $t("transitionrun"), ss = $t("transitionstart"), In = $t("transitioncancel"), Hp = $t("transitionend"), Pn = /* @__PURE__ */ new Map(), Ro = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Ro.push("scrollEnd");
  function kl(l, n) {
    Pn.set(l, n), pc(n, [l]);
  }
  var Si = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, De = [], yl = 0, tn = 0;
  function Oa() {
    for (var l = yl, n = tn = yl = 0; n < l; ) {
      var u = De[n];
      De[n++] = null;
      var i = De[n];
      De[n++] = null;
      var s = De[n];
      De[n++] = null;
      var r = De[n];
      if (De[n++] = null, i !== null && s !== null) {
        var m = i.pending;
        m === null ? s.next = s : (s.next = m.next, m.next = s), i.pending = s;
      }
      r !== 0 && sd(u, s, r);
    }
  }
  function Ma(l, n, u, i) {
    De[yl++] = l, De[yl++] = n, De[yl++] = u, De[yl++] = i, tn |= i, l.lanes |= i, l = l.alternate, l !== null && (l.lanes |= i);
  }
  function en(l, n, u, i) {
    return Ma(l, n, u, i), rs(l);
  }
  function Qu(l, n) {
    return Ma(l, null, null, n), rs(l);
  }
  function sd(l, n, u) {
    l.lanes |= u;
    var i = l.alternate;
    i !== null && (i.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, i = r.alternate, i !== null && (i.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Kl(u), l = r.hiddenUpdates, i = l[s], i === null ? l[s] = [n] : i.push(n), n.lane = u | 536870912), r) : null;
  }
  function rs(l) {
    if (50 < ef)
      throw ef = 0, Ks = null, Error(B(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Fl = {};
  function Bp(l, n, u, i) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Qe(l, n, u, i) {
    return new Bp(l, n, u, i);
  }
  function bi(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Vu(l, n) {
    var u = l.alternate;
    return u === null ? (u = Qe(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Gm(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function rd(l, n, u, i, s, r) {
    var m = 0;
    if (i = l, typeof l == "function") bi(l) && (m = 1);
    else if (typeof l == "string")
      m = o0(
        l,
        u,
        at.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      t: switch (l) {
        case St:
          return l = Qe(31, u, n, s), l.elementType = St, l.lanes = r, l;
        case rl:
          return Zu(u.children, s, r, n);
        case de:
          m = 8, s |= 24;
          break;
        case Kt:
          return l = Qe(12, u, n, s | 2), l.elementType = Kt, l.lanes = r, l;
        case Jl:
          return l = Qe(13, u, n, s), l.elementType = Jl, l.lanes = r, l;
        case dl:
          return l = Qe(19, u, n, s), l.elementType = dl, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case He:
                m = 10;
                break t;
              case wl:
                m = 9;
                break t;
              case Pe:
                m = 11;
                break t;
              case F:
                m = 14;
                break t;
              case ut:
                m = 16, i = null;
                break t;
            }
          m = 29, u = Error(
            B(130, l === null ? "null" : typeof l, "")
          ), i = null;
      }
    return n = Qe(m, u, n, s), n.elementType = l, n.type = i, n.lanes = r, n;
  }
  function Zu(l, n, u, i) {
    return l = Qe(7, l, i, n), l.lanes = u, l;
  }
  function Uo(l, n, u) {
    return l = Qe(6, l, null, n), l.lanes = u, l;
  }
  function Xm(l) {
    var n = Qe(18, null, null, 0);
    return n.stateNode = l, n;
  }
  function dd(l, n, u) {
    return n = Qe(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var Qm = /* @__PURE__ */ new WeakMap();
  function Ra(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = Qm.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: xr(n)
      }, Qm.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: xr(n)
    };
  }
  var Ua = [], Ti = 0, ds = null, Ke = 0, da = [], Il = 0, An = null, ha = 1, zn = "";
  function ln(l, n) {
    Ua[Ti++] = Ke, Ua[Ti++] = ds, ds = l, Ke = n;
  }
  function Vm(l, n, u) {
    da[Il++] = ha, da[Il++] = zn, da[Il++] = An, An = l;
    var i = ha;
    l = zn;
    var s = 32 - Kl(i) - 1;
    i &= ~(1 << s), u += 1;
    var r = 32 - Kl(n) + s;
    if (30 < r) {
      var m = s - s % 5;
      r = (i & (1 << m) - 1).toString(32), i >>= m, s -= m, ha = 1 << 32 - Kl(n) + s | u << s | i, zn = r + l;
    } else
      ha = 1 << r | u << s | i, zn = l;
  }
  function Co(l) {
    l.return !== null && (ln(l, 1), Vm(l, 1, 0));
  }
  function hd(l) {
    for (; l === ds; )
      ds = Ua[--Ti], Ua[Ti] = null, Ke = Ua[--Ti], Ua[Ti] = null;
    for (; l === An; )
      An = da[--Il], da[Il] = null, zn = da[--Il], da[Il] = null, ha = da[--Il], da[Il] = null;
  }
  function hs(l, n) {
    da[Il++] = ha, da[Il++] = zn, da[Il++] = An, ha = n.id, zn = n.overflow, An = l;
  }
  var pl = null, ye = null, qt = !1, tu = null, nl = !1, eu = Error(B(519));
  function an(l) {
    var n = Error(
      B(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ho(Ra(n, l)), eu;
  }
  function ms(l) {
    var n = l.stateNode, u = l.type, i = l.memoizedProps;
    switch (n[ue] = l, n[$l] = i, u) {
      case "dialog":
        Bt("cancel", n), Bt("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Bt("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < of.length; u++)
          Bt(of[u], n);
        break;
      case "source":
        Bt("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Bt("error", n), Bt("load", n);
        break;
      case "details":
        Bt("toggle", n);
        break;
      case "input":
        Bt("invalid", n), Pf(
          n,
          i.value,
          i.defaultValue,
          i.checked,
          i.defaultChecked,
          i.type,
          i.name,
          !0
        );
        break;
      case "select":
        Bt("invalid", n);
        break;
      case "textarea":
        Bt("invalid", n), gm(n, i.value, i.defaultValue, i.children);
    }
    u = i.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || i.suppressHydrationWarning === !0 || Fy(n.textContent, u) ? (i.popover != null && (Bt("beforetoggle", n), Bt("toggle", n)), i.onScroll != null && Bt("scroll", n), i.onScrollEnd != null && Bt("scrollend", n), i.onClick != null && (n.onclick = pn), n = !0) : n = !1, n || an(l, !0);
  }
  function _o(l) {
    for (pl = l.return; pl; )
      switch (pl.tag) {
        case 5:
        case 31:
        case 13:
          nl = !1;
          return;
        case 27:
        case 3:
          nl = !0;
          return;
        default:
          pl = pl.return;
      }
  }
  function lu(l) {
    if (l !== pl) return !1;
    if (!qt) return _o(l), qt = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || sf(l.type, l.memoizedProps)), u = !u), u && ye && an(l), _o(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(B(317));
      ye = ph(l);
    } else if (n === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(B(317));
      ye = ph(l);
    } else
      n === 27 ? (n = ye, xn(l.type) ? (l = ur, ur = null, ye = l) : ye = n) : ye = pl ? oa(l.stateNode.nextSibling) : null;
    return !0;
  }
  function zc() {
    ye = pl = null, qt = !1;
  }
  function Zm() {
    var l = tu;
    return l !== null && (xe === null ? xe = l : xe.push.apply(
      xe,
      l
    ), tu = null), l;
  }
  function Ho(l) {
    tu === null ? tu = [l] : tu.push(l);
  }
  var md = j(null), Lu = null, Dn = null;
  function Pl(l, n, u) {
    lt(md, n._currentValue), n._currentValue = u;
  }
  function On(l) {
    l._currentValue = md.current, I(md);
  }
  function yd(l, n, u) {
    for (; l !== null; ) {
      var i = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, i !== null && (i.childLanes |= n)) : i !== null && (i.childLanes & n) !== n && (i.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function au(l, n, u, i) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var m = s.child;
        r = r.firstContext;
        t: for (; r !== null; ) {
          var v = r;
          r = s;
          for (var T = 0; T < n.length; T++)
            if (v.context === n[T]) {
              r.lanes |= u, v = r.alternate, v !== null && (v.lanes |= u), yd(
                r.return,
                u,
                l
              ), i || (m = null);
              break t;
            }
          r = v.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(B(341));
        m.lanes |= u, r = m.alternate, r !== null && (r.lanes |= u), yd(m, u, l), m = null;
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null; ) {
          if (m === l) {
            m = null;
            break;
          }
          if (s = m.sibling, s !== null) {
            s.return = m.return, m = s;
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }
  function vl(l, n, u, i) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(B(387));
        if (m = m.memoizedProps, m !== null) {
          var v = s.type;
          jl(s.pendingProps.value, m.value) || (l !== null ? l.push(v) : l = [v]);
        }
      } else if (s === Te.current) {
        if (m = s.alternate, m === null) throw Error(B(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(or) : l = [or]);
      }
      s = s.return;
    }
    l !== null && au(
      n,
      l,
      u,
      i
    ), n.flags |= 262144;
  }
  function Ei(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!jl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function pt(l) {
    Lu = l, Dn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function V(l) {
    return ys(Lu, l);
  }
  function wu(l, n) {
    return Lu === null && pt(l), ys(l, n);
  }
  function ys(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, Dn === null) {
      if (l === null) throw Error(B(308));
      Dn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else Dn = Dn.next = n;
    return u;
  }
  var Ve = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, i) {
        l.push(i);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, Lm = L.unstable_scheduleCallback, wm = L.unstable_NormalPriority, $e = {
    $$typeof: He,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ps() {
    return {
      controller: new Ve(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function vs(l) {
    l.refCount--, l.refCount === 0 && Lm(wm, function() {
      l.controller.abort();
    });
  }
  var Ai = null, gs = 0, Dc = 0, tl = null;
  function Pt(l, n) {
    if (Ai === null) {
      var u = Ai = [];
      gs = 0, Dc = oh(), tl = {
        status: "pending",
        value: void 0,
        then: function(i) {
          u.push(i);
        }
      };
    }
    return gs++, n.then(Ss, Ss), n;
  }
  function Ss() {
    if (--gs === 0 && Ai !== null) {
      tl !== null && (tl.status = "fulfilled");
      var l = Ai;
      Ai = null, Dc = 0, tl = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function bs(l, n) {
    var u = [], i = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        i.status = "fulfilled", i.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (i.status = "rejected", i.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), i;
  }
  var Ju = O.S;
  O.S = function(l, n) {
    jy = Ul(), typeof n == "object" && n !== null && typeof n.then == "function" && Pt(l, n), Ju !== null && Ju(l, n);
  };
  var Ca = j(null);
  function _a() {
    var l = Ca.current;
    return l !== null ? l : ie.pooledCache;
  }
  function Bo(l, n) {
    n === null ? lt(Ca, Ca.current) : lt(Ca, n.pool);
  }
  function zi() {
    var l = _a();
    return l === null ? null : { parent: $e._currentValue, pool: l };
  }
  var Oc = Error(B(460)), Di = Error(B(474)), No = Error(B(542)), Oi = { then: function() {
  } };
  function Jm(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Km(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(pn, pn), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, pd(l), l;
      default:
        if (typeof n.status == "string") n.then(pn, pn);
        else {
          if (l = ie, l !== null && 100 < l.shellSuspendCounter)
            throw Error(B(482));
          l = n, l.status = "pending", l.then(
            function(i) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = i;
              }
            },
            function(i) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = i;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, pd(l), l;
        }
        throw Rc = n, Oc;
    }
  }
  function Mc(l) {
    try {
      var n = l._init;
      return n(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Rc = u, Oc) : u;
    }
  }
  var Rc = null;
  function $m() {
    if (Rc === null) throw Error(B(459));
    var l = Rc;
    return Rc = null, l;
  }
  function pd(l) {
    if (l === Oc || l === No)
      throw Error(B(483));
  }
  var Uc = null, Mi = 0;
  function Ts(l) {
    var n = Mi;
    return Mi += 1, Uc === null && (Uc = []), Km(Uc, l, n);
  }
  function xo(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function Es(l, n) {
    throw n.$$typeof === xt ? Error(B(525)) : (l = Object.prototype.toString.call(n), Error(
      B(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function Np(l) {
    function n(M, z) {
      if (l) {
        var R = M.deletions;
        R === null ? (M.deletions = [z], M.flags |= 16) : R.push(z);
      }
    }
    function u(M, z) {
      if (!l) return null;
      for (; z !== null; )
        n(M, z), z = z.sibling;
      return null;
    }
    function i(M) {
      for (var z = /* @__PURE__ */ new Map(); M !== null; )
        M.key !== null ? z.set(M.key, M) : z.set(M.index, M), M = M.sibling;
      return z;
    }
    function s(M, z) {
      return M = Vu(M, z), M.index = 0, M.sibling = null, M;
    }
    function r(M, z, R) {
      return M.index = R, l ? (R = M.alternate, R !== null ? (R = R.index, R < z ? (M.flags |= 67108866, z) : R) : (M.flags |= 67108866, z)) : (M.flags |= 1048576, z);
    }
    function m(M) {
      return l && M.alternate === null && (M.flags |= 67108866), M;
    }
    function v(M, z, R, G) {
      return z === null || z.tag !== 6 ? (z = Uo(R, M.mode, G), z.return = M, z) : (z = s(z, R), z.return = M, z);
    }
    function T(M, z, R, G) {
      var nt = R.type;
      return nt === rl ? q(
        M,
        z,
        R.props.children,
        G,
        R.key
      ) : z !== null && (z.elementType === nt || typeof nt == "object" && nt !== null && nt.$$typeof === ut && Mc(nt) === z.type) ? (z = s(z, R.props), xo(z, R), z.return = M, z) : (z = rd(
        R.type,
        R.key,
        R.props,
        null,
        M.mode,
        G
      ), xo(z, R), z.return = M, z);
    }
    function U(M, z, R, G) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== R.containerInfo || z.stateNode.implementation !== R.implementation ? (z = dd(R, M.mode, G), z.return = M, z) : (z = s(z, R.children || []), z.return = M, z);
    }
    function q(M, z, R, G, nt) {
      return z === null || z.tag !== 7 ? (z = Zu(
        R,
        M.mode,
        G,
        nt
      ), z.return = M, z) : (z = s(z, R), z.return = M, z);
    }
    function X(M, z, R) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = Uo(
          "" + z,
          M.mode,
          R
        ), z.return = M, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case be:
            return R = rd(
              z.type,
              z.key,
              z.props,
              null,
              M.mode,
              R
            ), xo(R, z), R.return = M, R;
          case re:
            return z = dd(
              z,
              M.mode,
              R
            ), z.return = M, z;
          case ut:
            return z = Mc(z), X(M, z, R);
        }
        if (hl(z) || Et(z))
          return z = Zu(
            z,
            M.mode,
            R,
            null
          ), z.return = M, z;
        if (typeof z.then == "function")
          return X(M, Ts(z), R);
        if (z.$$typeof === He)
          return X(
            M,
            wu(M, z),
            R
          );
        Es(M, z);
      }
      return null;
    }
    function C(M, z, R, G) {
      var nt = z !== null ? z.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return nt !== null ? null : v(M, z, "" + R, G);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case be:
            return R.key === nt ? T(M, z, R, G) : null;
          case re:
            return R.key === nt ? U(M, z, R, G) : null;
          case ut:
            return R = Mc(R), C(M, z, R, G);
        }
        if (hl(R) || Et(R))
          return nt !== null ? null : q(M, z, R, G, null);
        if (typeof R.then == "function")
          return C(
            M,
            z,
            Ts(R),
            G
          );
        if (R.$$typeof === He)
          return C(
            M,
            z,
            wu(M, R),
            G
          );
        Es(M, R);
      }
      return null;
    }
    function x(M, z, R, G, nt) {
      if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint")
        return M = M.get(R) || null, v(z, M, "" + G, nt);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case be:
            return M = M.get(
              G.key === null ? R : G.key
            ) || null, T(z, M, G, nt);
          case re:
            return M = M.get(
              G.key === null ? R : G.key
            ) || null, U(z, M, G, nt);
          case ut:
            return G = Mc(G), x(
              M,
              z,
              R,
              G,
              nt
            );
        }
        if (hl(G) || Et(G))
          return M = M.get(R) || null, q(z, M, G, nt, null);
        if (typeof G.then == "function")
          return x(
            M,
            z,
            R,
            Ts(G),
            nt
          );
        if (G.$$typeof === He)
          return x(
            M,
            z,
            R,
            wu(z, G),
            nt
          );
        Es(z, G);
      }
      return null;
    }
    function P(M, z, R, G) {
      for (var nt = null, Zt = null, tt = z, bt = z = 0, zt = null; tt !== null && bt < R.length; bt++) {
        tt.index > bt ? (zt = tt, tt = null) : zt = tt.sibling;
        var Jt = C(
          M,
          tt,
          R[bt],
          G
        );
        if (Jt === null) {
          tt === null && (tt = zt);
          break;
        }
        l && tt && Jt.alternate === null && n(M, tt), z = r(Jt, z, bt), Zt === null ? nt = Jt : Zt.sibling = Jt, Zt = Jt, tt = zt;
      }
      if (bt === R.length)
        return u(M, tt), qt && ln(M, bt), nt;
      if (tt === null) {
        for (; bt < R.length; bt++)
          tt = X(M, R[bt], G), tt !== null && (z = r(
            tt,
            z,
            bt
          ), Zt === null ? nt = tt : Zt.sibling = tt, Zt = tt);
        return qt && ln(M, bt), nt;
      }
      for (tt = i(tt); bt < R.length; bt++)
        zt = x(
          tt,
          M,
          bt,
          R[bt],
          G
        ), zt !== null && (l && zt.alternate !== null && tt.delete(
          zt.key === null ? bt : zt.key
        ), z = r(
          zt,
          z,
          bt
        ), Zt === null ? nt = zt : Zt.sibling = zt, Zt = zt);
      return l && tt.forEach(function(jn) {
        return n(M, jn);
      }), qt && ln(M, bt), nt;
    }
    function st(M, z, R, G) {
      if (R == null) throw Error(B(151));
      for (var nt = null, Zt = null, tt = z, bt = z = 0, zt = null, Jt = R.next(); tt !== null && !Jt.done; bt++, Jt = R.next()) {
        tt.index > bt ? (zt = tt, tt = null) : zt = tt.sibling;
        var jn = C(M, tt, Jt.value, G);
        if (jn === null) {
          tt === null && (tt = zt);
          break;
        }
        l && tt && jn.alternate === null && n(M, tt), z = r(jn, z, bt), Zt === null ? nt = jn : Zt.sibling = jn, Zt = jn, tt = zt;
      }
      if (Jt.done)
        return u(M, tt), qt && ln(M, bt), nt;
      if (tt === null) {
        for (; !Jt.done; bt++, Jt = R.next())
          Jt = X(M, Jt.value, G), Jt !== null && (z = r(Jt, z, bt), Zt === null ? nt = Jt : Zt.sibling = Jt, Zt = Jt);
        return qt && ln(M, bt), nt;
      }
      for (tt = i(tt); !Jt.done; bt++, Jt = R.next())
        Jt = x(tt, M, bt, Jt.value, G), Jt !== null && (l && Jt.alternate !== null && tt.delete(Jt.key === null ? bt : Jt.key), z = r(Jt, z, bt), Zt === null ? nt = Jt : Zt.sibling = Jt, Zt = Jt);
      return l && tt.forEach(function(jv) {
        return n(M, jv);
      }), qt && ln(M, bt), nt;
    }
    function fe(M, z, R, G) {
      if (typeof R == "object" && R !== null && R.type === rl && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case be:
            t: {
              for (var nt = R.key; z !== null; ) {
                if (z.key === nt) {
                  if (nt = R.type, nt === rl) {
                    if (z.tag === 7) {
                      u(
                        M,
                        z.sibling
                      ), G = s(
                        z,
                        R.props.children
                      ), G.return = M, M = G;
                      break t;
                    }
                  } else if (z.elementType === nt || typeof nt == "object" && nt !== null && nt.$$typeof === ut && Mc(nt) === z.type) {
                    u(
                      M,
                      z.sibling
                    ), G = s(z, R.props), xo(G, R), G.return = M, M = G;
                    break t;
                  }
                  u(M, z);
                  break;
                } else n(M, z);
                z = z.sibling;
              }
              R.type === rl ? (G = Zu(
                R.props.children,
                M.mode,
                G,
                R.key
              ), G.return = M, M = G) : (G = rd(
                R.type,
                R.key,
                R.props,
                null,
                M.mode,
                G
              ), xo(G, R), G.return = M, M = G);
            }
            return m(M);
          case re:
            t: {
              for (nt = R.key; z !== null; ) {
                if (z.key === nt)
                  if (z.tag === 4 && z.stateNode.containerInfo === R.containerInfo && z.stateNode.implementation === R.implementation) {
                    u(
                      M,
                      z.sibling
                    ), G = s(z, R.children || []), G.return = M, M = G;
                    break t;
                  } else {
                    u(M, z);
                    break;
                  }
                else n(M, z);
                z = z.sibling;
              }
              G = dd(R, M.mode, G), G.return = M, M = G;
            }
            return m(M);
          case ut:
            return R = Mc(R), fe(
              M,
              z,
              R,
              G
            );
        }
        if (hl(R))
          return P(
            M,
            z,
            R,
            G
          );
        if (Et(R)) {
          if (nt = Et(R), typeof nt != "function") throw Error(B(150));
          return R = nt.call(R), st(
            M,
            z,
            R,
            G
          );
        }
        if (typeof R.then == "function")
          return fe(
            M,
            z,
            Ts(R),
            G
          );
        if (R.$$typeof === He)
          return fe(
            M,
            z,
            wu(M, R),
            G
          );
        Es(M, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (R = "" + R, z !== null && z.tag === 6 ? (u(M, z.sibling), G = s(z, R), G.return = M, M = G) : (u(M, z), G = Uo(R, M.mode, G), G.return = M, M = G), m(M)) : u(M, z);
    }
    return function(M, z, R, G) {
      try {
        Mi = 0;
        var nt = fe(
          M,
          z,
          R,
          G
        );
        return Uc = null, nt;
      } catch (tt) {
        if (tt === Oc || tt === No) throw tt;
        var Zt = Qe(29, tt, null, M.mode);
        return Zt.lanes = G, Zt.return = M, Zt;
      } finally {
      }
    };
  }
  var Cc = Np(!0), Wm = Np(!1), Ku = !1;
  function As(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function vd(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function $u(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Ha(l, n, u) {
    var i = l.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (wt & 2) !== 0) {
      var s = i.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), i.pending = n, n = rs(l), sd(l, null, u), n;
    }
    return Ma(l, i, n, u), rs(l);
  }
  function _c(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var i = n.lanes;
      i &= l.pendingLanes, u |= i, n.lanes = u, wn(l, u);
    }
  }
  function gd(l, n) {
    var u = l.updateQueue, i = l.alternate;
    if (i !== null && (i = i.updateQueue, u === i)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var m = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = m : r = r.next = m, u = u.next;
        } while (u !== null);
        r === null ? s = r = n : r = r.next = n;
      } else s = r = n;
      u = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: i.shared,
        callbacks: i.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var km = !1;
  function Hc() {
    if (km) {
      var l = tl;
      if (l !== null) throw l;
    }
  }
  function nu(l, n, u, i) {
    km = !1;
    var s = l.updateQueue;
    Ku = !1;
    var r = s.firstBaseUpdate, m = s.lastBaseUpdate, v = s.shared.pending;
    if (v !== null) {
      s.shared.pending = null;
      var T = v, U = T.next;
      T.next = null, m === null ? r = U : m.next = U, m = T;
      var q = l.alternate;
      q !== null && (q = q.updateQueue, v = q.lastBaseUpdate, v !== m && (v === null ? q.firstBaseUpdate = U : v.next = U, q.lastBaseUpdate = T));
    }
    if (r !== null) {
      var X = s.baseState;
      m = 0, q = U = T = null, v = r;
      do {
        var C = v.lane & -536870913, x = C !== v.lane;
        if (x ? (_t & C) === C : (i & C) === C) {
          C !== 0 && C === Dc && (km = !0), q !== null && (q = q.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          t: {
            var P = l, st = v;
            C = n;
            var fe = u;
            switch (st.tag) {
              case 1:
                if (P = st.payload, typeof P == "function") {
                  X = P.call(fe, X, C);
                  break t;
                }
                X = P;
                break t;
              case 3:
                P.flags = P.flags & -65537 | 128;
              case 0:
                if (P = st.payload, C = typeof P == "function" ? P.call(fe, X, C) : P, C == null) break t;
                X = ft({}, X, C);
                break t;
              case 2:
                Ku = !0;
            }
          }
          C = v.callback, C !== null && (l.flags |= 64, x && (l.flags |= 8192), x = s.callbacks, x === null ? s.callbacks = [C] : x.push(C));
        } else
          x = {
            lane: C,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, q === null ? (U = q = x, T = X) : q = q.next = x, m |= C;
        if (v = v.next, v === null) {
          if (v = s.shared.pending, v === null)
            break;
          x = v, v = x.next, x.next = null, s.lastBaseUpdate = x, s.shared.pending = null;
        }
      } while (!0);
      q === null && (T = X), s.baseState = T, s.firstBaseUpdate = U, s.lastBaseUpdate = q, r === null && (s.shared.lanes = 0), Bn |= m, l.lanes = m, l.memoizedState = X;
    }
  }
  function Sd(l, n) {
    if (typeof l != "function")
      throw Error(B(191, l));
    l.call(n);
  }
  function Bc(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Sd(u[l], n);
  }
  var ul = j(null), Ri = j(0);
  function xp(l, n) {
    l = Hn, lt(Ri, l), lt(ul, n), Hn = l | n.baseLanes;
  }
  function zs() {
    lt(Ri, Hn), lt(ul, ul.current);
  }
  function qo() {
    Hn = Ri.current, I(ul), I(Ri);
  }
  var ta = j(null), Ba = null;
  function uu(l) {
    var n = l.alternate;
    lt(Oe, Oe.current & 1), lt(ta, l), Ba === null && (n === null || ul.current !== null || n.memoizedState !== null) && (Ba = l);
  }
  function Yo(l) {
    lt(Oe, Oe.current), lt(ta, l), Ba === null && (Ba = l);
  }
  function bd(l) {
    l.tag === 22 ? (lt(Oe, Oe.current), lt(ta, l), Ba === null && (Ba = l)) : Mn();
  }
  function Mn() {
    lt(Oe, Oe.current), lt(ta, ta.current);
  }
  function ea(l) {
    I(ta), Ba === l && (Ba = null), I(Oe);
  }
  var Oe = j(0);
  function jo(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || on(u) || wc(u)))
          return n;
      } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var cu = 0, Tt = null, te = null, We = null, Ui = !1, Ci = !1, Wu = !1, Ds = 0, Go = 0, Nc = null, qp = 0;
  function Be() {
    throw Error(B(321));
  }
  function ku(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!jl(l[u], n[u])) return !1;
    return !0;
  }
  function Os(l, n, u, i, s, r) {
    return cu = r, Tt = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, O.H = l === null || l.memoizedState === null ? Lp : Yd, Wu = !1, r = u(i, s), Wu = !1, Ci && (r = Yp(
      n,
      u,
      i,
      s
    )), Td(l), r;
  }
  function Td(l) {
    O.H = xs;
    var n = te !== null && te.next !== null;
    if (cu = 0, We = te = Tt = null, Ui = !1, Go = 0, Nc = null, n) throw Error(B(300));
    l === null || ke || (l = l.dependencies, l !== null && Ei(l) && (ke = !0));
  }
  function Yp(l, n, u, i) {
    Tt = l;
    var s = 0;
    do {
      if (Ci && (Nc = null), Go = 0, Ci = !1, 25 <= s) throw Error(B(301));
      if (s += 1, We = te = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      O.H = wp, r = n(u, i);
    } while (Ci);
    return r;
  }
  function Kg() {
    var l = O.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Hi(n) : n, l = l.useState()[0], (te !== null ? te.memoizedState : null) !== l && (Tt.flags |= 1024), n;
  }
  function Ed() {
    var l = Ds !== 0;
    return Ds = 0, l;
  }
  function _i(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Ms(l) {
    if (Ui) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Ui = !1;
    }
    cu = 0, We = te = Tt = null, Ci = !1, Go = Ds = 0, Nc = null;
  }
  function gl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return We === null ? Tt.memoizedState = We = l : We = We.next = l, We;
  }
  function Ze() {
    if (te === null) {
      var l = Tt.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = te.next;
    var n = We === null ? Tt.memoizedState : We.next;
    if (n !== null)
      We = n, te = l;
    else {
      if (l === null)
        throw Tt.alternate === null ? Error(B(467)) : Error(B(310));
      te = l, l = {
        memoizedState: te.memoizedState,
        baseState: te.baseState,
        baseQueue: te.baseQueue,
        queue: te.queue,
        next: null
      }, We === null ? Tt.memoizedState = We = l : We = We.next = l;
    }
    return We;
  }
  function Rs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Hi(l) {
    var n = Go;
    return Go += 1, Nc === null && (Nc = []), l = Km(Nc, l, n), n = Tt, (We === null ? n.memoizedState : We.next) === null && (n = n.alternate, O.H = n === null || n.memoizedState === null ? Lp : Yd), l;
  }
  function Xo(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Hi(l);
      if (l.$$typeof === He) return V(l);
    }
    throw Error(B(438, String(l)));
  }
  function Ad(l) {
    var n = null, u = Tt.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var i = Tt.alternate;
      i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (n = {
        data: i.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Rs(), Tt.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), i = 0; i < l; i++)
        u[i] = W;
    return n.index++, u;
  }
  function iu(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function ou(l) {
    var n = Ze();
    return zd(n, te, l);
  }
  function zd(l, n, u) {
    var i = l.queue;
    if (i === null) throw Error(B(311));
    i.lastRenderedReducer = u;
    var s = l.baseQueue, r = i.pending;
    if (r !== null) {
      if (s !== null) {
        var m = s.next;
        s.next = r.next, r.next = m;
      }
      n.baseQueue = s = r, i.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var v = m = null, T = null, U = n, q = !1;
      do {
        var X = U.lane & -536870913;
        if (X !== U.lane ? (_t & X) === X : (cu & X) === X) {
          var C = U.revertLane;
          if (C === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            }), X === Dc && (q = !0);
          else if ((cu & C) === C) {
            U = U.next, C === Dc && (q = !0);
            continue;
          } else
            X = {
              lane: 0,
              revertLane: U.revertLane,
              gesture: null,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            }, T === null ? (v = T = X, m = r) : T = T.next = X, Tt.lanes |= C, Bn |= C;
          X = U.action, Wu && u(r, X), r = U.hasEagerState ? U.eagerState : u(r, X);
        } else
          C = {
            lane: X,
            revertLane: U.revertLane,
            gesture: U.gesture,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          }, T === null ? (v = T = C, m = r) : T = T.next = C, Tt.lanes |= X, Bn |= X;
        U = U.next;
      } while (U !== null && U !== n);
      if (T === null ? m = r : T.next = v, !jl(r, l.memoizedState) && (ke = !0, q && (u = tl, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = T, i.lastRenderedState = r;
    }
    return s === null && (i.lanes = 0), [l.memoizedState, i.dispatch];
  }
  function Dd(l) {
    var n = Ze(), u = n.queue;
    if (u === null) throw Error(B(311));
    u.lastRenderedReducer = l;
    var i = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var m = s = s.next;
      do
        r = l(r, m.action), m = m.next;
      while (m !== s);
      jl(r, n.memoizedState) || (ke = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, i];
  }
  function Fm(l, n, u) {
    var i = Tt, s = Ze(), r = qt;
    if (r) {
      if (u === void 0) throw Error(B(407));
      u = u();
    } else u = n();
    var m = !jl(
      (te || s).memoizedState,
      u
    );
    if (m && (s.memoizedState = u, ke = !0), s = s.queue, Cd(Od.bind(null, i, s, l), [
      l
    ]), s.getSnapshot !== n || m || We !== null && We.memoizedState.tag & 1) {
      if (i.flags |= 2048, Ni(
        9,
        { destroy: void 0 },
        Im.bind(
          null,
          i,
          s,
          u,
          n
        ),
        null
      ), ie === null) throw Error(B(349));
      r || (cu & 127) !== 0 || Us(i, n, u);
    }
    return u;
  }
  function Us(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = Tt.updateQueue, n === null ? (n = Rs(), Tt.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function Im(l, n, u, i) {
    n.value = u, n.getSnapshot = i, Md(n) && Rd(l);
  }
  function Od(l, n, u) {
    return u(function() {
      Md(n) && Rd(l);
    });
  }
  function Md(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !jl(l, u);
    } catch {
      return !0;
    }
  }
  function Rd(l) {
    var n = Qu(l, 2);
    n !== null && ia(n, l, 2);
  }
  function Pm(l) {
    var n = gl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Wu) {
        xu(!0);
        try {
          u();
        } finally {
          xu(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: iu,
      lastRenderedState: l
    }, n;
  }
  function Sl(l, n, u, i) {
    return l.baseState = u, zd(
      l,
      te,
      typeof i == "function" ? i : iu
    );
  }
  function jp(l, n, u, i, s) {
    if (Ns(l)) throw Error(B(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          r.listeners.push(m);
        }
      };
      O.T !== null ? u(!0) : r.isTransition = !1, i(r), u = n.pending, u === null ? (r.next = n.pending = r, ty(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function ty(l, n) {
    var u = n.action, i = n.payload, s = l.state;
    if (n.isTransition) {
      var r = O.T, m = {};
      O.T = m;
      try {
        var v = u(s, i), T = O.S;
        T !== null && T(m, v), ey(l, n, v);
      } catch (U) {
        Bi(l, n, U);
      } finally {
        r !== null && m.types !== null && (r.types = m.types), O.T = r;
      }
    } else
      try {
        r = u(s, i), ey(l, n, r);
      } catch (U) {
        Bi(l, n, U);
      }
  }
  function ey(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(i) {
        ly(l, n, i);
      },
      function(i) {
        return Bi(l, n, i);
      }
    ) : ly(l, n, u);
  }
  function ly(l, n, u) {
    n.status = "fulfilled", n.value = u, ay(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, ty(l, u)));
  }
  function Bi(l, n, u) {
    var i = l.pending;
    if (l.pending = null, i !== null) {
      i = i.next;
      do
        n.status = "rejected", n.reason = u, ay(n), n = n.next;
      while (n !== i);
    }
    l.action = null;
  }
  function ay(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Cs(l, n) {
    return n;
  }
  function ny(l, n) {
    if (qt) {
      var u = ie.formState;
      if (u !== null) {
        t: {
          var i = Tt;
          if (qt) {
            if (ye) {
              e: {
                for (var s = ye, r = nl; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break e;
                  }
                  if (s = oa(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break e;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                ye = oa(
                  s.nextSibling
                ), i = s.data === "F!";
                break t;
              }
            }
            an(i);
          }
          i = !1;
        }
        i && (n = u[0]);
      }
    }
    return u = gl(), u.memoizedState = u.baseState = n, i = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Cs,
      lastRenderedState: n
    }, u.queue = i, u = xd.bind(
      null,
      Tt,
      i
    ), i.dispatch = u, i = Pm(!1), r = xc.bind(
      null,
      Tt,
      !1,
      i.queue
    ), i = gl(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, i.queue = s, u = jp.bind(
      null,
      Tt,
      s,
      r,
      u
    ), s.dispatch = u, i.memoizedState = l, [n, u, !1];
  }
  function Gp(l) {
    var n = Ze();
    return _s(n, te, l);
  }
  function _s(l, n, u) {
    if (n = zd(
      l,
      n,
      Cs
    )[0], l = ou(iu)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var i = Hi(n);
      } catch (m) {
        throw m === Oc ? No : m;
      }
    else i = n;
    n = Ze();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (Tt.flags |= 2048, Ni(
      9,
      { destroy: void 0 },
      uy.bind(null, s, u),
      null
    )), [i, r, l];
  }
  function uy(l, n) {
    l.action = n;
  }
  function cy(l) {
    var n = Ze(), u = te;
    if (u !== null)
      return _s(n, u, l);
    Ze(), n = n.memoizedState, u = Ze();
    var i = u.queue.dispatch;
    return u.memoizedState = l, [n, i, !1];
  }
  function Ni(l, n, u, i) {
    return l = { tag: l, create: u, deps: i, inst: n, next: null }, n = Tt.updateQueue, n === null && (n = Rs(), Tt.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (i = u.next, u.next = l, l.next = i, n.lastEffect = l), l;
  }
  function iy() {
    return Ze().memoizedState;
  }
  function Qo(l, n, u, i) {
    var s = gl();
    Tt.flags |= l, s.memoizedState = Ni(
      1 | n,
      { destroy: void 0 },
      u,
      i === void 0 ? null : i
    );
  }
  function Vo(l, n, u, i) {
    var s = Ze();
    i = i === void 0 ? null : i;
    var r = s.memoizedState.inst;
    te !== null && i !== null && ku(i, te.memoizedState.deps) ? s.memoizedState = Ni(n, r, u, i) : (Tt.flags |= l, s.memoizedState = Ni(
      1 | n,
      r,
      u,
      i
    ));
  }
  function Ud(l, n) {
    Qo(8390656, 8, l, n);
  }
  function Cd(l, n) {
    Vo(2048, 8, l, n);
  }
  function oy(l) {
    Tt.flags |= 4;
    var n = Tt.updateQueue;
    if (n === null)
      n = Rs(), Tt.updateQueue = n, n.events = [l];
    else {
      var u = n.events;
      u === null ? n.events = [l] : u.push(l);
    }
  }
  function Hs(l) {
    var n = Ze().memoizedState;
    return oy({ ref: n, nextImpl: l }), function() {
      if ((wt & 2) !== 0) throw Error(B(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function _d(l, n) {
    return Vo(4, 2, l, n);
  }
  function fy(l, n) {
    return Vo(4, 4, l, n);
  }
  function Hd(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function sy(l, n, u) {
    u = u != null ? u.concat([l]) : null, Vo(4, 4, Hd.bind(null, n, l), u);
  }
  function Rn() {
  }
  function Bd(l, n) {
    var u = Ze();
    n = n === void 0 ? null : n;
    var i = u.memoizedState;
    return n !== null && ku(n, i[1]) ? i[0] : (u.memoizedState = [l, n], l);
  }
  function Xp(l, n) {
    var u = Ze();
    n = n === void 0 ? null : n;
    var i = u.memoizedState;
    if (n !== null && ku(n, i[1]))
      return i[0];
    if (i = l(), Wu) {
      xu(!0);
      try {
        l();
      } finally {
        xu(!1);
      }
    }
    return u.memoizedState = [i, n], i;
  }
  function Bs(l, n, u) {
    return u === void 0 || (cu & 1073741824) !== 0 && (_t & 261930) === 0 ? l.memoizedState = n : (l.memoizedState = u, l = ev(), Tt.lanes |= l, Bn |= l, u);
  }
  function fu(l, n, u, i) {
    return jl(u, n) ? u : ul.current !== null ? (l = Bs(l, u, i), jl(l, n) || (ke = !0), l) : (cu & 42) === 0 || (cu & 1073741824) !== 0 && (_t & 261930) === 0 ? (ke = !0, l.memoizedState = u) : (l = ev(), Tt.lanes |= l, Bn |= l, n);
  }
  function Nd(l, n, u, i, s) {
    var r = Q.p;
    Q.p = r !== 0 && 8 > r ? r : 8;
    var m = O.T, v = {};
    O.T = v, xc(l, !1, n, u);
    try {
      var T = s(), U = O.S;
      if (U !== null && U(v, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var q = bs(
          T,
          i
        );
        Fu(
          l,
          n,
          q,
          va(l)
        );
      } else
        Fu(
          l,
          n,
          i,
          va(l)
        );
    } catch (X) {
      Fu(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: X },
        va()
      );
    } finally {
      Q.p = r, m !== null && v.types !== null && (m.types = v.types), O.T = m;
    }
  }
  function Qp() {
  }
  function Zo(l, n, u, i) {
    if (l.tag !== 5) throw Error(B(476));
    var s = Lo(l).queue;
    Nd(
      l,
      s,
      n,
      Z,
      u === null ? Qp : function() {
        return ce(l), u(i);
      }
    );
  }
  function Lo(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: Z,
      baseState: Z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: iu,
        lastRenderedState: Z
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: iu,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function ce(l) {
    var n = Lo(l);
    n.next === null && (n = l.alternate.memoizedState), Fu(
      l,
      n.next.queue,
      {},
      va()
    );
  }
  function ry() {
    return V(or);
  }
  function Vp() {
    return Ze().memoizedState;
  }
  function dy() {
    return Ze().memoizedState;
  }
  function su(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = va();
          l = $u(u);
          var i = Ha(n, l, u);
          i !== null && (ia(i, n, u), _c(i, n, u)), n = { cache: ps() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Zp(l, n, u) {
    var i = va();
    u = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ns(l) ? qd(n, u) : (u = en(l, n, u, i), u !== null && (ia(u, l, i), hy(u, n, i)));
  }
  function xd(l, n, u) {
    var i = va();
    Fu(l, n, u, i);
  }
  function Fu(l, n, u, i) {
    var s = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ns(l)) qd(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var m = n.lastRenderedState, v = r(m, u);
          if (s.hasEagerState = !0, s.eagerState = v, jl(v, m))
            return Ma(l, n, s, 0), ie === null && Oa(), !1;
        } catch {
        } finally {
        }
      if (u = en(l, n, s, i), u !== null)
        return ia(u, l, i), hy(u, n, i), !0;
    }
    return !1;
  }
  function xc(l, n, u, i) {
    if (i = {
      lane: 2,
      revertLane: oh(),
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ns(l)) {
      if (n) throw Error(B(479));
    } else
      n = en(
        l,
        u,
        i,
        2
      ), n !== null && ia(n, l, 2);
  }
  function Ns(l) {
    var n = l.alternate;
    return l === Tt || n !== null && n === Tt;
  }
  function qd(l, n) {
    Ci = Ui = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function hy(l, n, u) {
    if ((u & 4194048) !== 0) {
      var i = n.lanes;
      i &= l.pendingLanes, u |= i, n.lanes = u, wn(l, u);
    }
  }
  var xs = {
    readContext: V,
    use: Xo,
    useCallback: Be,
    useContext: Be,
    useEffect: Be,
    useImperativeHandle: Be,
    useLayoutEffect: Be,
    useInsertionEffect: Be,
    useMemo: Be,
    useReducer: Be,
    useRef: Be,
    useState: Be,
    useDebugValue: Be,
    useDeferredValue: Be,
    useTransition: Be,
    useSyncExternalStore: Be,
    useId: Be,
    useHostTransitionStatus: Be,
    useFormState: Be,
    useActionState: Be,
    useOptimistic: Be,
    useMemoCache: Be,
    useCacheRefresh: Be
  };
  xs.useEffectEvent = Be;
  var Lp = {
    readContext: V,
    use: Xo,
    useCallback: function(l, n) {
      return gl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: V,
    useEffect: Ud,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, Qo(
        4194308,
        4,
        Hd.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return Qo(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      Qo(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = gl();
      n = n === void 0 ? null : n;
      var i = l();
      if (Wu) {
        xu(!0);
        try {
          l();
        } finally {
          xu(!1);
        }
      }
      return u.memoizedState = [i, n], i;
    },
    useReducer: function(l, n, u) {
      var i = gl();
      if (u !== void 0) {
        var s = u(n);
        if (Wu) {
          xu(!0);
          try {
            u(n);
          } finally {
            xu(!1);
          }
        }
      } else s = n;
      return i.memoizedState = i.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, i.queue = l, l = l.dispatch = Zp.bind(
        null,
        Tt,
        l
      ), [i.memoizedState, l];
    },
    useRef: function(l) {
      var n = gl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = Pm(l);
      var n = l.queue, u = xd.bind(null, Tt, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Rn,
    useDeferredValue: function(l, n) {
      var u = gl();
      return Bs(u, l, n);
    },
    useTransition: function() {
      var l = Pm(!1);
      return l = Nd.bind(
        null,
        Tt,
        l.queue,
        !0,
        !1
      ), gl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var i = Tt, s = gl();
      if (qt) {
        if (u === void 0)
          throw Error(B(407));
        u = u();
      } else {
        if (u = n(), ie === null)
          throw Error(B(349));
        (_t & 127) !== 0 || Us(i, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, Ud(Od.bind(null, i, r, l), [
        l
      ]), i.flags |= 2048, Ni(
        9,
        { destroy: void 0 },
        Im.bind(
          null,
          i,
          r,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = gl(), n = ie.identifierPrefix;
      if (qt) {
        var u = zn, i = ha;
        u = (i & ~(1 << 32 - Kl(i) - 1)).toString(32) + u, n = "_" + n + "R_" + u, u = Ds++, 0 < u && (n += "H" + u.toString(32)), n += "_";
      } else
        u = qp++, n = "_" + n + "r_" + u.toString(32) + "_";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: ry,
    useFormState: ny,
    useActionState: ny,
    useOptimistic: function(l) {
      var n = gl();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = xc.bind(
        null,
        Tt,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Ad,
    useCacheRefresh: function() {
      return gl().memoizedState = su.bind(
        null,
        Tt
      );
    },
    useEffectEvent: function(l) {
      var n = gl(), u = { impl: l };
      return n.memoizedState = u, function() {
        if ((wt & 2) !== 0)
          throw Error(B(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Yd = {
    readContext: V,
    use: Xo,
    useCallback: Bd,
    useContext: V,
    useEffect: Cd,
    useImperativeHandle: sy,
    useInsertionEffect: _d,
    useLayoutEffect: fy,
    useMemo: Xp,
    useReducer: ou,
    useRef: iy,
    useState: function() {
      return ou(iu);
    },
    useDebugValue: Rn,
    useDeferredValue: function(l, n) {
      var u = Ze();
      return fu(
        u,
        te.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = ou(iu)[0], n = Ze().memoizedState;
      return [
        typeof l == "boolean" ? l : Hi(l),
        n
      ];
    },
    useSyncExternalStore: Fm,
    useId: Vp,
    useHostTransitionStatus: ry,
    useFormState: Gp,
    useActionState: Gp,
    useOptimistic: function(l, n) {
      var u = Ze();
      return Sl(u, te, l, n);
    },
    useMemoCache: Ad,
    useCacheRefresh: dy
  };
  Yd.useEffectEvent = Hs;
  var wp = {
    readContext: V,
    use: Xo,
    useCallback: Bd,
    useContext: V,
    useEffect: Cd,
    useImperativeHandle: sy,
    useInsertionEffect: _d,
    useLayoutEffect: fy,
    useMemo: Xp,
    useReducer: Dd,
    useRef: iy,
    useState: function() {
      return Dd(iu);
    },
    useDebugValue: Rn,
    useDeferredValue: function(l, n) {
      var u = Ze();
      return te === null ? Bs(u, l, n) : fu(
        u,
        te.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Dd(iu)[0], n = Ze().memoizedState;
      return [
        typeof l == "boolean" ? l : Hi(l),
        n
      ];
    },
    useSyncExternalStore: Fm,
    useId: Vp,
    useHostTransitionStatus: ry,
    useFormState: cy,
    useActionState: cy,
    useOptimistic: function(l, n) {
      var u = Ze();
      return te !== null ? Sl(u, te, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Ad,
    useCacheRefresh: dy
  };
  wp.useEffectEvent = Hs;
  function xi(l, n, u, i) {
    n = l.memoizedState, u = u(i, n), u = u == null ? n : ft({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var nn = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var i = va(), s = $u(i);
      s.payload = n, u != null && (s.callback = u), n = Ha(l, s, i), n !== null && (ia(n, l, i), _c(n, l, i));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var i = va(), s = $u(i);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = Ha(l, s, i), n !== null && (ia(n, l, i), _c(n, l, i));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = va(), i = $u(u);
      i.tag = 2, n != null && (i.callback = n), n = Ha(l, i, u), n !== null && (ia(n, l, u), _c(n, l, u));
    }
  };
  function my(l, n, u, i, s, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(i, r, m) : n.prototype && n.prototype.isPureReactComponent ? !Ia(u, i) || !Ia(s, r) : !0;
  }
  function Jp(l, n, u, i) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, i), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, i), n.state !== l && nn.enqueueReplaceState(n, n.state, null);
  }
  function qc(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var i in n)
        i !== "ref" && (u[i] = n[i]);
    }
    if (l = l.defaultProps) {
      u === n && (u = ft({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  function jd(l) {
    Si(l);
  }
  function yy(l) {
    console.error(l);
  }
  function Gd(l) {
    Si(l);
  }
  function wo(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function qs(l, n, u) {
    try {
      var i = l.onCaughtError;
      i(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function py(l, n, u) {
    return u = $u(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      wo(l, n);
    }, u;
  }
  function vy(l) {
    return l = $u(l), l.tag = 3, l;
  }
  function gy(l, n, u, i) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = i.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        qs(n, u, i);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      qs(n, u, i), typeof s != "function" && (Me === null ? Me = /* @__PURE__ */ new Set([this]) : Me.add(this));
      var v = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function $g(l, n, u, i, s) {
    if (u.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (n = u.alternate, n !== null && vl(
        n,
        u,
        s,
        !0
      ), u = ta.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return Ba === null ? nh() : u.alternate === null && ve === 0 && (ve = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, i === Oi ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([i]) : n.add(i), ks(l, i, s)), !1;
          case 22:
            return u.flags |= 65536, i === Oi ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([i]) : u.add(i)), ks(l, i, s)), !1;
        }
        throw Error(B(435, u.tag));
      }
      return ks(l, i, s), nh(), !1;
    }
    if (qt)
      return n = ta.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, i !== eu && (l = Error(B(422), { cause: i }), Ho(Ra(l, u)))) : (i !== eu && (n = Error(B(423), {
        cause: i
      }), Ho(
        Ra(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, i = Ra(i, u), s = py(
        l.stateNode,
        i,
        s
      ), gd(l, s), ve !== 4 && (ve = 2)), !1;
    var r = Error(B(520), { cause: i });
    if (r = Ra(r, u), Js === null ? Js = [r] : Js.push(r), ve !== 4 && (ve = 2), n === null) return !0;
    i = Ra(i, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = py(u.stateNode, i, l), gd(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Me === null || !Me.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = vy(s), gy(
              s,
              l,
              u,
              i
            ), gd(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Xd = Error(B(461)), ke = !1;
  function Ee(l, n, u, i) {
    n.child = l === null ? Wm(n, null, u, i) : Cc(
      n,
      l.child,
      u,
      i
    );
  }
  function Sy(l, n, u, i, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in i) {
      var m = {};
      for (var v in i)
        v !== "ref" && (m[v] = i[v]);
    } else m = i;
    return pt(n), i = Os(
      l,
      n,
      u,
      m,
      r,
      s
    ), v = Ed(), l !== null && !ke ? (_i(l, n, s), qa(l, n, s)) : (qt && v && Co(n), n.flags |= 1, Ee(l, n, i, s), n.child);
  }
  function by(l, n, u, i, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !bi(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, Ty(
        l,
        n,
        r,
        i,
        s
      )) : (l = rd(
        u.type,
        null,
        i,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !Zd(l, s)) {
      var m = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Ia, u(m, i) && l.ref === n.ref)
        return qa(l, n, s);
    }
    return n.flags |= 1, l = Vu(r, i), l.ref = n.ref, l.return = n, n.child = l;
  }
  function Ty(l, n, u, i, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (Ia(r, i) && l.ref === n.ref)
        if (ke = !1, n.pendingProps = i = r, Zd(l, s))
          (l.flags & 131072) !== 0 && (ke = !0);
        else
          return n.lanes = l.lanes, qa(l, n, s);
    }
    return Qd(
      l,
      n,
      u,
      i,
      s
    );
  }
  function Kp(l, n, u, i) {
    var s = i.children, r = l !== null ? l.memoizedState : null;
    if (l === null && n.stateNode === null && (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (r = r !== null ? r.baseLanes | u : u, l !== null) {
          for (i = n.child = l.child, s = 0; i !== null; )
            s = s | i.lanes | i.childLanes, i = i.sibling;
          i = s & ~r;
        } else i = 0, n.child = null;
        return la(
          l,
          n,
          r,
          u,
          i
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Bo(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? xp(n, r) : zs(), bd(n);
      else
        return i = n.lanes = 536870912, la(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u,
          i
        );
    } else
      r !== null ? (Bo(n, r.cachePool), xp(n, r), Mn(), n.memoizedState = null) : (l !== null && Bo(n, null), zs(), Mn());
    return Ee(l, n, s, u), n.child;
  }
  function Yc(l, n) {
    return l !== null && l.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function la(l, n, u, i, s) {
    var r = _a();
    return r = r === null ? null : { parent: $e._currentValue, pool: r }, n.memoizedState = {
      baseLanes: u,
      cachePool: r
    }, l !== null && Bo(n, null), zs(), bd(n), l !== null && vl(l, n, i, !0), n.childLanes = s, null;
  }
  function Ys(l, n) {
    return n = Xs(
      { mode: n.mode, children: n.children },
      l.mode
    ), n.ref = l.ref, l.child = n, n.return = l, n;
  }
  function aa(l, n, u) {
    return Cc(n, l.child, null, u), l = Ys(n, n.pendingProps), l.flags |= 2, ea(n), n.memoizedState = null, l;
  }
  function $p(l, n, u) {
    var i = n.pendingProps, s = (n.flags & 128) !== 0;
    if (n.flags &= -129, l === null) {
      if (qt) {
        if (i.mode === "hidden")
          return l = Ys(n, i), n.lanes = 536870912, Yc(null, l);
        if (Yo(n), (l = ye) ? (l = Uv(
          l,
          nl
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: An !== null ? { id: ha, overflow: zn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Xm(l), u.return = n, n.child = u, pl = n, ye = null)) : l = null, l === null) throw an(n);
        return n.lanes = 536870912, null;
      }
      return Ys(n, i);
    }
    var r = l.memoizedState;
    if (r !== null) {
      var m = r.dehydrated;
      if (Yo(n), s)
        if (n.flags & 256)
          n.flags &= -257, n = aa(
            l,
            n,
            u
          );
        else if (n.memoizedState !== null)
          n.child = l.child, n.flags |= 128, n = null;
        else throw Error(B(558));
      else if (ke || vl(l, n, u, !1), s = (u & l.childLanes) !== 0, ke || s) {
        if (i = ie, i !== null && (m = Aa(i, u), m !== 0 && m !== r.retryLane))
          throw r.retryLane = m, Qu(l, m), ia(i, l, m), Xd;
        nh(), n = aa(
          l,
          n,
          u
        );
      } else
        l = r.treeContext, ye = oa(m.nextSibling), pl = n, qt = !0, tu = null, nl = !1, l !== null && hs(n, l), n = Ys(n, i), n.flags |= 4096;
      return n;
    }
    return l = Vu(l.child, {
      mode: i.mode,
      children: i.children
    }), l.ref = n.ref, n.child = l, l.return = n, l;
  }
  function Na(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(B(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function Qd(l, n, u, i, s) {
    return pt(n), u = Os(
      l,
      n,
      u,
      i,
      void 0,
      s
    ), i = Ed(), l !== null && !ke ? (_i(l, n, s), qa(l, n, s)) : (qt && i && Co(n), n.flags |= 1, Ee(l, n, u, s), n.child);
  }
  function jc(l, n, u, i, s, r) {
    return pt(n), n.updateQueue = null, u = Yp(
      n,
      i,
      u,
      s
    ), Td(l), i = Ed(), l !== null && !ke ? (_i(l, n, r), qa(l, n, r)) : (qt && i && Co(n), n.flags |= 1, Ee(l, n, u, r), n.child);
  }
  function Ey(l, n, u, i, s) {
    if (pt(n), n.stateNode === null) {
      var r = Fl, m = u.contextType;
      typeof m == "object" && m !== null && (r = V(m)), r = new u(i, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = nn, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = i, r.state = n.memoizedState, r.refs = {}, As(n), m = u.contextType, r.context = typeof m == "object" && m !== null ? V(m) : Fl, r.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (xi(
        n,
        u,
        m,
        i
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && nn.enqueueReplaceState(r, r.state, null), nu(n, i, r, s), Hc(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), i = !0;
    } else if (l === null) {
      r = n.stateNode;
      var v = n.memoizedProps, T = qc(u, v);
      r.props = T;
      var U = r.context, q = u.contextType;
      m = Fl, typeof q == "object" && q !== null && (m = V(q));
      var X = u.getDerivedStateFromProps;
      q = typeof X == "function" || typeof r.getSnapshotBeforeUpdate == "function", v = n.pendingProps !== v, q || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (v || U !== m) && Jp(
        n,
        r,
        i,
        m
      ), Ku = !1;
      var C = n.memoizedState;
      r.state = C, nu(n, i, r, s), Hc(), U = n.memoizedState, v || C !== U || Ku ? (typeof X == "function" && (xi(
        n,
        u,
        X,
        i
      ), U = n.memoizedState), (T = Ku || my(
        n,
        u,
        T,
        i,
        C,
        U,
        m
      )) ? (q || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = i, n.memoizedState = U), r.props = i, r.state = U, r.context = m, i = T) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), i = !1);
    } else {
      r = n.stateNode, vd(l, n), m = n.memoizedProps, q = qc(u, m), r.props = q, X = n.pendingProps, C = r.context, U = u.contextType, T = Fl, typeof U == "object" && U !== null && (T = V(U)), v = u.getDerivedStateFromProps, (U = typeof v == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== X || C !== T) && Jp(
        n,
        r,
        i,
        T
      ), Ku = !1, C = n.memoizedState, r.state = C, nu(n, i, r, s), Hc();
      var x = n.memoizedState;
      m !== X || C !== x || Ku || l !== null && l.dependencies !== null && Ei(l.dependencies) ? (typeof v == "function" && (xi(
        n,
        u,
        v,
        i
      ), x = n.memoizedState), (q = Ku || my(
        n,
        u,
        q,
        i,
        C,
        x,
        T
      ) || l !== null && l.dependencies !== null && Ei(l.dependencies)) ? (U || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(i, x, T), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        i,
        x,
        T
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && C === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && C === l.memoizedState || (n.flags |= 1024), n.memoizedProps = i, n.memoizedState = x), r.props = i, r.state = x, r.context = T, i = q) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && C === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && C === l.memoizedState || (n.flags |= 1024), i = !1);
    }
    return r = i, Na(l, n), i = (n.flags & 128) !== 0, r || i ? (r = n.stateNode, u = i && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && i ? (n.child = Cc(
      n,
      l.child,
      null,
      s
    ), n.child = Cc(
      n,
      null,
      u,
      s
    )) : Ee(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = qa(
      l,
      n,
      s
    ), l;
  }
  function Un(l, n, u, i) {
    return zc(), n.flags |= 256, Ee(l, n, u, i), n.child;
  }
  var js = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Gs(l) {
    return { baseLanes: l, cachePool: zi() };
  }
  function xa(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= ca), l;
  }
  function Ay(l, n, u) {
    var i = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : (Oe.current & 2) !== 0), m && (s = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (qt) {
        if (s ? uu(n) : Mn(), (l = ye) ? (l = Uv(
          l,
          nl
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: An !== null ? { id: ha, overflow: zn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Xm(l), u.return = n, n.child = u, pl = n, ye = null)) : l = null, l === null) throw an(n);
        return wc(l) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var v = i.children;
      return i = i.fallback, s ? (Mn(), s = n.mode, v = Xs(
        { mode: "hidden", children: v },
        s
      ), i = Zu(
        i,
        s,
        u,
        null
      ), v.return = n, i.return = n, v.sibling = i, n.child = v, i = n.child, i.memoizedState = Gs(u), i.childLanes = xa(
        l,
        m,
        u
      ), n.memoizedState = js, Yc(null, i)) : (uu(n), Gc(n, v));
    }
    var T = l.memoizedState;
    if (T !== null && (v = T.dehydrated, v !== null)) {
      if (r)
        n.flags & 256 ? (uu(n), n.flags &= -257, n = qi(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Mn(), n.child = l.child, n.flags |= 128, n = null) : (Mn(), v = i.fallback, s = n.mode, i = Xs(
          { mode: "visible", children: i.children },
          s
        ), v = Zu(
          v,
          s,
          u,
          null
        ), v.flags |= 2, i.return = n, v.return = n, i.sibling = v, n.child = i, Cc(
          n,
          l.child,
          null,
          u
        ), i = n.child, i.memoizedState = Gs(u), i.childLanes = xa(
          l,
          m,
          u
        ), n.memoizedState = js, n = Yc(null, i));
      else if (uu(n), wc(v)) {
        if (m = v.nextSibling && v.nextSibling.dataset, m) var U = m.dgst;
        m = U, i = Error(B(419)), i.stack = "", i.digest = m, Ho({ value: i, source: null, stack: null }), n = qi(
          l,
          n,
          u
        );
      } else if (ke || vl(l, n, u, !1), m = (u & l.childLanes) !== 0, ke || m) {
        if (m = ie, m !== null && (i = Aa(m, u), i !== 0 && i !== T.retryLane))
          throw T.retryLane = i, Qu(l, i), ia(m, l, i), Xd;
        on(v) || nh(), n = qi(
          l,
          n,
          u
        );
      } else
        on(v) ? (n.flags |= 192, n.child = l.child, n = null) : (l = T.treeContext, ye = oa(
          v.nextSibling
        ), pl = n, qt = !0, tu = null, nl = !1, l !== null && hs(n, l), n = Gc(
          n,
          i.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (Mn(), v = i.fallback, s = n.mode, T = l.child, U = T.sibling, i = Vu(T, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = T.subtreeFlags & 65011712, U !== null ? v = Vu(
      U,
      v
    ) : (v = Zu(
      v,
      s,
      u,
      null
    ), v.flags |= 2), v.return = n, i.return = n, i.sibling = v, n.child = i, Yc(null, i), i = n.child, v = l.child.memoizedState, v === null ? v = Gs(u) : (s = v.cachePool, s !== null ? (T = $e._currentValue, s = s.parent !== T ? { parent: T, pool: T } : s) : s = zi(), v = {
      baseLanes: v.baseLanes | u,
      cachePool: s
    }), i.memoizedState = v, i.childLanes = xa(
      l,
      m,
      u
    ), n.memoizedState = js, Yc(l.child, i)) : (uu(n), u = l.child, l = u.sibling, u = Vu(u, {
      mode: "visible",
      children: i.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function Gc(l, n) {
    return n = Xs(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function Xs(l, n) {
    return l = Qe(22, l, null, n), l.lanes = 0, l;
  }
  function qi(l, n, u) {
    return Cc(n, l.child, null, u), l = Gc(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function Yi(l, n, u) {
    l.lanes |= n;
    var i = l.alternate;
    i !== null && (i.lanes |= n), yd(l.return, n, u);
  }
  function Vd(l, n, u, i, s, r) {
    var m = l.memoizedState;
    m === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: i,
      tail: u,
      tailMode: s,
      treeForkCount: r
    } : (m.isBackwards = n, m.rendering = null, m.renderingStartTime = 0, m.last = i, m.tail = u, m.tailMode = s, m.treeForkCount = r);
  }
  function zy(l, n, u) {
    var i = n.pendingProps, s = i.revealOrder, r = i.tail;
    i = i.children;
    var m = Oe.current, v = (m & 2) !== 0;
    if (v ? (m = m & 1 | 2, n.flags |= 128) : m &= 1, lt(Oe, m), Ee(l, n, i, u), i = qt ? Ke : 0, !v && l !== null && (l.flags & 128) !== 0)
      t: for (l = n.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && Yi(l, u, n);
        else if (l.tag === 19)
          Yi(l, u, n);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === n) break t;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === n)
            break t;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && jo(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), Vd(
          n,
          !1,
          s,
          u,
          r,
          i
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && jo(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        Vd(
          n,
          !0,
          u,
          null,
          r,
          i
        );
        break;
      case "together":
        Vd(
          n,
          !1,
          null,
          null,
          void 0,
          i
        );
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function qa(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), Bn |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (vl(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(B(153));
    if (n.child !== null) {
      for (l = n.child, u = Vu(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Vu(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function Zd(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ei(l)));
  }
  function Ld(l, n, u) {
    switch (n.tag) {
      case 3:
        $a(n, n.stateNode.containerInfo), Pl(n, $e, l.memoizedState.cache), zc();
        break;
      case 27:
      case 5:
        Jf(n);
        break;
      case 4:
        $a(n, n.stateNode.containerInfo);
        break;
      case 10:
        Pl(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, Yo(n), null;
        break;
      case 13:
        var i = n.memoizedState;
        if (i !== null)
          return i.dehydrated !== null ? (uu(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? Ay(l, n, u) : (uu(n), l = qa(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        uu(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (i = (u & n.childLanes) !== 0, i || (vl(
          l,
          n,
          u,
          !1
        ), i = (u & n.childLanes) !== 0), s) {
          if (i)
            return zy(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), lt(Oe, Oe.current), i) break;
        return null;
      case 22:
        return n.lanes = 0, Kp(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        Pl(n, $e, l.memoizedState.cache);
    }
    return qa(l, n, u);
  }
  function Dy(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        ke = !0;
      else {
        if (!Zd(l, u) && (n.flags & 128) === 0)
          return ke = !1, Ld(
            l,
            n,
            u
          );
        ke = (l.flags & 131072) !== 0;
      }
    else
      ke = !1, qt && (n.flags & 1048576) !== 0 && Vm(n, Ke, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        t: {
          var i = n.pendingProps;
          if (l = Mc(n.elementType), n.type = l, typeof l == "function")
            bi(l) ? (i = qc(l, i), n.tag = 1, n = Ey(
              null,
              n,
              l,
              i,
              u
            )) : (n.tag = 0, n = Qd(
              null,
              n,
              l,
              i,
              u
            ));
          else {
            if (l != null) {
              var s = l.$$typeof;
              if (s === Pe) {
                n.tag = 11, n = Sy(
                  null,
                  n,
                  l,
                  i,
                  u
                );
                break t;
              } else if (s === F) {
                n.tag = 14, n = by(
                  null,
                  n,
                  l,
                  i,
                  u
                );
                break t;
              }
            }
            throw n = ql(l) || l, Error(B(306, n, ""));
          }
        }
        return n;
      case 0:
        return Qd(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return i = n.type, s = qc(
          i,
          n.pendingProps
        ), Ey(
          l,
          n,
          i,
          s,
          u
        );
      case 3:
        t: {
          if ($a(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(B(387));
          i = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, vd(l, n), nu(n, i, null, u);
          var m = n.memoizedState;
          if (i = m.cache, Pl(n, $e, i), i !== r.cache && au(
            n,
            [$e],
            u,
            !0
          ), Hc(), i = m.element, r.isDehydrated)
            if (r = {
              element: i,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = Un(
                l,
                n,
                i,
                u
              );
              break t;
            } else if (i !== s) {
              s = Ra(
                Error(B(424)),
                n
              ), Ho(s), n = Un(
                l,
                n,
                i,
                u
              );
              break t;
            } else {
              switch (l = n.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (ye = oa(l.firstChild), pl = n, qt = !0, tu = null, nl = !0, u = Wm(
                n,
                null,
                i,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (zc(), i === s) {
              n = qa(
                l,
                n,
                u
              );
              break t;
            }
            Ee(l, n, i, u);
          }
          n = n.child;
        }
        return n;
      case 26:
        return Na(l, n), l === null ? (u = mf(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : qt || (u = n.type, l = n.pendingProps, i = Lc(
          Ka.current
        ).createElement(u), i[ue] = n, i[$l] = l, _l(i, u, l), It(i), n.stateNode = i) : n.memoizedState = mf(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Jf(n), l === null && qt && (i = n.stateNode = df(
          n.type,
          n.pendingProps,
          Ka.current
        ), pl = n, nl = !0, s = ye, xn(n.type) ? (ur = s, ye = oa(i.firstChild)) : ye = s), Ee(
          l,
          n,
          n.pendingProps.children,
          u
        ), Na(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && qt && ((s = i = ye) && (i = Fg(
          i,
          n.type,
          n.pendingProps,
          nl
        ), i !== null ? (n.stateNode = i, pl = n, ye = oa(i.firstChild), nl = !1, s = !0) : s = !1), s || an(n)), Jf(n), s = n.type, r = n.pendingProps, m = l !== null ? l.memoizedProps : null, i = r.children, sf(s, r) ? i = null : m !== null && sf(s, m) && (n.flags |= 32), n.memoizedState !== null && (s = Os(
          l,
          n,
          Kg,
          null,
          null,
          u
        ), or._currentValue = s), Na(l, n), Ee(l, n, i, u), n.child;
      case 6:
        return l === null && qt && ((l = u = ye) && (u = Ot(
          u,
          n.pendingProps,
          nl
        ), u !== null ? (n.stateNode = u, pl = n, ye = null, l = !0) : l = !1), l || an(n)), null;
      case 13:
        return Ay(l, n, u);
      case 4:
        return $a(
          n,
          n.stateNode.containerInfo
        ), i = n.pendingProps, l === null ? n.child = Cc(
          n,
          null,
          i,
          u
        ) : Ee(l, n, i, u), n.child;
      case 11:
        return Sy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return Ee(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return Ee(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return Ee(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return i = n.pendingProps, Pl(n, n.type, i.value), Ee(l, n, i.children, u), n.child;
      case 9:
        return s = n.type._context, i = n.pendingProps.children, pt(n), s = V(s), i = i(s), n.flags |= 1, Ee(l, n, i, u), n.child;
      case 14:
        return by(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return Ty(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return zy(l, n, u);
      case 31:
        return $p(l, n, u);
      case 22:
        return Kp(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        return pt(n), i = V($e), l === null ? (s = _a(), s === null && (s = ie, r = ps(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = { parent: i, cache: s }, As(n), Pl(n, $e, s)) : ((l.lanes & u) !== 0 && (vd(l, n), nu(n, null, null, u), Hc()), s = l.memoizedState, r = n.memoizedState, s.parent !== i ? (s = { parent: i, cache: i }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), Pl(n, $e, i)) : (i = r.cache, Pl(n, $e, i), i !== s.cache && au(
          n,
          [$e],
          u,
          !0
        ))), Ee(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(B(156, n.tag));
  }
  function ru(l) {
    l.flags |= 4;
  }
  function Oy(l, n, u, i, s) {
    if ((n = (l.mode & 32) !== 0) && (n = !1), n) {
      if (l.flags |= 16777216, (s & 335544128) === s)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (nv()) l.flags |= 8192;
        else
          throw Rc = Oi, Di;
    } else l.flags &= -16777217;
  }
  function My(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Sa(n))
      if (nv()) l.flags |= 8192;
      else
        throw Rc = Oi, Di;
  }
  function Gl(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? ai() : 536870912, l.lanes |= n, Ne |= n);
  }
  function Jo(l, n) {
    if (!qt)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var i = null; u !== null; )
            u.alternate !== null && (i = u), u = u.sibling;
          i === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : i.sibling = null;
      }
  }
  function yt(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, i = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, i |= s.subtreeFlags & 65011712, i |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, i |= s.subtreeFlags, i |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= i, l.childLanes = u, n;
  }
  function Wp(l, n, u) {
    var i = n.pendingProps;
    switch (hd(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return yt(n), null;
      case 1:
        return yt(n), null;
      case 3:
        return u = n.stateNode, i = null, l !== null && (i = l.memoizedState.cache), n.memoizedState.cache !== i && (n.flags |= 2048), On($e), Ea(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (lu(n) ? ru(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Zm())), yt(n), null;
      case 26:
        var s = n.type, r = n.memoizedState;
        return l === null ? (ru(n), r !== null ? (yt(n), My(n, r)) : (yt(n), Oy(
          n,
          s,
          null,
          i,
          u
        ))) : r ? r !== l.memoizedState ? (ru(n), yt(n), My(n, r)) : (yt(n), n.flags &= -16777217) : (l = l.memoizedProps, l !== i && ru(n), yt(n), Oy(
          n,
          s,
          l,
          i,
          u
        )), null;
      case 27:
        if (k(n), u = Ka.current, s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== i && ru(n);
        else {
          if (!i) {
            if (n.stateNode === null)
              throw Error(B(166));
            return yt(n), null;
          }
          l = at.current, lu(n) ? ms(n) : (l = df(s, i, u), n.stateNode = l, ru(n));
        }
        return yt(n), null;
      case 5:
        if (k(n), s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== i && ru(n);
        else {
          if (!i) {
            if (n.stateNode === null)
              throw Error(B(166));
            return yt(n), null;
          }
          if (r = at.current, lu(n))
            ms(n);
          else {
            var m = Lc(
              Ka.current
            );
            switch (r) {
              case 1:
                r = m.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                r = m.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    r = m.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    r = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    r = m.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(
                      r.firstChild
                    );
                    break;
                  case "select":
                    r = typeof i.is == "string" ? m.createElement("select", {
                      is: i.is
                    }) : m.createElement("select"), i.multiple ? r.multiple = !0 : i.size && (r.size = i.size);
                    break;
                  default:
                    r = typeof i.is == "string" ? m.createElement(s, { is: i.is }) : m.createElement(s);
                }
            }
            r[ue] = n, r[$l] = i;
            t: for (m = n.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6)
                r.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
              if (m === n) break t;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === n)
                  break t;
                m = m.return;
              }
              m.sibling.return = m.return, m = m.sibling;
            }
            n.stateNode = r;
            t: switch (_l(r, s, i), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break t;
              case "img":
                i = !0;
                break t;
              default:
                i = !1;
            }
            i && ru(n);
          }
        }
        return yt(n), Oy(
          n,
          n.type,
          l === null ? null : l.memoizedProps,
          n.pendingProps,
          u
        ), null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== i && ru(n);
        else {
          if (typeof i != "string" && n.stateNode === null)
            throw Error(B(166));
          if (l = Ka.current, lu(n)) {
            if (l = n.stateNode, u = n.memoizedProps, i = null, s = pl, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            l[ue] = n, l = !!(l.nodeValue === u || i !== null && i.suppressHydrationWarning === !0 || Fy(l.nodeValue, u)), l || an(n, !0);
          } else
            l = Lc(l).createTextNode(
              i
            ), l[ue] = n, n.stateNode = l;
        }
        return yt(n), null;
      case 31:
        if (u = n.memoizedState, l === null || l.memoizedState !== null) {
          if (i = lu(n), u !== null) {
            if (l === null) {
              if (!i) throw Error(B(318));
              if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(B(557));
              l[ue] = n;
            } else
              zc(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            yt(n), l = !1;
          } else
            u = Zm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return n.flags & 256 ? (ea(n), n) : (ea(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(B(558));
        }
        return yt(n), null;
      case 13:
        if (i = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = lu(n), i !== null && i.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(B(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(B(317));
              s[ue] = n;
            } else
              zc(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            yt(n), s = !1;
          } else
            s = Zm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (ea(n), n) : (ea(n), null);
        }
        return ea(n), (n.flags & 128) !== 0 ? (n.lanes = u, n) : (u = i !== null, l = l !== null && l.memoizedState !== null, u && (i = n.child, s = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (s = i.alternate.memoizedState.cachePool.pool), r = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (r = i.memoizedState.cachePool.pool), r !== s && (i.flags |= 2048)), u !== l && u && (n.child.flags |= 8192), Gl(n, n.updateQueue), yt(n), null);
      case 4:
        return Ea(), l === null && ff(n.stateNode.containerInfo), yt(n), null;
      case 10:
        return On(n.type), yt(n), null;
      case 19:
        if (I(Oe), i = n.memoizedState, i === null) return yt(n), null;
        if (s = (n.flags & 128) !== 0, r = i.rendering, r === null)
          if (s) Jo(i, !1);
          else {
            if (ve !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = jo(l), r !== null) {
                  for (n.flags |= 128, Jo(i, !1), l = r.updateQueue, n.updateQueue = l, Gl(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    Gm(u, l), u = u.sibling;
                  return lt(
                    Oe,
                    Oe.current & 1 | 2
                  ), qt && ln(n, i.treeForkCount), n.child;
                }
                l = l.sibling;
              }
            i.tail !== null && Ul() > Wt && (n.flags |= 128, s = !0, Jo(i, !1), n.lanes = 4194304);
          }
        else {
          if (!s)
            if (l = jo(r), l !== null) {
              if (n.flags |= 128, s = !0, l = l.updateQueue, n.updateQueue = l, Gl(n, l), Jo(i, !0), i.tail === null && i.tailMode === "hidden" && !r.alternate && !qt)
                return yt(n), null;
            } else
              2 * Ul() - i.renderingStartTime > Wt && u !== 536870912 && (n.flags |= 128, s = !0, Jo(i, !1), n.lanes = 4194304);
          i.isBackwards ? (r.sibling = n.child, n.child = r) : (l = i.last, l !== null ? l.sibling = r : n.child = r, i.last = r);
        }
        return i.tail !== null ? (l = i.tail, i.rendering = l, i.tail = l.sibling, i.renderingStartTime = Ul(), l.sibling = null, u = Oe.current, lt(
          Oe,
          s ? u & 1 | 2 : u & 1
        ), qt && ln(n, i.treeForkCount), l) : (yt(n), null);
      case 22:
      case 23:
        return ea(n), qo(), i = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== i && (n.flags |= 8192) : i && (n.flags |= 8192), i ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (yt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : yt(n), u = n.updateQueue, u !== null && Gl(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== u && (n.flags |= 2048), l !== null && I(Ca), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), On($e), yt(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(B(156, n.tag));
  }
  function kp(l, n) {
    switch (hd(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return On($e), Ea(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return k(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (ea(n), n.alternate === null)
            throw Error(B(340));
          zc();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 13:
        if (ea(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(B(340));
          zc();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return I(Oe), null;
      case 4:
        return Ea(), null;
      case 10:
        return On(n.type), null;
      case 22:
      case 23:
        return ea(n), qo(), l !== null && I(Ca), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return On($e), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Fp(l, n) {
    switch (hd(n), n.tag) {
      case 3:
        On($e), Ea();
        break;
      case 26:
      case 27:
      case 5:
        k(n);
        break;
      case 4:
        Ea();
        break;
      case 31:
        n.memoizedState !== null && ea(n);
        break;
      case 13:
        ea(n);
        break;
      case 19:
        I(Oe);
        break;
      case 10:
        On(n.type);
        break;
      case 22:
      case 23:
        ea(n), qo(), l !== null && I(Ca);
        break;
      case 24:
        On($e);
    }
  }
  function un(l, n) {
    try {
      var u = n.updateQueue, i = u !== null ? u.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            i = void 0;
            var r = u.create, m = u.inst;
            i = r(), m.destroy = i;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (v) {
      le(n, n.return, v);
    }
  }
  function Ya(l, n, u) {
    try {
      var i = n.updateQueue, s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        i = r;
        do {
          if ((i.tag & l) === l) {
            var m = i.inst, v = m.destroy;
            if (v !== void 0) {
              m.destroy = void 0, s = n;
              var T = u, U = v;
              try {
                U();
              } catch (q) {
                le(
                  s,
                  T,
                  q
                );
              }
            }
          }
          i = i.next;
        } while (i !== r);
      }
    } catch (q) {
      le(n, n.return, q);
    }
  }
  function wd(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Bc(n, u);
      } catch (i) {
        le(l, l.return, i);
      }
    }
  }
  function Xc(l, n, u) {
    u.props = qc(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (i) {
      le(l, n, i);
    }
  }
  function du(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var i = l.stateNode;
            break;
          case 30:
            i = l.stateNode;
            break;
          default:
            i = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(i) : u.current = i;
      }
    } catch (s) {
      le(l, n, s);
    }
  }
  function Cn(l, n) {
    var u = l.ref, i = l.refCleanup;
    if (u !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          le(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          le(l, n, s);
        }
      else u.current = null;
  }
  function Ry(l) {
    var n = l.type, u = l.memoizedProps, i = l.stateNode;
    try {
      t: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && i.focus();
          break t;
        case "img":
          u.src ? i.src = u.src : u.srcSet && (i.srcset = u.srcSet);
      }
    } catch (s) {
      le(l, l.return, s);
    }
  }
  function Jd(l, n, u) {
    try {
      var i = l.stateNode;
      Py(i, l.type, u, n), i[$l] = n;
    } catch (s) {
      le(l, l.return, s);
    }
  }
  function Uy(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && xn(l.type) || l.tag === 4;
  }
  function Ko(l) {
    t: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Uy(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && xn(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue t;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function $o(l, n, u) {
    var i = l.tag;
    if (i === 5 || i === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = pn));
    else if (i !== 4 && (i === 27 && xn(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for ($o(l, n, u), l = l.sibling; l !== null; )
        $o(l, n, u), l = l.sibling;
  }
  function Wo(l, n, u) {
    var i = l.tag;
    if (i === 5 || i === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (i !== 4 && (i === 27 && xn(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (Wo(l, n, u), l = l.sibling; l !== null; )
        Wo(l, n, u), l = l.sibling;
  }
  function Cy(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var i = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      _l(n, i, u), n[ue] = l, n[$l] = u;
    } catch (r) {
      le(l, l.return, r);
    }
  }
  var Iu = !1, el = !1, Kd = !1, _y = typeof WeakSet == "function" ? WeakSet : Set, bl = null;
  function ko(l, n) {
    if (l = l.containerInfo, hh = il, l = Tc(l), is(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        t: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var i = u.getSelection && u.getSelection();
          if (i && i.rangeCount !== 0) {
            u = i.anchorNode;
            var s = i.anchorOffset, r = i.focusNode;
            i = i.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break t;
            }
            var m = 0, v = -1, T = -1, U = 0, q = 0, X = l, C = null;
            e: for (; ; ) {
              for (var x; X !== u || s !== 0 && X.nodeType !== 3 || (v = m + s), X !== r || i !== 0 && X.nodeType !== 3 || (T = m + i), X.nodeType === 3 && (m += X.nodeValue.length), (x = X.firstChild) !== null; )
                C = X, X = x;
              for (; ; ) {
                if (X === l) break e;
                if (C === u && ++U === s && (v = m), C === r && ++q === i && (T = m), (x = X.nextSibling) !== null) break;
                X = C, C = X.parentNode;
              }
              X = x;
            }
            u = v === -1 || T === -1 ? null : { start: v, end: T };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (mh = { focusedElem: l, selectionRange: u }, il = !1, bl = n; bl !== null; )
      if (n = bl, l = n.child, (n.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = n, bl = l;
      else
        for (; bl !== null; ) {
          switch (n = bl, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = n.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (u = 0; u < l.length; u++)
                  s = l[u], s.ref.impl = s.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, i = u.stateNode;
                try {
                  var P = qc(
                    u.type,
                    s
                  );
                  l = i.getSnapshotBeforeUpdate(
                    P,
                    r
                  ), i.__reactInternalSnapshotBeforeUpdate = l;
                } catch (st) {
                  le(
                    u,
                    u.return,
                    st
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  nr(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      nr(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(B(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, bl = l;
            break;
          }
          bl = n.return;
        }
  }
  function Qs(l, n, u) {
    var i = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Pu(l, u), i & 4 && un(5, u);
        break;
      case 1:
        if (Pu(l, u), i & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              le(u, u.return, m);
            }
          else {
            var s = qc(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              le(
                u,
                u.return,
                m
              );
            }
          }
        i & 64 && wd(u), i & 512 && du(u, u.return);
        break;
      case 3:
        if (Pu(l, u), i & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            Bc(l, n);
          } catch (m) {
            le(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && i & 4 && Cy(u);
      case 26:
      case 5:
        Pu(l, u), n === null && i & 4 && Ry(u), i & 512 && du(u, u.return);
        break;
      case 12:
        Pu(l, u);
        break;
      case 31:
        Pu(l, u), i & 4 && Ip(l, u);
        break;
      case 13:
        Pu(l, u), i & 4 && Ny(l, u), i & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = ja.bind(
          null,
          u
        ), rf(l, u))));
        break;
      case 22:
        if (i = u.memoizedState !== null || Iu, !i) {
          n = n !== null && n.memoizedState !== null || el, s = Iu;
          var r = el;
          Iu = i, (el = n) && !r ? _n(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Pu(l, u), Iu = s, el = r;
        }
        break;
      case 30:
        break;
      default:
        Pu(l, u);
    }
  }
  function Hy(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Hy(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && Zr(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var pe = null, na = !1;
  function hu(l, n, u) {
    for (u = u.child; u !== null; )
      By(l, n, u), u = u.sibling;
  }
  function By(l, n, u) {
    if (ra && typeof ra.onCommitFiberUnmount == "function")
      try {
        ra.onCommitFiberUnmount(li, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        el || Cn(u, n), hu(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        el || Cn(u, n);
        var i = pe, s = na;
        xn(u.type) && (pe = u.stateNode, na = !1), hu(
          l,
          n,
          u
        ), wi(u.stateNode), pe = i, na = s;
        break;
      case 5:
        el || Cn(u, n);
      case 6:
        if (i = pe, s = na, pe = null, hu(
          l,
          n,
          u
        ), pe = i, na = s, pe !== null)
          if (na)
            try {
              (pe.nodeType === 9 ? pe.body : pe.nodeName === "HTML" ? pe.ownerDocument.body : pe).removeChild(u.stateNode);
            } catch (r) {
              le(
                u,
                n,
                r
              );
            }
          else
            try {
              pe.removeChild(u.stateNode);
            } catch (r) {
              le(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        pe !== null && (na ? (l = pe, a0(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Ef(l)) : a0(pe, u.stateNode));
        break;
      case 4:
        i = pe, s = na, pe = u.stateNode.containerInfo, na = !0, hu(
          l,
          n,
          u
        ), pe = i, na = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ya(2, u, n), el || Ya(4, u, n), hu(
          l,
          n,
          u
        );
        break;
      case 1:
        el || (Cn(u, n), i = u.stateNode, typeof i.componentWillUnmount == "function" && Xc(
          u,
          n,
          i
        )), hu(
          l,
          n,
          u
        );
        break;
      case 21:
        hu(
          l,
          n,
          u
        );
        break;
      case 22:
        el = (i = el) || u.memoizedState !== null, hu(
          l,
          n,
          u
        ), el = i;
        break;
      default:
        hu(
          l,
          n,
          u
        );
    }
  }
  function Ip(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Ef(l);
      } catch (u) {
        le(n, n.return, u);
      }
    }
  }
  function Ny(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Ef(l);
      } catch (u) {
        le(n, n.return, u);
      }
  }
  function Vs(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new _y()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new _y()), n;
      default:
        throw Error(B(435, l.tag));
    }
  }
  function Zs(l, n) {
    var u = Vs(l);
    n.forEach(function(i) {
      if (!u.has(i)) {
        u.add(i);
        var s = Sv.bind(null, l, i);
        i.then(s, s);
      }
    });
  }
  function ua(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var i = 0; i < u.length; i++) {
        var s = u[i], r = l, m = n, v = m;
        t: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (xn(v.type)) {
                pe = v.stateNode, na = !1;
                break t;
              }
              break;
            case 5:
              pe = v.stateNode, na = !1;
              break t;
            case 3:
            case 4:
              pe = v.stateNode.containerInfo, na = !0;
              break t;
          }
          v = v.return;
        }
        if (pe === null) throw Error(B(160));
        By(r, m, s), pe = null, na = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        $d(n, l), n = n.sibling;
  }
  var At = null;
  function $d(l, n) {
    var u = l.alternate, i = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ua(n, l), ma(l), i & 4 && (Ya(3, l, l.return), un(3, l), Ya(5, l, l.return));
        break;
      case 1:
        ua(n, l), ma(l), i & 512 && (el || u === null || Cn(u, u.return)), i & 64 && Iu && (l = l.updateQueue, l !== null && (i = l.callbacks, i !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? i : u.concat(i))));
        break;
      case 26:
        var s = At;
        if (ua(n, l), ma(l), i & 512 && (el || u === null || Cn(u, u.return)), i & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (i = l.memoizedState, u === null)
            if (i === null)
              if (l.stateNode === null) {
                t: {
                  i = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  e: switch (i) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[Jn] || r[ue] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(i), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), _l(r, i, u), r[ue] = l, It(r), i = r;
                      break t;
                    case "link":
                      var m = i0(
                        "link",
                        "href",
                        s
                      ).get(i + (u.href || ""));
                      if (m) {
                        for (var v = 0; v < m.length; v++)
                          if (r = m[v], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            m.splice(v, 1);
                            break e;
                          }
                      }
                      r = s.createElement(i), _l(r, i, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (m = i0(
                        "meta",
                        "content",
                        s
                      ).get(i + (u.content || ""))) {
                        for (v = 0; v < m.length; v++)
                          if (r = m[v], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            m.splice(v, 1);
                            break e;
                          }
                      }
                      r = s.createElement(i), _l(r, i, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(B(468, i));
                  }
                  r[ue] = l, It(r), i = r;
                }
                l.stateNode = i;
              } else
                Sh(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = c0(
                s,
                i,
                l.memoizedProps
              );
          else
            r !== i ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, i === null ? Sh(
              s,
              l.type,
              l.stateNode
            ) : c0(
              s,
              i,
              l.memoizedProps
            )) : i === null && l.stateNode !== null && Jd(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        ua(n, l), ma(l), i & 512 && (el || u === null || Cn(u, u.return)), u !== null && i & 4 && Jd(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (ua(n, l), ma(l), i & 512 && (el || u === null || Cn(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            $n(s, "");
          } catch (P) {
            le(l, l.return, P);
          }
        }
        i & 4 && l.stateNode != null && (s = l.memoizedProps, Jd(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), i & 1024 && (Kd = !0);
        break;
      case 6:
        if (ua(n, l), ma(l), i & 4) {
          if (l.stateNode === null)
            throw Error(B(162));
          i = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = i;
          } catch (P) {
            le(l, l.return, P);
          }
        }
        break;
      case 3:
        if (vf = null, s = At, At = Xl(n.containerInfo), ua(n, l), At = s, ma(l), i & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Ef(n.containerInfo);
          } catch (P) {
            le(l, l.return, P);
          }
        Kd && (Kd = !1, xy(l));
        break;
      case 4:
        i = At, At = Xl(
          l.stateNode.containerInfo
        ), ua(n, l), ma(l), At = i;
        break;
      case 12:
        ua(n, l), ma(l);
        break;
      case 31:
        ua(n, l), ma(l), i & 4 && (i = l.updateQueue, i !== null && (l.updateQueue = null, Zs(l, i)));
        break;
      case 13:
        ua(n, l), ma(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Nn = Ul()), i & 4 && (i = l.updateQueue, i !== null && (l.updateQueue = null, Zs(l, i)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var T = u !== null && u.memoizedState !== null, U = Iu, q = el;
        if (Iu = U || s, el = q || T, ua(n, l), el = q, Iu = U, ma(l), i & 8192)
          t: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || T || Iu || el || ji(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                T = u = n;
                try {
                  if (r = T.stateNode, s)
                    m = r.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    v = T.stateNode;
                    var X = T.memoizedProps.style, C = X != null && X.hasOwnProperty("display") ? X.display : null;
                    v.style.display = C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (P) {
                  le(T, T.return, P);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                T = n;
                try {
                  T.stateNode.nodeValue = s ? "" : T.memoizedProps;
                } catch (P) {
                  le(T, T.return, P);
                }
              }
            } else if (n.tag === 18) {
              if (u === null) {
                T = n;
                try {
                  var x = T.stateNode;
                  s ? Fe(x, !0) : Fe(T.stateNode, !1);
                } catch (P) {
                  le(T, T.return, P);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break t;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break t;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        i & 4 && (i = l.updateQueue, i !== null && (u = i.retryQueue, u !== null && (i.retryQueue = null, Zs(l, u))));
        break;
      case 19:
        ua(n, l), ma(l), i & 4 && (i = l.updateQueue, i !== null && (l.updateQueue = null, Zs(l, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ua(n, l), ma(l);
    }
  }
  function ma(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, i = l.return; i !== null; ) {
          if (Uy(i)) {
            u = i;
            break;
          }
          i = i.return;
        }
        if (u == null) throw Error(B(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = Ko(l);
            Wo(l, r, s);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && ($n(m, ""), u.flags &= -33);
            var v = Ko(l);
            Wo(l, v, m);
            break;
          case 3:
          case 4:
            var T = u.stateNode.containerInfo, U = Ko(l);
            $o(
              l,
              U,
              T
            );
            break;
          default:
            throw Error(B(161));
        }
      } catch (q) {
        le(l, l.return, q);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function xy(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        xy(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function Pu(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Qs(l, n.alternate, n), n = n.sibling;
  }
  function ji(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ya(4, n, n.return), ji(n);
          break;
        case 1:
          Cn(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && Xc(
            n,
            n.return,
            u
          ), ji(n);
          break;
        case 27:
          wi(n.stateNode);
        case 26:
        case 5:
          Cn(n, n.return), ji(n);
          break;
        case 22:
          n.memoizedState === null && ji(n);
          break;
        case 30:
          ji(n);
          break;
        default:
          ji(n);
      }
      l = l.sibling;
    }
  }
  function _n(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var i = n.alternate, s = l, r = n, m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          _n(
            s,
            r,
            u
          ), un(4, r);
          break;
        case 1:
          if (_n(
            s,
            r,
            u
          ), i = r, s = i.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (U) {
              le(i, i.return, U);
            }
          if (i = r, s = i.updateQueue, s !== null) {
            var v = i.stateNode;
            try {
              var T = s.shared.hiddenCallbacks;
              if (T !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < T.length; s++)
                  Sd(T[s], v);
            } catch (U) {
              le(i, i.return, U);
            }
          }
          u && m & 64 && wd(r), du(r, r.return);
          break;
        case 27:
          Cy(r);
        case 26:
        case 5:
          _n(
            s,
            r,
            u
          ), u && i === null && m & 4 && Ry(r), du(r, r.return);
          break;
        case 12:
          _n(
            s,
            r,
            u
          );
          break;
        case 31:
          _n(
            s,
            r,
            u
          ), u && m & 4 && Ip(s, r);
          break;
        case 13:
          _n(
            s,
            r,
            u
          ), u && m & 4 && Ny(s, r);
          break;
        case 22:
          r.memoizedState === null && _n(
            s,
            r,
            u
          ), du(r, r.return);
          break;
        case 30:
          break;
        default:
          _n(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function Wd(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && vs(u));
  }
  function kd(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && vs(l));
  }
  function cn(l, n, u, i) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Fo(
          l,
          n,
          u,
          i
        ), n = n.sibling;
  }
  function Fo(l, n, u, i) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        cn(
          l,
          n,
          u,
          i
        ), s & 2048 && un(9, n);
        break;
      case 1:
        cn(
          l,
          n,
          u,
          i
        );
        break;
      case 3:
        cn(
          l,
          n,
          u,
          i
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && vs(l)));
        break;
      case 12:
        if (s & 2048) {
          cn(
            l,
            n,
            u,
            i
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, m = r.id, v = r.onPostCommit;
            typeof v == "function" && v(
              m,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (T) {
            le(n, n.return, T);
          }
        } else
          cn(
            l,
            n,
            u,
            i
          );
        break;
      case 31:
        cn(
          l,
          n,
          u,
          i
        );
        break;
      case 13:
        cn(
          l,
          n,
          u,
          i
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, m = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? cn(
          l,
          n,
          u,
          i
        ) : Ls(l, n) : r._visibility & 2 ? cn(
          l,
          n,
          u,
          i
        ) : (r._visibility |= 2, Io(
          l,
          n,
          u,
          i,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && Wd(m, n);
        break;
      case 24:
        cn(
          l,
          n,
          u,
          i
        ), s & 2048 && kd(n.alternate, n);
        break;
      default:
        cn(
          l,
          n,
          u,
          i
        );
    }
  }
  function Io(l, n, u, i, s) {
    for (s = s && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var r = l, m = n, v = u, T = i, U = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Io(
            r,
            m,
            v,
            T,
            s
          ), un(8, m);
          break;
        case 23:
          break;
        case 22:
          var q = m.stateNode;
          m.memoizedState !== null ? q._visibility & 2 ? Io(
            r,
            m,
            v,
            T,
            s
          ) : Ls(
            r,
            m
          ) : (q._visibility |= 2, Io(
            r,
            m,
            v,
            T,
            s
          )), s && U & 2048 && Wd(
            m.alternate,
            m
          );
          break;
        case 24:
          Io(
            r,
            m,
            v,
            T,
            s
          ), s && U & 2048 && kd(m.alternate, m);
          break;
        default:
          Io(
            r,
            m,
            v,
            T,
            s
          );
      }
      n = n.sibling;
    }
  }
  function Ls(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, i = n, s = i.flags;
        switch (i.tag) {
          case 22:
            Ls(u, i), s & 2048 && Wd(
              i.alternate,
              i
            );
            break;
          case 24:
            Ls(u, i), s & 2048 && kd(i.alternate, i);
            break;
          default:
            Ls(u, i);
        }
        n = n.sibling;
      }
  }
  var ya = 8192;
  function mu(l, n, u) {
    if (l.subtreeFlags & ya)
      for (l = l.child; l !== null; )
        Pp(
          l,
          n,
          u
        ), l = l.sibling;
  }
  function Pp(l, n, u) {
    switch (l.tag) {
      case 26:
        mu(
          l,
          n,
          u
        ), l.flags & ya && l.memoizedState !== null && Su(
          u,
          At,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        mu(
          l,
          n,
          u
        );
        break;
      case 3:
      case 4:
        var i = At;
        At = Xl(l.stateNode.containerInfo), mu(
          l,
          n,
          u
        ), At = i;
        break;
      case 22:
        l.memoizedState === null && (i = l.alternate, i !== null && i.memoizedState !== null ? (i = ya, ya = 16777216, mu(
          l,
          n,
          u
        ), ya = i) : mu(
          l,
          n,
          u
        ));
        break;
      default:
        mu(
          l,
          n,
          u
        );
    }
  }
  function Fd(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function Po(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var i = n[u];
          bl = i, Id(
            i,
            l
          );
        }
      Fd(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        qy(l), l = l.sibling;
  }
  function qy(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Po(l), l.flags & 2048 && Ya(9, l, l.return);
        break;
      case 3:
        Po(l);
        break;
      case 12:
        Po(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, ws(l)) : Po(l);
        break;
      default:
        Po(l);
    }
  }
  function ws(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var i = n[u];
          bl = i, Id(
            i,
            l
          );
        }
      Fd(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          Ya(8, n, n.return), ws(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, ws(n));
          break;
        default:
          ws(n);
      }
      l = l.sibling;
    }
  }
  function Id(l, n) {
    for (; bl !== null; ) {
      var u = bl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ya(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var i = u.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          vs(u.memoizedState.cache);
      }
      if (i = u.child, i !== null) i.return = u, bl = i;
      else
        t: for (u = l; bl !== null; ) {
          i = bl;
          var s = i.sibling, r = i.return;
          if (Hy(i), i === u) {
            bl = null;
            break t;
          }
          if (s !== null) {
            s.return = r, bl = s;
            break t;
          }
          bl = r;
        }
    }
  }
  var tv = {
    getCacheForType: function(l) {
      var n = V($e), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return V($e).controller.signal;
    }
  }, Yy = typeof WeakMap == "function" ? WeakMap : Map, wt = 0, ie = null, Yt = null, _t = 0, ee = 0, dt = null, yu = !1, Qc = !1, Pd = !1, Hn = 0, ve = 0, Bn = 0, Gi = 0, th = 0, ca = 0, Ne = 0, Js = null, xe = null, eh = !1, Nn = 0, jy = 0, Wt = 1 / 0, tf = null, Me = null, cl = 0, tc = null, Vc = null, pu = 0, pa = 0, lh = null, ah = null, ef = 0, Ks = null;
  function va() {
    return (wt & 2) !== 0 && _t !== 0 ? _t & -_t : O.T !== null ? oh() : Qr();
  }
  function ev() {
    if (ca === 0)
      if ((_t & 536870912) === 0 || qt) {
        var l = hn;
        hn <<= 1, (hn & 3932160) === 0 && (hn = 262144), ca = l;
      } else ca = 536870912;
    return l = ta.current, l !== null && (l.flags |= 32), ca;
  }
  function ia(l, n, u) {
    (l === ie && (ee === 2 || ee === 9) || l.cancelPendingCommit !== null) && (vu(l, 0), ec(
      l,
      _t,
      ca,
      !1
    )), mo(l, u), ((wt & 2) === 0 || l !== ie) && (l === ie && ((wt & 2) === 0 && (Gi |= u), ve === 4 && ec(
      l,
      _t,
      ca,
      !1
    )), gu(l));
  }
  function lv(l, n, u) {
    if ((wt & 6) !== 0) throw Error(B(327));
    var i = !u && (n & 127) === 0 && (n & l.expiredLanes) === 0 || mn(l, n), s = i ? iv(l, n) : uh(l, n, !0), r = i;
    do {
      if (s === 0) {
        Qc && !i && ec(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !av(u)) {
          s = uh(l, n, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var m = 0;
          else
            m = l.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            n = m;
            t: {
              var v = l;
              s = Js;
              var T = v.current.memoizedState.isDehydrated;
              if (T && (vu(v, m).flags |= 256), m = uh(
                v,
                m,
                !1
              ), m !== 2) {
                if (Pd && !T) {
                  v.errorRecoveryDisabledLanes |= r, Gi |= r, s = 4;
                  break t;
                }
                r = xe, xe = s, r !== null && (xe === null ? xe = r : xe.push.apply(
                  xe,
                  r
                ));
              }
              s = m;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          vu(l, 0), ec(l, n, 0, !0);
          break;
        }
        t: {
          switch (i = l, r = s, r) {
            case 0:
            case 1:
              throw Error(B(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              ec(
                i,
                n,
                ca,
                !yu
              );
              break t;
            case 2:
              xe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(B(329));
          }
          if ((n & 62914560) === n && (s = Nn + 300 - Ul(), 10 < s)) {
            if (ec(
              i,
              n,
              ca,
              !yu
            ), Je(i, 0, !0) !== 0) break t;
            pu = n, i.timeoutHandle = ar(
              $s.bind(
                null,
                i,
                u,
                xe,
                tf,
                eh,
                n,
                ca,
                Gi,
                Ne,
                yu,
                r,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break t;
          }
          $s(
            i,
            u,
            xe,
            tf,
            eh,
            n,
            ca,
            Gi,
            Ne,
            yu,
            r,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    gu(l);
  }
  function $s(l, n, u, i, s, r, m, v, T, U, q, X, C, x) {
    if (l.timeoutHandle = -1, X = n.subtreeFlags, X & 8192 || (X & 16785408) === 16785408) {
      X = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: pn
      }, Pp(
        n,
        r,
        X
      );
      var P = (r & 62914560) === r ? Nn - Ul() : (r & 4194048) === r ? jy - Ul() : 0;
      if (P = f0(
        X,
        P
      ), P !== null) {
        pu = r, l.cancelPendingCommit = P(
          rv.bind(
            null,
            l,
            n,
            r,
            u,
            i,
            s,
            m,
            v,
            T,
            q,
            X,
            null,
            C,
            x
          )
        ), ec(l, r, m, !U);
        return;
      }
    }
    rv(
      l,
      n,
      r,
      u,
      i,
      s,
      m,
      v,
      T
    );
  }
  function av(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var i = 0; i < u.length; i++) {
          var s = u[i], r = s.getSnapshot;
          s = s.value;
          try {
            if (!jl(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function ec(l, n, u, i) {
    n &= ~th, n &= ~Gi, l.suspendedLanes |= n, l.pingedLanes &= ~n, i && (l.warmLanes |= n), i = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Kl(s), m = 1 << r;
      i[r] = -1, s &= ~m;
    }
    u !== 0 && kf(l, u, n);
  }
  function lf() {
    return (wt & 6) === 0 ? (ac(0), !1) : !0;
  }
  function Gy() {
    if (Yt !== null) {
      if (ee === 0)
        var l = Yt.return;
      else
        l = Yt, Dn = Lu = null, Ms(l), Uc = null, Mi = 0, l = Yt;
      for (; l !== null; )
        Fp(l.alternate, l), l = l.return;
      Yt = null;
    }
  }
  function vu(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Mv(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), pu = 0, Gy(), ie = l, Yt = u = Vu(l.current, null), _t = n, ee = 0, dt = null, yu = !1, Qc = mn(l, n), Pd = !1, Ne = ca = th = Gi = Bn = ve = 0, xe = Js = null, eh = !1, (n & 8) !== 0 && (n |= n & 32);
    var i = l.entangledLanes;
    if (i !== 0)
      for (l = l.entanglements, i &= n; 0 < i; ) {
        var s = 31 - Kl(i), r = 1 << s;
        n |= l[s], i &= ~r;
      }
    return Hn = n, Oa(), u;
  }
  function af(l, n) {
    Tt = null, O.H = xs, n === Oc || n === No ? (n = $m(), ee = 3) : n === Di ? (n = $m(), ee = 4) : ee = n === Xd ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, dt = n, Yt === null && (ve = 1, wo(
      l,
      Ra(n, l.current)
    ));
  }
  function nv() {
    var l = ta.current;
    return l === null ? !0 : (_t & 4194048) === _t ? Ba === null : (_t & 62914560) === _t || (_t & 536870912) !== 0 ? l === Ba : !1;
  }
  function uv() {
    var l = O.H;
    return O.H = xs, l === null ? xs : l;
  }
  function cv() {
    var l = O.A;
    return O.A = tv, l;
  }
  function nh() {
    ve = 4, yu || (_t & 4194048) !== _t && ta.current !== null || (Qc = !0), (Bn & 134217727) === 0 && (Gi & 134217727) === 0 || ie === null || ec(
      ie,
      _t,
      ca,
      !1
    );
  }
  function uh(l, n, u) {
    var i = wt;
    wt |= 2;
    var s = uv(), r = cv();
    (ie !== l || _t !== n) && (tf = null, vu(l, n)), n = !1;
    var m = ve;
    t: do
      try {
        if (ee !== 0 && Yt !== null) {
          var v = Yt, T = dt;
          switch (ee) {
            case 8:
              Gy(), m = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ta.current === null && (n = !0);
              var U = ee;
              if (ee = 0, dt = null, Xi(l, v, T, U), u && Qc) {
                m = 0;
                break t;
              }
              break;
            default:
              U = ee, ee = 0, dt = null, Xi(l, v, T, U);
          }
        }
        Wg(), m = ve;
        break;
      } catch (q) {
        af(l, q);
      }
    while (!0);
    return n && l.shellSuspendCounter++, Dn = Lu = null, wt = i, O.H = s, O.A = r, Yt === null && (ie = null, _t = 0, Oa()), m;
  }
  function Wg() {
    for (; Yt !== null; ) ov(Yt);
  }
  function iv(l, n) {
    var u = wt;
    wt |= 2;
    var i = uv(), s = cv();
    ie !== l || _t !== n ? (tf = null, Wt = Ul() + 500, vu(l, n)) : Qc = mn(
      l,
      n
    );
    t: do
      try {
        if (ee !== 0 && Yt !== null) {
          n = Yt;
          var r = dt;
          e: switch (ee) {
            case 1:
              ee = 0, dt = null, Xi(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (Jm(r)) {
                ee = 0, dt = null, fv(n);
                break;
              }
              n = function() {
                ee !== 2 && ee !== 9 || ie !== l || (ee = 7), gu(l);
              }, r.then(n, n);
              break t;
            case 3:
              ee = 7;
              break t;
            case 4:
              ee = 5;
              break t;
            case 7:
              Jm(r) ? (ee = 0, dt = null, fv(n)) : (ee = 0, dt = null, Xi(l, n, r, 7));
              break;
            case 5:
              var m = null;
              switch (Yt.tag) {
                case 26:
                  m = Yt.memoizedState;
                case 5:
                case 27:
                  var v = Yt;
                  if (m ? Sa(m) : v.stateNode.complete) {
                    ee = 0, dt = null;
                    var T = v.sibling;
                    if (T !== null) Yt = T;
                    else {
                      var U = v.return;
                      U !== null ? (Yt = U, Ws(U)) : Yt = null;
                    }
                    break e;
                  }
              }
              ee = 0, dt = null, Xi(l, n, r, 5);
              break;
            case 6:
              ee = 0, dt = null, Xi(l, n, r, 6);
              break;
            case 8:
              Gy(), ve = 6;
              break t;
            default:
              throw Error(B(462));
          }
        }
        Zc();
        break;
      } catch (q) {
        af(l, q);
      }
    while (!0);
    return Dn = Lu = null, O.H = i, O.A = s, wt = u, Yt !== null ? 0 : (ie = null, _t = 0, Oa(), ve);
  }
  function Zc() {
    for (; Yt !== null && !ei(); )
      ov(Yt);
  }
  function ov(l) {
    var n = Dy(l.alternate, l, Hn);
    l.memoizedProps = l.pendingProps, n === null ? Ws(l) : Yt = n;
  }
  function fv(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = jc(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          _t
        );
        break;
      case 11:
        n = jc(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          _t
        );
        break;
      case 5:
        Ms(n);
      default:
        Fp(u, n), n = Yt = Gm(n, Hn), n = Dy(u, n, Hn);
    }
    l.memoizedProps = l.pendingProps, n === null ? Ws(l) : Yt = n;
  }
  function Xi(l, n, u, i) {
    Dn = Lu = null, Ms(n), Uc = null, Mi = 0;
    var s = n.return;
    try {
      if ($g(
        l,
        s,
        n,
        u,
        _t
      )) {
        ve = 1, wo(
          l,
          Ra(u, l.current)
        ), Yt = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw Yt = s, r;
      ve = 1, wo(
        l,
        Ra(u, l.current)
      ), Yt = null;
      return;
    }
    n.flags & 32768 ? (qt || i === 1 ? l = !0 : Qc || (_t & 536870912) !== 0 ? l = !1 : (yu = l = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = ta.current, i !== null && i.tag === 13 && (i.flags |= 16384))), sv(n, l)) : Ws(n);
  }
  function Ws(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        sv(
          n,
          yu
        );
        return;
      }
      l = n.return;
      var u = Wp(
        n.alternate,
        n,
        Hn
      );
      if (u !== null) {
        Yt = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        Yt = n;
        return;
      }
      Yt = n = l;
    } while (n !== null);
    ve === 0 && (ve = 5);
  }
  function sv(l, n) {
    do {
      var u = kp(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, Yt = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        Yt = l;
        return;
      }
      Yt = l = u;
    } while (l !== null);
    ve = 6, Yt = null;
  }
  function rv(l, n, u, i, s, r, m, v, T) {
    l.cancelPendingCommit = null;
    do
      nf();
    while (cl !== 0);
    if ((wt & 6) !== 0) throw Error(B(327));
    if (n !== null) {
      if (n === l.current) throw Error(B(177));
      if (r = n.lanes | n.childLanes, r |= tn, Gr(
        l,
        u,
        r,
        m,
        v,
        T
      ), l === ie && (Yt = ie = null, _t = 0), Vc = n, tc = l, pu = u, pa = r, lh = s, ah = i, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, bv(dc, function() {
        return pv(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), i = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || i) {
        i = O.T, O.T = null, s = Q.p, Q.p = 2, m = wt, wt |= 4;
        try {
          ko(l, n, u);
        } finally {
          wt = m, Q.p = s, O.T = i;
        }
      }
      cl = 1, dv(), hv(), mv();
    }
  }
  function dv() {
    if (cl === 1) {
      cl = 0;
      var l = tc, n = Vc, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = O.T, O.T = null;
        var i = Q.p;
        Q.p = 2;
        var s = wt;
        wt |= 4;
        try {
          $d(n, l);
          var r = mh, m = Tc(l.containerInfo), v = r.focusedElem, T = r.selectionRange;
          if (m !== v && v && v.ownerDocument && vi(
            v.ownerDocument.documentElement,
            v
          )) {
            if (T !== null && is(v)) {
              var U = T.start, q = T.end;
              if (q === void 0 && (q = U), "selectionStart" in v)
                v.selectionStart = U, v.selectionEnd = Math.min(
                  q,
                  v.value.length
                );
              else {
                var X = v.ownerDocument || document, C = X && X.defaultView || window;
                if (C.getSelection) {
                  var x = C.getSelection(), P = v.textContent.length, st = Math.min(T.start, P), fe = T.end === void 0 ? st : Math.min(T.end, P);
                  !x.extend && st > fe && (m = fe, fe = st, st = m);
                  var M = Ym(
                    v,
                    st
                  ), z = Ym(
                    v,
                    fe
                  );
                  if (M && z && (x.rangeCount !== 1 || x.anchorNode !== M.node || x.anchorOffset !== M.offset || x.focusNode !== z.node || x.focusOffset !== z.offset)) {
                    var R = X.createRange();
                    R.setStart(M.node, M.offset), x.removeAllRanges(), st > fe ? (x.addRange(R), x.extend(z.node, z.offset)) : (R.setEnd(z.node, z.offset), x.addRange(R));
                  }
                }
              }
            }
            for (X = [], x = v; x = x.parentNode; )
              x.nodeType === 1 && X.push({
                element: x,
                left: x.scrollLeft,
                top: x.scrollTop
              });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < X.length; v++) {
              var G = X[v];
              G.element.scrollLeft = G.left, G.element.scrollTop = G.top;
            }
          }
          il = !!hh, mh = hh = null;
        } finally {
          wt = s, Q.p = i, O.T = u;
        }
      }
      l.current = n, cl = 2;
    }
  }
  function hv() {
    if (cl === 2) {
      cl = 0;
      var l = tc, n = Vc, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = O.T, O.T = null;
        var i = Q.p;
        Q.p = 2;
        var s = wt;
        wt |= 4;
        try {
          Qs(l, n.alternate, n);
        } finally {
          wt = s, Q.p = i, O.T = u;
        }
      }
      cl = 3;
    }
  }
  function mv() {
    if (cl === 4 || cl === 3) {
      cl = 0, qr();
      var l = tc, n = Vc, u = pu, i = ah;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? cl = 5 : (cl = 0, Vc = tc = null, yv(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (Me = null), rm(u), n = n.stateNode, ra && typeof ra.onCommitFiberRoot == "function")
        try {
          ra.onCommitFiberRoot(
            li,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (i !== null) {
        n = O.T, s = Q.p, Q.p = 2, O.T = null;
        try {
          for (var r = l.onRecoverableError, m = 0; m < i.length; m++) {
            var v = i[m];
            r(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          O.T = n, Q.p = s;
        }
      }
      (pu & 3) !== 0 && nf(), gu(l), s = l.pendingLanes, (u & 261930) !== 0 && (s & 42) !== 0 ? l === Ks ? ef++ : (ef = 0, Ks = l) : ef = 0, ac(0);
    }
  }
  function yv(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, vs(n)));
  }
  function nf() {
    return dv(), hv(), mv(), pv();
  }
  function pv() {
    if (cl !== 5) return !1;
    var l = tc, n = pa;
    pa = 0;
    var u = rm(pu), i = O.T, s = Q.p;
    try {
      Q.p = 32 > u ? 32 : u, O.T = null, u = lh, lh = null;
      var r = tc, m = pu;
      if (cl = 0, Vc = tc = null, pu = 0, (wt & 6) !== 0) throw Error(B(331));
      var v = wt;
      if (wt |= 4, qy(r.current), Fo(
        r,
        r.current,
        m,
        u
      ), wt = v, ac(0, !1), ra && typeof ra.onPostCommitFiberRoot == "function")
        try {
          ra.onPostCommitFiberRoot(li, r);
        } catch {
        }
      return !0;
    } finally {
      Q.p = s, O.T = i, yv(l, n);
    }
  }
  function vv(l, n, u) {
    n = Ra(u, n), n = py(l.stateNode, n, 2), l = Ha(l, n, 2), l !== null && (mo(l, 2), gu(l));
  }
  function le(l, n, u) {
    if (l.tag === 3)
      vv(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          vv(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var i = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Me === null || !Me.has(i))) {
            l = Ra(u, l), u = vy(2), i = Ha(n, u, 2), i !== null && (gy(
              u,
              i,
              n,
              l
            ), mo(i, 2), gu(i));
            break;
          }
        }
        n = n.return;
      }
  }
  function ks(l, n, u) {
    var i = l.pingCache;
    if (i === null) {
      i = l.pingCache = new Yy();
      var s = /* @__PURE__ */ new Set();
      i.set(n, s);
    } else
      s = i.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), i.set(n, s));
    s.has(u) || (Pd = !0, s.add(u), l = Xy.bind(null, l, n, u), n.then(l, l));
  }
  function Xy(l, n, u) {
    var i = l.pingCache;
    i !== null && i.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, ie === l && (_t & u) === u && (ve === 4 || ve === 3 && (_t & 62914560) === _t && 300 > Ul() - Nn ? (wt & 2) === 0 && vu(l, 0) : th |= u, Ne === _t && (Ne = 0)), gu(l);
  }
  function gv(l, n) {
    n === 0 && (n = ai()), l = Qu(l, n), l !== null && (mo(l, n), gu(l));
  }
  function ja(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), gv(l, u);
  }
  function Sv(l, n) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var i = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        i = l.stateNode;
        break;
      case 22:
        i = l.stateNode._retryCache;
        break;
      default:
        throw Error(B(314));
    }
    i !== null && i.delete(n), gv(l, u);
  }
  function bv(l, n) {
    return me(l, n);
  }
  var uf = null, Qi = null, Qy = !1, ch = !1, Vy = !1, lc = 0;
  function gu(l) {
    l !== Qi && l.next === null && (Qi === null ? uf = Qi = l : Qi = Qi.next = l), ch = !0, Qy || (Qy = !0, Is());
  }
  function ac(l, n) {
    if (!Vy && ch) {
      Vy = !0;
      do
        for (var u = !1, i = uf; i !== null; ) {
          if (l !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var m = i.suspendedLanes, v = i.pingedLanes;
              r = (1 << 31 - Kl(42 | l) + 1) - 1, r &= s & ~(m & ~v), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, Vi(i, r));
          } else
            r = _t, r = Je(
              i,
              i === ie ? r : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (r & 3) === 0 || mn(i, r) || (u = !0, Vi(i, r));
          i = i.next;
        }
      while (u);
      Vy = !1;
    }
  }
  function ih() {
    Zy();
  }
  function Zy() {
    ch = Qy = !1;
    var l = 0;
    lc !== 0 && kg() && (l = lc);
    for (var n = Ul(), u = null, i = uf; i !== null; ) {
      var s = i.next, r = Ly(i, n);
      r === 0 ? (i.next = null, u === null ? uf = s : u.next = s, s === null && (Qi = u)) : (u = i, (l !== 0 || (r & 3) !== 0) && (ch = !0)), i = s;
    }
    cl !== 0 && cl !== 5 || ac(l), lc !== 0 && (lc = 0);
  }
  function Ly(l, n) {
    for (var u = l.suspendedLanes, i = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var m = 31 - Kl(r), v = 1 << m, T = s[m];
      T === -1 ? ((v & u) === 0 || (v & i) !== 0) && (s[m] = ho(v, n)) : T <= n && (l.expiredLanes |= v), r &= ~v;
    }
    if (n = ie, u = _t, u = Je(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), i = l.callbackNode, u === 0 || l === n && (ee === 2 || ee === 9) || l.cancelPendingCommit !== null)
      return i !== null && i !== null && om(i), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || mn(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (i !== null && om(i), rm(u)) {
        case 2:
        case 8:
          u = jr;
          break;
        case 32:
          u = dc;
          break;
        case 268435456:
          u = fm;
          break;
        default:
          u = dc;
      }
      return i = Fs.bind(null, l), u = me(u, i), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return i !== null && i !== null && om(i), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Fs(l, n) {
    if (cl !== 0 && cl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (nf() && l.callbackNode !== u)
      return null;
    var i = _t;
    return i = Je(
      l,
      l === ie ? i : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), i === 0 ? null : (lv(l, i, n), Ly(l, Ul()), l.callbackNode != null && l.callbackNode === u ? Fs.bind(null, l) : null);
  }
  function Vi(l, n) {
    if (nf()) return null;
    lv(l, n, !0);
  }
  function Is() {
    Rv(function() {
      (wt & 6) !== 0 ? me(
        Yr,
        ih
      ) : Zy();
    });
  }
  function oh() {
    if (lc === 0) {
      var l = Dc;
      l === 0 && (l = qu, qu <<= 1, (qu & 261888) === 0 && (qu = 256)), lc = l;
    }
    return lc;
  }
  function Tv(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : ka("" + l);
  }
  function Zi(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function Ps(l, n, u, i, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = Tv(
        (s[$l] || null).action
      ), m = i.submitter;
      m && (n = (n = m[$l] || null) ? Tv(n.formAction) : m.getAttribute("formAction"), n !== null && (r = n, m = null));
      var v = new ns(
        "action",
        "action",
        null,
        i,
        s
      );
      l.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (i.defaultPrevented) {
                if (lc !== 0) {
                  var T = m ? Zi(s, m) : new FormData(s);
                  Zo(
                    u,
                    {
                      pending: !0,
                      data: T,
                      method: s.method,
                      action: r
                    },
                    null,
                    T
                  );
                }
              } else
                typeof r == "function" && (v.preventDefault(), T = m ? Zi(s, m) : new FormData(s), Zo(
                  u,
                  {
                    pending: !0,
                    data: T,
                    method: s.method,
                    action: r
                  },
                  r,
                  T
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var fh = 0; fh < Ro.length; fh++) {
    var cf = Ro[fh], wy = cf.toLowerCase(), Jy = cf[0].toUpperCase() + cf.slice(1);
    kl(
      wy,
      "on" + Jy
    );
  }
  kl(fs, "onAnimationEnd"), kl(jm, "onAnimationIteration"), kl(fd, "onAnimationStart"), kl("dblclick", "onDoubleClick"), kl("focusin", "onFocus"), kl("focusout", "onBlur"), kl(gi, "onTransitionRun"), kl(ss, "onTransitionStart"), kl(In, "onTransitionCancel"), kl(Hp, "onTransitionEnd"), Kn("onMouseEnter", ["mouseout", "mouseover"]), Kn("onMouseLeave", ["mouseout", "mouseover"]), Kn("onPointerEnter", ["pointerout", "pointerover"]), Kn("onPointerLeave", ["pointerout", "pointerover"]), pc(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), pc(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), pc("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), pc(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), pc(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), pc(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var of = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Ev = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(of)
  );
  function Av(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var i = l[u], s = i.event;
      i = i.listeners;
      t: {
        var r = void 0;
        if (n)
          for (var m = i.length - 1; 0 <= m; m--) {
            var v = i[m], T = v.instance, U = v.currentTarget;
            if (v = v.listener, T !== r && s.isPropagationStopped())
              break t;
            r = v, s.currentTarget = U;
            try {
              r(s);
            } catch (q) {
              Si(q);
            }
            s.currentTarget = null, r = T;
          }
        else
          for (m = 0; m < i.length; m++) {
            if (v = i[m], T = v.instance, U = v.currentTarget, v = v.listener, T !== r && s.isPropagationStopped())
              break t;
            r = v, s.currentTarget = U;
            try {
              r(s);
            } catch (q) {
              Si(q);
            }
            s.currentTarget = null, r = T;
          }
      }
    }
  }
  function Bt(l, n) {
    var u = n[Vr];
    u === void 0 && (u = n[Vr] = /* @__PURE__ */ new Set());
    var i = l + "__bubble";
    u.has(i) || (tr(n, l, 2, !1), u.add(i));
  }
  function Ky(l, n, u) {
    var i = 0;
    n && (i |= 4), tr(
      u,
      l,
      i,
      n
    );
  }
  var sh = "_reactListening" + Math.random().toString(36).slice(2);
  function ff(l) {
    if (!l[sh]) {
      l[sh] = !0, ii.forEach(function(u) {
        u !== "selectionchange" && (Ev.has(u) || Ky(u, !1, l), Ky(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[sh] || (n[sh] = !0, Ky("selectionchange", !1, n));
    }
  }
  function tr(l, n, u, i) {
    switch (fr(n)) {
      case 2:
        var s = bu;
        break;
      case 8:
        s = Tu;
        break;
      default:
        s = Hl;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !ls || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), i ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function $y(l, n, u, i, s) {
    var r = i;
    if ((n & 1) === 0 && (n & 2) === 0 && i !== null)
      t: for (; ; ) {
        if (i === null) return;
        var m = i.tag;
        if (m === 3 || m === 4) {
          var v = i.stateNode.containerInfo;
          if (v === s) break;
          if (m === 4)
            for (m = i.return; m !== null; ) {
              var T = m.tag;
              if ((T === 3 || T === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; v !== null; ) {
            if (m = ni(v), m === null) return;
            if (T = m.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              i = r = m;
              continue t;
            }
            v = v.parentNode;
          }
        }
        i = i.return;
      }
    bm(function() {
      var U = r, q = kr(u), X = [];
      t: {
        var C = Pn.get(l);
        if (C !== void 0) {
          var x = ns, P = l;
          switch (l) {
            case "keypress":
              if (Ir(u) === 0) break t;
            case "keydown":
            case "keyup":
              x = ld;
              break;
            case "focusin":
              P = "focus", x = td;
              break;
            case "focusout":
              P = "blur", x = td;
              break;
            case "beforeblur":
            case "afterblur":
              x = td;
              break;
            case "click":
              if (u.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              x = Ao;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              x = bp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              x = Dp;
              break;
            case fs:
            case jm:
            case fd:
              x = Ep;
              break;
            case Hp:
              x = Lg;
              break;
            case "scroll":
            case "scrollend":
              x = Vg;
              break;
            case "wheel":
              x = wg;
              break;
            case "copy":
            case "cut":
            case "paste":
              x = ri;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              x = Sn;
              break;
            case "toggle":
            case "beforetoggle":
              x = Um;
          }
          var st = (n & 4) !== 0, fe = !st && (l === "scroll" || l === "scrollend"), M = st ? C !== null ? C + "Capture" : null : C;
          st = [];
          for (var z = U, R; z !== null; ) {
            var G = z;
            if (R = G.stateNode, G = G.tag, G !== 5 && G !== 26 && G !== 27 || R === null || M === null || (G = ml(z, M), G != null && st.push(
              er(z, G, R)
            )), fe) break;
            z = z.return;
          }
          0 < st.length && (C = new x(
            C,
            P,
            null,
            u,
            q
          ), X.push({ event: C, listeners: st }));
        }
      }
      if ((n & 7) === 0) {
        t: {
          if (C = l === "mouseover" || l === "pointerover", x = l === "mouseout" || l === "pointerout", C && u !== Wr && (P = u.relatedTarget || u.fromElement) && (ni(P) || P[mc]))
            break t;
          if ((x || C) && (C = q.window === q ? q : (C = q.ownerDocument) ? C.defaultView || C.parentWindow : window, x ? (P = u.relatedTarget || u.toElement, x = U, P = P ? ni(P) : null, P !== null && (fe = he(P), st = P.tag, P !== fe || st !== 5 && st !== 27 && st !== 6) && (P = null)) : (x = null, P = U), x !== P)) {
            if (st = Ao, G = "onMouseLeave", M = "onMouseEnter", z = "mouse", (l === "pointerout" || l === "pointerover") && (st = Sn, G = "onPointerLeave", M = "onPointerEnter", z = "pointer"), fe = x == null ? C : yo(x), R = P == null ? C : yo(P), C = new st(
              G,
              z + "leave",
              x,
              u,
              q
            ), C.target = fe, C.relatedTarget = R, G = null, ni(q) === U && (st = new st(
              M,
              z + "enter",
              P,
              u,
              q
            ), st.target = R, st.relatedTarget = fe, G = st), fe = G, x && P)
              e: {
                for (st = zv, M = x, z = P, R = 0, G = M; G; G = st(G))
                  R++;
                G = 0;
                for (var nt = z; nt; nt = st(nt))
                  G++;
                for (; 0 < R - G; )
                  M = st(M), R--;
                for (; 0 < G - R; )
                  z = st(z), G--;
                for (; R--; ) {
                  if (M === z || z !== null && M === z.alternate) {
                    st = M;
                    break e;
                  }
                  M = st(M), z = st(z);
                }
                st = null;
              }
            else st = null;
            x !== null && rh(
              X,
              C,
              x,
              st,
              !1
            ), P !== null && fe !== null && rh(
              X,
              fe,
              P,
              st,
              !0
            );
          }
        }
        t: {
          if (C = U ? yo(U) : window, x = C.nodeName && C.nodeName.toLowerCase(), x === "select" || x === "input" && C.type === "file")
            var Zt = Nm;
          else if (Fn(C))
            if (ud)
              Zt = pi;
            else {
              Zt = Cp;
              var tt = Up;
            }
          else
            x = C.nodeName, !x || x.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? U && Sm(U.elementType) && (Zt = Nm) : Zt = bc;
          if (Zt && (Zt = Zt(l, U))) {
            Bm(
              X,
              Zt,
              u,
              q
            );
            break t;
          }
          tt && tt(l, C, U), l === "focusout" && U && C.type === "number" && U.memoizedProps.value != null && oi(C, "number", C.value);
        }
        switch (tt = U ? yo(U) : window, l) {
          case "focusin":
            (Fn(tt) || tt.contentEditable === "true") && (Ec = tt, Oo = U, Pa = null);
            break;
          case "focusout":
            Pa = Oo = Ec = null;
            break;
          case "mousedown":
            Tn = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Tn = !1, od(X, u, q);
            break;
          case "selectionchange":
            if (os) break;
          case "keydown":
          case "keyup":
            od(X, u, q);
        }
        var bt;
        if (zo)
          t: {
            switch (l) {
              case "compositionstart":
                var zt = "onCompositionStart";
                break t;
              case "compositionend":
                zt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                zt = "onCompositionUpdate";
                break t;
            }
            zt = void 0;
          }
        else
          hi ? nd(l, u) && (zt = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (zt = "onCompositionStart");
        zt && (Cm && u.locale !== "ko" && (hi || zt !== "onCompositionStart" ? zt === "onCompositionEnd" && hi && (bt = Em()) : (Gu = q, Tm = "value" in Gu ? Gu.value : Gu.textContent, hi = !0)), tt = lr(U, zt), 0 < tt.length && (zt = new Ap(
          zt,
          l,
          null,
          u,
          q
        ), X.push({ event: zt, listeners: tt }), bt ? zt.data = bt : (bt = _m(u), bt !== null && (zt.data = bt)))), (bt = Yl ? Rp(l, u) : Jg(l, u)) && (zt = lr(U, "onBeforeInput"), 0 < zt.length && (tt = new Ap(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          q
        ), X.push({
          event: tt,
          listeners: zt
        }), tt.data = bt)), Ps(
          X,
          l,
          U,
          u,
          q
        );
      }
      Av(X, n);
    });
  }
  function er(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function lr(l, n) {
    for (var u = n + "Capture", i = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = ml(l, u), s != null && i.unshift(
        er(l, s, r)
      ), s = ml(l, n), s != null && i.push(
        er(l, s, r)
      )), l.tag === 3) return i;
      l = l.return;
    }
    return [];
  }
  function zv(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function rh(l, n, u, i, s) {
    for (var r = n._reactName, m = []; u !== null && u !== i; ) {
      var v = u, T = v.alternate, U = v.stateNode;
      if (v = v.tag, T !== null && T === i) break;
      v !== 5 && v !== 26 && v !== 27 || U === null || (T = U, s ? (U = ml(u, r), U != null && m.unshift(
        er(u, U, T)
      )) : s || (U = ml(u, r), U != null && m.push(
        er(u, U, T)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var Dv = /\r\n?/g, Wy = /\u0000|\uFFFD/g;
  function ky(l) {
    return (typeof l == "string" ? l : "" + l).replace(Dv, `
`).replace(Wy, "");
  }
  function Fy(l, n) {
    return n = ky(n), ky(l) === n;
  }
  function oe(l, n, u, i, s, r) {
    switch (u) {
      case "children":
        typeof i == "string" ? n === "body" || n === "textarea" && i === "" || $n(l, i) : (typeof i == "number" || typeof i == "bigint") && n !== "body" && $n(l, "" + i);
        break;
      case "className":
        Jr(l, "class", i);
        break;
      case "tabIndex":
        Jr(l, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Jr(l, u, i);
        break;
      case "style":
        vp(l, i, r);
        break;
      case "data":
        if (n !== "object") {
          Jr(l, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
          l.removeAttribute(u);
          break;
        }
        i = ka("" + i), l.setAttribute(u, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (n !== "input" && oe(l, n, "name", s.name, s, null), oe(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), oe(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), oe(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (oe(l, n, "encType", s.encType, s, null), oe(l, n, "method", s.method, s, null), oe(l, n, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          l.removeAttribute(u);
          break;
        }
        i = ka("" + i), l.setAttribute(u, i);
        break;
      case "onClick":
        i != null && (l.onclick = pn);
        break;
      case "onScroll":
        i != null && Bt("scroll", l);
        break;
      case "onScrollEnd":
        i != null && Bt("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(B(61));
          if (u = i.__html, u != null) {
            if (s.children != null) throw Error(B(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        l.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = ka("" + i), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol" ? l.setAttribute(u, "" + i) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        i === !0 ? l.setAttribute(u, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? l.setAttribute(u, i) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? l.setAttribute(u, i) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? l.removeAttribute(u) : l.setAttribute(u, i);
        break;
      case "popover":
        Bt("beforetoggle", l), Bt("toggle", l), go(l, "popover", i);
        break;
      case "xlinkActuate":
        Yu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          i
        );
        break;
      case "xlinkArcrole":
        Yu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          i
        );
        break;
      case "xlinkRole":
        Yu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          i
        );
        break;
      case "xlinkShow":
        Yu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          i
        );
        break;
      case "xlinkTitle":
        Yu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          i
        );
        break;
      case "xlinkType":
        Yu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          i
        );
        break;
      case "xmlBase":
        Yu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          i
        );
        break;
      case "xmlLang":
        Yu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          i
        );
        break;
      case "xmlSpace":
        Yu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          i
        );
        break;
      case "is":
        go(l, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Qg.get(u) || u, go(l, u, i));
    }
  }
  function Iy(l, n, u, i, s, r) {
    switch (u) {
      case "style":
        vp(l, i, r);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(B(61));
          if (u = i.__html, u != null) {
            if (s.children != null) throw Error(B(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof i == "string" ? $n(l, i) : (typeof i == "number" || typeof i == "bigint") && $n(l, "" + i);
        break;
      case "onScroll":
        i != null && Bt("scroll", l);
        break;
      case "onScrollEnd":
        i != null && Bt("scrollend", l);
        break;
      case "onClick":
        i != null && (l.onclick = pn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!yc.hasOwnProperty(u))
          t: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[$l] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof i == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, i, s);
              break t;
            }
            u in l ? l[u] = i : i === !0 ? l.setAttribute(u, "") : go(l, u, i);
          }
    }
  }
  function _l(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Bt("error", l), Bt("load", l);
        var i = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var m = u[r];
            if (m != null)
              switch (r) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(B(137, n));
                default:
                  oe(l, n, r, m, u, null);
              }
          }
        s && oe(l, n, "srcSet", u.srcSet, u, null), i && oe(l, n, "src", u.src, u, null);
        return;
      case "input":
        Bt("invalid", l);
        var v = r = m = s = null, T = null, U = null;
        for (i in u)
          if (u.hasOwnProperty(i)) {
            var q = u[i];
            if (q != null)
              switch (i) {
                case "name":
                  s = q;
                  break;
                case "type":
                  m = q;
                  break;
                case "checked":
                  T = q;
                  break;
                case "defaultChecked":
                  U = q;
                  break;
                case "value":
                  r = q;
                  break;
                case "defaultValue":
                  v = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null)
                    throw Error(B(137, n));
                  break;
                default:
                  oe(l, n, i, q, u, null);
              }
          }
        Pf(
          l,
          r,
          v,
          T,
          U,
          m,
          s,
          !1
        );
        return;
      case "select":
        Bt("invalid", l), i = m = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (v = u[s], v != null))
            switch (s) {
              case "value":
                r = v;
                break;
              case "defaultValue":
                m = v;
                break;
              case "multiple":
                i = v;
              default:
                oe(l, n, s, v, u, null);
            }
        n = r, u = m, l.multiple = !!i, n != null ? So(l, !!i, n, !1) : u != null && So(l, !!i, u, !0);
        return;
      case "textarea":
        Bt("invalid", l), r = s = i = null;
        for (m in u)
          if (u.hasOwnProperty(m) && (v = u[m], v != null))
            switch (m) {
              case "value":
                i = v;
                break;
              case "defaultValue":
                s = v;
                break;
              case "children":
                r = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(B(91));
                break;
              default:
                oe(l, n, m, v, u, null);
            }
        gm(l, i, s, r);
        return;
      case "option":
        for (T in u)
          if (u.hasOwnProperty(T) && (i = u[T], i != null))
            switch (T) {
              case "selected":
                l.selected = i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                oe(l, n, T, i, u, null);
            }
        return;
      case "dialog":
        Bt("beforetoggle", l), Bt("toggle", l), Bt("cancel", l), Bt("close", l);
        break;
      case "iframe":
      case "object":
        Bt("load", l);
        break;
      case "video":
      case "audio":
        for (i = 0; i < of.length; i++)
          Bt(of[i], l);
        break;
      case "image":
        Bt("error", l), Bt("load", l);
        break;
      case "details":
        Bt("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        Bt("error", l), Bt("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (U in u)
          if (u.hasOwnProperty(U) && (i = u[U], i != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(B(137, n));
              default:
                oe(l, n, U, i, u, null);
            }
        return;
      default:
        if (Sm(n)) {
          for (q in u)
            u.hasOwnProperty(q) && (i = u[q], i !== void 0 && Iy(
              l,
              n,
              q,
              i,
              u,
              void 0
            ));
          return;
        }
    }
    for (v in u)
      u.hasOwnProperty(v) && (i = u[v], i != null && oe(l, n, v, i, u, null));
  }
  function Py(l, n, u, i) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, r = null, m = null, v = null, T = null, U = null, q = null;
        for (x in u) {
          var X = u[x];
          if (u.hasOwnProperty(x) && X != null)
            switch (x) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = X;
              default:
                i.hasOwnProperty(x) || oe(l, n, x, null, i, X);
            }
        }
        for (var C in i) {
          var x = i[C];
          if (X = u[C], i.hasOwnProperty(C) && (x != null || X != null))
            switch (C) {
              case "type":
                r = x;
                break;
              case "name":
                s = x;
                break;
              case "checked":
                U = x;
                break;
              case "defaultChecked":
                q = x;
                break;
              case "value":
                m = x;
                break;
              case "defaultValue":
                v = x;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(B(137, n));
                break;
              default:
                x !== X && oe(
                  l,
                  n,
                  C,
                  x,
                  i,
                  X
                );
            }
        }
        If(
          l,
          m,
          v,
          T,
          U,
          q,
          r,
          s
        );
        return;
      case "select":
        x = m = v = C = null;
        for (r in u)
          if (T = u[r], u.hasOwnProperty(r) && T != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                x = T;
              default:
                i.hasOwnProperty(r) || oe(
                  l,
                  n,
                  r,
                  null,
                  i,
                  T
                );
            }
        for (s in i)
          if (r = i[s], T = u[s], i.hasOwnProperty(s) && (r != null || T != null))
            switch (s) {
              case "value":
                C = r;
                break;
              case "defaultValue":
                v = r;
                break;
              case "multiple":
                m = r;
              default:
                r !== T && oe(
                  l,
                  n,
                  s,
                  r,
                  i,
                  T
                );
            }
        n = v, u = m, i = x, C != null ? So(l, !!u, C, !1) : !!i != !!u && (n != null ? So(l, !!u, n, !0) : So(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        x = C = null;
        for (v in u)
          if (s = u[v], u.hasOwnProperty(v) && s != null && !i.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                oe(l, n, v, null, i, s);
            }
        for (m in i)
          if (s = i[m], r = u[m], i.hasOwnProperty(m) && (s != null || r != null))
            switch (m) {
              case "value":
                C = s;
                break;
              case "defaultValue":
                x = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(B(91));
                break;
              default:
                s !== r && oe(l, n, m, s, i, r);
            }
        vm(l, C, x);
        return;
      case "option":
        for (var P in u)
          if (C = u[P], u.hasOwnProperty(P) && C != null && !i.hasOwnProperty(P))
            switch (P) {
              case "selected":
                l.selected = !1;
                break;
              default:
                oe(
                  l,
                  n,
                  P,
                  null,
                  i,
                  C
                );
            }
        for (T in i)
          if (C = i[T], x = u[T], i.hasOwnProperty(T) && C !== x && (C != null || x != null))
            switch (T) {
              case "selected":
                l.selected = C && typeof C != "function" && typeof C != "symbol";
                break;
              default:
                oe(
                  l,
                  n,
                  T,
                  C,
                  i,
                  x
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var st in u)
          C = u[st], u.hasOwnProperty(st) && C != null && !i.hasOwnProperty(st) && oe(l, n, st, null, i, C);
        for (U in i)
          if (C = i[U], x = u[U], i.hasOwnProperty(U) && C !== x && (C != null || x != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(B(137, n));
                break;
              default:
                oe(
                  l,
                  n,
                  U,
                  C,
                  i,
                  x
                );
            }
        return;
      default:
        if (Sm(n)) {
          for (var fe in u)
            C = u[fe], u.hasOwnProperty(fe) && C !== void 0 && !i.hasOwnProperty(fe) && Iy(
              l,
              n,
              fe,
              void 0,
              i,
              C
            );
          for (q in i)
            C = i[q], x = u[q], !i.hasOwnProperty(q) || C === x || C === void 0 && x === void 0 || Iy(
              l,
              n,
              q,
              C,
              i,
              x
            );
          return;
        }
    }
    for (var M in u)
      C = u[M], u.hasOwnProperty(M) && C != null && !i.hasOwnProperty(M) && oe(l, n, M, null, i, C);
    for (X in i)
      C = i[X], x = u[X], !i.hasOwnProperty(X) || C === x || C == null && x == null || oe(l, n, X, C, i, x);
  }
  function dh(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function t0() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, n = 0, u = performance.getEntriesByType("resource"), i = 0; i < u.length; i++) {
        var s = u[i], r = s.transferSize, m = s.initiatorType, v = s.duration;
        if (r && v && dh(m)) {
          for (m = 0, v = s.responseEnd, i += 1; i < u.length; i++) {
            var T = u[i], U = T.startTime;
            if (U > v) break;
            var q = T.transferSize, X = T.initiatorType;
            q && dh(X) && (T = T.responseEnd, m += q * (T < v ? 1 : (v - U) / (T - U)));
          }
          if (--i, n += 8 * (r + m) / (s.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return n / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var hh = null, mh = null;
  function Lc(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Ov(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function e0(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function sf(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var yh = null;
  function kg() {
    var l = window.event;
    return l && l.type === "popstate" ? l === yh ? !1 : (yh = l, !0) : (yh = null, !1);
  }
  var ar = typeof setTimeout == "function" ? setTimeout : void 0, Mv = typeof clearTimeout == "function" ? clearTimeout : void 0, Li = typeof Promise == "function" ? Promise : void 0, Rv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Li < "u" ? function(l) {
    return Li.resolve(null).then(l).catch(l0);
  } : ar;
  function l0(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function xn(l) {
    return l === "head";
  }
  function a0(l, n) {
    var u = n, i = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$" || u === "/&") {
          if (i === 0) {
            l.removeChild(s), Ef(n);
            return;
          }
          i--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          i++;
        else if (u === "html")
          wi(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, wi(u);
          for (var r = u.firstChild; r; ) {
            var m = r.nextSibling, v = r.nodeName;
            r[Jn] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && r.rel.toLowerCase() === "stylesheet" || u.removeChild(r), r = m;
          }
        } else
          u === "body" && wi(l.ownerDocument.body);
      u = s;
    } while (u);
    Ef(n);
  }
  function Fe(l, n) {
    var u = l;
    l = 0;
    do {
      var i = u.nextSibling;
      if (u.nodeType === 1 ? n ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (n ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), i && i.nodeType === 8)
        if (u = i.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = i;
    } while (u);
  }
  function nr(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          nr(u), Zr(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Fg(l, n, u, i) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!i && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (i) {
        if (!l[Jn])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = oa(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Ot(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = oa(l.nextSibling), l === null)) return null;
    return l;
  }
  function Uv(l, n) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !n || (l = oa(l.nextSibling), l === null)) return null;
    return l;
  }
  function on(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function wc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function rf(l, n) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = n;
    else if (l.data !== "$?" || u.readyState !== "loading")
      n();
    else {
      var i = function() {
        n(), u.removeEventListener("DOMContentLoaded", i);
      };
      u.addEventListener("DOMContentLoaded", i), l._reactRetry = i;
    }
  }
  function oa(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F")
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return l;
  }
  var ur = null;
  function ph(l) {
    l = l.nextSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (n === 0)
            return oa(l.nextSibling);
          n--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || n++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function qn(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (n === 0) return l;
          n--;
        } else u !== "/$" && u !== "/&" || n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function df(l, n, u) {
    switch (n = Lc(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(B(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(B(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(B(454));
        return l;
      default:
        throw Error(B(451));
    }
  }
  function wi(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    Zr(l);
  }
  var ga = /* @__PURE__ */ new Map(), cr = /* @__PURE__ */ new Set();
  function Xl(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Yn = Q.d;
  Q.d = {
    f: Ig,
    r: Cv,
    D: N,
    C: kt,
    L: Pg,
    m: n0,
    X: nc,
    S: u0,
    M: Jc
  };
  function Ig() {
    var l = Yn.f(), n = lf();
    return l || n;
  }
  function Cv(l) {
    var n = ui(l);
    n !== null && n.tag === 5 && n.type === "form" ? ce(n) : Yn.r(l);
  }
  var hf = typeof document > "u" ? null : document;
  function ll(l, n, u) {
    var i = hf;
    if (i && typeof n == "string" && n) {
      var s = Da(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), cr.has(s) || (cr.add(s), l = { rel: l, crossOrigin: u, href: n }, i.querySelector(s) === null && (n = i.createElement("link"), _l(n, "link", l), It(n), i.head.appendChild(n)));
    }
  }
  function N(l) {
    Yn.D(l), ll("dns-prefetch", l, null);
  }
  function kt(l, n) {
    Yn.C(l, n), ll("preconnect", l, n);
  }
  function Pg(l, n, u) {
    Yn.L(l, n, u);
    var i = hf;
    if (i && l && n) {
      var s = 'link[rel="preload"][as="' + Da(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + Da(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + Da(
        u.imageSizes
      ) + '"]')) : s += '[href="' + Da(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = Ga(l);
          break;
        case "script":
          r = Ji(l);
      }
      ga.has(r) || (l = ft(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), ga.set(r, l), i.querySelector(s) !== null || n === "style" && i.querySelector(Kc(r)) || n === "script" && i.querySelector(pf(r)) || (n = i.createElement("link"), _l(n, "link", l), It(n), i.head.appendChild(n)));
    }
  }
  function n0(l, n) {
    Yn.m(l, n);
    var u = hf;
    if (u && l) {
      var i = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + Da(i) + '"][href="' + Da(l) + '"]', r = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = Ji(l);
      }
      if (!ga.has(r) && (l = ft({ rel: "modulepreload", href: l }, n), ga.set(r, l), u.querySelector(s) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(pf(r)))
              return;
        }
        i = u.createElement("link"), _l(i, "link", l), It(i), u.head.appendChild(i);
      }
    }
  }
  function u0(l, n, u) {
    Yn.S(l, n, u);
    var i = hf;
    if (i && l) {
      var s = ci(i).hoistableStyles, r = Ga(l);
      n = n || "default";
      var m = s.get(r);
      if (!m) {
        var v = { loading: 0, preload: null };
        if (m = i.querySelector(
          Kc(r)
        ))
          v.loading = 5;
        else {
          l = ft(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = ga.get(r)) && vh(l, u);
          var T = m = i.createElement("link");
          It(T), _l(T, "link", l), T._p = new Promise(function(U, q) {
            T.onload = U, T.onerror = q;
          }), T.addEventListener("load", function() {
            v.loading |= 1;
          }), T.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, ir(m, n, i);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: v
        }, s.set(r, m);
      }
    }
  }
  function nc(l, n) {
    Yn.X(l, n);
    var u = hf;
    if (u && l) {
      var i = ci(u).hoistableScripts, s = Ji(l), r = i.get(s);
      r || (r = u.querySelector(pf(s)), r || (l = ft({ src: l, async: !0 }, n), (n = ga.get(s)) && gh(l, n), r = u.createElement("script"), It(r), _l(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, i.set(s, r));
    }
  }
  function Jc(l, n) {
    Yn.M(l, n);
    var u = hf;
    if (u && l) {
      var i = ci(u).hoistableScripts, s = Ji(l), r = i.get(s);
      r || (r = u.querySelector(pf(s)), r || (l = ft({ src: l, async: !0, type: "module" }, n), (n = ga.get(s)) && gh(l, n), r = u.createElement("script"), It(r), _l(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, i.set(s, r));
    }
  }
  function mf(l, n, u, i) {
    var s = (s = Ka.current) ? Xl(s) : null;
    if (!s) throw Error(B(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = Ga(u.href), u = ci(
          s
        ).hoistableStyles, i = u.get(n), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Ga(u.href);
          var r = ci(
            s
          ).hoistableStyles, m = r.get(l);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, m), (r = s.querySelector(
            Kc(l)
          )) && !r._p && (m.instance = r, m.state.loading = 5), ga.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, ga.set(l, u), r || _v(
            s,
            l,
            u,
            m.state
          ))), n && i === null)
            throw Error(B(528, ""));
          return m;
        }
        if (n && i !== null)
          throw Error(B(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Ji(u), u = ci(
          s
        ).hoistableScripts, i = u.get(n), i || (i = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(B(444, l));
    }
  }
  function Ga(l) {
    return 'href="' + Da(l) + '"';
  }
  function Kc(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function yf(l) {
    return ft({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function _v(l, n, u, i) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? i.loading = 1 : (n = l.createElement("link"), i.preload = n, n.addEventListener("load", function() {
      return i.loading |= 1;
    }), n.addEventListener("error", function() {
      return i.loading |= 2;
    }), _l(n, "link", u), It(n), l.head.appendChild(n));
  }
  function Ji(l) {
    return '[src="' + Da(l) + '"]';
  }
  function pf(l) {
    return "script[async]" + l;
  }
  function c0(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var i = l.querySelector(
            'style[data-href~="' + Da(u.href) + '"]'
          );
          if (i)
            return n.instance = i, It(i), i;
          var s = ft({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return i = (l.ownerDocument || l).createElement(
            "style"
          ), It(i), _l(i, "style", s), ir(i, u.precedence, l), n.instance = i;
        case "stylesheet":
          s = Ga(u.href);
          var r = l.querySelector(
            Kc(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, It(r), r;
          i = yf(u), (s = ga.get(s)) && vh(i, s), r = (l.ownerDocument || l).createElement("link"), It(r);
          var m = r;
          return m._p = new Promise(function(v, T) {
            m.onload = v, m.onerror = T;
          }), _l(r, "link", i), n.state.loading |= 4, ir(r, u.precedence, l), n.instance = r;
        case "script":
          return r = Ji(u.src), (s = l.querySelector(
            pf(r)
          )) ? (n.instance = s, It(s), s) : (i = u, (s = ga.get(r)) && (i = ft({}, u), gh(i, s)), l = l.ownerDocument || l, s = l.createElement("script"), It(s), _l(s, "link", i), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(B(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (i = n.instance, n.state.loading |= 4, ir(i, u.precedence, l));
    return n.instance;
  }
  function ir(l, n, u) {
    for (var i = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = i.length ? i[i.length - 1] : null, r = s, m = 0; m < i.length; m++) {
      var v = i[m];
      if (v.dataset.precedence === n) r = v;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function vh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function gh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var vf = null;
  function i0(l, n, u) {
    if (vf === null) {
      var i = /* @__PURE__ */ new Map(), s = vf = /* @__PURE__ */ new Map();
      s.set(u, i);
    } else
      s = vf, i = s.get(u), i || (i = /* @__PURE__ */ new Map(), s.set(u, i));
    if (i.has(l)) return i;
    for (i.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[Jn] || r[ue] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = r.getAttribute(n) || "";
        m = l + m;
        var v = i.get(m);
        v ? v.push(r) : i.set(m, [r]);
      }
    }
    return i;
  }
  function Sh(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function o0(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return l = n.disabled, typeof n.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function Sa(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Su(l, n, u, i) {
    if (u.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var s = Ga(i.href), r = n.querySelector(
          Kc(s)
        );
        if (r) {
          n = r._p, n !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = bh.bind(l), n.then(l, l)), u.state.loading |= 4, u.instance = r, It(r);
          return;
        }
        r = n.ownerDocument || n, i = yf(i), (s = ga.get(s)) && vh(i, s), r = r.createElement("link"), It(r);
        var m = r;
        m._p = new Promise(function(v, T) {
          m.onload = v, m.onerror = T;
        }), _l(r, "link", i), u.instance = r;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, n), (n = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = bh.bind(l), n.addEventListener("load", u), n.addEventListener("error", u));
    }
  }
  var Xa = 0;
  function f0(l, n) {
    return l.stylesheets && l.count === 0 && Eh(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var i = setTimeout(function() {
        if (l.stylesheets && Eh(l, l.stylesheets), l.unsuspend) {
          var r = l.unsuspend;
          l.unsuspend = null, r();
        }
      }, 6e4 + n);
      0 < l.imgBytes && Xa === 0 && (Xa = 62500 * t0());
      var s = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Eh(l, l.stylesheets), l.unsuspend)) {
            var r = l.unsuspend;
            l.unsuspend = null, r();
          }
        },
        (l.imgBytes > Xa ? 50 : 800) + n
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(i), clearTimeout(s);
      };
    } : null;
  }
  function bh() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Eh(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Th = null;
  function Eh(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Th = /* @__PURE__ */ new Map(), n.forEach(Tl, l), Th = null, bh.call(l));
  }
  function Tl(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Th.get(l);
      if (u) var i = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Th.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var m = s[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), i = m);
        }
        i && u.set(null, i);
      }
      s = n.instance, m = s.getAttribute("data-precedence"), r = u.get(m) || i, r === i && u.set(null, s), u.set(m, s), this.count++, i = bh.bind(this), s.addEventListener("load", i), s.addEventListener("error", i), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var or = {
    $$typeof: He,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0
  };
  function s0(l, n, u, i, s, r, m, v, T) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Wf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wf(0), this.hiddenUpdates = Wf(null), this.identifierPrefix = i, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ah(l, n, u, i, s, r, m, v, T, U, q, X) {
    return l = new s0(
      l,
      n,
      u,
      m,
      T,
      U,
      q,
      X,
      v
    ), n = 1, r === !0 && (n |= 24), r = Qe(3, null, null, n), l.current = r, r.stateNode = l, n = ps(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: i,
      isDehydrated: u,
      cache: n
    }, As(r), l;
  }
  function Ki(l) {
    return l ? (l = Fl, l) : Fl;
  }
  function Hv(l, n, u, i, s, r) {
    s = Ki(s), i.context === null ? i.context = s : i.pendingContext = s, i = $u(n), i.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (i.callback = r), u = Ha(l, i, n), u !== null && (ia(u, l, n), _c(u, l, n));
  }
  function zh(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function r0(l, n) {
    zh(l, n), (l = l.alternate) && zh(l, n);
  }
  function Bv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = Qu(l, 67108864);
      n !== null && ia(n, l, 67108864), r0(l, 67108864);
    }
  }
  function $i(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = va();
      n = Xr(n);
      var u = Qu(l, n);
      u !== null && ia(u, l, n), r0(l, n);
    }
  }
  var il = !0;
  function bu(l, n, u, i) {
    var s = O.T;
    O.T = null;
    var r = Q.p;
    try {
      Q.p = 2, Hl(l, n, u, i);
    } finally {
      Q.p = r, O.T = s;
    }
  }
  function Tu(l, n, u, i) {
    var s = O.T;
    O.T = null;
    var r = Q.p;
    try {
      Q.p = 8, Hl(l, n, u, i);
    } finally {
      Q.p = r, O.T = s;
    }
  }
  function Hl(l, n, u, i) {
    if (il) {
      var s = d0(i);
      if (s === null)
        $y(
          l,
          n,
          i,
          Dh,
          u
        ), uc(l, i);
      else if (t1(
        s,
        l,
        n,
        u,
        i
      ))
        i.stopPropagation();
      else if (uc(l, i), n & 4 && -1 < fa.indexOf(l)) {
        for (; s !== null; ) {
          var r = ui(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var m = Wa(r.pendingLanes);
                  if (m !== 0) {
                    var v = r;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; m; ) {
                      var T = 1 << 31 - Kl(m);
                      v.entanglements[1] |= T, m &= ~T;
                    }
                    gu(r), (wt & 6) === 0 && (Wt = Ul() + 500, ac(0));
                  }
                }
                break;
              case 31:
              case 13:
                v = Qu(r, 2), v !== null && ia(v, r, 2), lf(), r0(r, 2);
            }
          if (r = d0(i), r === null && $y(
            l,
            n,
            i,
            Dh,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && i.stopPropagation();
      } else
        $y(
          l,
          n,
          i,
          null,
          u
        );
    }
  }
  function d0(l) {
    return l = kr(l), gf(l);
  }
  var Dh = null;
  function gf(l) {
    if (Dh = null, l = ni(l), l !== null) {
      var n = he(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = Ye(n), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = J(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Dh = l, null;
  }
  function fr(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (jg()) {
          case Yr:
            return 2;
          case jr:
            return 8;
          case dc:
          case Gg:
            return 32;
          case fm:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Sf = !1, ol = null, Bl = null, Ql = null, $c = /* @__PURE__ */ new Map(), fn = /* @__PURE__ */ new Map(), Re = [], fa = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function uc(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        ol = null;
        break;
      case "dragenter":
      case "dragleave":
        Bl = null;
        break;
      case "mouseover":
      case "mouseout":
        Ql = null;
        break;
      case "pointerover":
      case "pointerout":
        $c.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        fn.delete(n.pointerId);
    }
  }
  function Wi(l, n, u, i, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: i,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = ui(n), n !== null && Bv(n)), l) : (l.eventSystemFlags |= i, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function t1(l, n, u, i, s) {
    switch (n) {
      case "focusin":
        return ol = Wi(
          ol,
          l,
          n,
          u,
          i,
          s
        ), !0;
      case "dragenter":
        return Bl = Wi(
          Bl,
          l,
          n,
          u,
          i,
          s
        ), !0;
      case "mouseover":
        return Ql = Wi(
          Ql,
          l,
          n,
          u,
          i,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return $c.set(
          r,
          Wi(
            $c.get(r) || null,
            l,
            n,
            u,
            i,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, fn.set(
          r,
          Wi(
            fn.get(r) || null,
            l,
            n,
            u,
            i,
            s
          )
        ), !0;
    }
    return !1;
  }
  function Nv(l) {
    var n = ni(l.target);
    if (n !== null) {
      var u = he(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = Ye(u), n !== null) {
            l.blockedOn = n, dm(l.priority, function() {
              $i(u);
            });
            return;
          }
        } else if (n === 31) {
          if (n = J(u), n !== null) {
            l.blockedOn = n, dm(l.priority, function() {
              $i(u);
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function sr(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = d0(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var i = new u.constructor(
          u.type,
          u
        );
        Wr = i, u.target.dispatchEvent(i), Wr = null;
      } else
        return n = ui(u), n !== null && Bv(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function bf(l, n, u) {
    sr(l) && u.delete(n);
  }
  function xv() {
    Sf = !1, ol !== null && sr(ol) && (ol = null), Bl !== null && sr(Bl) && (Bl = null), Ql !== null && sr(Ql) && (Ql = null), $c.forEach(bf), fn.forEach(bf);
  }
  function Eu(l, n) {
    l.blockedOn === n && (l.blockedOn = null, Sf || (Sf = !0, L.unstable_scheduleCallback(
      L.unstable_NormalPriority,
      xv
    )));
  }
  var Tf = null;
  function qv(l) {
    Tf !== l && (Tf = l, L.unstable_scheduleCallback(
      L.unstable_NormalPriority,
      function() {
        Tf === l && (Tf = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], i = l[n + 1], s = l[n + 2];
          if (typeof i != "function") {
            if (gf(i || u) === null)
              continue;
            break;
          }
          var r = ui(u);
          r !== null && (l.splice(n, 3), n -= 3, Zo(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: i
            },
            i,
            s
          ));
        }
      }
    ));
  }
  function Ef(l) {
    function n(T) {
      return Eu(T, l);
    }
    ol !== null && Eu(ol, l), Bl !== null && Eu(Bl, l), Ql !== null && Eu(Ql, l), $c.forEach(n), fn.forEach(n);
    for (var u = 0; u < Re.length; u++) {
      var i = Re[u];
      i.blockedOn === l && (i.blockedOn = null);
    }
    for (; 0 < Re.length && (u = Re[0], u.blockedOn === null); )
      Nv(u), u.blockedOn === null && Re.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (i = 0; i < u.length; i += 3) {
        var s = u[i], r = u[i + 1], m = s[$l] || null;
        if (typeof r == "function")
          m || qv(u);
        else if (m) {
          var v = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, m = r[$l] || null)
              v = m.formAction;
            else if (gf(s) !== null) continue;
          } else v = m.action;
          typeof v == "function" ? u[i + 1] = v : (u.splice(i, 3), i -= 3), qv(u);
        }
      }
  }
  function h0() {
    function l(r) {
      r.canIntercept && r.info === "react-transition" && r.intercept({
        handler: function() {
          return new Promise(function(m) {
            return s = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function n() {
      s !== null && (s(), s = null), i || setTimeout(u, 20);
    }
    function u() {
      if (!i && !navigation.transition) {
        var r = navigation.currentEntry;
        r && r.url != null && navigation.navigate(r.url, {
          state: r.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var i = !1, s = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(u, 100), function() {
        i = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), s !== null && (s(), s = null);
      };
    }
  }
  function Oh(l) {
    this._internalRoot = l;
  }
  Mh.prototype.render = Oh.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(B(409));
    var u = n.current, i = va();
    Hv(u, i, l, n, null, null);
  }, Mh.prototype.unmount = Oh.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      Hv(l.current, 2, null, l, null, null), lf(), n[mc] = null;
    }
  };
  function Mh(l) {
    this._internalRoot = l;
  }
  Mh.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = Qr();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < Re.length && n !== 0 && n < Re[u].priority; u++) ;
      Re.splice(u, 0, l), u === 0 && Nv(l);
    }
  };
  var m0 = ze.version;
  if (m0 !== "19.2.0")
    throw Error(
      B(
        527,
        m0,
        "19.2.0"
      )
    );
  Q.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(B(188)) : (l = Object.keys(l).join(","), Error(B(268, l)));
    return l = Ge(n), l = l !== null ? Ta(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Yv = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!rr.isDisabled && rr.supportsFiber)
      try {
        li = rr.inject(
          Yv
        ), ra = rr;
      } catch {
      }
  }
  return op.createRoot = function(l, n) {
    if (!ae(l)) throw Error(B(299));
    var u = !1, i = "", s = jd, r = yy, m = Gd;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), n = Ah(
      l,
      1,
      !1,
      null,
      null,
      u,
      i,
      null,
      s,
      r,
      m,
      h0
    ), l[mc] = n.current, ff(l), new Oh(n);
  }, op.hydrateRoot = function(l, n, u) {
    if (!ae(l)) throw Error(B(299));
    var i = !1, s = "", r = jd, m = yy, v = Gd, T = null;
    return u != null && (u.unstable_strictMode === !0 && (i = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (v = u.onRecoverableError), u.formState !== void 0 && (T = u.formState)), n = Ah(
      l,
      1,
      !0,
      n,
      u ?? null,
      i,
      s,
      T,
      r,
      m,
      v,
      h0
    ), n.context = Ki(null), u = n.current, i = va(), i = Xr(i), s = $u(i), s.callback = null, Ha(u, s, i), u = i, n.current.lanes = u, mo(n, u), gu(n), l[mc] = n.current, ff(l), new Mh(n);
  }, op.version = "19.2.0", op;
}
var fp = {};
var B2;
function hE() {
  return B2 || (B2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function L(t, e) {
      for (t = t.memoizedState; t !== null && 0 < e; )
        t = t.next, e--;
      return t;
    }
    function ze(t, e, a, c) {
      if (a >= e.length) return c;
      var o = e[a], f = ll(t) ? t.slice() : Ot({}, t);
      return f[o] = ze(t[o], e, a + 1, c), f;
    }
    function Nt(t, e, a) {
      if (e.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var c = 0; c < a.length - 1; c++)
          if (e[c] !== a[c]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return B(t, e, a, 0);
      }
    }
    function B(t, e, a, c) {
      var o = e[c], f = ll(t) ? t.slice() : Ot({}, t);
      return c + 1 === e.length ? (f[a[c]] = f[o], ll(f) ? f.splice(o, 1) : delete f[o]) : f[o] = B(
        t[o],
        e,
        a,
        c + 1
      ), f;
    }
    function ae(t, e, a) {
      var c = e[a], o = ll(t) ? t.slice() : Ot({}, t);
      return a + 1 === e.length ? (ll(o) ? o.splice(c, 1) : delete o[c], o) : (o[c] = ae(t[c], e, a + 1), o);
    }
    function he() {
      return !1;
    }
    function Ye() {
      return null;
    }
    function J() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function je() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function Ge() {
    }
    function Ta() {
    }
    function ft(t) {
      var e = [];
      return t.forEach(function(a) {
        e.push(a);
      }), e.sort().join(", ");
    }
    function xt(t, e, a, c) {
      return new Jg(t, e, a, c);
    }
    function be(t, e) {
      t.context === Of && (rh(t.current, 2, e, t, null, null), Ya());
    }
    function re(t, e) {
      if (Du !== null) {
        var a = e.staleFamilies;
        e = e.updatedFamilies, Vs(), Rp(
          t.current,
          e,
          a
        ), Ya();
      }
    }
    function rl(t) {
      Du = t;
    }
    function de(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
    }
    function Kt(t) {
      var e = t, a = t;
      if (t.alternate) for (; e.return; ) e = e.return;
      else {
        t = e;
        do
          e = t, (e.flags & 4098) !== 0 && (a = e.return), t = e.return;
        while (t);
      }
      return e.tag === 3 ? a : null;
    }
    function wl(t) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function He(t) {
      if (t.tag === 31) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function Pe(t) {
      if (Kt(t) !== t)
        throw Error("Unable to find node on an unmounted component.");
    }
    function Jl(t) {
      var e = t.alternate;
      if (!e) {
        if (e = Kt(t), e === null)
          throw Error("Unable to find node on an unmounted component.");
        return e !== t ? null : t;
      }
      for (var a = t, c = e; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (c = o.return, c !== null) {
            a = c;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return Pe(o), t;
            if (f === c) return Pe(o), e;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== c.return) a = o, c = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, c = f;
              break;
            }
            if (h === c) {
              d = !0, c = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, c = o;
                break;
              }
              if (h === c) {
                d = !0, c = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== c)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? t : e;
    }
    function dl(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t;
      for (t = t.child; t !== null; ) {
        if (e = dl(t), e !== null) return e;
        t = t.sibling;
      }
      return null;
    }
    function F(t) {
      return t === null || typeof t != "object" ? null : (t = Cv && t[Cv] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    function ut(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === hf ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case rf:
          return "Fragment";
        case ur:
          return "Profiler";
        case oa:
          return "StrictMode";
        case wi:
          return "Suspense";
        case ga:
          return "SuspenseList";
        case Yn:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case wc:
            return "Portal";
          case qn:
            return t.displayName || "Context";
          case ph:
            return (t._context.displayName || "Context") + ".Consumer";
          case df:
            var e = t.render;
            return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case cr:
            return e = t.displayName || null, e !== null ? e : ut(t.type) || "Memo";
          case Xl:
            e = t._payload, t = t._init;
            try {
              return ut(t(e));
            } catch {
            }
        }
      return null;
    }
    function St(t) {
      return typeof t.tag == "number" ? W(t) : typeof t.name == "string" ? t.name : null;
    }
    function W(t) {
      var e = t.type;
      switch (t.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (e._context.displayName || "Context") + ".Consumer";
        case 10:
          return e.displayName || "Context";
        case 18:
          return "DehydratedFragment";
        case 11:
          return t = e.render, t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return e;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return ut(e);
        case 8:
          return e === oa ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof e == "function")
            return e.displayName || e.name || null;
          if (typeof e == "string") return e;
          break;
        case 29:
          if (e = t._debugInfo, e != null) {
            for (var a = e.length - 1; 0 <= a; a--)
              if (typeof e[a].name == "string") return e[a].name;
          }
          if (t.return !== null)
            return W(t.return);
      }
      return null;
    }
    function Ft(t) {
      return { current: t };
    }
    function Et(t, e) {
      0 > nc ? console.error("Unexpected pop.") : (e !== u0[nc] && console.error("Unexpected Fiber popped."), t.current = n0[nc], n0[nc] = null, u0[nc] = null, nc--);
    }
    function Ct(t, e, a) {
      nc++, n0[nc] = t.current, u0[nc] = a, t.current = e;
    }
    function ql(t) {
      return t === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), t;
    }
    function hl(t, e) {
      Ct(Ga, e, t), Ct(mf, t, t), Ct(Jc, null, t);
      var a = e.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", e = (e = e.documentElement) && (e = e.namespaceURI) ? av(e) : fo;
          break;
        default:
          if (a = e.tagName, e = e.namespaceURI)
            e = av(e), e = ec(
              e,
              a
            );
          else
            switch (a) {
              case "svg":
                e = am;
                break;
              case "math":
                e = Rg;
                break;
              default:
                e = fo;
            }
      }
      a = a.toLowerCase(), a = pm(null, a), a = {
        context: e,
        ancestorInfo: a
      }, Et(Jc, t), Ct(Jc, a, t);
    }
    function O(t) {
      Et(Jc, t), Et(mf, t), Et(Ga, t);
    }
    function Q() {
      return ql(Jc.current);
    }
    function Z(t) {
      t.memoizedState !== null && Ct(Kc, t, t);
      var e = ql(Jc.current), a = t.type, c = ec(e.context, a);
      a = pm(e.ancestorInfo, a), c = { context: c, ancestorInfo: a }, e !== c && (Ct(mf, t, t), Ct(Jc, c, t));
    }
    function ot(t) {
      mf.current === t && (Et(Jc, t), Et(mf, t)), Kc.current === t && (Et(Kc, t), ap._currentValue = Nr);
    }
    function ht() {
    }
    function j() {
      if (yf === 0) {
        _v = console.log, Ji = console.info, pf = console.warn, c0 = console.error, ir = console.group, vh = console.groupCollapsed, gh = console.groupEnd;
        var t = {
          configurable: !0,
          enumerable: !0,
          value: ht,
          writable: !0
        };
        Object.defineProperties(console, {
          info: t,
          log: t,
          warn: t,
          error: t,
          group: t,
          groupCollapsed: t,
          groupEnd: t
        });
      }
      yf++;
    }
    function I() {
      if (yf--, yf === 0) {
        var t = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Ot({}, t, { value: _v }),
          info: Ot({}, t, { value: Ji }),
          warn: Ot({}, t, { value: pf }),
          error: Ot({}, t, { value: c0 }),
          group: Ot({}, t, { value: ir }),
          groupCollapsed: Ot({}, t, { value: vh }),
          groupEnd: Ot({}, t, { value: gh })
        });
      }
      0 > yf && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function lt(t) {
      var e = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, t = t.stack, Error.prepareStackTrace = e, t.startsWith(`Error: react-stack-top-frame
`) && (t = t.slice(29)), e = t.indexOf(`
`), e !== -1 && (t = t.slice(e + 1)), e = t.indexOf("react_stack_bottom_frame"), e !== -1 && (e = t.lastIndexOf(
        `
`,
        e
      )), e !== -1)
        t = t.slice(0, e);
      else return "";
      return t;
    }
    function at(t) {
      if (vf === void 0)
        try {
          throw Error();
        } catch (a) {
          var e = a.stack.trim().match(/\n( *(at )?)/);
          vf = e && e[1] || "", i0 = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + vf + t + i0;
    }
    function Xe(t, e) {
      if (!t || Sh) return "";
      var a = o0.get(t);
      if (a !== void 0) return a;
      Sh = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var c = null;
      c = N.H, N.H = null, j();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (e) {
                var S = function() {
                  throw Error();
                };
                if (Object.defineProperty(S.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(S, []);
                  } catch (w) {
                    var _ = w;
                  }
                  Reflect.construct(t, [], S);
                } else {
                  try {
                    S.call();
                  } catch (w) {
                    _ = w;
                  }
                  t.call(S.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (w) {
                  _ = w;
                }
                (S = t()) && typeof S.catch == "function" && S.catch(function() {
                });
              }
            } catch (w) {
              if (w && _ && typeof w.stack == "string")
                return [w.stack, _.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], y = d[1];
        if (h && y) {
          var p = h.split(`
`), A = y.split(`
`);
          for (d = f = 0; f < p.length && !p[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < A.length && !A[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === p.length || d === A.length)
            for (f = p.length - 1, d = A.length - 1; 1 <= f && 0 <= d && p[f] !== A[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (p[f] !== A[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || p[f] !== A[d]) {
                    var D = `
` + p[f].replace(
                      " at new ",
                      " at "
                    );
                    return t.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", t.displayName)), typeof t == "function" && o0.set(t, D), D;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Sh = !1, N.H = c, I(), Error.prepareStackTrace = a;
      }
      return p = (p = t ? t.displayName || t.name : "") ? at(p) : "", typeof t == "function" && o0.set(t, p), p;
    }
    function Ka(t, e) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return at(t.type);
        case 16:
          return at("Lazy");
        case 13:
          return t.child !== e && e !== null ? at("Suspense Fallback") : at("Suspense");
        case 19:
          return at("SuspenseList");
        case 0:
        case 15:
          return Xe(t.type, !1);
        case 11:
          return Xe(t.type.render, !1);
        case 1:
          return Xe(t.type, !0);
        case 31:
          return at("Activity");
        default:
          return "";
      }
    }
    function Te(t) {
      try {
        var e = "", a = null;
        do {
          e += Ka(t, a);
          var c = t._debugInfo;
          if (c)
            for (var o = c.length - 1; 0 <= o; o--) {
              var f = c[o];
              if (typeof f.name == "string") {
                var d = e;
                t: {
                  var h = f.name, y = f.env, p = f.debugLocation;
                  if (p != null) {
                    var A = lt(p), D = A.lastIndexOf(`
`), S = D === -1 ? A : A.slice(D + 1);
                    if (S.indexOf(h) !== -1) {
                      var _ = `
` + S;
                      break t;
                    }
                  }
                  _ = at(
                    h + (y ? " [" + y + "]" : "")
                  );
                }
                e = d + _;
              }
            }
          a = t, t = t.return;
        } while (t);
        return e;
      } catch (w) {
        return `
Error generating stack: ` + w.message + `
` + w.stack;
      }
    }
    function $a(t) {
      return (t = t ? t.displayName || t.name : "") ? at(t) : "";
    }
    function Ea() {
      if (Sa === null) return null;
      var t = Sa._debugOwner;
      return t != null ? St(t) : null;
    }
    function Jf() {
      if (Sa === null) return "";
      var t = Sa;
      try {
        var e = "";
        switch (t.tag === 6 && (t = t.return), t.tag) {
          case 26:
          case 27:
          case 5:
            e += at(t.type);
            break;
          case 13:
            e += at("Suspense");
            break;
          case 19:
            e += at("SuspenseList");
            break;
          case 31:
            e += at("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            t._debugOwner || e !== "" || (e += $a(
              t.type
            ));
            break;
          case 11:
            t._debugOwner || e !== "" || (e += $a(
              t.type.render
            ));
        }
        for (; t; )
          if (typeof t.tag == "number") {
            var a = t;
            t = a._debugOwner;
            var c = a._debugStack;
            if (t && c) {
              var o = lt(c);
              o !== "" && (e += `
` + o);
            }
          } else if (t.debugStack != null) {
            var f = t.debugStack;
            (t = t.owner) && f && (e += `
` + lt(f));
          } else break;
        var d = e;
      } catch (h) {
        d = `
Error generating stack: ` + h.message + `
` + h.stack;
      }
      return d;
    }
    function k(t, e, a, c, o, f, d) {
      var h = Sa;
      Kf(t);
      try {
        return t !== null && t._debugTask ? t._debugTask.run(
          e.bind(null, a, c, o, f, d)
        ) : e(a, c, o, f, d);
      } finally {
        Kf(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function Kf(t) {
      N.getCurrentStack = t === null ? null : Jf, Su = !1, Sa = t;
    }
    function $f(t) {
      return typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
    }
    function Ln(t) {
      try {
        return ti(t), !1;
      } catch {
        return !0;
      }
    }
    function ti(t) {
      return "" + t;
    }
    function ne(t, e) {
      if (Ln(t))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          e,
          $f(t)
        ), ti(t);
    }
    function cm(t, e) {
      if (Ln(t))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          e,
          $f(t)
        ), ti(t);
    }
    function xr(t) {
      if (Ln(t))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          $f(t)
        ), ti(t);
    }
    function im(t) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var e = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (e.isDisabled) return !0;
      if (!e.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        $i = e.inject(t), il = e;
      } catch (a) {
        console.error("React instrumentation encountered an error: %o.", a);
      }
      return !!e.checkDCE;
    }
    function me(t) {
      if (typeof r0 == "function" && Bv(t), il && typeof il.setStrictMode == "function")
        try {
          il.setStrictMode($i, t);
        } catch (e) {
          bu || (bu = !0, console.error(
            "React instrumentation encountered an error: %o",
            e
          ));
        }
    }
    function om(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (d0(t) / Dh | 0) | 0;
    }
    function ei(t) {
      var e = t & 42;
      if (e !== 0) return e;
      switch (t & -t) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return t & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), t;
      }
    }
    function qr(t, e, a) {
      var c = t.pendingLanes;
      if (c === 0) return 0;
      var o = 0, f = t.suspendedLanes, d = t.pingedLanes;
      t = t.warmLanes;
      var h = c & 134217727;
      return h !== 0 ? (c = h & ~f, c !== 0 ? o = ei(c) : (d &= h, d !== 0 ? o = ei(d) : a || (a = h & ~t, a !== 0 && (o = ei(a))))) : (h = c & ~f, h !== 0 ? o = ei(h) : d !== 0 ? o = ei(d) : a || (a = c & ~t, a !== 0 && (o = ei(a)))), o === 0 ? 0 : e !== 0 && e !== o && (e & f) === 0 && (f = o & -o, a = e & -e, f >= a || f === 32 && (a & 4194048) !== 0) ? e : o;
    }
    function Ul(t, e) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
    }
    function jg(t, e) {
      switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return e + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function Yr() {
      var t = Sf;
      return Sf <<= 1, (Sf & 62914560) === 0 && (Sf = 4194304), t;
    }
    function jr(t) {
      for (var e = [], a = 0; 31 > a; a++) e.push(t);
      return e;
    }
    function dc(t, e) {
      t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
    }
    function Gg(t, e, a, c, o, f) {
      var d = t.pendingLanes;
      t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
      var h = t.entanglements, y = t.expirationTimes, p = t.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var A = 31 - Hl(a), D = 1 << A;
        h[A] = 0, y[A] = -1;
        var S = p[A];
        if (S !== null)
          for (p[A] = null, A = 0; A < S.length; A++) {
            var _ = S[A];
            _ !== null && (_.lane &= -536870913);
          }
        a &= ~D;
      }
      c !== 0 && fm(t, c, 0), f !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= f & ~(d & ~e));
    }
    function fm(t, e, a) {
      t.pendingLanes |= e, t.suspendedLanes &= ~e;
      var c = 31 - Hl(e);
      t.entangledLanes |= e, t.entanglements[c] = t.entanglements[c] | 1073741824 | a & 261930;
    }
    function sp(t, e) {
      var a = t.entangledLanes |= e;
      for (t = t.entanglements; a; ) {
        var c = 31 - Hl(a), o = 1 << c;
        o & e | t[c] & e && (t[c] |= e), a &= ~o;
      }
    }
    function rp(t, e) {
      var a = e & -e;
      return a = (a & 42) !== 0 ? 1 : li(a), (a & (t.suspendedLanes | e)) !== 0 ? 0 : a;
    }
    function li(t) {
      switch (t) {
        case 2:
          t = 1;
          break;
        case 8:
          t = 4;
          break;
        case 32:
          t = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          t = 128;
          break;
        case 268435456:
          t = 134217728;
          break;
        default:
          t = 0;
      }
      return t;
    }
    function ra(t, e, a) {
      if (Tu)
        for (t = t.pendingUpdatersLaneMap; 0 < a; ) {
          var c = 31 - Hl(a), o = 1 << c;
          t[c].add(e), a &= ~o;
        }
    }
    function xu(t, e) {
      if (Tu)
        for (var a = t.pendingUpdatersLaneMap, c = t.memoizedUpdaters; 0 < e; ) {
          var o = 31 - Hl(e);
          t = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && c.has(d) || c.add(f);
          }), o.clear()), e &= ~t;
        }
    }
    function Kl(t) {
      return t &= -t, ol < t ? Bl < t ? (t & 134217727) !== 0 ? Ql : $c : Bl : ol;
    }
    function dp() {
      var t = kt.p;
      return t !== 0 ? t : (t = window.event, t === void 0 ? Ql : hh(t.type));
    }
    function hp(t, e) {
      var a = kt.p;
      try {
        return kt.p = t, e();
      } finally {
        kt.p = a;
      }
    }
    function sm(t) {
      delete t[Re], delete t[fa], delete t[Wi], delete t[t1], delete t[Nv];
    }
    function qu(t) {
      var e = t[Re];
      if (e) return e;
      for (var a = t.parentNode; a; ) {
        if (e = a[uc] || a[Re]) {
          if (a = e.alternate, e.child !== null || a !== null && a.child !== null)
            for (t = Qi(t); t !== null; ) {
              if (a = t[Re])
                return a;
              t = Qi(t);
            }
          return e;
        }
        t = a, a = t.parentNode;
      }
      return null;
    }
    function hn(t) {
      if (t = t[Re] || t[uc]) {
        var e = t.tag;
        if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
          return t;
      }
      return null;
    }
    function hc(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6)
        return t.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function Wa(t) {
      var e = t[sr];
      return e || (e = t[sr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
    }
    function Je(t) {
      t[bf] = !0;
    }
    function mn(t, e) {
      ho(t, e), ho(t + "Capture", e);
    }
    function ho(t, e) {
      Eu[t] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        t
      ), Eu[t] = e;
      var a = t.toLowerCase();
      for (Tf[a] = t, t === "onDoubleClick" && (Tf.ondblclick = t), t = 0; t < e.length; t++)
        xv.add(e[t]);
    }
    function ai(t, e) {
      qv[e.type] || e.onChange || e.onInput || e.readOnly || e.disabled || e.value == null || console.error(
        t === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), e.onChange || e.readOnly || e.disabled || e.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function Wf(t) {
      return Xa.call(Oh, t) ? !0 : Xa.call(h0, t) ? !1 : Ef.test(t) ? Oh[t] = !0 : (h0[t] = !0, console.error("Invalid attribute name: `%s`", t), !1);
    }
    function mo(t, e, a) {
      if (Wf(e)) {
        if (!t.hasAttribute(e)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return t = t.getAttribute(e), t === "" && a === !0 ? !0 : (ne(a, e), t === "" + a ? a : t);
      }
    }
    function Gr(t, e, a) {
      if (Wf(e))
        if (a === null) t.removeAttribute(e);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              t.removeAttribute(e);
              return;
            case "boolean":
              var c = e.toLowerCase().slice(0, 5);
              if (c !== "data-" && c !== "aria-") {
                t.removeAttribute(e);
                return;
              }
          }
          ne(a, e), t.setAttribute(e, "" + a);
        }
    }
    function kf(t, e, a) {
      if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(e);
            return;
        }
        ne(a, e), t.setAttribute(e, "" + a);
      }
    }
    function wn(t, e, a, c) {
      if (c === null) t.removeAttribute(a);
      else {
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(a);
            return;
        }
        ne(c, a), t.setAttributeNS(e, a, "" + c);
      }
    }
    function Aa(t) {
      switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return t;
        case "object":
          return xr(t), t;
        default:
          return "";
      }
    }
    function Xr(t) {
      var e = t.type;
      return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
    }
    function rm(t, e, a) {
      var c = Object.getOwnPropertyDescriptor(
        t.constructor.prototype,
        e
      );
      if (!t.hasOwnProperty(e) && typeof c < "u" && typeof c.get == "function" && typeof c.set == "function") {
        var o = c.get, f = c.set;
        return Object.defineProperty(t, e, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            xr(d), a = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(t, e, {
          enumerable: c.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(d) {
            xr(d), a = "" + d;
          },
          stopTracking: function() {
            t._valueTracker = null, delete t[e];
          }
        };
      }
    }
    function Qr(t) {
      if (!t._valueTracker) {
        var e = Xr(t) ? "checked" : "value";
        t._valueTracker = rm(
          t,
          e,
          "" + t[e]
        );
      }
    }
    function dm(t) {
      if (!t) return !1;
      var e = t._valueTracker;
      if (!e) return !0;
      var a = e.getValue(), c = "";
      return t && (c = Xr(t) ? t.checked ? "true" : "false" : t.value), t = c, t !== a ? (e.setValue(t), !0) : !1;
    }
    function yn(t) {
      if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
      try {
        return t.activeElement || t.body;
      } catch {
        return t.body;
      }
    }
    function ue(t) {
      return t.replace(
        Mh,
        function(e) {
          return "\\" + e.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function $l(t, e) {
      e.checked === void 0 || e.defaultChecked === void 0 || Yv || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Ea() || "A component",
        e.type
      ), Yv = !0), e.value === void 0 || e.defaultValue === void 0 || m0 || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Ea() || "A component",
        e.type
      ), m0 = !0);
    }
    function mc(t, e, a, c, o, f, d, h) {
      t.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (ne(d, "type"), t.type = d) : t.removeAttribute("type"), e != null ? d === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Aa(e)) : t.value !== "" + Aa(e) && (t.value = "" + Aa(e)) : d !== "submit" && d !== "reset" || t.removeAttribute("value"), e != null ? hm(t, d, Aa(e)) : a != null ? hm(t, d, Aa(a)) : c != null && t.removeAttribute("value"), o == null && f != null && (t.defaultChecked = !!f), o != null && (t.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (ne(h, "name"), t.name = "" + Aa(h)) : t.removeAttribute("name");
    }
    function Vr(t, e, a, c, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (ne(f, "type"), t.type = f), e != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || e != null)) {
          Qr(t);
          return;
        }
        a = a != null ? "" + Aa(a) : "", e = e != null ? "" + Aa(e) : a, h || e === t.value || (t.value = e), t.defaultValue = e;
      }
      c = c ?? o, c = typeof c != "function" && typeof c != "symbol" && !!c, t.checked = h ? t.checked : !!c, t.defaultChecked = !!c, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (ne(d, "name"), t.name = d), Qr(t);
    }
    function hm(t, e, a) {
      e === "number" && yn(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a);
    }
    function mp(t, e) {
      e.value == null && (typeof e.children == "object" && e.children !== null ? nr.Children.forEach(e.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || l || (l = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : e.dangerouslySetInnerHTML == null || n || (n = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), e.selected == null || rr || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), rr = !0);
    }
    function mm() {
      var t = Ea();
      return t ? `

Check the render method of \`` + t + "`." : "";
    }
    function Jn(t, e, a, c) {
      if (t = t.options, e) {
        e = {};
        for (var o = 0; o < a.length; o++)
          e["$" + a[o]] = !0;
        for (a = 0; a < t.length; a++)
          o = e.hasOwnProperty("$" + t[a].value), t[a].selected !== o && (t[a].selected = o), o && c && (t[a].defaultSelected = !0);
      } else {
        for (a = "" + Aa(a), e = null, o = 0; o < t.length; o++) {
          if (t[o].value === a) {
            t[o].selected = !0, c && (t[o].defaultSelected = !0);
            return;
          }
          e !== null || t[o].disabled || (e = t[o]);
        }
        e !== null && (e.selected = !0);
      }
    }
    function Zr(t, e) {
      for (t = 0; t < i.length; t++) {
        var a = i[t];
        if (e[a] != null) {
          var c = ll(e[a]);
          e.multiple && !c ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            mm()
          ) : !e.multiple && c && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            mm()
          );
        }
      }
      e.value === void 0 || e.defaultValue === void 0 || u || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), u = !0);
    }
    function ni(t, e) {
      e.value === void 0 || e.defaultValue === void 0 || s || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        Ea() || "A component"
      ), s = !0), e.children != null && e.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function ui(t, e, a) {
      if (e != null && (e = "" + Aa(e), e !== t.value && (t.value = e), a == null)) {
        t.defaultValue !== e && (t.defaultValue = e);
        return;
      }
      t.defaultValue = a != null ? "" + Aa(a) : "";
    }
    function yo(t, e, a, c) {
      if (e == null) {
        if (c != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (ll(c)) {
            if (1 < c.length)
              throw Error("<textarea> can only have at most one child.");
            c = c[0];
          }
          a = c;
        }
        a == null && (a = ""), e = a;
      }
      a = Aa(e), t.defaultValue = a, c = t.textContent, c === a && c !== "" && c !== null && (t.value = c), Qr(t);
    }
    function ci(t, e) {
      return t.serverProps === void 0 && t.serverTail.length === 0 && t.children.length === 1 && 3 < t.distanceFromLeaf && t.distanceFromLeaf > 15 - e ? ci(t.children[0], e) : t;
    }
    function It(t) {
      return "  " + "  ".repeat(t);
    }
    function ii(t) {
      return "+ " + "  ".repeat(t);
    }
    function yc(t) {
      return "- " + "  ".repeat(t);
    }
    function pc(t) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return t.type;
        case 16:
          return "Lazy";
        case 31:
          return "Activity";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return t = t.type, t.displayName || t.name || null;
        case 11:
          return t = t.type.render, t.displayName || t.name || null;
        case 1:
          return t = t.type, t.displayName || t.name || null;
        default:
          return null;
      }
    }
    function Kn(t, e) {
      return r.test(t) ? (t = JSON.stringify(t), t.length > e - 2 ? 8 > e ? '{"..."}' : "{" + t.slice(0, e - 7) + '..."}' : "{" + t + "}") : t.length > e ? 5 > e ? '{"..."}' : t.slice(0, e - 3) + "..." : t;
    }
    function Lr(t, e, a) {
      var c = 120 - 2 * a;
      if (e === null)
        return ii(a) + Kn(t, c) + `
`;
      if (typeof e == "string") {
        for (var o = 0; o < e.length && o < t.length && e.charCodeAt(o) === t.charCodeAt(o); o++) ;
        return o > c - 8 && 10 < o && (t = "..." + t.slice(o - 8), e = "..." + e.slice(o - 8)), ii(a) + Kn(t, c) + `
` + yc(a) + Kn(e, c) + `
`;
      }
      return It(a) + Kn(t, c) + `
`;
    }
    function wr(t) {
      return Object.prototype.toString.call(t).replace(/^\[object (.*)\]$/, function(e, a) {
        return a;
      });
    }
    function po(t, e) {
      switch (typeof t) {
        case "string":
          return t = JSON.stringify(t), t.length > e ? 5 > e ? '"..."' : t.slice(0, e - 4) + '..."' : t;
        case "object":
          if (t === null) return "null";
          if (ll(t)) return "[...]";
          if (t.$$typeof === on)
            return (e = ut(t.type)) ? "<" + e + ">" : "<...>";
          var a = wr(t);
          if (a === "Object") {
            a = "", e -= 2;
            for (var c in t)
              if (t.hasOwnProperty(c)) {
                var o = JSON.stringify(c);
                if (o !== '"' + c + '"' && (c = o), e -= c.length - 2, o = po(
                  t[c],
                  15 > e ? e : 15
                ), e -= o.length, 0 > e) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + c + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (e = t.displayName || t.name) ? "function " + e : "function";
        default:
          return String(t);
      }
    }
    function vo(t, e) {
      return typeof t != "string" || r.test(t) ? "{" + po(t, e - 2) + "}" : t.length > e - 2 ? 5 > e ? '"..."' : '"' + t.slice(0, e - 5) + '..."' : '"' + t + '"';
    }
    function go(t, e, a) {
      var c = 120 - a.length - t.length, o = [], f;
      for (f in e)
        if (e.hasOwnProperty(f) && f !== "children") {
          var d = vo(
            e[f],
            120 - a.length - f.length - 1
          );
          c -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + t + `>
` : 0 < c ? a + "<" + t + " " + o.join(" ") + `>
` : a + "<" + t + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function Jr(t, e, a) {
      var c = "", o = Ot({}, e), f;
      for (f in t)
        if (t.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = po(t[f], d);
          e.hasOwnProperty(f) ? (d = po(e[f], d), c += ii(a) + f + ": " + h + `
`, c += yc(a) + f + ": " + d + `
`) : c += ii(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (t = po(
          o[y],
          120 - 2 * a - y.length - 2
        ), c += yc(a) + y + ": " + t + `
`);
      return c;
    }
    function Yu(t, e, a, c) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (p in a)
        a.hasOwnProperty(p) && f.set(
          p.toLowerCase(),
          p
        );
      if (f.size === 1 && f.has("children"))
        o += go(
          t,
          e,
          It(c)
        );
      else {
        for (var d in e)
          if (e.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (c + 1) - d.length - 1, y = f.get(d.toLowerCase());
            if (y !== void 0) {
              f.delete(d.toLowerCase());
              var p = e[d];
              y = a[y];
              var A = vo(
                p,
                h
              );
              h = vo(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && wr(p) === "Object" && wr(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < A.indexOf("...") || -1 < h.indexOf("...")) ? o += It(c + 1) + d + `={{
` + Jr(
                p,
                y,
                c + 2
              ) + It(c + 1) + `}}
` : (o += ii(c + 1) + d + "=" + A + `
`, o += yc(c + 1) + d + "=" + h + `
`);
            } else
              o += It(c + 1) + d + "=" + vo(e[d], h) + `
`;
          }
        f.forEach(function(D) {
          if (D !== "children") {
            var S = 120 - 2 * (c + 1) - D.length - 1;
            o += yc(c + 1) + D + "=" + vo(a[D], S) + `
`;
          }
        }), o = o === "" ? It(c) + "<" + t + `>
` : It(c) + "<" + t + `
` + o + It(c) + `>
`;
      }
      return t = a.children, e = e.children, typeof t == "string" || typeof t == "number" || typeof t == "bigint" ? (f = "", (typeof e == "string" || typeof e == "number" || typeof e == "bigint") && (f = "" + e), o += Lr(f, "" + t, c + 1)) : (typeof e == "string" || typeof e == "number" || typeof e == "bigint") && (o = t == null ? o + Lr("" + e, null, c + 1) : o + Lr("" + e, void 0, c + 1)), o;
    }
    function za(t, e) {
      var a = pc(t);
      if (a === null) {
        for (a = "", t = t.child; t; )
          a += za(t, e), t = t.sibling;
        return a;
      }
      return It(e) + "<" + a + `>
`;
    }
    function Kr(t, e) {
      var a = ci(t, e);
      if (a !== t && (t.children.length !== 1 || t.children[0] !== a))
        return It(e) + `...
` + Kr(a, e + 1);
      a = "";
      var c = t.fiber._debugInfo;
      if (c)
        for (var o = 0; o < c.length; o++) {
          var f = c[o].name;
          typeof f == "string" && (a += It(e) + "<" + f + `>
`, e++);
        }
      if (c = "", o = t.fiber.pendingProps, t.fiber.tag === 6)
        c = Lr(o, t.serverProps, e), e++;
      else if (f = pc(t.fiber), f !== null)
        if (t.serverProps === void 0) {
          c = e;
          var d = 120 - 2 * c - f.length - 2, h = "";
          for (p in o)
            if (o.hasOwnProperty(p) && p !== "children") {
              var y = vo(o[p], 15);
              if (d -= p.length + y.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + p + "=" + y;
            }
          c = It(c) + "<" + f + h + `>
`, e++;
        } else
          t.serverProps === null ? (c = go(
            f,
            o,
            ii(e)
          ), e++) : typeof t.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (c = Yu(
            f,
            o,
            t.serverProps,
            e
          ), e++);
      var p = "";
      for (o = t.fiber.child, f = 0; o && f < t.children.length; )
        d = t.children[f], d.fiber === o ? (p += Kr(d, e), f++) : p += za(o, e), o = o.sibling;
      for (o && 0 < t.children.length && (p += It(e) + `...
`), o = t.serverTail, t.serverProps === null && e--, t = 0; t < o.length; t++)
        f = o[t], p = typeof f == "string" ? p + (yc(e) + Kn(f, 120 - 2 * e) + `
`) : p + go(
          f.type,
          f.props,
          yc(e)
        );
      return a + c + p;
    }
    function ym(t) {
      try {
        return `

` + Kr(t, 0);
      } catch {
        return "";
      }
    }
    function $r(t, e, a) {
      for (var c = e, o = null, f = 0; c; )
        c === t && (f = 0), o = {
          fiber: c,
          children: o !== null ? [o] : [],
          serverProps: c === e ? a : c === t ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, c = c.return;
      return o !== null ? ym(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function pm(t, e) {
      var a = Ot({}, t || q), c = { tag: e };
      return v.indexOf(e) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), T.indexOf(e) !== -1 && (a.pTagInButtonScope = null), m.indexOf(e) !== -1 && e !== "address" && e !== "div" && e !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = c, e === "form" && (a.formTag = c), e === "a" && (a.aTagInScope = c), e === "button" && (a.buttonTagInScope = c), e === "nobr" && (a.nobrTagInScope = c), e === "p" && (a.pTagInButtonScope = c), e === "li" && (a.listItemTagAutoclosing = c), (e === "dd" || e === "dt") && (a.dlItemTagAutoclosing = c), e === "#document" || e === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = c), t !== null || e !== "#document" && e !== "html" && e !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function Ff(t, e, a) {
      switch (e) {
        case "select":
          return t === "hr" || t === "option" || t === "optgroup" || t === "script" || t === "template" || t === "#text";
        case "optgroup":
          return t === "option" || t === "#text";
        case "option":
          return t === "#text";
        case "tr":
          return t === "th" || t === "td" || t === "style" || t === "script" || t === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return t === "tr" || t === "style" || t === "script" || t === "template";
        case "colgroup":
          return t === "col" || t === "template";
        case "table":
          return t === "caption" || t === "colgroup" || t === "tbody" || t === "tfoot" || t === "thead" || t === "style" || t === "script" || t === "template";
        case "head":
          return t === "base" || t === "basefont" || t === "bgsound" || t === "link" || t === "meta" || t === "title" || t === "noscript" || t === "noframes" || t === "style" || t === "script" || t === "template";
        case "html":
          if (a) break;
          return t === "head" || t === "body" || t === "frameset";
        case "frameset":
          return t === "frame";
        case "#document":
          if (!a) return t === "html";
      }
      switch (t) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return e !== "h1" && e !== "h2" && e !== "h3" && e !== "h4" && e !== "h5" && e !== "h6";
        case "rp":
        case "rt":
          return U.indexOf(e) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return e == null;
        case "head":
          return a || e === null;
        case "html":
          return a && e === "#document" || e === null;
        case "body":
          return a && (e === "#document" || e === "html") || e === null;
      }
      return !0;
    }
    function Xg(t, e) {
      switch (t) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return e.pTagInButtonScope;
        case "form":
          return e.formTag || e.pTagInButtonScope;
        case "li":
          return e.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return e.dlItemTagAutoclosing;
        case "button":
          return e.buttonTagInScope;
        case "a":
          return e.aTagInScope;
        case "nobr":
          return e.nobrTagInScope;
      }
      return null;
    }
    function Da(t, e) {
      for (; t; ) {
        switch (t.tag) {
          case 5:
          case 26:
          case 27:
            if (t.type === e) return t;
        }
        t = t.return;
      }
      return null;
    }
    function If(t, e) {
      e = e || q;
      var a = e.current;
      if (e = (a = Ff(
        t,
        a && a.tag,
        e.implicitRootScope
      ) ? null : a) ? null : Xg(t, e), e = a || e, !e) return !0;
      var c = e.tag;
      if (e = String(!!a) + "|" + t + "|" + c, X[e]) return !1;
      X[e] = !0;
      var o = (e = Sa) ? Da(e.return, c) : null, f = e !== null && o !== null ? $r(o, e, null) : "", d = "<" + t + ">";
      return a ? (a = "", c === "table" && t === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        c,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        c,
        f
      ), e && (t = e.return, o === null || t === null || o === t && t._debugOwner === e._debugOwner || k(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          c,
          d
        );
      })), !1;
    }
    function Pf(t, e, a) {
      if (a || Ff("#text", e, !1))
        return !0;
      if (a = "#text|" + e, X[a]) return !1;
      X[a] = !0;
      var c = (a = Sa) ? Da(a, e) : null;
      return a = a !== null && c !== null ? $r(
        c,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(t) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        e,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        e,
        a
      ), !1;
    }
    function oi(t, e) {
      if (e) {
        var a = t.firstChild;
        if (a && a === t.lastChild && a.nodeType === 3) {
          a.nodeValue = e;
          return;
        }
      }
      t.textContent = e;
    }
    function So(t) {
      return t.replace(M, function(e, a) {
        return a.toUpperCase();
      });
    }
    function vm(t, e, a) {
      var c = e.indexOf("--") === 0;
      c || (-1 < e.indexOf("-") ? R.hasOwnProperty(e) && R[e] || (R[e] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        e,
        So(e.replace(fe, "ms-"))
      )) : st.test(e) ? R.hasOwnProperty(e) && R[e] || (R[e] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        e,
        e.charAt(0).toUpperCase() + e.slice(1)
      )) : !z.test(a) || G.hasOwnProperty(a) && G[a] || (G[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        e,
        a.replace(z, "")
      )), typeof a == "number" && (isNaN(a) ? nt || (nt = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        e
      )) : isFinite(a) || Zt || (Zt = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        e
      )))), a == null || typeof a == "boolean" || a === "" ? c ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : c ? t.setProperty(e, a) : typeof a != "number" || a === 0 || tt.has(e) ? e === "float" ? t.cssFloat = a : (cm(a, e), t[e] = ("" + a).trim()) : t[e] = a + "px";
    }
    function gm(t, e, a) {
      if (e != null && typeof e != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (e && Object.freeze(e), t = t.style, a != null) {
        if (e) {
          var c = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !e.hasOwnProperty(o))
                for (var f = C[o] || [o], d = 0; d < f.length; d++)
                  c[f[d]] = o;
          }
          for (var h in e)
            if (e.hasOwnProperty(h) && (!a || a[h] !== e[h]))
              for (o = C[h] || [h], f = 0; f < o.length; f++)
                c[o[f]] = h;
          h = {};
          for (var y in e)
            for (o = C[y] || [y], f = 0; f < o.length; f++)
              h[o[f]] = y;
          y = {};
          for (var p in c)
            if (o = c[p], (f = h[p]) && o !== f && (d = o + "," + f, !y[d])) {
              y[d] = !0, d = console;
              var A = e[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                A == null || typeof A == "boolean" || A === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var D in a)
          !a.hasOwnProperty(D) || e != null && e.hasOwnProperty(D) || (D.indexOf("--") === 0 ? t.setProperty(D, "") : D === "float" ? t.cssFloat = "" : t[D] = "");
        for (var S in e)
          p = e[S], e.hasOwnProperty(S) && a[S] !== p && vm(t, S, p);
      } else
        for (c in e)
          e.hasOwnProperty(c) && vm(t, c, e[c]);
    }
    function $n(t) {
      if (t.indexOf("-") === -1) return !1;
      switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function yp(t) {
      return Jt.get(t) || t;
    }
    function pp(t, e) {
      if (Xa.call(Rh, e) && Rh[e])
        return !0;
      if (j2.test(e)) {
        if (t = "aria-" + e.slice(4).toLowerCase(), t = jv.hasOwnProperty(t) ? t : null, t == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            e
          ), Rh[e] = !0;
        if (e !== t)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            e,
            t
          ), Rh[e] = !0;
      }
      if (Y2.test(e)) {
        if (t = e.toLowerCase(), t = jv.hasOwnProperty(t) ? t : null, t == null) return Rh[e] = !0, !1;
        e !== t && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          e,
          t
        ), Rh[e] = !0);
      }
      return !0;
    }
    function vp(t, e) {
      var a = [], c;
      for (c in e)
        pp(t, c) || a.push(c);
      e = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        e,
        t
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        e,
        t
      );
    }
    function Sm(t, e, a, c) {
      if (Xa.call(Qa, e) && Qa[e])
        return !0;
      var o = e.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), Qa[e] = !0;
      if (typeof a == "function" && (t === "form" && e === "action" || t === "input" && e === "formAction" || t === "button" && e === "formAction"))
        return !0;
      if (c != null) {
        if (t = c.possibleRegistrationNames, c.registrationNameDependencies.hasOwnProperty(e))
          return !0;
        if (c = t.hasOwnProperty(o) ? t[o] : null, c != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            e,
            c
          ), Qa[e] = !0;
        if (pS.test(e))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            e
          ), Qa[e] = !0;
      } else if (pS.test(e))
        return G2.test(e) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          e
        ), Qa[e] = !0;
      if (X2.test(e) || Q2.test(e)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), Qa[e] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), Qa[e] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), Qa[e] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          e
        ), Qa[e] = !0;
      if (jn.hasOwnProperty(o)) {
        if (o = jn[o], o !== e)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            e,
            o
          ), Qa[e] = !0;
      } else if (e !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          e,
          o
        ), Qa[e] = !0;
      switch (e) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (e) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = e.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                e,
                e,
                a,
                e
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                e,
                e,
                a,
                e,
                e,
                e
              ), Qa[e] = !0);
          }
        case "function":
        case "symbol":
          return Qa[e] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (e) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              e,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              e,
              a
            ), Qa[e] = !0;
          }
      }
      return !0;
    }
    function Qg(t, e, a) {
      var c = [], o;
      for (o in e)
        Sm(t, o, e[o], a) || c.push(o);
      e = c.map(function(f) {
        return "`" + f + "`";
      }).join(", "), c.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        e,
        t
      ) : 1 < c.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        e,
        t
      );
    }
    function ts(t) {
      return V2.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
    }
    function ka() {
    }
    function pn(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    function Wr(t) {
      var e = hn(t);
      if (e && (t = e.stateNode)) {
        var a = t[fa] || null;
        t: switch (t = e.stateNode, e.type) {
          case "input":
            if (mc(
              t,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), e = a.name, a.type === "radio" && e != null) {
              for (a = t; a.parentNode; ) a = a.parentNode;
              for (ne(e, "name"), a = a.querySelectorAll(
                'input[name="' + ue(
                  "" + e
                ) + '"][type="radio"]'
              ), e = 0; e < a.length; e++) {
                var c = a[e];
                if (c !== t && c.form === t.form) {
                  var o = c[fa] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  mc(
                    c,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (e = 0; e < a.length; e++)
                c = a[e], c.form === t.form && dm(c);
            }
            break t;
          case "textarea":
            ui(t, a.value, a.defaultValue);
            break t;
          case "select":
            e = a.value, e != null && Jn(t, !!a.multiple, e, !1);
        }
      }
    }
    function kr(t, e, a) {
      if (e1) return t(e, a);
      e1 = !0;
      try {
        var c = t(e);
        return c;
      } finally {
        if (e1 = !1, (Uh !== null || Ch !== null) && (Ya(), Uh && (e = Uh, t = Ch, Ch = Uh = null, Wr(e), t)))
          for (e = 0; e < t.length; e++) Wr(t[e]);
      }
    }
    function Wn(t, e) {
      var a = t.stateNode;
      if (a === null) return null;
      var c = a[fa] || null;
      if (c === null) return null;
      a = c[e];
      t: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (c = !c.disabled) || (t = t.type, c = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !c;
          break t;
        default:
          t = !1;
      }
      if (t) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + e + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function fi() {
      if (Gv) return Gv;
      var t, e = a1, a = e.length, c, o = "value" in Af ? Af.value : Af.textContent, f = o.length;
      for (t = 0; t < a && e[t] === o[t]; t++) ;
      var d = a - t;
      for (c = 1; c <= d && e[a - c] === o[f - c]; c++) ;
      return Gv = o.slice(t, 1 < c ? 1 - c : void 0);
    }
    function es(t) {
      var e = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
    }
    function bo() {
      return !0;
    }
    function bm() {
      return !1;
    }
    function ml(t) {
      function e(a, c, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = c, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in t)
          t.hasOwnProperty(h) && (a = t[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? bo : bm, this.isPropagationStopped = bm, this;
      }
      return Ot(e.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = bo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = bo);
        },
        persist: function() {
        },
        isPersistent: bo
      }), e;
    }
    function ju(t) {
      var e = this.nativeEvent;
      return e.getModifierState ? e.getModifierState(t) : (t = eT[t]) ? !!e[t] : !1;
    }
    function ls() {
      return ju;
    }
    function To(t, e) {
      switch (t) {
        case "keyup":
          return hT.indexOf(e.keyCode) !== -1;
        case "keydown":
          return e.keyCode !== bS;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Gu(t) {
      return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
    }
    function Tm(t, e) {
      switch (t) {
        case "compositionend":
          return Gu(e);
        case "keypress":
          return e.which !== ES ? null : (zS = !0, AS);
        case "textInput":
          return t = e.data, t === AS && zS ? null : t;
        default:
          return null;
      }
    }
    function Fr(t, e) {
      if (_h)
        return t === "compositionend" || !i1 && To(t, e) ? (t = fi(), Gv = a1 = Af = null, _h = !1, t) : null;
      switch (t) {
        case "paste":
          return null;
        case "keypress":
          if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length)
              return e.char;
            if (e.which)
              return String.fromCharCode(e.which);
          }
          return null;
        case "compositionend":
          return TS && e.locale !== "ko" ? null : e.data;
        default:
          return null;
      }
    }
    function Em(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e === "input" ? !!yT[t.type] : e === "textarea";
    }
    function Ir(t) {
      if (!Wc) return !1;
      t = "on" + t;
      var e = t in document;
      return e || (e = document.createElement("div"), e.setAttribute(t, "return;"), e = typeof e[t] == "function"), e;
    }
    function as(t, e, a, c) {
      Uh ? Ch ? Ch.push(c) : Ch = [c] : Uh = c, e = Bn(e, "onChange"), 0 < e.length && (a = new Xv(
        "onChange",
        "change",
        null,
        a,
        c
      ), t.push({ event: a, listeners: e }));
    }
    function gp(t) {
      ee(t, 0);
    }
    function Cl(t) {
      var e = hc(t);
      if (dm(e)) return t;
    }
    function vc(t, e) {
      if (t === "change") return e;
    }
    function ns() {
      b0 && (b0.detachEvent("onpropertychange", Eo), T0 = b0 = null);
    }
    function Eo(t) {
      if (t.propertyName === "value" && Cl(T0)) {
        var e = [];
        as(
          e,
          T0,
          t,
          pn(t)
        ), kr(gp, e);
      }
    }
    function Vg(t, e, a) {
      t === "focusin" ? (ns(), b0 = e, T0 = a, b0.attachEvent("onpropertychange", Eo)) : t === "focusout" && ns();
    }
    function Am(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return Cl(T0);
    }
    function zm(t, e) {
      if (t === "click") return Cl(e);
    }
    function us(t, e) {
      if (t === "input" || t === "change")
        return Cl(e);
    }
    function Pr(t, e) {
      return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
    }
    function Ao(t, e) {
      if (Va(t, e)) return !0;
      if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return !1;
      var a = Object.keys(t), c = Object.keys(e);
      if (a.length !== c.length) return !1;
      for (c = 0; c < a.length; c++) {
        var o = a[c];
        if (!Xa.call(e, o) || !Va(t[o], e[o]))
          return !1;
      }
      return !0;
    }
    function Sp(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function bp(t, e) {
      var a = Sp(t);
      t = 0;
      for (var c; a; ) {
        if (a.nodeType === 3) {
          if (c = t + a.textContent.length, t <= e && c >= e)
            return { node: a, offset: e - t };
          t = c;
        }
        t: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break t;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = Sp(a);
      }
    }
    function Tp(t, e) {
      return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Tp(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
    }
    function td(t) {
      t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
      for (var e = yn(t.document); e instanceof t.HTMLIFrameElement; ) {
        try {
          var a = typeof e.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) t = e.contentWindow;
        else break;
        e = yn(t.document);
      }
      return e;
    }
    function Dm(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
    }
    function Ep(t, e, a) {
      var c = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      f1 || Hh == null || Hh !== yn(c) || (c = Hh, "selectionStart" in c && Dm(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
        anchorNode: c.anchorNode,
        anchorOffset: c.anchorOffset,
        focusNode: c.focusNode,
        focusOffset: c.focusOffset
      }), E0 && Ao(E0, c) || (E0 = c, c = Bn(o1, "onSelect"), 0 < c.length && (e = new Xv(
        "onSelect",
        "select",
        null,
        e,
        a
      ), t.push({ event: e, listeners: c }), e.target = Hh)));
    }
    function si(t, e) {
      var a = {};
      return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a;
    }
    function ri(t) {
      if (s1[t]) return s1[t];
      if (!Bh[t]) return t;
      var e = Bh[t], a;
      for (a in e)
        if (e.hasOwnProperty(a) && a in OS)
          return s1[t] = e[a];
      return t;
    }
    function vn(t, e) {
      _S.set(t, e), mn(e, [t]);
    }
    function Ap(t) {
      for (var e = Vv, a = 0; a < t.length; a++) {
        var c = t[a];
        if (typeof c == "object" && c !== null)
          if (ll(c) && c.length === 2 && typeof c[0] == "string") {
            if (e !== Vv && e !== y1)
              return h1;
            e = y1;
          } else return h1;
        else {
          if (typeof c == "function" || typeof c == "string" && 50 < c.length || e !== Vv && e !== m1)
            return h1;
          e = m1;
        }
      }
      return e;
    }
    function Om(t, e, a, c) {
      for (var o in t)
        Xa.call(t, o) && o[0] !== "_" && kn(o, t[o], e, a, c);
    }
    function kn(t, e, a, c, o) {
      switch (typeof e) {
        case "object":
          if (e === null) {
            e = "null";
            break;
          } else {
            if (e.$$typeof === on) {
              var f = ut(e.type) || "…", d = e.key;
              e = e.props;
              var h = Object.keys(e), y = h.length;
              if (d == null && y === 0) {
                e = "<" + f + " />";
                break;
              }
              if (3 > c || y === 1 && h[0] === "children" && d == null) {
                e = "<" + f + " … />";
                break;
              }
              a.push([
                o + "  ".repeat(c) + t,
                "<" + f
              ]), d !== null && kn(
                "key",
                d,
                a,
                c + 1,
                o
              ), t = !1;
              for (var p in e)
                p === "children" ? e.children != null && (!ll(e.children) || 0 < e.children.length) && (t = !0) : Xa.call(e, p) && p[0] !== "_" && kn(
                  p,
                  e[p],
                  a,
                  c + 1,
                  o
                );
              a.push([
                "",
                t ? ">…</" + f + ">" : "/>"
              ]);
              return;
            }
            if (f = Object.prototype.toString.call(e), f = f.slice(8, f.length - 1), f === "Array") {
              if (p = Ap(e), p === m1 || p === Vv) {
                e = JSON.stringify(e);
                break;
              } else if (p === y1) {
                for (a.push([
                  o + "  ".repeat(c) + t,
                  ""
                ]), t = 0; t < e.length; t++)
                  f = e[t], kn(
                    f[0],
                    f[1],
                    a,
                    c + 1,
                    o
                  );
                return;
              }
            }
            if (f === "Promise") {
              if (e.status === "fulfilled") {
                if (f = a.length, kn(
                  t,
                  e.value,
                  a,
                  c,
                  o
                ), a.length > f) {
                  a = a[f], a[1] = "Promise<" + (a[1] || "Object") + ">";
                  return;
                }
              } else if (e.status === "rejected" && (f = a.length, kn(
                t,
                e.reason,
                a,
                c,
                o
              ), a.length > f)) {
                a = a[f], a[1] = "Rejected Promise<" + a[1] + ">";
                return;
              }
              a.push([
                "  ".repeat(c) + t,
                "Promise"
              ]);
              return;
            }
            f === "Object" && (p = Object.getPrototypeOf(e)) && typeof p.constructor == "function" && (f = p.constructor.name), a.push([
              o + "  ".repeat(c) + t,
              f === "Object" ? 3 > c ? "" : "…" : f
            ]), 3 > c && Om(e, a, c + 1, o);
            return;
          }
        case "function":
          e = e.name === "" ? "() => {}" : e.name + "() {}";
          break;
        case "string":
          e = e === ET ? "…" : JSON.stringify(e);
          break;
        case "undefined":
          e = "undefined";
          break;
        case "boolean":
          e = e ? "true" : "false";
          break;
        default:
          e = String(e);
      }
      a.push([
        o + "  ".repeat(c) + t,
        e
      ]);
    }
    function zp(t, e, a, c) {
      var o = !0;
      for (d in t)
        d in e || (a.push([
          Zv + "  ".repeat(c) + d,
          "…"
        ]), o = !1);
      for (var f in e)
        if (f in t) {
          var d = t[f], h = e[f];
          if (d !== h) {
            if (c === 0 && f === "children")
              o = "  ".repeat(c) + f, a.push(
                [Zv + o, "…"],
                [Lv + o, "…"]
              );
            else {
              if (!(3 <= c)) {
                if (typeof d == "object" && typeof h == "object" && d !== null && h !== null && d.$$typeof === h.$$typeof)
                  if (h.$$typeof === on) {
                    if (d.type === h.type && d.key === h.key) {
                      d = ut(h.type) || "…", o = "  ".repeat(c) + f, d = "<" + d + " … />", a.push(
                        [Zv + o, d],
                        [Lv + o, d]
                      ), o = !1;
                      continue;
                    }
                  } else {
                    var y = Object.prototype.toString.call(d), p = Object.prototype.toString.call(h);
                    if (y === p && (p === "[object Object]" || p === "[object Array]")) {
                      y = [
                        NS + "  ".repeat(c) + f,
                        p === "[object Array]" ? "Array" : ""
                      ], a.push(y), p = a.length, zp(
                        d,
                        h,
                        a,
                        c + 1
                      ) ? p === a.length && (y[1] = "Referentially unequal but deeply equal objects. Consider memoization.") : o = !1;
                      continue;
                    }
                  }
                else if (typeof d == "function" && typeof h == "function" && d.name === h.name && d.length === h.length && (y = Function.prototype.toString.call(d), p = Function.prototype.toString.call(h), y === p)) {
                  d = h.name === "" ? "() => {}" : h.name + "() {}", a.push([
                    NS + "  ".repeat(c) + f,
                    d + " Referentially unequal function closure. Consider memoization."
                  ]);
                  continue;
                }
              }
              kn(f, d, a, c, Zv), kn(f, h, a, c, Lv);
            }
            o = !1;
          }
        } else
          a.push([
            Lv + "  ".repeat(c) + f,
            "…"
          ]), o = !1;
      return o;
    }
    function gn(t) {
      Vt = t & 63 ? "Blocking" : t & 64 ? "Gesture" : t & 4194176 ? "Transition" : t & 62914560 ? "Suspense" : t & 2080374784 ? "Idle" : "Other";
    }
    function Fa(t, e, a, c) {
      Ue && (Df.start = e, Df.end = a, ki.color = "warning", ki.tooltipText = c, ki.properties = null, (t = t._debugTask) ? t.run(
        performance.measure.bind(
          performance,
          c,
          Df
        )
      ) : performance.measure(c, Df));
    }
    function ed(t, e, a) {
      Fa(t, e, a, "Reconnect");
    }
    function ld(t, e, a, c, o) {
      var f = W(t);
      if (f !== null && Ue) {
        var d = t.alternate, h = t.actualDuration;
        if (d === null || d.child !== t.child)
          for (var y = t.child; y !== null; y = y.sibling)
            h -= y.actualDuration;
        c = 0.5 > h ? c ? "tertiary-light" : "primary-light" : 10 > h ? c ? "tertiary" : "primary" : 100 > h ? c ? "tertiary-dark" : "primary-dark" : "error";
        var p = t.memoizedProps;
        h = t._debugTask, p !== null && d !== null && d.memoizedProps !== p ? (y = [AT], p = zp(
          d.memoizedProps,
          p,
          y,
          0
        ), 1 < y.length && (p && !zf && (d.lanes & o) === 0 && 100 < t.actualDuration ? (zf = !0, y[0] = zT, ki.color = "warning", ki.tooltipText = xS) : (ki.color = c, ki.tooltipText = f), ki.properties = y, Df.start = e, Df.end = a, h != null ? h.run(
          performance.measure.bind(
            performance,
            "​" + f,
            Df
          )
        ) : performance.measure(
          "​" + f,
          Df
        ))) : h != null ? h.run(
          console.timeStamp.bind(
            console,
            f,
            e,
            a,
            Au,
            void 0,
            c
          )
        ) : console.timeStamp(
          f,
          e,
          a,
          Au,
          void 0,
          c
        );
      }
    }
    function Mm(t, e, a, c) {
      if (Ue) {
        var o = W(t);
        if (o !== null) {
          for (var f = null, d = [], h = 0; h < c.length; h++) {
            var y = c[h];
            f == null && y.source !== null && (f = y.source._debugTask), y = y.value, d.push([
              "Error",
              typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y)
            ]);
          }
          t.key !== null && kn("key", t.key, d, 0, ""), t.memoizedProps !== null && Om(t.memoizedProps, d, 0, ""), f == null && (f = t._debugTask), t = {
            start: e,
            end: a,
            detail: {
              devtools: {
                color: "error",
                track: Au,
                tooltipText: t.tag === 13 ? "Hydration failed" : "Error boundary caught an error",
                properties: d
              }
            }
          }, f ? f.run(
            performance.measure.bind(performance, "​" + o, t)
          ) : performance.measure("​" + o, t);
        }
      }
    }
    function Sn(t, e, a, c, o) {
      if (o !== null) {
        if (Ue) {
          var f = W(t);
          if (f !== null) {
            c = [];
            for (var d = 0; d < o.length; d++) {
              var h = o[d].value;
              c.push([
                "Error",
                typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
              ]);
            }
            t.key !== null && kn("key", t.key, c, 0, ""), t.memoizedProps !== null && Om(t.memoizedProps, c, 0, ""), e = {
              start: e,
              end: a,
              detail: {
                devtools: {
                  color: "error",
                  track: Au,
                  tooltipText: "A lifecycle or effect errored",
                  properties: c
                }
              }
            }, (t = t._debugTask) ? t.run(
              performance.measure.bind(
                performance,
                "​" + f,
                e
              )
            ) : performance.measure("​" + f, e);
          }
        }
      } else
        f = W(t), f !== null && Ue && (o = 1 > c ? "secondary-light" : 100 > c ? "secondary" : 500 > c ? "secondary-dark" : "error", (t = t._debugTask) ? t.run(
          console.timeStamp.bind(
            console,
            f,
            e,
            a,
            Au,
            void 0,
            o
          )
        ) : console.timeStamp(
          f,
          e,
          a,
          Au,
          void 0,
          o
        ));
    }
    function Zg(t, e, a, c) {
      if (Ue && !(e <= t)) {
        var o = (a & 738197653) === a ? "tertiary-dark" : "primary-dark";
        a = (a & 536870912) === a ? "Prepared" : (a & 201326741) === a ? "Hydrated" : "Render", c ? c.run(
          console.timeStamp.bind(
            console,
            a,
            t,
            e,
            Vt,
            Gt,
            o
          )
        ) : console.timeStamp(
          a,
          t,
          e,
          Vt,
          Gt,
          o
        );
      }
    }
    function Dp(t, e, a, c) {
      !Ue || e <= t || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", c ? c.run(
        console.timeStamp.bind(
          console,
          "Prewarm",
          t,
          e,
          Vt,
          Gt,
          a
        )
      ) : console.timeStamp(
        "Prewarm",
        t,
        e,
        Vt,
        Gt,
        a
      ));
    }
    function Op(t, e, a, c) {
      !Ue || e <= t || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", c ? c.run(
        console.timeStamp.bind(
          console,
          "Suspended",
          t,
          e,
          Vt,
          Gt,
          a
        )
      ) : console.timeStamp(
        "Suspended",
        t,
        e,
        Vt,
        Gt,
        a
      ));
    }
    function Lg(t, e, a, c, o, f) {
      if (Ue && !(e <= t)) {
        a = [];
        for (var d = 0; d < c.length; d++) {
          var h = c[d].value;
          a.push([
            "Recoverable Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        t = {
          start: t,
          end: e,
          detail: {
            devtools: {
              color: "primary-dark",
              track: Vt,
              trackGroup: Gt,
              tooltipText: o ? "Hydration Failed" : "Recovered after Error",
              properties: a
            }
          }
        }, f ? f.run(
          performance.measure.bind(performance, "Recovered", t)
        ) : performance.measure("Recovered", t);
      }
    }
    function Rm(t, e, a, c) {
      !Ue || e <= t || (c ? c.run(
        console.timeStamp.bind(
          console,
          "Errored",
          t,
          e,
          Vt,
          Gt,
          "error"
        )
      ) : console.timeStamp(
        "Errored",
        t,
        e,
        Vt,
        Gt,
        "error"
      ));
    }
    function wg(t, e, a, c) {
      !Ue || e <= t || (c ? c.run(
        console.timeStamp.bind(
          console,
          a,
          t,
          e,
          Vt,
          Gt,
          "secondary-light"
        )
      ) : console.timeStamp(
        a,
        t,
        e,
        Vt,
        Gt,
        "secondary-light"
      ));
    }
    function Mp(t, e, a, c, o) {
      if (Ue && !(e <= t)) {
        for (var f = [], d = 0; d < a.length; d++) {
          var h = a[d].value;
          f.push([
            "Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        t = {
          start: t,
          end: e,
          detail: {
            devtools: {
              color: "error",
              track: Vt,
              trackGroup: Gt,
              tooltipText: c ? "Remaining Effects Errored" : "Commit Errored",
              properties: f
            }
          }
        }, o ? o.run(
          performance.measure.bind(performance, "Errored", t)
        ) : performance.measure("Errored", t);
      }
    }
    function Um(t, e, a) {
      !Ue || e <= t || console.timeStamp(
        "Animating",
        t,
        e,
        Vt,
        Gt,
        "secondary-dark"
      );
    }
    function ad() {
      for (var t = Nh, e = p1 = Nh = 0; e < t; ) {
        var a = zu[e];
        zu[e++] = null;
        var c = zu[e];
        zu[e++] = null;
        var o = zu[e];
        zu[e++] = null;
        var f = zu[e];
        if (zu[e++] = null, c !== null && o !== null) {
          var d = c.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), c.pending = o;
        }
        f !== 0 && Cm(a, o, f);
      }
    }
    function zo(t, e, a, c) {
      zu[Nh++] = t, zu[Nh++] = e, zu[Nh++] = a, zu[Nh++] = c, p1 |= c, t.lanes |= c, t = t.alternate, t !== null && (t.lanes |= c);
    }
    function di(t, e, a, c) {
      return zo(t, e, a, c), cs(t);
    }
    function Yl(t, e) {
      return zo(t, null, null, e), cs(t);
    }
    function Cm(t, e, a) {
      t.lanes |= a;
      var c = t.alternate;
      c !== null && (c.lanes |= a);
      for (var o = !1, f = t.return; f !== null; )
        f.childLanes |= a, c = f.alternate, c !== null && (c.childLanes |= a), f.tag === 22 && (t = f.stateNode, t === null || t._visibility & A0 || (o = !0)), t = f, f = f.return;
      return t.tag === 3 ? (f = t.stateNode, o && e !== null && (o = 31 - Hl(a), t = f.hiddenUpdates, c = t[o], c === null ? t[o] = [e] : c.push(e), e.lane = a | 536870912), f) : null;
    }
    function cs(t) {
      if (k0 > XT)
        throw Rr = k0 = 0, F0 = W1 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Rr > QT && (Rr = 0, F0 = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), t.alternate === null && (t.flags & 4098) !== 0 && cn(t);
      for (var e = t, a = e.return; a !== null; )
        e.alternate === null && (e.flags & 4098) !== 0 && cn(t), e = a, a = e.return;
      return e.tag === 3 ? e.stateNode : null;
    }
    function gc(t) {
      if (Du === null) return t;
      var e = Du(t);
      return e === void 0 ? t : e.current;
    }
    function nd(t) {
      if (Du === null) return t;
      var e = Du(t);
      return e === void 0 ? t != null && typeof t.render == "function" && (e = gc(t.render), t.render !== e) ? (e = { $$typeof: df, render: e }, t.displayName !== void 0 && (e.displayName = t.displayName), e) : t : e.current;
    }
    function _m(t, e) {
      if (Du === null) return !1;
      var a = t.elementType;
      e = e.type;
      var c = !1, o = typeof e == "object" && e !== null ? e.$$typeof : null;
      switch (t.tag) {
        case 1:
          typeof e == "function" && (c = !0);
          break;
        case 0:
          (typeof e == "function" || o === Xl) && (c = !0);
          break;
        case 11:
          (o === df || o === Xl) && (c = !0);
          break;
        case 14:
        case 15:
          (o === cr || o === Xl) && (c = !0);
          break;
        default:
          return !1;
      }
      return !!(c && (t = Du(a), t !== void 0 && t === Du(e)));
    }
    function hi(t) {
      Du !== null && typeof WeakSet == "function" && (xh === null && (xh = /* @__PURE__ */ new WeakSet()), xh.add(t));
    }
    function Rp(t, e, a) {
      do {
        var c = t, o = c.alternate, f = c.child, d = c.sibling, h = c.tag;
        c = c.type;
        var y = null;
        switch (h) {
          case 0:
          case 15:
          case 1:
            y = c;
            break;
          case 11:
            y = c.render;
        }
        if (Du === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var p = !1;
        if (c = !1, y !== null && (y = Du(y), y !== void 0 && (a.has(y) ? c = !0 : e.has(y) && (h === 1 ? c = !0 : p = !0))), xh !== null && (xh.has(t) || o !== null && xh.has(o)) && (c = !0), c && (t._debugNeedsRemount = !0), (c || p) && (o = Yl(t, 2), o !== null && yt(o, t, 2)), f === null || c || Rp(
          f,
          e,
          a
        ), d === null) break;
        t = d;
      } while (!0);
    }
    function Jg(t, e, a, c) {
      this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, qS || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Hm(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function Fn(t, e) {
      var a = t.alternate;
      switch (a === null ? (a = xt(
        t.tag,
        e,
        t.key,
        t.mode
      ), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a._debugOwner = t._debugOwner, a._debugStack = t._debugStack, a._debugTask = t._debugTask, a._debugHookTypes = t._debugHookTypes, a.alternate = t, t.alternate = a) : (a.pendingProps = e, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = t.flags & 65011712, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, e = t.dependencies, a.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext,
        _debugThenableState: e._debugThenableState
      }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a.selfBaseDuration = t.selfBaseDuration, a.treeBaseDuration = t.treeBaseDuration, a._debugInfo = t._debugInfo, a._debugNeedsRemount = t._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = gc(t.type);
          break;
        case 1:
          a.type = gc(t.type);
          break;
        case 11:
          a.type = nd(t.type);
      }
      return a;
    }
    function Bm(t, e) {
      t.flags &= 65011714;
      var a = t.alternate;
      return a === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null, t.selfBaseDuration = 0, t.treeBaseDuration = 0) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, e = a.dependencies, t.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext,
        _debugThenableState: e._debugThenableState
      }, t.selfBaseDuration = a.selfBaseDuration, t.treeBaseDuration = a.treeBaseDuration), t;
    }
    function mi(t, e, a, c, o, f) {
      var d = 0, h = t;
      if (typeof t == "function")
        Hm(t) && (d = 1), h = gc(h);
      else if (typeof t == "string")
        d = Q(), d = Av(t, a, d) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
      else
        t: switch (t) {
          case Yn:
            return e = xt(31, a, e, o), e.elementType = Yn, e.lanes = f, e;
          case rf:
            return yi(
              a.children,
              o,
              f,
              e
            );
          case oa:
            d = 8, o |= ba, o |= cc;
            break;
          case ur:
            return t = a, c = o, typeof t.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof t.id
            ), e = xt(12, t, e, c | Mt), e.elementType = ur, e.lanes = f, e.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, e;
          case wi:
            return e = xt(13, a, e, o), e.elementType = wi, e.lanes = f, e;
          case ga:
            return e = xt(19, a, e, o), e.elementType = ga, e.lanes = f, e;
          default:
            if (typeof t == "object" && t !== null)
              switch (t.$$typeof) {
                case qn:
                  d = 10;
                  break t;
                case ph:
                  d = 9;
                  break t;
                case df:
                  d = 11, h = nd(h);
                  break t;
                case cr:
                  d = 14;
                  break t;
                case Xl:
                  d = 16, h = null;
                  break t;
              }
            h = "", (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), t === null ? a = "null" : ll(t) ? a = "array" : t !== void 0 && t.$$typeof === on ? (a = "<" + (ut(t.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof t, (d = c ? St(c) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return e = xt(d, a, e, o), e.elementType = t, e.type = h, e.lanes = f, e._debugOwner = c, e;
    }
    function Sc(t, e, a) {
      return e = mi(
        t.type,
        t.key,
        t.props,
        t._owner,
        e,
        a
      ), e._debugOwner = t._owner, e._debugStack = t._debugStack, e._debugTask = t._debugTask, e;
    }
    function yi(t, e, a, c) {
      return t = xt(7, t, c, e), t.lanes = a, t;
    }
    function Do(t, e, a) {
      return t = xt(6, t, null, e), t.lanes = a, t;
    }
    function Nm(t) {
      var e = xt(18, null, null, mt);
      return e.stateNode = t, e;
    }
    function ud(t, e, a) {
      return e = xt(
        4,
        t.children !== null ? t.children : [],
        t.key,
        e
      ), e.lanes = a, e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
      }, e;
    }
    function Wl(t, e) {
      if (typeof t == "object" && t !== null) {
        var a = v1.get(t);
        return a !== void 0 ? a : (e = {
          value: t,
          source: e,
          stack: Te(e)
        }, v1.set(t, e), e);
      }
      return {
        value: t,
        source: e,
        stack: Te(e)
      };
    }
    function bn(t, e) {
      bc(), qh[Yh++] = z0, qh[Yh++] = wv, wv = t, z0 = e;
    }
    function xm(t, e, a) {
      bc(), Ou[Mu++] = Ii, Ou[Mu++] = Pi, Ou[Mu++] = hr, hr = t;
      var c = Ii;
      t = Pi;
      var o = 32 - Hl(c) - 1;
      c &= ~(1 << o), a += 1;
      var f = 32 - Hl(e) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (c & (1 << d) - 1).toString(32), c >>= d, o -= d, Ii = 1 << 32 - Hl(e) + o | a << o | c, Pi = f + t;
      } else
        Ii = 1 << f | a << o | c, Pi = t;
    }
    function cd(t) {
      bc(), t.return !== null && (bn(t, 1), xm(t, 1, 0));
    }
    function id(t) {
      for (; t === wv; )
        wv = qh[--Yh], qh[Yh] = null, z0 = qh[--Yh], qh[Yh] = null;
      for (; t === hr; )
        hr = Ou[--Mu], Ou[Mu] = null, Pi = Ou[--Mu], Ou[Mu] = null, Ii = Ou[--Mu], Ou[Mu] = null;
    }
    function Up() {
      return bc(), hr !== null ? { id: Ii, overflow: Pi } : null;
    }
    function Cp(t, e) {
      bc(), Ou[Mu++] = Ii, Ou[Mu++] = Pi, Ou[Mu++] = hr, Ii = e.id, Pi = e.overflow, hr = t;
    }
    function bc() {
      jt || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function pi(t, e) {
      if (t.return === null) {
        if (Gn === null)
          Gn = {
            fiber: t,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: e
          };
        else {
          if (Gn.fiber !== t)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          Gn.distanceFromLeaf > e && (Gn.distanceFromLeaf = e);
        }
        return Gn;
      }
      var a = pi(
        t.return,
        e + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === t ? (a = a[a.length - 1], a.distanceFromLeaf > e && (a.distanceFromLeaf = e), a) : (e = {
        fiber: t,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: e
      }, a.push(e), e);
    }
    function _p() {
      jt && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function jl(t, e) {
      kc || (t = pi(t, 0), t.serverProps = null, e !== null && (e = Sv(e), t.serverTail.push(e)));
    }
    function Ia(t) {
      var e = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, a = "", c = Gn;
      throw c !== null && (Gn = null, a = ym(c)), os(
        Wl(
          Error(
            "Hydration failed because the server rendered " + (e ? "text" : "HTML") + ` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + a
          ),
          t
        )
      ), g1;
    }
    function qm(t) {
      var e = t.stateNode, a = t.type, c = t.memoizedProps;
      switch (e[Re] = t, e[fa] = c, ca(a, c), a) {
        case "dialog":
          dt("cancel", e), dt("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          dt("load", e);
          break;
        case "video":
        case "audio":
          for (a = 0; a < I0.length; a++)
            dt(I0[a], e);
          break;
        case "source":
          dt("error", e);
          break;
        case "img":
        case "image":
        case "link":
          dt("error", e), dt("load", e);
          break;
        case "details":
          dt("toggle", e);
          break;
        case "input":
          ai("input", c), dt("invalid", e), $l(e, c), Vr(
            e,
            c.value,
            c.defaultValue,
            c.checked,
            c.defaultChecked,
            c.type,
            c.name,
            !0
          );
          break;
        case "option":
          mp(e, c);
          break;
        case "select":
          ai("select", c), dt("invalid", e), Zr(e, c);
          break;
        case "textarea":
          ai("textarea", c), dt("invalid", e), ni(e, c), yo(
            e,
            c.value,
            c.defaultValue,
            c.children
          );
      }
      a = c.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || c.suppressHydrationWarning === !0 || jy(e.textContent, a) ? (c.popover != null && (dt("beforetoggle", e), dt("toggle", e)), c.onScroll != null && dt("scroll", e), c.onScrollEnd != null && dt("scrollend", e), c.onClick != null && (e.onclick = ka), e = !0) : e = !1, e || Ia(t, !0);
    }
    function Ym(t) {
      for (sa = t.return; sa; )
        switch (sa.tag) {
          case 5:
          case 31:
          case 13:
            Ru = !1;
            return;
          case 27:
          case 3:
            Ru = !0;
            return;
          default:
            sa = sa.return;
        }
    }
    function vi(t) {
      if (t !== sa) return !1;
      if (!jt)
        return Ym(t), jt = !0, !1;
      var e = t.tag, a;
      if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || lf(t.type, t.memoizedProps)), a = !a), a && Ce) {
        for (a = Ce; a; ) {
          var c = pi(t, 0), o = Sv(a);
          c.serverTail.push(o), a = o.type === "Suspense" ? uf(a) : ja(a.nextSibling);
        }
        Ia(t);
      }
      if (Ym(t), e === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Ce = uf(t);
      } else if (e === 31) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Ce = uf(t);
      } else
        e === 27 ? (e = Ce, Zc(t.type) ? (t = iS, iS = null, Ce = t) : Ce = e) : Ce = sa ? ja(t.stateNode.nextSibling) : null;
      return !0;
    }
    function Tc() {
      Ce = sa = null, kc = jt = !1;
    }
    function is() {
      var t = Mf;
      return t !== null && (Ja === null ? Ja = t : Ja.push.apply(
        Ja,
        t
      ), Mf = null), t;
    }
    function os(t) {
      Mf === null ? Mf = [t] : Mf.push(t);
    }
    function Ec() {
      var t = Gn;
      if (t !== null) {
        Gn = null;
        for (var e = ym(t); 0 < t.children.length; )
          t = t.children[0];
        k(t.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            e
          );
        });
      }
    }
    function Oo() {
      jh = Jv = null, Gh = !1;
    }
    function Pa(t, e, a) {
      Ct(S1, e._currentValue, t), e._currentValue = a, Ct(b1, e._currentRenderer, t), e._currentRenderer !== void 0 && e._currentRenderer !== null && e._currentRenderer !== jS && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), e._currentRenderer = jS;
    }
    function Tn(t, e) {
      t._currentValue = S1.current;
      var a = b1.current;
      Et(b1, e), t._currentRenderer = a, Et(S1, e);
    }
    function od(t, e, a) {
      for (; t !== null; ) {
        var c = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e, c !== null && (c.childLanes |= e)) : c !== null && (c.childLanes & e) !== e && (c.childLanes |= e), t === a) break;
        t = t.return;
      }
      t !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Xu(t, e, a, c) {
      var o = t.child;
      for (o !== null && (o.return = t); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          t: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var y = 0; y < e.length; y++)
              if (h.context === e[y]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), od(
                  f.return,
                  a,
                  t
                ), c || (d = null);
                break t;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), od(
            d,
            a,
            t
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === t) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function En(t, e, a, c) {
      t = null;
      for (var o = e, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            Va(o.pendingProps.value, d.value) || (t !== null ? t.push(h) : t = [h]);
          }
        } else if (o === Kc.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (t !== null ? t.push(ap) : t = [ap]);
        }
        o = o.return;
      }
      t !== null && Xu(
        e,
        t,
        a,
        c
      ), e.flags |= 262144;
    }
    function Mo(t) {
      for (t = t.firstContext; t !== null; ) {
        if (!Va(
          t.context._currentValue,
          t.memoizedValue
        ))
          return !0;
        t = t.next;
      }
      return !1;
    }
    function Ac(t) {
      Jv = t, jh = null, t = t.dependencies, t !== null && (t.firstContext = null);
    }
    function $t(t) {
      return Gh && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), jm(Jv, t);
    }
    function fs(t, e) {
      return Jv === null && Ac(t), jm(t, e);
    }
    function jm(t, e) {
      var a = e._currentValue;
      if (e = { context: e, memoizedValue: a, next: null }, jh === null) {
        if (t === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        jh = e, t.dependencies = {
          lanes: 0,
          firstContext: e,
          _debugThenableState: null
        }, t.flags |= 524288;
      } else jh = jh.next = e;
      return a;
    }
    function fd() {
      return {
        controller: new MT(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function gi(t) {
      t.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), t.refCount++;
    }
    function ss(t) {
      t.refCount--, 0 > t.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), t.refCount === 0 && RT(UT, function() {
        t.controller.abort();
      });
    }
    function In(t, e, a) {
      (t & 127) !== 0 ? 0 > Fc && (Fc = Al(), O0 = Kv(e), T1 = e, a != null && (E1 = W(a)), (Lt & (xl | Vn)) !== Ll && (Ie = !0, Uf = D0), t = af(), e = vu(), t !== Xh || e !== M0 ? Xh = -1.1 : e !== null && (Uf = D0), pr = t, M0 = e) : (t & 4194048) !== 0 && 0 > Uu && (Uu = Al(), R0 = Kv(e), GS = e, a != null && (XS = W(a)), 0 > ao) && (t = af(), e = vu(), (t !== _f || e !== vr) && (_f = -1.1), Cf = t, vr = e);
    }
    function Hp(t) {
      if (0 > Fc) {
        Fc = Al(), O0 = t._debugTask != null ? t._debugTask : null, (Lt & (xl | Vn)) !== Ll && (Uf = D0);
        var e = af(), a = vu();
        e !== Xh || a !== M0 ? Xh = -1.1 : a !== null && (Uf = D0), pr = e, M0 = a;
      }
      0 > Uu && (Uu = Al(), R0 = t._debugTask != null ? t._debugTask : null, 0 > ao) && (t = af(), e = vu(), (t !== _f || e !== vr) && (_f = -1.1), Cf = t, vr = e);
    }
    function Pn() {
      var t = mr;
      return mr = 0, t;
    }
    function Ro(t) {
      var e = mr;
      return mr = t, e;
    }
    function kl(t) {
      var e = mr;
      return mr += t, e;
    }
    function Si() {
      rt = it = -1.1;
    }
    function De() {
      var t = it;
      return it = -1.1, t;
    }
    function yl(t) {
      0 <= t && (it = t);
    }
    function tn() {
      var t = Le;
      return Le = -0, t;
    }
    function Oa(t) {
      0 <= t && (Le = t);
    }
    function Ma() {
      var t = qe;
      return qe = null, t;
    }
    function en() {
      var t = Ie;
      return Ie = !1, t;
    }
    function Qu(t) {
      Za = Al(), 0 > t.actualStartTime && (t.actualStartTime = Za);
    }
    function sd(t) {
      if (0 <= Za) {
        var e = Al() - Za;
        t.actualDuration += e, t.selfBaseDuration = e, Za = -1;
      }
    }
    function rs(t) {
      if (0 <= Za) {
        var e = Al() - Za;
        t.actualDuration += e, Za = -1;
      }
    }
    function Fl() {
      if (0 <= Za) {
        var t = Al(), e = t - Za;
        Za = -1, mr += e, Le += e, rt = t;
      }
    }
    function Bp(t) {
      qe === null && (qe = []), qe.push(t), eo === null && (eo = []), eo.push(t);
    }
    function Qe() {
      Za = Al(), 0 > it && (it = Za);
    }
    function bi(t) {
      for (var e = t.child; e; )
        t.actualDuration += e.actualDuration, e = e.sibling;
    }
    function Vu(t, e) {
      if (C0 === null) {
        var a = C0 = [];
        z1 = 0, gr = Yy(), Qh = {
          status: "pending",
          value: void 0,
          then: function(c) {
            a.push(c);
          }
        };
      }
      return z1++, e.then(Gm, Gm), e;
    }
    function Gm() {
      if (--z1 === 0 && (-1 < Uu || (ao = -1.1), C0 !== null)) {
        Qh !== null && (Qh.status = "fulfilled");
        var t = C0;
        C0 = null, gr = 0, Qh = null;
        for (var e = 0; e < t.length; e++) (0, t[e])();
      }
    }
    function rd(t, e) {
      var a = [], c = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return t.then(
        function() {
          c.status = "fulfilled", c.value = e;
          for (var o = 0; o < a.length; o++) (0, a[o])(e);
        },
        function(o) {
          for (c.status = "rejected", c.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), c;
    }
    function Zu() {
      var t = Sr.current;
      return t !== null ? t : Se.pooledCache;
    }
    function Uo(t, e) {
      e === null ? Ct(Sr, Sr.current, t) : Ct(Sr, e.pool, t);
    }
    function Xm() {
      var t = Zu();
      return t === null ? null : { parent: El._currentValue, pool: t };
    }
    function dd() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Qm(t) {
      return t = t.status, t === "fulfilled" || t === "rejected";
    }
    function Ra(t, e, a) {
      N.actQueue !== null && (N.didUsePromise = !0);
      var c = t.thenables;
      if (a = c[a], a === void 0 ? c.push(e) : a !== e && (t.didWarnAboutUncachedPromise || (t.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), e.then(ka, ka), e = a), e._debugInfo === void 0) {
        t = performance.now(), c = e.displayName;
        var o = {
          name: typeof c == "string" ? c : "Promise",
          start: t,
          end: t,
          value: e
        };
        e._debugInfo = [{ awaited: o }], e.status !== "fulfilled" && e.status !== "rejected" && (t = function() {
          o.end = performance.now();
        }, e.then(t, t));
      }
      switch (e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw t = e.reason, ds(t), t;
        default:
          if (typeof e.status == "string")
            e.then(ka, ka);
          else {
            if (t = Se, t !== null && 100 < t.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            t = e, t.status = "pending", t.then(
              function(f) {
                if (e.status === "pending") {
                  var d = e;
                  d.status = "fulfilled", d.value = f;
                }
              },
              function(f) {
                if (e.status === "pending") {
                  var d = e;
                  d.status = "rejected", d.reason = f;
                }
              }
            );
          }
          switch (e.status) {
            case "fulfilled":
              return e.value;
            case "rejected":
              throw t = e.reason, ds(t), t;
          }
          throw Tr = e, Y0 = !0, Vh;
      }
    }
    function Ua(t) {
      try {
        return NT(t);
      } catch (e) {
        throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Tr = e, Y0 = !0, Vh) : e;
      }
    }
    function Ti() {
      if (Tr === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var t = Tr;
      return Tr = null, Y0 = !1, t;
    }
    function ds(t) {
      if (t === Vh || t === eg)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function Ke(t) {
      var e = Rt;
      return t != null && (Rt = e === null ? t : e.concat(t)), e;
    }
    function da() {
      var t = Rt;
      if (t != null) {
        for (var e = t.length - 1; 0 <= e; e--)
          if (t[e].name != null) {
            var a = t[e].debugTask;
            if (a != null) return a;
          }
      }
      return null;
    }
    function Il(t, e, a) {
      for (var c = Object.keys(t.props), o = 0; o < c.length; o++) {
        var f = c[o];
        if (f !== "children" && f !== "key") {
          e === null && (e = Sc(t, a.mode, 0), e._debugInfo = Rt, e.return = a), k(
            e,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function An(t) {
      var e = j0;
      return j0 += 1, Zh === null && (Zh = dd()), Ra(Zh, t, e);
    }
    function ha(t, e) {
      e = e.props.ref, t.ref = e !== void 0 ? e : null;
    }
    function zn(t, e) {
      throw e.$$typeof === Uv ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (t = Object.prototype.toString.call(e), Error(
        "Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function ln(t, e) {
      var a = da();
      a !== null ? a.run(
        zn.bind(null, t, e)
      ) : zn(t, e);
    }
    function Vm(t, e) {
      var a = W(t) || "Component";
      cb[a] || (cb[a] = !0, e = e.displayName || e.name || "Component", t.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        e,
        e,
        e
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        e,
        e,
        a,
        e,
        a
      ));
    }
    function Co(t, e) {
      var a = da();
      a !== null ? a.run(
        Vm.bind(null, t, e)
      ) : Vm(t, e);
    }
    function hd(t, e) {
      var a = W(t) || "Component";
      ib[a] || (ib[a] = !0, e = String(e), t.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        e
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        e,
        a
      ));
    }
    function hs(t, e) {
      var a = da();
      a !== null ? a.run(
        hd.bind(null, t, e)
      ) : hd(t, e);
    }
    function pl(t) {
      function e(g, b) {
        if (t) {
          var E = g.deletions;
          E === null ? (g.deletions = [b], g.flags |= 16) : E.push(b);
        }
      }
      function a(g, b) {
        if (!t) return null;
        for (; b !== null; )
          e(g, b), b = b.sibling;
        return null;
      }
      function c(g) {
        for (var b = /* @__PURE__ */ new Map(); g !== null; )
          g.key !== null ? b.set(g.key, g) : b.set(g.index, g), g = g.sibling;
        return b;
      }
      function o(g, b) {
        return g = Fn(g, b), g.index = 0, g.sibling = null, g;
      }
      function f(g, b, E) {
        return g.index = E, t ? (E = g.alternate, E !== null ? (E = E.index, E < b ? (g.flags |= 67108866, b) : E) : (g.flags |= 67108866, b)) : (g.flags |= 1048576, b);
      }
      function d(g) {
        return t && g.alternate === null && (g.flags |= 67108866), g;
      }
      function h(g, b, E, Y) {
        return b === null || b.tag !== 6 ? (b = Do(
          E,
          g.mode,
          Y
        ), b.return = g, b._debugOwner = g, b._debugTask = g._debugTask, b._debugInfo = Rt, b) : (b = o(b, E), b.return = g, b._debugInfo = Rt, b);
      }
      function y(g, b, E, Y) {
        var K = E.type;
        return K === rf ? (b = A(
          g,
          b,
          E.props.children,
          Y,
          E.key
        ), Il(E, b, g), b) : b !== null && (b.elementType === K || _m(b, E) || typeof K == "object" && K !== null && K.$$typeof === Xl && Ua(K) === b.type) ? (b = o(b, E.props), ha(b, E), b.return = g, b._debugOwner = E._owner, b._debugInfo = Rt, b) : (b = Sc(E, g.mode, Y), ha(b, E), b.return = g, b._debugInfo = Rt, b);
      }
      function p(g, b, E, Y) {
        return b === null || b.tag !== 4 || b.stateNode.containerInfo !== E.containerInfo || b.stateNode.implementation !== E.implementation ? (b = ud(E, g.mode, Y), b.return = g, b._debugInfo = Rt, b) : (b = o(b, E.children || []), b.return = g, b._debugInfo = Rt, b);
      }
      function A(g, b, E, Y, K) {
        return b === null || b.tag !== 7 ? (b = yi(
          E,
          g.mode,
          Y,
          K
        ), b.return = g, b._debugOwner = g, b._debugTask = g._debugTask, b._debugInfo = Rt, b) : (b = o(b, E), b.return = g, b._debugInfo = Rt, b);
      }
      function D(g, b, E) {
        if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
          return b = Do(
            "" + b,
            g.mode,
            E
          ), b.return = g, b._debugOwner = g, b._debugTask = g._debugTask, b._debugInfo = Rt, b;
        if (typeof b == "object" && b !== null) {
          switch (b.$$typeof) {
            case on:
              return E = Sc(
                b,
                g.mode,
                E
              ), ha(E, b), E.return = g, g = Ke(b._debugInfo), E._debugInfo = Rt, Rt = g, E;
            case wc:
              return b = ud(
                b,
                g.mode,
                E
              ), b.return = g, b._debugInfo = Rt, b;
            case Xl:
              var Y = Ke(b._debugInfo);
              return b = Ua(b), g = D(g, b, E), Rt = Y, g;
          }
          if (ll(b) || F(b))
            return E = yi(
              b,
              g.mode,
              E,
              null
            ), E.return = g, E._debugOwner = g, E._debugTask = g._debugTask, g = Ke(b._debugInfo), E._debugInfo = Rt, Rt = g, E;
          if (typeof b.then == "function")
            return Y = Ke(b._debugInfo), g = D(
              g,
              An(b),
              E
            ), Rt = Y, g;
          if (b.$$typeof === qn)
            return D(
              g,
              fs(g, b),
              E
            );
          ln(g, b);
        }
        return typeof b == "function" && Co(g, b), typeof b == "symbol" && hs(g, b), null;
      }
      function S(g, b, E, Y) {
        var K = b !== null ? b.key : null;
        if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
          return K !== null ? null : h(g, b, "" + E, Y);
        if (typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case on:
              return E.key === K ? (K = Ke(E._debugInfo), g = y(
                g,
                b,
                E,
                Y
              ), Rt = K, g) : null;
            case wc:
              return E.key === K ? p(g, b, E, Y) : null;
            case Xl:
              return K = Ke(E._debugInfo), E = Ua(E), g = S(
                g,
                b,
                E,
                Y
              ), Rt = K, g;
          }
          if (ll(E) || F(E))
            return K !== null ? null : (K = Ke(E._debugInfo), g = A(
              g,
              b,
              E,
              Y,
              null
            ), Rt = K, g);
          if (typeof E.then == "function")
            return K = Ke(E._debugInfo), g = S(
              g,
              b,
              An(E),
              Y
            ), Rt = K, g;
          if (E.$$typeof === qn)
            return S(
              g,
              b,
              fs(g, E),
              Y
            );
          ln(g, E);
        }
        return typeof E == "function" && Co(g, E), typeof E == "symbol" && hs(g, E), null;
      }
      function _(g, b, E, Y, K) {
        if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint")
          return g = g.get(E) || null, h(b, g, "" + Y, K);
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case on:
              return E = g.get(
                Y.key === null ? E : Y.key
              ) || null, g = Ke(Y._debugInfo), b = y(
                b,
                E,
                Y,
                K
              ), Rt = g, b;
            case wc:
              return g = g.get(
                Y.key === null ? E : Y.key
              ) || null, p(b, g, Y, K);
            case Xl:
              var gt = Ke(Y._debugInfo);
              return Y = Ua(Y), b = _(
                g,
                b,
                E,
                Y,
                K
              ), Rt = gt, b;
          }
          if (ll(Y) || F(Y))
            return E = g.get(E) || null, g = Ke(Y._debugInfo), b = A(
              b,
              E,
              Y,
              K,
              null
            ), Rt = g, b;
          if (typeof Y.then == "function")
            return gt = Ke(Y._debugInfo), b = _(
              g,
              b,
              E,
              An(Y),
              K
            ), Rt = gt, b;
          if (Y.$$typeof === qn)
            return _(
              g,
              b,
              E,
              fs(b, Y),
              K
            );
          ln(b, Y);
        }
        return typeof Y == "function" && Co(b, Y), typeof Y == "symbol" && hs(b, Y), null;
      }
      function w(g, b, E, Y) {
        if (typeof E != "object" || E === null) return Y;
        switch (E.$$typeof) {
          case on:
          case wc:
            Ta(g, b, E);
            var K = E.key;
            if (typeof K != "string") break;
            if (Y === null) {
              Y = /* @__PURE__ */ new Set(), Y.add(K);
              break;
            }
            if (!Y.has(K)) {
              Y.add(K);
              break;
            }
            k(b, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                K
              );
            });
            break;
          case Xl:
            E = Ua(E), w(g, b, E, Y);
        }
        return Y;
      }
      function $(g, b, E, Y) {
        for (var K = null, gt = null, ct = null, et = b, Dt = b = 0, _e = null; et !== null && Dt < E.length; Dt++) {
          et.index > Dt ? (_e = et, et = null) : _e = et.sibling;
          var sl = S(
            g,
            et,
            E[Dt],
            Y
          );
          if (sl === null) {
            et === null && (et = _e);
            break;
          }
          K = w(
            g,
            sl,
            E[Dt],
            K
          ), t && et && sl.alternate === null && e(g, et), b = f(sl, b, Dt), ct === null ? gt = sl : ct.sibling = sl, ct = sl, et = _e;
        }
        if (Dt === E.length)
          return a(g, et), jt && bn(g, Dt), gt;
        if (et === null) {
          for (; Dt < E.length; Dt++)
            et = D(g, E[Dt], Y), et !== null && (K = w(
              g,
              et,
              E[Dt],
              K
            ), b = f(
              et,
              b,
              Dt
            ), ct === null ? gt = et : ct.sibling = et, ct = et);
          return jt && bn(g, Dt), gt;
        }
        for (et = c(et); Dt < E.length; Dt++)
          _e = _(
            et,
            g,
            Dt,
            E[Dt],
            Y
          ), _e !== null && (K = w(
            g,
            _e,
            E[Dt],
            K
          ), t && _e.alternate !== null && et.delete(
            _e.key === null ? Dt : _e.key
          ), b = f(
            _e,
            b,
            Dt
          ), ct === null ? gt = _e : ct.sibling = _e, ct = _e);
        return t && et.forEach(function(ro) {
          return e(g, ro);
        }), jt && bn(g, Dt), gt;
      }
      function Ae(g, b, E, Y) {
        if (E == null)
          throw Error("An iterable object provided no iterator.");
        for (var K = null, gt = null, ct = b, et = b = 0, Dt = null, _e = null, sl = E.next(); ct !== null && !sl.done; et++, sl = E.next()) {
          ct.index > et ? (Dt = ct, ct = null) : Dt = ct.sibling;
          var ro = S(g, ct, sl.value, Y);
          if (ro === null) {
            ct === null && (ct = Dt);
            break;
          }
          _e = w(
            g,
            ro,
            sl.value,
            _e
          ), t && ct && ro.alternate === null && e(g, ct), b = f(ro, b, et), gt === null ? K = ro : gt.sibling = ro, gt = ro, ct = Dt;
        }
        if (sl.done)
          return a(g, ct), jt && bn(g, et), K;
        if (ct === null) {
          for (; !sl.done; et++, sl = E.next())
            ct = D(g, sl.value, Y), ct !== null && (_e = w(
              g,
              ct,
              sl.value,
              _e
            ), b = f(
              ct,
              b,
              et
            ), gt === null ? K = ct : gt.sibling = ct, gt = ct);
          return jt && bn(g, et), K;
        }
        for (ct = c(ct); !sl.done; et++, sl = E.next())
          Dt = _(
            ct,
            g,
            et,
            sl.value,
            Y
          ), Dt !== null && (_e = w(
            g,
            Dt,
            sl.value,
            _e
          ), t && Dt.alternate !== null && ct.delete(
            Dt.key === null ? et : Dt.key
          ), b = f(
            Dt,
            b,
            et
          ), gt === null ? K = Dt : gt.sibling = Dt, gt = Dt);
        return t && ct.forEach(function(nE) {
          return e(g, nE);
        }), jt && bn(g, et), K;
      }
      function Xt(g, b, E, Y) {
        if (typeof E == "object" && E !== null && E.type === rf && E.key === null && (Il(E, null, g), E = E.props.children), typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case on:
              var K = Ke(E._debugInfo);
              t: {
                for (var gt = E.key; b !== null; ) {
                  if (b.key === gt) {
                    if (gt = E.type, gt === rf) {
                      if (b.tag === 7) {
                        a(
                          g,
                          b.sibling
                        ), Y = o(
                          b,
                          E.props.children
                        ), Y.return = g, Y._debugOwner = E._owner, Y._debugInfo = Rt, Il(E, Y, g), g = Y;
                        break t;
                      }
                    } else if (b.elementType === gt || _m(
                      b,
                      E
                    ) || typeof gt == "object" && gt !== null && gt.$$typeof === Xl && Ua(gt) === b.type) {
                      a(
                        g,
                        b.sibling
                      ), Y = o(b, E.props), ha(Y, E), Y.return = g, Y._debugOwner = E._owner, Y._debugInfo = Rt, g = Y;
                      break t;
                    }
                    a(g, b);
                    break;
                  } else e(g, b);
                  b = b.sibling;
                }
                E.type === rf ? (Y = yi(
                  E.props.children,
                  g.mode,
                  Y,
                  E.key
                ), Y.return = g, Y._debugOwner = g, Y._debugTask = g._debugTask, Y._debugInfo = Rt, Il(E, Y, g), g = Y) : (Y = Sc(
                  E,
                  g.mode,
                  Y
                ), ha(Y, E), Y.return = g, Y._debugInfo = Rt, g = Y);
              }
              return g = d(g), Rt = K, g;
            case wc:
              t: {
                for (K = E, E = K.key; b !== null; ) {
                  if (b.key === E)
                    if (b.tag === 4 && b.stateNode.containerInfo === K.containerInfo && b.stateNode.implementation === K.implementation) {
                      a(
                        g,
                        b.sibling
                      ), Y = o(
                        b,
                        K.children || []
                      ), Y.return = g, g = Y;
                      break t;
                    } else {
                      a(g, b);
                      break;
                    }
                  else e(g, b);
                  b = b.sibling;
                }
                Y = ud(
                  K,
                  g.mode,
                  Y
                ), Y.return = g, g = Y;
              }
              return d(g);
            case Xl:
              return K = Ke(E._debugInfo), E = Ua(E), g = Xt(
                g,
                b,
                E,
                Y
              ), Rt = K, g;
          }
          if (ll(E))
            return K = Ke(E._debugInfo), g = $(
              g,
              b,
              E,
              Y
            ), Rt = K, g;
          if (F(E)) {
            if (K = Ke(E._debugInfo), gt = F(E), typeof gt != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var ct = gt.call(E);
            return ct === E ? (g.tag !== 0 || Object.prototype.toString.call(g.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(ct) !== "[object Generator]") && (nb || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), nb = !0) : E.entries !== gt || R1 || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), R1 = !0), g = Ae(
              g,
              b,
              ct,
              Y
            ), Rt = K, g;
          }
          if (typeof E.then == "function")
            return K = Ke(E._debugInfo), g = Xt(
              g,
              b,
              An(E),
              Y
            ), Rt = K, g;
          if (E.$$typeof === qn)
            return Xt(
              g,
              b,
              fs(g, E),
              Y
            );
          ln(g, E);
        }
        return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (K = "" + E, b !== null && b.tag === 6 ? (a(
          g,
          b.sibling
        ), Y = o(b, K), Y.return = g, g = Y) : (a(g, b), Y = Do(
          K,
          g.mode,
          Y
        ), Y.return = g, Y._debugOwner = g, Y._debugTask = g._debugTask, Y._debugInfo = Rt, g = Y), d(g)) : (typeof E == "function" && Co(g, E), typeof E == "symbol" && hs(g, E), a(g, b));
      }
      return function(g, b, E, Y) {
        var K = Rt;
        Rt = null;
        try {
          j0 = 0;
          var gt = Xt(
            g,
            b,
            E,
            Y
          );
          return Zh = null, gt;
        } catch (_e) {
          if (_e === Vh || _e === eg) throw _e;
          var ct = xt(29, _e, null, g.mode);
          ct.lanes = Y, ct.return = g;
          var et = ct._debugInfo = Rt;
          if (ct._debugOwner = g._debugOwner, ct._debugTask = g._debugTask, et != null) {
            for (var Dt = et.length - 1; 0 <= Dt; Dt--)
              if (typeof et[Dt].stack == "string") {
                ct._debugOwner = et[Dt], ct._debugTask = et[Dt].debugTask;
                break;
              }
          }
          return ct;
        } finally {
          Rt = K;
        }
      };
    }
    function ye(t, e) {
      var a = ll(t);
      return t = !a && typeof F(t) == "function", a || t ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        e,
        a
      ), !1) : !0;
    }
    function qt(t) {
      t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function tu(t, e) {
      t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        callbacks: null
      });
    }
    function nl(t) {
      return {
        lane: t,
        tag: fb,
        payload: null,
        callback: null,
        next: null
      };
    }
    function eu(t, e, a) {
      var c = t.updateQueue;
      if (c === null) return null;
      if (c = c.shared, C1 === c && !db) {
        var o = W(t);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), db = !0;
      }
      return (Lt & xl) !== Ll ? (o = c.pending, o === null ? e.next = e : (e.next = o.next, o.next = e), c.pending = e, e = cs(t), Cm(t, null, a), e) : (zo(t, c, e, a), cs(t));
    }
    function an(t, e, a) {
      if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194048) !== 0)) {
        var c = e.lanes;
        c &= t.pendingLanes, a |= c, e.lanes = a, sp(t, a);
      }
    }
    function ms(t, e) {
      var a = t.updateQueue, c = t.alternate;
      if (c !== null && (c = c.updateQueue, a === c)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = e : f = f.next = e;
        } else o = f = e;
        a = {
          baseState: c.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: c.shared,
          callbacks: c.callbacks
        }, t.updateQueue = a;
        return;
      }
      t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = e : t.next = e, a.lastBaseUpdate = e;
    }
    function _o() {
      if (_1) {
        var t = Qh;
        if (t !== null) throw t;
      }
    }
    function lu(t, e, a, c) {
      _1 = !1;
      var o = t.updateQueue;
      Hf = !1, C1 = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var y = h, p = y.next;
        y.next = null, d === null ? f = p : d.next = p, d = y;
        var A = t.alternate;
        A !== null && (A = A.updateQueue, h = A.lastBaseUpdate, h !== d && (h === null ? A.firstBaseUpdate = p : h.next = p, A.lastBaseUpdate = y));
      }
      if (f !== null) {
        var D = o.baseState;
        d = 0, A = p = y = null, h = f;
        do {
          var S = h.lane & -536870913, _ = S !== h.lane;
          if (_ ? (Ut & S) === S : (c & S) === S) {
            S !== 0 && S === gr && (_1 = !0), A !== null && (A = A.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            t: {
              S = t;
              var w = h, $ = e, Ae = a;
              switch (w.tag) {
                case sb:
                  if (w = w.payload, typeof w == "function") {
                    Gh = !0;
                    var Xt = w.call(
                      Ae,
                      D,
                      $
                    );
                    if (S.mode & ba) {
                      me(!0);
                      try {
                        w.call(Ae, D, $);
                      } finally {
                        me(!1);
                      }
                    }
                    Gh = !1, D = Xt;
                    break t;
                  }
                  D = w;
                  break t;
                case U1:
                  S.flags = S.flags & -65537 | 128;
                case fb:
                  if (Xt = w.payload, typeof Xt == "function") {
                    if (Gh = !0, w = Xt.call(
                      Ae,
                      D,
                      $
                    ), S.mode & ba) {
                      me(!0);
                      try {
                        Xt.call(Ae, D, $);
                      } finally {
                        me(!1);
                      }
                    }
                    Gh = !1;
                  } else w = Xt;
                  if (w == null) break t;
                  D = Ot({}, D, w);
                  break t;
                case rb:
                  Hf = !0;
              }
            }
            S = h.callback, S !== null && (t.flags |= 64, _ && (t.flags |= 8192), _ = o.callbacks, _ === null ? o.callbacks = [S] : _.push(S));
          } else
            _ = {
              lane: S,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, A === null ? (p = A = _, y = D) : A = A.next = _, d |= S;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            _ = h, h = _.next, _.next = null, o.lastBaseUpdate = _, o.shared.pending = null;
          }
        } while (!0);
        A === null && (y = D), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = A, f === null && (o.shared.lanes = 0), xf |= d, t.lanes = d, t.memoizedState = D;
      }
      C1 = null;
    }
    function zc(t, e) {
      if (typeof t != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + t
        );
      t.call(e);
    }
    function Zm(t, e) {
      var a = t.shared.hiddenCallbacks;
      if (a !== null)
        for (t.shared.hiddenCallbacks = null, t = 0; t < a.length; t++)
          zc(a[t], e);
    }
    function Ho(t, e) {
      var a = t.callbacks;
      if (a !== null)
        for (t.callbacks = null, t = 0; t < a.length; t++)
          zc(a[t], e);
    }
    function md(t, e) {
      var a = Pc;
      Ct(ag, a, t), Ct(Lh, e, t), Pc = a | e.baseLanes;
    }
    function Lu(t) {
      Ct(ag, Pc, t), Ct(
        Lh,
        Lh.current,
        t
      );
    }
    function Dn(t) {
      Pc = ag.current, Et(Lh, t), Et(ag, t);
    }
    function Pl(t) {
      var e = t.alternate;
      Ct(
        fl,
        fl.current & wh,
        t
      ), Ct(Xn, t, t), Cu === null && (e === null || Lh.current !== null || e.memoizedState !== null) && (Cu = t);
    }
    function On(t) {
      Ct(fl, fl.current, t), Ct(Xn, t, t), Cu === null && (Cu = t);
    }
    function yd(t) {
      t.tag === 22 ? (Ct(fl, fl.current, t), Ct(Xn, t, t), Cu === null && (Cu = t)) : au(t);
    }
    function au(t) {
      Ct(fl, fl.current, t), Ct(
        Xn,
        Xn.current,
        t
      );
    }
    function vl(t) {
      Et(Xn, t), Cu === t && (Cu = null), Et(fl, t);
    }
    function Ei(t) {
      for (var e = t; e !== null; ) {
        if (e.tag === 13) {
          var a = e.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || ks(a) || Xy(a)))
            return e;
        } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
          if ((e.flags & 128) !== 0) return e;
        } else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return null;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      return null;
    }
    function pt() {
      var t = H;
      Hu === null ? Hu = [t] : Hu.push(t);
    }
    function V() {
      var t = H;
      if (Hu !== null && (co++, Hu[co] !== t)) {
        var e = W(vt);
        if (!hb.has(e) && (hb.add(e), Hu !== null)) {
          for (var a = "", c = 0; c <= co; c++) {
            var o = Hu[c], f = c === co ? t : o;
            for (o = c + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            e,
            a
          );
        }
      }
    }
    function wu(t) {
      t == null || ll(t) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        H,
        typeof t
      );
    }
    function ys() {
      var t = W(vt);
      yb.has(t) || (yb.add(t), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        t
      ));
    }
    function Ve() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function Lm(t, e) {
      if (Q0) return !1;
      if (e === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          H
        ), !1;
      t.length !== e.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        H,
        "[" + e.join(", ") + "]",
        "[" + t.join(", ") + "]"
      );
      for (var a = 0; a < e.length && a < t.length; a++)
        if (!Va(t[a], e[a])) return !1;
      return !0;
    }
    function wm(t, e, a, c, o, f) {
      no = f, vt = e, Hu = t !== null ? t._debugHookTypes : null, co = -1, Q0 = t !== null && t.type !== e.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = W(vt), H1.has(f) || (H1.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), e.memoizedState = null, e.updateQueue = null, e.lanes = 0, N.H = t !== null && t.memoizedState !== null ? N1 : Hu !== null ? pb : B1, Ar = f = (e.mode & ba) !== mt;
      var d = D1(a, c, o);
      if (Ar = !1, Kh && (d = ps(
        e,
        a,
        c,
        o
      )), f) {
        me(!0);
        try {
          d = ps(
            e,
            a,
            c,
            o
          );
        } finally {
          me(!1);
        }
      }
      return $e(t, e), d;
    }
    function $e(t, e) {
      e._debugHookTypes = Hu, e.dependencies === null ? uo !== null && (e.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: uo
      }) : e.dependencies._debugThenableState = uo, N.H = V0;
      var a = ge !== null && ge.next !== null;
      if (no = 0, Hu = H = zl = ge = vt = null, co = -1, t !== null && (t.flags & 65011712) !== (e.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), ug = !1, X0 = 0, uo = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      t === null || Dl || (t = t.dependencies, t !== null && Mo(t) && (Dl = !0)), Y0 ? (Y0 = !1, t = !0) : t = !1, t && (e = W(e) || "Unknown", mb.has(e) || H1.has(e) || (mb.add(e), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function ps(t, e, a, c) {
      vt = t;
      var o = 0;
      do {
        if (Kh && (uo = null), X0 = 0, Kh = !1, o >= qT)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, Q0 = !1, zl = ge = null, t.updateQueue != null) {
          var f = t.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        co = -1, N.H = vb, f = D1(e, a, c);
      } while (Kh);
      return f;
    }
    function vs() {
      var t = N.H, e = t.useState()[0];
      return e = typeof e.then == "function" ? bs(e) : e, t = t.useState()[0], (ge !== null ? ge.memoizedState : null) !== t && (vt.flags |= 1024), e;
    }
    function Ai() {
      var t = cg !== 0;
      return cg = 0, t;
    }
    function gs(t, e, a) {
      e.updateQueue = t.updateQueue, e.flags = (e.mode & cc) !== mt ? e.flags & -402655237 : e.flags & -2053, t.lanes &= ~a;
    }
    function Dc(t) {
      if (ug) {
        for (t = t.memoizedState; t !== null; ) {
          var e = t.queue;
          e !== null && (e.pending = null), t = t.next;
        }
        ug = !1;
      }
      no = 0, Hu = zl = ge = vt = null, co = -1, H = null, Kh = !1, X0 = cg = 0, uo = null;
    }
    function tl() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return zl === null ? vt.memoizedState = zl = t : zl = zl.next = t, zl;
    }
    function Pt() {
      if (ge === null) {
        var t = vt.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = ge.next;
      var e = zl === null ? vt.memoizedState : zl.next;
      if (e !== null)
        zl = e, ge = t;
      else {
        if (t === null)
          throw vt.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        ge = t, t = {
          memoizedState: ge.memoizedState,
          baseState: ge.baseState,
          baseQueue: ge.baseQueue,
          queue: ge.queue,
          next: null
        }, zl === null ? vt.memoizedState = zl = t : zl = zl.next = t;
      }
      return zl;
    }
    function Ss() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function bs(t) {
      var e = X0;
      return X0 += 1, uo === null && (uo = dd()), t = Ra(uo, t, e), e = vt, (zl === null ? e.memoizedState : zl.next) === null && (e = e.alternate, N.H = e !== null && e.memoizedState !== null ? N1 : B1), t;
    }
    function Ju(t) {
      if (t !== null && typeof t == "object") {
        if (typeof t.then == "function") return bs(t);
        if (t.$$typeof === qn) return $t(t);
      }
      throw Error("An unsupported type was passed to use(): " + String(t));
    }
    function Ca(t) {
      var e = null, a = vt.updateQueue;
      if (a !== null && (e = a.memoCache), e == null) {
        var c = vt.alternate;
        c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (e = {
          data: c.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (e == null && (e = { data: [], index: 0 }), a === null && (a = Ss(), vt.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0 || Q0)
        for (a = e.data[e.index] = Array(t), c = 0; c < t; c++)
          a[c] = Ig;
      else
        a.length !== t && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          t
        );
      return e.index++, a;
    }
    function _a(t, e) {
      return typeof e == "function" ? e(t) : e;
    }
    function Bo(t, e, a) {
      var c = tl();
      if (a !== void 0) {
        var o = a(e);
        if (Ar) {
          me(!0);
          try {
            a(e);
          } finally {
            me(!1);
          }
        }
      } else o = e;
      return c.memoizedState = c.baseState = o, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: o
      }, c.queue = t, t = t.dispatch = Kg.bind(
        null,
        vt,
        t
      ), [c.memoizedState, t];
    }
    function zi(t) {
      var e = Pt();
      return Oc(e, ge, t);
    }
    function Oc(t, e, a) {
      var c = t.queue;
      if (c === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      c.lastRenderedReducer = a;
      var o = t.baseQueue, f = c.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        e.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), e.baseQueue = o = f, c.pending = null;
      }
      if (f = t.baseState, o === null) t.memoizedState = f;
      else {
        e = o.next;
        var h = d = null, y = null, p = e, A = !1;
        do {
          var D = p.lane & -536870913;
          if (D !== p.lane ? (Ut & D) === D : (no & D) === D) {
            var S = p.revertLane;
            if (S === 0)
              y !== null && (y = y.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }), D === gr && (A = !0);
            else if ((no & S) === S) {
              p = p.next, S === gr && (A = !0);
              continue;
            } else
              D = {
                lane: 0,
                revertLane: p.revertLane,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }, y === null ? (h = y = D, d = f) : y = y.next = D, vt.lanes |= S, xf |= S;
            D = p.action, Ar && a(f, D), f = p.hasEagerState ? p.eagerState : a(f, D);
          } else
            S = {
              lane: D,
              revertLane: p.revertLane,
              gesture: p.gesture,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = S, d = f) : y = y.next = S, vt.lanes |= D, xf |= D;
          p = p.next;
        } while (p !== null && p !== e);
        if (y === null ? d = f : y.next = h, !Va(f, t.memoizedState) && (Dl = !0, A && (a = Qh, a !== null)))
          throw a;
        t.memoizedState = f, t.baseState = d, t.baseQueue = y, c.lastRenderedState = f;
      }
      return o === null && (c.lanes = 0), [t.memoizedState, c.dispatch];
    }
    function Di(t) {
      var e = Pt(), a = e.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = t;
      var c = a.dispatch, o = a.pending, f = e.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = t(f, d.action), d = d.next;
        while (d !== o);
        Va(f, e.memoizedState) || (Dl = !0), e.memoizedState = f, e.baseQueue === null && (e.baseState = f), a.lastRenderedState = f;
      }
      return [f, c];
    }
    function No(t, e, a) {
      var c = vt, o = tl();
      if (jt) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        Jh || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), Jh = !0);
      } else {
        if (f = e(), Jh || (a = e(), Va(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Jh = !0)), Se === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (Ut & 127) !== 0 || Jm(c, e, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: e }, o.queue = a, Ri(
        Mc.bind(null, c, a, t),
        [t]
      ), c.flags |= 2048, nu(
        _u | wa,
        { destroy: void 0 },
        Km.bind(
          null,
          c,
          a,
          f,
          e
        ),
        null
      ), f;
    }
    function Oi(t, e, a) {
      var c = vt, o = Pt(), f = jt;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = e(), !Jh) {
        var d = e();
        Va(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Jh = !0);
      }
      (d = !Va(
        (ge || o).memoizedState,
        a
      )) && (o.memoizedState = a, Dl = !0), o = o.queue;
      var h = Mc.bind(null, c, o, t);
      if (ul(2048, wa, h, [t]), o.getSnapshot !== e || d || zl !== null && zl.memoizedState.tag & _u) {
        if (c.flags |= 2048, nu(
          _u | wa,
          { destroy: void 0 },
          Km.bind(
            null,
            c,
            o,
            a,
            e
          ),
          null
        ), Se === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (no & 127) !== 0 || Jm(c, e, a);
      }
      return a;
    }
    function Jm(t, e, a) {
      t.flags |= 16384, t = { getSnapshot: e, value: a }, e = vt.updateQueue, e === null ? (e = Ss(), vt.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t));
    }
    function Km(t, e, a, c) {
      e.value = a, e.getSnapshot = c, Rc(e) && $m(t);
    }
    function Mc(t, e, a) {
      return a(function() {
        Rc(e) && (In(2, "updateSyncExternalStore()", t), $m(t));
      });
    }
    function Rc(t) {
      var e = t.getSnapshot;
      t = t.value;
      try {
        var a = e();
        return !Va(t, a);
      } catch {
        return !0;
      }
    }
    function $m(t) {
      var e = Yl(t, 2);
      e !== null && yt(e, t, 2);
    }
    function pd(t) {
      var e = tl();
      if (typeof t == "function") {
        var a = t;
        if (t = a(), Ar) {
          me(!0);
          try {
            a();
          } finally {
            me(!1);
          }
        }
      }
      return e.memoizedState = e.baseState = t, e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _a,
        lastRenderedState: t
      }, e;
    }
    function Uc(t) {
      t = pd(t);
      var e = t.queue, a = Ed.bind(null, vt, e);
      return e.dispatch = a, [t.memoizedState, a];
    }
    function Mi(t) {
      var e = tl();
      e.memoizedState = e.baseState = t;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = a, e = Ms.bind(
        null,
        vt,
        !0,
        a
      ), a.dispatch = e, [t, e];
    }
    function Ts(t, e) {
      var a = Pt();
      return xo(a, ge, t, e);
    }
    function xo(t, e, a, c) {
      return t.baseState = a, Oc(
        t,
        ge,
        typeof c == "function" ? c : _a
      );
    }
    function Es(t, e) {
      var a = Pt();
      return ge !== null ? xo(a, ge, t, e) : (a.baseState = t, [t, a.queue.dispatch]);
    }
    function Np(t, e, a, c, o) {
      if (gl(t))
        throw Error("Cannot update form state while rendering.");
      if (t = e.action, t !== null) {
        var f = {
          payload: o,
          action: t,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        N.T !== null ? a(!0) : f.isTransition = !1, c(f), a = e.pending, a === null ? (f.next = e.pending = f, Cc(e, f)) : (f.next = a.next, e.pending = a.next = f);
      }
    }
    function Cc(t, e) {
      var a = e.action, c = e.payload, o = t.state;
      if (e.isTransition) {
        var f = N.T, d = {};
        d._updatedFibers = /* @__PURE__ */ new Set(), N.T = d;
        try {
          var h = a(o, c), y = N.S;
          y !== null && y(d, h), Wm(t, e, h);
        } catch (p) {
          As(t, e, p);
        } finally {
          f !== null && d.types !== null && (f.types !== null && f.types !== d.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), f.types = d.types), N.T = f, f === null && d._updatedFibers && (t = d._updatedFibers.size, d._updatedFibers.clear(), 10 < t && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, c), Wm(t, e, d);
        } catch (p) {
          As(t, e, p);
        }
    }
    function Wm(t, e, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (N.asyncTransitions++, a.then(Ui, Ui), a.then(
        function(c) {
          Ku(t, e, c);
        },
        function(c) {
          return As(t, e, c);
        }
      ), e.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : Ku(t, e, a);
    }
    function Ku(t, e, a) {
      e.status = "fulfilled", e.value = a, vd(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, Cc(t, a)));
    }
    function As(t, e, a) {
      var c = t.pending;
      if (t.pending = null, c !== null) {
        c = c.next;
        do
          e.status = "rejected", e.reason = a, vd(e), e = e.next;
        while (e !== c);
      }
      t.action = null;
    }
    function vd(t) {
      t = t.listeners;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
    function $u(t, e) {
      return e;
    }
    function Ha(t, e) {
      if (jt) {
        var a = Se.formState;
        if (a !== null) {
          t: {
            var c = vt;
            if (jt) {
              if (Ce) {
                e: {
                  for (var o = Ce, f = Ru; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break e;
                    }
                    if (o = ja(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break e;
                    }
                  }
                  f = o.data, o = f === aS || f === l2 ? o : null;
                }
                if (o) {
                  Ce = ja(
                    o.nextSibling
                  ), c = o.data === aS;
                  break t;
                }
              }
              Ia(c);
            }
            c = !1;
          }
          c && (e = a[0]);
        }
      }
      return a = tl(), a.memoizedState = a.baseState = e, c = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $u,
        lastRenderedState: e
      }, a.queue = c, a = Ed.bind(
        null,
        vt,
        c
      ), c.dispatch = a, c = pd(!1), f = Ms.bind(
        null,
        vt,
        !1,
        c.queue
      ), c = tl(), o = {
        state: e,
        dispatch: null,
        action: t,
        pending: null
      }, c.queue = o, a = Np.bind(
        null,
        vt,
        o,
        f,
        a
      ), o.dispatch = a, c.memoizedState = t, [e, a, !1];
    }
    function _c(t) {
      var e = Pt();
      return gd(e, ge, t);
    }
    function gd(t, e, a) {
      if (e = Oc(
        t,
        e,
        $u
      )[0], t = zi(_a)[0], typeof e == "object" && e !== null && typeof e.then == "function")
        try {
          var c = bs(e);
        } catch (d) {
          throw d === Vh ? eg : d;
        }
      else c = e;
      e = Pt();
      var o = e.queue, f = o.dispatch;
      return a !== e.memoizedState && (vt.flags |= 2048, nu(
        _u | wa,
        { destroy: void 0 },
        km.bind(null, o, a),
        null
      )), [c, f, t];
    }
    function km(t, e) {
      t.action = e;
    }
    function Hc(t) {
      var e = Pt(), a = ge;
      if (a !== null)
        return gd(e, a, t);
      Pt(), e = e.memoizedState, a = Pt();
      var c = a.queue.dispatch;
      return a.memoizedState = t, [e, c, !1];
    }
    function nu(t, e, a, c) {
      return t = { tag: t, create: a, deps: c, inst: e, next: null }, e = vt.updateQueue, e === null && (e = Ss(), vt.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (c = a.next, a.next = t, t.next = c, e.lastEffect = t), t;
    }
    function Sd(t) {
      var e = tl();
      return t = { current: t }, e.memoizedState = t;
    }
    function Bc(t, e, a, c) {
      var o = tl();
      vt.flags |= t, o.memoizedState = nu(
        _u | e,
        { destroy: void 0 },
        a,
        c === void 0 ? null : c
      );
    }
    function ul(t, e, a, c) {
      var o = Pt();
      c = c === void 0 ? null : c;
      var f = o.memoizedState.inst;
      ge !== null && c !== null && Lm(c, ge.memoizedState.deps) ? o.memoizedState = nu(e, f, a, c) : (vt.flags |= t, o.memoizedState = nu(
        _u | e,
        f,
        a,
        c
      ));
    }
    function Ri(t, e) {
      (vt.mode & cc) !== mt ? Bc(276826112, wa, t, e) : Bc(8390656, wa, t, e);
    }
    function xp(t) {
      vt.flags |= 4;
      var e = vt.updateQueue;
      if (e === null)
        e = Ss(), vt.updateQueue = e, e.events = [t];
      else {
        var a = e.events;
        a === null ? e.events = [t] : a.push(t);
      }
    }
    function zs(t) {
      var e = tl(), a = { impl: t };
      return e.memoizedState = a, function() {
        if ((Lt & xl) !== Ll)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return a.impl.apply(void 0, arguments);
      };
    }
    function qo(t) {
      var e = Pt().memoizedState;
      return xp({ ref: e, nextImpl: t }), function() {
        if ((Lt & xl) !== Ll)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return e.impl.apply(void 0, arguments);
      };
    }
    function ta(t, e) {
      var a = 4194308;
      return (vt.mode & cc) !== mt && (a |= 134217728), Bc(a, Qn, t, e);
    }
    function Ba(t, e) {
      if (typeof e == "function") {
        t = t();
        var a = e(t);
        return function() {
          typeof a == "function" ? a() : e(null);
        };
      }
      if (e != null)
        return e.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(e).join(", ") + "}"
        ), t = t(), e.current = t, function() {
          e.current = null;
        };
    }
    function uu(t, e, a) {
      typeof e != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        e !== null ? typeof e : "null"
      ), a = a != null ? a.concat([t]) : null;
      var c = 4194308;
      (vt.mode & cc) !== mt && (c |= 134217728), Bc(
        c,
        Qn,
        Ba.bind(null, e, t),
        a
      );
    }
    function Yo(t, e, a) {
      typeof e != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        e !== null ? typeof e : "null"
      ), a = a != null ? a.concat([t]) : null, ul(
        4,
        Qn,
        Ba.bind(null, e, t),
        a
      );
    }
    function bd(t, e) {
      return tl().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    }
    function Mn(t, e) {
      var a = Pt();
      e = e === void 0 ? null : e;
      var c = a.memoizedState;
      return e !== null && Lm(e, c[1]) ? c[0] : (a.memoizedState = [t, e], t);
    }
    function ea(t, e) {
      var a = tl();
      e = e === void 0 ? null : e;
      var c = t();
      if (Ar) {
        me(!0);
        try {
          t();
        } finally {
          me(!1);
        }
      }
      return a.memoizedState = [c, e], c;
    }
    function Oe(t, e) {
      var a = Pt();
      e = e === void 0 ? null : e;
      var c = a.memoizedState;
      if (e !== null && Lm(e, c[1]))
        return c[0];
      if (c = t(), Ar) {
        me(!0);
        try {
          t();
        } finally {
          me(!1);
        }
      }
      return a.memoizedState = [c, e], c;
    }
    function jo(t, e) {
      var a = tl();
      return te(a, t, e);
    }
    function cu(t, e) {
      var a = Pt();
      return We(
        a,
        ge.memoizedState,
        t,
        e
      );
    }
    function Tt(t, e) {
      var a = Pt();
      return ge === null ? te(a, t, e) : We(
        a,
        ge.memoizedState,
        t,
        e
      );
    }
    function te(t, e, a) {
      return a === void 0 || (no & 1073741824) !== 0 && (Ut & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = a, t = Jo(), vt.lanes |= t, xf |= t, a);
    }
    function We(t, e, a, c) {
      return Va(a, e) ? a : Lh.current !== null ? (t = te(t, a, c), Va(t, e) || (Dl = !0), t) : (no & 42) === 0 || (no & 1073741824) !== 0 && (Ut & 261930) === 0 ? (Dl = !0, t.memoizedState = a) : (t = Jo(), vt.lanes |= t, xf |= t, e);
    }
    function Ui() {
      N.asyncTransitions--;
    }
    function Ci(t, e, a, c, o) {
      var f = kt.p;
      kt.p = f !== 0 && f < Bl ? f : Bl;
      var d = N.T, h = {};
      h._updatedFibers = /* @__PURE__ */ new Set(), N.T = h, Ms(t, !1, e, a);
      try {
        var y = o(), p = N.S;
        if (p !== null && p(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          N.asyncTransitions++, y.then(Ui, Ui);
          var A = rd(
            y,
            c
          );
          _i(
            t,
            e,
            A,
            Gl(t)
          );
        } else
          _i(
            t,
            e,
            c,
            Gl(t)
          );
      } catch (D) {
        _i(
          t,
          e,
          { then: function() {
          }, status: "rejected", reason: D },
          Gl(t)
        );
      } finally {
        kt.p = f, d !== null && h.types !== null && (d.types !== null && d.types !== h.types && console.error(
          "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
        ), d.types = h.types), N.T = d, d === null && h._updatedFibers && (t = h._updatedFibers.size, h._updatedFibers.clear(), 10 < t && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function Wu(t, e, a, c) {
      if (t.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = Ds(t).queue;
      Hp(t), Ci(
        t,
        o,
        e,
        Nr,
        a === null ? Ge : function() {
          return Go(t), a(c);
        }
      );
    }
    function Ds(t) {
      var e = t.memoizedState;
      if (e !== null) return e;
      e = {
        memoizedState: Nr,
        baseState: Nr,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: _a,
          lastRenderedState: Nr
        },
        next: null
      };
      var a = {};
      return e.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: _a,
          lastRenderedState: a
        },
        next: null
      }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
    }
    function Go(t) {
      N.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var e = Ds(t);
      e.next === null && (e = t.alternate.memoizedState), _i(
        t,
        e.next.queue,
        {},
        Gl(t)
      );
    }
    function Nc() {
      var t = pd(!1);
      return t = Ci.bind(
        null,
        vt,
        t.queue,
        !0,
        !1
      ), tl().memoizedState = t, [!1, t];
    }
    function qp() {
      var t = zi(_a)[0], e = Pt().memoizedState;
      return [
        typeof t == "boolean" ? t : bs(t),
        e
      ];
    }
    function Be() {
      var t = Di(_a)[0], e = Pt().memoizedState;
      return [
        typeof t == "boolean" ? t : bs(t),
        e
      ];
    }
    function ku() {
      return $t(ap);
    }
    function Os() {
      var t = tl(), e = Se.identifierPrefix;
      if (jt) {
        var a = Pi, c = Ii;
        a = (c & ~(1 << 32 - Hl(c) - 1)).toString(32) + a, e = "_" + e + "R_" + a, a = cg++, 0 < a && (e += "H" + a.toString(32)), e += "_";
      } else
        a = xT++, e = "_" + e + "r_" + a.toString(32) + "_";
      return t.memoizedState = e;
    }
    function Td() {
      return tl().memoizedState = Yp.bind(
        null,
        vt
      );
    }
    function Yp(t, e) {
      for (var a = t.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var c = Gl(a), o = nl(c), f = eu(a, o, c);
            f !== null && (In(c, "refresh()", t), yt(f, a, c), an(f, a, c)), t = fd(), e != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), o.payload = { cache: t };
            return;
        }
        a = a.return;
      }
    }
    function Kg(t, e, a) {
      var c = arguments;
      typeof c[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), c = Gl(t);
      var o = {
        lane: c,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      gl(t) ? Ze(e, o) : (o = di(t, e, o, c), o !== null && (In(c, "dispatch()", t), yt(o, t, c), Rs(o, e, c)));
    }
    function Ed(t, e, a) {
      var c = arguments;
      typeof c[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), c = Gl(t), _i(t, e, a, c) && In(c, "setState()", t);
    }
    function _i(t, e, a, c) {
      var o = {
        lane: c,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (gl(t)) Ze(e, o);
      else {
        var f = t.alternate;
        if (t.lanes === 0 && (f === null || f.lanes === 0) && (f = e.lastRenderedReducer, f !== null)) {
          var d = N.H;
          N.H = oc;
          try {
            var h = e.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, Va(y, h))
              return zo(t, e, o, 0), Se === null && ad(), !1;
          } catch {
          } finally {
            N.H = d;
          }
        }
        if (a = di(t, e, o, c), a !== null)
          return yt(a, t, c), Rs(a, e, c), !0;
      }
      return !1;
    }
    function Ms(t, e, a, c) {
      if (N.T === null && gr === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), c = {
        lane: 2,
        revertLane: Yy(),
        gesture: null,
        action: c,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, gl(t)) {
        if (e)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        e = di(
          t,
          a,
          c,
          2
        ), e !== null && (In(2, "setOptimistic()", t), yt(e, t, 2));
    }
    function gl(t) {
      var e = t.alternate;
      return t === vt || e !== null && e === vt;
    }
    function Ze(t, e) {
      Kh = ug = !0;
      var a = t.pending;
      a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e;
    }
    function Rs(t, e, a) {
      if ((a & 4194048) !== 0) {
        var c = e.lanes;
        c &= t.pendingLanes, a |= c, e.lanes = a, sp(t, a);
      }
    }
    function Hi(t) {
      if (t !== null && typeof t != "function") {
        var e = String(t);
        Rb.has(e) || (Rb.add(e), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          t
        ));
      }
    }
    function Xo(t, e, a, c) {
      var o = t.memoizedState, f = a(c, o);
      if (t.mode & ba) {
        me(!0);
        try {
          f = a(c, o);
        } finally {
          me(!1);
        }
      }
      f === void 0 && (e = ut(e) || "Component", zb.has(e) || (zb.add(e), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        e
      ))), o = f == null ? o : Ot({}, o, f), t.memoizedState = o, t.lanes === 0 && (t.updateQueue.baseState = o);
    }
    function Ad(t, e, a, c, o, f, d) {
      var h = t.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          c,
          f,
          d
        ), t.mode & ba) {
          me(!0);
          try {
            a = h.shouldComponentUpdate(
              c,
              f,
              d
            );
          } finally {
            me(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          ut(e) || "Component"
        ), a;
      }
      return e.prototype && e.prototype.isPureReactComponent ? !Ao(a, c) || !Ao(o, f) : !0;
    }
    function iu(t, e, a, c) {
      var o = e.state;
      typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, c), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, c), e.state !== o && (t = W(t) || "Component", Sb.has(t) || (Sb.add(t), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        t
      )), x1.enqueueReplaceState(
        e,
        e.state,
        null
      ));
    }
    function ou(t, e) {
      var a = e;
      if ("ref" in e) {
        a = {};
        for (var c in e)
          c !== "ref" && (a[c] = e[c]);
      }
      if (t = t.defaultProps) {
        a === e && (a = Ot({}, a));
        for (var o in t)
          a[o] === void 0 && (a[o] = t[o]);
      }
      return a;
    }
    function zd(t) {
      d1(t), console.warn(
        `%s

%s
`,
        $h ? "An error occurred in the <" + $h + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function Dd(t) {
      var e = $h ? "The above error occurred in the <" + $h + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((q1 || "Anonymous") + ".");
      if (typeof t == "object" && t !== null && typeof t.environmentName == "string") {
        var c = t.environmentName;
        t = [
          `%o

%s

%s
`,
          t,
          e,
          a
        ].slice(0), typeof t[0] == "string" ? t.splice(
          0,
          1,
          s2 + " " + t[0],
          r2,
          _g + c + _g,
          d2
        ) : t.splice(
          0,
          0,
          s2,
          r2,
          _g + c + _g,
          d2
        ), t.unshift(console), c = lE.apply(console.error, t), c();
      } else
        console.error(
          `%o

%s

%s
`,
          t,
          e,
          a
        );
    }
    function Fm(t) {
      d1(t);
    }
    function Us(t, e) {
      try {
        $h = e.source ? W(e.source) : null, q1 = null;
        var a = e.value;
        if (N.actQueue !== null)
          N.thrownErrors.push(a);
        else {
          var c = t.onUncaughtError;
          c(a, { componentStack: e.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Im(t, e, a) {
      try {
        $h = a.source ? W(a.source) : null, q1 = W(e);
        var c = t.onCaughtError;
        c(a.value, {
          componentStack: a.stack,
          errorBoundary: e.tag === 1 ? e.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Od(t, e, a) {
      return a = nl(a), a.tag = U1, a.payload = { element: null }, a.callback = function() {
        k(e.source, Us, t, e);
      }, a;
    }
    function Md(t) {
      return t = nl(t), t.tag = U1, t;
    }
    function Rd(t, e, a, c) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = c.value;
        t.payload = function() {
          return o(f);
        }, t.callback = function() {
          hi(a), k(
            c.source,
            Im,
            e,
            a,
            c
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (t.callback = function() {
        hi(a), k(
          c.source,
          Im,
          e,
          a,
          c
        ), typeof o != "function" && (Yf === null ? Yf = /* @__PURE__ */ new Set([this]) : Yf.add(this)), _T(this, c), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          W(a) || "Unknown"
        );
      });
    }
    function Pm(t, e, a, c, o) {
      if (a.flags |= 32768, Tu && Fo(t, o), c !== null && typeof c == "object" && typeof c.then == "function") {
        if (e = a.alternate, e !== null && En(
          e,
          a,
          o,
          !0
        ), jt && (kc = !0), a = Xn.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return Cu === null ? $o() : a.alternate === null && we === oo && (we = fg), a.flags &= -257, a.flags |= 65536, a.lanes = o, c === lg ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = /* @__PURE__ */ new Set([c]) : e.add(c), $d(t, c, o)), !1;
            case 22:
              return a.flags |= 65536, c === lg ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([c])
              }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = /* @__PURE__ */ new Set([c]) : a.add(c)), $d(t, c, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return $d(t, c, o), $o(), !1;
      }
      if (jt)
        return kc = !0, e = Xn.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = o, c !== g1 && os(
          Wl(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: c }
            ),
            a
          )
        )) : (c !== g1 && os(
          Wl(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: c }
            ),
            a
          )
        ), t = t.current.alternate, t.flags |= 65536, o &= -o, t.lanes |= o, c = Wl(c, a), o = Od(
          t.stateNode,
          c,
          o
        ), ms(t, o), we !== Bf && (we = zr)), !1;
      var f = Wl(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: c }
        ),
        a
      );
      if ($0 === null ? $0 = [f] : $0.push(f), we !== Bf && (we = zr), e === null) return !0;
      c = Wl(c, a), a = e;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, t = o & -o, a.lanes |= t, t = Od(
              a.stateNode,
              c,
              t
            ), ms(a, t), !1;
          case 1:
            if (e = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Yf === null || !Yf.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Md(o), Rd(
                o,
                t,
                a,
                c
              ), ms(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function Sl(t, e, a, c) {
      e.child = t === null ? ob(e, null, a, c) : Er(
        e,
        t.child,
        a,
        c
      );
    }
    function jp(t, e, a, c, o) {
      a = a.render;
      var f = e.ref;
      if ("ref" in c) {
        var d = {};
        for (var h in c)
          h !== "ref" && (d[h] = c[h]);
      } else d = c;
      return Ac(e), c = wm(
        t,
        e,
        a,
        d,
        f,
        o
      ), h = Ai(), t !== null && !Dl ? (gs(t, e, o), Rn(t, e, o)) : (jt && h && cd(e), e.flags |= 1, Sl(t, e, c, o), e.child);
    }
    function ty(t, e, a, c, o) {
      if (t === null) {
        var f = a.type;
        return typeof f == "function" && !Hm(f) && f.defaultProps === void 0 && a.compare === null ? (a = gc(f), e.tag = 15, e.type = a, Qo(e, f), ey(
          t,
          e,
          a,
          c,
          o
        )) : (t = mi(
          a.type,
          null,
          c,
          e,
          e.mode,
          o
        ), t.ref = e.ref, t.return = e, e.child = t);
      }
      if (f = t.child, !Bd(t, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Ao, a(d, c) && t.ref === e.ref)
          return Rn(
            t,
            e,
            o
          );
      }
      return e.flags |= 1, t = Fn(f, c), t.ref = e.ref, t.return = e, e.child = t;
    }
    function ey(t, e, a, c, o) {
      if (t !== null) {
        var f = t.memoizedProps;
        if (Ao(f, c) && t.ref === e.ref && e.type === t.type)
          if (Dl = !1, e.pendingProps = c = f, Bd(t, o))
            (t.flags & 131072) !== 0 && (Dl = !0);
          else
            return e.lanes = t.lanes, Rn(t, e, o);
      }
      return uy(
        t,
        e,
        a,
        c,
        o
      );
    }
    function ly(t, e, a, c) {
      var o = c.children, f = t !== null ? t.memoizedState : null;
      if (t === null && e.stateNode === null && (e.stateNode = {
        _visibility: A0,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), c.mode === "hidden") {
        if ((e.flags & 128) !== 0) {
          if (f = f !== null ? f.baseLanes | a : a, t !== null) {
            for (c = e.child = t.child, o = 0; c !== null; )
              o = o | c.lanes | c.childLanes, c = c.sibling;
            c = o & ~f;
          } else c = 0, e.child = null;
          return ay(
            t,
            e,
            f,
            a,
            c
          );
        }
        if ((a & 536870912) !== 0)
          e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Uo(
            e,
            f !== null ? f.cachePool : null
          ), f !== null ? md(e, f) : Lu(e), yd(e);
        else
          return c = e.lanes = 536870912, ay(
            t,
            e,
            f !== null ? f.baseLanes | a : a,
            a,
            c
          );
      } else
        f !== null ? (Uo(e, f.cachePool), md(e, f), au(e), e.memoizedState = null) : (t !== null && Uo(e, null), Lu(e), au(e));
      return Sl(t, e, o, a), e.child;
    }
    function Bi(t, e) {
      return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
        _visibility: A0,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), e.sibling;
    }
    function ay(t, e, a, c, o) {
      var f = Zu();
      return f = f === null ? null : {
        parent: El._currentValue,
        pool: f
      }, e.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, t !== null && Uo(e, null), Lu(e), yd(e), t !== null && En(t, e, c, !0), e.childLanes = o, null;
    }
    function Cs(t, e) {
      var a = e.hidden;
      return a !== void 0 && console.error(
        `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
        a === !0 ? "hidden" : a === !1 ? "hidden={false}" : "hidden={...}",
        a ? 'mode="hidden"' : 'mode="visible"'
      ), e = Hs(
        { mode: e.mode, children: e.children },
        t.mode
      ), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function ny(t, e, a) {
      return Er(e, t.child, null, a), t = Cs(
        e,
        e.pendingProps
      ), t.flags |= 2, vl(e), e.memoizedState = null, t;
    }
    function Gp(t, e, a) {
      var c = e.pendingProps, o = (e.flags & 128) !== 0;
      if (e.flags &= -129, t === null) {
        if (jt) {
          if (c.mode === "hidden")
            return t = Cs(e, c), e.lanes = 536870912, Bi(null, t);
          if (On(e), (t = Ce) ? (a = le(
            t,
            Ru
          ), a = a !== null && a.data === Cr ? a : null, a !== null && (c = {
            dehydrated: a,
            treeContext: Up(),
            retryLane: 536870912,
            hydrationErrors: null
          }, e.memoizedState = c, c = Nm(a), c.return = e, e.child = c, sa = e, Ce = null)) : a = null, a === null)
            throw jl(e, t), Ia(e);
          return e.lanes = 536870912, null;
        }
        return Cs(e, c);
      }
      var f = t.memoizedState;
      if (f !== null) {
        var d = f.dehydrated;
        if (On(e), o)
          if (e.flags & 256)
            e.flags &= -257, e = ny(
              t,
              e,
              a
            );
          else if (e.memoizedState !== null)
            e.child = t.child, e.flags |= 128, e = null;
          else
            throw Error(
              "Client rendering an Activity suspended it again. This is a bug in React."
            );
        else if (_p(), (a & 536870912) !== 0 && Ko(e), Dl || En(
          t,
          e,
          a,
          !1
        ), o = (a & t.childLanes) !== 0, Dl || o) {
          if (c = Se, c !== null && (d = rp(
            c,
            a
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, Yl(t, d), yt(c, t, d), Y1;
          $o(), e = ny(
            t,
            e,
            a
          );
        } else
          t = f.treeContext, Ce = ja(
            d.nextSibling
          ), sa = e, jt = !0, Mf = null, kc = !1, Gn = null, Ru = !1, t !== null && Cp(e, t), e = Cs(e, c), e.flags |= 4096;
        return e;
      }
      return f = t.child, c = { mode: c.mode, children: c.children }, (a & 536870912) !== 0 && (a & t.lanes) !== 0 && Ko(e), t = Fn(f, c), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function _s(t, e) {
      var a = e.ref;
      if (a === null)
        t !== null && t.ref !== null && (e.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (t === null || t.ref !== a) && (e.flags |= 4194816);
      }
    }
    function uy(t, e, a, c, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = ut(a) || "Unknown";
        Ub[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), Ub[f] = !0);
      }
      return e.mode & ba && ic.recordLegacyContextWarning(
        e,
        null
      ), t === null && (Qo(e, e.type), a.contextTypes && (f = ut(a) || "Unknown", _b[f] || (_b[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), Ac(e), a = wm(
        t,
        e,
        a,
        c,
        void 0,
        o
      ), c = Ai(), t !== null && !Dl ? (gs(t, e, o), Rn(t, e, o)) : (jt && c && cd(e), e.flags |= 1, Sl(t, e, a, o), e.child);
    }
    function cy(t, e, a, c, o, f) {
      return Ac(e), co = -1, Q0 = t !== null && t.type !== e.type, e.updateQueue = null, a = ps(
        e,
        c,
        a,
        o
      ), $e(t, e), c = Ai(), t !== null && !Dl ? (gs(t, e, f), Rn(t, e, f)) : (jt && c && cd(e), e.flags |= 1, Sl(t, e, a, f), e.child);
    }
    function Ni(t, e, a, c, o) {
      switch (Ye(e)) {
        case !1:
          var f = e.stateNode, d = new e.type(
            e.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          e.flags |= 128, e.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (e.lanes |= h, d = Se, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Md(h), Rd(
            h,
            d,
            e,
            Wl(f, e)
          ), ms(e, h);
      }
      if (Ac(e), e.stateNode === null) {
        if (d = Of, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== qn) && !Mb.has(a) && (Mb.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === ph ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          ut(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = $t(f)), f = new a(c, d), e.mode & ba) {
          me(!0);
          try {
            f = new a(c, d);
          } finally {
            me(!1);
          }
        }
        if (d = e.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = x1, e.stateNode = f, f._reactInternals = e, f._reactInternalInstance = gb, typeof a.getDerivedStateFromProps == "function" && d === null && (d = ut(a) || "Component", bb.has(d) || (bb.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = ut(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Eb.has(f) || (Eb.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              p,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              y !== null ? `
  ` + y : ""
            ));
          }
        }
        f = e.stateNode, d = ut(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !Ob.has(a) && (Ob.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !Db.has(a) && (Db.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          ut(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== c, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || Tb.has(a) || (Tb.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          ut(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || ll(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = e.stateNode, f.props = c, f.state = e.memoizedState, f.refs = {}, qt(e), d = a.contextType, f.context = typeof d == "object" && d !== null ? $t(d) : Of, f.state === c && (d = ut(a) || "Component", Ab.has(d) || (Ab.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), e.mode & ba && ic.recordLegacyContextWarning(
          e,
          f
        ), ic.recordUnsafeLifecycleWarnings(
          e,
          f
        ), f.state = e.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (Xo(
          e,
          a,
          d,
          c
        ), f.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          W(e) || "Component"
        ), x1.enqueueReplaceState(
          f,
          f.state,
          null
        )), lu(e, c, f, o), _o(), f.state = e.memoizedState), typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & cc) !== mt && (e.flags |= 134217728), f = !0;
      } else if (t === null) {
        f = e.stateNode;
        var A = e.memoizedProps;
        h = ou(a, A), f.props = h;
        var D = f.context;
        y = a.contextType, d = Of, typeof y == "object" && y !== null && (d = $t(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", A = e.pendingProps !== A, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (A || D !== d) && iu(
          e,
          f,
          c,
          d
        ), Hf = !1;
        var S = e.memoizedState;
        f.state = S, lu(e, c, f, o), _o(), D = e.memoizedState, A || S !== D || Hf ? (typeof p == "function" && (Xo(
          e,
          a,
          p,
          c
        ), D = e.memoizedState), (h = Hf || Ad(
          e,
          a,
          h,
          c,
          S,
          D,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & cc) !== mt && (e.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & cc) !== mt && (e.flags |= 134217728), e.memoizedProps = c, e.memoizedState = D), f.props = c, f.state = D, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & cc) !== mt && (e.flags |= 134217728), f = !1);
      } else {
        f = e.stateNode, tu(t, e), d = e.memoizedProps, y = ou(a, d), f.props = y, p = e.pendingProps, S = f.context, D = a.contextType, h = Of, typeof D == "object" && D !== null && (h = $t(D)), A = a.getDerivedStateFromProps, (D = typeof A == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || S !== h) && iu(
          e,
          f,
          c,
          h
        ), Hf = !1, S = e.memoizedState, f.state = S, lu(e, c, f, o), _o();
        var _ = e.memoizedState;
        d !== p || S !== _ || Hf || t !== null && t.dependencies !== null && Mo(t.dependencies) ? (typeof A == "function" && (Xo(
          e,
          a,
          A,
          c
        ), _ = e.memoizedState), (y = Hf || Ad(
          e,
          a,
          y,
          c,
          S,
          _,
          h
        ) || t !== null && t.dependencies !== null && Mo(t.dependencies)) ? (D || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(c, _, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          c,
          _,
          h
        )), typeof f.componentDidUpdate == "function" && (e.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), e.memoizedProps = c, e.memoizedState = _), f.props = c, f.state = _, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), f = !1);
      }
      if (h = f, _s(t, e), d = (e.flags & 128) !== 0, h || d) {
        if (h = e.stateNode, Kf(e), d && typeof a.getDerivedStateFromError != "function")
          a = null, Za = -1;
        else if (a = $S(h), e.mode & ba) {
          me(!0);
          try {
            $S(h);
          } finally {
            me(!1);
          }
        }
        e.flags |= 1, t !== null && d ? (e.child = Er(
          e,
          t.child,
          null,
          o
        ), e.child = Er(
          e,
          null,
          a,
          o
        )) : Sl(t, e, a, o), e.memoizedState = h.state, t = e.child;
      } else
        t = Rn(
          t,
          e,
          o
        );
      return o = e.stateNode, f && o.props !== c && (Wh || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        W(e) || "a component"
      ), Wh = !0), t;
    }
    function iy(t, e, a, c) {
      return Tc(), e.flags |= 256, Sl(t, e, a, c), e.child;
    }
    function Qo(t, e) {
      e && e.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        e.displayName || e.name || "Component"
      ), typeof e.getDerivedStateFromProps == "function" && (t = ut(e) || "Unknown", Hb[t] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        t
      ), Hb[t] = !0)), typeof e.contextType == "object" && e.contextType !== null && (e = ut(e) || "Unknown", Cb[e] || (console.error(
        "%s: Function components do not support contextType.",
        e
      ), Cb[e] = !0));
    }
    function Vo(t) {
      return { baseLanes: t, cachePool: Xm() };
    }
    function Ud(t, e, a) {
      return t = t !== null ? t.childLanes & ~a : 0, e && (t |= dn), t;
    }
    function Cd(t, e, a) {
      var c, o = e.pendingProps;
      he(e) && (e.flags |= 128);
      var f = !1, d = (e.flags & 128) !== 0;
      if ((c = d) || (c = t !== null && t.memoizedState === null ? !1 : (fl.current & G0) !== 0), c && (f = !0, e.flags &= -129), c = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
        if (jt) {
          if (f ? Pl(e) : au(e), (t = Ce) ? (a = le(
            t,
            Ru
          ), a = a !== null && a.data !== Cr ? a : null, a !== null && (c = {
            dehydrated: a,
            treeContext: Up(),
            retryLane: 536870912,
            hydrationErrors: null
          }, e.memoizedState = c, c = Nm(a), c.return = e, e.child = c, sa = e, Ce = null)) : a = null, a === null)
            throw jl(e, t), Ia(e);
          return Xy(a) ? e.lanes = 32 : e.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          au(e);
          var y = e.mode;
          return h = Hs(
            { mode: "hidden", children: h },
            y
          ), o = yi(
            o,
            y,
            a,
            null
          ), h.return = e, o.return = e, h.sibling = o, e.child = h, o = e.child, o.memoizedState = Vo(a), o.childLanes = Ud(
            t,
            c,
            a
          ), e.memoizedState = j1, Bi(
            null,
            o
          );
        }
        return Pl(e), oy(
          e,
          h
        );
      }
      var p = t.memoizedState;
      if (p !== null) {
        var A = p.dehydrated;
        if (A !== null) {
          if (d)
            e.flags & 256 ? (Pl(e), e.flags &= -257, e = _d(
              t,
              e,
              a
            )) : e.memoizedState !== null ? (au(e), e.child = t.child, e.flags |= 128, e = null) : (au(e), h = o.fallback, y = e.mode, o = Hs(
              {
                mode: "visible",
                children: o.children
              },
              y
            ), h = yi(
              h,
              y,
              a,
              null
            ), h.flags |= 2, o.return = e, h.return = e, o.sibling = h, e.child = o, Er(
              e,
              t.child,
              null,
              a
            ), o = e.child, o.memoizedState = Vo(a), o.childLanes = Ud(
              t,
              c,
              a
            ), e.memoizedState = j1, e = Bi(
              null,
              o
            ));
          else if (Pl(e), _p(), (a & 536870912) !== 0 && Ko(e), Xy(
            A
          )) {
            if (c = A.nextSibling && A.nextSibling.dataset, c) {
              h = c.dgst;
              var D = c.msg;
              y = c.stck;
              var S = c.cstck;
            }
            f = D, c = h, o = y, A = S, h = f, y = A, h = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), h.stack = o || "", h.digest = c, c = y === void 0 ? null : y, o = {
              value: h,
              source: null,
              stack: c
            }, typeof c == "string" && v1.set(
              h,
              o
            ), os(o), e = _d(
              t,
              e,
              a
            );
          } else if (Dl || En(
            t,
            e,
            a,
            !1
          ), c = (a & t.childLanes) !== 0, Dl || c) {
            if (c = Se, c !== null && (o = rp(
              c,
              a
            ), o !== 0 && o !== p.retryLane))
              throw p.retryLane = o, Yl(
                t,
                o
              ), yt(
                c,
                t,
                o
              ), Y1;
            ks(
              A
            ) || $o(), e = _d(
              t,
              e,
              a
            );
          } else
            ks(
              A
            ) ? (e.flags |= 192, e.child = t.child, e = null) : (t = p.treeContext, Ce = ja(
              A.nextSibling
            ), sa = e, jt = !0, Mf = null, kc = !1, Gn = null, Ru = !1, t !== null && Cp(e, t), e = oy(
              e,
              o.children
            ), e.flags |= 4096);
          return e;
        }
      }
      return f ? (au(e), h = o.fallback, y = e.mode, S = t.child, A = S.sibling, o = Fn(
        S,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = S.subtreeFlags & 65011712, A !== null ? h = Fn(
        A,
        h
      ) : (h = yi(
        h,
        y,
        a,
        null
      ), h.flags |= 2), h.return = e, o.return = e, o.sibling = h, e.child = o, Bi(null, o), o = e.child, h = t.child.memoizedState, h === null ? h = Vo(a) : (y = h.cachePool, y !== null ? (S = El._currentValue, y = y.parent !== S ? { parent: S, pool: S } : y) : y = Xm(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), o.memoizedState = h, o.childLanes = Ud(
        t,
        c,
        a
      ), e.memoizedState = j1, Bi(
        t.child,
        o
      )) : (p !== null && (a & 62914560) === a && (a & t.lanes) !== 0 && Ko(e), Pl(e), a = t.child, t = a.sibling, a = Fn(a, {
        mode: "visible",
        children: o.children
      }), a.return = e, a.sibling = null, t !== null && (c = e.deletions, c === null ? (e.deletions = [t], e.flags |= 16) : c.push(t)), e.child = a, e.memoizedState = null, a);
    }
    function oy(t, e) {
      return e = Hs(
        { mode: "visible", children: e },
        t.mode
      ), e.return = t, t.child = e;
    }
    function Hs(t, e) {
      return t = xt(22, t, null, e), t.lanes = 0, t;
    }
    function _d(t, e, a) {
      return Er(e, t.child, null, a), t = oy(
        e,
        e.pendingProps.children
      ), t.flags |= 2, e.memoizedState = null, t;
    }
    function fy(t, e, a) {
      t.lanes |= e;
      var c = t.alternate;
      c !== null && (c.lanes |= e), od(
        t.return,
        e,
        a
      );
    }
    function Hd(t, e, a, c, o, f) {
      var d = t.memoizedState;
      d === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: c,
        tail: a,
        tailMode: o,
        treeForkCount: f
      } : (d.isBackwards = e, d.rendering = null, d.renderingStartTime = 0, d.last = c, d.tail = a, d.tailMode = o, d.treeForkCount = f);
    }
    function sy(t, e, a) {
      var c = e.pendingProps, o = c.revealOrder, f = c.tail, d = c.children, h = fl.current;
      if ((c = (h & G0) !== 0) ? (h = h & wh | G0, e.flags |= 128) : h &= wh, Ct(fl, h, e), h = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !Bb[h])
        if (Bb[h] = !0, o == null)
          console.error(
            'The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".'
          );
        else if (o === "backwards")
          console.error(
            'The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.'
          );
        else if (typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
            case "independent":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
            o
          );
      h = f ?? "null", og[h] || (f == null ? (o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && (og[h] = !0, console.error(
        'The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".'
      )) : f !== "visible" && f !== "collapsed" && f !== "hidden" ? (og[h] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && o !== "unstable_legacy-backwards" && (og[h] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      t: if ((o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && d !== void 0 && d !== null && d !== !1)
        if (ll(d)) {
          for (h = 0; h < d.length; h++)
            if (!ye(
              d[h],
              h
            ))
              break t;
        } else if (h = F(d), typeof h == "function") {
          if (h = h.call(d))
            for (var y = h.next(), p = 0; !y.done; y = h.next()) {
              if (!ye(y.value, p)) break t;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (Sl(t, e, d, a), jt ? (bc(), d = z0) : d = 0, !c && t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && fy(t, a, e);
          else if (t.tag === 19)
            fy(t, a, e);
          else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
              break t;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      switch (o) {
        case "forwards":
          for (a = e.child, o = null; a !== null; )
            t = a.alternate, t !== null && Ei(t) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = e.child, e.child = null) : (o = a.sibling, a.sibling = null), Hd(
            e,
            !1,
            o,
            a,
            f,
            d
          );
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (a = null, o = e.child, e.child = null; o !== null; ) {
            if (t = o.alternate, t !== null && Ei(t) === null) {
              e.child = o;
              break;
            }
            t = o.sibling, o.sibling = a, a = o, o = t;
          }
          Hd(
            e,
            !0,
            a,
            null,
            f,
            d
          );
          break;
        case "together":
          Hd(
            e,
            !1,
            null,
            null,
            void 0,
            d
          );
          break;
        default:
          e.memoizedState = null;
      }
      return e.child;
    }
    function Rn(t, e, a) {
      if (t !== null && (e.dependencies = t.dependencies), Za = -1, xf |= e.lanes, (a & e.childLanes) === 0)
        if (t !== null) {
          if (En(
            t,
            e,
            a,
            !1
          ), (a & e.childLanes) === 0)
            return null;
        } else return null;
      if (t !== null && e.child !== t.child)
        throw Error("Resuming work not yet implemented.");
      if (e.child !== null) {
        for (t = e.child, a = Fn(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null; )
          t = t.sibling, a = a.sibling = Fn(t, t.pendingProps), a.return = e;
        a.sibling = null;
      }
      return e.child;
    }
    function Bd(t, e) {
      return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Mo(t)));
    }
    function Xp(t, e, a) {
      switch (e.tag) {
        case 3:
          hl(
            e,
            e.stateNode.containerInfo
          ), Pa(
            e,
            El,
            t.memoizedState.cache
          ), Tc();
          break;
        case 27:
        case 5:
          Z(e);
          break;
        case 4:
          hl(
            e,
            e.stateNode.containerInfo
          );
          break;
        case 10:
          Pa(
            e,
            e.type,
            e.memoizedProps.value
          );
          break;
        case 12:
          (a & e.childLanes) !== 0 && (e.flags |= 4), e.flags |= 2048;
          var c = e.stateNode;
          c.effectDuration = -0, c.passiveEffectDuration = -0;
          break;
        case 31:
          if (e.memoizedState !== null)
            return e.flags |= 128, On(e), null;
          break;
        case 13:
          if (c = e.memoizedState, c !== null)
            return c.dehydrated !== null ? (Pl(e), e.flags |= 128, null) : (a & e.child.childLanes) !== 0 ? Cd(
              t,
              e,
              a
            ) : (Pl(e), t = Rn(
              t,
              e,
              a
            ), t !== null ? t.sibling : null);
          Pl(e);
          break;
        case 19:
          var o = (t.flags & 128) !== 0;
          if (c = (a & e.childLanes) !== 0, c || (En(
            t,
            e,
            a,
            !1
          ), c = (a & e.childLanes) !== 0), o) {
            if (c)
              return sy(
                t,
                e,
                a
              );
            e.flags |= 128;
          }
          if (o = e.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ct(
            fl,
            fl.current,
            e
          ), c) break;
          return null;
        case 22:
          return e.lanes = 0, ly(
            t,
            e,
            a,
            e.pendingProps
          );
        case 24:
          Pa(
            e,
            El,
            t.memoizedState.cache
          );
      }
      return Rn(t, e, a);
    }
    function Bs(t, e, a) {
      if (e._debugNeedsRemount && t !== null) {
        a = mi(
          e.type,
          e.key,
          e.pendingProps,
          e._debugOwner || null,
          e.mode,
          e.lanes
        ), a._debugStack = e._debugStack, a._debugTask = e._debugTask;
        var c = e.return;
        if (c === null) throw Error("Cannot swap the root fiber.");
        if (t.alternate = null, e.alternate = null, a.index = e.index, a.sibling = e.sibling, a.return = e.return, a.ref = e.ref, a._debugInfo = e._debugInfo, e === c.child)
          c.child = a;
        else {
          var o = c.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== e; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return e = c.deletions, e === null ? (c.deletions = [t], c.flags |= 16) : e.push(t), a.flags |= 2, a;
      }
      if (t !== null)
        if (t.memoizedProps !== e.pendingProps || e.type !== t.type)
          Dl = !0;
        else {
          if (!Bd(t, a) && (e.flags & 128) === 0)
            return Dl = !1, Xp(
              t,
              e,
              a
            );
          Dl = (t.flags & 131072) !== 0;
        }
      else
        Dl = !1, (c = jt) && (bc(), c = (e.flags & 1048576) !== 0), c && (c = e.index, bc(), xm(e, z0, c));
      switch (e.lanes = 0, e.tag) {
        case 16:
          t: if (c = e.pendingProps, t = Ua(e.elementType), e.type = t, typeof t == "function")
            Hm(t) ? (c = ou(
              t,
              c
            ), e.tag = 1, e.type = t = gc(t), e = Ni(
              null,
              e,
              t,
              c,
              a
            )) : (e.tag = 0, Qo(e, t), e.type = t = gc(t), e = uy(
              null,
              e,
              t,
              c,
              a
            ));
          else {
            if (t != null) {
              if (o = t.$$typeof, o === df) {
                e.tag = 11, e.type = t = nd(t), e = jp(
                  null,
                  e,
                  t,
                  c,
                  a
                );
                break t;
              } else if (o === cr) {
                e.tag = 14, e = ty(
                  null,
                  e,
                  t,
                  c,
                  a
                );
                break t;
              }
            }
            throw e = "", t !== null && typeof t == "object" && t.$$typeof === Xl && (e = " Did you wrap a component in React.lazy() more than once?"), a = ut(t) || t, Error(
              "Element type is invalid. Received a promise that resolves to: " + a + ". Lazy element type must resolve to a class or function." + e
            );
          }
          return e;
        case 0:
          return uy(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 1:
          return c = e.type, o = ou(
            c,
            e.pendingProps
          ), Ni(
            t,
            e,
            c,
            o,
            a
          );
        case 3:
          t: {
            if (hl(
              e,
              e.stateNode.containerInfo
            ), t === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            c = e.pendingProps;
            var f = e.memoizedState;
            o = f.element, tu(t, e), lu(e, c, null, a);
            var d = e.memoizedState;
            if (c = d.cache, Pa(e, El, c), c !== f.cache && Xu(
              e,
              [El],
              a,
              !0
            ), _o(), c = d.element, f.isDehydrated)
              if (f = {
                element: c,
                isDehydrated: !1,
                cache: d.cache
              }, e.updateQueue.baseState = f, e.memoizedState = f, e.flags & 256) {
                e = iy(
                  t,
                  e,
                  c,
                  a
                );
                break t;
              } else if (c !== o) {
                o = Wl(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  e
                ), os(o), e = iy(
                  t,
                  e,
                  c,
                  a
                );
                break t;
              } else {
                switch (t = e.stateNode.containerInfo, t.nodeType) {
                  case 9:
                    t = t.body;
                    break;
                  default:
                    t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
                }
                for (Ce = ja(t.firstChild), sa = e, jt = !0, Mf = null, kc = !1, Gn = null, Ru = !0, a = ob(
                  e,
                  null,
                  c,
                  a
                ), e.child = a; a; )
                  a.flags = a.flags & -3 | 4096, a = a.sibling;
              }
            else {
              if (Tc(), c === o) {
                e = Rn(
                  t,
                  e,
                  a
                );
                break t;
              }
              Sl(
                t,
                e,
                c,
                a
              );
            }
            e = e.child;
          }
          return e;
        case 26:
          return _s(t, e), t === null ? (a = Ly(
            e.type,
            null,
            e.pendingProps,
            null
          )) ? e.memoizedState = a : jt || (a = e.type, t = e.pendingProps, c = ql(
            Ga.current
          ), c = $s(
            c
          ).createElement(a), c[Re] = e, c[fa] = t, Me(c, a, t), Je(c), e.stateNode = c) : e.memoizedState = Ly(
            e.type,
            t.memoizedProps,
            e.pendingProps,
            t.memoizedState
          ), null;
        case 27:
          return Z(e), t === null && jt && (c = ql(Ga.current), o = Q(), c = e.stateNode = lc(
            e.type,
            e.pendingProps,
            c,
            o,
            !1
          ), kc || (o = va(
            c,
            e.type,
            e.pendingProps,
            o
          ), o !== null && (pi(e, 0).serverProps = o)), sa = e, Ru = !0, o = Ce, Zc(e.type) ? (iS = o, Ce = ja(
            c.firstChild
          )) : Ce = o), Sl(
            t,
            e,
            e.pendingProps.children,
            a
          ), _s(t, e), t === null && (e.flags |= 4194304), e.child;
        case 5:
          return t === null && jt && (f = Q(), c = If(
            e.type,
            f.ancestorInfo
          ), o = Ce, (d = !o) || (d = pv(
            o,
            e.type,
            e.pendingProps,
            Ru
          ), d !== null ? (e.stateNode = d, kc || (f = va(
            d,
            e.type,
            e.pendingProps,
            f
          ), f !== null && (pi(e, 0).serverProps = f)), sa = e, Ce = ja(
            d.firstChild
          ), Ru = !1, f = !0) : f = !1, d = !f), d && (c && jl(e, o), Ia(e))), Z(e), o = e.type, f = e.pendingProps, d = t !== null ? t.memoizedProps : null, c = f.children, lf(o, f) ? c = null : d !== null && lf(o, d) && (e.flags |= 32), e.memoizedState !== null && (o = wm(
            t,
            e,
            vs,
            null,
            null,
            a
          ), ap._currentValue = o), _s(t, e), Sl(
            t,
            e,
            c,
            a
          ), e.child;
        case 6:
          return t === null && jt && (a = e.pendingProps, t = Q(), c = t.ancestorInfo.current, a = c != null ? Pf(
            a,
            c.tag,
            t.ancestorInfo.implicitRootScope
          ) : !0, t = Ce, (c = !t) || (c = vv(
            t,
            e.pendingProps,
            Ru
          ), c !== null ? (e.stateNode = c, sa = e, Ce = null, c = !0) : c = !1, c = !c), c && (a && jl(e, t), Ia(e))), null;
        case 13:
          return Cd(t, e, a);
        case 4:
          return hl(
            e,
            e.stateNode.containerInfo
          ), c = e.pendingProps, t === null ? e.child = Er(
            e,
            null,
            c,
            a
          ) : Sl(
            t,
            e,
            c,
            a
          ), e.child;
        case 11:
          return jp(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 7:
          return Sl(
            t,
            e,
            e.pendingProps,
            a
          ), e.child;
        case 8:
          return Sl(
            t,
            e,
            e.pendingProps.children,
            a
          ), e.child;
        case 12:
          return e.flags |= 4, e.flags |= 2048, c = e.stateNode, c.effectDuration = -0, c.passiveEffectDuration = -0, Sl(
            t,
            e,
            e.pendingProps.children,
            a
          ), e.child;
        case 10:
          return c = e.type, o = e.pendingProps, f = o.value, "value" in o || Nb || (Nb = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), Pa(e, c, f), Sl(
            t,
            e,
            o.children,
            a
          ), e.child;
        case 9:
          return o = e.type._context, c = e.pendingProps.children, typeof c != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), Ac(e), o = $t(o), c = D1(
            c,
            o,
            void 0
          ), e.flags |= 1, Sl(
            t,
            e,
            c,
            a
          ), e.child;
        case 14:
          return ty(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 15:
          return ey(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 19:
          return sy(
            t,
            e,
            a
          );
        case 31:
          return Gp(t, e, a);
        case 22:
          return ly(
            t,
            e,
            a,
            e.pendingProps
          );
        case 24:
          return Ac(e), c = $t(El), t === null ? (o = Zu(), o === null && (o = Se, f = fd(), o.pooledCache = f, gi(f), f !== null && (o.pooledCacheLanes |= a), o = f), e.memoizedState = {
            parent: c,
            cache: o
          }, qt(e), Pa(e, El, o)) : ((t.lanes & a) !== 0 && (tu(t, e), lu(e, null, null, a), _o()), o = t.memoizedState, f = e.memoizedState, o.parent !== c ? (o = {
            parent: c,
            cache: c
          }, e.memoizedState = o, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = o), Pa(e, El, c)) : (c = f.cache, Pa(e, El, c), c !== o.cache && Xu(
            e,
            [El],
            a,
            !0
          ))), Sl(
            t,
            e,
            e.pendingProps.children,
            a
          ), e.child;
        case 29:
          throw e.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + e.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function fu(t) {
      t.flags |= 4;
    }
    function Nd(t, e, a, c, o) {
      if ((e = (t.mode & OT) !== mt) && (e = !1), e) {
        if (t.flags |= 16777216, (o & 335544128) === o)
          if (t.stateNode.complete) t.flags |= 8192;
          else if (Ry()) t.flags |= 8192;
          else
            throw Tr = lg, M1;
      } else t.flags &= -16777217;
    }
    function Qp(t, e) {
      if (e.type !== "stylesheet" || (e.state.loading & Bu) !== Br)
        t.flags &= -16777217;
      else if (t.flags |= 16777216, !Bt(e))
        if (Ry()) t.flags |= 8192;
        else
          throw Tr = lg, M1;
    }
    function Zo(t, e) {
      e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Yr() : 536870912, t.lanes |= e, Mr |= e);
    }
    function Lo(t, e) {
      if (!jt)
        switch (t.tailMode) {
          case "hidden":
            e = t.tail;
            for (var a = null; e !== null; )
              e.alternate !== null && (a = e), e = e.sibling;
            a === null ? t.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = t.tail;
            for (var c = null; a !== null; )
              a.alternate !== null && (c = a), a = a.sibling;
            c === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : c.sibling = null;
        }
    }
    function ce(t) {
      var e = t.alternate !== null && t.alternate.child === t.child, a = 0, c = 0;
      if (e)
        if ((t.mode & Mt) !== mt) {
          for (var o = t.selfBaseDuration, f = t.child; f !== null; )
            a |= f.lanes | f.childLanes, c |= f.subtreeFlags & 65011712, c |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          t.treeBaseDuration = o;
        } else
          for (o = t.child; o !== null; )
            a |= o.lanes | o.childLanes, c |= o.subtreeFlags & 65011712, c |= o.flags & 65011712, o.return = t, o = o.sibling;
      else if ((t.mode & Mt) !== mt) {
        o = t.actualDuration, f = t.selfBaseDuration;
        for (var d = t.child; d !== null; )
          a |= d.lanes | d.childLanes, c |= d.subtreeFlags, c |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        t.actualDuration = o, t.treeBaseDuration = f;
      } else
        for (o = t.child; o !== null; )
          a |= o.lanes | o.childLanes, c |= o.subtreeFlags, c |= o.flags, o.return = t, o = o.sibling;
      return t.subtreeFlags |= c, t.childLanes = a, e;
    }
    function ry(t, e, a) {
      var c = e.pendingProps;
      switch (id(e), e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return ce(e), null;
        case 1:
          return ce(e), null;
        case 3:
          return a = e.stateNode, c = null, t !== null && (c = t.memoizedState.cache), e.memoizedState.cache !== c && (e.flags |= 2048), Tn(El, e), O(e), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (vi(e) ? (Ec(), fu(e)) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, is())), ce(e), null;
        case 26:
          var o = e.type, f = e.memoizedState;
          return t === null ? (fu(e), f !== null ? (ce(e), Qp(
            e,
            f
          )) : (ce(e), Nd(
            e,
            o,
            null,
            c,
            a
          ))) : f ? f !== t.memoizedState ? (fu(e), ce(e), Qp(
            e,
            f
          )) : (ce(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== c && fu(e), ce(e), Nd(
            e,
            o,
            t,
            c,
            a
          )), null;
        case 27:
          if (ot(e), a = ql(Ga.current), o = e.type, t !== null && e.stateNode != null)
            t.memoizedProps !== c && fu(e);
          else {
            if (!c) {
              if (e.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return ce(e), null;
            }
            t = Q(), vi(e) ? qm(e) : (t = lc(
              o,
              c,
              a,
              t,
              !0
            ), e.stateNode = t, fu(e));
          }
          return ce(e), null;
        case 5:
          if (ot(e), o = e.type, t !== null && e.stateNode != null)
            t.memoizedProps !== c && fu(e);
          else {
            if (!c) {
              if (e.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return ce(e), null;
            }
            var d = Q();
            if (vi(e))
              qm(e);
            else {
              switch (f = ql(Ga.current), If(o, d.ancestorInfo), d = d.context, f = $s(f), d) {
                case am:
                  f = f.createElementNS(
                    zt,
                    o
                  );
                  break;
                case Rg:
                  f = f.createElementNS(
                    bt,
                    o
                  );
                  break;
                default:
                  switch (o) {
                    case "svg":
                      f = f.createElementNS(
                        zt,
                        o
                      );
                      break;
                    case "math":
                      f = f.createElementNS(
                        bt,
                        o
                      );
                      break;
                    case "script":
                      f = f.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                        f.firstChild
                      );
                      break;
                    case "select":
                      f = typeof c.is == "string" ? f.createElement("select", {
                        is: c.is
                      }) : f.createElement("select"), c.multiple ? f.multiple = !0 : c.size && (f.size = c.size);
                      break;
                    default:
                      f = typeof c.is == "string" ? f.createElement(o, {
                        is: c.is
                      }) : f.createElement(o), o.indexOf("-") === -1 && (o !== o.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        o
                      ), Object.prototype.toString.call(f) !== "[object HTMLUnknownElement]" || Xa.call(n2, o) || (n2[o] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        o
                      )));
                  }
              }
              f[Re] = e, f[fa] = c;
              t: for (d = e.child; d !== null; ) {
                if (d.tag === 5 || d.tag === 6)
                  f.appendChild(d.stateNode);
                else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                  d.child.return = d, d = d.child;
                  continue;
                }
                if (d === e) break t;
                for (; d.sibling === null; ) {
                  if (d.return === null || d.return === e)
                    break t;
                  d = d.return;
                }
                d.sibling.return = d.return, d = d.sibling;
              }
              e.stateNode = f;
              t: switch (Me(f, o, c), o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  c = !!c.autoFocus;
                  break t;
                case "img":
                  c = !0;
                  break t;
                default:
                  c = !1;
              }
              c && fu(e);
            }
          }
          return ce(e), Nd(
            e,
            e.type,
            t === null ? null : t.memoizedProps,
            e.pendingProps,
            a
          ), null;
        case 6:
          if (t && e.stateNode != null)
            t.memoizedProps !== c && fu(e);
          else {
            if (typeof c != "string" && e.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (t = ql(Ga.current), a = Q(), vi(e)) {
              if (t = e.stateNode, a = e.memoizedProps, o = !kc, c = null, f = sa, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = bv(
                      t,
                      a,
                      c
                    ), o !== null && (pi(e, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    c = f.memoizedProps, o && (o = bv(
                      t,
                      a,
                      c
                    ), o !== null && (pi(
                      e,
                      0
                    ).serverProps = o));
                }
              t[Re] = e, t = !!(t.nodeValue === a || c !== null && c.suppressHydrationWarning === !0 || jy(t.nodeValue, a)), t || Ia(e, !0);
            } else
              o = a.ancestorInfo.current, o != null && Pf(
                c,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), t = $s(t).createTextNode(
                c
              ), t[Re] = e, e.stateNode = t;
          }
          return ce(e), null;
        case 31:
          if (a = e.memoizedState, t === null || t.memoizedState !== null) {
            if (c = vi(e), a !== null) {
              if (t === null) {
                if (!c)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t)
                  throw Error(
                    "Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                t[Re] = e, ce(e), (e.mode & Mt) !== mt && a !== null && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration));
              } else
                Ec(), Tc(), (e.flags & 128) === 0 && (a = e.memoizedState = null), e.flags |= 4, ce(e), (e.mode & Mt) !== mt && a !== null && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration));
              t = !1;
            } else
              a = is(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = !0;
            if (!t)
              return e.flags & 256 ? (vl(e), e) : (vl(e), null);
            if ((e.flags & 128) !== 0)
              throw Error(
                "Client rendering an Activity suspended it again. This is a bug in React."
              );
          }
          return ce(e), null;
        case 13:
          if (c = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (o = c, f = vi(e), o !== null && o.dehydrated !== null) {
              if (t === null) {
                if (!f)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (f = e.memoizedState, f = f !== null ? f.dehydrated : null, !f)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                f[Re] = e, ce(e), (e.mode & Mt) !== mt && o !== null && (o = e.child, o !== null && (e.treeBaseDuration -= o.treeBaseDuration));
              } else
                Ec(), Tc(), (e.flags & 128) === 0 && (o = e.memoizedState = null), e.flags |= 4, ce(e), (e.mode & Mt) !== mt && o !== null && (o = e.child, o !== null && (e.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = is(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return e.flags & 256 ? (vl(e), e) : (vl(e), null);
          }
          return vl(e), (e.flags & 128) !== 0 ? (e.lanes = a, (e.mode & Mt) !== mt && bi(e), e) : (a = c !== null, t = t !== null && t.memoizedState !== null, a && (c = e.child, o = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (o = c.alternate.memoizedState.cachePool.pool), f = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (f = c.memoizedState.cachePool.pool), f !== o && (c.flags |= 2048)), a !== t && a && (e.child.flags |= 8192), Zo(e, e.updateQueue), ce(e), (e.mode & Mt) !== mt && a && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration)), null);
        case 4:
          return O(e), t === null && Qc(
            e.stateNode.containerInfo
          ), ce(e), null;
        case 10:
          return Tn(e.type, e), ce(e), null;
        case 19:
          if (Et(fl, e), c = e.memoizedState, c === null) return ce(e), null;
          if (o = (e.flags & 128) !== 0, f = c.rendering, f === null)
            if (o) Lo(c, !1);
            else {
              if (we !== oo || t !== null && (t.flags & 128) !== 0)
                for (t = e.child; t !== null; ) {
                  if (f = Ei(t), f !== null) {
                    for (e.flags |= 128, Lo(c, !1), t = f.updateQueue, e.updateQueue = t, Zo(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null; )
                      Bm(a, t), a = a.sibling;
                    return Ct(
                      fl,
                      fl.current & wh | G0,
                      e
                    ), jt && bn(e, c.treeForkCount), e.child;
                  }
                  t = t.sibling;
                }
              c.tail !== null && Tl() > yg && (e.flags |= 128, o = !0, Lo(c, !1), e.lanes = 4194304);
            }
          else {
            if (!o)
              if (t = Ei(f), t !== null) {
                if (e.flags |= 128, o = !0, t = t.updateQueue, e.updateQueue = t, Zo(e, t), Lo(c, !0), c.tail === null && c.tailMode === "hidden" && !f.alternate && !jt)
                  return ce(e), null;
              } else
                2 * Tl() - c.renderingStartTime > yg && a !== 536870912 && (e.flags |= 128, o = !0, Lo(c, !1), e.lanes = 4194304);
            c.isBackwards ? (f.sibling = e.child, e.child = f) : (t = c.last, t !== null ? t.sibling = f : e.child = f, c.last = f);
          }
          return c.tail !== null ? (t = c.tail, c.rendering = t, c.tail = t.sibling, c.renderingStartTime = Tl(), t.sibling = null, a = fl.current, a = o ? a & wh | G0 : a & wh, Ct(fl, a, e), jt && bn(e, c.treeForkCount), t) : (ce(e), null);
        case 22:
        case 23:
          return vl(e), Dn(e), c = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== c && (e.flags |= 8192) : c && (e.flags |= 8192), c ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (ce(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : ce(e), a = e.updateQueue, a !== null && Zo(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), c = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (c = e.memoizedState.cachePool.pool), c !== a && (e.flags |= 2048), t !== null && Et(Sr, e), null;
        case 24:
          return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Tn(El, e), ce(e), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + e.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Vp(t, e) {
      switch (id(e), e.tag) {
        case 1:
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & Mt) !== mt && bi(e), e) : null;
        case 3:
          return Tn(El, e), O(e), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
        case 26:
        case 27:
        case 5:
          return ot(e), null;
        case 31:
          if (e.memoizedState !== null) {
            if (vl(e), e.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Tc();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & Mt) !== mt && bi(e), e) : null;
        case 13:
          if (vl(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
            if (e.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Tc();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & Mt) !== mt && bi(e), e) : null;
        case 19:
          return Et(fl, e), null;
        case 4:
          return O(e), null;
        case 10:
          return Tn(e.type, e), null;
        case 22:
        case 23:
          return vl(e), Dn(e), t !== null && Et(Sr, e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & Mt) !== mt && bi(e), e) : null;
        case 24:
          return Tn(El, e), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function dy(t, e) {
      switch (id(e), e.tag) {
        case 3:
          Tn(El, e), O(e);
          break;
        case 26:
        case 27:
        case 5:
          ot(e);
          break;
        case 4:
          O(e);
          break;
        case 31:
          e.memoizedState !== null && vl(e);
          break;
        case 13:
          vl(e);
          break;
        case 19:
          Et(fl, e);
          break;
        case 10:
          Tn(e.type, e);
          break;
        case 22:
        case 23:
          vl(e), Dn(e), t !== null && Et(Sr, e);
          break;
        case 24:
          Tn(El, e);
      }
    }
    function su(t) {
      return (t.mode & Mt) !== mt;
    }
    function Zp(t, e) {
      su(t) ? (Qe(), Fu(e, t), Fl()) : Fu(e, t);
    }
    function xd(t, e, a) {
      su(t) ? (Qe(), xc(
        a,
        t,
        e
      ), Fl()) : xc(
        a,
        t,
        e
      );
    }
    function Fu(t, e) {
      try {
        var a = e.updateQueue, c = a !== null ? a.lastEffect : null;
        if (c !== null) {
          var o = c.next;
          a = o;
          do {
            if ((a.tag & t) === t && (c = void 0, (t & La) !== ng && (tm = !0), c = k(
              e,
              HT,
              a
            ), (t & La) !== ng && (tm = !1), c !== void 0 && typeof c != "function")) {
              var f = void 0;
              f = (a.tag & Qn) !== 0 ? "useLayoutEffect" : (a.tag & La) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = c === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof c.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + c, k(
                e,
                function(h, y) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    y
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        At(e, e.return, h);
      }
    }
    function xc(t, e, a) {
      try {
        var c = e.updateQueue, o = c !== null ? c.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          c = f;
          do {
            if ((c.tag & t) === t) {
              var d = c.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (t & La) !== ng && (tm = !0), o = e, k(
                o,
                BT,
                o,
                a,
                h
              ), (t & La) !== ng && (tm = !1));
            }
            c = c.next;
          } while (c !== f);
        }
      } catch (y) {
        At(e, e.return, y);
      }
    }
    function Ns(t, e) {
      su(t) ? (Qe(), Fu(e, t), Fl()) : Fu(e, t);
    }
    function qd(t, e, a) {
      su(t) ? (Qe(), xc(
        a,
        t,
        e
      ), Fl()) : xc(
        a,
        t,
        e
      );
    }
    function hy(t) {
      var e = t.updateQueue;
      if (e !== null) {
        var a = t.stateNode;
        t.type.defaultProps || "ref" in t.memoizedProps || Wh || (a.props !== t.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          W(t) || "instance"
        ), a.state !== t.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          W(t) || "instance"
        ));
        try {
          k(
            t,
            Ho,
            e,
            a
          );
        } catch (c) {
          At(t, t.return, c);
        }
      }
    }
    function xs(t, e, a) {
      return t.getSnapshotBeforeUpdate(e, a);
    }
    function Lp(t, e) {
      var a = e.memoizedProps, c = e.memoizedState;
      e = t.stateNode, t.type.defaultProps || "ref" in t.memoizedProps || Wh || (e.props !== t.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        W(t) || "instance"
      ), e.state !== t.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        W(t) || "instance"
      ));
      try {
        var o = ou(
          t.type,
          a
        ), f = k(
          t,
          xs,
          e,
          o,
          c
        );
        a = xb, f !== void 0 || a.has(t.type) || (a.add(t.type), k(t, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            W(t)
          );
        })), e.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        At(t, t.return, d);
      }
    }
    function Yd(t, e, a) {
      a.props = ou(
        t.type,
        t.memoizedProps
      ), a.state = t.memoizedState, su(t) ? (Qe(), k(
        t,
        tb,
        t,
        e,
        a
      ), Fl()) : k(
        t,
        tb,
        t,
        e,
        a
      );
    }
    function wp(t) {
      var e = t.ref;
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        if (typeof e == "function")
          if (su(t))
            try {
              Qe(), t.refCleanup = e(a);
            } finally {
              Fl();
            }
          else t.refCleanup = e(a);
        else
          typeof e == "string" ? console.error("String refs are no longer supported.") : e.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            W(t)
          ), e.current = a;
      }
    }
    function xi(t, e) {
      try {
        k(t, wp, t);
      } catch (a) {
        At(t, e, a);
      }
    }
    function nn(t, e) {
      var a = t.ref, c = t.refCleanup;
      if (a !== null)
        if (typeof c == "function")
          try {
            if (su(t))
              try {
                Qe(), k(t, c);
              } finally {
                Fl(t);
              }
            else k(t, c);
          } catch (o) {
            At(t, e, o);
          } finally {
            t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (su(t))
              try {
                Qe(), k(t, a, null);
              } finally {
                Fl(t);
              }
            else k(t, a, null);
          } catch (o) {
            At(t, e, o);
          }
        else a.current = null;
    }
    function my(t, e, a, c) {
      var o = t.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, e = e === null ? "mount" : "update", Iv && (e = "nested-update"), typeof o == "function" && o(
        f,
        e,
        t.actualDuration,
        t.treeBaseDuration,
        t.actualStartTime,
        a
      ), typeof d == "function" && d(f, e, c, a);
    }
    function Jp(t, e, a, c) {
      var o = t.memoizedProps;
      t = o.id, o = o.onPostCommit, e = e === null ? "mount" : "update", Iv && (e = "nested-update"), typeof o == "function" && o(
        t,
        e,
        c,
        a
      );
    }
    function qc(t) {
      var e = t.type, a = t.memoizedProps, c = t.stateNode;
      try {
        k(
          t,
          uv,
          c,
          e,
          a,
          t
        );
      } catch (o) {
        At(t, t.return, o);
      }
    }
    function jd(t, e, a) {
      try {
        k(
          t,
          nh,
          t.stateNode,
          t.type,
          a,
          e,
          t
        );
      } catch (c) {
        At(t, t.return, c);
      }
    }
    function yy(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Zc(t.type) || t.tag === 4;
    }
    function Gd(t) {
      t: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || yy(t.return)) return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.tag === 27 && Zc(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function wo(t, e, a) {
      var c = t.tag;
      if (c === 5 || c === 6)
        t = t.stateNode, e ? (iv(a), (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, e)) : (iv(a), e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, e.appendChild(t), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = ka));
      else if (c !== 4 && (c === 27 && Zc(t.type) && (a = t.stateNode, e = null), t = t.child, t !== null))
        for (wo(t, e, a), t = t.sibling; t !== null; )
          wo(t, e, a), t = t.sibling;
    }
    function qs(t, e, a) {
      var c = t.tag;
      if (c === 5 || c === 6)
        t = t.stateNode, e ? a.insertBefore(t, e) : a.appendChild(t);
      else if (c !== 4 && (c === 27 && Zc(t.type) && (a = t.stateNode), t = t.child, t !== null))
        for (qs(t, e, a), t = t.sibling; t !== null; )
          qs(t, e, a), t = t.sibling;
    }
    function py(t) {
      for (var e, a = t.return; a !== null; ) {
        if (yy(a)) {
          e = a;
          break;
        }
        a = a.return;
      }
      if (e == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (e.tag) {
        case 27:
          e = e.stateNode, a = Gd(t), qs(
            t,
            a,
            e
          );
          break;
        case 5:
          a = e.stateNode, e.flags & 32 && (uh(a), e.flags &= -33), e = Gd(t), qs(
            t,
            e,
            a
          );
          break;
        case 3:
        case 4:
          e = e.stateNode.containerInfo, a = Gd(t), wo(
            t,
            a,
            e
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function vy(t) {
      var e = t.stateNode, a = t.memoizedProps;
      try {
        k(
          t,
          gu,
          t.type,
          a,
          e,
          t
        );
      } catch (c) {
        At(t, t.return, c);
      }
    }
    function gy(t, e) {
      return e.tag === 31 ? (e = e.memoizedState, t.memoizedState !== null && e === null) : e.tag === 13 ? (t = t.memoizedState, e = e.memoizedState, t !== null && t.dehydrated !== null && (e === null || e.dehydrated === null)) : e.tag === 3 ? t.memoizedState.isDehydrated && (e.flags & 256) === 0 : !1;
    }
    function $g(t, e) {
      if (t = t.containerInfo, nS = Hg, t = td(t), Dm(t)) {
        if ("selectionStart" in t)
          var a = {
            start: t.selectionStart,
            end: t.selectionEnd
          };
        else
          t: {
            a = (a = t.ownerDocument) && a.defaultView || window;
            var c = a.getSelection && a.getSelection();
            if (c && c.rangeCount !== 0) {
              a = c.anchorNode;
              var o = c.anchorOffset, f = c.focusNode;
              c = c.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break t;
              }
              var d = 0, h = -1, y = -1, p = 0, A = 0, D = t, S = null;
              e: for (; ; ) {
                for (var _; D !== a || o !== 0 && D.nodeType !== 3 || (h = d + o), D !== f || c !== 0 && D.nodeType !== 3 || (y = d + c), D.nodeType === 3 && (d += D.nodeValue.length), (_ = D.firstChild) !== null; )
                  S = D, D = _;
                for (; ; ) {
                  if (D === t) break e;
                  if (S === a && ++p === o && (h = d), S === f && ++A === c && (y = d), (_ = D.nextSibling) !== null) break;
                  D = S, S = D.parentNode;
                }
                D = _;
              }
              a = h === -1 || y === -1 ? null : { start: h, end: y };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (uS = {
        focusedElem: t,
        selectionRange: a
      }, Hg = !1, Zl = e; Zl !== null; )
        if (e = Zl, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
          t.return = e, Zl = t;
        else
          for (; Zl !== null; ) {
            switch (t = e = Zl, a = t.alternate, o = t.flags, t.tag) {
              case 0:
                if ((o & 4) !== 0 && (t = t.updateQueue, t = t !== null ? t.events : null, t !== null))
                  for (a = 0; a < t.length; a++)
                    o = t[a], o.ref.impl = o.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && Lp(t, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (t = t.stateNode.containerInfo, a = t.nodeType, a === 9)
                    nf(t);
                  else if (a === 1)
                    switch (t.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        nf(t);
                        break;
                      default:
                        t.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (t = e.sibling, t !== null) {
              t.return = e.return, Zl = t;
              break;
            }
            Zl = e.return;
          }
    }
    function Xd(t, e, a) {
      var c = De(), o = tn(), f = Ma(), d = en(), h = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Na(t, a), h & 4 && Zp(a, Qn | _u);
          break;
        case 1:
          if (Na(t, a), h & 4)
            if (t = a.stateNode, e === null)
              a.type.defaultProps || "ref" in a.memoizedProps || Wh || (t.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                W(a) || "instance"
              ), t.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                W(a) || "instance"
              )), su(a) ? (Qe(), k(
                a,
                O1,
                a,
                t
              ), Fl()) : k(
                a,
                O1,
                a,
                t
              );
            else {
              var y = ou(
                a.type,
                e.memoizedProps
              );
              e = e.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || Wh || (t.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                W(a) || "instance"
              ), t.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                W(a) || "instance"
              )), su(a) ? (Qe(), k(
                a,
                FS,
                a,
                t,
                y,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              ), Fl()) : k(
                a,
                FS,
                a,
                t,
                y,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            }
          h & 64 && hy(a), h & 512 && xi(a, a.return);
          break;
        case 3:
          if (e = Pn(), Na(t, a), h & 64 && (h = a.updateQueue, h !== null)) {
            if (y = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  y = a.child.stateNode;
                  break;
                case 1:
                  y = a.child.stateNode;
              }
            try {
              k(
                a,
                Ho,
                h,
                y
              );
            } catch (A) {
              At(a, a.return, A);
            }
          }
          t.effectDuration += Ro(e);
          break;
        case 27:
          e === null && h & 4 && vy(a);
        case 26:
        case 5:
          if (Na(t, a), e === null) {
            if (h & 4) qc(a);
            else if (h & 64) {
              t = a.type, e = a.memoizedProps, y = a.stateNode;
              try {
                k(
                  a,
                  cv,
                  y,
                  t,
                  e,
                  a
                );
              } catch (A) {
                At(
                  a,
                  a.return,
                  A
                );
              }
            }
          }
          h & 512 && xi(a, a.return);
          break;
        case 12:
          if (h & 4) {
            h = Pn(), Na(t, a), t = a.stateNode, t.effectDuration += kl(h);
            try {
              k(
                a,
                my,
                a,
                e,
                Rf,
                t.effectDuration
              );
            } catch (A) {
              At(a, a.return, A);
            }
          } else Na(t, a);
          break;
        case 31:
          Na(t, a), h & 4 && by(t, a);
          break;
        case 13:
          Na(t, a), h & 4 && Ty(t, a), h & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (h = Pu.bind(
            null,
            a
          ), gv(t, h))));
          break;
        case 22:
          if (h = a.memoizedState !== null || io, !h) {
            e = e !== null && e.memoizedState !== null || Ol, y = io;
            var p = Ol;
            io = h, (Ol = e) && !p ? (Un(
              t,
              a,
              (a.subtreeFlags & 8772) !== 0
            ), (a.mode & Mt) !== mt && 0 <= it && 0 <= rt && 0.05 < rt - it && ed(
              a,
              it,
              rt
            )) : Na(t, a), io = y, Ol = p;
          }
          break;
        case 30:
          break;
        default:
          Na(t, a);
      }
      (a.mode & Mt) !== mt && 0 <= it && 0 <= rt && ((Ie || 0.05 < Le) && Sn(
        a,
        it,
        rt,
        Le,
        qe
      ), a.alternate === null && a.return !== null && a.return.alternate !== null && 0.05 < rt - it && (gy(
        a.return.alternate,
        a.return
      ) || Fa(
        a,
        it,
        rt,
        "Mount"
      ))), yl(c), Oa(o), qe = f, Ie = d;
    }
    function ke(t) {
      var e = t.alternate;
      e !== null && (t.alternate = null, ke(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && sm(e)), t.stateNode = null, t._debugOwner = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    function Ee(t, e, a) {
      for (a = a.child; a !== null; )
        Sy(
          t,
          e,
          a
        ), a = a.sibling;
    }
    function Sy(t, e, a) {
      if (il && typeof il.onCommitFiberUnmount == "function")
        try {
          il.onCommitFiberUnmount($i, a);
        } catch (p) {
          bu || (bu = !0, console.error(
            "React instrumentation encountered an error: %o",
            p
          ));
        }
      var c = De(), o = tn(), f = Ma(), d = en();
      switch (a.tag) {
        case 26:
          Ol || nn(a, e), Ee(
            t,
            e,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (t = a.stateNode, t.parentNode.removeChild(t));
          break;
        case 27:
          Ol || nn(a, e);
          var h = Ml, y = sn;
          Zc(a.type) && (Ml = a.stateNode, sn = !1), Ee(
            t,
            e,
            a
          ), k(
            a,
            ac,
            a.stateNode
          ), Ml = h, sn = y;
          break;
        case 5:
          Ol || nn(a, e);
        case 6:
          if (h = Ml, y = sn, Ml = null, Ee(
            t,
            e,
            a
          ), Ml = h, sn = y, Ml !== null)
            if (sn)
              try {
                k(
                  a,
                  fv,
                  Ml,
                  a.stateNode
                );
              } catch (p) {
                At(
                  a,
                  e,
                  p
                );
              }
            else
              try {
                k(
                  a,
                  ov,
                  Ml,
                  a.stateNode
                );
              } catch (p) {
                At(
                  a,
                  e,
                  p
                );
              }
          break;
        case 18:
          Ml !== null && (sn ? (t = Ml, Xi(
            t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
            a.stateNode
          ), Li(t)) : Xi(Ml, a.stateNode));
          break;
        case 4:
          h = Ml, y = sn, Ml = a.stateNode.containerInfo, sn = !0, Ee(
            t,
            e,
            a
          ), Ml = h, sn = y;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          xc(
            La,
            a,
            e
          ), Ol || xd(
            a,
            e,
            Qn
          ), Ee(
            t,
            e,
            a
          );
          break;
        case 1:
          Ol || (nn(a, e), h = a.stateNode, typeof h.componentWillUnmount == "function" && Yd(
            a,
            e,
            h
          )), Ee(
            t,
            e,
            a
          );
          break;
        case 21:
          Ee(
            t,
            e,
            a
          );
          break;
        case 22:
          Ol = (h = Ol) || a.memoizedState !== null, Ee(
            t,
            e,
            a
          ), Ol = h;
          break;
        default:
          Ee(
            t,
            e,
            a
          );
      }
      (a.mode & Mt) !== mt && 0 <= it && 0 <= rt && (Ie || 0.05 < Le) && Sn(
        a,
        it,
        rt,
        Le,
        qe
      ), yl(c), Oa(o), qe = f, Ie = d;
    }
    function by(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
        t = t.dehydrated;
        try {
          k(
            e,
            ch,
            t
          );
        } catch (a) {
          At(e, e.return, a);
        }
      }
    }
    function Ty(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
        try {
          k(
            e,
            Vy,
            t
          );
        } catch (a) {
          At(e, e.return, a);
        }
    }
    function Kp(t) {
      switch (t.tag) {
        case 31:
        case 13:
        case 19:
          var e = t.stateNode;
          return e === null && (e = t.stateNode = new qb()), e;
        case 22:
          return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new qb()), e;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + t.tag + "). This is a bug in React."
          );
      }
    }
    function Yc(t, e) {
      var a = Kp(t);
      e.forEach(function(c) {
        if (!a.has(c)) {
          if (a.add(c), Tu)
            if (kh !== null && Fh !== null)
              Fo(Fh, kh);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          var o = ji.bind(null, t, c);
          c.then(o, o);
        }
      });
    }
    function la(t, e) {
      var a = e.deletions;
      if (a !== null)
        for (var c = 0; c < a.length; c++) {
          var o = t, f = e, d = a[c], h = De(), y = f;
          t: for (; y !== null; ) {
            switch (y.tag) {
              case 27:
                if (Zc(y.type)) {
                  Ml = y.stateNode, sn = !1;
                  break t;
                }
                break;
              case 5:
                Ml = y.stateNode, sn = !1;
                break t;
              case 3:
              case 4:
                Ml = y.stateNode.containerInfo, sn = !0;
                break t;
            }
            y = y.return;
          }
          if (Ml === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          Sy(o, f, d), Ml = null, sn = !1, (d.mode & Mt) !== mt && 0 <= it && 0 <= rt && 0.05 < rt - it && Fa(
            d,
            it,
            rt,
            "Unmount"
          ), yl(h), o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (e.subtreeFlags & 13886)
        for (e = e.child; e !== null; )
          Ys(e, t), e = e.sibling;
    }
    function Ys(t, e) {
      var a = De(), c = tn(), o = Ma(), f = en(), d = t.alternate, h = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          la(e, t), aa(t), h & 4 && (xc(
            La | _u,
            t,
            t.return
          ), Fu(La | _u, t), xd(
            t,
            t.return,
            Qn | _u
          ));
          break;
        case 1:
          if (la(e, t), aa(t), h & 512 && (Ol || d === null || nn(d, d.return)), h & 64 && io && (h = t.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var y = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = y === null ? d : y.concat(d);
          }
          break;
        case 26:
          if (y = fc, la(e, t), aa(t), h & 512 && (Ol || d === null || nn(d, d.return)), h & 4) {
            var p = d !== null ? d.memoizedState : null;
            if (h = t.memoizedState, d === null)
              if (h === null)
                if (t.stateNode === null) {
                  t: {
                    h = t.type, d = t.memoizedProps, y = y.ownerDocument || y;
                    e: switch (h) {
                      case "title":
                        p = y.getElementsByTagName(
                          "title"
                        )[0], (!p || p[bf] || p[Re] || p.namespaceURI === zt || p.hasAttribute("itemprop")) && (p = y.createElement(h), y.head.insertBefore(
                          p,
                          y.querySelector(
                            "head > title"
                          )
                        )), Me(p, h, d), p[Re] = t, Je(p), h = p;
                        break t;
                      case "link":
                        var A = of(
                          "link",
                          "href",
                          y
                        ).get(h + (d.href || ""));
                        if (A) {
                          for (var D = 0; D < A.length; D++)
                            if (p = A[D], p.getAttribute("href") === (d.href == null || d.href === "" ? null : d.href) && p.getAttribute("rel") === (d.rel == null ? null : d.rel) && p.getAttribute("title") === (d.title == null ? null : d.title) && p.getAttribute("crossorigin") === (d.crossOrigin == null ? null : d.crossOrigin)) {
                              A.splice(D, 1);
                              break e;
                            }
                        }
                        p = y.createElement(h), Me(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      case "meta":
                        if (A = of(
                          "meta",
                          "content",
                          y
                        ).get(h + (d.content || ""))) {
                          for (D = 0; D < A.length; D++)
                            if (p = A[D], ne(
                              d.content,
                              "content"
                            ), p.getAttribute("content") === (d.content == null ? null : "" + d.content) && p.getAttribute("name") === (d.name == null ? null : d.name) && p.getAttribute("property") === (d.property == null ? null : d.property) && p.getAttribute("http-equiv") === (d.httpEquiv == null ? null : d.httpEquiv) && p.getAttribute("charset") === (d.charSet == null ? null : d.charSet)) {
                              A.splice(D, 1);
                              break e;
                            }
                        }
                        p = y.createElement(h), Me(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + h + '". This is a bug in React.'
                        );
                    }
                    p[Re] = t, Je(p), h = p;
                  }
                  t.stateNode = h;
                } else
                  Ev(
                    y,
                    t.type,
                    t.stateNode
                  );
              else
                t.stateNode = fh(
                  y,
                  h,
                  t.memoizedProps
                );
            else
              p !== h ? (p === null ? d.stateNode !== null && (d = d.stateNode, d.parentNode.removeChild(d)) : p.count--, h === null ? Ev(
                y,
                t.type,
                t.stateNode
              ) : fh(
                y,
                h,
                t.memoizedProps
              )) : h === null && t.stateNode !== null && jd(
                t,
                t.memoizedProps,
                d.memoizedProps
              );
          }
          break;
        case 27:
          la(e, t), aa(t), h & 512 && (Ol || d === null || nn(d, d.return)), d !== null && h & 4 && jd(
            t,
            t.memoizedProps,
            d.memoizedProps
          );
          break;
        case 5:
          if (la(e, t), aa(t), h & 512 && (Ol || d === null || nn(d, d.return)), t.flags & 32) {
            y = t.stateNode;
            try {
              k(
                t,
                uh,
                y
              );
            } catch ($) {
              At(t, t.return, $);
            }
          }
          h & 4 && t.stateNode != null && (y = t.memoizedProps, jd(
            t,
            y,
            d !== null ? d.memoizedProps : y
          )), h & 1024 && (G1 = !0, t.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (la(e, t), aa(t), h & 4) {
            if (t.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            h = t.memoizedProps, d = d !== null ? d.memoizedProps : h, y = t.stateNode;
            try {
              k(
                t,
                Wg,
                y,
                d,
                h
              );
            } catch ($) {
              At(t, t.return, $);
            }
          }
          break;
        case 3:
          if (y = Pn(), Ug = null, p = fc, fc = ih(e.containerInfo), la(e, t), fc = p, aa(t), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              k(
                t,
                Qy,
                e.containerInfo
              );
            } catch ($) {
              At(t, t.return, $);
            }
          G1 && (G1 = !1, $p(t)), e.effectDuration += Ro(
            y
          );
          break;
        case 4:
          h = fc, fc = ih(
            t.stateNode.containerInfo
          ), la(e, t), aa(t), fc = h;
          break;
        case 12:
          h = Pn(), la(e, t), aa(t), t.stateNode.effectDuration += kl(h);
          break;
        case 31:
          la(e, t), aa(t), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, Yc(t, h)));
          break;
        case 13:
          la(e, t), aa(t), t.child.flags & 8192 && t.memoizedState !== null != (d !== null && d.memoizedState !== null) && (mg = Tl()), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, Yc(t, h)));
          break;
        case 22:
          y = t.memoizedState !== null;
          var S = d !== null && d.memoizedState !== null, _ = io, w = Ol;
          if (io = _ || y, Ol = w || S, la(e, t), Ol = w, io = _, S && !y && !_ && !w && (t.mode & Mt) !== mt && 0 <= it && 0 <= rt && 0.05 < rt - it && ed(
            t,
            it,
            rt
          ), aa(t), h & 8192)
            t: for (e = t.stateNode, e._visibility = y ? e._visibility & ~A0 : e._visibility | A0, !y || d === null || S || io || Ol || (jc(t), (t.mode & Mt) !== mt && 0 <= it && 0 <= rt && 0.05 < rt - it && Fa(
              t,
              it,
              rt,
              "Disconnect"
            )), d = null, e = t; ; ) {
              if (e.tag === 5 || e.tag === 26) {
                if (d === null) {
                  S = d = e;
                  try {
                    p = S.stateNode, y ? k(
                      S,
                      rv,
                      p
                    ) : k(
                      S,
                      mv,
                      S.stateNode,
                      S.memoizedProps
                    );
                  } catch ($) {
                    At(S, S.return, $);
                  }
                }
              } else if (e.tag === 6) {
                if (d === null) {
                  S = e;
                  try {
                    A = S.stateNode, y ? k(
                      S,
                      dv,
                      A
                    ) : k(
                      S,
                      yv,
                      A,
                      S.memoizedProps
                    );
                  } catch ($) {
                    At(S, S.return, $);
                  }
                }
              } else if (e.tag === 18) {
                if (d === null) {
                  S = e;
                  try {
                    D = S.stateNode, y ? k(
                      S,
                      sv,
                      D
                    ) : k(
                      S,
                      hv,
                      S.stateNode
                    );
                  } catch ($) {
                    At(S, S.return, $);
                  }
                }
              } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
              }
              if (e === t) break t;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                  break t;
                d === e && (d = null), e = e.return;
              }
              d === e && (d = null), e.sibling.return = e.return, e = e.sibling;
            }
          h & 4 && (h = t.updateQueue, h !== null && (d = h.retryQueue, d !== null && (h.retryQueue = null, Yc(t, d))));
          break;
        case 19:
          la(e, t), aa(t), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, Yc(t, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          la(e, t), aa(t);
      }
      (t.mode & Mt) !== mt && 0 <= it && 0 <= rt && ((Ie || 0.05 < Le) && Sn(
        t,
        it,
        rt,
        Le,
        qe
      ), t.alternate === null && t.return !== null && t.return.alternate !== null && 0.05 < rt - it && (gy(
        t.return.alternate,
        t.return
      ) || Fa(
        t,
        it,
        rt,
        "Mount"
      ))), yl(a), Oa(c), qe = o, Ie = f;
    }
    function aa(t) {
      var e = t.flags;
      if (e & 2) {
        try {
          k(t, py, t);
        } catch (a) {
          At(t, t.return, a);
        }
        t.flags &= -3;
      }
      e & 4096 && (t.flags &= -4097);
    }
    function $p(t) {
      if (t.subtreeFlags & 1024)
        for (t = t.child; t !== null; ) {
          var e = t;
          $p(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
        }
    }
    function Na(t, e) {
      if (e.subtreeFlags & 8772)
        for (e = e.child; e !== null; )
          Xd(t, e.alternate, e), e = e.sibling;
    }
    function Qd(t) {
      var e = De(), a = tn(), c = Ma(), o = en();
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          xd(
            t,
            t.return,
            Qn
          ), jc(t);
          break;
        case 1:
          nn(t, t.return);
          var f = t.stateNode;
          typeof f.componentWillUnmount == "function" && Yd(
            t,
            t.return,
            f
          ), jc(t);
          break;
        case 27:
          k(
            t,
            ac,
            t.stateNode
          );
        case 26:
        case 5:
          nn(t, t.return), jc(t);
          break;
        case 22:
          t.memoizedState === null && jc(t);
          break;
        case 30:
          jc(t);
          break;
        default:
          jc(t);
      }
      (t.mode & Mt) !== mt && 0 <= it && 0 <= rt && (Ie || 0.05 < Le) && Sn(
        t,
        it,
        rt,
        Le,
        qe
      ), yl(e), Oa(a), qe = c, Ie = o;
    }
    function jc(t) {
      for (t = t.child; t !== null; )
        Qd(t), t = t.sibling;
    }
    function Ey(t, e, a, c) {
      var o = De(), f = tn(), d = Ma(), h = en(), y = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Un(
            t,
            a,
            c
          ), Zp(a, Qn);
          break;
        case 1:
          if (Un(
            t,
            a,
            c
          ), e = a.stateNode, typeof e.componentDidMount == "function" && k(
            a,
            O1,
            a,
            e
          ), e = a.updateQueue, e !== null) {
            t = a.stateNode;
            try {
              k(
                a,
                Zm,
                e,
                t
              );
            } catch (p) {
              At(a, a.return, p);
            }
          }
          c && y & 64 && hy(a), xi(a, a.return);
          break;
        case 27:
          vy(a);
        case 26:
        case 5:
          Un(
            t,
            a,
            c
          ), c && e === null && y & 4 && qc(a), xi(a, a.return);
          break;
        case 12:
          if (c && y & 4) {
            y = Pn(), Un(
              t,
              a,
              c
            ), c = a.stateNode, c.effectDuration += kl(y);
            try {
              k(
                a,
                my,
                a,
                e,
                Rf,
                c.effectDuration
              );
            } catch (p) {
              At(a, a.return, p);
            }
          } else
            Un(
              t,
              a,
              c
            );
          break;
        case 31:
          Un(
            t,
            a,
            c
          ), c && y & 4 && by(t, a);
          break;
        case 13:
          Un(
            t,
            a,
            c
          ), c && y & 4 && Ty(t, a);
          break;
        case 22:
          a.memoizedState === null && Un(
            t,
            a,
            c
          ), xi(a, a.return);
          break;
        case 30:
          break;
        default:
          Un(
            t,
            a,
            c
          );
      }
      (a.mode & Mt) !== mt && 0 <= it && 0 <= rt && (Ie || 0.05 < Le) && Sn(
        a,
        it,
        rt,
        Le,
        qe
      ), yl(o), Oa(f), qe = d, Ie = h;
    }
    function Un(t, e, a) {
      for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; )
        Ey(
          t,
          e.alternate,
          e,
          a
        ), e = e.sibling;
    }
    function js(t, e) {
      var a = null;
      t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && gi(t), a != null && ss(a));
    }
    function Gs(t, e) {
      t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (gi(e), t != null && ss(t));
    }
    function xa(t, e, a, c, o) {
      if (e.subtreeFlags & 10256 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child))
        for (e = e.child; e !== null; ) {
          var f = e.sibling;
          Ay(
            t,
            e,
            a,
            c,
            f !== null ? f.actualStartTime : o
          ), e = f;
        }
    }
    function Ay(t, e, a, c, o) {
      var f = De(), d = tn(), h = Ma(), y = en(), p = zf, A = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (e.mode & Mt) !== mt && 0 < e.actualStartTime && (e.flags & 1) !== 0 && ld(
            e,
            e.actualStartTime,
            o,
            Nl,
            a
          ), xa(
            t,
            e,
            a,
            c,
            o
          ), A & 2048 && Ns(e, wa | _u);
          break;
        case 1:
          (e.mode & Mt) !== mt && 0 < e.actualStartTime && ((e.flags & 128) !== 0 ? Mm(
            e,
            e.actualStartTime,
            o,
            []
          ) : (e.flags & 1) !== 0 && ld(
            e,
            e.actualStartTime,
            o,
            Nl,
            a
          )), xa(
            t,
            e,
            a,
            c,
            o
          );
          break;
        case 3:
          var D = Pn(), S = Nl;
          Nl = e.alternate !== null && e.alternate.memoizedState.isDehydrated && (e.flags & 256) === 0, xa(
            t,
            e,
            a,
            c,
            o
          ), Nl = S, A & 2048 && (a = null, e.alternate !== null && (a = e.alternate.memoizedState.cache), c = e.memoizedState.cache, c !== a && (gi(c), a != null && ss(a))), t.passiveEffectDuration += Ro(
            D
          );
          break;
        case 12:
          if (A & 2048) {
            A = Pn(), xa(
              t,
              e,
              a,
              c,
              o
            ), t = e.stateNode, t.passiveEffectDuration += kl(A);
            try {
              k(
                e,
                Jp,
                e,
                e.alternate,
                Rf,
                t.passiveEffectDuration
              );
            } catch (_) {
              At(e, e.return, _);
            }
          } else
            xa(
              t,
              e,
              a,
              c,
              o
            );
          break;
        case 31:
          A = Nl, D = e.alternate !== null ? e.alternate.memoizedState : null, S = e.memoizedState, D !== null && S === null ? (S = e.deletions, S !== null && 0 < S.length && S[0].tag === 18 ? (Nl = !1, D = D.hydrationErrors, D !== null && Mm(
            e,
            e.actualStartTime,
            o,
            D
          )) : Nl = !0) : Nl = !1, xa(
            t,
            e,
            a,
            c,
            o
          ), Nl = A;
          break;
        case 13:
          A = Nl, D = e.alternate !== null ? e.alternate.memoizedState : null, S = e.memoizedState, D === null || D.dehydrated === null || S !== null && S.dehydrated !== null ? Nl = !1 : (S = e.deletions, S !== null && 0 < S.length && S[0].tag === 18 ? (Nl = !1, D = D.hydrationErrors, D !== null && Mm(
            e,
            e.actualStartTime,
            o,
            D
          )) : Nl = !0), xa(
            t,
            e,
            a,
            c,
            o
          ), Nl = A;
          break;
        case 23:
          break;
        case 22:
          S = e.stateNode, D = e.alternate, e.memoizedState !== null ? S._visibility & Fi ? xa(
            t,
            e,
            a,
            c,
            o
          ) : qi(
            t,
            e,
            a,
            c,
            o
          ) : S._visibility & Fi ? xa(
            t,
            e,
            a,
            c,
            o
          ) : (S._visibility |= Fi, Gc(
            t,
            e,
            a,
            c,
            (e.subtreeFlags & 10256) !== 0 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child),
            o
          ), (e.mode & Mt) === mt || Nl || (t = e.actualStartTime, 0 <= t && 0.05 < o - t && ed(e, t, o), 0 <= it && 0 <= rt && 0.05 < rt - it && ed(
            e,
            it,
            rt
          ))), A & 2048 && js(
            D,
            e
          );
          break;
        case 24:
          xa(
            t,
            e,
            a,
            c,
            o
          ), A & 2048 && Gs(e.alternate, e);
          break;
        default:
          xa(
            t,
            e,
            a,
            c,
            o
          );
      }
      (e.mode & Mt) !== mt && ((t = !Nl && e.alternate === null && e.return !== null && e.return.alternate !== null) && (a = e.actualStartTime, 0 <= a && 0.05 < o - a && Fa(
        e,
        a,
        o,
        "Mount"
      )), 0 <= it && 0 <= rt && ((Ie || 0.05 < Le) && Sn(
        e,
        it,
        rt,
        Le,
        qe
      ), t && 0.05 < rt - it && Fa(
        e,
        it,
        rt,
        "Mount"
      ))), yl(f), Oa(d), qe = h, Ie = y, zf = p;
    }
    function Gc(t, e, a, c, o, f) {
      for (o = o && ((e.subtreeFlags & 10256) !== 0 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child)), e = e.child; e !== null; ) {
        var d = e.sibling;
        Xs(
          t,
          e,
          a,
          c,
          o,
          d !== null ? d.actualStartTime : f
        ), e = d;
      }
    }
    function Xs(t, e, a, c, o, f) {
      var d = De(), h = tn(), y = Ma(), p = en(), A = zf;
      o && (e.mode & Mt) !== mt && 0 < e.actualStartTime && (e.flags & 1) !== 0 && ld(
        e,
        e.actualStartTime,
        f,
        Nl,
        a
      );
      var D = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Gc(
            t,
            e,
            a,
            c,
            o,
            f
          ), Ns(e, wa);
          break;
        case 23:
          break;
        case 22:
          var S = e.stateNode;
          e.memoizedState !== null ? S._visibility & Fi ? Gc(
            t,
            e,
            a,
            c,
            o,
            f
          ) : qi(
            t,
            e,
            a,
            c,
            f
          ) : (S._visibility |= Fi, Gc(
            t,
            e,
            a,
            c,
            o,
            f
          )), o && D & 2048 && js(
            e.alternate,
            e
          );
          break;
        case 24:
          Gc(
            t,
            e,
            a,
            c,
            o,
            f
          ), o && D & 2048 && Gs(e.alternate, e);
          break;
        default:
          Gc(
            t,
            e,
            a,
            c,
            o,
            f
          );
      }
      (e.mode & Mt) !== mt && 0 <= it && 0 <= rt && (Ie || 0.05 < Le) && Sn(
        e,
        it,
        rt,
        Le,
        qe
      ), yl(d), Oa(h), qe = y, Ie = p, zf = A;
    }
    function qi(t, e, a, c, o) {
      if (e.subtreeFlags & 10256 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child))
        for (var f = e.child; f !== null; ) {
          e = f.sibling;
          var d = t, h = a, y = c, p = e !== null ? e.actualStartTime : o, A = zf;
          (f.mode & Mt) !== mt && 0 < f.actualStartTime && (f.flags & 1) !== 0 && ld(
            f,
            f.actualStartTime,
            p,
            Nl,
            h
          );
          var D = f.flags;
          switch (f.tag) {
            case 22:
              qi(
                d,
                f,
                h,
                y,
                p
              ), D & 2048 && js(f.alternate, f);
              break;
            case 24:
              qi(
                d,
                f,
                h,
                y,
                p
              ), D & 2048 && Gs(f.alternate, f);
              break;
            default:
              qi(
                d,
                f,
                h,
                y,
                p
              );
          }
          zf = A, f = e;
        }
    }
    function Yi(t, e, a) {
      if (t.subtreeFlags & Z0)
        for (t = t.child; t !== null; )
          Vd(
            t,
            e,
            a
          ), t = t.sibling;
    }
    function Vd(t, e, a) {
      switch (t.tag) {
        case 26:
          Yi(
            t,
            e,
            a
          ), t.flags & Z0 && t.memoizedState !== null && Ky(
            a,
            fc,
            t.memoizedState,
            t.memoizedProps
          );
          break;
        case 5:
          Yi(
            t,
            e,
            a
          );
          break;
        case 3:
        case 4:
          var c = fc;
          fc = ih(
            t.stateNode.containerInfo
          ), Yi(
            t,
            e,
            a
          ), fc = c;
          break;
        case 22:
          t.memoizedState === null && (c = t.alternate, c !== null && c.memoizedState !== null ? (c = Z0, Z0 = 16777216, Yi(
            t,
            e,
            a
          ), Z0 = c) : Yi(
            t,
            e,
            a
          ));
          break;
        default:
          Yi(
            t,
            e,
            a
          );
      }
    }
    function zy(t) {
      var e = t.alternate;
      if (e !== null && (t = e.child, t !== null)) {
        e.child = null;
        do
          e = t.sibling, t.sibling = null, t = e;
        while (t !== null);
      }
    }
    function qa(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null)
          for (var a = 0; a < e.length; a++) {
            var c = e[a], o = De();
            Zl = c, ru(
              c,
              t
            ), (c.mode & Mt) !== mt && 0 <= it && 0 <= rt && 0.05 < rt - it && Fa(
              c,
              it,
              rt,
              "Unmount"
            ), yl(o);
          }
        zy(t);
      }
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          Zd(t), t = t.sibling;
    }
    function Zd(t) {
      var e = De(), a = tn(), c = Ma(), o = en();
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          qa(t), t.flags & 2048 && qd(
            t,
            t.return,
            wa | _u
          );
          break;
        case 3:
          var f = Pn();
          qa(t), t.stateNode.passiveEffectDuration += Ro(f);
          break;
        case 12:
          f = Pn(), qa(t), t.stateNode.passiveEffectDuration += kl(f);
          break;
        case 22:
          f = t.stateNode, t.memoizedState !== null && f._visibility & Fi && (t.return === null || t.return.tag !== 13) ? (f._visibility &= ~Fi, Ld(t), (t.mode & Mt) !== mt && 0 <= it && 0 <= rt && 0.05 < rt - it && Fa(
            t,
            it,
            rt,
            "Disconnect"
          )) : qa(t);
          break;
        default:
          qa(t);
      }
      (t.mode & Mt) !== mt && 0 <= it && 0 <= rt && (Ie || 0.05 < Le) && Sn(
        t,
        it,
        rt,
        Le,
        qe
      ), yl(e), Oa(a), Ie = o, qe = c;
    }
    function Ld(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null)
          for (var a = 0; a < e.length; a++) {
            var c = e[a], o = De();
            Zl = c, ru(
              c,
              t
            ), (c.mode & Mt) !== mt && 0 <= it && 0 <= rt && 0.05 < rt - it && Fa(
              c,
              it,
              rt,
              "Unmount"
            ), yl(o);
          }
        zy(t);
      }
      for (t = t.child; t !== null; )
        Dy(t), t = t.sibling;
    }
    function Dy(t) {
      var e = De(), a = tn(), c = Ma(), o = en();
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          qd(
            t,
            t.return,
            wa
          ), Ld(t);
          break;
        case 22:
          var f = t.stateNode;
          f._visibility & Fi && (f._visibility &= ~Fi, Ld(t));
          break;
        default:
          Ld(t);
      }
      (t.mode & Mt) !== mt && 0 <= it && 0 <= rt && (Ie || 0.05 < Le) && Sn(
        t,
        it,
        rt,
        Le,
        qe
      ), yl(e), Oa(a), Ie = o, qe = c;
    }
    function ru(t, e) {
      for (; Zl !== null; ) {
        var a = Zl, c = a, o = e, f = De(), d = tn(), h = Ma(), y = en();
        switch (c.tag) {
          case 0:
          case 11:
          case 15:
            qd(
              c,
              o,
              wa
            );
            break;
          case 23:
          case 22:
            c.memoizedState !== null && c.memoizedState.cachePool !== null && (o = c.memoizedState.cachePool.pool, o != null && gi(o));
            break;
          case 24:
            ss(c.memoizedState.cache);
        }
        if ((c.mode & Mt) !== mt && 0 <= it && 0 <= rt && (Ie || 0.05 < Le) && Sn(
          c,
          it,
          rt,
          Le,
          qe
        ), yl(f), Oa(d), Ie = y, qe = h, c = a.child, c !== null) c.return = a, Zl = c;
        else
          t: for (a = t; Zl !== null; ) {
            if (c = Zl, f = c.sibling, d = c.return, ke(c), c === a) {
              Zl = null;
              break t;
            }
            if (f !== null) {
              f.return = d, Zl = f;
              break t;
            }
            Zl = d;
          }
      }
    }
    function Oy() {
      jT.forEach(function(t) {
        return t();
      });
    }
    function My() {
      var t = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return t || N.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), t;
    }
    function Gl(t) {
      if ((Lt & xl) !== Ll && Ut !== 0)
        return Ut & -Ut;
      var e = N.T;
      return e !== null ? (e._updatedFibers || (e._updatedFibers = /* @__PURE__ */ new Set()), e._updatedFibers.add(t), Yy()) : dp();
    }
    function Jo() {
      if (dn === 0)
        if ((Ut & 536870912) === 0 || jt) {
          var t = fr;
          fr <<= 1, (fr & 3932160) === 0 && (fr = 262144), dn = t;
        } else dn = 536870912;
      return t = Xn.current, t !== null && (t.flags |= 32), dn;
    }
    function yt(t, e, a) {
      if (tm && console.error("useInsertionEffect must not schedule updates."), k1 && (gg = !0), (t === Se && (se === Dr || se === Or) || t.cancelPendingCommit !== null) && (du(t, 0), un(
        t,
        Ut,
        dn,
        !1
      )), dc(t, a), (Lt & xl) !== Ll && t === Se) {
        if (Su)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              t = Ht && W(Ht) || "Unknown", Fb.has(t) || (Fb.add(t), e = W(e) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                e,
                t,
                t
              ));
              break;
            case 1:
              kb || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), kb = !0);
          }
      } else
        Tu && ra(t, e, a), Ls(e), t === Se && ((Lt & xl) === Ll && (qf |= a), we === Bf && un(
          t,
          Ut,
          dn,
          !1
        )), ya(t);
    }
    function Wp(t, e, a) {
      if ((Lt & (xl | Vn)) !== Ll)
        throw Error("Should not already be working.");
      if (Ut !== 0 && Ht !== null) {
        var c = Ht, o = Tl();
        switch (ZS) {
          case J0:
          case Dr:
            var f = U0;
            Ue && ((c = c._debugTask) ? c.run(
              console.timeStamp.bind(
                console,
                "Suspended",
                f,
                o,
                Au,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Suspended",
              f,
              o,
              Au,
              void 0,
              "primary-light"
            ));
            break;
          case Or:
            f = U0, Ue && ((c = c._debugTask) ? c.run(
              console.timeStamp.bind(
                console,
                "Action",
                f,
                o,
                Au,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Action",
              f,
              o,
              Au,
              void 0,
              "primary-light"
            ));
            break;
          default:
            Ue && (c = o - U0, 3 > c || console.timeStamp(
              "Blocked",
              U0,
              o,
              Au,
              void 0,
              5 > c ? "primary-light" : 10 > c ? "primary" : 100 > c ? "primary-dark" : "error"
            ));
        }
      }
      f = (a = !a && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Ul(t, e)) ? Iu(t, e) : Wo(t, e, !0);
      var d = a;
      do {
        if (f === oo) {
          Ih && !a && un(t, e, 0, !1), e = se, U0 = Al(), ZS = e;
          break;
        } else {
          if (c = Tl(), o = t.current.alternate, d && !Fp(o)) {
            gn(e), o = Vl, f = c, !Ue || f <= o || (al ? al.run(
              console.timeStamp.bind(
                console,
                "Teared Render",
                o,
                f,
                Vt,
                Gt,
                "error"
              )
            ) : console.timeStamp(
              "Teared Render",
              o,
              f,
              Vt,
              Gt,
              "error"
            )), Xc(e, c), f = Wo(t, e, !1), d = !1;
            continue;
          }
          if (f === zr) {
            if (d = e, t.errorRecoveryDisabledLanes & d)
              var h = 0;
            else
              h = t.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              gn(e), Rm(
                Vl,
                c,
                e,
                al
              ), Xc(e, c), e = h;
              t: {
                c = t, f = d, d = $0;
                var y = c.current.memoizedState.isDehydrated;
                if (y && (du(c, h).flags |= 256), h = Wo(
                  c,
                  h,
                  !1
                ), h !== zr) {
                  if (V1 && !y) {
                    c.errorRecoveryDisabledLanes |= f, qf |= f, f = Bf;
                    break t;
                  }
                  c = Ja, Ja = d, c !== null && (Ja === null ? Ja = c : Ja.push.apply(
                    Ja,
                    c
                  ));
                }
                f = h;
              }
              if (d = !1, f !== zr) continue;
              c = Tl();
            }
          }
          if (f === w0) {
            gn(e), Rm(
              Vl,
              c,
              e,
              al
            ), Xc(e, c), du(t, 0), un(t, e, 0, !0);
            break;
          }
          t: {
            switch (a = t, f) {
              case oo:
              case w0:
                throw Error("Root did not complete. This is a bug in React.");
              case Bf:
                if ((e & 4194048) !== e) break;
              case sg:
                gn(e), Dp(
                  Vl,
                  c,
                  e,
                  al
                ), Xc(e, c), o = e, (o & 127) !== 0 ? Wv = c : (o & 4194048) !== 0 && (kv = c), un(
                  a,
                  e,
                  dn,
                  !Nf
                );
                break t;
              case zr:
                Ja = null;
                break;
              case fg:
              case Yb:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (N.actQueue !== null)
              pe(
                a,
                o,
                e,
                Ja,
                W0,
                hg,
                dn,
                qf,
                Mr,
                f,
                null,
                null,
                Vl,
                c
              );
            else {
              if ((e & 62914560) === e && (d = mg + Xb - Tl(), 10 < d)) {
                if (un(
                  a,
                  e,
                  dn,
                  !Nf
                ), qr(a, 0, !0) !== 0) break t;
                sc = e, a.timeoutHandle = u2(
                  kp.bind(
                    null,
                    a,
                    o,
                    Ja,
                    W0,
                    hg,
                    e,
                    dn,
                    qf,
                    Mr,
                    Nf,
                    f,
                    "Throttled",
                    Vl,
                    c
                  ),
                  d
                );
                break t;
              }
              kp(
                a,
                o,
                Ja,
                W0,
                hg,
                e,
                dn,
                qf,
                Mr,
                Nf,
                f,
                null,
                Vl,
                c
              );
            }
          }
        }
        break;
      } while (!0);
      ya(t);
    }
    function kp(t, e, a, c, o, f, d, h, y, p, A, D, S, _) {
      t.timeoutHandle = Hr;
      var w = e.subtreeFlags, $ = null;
      if ((w & 8192 || (w & 16785408) === 16785408) && ($ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ka
      }, Vd(e, f, $), w = (f & 62914560) === f ? mg - Tl() : (f & 4194048) === f ? Gb - Tl() : 0, w = sh($, w), w !== null)) {
        sc = f, t.cancelPendingCommit = w(
          pe.bind(
            null,
            t,
            e,
            f,
            a,
            c,
            o,
            d,
            h,
            y,
            A,
            $,
            $.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < $.count ? 0 < $.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : $.imgCount === 1 ? "Suspended on an Image" : 0 < $.imgCount ? "Suspended on Images" : null,
            S,
            _
          )
        ), un(
          t,
          f,
          d,
          !p
        );
        return;
      }
      pe(
        t,
        e,
        f,
        a,
        c,
        o,
        d,
        h,
        y,
        A,
        $,
        D,
        S,
        _
      );
    }
    function Fp(t) {
      for (var e = t; ; ) {
        var a = e.tag;
        if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var c = 0; c < a.length; c++) {
            var o = a[c], f = o.getSnapshot;
            o = o.value;
            try {
              if (!Va(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = e.child, e.subtreeFlags & 16384 && a !== null)
          a.return = e, e = a;
        else {
          if (e === t) break;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) return !0;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      }
      return !0;
    }
    function un(t, e, a, c) {
      e &= ~Z1, e &= ~qf, t.suspendedLanes |= e, t.pingedLanes &= ~e, c && (t.warmLanes |= e), c = t.expirationTimes;
      for (var o = e; 0 < o; ) {
        var f = 31 - Hl(o), d = 1 << f;
        c[f] = -1, o &= ~d;
      }
      a !== 0 && fm(t, a, e);
    }
    function Ya() {
      return (Lt & (xl | Vn)) === Ll ? (mu(0), !1) : !0;
    }
    function wd() {
      if (Ht !== null) {
        if (se === rn)
          var t = Ht.return;
        else
          t = Ht, Oo(), Dc(t), Zh = null, j0 = 0, t = Ht;
        for (; t !== null; )
          dy(t.alternate, t), t = t.return;
        Ht = null;
      }
    }
    function Xc(t, e) {
      (t & 127) !== 0 && (yr = e), (t & 4194048) !== 0 && (lo = e), (t & 62914560) !== 0 && (QS = e), (t & 2080374784) !== 0 && (VS = e);
    }
    function du(t, e) {
      Ue && (console.timeStamp(
        "Blocking Track",
        3e-3,
        3e-3,
        "Blocking",
        Gt,
        "primary-light"
      ), console.timeStamp(
        "Transition Track",
        3e-3,
        3e-3,
        "Transition",
        Gt,
        "primary-light"
      ), console.timeStamp(
        "Suspense Track",
        3e-3,
        3e-3,
        "Suspense",
        Gt,
        "primary-light"
      ), console.timeStamp(
        "Idle Track",
        3e-3,
        3e-3,
        "Idle",
        Gt,
        "primary-light"
      ));
      var a = Vl;
      if (Vl = Al(), Ut !== 0 && 0 < a) {
        if (gn(Ut), we === fg || we === Bf)
          Dp(
            a,
            Vl,
            e,
            al
          );
        else {
          var c = Vl, o = al;
          if (Ue && !(c <= a)) {
            var f = (e & 738197653) === e ? "tertiary-dark" : "primary-dark", d = (e & 536870912) === e ? "Prewarm" : (e & 201326741) === e ? "Interrupted Hydration" : "Interrupted Render";
            o ? o.run(
              console.timeStamp.bind(
                console,
                d,
                a,
                c,
                Vt,
                Gt,
                f
              )
            ) : console.timeStamp(
              d,
              a,
              c,
              Vt,
              Gt,
              f
            );
          }
        }
        Xc(Ut, Vl);
      }
      if (a = al, al = null, (e & 127) !== 0) {
        al = O0, o = 0 <= Fc && Fc < yr ? yr : Fc, c = 0 <= pr && pr < yr ? yr : pr, f = 0 <= c ? c : 0 <= o ? o : Vl, 0 <= Wv ? (gn(2), Op(
          Wv,
          f,
          e,
          a
        )) : Fv & 127, a = o;
        var h = c, y = M0, p = 0 < Xh, A = Uf === D0, D = Uf === $v;
        if (o = Vl, c = O0, f = T1, d = E1, Ue) {
          if (Vt = "Blocking", 0 < a ? a > o && (a = o) : a = o, 0 < h ? h > a && (h = a) : h = a, y !== null && a > h) {
            var S = p ? "secondary-light" : "warning";
            c ? c.run(
              console.timeStamp.bind(
                console,
                p ? "Consecutive" : "Event: " + y,
                h,
                a,
                Vt,
                Gt,
                S
              )
            ) : console.timeStamp(
              p ? "Consecutive" : "Event: " + y,
              h,
              a,
              Vt,
              Gt,
              S
            );
          }
          o > a && (h = A ? "error" : (e & 738197653) === e ? "tertiary-light" : "primary-light", A = D ? "Promise Resolved" : A ? "Cascading Update" : 5 < o - a ? "Update Blocked" : "Update", D = [], d != null && D.push(["Component name", d]), f != null && D.push(["Method name", f]), a = {
            start: a,
            end: o,
            detail: {
              devtools: {
                properties: D,
                track: Vt,
                trackGroup: Gt,
                color: h
              }
            }
          }, c ? c.run(
            performance.measure.bind(
              performance,
              A,
              a
            )
          ) : performance.measure(A, a));
        }
        Fc = -1.1, Uf = 0, E1 = T1 = null, Wv = -1.1, Xh = pr, pr = -1.1, yr = Al();
      }
      if ((e & 4194048) !== 0 && (al = R0, o = 0 <= ao && ao < lo ? lo : ao, a = 0 <= Uu && Uu < lo ? lo : Uu, c = 0 <= Cf && Cf < lo ? lo : Cf, f = 0 <= c ? c : 0 <= a ? a : Vl, 0 <= kv ? (gn(256), Op(
        kv,
        f,
        e,
        al
      )) : Fv & 4194048, D = c, h = vr, y = 0 < _f, p = A1 === $v, f = Vl, c = R0, d = GS, A = XS, Ue && (Vt = "Transition", 0 < a ? a > f && (a = f) : a = f, 0 < o ? o > a && (o = a) : o = a, 0 < D ? D > o && (D = o) : D = o, o > D && h !== null && (S = y ? "secondary-light" : "warning", c ? c.run(
        console.timeStamp.bind(
          console,
          y ? "Consecutive" : "Event: " + h,
          D,
          o,
          Vt,
          Gt,
          S
        )
      ) : console.timeStamp(
        y ? "Consecutive" : "Event: " + h,
        D,
        o,
        Vt,
        Gt,
        S
      )), a > o && (c ? c.run(
        console.timeStamp.bind(
          console,
          "Action",
          o,
          a,
          Vt,
          Gt,
          "primary-dark"
        )
      ) : console.timeStamp(
        "Action",
        o,
        a,
        Vt,
        Gt,
        "primary-dark"
      )), f > a && (o = p ? "Promise Resolved" : 5 < f - a ? "Update Blocked" : "Update", D = [], A != null && D.push(["Component name", A]), d != null && D.push(["Method name", d]), a = {
        start: a,
        end: f,
        detail: {
          devtools: {
            properties: D,
            track: Vt,
            trackGroup: Gt,
            color: "primary-light"
          }
        }
      }, c ? c.run(
        performance.measure.bind(
          performance,
          o,
          a
        )
      ) : performance.measure(o, a))), Uu = ao = -1.1, A1 = 0, kv = -1.1, _f = Cf, Cf = -1.1, lo = Al()), (e & 62914560) !== 0 && (Fv & 62914560) !== 0 && (gn(4194304), Um(QS, Vl)), (e & 2080374784) !== 0 && (Fv & 2080374784) !== 0 && (gn(268435456), Um(VS, Vl)), a = t.timeoutHandle, a !== Hr && (t.timeoutHandle = Hr, FT(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), sc = 0, wd(), Se = t, Ht = a = Fn(
        t.current,
        null
      ), Ut = e, se = rn, Zn = null, Nf = !1, Ih = Ul(t, e), V1 = !1, we = oo, Mr = dn = Z1 = qf = xf = 0, Ja = $0 = null, hg = !1, (e & 8) !== 0 && (e |= e & 32), c = t.entangledLanes, c !== 0)
        for (t = t.entanglements, c &= e; 0 < c; )
          o = 31 - Hl(c), f = 1 << o, e |= t[o], c &= ~f;
      return Pc = e, ad(), t = BS(), 1e3 < t - HS && (N.recentlyCreatedOwnerStacks = 0, HS = t), ic.discardPendingWarnings(), a;
    }
    function Cn(t, e) {
      vt = null, N.H = V0, N.getCurrentStack = null, Su = !1, Sa = null, e === Vh || e === eg ? (e = Ti(), se = J0) : e === M1 ? (e = Ti(), se = jb) : se = e === Y1 ? Q1 : e !== null && typeof e == "object" && typeof e.then == "function" ? K0 : rg, Zn = e;
      var a = Ht;
      a === null ? (we = w0, Us(
        t,
        Wl(e, t.current)
      )) : a.mode & Mt && sd(a);
    }
    function Ry() {
      var t = Xn.current;
      return t === null ? !0 : (Ut & 4194048) === Ut ? Cu === null : (Ut & 62914560) === Ut || (Ut & 536870912) !== 0 ? t === Cu : !1;
    }
    function Jd() {
      var t = N.H;
      return N.H = V0, t === null ? V0 : t;
    }
    function Uy() {
      var t = N.A;
      return N.A = YT, t;
    }
    function Ko(t) {
      al === null && (al = t._debugTask == null ? null : t._debugTask);
    }
    function $o() {
      we = Bf, Nf || (Ut & 4194048) !== Ut && Xn.current !== null || (Ih = !0), (xf & 134217727) === 0 && (qf & 134217727) === 0 || Se === null || un(
        Se,
        Ut,
        dn,
        !1
      );
    }
    function Wo(t, e, a) {
      var c = Lt;
      Lt |= xl;
      var o = Jd(), f = Uy();
      if (Se !== t || Ut !== e) {
        if (Tu) {
          var d = t.memoizedUpdaters;
          0 < d.size && (Fo(t, Ut), d.clear()), xu(t, e);
        }
        W0 = null, du(t, e);
      }
      e = !1, d = we;
      t: do
        try {
          if (se !== rn && Ht !== null) {
            var h = Ht, y = Zn;
            switch (se) {
              case Q1:
                wd(), d = sg;
                break t;
              case J0:
              case Dr:
              case Or:
              case K0:
                Xn.current === null && (e = !0);
                var p = se;
                if (se = rn, Zn = null, ko(t, h, y, p), a && Ih) {
                  d = oo;
                  break t;
                }
                break;
              default:
                p = se, se = rn, Zn = null, ko(t, h, y, p);
            }
          }
          Cy(), d = we;
          break;
        } catch (A) {
          Cn(t, A);
        }
      while (!0);
      return e && t.shellSuspendCounter++, Oo(), Lt = c, N.H = o, N.A = f, Ht === null && (Se = null, Ut = 0, ad()), d;
    }
    function Cy() {
      for (; Ht !== null; ) Kd(Ht);
    }
    function Iu(t, e) {
      var a = Lt;
      Lt |= xl;
      var c = Jd(), o = Uy();
      if (Se !== t || Ut !== e) {
        if (Tu) {
          var f = t.memoizedUpdaters;
          0 < f.size && (Fo(t, Ut), f.clear()), xu(t, e);
        }
        W0 = null, yg = Tl() + Qb, du(t, e);
      } else
        Ih = Ul(
          t,
          e
        );
      t: do
        try {
          if (se !== rn && Ht !== null)
            e: switch (e = Ht, f = Zn, se) {
              case rg:
                se = rn, Zn = null, ko(
                  t,
                  e,
                  f,
                  rg
                );
                break;
              case Dr:
              case Or:
                if (Qm(f)) {
                  se = rn, Zn = null, _y(e);
                  break;
                }
                e = function() {
                  se !== Dr && se !== Or || Se !== t || (se = dg), ya(t);
                }, f.then(e, e);
                break t;
              case J0:
                se = dg;
                break t;
              case jb:
                se = X1;
                break t;
              case dg:
                Qm(f) ? (se = rn, Zn = null, _y(e)) : (se = rn, Zn = null, ko(
                  t,
                  e,
                  f,
                  dg
                ));
                break;
              case X1:
                var d = null;
                switch (Ht.tag) {
                  case 26:
                    d = Ht.memoizedState;
                  case 5:
                  case 27:
                    var h = Ht;
                    if (d ? Bt(d) : h.stateNode.complete) {
                      se = rn, Zn = null;
                      var y = h.sibling;
                      if (y !== null) Ht = y;
                      else {
                        var p = h.return;
                        p !== null ? (Ht = p, Qs(p)) : Ht = null;
                      }
                      break e;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                se = rn, Zn = null, ko(
                  t,
                  e,
                  f,
                  X1
                );
                break;
              case K0:
                se = rn, Zn = null, ko(
                  t,
                  e,
                  f,
                  K0
                );
                break;
              case Q1:
                wd(), we = sg;
                break t;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          N.actQueue !== null ? Cy() : el();
          break;
        } catch (A) {
          Cn(t, A);
        }
      while (!0);
      return Oo(), N.H = c, N.A = o, Lt = a, Ht !== null ? oo : (Se = null, Ut = 0, ad(), we);
    }
    function el() {
      for (; Ht !== null && !Th(); )
        Kd(Ht);
    }
    function Kd(t) {
      var e = t.alternate;
      (t.mode & Mt) !== mt ? (Qu(t), e = k(
        t,
        Bs,
        e,
        t,
        Pc
      ), sd(t)) : e = k(
        t,
        Bs,
        e,
        t,
        Pc
      ), t.memoizedProps = t.pendingProps, e === null ? Qs(t) : Ht = e;
    }
    function _y(t) {
      var e = k(t, bl, t);
      t.memoizedProps = t.pendingProps, e === null ? Qs(t) : Ht = e;
    }
    function bl(t) {
      var e = t.alternate, a = (t.mode & Mt) !== mt;
      switch (a && Qu(t), t.tag) {
        case 15:
        case 0:
          e = cy(
            e,
            t,
            t.pendingProps,
            t.type,
            void 0,
            Ut
          );
          break;
        case 11:
          e = cy(
            e,
            t,
            t.pendingProps,
            t.type.render,
            t.ref,
            Ut
          );
          break;
        case 5:
          Dc(t);
        default:
          dy(e, t), t = Ht = Bm(t, Pc), e = Bs(e, t, Pc);
      }
      return a && sd(t), e;
    }
    function ko(t, e, a, c) {
      Oo(), Dc(e), Zh = null, j0 = 0;
      var o = e.return;
      try {
        if (Pm(
          t,
          o,
          e,
          a,
          Ut
        )) {
          we = w0, Us(
            t,
            Wl(a, t.current)
          ), Ht = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw Ht = o, f;
        we = w0, Us(
          t,
          Wl(a, t.current)
        ), Ht = null;
        return;
      }
      e.flags & 32768 ? (jt || c === rg ? t = !0 : Ih || (Ut & 536870912) !== 0 ? t = !1 : (Nf = t = !0, (c === Dr || c === Or || c === J0 || c === K0) && (c = Xn.current, c !== null && c.tag === 13 && (c.flags |= 16384))), Hy(e, t)) : Qs(e);
    }
    function Qs(t) {
      var e = t;
      do {
        if ((e.flags & 32768) !== 0) {
          Hy(
            e,
            Nf
          );
          return;
        }
        var a = e.alternate;
        if (t = e.return, Qu(e), a = k(
          e,
          ry,
          a,
          e,
          Pc
        ), (e.mode & Mt) !== mt && rs(e), a !== null) {
          Ht = a;
          return;
        }
        if (e = e.sibling, e !== null) {
          Ht = e;
          return;
        }
        Ht = e = t;
      } while (e !== null);
      we === oo && (we = Yb);
    }
    function Hy(t, e) {
      do {
        var a = Vp(t.alternate, t);
        if (a !== null) {
          a.flags &= 32767, Ht = a;
          return;
        }
        if ((t.mode & Mt) !== mt) {
          rs(t), a = t.actualDuration;
          for (var c = t.child; c !== null; )
            a += c.actualDuration, c = c.sibling;
          t.actualDuration = a;
        }
        if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !e && (t = t.sibling, t !== null)) {
          Ht = t;
          return;
        }
        Ht = t = a;
      } while (t !== null);
      we = sg, Ht = null;
    }
    function pe(t, e, a, c, o, f, d, h, y, p, A, D, S, _) {
      t.cancelPendingCommit = null;
      do
        Vs();
      while (Rl !== jf);
      if (ic.flushLegacyContextWarning(), ic.flushPendingUnsafeLifecycleWarnings(), (Lt & (xl | Vn)) !== Ll)
        throw Error("Should not already be working.");
      if (gn(a), p === zr ? Rm(
        S,
        _,
        a,
        al
      ) : c !== null ? Lg(
        S,
        _,
        a,
        c,
        e !== null && e.alternate !== null && e.alternate.memoizedState.isDehydrated && (e.flags & 256) !== 0,
        al
      ) : Zg(
        S,
        _,
        a,
        al
      ), e !== null) {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), e === t.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = e.lanes | e.childLanes, f |= p1, Gg(
          t,
          a,
          f,
          d,
          h,
          y
        ), t === Se && (Ht = Se = null, Ut = 0), Ph = e, Gf = t, sc = a, J1 = f, $1 = o, Kb = c, K1 = _, $b = D, rc = pg, Wb = null, e.actualDuration !== 0 || (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Io(Ki, function() {
          return ep = window.event, rc === pg && (rc = w1), Zs(), null;
        })) : (t.callbackNode = null, t.callbackPriority = 0), eo = null, Rf = Al(), D !== null && wg(
          _,
          Rf,
          D,
          al
        ), c = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || c) {
          c = N.T, N.T = null, o = kt.p, kt.p = ol, d = Lt, Lt |= Vn;
          try {
            $g(t, e, a);
          } finally {
            Lt = d, kt.p = o, N.T = c;
          }
        }
        Rl = Zb, na(), hu(), By();
      }
    }
    function na() {
      if (Rl === Zb) {
        Rl = jf;
        var t = Gf, e = Ph, a = sc, c = (e.flags & 13878) !== 0;
        if ((e.subtreeFlags & 13878) !== 0 || c) {
          c = N.T, N.T = null;
          var o = kt.p;
          kt.p = ol;
          var f = Lt;
          Lt |= Vn;
          try {
            kh = a, Fh = t, Si(), Ys(e, t), Fh = kh = null, a = uS;
            var d = td(t.containerInfo), h = a.focusedElem, y = a.selectionRange;
            if (d !== h && h && h.ownerDocument && Tp(
              h.ownerDocument.documentElement,
              h
            )) {
              if (y !== null && Dm(h)) {
                var p = y.start, A = y.end;
                if (A === void 0 && (A = p), "selectionStart" in h)
                  h.selectionStart = p, h.selectionEnd = Math.min(
                    A,
                    h.value.length
                  );
                else {
                  var D = h.ownerDocument || document, S = D && D.defaultView || window;
                  if (S.getSelection) {
                    var _ = S.getSelection(), w = h.textContent.length, $ = Math.min(
                      y.start,
                      w
                    ), Ae = y.end === void 0 ? $ : Math.min(y.end, w);
                    !_.extend && $ > Ae && (d = Ae, Ae = $, $ = d);
                    var Xt = bp(
                      h,
                      $
                    ), g = bp(
                      h,
                      Ae
                    );
                    if (Xt && g && (_.rangeCount !== 1 || _.anchorNode !== Xt.node || _.anchorOffset !== Xt.offset || _.focusNode !== g.node || _.focusOffset !== g.offset)) {
                      var b = D.createRange();
                      b.setStart(Xt.node, Xt.offset), _.removeAllRanges(), $ > Ae ? (_.addRange(b), _.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), _.addRange(b));
                    }
                  }
                }
              }
              for (D = [], _ = h; _ = _.parentNode; )
                _.nodeType === 1 && D.push({
                  element: _,
                  left: _.scrollLeft,
                  top: _.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < D.length; h++) {
                var E = D[h];
                E.element.scrollLeft = E.left, E.element.scrollTop = E.top;
              }
            }
            Hg = !!nS, uS = nS = null;
          } finally {
            Lt = f, kt.p = o, N.T = c;
          }
        }
        t.current = e, Rl = Lb;
      }
    }
    function hu() {
      if (Rl === Lb) {
        Rl = jf;
        var t = Wb;
        if (t !== null) {
          Rf = Al();
          var e = to, a = Rf;
          !Ue || a <= e || console.timeStamp(
            t,
            e,
            a,
            Vt,
            Gt,
            "secondary-light"
          );
        }
        t = Gf, e = Ph, a = sc;
        var c = (e.flags & 8772) !== 0;
        if ((e.subtreeFlags & 8772) !== 0 || c) {
          c = N.T, N.T = null;
          var o = kt.p;
          kt.p = ol;
          var f = Lt;
          Lt |= Vn;
          try {
            kh = a, Fh = t, Si(), Xd(
              t,
              e.alternate,
              e
            ), Fh = kh = null;
          } finally {
            Lt = f, kt.p = o, N.T = c;
          }
        }
        t = K1, e = $b, to = Al(), t = e === null ? t : Rf, e = to, a = rc === L1, c = al, eo !== null ? Mp(
          t,
          e,
          eo,
          !1,
          c
        ) : !Ue || e <= t || (c ? c.run(
          console.timeStamp.bind(
            console,
            a ? "Commit Interrupted View Transition" : "Commit",
            t,
            e,
            Vt,
            Gt,
            a ? "error" : "secondary-dark"
          )
        ) : console.timeStamp(
          a ? "Commit Interrupted View Transition" : "Commit",
          t,
          e,
          Vt,
          Gt,
          a ? "error" : "secondary-dark"
        )), Rl = wb;
      }
    }
    function By() {
      if (Rl === Jb || Rl === wb) {
        if (Rl === Jb) {
          var t = to;
          to = Al();
          var e = to, a = rc === L1;
          !Ue || e <= t || console.timeStamp(
            a ? "Interrupted View Transition" : "Starting Animation",
            t,
            e,
            Vt,
            Gt,
            a ? " error" : "secondary-light"
          ), rc !== L1 && (rc = Vb);
        }
        Rl = jf, Eh(), t = Gf;
        var c = Ph;
        e = sc, a = Kb;
        var o = c.actualDuration !== 0 || (c.subtreeFlags & 10256) !== 0 || (c.flags & 10256) !== 0;
        o ? Rl = vg : (Rl = jf, Ph = Gf = null, Ny(
          t,
          t.pendingLanes
        ), Rr = 0, F0 = null);
        var f = t.pendingLanes;
        if (f === 0 && (Yf = null), o || kd(t), f = Kl(e), c = c.stateNode, il && typeof il.onCommitFiberRoot == "function")
          try {
            var d = (c.current.flags & 128) === 128;
            switch (f) {
              case ol:
                var h = s0;
                break;
              case Bl:
                h = Ah;
                break;
              case Ql:
                h = Ki;
                break;
              case $c:
                h = zh;
                break;
              default:
                h = Ki;
            }
            il.onCommitFiberRoot(
              $i,
              c,
              h,
              d
            );
          } catch (D) {
            bu || (bu = !0, console.error(
              "React instrumentation encountered an error: %o",
              D
            ));
          }
        if (Tu && t.memoizedUpdaters.clear(), Oy(), a !== null) {
          d = N.T, h = kt.p, kt.p = ol, N.T = null;
          try {
            var y = t.onRecoverableError;
            for (c = 0; c < a.length; c++) {
              var p = a[c], A = Ip(p.stack);
              k(
                p.source,
                y,
                p.value,
                A
              );
            }
          } finally {
            N.T = d, kt.p = h;
          }
        }
        (sc & 3) !== 0 && Vs(), ya(t), f = t.pendingLanes, (e & 261930) !== 0 && (f & 42) !== 0 ? (Pv = !0, t === W1 ? k0++ : (k0 = 0, W1 = t)) : k0 = 0, o || Xc(e, to), mu(0);
      }
    }
    function Ip(t) {
      return t = { componentStack: t }, Object.defineProperty(t, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), t;
    }
    function Ny(t, e) {
      (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, ss(e)));
    }
    function Vs() {
      return na(), hu(), By(), Zs();
    }
    function Zs() {
      if (Rl !== vg) return !1;
      var t = Gf, e = J1;
      J1 = 0;
      var a = Kl(sc), c = Ql > a ? Ql : a;
      a = N.T;
      var o = kt.p;
      try {
        kt.p = c, N.T = null;
        var f = $1;
        $1 = null, c = Gf;
        var d = sc;
        if (Rl = jf, Ph = Gf = null, sc = 0, (Lt & (xl | Vn)) !== Ll)
          throw Error("Cannot flush passive effects while already rendering.");
        gn(d), k1 = !0, gg = !1;
        var h = 0;
        if (eo = null, h = Tl(), rc === Vb)
          Um(
            to,
            h,
            CT
          );
        else {
          var y = to, p = h, A = rc === w1;
          !Ue || p <= y || (al ? al.run(
            console.timeStamp.bind(
              console,
              A ? "Waiting for Paint" : "Waiting",
              y,
              p,
              Vt,
              Gt,
              "secondary-light"
            )
          ) : console.timeStamp(
            A ? "Waiting for Paint" : "Waiting",
            y,
            p,
            Vt,
            Gt,
            "secondary-light"
          ));
        }
        y = Lt, Lt |= Vn;
        var D = c.current;
        Si(), Zd(D);
        var S = c.current;
        D = K1, Si(), Ay(
          c,
          S,
          d,
          f,
          D
        ), kd(c), Lt = y;
        var _ = Tl();
        if (S = h, D = al, eo !== null ? Mp(
          S,
          _,
          eo,
          !0,
          D
        ) : !Ue || _ <= S || (D ? D.run(
          console.timeStamp.bind(
            console,
            "Remaining Effects",
            S,
            _,
            Vt,
            Gt,
            "secondary-dark"
          )
        ) : console.timeStamp(
          "Remaining Effects",
          S,
          _,
          Vt,
          Gt,
          "secondary-dark"
        )), Xc(d, _), mu(0, !1), gg ? c === F0 ? Rr++ : (Rr = 0, F0 = c) : Rr = 0, gg = k1 = !1, il && typeof il.onPostCommitFiberRoot == "function")
          try {
            il.onPostCommitFiberRoot($i, c);
          } catch ($) {
            bu || (bu = !0, console.error(
              "React instrumentation encountered an error: %o",
              $
            ));
          }
        var w = c.current.stateNode;
        return w.effectDuration = 0, w.passiveEffectDuration = 0, !0;
      } finally {
        kt.p = o, N.T = a, Ny(t, e);
      }
    }
    function ua(t, e, a) {
      e = Wl(a, e), Bp(e), e = Od(t.stateNode, e, 2), t = eu(t, e, 2), t !== null && (dc(t, 2), ya(t));
    }
    function At(t, e, a) {
      if (tm = !1, t.tag === 3)
        ua(t, t, a);
      else {
        for (; e !== null; ) {
          if (e.tag === 3) {
            ua(
              e,
              t,
              a
            );
            return;
          }
          if (e.tag === 1) {
            var c = e.stateNode;
            if (typeof e.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Yf === null || !Yf.has(c))) {
              t = Wl(a, t), Bp(t), a = Md(2), c = eu(e, a, 2), c !== null && (Rd(
                a,
                c,
                e,
                t
              ), dc(c, 2), ya(c));
              return;
            }
          }
          e = e.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function $d(t, e, a) {
      var c = t.pingCache;
      if (c === null) {
        c = t.pingCache = new GT();
        var o = /* @__PURE__ */ new Set();
        c.set(e, o);
      } else
        o = c.get(e), o === void 0 && (o = /* @__PURE__ */ new Set(), c.set(e, o));
      o.has(a) || (V1 = !0, o.add(a), c = ma.bind(null, t, e, a), Tu && Fo(t, a), e.then(c, c));
    }
    function ma(t, e, a) {
      var c = t.pingCache;
      c !== null && c.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, (a & 127) !== 0 ? 0 > Fc && (yr = Fc = Al(), O0 = Kv("Promise Resolved"), Uf = $v) : (a & 4194048) !== 0 && 0 > Uu && (lo = Uu = Al(), R0 = Kv("Promise Resolved"), A1 = $v), My() && N.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Se === t && (Ut & a) === a && (we === Bf || we === fg && (Ut & 62914560) === Ut && Tl() - mg < Xb ? (Lt & xl) === Ll && du(t, 0) : Z1 |= a, Mr === Ut && (Mr = 0)), ya(t);
    }
    function xy(t, e) {
      e === 0 && (e = Yr()), t = Yl(t, e), t !== null && (dc(t, e), ya(t));
    }
    function Pu(t) {
      var e = t.memoizedState, a = 0;
      e !== null && (a = e.retryLane), xy(t, a);
    }
    function ji(t, e) {
      var a = 0;
      switch (t.tag) {
        case 31:
        case 13:
          var c = t.stateNode, o = t.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          c = t.stateNode;
          break;
        case 22:
          c = t.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      c !== null && c.delete(e), xy(t, a);
    }
    function _n(t, e, a) {
      if ((e.subtreeFlags & 67117056) !== 0)
        for (e = e.child; e !== null; ) {
          var c = t, o = e, f = o.type === oa;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && k(
            o,
            Wd,
            c,
            o
          ) : _n(
            c,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? k(
            o,
            Wd,
            c,
            o
          ) : o.subtreeFlags & 67108864 && k(
            o,
            _n,
            c,
            o,
            f
          )), e = e.sibling;
        }
    }
    function Wd(t, e) {
      me(!0);
      try {
        Qd(e), Dy(e), Ey(t, e.alternate, e, !1), Xs(t, e, 0, null, !1, 0);
      } finally {
        me(!1);
      }
    }
    function kd(t) {
      var e = !0;
      t.current.mode & (ba | cc) || (e = !1), _n(
        t,
        t.current,
        e
      );
    }
    function cn(t) {
      if ((Lt & xl) === Ll) {
        var e = t.tag;
        if (e === 3 || e === 1 || e === 0 || e === 11 || e === 14 || e === 15) {
          if (e = W(t) || "ReactComponent", Sg !== null) {
            if (Sg.has(e)) return;
            Sg.add(e);
          } else Sg = /* @__PURE__ */ new Set([e]);
          k(t, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function Fo(t, e) {
      Tu && t.memoizedUpdaters.forEach(function(a) {
        ra(t, a, e);
      });
    }
    function Io(t, e) {
      var a = N.actQueue;
      return a !== null ? (a.push(e), VT) : f0(t, e);
    }
    function Ls(t) {
      My() && N.actQueue === null && k(t, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          W(t)
        );
      });
    }
    function ya(t) {
      t !== em && t.next === null && (em === null ? bg = em = t : em = em.next = t), Tg = !0, N.actQueue !== null ? I1 || (I1 = !0, tv()) : F1 || (F1 = !0, tv());
    }
    function mu(t, e) {
      if (!P1 && Tg) {
        P1 = !0;
        do
          for (var a = !1, c = bg; c !== null; ) {
            if (t !== 0) {
              var o = c.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = c.suspendedLanes, h = c.pingedLanes;
                f = (1 << 31 - Hl(42 | t) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, ws(c, f));
            } else
              f = Ut, f = qr(
                c,
                c === Se ? f : 0,
                c.cancelPendingCommit !== null || c.timeoutHandle !== Hr
              ), (f & 3) === 0 || Ul(c, f) || (a = !0, ws(c, f));
            c = c.next;
          }
        while (a);
        P1 = !1;
      }
    }
    function Pp() {
      ep = window.event, Fd();
    }
    function Fd() {
      Tg = I1 = F1 = !1;
      var t = 0;
      Xf !== 0 && Gy() && (t = Xf);
      for (var e = Tl(), a = null, c = bg; c !== null; ) {
        var o = c.next, f = Po(c, e);
        f === 0 ? (c.next = null, a === null ? bg = o : a.next = o, o === null && (em = a)) : (a = c, (t !== 0 || (f & 3) !== 0) && (Tg = !0)), c = o;
      }
      Rl !== jf && Rl !== vg || mu(t), Xf !== 0 && (Xf = 0);
    }
    function Po(t, e) {
      for (var a = t.suspendedLanes, c = t.pingedLanes, o = t.expirationTimes, f = t.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Hl(f), h = 1 << d, y = o[d];
        y === -1 ? ((h & a) === 0 || (h & c) !== 0) && (o[d] = jg(h, e)) : y <= e && (t.expiredLanes |= h), f &= ~h;
      }
      if (e = Se, a = Ut, a = qr(
        t,
        t === e ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== Hr
      ), c = t.callbackNode, a === 0 || t === e && (se === Dr || se === Or) || t.cancelPendingCommit !== null)
        return c !== null && Id(c), t.callbackNode = null, t.callbackPriority = 0;
      if ((a & 3) === 0 || Ul(t, a)) {
        if (e = a & -a, e !== t.callbackPriority || N.actQueue !== null && c !== tS)
          Id(c);
        else return e;
        switch (Kl(a)) {
          case ol:
          case Bl:
            a = Ah;
            break;
          case Ql:
            a = Ki;
            break;
          case $c:
            a = zh;
            break;
          default:
            a = Ki;
        }
        return c = qy.bind(null, t), N.actQueue !== null ? (N.actQueue.push(c), a = tS) : a = f0(a, c), t.callbackPriority = e, t.callbackNode = a, e;
      }
      return c !== null && Id(c), t.callbackPriority = 2, t.callbackNode = null, 2;
    }
    function qy(t, e) {
      if (Pv = Iv = !1, ep = window.event, Rl !== jf && Rl !== vg)
        return t.callbackNode = null, t.callbackPriority = 0, null;
      var a = t.callbackNode;
      if (rc === pg && (rc = w1), Vs() && t.callbackNode !== a)
        return null;
      var c = Ut;
      return c = qr(
        t,
        t === Se ? c : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== Hr
      ), c === 0 ? null : (Wp(
        t,
        c,
        e
      ), Po(t, Tl()), t.callbackNode != null && t.callbackNode === a ? qy.bind(null, t) : null);
    }
    function ws(t, e) {
      if (Vs()) return null;
      Iv = Pv, Pv = !1, Wp(t, e, !0);
    }
    function Id(t) {
      t !== tS && t !== null && bh(t);
    }
    function tv() {
      N.actQueue !== null && N.actQueue.push(function() {
        return Fd(), null;
      }), IT(function() {
        (Lt & (xl | Vn)) !== Ll ? f0(
          s0,
          Pp
        ) : Fd();
      });
    }
    function Yy() {
      if (Xf === 0) {
        var t = gr;
        t === 0 && (t = gf, gf <<= 1, (gf & 261888) === 0 && (gf = 256)), Xf = t;
      }
      return Xf;
    }
    function wt(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : (ne(t, "action"), ts("" + t));
    }
    function ie(t, e) {
      var a = e.ownerDocument.createElement("input");
      return a.name = e.name, a.value = e.value, t.id && a.setAttribute("form", t.id), e.parentNode.insertBefore(a, e), t = new FormData(t), a.parentNode.removeChild(a), t;
    }
    function Yt(t, e, a, c, o) {
      if (e === "submit" && a && a.stateNode === o) {
        var f = wt(
          (o[fa] || null).action
        ), d = c.submitter;
        d && (e = (e = d[fa] || null) ? wt(e.formAction) : d.getAttribute("formAction"), e !== null && (f = e, d = null));
        var h = new Xv(
          "action",
          "action",
          null,
          c,
          o
        );
        t.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (c.defaultPrevented) {
                  if (Xf !== 0) {
                    var y = d ? ie(
                      o,
                      d
                    ) : new FormData(o), p = {
                      pending: !0,
                      data: y,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(p), Wu(
                      a,
                      p,
                      null,
                      y
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), y = d ? ie(
                    o,
                    d
                  ) : new FormData(o), p = {
                    pending: !0,
                    data: y,
                    method: o.method,
                    action: f
                  }, Object.freeze(p), Wu(
                    a,
                    p,
                    f,
                    y
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function _t(t, e, a) {
      t.currentTarget = a;
      try {
        e(t);
      } catch (c) {
        d1(c);
      }
      t.currentTarget = null;
    }
    function ee(t, e) {
      e = (e & 4) !== 0;
      for (var a = 0; a < t.length; a++) {
        var c = t[a];
        t: {
          var o = void 0, f = c.event;
          if (c = c.listeners, e)
            for (var d = c.length - 1; 0 <= d; d--) {
              var h = c[d], y = h.instance, p = h.currentTarget;
              if (h = h.listener, y !== o && f.isPropagationStopped())
                break t;
              y !== null ? k(
                y,
                _t,
                f,
                h,
                p
              ) : _t(f, h, p), o = y;
            }
          else
            for (d = 0; d < c.length; d++) {
              if (h = c[d], y = h.instance, p = h.currentTarget, h = h.listener, y !== o && f.isPropagationStopped())
                break t;
              y !== null ? k(
                y,
                _t,
                f,
                h,
                p
              ) : _t(f, h, p), o = y;
            }
        }
      }
    }
    function dt(t, e) {
      eS.has(t) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        t
      );
      var a = e[Wi];
      a === void 0 && (a = e[Wi] = /* @__PURE__ */ new Set());
      var c = t + "__bubble";
      a.has(c) || (Pd(e, t, 2, !1), a.add(c));
    }
    function yu(t, e, a) {
      eS.has(t) && !e && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        t
      );
      var c = 0;
      e && (c |= 4), Pd(
        a,
        t,
        c,
        e
      );
    }
    function Qc(t) {
      if (!t[Eg]) {
        t[Eg] = !0, xv.forEach(function(a) {
          a !== "selectionchange" && (eS.has(a) || yu(a, !1, t), yu(a, !0, t));
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[Eg] || (e[Eg] = !0, yu("selectionchange", !1, e));
      }
    }
    function Pd(t, e, a, c) {
      switch (hh(e)) {
        case ol:
          var o = Iy;
          break;
        case Bl:
          o = _l;
          break;
        default:
          o = Py;
      }
      a = o.bind(
        null,
        e,
        a,
        t
      ), o = void 0, !l1 || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (o = !0), c ? o !== void 0 ? t.addEventListener(e, a, {
        capture: !0,
        passive: o
      }) : t.addEventListener(e, a, !0) : o !== void 0 ? t.addEventListener(e, a, {
        passive: o
      }) : t.addEventListener(
        e,
        a,
        !1
      );
    }
    function Hn(t, e, a, c, o) {
      var f = c;
      if ((e & 1) === 0 && (e & 2) === 0 && c !== null)
        t: for (; ; ) {
          if (c === null) return;
          var d = c.tag;
          if (d === 3 || d === 4) {
            var h = c.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = c.return; d !== null; ) {
                var y = d.tag;
                if ((y === 3 || y === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = qu(h), d === null) return;
              if (y = d.tag, y === 5 || y === 6 || y === 26 || y === 27) {
                c = f = d;
                continue t;
              }
              h = h.parentNode;
            }
          }
          c = c.return;
        }
      kr(function() {
        var p = f, A = pn(a), D = [];
        t: {
          var S = _S.get(t);
          if (S !== void 0) {
            var _ = Xv, w = t;
            switch (t) {
              case "keypress":
                if (es(a) === 0) break t;
              case "keydown":
              case "keyup":
                _ = aT;
                break;
              case "focusin":
                w = "focus", _ = c1;
                break;
              case "focusout":
                w = "blur", _ = c1;
                break;
              case "beforeblur":
              case "afterblur":
                _ = c1;
                break;
              case "click":
                if (a.button === 2) break t;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                _ = vS;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                _ = w2;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                _ = cT;
                break;
              case MS:
              case RS:
              case US:
                _ = $2;
                break;
              case CS:
                _ = oT;
                break;
              case "scroll":
              case "scrollend":
                _ = Z2;
                break;
              case "wheel":
                _ = sT;
                break;
              case "copy":
              case "cut":
              case "paste":
                _ = k2;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                _ = SS;
                break;
              case "toggle":
              case "beforetoggle":
                _ = dT;
            }
            var $ = (e & 4) !== 0, Ae = !$ && (t === "scroll" || t === "scrollend"), Xt = $ ? S !== null ? S + "Capture" : null : S;
            $ = [];
            for (var g = p, b; g !== null; ) {
              var E = g;
              if (b = E.stateNode, E = E.tag, E !== 5 && E !== 26 && E !== 27 || b === null || Xt === null || (E = Wn(g, Xt), E != null && $.push(
                ve(
                  g,
                  E,
                  b
                )
              )), Ae) break;
              g = g.return;
            }
            0 < $.length && (S = new _(
              S,
              w,
              null,
              a,
              A
            ), D.push({
              event: S,
              listeners: $
            }));
          }
        }
        if ((e & 7) === 0) {
          t: {
            if (S = t === "mouseover" || t === "pointerover", _ = t === "mouseout" || t === "pointerout", S && a !== y0 && (w = a.relatedTarget || a.fromElement) && (qu(w) || w[uc]))
              break t;
            if ((_ || S) && (S = A.window === A ? A : (S = A.ownerDocument) ? S.defaultView || S.parentWindow : window, _ ? (w = a.relatedTarget || a.toElement, _ = p, w = w ? qu(w) : null, w !== null && (Ae = Kt(w), $ = w.tag, w !== Ae || $ !== 5 && $ !== 27 && $ !== 6) && (w = null)) : (_ = null, w = p), _ !== w)) {
              if ($ = vS, E = "onMouseLeave", Xt = "onMouseEnter", g = "mouse", (t === "pointerout" || t === "pointerover") && ($ = SS, E = "onPointerLeave", Xt = "onPointerEnter", g = "pointer"), Ae = _ == null ? S : hc(_), b = w == null ? S : hc(w), S = new $(
                E,
                g + "leave",
                _,
                a,
                A
              ), S.target = Ae, S.relatedTarget = b, E = null, qu(A) === p && ($ = new $(
                Xt,
                g + "enter",
                w,
                a,
                A
              ), $.target = b, $.relatedTarget = Ae, E = $), Ae = E, _ && w)
                e: {
                  for ($ = Gi, Xt = _, g = w, b = 0, E = Xt; E; E = $(E))
                    b++;
                  E = 0;
                  for (var Y = g; Y; Y = $(Y))
                    E++;
                  for (; 0 < b - E; )
                    Xt = $(Xt), b--;
                  for (; 0 < E - b; )
                    g = $(g), E--;
                  for (; b--; ) {
                    if (Xt === g || g !== null && Xt === g.alternate) {
                      $ = Xt;
                      break e;
                    }
                    Xt = $(Xt), g = $(g);
                  }
                  $ = null;
                }
              else $ = null;
              _ !== null && th(
                D,
                S,
                _,
                $,
                !1
              ), w !== null && Ae !== null && th(
                D,
                Ae,
                w,
                $,
                !0
              );
            }
          }
          t: {
            if (S = p ? hc(p) : window, _ = S.nodeName && S.nodeName.toLowerCase(), _ === "select" || _ === "input" && S.type === "file")
              var K = vc;
            else if (Em(S))
              if (DS)
                K = us;
              else {
                K = Am;
                var gt = Vg;
              }
            else
              _ = S.nodeName, !_ || _.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? p && $n(p.elementType) && (K = vc) : K = zm;
            if (K && (K = K(t, p))) {
              as(
                D,
                K,
                a,
                A
              );
              break t;
            }
            gt && gt(t, S, p), t === "focusout" && p && S.type === "number" && p.memoizedProps.value != null && hm(S, "number", S.value);
          }
          switch (gt = p ? hc(p) : window, t) {
            case "focusin":
              (Em(gt) || gt.contentEditable === "true") && (Hh = gt, o1 = p, E0 = null);
              break;
            case "focusout":
              E0 = o1 = Hh = null;
              break;
            case "mousedown":
              f1 = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              f1 = !1, Ep(
                D,
                a,
                A
              );
              break;
            case "selectionchange":
              if (pT) break;
            case "keydown":
            case "keyup":
              Ep(
                D,
                a,
                A
              );
          }
          var ct;
          if (i1)
            t: {
              switch (t) {
                case "compositionstart":
                  var et = "onCompositionStart";
                  break t;
                case "compositionend":
                  et = "onCompositionEnd";
                  break t;
                case "compositionupdate":
                  et = "onCompositionUpdate";
                  break t;
              }
              et = void 0;
            }
          else
            _h ? To(t, a) && (et = "onCompositionEnd") : t === "keydown" && a.keyCode === bS && (et = "onCompositionStart");
          et && (TS && a.locale !== "ko" && (_h || et !== "onCompositionStart" ? et === "onCompositionEnd" && _h && (ct = fi()) : (Af = A, a1 = "value" in Af ? Af.value : Af.textContent, _h = !0)), gt = Bn(
            p,
            et
          ), 0 < gt.length && (et = new gS(
            et,
            t,
            null,
            a,
            A
          ), D.push({
            event: et,
            listeners: gt
          }), ct ? et.data = ct : (ct = Gu(a), ct !== null && (et.data = ct)))), (ct = mT ? Tm(t, a) : Fr(t, a)) && (et = Bn(
            p,
            "onBeforeInput"
          ), 0 < et.length && (gt = new I2(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            A
          ), D.push({
            event: gt,
            listeners: et
          }), gt.data = ct)), Yt(
            D,
            t,
            p,
            a,
            A
          );
        }
        ee(D, e);
      });
    }
    function ve(t, e, a) {
      return {
        instance: t,
        listener: e,
        currentTarget: a
      };
    }
    function Bn(t, e) {
      for (var a = e + "Capture", c = []; t !== null; ) {
        var o = t, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = Wn(t, a), o != null && c.unshift(
          ve(t, o, f)
        ), o = Wn(t, e), o != null && c.push(
          ve(t, o, f)
        )), t.tag === 3) return c;
        t = t.return;
      }
      return [];
    }
    function Gi(t) {
      if (t === null) return null;
      do
        t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function th(t, e, a, c, o) {
      for (var f = e._reactName, d = []; a !== null && a !== c; ) {
        var h = a, y = h.alternate, p = h.stateNode;
        if (h = h.tag, y !== null && y === c) break;
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = Wn(a, f), p != null && d.unshift(
          ve(a, p, y)
        )) : o || (p = Wn(a, f), p != null && d.push(
          ve(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && t.push({ event: e, listeners: d });
    }
    function ca(t, e) {
      vp(t, e), t !== "input" && t !== "textarea" && t !== "select" || e == null || e.value !== null || yS || (yS = !0, t === "select" && e.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        t
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        t
      ));
      var a = {
        registrationNameDependencies: Eu,
        possibleRegistrationNames: Tf
      };
      $n(t) || typeof e.is == "string" || Qg(t, e, a), e.contentEditable && !e.suppressContentEditableWarning && e.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function Ne(t, e, a, c) {
      e !== a && (a = Nn(a), Nn(e) !== a && (c[t] = e));
    }
    function Js(t, e, a) {
      e.forEach(function(c) {
        a[tc(c)] = c === "style" ? Vc(t) : t.getAttribute(c);
      });
    }
    function xe(t, e) {
      e === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        t,
        t,
        t
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        t,
        typeof e
      );
    }
    function eh(t, e) {
      return t = t.namespaceURI === bt || t.namespaceURI === zt ? t.ownerDocument.createElementNS(
        t.namespaceURI,
        t.tagName
      ) : t.ownerDocument.createElement(t.tagName), t.innerHTML = e, t.innerHTML;
    }
    function Nn(t) {
      return Ln(t) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        $f(t)
      ), ti(t)), (typeof t == "string" ? t : "" + t).replace(ZT, `
`).replace(LT, "");
    }
    function jy(t, e) {
      return e = Nn(e), Nn(t) === e;
    }
    function Wt(t, e, a, c, o, f) {
      switch (a) {
        case "children":
          typeof c == "string" ? (Pf(c, e, !1), e === "body" || e === "textarea" && c === "" || oi(t, c)) : (typeof c == "number" || typeof c == "bigint") && (Pf("" + c, e, !1), e !== "body" && oi(t, "" + c));
          break;
        case "className":
          kf(t, "class", c);
          break;
        case "tabIndex":
          kf(t, "tabindex", c);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          kf(t, a, c);
          break;
        case "style":
          gm(t, c, f);
          break;
        case "data":
          if (e !== "object") {
            kf(t, "data", c);
            break;
          }
        case "src":
        case "href":
          if (c === "" && (e !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), t.removeAttribute(a);
            break;
          }
          if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
            t.removeAttribute(a);
            break;
          }
          ne(c, a), c = ts("" + c), t.setAttribute(a, c);
          break;
        case "action":
        case "formAction":
          if (c != null && (e === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof c == "function" && (o.encType == null && o.method == null || Dg || (Dg = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || zg || (zg = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : e === "input" || e === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : e !== "input" || o.type === "submit" || o.type === "image" || Ag ? e !== "button" || o.type == null || o.type === "submit" || Ag ? typeof c == "function" && (o.name == null || t2 || (t2 = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Dg || (Dg = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || zg || (zg = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Ag = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Ag = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof c == "function") {
            t.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (e !== "input" && Wt(t, e, "name", o.name, o, null), Wt(
              t,
              e,
              "formEncType",
              o.formEncType,
              o,
              null
            ), Wt(
              t,
              e,
              "formMethod",
              o.formMethod,
              o,
              null
            ), Wt(
              t,
              e,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (Wt(
              t,
              e,
              "encType",
              o.encType,
              o,
              null
            ), Wt(t, e, "method", o.method, o, null), Wt(
              t,
              e,
              "target",
              o.target,
              o,
              null
            )));
          if (c == null || typeof c == "symbol" || typeof c == "boolean") {
            t.removeAttribute(a);
            break;
          }
          ne(c, a), c = ts("" + c), t.setAttribute(a, c);
          break;
        case "onClick":
          c != null && (typeof c != "function" && xe(a, c), t.onclick = ka);
          break;
        case "onScroll":
          c != null && (typeof c != "function" && xe(a, c), dt("scroll", t));
          break;
        case "onScrollEnd":
          c != null && (typeof c != "function" && xe(a, c), dt("scrollend", t));
          break;
        case "dangerouslySetInnerHTML":
          if (c != null) {
            if (typeof c != "object" || !("__html" in c))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = c.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              t.innerHTML = a;
            }
          }
          break;
        case "multiple":
          t.multiple = c && typeof c != "function" && typeof c != "symbol";
          break;
        case "muted":
          t.muted = c && typeof c != "function" && typeof c != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
            t.removeAttribute("xlink:href");
            break;
          }
          ne(c, a), a = ts("" + c), t.setAttributeNS(Ur, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          c != null && typeof c != "function" && typeof c != "symbol" ? (ne(c, a), t.setAttribute(a, "" + c)) : t.removeAttribute(a);
          break;
        case "inert":
          c !== "" || Og[a] || (Og[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          c && typeof c != "function" && typeof c != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
          break;
        case "capture":
        case "download":
          c === !0 ? t.setAttribute(a, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? (ne(c, a), t.setAttribute(a, c)) : t.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? (ne(c, a), t.setAttribute(a, c)) : t.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? t.removeAttribute(a) : (ne(c, a), t.setAttribute(a, c));
          break;
        case "popover":
          dt("beforetoggle", t), dt("toggle", t), Gr(t, "popover", c);
          break;
        case "xlinkActuate":
          wn(
            t,
            Ur,
            "xlink:actuate",
            c
          );
          break;
        case "xlinkArcrole":
          wn(
            t,
            Ur,
            "xlink:arcrole",
            c
          );
          break;
        case "xlinkRole":
          wn(
            t,
            Ur,
            "xlink:role",
            c
          );
          break;
        case "xlinkShow":
          wn(
            t,
            Ur,
            "xlink:show",
            c
          );
          break;
        case "xlinkTitle":
          wn(
            t,
            Ur,
            "xlink:title",
            c
          );
          break;
        case "xlinkType":
          wn(
            t,
            Ur,
            "xlink:type",
            c
          );
          break;
        case "xmlBase":
          wn(
            t,
            lS,
            "xml:base",
            c
          );
          break;
        case "xmlLang":
          wn(
            t,
            lS,
            "xml:lang",
            c
          );
          break;
        case "xmlSpace":
          wn(
            t,
            lS,
            "xml:space",
            c
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Gr(t, "is", c);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          e2 || c == null || typeof c != "object" || (e2 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            c
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = yp(a), Gr(t, a, c)) : Eu.hasOwnProperty(a) && c != null && typeof c != "function" && xe(a, c);
      }
    }
    function tf(t, e, a, c, o, f) {
      switch (a) {
        case "style":
          gm(t, c, f);
          break;
        case "dangerouslySetInnerHTML":
          if (c != null) {
            if (typeof c != "object" || !("__html" in c))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = c.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              t.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof c == "string" ? oi(t, c) : (typeof c == "number" || typeof c == "bigint") && oi(t, "" + c);
          break;
        case "onScroll":
          c != null && (typeof c != "function" && xe(a, c), dt("scroll", t));
          break;
        case "onScrollEnd":
          c != null && (typeof c != "function" && xe(a, c), dt("scrollend", t));
          break;
        case "onClick":
          c != null && (typeof c != "function" && xe(a, c), t.onclick = ka);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (Eu.hasOwnProperty(a))
            c != null && typeof c != "function" && xe(a, c);
          else
            t: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), e = a.slice(2, o ? a.length - 7 : void 0), f = t[fa] || null, f = f != null ? f[a] : null, typeof f == "function" && t.removeEventListener(e, f, o), typeof c == "function")) {
                typeof f != "function" && f !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(e, c, o);
                break t;
              }
              a in t ? t[a] = c : c === !0 ? t.setAttribute(a, "") : Gr(t, a, c);
            }
      }
    }
    function Me(t, e, a) {
      switch (ca(e, a), e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          dt("error", t), dt("load", t);
          var c = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    c = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    Wt(t, e, f, d, a, null);
                }
            }
          o && Wt(t, e, "srcSet", a.srcSet, a, null), c && Wt(t, e, "src", a.src, a, null);
          return;
        case "input":
          ai("input", a), dt("invalid", t);
          var h = f = d = o = null, y = null, p = null;
          for (c in a)
            if (a.hasOwnProperty(c)) {
              var A = a[c];
              if (A != null)
                switch (c) {
                  case "name":
                    o = A;
                    break;
                  case "type":
                    d = A;
                    break;
                  case "checked":
                    y = A;
                    break;
                  case "defaultChecked":
                    p = A;
                    break;
                  case "value":
                    f = A;
                    break;
                  case "defaultValue":
                    h = A;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (A != null)
                      throw Error(
                        e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    Wt(t, e, c, A, a, null);
                }
            }
          $l(t, a), Vr(
            t,
            f,
            h,
            y,
            p,
            d,
            o,
            !1
          );
          return;
        case "select":
          ai("select", a), dt("invalid", t), c = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  c = h;
                default:
                  Wt(
                    t,
                    e,
                    o,
                    h,
                    a,
                    null
                  );
              }
          Zr(t, a), e = f, a = d, t.multiple = !!c, e != null ? Jn(t, !!c, e, !1) : a != null && Jn(t, !!c, a, !0);
          return;
        case "textarea":
          ai("textarea", a), dt("invalid", t), f = o = c = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  c = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  Wt(
                    t,
                    e,
                    d,
                    h,
                    a,
                    null
                  );
              }
          ni(t, a), yo(t, c, o, f);
          return;
        case "option":
          mp(t, a);
          for (y in a)
            if (a.hasOwnProperty(y) && (c = a[y], c != null))
              switch (y) {
                case "selected":
                  t.selected = c && typeof c != "function" && typeof c != "symbol";
                  break;
                default:
                  Wt(t, e, y, c, a, null);
              }
          return;
        case "dialog":
          dt("beforetoggle", t), dt("toggle", t), dt("cancel", t), dt("close", t);
          break;
        case "iframe":
        case "object":
          dt("load", t);
          break;
        case "video":
        case "audio":
          for (c = 0; c < I0.length; c++)
            dt(I0[c], t);
          break;
        case "image":
          dt("error", t), dt("load", t);
          break;
        case "details":
          dt("toggle", t);
          break;
        case "embed":
        case "source":
        case "link":
          dt("error", t), dt("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (p in a)
            if (a.hasOwnProperty(p) && (c = a[p], c != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  Wt(t, e, p, c, a, null);
              }
          return;
        default:
          if ($n(e)) {
            for (A in a)
              a.hasOwnProperty(A) && (c = a[A], c !== void 0 && tf(
                t,
                e,
                A,
                c,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (c = a[h], c != null && Wt(t, e, h, c, a, null));
    }
    function cl(t, e, a, c) {
      switch (ca(e, c), e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, h = null, y = null, p = null, A = null;
          for (_ in a) {
            var D = a[_];
            if (a.hasOwnProperty(_) && D != null)
              switch (_) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  y = D;
                default:
                  c.hasOwnProperty(_) || Wt(
                    t,
                    e,
                    _,
                    null,
                    c,
                    D
                  );
              }
          }
          for (var S in c) {
            var _ = c[S];
            if (D = a[S], c.hasOwnProperty(S) && (_ != null || D != null))
              switch (S) {
                case "type":
                  f = _;
                  break;
                case "name":
                  o = _;
                  break;
                case "checked":
                  p = _;
                  break;
                case "defaultChecked":
                  A = _;
                  break;
                case "value":
                  d = _;
                  break;
                case "defaultValue":
                  h = _;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (_ != null)
                    throw Error(
                      e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  _ !== D && Wt(
                    t,
                    e,
                    S,
                    _,
                    c,
                    D
                  );
              }
          }
          e = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, c = c.type === "checkbox" || c.type === "radio" ? c.checked != null : c.value != null, e || !c || Pb || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), Pb = !0), !e || c || Ib || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), Ib = !0), mc(
            t,
            d,
            h,
            y,
            p,
            A,
            f,
            o
          );
          return;
        case "select":
          _ = d = h = S = null;
          for (f in a)
            if (y = a[f], a.hasOwnProperty(f) && y != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  _ = y;
                default:
                  c.hasOwnProperty(f) || Wt(
                    t,
                    e,
                    f,
                    null,
                    c,
                    y
                  );
              }
          for (o in c)
            if (f = c[o], y = a[o], c.hasOwnProperty(o) && (f != null || y != null))
              switch (o) {
                case "value":
                  S = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== y && Wt(
                    t,
                    e,
                    o,
                    f,
                    c,
                    y
                  );
              }
          c = h, e = d, a = _, S != null ? Jn(t, !!e, S, !1) : !!a != !!e && (c != null ? Jn(t, !!e, c, !0) : Jn(t, !!e, e ? [] : "", !1));
          return;
        case "textarea":
          _ = S = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !c.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  Wt(t, e, h, null, c, o);
              }
          for (d in c)
            if (o = c[d], f = a[d], c.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  S = o;
                  break;
                case "defaultValue":
                  _ = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && Wt(t, e, d, o, c, f);
              }
          ui(t, S, _);
          return;
        case "option":
          for (var w in a)
            if (S = a[w], a.hasOwnProperty(w) && S != null && !c.hasOwnProperty(w))
              switch (w) {
                case "selected":
                  t.selected = !1;
                  break;
                default:
                  Wt(
                    t,
                    e,
                    w,
                    null,
                    c,
                    S
                  );
              }
          for (y in c)
            if (S = c[y], _ = a[y], c.hasOwnProperty(y) && S !== _ && (S != null || _ != null))
              switch (y) {
                case "selected":
                  t.selected = S && typeof S != "function" && typeof S != "symbol";
                  break;
                default:
                  Wt(
                    t,
                    e,
                    y,
                    S,
                    c,
                    _
                  );
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var $ in a)
            S = a[$], a.hasOwnProperty($) && S != null && !c.hasOwnProperty($) && Wt(
              t,
              e,
              $,
              null,
              c,
              S
            );
          for (p in c)
            if (S = c[p], _ = a[p], c.hasOwnProperty(p) && S !== _ && (S != null || _ != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null)
                    throw Error(
                      e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  Wt(
                    t,
                    e,
                    p,
                    S,
                    c,
                    _
                  );
              }
          return;
        default:
          if ($n(e)) {
            for (var Ae in a)
              S = a[Ae], a.hasOwnProperty(Ae) && S !== void 0 && !c.hasOwnProperty(Ae) && tf(
                t,
                e,
                Ae,
                void 0,
                c,
                S
              );
            for (A in c)
              S = c[A], _ = a[A], !c.hasOwnProperty(A) || S === _ || S === void 0 && _ === void 0 || tf(
                t,
                e,
                A,
                S,
                c,
                _
              );
            return;
          }
      }
      for (var Xt in a)
        S = a[Xt], a.hasOwnProperty(Xt) && S != null && !c.hasOwnProperty(Xt) && Wt(t, e, Xt, null, c, S);
      for (D in c)
        S = c[D], _ = a[D], !c.hasOwnProperty(D) || S === _ || S == null && _ == null || Wt(t, e, D, S, c, _);
    }
    function tc(t) {
      switch (t) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return t;
      }
    }
    function Vc(t) {
      var e = {};
      t = t.style;
      for (var a = 0; a < t.length; a++) {
        var c = t[a];
        e[c] = t.getPropertyValue(c);
      }
      return e;
    }
    function pu(t, e, a) {
      if (e != null && typeof e != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var c, o = c = "", f;
        for (f in e)
          if (e.hasOwnProperty(f)) {
            var d = e[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (cm(d, f), c += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || tt.has(f) ? (cm(d, f), c += o + f.replace(x, "-$1").toLowerCase().replace(P, "-ms-") + ":" + ("" + d).trim()) : c += o + f.replace(x, "-$1").toLowerCase().replace(P, "-ms-") + ":" + d + "px", o = ";");
          }
        c = c || null, e = t.getAttribute("style"), e !== c && (c = Nn(c), Nn(e) !== c && (a.style = Vc(t)));
      }
    }
    function pa(t, e, a, c, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (c != null)
        switch (typeof c) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (ne(c, e), t === "" + c)
              return;
        }
      Ne(e, t, c, f);
    }
    function lh(t, e, a, c, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null) {
        switch (typeof c) {
          case "function":
          case "symbol":
            return;
        }
        if (!c) return;
      } else
        switch (typeof c) {
          case "function":
          case "symbol":
            break;
          default:
            if (c) return;
        }
      Ne(e, t, c, f);
    }
    function ah(t, e, a, c, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (c != null)
        switch (typeof c) {
          case "function":
          case "symbol":
            break;
          default:
            if (ne(c, a), t === "" + c)
              return;
        }
      Ne(e, t, c, f);
    }
    function ef(t, e, a, c, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(c)) return;
        }
      else if (c != null)
        switch (typeof c) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(c) && (ne(c, e), t === "" + c))
              return;
        }
      Ne(e, t, c, f);
    }
    function Ks(t, e, a, c, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (c != null)
        switch (typeof c) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (ne(c, e), a = ts("" + c), t === a)
              return;
        }
      Ne(e, t, c, f);
    }
    function va(t, e, a, c) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = t.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if ($n(e)) {
        for (var y in a)
          if (a.hasOwnProperty(y)) {
            var p = a[y];
            if (p != null) {
              if (Eu.hasOwnProperty(y))
                typeof p != "function" && xe(y, p);
              else if (a.suppressHydrationWarning !== !0)
                switch (y) {
                  case "children":
                    typeof p != "string" && typeof p != "number" || Ne(
                      "children",
                      t.textContent,
                      p,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = t.innerHTML, p = p ? p.__html : void 0, p != null && (p = eh(t, p), Ne(
                      y,
                      d,
                      p,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(y), pu(t, p, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(y.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      y
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = mo(
                      t,
                      "class",
                      p
                    ), Ne(
                      "className",
                      d,
                      p,
                      o
                    );
                    continue;
                  default:
                    c.context === fo && e !== "svg" && e !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = mo(
                      t,
                      y,
                      p
                    ), Ne(
                      y,
                      d,
                      p,
                      o
                    );
                }
            }
          }
      } else
        for (p in a)
          if (a.hasOwnProperty(p) && (y = a[p], y != null)) {
            if (Eu.hasOwnProperty(p))
              typeof y != "function" && xe(p, y);
            else if (a.suppressHydrationWarning !== !0)
              switch (p) {
                case "children":
                  typeof y != "string" && typeof y != "number" || Ne(
                    "children",
                    t.textContent,
                    y,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = t.innerHTML, y = y ? y.__html : void 0, y != null && (y = eh(t, y), d !== y && (o[p] = { __html: d }));
                  continue;
                case "className":
                  pa(
                    t,
                    p,
                    "class",
                    y,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  pa(
                    t,
                    p,
                    "tabindex",
                    y,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(p), pu(t, y, o);
                  continue;
                case "multiple":
                  f.delete(p), Ne(
                    p,
                    t.multiple,
                    y,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(p), Ne(
                    p,
                    t.muted,
                    y,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), Ne(
                    p,
                    t.autofocus,
                    y,
                    o
                  );
                  continue;
                case "data":
                  if (e !== "object") {
                    f.delete(p), d = t.getAttribute("data"), Ne(
                      p,
                      d,
                      y,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(y !== "" || e === "a" && p === "href" || e === "object" && p === "data")) {
                    console.error(
                      p === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      p,
                      p
                    );
                    continue;
                  }
                  Ks(
                    t,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = t.getAttribute(p), typeof y == "function") {
                    f.delete(p.toLowerCase()), p === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === wT) {
                    f.delete(p.toLowerCase()), Ne(
                      p,
                      "function",
                      y,
                      o
                    );
                    continue;
                  }
                  Ks(
                    t,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  Ks(
                    t,
                    p,
                    "xlink:href",
                    y,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  ah(
                    t,
                    p,
                    "contenteditable",
                    y,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  ah(
                    t,
                    p,
                    "spellcheck",
                    y,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  ah(
                    t,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  lh(
                    t,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  t: {
                    h = t;
                    var A = d = p, D = o;
                    if (f.delete(A), h = h.getAttribute(A), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break t;
                        default:
                          if (y === !1) break t;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (y === !0 && h === "") break t;
                          break;
                        default:
                          if (ne(y, d), h === "" + y)
                            break t;
                      }
                    Ne(
                      d,
                      h,
                      y,
                      D
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  t: {
                    if (h = t, A = d = p, D = o, f.delete(A), h = h.getAttribute(A), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break t;
                        default:
                          if (isNaN(y) || 1 > y) break t;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(y) || 1 > y) && (ne(y, d), h === "" + y))
                            break t;
                      }
                    Ne(
                      d,
                      h,
                      y,
                      D
                    );
                  }
                  continue;
                case "rowSpan":
                  ef(
                    t,
                    p,
                    "rowspan",
                    y,
                    f,
                    o
                  );
                  continue;
                case "start":
                  ef(
                    t,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  pa(
                    t,
                    p,
                    "x-height",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  pa(
                    t,
                    p,
                    "xlink:actuate",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  pa(
                    t,
                    p,
                    "xlink:arcrole",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  pa(
                    t,
                    p,
                    "xlink:role",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  pa(
                    t,
                    p,
                    "xlink:show",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  pa(
                    t,
                    p,
                    "xlink:title",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  pa(
                    t,
                    p,
                    "xlink:type",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  pa(
                    t,
                    p,
                    "xml:base",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  pa(
                    t,
                    p,
                    "xml:lang",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  pa(
                    t,
                    p,
                    "xml:space",
                    y,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  y !== "" || Og[p] || (Og[p] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    p
                  )), lh(
                    t,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
                    h = yp(p), d = !1, c.context === fo && e !== "svg" && e !== "math" ? f.delete(h.toLowerCase()) : (A = p.toLowerCase(), A = jn.hasOwnProperty(
                      A
                    ) && jn[A] || null, A !== null && A !== p && (d = !0, f.delete(A)), f.delete(h));
                    t: if (A = t, D = h, h = y, Wf(D))
                      if (A.hasAttribute(D))
                        A = A.getAttribute(
                          D
                        ), ne(
                          h,
                          D
                        ), h = A === "" + h ? h : A;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break t;
                          case "boolean":
                            if (A = D.toLowerCase().slice(0, 5), A !== "data-" && A !== "aria-")
                              break t;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || Ne(
                      p,
                      h,
                      y,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && Js(t, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function ev(t, e) {
      switch (t.length) {
        case 0:
          return "";
        case 1:
          return t[0];
        case 2:
          return t[0] + " " + e + " " + t[1];
        default:
          return t.slice(0, -1).join(", ") + ", " + e + " " + t[t.length - 1];
      }
    }
    function ia(t) {
      switch (t) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return !0;
        default:
          return !1;
      }
    }
    function lv() {
      if (typeof performance.getEntriesByType == "function") {
        for (var t = 0, e = 0, a = performance.getEntriesByType("resource"), c = 0; c < a.length; c++) {
          var o = a[c], f = o.transferSize, d = o.initiatorType, h = o.duration;
          if (f && h && ia(d)) {
            for (d = 0, h = o.responseEnd, c += 1; c < a.length; c++) {
              var y = a[c], p = y.startTime;
              if (p > h) break;
              var A = y.transferSize, D = y.initiatorType;
              A && ia(D) && (y = y.responseEnd, d += A * (y < h ? 1 : (h - p) / (y - p)));
            }
            if (--c, e += 8 * (f + d) / (o.duration / 1e3), t++, 10 < t) break;
          }
        }
        if (0 < t) return e / t / 1e6;
      }
      return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
    }
    function $s(t) {
      return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function av(t) {
      switch (t) {
        case zt:
          return am;
        case bt:
          return Rg;
        default:
          return fo;
      }
    }
    function ec(t, e) {
      if (t === fo)
        switch (e) {
          case "svg":
            return am;
          case "math":
            return Rg;
          default:
            return fo;
        }
      return t === am && e === "foreignObject" ? fo : t;
    }
    function lf(t, e) {
      return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
    }
    function Gy() {
      var t = window.event;
      return t && t.type === "popstate" ? t === cS ? !1 : (cS = t, !0) : (cS = null, !1);
    }
    function vu() {
      var t = window.event;
      return t && t !== ep ? t.type : null;
    }
    function af() {
      var t = window.event;
      return t && t !== ep ? t.timeStamp : -1.1;
    }
    function nv(t) {
      setTimeout(function() {
        throw t;
      });
    }
    function uv(t, e, a) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && t.focus();
          break;
        case "img":
          a.src ? t.src = a.src : a.srcSet && (t.srcset = a.srcSet);
      }
    }
    function cv() {
    }
    function nh(t, e, a, c) {
      cl(t, e, a, c), t[fa] = c;
    }
    function uh(t) {
      oi(t, "");
    }
    function Wg(t, e, a) {
      t.nodeValue = a;
    }
    function iv(t) {
      if (!t.__reactWarnedAboutChildrenConflict) {
        var e = t[fa] || null;
        if (e !== null) {
          var a = hn(t);
          a !== null && (typeof e.children == "string" || typeof e.children == "number" ? (t.__reactWarnedAboutChildrenConflict = !0, k(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })) : e.dangerouslySetInnerHTML != null && (t.__reactWarnedAboutChildrenConflict = !0, k(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })));
        }
      }
    }
    function Zc(t) {
      return t === "head";
    }
    function ov(t, e) {
      t.removeChild(e);
    }
    function fv(t, e) {
      (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).removeChild(e);
    }
    function Xi(t, e) {
      var a = e, c = 0;
      do {
        var o = a.nextSibling;
        if (t.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === tp || a === Mg) {
            if (c === 0) {
              t.removeChild(o), Li(e);
              return;
            }
            c--;
          } else if (a === P0 || a === Qf || a === _r || a === lm || a === Cr)
            c++;
          else if (a === KT)
            ac(
              t.ownerDocument.documentElement
            );
          else if (a === WT) {
            a = t.ownerDocument.head, ac(a);
            for (var f = a.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[bf] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = d;
            }
          } else
            a === $T && ac(t.ownerDocument.body);
        a = o;
      } while (a);
      Li(e);
    }
    function Ws(t, e) {
      var a = t;
      t = 0;
      do {
        var c = a.nextSibling;
        if (a.nodeType === 1 ? e ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (e ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), c && c.nodeType === 8)
          if (a = c.data, a === tp) {
            if (t === 0) break;
            t--;
          } else
            a !== P0 && a !== Qf && a !== _r && a !== lm || t++;
        a = c;
      } while (a);
    }
    function sv(t) {
      Ws(t, !0);
    }
    function rv(t) {
      t = t.style, typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function dv(t) {
      t.nodeValue = "";
    }
    function hv(t) {
      Ws(t, !1);
    }
    function mv(t, e) {
      e = e[kT], e = e != null && e.hasOwnProperty("display") ? e.display : null, t.style.display = e == null || typeof e == "boolean" ? "" : ("" + e).trim();
    }
    function yv(t, e) {
      t.nodeValue = e;
    }
    function nf(t) {
      var e = t.firstChild;
      for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
        var a = e;
        switch (e = e.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            nf(a), sm(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        t.removeChild(a);
      }
    }
    function pv(t, e, a, c) {
      for (; t.nodeType === 1; ) {
        var o = a;
        if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
          if (!c && (t.nodeName !== "INPUT" || t.type !== "hidden"))
            break;
        } else if (c) {
          if (!t[bf])
            switch (e) {
              case "meta":
                if (!t.hasAttribute("itemprop")) break;
                return t;
              case "link":
                if (f = t.getAttribute("rel"), f === "stylesheet" && t.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || t.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || t.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return t;
              case "style":
                if (t.hasAttribute("data-precedence")) break;
                return t;
              case "script":
                if (f = t.getAttribute("src"), (f !== (o.src == null ? null : o.src) || t.getAttribute("type") !== (o.type == null ? null : o.type) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                  break;
                return t;
              default:
                return t;
            }
        } else if (e === "input" && t.type === "hidden") {
          ne(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && t.getAttribute("name") === f)
            return t;
        } else return t;
        if (t = ja(t.nextSibling), t === null) break;
      }
      return null;
    }
    function vv(t, e, a) {
      if (e === "") return null;
      for (; t.nodeType !== 3; )
        if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = ja(t.nextSibling), t === null)) return null;
      return t;
    }
    function le(t, e) {
      for (; t.nodeType !== 8; )
        if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = ja(t.nextSibling), t === null)) return null;
      return t;
    }
    function ks(t) {
      return t.data === Qf || t.data === _r;
    }
    function Xy(t) {
      return t.data === lm || t.data === Qf && t.ownerDocument.readyState !== a2;
    }
    function gv(t, e) {
      var a = t.ownerDocument;
      if (t.data === _r)
        t._reactRetry = e;
      else if (t.data !== Qf || a.readyState !== a2)
        e();
      else {
        var c = function() {
          e(), a.removeEventListener("DOMContentLoaded", c);
        };
        a.addEventListener("DOMContentLoaded", c), t._reactRetry = c;
      }
    }
    function ja(t) {
      for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
          if (e = t.data, e === P0 || e === lm || e === Qf || e === _r || e === Cr || e === aS || e === l2)
            break;
          if (e === tp || e === Mg)
            return null;
        }
      }
      return t;
    }
    function Sv(t) {
      if (t.nodeType === 1) {
        for (var e = t.nodeName.toLowerCase(), a = {}, c = t.attributes, o = 0; o < c.length; o++) {
          var f = c[o];
          a[tc(f.name)] = f.name.toLowerCase() === "style" ? Vc(t) : f.value;
        }
        return { type: e, props: a };
      }
      return t.nodeType === 8 ? t.data === Cr ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : t.nodeValue;
    }
    function bv(t, e, a) {
      return a === null || a[JT] !== !0 ? (t.nodeValue === e ? t = null : (e = Nn(e), t = Nn(t.nodeValue) === e ? null : t.nodeValue), t) : null;
    }
    function uf(t) {
      t = t.nextSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var a = t.data;
          if (a === tp || a === Mg) {
            if (e === 0)
              return ja(t.nextSibling);
            e--;
          } else
            a !== P0 && a !== lm && a !== Qf && a !== _r && a !== Cr || e++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Qi(t) {
      t = t.previousSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var a = t.data;
          if (a === P0 || a === lm || a === Qf || a === _r || a === Cr) {
            if (e === 0) return t;
            e--;
          } else
            a !== tp && a !== Mg || e++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Qy(t) {
      Li(t);
    }
    function ch(t) {
      Li(t);
    }
    function Vy(t) {
      Li(t);
    }
    function lc(t, e, a, c, o) {
      switch (o && If(t, c.ancestorInfo), e = $s(a), t) {
        case "html":
          if (t = e.documentElement, !t)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return t;
        case "head":
          if (t = e.head, !t)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return t;
        case "body":
          if (t = e.body, !t)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return t;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function gu(t, e, a, c) {
      if (!a[uc] && hn(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (t) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      Me(a, t, e), a[Re] = c, a[fa] = e;
    }
    function ac(t) {
      for (var e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      sm(t);
    }
    function ih(t) {
      return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
    }
    function Zy(t, e, a) {
      var c = nm;
      if (c && typeof e == "string" && e) {
        var o = ue(e);
        o = 'link[rel="' + t + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), f2.has(o) || (f2.add(o), t = { rel: t, crossOrigin: a, href: e }, c.querySelector(o) === null && (e = c.createElement("link"), Me(e, "link", t), Je(e), c.head.appendChild(e)));
      }
    }
    function Ly(t, e, a, c) {
      var o = (o = Ga.current) ? ih(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (t) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = Vi(a.href), e = Wa(o).hoistableStyles, c = e.get(a), c || (c = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, e.set(a, c)), c) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            t = Vi(a.href);
            var f = Wa(o).hoistableStyles, d = f.get(t);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Br, preload: null }
            }, f.set(t, d), (f = o.querySelector(
              Is(t)
            )) && !f._p && (d.instance = f, d.state.loading = lp | Bu), !Nu.has(t))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              Nu.set(t, h), f || Tv(
                o,
                t,
                h,
                d.state
              );
            }
            if (e && c === null)
              throw a = `

  - ` + Fs(e) + `
  + ` + Fs(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (e && c !== null)
            throw a = `

  - ` + Fs(e) + `
  + ` + Fs(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (a = Zi(a), e = Wa(o).hoistableScripts, c = e.get(a), c || (c = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, e.set(a, c)), c) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + t + '". this is a bug in React.'
          );
      }
    }
    function Fs(t) {
      var e = 0, a = "<link";
      return typeof t.rel == "string" ? (e++, a += ' rel="' + t.rel + '"') : Xa.call(t, "rel") && (e++, a += ' rel="' + (t.rel === null ? "null" : "invalid type " + typeof t.rel) + '"'), typeof t.href == "string" ? (e++, a += ' href="' + t.href + '"') : Xa.call(t, "href") && (e++, a += ' href="' + (t.href === null ? "null" : "invalid type " + typeof t.href) + '"'), typeof t.precedence == "string" ? (e++, a += ' precedence="' + t.precedence + '"') : Xa.call(t, "precedence") && (e++, a += " precedence={" + (t.precedence === null ? "null" : "invalid type " + typeof t.precedence) + "}"), Object.getOwnPropertyNames(t).length > e && (a += " ..."), a + " />";
    }
    function Vi(t) {
      return 'href="' + ue(t) + '"';
    }
    function Is(t) {
      return 'link[rel="stylesheet"][' + t + "]";
    }
    function oh(t) {
      return Ot({}, t, {
        "data-precedence": t.precedence,
        precedence: null
      });
    }
    function Tv(t, e, a, c) {
      t.querySelector(
        'link[rel="preload"][as="style"][' + e + "]"
      ) ? c.loading = lp : (e = t.createElement("link"), c.preload = e, e.addEventListener("load", function() {
        return c.loading |= lp;
      }), e.addEventListener("error", function() {
        return c.loading |= i2;
      }), Me(e, "link", a), Je(e), t.head.appendChild(e));
    }
    function Zi(t) {
      return '[src="' + ue(t) + '"]';
    }
    function Ps(t) {
      return "script[async]" + t;
    }
    function fh(t, e, a) {
      if (e.count++, e.instance === null)
        switch (e.type) {
          case "style":
            var c = t.querySelector(
              'style[data-href~="' + ue(a.href) + '"]'
            );
            if (c)
              return e.instance = c, Je(c), c;
            var o = Ot({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return c = (t.ownerDocument || t).createElement("style"), Je(c), Me(c, "style", o), cf(c, a.precedence, t), e.instance = c;
          case "stylesheet":
            o = Vi(a.href);
            var f = t.querySelector(
              Is(o)
            );
            if (f)
              return e.state.loading |= Bu, e.instance = f, Je(f), f;
            c = oh(a), (o = Nu.get(o)) && wy(c, o), f = (t.ownerDocument || t).createElement("link"), Je(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), Me(f, "link", c), e.state.loading |= Bu, cf(f, a.precedence, t), e.instance = f;
          case "script":
            return f = Zi(a.src), (o = t.querySelector(
              Ps(f)
            )) ? (e.instance = o, Je(o), o) : (c = a, (o = Nu.get(f)) && (c = Ot({}, a), Jy(c, o)), t = t.ownerDocument || t, o = t.createElement("script"), Je(o), Me(o, "link", c), t.head.appendChild(o), e.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + e.type + '". this is a bug in React.'
            );
        }
      else
        e.type === "stylesheet" && (e.state.loading & Bu) === Br && (c = e.instance, e.state.loading |= Bu, cf(c, a.precedence, t));
      return e.instance;
    }
    function cf(t, e, a) {
      for (var c = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = c.length ? c[c.length - 1] : null, f = o, d = 0; d < c.length; d++) {
        var h = c[d];
        if (h.dataset.precedence === e) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(t, f.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild));
    }
    function wy(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
    }
    function Jy(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
    }
    function of(t, e, a) {
      if (Ug === null) {
        var c = /* @__PURE__ */ new Map(), o = Ug = /* @__PURE__ */ new Map();
        o.set(a, c);
      } else
        o = Ug, c = o.get(a), c || (c = /* @__PURE__ */ new Map(), o.set(a, c));
      if (c.has(t)) return c;
      for (c.set(t, null), a = a.getElementsByTagName(t), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[bf] || f[Re] || t === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== zt) {
          var d = f.getAttribute(e) || "";
          d = t + d;
          var h = c.get(d);
          h ? h.push(f) : c.set(d, [f]);
        }
      }
      return c;
    }
    function Ev(t, e, a) {
      t = t.ownerDocument || t, t.head.insertBefore(
        a,
        e === "title" ? t.querySelector("head > title") : null
      );
    }
    function Av(t, e, a) {
      var c = !a.ancestorInfo.containerTagInScope;
      if (a.context === am || e.itemProp != null)
        return !c || e.itemProp == null || t !== "meta" && t !== "title" && t !== "style" && t !== "link" && t !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          t,
          t
        ), !1;
      switch (t) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") {
            c && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) {
            if (e.rel === "stylesheet" && typeof e.precedence == "string") {
              t = e.href;
              var o = e.onError, f = e.disabled;
              a = [], e.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = ev(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                t,
                f,
                o
              );
            }
            c && (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (e.onError || e.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (e.rel) {
            case "stylesheet":
              return t = e.precedence, e = e.disabled, typeof t != "string" && c && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof t == "string" && e == null;
            default:
              return !0;
          }
        case "script":
          if (t = e.async && typeof e.async != "function" && typeof e.async != "symbol", !t || e.onLoad || e.onError || !e.src || typeof e.src != "string") {
            c && (t ? e.onLoad || e.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          c && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            t
          );
      }
      return !1;
    }
    function Bt(t) {
      return !(t.type === "stylesheet" && (t.state.loading & o2) === Br);
    }
    function Ky(t, e, a, c) {
      if (a.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== !1) && (a.state.loading & Bu) === Br) {
        if (a.instance === null) {
          var o = Vi(c.href), f = e.querySelector(
            Is(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = ff.bind(t), e.then(t, t)), a.state.loading |= Bu, a.instance = f, Je(f);
            return;
          }
          f = e.ownerDocument || e, c = oh(c), (o = Nu.get(o)) && wy(c, o), f = f.createElement("link"), Je(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), Me(f, "link", c), a.instance = f;
        }
        t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(a, e), (e = a.state.preload) && (a.state.loading & o2) === Br && (t.count++, a = ff.bind(t), e.addEventListener("load", a), e.addEventListener("error", a));
      }
    }
    function sh(t, e) {
      return t.stylesheets && t.count === 0 && tr(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(a) {
        var c = setTimeout(function() {
          if (t.stylesheets && tr(t, t.stylesheets), t.unsuspend) {
            var f = t.unsuspend;
            t.unsuspend = null, f();
          }
        }, PT + e);
        0 < t.imgBytes && oS === 0 && (oS = 125 * lv() * eE);
        var o = setTimeout(
          function() {
            if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && tr(t, t.stylesheets), t.unsuspend)) {
              var f = t.unsuspend;
              t.unsuspend = null, f();
            }
          },
          (t.imgBytes > oS ? 50 : tE) + e
        );
        return t.unsuspend = a, function() {
          t.unsuspend = null, clearTimeout(c), clearTimeout(o);
        };
      } : null;
    }
    function ff() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          tr(this, this.stylesheets);
        else if (this.unsuspend) {
          var t = this.unsuspend;
          this.unsuspend = null, t();
        }
      }
    }
    function tr(t, e) {
      t.stylesheets = null, t.unsuspend !== null && (t.count++, Cg = /* @__PURE__ */ new Map(), e.forEach($y, t), Cg = null, ff.call(t));
    }
    function $y(t, e) {
      if (!(e.state.loading & Bu)) {
        var a = Cg.get(t);
        if (a) var c = a.get(fS);
        else {
          a = /* @__PURE__ */ new Map(), Cg.set(t, a);
          for (var o = t.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), c = d);
          }
          c && a.set(fS, c);
        }
        o = e.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || c, f === c && a.set(fS, o), a.set(d, o), this.count++, c = ff.bind(this), o.addEventListener("load", c), o.addEventListener("error", c), f ? f.parentNode.insertBefore(o, f.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(o, t.firstChild)), e.state.loading |= Bu;
      }
    }
    function er(t, e, a, c, o, f, d, h, y) {
      for (this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Hr, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = jr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = jr(0), this.hiddenUpdates = jr(null), this.identifierPrefix = c, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), t = this.pendingUpdatersLaneMap = [], e = 0; 31 > e; e++) t.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function lr(t, e, a, c, o, f, d, h, y, p, A, D) {
      return t = new er(
        t,
        e,
        a,
        d,
        y,
        p,
        A,
        D,
        h
      ), e = DT, f === !0 && (e |= ba | cc), e |= Mt, f = xt(3, null, null, e), t.current = f, f.stateNode = t, e = fd(), gi(e), t.pooledCache = e, gi(e), f.memoizedState = {
        element: c,
        isDehydrated: a,
        cache: e
      }, qt(f), t;
    }
    function zv(t) {
      return t ? (t = Of, t) : Of;
    }
    function rh(t, e, a, c, o, f) {
      if (il && typeof il.onScheduleFiberRoot == "function")
        try {
          il.onScheduleFiberRoot($i, c, a);
        } catch (d) {
          bu || (bu = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = zv(o), c.context === null ? c.context = o : c.pendingContext = o, Su && Sa !== null && !h2 && (h2 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        W(Sa) || "Unknown"
      )), c = nl(e), c.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), c.callback = f), a = eu(t, c, e), a !== null && (In(e, "root.render()", null), yt(a, t, e), an(a, t, e));
    }
    function Dv(t, e) {
      if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var a = t.retryLane;
        t.retryLane = a !== 0 && a < e ? a : e;
      }
    }
    function Wy(t, e) {
      Dv(t, e), (t = t.alternate) && Dv(t, e);
    }
    function ky(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = Yl(t, 67108864);
        e !== null && yt(e, t, 67108864), Wy(t, 67108864);
      }
    }
    function Fy(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = Gl(t);
        e = li(e);
        var a = Yl(t, e);
        a !== null && yt(a, t, e), Wy(t, e);
      }
    }
    function oe() {
      return Sa;
    }
    function Iy(t, e, a, c) {
      var o = N.T;
      N.T = null;
      var f = kt.p;
      try {
        kt.p = ol, Py(t, e, a, c);
      } finally {
        kt.p = f, N.T = o;
      }
    }
    function _l(t, e, a, c) {
      var o = N.T;
      N.T = null;
      var f = kt.p;
      try {
        kt.p = Bl, Py(t, e, a, c);
      } finally {
        kt.p = f, N.T = o;
      }
    }
    function Py(t, e, a, c) {
      if (Hg) {
        var o = dh(c);
        if (o === null)
          Hn(
            t,
            e,
            c,
            Bg,
            a
          ), mh(t, c);
        else if (Ov(
          o,
          t,
          e,
          a,
          c
        ))
          c.stopPropagation();
        else if (mh(t, c), e & 4 && -1 < aE.indexOf(t)) {
          for (; o !== null; ) {
            var f = hn(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = ei(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var y = 1 << 31 - Hl(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      ya(f), (Lt & (xl | Vn)) === Ll && (yg = Tl() + Qb, mu(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = Yl(f, 2), h !== null && yt(h, f, 2), Ya(), Wy(f, 2);
              }
            if (f = dh(c), f === null && Hn(
              t,
              e,
              c,
              Bg,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && c.stopPropagation();
        } else
          Hn(
            t,
            e,
            c,
            null,
            a
          );
      }
    }
    function dh(t) {
      return t = pn(t), t0(t);
    }
    function t0(t) {
      if (Bg = null, t = qu(t), t !== null) {
        var e = Kt(t);
        if (e === null) t = null;
        else {
          var a = e.tag;
          if (a === 13) {
            if (t = wl(e), t !== null) return t;
            t = null;
          } else if (a === 31) {
            if (t = He(e), t !== null) return t;
            t = null;
          } else if (a === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
              return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
          } else e !== t && (t = null);
        }
      }
      return Bg = t, null;
    }
    function hh(t) {
      switch (t) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return ol;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Bl;
        case "message":
          switch (or()) {
            case s0:
              return ol;
            case Ah:
              return Bl;
            case Ki:
            case Hv:
              return Ql;
            case zh:
              return $c;
            default:
              return Ql;
          }
        default:
          return Ql;
      }
    }
    function mh(t, e) {
      switch (t) {
        case "focusin":
        case "focusout":
          Vf = null;
          break;
        case "dragenter":
        case "dragleave":
          Zf = null;
          break;
        case "mouseover":
        case "mouseout":
          Lf = null;
          break;
        case "pointerover":
        case "pointerout":
          np.delete(e.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          up.delete(e.pointerId);
      }
    }
    function Lc(t, e, a, c, o, f) {
      return t === null || t.nativeEvent !== f ? (t = {
        blockedOn: e,
        domEventName: a,
        eventSystemFlags: c,
        nativeEvent: f,
        targetContainers: [o]
      }, e !== null && (e = hn(e), e !== null && ky(e)), t) : (t.eventSystemFlags |= c, e = t.targetContainers, o !== null && e.indexOf(o) === -1 && e.push(o), t);
    }
    function Ov(t, e, a, c, o) {
      switch (e) {
        case "focusin":
          return Vf = Lc(
            Vf,
            t,
            e,
            a,
            c,
            o
          ), !0;
        case "dragenter":
          return Zf = Lc(
            Zf,
            t,
            e,
            a,
            c,
            o
          ), !0;
        case "mouseover":
          return Lf = Lc(
            Lf,
            t,
            e,
            a,
            c,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return np.set(
            f,
            Lc(
              np.get(f) || null,
              t,
              e,
              a,
              c,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, up.set(
            f,
            Lc(
              up.get(f) || null,
              t,
              e,
              a,
              c,
              o
            )
          ), !0;
      }
      return !1;
    }
    function e0(t) {
      var e = qu(t.target);
      if (e !== null) {
        var a = Kt(e);
        if (a !== null) {
          if (e = a.tag, e === 13) {
            if (e = wl(a), e !== null) {
              t.blockedOn = e, hp(t.priority, function() {
                Fy(a);
              });
              return;
            }
          } else if (e === 31) {
            if (e = He(a), e !== null) {
              t.blockedOn = e, hp(t.priority, function() {
                Fy(a);
              });
              return;
            }
          } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      t.blockedOn = null;
    }
    function sf(t) {
      if (t.blockedOn !== null) return !1;
      for (var e = t.targetContainers; 0 < e.length; ) {
        var a = dh(t.nativeEvent);
        if (a === null) {
          a = t.nativeEvent;
          var c = new a.constructor(
            a.type,
            a
          ), o = c;
          y0 !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), y0 = o, a.target.dispatchEvent(c), y0 === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), y0 = null;
        } else
          return e = hn(a), e !== null && ky(e), t.blockedOn = a, !1;
        e.shift();
      }
      return !0;
    }
    function yh(t, e, a) {
      sf(t) && a.delete(e);
    }
    function kg() {
      sS = !1, Vf !== null && sf(Vf) && (Vf = null), Zf !== null && sf(Zf) && (Zf = null), Lf !== null && sf(Lf) && (Lf = null), np.forEach(yh), up.forEach(yh);
    }
    function ar(t, e) {
      t.blockedOn === e && (t.blockedOn = null, sS || (sS = !0, Fe.unstable_scheduleCallback(
        Fe.unstable_NormalPriority,
        kg
      )));
    }
    function Mv(t) {
      Ng !== t && (Ng = t, Fe.unstable_scheduleCallback(
        Fe.unstable_NormalPriority,
        function() {
          Ng === t && (Ng = null);
          for (var e = 0; e < t.length; e += 3) {
            var a = t[e], c = t[e + 1], o = t[e + 2];
            if (typeof c != "function") {
              if (t0(c || a) === null)
                continue;
              break;
            }
            var f = hn(a);
            f !== null && (t.splice(e, 3), e -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: c
            }, Object.freeze(a), Wu(
              f,
              a,
              c,
              o
            ));
          }
        }
      ));
    }
    function Li(t) {
      function e(y) {
        return ar(y, t);
      }
      Vf !== null && ar(Vf, t), Zf !== null && ar(Zf, t), Lf !== null && ar(Lf, t), np.forEach(e), up.forEach(e);
      for (var a = 0; a < wf.length; a++) {
        var c = wf[a];
        c.blockedOn === t && (c.blockedOn = null);
      }
      for (; 0 < wf.length && (a = wf[0], a.blockedOn === null); )
        e0(a), a.blockedOn === null && wf.shift();
      if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
        for (c = 0; c < a.length; c += 3) {
          var o = a[c], f = a[c + 1], d = o[fa] || null;
          if (typeof f == "function")
            d || Mv(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[fa] || null)
                h = d.formAction;
              else if (t0(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[c + 1] = h : (a.splice(c, 3), c -= 3), Mv(a);
          }
        }
    }
    function Rv() {
      function t(f) {
        f.canIntercept && f.info === "react-transition" && f.intercept({
          handler: function() {
            return new Promise(function(d) {
              return o = d;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function e() {
        o !== null && (o(), o = null), c || setTimeout(a, 20);
      }
      function a() {
        if (!c && !navigation.transition) {
          var f = navigation.currentEntry;
          f && f.url != null && navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var c = !1, o = null;
        return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(a, 100), function() {
          c = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener(
            "navigatesuccess",
            e
          ), navigation.removeEventListener(
            "navigateerror",
            e
          ), o !== null && (o(), o = null);
        };
      }
    }
    function l0(t) {
      this._internalRoot = t;
    }
    function xn(t) {
      this._internalRoot = t;
    }
    function a0(t) {
      t[uc] && (t._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Fe = q2(), nr = mS, Fg = x2, Ot = Object.assign, Uv = Symbol.for("react.element"), on = Symbol.for("react.transitional.element"), wc = Symbol.for("react.portal"), rf = Symbol.for("react.fragment"), oa = Symbol.for("react.strict_mode"), ur = Symbol.for("react.profiler"), ph = Symbol.for("react.consumer"), qn = Symbol.for("react.context"), df = Symbol.for("react.forward_ref"), wi = Symbol.for("react.suspense"), ga = Symbol.for("react.suspense_list"), cr = Symbol.for("react.memo"), Xl = Symbol.for("react.lazy"), Yn = Symbol.for("react.activity"), Ig = Symbol.for("react.memo_cache_sentinel"), Cv = Symbol.iterator, hf = Symbol.for("react.client.reference"), ll = Array.isArray, N = nr.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, kt = Fg.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Pg = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), n0 = [], u0 = [], nc = -1, Jc = Ft(null), mf = Ft(null), Ga = Ft(null), Kc = Ft(null), yf = 0, _v, Ji, pf, c0, ir, vh, gh;
    ht.__reactDisabledLog = !0;
    var vf, i0, Sh = !1, o0 = new (typeof WeakMap == "function" ? WeakMap : Map)(), Sa = null, Su = !1, Xa = Object.prototype.hasOwnProperty, f0 = Fe.unstable_scheduleCallback, bh = Fe.unstable_cancelCallback, Th = Fe.unstable_shouldYield, Eh = Fe.unstable_requestPaint, Tl = Fe.unstable_now, or = Fe.unstable_getCurrentPriorityLevel, s0 = Fe.unstable_ImmediatePriority, Ah = Fe.unstable_UserBlockingPriority, Ki = Fe.unstable_NormalPriority, Hv = Fe.unstable_LowPriority, zh = Fe.unstable_IdlePriority, r0 = Fe.log, Bv = Fe.unstable_setDisableYieldValue, $i = null, il = null, bu = !1, Tu = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Hl = Math.clz32 ? Math.clz32 : om, d0 = Math.log, Dh = Math.LN2, gf = 256, fr = 262144, Sf = 4194304, ol = 2, Bl = 8, Ql = 32, $c = 268435456, fn = Math.random().toString(36).slice(2), Re = "__reactFiber$" + fn, fa = "__reactProps$" + fn, uc = "__reactContainer$" + fn, Wi = "__reactEvents$" + fn, t1 = "__reactListeners$" + fn, Nv = "__reactHandles$" + fn, sr = "__reactResources$" + fn, bf = "__reactMarker$" + fn, xv = /* @__PURE__ */ new Set(), Eu = {}, Tf = {}, qv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Ef = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), h0 = {}, Oh = {}, Mh = /[\n"\\]/g, m0 = !1, Yv = !1, rr = !1, l = !1, n = !1, u = !1, i = ["value", "defaultValue"], s = !1, r = /["'&<>\n\t]|^\s|\s$/, m = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), v = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), T = v.concat(["button"]), U = "dd dt li option optgroup p rp rt".split(" "), q = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, X = {}, C = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, x = /([A-Z])/g, P = /^ms-/, st = /^(?:webkit|moz|o)[A-Z]/, fe = /^-ms-/, M = /-(.)/g, z = /;\s*$/, R = {}, G = {}, nt = !1, Zt = !1, tt = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), bt = "http://www.w3.org/1998/Math/MathML", zt = "http://www.w3.org/2000/svg", Jt = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), jn = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, jv = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0,
      "aria-braillelabel": 0,
      "aria-brailleroledescription": 0,
      "aria-colindextext": 0,
      "aria-rowindextext": 0
    }, Rh = {}, Y2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), j2 = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), yS = !1, Qa = {}, pS = /^on./, G2 = /^on[^A-Z]/, X2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Q2 = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), V2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, y0 = null, Uh = null, Ch = null, e1 = !1, Wc = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), l1 = !1;
    if (Wc)
      try {
        var p0 = {};
        Object.defineProperty(p0, "passive", {
          get: function() {
            l1 = !0;
          }
        }), window.addEventListener("test", p0, p0), window.removeEventListener("test", p0, p0);
      } catch {
        l1 = !1;
      }
    var Af = null, a1 = null, Gv = null, dr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Xv = ml(dr), v0 = Ot({}, dr, { view: 0, detail: 0 }), Z2 = ml(v0), n1, u1, g0, Qv = Ot({}, v0, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ls,
      button: 0,
      buttons: 0,
      relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
      },
      movementX: function(t) {
        return "movementX" in t ? t.movementX : (t !== g0 && (g0 && t.type === "mousemove" ? (n1 = t.screenX - g0.screenX, u1 = t.screenY - g0.screenY) : u1 = n1 = 0, g0 = t), n1);
      },
      movementY: function(t) {
        return "movementY" in t ? t.movementY : u1;
      }
    }), vS = ml(Qv), L2 = Ot({}, Qv, { dataTransfer: 0 }), w2 = ml(L2), J2 = Ot({}, v0, { relatedTarget: 0 }), c1 = ml(J2), K2 = Ot({}, dr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), $2 = ml(K2), W2 = Ot({}, dr, {
      clipboardData: function(t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      }
    }), k2 = ml(W2), F2 = Ot({}, dr, { data: 0 }), gS = ml(
      F2
    ), I2 = gS, P2 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, tT = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, eT = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, lT = Ot({}, v0, {
      key: function(t) {
        if (t.key) {
          var e = P2[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress" ? (t = es(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? tT[t.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ls,
      charCode: function(t) {
        return t.type === "keypress" ? es(t) : 0;
      },
      keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function(t) {
        return t.type === "keypress" ? es(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      }
    }), aT = ml(lT), nT = Ot({}, Qv, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), SS = ml(nT), uT = Ot({}, v0, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ls
    }), cT = ml(uT), iT = Ot({}, dr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), oT = ml(iT), fT = Ot({}, Qv, {
      deltaX: function(t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function(t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), sT = ml(fT), rT = Ot({}, dr, {
      newState: 0,
      oldState: 0
    }), dT = ml(rT), hT = [9, 13, 27, 32], bS = 229, i1 = Wc && "CompositionEvent" in window, S0 = null;
    Wc && "documentMode" in document && (S0 = document.documentMode);
    var mT = Wc && "TextEvent" in window && !S0, TS = Wc && (!i1 || S0 && 8 < S0 && 11 >= S0), ES = 32, AS = String.fromCharCode(ES), zS = !1, _h = !1, yT = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    }, b0 = null, T0 = null, DS = !1;
    Wc && (DS = Ir("input") && (!document.documentMode || 9 < document.documentMode));
    var Va = typeof Object.is == "function" ? Object.is : Pr, pT = Wc && "documentMode" in document && 11 >= document.documentMode, Hh = null, o1 = null, E0 = null, f1 = !1, Bh = {
      animationend: si("Animation", "AnimationEnd"),
      animationiteration: si("Animation", "AnimationIteration"),
      animationstart: si("Animation", "AnimationStart"),
      transitionrun: si("Transition", "TransitionRun"),
      transitionstart: si("Transition", "TransitionStart"),
      transitioncancel: si("Transition", "TransitionCancel"),
      transitionend: si("Transition", "TransitionEnd")
    }, s1 = {}, OS = {};
    Wc && (OS = document.createElement("div").style, "AnimationEvent" in window || (delete Bh.animationend.animation, delete Bh.animationiteration.animation, delete Bh.animationstart.animation), "TransitionEvent" in window || delete Bh.transitionend.transition);
    var MS = ri("animationend"), RS = ri("animationiteration"), US = ri("animationstart"), vT = ri("transitionrun"), gT = ri("transitionstart"), ST = ri("transitioncancel"), CS = ri("transitionend"), _S = /* @__PURE__ */ new Map(), r1 = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    r1.push("scrollEnd");
    var HS = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var bT = performance, BS = function() {
        return bT.now();
      };
    else {
      var TT = Date;
      BS = function() {
        return TT.now();
      };
    }
    var d1 = typeof reportError == "function" ? reportError : function(t) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var e = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
          error: t
        });
        if (!window.dispatchEvent(e)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", t);
        return;
      }
      console.error(t);
    }, ET = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", Vv = 0, h1 = 1, m1 = 2, y1 = 3, Zv = "– ", Lv = "+ ", NS = "  ", Ue = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", Au = "Components ⚛", Gt = "Scheduler ⚛", Vt = "Blocking", zf = !1, ki = {
      color: "primary",
      properties: null,
      tooltipText: "",
      track: Au
    }, Df = {
      start: -0,
      end: -0,
      detail: { devtools: ki }
    }, AT = ["Changed Props", ""], xS = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", zT = ["Changed Props", xS], A0 = 1, Fi = 2, zu = [], Nh = 0, p1 = 0, Of = {};
    Object.freeze(Of);
    var Du = null, xh = null, mt = 0, DT = 1, Mt = 2, ba = 8, cc = 16, OT = 32, qS = !1;
    try {
      var YS = Object.preventExtensions({});
    } catch {
      qS = !0;
    }
    var v1 = /* @__PURE__ */ new WeakMap(), qh = [], Yh = 0, wv = null, z0 = 0, Ou = [], Mu = 0, hr = null, Ii = 1, Pi = "", sa = null, Ce = null, jt = !1, kc = !1, Gn = null, Mf = null, Ru = !1, g1 = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), S1 = Ft(null), b1 = Ft(null), jS = {}, Jv = null, jh = null, Gh = !1, MT = typeof AbortController < "u" ? AbortController : function() {
      var t = [], e = this.signal = {
        aborted: !1,
        addEventListener: function(a, c) {
          t.push(c);
        }
      };
      this.abort = function() {
        e.aborted = !0, t.forEach(function(a) {
          return a();
        });
      };
    }, RT = Fe.unstable_scheduleCallback, UT = Fe.unstable_NormalPriority, El = {
      $$typeof: qn,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Al = Fe.unstable_now, Kv = console.createTask ? console.createTask : function() {
      return null;
    }, D0 = 1, $v = 2, Vl = -0, Rf = -0, to = -0, eo = null, Za = -1.1, mr = -0, Le = -0, it = -1.1, rt = -1.1, qe = null, Ie = !1, yr = -0, Fc = -1.1, O0 = null, Uf = 0, T1 = null, E1 = null, pr = -1.1, M0 = null, Xh = -1.1, Wv = -1.1, lo = -0, ao = -1.1, Uu = -1.1, A1 = 0, R0 = null, GS = null, XS = null, Cf = -1.1, vr = null, _f = -1.1, kv = -1.1, QS = -0, VS = -0, Fv = 0, CT = null, ZS = 0, U0 = -1.1, Iv = !1, Pv = !1, C0 = null, z1 = 0, gr = 0, Qh = null, LS = N.S;
    N.S = function(t, e) {
      if (Gb = Tl(), typeof e == "object" && e !== null && typeof e.then == "function") {
        if (0 > ao && 0 > Uu) {
          ao = Al();
          var a = af(), c = vu();
          (a !== _f || c !== vr) && (_f = -1.1), Cf = a, vr = c;
        }
        Vu(t, e);
      }
      LS !== null && LS(t, e);
    };
    var Sr = Ft(null), ic = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, _0 = [], H0 = [], B0 = [], N0 = [], x0 = [], q0 = [], br = /* @__PURE__ */ new Set();
    ic.recordUnsafeLifecycleWarnings = function(t, e) {
      br.has(t.type) || (typeof e.componentWillMount == "function" && e.componentWillMount.__suppressDeprecationWarning !== !0 && _0.push(t), t.mode & ba && typeof e.UNSAFE_componentWillMount == "function" && H0.push(t), typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && B0.push(t), t.mode & ba && typeof e.UNSAFE_componentWillReceiveProps == "function" && N0.push(t), typeof e.componentWillUpdate == "function" && e.componentWillUpdate.__suppressDeprecationWarning !== !0 && x0.push(t), t.mode & ba && typeof e.UNSAFE_componentWillUpdate == "function" && q0.push(t));
    }, ic.flushPendingUnsafeLifecycleWarnings = function() {
      var t = /* @__PURE__ */ new Set();
      0 < _0.length && (_0.forEach(function(h) {
        t.add(
          W(h) || "Component"
        ), br.add(h.type);
      }), _0 = []);
      var e = /* @__PURE__ */ new Set();
      0 < H0.length && (H0.forEach(function(h) {
        e.add(
          W(h) || "Component"
        ), br.add(h.type);
      }), H0 = []);
      var a = /* @__PURE__ */ new Set();
      0 < B0.length && (B0.forEach(function(h) {
        a.add(
          W(h) || "Component"
        ), br.add(h.type);
      }), B0 = []);
      var c = /* @__PURE__ */ new Set();
      0 < N0.length && (N0.forEach(
        function(h) {
          c.add(
            W(h) || "Component"
          ), br.add(h.type);
        }
      ), N0 = []);
      var o = /* @__PURE__ */ new Set();
      0 < x0.length && (x0.forEach(function(h) {
        o.add(
          W(h) || "Component"
        ), br.add(h.type);
      }), x0 = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < q0.length && (q0.forEach(function(h) {
        f.add(
          W(h) || "Component"
        ), br.add(h.type);
      }), q0 = []), 0 < e.size) {
        var d = ft(
          e
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < c.size && (d = ft(
        c
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = ft(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < t.size && (d = ft(t), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = ft(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = ft(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var tg = /* @__PURE__ */ new Map(), wS = /* @__PURE__ */ new Set();
    ic.recordLegacyContextWarning = function(t, e) {
      for (var a = null, c = t; c !== null; )
        c.mode & ba && (a = c), c = c.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !wS.has(t.type) && (c = tg.get(a), t.type.contextTypes != null || t.type.childContextTypes != null || e !== null && typeof e.getChildContext == "function") && (c === void 0 && (c = [], tg.set(a, c)), c.push(t));
    }, ic.flushLegacyContextWarning = function() {
      tg.forEach(function(t) {
        if (t.length !== 0) {
          var e = t[0], a = /* @__PURE__ */ new Set();
          t.forEach(function(o) {
            a.add(W(o) || "Component"), wS.add(o.type);
          });
          var c = ft(a);
          k(e, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              c
            );
          });
        }
      });
    }, ic.discardPendingWarnings = function() {
      _0 = [], H0 = [], B0 = [], N0 = [], x0 = [], q0 = [], tg = /* @__PURE__ */ new Map();
    };
    var JS = {
      react_stack_bottom_frame: function(t, e, a) {
        var c = Su;
        Su = !0;
        try {
          return t(e, a);
        } finally {
          Su = c;
        }
      }
    }, D1 = JS.react_stack_bottom_frame.bind(JS), KS = {
      react_stack_bottom_frame: function(t) {
        var e = Su;
        Su = !0;
        try {
          return t.render();
        } finally {
          Su = e;
        }
      }
    }, $S = KS.react_stack_bottom_frame.bind(KS), WS = {
      react_stack_bottom_frame: function(t, e) {
        try {
          e.componentDidMount();
        } catch (a) {
          At(t, t.return, a);
        }
      }
    }, O1 = WS.react_stack_bottom_frame.bind(
      WS
    ), kS = {
      react_stack_bottom_frame: function(t, e, a, c, o) {
        try {
          e.componentDidUpdate(a, c, o);
        } catch (f) {
          At(t, t.return, f);
        }
      }
    }, FS = kS.react_stack_bottom_frame.bind(
      kS
    ), IS = {
      react_stack_bottom_frame: function(t, e) {
        var a = e.stack;
        t.componentDidCatch(e.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, _T = IS.react_stack_bottom_frame.bind(
      IS
    ), PS = {
      react_stack_bottom_frame: function(t, e, a) {
        try {
          a.componentWillUnmount();
        } catch (c) {
          At(t, e, c);
        }
      }
    }, tb = PS.react_stack_bottom_frame.bind(
      PS
    ), eb = {
      react_stack_bottom_frame: function(t) {
        var e = t.create;
        return t = t.inst, e = e(), t.destroy = e;
      }
    }, HT = eb.react_stack_bottom_frame.bind(eb), lb = {
      react_stack_bottom_frame: function(t, e, a) {
        try {
          a();
        } catch (c) {
          At(t, e, c);
        }
      }
    }, BT = lb.react_stack_bottom_frame.bind(lb), ab = {
      react_stack_bottom_frame: function(t) {
        var e = t._init;
        return e(t._payload);
      }
    }, NT = ab.react_stack_bottom_frame.bind(ab), Vh = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), M1 = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), eg = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), lg = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Tr = null, Y0 = !1, Zh = null, j0 = 0, Rt = null, R1, nb = R1 = !1, ub = {}, cb = {}, ib = {};
    Ta = function(t, e, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var c = W(t), o = c || "null";
        if (!ub[o]) {
          ub[o] = !0, a = a._owner, t = t._debugOwner;
          var f = "";
          t && typeof t.tag == "number" && (o = W(t)) && (f = `

Check the render method of \`` + o + "`."), f || c && (f = `

Check the top-level render call using <` + c + ">.");
          var d = "";
          a != null && t !== a && (c = null, typeof a.tag == "number" ? c = W(a) : typeof a.name == "string" && (c = a.name), c && (d = " It was passed a child from " + c + ".")), k(e, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var Er = pl(!0), ob = pl(!1), fb = 0, sb = 1, rb = 2, U1 = 3, Hf = !1, db = !1, C1 = null, _1 = !1, Lh = Ft(null), ag = Ft(0), Xn = Ft(null), Cu = null, wh = 1, G0 = 2, fl = Ft(0), ng = 0, _u = 1, La = 2, Qn = 4, wa = 8, Jh, hb = /* @__PURE__ */ new Set(), mb = /* @__PURE__ */ new Set(), H1 = /* @__PURE__ */ new Set(), yb = /* @__PURE__ */ new Set(), no = 0, vt = null, ge = null, zl = null, ug = !1, Kh = !1, Ar = !1, cg = 0, X0 = 0, uo = null, xT = 0, qT = 25, H = null, Hu = null, co = -1, Q0 = !1, V0 = {
      readContext: $t,
      use: Ju,
      useCallback: Ve,
      useContext: Ve,
      useEffect: Ve,
      useImperativeHandle: Ve,
      useLayoutEffect: Ve,
      useInsertionEffect: Ve,
      useMemo: Ve,
      useReducer: Ve,
      useRef: Ve,
      useState: Ve,
      useDebugValue: Ve,
      useDeferredValue: Ve,
      useTransition: Ve,
      useSyncExternalStore: Ve,
      useId: Ve,
      useHostTransitionStatus: Ve,
      useFormState: Ve,
      useActionState: Ve,
      useOptimistic: Ve,
      useMemoCache: Ve,
      useCacheRefresh: Ve
    };
    V0.useEffectEvent = Ve;
    var B1 = null, pb = null, N1 = null, vb = null, Ic = null, oc = null, ig = null;
    B1 = {
      readContext: function(t) {
        return $t(t);
      },
      use: Ju,
      useCallback: function(t, e) {
        return H = "useCallback", pt(), wu(e), bd(t, e);
      },
      useContext: function(t) {
        return H = "useContext", pt(), $t(t);
      },
      useEffect: function(t, e) {
        return H = "useEffect", pt(), wu(e), Ri(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return H = "useImperativeHandle", pt(), wu(a), uu(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        H = "useInsertionEffect", pt(), wu(e), Bc(4, La, t, e);
      },
      useLayoutEffect: function(t, e) {
        return H = "useLayoutEffect", pt(), wu(e), ta(t, e);
      },
      useMemo: function(t, e) {
        H = "useMemo", pt(), wu(e);
        var a = N.H;
        N.H = Ic;
        try {
          return ea(t, e);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(t, e, a) {
        H = "useReducer", pt();
        var c = N.H;
        N.H = Ic;
        try {
          return Bo(t, e, a);
        } finally {
          N.H = c;
        }
      },
      useRef: function(t) {
        return H = "useRef", pt(), Sd(t);
      },
      useState: function(t) {
        H = "useState", pt();
        var e = N.H;
        N.H = Ic;
        try {
          return Uc(t);
        } finally {
          N.H = e;
        }
      },
      useDebugValue: function() {
        H = "useDebugValue", pt();
      },
      useDeferredValue: function(t, e) {
        return H = "useDeferredValue", pt(), jo(t, e);
      },
      useTransition: function() {
        return H = "useTransition", pt(), Nc();
      },
      useSyncExternalStore: function(t, e, a) {
        return H = "useSyncExternalStore", pt(), No(
          t,
          e,
          a
        );
      },
      useId: function() {
        return H = "useId", pt(), Os();
      },
      useFormState: function(t, e) {
        return H = "useFormState", pt(), ys(), Ha(t, e);
      },
      useActionState: function(t, e) {
        return H = "useActionState", pt(), Ha(t, e);
      },
      useOptimistic: function(t) {
        return H = "useOptimistic", pt(), Mi(t);
      },
      useHostTransitionStatus: ku,
      useMemoCache: Ca,
      useCacheRefresh: function() {
        return H = "useCacheRefresh", pt(), Td();
      },
      useEffectEvent: function(t) {
        return H = "useEffectEvent", pt(), zs(t);
      }
    }, pb = {
      readContext: function(t) {
        return $t(t);
      },
      use: Ju,
      useCallback: function(t, e) {
        return H = "useCallback", V(), bd(t, e);
      },
      useContext: function(t) {
        return H = "useContext", V(), $t(t);
      },
      useEffect: function(t, e) {
        return H = "useEffect", V(), Ri(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return H = "useImperativeHandle", V(), uu(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        H = "useInsertionEffect", V(), Bc(4, La, t, e);
      },
      useLayoutEffect: function(t, e) {
        return H = "useLayoutEffect", V(), ta(t, e);
      },
      useMemo: function(t, e) {
        H = "useMemo", V();
        var a = N.H;
        N.H = Ic;
        try {
          return ea(t, e);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(t, e, a) {
        H = "useReducer", V();
        var c = N.H;
        N.H = Ic;
        try {
          return Bo(t, e, a);
        } finally {
          N.H = c;
        }
      },
      useRef: function(t) {
        return H = "useRef", V(), Sd(t);
      },
      useState: function(t) {
        H = "useState", V();
        var e = N.H;
        N.H = Ic;
        try {
          return Uc(t);
        } finally {
          N.H = e;
        }
      },
      useDebugValue: function() {
        H = "useDebugValue", V();
      },
      useDeferredValue: function(t, e) {
        return H = "useDeferredValue", V(), jo(t, e);
      },
      useTransition: function() {
        return H = "useTransition", V(), Nc();
      },
      useSyncExternalStore: function(t, e, a) {
        return H = "useSyncExternalStore", V(), No(
          t,
          e,
          a
        );
      },
      useId: function() {
        return H = "useId", V(), Os();
      },
      useActionState: function(t, e) {
        return H = "useActionState", V(), Ha(t, e);
      },
      useFormState: function(t, e) {
        return H = "useFormState", V(), ys(), Ha(t, e);
      },
      useOptimistic: function(t) {
        return H = "useOptimistic", V(), Mi(t);
      },
      useHostTransitionStatus: ku,
      useMemoCache: Ca,
      useCacheRefresh: function() {
        return H = "useCacheRefresh", V(), Td();
      },
      useEffectEvent: function(t) {
        return H = "useEffectEvent", V(), zs(t);
      }
    }, N1 = {
      readContext: function(t) {
        return $t(t);
      },
      use: Ju,
      useCallback: function(t, e) {
        return H = "useCallback", V(), Mn(t, e);
      },
      useContext: function(t) {
        return H = "useContext", V(), $t(t);
      },
      useEffect: function(t, e) {
        H = "useEffect", V(), ul(2048, wa, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return H = "useImperativeHandle", V(), Yo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return H = "useInsertionEffect", V(), ul(4, La, t, e);
      },
      useLayoutEffect: function(t, e) {
        return H = "useLayoutEffect", V(), ul(4, Qn, t, e);
      },
      useMemo: function(t, e) {
        H = "useMemo", V();
        var a = N.H;
        N.H = oc;
        try {
          return Oe(t, e);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(t, e, a) {
        H = "useReducer", V();
        var c = N.H;
        N.H = oc;
        try {
          return zi(t, e, a);
        } finally {
          N.H = c;
        }
      },
      useRef: function() {
        return H = "useRef", V(), Pt().memoizedState;
      },
      useState: function() {
        H = "useState", V();
        var t = N.H;
        N.H = oc;
        try {
          return zi(_a);
        } finally {
          N.H = t;
        }
      },
      useDebugValue: function() {
        H = "useDebugValue", V();
      },
      useDeferredValue: function(t, e) {
        return H = "useDeferredValue", V(), cu(t, e);
      },
      useTransition: function() {
        return H = "useTransition", V(), qp();
      },
      useSyncExternalStore: function(t, e, a) {
        return H = "useSyncExternalStore", V(), Oi(
          t,
          e,
          a
        );
      },
      useId: function() {
        return H = "useId", V(), Pt().memoizedState;
      },
      useFormState: function(t) {
        return H = "useFormState", V(), ys(), _c(t);
      },
      useActionState: function(t) {
        return H = "useActionState", V(), _c(t);
      },
      useOptimistic: function(t, e) {
        return H = "useOptimistic", V(), Ts(t, e);
      },
      useHostTransitionStatus: ku,
      useMemoCache: Ca,
      useCacheRefresh: function() {
        return H = "useCacheRefresh", V(), Pt().memoizedState;
      },
      useEffectEvent: function(t) {
        return H = "useEffectEvent", V(), qo(t);
      }
    }, vb = {
      readContext: function(t) {
        return $t(t);
      },
      use: Ju,
      useCallback: function(t, e) {
        return H = "useCallback", V(), Mn(t, e);
      },
      useContext: function(t) {
        return H = "useContext", V(), $t(t);
      },
      useEffect: function(t, e) {
        H = "useEffect", V(), ul(2048, wa, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return H = "useImperativeHandle", V(), Yo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return H = "useInsertionEffect", V(), ul(4, La, t, e);
      },
      useLayoutEffect: function(t, e) {
        return H = "useLayoutEffect", V(), ul(4, Qn, t, e);
      },
      useMemo: function(t, e) {
        H = "useMemo", V();
        var a = N.H;
        N.H = ig;
        try {
          return Oe(t, e);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(t, e, a) {
        H = "useReducer", V();
        var c = N.H;
        N.H = ig;
        try {
          return Di(t, e, a);
        } finally {
          N.H = c;
        }
      },
      useRef: function() {
        return H = "useRef", V(), Pt().memoizedState;
      },
      useState: function() {
        H = "useState", V();
        var t = N.H;
        N.H = ig;
        try {
          return Di(_a);
        } finally {
          N.H = t;
        }
      },
      useDebugValue: function() {
        H = "useDebugValue", V();
      },
      useDeferredValue: function(t, e) {
        return H = "useDeferredValue", V(), Tt(t, e);
      },
      useTransition: function() {
        return H = "useTransition", V(), Be();
      },
      useSyncExternalStore: function(t, e, a) {
        return H = "useSyncExternalStore", V(), Oi(
          t,
          e,
          a
        );
      },
      useId: function() {
        return H = "useId", V(), Pt().memoizedState;
      },
      useFormState: function(t) {
        return H = "useFormState", V(), ys(), Hc(t);
      },
      useActionState: function(t) {
        return H = "useActionState", V(), Hc(t);
      },
      useOptimistic: function(t, e) {
        return H = "useOptimistic", V(), Es(t, e);
      },
      useHostTransitionStatus: ku,
      useMemoCache: Ca,
      useCacheRefresh: function() {
        return H = "useCacheRefresh", V(), Pt().memoizedState;
      },
      useEffectEvent: function(t) {
        return H = "useEffectEvent", V(), qo(t);
      }
    }, Ic = {
      readContext: function(t) {
        return je(), $t(t);
      },
      use: function(t) {
        return J(), Ju(t);
      },
      useCallback: function(t, e) {
        return H = "useCallback", J(), pt(), bd(t, e);
      },
      useContext: function(t) {
        return H = "useContext", J(), pt(), $t(t);
      },
      useEffect: function(t, e) {
        return H = "useEffect", J(), pt(), Ri(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return H = "useImperativeHandle", J(), pt(), uu(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        H = "useInsertionEffect", J(), pt(), Bc(4, La, t, e);
      },
      useLayoutEffect: function(t, e) {
        return H = "useLayoutEffect", J(), pt(), ta(t, e);
      },
      useMemo: function(t, e) {
        H = "useMemo", J(), pt();
        var a = N.H;
        N.H = Ic;
        try {
          return ea(t, e);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(t, e, a) {
        H = "useReducer", J(), pt();
        var c = N.H;
        N.H = Ic;
        try {
          return Bo(t, e, a);
        } finally {
          N.H = c;
        }
      },
      useRef: function(t) {
        return H = "useRef", J(), pt(), Sd(t);
      },
      useState: function(t) {
        H = "useState", J(), pt();
        var e = N.H;
        N.H = Ic;
        try {
          return Uc(t);
        } finally {
          N.H = e;
        }
      },
      useDebugValue: function() {
        H = "useDebugValue", J(), pt();
      },
      useDeferredValue: function(t, e) {
        return H = "useDeferredValue", J(), pt(), jo(t, e);
      },
      useTransition: function() {
        return H = "useTransition", J(), pt(), Nc();
      },
      useSyncExternalStore: function(t, e, a) {
        return H = "useSyncExternalStore", J(), pt(), No(
          t,
          e,
          a
        );
      },
      useId: function() {
        return H = "useId", J(), pt(), Os();
      },
      useFormState: function(t, e) {
        return H = "useFormState", J(), pt(), Ha(t, e);
      },
      useActionState: function(t, e) {
        return H = "useActionState", J(), pt(), Ha(t, e);
      },
      useOptimistic: function(t) {
        return H = "useOptimistic", J(), pt(), Mi(t);
      },
      useMemoCache: function(t) {
        return J(), Ca(t);
      },
      useHostTransitionStatus: ku,
      useCacheRefresh: function() {
        return H = "useCacheRefresh", pt(), Td();
      },
      useEffectEvent: function(t) {
        return H = "useEffectEvent", J(), pt(), zs(t);
      }
    }, oc = {
      readContext: function(t) {
        return je(), $t(t);
      },
      use: function(t) {
        return J(), Ju(t);
      },
      useCallback: function(t, e) {
        return H = "useCallback", J(), V(), Mn(t, e);
      },
      useContext: function(t) {
        return H = "useContext", J(), V(), $t(t);
      },
      useEffect: function(t, e) {
        H = "useEffect", J(), V(), ul(2048, wa, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return H = "useImperativeHandle", J(), V(), Yo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return H = "useInsertionEffect", J(), V(), ul(4, La, t, e);
      },
      useLayoutEffect: function(t, e) {
        return H = "useLayoutEffect", J(), V(), ul(4, Qn, t, e);
      },
      useMemo: function(t, e) {
        H = "useMemo", J(), V();
        var a = N.H;
        N.H = oc;
        try {
          return Oe(t, e);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(t, e, a) {
        H = "useReducer", J(), V();
        var c = N.H;
        N.H = oc;
        try {
          return zi(t, e, a);
        } finally {
          N.H = c;
        }
      },
      useRef: function() {
        return H = "useRef", J(), V(), Pt().memoizedState;
      },
      useState: function() {
        H = "useState", J(), V();
        var t = N.H;
        N.H = oc;
        try {
          return zi(_a);
        } finally {
          N.H = t;
        }
      },
      useDebugValue: function() {
        H = "useDebugValue", J(), V();
      },
      useDeferredValue: function(t, e) {
        return H = "useDeferredValue", J(), V(), cu(t, e);
      },
      useTransition: function() {
        return H = "useTransition", J(), V(), qp();
      },
      useSyncExternalStore: function(t, e, a) {
        return H = "useSyncExternalStore", J(), V(), Oi(
          t,
          e,
          a
        );
      },
      useId: function() {
        return H = "useId", J(), V(), Pt().memoizedState;
      },
      useFormState: function(t) {
        return H = "useFormState", J(), V(), _c(t);
      },
      useActionState: function(t) {
        return H = "useActionState", J(), V(), _c(t);
      },
      useOptimistic: function(t, e) {
        return H = "useOptimistic", J(), V(), Ts(t, e);
      },
      useMemoCache: function(t) {
        return J(), Ca(t);
      },
      useHostTransitionStatus: ku,
      useCacheRefresh: function() {
        return H = "useCacheRefresh", V(), Pt().memoizedState;
      },
      useEffectEvent: function(t) {
        return H = "useEffectEvent", J(), V(), qo(t);
      }
    }, ig = {
      readContext: function(t) {
        return je(), $t(t);
      },
      use: function(t) {
        return J(), Ju(t);
      },
      useCallback: function(t, e) {
        return H = "useCallback", J(), V(), Mn(t, e);
      },
      useContext: function(t) {
        return H = "useContext", J(), V(), $t(t);
      },
      useEffect: function(t, e) {
        H = "useEffect", J(), V(), ul(2048, wa, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return H = "useImperativeHandle", J(), V(), Yo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return H = "useInsertionEffect", J(), V(), ul(4, La, t, e);
      },
      useLayoutEffect: function(t, e) {
        return H = "useLayoutEffect", J(), V(), ul(4, Qn, t, e);
      },
      useMemo: function(t, e) {
        H = "useMemo", J(), V();
        var a = N.H;
        N.H = oc;
        try {
          return Oe(t, e);
        } finally {
          N.H = a;
        }
      },
      useReducer: function(t, e, a) {
        H = "useReducer", J(), V();
        var c = N.H;
        N.H = oc;
        try {
          return Di(t, e, a);
        } finally {
          N.H = c;
        }
      },
      useRef: function() {
        return H = "useRef", J(), V(), Pt().memoizedState;
      },
      useState: function() {
        H = "useState", J(), V();
        var t = N.H;
        N.H = oc;
        try {
          return Di(_a);
        } finally {
          N.H = t;
        }
      },
      useDebugValue: function() {
        H = "useDebugValue", J(), V();
      },
      useDeferredValue: function(t, e) {
        return H = "useDeferredValue", J(), V(), Tt(t, e);
      },
      useTransition: function() {
        return H = "useTransition", J(), V(), Be();
      },
      useSyncExternalStore: function(t, e, a) {
        return H = "useSyncExternalStore", J(), V(), Oi(
          t,
          e,
          a
        );
      },
      useId: function() {
        return H = "useId", J(), V(), Pt().memoizedState;
      },
      useFormState: function(t) {
        return H = "useFormState", J(), V(), Hc(t);
      },
      useActionState: function(t) {
        return H = "useActionState", J(), V(), Hc(t);
      },
      useOptimistic: function(t, e) {
        return H = "useOptimistic", J(), V(), Es(t, e);
      },
      useMemoCache: function(t) {
        return J(), Ca(t);
      },
      useHostTransitionStatus: ku,
      useCacheRefresh: function() {
        return H = "useCacheRefresh", V(), Pt().memoizedState;
      },
      useEffectEvent: function(t) {
        return H = "useEffectEvent", J(), V(), qo(t);
      }
    };
    var gb = {}, Sb = /* @__PURE__ */ new Set(), bb = /* @__PURE__ */ new Set(), Tb = /* @__PURE__ */ new Set(), Eb = /* @__PURE__ */ new Set(), Ab = /* @__PURE__ */ new Set(), zb = /* @__PURE__ */ new Set(), Db = /* @__PURE__ */ new Set(), Ob = /* @__PURE__ */ new Set(), Mb = /* @__PURE__ */ new Set(), Rb = /* @__PURE__ */ new Set();
    Object.freeze(gb);
    var x1 = {
      enqueueSetState: function(t, e, a) {
        t = t._reactInternals;
        var c = Gl(t), o = nl(c);
        o.payload = e, a != null && (Hi(a), o.callback = a), e = eu(t, o, c), e !== null && (In(c, "this.setState()", t), yt(e, t, c), an(e, t, c));
      },
      enqueueReplaceState: function(t, e, a) {
        t = t._reactInternals;
        var c = Gl(t), o = nl(c);
        o.tag = sb, o.payload = e, a != null && (Hi(a), o.callback = a), e = eu(t, o, c), e !== null && (In(c, "this.replaceState()", t), yt(e, t, c), an(e, t, c));
      },
      enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var a = Gl(t), c = nl(a);
        c.tag = rb, e != null && (Hi(e), c.callback = e), e = eu(t, c, a), e !== null && (In(a, "this.forceUpdate()", t), yt(e, t, a), an(e, t, a));
      }
    }, $h = null, q1 = null, Y1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Dl = !1, Ub = {}, Cb = {}, _b = {}, Hb = {}, Wh = !1, Bb = {}, og = {}, j1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, Nb = !1, xb = null;
    xb = /* @__PURE__ */ new Set();
    var io = !1, Ol = !1, G1 = !1, qb = typeof WeakSet == "function" ? WeakSet : Set, Zl = null, kh = null, Fh = null, Ml = null, sn = !1, fc = null, Nl = !1, Z0 = 8192, YT = {
      getCacheForType: function(t) {
        var e = $t(El), a = e.data.get(t);
        return a === void 0 && (a = t(), e.data.set(t, a)), a;
      },
      cacheSignal: function() {
        return $t(El).controller.signal;
      },
      getOwner: function() {
        return Sa;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var L0 = Symbol.for;
      L0("selector.component"), L0("selector.has_pseudo_class"), L0("selector.role"), L0("selector.test_id"), L0("selector.text");
    }
    var jT = [], GT = typeof WeakMap == "function" ? WeakMap : Map, Ll = 0, xl = 2, Vn = 4, oo = 0, w0 = 1, zr = 2, fg = 3, Bf = 4, sg = 6, Yb = 5, Lt = Ll, Se = null, Ht = null, Ut = 0, rn = 0, rg = 1, Dr = 2, J0 = 3, jb = 4, X1 = 5, K0 = 6, dg = 7, Q1 = 8, Or = 9, se = rn, Zn = null, Nf = !1, Ih = !1, V1 = !1, Pc = 0, we = oo, xf = 0, qf = 0, Z1 = 0, dn = 0, Mr = 0, $0 = null, Ja = null, hg = !1, mg = 0, Gb = 0, Xb = 300, yg = 1 / 0, Qb = 500, W0 = null, al = null, Yf = null, pg = 0, L1 = 1, w1 = 2, Vb = 3, jf = 0, Zb = 1, Lb = 2, wb = 3, Jb = 4, vg = 5, Rl = 0, Gf = null, Ph = null, sc = 0, J1 = 0, K1 = -0, $1 = null, Kb = null, $b = null, rc = pg, Wb = null, XT = 50, k0 = 0, W1 = null, k1 = !1, gg = !1, QT = 50, Rr = 0, F0 = null, tm = !1, Sg = null, kb = !1, Fb = /* @__PURE__ */ new Set(), VT = {}, bg = null, em = null, F1 = !1, I1 = !1, Tg = !1, P1 = !1, Xf = 0, tS = {};
    (function() {
      for (var t = 0; t < r1.length; t++) {
        var e = r1[t], a = e.toLowerCase();
        e = e[0].toUpperCase() + e.slice(1), vn(a, "on" + e);
      }
      vn(MS, "onAnimationEnd"), vn(RS, "onAnimationIteration"), vn(US, "onAnimationStart"), vn("dblclick", "onDoubleClick"), vn("focusin", "onFocus"), vn("focusout", "onBlur"), vn(vT, "onTransitionRun"), vn(gT, "onTransitionStart"), vn(ST, "onTransitionCancel"), vn(CS, "onTransitionEnd");
    })(), ho("onMouseEnter", ["mouseout", "mouseover"]), ho("onMouseLeave", ["mouseout", "mouseover"]), ho("onPointerEnter", ["pointerout", "pointerover"]), ho("onPointerLeave", ["pointerout", "pointerover"]), mn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), mn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), mn("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), mn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), mn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), mn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var I0 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), eS = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(I0)
    ), Eg = "_reactListening" + Math.random().toString(36).slice(2), Ib = !1, Pb = !1, Ag = !1, t2 = !1, zg = !1, Dg = !1, e2 = !1, Og = {}, ZT = /\r\n?/g, LT = /\u0000|\uFFFD/g, Ur = "http://www.w3.org/1999/xlink", lS = "http://www.w3.org/XML/1998/namespace", wT = "javascript:throw new Error('React form unexpectedly submitted.')", JT = "suppressHydrationWarning", Cr = "&", Mg = "/&", P0 = "$", tp = "/$", Qf = "$?", _r = "$~", lm = "$!", KT = "html", $T = "body", WT = "head", aS = "F!", l2 = "F", a2 = "loading", kT = "style", fo = 0, am = 1, Rg = 2, nS = null, uS = null, n2 = { dialog: !0, webview: !0 }, cS = null, ep = void 0, u2 = typeof setTimeout == "function" ? setTimeout : void 0, FT = typeof clearTimeout == "function" ? clearTimeout : void 0, Hr = -1, c2 = typeof Promise == "function" ? Promise : void 0, IT = typeof queueMicrotask == "function" ? queueMicrotask : typeof c2 < "u" ? function(t) {
      return c2.resolve(null).then(t).catch(nv);
    } : u2, iS = null, Br = 0, lp = 1, i2 = 2, o2 = 3, Bu = 4, Nu = /* @__PURE__ */ new Map(), f2 = /* @__PURE__ */ new Set(), so = kt.d;
    kt.d = {
      f: function() {
        var t = so.f(), e = Ya();
        return t || e;
      },
      r: function(t) {
        var e = hn(t);
        e !== null && e.tag === 5 && e.type === "form" ? Go(e) : so.r(t);
      },
      D: function(t) {
        so.D(t), Zy("dns-prefetch", t, null);
      },
      C: function(t, e) {
        so.C(t, e), Zy("preconnect", t, e);
      },
      L: function(t, e, a) {
        so.L(t, e, a);
        var c = nm;
        if (c && t && e) {
          var o = 'link[rel="preload"][as="' + ue(e) + '"]';
          e === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + ue(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + ue(
            a.imageSizes
          ) + '"]')) : o += '[href="' + ue(t) + '"]';
          var f = o;
          switch (e) {
            case "style":
              f = Vi(t);
              break;
            case "script":
              f = Zi(t);
          }
          Nu.has(f) || (t = Ot(
            {
              rel: "preload",
              href: e === "image" && a && a.imageSrcSet ? void 0 : t,
              as: e
            },
            a
          ), Nu.set(f, t), c.querySelector(o) !== null || e === "style" && c.querySelector(
            Is(f)
          ) || e === "script" && c.querySelector(Ps(f)) || (e = c.createElement("link"), Me(e, "link", t), Je(e), c.head.appendChild(e)));
        }
      },
      m: function(t, e) {
        so.m(t, e);
        var a = nm;
        if (a && t) {
          var c = e && typeof e.as == "string" ? e.as : "script", o = 'link[rel="modulepreload"][as="' + ue(c) + '"][href="' + ue(t) + '"]', f = o;
          switch (c) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = Zi(t);
          }
          if (!Nu.has(f) && (t = Ot({ rel: "modulepreload", href: t }, e), Nu.set(f, t), a.querySelector(o) === null)) {
            switch (c) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(Ps(f)))
                  return;
            }
            c = a.createElement("link"), Me(c, "link", t), Je(c), a.head.appendChild(c);
          }
        }
      },
      X: function(t, e) {
        so.X(t, e);
        var a = nm;
        if (a && t) {
          var c = Wa(a).hoistableScripts, o = Zi(t), f = c.get(o);
          f || (f = a.querySelector(
            Ps(o)
          ), f || (t = Ot({ src: t, async: !0 }, e), (e = Nu.get(o)) && Jy(t, e), f = a.createElement("script"), Je(f), Me(f, "link", t), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, c.set(o, f));
        }
      },
      S: function(t, e, a) {
        so.S(t, e, a);
        var c = nm;
        if (c && t) {
          var o = Wa(c).hoistableStyles, f = Vi(t);
          e = e || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: Br, preload: null };
            if (d = c.querySelector(
              Is(f)
            ))
              h.loading = lp | Bu;
            else {
              t = Ot(
                {
                  rel: "stylesheet",
                  href: t,
                  "data-precedence": e
                },
                a
              ), (a = Nu.get(f)) && wy(t, a);
              var y = d = c.createElement("link");
              Je(y), Me(y, "link", t), y._p = new Promise(function(p, A) {
                y.onload = p, y.onerror = A;
              }), y.addEventListener("load", function() {
                h.loading |= lp;
              }), y.addEventListener("error", function() {
                h.loading |= i2;
              }), h.loading |= Bu, cf(d, e, c);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(t, e) {
        so.M(t, e);
        var a = nm;
        if (a && t) {
          var c = Wa(a).hoistableScripts, o = Zi(t), f = c.get(o);
          f || (f = a.querySelector(
            Ps(o)
          ), f || (t = Ot({ src: t, async: !0, type: "module" }, e), (e = Nu.get(o)) && Jy(t, e), f = a.createElement("script"), Je(f), Me(f, "link", t), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, c.set(o, f));
        }
      }
    };
    var nm = typeof document > "u" ? null : document, Ug = null, PT = 6e4, tE = 800, eE = 500, oS = 0, fS = null, Cg = null, Nr = Pg, ap = {
      $$typeof: qn,
      Provider: null,
      Consumer: null,
      _currentValue: Nr,
      _currentValue2: Nr,
      _threadCount: 0
    }, s2 = "%c%s%c", r2 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", d2 = "", _g = " ", lE = Function.prototype.bind, h2 = !1, m2 = null, y2 = null, p2 = null, v2 = null, g2 = null, S2 = null, b2 = null, T2 = null, E2 = null, A2 = null;
    m2 = function(t, e, a, c) {
      e = L(t, e), e !== null && (a = ze(e.memoizedState, a, 0, c), e.memoizedState = a, e.baseState = a, t.memoizedProps = Ot({}, t.memoizedProps), a = Yl(t, 2), a !== null && yt(a, t, 2));
    }, y2 = function(t, e, a) {
      e = L(t, e), e !== null && (a = ae(e.memoizedState, a, 0), e.memoizedState = a, e.baseState = a, t.memoizedProps = Ot({}, t.memoizedProps), a = Yl(t, 2), a !== null && yt(a, t, 2));
    }, p2 = function(t, e, a, c) {
      e = L(t, e), e !== null && (a = Nt(e.memoizedState, a, c), e.memoizedState = a, e.baseState = a, t.memoizedProps = Ot({}, t.memoizedProps), a = Yl(t, 2), a !== null && yt(a, t, 2));
    }, v2 = function(t, e, a) {
      t.pendingProps = ze(t.memoizedProps, e, 0, a), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = Yl(t, 2), e !== null && yt(e, t, 2);
    }, g2 = function(t, e) {
      t.pendingProps = ae(t.memoizedProps, e, 0), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = Yl(t, 2), e !== null && yt(e, t, 2);
    }, S2 = function(t, e, a) {
      t.pendingProps = Nt(
        t.memoizedProps,
        e,
        a
      ), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = Yl(t, 2), e !== null && yt(e, t, 2);
    }, b2 = function(t) {
      var e = Yl(t, 2);
      e !== null && yt(e, t, 2);
    }, T2 = function(t) {
      var e = Yr(), a = Yl(t, e);
      a !== null && yt(a, t, e);
    }, E2 = function(t) {
      Ye = t;
    }, A2 = function(t) {
      he = t;
    };
    var Hg = !0, Bg = null, sS = !1, Vf = null, Zf = null, Lf = null, np = /* @__PURE__ */ new Map(), up = /* @__PURE__ */ new Map(), wf = [], aE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Ng = null;
    if (xn.prototype.render = l0.prototype.render = function(t) {
      var e = this._internalRoot;
      if (e === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : de(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = t;
      var c = e.current, o = Gl(c);
      rh(c, o, a, e, null, null);
    }, xn.prototype.unmount = l0.prototype.unmount = function() {
      var t = arguments;
      if (typeof t[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), t = this._internalRoot, t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        (Lt & (xl | Vn)) !== Ll && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), rh(t.current, 2, null, t, null, null), Ya(), e[uc] = null;
      }
    }, xn.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
        var e = dp();
        t = { blockedOn: null, target: t, priority: e };
        for (var a = 0; a < wf.length && e !== 0 && e < wf[a].priority; a++) ;
        wf.splice(a, 0, t), a === 0 && e0(t);
      }
    }, (function() {
      var t = nr.version;
      if (t !== "19.2.0")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (t + `
  - react-dom:  19.2.0
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), kt.findDOMNode = function(t) {
      var e = t._reactInternals;
      if (e === void 0)
        throw typeof t.render == "function" ? Error("Unable to find node on an unmounted component.") : (t = Object.keys(t).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + t
        ));
      return t = Jl(e), t = t !== null ? dl(t) : null, t = t === null ? null : t.stateNode, t;
    }, !(function() {
      var t = {
        bundleType: 1,
        version: "19.2.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: N,
        reconcilerVersion: "19.2.0"
      };
      return t.overrideHookState = m2, t.overrideHookStateDeletePath = y2, t.overrideHookStateRenamePath = p2, t.overrideProps = v2, t.overridePropsDeletePath = g2, t.overridePropsRenamePath = S2, t.scheduleUpdate = b2, t.scheduleRetry = T2, t.setErrorHandler = E2, t.setSuspenseHandler = A2, t.scheduleRefresh = re, t.scheduleRoot = be, t.setRefreshHandler = rl, t.getCurrentFiber = oe, im(t);
    })() && Wc && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var z2 = window.location.protocol;
      /^(https?|file):$/.test(z2) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (z2 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    fp.createRoot = function(t, e) {
      if (!de(t))
        throw Error("Target container is not a DOM element.");
      a0(t);
      var a = !1, c = "", o = zd, f = Dd, d = Fm;
      return e != null && (e.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof e == "object" && e !== null && e.$$typeof === on && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (c = e.identifierPrefix), e.onUncaughtError !== void 0 && (o = e.onUncaughtError), e.onCaughtError !== void 0 && (f = e.onCaughtError), e.onRecoverableError !== void 0 && (d = e.onRecoverableError)), e = lr(
        t,
        1,
        !1,
        null,
        null,
        a,
        c,
        null,
        o,
        f,
        d,
        Rv
      ), t[uc] = e.current, Qc(t), new l0(e);
    }, fp.hydrateRoot = function(t, e, a) {
      if (!de(t))
        throw Error("Target container is not a DOM element.");
      a0(t), e === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var c = !1, o = "", f = zd, d = Dd, h = Fm, y = null;
      return a != null && (a.unstable_strictMode === !0 && (c = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), e = lr(
        t,
        1,
        !0,
        e,
        a ?? null,
        c,
        o,
        y,
        f,
        d,
        h,
        Rv
      ), e.context = zv(null), a = e.current, c = Gl(a), c = li(c), o = nl(c), o.callback = null, eu(a, o, c), In(c, "hydrateRoot()", null), a = c, e.current.lanes = a, dc(e, a), ya(e), t[uc] = e.current, Qc(t), new xn(e);
    }, fp.version = "19.2.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), fp;
}
var N2;
function mE() {
  if (N2) return qg.exports;
  N2 = 1;
  function L() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L);
      } catch (ze) {
        console.error(ze);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (L(), qg.exports = dE()) : qg.exports = hE(), qg.exports;
}
var yE = mE();
const pE = [
  { type: "button", command: "bold", icon: /* @__PURE__ */ Qt.jsx("i", { className: "fa-solid fa-bold" }) },
  { type: "button", command: "italic", icon: /* @__PURE__ */ Qt.jsx("i", { className: "fa-solid fa-italic" }) },
  { type: "button", command: "underline", icon: /* @__PURE__ */ Qt.jsx("i", { className: "fa-solid fa-underline" }) },
  {
    type: "dropdown",
    command: "formatBlock",
    options: [
      { label: "Normal", value: "p" },
      { label: "Heading 1", value: "H1" },
      { label: "Heading 2", value: "H2" },
      { label: "Heading 3", value: "H3" },
      { label: "Heading 4", value: "H4" },
      { label: "Heading 5", value: "H5" },
      { label: "Heading 6", value: "H6" }
    ]
  },
  {
    type: "dropdown",
    command: "fontSize",
    options: [
      { label: "12px", value: "1" },
      { label: "14px", value: "2" },
      { label: "16px", value: "3" },
      { label: "18px", value: "4" },
      { label: "24px", value: "5" },
      { label: "32px", value: "6" },
      { label: "48px", value: "7" }
    ]
  },
  { type: "color", command: "foreColor", title: "Text Color" },
  { type: "color", command: "hiliteColor", title: "Highlight" },
  { type: "button", command: "insertUnorderedList", icon: /* @__PURE__ */ Qt.jsx("i", { className: "fa-solid fa-list" }) },
  { type: "button", command: "insertOrderedList", icon: /* @__PURE__ */ Qt.jsx("i", { className: "fa-solid fa-list-ol" }) },
  { type: "button", command: "justifyLeft", icon: /* @__PURE__ */ Qt.jsx("i", { className: "fa-solid fa-align-left" }) },
  { type: "button", command: "justifyCenter", icon: /* @__PURE__ */ Qt.jsx("i", { className: "fa-solid fa-align-center" }) },
  { type: "button", command: "justifyRight", icon: /* @__PURE__ */ Qt.jsx("i", { className: "fa-solid fa-align-right" }) },
  { type: "button", command: "justifyFull", icon: /* @__PURE__ */ Qt.jsx("i", { className: "fa-solid fa-align-justify" }) },
  { type: "button", command: "undo", icon: /* @__PURE__ */ Qt.jsx("i", { className: "fa-solid fa-rotate-left" }) },
  { type: "button", command: "redo", icon: /* @__PURE__ */ Qt.jsx("i", { className: "fa-solid fa-rotate-right" }) },
  { type: "custom", id: "hyperlink", icon: /* @__PURE__ */ Qt.jsx("i", { className: "fa-solid fa-link" }), title: "Insert Link" }
], vE = ({ onChange: L, initialContent: ze = "" }) => {
  const Nt = rS(null), [B, ae] = um(!1), [he, Ye] = um(!1), [J, je] = um(""), Ge = rS(null), Ta = rS(!1);
  D2(() => {
    ae(!0);
  }, []), D2(() => {
    B && Nt.current && !Ta.current && (Nt.current.innerHTML = ze, Ta.current = !0);
  }, [B, ze]);
  const ft = () => {
    const F = window.getSelection();
    if (!F) {
      Ge.current = null;
      return;
    }
    F.rangeCount > 0 ? Ge.current = F.getRangeAt(0).cloneRange() : Ge.current = null;
  }, xt = () => {
    const F = window.getSelection();
    F?.removeAllRanges(), Ge.current && F && F.addRange(Ge.current);
  }, be = (F) => {
    if (!Nt.current) return;
    Array.from(Nt.current.querySelectorAll("a[href]")).forEach((St) => {
      (St.getAttribute("href") === F || St.getAttribute("href")?.includes(F)) && (St.setAttribute("target", "_blank"), St.setAttribute("rel", "noopener noreferrer"));
    });
  }, re = uE((F, ut) => {
    if (!Nt.current) return;
    const St = window.getSelection();
    if (!(!St || St.rangeCount === 0)) {
      if (F === "fontSizePx" && ut) {
        const W = St.getRangeAt(0);
        if (!W.collapsed) {
          const Ft = document.createElement("span");
          Ft.style.fontSize = ut + "px", W.surroundContents(Ft);
        }
      } else F === "formatBlock" && ut ? document.execCommand("formatBlock", !1, `<${ut}>`) : document.execCommand(F, !1, ut);
      Nt.current.focus();
    }
  }, []), rl = (F) => {
    L(F.currentTarget.innerHTML);
  }, de = (F) => {
    F && F.preventDefault(), ft(), je(""), Ye(!0);
  }, Kt = () => {
    Ye(!1), xt();
    const F = J.trim();
    if (!F) return;
    const ut = window.getSelection();
    if (!ut) return;
    if (ut.rangeCount > 0 && !ut.getRangeAt(0).collapsed) {
      document.execCommand("createLink", !1, F), be(F), Nt.current?.focus(), L(Nt.current?.innerHTML ?? "");
      return;
    }
    const St = ut.getRangeAt(0), W = document.createElement("a");
    W.href = F, W.textContent = F, W.target = "_blank", W.rel = "noopener noreferrer", St.insertNode(W);
    const Ft = document.createRange();
    Ft.setStartAfter(W), Ft.collapse(!0), ut.removeAllRanges(), ut.addRange(Ft), Nt.current?.focus(), L(Nt.current?.innerHTML ?? "");
  }, [wl, He] = um("#000000"), [Pe, Jl] = um("#ffff00"), dl = () => /* @__PURE__ */ Qt.jsx("div", { className: "rte-toolbar", children: pE.map((F, ut) => {
    if (F.type === "button")
      return /* @__PURE__ */ Qt.jsx(
        "button",
        {
          className: "rte-btn",
          onMouseDown: (St) => {
            St.preventDefault(), re(F.command);
          },
          title: F.title,
          children: F.icon
        },
        ut
      );
    if (F.type === "dropdown")
      return /* @__PURE__ */ Qt.jsx(
        "select",
        {
          className: "rte-select",
          title: F.title,
          onChange: (St) => re(F.command, St.target.value),
          children: F.options.map((St) => /* @__PURE__ */ Qt.jsx("option", { value: St.value, children: St.label }, St.value))
        },
        ut
      );
    if (F.type === "color") {
      const St = F.command === "foreColor", W = F.command === "hiliteColor";
      return /* @__PURE__ */ Qt.jsxs("label", { className: "rte-color-picker", title: F.title, children: [
        /* @__PURE__ */ Qt.jsxs(
          "span",
          {
            className: "color-icon",
            style: {
              backgroundColor: St ? wl : Pe
            },
            children: [
              St && /* @__PURE__ */ Qt.jsx("i", { className: "fa-solid fa-a" }),
              W && /* @__PURE__ */ Qt.jsx("i", { className: "fa-solid fa-pen" })
            ]
          }
        ),
        /* @__PURE__ */ Qt.jsx(
          "input",
          {
            type: "color",
            className: "color-input",
            value: St ? wl : Pe,
            onChange: (Ft) => {
              const Et = Ft.target.value;
              re(F.command, Et), St ? He(Et) : Jl(Et);
            }
          }
        )
      ] }, ut);
    }
    return F.type === "custom" && F.id === "hyperlink" ? /* @__PURE__ */ Qt.jsx(
      "button",
      {
        className: "rte-btn",
        onMouseDown: (St) => {
          St.preventDefault(), de(St);
        },
        title: F.title,
        children: F.icon
      },
      ut
    ) : null;
  }) });
  return B ? /* @__PURE__ */ Qt.jsxs("div", { className: "editor-container", children: [
    dl(),
    /* @__PURE__ */ Qt.jsx(
      "div",
      {
        ref: Nt,
        className: "editor-content",
        contentEditable: !0,
        onInput: rl,
        "data-placeholder": "Start typing...",
        suppressContentEditableWarning: !0
      }
    ),
    he && /* @__PURE__ */ Qt.jsx(
      "div",
      {
        className: "rte-modal-overlay",
        onMouseDown: () => {
          Ye(!1);
        },
        children: /* @__PURE__ */ Qt.jsxs(
          "div",
          {
            className: "rte-modal",
            onMouseDown: (F) => {
              F.stopPropagation();
            },
            children: [
              /* @__PURE__ */ Qt.jsx("h3", { children: "Insert Hyperlink" }),
              /* @__PURE__ */ Qt.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "https://example.com",
                  value: J,
                  onChange: (F) => je(F.target.value),
                  className: "rte-modal-input",
                  autoFocus: !0
                }
              ),
              /* @__PURE__ */ Qt.jsxs("div", { className: "rte-modal-actions", children: [
                /* @__PURE__ */ Qt.jsx(
                  "button",
                  {
                    onClick: () => {
                      Ye(!1);
                    },
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ Qt.jsx("button", { className: "primary", onClick: Kt, children: "Insert" })
              ] })
            ]
          }
        )
      }
    )
  ] }) : null;
};
function gE() {
  const [L, ze] = um("<p>Hello, start typing...</p>");
  return /* @__PURE__ */ Qt.jsx(Qt.Fragment, { children: /* @__PURE__ */ Qt.jsxs("div", { className: "card", children: [
    /* @__PURE__ */ Qt.jsx(
      vE,
      {
        initialContent: L,
        onChange: (Nt) => {
          ze(Nt);
        }
      }
    ),
    L
  ] }) });
}
yE.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ Qt.jsx(cE, { children: /* @__PURE__ */ Qt.jsx(gE, {}) })
);
