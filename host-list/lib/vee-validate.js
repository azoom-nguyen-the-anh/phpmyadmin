/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.17.1.
 * Original file: /npm/vee-validate@2.2.15/dist/vee-validate.esm.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/**
 * vee-validate v2.2.15
 * (c) 2019 Abdelrahman Awad
 * @license MIT
 */
var e = function (e) {
    return I(
      [
        "text",
        "password",
        "search",
        "email",
        "tel",
        "url",
        "textarea",
        "number",
      ],
      e.type
    );
  },
  t = function (e) {
    return I(["radio", "checkbox"], e.type);
  },
  r = function (e, t) {
    return e.getAttribute("data-vv-" + t);
  },
  n = function (e) {
    return "isNaN" in Number ? Number.isNaN(e) : "number" == typeof e && e != e;
  },
  i = function () {
    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
    return e.every(function (e) {
      return null == e;
    });
  },
  a = function (e, t) {
    if (e instanceof RegExp && t instanceof RegExp)
      return a(e.source, t.source) && a(e.flags, t.flags);
    if (Array.isArray(e) && Array.isArray(t)) {
      if (e.length !== t.length) return !1;
      for (var r = 0; r < e.length; r++) if (!a(e[r], t[r])) return !1;
      return !0;
    }
    return h(e) && h(t)
      ? Object.keys(e).every(function (r) {
          return a(e[r], t[r]);
        }) &&
          Object.keys(t).every(function (r) {
            return a(e[r], t[r]);
          })
      : !(!n(e) || !n(t)) || e === t;
  },
  o = function (e) {
    return i(e)
      ? null
      : "FORM" === e.tagName
      ? e
      : i(e.form)
      ? i(e.parentNode)
        ? null
        : o(e.parentNode)
      : e.form;
  },
  s = function (e, t, r) {
    if ((void 0 === r && (r = void 0), !e || !t)) return r;
    var n = t;
    return (
      e.split(".").every(function (e) {
        return e in n ? ((n = n[e]), !0) : ((n = r), !1);
      }),
      n
    );
  },
  u = function (e, t, r) {
    return (
      void 0 === t && (t = 0),
      void 0 === r && (r = { cancelled: !1 }),
      0 === t
        ? e
        : function () {
            for (var i = [], a = arguments.length; a--; ) i[a] = arguments[a];
            clearTimeout(n),
              (n = setTimeout(function () {
                (n = null), r.cancelled || e.apply(void 0, i);
              }, t)) || e.apply(void 0, i);
          }
    );
    var n;
  },
  l = function (e, t) {
    return t
      ? e
        ? ("string" == typeof t && (t = c(t)), b({}, t, c(e)))
        : c(t)
      : c(e);
  },
  c = function (e) {
    return e
      ? h(e)
        ? Object.keys(e).reduce(function (t, r) {
            var n = [];
            return (
              (n =
                !0 === e[r]
                  ? []
                  : Array.isArray(e[r]) || h(e[r])
                  ? e[r]
                  : [e[r]]),
              !1 !== e[r] && (t[r] = n),
              t
            );
          }, {})
        : "string" != typeof e
        ? (d("rules must be either a string or an object."), {})
        : e.split("|").reduce(function (e, t) {
            var r = (function (e) {
              var t = [],
                r = e.split(":")[0];
              return (
                I(e, ":") && (t = e.split(":").slice(1).join(":").split(",")),
                { name: r, params: t }
              );
            })(t);
            return r.name ? ((e[r.name] = r.params), e) : e;
          }, {})
      : {};
  },
  d = function (e) {
    console.warn("[vee-validate] " + e);
  },
  f = function (e) {
    return new Error("[vee-validate] " + e);
  },
  h = function (e) {
    return null !== e && e && "object" == typeof e && !Array.isArray(e);
  },
  v = function (e) {
    return "function" == typeof e;
  },
  m = function (e, t) {
    return e.classList
      ? e.classList.contains(t)
      : !!e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"));
  },
  p = function (e, t, r) {
    if (e && t) {
      if (!Array.isArray(t))
        return r
          ? (function (e, t) {
              e.classList
                ? e.classList.add(t)
                : m(e, t) || (e.className += " " + t);
            })(e, t)
          : void (function (e, t) {
              if (e.classList) e.classList.remove(t);
              else if (m(e, t)) {
                var r = new RegExp("(\\s|^)" + t + "(\\s|$)");
                e.className = e.className.replace(r, " ");
              }
            })(e, t);
      t.forEach(function (t) {
        return p(e, t, r);
      });
    }
  },
  g = function (e) {
    if (v(Array.from)) return Array.from(e);
    for (var t = [], r = e.length, n = 0; n < r; n++) t.push(e[n]);
    return t;
  },
  y = function (e) {
    if (Array.isArray(e)) return [].concat(e);
    var t = g(e);
    return O(t) ? [e] : t;
  },
  b = function (e) {
    for (var t = [], r = arguments.length - 1; r-- > 0; )
      t[r] = arguments[r + 1];
    if (v(Object.assign)) return Object.assign.apply(Object, [e].concat(t));
    if (null == e)
      throw new TypeError("Cannot convert undefined or null to object");
    var n = Object(e);
    return (
      t.forEach(function (e) {
        null != e &&
          Object.keys(e).forEach(function (t) {
            n[t] = e[t];
          });
      }),
      n
    );
  },
  w = 0,
  _ = "{id}",
  x = function (e, t) {
    for (var r = Array.isArray(e) ? e : g(e), n = 0; n < r.length; n++)
      if (t(r[n])) return n;
    return -1;
  },
  $ = function (e, t) {
    var r = Array.isArray(e) ? e : g(e),
      n = x(r, t);
    return -1 === n ? void 0 : r[n];
  },
  T = function (e) {
    if (!e) return !1;
    var t = e.componentOptions.tag;
    return /^(keep-alive|transition|transition-group)$/.test(t);
  },
  D = function (e) {
    if ("number" == typeof e) return e;
    if ("string" == typeof e) return parseInt(e);
    var t = {};
    for (var r in e) t[r] = parseInt(e[r]);
    return t;
  },
  C = function (e, t) {
    return h(e) && h(t)
      ? (Object.keys(t).forEach(function (r) {
          var n, i;
          if (h(t[r]))
            return e[r] || b(e, (((n = {})[r] = {}), n)), void C(e[r], t[r]);
          b(e, (((i = {})[r] = t[r]), i));
        }),
        e)
      : e;
  },
  A = function (t, r) {
    if ((t.required && (r = l("required", r)), e(t)))
      return (
        "email" === t.type &&
          (r = l("email" + (t.multiple ? ":multiple" : ""), r)),
        t.pattern && (r = l({ regex: t.pattern }, r)),
        t.maxLength >= 0 &&
          t.maxLength < 524288 &&
          (r = l("max:" + t.maxLength, r)),
        t.minLength > 0 && (r = l("min:" + t.minLength, r)),
        "number" === t.type &&
          ((r = l("decimal", r)),
          "" !== t.min && (r = l("min_value:" + t.min, r)),
          "" !== t.max && (r = l("max_value:" + t.max, r))),
        r
      );
    if (
      (function (e) {
        return I(["date", "week", "month", "datetime-local", "time"], e.type);
      })(t)
    ) {
      var n = t.step && Number(t.step) < 60 ? "HH:mm:ss" : "HH:mm";
      if ("date" === t.type) return l("date_format:yyyy-MM-dd", r);
      if ("datetime-local" === t.type)
        return l("date_format:yyyy-MM-ddT" + n, r);
      if ("month" === t.type) return l("date_format:yyyy-MM", r);
      if ("week" === t.type) return l("date_format:yyyy-[W]WW", r);
      if ("time" === t.type) return l("date_format:" + n, r);
    }
    return r;
  },
  N = function (e) {
    return v(Object.values)
      ? Object.values(e)
      : Object.keys(e).map(function (t) {
          return e[t];
        });
  },
  I = function (e, t) {
    return -1 !== e.indexOf(t);
  },
  O = function (e) {
    return Array.isArray(e) && 0 === e.length;
  },
  M = function (e, t, r) {
    Object.defineProperty(e, t, { configurable: !1, writable: !0, value: r });
  },
  E = "en",
  F = function (e) {
    void 0 === e && (e = {}), (this.container = {}), this.merge(e);
  },
  k = { locale: { configurable: !0 } };
(k.locale.get = function () {
  return E;
}),
  (k.locale.set = function (e) {
    E = e || "en";
  }),
  (F.prototype.hasLocale = function (e) {
    return !!this.container[e];
  }),
  (F.prototype.setDateFormat = function (e, t) {
    this.container[e] || (this.container[e] = {}),
      (this.container[e].dateFormat = t);
  }),
  (F.prototype.getDateFormat = function (e) {
    return this.container[e] && this.container[e].dateFormat
      ? this.container[e].dateFormat
      : null;
  }),
  (F.prototype.getMessage = function (e, t, r) {
    var n = null;
    return (
      (n = this.hasMessage(e, t)
        ? this.container[e].messages[t]
        : this._getDefaultMessage(e)),
      v(n) ? n.apply(void 0, r) : n
    );
  }),
  (F.prototype.getFieldMessage = function (e, t, r, n) {
    if (!this.hasLocale(e)) return this.getMessage(e, r, n);
    var i = this.container[e].custom && this.container[e].custom[t];
    if (!i || !i[r]) return this.getMessage(e, r, n);
    var a = i[r];
    return v(a) ? a.apply(void 0, n) : a;
  }),
  (F.prototype._getDefaultMessage = function (e) {
    return this.hasMessage(e, "_default")
      ? this.container[e].messages._default
      : this.container.en.messages._default;
  }),
  (F.prototype.getAttribute = function (e, t, r) {
    return (
      void 0 === r && (r = ""),
      this.hasAttribute(e, t) ? this.container[e].attributes[t] : r
    );
  }),
  (F.prototype.hasMessage = function (e, t) {
    return !!(
      this.hasLocale(e) &&
      this.container[e].messages &&
      this.container[e].messages[t]
    );
  }),
  (F.prototype.hasAttribute = function (e, t) {
    return !!(
      this.hasLocale(e) &&
      this.container[e].attributes &&
      this.container[e].attributes[t]
    );
  }),
  (F.prototype.merge = function (e) {
    C(this.container, e);
  }),
  (F.prototype.setMessage = function (e, t, r) {
    this.hasLocale(e) || (this.container[e] = { messages: {}, attributes: {} }),
      this.container[e].messages || (this.container[e].messages = {}),
      (this.container[e].messages[t] = r);
  }),
  (F.prototype.setAttribute = function (e, t, r) {
    this.hasLocale(e) || (this.container[e] = { messages: {}, attributes: {} }),
      (this.container[e].attributes[t] = r);
  }),
  Object.defineProperties(F.prototype, k);
var S = {
    default: new F({ en: { messages: {}, attributes: {}, custom: {} } }),
  },
  q = "default",
  P = function () {};
(P._checkDriverName = function (e) {
  if (!e) throw f("you must provide a name to the dictionary driver");
}),
  (P.setDriver = function (e, t) {
    void 0 === t && (t = null),
      this._checkDriverName(e),
      t && (S[e] = t),
      (q = e);
  }),
  (P.getDriver = function () {
    return S[q];
  });
var j = function e(t, r) {
  void 0 === t && (t = null),
    void 0 === r && (r = null),
    (this.vmId = r || null),
    (this.items = t && t instanceof e ? t.items : []);
};
(j.prototype["function" == typeof Symbol ? Symbol.iterator : "@@iterator"] =
  function () {
    var e = this,
      t = 0;
    return {
      next: function () {
        return { value: e.items[t++], done: t > e.items.length };
      },
    };
  }),
  (j.prototype.add = function (e) {
    var t;
    (t = this.items).push.apply(t, this._normalizeError(e));
  }),
  (j.prototype._normalizeError = function (e) {
    var t = this;
    return Array.isArray(e)
      ? e.map(function (e) {
          return (
            (e.scope = i(e.scope) ? null : e.scope),
            (e.vmId = i(e.vmId) ? t.vmId || null : e.vmId),
            e
          );
        })
      : ((e.scope = i(e.scope) ? null : e.scope),
        (e.vmId = i(e.vmId) ? this.vmId || null : e.vmId),
        [e]);
  }),
  (j.prototype.regenerate = function () {
    this.items.forEach(function (e) {
      e.msg = v(e.regenerate) ? e.regenerate() : e.msg;
    });
  }),
  (j.prototype.update = function (e, t) {
    var r = $(this.items, function (t) {
      return t.id === e;
    });
    if (r) {
      var n = this.items.indexOf(r);
      this.items.splice(n, 1), (r.scope = t.scope), this.items.push(r);
    }
  }),
  (j.prototype.all = function (e) {
    var t = this;
    return this.items
      .filter(function (r) {
        var n = !0,
          a = !0;
        return (
          i(e) || (n = r.scope === e),
          i(t.vmId) || (a = r.vmId === t.vmId),
          a && n
        );
      })
      .map(function (e) {
        return e.msg;
      });
  }),
  (j.prototype.any = function (e) {
    var t = this;
    return !!this.items.filter(function (r) {
      var n = !0,
        a = !0;
      return (
        i(e) || (n = r.scope === e),
        i(t.vmId) || (a = r.vmId === t.vmId),
        a && n
      );
    }).length;
  }),
  (j.prototype.clear = function (e) {
    var t = this,
      r = i(this.vmId)
        ? function () {
            return !0;
          }
        : function (e) {
            return e.vmId === t.vmId;
          },
      n = function (t) {
        return t.scope === e;
      };
    0 === arguments.length
      ? (n = function () {
          return !0;
        })
      : i(e) && (e = null);
    for (var a = 0; a < this.items.length; ++a)
      r(this.items[a]) && n(this.items[a]) && (this.items.splice(a, 1), --a);
  }),
  (j.prototype.collect = function (e, t, r) {
    var n = this;
    void 0 === r && (r = !0);
    var a = !i(e) && !e.includes("*"),
      o = function (e) {
        var t = e.reduce(function (e, t) {
          return i(n.vmId) || t.vmId === n.vmId
            ? (e[t.field] || (e[t.field] = []),
              e[t.field].push(r ? t.msg : t),
              e)
            : e;
        }, {});
        return a ? N(t)[0] || [] : t;
      };
    if (i(e)) return o(this.items);
    var s = i(t) ? String(e) : t + "." + e,
      u = this._makeCandidateFilters(s),
      l = u.isPrimary,
      c = u.isAlt,
      d = this.items.reduce(
        function (e, t) {
          return l(t) && e.primary.push(t), c(t) && e.alt.push(t), e;
        },
        { primary: [], alt: [] }
      );
    return o((d = d.primary.length ? d.primary : d.alt));
  }),
  (j.prototype.count = function () {
    var e = this;
    return this.vmId
      ? this.items.filter(function (t) {
          return t.vmId === e.vmId;
        }).length
      : this.items.length;
  }),
  (j.prototype.firstById = function (e) {
    var t = $(this.items, function (t) {
      return t.id === e;
    });
    return t ? t.msg : void 0;
  }),
  (j.prototype.first = function (e, t) {
    void 0 === t && (t = null);
    var r = i(t) ? e : t + "." + e,
      n = this._match(r);
    return n && n.msg;
  }),
  (j.prototype.firstRule = function (e, t) {
    var r = this.collect(e, t, !1);
    return (r.length && r[0].rule) || void 0;
  }),
  (j.prototype.has = function (e, t) {
    return void 0 === t && (t = null), !!this.first(e, t);
  }),
  (j.prototype.firstByRule = function (e, t, r) {
    void 0 === r && (r = null);
    var n = this.collect(e, r, !1).filter(function (e) {
      return e.rule === t;
    })[0];
    return (n && n.msg) || void 0;
  }),
  (j.prototype.firstNot = function (e, t, r) {
    void 0 === t && (t = "required"), void 0 === r && (r = null);
    var n = this.collect(e, r, !1).filter(function (e) {
      return e.rule !== t;
    })[0];
    return (n && n.msg) || void 0;
  }),
  (j.prototype.removeById = function (e) {
    var t = function (t) {
      return t.id === e;
    };
    Array.isArray(e) &&
      (t = function (t) {
        return -1 !== e.indexOf(t.id);
      });
    for (var r = 0; r < this.items.length; ++r)
      t(this.items[r]) && (this.items.splice(r, 1), --r);
  }),
  (j.prototype.remove = function (e, t, r) {
    if (!i(e))
      for (
        var n,
          a = i(t) ? String(e) : t + "." + e,
          o = this._makeCandidateFilters(a),
          s = o.isPrimary,
          u = o.isAlt,
          l = function (e) {
            return s(e) || u(e);
          },
          c = 0;
        c < this.items.length;
        ++c
      )
        (n = this.items[c]),
          (i(r) ? l(n) : l(n) && n.vmId === r) &&
            (this.items.splice(c, 1), --c);
  }),
  (j.prototype._makeCandidateFilters = function (e) {
    var t = this,
      r = function () {
        return !0;
      },
      n = function () {
        return !0;
      },
      a = function () {
        return !0;
      },
      o = function () {
        return !0;
      },
      s = (function (e) {
        var t = null;
        if (
          (I(e, ":") &&
            ((t = e.split(":").pop()), (e = e.replace(":" + t, ""))),
          "#" === e[0])
        )
          return { id: e.slice(1), rule: t, name: null, scope: null };
        var r = null,
          n = e;
        if (I(e, ".")) {
          var i = e.split(".");
          (r = i[0]), (n = i.slice(1).join("."));
        }
        return { id: null, scope: r, name: n, rule: t };
      })(e),
      u = s.id,
      l = s.rule,
      c = s.scope,
      d = s.name;
    if (
      (l &&
        (r = function (e) {
          return e.rule === l;
        }),
      u)
    )
      return {
        isPrimary: function (e) {
          return (
            r(e) &&
            function (e) {
              return u === e.id;
            }
          );
        },
        isAlt: function () {
          return !1;
        },
      };
    (n = i(c)
      ? function (e) {
          return i(e.scope);
        }
      : function (e) {
          return e.scope === c;
        }),
      i(d) ||
        "*" === d ||
        (a = function (e) {
          return e.field === d;
        }),
      i(this.vmId) ||
        (o = function (e) {
          return e.vmId === t.vmId;
        });
    return {
      isPrimary: function (e) {
        return o(e) && a(e) && r(e) && n(e);
      },
      isAlt: function (e) {
        return o(e) && r(e) && e.field === c + "." + d;
      },
    };
  }),
  (j.prototype._match = function (e) {
    if (!i(e)) {
      var t = this._makeCandidateFilters(e),
        r = t.isPrimary,
        n = t.isAlt;
      return this.items.reduce(function (e, t, i, a) {
        var o = i === a.length - 1;
        return e.primary
          ? o
            ? e.primary
            : e
          : (r(t) && (e.primary = t),
            n(t) && (e.alt = t),
            o ? e.primary || e.alt : e);
      }, {});
    }
  });
var U = b(
    {},
    {
      locale: "en",
      delay: 0,
      errorBagName: "errors",
      dictionary: null,
      fieldsBagName: "fields",
      classes: !1,
      classNames: null,
      events: "input",
      inject: !0,
      fastExit: !0,
      aria: !0,
      validity: !1,
      mode: "aggressive",
      useConstraintAttrs: !0,
      i18n: null,
      i18nRootKey: "validation",
    }
  ),
  R = function (e) {
    var t = s("$options.$_veeValidate", e, {});
    return b({}, U, t);
  },
  Y = function () {
    return U;
  },
  H = function (e) {
    U = b({}, U, e);
  };
function Z(e) {
  return e.data
    ? e.data.model
      ? e.data.model
      : !!e.data.directives &&
        $(e.data.directives, function (e) {
          return "model" === e.name;
        })
    : null;
}
function L(e) {
  if (Z(e)) return [e];
  var t = (function (e) {
    return Array.isArray(e)
      ? e
      : Array.isArray(e.children)
      ? e.children
      : e.componentOptions && Array.isArray(e.componentOptions.children)
      ? e.componentOptions.children
      : [];
  })(e);
  return t.reduce(function (e, t) {
    var r = L(t);
    return r.length && e.push.apply(e, r), e;
  }, []);
}
function V(e) {
  return e.componentOptions ? e.componentOptions.Ctor.options.model : null;
}
function z(e, t, r) {
  if (v(e[t])) {
    var n = e[t];
    e[t] = [n];
  }
  i(e[t]) && (e[t] = []), e[t].push(r);
}
function W(e, t, r) {
  e.componentOptions
    ? (function (e, t, r) {
        e.componentOptions.listeners || (e.componentOptions.listeners = {}),
          z(e.componentOptions.listeners, t, r);
      })(e, t, r)
    : (function (e, t, r) {
        i(e.data.on) && (e.data.on = {}), z(e.data.on, t, r);
      })(e, t, r);
}
function B(t, r) {
  return t.componentOptions
    ? (V(t) || { event: "input" }).event
    : (r && r.modifiers && r.modifiers.lazy) || "select" === t.tag
    ? "change"
    : t.data.attrs && e({ type: t.data.attrs.type || "text" })
    ? "input"
    : "change";
}
function G(e, t) {
  return Array.isArray(t) && t[0] ? t[0] : t || e();
}
var Q = function () {};
(Q.generate = function (e, t, r) {
  var n = Q.resolveModel(t, r),
    i = R(r.context);
  return {
    name: Q.resolveName(e, r),
    el: e,
    listen: !t.modifiers.disable,
    bails: !!t.modifiers.bails || (!0 !== t.modifiers.continues && void 0),
    scope: Q.resolveScope(e, t, r),
    vm: r.context,
    expression: t.value,
    component: r.componentInstance,
    classes: i.classes,
    classNames: i.classNames,
    getter: Q.resolveGetter(e, r, n),
    events: Q.resolveEvents(e, r) || i.events,
    model: n,
    delay: Q.resolveDelay(e, r, i),
    rules: Q.resolveRules(e, t, r),
    immediate: !!t.modifiers.initial || !!t.modifiers.immediate,
    persist: !!t.modifiers.persist,
    validity: i.validity && !r.componentInstance,
    aria: i.aria && !r.componentInstance,
    initialValue: Q.resolveInitialValue(r),
  };
}),
  (Q.getCtorConfig = function (e) {
    return e.componentInstance
      ? s("componentInstance.$options.$_veeValidate", e)
      : null;
  }),
  (Q.resolveRules = function (e, t, n) {
    var i = "";
    if (
      (t.value || (t && t.expression) || (i = r(e, "rules")),
      t.value && I(["string", "object"], typeof t.value.rules)
        ? (i = t.value.rules)
        : t.value && (i = t.value),
      n.componentInstance)
    )
      return i;
    var a = c(i);
    return Y().useConstraintAttrs ? b({}, A(e, {}), a) : a;
  }),
  (Q.resolveInitialValue = function (e) {
    var t =
      e.data.model ||
      $(e.data.directives, function (e) {
        return "model" === e.name;
      });
    return t && t.value;
  }),
  (Q.resolveDelay = function (e, t, n) {
    var a = r(e, "delay"),
      o = n && "delay" in n ? n.delay : 0;
    return (
      !a &&
        t.componentInstance &&
        t.componentInstance.$attrs &&
        (a = t.componentInstance.$attrs["data-vv-delay"]),
      h(o) ? (i(a) || (o.input = a), D(o)) : D(a || o)
    );
  }),
  (Q.resolveEvents = function (e, t) {
    var n = r(e, "validate-on");
    if (
      (!n &&
        t.componentInstance &&
        t.componentInstance.$attrs &&
        (n = t.componentInstance.$attrs["data-vv-validate-on"]),
      !n && t.componentInstance)
    ) {
      var i = Q.getCtorConfig(t);
      n = i && i.events;
    }
    if (
      (!n && Y().events && (n = Y().events),
      n && t.componentInstance && I(n, "input"))
    ) {
      var a = (t.componentInstance.$options.model || { event: "input" }).event;
      if (!a) return n;
      n = n.replace("input", a);
    }
    return n;
  }),
  (Q.resolveScope = function (e, t, n) {
    void 0 === n && (n = {});
    var a = null;
    return (
      n.componentInstance &&
        i(a) &&
        (a =
          n.componentInstance.$attrs &&
          n.componentInstance.$attrs["data-vv-scope"]),
      i(a)
        ? (function (e) {
            var t = r(e, "scope");
            if (i(t)) {
              var n = o(e);
              n && (t = r(n, "scope"));
            }
            return i(t) ? null : t;
          })(e)
        : a
    );
  }),
  (Q.resolveModel = function (e, t) {
    if (e.arg) return { expression: e.arg };
    var r = Z(t);
    if (!r) return null;
    var n =
        !/[^\w.$]/.test(r.expression) &&
        (function (e, t) {
          var r = t;
          return e.split(".").reduce(function (e, t) {
            return null == r || "object" != typeof r
              ? e && !1
              : t in r
              ? ((r = r[t]), e && !0)
              : e && !1;
          }, !0);
        })(r.expression, t.context),
      i = !(!r.modifiers || !r.modifiers.lazy);
    return n
      ? { expression: r.expression, lazy: i }
      : { expression: null, lazy: i };
  }),
  (Q.resolveName = function (e, t) {
    var n = r(e, "name");
    if (!n && !t.componentInstance) return e.name;
    if (
      (!n &&
        t.componentInstance &&
        t.componentInstance.$attrs &&
        (n =
          t.componentInstance.$attrs["data-vv-name"] ||
          t.componentInstance.$attrs.name),
      !n && t.componentInstance)
    ) {
      var i = Q.getCtorConfig(t);
      return i && v(i.name)
        ? i.name.bind(t.componentInstance)()
        : t.componentInstance.name;
    }
    return n;
  }),
  (Q.resolveGetter = function (e, t, n) {
    if (n && n.expression)
      return function () {
        return s(n.expression, t.context);
      };
    if (t.componentInstance) {
      var i =
        r(e, "value-path") ||
        (t.componentInstance.$attrs &&
          t.componentInstance.$attrs["data-vv-value-path"]);
      if (i)
        return function () {
          return s(i, t.componentInstance);
        };
      var a = Q.getCtorConfig(t);
      if (a && v(a.value)) {
        var o = a.value.bind(t.componentInstance);
        return function () {
          return o();
        };
      }
      var u = (t.componentInstance.$options.model || { prop: "value" }).prop;
      return function () {
        return t.componentInstance[u];
      };
    }
    switch (e.type) {
      case "checkbox":
        return function () {
          var t = document.querySelectorAll('input[name="' + e.name + '"]');
          if (
            ((t = g(t).filter(function (e) {
              return e.checked;
            })),
            t.length)
          )
            return t.map(function (e) {
              return e.value;
            });
        };
      case "radio":
        return function () {
          var t = document.querySelectorAll('input[name="' + e.name + '"]'),
            r = $(t, function (e) {
              return e.checked;
            });
          return r && r.value;
        };
      case "file":
        return function (t) {
          return g(e.files);
        };
      case "select-multiple":
        return function () {
          return g(e.options)
            .filter(function (e) {
              return e.selected;
            })
            .map(function (e) {
              return e.value;
            });
        };
      default:
        return function () {
          return e && e.value;
        };
    }
  });
var X = {},
  K = function () {},
  J = { rules: { configurable: !0 } };
(K.add = function (e, t) {
  var r = t.validate,
    n = t.options,
    i = t.paramNames;
  X[e] = { validate: r, options: n, paramNames: i };
}),
  (J.rules.get = function () {
    return X;
  }),
  (K.has = function (e) {
    return !!X[e];
  }),
  (K.isImmediate = function (e) {
    return !(!X[e] || !X[e].options.immediate);
  }),
  (K.isRequireRule = function (e) {
    return !(!X[e] || !X[e].options.computesRequired);
  }),
  (K.isTargetRule = function (e) {
    return !(!X[e] || !X[e].options.hasTarget);
  }),
  (K.remove = function (e) {
    delete X[e];
  }),
  (K.getParamNames = function (e) {
    return X[e] && X[e].paramNames;
  }),
  (K.getOptions = function (e) {
    return X[e] && X[e].options;
  }),
  (K.getValidatorMethod = function (e) {
    return X[e] ? X[e].validate : null;
  }),
  Object.defineProperties(K, J);
var ee = function (e) {
    return (
      ("undefined" != typeof Event && v(Event) && e instanceof Event) ||
      (e && e.srcElement)
    );
  },
  te = function (e) {
    return e ? ("string" == typeof e ? e.split("|") : e) : [];
  },
  re = !0,
  ne = function (e, t, r) {
    e.addEventListener(t, r, !!re && { passive: !0 });
  },
  ie = {
    targetOf: null,
    immediate: !1,
    persist: !1,
    scope: null,
    listen: !0,
    name: null,
    rules: {},
    vm: null,
    classes: !1,
    validity: !0,
    aria: !0,
    events: "input|blur",
    delay: 0,
    classNames: {
      touched: "touched",
      untouched: "untouched",
      valid: "valid",
      invalid: "invalid",
      pristine: "pristine",
      dirty: "dirty",
    },
  },
  ae = function (e) {
    void 0 === e && (e = {}),
      (this.id =
        (w >= 9999 && ((w = 0), (_ = _.replace("{id}", "_{id}"))),
        w++,
        _.replace("{id}", String(w)))),
      (this.el = e.el),
      (this.updated = !1),
      (this.vmId = e.vmId),
      M(this, "dependencies", []),
      M(this, "watchers", []),
      M(this, "events", []),
      (this.delay = 0),
      (this.rules = {}),
      (this.forceRequired = !1),
      this._cacheId(e),
      (this.classNames = b({}, ie.classNames)),
      (e = b({}, ie, e)),
      (this._delay = i(e.delay) ? 0 : e.delay),
      (this.validity = e.validity),
      (this.aria = e.aria),
      (this.flags = e.flags || {
        untouched: !0,
        touched: !1,
        dirty: !1,
        pristine: !0,
        valid: null,
        invalid: null,
        validated: !1,
        pending: !1,
        required: !1,
        changed: !1,
      }),
      M(this, "vm", e.vm),
      M(this, "componentInstance", e.component),
      (this.ctorConfig = this.componentInstance
        ? s("$options.$_veeValidate", this.componentInstance)
        : void 0),
      this.update(e),
      (this.initialValue = this.value),
      (this.updated = !1);
  },
  oe = {
    validator: { configurable: !0 },
    isRequired: { configurable: !0 },
    isDisabled: { configurable: !0 },
    alias: { configurable: !0 },
    value: { configurable: !0 },
    bails: { configurable: !0 },
    rejectsFalse: { configurable: !0 },
  };
(oe.validator.get = function () {
  return this.vm && this.vm.$validator
    ? this.vm.$validator
    : {
        validate: function () {
          return Promise.resolve(!0);
        },
      };
}),
  (oe.isRequired.get = function () {
    return !!this.rules.required || this.forceRequired;
  }),
  (oe.isDisabled.get = function () {
    return !(!this.el || !this.el.disabled);
  }),
  (oe.alias.get = function () {
    if (this._alias) return this._alias;
    var e = null;
    return (
      this.ctorConfig &&
        this.ctorConfig.alias &&
        (e = v(this.ctorConfig.alias)
          ? this.ctorConfig.alias.call(this.componentInstance)
          : this.ctorConfig.alias),
      !e && this.el && (e = r(this.el, "as")),
      !e && this.componentInstance
        ? this.componentInstance.$attrs &&
          this.componentInstance.$attrs["data-vv-as"]
        : e
    );
  }),
  (oe.value.get = function () {
    if (v(this.getter)) return this.getter();
  }),
  (oe.bails.get = function () {
    return this._bails;
  }),
  (oe.rejectsFalse.get = function () {
    return this.componentInstance && this.ctorConfig
      ? !!this.ctorConfig.rejectsFalse
      : !!this.el && "checkbox" === this.el.type;
  }),
  (ae.prototype.matches = function (e) {
    var t = this;
    if (!e) return !0;
    if (e.id) return this.id === e.id;
    var r = i(e.vmId)
      ? function () {
          return !0;
        }
      : function (e) {
          return e === t.vmId;
        };
    return (
      !!r(e.vmId) &&
      ((void 0 === e.name && void 0 === e.scope) ||
        (void 0 === e.scope
          ? this.name === e.name
          : void 0 === e.name
          ? this.scope === e.scope
          : e.name === this.name && e.scope === this.scope))
    );
  }),
  (ae.prototype._cacheId = function (e) {
    this.el && !e.targetOf && (this.el._veeValidateId = this.id);
  }),
  (ae.prototype.waitFor = function (e) {
    this._waitingFor = e;
  }),
  (ae.prototype.isWaitingFor = function (e) {
    return this._waitingFor === e;
  }),
  (ae.prototype.update = function (e) {
    var t,
      r,
      n,
      a = this;
    if (
      ((this.targetOf = e.targetOf || null),
      (this.immediate = e.immediate || this.immediate || !1),
      (this.persist = e.persist || this.persist || !1),
      !i(e.scope) &&
        e.scope !== this.scope &&
        v(this.validator.update) &&
        this.validator.update(this.id, { scope: e.scope }),
      (this.scope = i(e.scope) ? (i(this.scope) ? null : this.scope) : e.scope),
      (this.name = (i(e.name) ? e.name : String(e.name)) || this.name || null),
      (this.rules = void 0 !== e.rules ? c(e.rules) : this.rules),
      (this._bails = void 0 !== e.bails ? e.bails : this._bails),
      (this.model = e.model || this.model),
      (this.listen = void 0 !== e.listen ? e.listen : this.listen),
      (this.classes =
        !(!e.classes && !this.classes) && !this.componentInstance),
      (this.classNames = h(e.classNames)
        ? C(this.classNames, e.classNames)
        : this.classNames),
      (this.getter = v(e.getter) ? e.getter : this.getter),
      (this._alias = e.alias || this._alias),
      (this.events = e.events ? te(e.events) : this.events),
      (this.delay =
        ((t = this.events),
        (r = e.delay || this.delay),
        (n = this._delay),
        "number" == typeof r
          ? t.reduce(function (e, t) {
              return (e[t] = r), e;
            }, {})
          : t.reduce(function (e, t) {
              return "object" == typeof r && t in r
                ? ((e[t] = r[t]), e)
                : "number" == typeof n
                ? ((e[t] = n), e)
                : ((e[t] = (n && n[t]) || 0), e);
            }, {}))),
      this.updateDependencies(),
      this.addActionListeners(),
      void 0 !== e.rules && (this.flags.required = this.isRequired),
      0 === Object.keys(e.rules || {}).length && this.updated)
    ) {
      var o = this.flags.validated;
      this.validator.validate("#" + this.id).then(function () {
        a.flags.validated = o;
      });
    }
    this.flags.validated &&
      void 0 !== e.rules &&
      this.updated &&
      this.validator.validate("#" + this.id),
      (this.updated = !0),
      this.addValueListeners(),
      this.el && (this.updateClasses(), this.updateAriaAttrs());
  }),
  (ae.prototype.reset = function () {
    var e = this;
    this._cancellationToken &&
      ((this._cancellationToken.cancelled = !0),
      delete this._cancellationToken);
    var t = {
      untouched: !0,
      touched: !1,
      dirty: !1,
      pristine: !0,
      valid: null,
      invalid: null,
      validated: !1,
      pending: !1,
      required: !1,
      changed: !1,
    };
    Object.keys(this.flags)
      .filter(function (e) {
        return "required" !== e;
      })
      .forEach(function (r) {
        e.flags[r] = t[r];
      }),
      (this.initialValue = this.value),
      (this.flags.changed = !1),
      this.addValueListeners(),
      this.addActionListeners(),
      this.updateClasses(!0),
      this.updateAriaAttrs(),
      this.updateCustomValidity();
  }),
  (ae.prototype.setFlags = function (e) {
    var t = this,
      r = {
        pristine: "dirty",
        dirty: "pristine",
        valid: "invalid",
        invalid: "valid",
        touched: "untouched",
        untouched: "touched",
      };
    Object.keys(e).forEach(function (n) {
      (t.flags[n] = e[n]),
        r[n] && void 0 === e[r[n]] && (t.flags[r[n]] = !e[n]);
    }),
      (void 0 === e.untouched &&
        void 0 === e.touched &&
        void 0 === e.dirty &&
        void 0 === e.pristine) ||
        this.addActionListeners(),
      this.updateClasses(),
      this.updateAriaAttrs(),
      this.updateCustomValidity();
  }),
  (ae.prototype.updateDependencies = function () {
    var e = this;
    this.dependencies.forEach(function (e) {
      return e.field.destroy();
    }),
      (this.dependencies = []);
    var t = Object.keys(this.rules).reduce(function (t, r) {
      return (
        K.isTargetRule(r) && t.push({ selector: e.rules[r][0], name: r }), t
      );
    }, []);
    t.length &&
      this.vm &&
      this.vm.$el &&
      t.forEach(function (t) {
        var r = t.selector,
          n = t.name,
          i = e.vm.$refs[r],
          a = Array.isArray(i) ? i[0] : i;
        if (a) {
          var o = {
            vm: e.vm,
            classes: e.classes,
            classNames: e.classNames,
            delay: e.delay,
            scope: e.scope,
            events: e.events.join("|"),
            immediate: e.immediate,
            targetOf: e.id,
          };
          v(a.$watch)
            ? ((o.component = a),
              (o.el = a.$el),
              (o.getter = Q.resolveGetter(a.$el, a.$vnode)))
            : ((o.el = a), (o.getter = Q.resolveGetter(a, {}))),
            e.dependencies.push({ name: n, field: new ae(o) });
        }
      });
  }),
  (ae.prototype.unwatch = function (e) {
    if ((void 0 === e && (e = null), !e))
      return (
        this.watchers.forEach(function (e) {
          return e.unwatch();
        }),
        void (this.watchers = [])
      );
    this.watchers
      .filter(function (t) {
        return e.test(t.tag);
      })
      .forEach(function (e) {
        return e.unwatch();
      }),
      (this.watchers = this.watchers.filter(function (t) {
        return !e.test(t.tag);
      }));
  }),
  (ae.prototype.updateClasses = function (e) {
    var r = this;
    if ((void 0 === e && (e = !1), this.classes && !this.isDisabled)) {
      var n = function (t) {
        p(t, r.classNames.dirty, r.flags.dirty),
          p(t, r.classNames.pristine, r.flags.pristine),
          p(t, r.classNames.touched, r.flags.touched),
          p(t, r.classNames.untouched, r.flags.untouched),
          e && (p(t, r.classNames.valid, !1), p(t, r.classNames.invalid, !1)),
          !i(r.flags.valid) &&
            r.flags.validated &&
            p(t, r.classNames.valid, r.flags.valid),
          !i(r.flags.invalid) &&
            r.flags.validated &&
            p(t, r.classNames.invalid, r.flags.invalid);
      };
      if (t(this.el)) {
        var a = document.querySelectorAll('input[name="' + this.el.name + '"]');
        g(a).forEach(n);
      } else n(this.el);
    }
  }),
  (ae.prototype.addActionListeners = function () {
    var r = this;
    if ((this.unwatch(/class/), this.el)) {
      var n = function () {
          (r.flags.touched = !0),
            (r.flags.untouched = !1),
            r.classes &&
              (p(r.el, r.classNames.touched, !0),
              p(r.el, r.classNames.untouched, !1)),
            r.unwatch(/^class_blur$/);
        },
        i = e(this.el) ? "input" : "change",
        a = function () {
          (r.flags.dirty = !0),
            (r.flags.pristine = !1),
            r.classes &&
              (p(r.el, r.classNames.pristine, !1),
              p(r.el, r.classNames.dirty, !0)),
            r.unwatch(/^class_input$/);
        };
      if (this.componentInstance && v(this.componentInstance.$once))
        return (
          this.componentInstance.$once("input", a),
          this.componentInstance.$once("blur", n),
          this.watchers.push({
            tag: "class_input",
            unwatch: function () {
              r.componentInstance.$off("input", a);
            },
          }),
          void this.watchers.push({
            tag: "class_blur",
            unwatch: function () {
              r.componentInstance.$off("blur", n);
            },
          })
        );
      if (this.el) {
        ne(this.el, i, a);
        var o = t(this.el) ? "change" : "blur";
        ne(this.el, o, n),
          this.watchers.push({
            tag: "class_input",
            unwatch: function () {
              r.el.removeEventListener(i, a);
            },
          }),
          this.watchers.push({
            tag: "class_blur",
            unwatch: function () {
              r.el.removeEventListener(o, n);
            },
          });
      }
    }
  }),
  (ae.prototype.checkValueChanged = function () {
    return (
      (null !== this.initialValue || "" !== this.value || !e(this.el)) &&
      this.value !== this.initialValue
    );
  }),
  (ae.prototype._determineInputEvent = function () {
    return this.componentInstance
      ? (this.componentInstance.$options.model &&
          this.componentInstance.$options.model.event) ||
          "input"
      : this.model && this.model.lazy
      ? "change"
      : e(this.el)
      ? "input"
      : "change";
  }),
  (ae.prototype._determineEventList = function (t) {
    var r = this;
    return !this.events.length || this.componentInstance || e(this.el)
      ? [].concat(this.events).map(function (e) {
          return "input" === e && r.model && r.model.lazy ? "change" : e;
        })
      : this.events.map(function (e) {
          return "input" === e ? t : e;
        });
  }),
  (ae.prototype.addValueListeners = function () {
    var e = this;
    if ((this.unwatch(/^input_.+/), this.listen && this.el)) {
      var t = { cancelled: !1 },
        r = this.targetOf
          ? function () {
              var t = e.validator._resolveField("#" + e.targetOf);
              t && t.flags.validated && e.validator.validate("#" + e.targetOf);
            }
          : function () {
              for (var r = [], n = arguments.length; n--; ) r[n] = arguments[n];
              (0 === r.length || ee(r[0])) && (r[0] = e.value),
                (e.flags.pending = !0),
                (e._cancellationToken = t),
                e.validator.validate("#" + e.id, r[0]);
            },
        n = this._determineInputEvent(),
        i = this._determineEventList(n);
      if (I(i, n)) {
        var a = null,
          o = null,
          s = !1;
        if (
          (this.model &&
            this.model.expression &&
            ((a = this.vm), (o = this.model.expression), (s = !0)),
          !o &&
            this.componentInstance &&
            this.componentInstance.$options.model &&
            ((a = this.componentInstance),
            (o = this.componentInstance.$options.model.prop || "value")),
          a && o)
        ) {
          var l = u(r, this.delay[n], t),
            c = a.$watch(o, l);
          this.watchers.push({
            tag: "input_model",
            unwatch: function () {
              e.vm.$nextTick(function () {
                c();
              });
            },
          }),
            s &&
              (i = i.filter(function (e) {
                return e !== n;
              }));
        }
      }
      i.forEach(function (n) {
        var i = u(r, e.delay[n], t);
        e._addComponentEventListener(n, i), e._addHTMLEventListener(n, i);
      });
    }
  }),
  (ae.prototype._addComponentEventListener = function (e, t) {
    var r = this;
    this.componentInstance &&
      (this.componentInstance.$on(e, t),
      this.watchers.push({
        tag: "input_vue",
        unwatch: function () {
          r.componentInstance.$off(e, t);
        },
      }));
  }),
  (ae.prototype._addHTMLEventListener = function (e, r) {
    var n = this;
    if (this.el && !this.componentInstance) {
      var i = function (t) {
        ne(t, e, r),
          n.watchers.push({
            tag: "input_native",
            unwatch: function () {
              t.removeEventListener(e, r);
            },
          });
      };
      if ((i(this.el), t(this.el))) {
        var a = document.querySelectorAll('input[name="' + this.el.name + '"]');
        g(a).forEach(function (e) {
          (e._veeValidateId && e !== n.el) || i(e);
        });
      }
    }
  }),
  (ae.prototype.updateAriaAttrs = function () {
    var e = this;
    if (this.aria && this.el && v(this.el.setAttribute)) {
      var r = function (t) {
        t.setAttribute("aria-required", e.isRequired ? "true" : "false"),
          t.setAttribute("aria-invalid", e.flags.invalid ? "true" : "false");
      };
      if (t(this.el)) {
        var n = document.querySelectorAll('input[name="' + this.el.name + '"]');
        g(n).forEach(r);
      } else r(this.el);
    }
  }),
  (ae.prototype.updateCustomValidity = function () {
    this.validity &&
      this.el &&
      v(this.el.setCustomValidity) &&
      this.validator.errors &&
      this.el.setCustomValidity(
        this.flags.valid ? "" : this.validator.errors.firstById(this.id) || ""
      );
  }),
  (ae.prototype.destroy = function () {
    this._cancellationToken && (this._cancellationToken.cancelled = !0),
      this.unwatch(),
      this.dependencies.forEach(function (e) {
        return e.field.destroy();
      }),
      (this.dependencies = []);
  }),
  Object.defineProperties(ae.prototype, oe);
var se = function (e) {
    void 0 === e && (e = []),
      (this.items = e || []),
      (this.itemsById = this.items.reduce(function (e, t) {
        return (e[t.id] = t), e;
      }, {}));
  },
  ue = { length: { configurable: !0 } };
(se.prototype["function" == typeof Symbol ? Symbol.iterator : "@@iterator"] =
  function () {
    var e = this,
      t = 0;
    return {
      next: function () {
        return { value: e.items[t++], done: t > e.items.length };
      },
    };
  }),
  (ue.length.get = function () {
    return this.items.length;
  }),
  (se.prototype.find = function (e) {
    return $(this.items, function (t) {
      return t.matches(e);
    });
  }),
  (se.prototype.findById = function (e) {
    return this.itemsById[e] || null;
  }),
  (se.prototype.filter = function (e) {
    return Array.isArray(e)
      ? this.items.filter(function (t) {
          return e.some(function (e) {
            return t.matches(e);
          });
        })
      : this.items.filter(function (t) {
          return t.matches(e);
        });
  }),
  (se.prototype.map = function (e) {
    return this.items.map(e);
  }),
  (se.prototype.remove = function (e) {
    var t = null;
    if (!(t = e instanceof ae ? e : this.find(e))) return null;
    var r = this.items.indexOf(t);
    return this.items.splice(r, 1), delete this.itemsById[t.id], t;
  }),
  (se.prototype.push = function (e) {
    if (!(e instanceof ae))
      throw f(
        "FieldBag only accepts instances of Field that has an id defined."
      );
    if (!e.id) throw f("Field id must be defined.");
    if (this.findById(e.id))
      throw f("Field with id " + e.id + " is already added.");
    this.items.push(e), (this.itemsById[e.id] = e);
  }),
  Object.defineProperties(se.prototype, ue);
var le = function (e, t) {
    (this.id = t._uid),
      (this._base = e),
      (this._paused = !1),
      (this.errors = new j(e.errors, this.id));
  },
  ce = {
    flags: { configurable: !0 },
    rules: { configurable: !0 },
    fields: { configurable: !0 },
    dictionary: { configurable: !0 },
    locale: { configurable: !0 },
  };
(ce.flags.get = function () {
  var e = this;
  return this._base.fields.items
    .filter(function (t) {
      return t.vmId === e.id;
    })
    .reduce(function (e, t) {
      return (
        t.scope &&
          (e["$" + t.scope] || (e["$" + t.scope] = {}),
          (e["$" + t.scope][t.name] = t.flags)),
        (e[t.name] = t.flags),
        e
      );
    }, {});
}),
  (ce.rules.get = function () {
    return this._base.rules;
  }),
  (ce.fields.get = function () {
    return new se(this._base.fields.filter({ vmId: this.id }));
  }),
  (ce.dictionary.get = function () {
    return this._base.dictionary;
  }),
  (ce.locale.get = function () {
    return this._base.locale;
  }),
  (ce.locale.set = function (e) {
    this._base.locale = e;
  }),
  (le.prototype.localize = function () {
    for (var e, t = [], r = arguments.length; r--; ) t[r] = arguments[r];
    return (e = this._base).localize.apply(e, t);
  }),
  (le.prototype.update = function () {
    for (var e, t = [], r = arguments.length; r--; ) t[r] = arguments[r];
    return (e = this._base).update.apply(e, t);
  }),
  (le.prototype.attach = function (e) {
    var t = b({}, e, { vmId: this.id });
    return this._base.attach(t);
  }),
  (le.prototype.pause = function () {
    this._paused = !0;
  }),
  (le.prototype.resume = function () {
    this._paused = !1;
  }),
  (le.prototype.remove = function (e) {
    return this._base.remove(e);
  }),
  (le.prototype.detach = function (e, t) {
    return this._base.detach(e, t, this.id);
  }),
  (le.prototype.extend = function () {
    for (var e, t = [], r = arguments.length; r--; ) t[r] = arguments[r];
    return (e = this._base).extend.apply(e, t);
  }),
  (le.prototype.validate = function (e, t, r) {
    return (
      void 0 === r && (r = {}),
      this._paused
        ? Promise.resolve(!0)
        : this._base.validate(e, t, b({}, { vmId: this.id }, r || {}))
    );
  }),
  (le.prototype.verify = function () {
    for (var e, t = [], r = arguments.length; r--; ) t[r] = arguments[r];
    return (e = this._base).verify.apply(e, t);
  }),
  (le.prototype.validateAll = function (e, t) {
    return (
      void 0 === t && (t = {}),
      this._paused
        ? Promise.resolve(!0)
        : this._base.validateAll(e, b({}, { vmId: this.id }, t || {}))
    );
  }),
  (le.prototype.validateScopes = function (e) {
    return (
      void 0 === e && (e = {}),
      this._paused
        ? Promise.resolve(!0)
        : this._base.validateScopes(b({}, { vmId: this.id }, e || {}))
    );
  }),
  (le.prototype.destroy = function () {
    delete this.id, delete this._base;
  }),
  (le.prototype.reset = function (e) {
    return this._base.reset(Object.assign({}, e || {}, { vmId: this.id }));
  }),
  (le.prototype.flag = function () {
    for (var e, t = [], r = arguments.length; r--; ) t[r] = arguments[r];
    return (e = this._base).flag.apply(e, t.concat([this.id]));
  }),
  (le.prototype._resolveField = function () {
    for (var e, t = [], r = arguments.length; r--; ) t[r] = arguments[r];
    return (e = this._base)._resolveField.apply(e, t);
  }),
  Object.defineProperties(le.prototype, ce);
var de = null,
  fe = function () {
    return de;
  },
  he = {
    provide: function () {
      return this.$validator && !T(this.$vnode)
        ? { $validator: this.$validator }
        : {};
    },
    beforeCreate: function () {
      if (!T(this.$vnode) && !1 !== this.$options.$__veeInject) {
        this.$parent || H(this.$options.$_veeValidate || {});
        var e = R(this);
        (!this.$parent ||
          (this.$options.$_veeValidate &&
            /new/.test(this.$options.$_veeValidate.validator))) &&
          (this.$validator = new le(fe(), this));
        var t,
          r = ((t = this.$options.inject), !(!h(t) || !t.$validator));
        if (
          (this.$validator ||
            !e.inject ||
            r ||
            (this.$validator = new le(fe(), this)),
          r || this.$validator)
        ) {
          if (!r && this.$validator)
            this.$options._base.util.defineReactive(
              this.$validator,
              "errors",
              this.$validator.errors
            );
          this.$options.computed || (this.$options.computed = {}),
            (this.$options.computed[e.errorBagName || "errors"] = function () {
              return this.$validator.errors;
            }),
            (this.$options.computed[e.fieldsBagName || "fields"] = function () {
              return this.$validator.fields.items.reduce(function (e, t) {
                return t.scope
                  ? (e["$" + t.scope] || (e["$" + t.scope] = {}),
                    (e["$" + t.scope][t.name] = t.flags),
                    e)
                  : ((e[t.name] = t.flags), e);
              }, {});
            });
        }
      }
    },
    beforeDestroy: function () {
      this.$validator &&
        this._uid === this.$validator.id &&
        this.$validator.errors.clear();
    },
  };
function ve(e, t) {
  return t && t.$validator
    ? t.$validator.fields.findById(e._veeValidateId)
    : null;
}
var me = {
    bind: function (e, t, r) {
      var n = r.context.$validator;
      if (n) {
        var i = Q.generate(e, t, r);
        n.attach(i);
      }
    },
    inserted: function (e, t, r) {
      var n = ve(e, r.context),
        i = Q.resolveScope(e, t, r);
      n && i !== n.scope && (n.update({ scope: i }), (n.updated = !1));
    },
    update: function (e, t, r) {
      var n = ve(e, r.context);
      if (!(!n || (n.updated && a(t.value, t.oldValue)))) {
        var i = Q.resolveScope(e, t, r),
          o = Q.resolveRules(e, t, r);
        n.update({ scope: i, rules: o });
      }
    },
    unbind: function (e, t, r) {
      var n = r.context,
        i = ve(e, n);
      i && n.$validator.detach(i);
    },
  },
  pe = function (e, t, r) {
    void 0 === t && (t = { fastExit: !0 }),
      void 0 === r && (r = null),
      (this.errors = new j()),
      (this.fields = new se()),
      this._createFields(e),
      (this.paused = !1),
      (this.fastExit = !!i(t && t.fastExit) || t.fastExit),
      (this.$vee = r || {
        _vm: {
          $nextTick: function (e) {
            return v(e) ? e() : Promise.resolve();
          },
          $emit: function () {},
          $off: function () {},
        },
      });
  },
  ge = {
    rules: { configurable: !0 },
    dictionary: { configurable: !0 },
    flags: { configurable: !0 },
    locale: { configurable: !0 },
  },
  ye = {
    rules: { configurable: !0 },
    dictionary: { configurable: !0 },
    locale: { configurable: !0 },
  };
(ye.rules.get = function () {
  return K.rules;
}),
  (ge.rules.get = function () {
    return K.rules;
  }),
  (ge.dictionary.get = function () {
    return P.getDriver();
  }),
  (ye.dictionary.get = function () {
    return P.getDriver();
  }),
  (ge.flags.get = function () {
    return this.fields.items.reduce(function (e, t) {
      var r;
      return t.scope
        ? ((e["$" + t.scope] = (((r = {})[t.name] = t.flags), r)), e)
        : ((e[t.name] = t.flags), e);
    }, {});
  }),
  (ge.locale.get = function () {
    return pe.locale;
  }),
  (ge.locale.set = function (e) {
    pe.locale = e;
  }),
  (ye.locale.get = function () {
    return P.getDriver().locale;
  }),
  (ye.locale.set = function (e) {
    var t = e !== P.getDriver().locale;
    (P.getDriver().locale = e),
      t && pe.$vee && pe.$vee._vm && pe.$vee._vm.$emit("localeChanged");
  }),
  (pe.create = function (e, t) {
    return new pe(e, t);
  }),
  (pe.extend = function (e, t, r) {
    void 0 === r && (r = {}), pe._guardExtend(e, t);
    var n = t.options || {};
    pe._merge(e, {
      validator: t,
      paramNames: (r && r.paramNames) || t.paramNames,
      options: b({ hasTarget: !1, immediate: !0 }, n, r || {}),
    });
  }),
  (pe.remove = function (e) {
    K.remove(e);
  }),
  (pe.prototype.localize = function (e, t) {
    pe.localize(e, t);
  }),
  (pe.localize = function (e, t) {
    var r;
    if (h(e)) P.getDriver().merge(e);
    else {
      if (t) {
        var n = e || t.name;
        (t = b({}, t)), P.getDriver().merge((((r = {})[n] = t), r));
      }
      e && (pe.locale = e);
    }
  }),
  (pe.prototype.attach = function (e) {
    var t = this,
      r = { name: e.name, scope: e.scope, persist: !0 },
      n = e.persist ? this.fields.find(r) : null;
    n && ((e.flags = n.flags), n.destroy(), this.fields.remove(n));
    var i = e.initialValue,
      a = new ae(e);
    return (
      this.fields.push(a),
      a.immediate
        ? this.$vee._vm.$nextTick(function () {
            return t.validate("#" + a.id, i || a.value, { vmId: e.vmId });
          })
        : this._validate(a, i || a.value, { initial: !0 }).then(function (e) {
            (a.flags.valid = e.valid), (a.flags.invalid = !e.valid);
          }),
      a
    );
  }),
  (pe.prototype.flag = function (e, t, r) {
    void 0 === r && (r = null);
    var n = this._resolveField(e, void 0, r);
    n && t && n.setFlags(t);
  }),
  (pe.prototype.detach = function (e, t, r) {
    var n = v(e.destroy) ? e : this._resolveField(e, t, r);
    n &&
      (n.persist ||
        (n.destroy(),
        this.errors.remove(n.name, n.scope, n.vmId),
        this.fields.remove(n)));
  }),
  (pe.prototype.extend = function (e, t, r) {
    void 0 === r && (r = {}), pe.extend(e, t, r);
  }),
  (pe.prototype.reset = function (e) {
    var t = this;
    return this.$vee._vm
      .$nextTick()
      .then(function () {
        return t.$vee._vm.$nextTick();
      })
      .then(function () {
        t.fields.filter(e).forEach(function (r) {
          r.waitFor(null),
            r.reset(),
            t.errors.remove(r.name, r.scope, e && e.vmId);
        });
      });
  }),
  (pe.prototype.update = function (e, t) {
    var r = t.scope;
    this._resolveField("#" + e) && this.errors.update(e, { scope: r });
  }),
  (pe.prototype.remove = function (e) {
    pe.remove(e);
  }),
  (pe.prototype.validate = function (e, t, r) {
    var n = this;
    void 0 === r && (r = {});
    var a = r.silent,
      o = r.vmId;
    if (this.paused) return Promise.resolve(!0);
    if (i(e)) return this.validateScopes({ silent: a, vmId: o });
    if ("*" === e) return this.validateAll(void 0, { silent: a, vmId: o });
    if (/^(.+)\.\*$/.test(e)) {
      var s = e.match(/^(.+)\.\*$/)[1];
      return this.validateAll(s);
    }
    var u = this._resolveField(e);
    if (!u) return this._handleFieldNotFound(e);
    a || (u.flags.pending = !0), void 0 === t && (t = u.value);
    var l = this._validate(u, t);
    return (
      u.waitFor(l),
      l.then(function (e) {
        return (
          !a &&
            u.isWaitingFor(l) &&
            (u.waitFor(null), n._handleValidationResults([e], o)),
          e.valid
        );
      })
    );
  }),
  (pe.prototype.pause = function () {
    return (this.paused = !0), this;
  }),
  (pe.prototype.resume = function () {
    return (this.paused = !1), this;
  }),
  (pe.prototype.validateAll = function (e, t) {
    var r = this;
    void 0 === t && (t = {});
    var n = t.silent,
      i = t.vmId;
    if (this.paused) return Promise.resolve(!0);
    var a = null,
      o = !1;
    return (
      "string" == typeof e
        ? (a = { scope: e, vmId: i })
        : h(e)
        ? ((a = Object.keys(e).map(function (e) {
            return { name: e, vmId: i, scope: null };
          })),
          (o = !0))
        : (a = Array.isArray(e)
            ? e.map(function (e) {
                return "object" == typeof e
                  ? Object.assign({ vmId: i }, e)
                  : { name: e, vmId: i };
              })
            : { scope: null, vmId: i }),
      Promise.all(
        this.fields.filter(a).map(function (t) {
          return r._validate(t, o ? e[t.name] : t.value);
        })
      ).then(function (e) {
        return (
          n || r._handleValidationResults(e, i),
          e.every(function (e) {
            return e.valid;
          })
        );
      })
    );
  }),
  (pe.prototype.validateScopes = function (e) {
    var t = this;
    void 0 === e && (e = {});
    var r = e.silent,
      n = e.vmId;
    return this.paused
      ? Promise.resolve(!0)
      : Promise.all(
          this.fields.filter({ vmId: n }).map(function (e) {
            return t._validate(e, e.value);
          })
        ).then(function (e) {
          return (
            r || t._handleValidationResults(e, n),
            e.every(function (e) {
              return e.valid;
            })
          );
        });
  }),
  (pe.prototype.verify = function (e, t, r) {
    void 0 === r && (r = {});
    var n = {
        name: (r && r.name) || "{field}",
        rules: c(t),
        bails: s("bails", r, !0),
        forceRequired: !1,
        get isRequired() {
          return !!this.rules.required || this.forceRequired;
        },
      },
      i = Object.keys(n.rules).filter(K.isTargetRule);
    return (
      i.length &&
        r &&
        h(r.values) &&
        (n.dependencies = i.map(function (e) {
          var t = n.rules[e][0];
          return { name: e, field: { value: r.values[t] } };
        })),
      this._validate(n, e).then(function (e) {
        var t = [],
          r = {};
        return (
          e.errors.forEach(function (e) {
            t.push(e.msg), (r[e.rule] = e.msg);
          }),
          { valid: e.valid, errors: t, failedRules: r }
        );
      })
    );
  }),
  (pe.prototype.destroy = function () {
    this.$vee._vm.$off("localeChanged");
  }),
  (pe.prototype._createFields = function (e) {
    var t = this;
    e &&
      Object.keys(e).forEach(function (r) {
        var n = b({}, { name: r, rules: e[r] });
        t.attach(n);
      });
  }),
  (pe.prototype._getDateFormat = function (e) {
    var t = null;
    return (
      e.date_format && Array.isArray(e.date_format) && (t = e.date_format[0]),
      t || P.getDriver().getDateFormat(this.locale)
    );
  }),
  (pe.prototype._formatErrorMessage = function (e, t, r, n) {
    void 0 === r && (r = {}), void 0 === n && (n = null);
    var i = this._getFieldDisplayName(e),
      a = this._getLocalizedParams(t, n);
    return P.getDriver().getFieldMessage(this.locale, e.name, t.name, [
      i,
      a,
      r,
    ]);
  }),
  (pe.prototype._convertParamObjectToArray = function (e, t) {
    if (Array.isArray(e)) return e;
    var r = K.getParamNames(t);
    return r && h(e)
      ? r.reduce(function (t, r) {
          return r in e && t.push(e[r]), t;
        }, [])
      : e;
  }),
  (pe.prototype._getLocalizedParams = function (e, t) {
    void 0 === t && (t = null);
    var r = this._convertParamObjectToArray(e.params, e.name);
    return e.options.hasTarget && r && r[0]
      ? [t || P.getDriver().getAttribute(this.locale, r[0], r[0])].concat(
          r.slice(1)
        )
      : r;
  }),
  (pe.prototype._getFieldDisplayName = function (e) {
    return e.alias || P.getDriver().getAttribute(this.locale, e.name, e.name);
  }),
  (pe.prototype._convertParamArrayToObj = function (e, t) {
    var r = K.getParamNames(t);
    if (!r) return e;
    if (h(e)) {
      if (
        r.some(function (t) {
          return -1 !== Object.keys(e).indexOf(t);
        })
      )
        return e;
      e = [e];
    }
    return e.reduce(function (e, t, n) {
      return (e[r[n]] = t), e;
    }, {});
  }),
  (pe.prototype._test = function (e, t, r) {
    var n = this,
      i = K.getValidatorMethod(r.name),
      a = Array.isArray(r.params) ? g(r.params) : r.params;
    a || (a = []);
    var o = null;
    if (!i || "function" != typeof i)
      return Promise.reject(f("No such validator '" + r.name + "' exists."));
    if (r.options.hasTarget && e.dependencies) {
      var s = $(e.dependencies, function (e) {
        return e.name === r.name;
      });
      s && ((o = s.field.alias), (a = [s.field.value].concat(a.slice(1))));
    } else "required" === r.name && e.rejectsFalse && (a = a.length ? a : [!0]);
    if (r.options.isDate) {
      var u = this._getDateFormat(e.rules);
      "date_format" !== r.name && a.push(u);
    }
    var l = i(t, this._convertParamArrayToObj(a, r.name));
    return v(l.then)
      ? l.then(function (t) {
          var i = !0,
            a = {};
          return (
            Array.isArray(t)
              ? (i = t.every(function (e) {
                  return h(e) ? e.valid : e;
                }))
              : ((i = h(t) ? t.valid : t), (a = t.data)),
            {
              valid: i,
              data: l.data,
              errors: i ? [] : [n._createFieldError(e, r, a, o)],
            }
          );
        })
      : (h(l) || (l = { valid: l, data: {} }),
        {
          valid: l.valid,
          data: l.data,
          errors: l.valid ? [] : [this._createFieldError(e, r, l.data, o)],
        });
  }),
  (pe._merge = function (e, t) {
    var r = t.validator,
      n = t.options,
      i = t.paramNames,
      a = v(r) ? r : r.validate;
    r.getMessage && P.getDriver().setMessage(pe.locale, e, r.getMessage),
      K.add(e, { validate: a, options: n, paramNames: i });
  }),
  (pe._guardExtend = function (e, t) {
    if (!v(t) && !v(t.validate))
      throw f(
        "Extension Error: The validator '" +
          e +
          "' must be a function or have a 'validate' method."
      );
  }),
  (pe.prototype._createFieldError = function (e, t, r, n) {
    var i = this;
    return {
      id: e.id,
      vmId: e.vmId,
      field: e.name,
      msg: this._formatErrorMessage(e, t, r, n),
      rule: t.name,
      scope: e.scope,
      regenerate: function () {
        return i._formatErrorMessage(e, t, r, n);
      },
    };
  }),
  (pe.prototype._resolveField = function (e, t, r) {
    if ("#" === e[0]) return this.fields.findById(e.slice(1));
    if (!i(t)) return this.fields.find({ name: e, scope: t, vmId: r });
    if (I(e, ".")) {
      var n = e.split("."),
        a = n[0],
        o = n.slice(1),
        s = this.fields.find({ name: o.join("."), scope: a, vmId: r });
      if (s) return s;
    }
    return this.fields.find({ name: e, scope: null, vmId: r });
  }),
  (pe.prototype._handleFieldNotFound = function (e, t) {
    var r = i(t) ? e : (i(t) ? "" : t + ".") + e;
    return Promise.reject(
      f('Validating a non-existent field: "' + r + '". Use "attach()" first.')
    );
  }),
  (pe.prototype._handleValidationResults = function (e, t) {
    var r = this,
      n = e.map(function (e) {
        return { id: e.id };
      });
    this.errors.removeById(
      n.map(function (e) {
        return e.id;
      })
    ),
      e.forEach(function (e) {
        r.errors.remove(e.field, e.scope, t);
      });
    var i = e.reduce(function (e, t) {
      return e.push.apply(e, t.errors), e;
    }, []);
    this.errors.add(i),
      this.fields.filter(n).forEach(function (t) {
        var r = $(e, function (e) {
          return e.id === t.id;
        });
        t.setFlags({ pending: !1, valid: r.valid, validated: !0 });
      });
  }),
  (pe.prototype._shouldSkip = function (e, t) {
    return (
      !1 !== e.bails &&
      (!(!e.isDisabled || !Y().useConstraintAttrs) ||
        (!e.isRequired && (i(t) || "" === t || O(t))))
    );
  }),
  (pe.prototype._shouldBail = function (e) {
    return void 0 !== e.bails ? e.bails : this.fastExit;
  }),
  (pe.prototype._validate = function (e, t, r) {
    var n = this;
    void 0 === r && (r = {});
    var i = r.initial,
      a = Object.keys(e.rules).filter(K.isRequireRule);
    if (
      ((e.forceRequired = !1),
      a.forEach(function (r) {
        var i = K.getOptions(r),
          a = n._test(e, t, { name: r, params: e.rules[r], options: i });
        if (v(a.then)) throw f("Require rules cannot be async");
        if (!h(a)) throw f("Require rules has to return an object (see docs)");
        !0 === a.data.required && (e.forceRequired = !0);
      }),
      this._shouldSkip(e, t))
    )
      return Promise.resolve({
        valid: !0,
        id: e.id,
        field: e.name,
        scope: e.scope,
        errors: [],
      });
    var o = [],
      s = [],
      u = !1;
    return (
      v(e.checkValueChanged) && (e.flags.changed = e.checkValueChanged()),
      Object.keys(e.rules)
        .filter(function (e) {
          return !i || !K.has(e) || K.isImmediate(e);
        })
        .some(function (r) {
          var i = K.getOptions(r),
            a = n._test(e, t, { name: r, params: e.rules[r], options: i });
          return (
            v(a.then)
              ? o.push(a)
              : !a.valid && n._shouldBail(e)
              ? (s.push.apply(s, a.errors), (u = !0))
              : o.push(
                  new Promise(function (e) {
                    return e(a);
                  })
                ),
            u
          );
        }),
      u
        ? Promise.resolve({
            valid: !1,
            errors: s,
            id: e.id,
            field: e.name,
            scope: e.scope,
          })
        : Promise.all(o).then(function (t) {
            return t.reduce(
              function (e, t) {
                var r;
                return (
                  t.valid || (r = e.errors).push.apply(r, t.errors),
                  (e.valid = e.valid && t.valid),
                  e
                );
              },
              { valid: !0, errors: s, id: e.id, field: e.name, scope: e.scope }
            );
          })
    );
  }),
  Object.defineProperties(pe.prototype, ge),
  Object.defineProperties(pe, ye);
var be = function (e) {
    return h(e)
      ? Object.keys(e).reduce(function (t, r) {
          return (t[r] = be(e[r])), t;
        }, {})
      : v(e)
      ? e("{0}", ["{1}", "{2}", "{3}"])
      : e;
  },
  we = function (e, t) {
    (this.i18n = e), (this.rootKey = t);
  },
  _e = { locale: { configurable: !0 } };
(_e.locale.get = function () {
  return this.i18n.locale;
}),
  (_e.locale.set = function (e) {
    d(
      "Cannot set locale from the validator when using vue-i18n, use i18n.locale setter instead"
    );
  }),
  (we.prototype.getDateFormat = function (e) {
    return this.i18n.getDateTimeFormat(e || this.locale);
  }),
  (we.prototype.setDateFormat = function (e, t) {
    this.i18n.setDateTimeFormat(e || this.locale, t);
  }),
  (we.prototype.getMessage = function (e, t, r) {
    var n = this.rootKey + ".messages." + t,
      i = r;
    return (
      Array.isArray(r) && (i = [].concat.apply([], r)),
      this.i18n.te(n)
        ? this.i18n.t(n, i)
        : this.i18n.te(n, this.i18n.fallbackLocale)
        ? this.i18n.t(n, this.i18n.fallbackLocale, i)
        : this.i18n.t(this.rootKey + ".messages._default", i)
    );
  }),
  (we.prototype.getAttribute = function (e, t, r) {
    void 0 === r && (r = "");
    var n = this.rootKey + ".attributes." + t;
    return this.i18n.te(n) ? this.i18n.t(n) : r;
  }),
  (we.prototype.getFieldMessage = function (e, t, r, n) {
    var i = this.rootKey + ".custom." + t + "." + r;
    return this.i18n.te(i) ? this.i18n.t(i, n) : this.getMessage(e, r, n);
  }),
  (we.prototype.merge = function (e) {
    var t = this;
    Object.keys(e).forEach(function (r) {
      var n,
        a = C({}, s(r + "." + t.rootKey, t.i18n.messages, {})),
        o = C(
          a,
          (function (e) {
            var t = {};
            return (
              e.messages && (t.messages = be(e.messages)),
              e.custom && (t.custom = be(e.custom)),
              e.attributes && (t.attributes = e.attributes),
              i(e.dateFormat) || (t.dateFormat = e.dateFormat),
              t
            );
          })(e[r])
        );
      t.i18n.mergeLocaleMessage(r, (((n = {})[t.rootKey] = o), n)),
        o.dateFormat && t.i18n.setDateTimeFormat(r, o.dateFormat);
    });
  }),
  (we.prototype.setMessage = function (e, t, r) {
    var n, i;
    this.merge((((i = {})[e] = { messages: ((n = {}), (n[t] = r), n) }), i));
  }),
  (we.prototype.setAttribute = function (e, t, r) {
    var n, i;
    this.merge((((i = {})[e] = { attributes: ((n = {}), (n[t] = r), n) }), i));
  }),
  Object.defineProperties(we.prototype, _e);
var xe,
  $e,
  Te,
  De = {
    aggressive: function () {
      return { on: ["input"] };
    },
    eager: function (e) {
      return e.errors.length ? { on: ["input"] } : { on: ["change", "blur"] };
    },
    passive: function () {
      return { on: [] };
    },
    lazy: function () {
      return { on: ["change"] };
    },
  },
  Ce = function (e, t) {
    var r;
    this.configure(e),
      (Te = this),
      t && (xe = t),
      (this._validator =
        ((r = new pe(null, { fastExit: e && e.fastExit }, this)), (de = r), r)),
      this._initVM(this.config),
      this._initI18n(this.config);
  },
  Ae = { i18nDriver: { configurable: !0 }, config: { configurable: !0 } },
  Ne = { i18nDriver: { configurable: !0 }, config: { configurable: !0 } };
(Ce.setI18nDriver = function (e, t) {
  P.setDriver(e, t);
}),
  (Ce.configure = function (e) {
    H(e);
  }),
  (Ce.setMode = function (e, t) {
    if ((H({ mode: e }), t)) {
      if (!v(t)) throw new Error("A mode implementation must be a function");
      De[e] = t;
    }
  }),
  (Ce.use = function (e, t) {
    return (
      void 0 === t && (t = {}),
      v(e)
        ? Te
          ? void e({ Validator: pe, ErrorBag: j, Rules: pe.rules }, t)
          : ($e || ($e = []), void $e.push({ plugin: e, options: t }))
        : d("The plugin must be a callable function")
    );
  }),
  (Ce.install = function (e, t) {
    (xe && e === xe) ||
      ((xe = e),
      (Te = new Ce(t)),
      (pe.$vee = Te),
      (function () {
        try {
          var e = Object.defineProperty({}, "passive", {
            get: function () {
              re = !0;
            },
          });
          window.addEventListener("testPassive", null, e),
            window.removeEventListener("testPassive", null, e);
        } catch (e) {
          re = !1;
        }
      })(),
      xe.mixin(he),
      xe.directive("validate", me),
      $e &&
        ($e.forEach(function (e) {
          var t = e.plugin,
            r = e.options;
          Ce.use(t, r);
        }),
        ($e = null)));
  }),
  (Ae.i18nDriver.get = function () {
    return P.getDriver();
  }),
  (Ne.i18nDriver.get = function () {
    return P.getDriver();
  }),
  (Ae.config.get = function () {
    return Y();
  }),
  (Ne.config.get = function () {
    return Y();
  }),
  (Ce.prototype._initVM = function (e) {
    var t = this;
    this._vm = new xe({
      data: function () {
        return { errors: t._validator.errors, fields: t._validator.fields };
      },
    });
  }),
  (Ce.prototype._initI18n = function (e) {
    var t = this,
      r = e.dictionary,
      n = e.i18n,
      i = e.i18nRootKey,
      a = e.locale,
      o = function () {
        r && t.i18nDriver.merge(r), t._validator.errors.regenerate();
      };
    n
      ? (Ce.setI18nDriver("i18n", new we(n, i)), n._vm.$watch("locale", o))
      : "undefined" != typeof window && this._vm.$on("localeChanged", o),
      r && this.i18nDriver.merge(r),
      a && !n && this._validator.localize(a);
  }),
  (Ce.prototype.configure = function (e) {
    H(e);
  }),
  Object.defineProperties(Ce.prototype, Ae),
  Object.defineProperties(Ce, Ne),
  (Ce.mixin = he),
  (Ce.directive = me),
  (Ce.Validator = pe),
  (Ce.ErrorBag = j);
var Ie,
  Oe = {
    _default: function (e) {
      return "The " + e + " value is not valid";
    },
    after: function (e, t) {
      var r = t[0];
      return "The " + e + " must be after " + (t[1] ? "or equal to " : "") + r;
    },
    alpha: function (e) {
      return "The " + e + " field may only contain alphabetic characters";
    },
    alpha_dash: function (e) {
      return (
        "The " +
        e +
        " field may contain alpha-numeric characters as well as dashes and underscores"
      );
    },
    alpha_num: function (e) {
      return "The " + e + " field may only contain alpha-numeric characters";
    },
    alpha_spaces: function (e) {
      return (
        "The " +
        e +
        " field may only contain alphabetic characters as well as spaces"
      );
    },
    before: function (e, t) {
      var r = t[0];
      return "The " + e + " must be before " + (t[1] ? "or equal to " : "") + r;
    },
    between: function (e, t) {
      return "The " + e + " field must be between " + t[0] + " and " + t[1];
    },
    confirmed: function (e) {
      return "The " + e + " confirmation does not match";
    },
    credit_card: function (e) {
      return "The " + e + " field is invalid";
    },
    date_between: function (e, t) {
      return "The " + e + " must be between " + t[0] + " and " + t[1];
    },
    date_format: function (e, t) {
      return "The " + e + " must be in the format " + t[0];
    },
    decimal: function (e, t) {
      void 0 === t && (t = []);
      var r = t[0];
      return (
        void 0 === r && (r = "*"),
        "The " +
          e +
          " field must be numeric and may contain" +
          (r && "*" !== r ? " " + r : "") +
          " decimal points"
      );
    },
    digits: function (e, t) {
      return (
        "The " +
        e +
        " field must be numeric and contains exactly " +
        t[0] +
        " digits"
      );
    },
    dimensions: function (e, t) {
      return (
        "The " + e + " field must be " + t[0] + " pixels by " + t[1] + " pixels"
      );
    },
    email: function (e) {
      return "The " + e + " field must be a valid email";
    },
    excluded: function (e) {
      return "The " + e + " field must be a valid value";
    },
    ext: function (e) {
      return "The " + e + " field must be a valid file";
    },
    image: function (e) {
      return "The " + e + " field must be an image";
    },
    included: function (e) {
      return "The " + e + " field must be a valid value";
    },
    integer: function (e) {
      return "The " + e + " field must be an integer";
    },
    ip: function (e) {
      return "The " + e + " field must be a valid ip address";
    },
    ip_or_fqdn: function (e) {
      return "The " + e + " field must be a valid ip address or FQDN";
    },
    length: function (e, t) {
      var r = t[0],
        n = t[1];
      return n
        ? "The " + e + " length must be between " + r + " and " + n
        : "The " + e + " length must be " + r;
    },
    max: function (e, t) {
      return (
        "The " + e + " field may not be greater than " + t[0] + " characters"
      );
    },
    max_value: function (e, t) {
      return "The " + e + " field must be " + t[0] + " or less";
    },
    mimes: function (e) {
      return "The " + e + " field must have a valid file type";
    },
    min: function (e, t) {
      return "The " + e + " field must be at least " + t[0] + " characters";
    },
    min_value: function (e, t) {
      return "The " + e + " field must be " + t[0] + " or more";
    },
    numeric: function (e) {
      return "The " + e + " field may only contain numeric characters";
    },
    regex: function (e) {
      return "The " + e + " field format is invalid";
    },
    required: function (e) {
      return "The " + e + " field is required";
    },
    required_if: function (e, t) {
      return (
        "The " +
        e +
        " field is required when the " +
        t[0] +
        " field has this value"
      );
    },
    size: function (e, t) {
      return (
        "The " +
        e +
        " size must be less than " +
        (function (e) {
          var t = 1024,
            r =
              0 == (e = Number(e) * t)
                ? 0
                : Math.floor(Math.log(e) / Math.log(t));
          return (
            1 * (e / Math.pow(t, r)).toFixed(2) +
            " " +
            ["Byte", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][r]
          );
        })(t[0])
      );
    },
    url: function (e) {
      return "The " + e + " field is not a valid URL";
    },
  },
  Me = { name: "en", messages: Oe, attributes: {} };
function Ee(e) {
  if (null === e || !0 === e || !1 === e) return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
"undefined" != typeof VeeValidate &&
  VeeValidate.Validator.localize((((Ie = {})[Me.name] = Me), Ie));
var Fe = 6e4;
function ke(e) {
  var t = new Date(e.getTime()),
    r = t.getTimezoneOffset();
  t.setSeconds(0, 0);
  var n = t.getTime() % Fe;
  return r * Fe + n;
}
var Se = 36e5,
  qe = 6e4,
  Pe = 2,
  je = {
    dateTimeDelimeter: /[T ]/,
    plainTime: /:/,
    timeZoneDelimeter: /[Z ]/i,
    YY: /^(\d{2})$/,
    YYY: [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
    YYYY: /^(\d{4})/,
    YYYYY: [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
    MM: /^-(\d{2})$/,
    DDD: /^-?(\d{3})$/,
    MMDD: /^-?(\d{2})-?(\d{2})$/,
    Www: /^-?W(\d{2})$/,
    WwwD: /^-?W(\d{2})-?(\d{1})$/,
    HH: /^(\d{2}([.,]\d*)?)$/,
    HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
    HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-])(\d{2})$/,
    timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/,
  };
function Ue(e, t) {
  if (arguments.length < 1)
    throw new TypeError(
      "1 argument required, but only " + arguments.length + " present"
    );
  if (null === e) return new Date(NaN);
  var r = t || {},
    n = null == r.additionalDigits ? Pe : Ee(r.additionalDigits);
  if (2 !== n && 1 !== n && 0 !== n)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (
    e instanceof Date ||
    ("object" == typeof e &&
      "[object Date]" === Object.prototype.toString.call(e))
  )
    return new Date(e.getTime());
  if (
    "number" == typeof e ||
    "[object Number]" === Object.prototype.toString.call(e)
  )
    return new Date(e);
  if (
    "string" != typeof e &&
    "[object String]" !== Object.prototype.toString.call(e)
  )
    return new Date(NaN);
  var i = (function (e) {
      var t,
        r = {},
        n = e.split(je.dateTimeDelimeter);
      je.plainTime.test(n[0])
        ? ((r.date = null), (t = n[0]))
        : ((r.date = n[0]),
          (t = n[1]),
          je.timeZoneDelimeter.test(r.date) &&
            ((r.date = e.split(je.timeZoneDelimeter)[0]),
            (t = e.substr(r.date.length, e.length))));
      if (t) {
        var i = je.timezone.exec(t);
        i
          ? ((r.time = t.replace(i[1], "")), (r.timezone = i[1]))
          : (r.time = t);
      }
      return r;
    })(e),
    a = (function (e, t) {
      var r,
        n = je.YYY[t],
        i = je.YYYYY[t];
      if ((r = je.YYYY.exec(e) || i.exec(e))) {
        var a = r[1];
        return { year: parseInt(a, 10), restDateString: e.slice(a.length) };
      }
      if ((r = je.YY.exec(e) || n.exec(e))) {
        var o = r[1];
        return {
          year: 100 * parseInt(o, 10),
          restDateString: e.slice(o.length),
        };
      }
      return { year: null };
    })(i.date, n),
    o = a.year,
    s = (function (e, t) {
      if (null === t) return null;
      var r, n, i, a;
      if (0 === e.length) return (n = new Date(0)).setUTCFullYear(t), n;
      if ((r = je.MM.exec(e)))
        return (
          (n = new Date(0)),
          Le(t, (i = parseInt(r[1], 10) - 1))
            ? (n.setUTCFullYear(t, i), n)
            : new Date(NaN)
        );
      if ((r = je.DDD.exec(e))) {
        n = new Date(0);
        var o = parseInt(r[1], 10);
        return (function (e, t) {
          if (t < 1) return !1;
          var r = Ze(e);
          if (r && t > 366) return !1;
          if (!r && t > 365) return !1;
          return !0;
        })(t, o)
          ? (n.setUTCFullYear(t, 0, o), n)
          : new Date(NaN);
      }
      if ((r = je.MMDD.exec(e))) {
        (n = new Date(0)), (i = parseInt(r[1], 10) - 1);
        var s = parseInt(r[2], 10);
        return Le(t, i, s) ? (n.setUTCFullYear(t, i, s), n) : new Date(NaN);
      }
      if ((r = je.Www.exec(e)))
        return Ve(t, (a = parseInt(r[1], 10) - 1)) ? Re(t, a) : new Date(NaN);
      if ((r = je.WwwD.exec(e))) {
        a = parseInt(r[1], 10) - 1;
        var u = parseInt(r[2], 10) - 1;
        return Ve(t, a, u) ? Re(t, a, u) : new Date(NaN);
      }
      return null;
    })(a.restDateString, o);
  if (isNaN(s)) return new Date(NaN);
  if (s) {
    var u,
      l = s.getTime(),
      c = 0;
    if (
      i.time &&
      ((c = (function (e) {
        var t, r, n;
        if ((t = je.HH.exec(e)))
          return ze((r = parseFloat(t[1].replace(",", "."))))
            ? (r % 24) * Se
            : NaN;
        if ((t = je.HHMM.exec(e)))
          return ze(
            (r = parseInt(t[1], 10)),
            (n = parseFloat(t[2].replace(",", ".")))
          )
            ? (r % 24) * Se + n * qe
            : NaN;
        if ((t = je.HHMMSS.exec(e))) {
          (r = parseInt(t[1], 10)), (n = parseInt(t[2], 10));
          var i = parseFloat(t[3].replace(",", "."));
          return ze(r, n, i) ? (r % 24) * Se + n * qe + 1e3 * i : NaN;
        }
        return null;
      })(i.time)),
      isNaN(c))
    )
      return new Date(NaN);
    if (i.timezone) {
      if (
        ((u = (function (e) {
          var t, r, n;
          if ((t = je.timezoneZ.exec(e))) return 0;
          if ((t = je.timezoneHH.exec(e)))
            return (
              (n = parseInt(t[2], 10)),
              We() ? ((r = n * Se), "+" === t[1] ? -r : r) : NaN
            );
          if ((t = je.timezoneHHMM.exec(e))) {
            n = parseInt(t[2], 10);
            var i = parseInt(t[3], 10);
            return We(n, i)
              ? ((r = n * Se + i * qe), "+" === t[1] ? -r : r)
              : NaN;
          }
          return 0;
        })(i.timezone)),
        isNaN(u))
      )
        return new Date(NaN);
    } else (u = ke(new Date(l + c))), (u = ke(new Date(l + c + u)));
    return new Date(l + c + u);
  }
  return new Date(NaN);
}
function Re(e, t, r) {
  (t = t || 0), (r = r || 0);
  var n = new Date(0);
  n.setUTCFullYear(e, 0, 4);
  var i = 7 * t + r + 1 - (n.getUTCDay() || 7);
  return n.setUTCDate(n.getUTCDate() + i), n;
}
var Ye = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  He = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Ze(e) {
  return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
}
function Le(e, t, r) {
  if (t < 0 || t > 11) return !1;
  if (null != r) {
    if (r < 1) return !1;
    var n = Ze(e);
    if (n && r > He[t]) return !1;
    if (!n && r > Ye[t]) return !1;
  }
  return !0;
}
function Ve(e, t, r) {
  return !(t < 0 || t > 52) && (null == r || !(r < 0 || r > 6));
}
function ze(e, t, r) {
  return (
    (null == e || !(e < 0 || e >= 25)) &&
    (null == t || !(t < 0 || t >= 60)) &&
    (null == r || !(r < 0 || r >= 60))
  );
}
function We(e, t) {
  return null == t || !(t < 0 || t > 59);
}
function Be(e, t) {
  if (arguments.length < 1)
    throw new TypeError(
      "1 argument required, but only " + arguments.length + " present"
    );
  var r = Ue(e, t);
  return !isNaN(r);
}
var Ge = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },
  xSeconds: { one: "1 second", other: "{{count}} seconds" },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },
  xMinutes: { one: "1 minute", other: "{{count}} minutes" },
  aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
  xHours: { one: "1 hour", other: "{{count}} hours" },
  xDays: { one: "1 day", other: "{{count}} days" },
  aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
  xMonths: { one: "1 month", other: "{{count}} months" },
  aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
  xYears: { one: "1 year", other: "{{count}} years" },
  overXYears: { one: "over 1 year", other: "over {{count}} years" },
  almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
};
function Qe(e) {
  return function (t) {
    var r = t || {},
      n = r.width ? String(r.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
var Xe = {
    date: Qe({
      formats: {
        full: "EEEE, MMMM do, y",
        long: "MMMM do, y",
        medium: "MMM d, y",
        short: "MM/dd/yyyy",
      },
      defaultWidth: "full",
    }),
    time: Qe({
      formats: {
        full: "h:mm:ss a zzzz",
        long: "h:mm:ss a z",
        medium: "h:mm:ss a",
        short: "h:mm a",
      },
      defaultWidth: "full",
    }),
    dateTime: Qe({
      formats: {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}",
      },
      defaultWidth: "full",
    }),
  },
  Ke = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  };
function Je(e) {
  return function (t, r) {
    var n = r || {},
      i = n.width ? String(n.width) : e.defaultWidth;
    return (
      "formatting" === (n.context ? String(n.context) : "standalone") &&
      e.formattingValues
        ? e.formattingValues[i] || e.formattingValues[e.defaultFormattingWidth]
        : e.values[i] || e.values[e.defaultWidth]
    )[e.argumentCallback ? e.argumentCallback(t) : t];
  };
}
var et = {
  ordinalNumber: function (e, t) {
    var r = Number(e),
      n = r % 100;
    if (n > 20 || n < 10)
      switch (n % 10) {
        case 1:
          return r + "st";
        case 2:
          return r + "nd";
        case 3:
          return r + "rd";
      }
    return r + "th";
  },
  era: Je({
    values: {
      narrow: ["B", "A"],
      abbreviated: ["BC", "AD"],
      wide: ["Before Christ", "Anno Domini"],
    },
    defaultWidth: "wide",
  }),
  quarter: Je({
    values: {
      narrow: ["1", "2", "3", "4"],
      abbreviated: ["Q1", "Q2", "Q3", "Q4"],
      wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    },
    defaultWidth: "wide",
    argumentCallback: function (e) {
      return Number(e) - 1;
    },
  }),
  month: Je({
    values: {
      narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
      abbreviated: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      wide: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },
    defaultWidth: "wide",
  }),
  day: Je({
    values: {
      narrow: ["S", "M", "T", "W", "T", "F", "S"],
      short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      wide: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    },
    defaultWidth: "wide",
  }),
  dayPeriod: Je({
    values: {
      narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night",
      },
      abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night",
      },
      wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night",
      },
    },
    defaultWidth: "wide",
    formattingValues: {
      narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night",
      },
      abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night",
      },
      wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night",
      },
    },
    defaulFormattingWidth: "wide",
  }),
};
function tt(e) {
  return function (t, r) {
    var n = String(t),
      i = r || {},
      a = i.width,
      o = (a && e.matchPatterns[a]) || e.matchPatterns[e.defaultMatchWidth],
      s = n.match(o);
    if (!s) return null;
    var u,
      l = s[0],
      c = (a && e.parsePatterns[a]) || e.parsePatterns[e.defaultParseWidth];
    return (
      (u =
        "[object Array]" === Object.prototype.toString.call(c)
          ? c.findIndex(function (e) {
              return e.test(n);
            })
          : (function (e, t) {
              for (var r in e) if (e.hasOwnProperty(r) && t(e[r])) return r;
            })(c, function (e) {
              return e.test(n);
            })),
      (u = e.valueCallback ? e.valueCallback(u) : u),
      {
        value: (u = i.valueCallback ? i.valueCallback(u) : u),
        rest: n.slice(l.length),
      }
    );
  };
}
var rt,
  nt = {
    ordinalNumber:
      ((rt = {
        matchPattern: /^(\d+)(th|st|nd|rd)?/i,
        parsePattern: /\d+/i,
        valueCallback: function (e) {
          return parseInt(e, 10);
        },
      }),
      function (e, t) {
        var r = String(e),
          n = t || {},
          i = r.match(rt.matchPattern);
        if (!i) return null;
        var a = i[0],
          o = r.match(rt.parsePattern);
        if (!o) return null;
        var s = rt.valueCallback ? rt.valueCallback(o[0]) : o[0];
        return {
          value: (s = n.valueCallback ? n.valueCallback(s) : s),
          rest: r.slice(a.length),
        };
      }),
    era: tt({
      matchPatterns: {
        narrow: /^(b|a)/i,
        abbreviated:
          /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i,
      },
      defaultMatchWidth: "wide",
      parsePatterns: { any: [/^b/i, /^(a|c)/i] },
      defaultParseWidth: "any",
    }),
    quarter: tt({
      matchPatterns: {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234](th|st|nd|rd)? quarter/i,
      },
      defaultMatchWidth: "wide",
      parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
      defaultParseWidth: "any",
      valueCallback: function (e) {
        return e + 1;
      },
    }),
    month: tt({
      matchPatterns: {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        narrow: [
          /^j/i,
          /^f/i,
          /^m/i,
          /^a/i,
          /^m/i,
          /^j/i,
          /^j/i,
          /^a/i,
          /^s/i,
          /^o/i,
          /^n/i,
          /^d/i,
        ],
        any: [
          /^ja/i,
          /^f/i,
          /^mar/i,
          /^ap/i,
          /^may/i,
          /^jun/i,
          /^jul/i,
          /^au/i,
          /^s/i,
          /^o/i,
          /^n/i,
          /^d/i,
        ],
      },
      defaultParseWidth: "any",
    }),
    day: tt({
      matchPatterns: {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
      },
      defaultParseWidth: "any",
    }),
    dayPeriod: tt({
      matchPatterns: {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
      },
      defaultMatchWidth: "any",
      parsePatterns: {
        any: {
          am: /^a/i,
          pm: /^p/i,
          midnight: /^mi/i,
          noon: /^no/i,
          morning: /morning/i,
          afternoon: /afternoon/i,
          evening: /evening/i,
          night: /night/i,
        },
      },
      defaultParseWidth: "any",
    }),
  },
  it = {
    formatDistance: function (e, t, r) {
      var n;
      return (
        (r = r || {}),
        (n =
          "string" == typeof Ge[e]
            ? Ge[e]
            : 1 === t
            ? Ge[e].one
            : Ge[e].other.replace("{{count}}", t)),
        r.addSuffix ? (r.comparison > 0 ? "in " + n : n + " ago") : n
      );
    },
    formatLong: Xe,
    formatRelative: function (e, t, r, n) {
      return Ke[e];
    },
    localize: et,
    match: nt,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function at(e, t) {
  if (arguments.length < 1)
    throw new TypeError(
      "1 argument required, but only " + arguments.length + " present"
    );
  var r = Ue(e, t),
    n = r.getUTCDay(),
    i = (n < 1 ? 7 : 0) + n - 1;
  return r.setUTCDate(r.getUTCDate() - i), r.setUTCHours(0, 0, 0, 0), r;
}
function ot(e, t) {
  if (arguments.length < 1)
    throw new TypeError(
      "1 argument required, but only " + arguments.length + " present"
    );
  var r = Ue(e, t),
    n = r.getUTCFullYear(),
    i = new Date(0);
  i.setUTCFullYear(n + 1, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var a = at(i, t),
    o = new Date(0);
  o.setUTCFullYear(n, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var s = at(o, t);
  return r.getTime() >= a.getTime()
    ? n + 1
    : r.getTime() >= s.getTime()
    ? n
    : n - 1;
}
var st = 6048e5;
function ut(e, t) {
  if (arguments.length < 1)
    throw new TypeError(
      "1 argument required, but only " + arguments.length + " present"
    );
  var r = Ue(e, t),
    n =
      at(r, t).getTime() -
      (function (e, t) {
        if (arguments.length < 1)
          throw new TypeError(
            "1 argument required, but only " + arguments.length + " present"
          );
        var r = ot(e, t),
          n = new Date(0);
        return n.setUTCFullYear(r, 0, 4), n.setUTCHours(0, 0, 0, 0), at(n, t);
      })(r, t).getTime();
  return Math.round(n / st) + 1;
}
function lt(e, t) {
  if (arguments.length < 1)
    throw new TypeError(
      "1 argument required, but only " + arguments.length + " present"
    );
  var r = t || {},
    n = r.locale,
    i = n && n.options && n.options.weekStartsOn,
    a = null == i ? 0 : Ee(i),
    o = null == r.weekStartsOn ? a : Ee(r.weekStartsOn);
  if (!(o >= 0 && o <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var s = Ue(e, r),
    u = s.getUTCDay(),
    l = (u < o ? 7 : 0) + u - o;
  return s.setUTCDate(s.getUTCDate() - l), s.setUTCHours(0, 0, 0, 0), s;
}
function ct(e, t) {
  if (arguments.length < 1)
    throw new TypeError(
      "1 argument required, but only " + arguments.length + " present"
    );
  var r = Ue(e, t),
    n = r.getUTCFullYear(),
    i = t || {},
    a = i.locale,
    o = a && a.options && a.options.firstWeekContainsDate,
    s = null == o ? 1 : Ee(o),
    u = null == i.firstWeekContainsDate ? s : Ee(i.firstWeekContainsDate);
  if (!(u >= 1 && u <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var l = new Date(0);
  l.setUTCFullYear(n + 1, 0, u), l.setUTCHours(0, 0, 0, 0);
  var c = lt(l, t),
    d = new Date(0);
  d.setUTCFullYear(n, 0, u), d.setUTCHours(0, 0, 0, 0);
  var f = lt(d, t);
  return r.getTime() >= c.getTime()
    ? n + 1
    : r.getTime() >= f.getTime()
    ? n
    : n - 1;
}
var dt = 6048e5;
function ft(e, t) {
  if (arguments.length < 1)
    throw new TypeError(
      "1 argument required, but only " + arguments.length + " present"
    );
  var r = Ue(e, t),
    n =
      lt(r, t).getTime() -
      (function (e, t) {
        if (arguments.length < 1)
          throw new TypeError(
            "1 argument required, but only " + arguments.length + " present"
          );
        var r = t || {},
          n = r.locale,
          i = n && n.options && n.options.firstWeekContainsDate,
          a = null == i ? 1 : Ee(i),
          o = null == r.firstWeekContainsDate ? a : Ee(r.firstWeekContainsDate),
          s = ct(e, t),
          u = new Date(0);
        return u.setUTCFullYear(s, 0, o), u.setUTCHours(0, 0, 0, 0), lt(u, t);
      })(r, t).getTime();
  return Math.round(n / dt) + 1;
}
var ht = "midnight",
  vt = "noon",
  mt = "morning",
  pt = "afternoon",
  gt = "evening",
  yt = "night",
  bt = {
    G: function (e, t, r) {
      var n = e.getUTCFullYear() > 0 ? 1 : 0;
      switch (t) {
        case "G":
        case "GG":
        case "GGG":
          return r.era(n, { width: "abbreviated" });
        case "GGGGG":
          return r.era(n, { width: "narrow" });
        default:
          return r.era(n, { width: "wide" });
      }
    },
    y: function (e, t, r, n) {
      var i = e.getUTCFullYear(),
        a = i > 0 ? i : 1 - i;
      return "yy" === t
        ? wt(a % 100, 2)
        : "yo" === t
        ? r.ordinalNumber(a, { unit: "year" })
        : wt(a, t.length);
    },
    Y: function (e, t, r, n) {
      var i = ct(e, n),
        a = i > 0 ? i : 1 - i;
      return "YY" === t
        ? wt(a % 100, 2)
        : "Yo" === t
        ? r.ordinalNumber(a, { unit: "year" })
        : wt(a, t.length);
    },
    R: function (e, t, r, n) {
      return wt(ot(e, n), t.length);
    },
    u: function (e, t, r, n) {
      return wt(e.getUTCFullYear(), t.length);
    },
    Q: function (e, t, r, n) {
      var i = Math.ceil((e.getUTCMonth() + 1) / 3);
      switch (t) {
        case "Q":
          return String(i);
        case "QQ":
          return wt(i, 2);
        case "Qo":
          return r.ordinalNumber(i, { unit: "quarter" });
        case "QQQ":
          return r.quarter(i, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return r.quarter(i, { width: "narrow", context: "formatting" });
        default:
          return r.quarter(i, { width: "wide", context: "formatting" });
      }
    },
    q: function (e, t, r, n) {
      var i = Math.ceil((e.getUTCMonth() + 1) / 3);
      switch (t) {
        case "q":
          return String(i);
        case "qq":
          return wt(i, 2);
        case "qo":
          return r.ordinalNumber(i, { unit: "quarter" });
        case "qqq":
          return r.quarter(i, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return r.quarter(i, { width: "narrow", context: "standalone" });
        default:
          return r.quarter(i, { width: "wide", context: "standalone" });
      }
    },
    M: function (e, t, r, n) {
      var i = e.getUTCMonth();
      switch (t) {
        case "M":
          return String(i + 1);
        case "MM":
          return wt(i + 1, 2);
        case "Mo":
          return r.ordinalNumber(i + 1, { unit: "month" });
        case "MMM":
          return r.month(i, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return r.month(i, { width: "narrow", context: "formatting" });
        default:
          return r.month(i, { width: "wide", context: "formatting" });
      }
    },
    L: function (e, t, r, n) {
      var i = e.getUTCMonth();
      switch (t) {
        case "L":
          return String(i + 1);
        case "LL":
          return wt(i + 1, 2);
        case "Lo":
          return r.ordinalNumber(i + 1, { unit: "month" });
        case "LLL":
          return r.month(i, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return r.month(i, { width: "narrow", context: "standalone" });
        default:
          return r.month(i, { width: "wide", context: "standalone" });
      }
    },
    w: function (e, t, r, n) {
      var i = ft(e, n);
      return "wo" === t
        ? r.ordinalNumber(i, { unit: "week" })
        : wt(i, t.length);
    },
    I: function (e, t, r, n) {
      var i = ut(e, n);
      return "Io" === t
        ? r.ordinalNumber(i, { unit: "week" })
        : wt(i, t.length);
    },
    d: function (e, t, r, n) {
      var i = e.getUTCDate();
      return "do" === t
        ? r.ordinalNumber(i, { unit: "date" })
        : wt(i, t.length);
    },
    D: function (e, t, r, n) {
      var i = (function (e, t) {
        if (arguments.length < 1)
          throw new TypeError(
            "1 argument required, but only " + arguments.length + " present"
          );
        var r = Ue(e, t),
          n = r.getTime();
        r.setUTCMonth(0, 1), r.setUTCHours(0, 0, 0, 0);
        var i = n - r.getTime();
        return Math.floor(i / 864e5) + 1;
      })(e, n);
      return "Do" === t
        ? r.ordinalNumber(i, { unit: "dayOfYear" })
        : wt(i, t.length);
    },
    E: function (e, t, r, n) {
      var i = e.getUTCDay();
      switch (t) {
        case "E":
        case "EE":
        case "EEE":
          return r.day(i, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return r.day(i, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return r.day(i, { width: "short", context: "formatting" });
        default:
          return r.day(i, { width: "wide", context: "formatting" });
      }
    },
    e: function (e, t, r, n) {
      var i = e.getUTCDay(),
        a = (i - n.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "e":
          return String(a);
        case "ee":
          return wt(a, 2);
        case "eo":
          return r.ordinalNumber(a, { unit: "day" });
        case "eee":
          return r.day(i, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return r.day(i, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return r.day(i, { width: "short", context: "formatting" });
        default:
          return r.day(i, { width: "wide", context: "formatting" });
      }
    },
    c: function (e, t, r, n) {
      var i = e.getUTCDay(),
        a = (i - n.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "c":
          return String(a);
        case "cc":
          return wt(a, t.length);
        case "co":
          return r.ordinalNumber(a, { unit: "day" });
        case "ccc":
          return r.day(i, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return r.day(i, { width: "narrow", context: "standalone" });
        case "cccccc":
          return r.day(i, { width: "short", context: "standalone" });
        default:
          return r.day(i, { width: "wide", context: "standalone" });
      }
    },
    i: function (e, t, r, n) {
      var i = e.getUTCDay(),
        a = 0 === i ? 7 : i;
      switch (t) {
        case "i":
          return String(a);
        case "ii":
          return wt(a, t.length);
        case "io":
          return r.ordinalNumber(a, { unit: "day" });
        case "iii":
          return r.day(i, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return r.day(i, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return r.day(i, { width: "short", context: "formatting" });
        default:
          return r.day(i, { width: "wide", context: "formatting" });
      }
    },
    a: function (e, t, r) {
      var n = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
        case "aaa":
          return r.dayPeriod(n, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaaaa":
          return r.dayPeriod(n, { width: "narrow", context: "formatting" });
        default:
          return r.dayPeriod(n, { width: "wide", context: "formatting" });
      }
    },
    b: function (e, t, r) {
      var n,
        i = e.getUTCHours();
      switch (
        ((n = 12 === i ? vt : 0 === i ? ht : i / 12 >= 1 ? "pm" : "am"), t)
      ) {
        case "b":
        case "bb":
        case "bbb":
          return r.dayPeriod(n, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbbbb":
          return r.dayPeriod(n, { width: "narrow", context: "formatting" });
        default:
          return r.dayPeriod(n, { width: "wide", context: "formatting" });
      }
    },
    B: function (e, t, r) {
      var n,
        i = e.getUTCHours();
      switch (((n = i >= 17 ? gt : i >= 12 ? pt : i >= 4 ? mt : yt), t)) {
        case "B":
        case "BB":
        case "BBB":
          return r.dayPeriod(n, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return r.dayPeriod(n, { width: "narrow", context: "formatting" });
        default:
          return r.dayPeriod(n, { width: "wide", context: "formatting" });
      }
    },
    h: function (e, t, r, n) {
      var i = e.getUTCHours() % 12;
      return (
        0 === i && (i = 12),
        "ho" === t ? r.ordinalNumber(i, { unit: "hour" }) : wt(i, t.length)
      );
    },
    H: function (e, t, r, n) {
      var i = e.getUTCHours();
      return "Ho" === t
        ? r.ordinalNumber(i, { unit: "hour" })
        : wt(i, t.length);
    },
    K: function (e, t, r, n) {
      var i = e.getUTCHours() % 12;
      return "Ko" === t
        ? r.ordinalNumber(i, { unit: "hour" })
        : wt(i, t.length);
    },
    k: function (e, t, r, n) {
      var i = e.getUTCHours();
      return (
        0 === i && (i = 24),
        "ko" === t ? r.ordinalNumber(i, { unit: "hour" }) : wt(i, t.length)
      );
    },
    m: function (e, t, r, n) {
      var i = e.getUTCMinutes();
      return "mo" === t
        ? r.ordinalNumber(i, { unit: "minute" })
        : wt(i, t.length);
    },
    s: function (e, t, r, n) {
      var i = e.getUTCSeconds();
      return "so" === t
        ? r.ordinalNumber(i, { unit: "second" })
        : wt(i, t.length);
    },
    S: function (e, t, r, n) {
      var i = t.length,
        a = e.getUTCMilliseconds();
      return wt(Math.floor(a * Math.pow(10, i - 3)), i);
    },
    X: function (e, t, r, n) {
      var i = (n._originalDate || e).getTimezoneOffset();
      if (0 === i) return "Z";
      switch (t) {
        case "X":
          return xt(i);
        case "XXXX":
        case "XX":
          return _t(i);
        default:
          return _t(i, ":");
      }
    },
    x: function (e, t, r, n) {
      var i = (n._originalDate || e).getTimezoneOffset();
      switch (t) {
        case "x":
          return xt(i);
        case "xxxx":
        case "xx":
          return _t(i);
        default:
          return _t(i, ":");
      }
    },
    O: function (e, t, r, n) {
      var i = (n._originalDate || e).getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + $t(i, ":");
        default:
          return "GMT" + _t(i, ":");
      }
    },
    z: function (e, t, r, n) {
      var i = (n._originalDate || e).getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + $t(i, ":");
        default:
          return "GMT" + _t(i, ":");
      }
    },
    t: function (e, t, r, n) {
      var i = n._originalDate || e;
      return wt(Math.floor(i.getTime() / 1e3), t.length);
    },
    T: function (e, t, r, n) {
      return wt((n._originalDate || e).getTime(), t.length);
    },
  };
function wt(e, t) {
  for (var r = e < 0 ? "-" : "", n = Math.abs(e).toString(); n.length < t; )
    n = "0" + n;
  return r + n;
}
function _t(e, t) {
  var r = t || "",
    n = e > 0 ? "-" : "+",
    i = Math.abs(e);
  return n + wt(Math.floor(i / 60), 2) + r + wt(i % 60, 2);
}
function xt(e, t) {
  return e % 60 == 0 ? (e > 0 ? "-" : "+") + wt(Math.abs(e) / 60, 2) : _t(e, t);
}
function $t(e, t) {
  var r = e > 0 ? "-" : "+",
    n = Math.abs(e),
    i = Math.floor(n / 60),
    a = n % 60;
  if (0 === a) return r + String(i);
  var o = t || "";
  return r + String(i) + o + wt(a, 2);
}
function Tt(e, t, r) {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    default:
      return t.date({ width: "full" });
  }
}
function Dt(e, t, r) {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    default:
      return t.time({ width: "full" });
  }
}
var Ct = {
  p: Dt,
  P: function (e, t, r) {
    var n,
      i = e.match(/(P+)(p+)?/),
      a = i[1],
      o = i[2];
    if (!o) return Tt(e, t);
    switch (a) {
      case "P":
        n = t.dateTime({ width: "short" });
        break;
      case "PP":
        n = t.dateTime({ width: "medium" });
        break;
      case "PPP":
        n = t.dateTime({ width: "long" });
        break;
      default:
        n = t.dateTime({ width: "full" });
    }
    return n.replace("{{date}}", Tt(a, t)).replace("{{time}}", Dt(o, t));
  },
};
function At(e, t, r) {
  if (arguments.length < 2)
    throw new TypeError(
      "2 arguments required, but only " + arguments.length + " present"
    );
  return (function (e, t, r) {
    if (arguments.length < 2)
      throw new TypeError(
        "2 arguments required, but only " + arguments.length + " present"
      );
    var n = Ue(e, r).getTime(),
      i = Ee(t);
    return new Date(n + i);
  })(e, -Ee(t), r);
}
var Nt = ["D", "DD", "YY", "YYYY"];
function It(e) {
  return -1 !== Nt.indexOf(e);
}
function Ot(e) {
  throw new RangeError(
    "`options.awareOfUnicodeTokens` must be set to `true` to use `" +
      e +
      "` token; see: https://git.io/fxCyr"
  );
}
var Mt = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Et = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Ft = /^'(.*?)'?$/,
  kt = /''/g;
function St(e, t, r) {
  if (arguments.length < 2)
    throw new TypeError(
      "2 arguments required, but only " + arguments.length + " present"
    );
  var n = String(t),
    i = r || {},
    a = i.locale || it,
    o = a.options && a.options.firstWeekContainsDate,
    s = null == o ? 1 : Ee(o),
    u = null == i.firstWeekContainsDate ? s : Ee(i.firstWeekContainsDate);
  if (!(u >= 1 && u <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var l = a.options && a.options.weekStartsOn,
    c = null == l ? 0 : Ee(l),
    d = null == i.weekStartsOn ? c : Ee(i.weekStartsOn);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!a.localize)
    throw new RangeError("locale must contain localize property");
  if (!a.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var f = Ue(e, i);
  if (!Be(f, i)) return "Invalid Date";
  var h = At(f, ke(f), i),
    v = {
      firstWeekContainsDate: u,
      weekStartsOn: d,
      locale: a,
      _originalDate: f,
    };
  return n
    .match(Et)
    .map(function (e) {
      var t = e[0];
      return "p" === t || "P" === t ? (0, Ct[t])(e, a.formatLong, v) : e;
    })
    .join("")
    .match(Mt)
    .map(function (e) {
      if ("''" === e) return "'";
      var t = e[0];
      if ("'" === t) return e.match(Ft)[1].replace(kt, "'");
      var r = bt[t];
      return r
        ? (!i.awareOfUnicodeTokens && It(e) && Ot(e), r(h, e, a.localize, v))
        : e;
    })
    .join("");
}
function qt(e, t, r) {
  if (arguments.length < 2)
    throw new TypeError(
      "2 arguments required, but only " + arguments.length + " present"
    );
  var n = Ue(e, r),
    i = Ue(t, r);
  return n.getTime() > i.getTime();
}
function Pt(e, t, r) {
  if (arguments.length < 2)
    throw new TypeError(
      "2 arguments required, but only " + arguments.length + " present"
    );
  var n = Ue(e, r),
    i = Ue(t, r);
  return n.getTime() < i.getTime();
}
function jt(e, t, r) {
  if (arguments.length < 2)
    throw new TypeError(
      "2 arguments required, but only " + arguments.length + " present"
    );
  var n = Ue(e, r),
    i = Ue(t, r);
  return n.getTime() === i.getTime();
}
function Ut(e, t, r) {
  if (arguments.length < 2)
    throw new TypeError(
      "2 arguments required, but only " + arguments.length + " present"
    );
  var n = r || {},
    i = n.locale,
    a = i && i.options && i.options.weekStartsOn,
    o = null == a ? 0 : Ee(a),
    s = null == n.weekStartsOn ? o : Ee(n.weekStartsOn);
  if (!(s >= 0 && s <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var u = Ue(e, r),
    l = Ee(t),
    c = (((l % 7) + 7) % 7 < s ? 7 : 0) + l - u.getUTCDay();
  return u.setUTCDate(u.getUTCDate() + c), u;
}
var Rt = {
    month: /^(1[0-2]|0?\d)/,
    date: /^(3[0-1]|[0-2]?\d)/,
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    week: /^(5[0-3]|[0-4]?\d)/,
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    hour11h: /^(1[0-1]|0?\d)/,
    hour12h: /^(1[0-2]|0?\d)/,
    minute: /^[0-5]?\d/,
    second: /^[0-5]?\d/,
    singleDigit: /^\d/,
    twoDigits: /^\d{1,2}/,
    threeDigits: /^\d{1,3}/,
    fourDigits: /^\d{1,4}/,
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    twoDigitsSigned: /^-?\d{1,2}/,
    threeDigitsSigned: /^-?\d{1,3}/,
    fourDigitsSigned: /^-?\d{1,4}/,
  },
  Yt = /^([+-])(\d{2})(\d{2})?|Z/,
  Ht = /^([+-])(\d{2})(\d{2})|Z/,
  Zt = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  Lt = /^([+-])(\d{2}):(\d{2})|Z/,
  Vt = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;
function zt(e, t, r) {
  var n = t.match(e);
  if (!n) return null;
  var i = parseInt(n[0], 10);
  return { value: r ? r(i) : i, rest: t.slice(n[0].length) };
}
function Wt(e, t) {
  var r = t.match(e);
  return r
    ? "Z" === r[0]
      ? { value: 0, rest: t.slice(1) }
      : {
          value:
            ("+" === r[1] ? 1 : -1) *
            (36e5 * (r[2] ? parseInt(r[2], 10) : 0) +
              6e4 * (r[3] ? parseInt(r[3], 10) : 0) +
              1e3 * (r[5] ? parseInt(r[5], 10) : 0)),
          rest: t.slice(r[0].length),
        }
    : null;
}
function Bt(e, t) {
  return zt(Rt.anyDigitsSigned, e, t);
}
function Gt(e, t, r) {
  switch (e) {
    case 1:
      return zt(Rt.singleDigit, t, r);
    case 2:
      return zt(Rt.twoDigits, t, r);
    case 3:
      return zt(Rt.threeDigits, t, r);
    case 4:
      return zt(Rt.fourDigits, t, r);
    default:
      return zt(new RegExp("^\\d{1," + e + "}"), t, r);
  }
}
function Qt(e, t, r) {
  switch (e) {
    case 1:
      return zt(Rt.singleDigitSigned, t, r);
    case 2:
      return zt(Rt.twoDigitsSigned, t, r);
    case 3:
      return zt(Rt.threeDigitsSigned, t, r);
    case 4:
      return zt(Rt.fourDigitsSigned, t, r);
    default:
      return zt(new RegExp("^-?\\d{1," + e + "}"), t, r);
  }
}
function Xt(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    default:
      return 0;
  }
}
function Kt(e, t) {
  var r,
    n = t > 0,
    i = n ? t : 1 - t;
  if (i <= 50) r = e || 100;
  else {
    var a = i + 50;
    r = e + 100 * Math.floor(a / 100) - (e >= a % 100 ? 100 : 0);
  }
  return n ? r : 1 - r;
}
var Jt = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  er = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function tr(e) {
  return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
}
var rr = {
    G: {
      priority: 140,
      parse: function (e, t, r, n) {
        switch (t) {
          case "G":
          case "GG":
          case "GGG":
            return (
              r.era(e, { width: "abbreviated" }) ||
              r.era(e, { width: "narrow" })
            );
          case "GGGGG":
            return r.era(e, { width: "narrow" });
          default:
            return (
              r.era(e, { width: "wide" }) ||
              r.era(e, { width: "abbreviated" }) ||
              r.era(e, { width: "narrow" })
            );
        }
      },
      set: function (e, t, r) {
        return (
          e.setUTCFullYear(1 === t ? 10 : -9, 0, 1),
          e.setUTCHours(0, 0, 0, 0),
          e
        );
      },
    },
    y: {
      priority: 130,
      parse: function (e, t, r, n) {
        var i = function (e) {
          return { year: e, isTwoDigitYear: "yy" === t };
        };
        switch (t) {
          case "y":
            return Gt(4, e, i);
          case "yo":
            return r.ordinalNumber(e, { unit: "year", valueCallback: i });
          default:
            return Gt(t.length, e, i);
        }
      },
      validate: function (e, t, r) {
        return t.isTwoDigitYear || t.year > 0;
      },
      set: function (e, t, r) {
        var n = ct(e, r);
        if (t.isTwoDigitYear) {
          var i = Kt(t.year, n);
          return e.setUTCFullYear(i, 0, 1), e.setUTCHours(0, 0, 0, 0), e;
        }
        var a = n > 0 ? t.year : 1 - t.year;
        return e.setUTCFullYear(a, 0, 1), e.setUTCHours(0, 0, 0, 0), e;
      },
    },
    Y: {
      priority: 130,
      parse: function (e, t, r, n) {
        var i = function (e) {
          return { year: e, isTwoDigitYear: "YY" === t };
        };
        switch (t) {
          case "Y":
            return Gt(4, e, i);
          case "Yo":
            return r.ordinalNumber(e, { unit: "year", valueCallback: i });
          default:
            return Gt(t.length, e, i);
        }
      },
      validate: function (e, t, r) {
        return t.isTwoDigitYear || t.year > 0;
      },
      set: function (e, t, r) {
        var n = e.getUTCFullYear();
        if (t.isTwoDigitYear) {
          var i = Kt(t.year, n);
          return (
            e.setUTCFullYear(i, 0, r.firstWeekContainsDate),
            e.setUTCHours(0, 0, 0, 0),
            lt(e, r)
          );
        }
        var a = n > 0 ? t.year : 1 - t.year;
        return (
          e.setUTCFullYear(a, 0, r.firstWeekContainsDate),
          e.setUTCHours(0, 0, 0, 0),
          lt(e, r)
        );
      },
    },
    R: {
      priority: 130,
      parse: function (e, t, r, n) {
        return Qt("R" === t ? 4 : t.length, e);
      },
      set: function (e, t, r) {
        var n = new Date(0);
        return n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0), at(n);
      },
    },
    u: {
      priority: 130,
      parse: function (e, t, r, n) {
        return Qt("u" === t ? 4 : t.length, e);
      },
      set: function (e, t, r) {
        return e.setUTCFullYear(t, 0, 1), e.setUTCHours(0, 0, 0, 0), e;
      },
    },
    Q: {
      priority: 120,
      parse: function (e, t, r, n) {
        switch (t) {
          case "Q":
          case "QQ":
            return Gt(t.length, e);
          case "Qo":
            return r.ordinalNumber(e, { unit: "quarter" });
          case "QQQ":
            return (
              r.quarter(e, { width: "abbreviated", context: "formatting" }) ||
              r.quarter(e, { width: "narrow", context: "formatting" })
            );
          case "QQQQQ":
            return r.quarter(e, { width: "narrow", context: "formatting" });
          default:
            return (
              r.quarter(e, { width: "wide", context: "formatting" }) ||
              r.quarter(e, { width: "abbreviated", context: "formatting" }) ||
              r.quarter(e, { width: "narrow", context: "formatting" })
            );
        }
      },
      validate: function (e, t, r) {
        return t >= 1 && t <= 4;
      },
      set: function (e, t, r) {
        return e.setUTCMonth(3 * (t - 1), 1), e.setUTCHours(0, 0, 0, 0), e;
      },
    },
    q: {
      priority: 120,
      parse: function (e, t, r, n) {
        switch (t) {
          case "q":
          case "qq":
            return Gt(t.length, e);
          case "qo":
            return r.ordinalNumber(e, { unit: "quarter" });
          case "qqq":
            return (
              r.quarter(e, { width: "abbreviated", context: "standalone" }) ||
              r.quarter(e, { width: "narrow", context: "standalone" })
            );
          case "qqqqq":
            return r.quarter(e, { width: "narrow", context: "standalone" });
          default:
            return (
              r.quarter(e, { width: "wide", context: "standalone" }) ||
              r.quarter(e, { width: "abbreviated", context: "standalone" }) ||
              r.quarter(e, { width: "narrow", context: "standalone" })
            );
        }
      },
      validate: function (e, t, r) {
        return t >= 1 && t <= 4;
      },
      set: function (e, t, r) {
        return e.setUTCMonth(3 * (t - 1), 1), e.setUTCHours(0, 0, 0, 0), e;
      },
    },
    M: {
      priority: 110,
      parse: function (e, t, r, n) {
        var i = function (e) {
          return e - 1;
        };
        switch (t) {
          case "M":
            return zt(Rt.month, e, i);
          case "MM":
            return Gt(2, e, i);
          case "Mo":
            return r.ordinalNumber(e, { unit: "month", valueCallback: i });
          case "MMM":
            return (
              r.month(e, { width: "abbreviated", context: "formatting" }) ||
              r.month(e, { width: "narrow", context: "formatting" })
            );
          case "MMMMM":
            return r.month(e, { width: "narrow", context: "formatting" });
          default:
            return (
              r.month(e, { width: "wide", context: "formatting" }) ||
              r.month(e, { width: "abbreviated", context: "formatting" }) ||
              r.month(e, { width: "narrow", context: "formatting" })
            );
        }
      },
      validate: function (e, t, r) {
        return t >= 0 && t <= 11;
      },
      set: function (e, t, r) {
        return e.setUTCMonth(t, 1), e.setUTCHours(0, 0, 0, 0), e;
      },
    },
    L: {
      priority: 110,
      parse: function (e, t, r, n) {
        var i = function (e) {
          return e - 1;
        };
        switch (t) {
          case "L":
            return zt(Rt.month, e, i);
          case "LL":
            return Gt(2, e, i);
          case "Lo":
            return r.ordinalNumber(e, { unit: "month", valueCallback: i });
          case "LLL":
            return (
              r.month(e, { width: "abbreviated", context: "standalone" }) ||
              r.month(e, { width: "narrow", context: "standalone" })
            );
          case "LLLLL":
            return r.month(e, { width: "narrow", context: "standalone" });
          default:
            return (
              r.month(e, { width: "wide", context: "standalone" }) ||
              r.month(e, { width: "abbreviated", context: "standalone" }) ||
              r.month(e, { width: "narrow", context: "standalone" })
            );
        }
      },
      validate: function (e, t, r) {
        return t >= 0 && t <= 11;
      },
      set: function (e, t, r) {
        return e.setUTCMonth(t, 1), e.setUTCHours(0, 0, 0, 0), e;
      },
    },
    w: {
      priority: 100,
      parse: function (e, t, r, n) {
        switch (t) {
          case "w":
            return zt(Rt.week, e);
          case "wo":
            return r.ordinalNumber(e, { unit: "week" });
          default:
            return Gt(t.length, e);
        }
      },
      validate: function (e, t, r) {
        return t >= 1 && t <= 53;
      },
      set: function (e, t, r) {
        return lt(
          (function (e, t, r) {
            if (arguments.length < 2)
              throw new TypeError(
                "2 arguments required, but only " +
                  arguments.length +
                  " present"
              );
            var n = Ue(e, r),
              i = Ee(t),
              a = ft(n, r) - i;
            return n.setUTCDate(n.getUTCDate() - 7 * a), n;
          })(e, t, r),
          r
        );
      },
    },
    I: {
      priority: 100,
      parse: function (e, t, r, n) {
        switch (t) {
          case "I":
            return zt(Rt.week, e);
          case "Io":
            return r.ordinalNumber(e, { unit: "week" });
          default:
            return Gt(t.length, e);
        }
      },
      validate: function (e, t, r) {
        return t >= 1 && t <= 53;
      },
      set: function (e, t, r) {
        return at(
          (function (e, t, r) {
            if (arguments.length < 2)
              throw new TypeError(
                "2 arguments required, but only " +
                  arguments.length +
                  " present"
              );
            var n = Ue(e, r),
              i = Ee(t),
              a = ut(n, r) - i;
            return n.setUTCDate(n.getUTCDate() - 7 * a), n;
          })(e, t, r),
          r
        );
      },
    },
    d: {
      priority: 90,
      parse: function (e, t, r, n) {
        switch (t) {
          case "d":
            return zt(Rt.date, e);
          case "do":
            return r.ordinalNumber(e, { unit: "date" });
          default:
            return Gt(t.length, e);
        }
      },
      validate: function (e, t, r) {
        var n = tr(e.getUTCFullYear()),
          i = e.getUTCMonth();
        return n ? t >= 1 && t <= er[i] : t >= 1 && t <= Jt[i];
      },
      set: function (e, t, r) {
        return e.setUTCDate(t), e.setUTCHours(0, 0, 0, 0), e;
      },
    },
    D: {
      priority: 90,
      parse: function (e, t, r, n) {
        switch (t) {
          case "D":
          case "DD":
            return zt(Rt.dayOfYear, e);
          case "Do":
            return r.ordinalNumber(e, { unit: "date" });
          default:
            return Gt(t.length, e);
        }
      },
      validate: function (e, t, r) {
        return tr(e.getUTCFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
      },
      set: function (e, t, r) {
        return e.setUTCMonth(0, t), e.setUTCHours(0, 0, 0, 0), e;
      },
    },
    E: {
      priority: 90,
      parse: function (e, t, r, n) {
        switch (t) {
          case "E":
          case "EE":
          case "EEE":
            return (
              r.day(e, { width: "abbreviated", context: "formatting" }) ||
              r.day(e, { width: "short", context: "formatting" }) ||
              r.day(e, { width: "narrow", context: "formatting" })
            );
          case "EEEEE":
            return r.day(e, { width: "narrow", context: "formatting" });
          case "EEEEEE":
            return (
              r.day(e, { width: "short", context: "formatting" }) ||
              r.day(e, { width: "narrow", context: "formatting" })
            );
          default:
            return (
              r.day(e, { width: "wide", context: "formatting" }) ||
              r.day(e, { width: "abbreviated", context: "formatting" }) ||
              r.day(e, { width: "short", context: "formatting" }) ||
              r.day(e, { width: "narrow", context: "formatting" })
            );
        }
      },
      validate: function (e, t, r) {
        return t >= 0 && t <= 6;
      },
      set: function (e, t, r) {
        return (e = Ut(e, t, r)).setUTCHours(0, 0, 0, 0), e;
      },
    },
    e: {
      priority: 90,
      parse: function (e, t, r, n) {
        var i = function (e) {
          var t = 7 * Math.floor((e - 1) / 7);
          return ((e + n.weekStartsOn + 6) % 7) + t;
        };
        switch (t) {
          case "e":
          case "ee":
            return Gt(t.length, e, i);
          case "eo":
            return r.ordinalNumber(e, { unit: "day", valueCallback: i });
          case "eee":
            return (
              r.day(e, { width: "abbreviated", context: "formatting" }) ||
              r.day(e, { width: "short", context: "formatting" }) ||
              r.day(e, { width: "narrow", context: "formatting" })
            );
          case "eeeee":
            return r.day(e, { width: "narrow", context: "formatting" });
          case "eeeeee":
            return (
              r.day(e, { width: "short", context: "formatting" }) ||
              r.day(e, { width: "narrow", context: "formatting" })
            );
          default:
            return (
              r.day(e, { width: "wide", context: "formatting" }) ||
              r.day(e, { width: "abbreviated", context: "formatting" }) ||
              r.day(e, { width: "short", context: "formatting" }) ||
              r.day(e, { width: "narrow", context: "formatting" })
            );
        }
      },
      validate: function (e, t, r) {
        return t >= 0 && t <= 6;
      },
      set: function (e, t, r) {
        return (e = Ut(e, t, r)).setUTCHours(0, 0, 0, 0), e;
      },
    },
    c: {
      priority: 90,
      parse: function (e, t, r, n) {
        var i = function (e) {
          var t = 7 * Math.floor((e - 1) / 7);
          return ((e + n.weekStartsOn + 6) % 7) + t;
        };
        switch (t) {
          case "c":
          case "cc":
            return Gt(t.length, e, i);
          case "co":
            return r.ordinalNumber(e, { unit: "day", valueCallback: i });
          case "ccc":
            return (
              r.day(e, { width: "abbreviated", context: "standalone" }) ||
              r.day(e, { width: "short", context: "standalone" }) ||
              r.day(e, { width: "narrow", context: "standalone" })
            );
          case "ccccc":
            return r.day(e, { width: "narrow", context: "standalone" });
          case "cccccc":
            return (
              r.day(e, { width: "short", context: "standalone" }) ||
              r.day(e, { width: "narrow", context: "standalone" })
            );
          default:
            return (
              r.day(e, { width: "wide", context: "standalone" }) ||
              r.day(e, { width: "abbreviated", context: "standalone" }) ||
              r.day(e, { width: "short", context: "standalone" }) ||
              r.day(e, { width: "narrow", context: "standalone" })
            );
        }
      },
      validate: function (e, t, r) {
        return t >= 0 && t <= 6;
      },
      set: function (e, t, r) {
        return (e = Ut(e, t, r)).setUTCHours(0, 0, 0, 0), e;
      },
    },
    i: {
      priority: 90,
      parse: function (e, t, r, n) {
        var i = function (e) {
          return 0 === e ? 7 : e;
        };
        switch (t) {
          case "i":
          case "ii":
            return Gt(t.length, e);
          case "io":
            return r.ordinalNumber(e, { unit: "day" });
          case "iii":
            return (
              r.day(e, {
                width: "abbreviated",
                context: "formatting",
                valueCallback: i,
              }) ||
              r.day(e, {
                width: "short",
                context: "formatting",
                valueCallback: i,
              }) ||
              r.day(e, {
                width: "narrow",
                context: "formatting",
                valueCallback: i,
              })
            );
          case "iiiii":
            return r.day(e, {
              width: "narrow",
              context: "formatting",
              valueCallback: i,
            });
          case "iiiiii":
            return (
              r.day(e, {
                width: "short",
                context: "formatting",
                valueCallback: i,
              }) ||
              r.day(e, {
                width: "narrow",
                context: "formatting",
                valueCallback: i,
              })
            );
          default:
            return (
              r.day(e, {
                width: "wide",
                context: "formatting",
                valueCallback: i,
              }) ||
              r.day(e, {
                width: "abbreviated",
                context: "formatting",
                valueCallback: i,
              }) ||
              r.day(e, {
                width: "short",
                context: "formatting",
                valueCallback: i,
              }) ||
              r.day(e, {
                width: "narrow",
                context: "formatting",
                valueCallback: i,
              })
            );
        }
      },
      validate: function (e, t, r) {
        return t >= 1 && t <= 7;
      },
      set: function (e, t, r) {
        return (
          (e = (function (e, t, r) {
            if (arguments.length < 2)
              throw new TypeError(
                "2 arguments required, but only " +
                  arguments.length +
                  " present"
              );
            var n = Ee(t);
            n % 7 == 0 && (n -= 7);
            var i = Ue(e, r),
              a = (((n % 7) + 7) % 7 < 1 ? 7 : 0) + n - i.getUTCDay();
            return i.setUTCDate(i.getUTCDate() + a), i;
          })(e, t, r)),
          e.setUTCHours(0, 0, 0, 0),
          e
        );
      },
    },
    a: {
      priority: 80,
      parse: function (e, t, r, n) {
        switch (t) {
          case "a":
          case "aa":
          case "aaa":
            return (
              r.dayPeriod(e, { width: "abbreviated", context: "formatting" }) ||
              r.dayPeriod(e, { width: "narrow", context: "formatting" })
            );
          case "aaaaa":
            return r.dayPeriod(e, { width: "narrow", context: "formatting" });
          default:
            return (
              r.dayPeriod(e, { width: "wide", context: "formatting" }) ||
              r.dayPeriod(e, { width: "abbreviated", context: "formatting" }) ||
              r.dayPeriod(e, { width: "narrow", context: "formatting" })
            );
        }
      },
      set: function (e, t, r) {
        return e.setUTCHours(Xt(t), 0, 0, 0), e;
      },
    },
    b: {
      priority: 80,
      parse: function (e, t, r, n) {
        switch (t) {
          case "b":
          case "bb":
          case "bbb":
            return (
              r.dayPeriod(e, { width: "abbreviated", context: "formatting" }) ||
              r.dayPeriod(e, { width: "narrow", context: "formatting" })
            );
          case "bbbbb":
            return r.dayPeriod(e, { width: "narrow", context: "formatting" });
          default:
            return (
              r.dayPeriod(e, { width: "wide", context: "formatting" }) ||
              r.dayPeriod(e, { width: "abbreviated", context: "formatting" }) ||
              r.dayPeriod(e, { width: "narrow", context: "formatting" })
            );
        }
      },
      set: function (e, t, r) {
        return e.setUTCHours(Xt(t), 0, 0, 0), e;
      },
    },
    B: {
      priority: 80,
      parse: function (e, t, r, n) {
        switch (t) {
          case "B":
          case "BB":
          case "BBB":
            return (
              r.dayPeriod(e, { width: "abbreviated", context: "formatting" }) ||
              r.dayPeriod(e, { width: "narrow", context: "formatting" })
            );
          case "BBBBB":
            return r.dayPeriod(e, { width: "narrow", context: "formatting" });
          default:
            return (
              r.dayPeriod(e, { width: "wide", context: "formatting" }) ||
              r.dayPeriod(e, { width: "abbreviated", context: "formatting" }) ||
              r.dayPeriod(e, { width: "narrow", context: "formatting" })
            );
        }
      },
      set: function (e, t, r) {
        return e.setUTCHours(Xt(t), 0, 0, 0), e;
      },
    },
    h: {
      priority: 70,
      parse: function (e, t, r, n) {
        switch (t) {
          case "h":
            return zt(Rt.hour12h, e);
          case "ho":
            return r.ordinalNumber(e, { unit: "hour" });
          default:
            return Gt(t.length, e);
        }
      },
      validate: function (e, t, r) {
        return t >= 1 && t <= 12;
      },
      set: function (e, t, r) {
        var n = e.getUTCHours() >= 12;
        return (
          n && t < 12
            ? e.setUTCHours(t + 12, 0, 0, 0)
            : n || 12 !== t
            ? e.setUTCHours(t, 0, 0, 0)
            : e.setUTCHours(0, 0, 0, 0),
          e
        );
      },
    },
    H: {
      priority: 70,
      parse: function (e, t, r, n) {
        switch (t) {
          case "H":
            return zt(Rt.hour23h, e);
          case "Ho":
            return r.ordinalNumber(e, { unit: "hour" });
          default:
            return Gt(t.length, e);
        }
      },
      validate: function (e, t, r) {
        return t >= 0 && t <= 23;
      },
      set: function (e, t, r) {
        return e.setUTCHours(t, 0, 0, 0), e;
      },
    },
    K: {
      priority: 70,
      parse: function (e, t, r, n) {
        switch (t) {
          case "K":
            return zt(Rt.hour11h, e);
          case "Ko":
            return r.ordinalNumber(e, { unit: "hour" });
          default:
            return Gt(t.length, e);
        }
      },
      validate: function (e, t, r) {
        return t >= 0 && t <= 11;
      },
      set: function (e, t, r) {
        return (
          e.getUTCHours() >= 12 && t < 12
            ? e.setUTCHours(t + 12, 0, 0, 0)
            : e.setUTCHours(t, 0, 0, 0),
          e
        );
      },
    },
    k: {
      priority: 70,
      parse: function (e, t, r, n) {
        switch (t) {
          case "k":
            return zt(Rt.hour24h, e);
          case "ko":
            return r.ordinalNumber(e, { unit: "hour" });
          default:
            return Gt(t.length, e);
        }
      },
      validate: function (e, t, r) {
        return t >= 1 && t <= 24;
      },
      set: function (e, t, r) {
        var n = t <= 24 ? t % 24 : t;
        return e.setUTCHours(n, 0, 0, 0), e;
      },
    },
    m: {
      priority: 60,
      parse: function (e, t, r, n) {
        switch (t) {
          case "m":
            return zt(Rt.minute, e);
          case "mo":
            return r.ordinalNumber(e, { unit: "minute" });
          default:
            return Gt(t.length, e);
        }
      },
      validate: function (e, t, r) {
        return t >= 0 && t <= 59;
      },
      set: function (e, t, r) {
        return e.setUTCMinutes(t, 0, 0), e;
      },
    },
    s: {
      priority: 50,
      parse: function (e, t, r, n) {
        switch (t) {
          case "s":
            return zt(Rt.second, e);
          case "so":
            return r.ordinalNumber(e, { unit: "second" });
          default:
            return Gt(t.length, e);
        }
      },
      validate: function (e, t, r) {
        return t >= 0 && t <= 59;
      },
      set: function (e, t, r) {
        return e.setUTCSeconds(t, 0), e;
      },
    },
    S: {
      priority: 40,
      parse: function (e, t, r, n) {
        return Gt(t.length, e, function (e) {
          return Math.floor(e * Math.pow(10, 3 - t.length));
        });
      },
      set: function (e, t, r) {
        return e.setUTCMilliseconds(t), e;
      },
    },
    X: {
      priority: 20,
      parse: function (e, t, r, n) {
        switch (t) {
          case "X":
            return Wt(Yt, e);
          case "XX":
            return Wt(Ht, e);
          case "XXXX":
            return Wt(Zt, e);
          case "XXXXX":
            return Wt(Vt, e);
          default:
            return Wt(Lt, e);
        }
      },
      set: function (e, t, r) {
        return new Date(e.getTime() - t);
      },
    },
    x: {
      priority: 20,
      parse: function (e, t, r, n) {
        switch (t) {
          case "x":
            return Wt(Yt, e);
          case "xx":
            return Wt(Ht, e);
          case "xxxx":
            return Wt(Zt, e);
          case "xxxxx":
            return Wt(Vt, e);
          default:
            return Wt(Lt, e);
        }
      },
      set: function (e, t, r) {
        return new Date(e.getTime() - t);
      },
    },
    t: {
      priority: 10,
      parse: function (e, t, r, n) {
        return Bt(e);
      },
      set: function (e, t, r) {
        return new Date(1e3 * t);
      },
    },
    T: {
      priority: 10,
      parse: function (e, t, r, n) {
        return Bt(e);
      },
      set: function (e, t, r) {
        return new Date(t);
      },
    },
  },
  nr = 20,
  ir = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  ar = /^'(.*?)'?$/,
  or = /''/g,
  sr = /\S/;
function ur(e) {
  var t = new Date(0);
  return (
    t.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()),
    t.setHours(
      e.getUTCHours(),
      e.getUTCMinutes(),
      e.getUTCSeconds(),
      e.getUTCMilliseconds()
    ),
    t
  );
}
function lr(e, t) {
  if ("string" != typeof e) return Be(e) ? e : null;
  var r = (function (e, t, r, n) {
    if (arguments.length < 3)
      throw new TypeError(
        "3 arguments required, but only " + arguments.length + " present"
      );
    var i = String(e),
      a = String(t),
      o = n || {},
      s = o.locale || it;
    if (!s.match) throw new RangeError("locale must contain match property");
    var u = s.options && s.options.firstWeekContainsDate,
      l = null == u ? 1 : Ee(u),
      c = null == o.firstWeekContainsDate ? l : Ee(o.firstWeekContainsDate);
    if (!(c >= 1 && c <= 7))
      throw new RangeError(
        "firstWeekContainsDate must be between 1 and 7 inclusively"
      );
    var d = s.options && s.options.weekStartsOn,
      f = null == d ? 0 : Ee(d),
      h = null == o.weekStartsOn ? f : Ee(o.weekStartsOn);
    if (!(h >= 0 && h <= 6))
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if ("" === a) return "" === i ? Ue(r, o) : new Date(NaN);
    var v,
      m = { firstWeekContainsDate: c, weekStartsOn: h, locale: s },
      p = [{ priority: nr, set: ur, index: 0 }],
      g = a.match(ir);
    for (v = 0; v < g.length; v++) {
      var y = g[v];
      !o.awareOfUnicodeTokens && It(y) && Ot(y);
      var b = y[0],
        w = rr[b];
      if (w) {
        var _ = w.parse(i, y, s.match, m);
        if (!_) return new Date(NaN);
        p.push({
          priority: w.priority,
          set: w.set,
          validate: w.validate,
          value: _.value,
          index: p.length,
        }),
          (i = _.rest);
      } else {
        if (
          ("''" === y
            ? (y = "'")
            : "'" === b && (y = y.match(ar)[1].replace(or, "'")),
          0 !== i.indexOf(y))
        )
          return new Date(NaN);
        i = i.slice(y.length);
      }
    }
    if (i.length > 0 && sr.test(i)) return new Date(NaN);
    var x = p
        .map(function (e) {
          return e.priority;
        })
        .sort(function (e, t) {
          return t - e;
        })
        .filter(function (e, t, r) {
          return r.indexOf(e) === t;
        })
        .map(function (e) {
          return p
            .filter(function (t) {
              return t.priority === e;
            })
            .reverse();
        })
        .map(function (e) {
          return e[0];
        }),
      $ = Ue(r, o);
    if (isNaN($)) return new Date(NaN);
    var T = At($, ke($));
    for (v = 0; v < x.length; v++) {
      var D = x[v];
      if (D.validate && !D.validate(T, D.value, m)) return new Date(NaN);
      T = D.set(T, D.value, m);
    }
    return T;
  })(e, t, new Date());
  return Be(r) && St(r, t) === e ? r : null;
}
var cr = {
    validate: function (e, t) {
      void 0 === t && (t = {});
      var r = t.targetValue,
        n = t.inclusion;
      void 0 === n && (n = !1);
      var i = t.format;
      return (
        void 0 === i && ((i = n), (n = !1)),
        (e = lr(e, i)),
        (r = lr(r, i)),
        !(!e || !r) && (qt(e, r) || (n && jt(e, r)))
      );
    },
    options: { hasTarget: !0, isDate: !0 },
    paramNames: ["targetValue", "inclusion", "format"],
  },
  dr = {
    en: /^[A-Z]*$/i,
    cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
    da: /^[A-ZÆØÅ]*$/i,
    de: /^[A-ZÄÖÜß]*$/i,
    es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
    fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
    fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
    it: /^[A-Z\xC0-\xFF]*$/i,
    lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
    nl: /^[A-ZÉËÏÓÖÜ]*$/i,
    hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
    pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
    pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
    ru: /^[А-ЯЁ]*$/i,
    sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
    sr: /^[A-ZČĆŽŠĐ]*$/i,
    sv: /^[A-ZÅÄÖ]*$/i,
    tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
    uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
    az: /^[A-ZÇƏĞİıÖŞÜ]*$/i,
  },
  fr = {
    en: /^[A-Z\s]*$/i,
    cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
    da: /^[A-ZÆØÅ\s]*$/i,
    de: /^[A-ZÄÖÜß\s]*$/i,
    es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
    fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی\s]*$/,
    fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
    it: /^[A-Z\xC0-\xFF\s]*$/i,
    lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
    nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
    hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
    pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
    pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
    ru: /^[А-ЯЁ\s]*$/i,
    sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
    sr: /^[A-ZČĆŽŠĐ\s]*$/i,
    sv: /^[A-ZÅÄÖ\s]*$/i,
    tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
    uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,
    az: /^[A-ZÇƏĞİıÖŞÜ\s]*$/i,
  },
  hr = {
    en: /^[0-9A-Z]*$/i,
    cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
    da: /^[0-9A-ZÆØÅ]$/i,
    de: /^[0-9A-ZÄÖÜß]*$/i,
    es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
    fa: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
    fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
    it: /^[0-9A-Z\xC0-\xFF]*$/i,
    lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
    hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
    nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
    pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
    pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
    ru: /^[0-9А-ЯЁ]*$/i,
    sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
    sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
    sv: /^[0-9A-ZÅÄÖ]*$/i,
    tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
    uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
    az: /^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,
  },
  vr = {
    en: /^[0-9A-Z_-]*$/i,
    cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
    da: /^[0-9A-ZÆØÅ_-]*$/i,
    de: /^[0-9A-ZÄÖÜß_-]*$/i,
    es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
    fa: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی_-]*$/,
    fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
    it: /^[0-9A-Z\xC0-\xFF_-]*$/i,
    lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
    nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
    hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
    pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
    pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
    ru: /^[0-9А-ЯЁ_-]*$/i,
    sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
    sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
    sv: /^[0-9A-ZÅÄÖ_-]*$/i,
    tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
    uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,
    az: /^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i,
  },
  mr = function (e, t) {
    void 0 === t && (t = {});
    var r = t.locale;
    return Array.isArray(e)
      ? e.every(function (e) {
          return mr(e, [r]);
        })
      : r
      ? (dr[r] || dr.en).test(e)
      : Object.keys(dr).some(function (t) {
          return dr[t].test(e);
        });
  },
  pr = { validate: mr, paramNames: ["locale"] },
  gr = function (e, t) {
    void 0 === t && (t = {});
    var r = t.locale;
    return Array.isArray(e)
      ? e.every(function (e) {
          return gr(e, [r]);
        })
      : r
      ? (vr[r] || vr.en).test(e)
      : Object.keys(vr).some(function (t) {
          return vr[t].test(e);
        });
  },
  yr = { validate: gr, paramNames: ["locale"] },
  br = function (e, t) {
    void 0 === t && (t = {});
    var r = t.locale;
    return Array.isArray(e)
      ? e.every(function (e) {
          return br(e, [r]);
        })
      : r
      ? (hr[r] || hr.en).test(e)
      : Object.keys(hr).some(function (t) {
          return hr[t].test(e);
        });
  },
  wr = { validate: br, paramNames: ["locale"] },
  _r = function (e, t) {
    void 0 === t && (t = {});
    var r = t.locale;
    return Array.isArray(e)
      ? e.every(function (e) {
          return _r(e, [r]);
        })
      : r
      ? (fr[r] || fr.en).test(e)
      : Object.keys(fr).some(function (t) {
          return fr[t].test(e);
        });
  },
  xr = { validate: _r, paramNames: ["locale"] },
  $r = {
    validate: function (e, t) {
      void 0 === t && (t = {});
      var r = t.targetValue,
        n = t.inclusion;
      void 0 === n && (n = !1);
      var i = t.format;
      return (
        void 0 === i && ((i = n), (n = !1)),
        (e = lr(e, i)),
        (r = lr(r, i)),
        !(!e || !r) && (Pt(e, r) || (n && jt(e, r)))
      );
    },
    options: { hasTarget: !0, isDate: !0 },
    paramNames: ["targetValue", "inclusion", "format"],
  },
  Tr = function (e, t) {
    void 0 === t && (t = {});
    var r = t.min,
      n = t.max;
    return Array.isArray(e)
      ? e.every(function (e) {
          return Tr(e, { min: r, max: n });
        })
      : Number(r) <= e && Number(n) >= e;
  },
  Dr = { validate: Tr, paramNames: ["min", "max"] },
  Cr = {
    validate: function (e, t) {
      var r = t.targetValue;
      return String(e) === String(r);
    },
    options: { hasTarget: !0 },
    paramNames: ["targetValue"],
  };
function Ar(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Nr(e, t) {
  return e((t = { exports: {} }), t.exports), t.exports;
}
var Ir = Nr(function (e, t) {
  function r(e) {
    return (
      (r =
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
            }),
      r(e)
    );
  }
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.default = function (e) {
      if (!("string" == typeof e || e instanceof String)) {
        var t;
        throw (
          ((t =
            null === e
              ? "null"
              : "object" === (t = r(e)) &&
                e.constructor &&
                e.constructor.hasOwnProperty("name")
              ? e.constructor.name
              : "a ".concat(t)),
          new TypeError("Expected string but received ".concat(t, ".")))
        );
      }
    }),
    (e.exports = t.default),
    (e.exports.default = t.default);
});
Ar(Ir);
var Or = Nr(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function (e) {
        (0, r.default)(e);
        var t = e.replace(/[- ]+/g, "");
        if (!n.test(t)) return !1;
        for (var i, a, o, s = 0, u = t.length - 1; u >= 0; u--)
          (i = t.substring(u, u + 1)),
            (a = parseInt(i, 10)),
            (s += o && (a *= 2) >= 10 ? (a % 10) + 1 : a),
            (o = !o);
        return !(s % 10 != 0 || !t);
      });
    var r = (function (e) {
      return e && e.__esModule ? e : { default: e };
    })(Ir);
    var n =
      /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;
    (e.exports = t.default), (e.exports.default = t.default);
  }),
  Mr = Ar(Or),
  Er = {
    validate: function (e) {
      return Mr(String(e));
    },
  },
  Fr = {
    validate: function (e, t) {
      void 0 === t && (t = {});
      var r = t.min,
        n = t.max,
        i = t.inclusivity;
      void 0 === i && (i = "()");
      var a = t.format;
      void 0 === a && ((a = i), (i = "()"));
      var o = lr(String(r), a),
        s = lr(String(n), a),
        u = lr(String(e), a);
      return (
        !!(o && s && u) &&
        ("()" === i
          ? qt(u, o) && Pt(u, s)
          : "(]" === i
          ? qt(u, o) && (jt(u, s) || Pt(u, s))
          : "[)" === i
          ? Pt(u, s) && (jt(u, o) || qt(u, o))
          : jt(u, s) || jt(u, o) || (Pt(u, s) && qt(u, o)))
      );
    },
    options: { isDate: !0 },
    paramNames: ["min", "max", "inclusivity", "format"],
  },
  kr = {
    validate: function (e, t) {
      return !!lr(e, t.format);
    },
    options: { isDate: !0 },
    paramNames: ["format"],
  },
  Sr = function (e, t) {
    void 0 === t && (t = {});
    var r = t.decimals;
    void 0 === r && (r = "*");
    var n = t.separator;
    if ((void 0 === n && (n = "."), i(e) || "" === e)) return !1;
    if (Array.isArray(e))
      return e.every(function (e) {
        return Sr(e, { decimals: r, separator: n });
      });
    if (0 === Number(r)) return /^-?\d*$/.test(e);
    if (
      !new RegExp(
        "^[-+]?\\d*(\\" +
          n +
          "\\d" +
          ("*" === r ? "+" : "{1," + r + "}") +
          ")?([eE]{1}[-]?\\d+)?$"
      ).test(e)
    )
      return !1;
    var a = parseFloat(e);
    return a == a;
  },
  qr = { validate: Sr, paramNames: ["decimals", "separator"] },
  Pr = function (e, t) {
    var r = t[0];
    if (Array.isArray(e))
      return e.every(function (e) {
        return Pr(e, [r]);
      });
    var n = String(e);
    return /^[0-9]*$/.test(n) && n.length === Number(r);
  },
  jr = { validate: Pr },
  Ur = /\.(jpg|svg|jpeg|png|bmp|gif)$/i,
  Rr = {
    validate: function (e, t) {
      var r = t[0],
        n = t[1],
        i = y(e).filter(function (e) {
          return Ur.test(e.name);
        });
      return (
        0 !== i.length &&
        Promise.all(
          i.map(function (e) {
            return (function (e, t, r) {
              var n = window.URL || window.webkitURL;
              return new Promise(function (i) {
                var a = new Image();
                (a.onerror = function () {
                  return i({ valid: !1 });
                }),
                  (a.onload = function () {
                    return i({
                      valid: a.width === Number(t) && a.height === Number(r),
                    });
                  }),
                  (a.src = n.createObjectURL(e));
              });
            })(e, r, n);
          })
        )
      );
    },
  },
  Yr = Nr(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0;
        for (var r in t) void 0 === e[r] && (e[r] = t[r]);
        return e;
      }),
      (e.exports = t.default),
      (e.exports.default = t.default);
  });
Ar(Yr);
var Hr = Nr(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.default = function (e, t) {
      var i, a;
      (0, r.default)(e),
        "object" === n(t)
          ? ((i = t.min || 0), (a = t.max))
          : ((i = arguments[1]), (a = arguments[2]));
      var o = encodeURI(e).split(/%..|./).length - 1;
      return o >= i && (void 0 === a || o <= a);
    });
  var r = (function (e) {
    return e && e.__esModule ? e : { default: e };
  })(Ir);
  function n(e) {
    return (
      (n =
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
            }),
      n(e)
    );
  }
  (e.exports = t.default), (e.exports.default = t.default);
});
Ar(Hr);
var Zr = Nr(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function (e, t) {
        (0, r.default)(e),
          (t = (0, n.default)(t, a)),
          t.allow_trailing_dot &&
            "." === e[e.length - 1] &&
            (e = e.substring(0, e.length - 1));
        for (var i = e.split("."), o = 0; o < i.length; o++)
          if (i[o].length > 63) return !1;
        if (t.require_tld) {
          var s = i.pop();
          if (
            !i.length ||
            !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(s)
          )
            return !1;
          if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(s))
            return !1;
        }
        for (var u, l = 0; l < i.length; l++) {
          if (
            ((u = i[l]),
            t.allow_underscores && (u = u.replace(/_/g, "")),
            !/^[a-z\u00a1-\uffff0-9-]+$/i.test(u))
          )
            return !1;
          if (/[\uff01-\uff5e]/.test(u)) return !1;
          if ("-" === u[0] || "-" === u[u.length - 1]) return !1;
        }
        return !0;
      });
    var r = i(Ir),
      n = i(Yr);
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var a = { require_tld: !0, allow_underscores: !1, allow_trailing_dot: !1 };
    (e.exports = t.default), (e.exports.default = t.default);
  }),
  Lr = Ar(Zr),
  Vr = Nr(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function e(t) {
        var a =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if (((0, r.default)(t), !(a = String(a)))) return e(t, 4) || e(t, 6);
        if ("4" === a)
          return (
            !!n.test(t) &&
            t.split(".").sort(function (e, t) {
              return e - t;
            })[3] <= 255
          );
        if ("6" === a) {
          var o = t.split(":"),
            s = !1,
            u = e(o[o.length - 1], 4),
            l = u ? 7 : 8;
          if (o.length > l) return !1;
          if ("::" === t) return !0;
          "::" === t.substr(0, 2)
            ? (o.shift(), o.shift(), (s = !0))
            : "::" === t.substr(t.length - 2) && (o.pop(), o.pop(), (s = !0));
          for (var c = 0; c < o.length; ++c)
            if ("" === o[c] && c > 0 && c < o.length - 1) {
              if (s) return !1;
              s = !0;
            } else if (u && c === o.length - 1);
            else if (!i.test(o[c])) return !1;
          return s ? o.length >= 1 : o.length === l;
        }
        return !1;
      });
    var r = (function (e) {
      return e && e.__esModule ? e : { default: e };
    })(Ir);
    var n = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,
      i = /^[0-9A-F]{1,4}$/i;
    (e.exports = t.default), (e.exports.default = t.default);
  }),
  zr = Ar(Vr),
  Wr = Nr(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function (e, t) {
        if (
          ((0, r.default)(e),
          (t = (0, n.default)(t, u)),
          t.require_display_name || t.allow_display_name)
        ) {
          var s = e.match(l);
          if (s) e = s[1];
          else if (t.require_display_name) return !1;
        }
        var m = e.split("@"),
          p = m.pop(),
          g = m.join("@"),
          y = p.toLowerCase();
        if (
          t.domain_specific_validation &&
          ("gmail.com" === y || "googlemail.com" === y)
        ) {
          var b = (g = g.toLowerCase()).split("+")[0];
          if (!(0, i.default)(b.replace(".", ""), { min: 6, max: 30 }))
            return !1;
          for (var w = b.split("."), _ = 0; _ < w.length; _++)
            if (!d.test(w[_])) return !1;
        }
        if (!(0, i.default)(g, { max: 64 }) || !(0, i.default)(p, { max: 254 }))
          return !1;
        if (!(0, a.default)(p, { require_tld: t.require_tld })) {
          if (!t.allow_ip_domain) return !1;
          if (!(0, o.default)(p)) {
            if (!p.startsWith("[") || !p.endsWith("]")) return !1;
            var x = p.substr(1, p.length - 2);
            if (0 === x.length || !(0, o.default)(x)) return !1;
          }
        }
        if ('"' === g[0])
          return (
            (g = g.slice(1, g.length - 1)),
            t.allow_utf8_local_part ? v.test(g) : f.test(g)
          );
        for (
          var $ = t.allow_utf8_local_part ? h : c, T = g.split("."), D = 0;
          D < T.length;
          D++
        )
          if (!$.test(T[D])) return !1;
        return !0;
      });
    var r = s(Ir),
      n = s(Yr),
      i = s(Hr),
      a = s(Zr),
      o = s(Vr);
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var u = {
        allow_display_name: !1,
        require_display_name: !1,
        allow_utf8_local_part: !0,
        require_tld: !0,
      },
      l =
        /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,
      c = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,
      d = /^[a-z\d]+$/,
      f =
        /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,
      h =
        /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,
      v =
        /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
    (e.exports = t.default), (e.exports.default = t.default);
  }),
  Br = Ar(Wr);
var Gr = {
    validate: function (e, t) {
      void 0 === t && (t = {});
      var r = t.multiple;
      void 0 === r && (r = !1);
      var n = (function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              -1 === t.indexOf(n) &&
              (r[n] = e[n]);
          return r;
        })(t, ["multiple"]),
        i = n;
      r &&
        !Array.isArray(e) &&
        (e = String(e)
          .split(",")
          .map(function (e) {
            return e.trim();
          }));
      var a = b({}, i);
      return Array.isArray(e)
        ? e.every(function (e) {
            return Br(String(e), a);
          })
        : Br(String(e), a);
    },
  },
  Qr = function (e, t) {
    return Array.isArray(e)
      ? e.every(function (e) {
          return Qr(e, t);
        })
      : g(t).some(function (t) {
          return t == e;
        });
  },
  Xr = { validate: Qr },
  Kr = {
    validate: function () {
      for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
      return !Qr.apply(void 0, e);
    },
  },
  Jr = {
    validate: function (e, t) {
      var r = new RegExp(".(" + t.join("|") + ")$", "i");
      return y(e).every(function (e) {
        return r.test(e.name);
      });
    },
  },
  en = {
    validate: function (e) {
      return (Array.isArray(e) ? e : [e]).every(function (e) {
        return /\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(e.name);
      });
    },
  },
  tn = {
    validate: function (e) {
      return Array.isArray(e)
        ? e.every(function (e) {
            return /^-?[0-9]+$/.test(String(e));
          })
        : /^-?[0-9]+$/.test(String(e));
    },
  },
  rn = {
    validate: function (e, t) {
      void 0 === t && (t = {});
      var r = t.version;
      return (
        void 0 === r && (r = 4),
        i(e) && (e = ""),
        Array.isArray(e)
          ? e.every(function (e) {
              return zr(e, r);
            })
          : zr(e, r)
      );
    },
    paramNames: ["version"],
  },
  nn = {
    validate: function (e) {
      return (
        i(e) && (e = ""),
        Array.isArray(e)
          ? e.every(function (e) {
              return zr(e, "") || Lr(e);
            })
          : zr(e, "") || Lr(e)
      );
    },
  },
  an = {
    validate: function (e, t) {
      return void 0 === t && (t = []), e === t[0];
    },
  },
  on = {
    validate: function (e, t) {
      return void 0 === t && (t = []), e !== t[0];
    },
  },
  sn = {
    validate: function (e, t) {
      var r = t[0],
        n = t[1];
      return (
        void 0 === n && (n = void 0),
        !i(e) &&
          ((r = Number(r)),
          "number" == typeof e && (e = String(e)),
          e.length || (e = g(e)),
          (function (e, t, r) {
            return void 0 === r
              ? e.length === t
              : ((r = Number(r)), e.length >= t && e.length <= r);
          })(e, r, n))
      );
    },
  },
  un = function (e, t) {
    var r = t[0];
    return i(e)
      ? r >= 0
      : Array.isArray(e)
      ? e.every(function (e) {
          return un(e, [r]);
        })
      : String(e).length <= r;
  },
  ln = { validate: un },
  cn = function (e, t) {
    var r = t[0];
    return (
      !i(e) &&
      "" !== e &&
      (Array.isArray(e)
        ? e.length > 0 &&
          e.every(function (e) {
            return cn(e, [r]);
          })
        : Number(e) <= r)
    );
  },
  dn = { validate: cn },
  fn = {
    validate: function (e, t) {
      var r = new RegExp(t.join("|").replace("*", ".+") + "$", "i");
      return y(e).every(function (e) {
        return r.test(e.type);
      });
    },
  },
  hn = function (e, t) {
    var r = t[0];
    return (
      !i(e) &&
      (Array.isArray(e)
        ? e.every(function (e) {
            return hn(e, [r]);
          })
        : String(e).length >= r)
    );
  },
  vn = { validate: hn },
  mn = function (e, t) {
    var r = t[0];
    return (
      !i(e) &&
      "" !== e &&
      (Array.isArray(e)
        ? e.length > 0 &&
          e.every(function (e) {
            return mn(e, [r]);
          })
        : Number(e) >= r)
    );
  },
  pn = { validate: mn },
  gn = /^[٠١٢٣٤٥٦٧٨٩]+$/,
  yn = /^[0-9]+$/,
  bn = {
    validate: function (e) {
      var t = function (e) {
        var t = String(e);
        return yn.test(t) || gn.test(t);
      };
      return Array.isArray(e) ? e.every(t) : t(e);
    },
  },
  wn = function (e, t) {
    var r = t.expression;
    return (
      "string" == typeof r && (r = new RegExp(r)),
      Array.isArray(e)
        ? e.every(function (e) {
            return wn(e, { expression: r });
          })
        : r.test(String(e))
    );
  },
  _n = { validate: wn, paramNames: ["expression"] },
  xn = {
    validate: function (e, t) {
      void 0 === t && (t = []);
      var r = t[0];
      return (
        void 0 === r && (r = !1),
        !i(e) && !O(e) && (!1 !== e || !r) && !!String(e).trim().length
      );
    },
  },
  $n = {
    validate: function (e, t) {
      void 0 === t && (t = []);
      var r = t[0],
        n = t.slice(1).includes(String(r).trim());
      if (!n) return { valid: !0, data: { required: n } };
      var i = O(e) || [!1, null, void 0].includes(e);
      return {
        valid: !(i = i || !String(e).trim().length),
        data: { required: n },
      };
    },
    options: { hasTarget: !0, computesRequired: !0 },
  },
  Tn = {
    validate: function (e, t) {
      var r = t[0];
      if (isNaN(r)) return !1;
      var n = 1024 * Number(r);
      return y(e).every(function (e) {
        return e.size <= n;
      });
    },
  },
  Dn = Nr(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function (e, t) {
        if (((0, r.default)(e), !e || e.length >= 2083 || /[\s<>]/.test(e)))
          return !1;
        if (0 === e.indexOf("mailto:")) return !1;
        var o, l, d, f, h, v, m, p;
        if (
          ((t = (0, a.default)(t, s)),
          (m = e.split("#")),
          (e = m.shift()),
          (m = e.split("?")),
          (e = m.shift()),
          (m = e.split("://")),
          m.length > 1)
        ) {
          if (
            ((o = m.shift().toLowerCase()),
            t.require_valid_protocol && -1 === t.protocols.indexOf(o))
          )
            return !1;
        } else {
          if (t.require_protocol) return !1;
          if ("//" === e.substr(0, 2)) {
            if (!t.allow_protocol_relative_urls) return !1;
            m[0] = e.substr(2);
          }
        }
        if (((e = m.join("://")), "" === e)) return !1;
        if (((m = e.split("/")), (e = m.shift()), "" === e && !t.require_host))
          return !0;
        if (((m = e.split("@")), m.length > 1)) {
          if (t.disallow_auth) return !1;
          if ((l = m.shift()).indexOf(":") >= 0 && l.split(":").length > 2)
            return !1;
        }
        (f = m.join("@")), (v = null), (p = null);
        var g = f.match(u);
        g
          ? ((d = ""), (p = g[1]), (v = g[2] || null))
          : ((d = (m = f.split(":")).shift()), m.length && (v = m.join(":")));
        if (
          null !== v &&
          ((h = parseInt(v, 10)), !/^[0-9]+$/.test(v) || h <= 0 || h > 65535)
        )
          return !1;
        if (
          !(
            (0, i.default)(d) ||
            (0, n.default)(d, t) ||
            (p && (0, i.default)(p, 6))
          )
        )
          return !1;
        if (((d = d || p), t.host_whitelist && !c(d, t.host_whitelist)))
          return !1;
        if (t.host_blacklist && c(d, t.host_blacklist)) return !1;
        return !0;
      });
    var r = o(Ir),
      n = o(Zr),
      i = o(Vr),
      a = o(Yr);
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = {
        protocols: ["http", "https", "ftp"],
        require_tld: !0,
        require_protocol: !1,
        require_host: !0,
        require_valid_protocol: !0,
        allow_underscores: !1,
        allow_trailing_dot: !1,
        allow_protocol_relative_urls: !1,
      },
      u = /^\[([^\]]+)\](?::([0-9]+))?$/;
    function l(e) {
      return "[object RegExp]" === Object.prototype.toString.call(e);
    }
    function c(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        if (e === n || (l(n) && n.test(e))) return !0;
      }
      return !1;
    }
    (e.exports = t.default), (e.exports.default = t.default);
  }),
  Cn = Ar(Dn),
  An = {
    validate: function (e, t) {
      void 0 === t && (t = {}), i(e) && (e = "");
      var r = b({}, t);
      return Array.isArray(e)
        ? e.every(function (e) {
            return Cn(e, r);
          })
        : Cn(e, r);
    },
  },
  Nn = Object.freeze({
    after: cr,
    alpha_dash: yr,
    alpha_num: wr,
    alpha_spaces: xr,
    alpha: pr,
    before: $r,
    between: Dr,
    confirmed: Cr,
    credit_card: Er,
    date_between: Fr,
    date_format: kr,
    decimal: qr,
    digits: jr,
    dimensions: Rr,
    email: Gr,
    ext: Jr,
    image: en,
    included: Xr,
    integer: tn,
    length: sn,
    ip: rn,
    ip_or_fqdn: nn,
    is_not: on,
    is: an,
    max: ln,
    max_value: dn,
    mimes: fn,
    min: vn,
    min_value: pn,
    excluded: Kr,
    numeric: bn,
    regex: _n,
    required: xn,
    required_if: $n,
    size: Tn,
    url: An,
  }),
  In = function (e, t) {
    var r = {
      pristine: function (e, t) {
        return e && t;
      },
      dirty: function (e, t) {
        return e || t;
      },
      touched: function (e, t) {
        return e || t;
      },
      untouched: function (e, t) {
        return e && t;
      },
      valid: function (e, t) {
        return e && t;
      },
      invalid: function (e, t) {
        return e || t;
      },
      pending: function (e, t) {
        return e || t;
      },
      required: function (e, t) {
        return e || t;
      },
      validated: function (e, t) {
        return e && t;
      },
    };
    return Object.keys(r).reduce(function (n, i) {
      return (n[i] = r[i](e[i], t[i])), n;
    }, {});
  },
  On = function (e, t) {
    return (
      void 0 === t && (t = !0),
      Object.keys(e).reduce(function (r, n) {
        if (!r) return (r = b({}, e[n]));
        var i = 0 === n.indexOf("$");
        return t && i ? In(On(e[n]), r) : !t && i ? r : (r = In(r, e[n]));
      }, null)
    );
  },
  Mn = function (e) {
    if (!e)
      return function () {
        return On(this.$validator.flags);
      };
    var t = (function (e) {
      return Array.isArray(e)
        ? e.reduce(function (e, t) {
            return I(t, ".") ? (e[t.split(".")[1]] = t) : (e[t] = t), e;
          }, {})
        : e;
    })(e);
    return Object.keys(t).reduce(function (e, r) {
      var n = t[r];
      return (
        (e[r] = function () {
          if (this.$validator.flags[n]) return this.$validator.flags[n];
          if ("*" === t[r]) return On(this.$validator.flags, !1);
          if (n.indexOf(".") <= 0) return {};
          var e = n.split("."),
            i = e[0],
            a = e.slice(1);
          return (
            (i = this.$validator.flags["$" + i]),
            "*" === (a = a.join(".")) && i ? On(i) : i && i[a] ? i[a] : {}
          );
        }),
        e
      );
    }, {});
  },
  En = null,
  Fn = 0,
  kn = {
    $__veeInject: !1,
    inject: {
      $_veeObserver: {
        from: "$_veeObserver",
        default: function () {
          return (
            this.$vnode.context.$_veeObserver ||
              (this.$vnode.context.$_veeObserver = {
                refs: {},
                subscribe: function (e) {
                  this.refs[e.vid] = e;
                },
                unsubscribe: function (e) {
                  delete this.refs[e.vid];
                },
              }),
            this.$vnode.context.$_veeObserver
          );
        },
      },
    },
    props: {
      vid: {
        type: [String, Number],
        default: function () {
          return "_vee_" + ++Fn;
        },
      },
      name: { type: String, default: null },
      mode: {
        type: [String, Function],
        default: function () {
          return Y().mode;
        },
      },
      events: {
        type: Array,
        validate: function () {
          return !0;
        },
        default: function () {
          var e = Y().events;
          return "string" == typeof e ? e.split("|") : e;
        },
      },
      rules: { type: [Object, String], default: null },
      immediate: { type: Boolean, default: !1 },
      persist: { type: Boolean, default: !1 },
      bails: {
        type: Boolean,
        default: function () {
          return Y().fastExit;
        },
      },
      debounce: {
        type: Number,
        default: function () {
          return Y().delay || 0;
        },
      },
      tag: { type: String, default: "span" },
      slim: { type: Boolean, default: !1 },
    },
    watch: {
      rules: {
        deep: !0,
        handler: function (e, t) {
          this._needsValidation = !a(e, t);
        },
      },
    },
    data: function () {
      return {
        messages: [],
        value: void 0,
        initialized: !1,
        initialValue: void 0,
        flags: {
          untouched: !0,
          touched: !1,
          dirty: !1,
          pristine: !0,
          valid: null,
          invalid: null,
          validated: !1,
          pending: !1,
          required: !1,
          changed: !1,
        },
        failedRules: {},
        forceRequired: !1,
        isDeactivated: !1,
        id: null,
      };
    },
    computed: {
      isValid: function () {
        return this.flags.valid;
      },
      fieldDeps: function () {
        var e = this,
          t = c(this.rules);
        return Object.keys(t)
          .filter(K.isTargetRule)
          .map(function (r) {
            var n = t[r][0];
            return Rn(e, n), n;
          });
      },
      normalizedEvents: function () {
        var e = this,
          t = qn(this).on;
        return te(t || this.events || []).map(function (t) {
          return "input" === t ? e._inputEventName : t;
        });
      },
      isRequired: function () {
        var e = c(this.rules),
          t = this.forceRequired,
          r = e.required || t;
        return (this.flags.required = r), r;
      },
      classes: function () {
        var e = this,
          t = Y().classNames;
        return Object.keys(this.flags).reduce(function (r, n) {
          var a = (t && t[n]) || n;
          return i(e.flags[n]) || (a && (r[a] = e.flags[n])), r;
        }, {});
      },
    },
    render: function (e) {
      var t = this;
      this.registerField();
      var r = Sn(this),
        n = this.$scopedSlots.default;
      if (!v(n)) return e(this.tag, this.$slots.default);
      var i = n(r);
      return (
        L(i).forEach(function (e) {
          Un.call(t, e);
        }),
        this.slim ? G(e, i) : e(this.tag, i)
      );
    },
    beforeDestroy: function () {
      this.$_veeObserver.unsubscribe(this);
    },
    activated: function () {
      this.$_veeObserver.subscribe(this), (this.isDeactivated = !1);
    },
    deactivated: function () {
      this.$_veeObserver.unsubscribe(this), (this.isDeactivated = !0);
    },
    methods: {
      setFlags: function (e) {
        var t = this;
        Object.keys(e).forEach(function (r) {
          t.flags[r] = e[r];
        });
      },
      syncValue: function (e) {
        var t = (function (e) {
          if (ee(e))
            return "file" === e.target.type
              ? g(e.target.files)
              : e.target.value;
          return e;
        })(e);
        (this.value = t), (this.flags.changed = this.initialValue !== t);
      },
      reset: function () {
        (this.messages = []),
          (this._pendingValidation = null),
          (this.initialValue = this.value);
        var e = {
          untouched: !0,
          touched: !1,
          dirty: !1,
          pristine: !0,
          valid: null,
          invalid: null,
          validated: !1,
          pending: !1,
          required: !1,
          changed: !1,
        };
        this.setFlags(e);
      },
      validate: function () {
        for (var e = this, t = [], r = arguments.length; r--; )
          t[r] = arguments[r];
        return (
          t.length > 0 && this.syncValue(t[0]),
          this.validateSilent().then(function (t) {
            return e.applyResult(t), t;
          })
        );
      },
      validateSilent: function () {
        var e,
          t,
          r = this;
        return (
          this.setFlags({ pending: !0 }),
          En.verify(this.value, this.rules, {
            name: this.name,
            values:
              ((e = this),
              (t = e.$_veeObserver.refs),
              e.fieldDeps.reduce(function (e, r) {
                return t[r] ? ((e[r] = t[r].value), e) : e;
              }, {})),
            bails: this.bails,
          }).then(function (e) {
            return (
              r.setFlags({ pending: !1 }),
              r.isRequired || r.setFlags({ valid: e.valid, invalid: !e.valid }),
              e
            );
          })
        );
      },
      applyResult: function (e) {
        var t = e.errors,
          r = e.failedRules;
        (this.messages = t),
          (this.failedRules = b({}, r)),
          this.setFlags({
            valid: !t.length,
            changed: this.value !== this.initialValue,
            invalid: !!t.length,
            validated: !0,
          });
      },
      registerField: function () {
        En || (En = fe() || new pe(null, { fastExit: Y().fastExit })),
          (function (e) {
            i(e.id) && e.id === e.vid && ((e.id = Fn), Fn++);
            var t = e.id,
              r = e.vid;
            if (e.isDeactivated || (t === r && e.$_veeObserver.refs[t])) return;
            t !== r &&
              e.$_veeObserver.refs[t] === e &&
              e.$_veeObserver.unsubscribe({ vid: t });
            e.$_veeObserver.subscribe(e), (e.id = r);
          })(this);
      },
    },
  };
function Sn(e) {
  return {
    errors: e.messages,
    flags: e.flags,
    classes: e.classes,
    valid: e.isValid,
    failedRules: e.failedRules,
    reset: function () {
      return e.reset();
    },
    validate: function () {
      for (var t = [], r = arguments.length; r--; ) t[r] = arguments[r];
      return e.validate.apply(e, t);
    },
    aria: {
      "aria-invalid": e.flags.invalid ? "true" : "false",
      "aria-required": e.isRequired ? "true" : "false",
    },
  };
}
function qn(e) {
  return (v(e.mode) ? e.mode : De[e.mode])({
    errors: e.messages,
    value: e.value,
    flags: e.flags,
  });
}
function Pn(e) {
  this.initialized || (this.initialValue = e.value);
  var t = (function (e, t) {
    return (
      !(e._ignoreImmediate || !e.immediate) ||
      e.value !== t.value ||
      !!e._needsValidation ||
      (!e.initialized && void 0 === t.value)
    );
  })(this, e);
  (this._needsValidation = !1),
    (this.value = e.value),
    (this._ignoreImmediate = !0),
    t &&
      this.validateSilent().then(
        this.immediate || this.flags.validated
          ? this.applyResult
          : function (e) {
              return e;
            }
      );
}
function jn(e) {
  var t = e.$veeHandler,
    r = qn(e);
  return (
    (t && e.$veeDebounce === e.debounce) ||
      ((t = u(function () {
        e.$nextTick(function () {
          var t = e.validateSilent();
          (e._pendingValidation = t),
            t.then(function (r) {
              t === e._pendingValidation &&
                (e.applyResult(r), (e._pendingValidation = null));
            });
        });
      }, r.debounce || e.debounce)),
      (e.$veeHandler = t),
      (e.$veeDebounce = e.debounce)),
    {
      onInput: function (t) {
        e.syncValue(t), e.setFlags({ dirty: !0, pristine: !1 });
      },
      onBlur: function () {
        e.setFlags({ touched: !0, untouched: !1 });
      },
      onValidate: t,
    }
  );
}
function Un(e) {
  var t = Z(e);
  (this._inputEventName = this._inputEventName || B(e, t)), Pn.call(this, t);
  var r = jn(this),
    n = r.onInput,
    i = r.onBlur,
    a = r.onValidate;
  W(e, this._inputEventName, n),
    W(e, "blur", i),
    this.normalizedEvents.forEach(function (t) {
      W(e, t, a);
    }),
    (this.initialized = !0);
}
function Rn(e, t, r) {
  void 0 === r && (r = !0);
  var n = e.$_veeObserver.refs;
  if ((e._veeWatchers || (e._veeWatchers = {}), !n[t] && r))
    return e.$once("hook:mounted", function () {
      Rn(e, t, !1);
    });
  !v(e._veeWatchers[t]) &&
    n[t] &&
    (e._veeWatchers[t] = n[t].$watch("value", function () {
      e.flags.validated && ((e._needsValidation = !0), e.validate());
    }));
}
var Yn = {
  pristine: "every",
  dirty: "some",
  touched: "some",
  untouched: "every",
  valid: "every",
  invalid: "some",
  pending: "some",
  validated: "every",
};
var Hn = 0,
  Zn = {
    name: "ValidationObserver",
    provide: function () {
      return { $_veeObserver: this };
    },
    inject: {
      $_veeObserver: {
        from: "$_veeObserver",
        default: function () {
          return this.$vnode.context.$_veeObserver
            ? this.$vnode.context.$_veeObserver
            : null;
        },
      },
    },
    props: {
      tag: { type: String, default: "span" },
      slim: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        vid: "obs_" + Hn++,
        refs: {},
        observers: [],
        persistedStore: {},
      };
    },
    computed: {
      ctx: function () {
        var e = this,
          t = {
            errors: {},
            validate: function (t) {
              var r = e.validate(t);
              return {
                then: function (e) {
                  return r.then(function (t) {
                    return t && v(e)
                      ? Promise.resolve(e())
                      : Promise.resolve(t);
                  });
                },
              };
            },
            reset: function () {
              return e.reset();
            },
          };
        return N(this.refs)
          .concat(
            Object.keys(this.persistedStore).map(function (t) {
              return {
                vid: t,
                flags: e.persistedStore[t].flags,
                messages: e.persistedStore[t].errors,
              };
            }),
            this.observers
          )
          .reduce(function (e, t) {
            return (
              Object.keys(Yn).forEach(function (r) {
                var n,
                  i,
                  a = t.flags || t.ctx;
                r in e
                  ? (e[r] =
                      ((n = e[r]),
                      (i = a[r]),
                      [n, i][Yn[r]](function (e) {
                        return e;
                      })))
                  : (e[r] = a[r]);
              }),
              (e.errors[t.vid] =
                t.messages ||
                N(t.ctx.errors).reduce(function (e, t) {
                  return e.concat(t);
                }, [])),
              e
            );
          }, t);
      },
    },
    created: function () {
      this.$_veeObserver && this.$_veeObserver.subscribe(this, "observer");
    },
    activated: function () {
      this.$_veeObserver && this.$_veeObserver.subscribe(this, "observer");
    },
    deactivated: function () {
      this.$_veeObserver && this.$_veeObserver.unsubscribe(this, "observer");
    },
    beforeDestroy: function () {
      this.$_veeObserver && this.$_veeObserver.unsubscribe(this, "observer");
    },
    render: function (e) {
      var t = this.$slots.default || this.$scopedSlots.default || [];
      return (
        v(t) && (t = t(this.ctx)),
        this.slim
          ? G(e, t)
          : e(this.tag, { on: this.$listeners, attrs: this.$attrs }, t)
      );
    },
    methods: {
      subscribe: function (e, t) {
        var r;
        void 0 === t && (t = "provider"),
          "observer" !== t
            ? ((this.refs = Object.assign(
                {},
                this.refs,
                (((r = {})[e.vid] = e), r)
              )),
              e.persist &&
                this.persistedStore[e.vid] &&
                this.restoreProviderState(e))
            : this.observers.push(e);
      },
      unsubscribe: function (e, t) {
        var r = e.vid;
        void 0 === t && (t = "provider"),
          "provider" === t && this.removeProvider(r);
        var n = x(this.observers, function (e) {
          return e.vid === r;
        });
        -1 !== n && this.observers.splice(n, 1);
      },
      validate: function (e) {
        void 0 === e && (e = { silent: !1 });
        var t = e.silent;
        return Promise.all(
          N(this.refs)
            .map(function (e) {
              return e[t ? "validateSilent" : "validate"]().then(function (e) {
                return e.valid;
              });
            })
            .concat(
              this.observers.map(function (e) {
                return e.validate({ silent: t });
              })
            )
        ).then(function (e) {
          return e.every(function (e) {
            return e;
          });
        });
      },
      reset: function () {
        var e = this;
        return (
          Object.keys(this.persistedStore).forEach(function (t) {
            e.$delete(e.persistedStore, t);
          }),
          N(this.refs)
            .concat(this.observers)
            .forEach(function (e) {
              return e.reset();
            })
        );
      },
      restoreProviderState: function (e) {
        var t = this.persistedStore[e.vid];
        e.setFlags(t.flags),
          e.applyResult(t),
          this.$delete(this.persistedStore, e.vid);
      },
      removeProvider: function (e) {
        var t,
          r = this.refs[e];
        r &&
          r.persist &&
          (this.persistedStore = b(
            {},
            this.persistedStore,
            (((t = {})[e] = {
              flags: r.flags,
              errors: r.messages,
              failedRules: r.failedRules,
            }),
            t)
          )),
          this.$delete(this.refs, e);
      },
    },
  };
function Ln(e, t) {
  void 0 === t && (t = null);
  var r = v(e) ? e.options : e;
  r.$__veeInject = !1;
  var n = {
    name: (r.name || "AnonymousHoc") + "WithValidation",
    props: b({}, kn.props),
    data: kn.data,
    computed: b({}, kn.computed),
    methods: b({}, kn.methods),
    $__veeInject: !1,
    beforeDestroy: kn.beforeDestroy,
    inject: kn.inject,
  };
  t ||
    (t = function (e) {
      return e;
    });
  var i = (r.model && r.model.event) || "input";
  return (
    (n.render = function (e) {
      var n;
      this.registerField();
      var a = Sn(this),
        o = b({}, this.$listeners),
        s = Z(this.$vnode);
      (this._inputEventName = this._inputEventName || B(this.$vnode, s)),
        Pn.call(this, s);
      var u = jn(this),
        l = u.onInput,
        c = u.onBlur,
        d = u.onValidate;
      z(o, i, l),
        z(o, "blur", c),
        this.normalizedEvents.forEach(function (e, t) {
          z(o, e, d);
        });
      var f,
        h,
        v = (V(this.$vnode) || { prop: "value" }).prop,
        m = b({}, this.$attrs, (((n = {})[v] = s.value), n), t(a));
      return e(
        r,
        { attrs: this.$attrs, props: m, on: o },
        ((f = this.$slots),
        (h = this.$vnode.context),
        Object.keys(f).reduce(function (e, t) {
          return (
            f[t].forEach(function (e) {
              e.context ||
                ((f[t].context = h),
                e.data || (e.data = {}),
                (e.data.slot = t));
            }),
            e.concat(f[t])
          );
        }, []))
      );
    }),
    n
  );
}
var Vn = "2.2.15";
Object.keys(Nn).forEach(function (e) {
  pe.extend(
    e,
    Nn[e].validate,
    b({}, Nn[e].options, { paramNames: Nn[e].paramNames })
  );
}),
  pe.localize({ en: Me });
var zn = Ce.install;
(Ce.version = Vn),
  (Ce.mapFields = Mn),
  (Ce.ValidationProvider = kn),
  (Ce.ValidationObserver = Zn),
  (Ce.withValidation = Ln);
export {
  j as ErrorBag,
  Nn as Rules,
  Zn as ValidationObserver,
  kn as ValidationProvider,
  pe as Validator,
  Ce as default,
  me as directive,
  zn as install,
  Mn as mapFields,
  he as mixin,
  Vn as version,
  Ln as withValidation,
};
//# sourceMappingURL=/sm/482dac9fe40ca23a5e4aa81ea6181e81e62fd7b1d30e0f46683e27d0f99b9ece.map
