/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.17.1.
 * Original file: /npm/axios@1.4.0/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var t =
  "undefined" != typeof global
    ? global
    : "undefined" != typeof self
    ? self
    : "undefined" != typeof window
    ? window
    : {};
function e(t, e) {
  return function () {
    return t.apply(e, arguments);
  };
}
const { toString: r } = Object.prototype,
  { getPrototypeOf: n } = Object,
  o =
    ((i = Object.create(null)),
    (t) => {
      const e = r.call(t);
      return i[e] || (i[e] = e.slice(8, -1).toLowerCase());
    });
var i;
const s = (t) => ((t = t.toLowerCase()), (e) => o(e) === t),
  a = (t) => (e) => typeof e === t,
  { isArray: u } = Array,
  c = a("undefined");
const f = s("ArrayBuffer");
const l = a("string"),
  h = a("function"),
  p = a("number"),
  d = (t) => null !== t && "object" == typeof t,
  g = (t) => {
    if ("object" !== o(t)) return !1;
    const e = n(t);
    return !(
      (null !== e &&
        e !== Object.prototype &&
        null !== Object.getPrototypeOf(e)) ||
      Symbol.toStringTag in t ||
      Symbol.iterator in t
    );
  },
  y = s("Date"),
  m = s("File"),
  w = s("Blob"),
  b = s("FileList"),
  E = s("URLSearchParams");
function A(t, e, { allOwnKeys: r = !1 } = {}) {
  if (null == t) return;
  let n, o;
  if (("object" != typeof t && (t = [t]), u(t)))
    for (n = 0, o = t.length; n < o; n++) e.call(null, t[n], n, t);
  else {
    const o = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
      i = o.length;
    let s;
    for (n = 0; n < i; n++) (s = o[n]), e.call(null, t[s], s, t);
  }
}
function R(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n,
    o = r.length;
  for (; o-- > 0; ) if (((n = r[o]), e === n.toLowerCase())) return n;
  return null;
}
const v =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : t,
  O = (t) => !c(t) && t !== v;
const S =
  ((T = "undefined" != typeof Uint8Array && n(Uint8Array)),
  (t) => T && t instanceof T);
var T;
const P = s("HTMLFormElement"),
  _ = (
    ({ hasOwnProperty: t }) =>
    (e, r) =>
      t.call(e, r)
  )(Object.prototype),
  U = s("RegExp"),
  C = (t, e) => {
    const r = Object.getOwnPropertyDescriptors(t),
      n = {};
    A(r, (r, o) => {
      !1 !== e(r, o, t) && (n[o] = r);
    }),
      Object.defineProperties(t, n);
  },
  B = "abcdefghijklmnopqrstuvwxyz",
  x = "0123456789",
  N = { DIGIT: x, ALPHA: B, ALPHA_DIGIT: B + B.toUpperCase() + x };
const L = s("AsyncFunction");
var j = {
    isArray: u,
    isArrayBuffer: f,
    isBuffer: function (t) {
      return (
        null !== t &&
        !c(t) &&
        null !== t.constructor &&
        !c(t.constructor) &&
        h(t.constructor.isBuffer) &&
        t.constructor.isBuffer(t)
      );
    },
    isFormData: (t) => {
      let e;
      return (
        t &&
        (("function" == typeof FormData && t instanceof FormData) ||
          (h(t.append) &&
            ("formdata" === (e = o(t)) ||
              ("object" === e &&
                h(t.toString) &&
                "[object FormData]" === t.toString()))))
      );
    },
    isArrayBufferView: function (t) {
      let e;
      return (
        (e =
          "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(t)
            : t && t.buffer && f(t.buffer)),
        e
      );
    },
    isString: l,
    isNumber: p,
    isBoolean: (t) => !0 === t || !1 === t,
    isObject: d,
    isPlainObject: g,
    isUndefined: c,
    isDate: y,
    isFile: m,
    isBlob: w,
    isRegExp: U,
    isFunction: h,
    isStream: (t) => d(t) && h(t.pipe),
    isURLSearchParams: E,
    isTypedArray: S,
    isFileList: b,
    forEach: A,
    merge: function t() {
      const { caseless: e } = (O(this) && this) || {},
        r = {},
        n = (n, o) => {
          const i = (e && R(r, o)) || o;
          g(r[i]) && g(n)
            ? (r[i] = t(r[i], n))
            : g(n)
            ? (r[i] = t({}, n))
            : u(n)
            ? (r[i] = n.slice())
            : (r[i] = n);
        };
      for (let t = 0, e = arguments.length; t < e; t++)
        arguments[t] && A(arguments[t], n);
      return r;
    },
    extend: (t, r, n, { allOwnKeys: o } = {}) => (
      A(
        r,
        (r, o) => {
          n && h(r) ? (t[o] = e(r, n)) : (t[o] = r);
        },
        { allOwnKeys: o }
      ),
      t
    ),
    trim: (t) =>
      t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
    stripBOM: (t) => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
    inherits: (t, e, r, n) => {
      (t.prototype = Object.create(e.prototype, n)),
        (t.prototype.constructor = t),
        Object.defineProperty(t, "super", { value: e.prototype }),
        r && Object.assign(t.prototype, r);
    },
    toFlatObject: (t, e, r, o) => {
      let i, s, a;
      const u = {};
      if (((e = e || {}), null == t)) return e;
      do {
        for (i = Object.getOwnPropertyNames(t), s = i.length; s-- > 0; )
          (a = i[s]),
            (o && !o(a, t, e)) || u[a] || ((e[a] = t[a]), (u[a] = !0));
        t = !1 !== r && n(t);
      } while (t && (!r || r(t, e)) && t !== Object.prototype);
      return e;
    },
    kindOf: o,
    kindOfTest: s,
    endsWith: (t, e, r) => {
      (t = String(t)),
        (void 0 === r || r > t.length) && (r = t.length),
        (r -= e.length);
      const n = t.indexOf(e, r);
      return -1 !== n && n === r;
    },
    toArray: (t) => {
      if (!t) return null;
      if (u(t)) return t;
      let e = t.length;
      if (!p(e)) return null;
      const r = new Array(e);
      for (; e-- > 0; ) r[e] = t[e];
      return r;
    },
    forEachEntry: (t, e) => {
      const r = (t && t[Symbol.iterator]).call(t);
      let n;
      for (; (n = r.next()) && !n.done; ) {
        const r = n.value;
        e.call(t, r[0], r[1]);
      }
    },
    matchAll: (t, e) => {
      let r;
      const n = [];
      for (; null !== (r = t.exec(e)); ) n.push(r);
      return n;
    },
    isHTMLForm: P,
    hasOwnProperty: _,
    hasOwnProp: _,
    reduceDescriptors: C,
    freezeMethods: (t) => {
      C(t, (e, r) => {
        if (h(t) && -1 !== ["arguments", "caller", "callee"].indexOf(r))
          return !1;
        const n = t[r];
        h(n) &&
          ((e.enumerable = !1),
          "writable" in e
            ? (e.writable = !1)
            : e.set ||
              (e.set = () => {
                throw Error("Can not rewrite read-only method '" + r + "'");
              }));
      });
    },
    toObjectSet: (t, e) => {
      const r = {},
        n = (t) => {
          t.forEach((t) => {
            r[t] = !0;
          });
        };
      return u(t) ? n(t) : n(String(t).split(e)), r;
    },
    toCamelCase: (t) =>
      t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (t, e, r) {
        return e.toUpperCase() + r;
      }),
    noop: () => {},
    toFiniteNumber: (t, e) => ((t = +t), Number.isFinite(t) ? t : e),
    findKey: R,
    global: v,
    isContextDefined: O,
    ALPHABET: N,
    generateString: (t = 16, e = N.ALPHA_DIGIT) => {
      let r = "";
      const { length: n } = e;
      for (; t--; ) r += e[(Math.random() * n) | 0];
      return r;
    },
    isSpecCompliantForm: function (t) {
      return !!(
        t &&
        h(t.append) &&
        "FormData" === t[Symbol.toStringTag] &&
        t[Symbol.iterator]
      );
    },
    toJSONObject: (t) => {
      const e = new Array(10),
        r = (t, n) => {
          if (d(t)) {
            if (e.indexOf(t) >= 0) return;
            if (!("toJSON" in t)) {
              e[n] = t;
              const o = u(t) ? [] : {};
              return (
                A(t, (t, e) => {
                  const i = r(t, n + 1);
                  !c(i) && (o[e] = i);
                }),
                (e[n] = void 0),
                o
              );
            }
          }
          return t;
        };
      return r(t, 0);
    },
    isAsyncFn: L,
    isThenable: (t) => t && (d(t) || h(t)) && h(t.then) && h(t.catch),
  },
  D = [],
  F = [],
  I = "undefined" != typeof Uint8Array ? Uint8Array : Array,
  k = !1;
function M() {
  k = !0;
  for (
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      e = 0;
    e < 64;
    ++e
  )
    (D[e] = t[e]), (F[t.charCodeAt(e)] = e);
  (F["-".charCodeAt(0)] = 62), (F["_".charCodeAt(0)] = 63);
}
function Y(t, e, r) {
  for (var n, o, i = [], s = e; s < r; s += 3)
    (n = (t[s] << 16) + (t[s + 1] << 8) + t[s + 2]),
      i.push(
        D[((o = n) >> 18) & 63] +
          D[(o >> 12) & 63] +
          D[(o >> 6) & 63] +
          D[63 & o]
      );
  return i.join("");
}
function z(t) {
  var e;
  k || M();
  for (
    var r = t.length, n = r % 3, o = "", i = [], s = 16383, a = 0, u = r - n;
    a < u;
    a += s
  )
    i.push(Y(t, a, a + s > u ? u : a + s));
  return (
    1 === n
      ? ((e = t[r - 1]), (o += D[e >> 2]), (o += D[(e << 4) & 63]), (o += "=="))
      : 2 === n &&
        ((e = (t[r - 2] << 8) + t[r - 1]),
        (o += D[e >> 10]),
        (o += D[(e >> 4) & 63]),
        (o += D[(e << 2) & 63]),
        (o += "=")),
    i.push(o),
    i.join("")
  );
}
function q(t, e, r, n, o) {
  var i,
    s,
    a = 8 * o - n - 1,
    u = (1 << a) - 1,
    c = u >> 1,
    f = -7,
    l = r ? o - 1 : 0,
    h = r ? -1 : 1,
    p = t[e + l];
  for (
    l += h, i = p & ((1 << -f) - 1), p >>= -f, f += a;
    f > 0;
    i = 256 * i + t[e + l], l += h, f -= 8
  );
  for (
    s = i & ((1 << -f) - 1), i >>= -f, f += n;
    f > 0;
    s = 256 * s + t[e + l], l += h, f -= 8
  );
  if (0 === i) i = 1 - c;
  else {
    if (i === u) return s ? NaN : (1 / 0) * (p ? -1 : 1);
    (s += Math.pow(2, n)), (i -= c);
  }
  return (p ? -1 : 1) * s * Math.pow(2, i - n);
}
function H(t, e, r, n, o, i) {
  var s,
    a,
    u,
    c = 8 * i - o - 1,
    f = (1 << c) - 1,
    l = f >> 1,
    h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
    p = n ? 0 : i - 1,
    d = n ? 1 : -1,
    g = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
  for (
    e = Math.abs(e),
      isNaN(e) || e === 1 / 0
        ? ((a = isNaN(e) ? 1 : 0), (s = f))
        : ((s = Math.floor(Math.log(e) / Math.LN2)),
          e * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
          (e += s + l >= 1 ? h / u : h * Math.pow(2, 1 - l)) * u >= 2 &&
            (s++, (u /= 2)),
          s + l >= f
            ? ((a = 0), (s = f))
            : s + l >= 1
            ? ((a = (e * u - 1) * Math.pow(2, o)), (s += l))
            : ((a = e * Math.pow(2, l - 1) * Math.pow(2, o)), (s = 0)));
    o >= 8;
    t[r + p] = 255 & a, p += d, a /= 256, o -= 8
  );
  for (
    s = (s << o) | a, c += o;
    c > 0;
    t[r + p] = 255 & s, p += d, s /= 256, c -= 8
  );
  t[r + p - d] |= 128 * g;
}
var J = {}.toString,
  V =
    Array.isArray ||
    function (t) {
      return "[object Array]" == J.call(t);
    };
function W() {
  return G.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function K(t, e) {
  if (W() < e) throw new RangeError("Invalid typed array length");
  return (
    G.TYPED_ARRAY_SUPPORT
      ? ((t = new Uint8Array(e)).__proto__ = G.prototype)
      : (null === t && (t = new G(e)), (t.length = e)),
    t
  );
}
function G(t, e, r) {
  if (!(G.TYPED_ARRAY_SUPPORT || this instanceof G)) return new G(t, e, r);
  if ("number" == typeof t) {
    if ("string" == typeof e)
      throw new Error(
        "If encoding is specified then the first argument must be a string"
      );
    return Q(this, t);
  }
  return $(this, t, e, r);
}
function $(t, e, r, n) {
  if ("number" == typeof e)
    throw new TypeError('"value" argument must not be a number');
  return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
    ? (function (t, e, r, n) {
        if ((e.byteLength, r < 0 || e.byteLength < r))
          throw new RangeError("'offset' is out of bounds");
        if (e.byteLength < r + (n || 0))
          throw new RangeError("'length' is out of bounds");
        e =
          void 0 === r && void 0 === n
            ? new Uint8Array(e)
            : void 0 === n
            ? new Uint8Array(e, r)
            : new Uint8Array(e, r, n);
        G.TYPED_ARRAY_SUPPORT
          ? ((t = e).__proto__ = G.prototype)
          : (t = Z(t, e));
        return t;
      })(t, e, r, n)
    : "string" == typeof e
    ? (function (t, e, r) {
        ("string" == typeof r && "" !== r) || (r = "utf8");
        if (!G.isEncoding(r))
          throw new TypeError('"encoding" must be a valid string encoding');
        var n = 0 | rt(e, r);
        t = K(t, n);
        var o = t.write(e, r);
        o !== n && (t = t.slice(0, o));
        return t;
      })(t, e, r)
    : (function (t, e) {
        if (et(e)) {
          var r = 0 | tt(e.length);
          return 0 === (t = K(t, r)).length || e.copy(t, 0, 0, r), t;
        }
        if (e) {
          if (
            ("undefined" != typeof ArrayBuffer &&
              e.buffer instanceof ArrayBuffer) ||
            "length" in e
          )
            return "number" != typeof e.length || (n = e.length) != n
              ? K(t, 0)
              : Z(t, e);
          if ("Buffer" === e.type && V(e.data)) return Z(t, e.data);
        }
        var n;
        throw new TypeError(
          "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
        );
      })(t, e);
}
function X(t) {
  if ("number" != typeof t)
    throw new TypeError('"size" argument must be a number');
  if (t < 0) throw new RangeError('"size" argument must not be negative');
}
function Q(t, e) {
  if ((X(e), (t = K(t, e < 0 ? 0 : 0 | tt(e))), !G.TYPED_ARRAY_SUPPORT))
    for (var r = 0; r < e; ++r) t[r] = 0;
  return t;
}
function Z(t, e) {
  var r = e.length < 0 ? 0 : 0 | tt(e.length);
  t = K(t, r);
  for (var n = 0; n < r; n += 1) t[n] = 255 & e[n];
  return t;
}
function tt(t) {
  if (t >= W())
    throw new RangeError(
      "Attempt to allocate Buffer larger than maximum size: 0x" +
        W().toString(16) +
        " bytes"
    );
  return 0 | t;
}
function et(t) {
  return !(null == t || !t._isBuffer);
}
function rt(t, e) {
  if (et(t)) return t.length;
  if (
    "undefined" != typeof ArrayBuffer &&
    "function" == typeof ArrayBuffer.isView &&
    (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
  )
    return t.byteLength;
  "string" != typeof t && (t = "" + t);
  var r = t.length;
  if (0 === r) return 0;
  for (var n = !1; ; )
    switch (e) {
      case "ascii":
      case "latin1":
      case "binary":
        return r;
      case "utf8":
      case "utf-8":
      case void 0:
        return Ut(t).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * r;
      case "hex":
        return r >>> 1;
      case "base64":
        return Ct(t).length;
      default:
        if (n) return Ut(t).length;
        (e = ("" + e).toLowerCase()), (n = !0);
    }
}
function nt(t, e, r) {
  var n = !1;
  if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
  if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
    return "";
  if ((r >>>= 0) <= (e >>>= 0)) return "";
  for (t || (t = "utf8"); ; )
    switch (t) {
      case "hex":
        return wt(this, e, r);
      case "utf8":
      case "utf-8":
        return dt(this, e, r);
      case "ascii":
        return yt(this, e, r);
      case "latin1":
      case "binary":
        return mt(this, e, r);
      case "base64":
        return pt(this, e, r);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return bt(this, e, r);
      default:
        if (n) throw new TypeError("Unknown encoding: " + t);
        (t = (t + "").toLowerCase()), (n = !0);
    }
}
function ot(t, e, r) {
  var n = t[e];
  (t[e] = t[r]), (t[r] = n);
}
function it(t, e, r, n, o) {
  if (0 === t.length) return -1;
  if (
    ("string" == typeof r
      ? ((n = r), (r = 0))
      : r > 2147483647
      ? (r = 2147483647)
      : r < -2147483648 && (r = -2147483648),
    (r = +r),
    isNaN(r) && (r = o ? 0 : t.length - 1),
    r < 0 && (r = t.length + r),
    r >= t.length)
  ) {
    if (o) return -1;
    r = t.length - 1;
  } else if (r < 0) {
    if (!o) return -1;
    r = 0;
  }
  if (("string" == typeof e && (e = G.from(e, n)), et(e)))
    return 0 === e.length ? -1 : st(t, e, r, n, o);
  if ("number" == typeof e)
    return (
      (e &= 255),
      G.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf
        ? o
          ? Uint8Array.prototype.indexOf.call(t, e, r)
          : Uint8Array.prototype.lastIndexOf.call(t, e, r)
        : st(t, [e], r, n, o)
    );
  throw new TypeError("val must be string, number or Buffer");
}
function st(t, e, r, n, o) {
  var i,
    s = 1,
    a = t.length,
    u = e.length;
  if (
    void 0 !== n &&
    ("ucs2" === (n = String(n).toLowerCase()) ||
      "ucs-2" === n ||
      "utf16le" === n ||
      "utf-16le" === n)
  ) {
    if (t.length < 2 || e.length < 2) return -1;
    (s = 2), (a /= 2), (u /= 2), (r /= 2);
  }
  function c(t, e) {
    return 1 === s ? t[e] : t.readUInt16BE(e * s);
  }
  if (o) {
    var f = -1;
    for (i = r; i < a; i++)
      if (c(t, i) === c(e, -1 === f ? 0 : i - f)) {
        if ((-1 === f && (f = i), i - f + 1 === u)) return f * s;
      } else -1 !== f && (i -= i - f), (f = -1);
  } else
    for (r + u > a && (r = a - u), i = r; i >= 0; i--) {
      for (var l = !0, h = 0; h < u; h++)
        if (c(t, i + h) !== c(e, h)) {
          l = !1;
          break;
        }
      if (l) return i;
    }
  return -1;
}
function at(t, e, r, n) {
  r = Number(r) || 0;
  var o = t.length - r;
  n ? (n = Number(n)) > o && (n = o) : (n = o);
  var i = e.length;
  if (i % 2 != 0) throw new TypeError("Invalid hex string");
  n > i / 2 && (n = i / 2);
  for (var s = 0; s < n; ++s) {
    var a = parseInt(e.substr(2 * s, 2), 16);
    if (isNaN(a)) return s;
    t[r + s] = a;
  }
  return s;
}
function ut(t, e, r, n) {
  return Bt(Ut(e, t.length - r), t, r, n);
}
function ct(t, e, r, n) {
  return Bt(
    (function (t) {
      for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
      return e;
    })(e),
    t,
    r,
    n
  );
}
function ft(t, e, r, n) {
  return ct(t, e, r, n);
}
function lt(t, e, r, n) {
  return Bt(Ct(e), t, r, n);
}
function ht(t, e, r, n) {
  return Bt(
    (function (t, e) {
      for (var r, n, o, i = [], s = 0; s < t.length && !((e -= 2) < 0); ++s)
        (n = (r = t.charCodeAt(s)) >> 8), (o = r % 256), i.push(o), i.push(n);
      return i;
    })(e, t.length - r),
    t,
    r,
    n
  );
}
function pt(t, e, r) {
  return 0 === e && r === t.length ? z(t) : z(t.slice(e, r));
}
function dt(t, e, r) {
  r = Math.min(t.length, r);
  for (var n = [], o = e; o < r; ) {
    var i,
      s,
      a,
      u,
      c = t[o],
      f = null,
      l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
    if (o + l <= r)
      switch (l) {
        case 1:
          c < 128 && (f = c);
          break;
        case 2:
          128 == (192 & (i = t[o + 1])) &&
            (u = ((31 & c) << 6) | (63 & i)) > 127 &&
            (f = u);
          break;
        case 3:
          (i = t[o + 1]),
            (s = t[o + 2]),
            128 == (192 & i) &&
              128 == (192 & s) &&
              (u = ((15 & c) << 12) | ((63 & i) << 6) | (63 & s)) > 2047 &&
              (u < 55296 || u > 57343) &&
              (f = u);
          break;
        case 4:
          (i = t[o + 1]),
            (s = t[o + 2]),
            (a = t[o + 3]),
            128 == (192 & i) &&
              128 == (192 & s) &&
              128 == (192 & a) &&
              (u =
                ((15 & c) << 18) |
                ((63 & i) << 12) |
                ((63 & s) << 6) |
                (63 & a)) > 65535 &&
              u < 1114112 &&
              (f = u);
      }
    null === f
      ? ((f = 65533), (l = 1))
      : f > 65535 &&
        ((f -= 65536),
        n.push(((f >>> 10) & 1023) | 55296),
        (f = 56320 | (1023 & f))),
      n.push(f),
      (o += l);
  }
  return (function (t) {
    var e = t.length;
    if (e <= gt) return String.fromCharCode.apply(String, t);
    var r = "",
      n = 0;
    for (; n < e; )
      r += String.fromCharCode.apply(String, t.slice(n, (n += gt)));
    return r;
  })(n);
}
(G.TYPED_ARRAY_SUPPORT =
  void 0 === t.TYPED_ARRAY_SUPPORT || t.TYPED_ARRAY_SUPPORT),
  W(),
  (G.poolSize = 8192),
  (G._augment = function (t) {
    return (t.__proto__ = G.prototype), t;
  }),
  (G.from = function (t, e, r) {
    return $(null, t, e, r);
  }),
  G.TYPED_ARRAY_SUPPORT &&
    ((G.prototype.__proto__ = Uint8Array.prototype),
    (G.__proto__ = Uint8Array),
    "undefined" != typeof Symbol && Symbol.species && G[Symbol.species]),
  (G.alloc = function (t, e, r) {
    return (function (t, e, r, n) {
      return (
        X(e),
        e <= 0
          ? K(t, e)
          : void 0 !== r
          ? "string" == typeof n
            ? K(t, e).fill(r, n)
            : K(t, e).fill(r)
          : K(t, e)
      );
    })(null, t, e, r);
  }),
  (G.allocUnsafe = function (t) {
    return Q(null, t);
  }),
  (G.allocUnsafeSlow = function (t) {
    return Q(null, t);
  }),
  (G.isBuffer = function (t) {
    return (
      null != t &&
      (!!t._isBuffer ||
        xt(t) ||
        (function (t) {
          return (
            "function" == typeof t.readFloatLE &&
            "function" == typeof t.slice &&
            xt(t.slice(0, 0))
          );
        })(t))
    );
  }),
  (G.compare = function (t, e) {
    if (!et(t) || !et(e)) throw new TypeError("Arguments must be Buffers");
    if (t === e) return 0;
    for (var r = t.length, n = e.length, o = 0, i = Math.min(r, n); o < i; ++o)
      if (t[o] !== e[o]) {
        (r = t[o]), (n = e[o]);
        break;
      }
    return r < n ? -1 : n < r ? 1 : 0;
  }),
  (G.isEncoding = function (t) {
    switch (String(t).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }),
  (G.concat = function (t, e) {
    if (!V(t))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (0 === t.length) return G.alloc(0);
    var r;
    if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
    var n = G.allocUnsafe(e),
      o = 0;
    for (r = 0; r < t.length; ++r) {
      var i = t[r];
      if (!et(i))
        throw new TypeError('"list" argument must be an Array of Buffers');
      i.copy(n, o), (o += i.length);
    }
    return n;
  }),
  (G.byteLength = rt),
  (G.prototype._isBuffer = !0),
  (G.prototype.swap16 = function () {
    var t = this.length;
    if (t % 2 != 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var e = 0; e < t; e += 2) ot(this, e, e + 1);
    return this;
  }),
  (G.prototype.swap32 = function () {
    var t = this.length;
    if (t % 4 != 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var e = 0; e < t; e += 4) ot(this, e, e + 3), ot(this, e + 1, e + 2);
    return this;
  }),
  (G.prototype.swap64 = function () {
    var t = this.length;
    if (t % 8 != 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var e = 0; e < t; e += 8)
      ot(this, e, e + 7),
        ot(this, e + 1, e + 6),
        ot(this, e + 2, e + 5),
        ot(this, e + 3, e + 4);
    return this;
  }),
  (G.prototype.toString = function () {
    var t = 0 | this.length;
    return 0 === t
      ? ""
      : 0 === arguments.length
      ? dt(this, 0, t)
      : nt.apply(this, arguments);
  }),
  (G.prototype.equals = function (t) {
    if (!et(t)) throw new TypeError("Argument must be a Buffer");
    return this === t || 0 === G.compare(this, t);
  }),
  (G.prototype.inspect = function () {
    var t = "";
    return (
      this.length > 0 &&
        ((t = this.toString("hex", 0, 50).match(/.{2}/g).join(" ")),
        this.length > 50 && (t += " ... ")),
      "<Buffer " + t + ">"
    );
  }),
  (G.prototype.compare = function (t, e, r, n, o) {
    if (!et(t)) throw new TypeError("Argument must be a Buffer");
    if (
      (void 0 === e && (e = 0),
      void 0 === r && (r = t ? t.length : 0),
      void 0 === n && (n = 0),
      void 0 === o && (o = this.length),
      e < 0 || r > t.length || n < 0 || o > this.length)
    )
      throw new RangeError("out of range index");
    if (n >= o && e >= r) return 0;
    if (n >= o) return -1;
    if (e >= r) return 1;
    if (this === t) return 0;
    for (
      var i = (o >>>= 0) - (n >>>= 0),
        s = (r >>>= 0) - (e >>>= 0),
        a = Math.min(i, s),
        u = this.slice(n, o),
        c = t.slice(e, r),
        f = 0;
      f < a;
      ++f
    )
      if (u[f] !== c[f]) {
        (i = u[f]), (s = c[f]);
        break;
      }
    return i < s ? -1 : s < i ? 1 : 0;
  }),
  (G.prototype.includes = function (t, e, r) {
    return -1 !== this.indexOf(t, e, r);
  }),
  (G.prototype.indexOf = function (t, e, r) {
    return it(this, t, e, r, !0);
  }),
  (G.prototype.lastIndexOf = function (t, e, r) {
    return it(this, t, e, r, !1);
  }),
  (G.prototype.write = function (t, e, r, n) {
    if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
    else if (void 0 === r && "string" == typeof e)
      (n = e), (r = this.length), (e = 0);
    else {
      if (!isFinite(e))
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      (e |= 0),
        isFinite(r)
          ? ((r |= 0), void 0 === n && (n = "utf8"))
          : ((n = r), (r = void 0));
    }
    var o = this.length - e;
    if (
      ((void 0 === r || r > o) && (r = o),
      (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    n || (n = "utf8");
    for (var i = !1; ; )
      switch (n) {
        case "hex":
          return at(this, t, e, r);
        case "utf8":
        case "utf-8":
          return ut(this, t, e, r);
        case "ascii":
          return ct(this, t, e, r);
        case "latin1":
        case "binary":
          return ft(this, t, e, r);
        case "base64":
          return lt(this, t, e, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ht(this, t, e, r);
        default:
          if (i) throw new TypeError("Unknown encoding: " + n);
          (n = ("" + n).toLowerCase()), (i = !0);
      }
  }),
  (G.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  });
var gt = 4096;
function yt(t, e, r) {
  var n = "";
  r = Math.min(t.length, r);
  for (var o = e; o < r; ++o) n += String.fromCharCode(127 & t[o]);
  return n;
}
function mt(t, e, r) {
  var n = "";
  r = Math.min(t.length, r);
  for (var o = e; o < r; ++o) n += String.fromCharCode(t[o]);
  return n;
}
function wt(t, e, r) {
  var n = t.length;
  (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
  for (var o = "", i = e; i < r; ++i) o += _t(t[i]);
  return o;
}
function bt(t, e, r) {
  for (var n = t.slice(e, r), o = "", i = 0; i < n.length; i += 2)
    o += String.fromCharCode(n[i] + 256 * n[i + 1]);
  return o;
}
function Et(t, e, r) {
  if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
  if (t + e > r) throw new RangeError("Trying to access beyond buffer length");
}
function At(t, e, r, n, o, i) {
  if (!et(t))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (e > o || e < i) throw new RangeError('"value" argument is out of bounds');
  if (r + n > t.length) throw new RangeError("Index out of range");
}
function Rt(t, e, r, n) {
  e < 0 && (e = 65535 + e + 1);
  for (var o = 0, i = Math.min(t.length - r, 2); o < i; ++o)
    t[r + o] = (e & (255 << (8 * (n ? o : 1 - o)))) >>> (8 * (n ? o : 1 - o));
}
function vt(t, e, r, n) {
  e < 0 && (e = 4294967295 + e + 1);
  for (var o = 0, i = Math.min(t.length - r, 4); o < i; ++o)
    t[r + o] = (e >>> (8 * (n ? o : 3 - o))) & 255;
}
function Ot(t, e, r, n, o, i) {
  if (r + n > t.length) throw new RangeError("Index out of range");
  if (r < 0) throw new RangeError("Index out of range");
}
function St(t, e, r, n, o) {
  return o || Ot(t, 0, r, 4), H(t, e, r, n, 23, 4), r + 4;
}
function Tt(t, e, r, n, o) {
  return o || Ot(t, 0, r, 8), H(t, e, r, n, 52, 8), r + 8;
}
(G.prototype.slice = function (t, e) {
  var r,
    n = this.length;
  if (
    ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
    (e = void 0 === e ? n : ~~e) < 0
      ? (e += n) < 0 && (e = 0)
      : e > n && (e = n),
    e < t && (e = t),
    G.TYPED_ARRAY_SUPPORT)
  )
    (r = this.subarray(t, e)).__proto__ = G.prototype;
  else {
    var o = e - t;
    r = new G(o, void 0);
    for (var i = 0; i < o; ++i) r[i] = this[i + t];
  }
  return r;
}),
  (G.prototype.readUIntLE = function (t, e, r) {
    (t |= 0), (e |= 0), r || Et(t, e, this.length);
    for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256); )
      n += this[t + i] * o;
    return n;
  }),
  (G.prototype.readUIntBE = function (t, e, r) {
    (t |= 0), (e |= 0), r || Et(t, e, this.length);
    for (var n = this[t + --e], o = 1; e > 0 && (o *= 256); )
      n += this[t + --e] * o;
    return n;
  }),
  (G.prototype.readUInt8 = function (t, e) {
    return e || Et(t, 1, this.length), this[t];
  }),
  (G.prototype.readUInt16LE = function (t, e) {
    return e || Et(t, 2, this.length), this[t] | (this[t + 1] << 8);
  }),
  (G.prototype.readUInt16BE = function (t, e) {
    return e || Et(t, 2, this.length), (this[t] << 8) | this[t + 1];
  }),
  (G.prototype.readUInt32LE = function (t, e) {
    return (
      e || Et(t, 4, this.length),
      (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
        16777216 * this[t + 3]
    );
  }),
  (G.prototype.readUInt32BE = function (t, e) {
    return (
      e || Et(t, 4, this.length),
      16777216 * this[t] +
        ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
    );
  }),
  (G.prototype.readIntLE = function (t, e, r) {
    (t |= 0), (e |= 0), r || Et(t, e, this.length);
    for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256); )
      n += this[t + i] * o;
    return n >= (o *= 128) && (n -= Math.pow(2, 8 * e)), n;
  }),
  (G.prototype.readIntBE = function (t, e, r) {
    (t |= 0), (e |= 0), r || Et(t, e, this.length);
    for (var n = e, o = 1, i = this[t + --n]; n > 0 && (o *= 256); )
      i += this[t + --n] * o;
    return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i;
  }),
  (G.prototype.readInt8 = function (t, e) {
    return (
      e || Et(t, 1, this.length),
      128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
    );
  }),
  (G.prototype.readInt16LE = function (t, e) {
    e || Et(t, 2, this.length);
    var r = this[t] | (this[t + 1] << 8);
    return 32768 & r ? 4294901760 | r : r;
  }),
  (G.prototype.readInt16BE = function (t, e) {
    e || Et(t, 2, this.length);
    var r = this[t + 1] | (this[t] << 8);
    return 32768 & r ? 4294901760 | r : r;
  }),
  (G.prototype.readInt32LE = function (t, e) {
    return (
      e || Et(t, 4, this.length),
      this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24)
    );
  }),
  (G.prototype.readInt32BE = function (t, e) {
    return (
      e || Et(t, 4, this.length),
      (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]
    );
  }),
  (G.prototype.readFloatLE = function (t, e) {
    return e || Et(t, 4, this.length), q(this, t, !0, 23, 4);
  }),
  (G.prototype.readFloatBE = function (t, e) {
    return e || Et(t, 4, this.length), q(this, t, !1, 23, 4);
  }),
  (G.prototype.readDoubleLE = function (t, e) {
    return e || Et(t, 8, this.length), q(this, t, !0, 52, 8);
  }),
  (G.prototype.readDoubleBE = function (t, e) {
    return e || Et(t, 8, this.length), q(this, t, !1, 52, 8);
  }),
  (G.prototype.writeUIntLE = function (t, e, r, n) {
    ((t = +t), (e |= 0), (r |= 0), n) ||
      At(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
    var o = 1,
      i = 0;
    for (this[e] = 255 & t; ++i < r && (o *= 256); )
      this[e + i] = (t / o) & 255;
    return e + r;
  }),
  (G.prototype.writeUIntBE = function (t, e, r, n) {
    ((t = +t), (e |= 0), (r |= 0), n) ||
      At(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
    var o = r - 1,
      i = 1;
    for (this[e + o] = 255 & t; --o >= 0 && (i *= 256); )
      this[e + o] = (t / i) & 255;
    return e + r;
  }),
  (G.prototype.writeUInt8 = function (t, e, r) {
    return (
      (t = +t),
      (e |= 0),
      r || At(this, t, e, 1, 255, 0),
      G.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
      (this[e] = 255 & t),
      e + 1
    );
  }),
  (G.prototype.writeUInt16LE = function (t, e, r) {
    return (
      (t = +t),
      (e |= 0),
      r || At(this, t, e, 2, 65535, 0),
      G.TYPED_ARRAY_SUPPORT
        ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
        : Rt(this, t, e, !0),
      e + 2
    );
  }),
  (G.prototype.writeUInt16BE = function (t, e, r) {
    return (
      (t = +t),
      (e |= 0),
      r || At(this, t, e, 2, 65535, 0),
      G.TYPED_ARRAY_SUPPORT
        ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
        : Rt(this, t, e, !1),
      e + 2
    );
  }),
  (G.prototype.writeUInt32LE = function (t, e, r) {
    return (
      (t = +t),
      (e |= 0),
      r || At(this, t, e, 4, 4294967295, 0),
      G.TYPED_ARRAY_SUPPORT
        ? ((this[e + 3] = t >>> 24),
          (this[e + 2] = t >>> 16),
          (this[e + 1] = t >>> 8),
          (this[e] = 255 & t))
        : vt(this, t, e, !0),
      e + 4
    );
  }),
  (G.prototype.writeUInt32BE = function (t, e, r) {
    return (
      (t = +t),
      (e |= 0),
      r || At(this, t, e, 4, 4294967295, 0),
      G.TYPED_ARRAY_SUPPORT
        ? ((this[e] = t >>> 24),
          (this[e + 1] = t >>> 16),
          (this[e + 2] = t >>> 8),
          (this[e + 3] = 255 & t))
        : vt(this, t, e, !1),
      e + 4
    );
  }),
  (G.prototype.writeIntLE = function (t, e, r, n) {
    if (((t = +t), (e |= 0), !n)) {
      var o = Math.pow(2, 8 * r - 1);
      At(this, t, e, r, o - 1, -o);
    }
    var i = 0,
      s = 1,
      a = 0;
    for (this[e] = 255 & t; ++i < r && (s *= 256); )
      t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1),
        (this[e + i] = (((t / s) >> 0) - a) & 255);
    return e + r;
  }),
  (G.prototype.writeIntBE = function (t, e, r, n) {
    if (((t = +t), (e |= 0), !n)) {
      var o = Math.pow(2, 8 * r - 1);
      At(this, t, e, r, o - 1, -o);
    }
    var i = r - 1,
      s = 1,
      a = 0;
    for (this[e + i] = 255 & t; --i >= 0 && (s *= 256); )
      t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1),
        (this[e + i] = (((t / s) >> 0) - a) & 255);
    return e + r;
  }),
  (G.prototype.writeInt8 = function (t, e, r) {
    return (
      (t = +t),
      (e |= 0),
      r || At(this, t, e, 1, 127, -128),
      G.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
      t < 0 && (t = 255 + t + 1),
      (this[e] = 255 & t),
      e + 1
    );
  }),
  (G.prototype.writeInt16LE = function (t, e, r) {
    return (
      (t = +t),
      (e |= 0),
      r || At(this, t, e, 2, 32767, -32768),
      G.TYPED_ARRAY_SUPPORT
        ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
        : Rt(this, t, e, !0),
      e + 2
    );
  }),
  (G.prototype.writeInt16BE = function (t, e, r) {
    return (
      (t = +t),
      (e |= 0),
      r || At(this, t, e, 2, 32767, -32768),
      G.TYPED_ARRAY_SUPPORT
        ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
        : Rt(this, t, e, !1),
      e + 2
    );
  }),
  (G.prototype.writeInt32LE = function (t, e, r) {
    return (
      (t = +t),
      (e |= 0),
      r || At(this, t, e, 4, 2147483647, -2147483648),
      G.TYPED_ARRAY_SUPPORT
        ? ((this[e] = 255 & t),
          (this[e + 1] = t >>> 8),
          (this[e + 2] = t >>> 16),
          (this[e + 3] = t >>> 24))
        : vt(this, t, e, !0),
      e + 4
    );
  }),
  (G.prototype.writeInt32BE = function (t, e, r) {
    return (
      (t = +t),
      (e |= 0),
      r || At(this, t, e, 4, 2147483647, -2147483648),
      t < 0 && (t = 4294967295 + t + 1),
      G.TYPED_ARRAY_SUPPORT
        ? ((this[e] = t >>> 24),
          (this[e + 1] = t >>> 16),
          (this[e + 2] = t >>> 8),
          (this[e + 3] = 255 & t))
        : vt(this, t, e, !1),
      e + 4
    );
  }),
  (G.prototype.writeFloatLE = function (t, e, r) {
    return St(this, t, e, !0, r);
  }),
  (G.prototype.writeFloatBE = function (t, e, r) {
    return St(this, t, e, !1, r);
  }),
  (G.prototype.writeDoubleLE = function (t, e, r) {
    return Tt(this, t, e, !0, r);
  }),
  (G.prototype.writeDoubleBE = function (t, e, r) {
    return Tt(this, t, e, !1, r);
  }),
  (G.prototype.copy = function (t, e, r, n) {
    if (
      (r || (r = 0),
      n || 0 === n || (n = this.length),
      e >= t.length && (e = t.length),
      e || (e = 0),
      n > 0 && n < r && (n = r),
      n === r)
    )
      return 0;
    if (0 === t.length || 0 === this.length) return 0;
    if (e < 0) throw new RangeError("targetStart out of bounds");
    if (r < 0 || r >= this.length)
      throw new RangeError("sourceStart out of bounds");
    if (n < 0) throw new RangeError("sourceEnd out of bounds");
    n > this.length && (n = this.length),
      t.length - e < n - r && (n = t.length - e + r);
    var o,
      i = n - r;
    if (this === t && r < e && e < n)
      for (o = i - 1; o >= 0; --o) t[o + e] = this[o + r];
    else if (i < 1e3 || !G.TYPED_ARRAY_SUPPORT)
      for (o = 0; o < i; ++o) t[o + e] = this[o + r];
    else Uint8Array.prototype.set.call(t, this.subarray(r, r + i), e);
    return i;
  }),
  (G.prototype.fill = function (t, e, r, n) {
    if ("string" == typeof t) {
      if (
        ("string" == typeof e
          ? ((n = e), (e = 0), (r = this.length))
          : "string" == typeof r && ((n = r), (r = this.length)),
        1 === t.length)
      ) {
        var o = t.charCodeAt(0);
        o < 256 && (t = o);
      }
      if (void 0 !== n && "string" != typeof n)
        throw new TypeError("encoding must be a string");
      if ("string" == typeof n && !G.isEncoding(n))
        throw new TypeError("Unknown encoding: " + n);
    } else "number" == typeof t && (t &= 255);
    if (e < 0 || this.length < e || this.length < r)
      throw new RangeError("Out of range index");
    if (r <= e) return this;
    var i;
    if (
      ((e >>>= 0),
      (r = void 0 === r ? this.length : r >>> 0),
      t || (t = 0),
      "number" == typeof t)
    )
      for (i = e; i < r; ++i) this[i] = t;
    else {
      var s = et(t) ? t : Ut(new G(t, n).toString()),
        a = s.length;
      for (i = 0; i < r - e; ++i) this[i + e] = s[i % a];
    }
    return this;
  });
var Pt = /[^+\/0-9A-Za-z-_]/g;
function _t(t) {
  return t < 16 ? "0" + t.toString(16) : t.toString(16);
}
function Ut(t, e) {
  var r;
  e = e || 1 / 0;
  for (var n = t.length, o = null, i = [], s = 0; s < n; ++s) {
    if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
      if (!o) {
        if (r > 56319) {
          (e -= 3) > -1 && i.push(239, 191, 189);
          continue;
        }
        if (s + 1 === n) {
          (e -= 3) > -1 && i.push(239, 191, 189);
          continue;
        }
        o = r;
        continue;
      }
      if (r < 56320) {
        (e -= 3) > -1 && i.push(239, 191, 189), (o = r);
        continue;
      }
      r = 65536 + (((o - 55296) << 10) | (r - 56320));
    } else o && (e -= 3) > -1 && i.push(239, 191, 189);
    if (((o = null), r < 128)) {
      if ((e -= 1) < 0) break;
      i.push(r);
    } else if (r < 2048) {
      if ((e -= 2) < 0) break;
      i.push((r >> 6) | 192, (63 & r) | 128);
    } else if (r < 65536) {
      if ((e -= 3) < 0) break;
      i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
    } else {
      if (!(r < 1114112)) throw new Error("Invalid code point");
      if ((e -= 4) < 0) break;
      i.push(
        (r >> 18) | 240,
        ((r >> 12) & 63) | 128,
        ((r >> 6) & 63) | 128,
        (63 & r) | 128
      );
    }
  }
  return i;
}
function Ct(t) {
  return (function (t) {
    var e, r, n, o, i, s;
    k || M();
    var a = t.length;
    if (a % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    (i = "=" === t[a - 2] ? 2 : "=" === t[a - 1] ? 1 : 0),
      (s = new I((3 * a) / 4 - i)),
      (n = i > 0 ? a - 4 : a);
    var u = 0;
    for (e = 0, r = 0; e < n; e += 4, r += 3)
      (o =
        (F[t.charCodeAt(e)] << 18) |
        (F[t.charCodeAt(e + 1)] << 12) |
        (F[t.charCodeAt(e + 2)] << 6) |
        F[t.charCodeAt(e + 3)]),
        (s[u++] = (o >> 16) & 255),
        (s[u++] = (o >> 8) & 255),
        (s[u++] = 255 & o);
    return (
      2 === i
        ? ((o = (F[t.charCodeAt(e)] << 2) | (F[t.charCodeAt(e + 1)] >> 4)),
          (s[u++] = 255 & o))
        : 1 === i &&
          ((o =
            (F[t.charCodeAt(e)] << 10) |
            (F[t.charCodeAt(e + 1)] << 4) |
            (F[t.charCodeAt(e + 2)] >> 2)),
          (s[u++] = (o >> 8) & 255),
          (s[u++] = 255 & o)),
      s
    );
  })(
    (function (t) {
      if (
        (t = (function (t) {
          return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
        })(t).replace(Pt, "")).length < 2
      )
        return "";
      for (; t.length % 4 != 0; ) t += "=";
      return t;
    })(t)
  );
}
function Bt(t, e, r, n) {
  for (var o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o)
    e[o + r] = t[o];
  return o;
}
function xt(t) {
  return (
    !!t.constructor &&
    "function" == typeof t.constructor.isBuffer &&
    t.constructor.isBuffer(t)
  );
}
function Nt(t, e, r, n, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = t),
    (this.name = "AxiosError"),
    e && (this.code = e),
    r && (this.config = r),
    n && (this.request = n),
    o && (this.response = o);
}
j.inherits(Nt, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: j.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Lt = Nt.prototype,
  jt = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((t) => {
  jt[t] = { value: t };
}),
  Object.defineProperties(Nt, jt),
  Object.defineProperty(Lt, "isAxiosError", { value: !0 }),
  (Nt.from = (t, e, r, n, o, i) => {
    const s = Object.create(Lt);
    return (
      j.toFlatObject(
        t,
        s,
        function (t) {
          return t !== Error.prototype;
        },
        (t) => "isAxiosError" !== t
      ),
      Nt.call(s, t.message, e, r, n, o),
      (s.cause = t),
      (s.name = t.name),
      i && Object.assign(s, i),
      s
    );
  });
function Dt(t) {
  return j.isPlainObject(t) || j.isArray(t);
}
function Ft(t) {
  return j.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function It(t, e, r) {
  return t
    ? t
        .concat(e)
        .map(function (t, e) {
          return (t = Ft(t)), !r && e ? "[" + t + "]" : t;
        })
        .join(r ? "." : "")
    : e;
}
const kt = j.toFlatObject(j, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Mt(t, e, r) {
  if (!j.isObject(t)) throw new TypeError("target must be an object");
  e = e || new FormData();
  const n = (r = j.toFlatObject(
      r,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (t, e) {
        return !j.isUndefined(e[t]);
      }
    )).metaTokens,
    o = r.visitor || c,
    i = r.dots,
    s = r.indexes,
    a =
      (r.Blob || ("undefined" != typeof Blob && Blob)) &&
      j.isSpecCompliantForm(e);
  if (!j.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(t) {
    if (null === t) return "";
    if (j.isDate(t)) return t.toISOString();
    if (!a && j.isBlob(t))
      throw new Nt("Blob is not supported. Use a Buffer instead.");
    return j.isArrayBuffer(t) || j.isTypedArray(t)
      ? a && "function" == typeof Blob
        ? new Blob([t])
        : G.from(t)
      : t;
  }
  function c(t, r, o) {
    let a = t;
    if (t && !o && "object" == typeof t)
      if (j.endsWith(r, "{}"))
        (r = n ? r : r.slice(0, -2)), (t = JSON.stringify(t));
      else if (
        (j.isArray(t) &&
          (function (t) {
            return j.isArray(t) && !t.some(Dt);
          })(t)) ||
        ((j.isFileList(t) || j.endsWith(r, "[]")) && (a = j.toArray(t)))
      )
        return (
          (r = Ft(r)),
          a.forEach(function (t, n) {
            !j.isUndefined(t) &&
              null !== t &&
              e.append(
                !0 === s ? It([r], n, i) : null === s ? r : r + "[]",
                u(t)
              );
          }),
          !1
        );
    return !!Dt(t) || (e.append(It(o, r, i), u(t)), !1);
  }
  const f = [],
    l = Object.assign(kt, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: Dt,
    });
  if (!j.isObject(t)) throw new TypeError("data must be an object");
  return (
    (function t(r, n) {
      if (!j.isUndefined(r)) {
        if (-1 !== f.indexOf(r))
          throw Error("Circular reference detected in " + n.join("."));
        f.push(r),
          j.forEach(r, function (r, i) {
            !0 ===
              (!(j.isUndefined(r) || null === r) &&
                o.call(e, r, j.isString(i) ? i.trim() : i, n, l)) &&
              t(r, n ? n.concat(i) : [i]);
          }),
          f.pop();
      }
    })(t),
    e
  );
}
function Yt(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (t) {
    return e[t];
  });
}
function zt(t, e) {
  (this._pairs = []), t && Mt(t, this, e);
}
const qt = zt.prototype;
function Ht(t) {
  return encodeURIComponent(t)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Jt(t, e, r) {
  if (!e) return t;
  const n = (r && r.encode) || Ht,
    o = r && r.serialize;
  let i;
  if (
    ((i = o
      ? o(e, r)
      : j.isURLSearchParams(e)
      ? e.toString()
      : new zt(e, r).toString(n)),
    i)
  ) {
    const e = t.indexOf("#");
    -1 !== e && (t = t.slice(0, e)),
      (t += (-1 === t.indexOf("?") ? "?" : "&") + i);
  }
  return t;
}
(qt.append = function (t, e) {
  this._pairs.push([t, e]);
}),
  (qt.toString = function (t) {
    const e = t
      ? function (e) {
          return t.call(this, e, Yt);
        }
      : Yt;
    return this._pairs
      .map(function (t) {
        return e(t[0]) + "=" + e(t[1]);
      }, "")
      .join("&");
  });
class Vt {
  constructor() {
    this.handlers = [];
  }
  use(t, e, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: e,
        synchronous: !!r && r.synchronous,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    j.forEach(this.handlers, function (e) {
      null !== e && t(e);
    });
  }
}
var Wt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
};
var Kt = {
  isBrowser: !0,
  classes: {
    URLSearchParams:
      "undefined" != typeof URLSearchParams ? URLSearchParams : zt,
    FormData: "undefined" != typeof FormData ? FormData : null,
    Blob: "undefined" != typeof Blob ? Blob : null,
  },
  isStandardBrowserEnv: (() => {
    let t;
    return (
      ("undefined" == typeof navigator ||
        ("ReactNative" !== (t = navigator.product) &&
          "NativeScript" !== t &&
          "NS" !== t)) &&
      "undefined" != typeof window &&
      "undefined" != typeof document
    );
  })(),
  isStandardBrowserWebWorkerEnv:
    "undefined" != typeof WorkerGlobalScope &&
    self instanceof WorkerGlobalScope &&
    "function" == typeof self.importScripts,
  protocols: ["http", "https", "file", "blob", "url", "data"],
};
function Gt(t) {
  function e(t, r, n, o) {
    let i = t[o++];
    const s = Number.isFinite(+i),
      a = o >= t.length;
    if (((i = !i && j.isArray(n) ? n.length : i), a))
      return j.hasOwnProp(n, i) ? (n[i] = [n[i], r]) : (n[i] = r), !s;
    (n[i] && j.isObject(n[i])) || (n[i] = []);
    return (
      e(t, r, n[i], o) &&
        j.isArray(n[i]) &&
        (n[i] = (function (t) {
          const e = {},
            r = Object.keys(t);
          let n;
          const o = r.length;
          let i;
          for (n = 0; n < o; n++) (i = r[n]), (e[i] = t[i]);
          return e;
        })(n[i])),
      !s
    );
  }
  if (j.isFormData(t) && j.isFunction(t.entries)) {
    const r = {};
    return (
      j.forEachEntry(t, (t, n) => {
        e(
          (function (t) {
            return j
              .matchAll(/\w+|\[(\w*)]/g, t)
              .map((t) => ("[]" === t[0] ? "" : t[1] || t[0]));
          })(t),
          n,
          r,
          0
        );
      }),
      r
    );
  }
  return null;
}
const $t = { "Content-Type": void 0 };
const Xt = {
  transitional: Wt,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, e) {
      const r = e.getContentType() || "",
        n = r.indexOf("application/json") > -1,
        o = j.isObject(t);
      o && j.isHTMLForm(t) && (t = new FormData(t));
      if (j.isFormData(t)) return n && n ? JSON.stringify(Gt(t)) : t;
      if (
        j.isArrayBuffer(t) ||
        j.isBuffer(t) ||
        j.isStream(t) ||
        j.isFile(t) ||
        j.isBlob(t)
      )
        return t;
      if (j.isArrayBufferView(t)) return t.buffer;
      if (j.isURLSearchParams(t))
        return (
          e.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let i;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return (function (t, e) {
            return Mt(
              t,
              new Kt.classes.URLSearchParams(),
              Object.assign(
                {
                  visitor: function (t, e, r, n) {
                    return Kt.isNode && j.isBuffer(t)
                      ? (this.append(e, t.toString("base64")), !1)
                      : n.defaultVisitor.apply(this, arguments);
                  },
                },
                e
              )
            );
          })(t, this.formSerializer).toString();
        if ((i = j.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const e = this.env && this.env.FormData;
          return Mt(
            i ? { "files[]": t } : t,
            e && new e(),
            this.formSerializer
          );
        }
      }
      return o || n
        ? (e.setContentType("application/json", !1),
          (function (t, e, r) {
            if (j.isString(t))
              try {
                return (e || JSON.parse)(t), j.trim(t);
              } catch (t) {
                if ("SyntaxError" !== t.name) throw t;
              }
            return (r || JSON.stringify)(t);
          })(t))
        : t;
    },
  ],
  transformResponse: [
    function (t) {
      const e = this.transitional || Xt.transitional,
        r = e && e.forcedJSONParsing,
        n = "json" === this.responseType;
      if (t && j.isString(t) && ((r && !this.responseType) || n)) {
        const r = !(e && e.silentJSONParsing) && n;
        try {
          return JSON.parse(t);
        } catch (t) {
          if (r) {
            if ("SyntaxError" === t.name)
              throw Nt.from(t, Nt.ERR_BAD_RESPONSE, this, null, this.response);
            throw t;
          }
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Kt.classes.FormData, Blob: Kt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
j.forEach(["delete", "get", "head"], function (t) {
  Xt.headers[t] = {};
}),
  j.forEach(["post", "put", "patch"], function (t) {
    Xt.headers[t] = j.merge($t);
  });
const Qt = j.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent",
]);
const Zt = Symbol("internals");
function te(t) {
  return t && String(t).trim().toLowerCase();
}
function ee(t) {
  return !1 === t || null == t ? t : j.isArray(t) ? t.map(ee) : String(t);
}
function re(t, e, r, n, o) {
  return j.isFunction(n)
    ? n.call(this, e, r)
    : (o && (e = r),
      j.isString(e)
        ? j.isString(n)
          ? -1 !== e.indexOf(n)
          : j.isRegExp(n)
          ? n.test(e)
          : void 0
        : void 0);
}
class ne {
  constructor(t) {
    t && this.set(t);
  }
  set(t, e, r) {
    const n = this;
    function o(t, e, r) {
      const o = te(e);
      if (!o) throw new Error("header name must be a non-empty string");
      const i = j.findKey(n, o);
      (!i || void 0 === n[i] || !0 === r || (void 0 === r && !1 !== n[i])) &&
        (n[i || e] = ee(t));
    }
    const i = (t, e) => j.forEach(t, (t, r) => o(t, r, e));
    return (
      j.isPlainObject(t) || t instanceof this.constructor
        ? i(t, e)
        : j.isString(t) &&
          (t = t.trim()) &&
          !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())
        ? i(
            ((t) => {
              const e = {};
              let r, n, o;
              return (
                t &&
                  t.split("\n").forEach(function (t) {
                    (o = t.indexOf(":")),
                      (r = t.substring(0, o).trim().toLowerCase()),
                      (n = t.substring(o + 1).trim()),
                      !r ||
                        (e[r] && Qt[r]) ||
                        ("set-cookie" === r
                          ? e[r]
                            ? e[r].push(n)
                            : (e[r] = [n])
                          : (e[r] = e[r] ? e[r] + ", " + n : n));
                  }),
                e
              );
            })(t),
            e
          )
        : null != t && o(e, t, r),
      this
    );
  }
  get(t, e) {
    if ((t = te(t))) {
      const r = j.findKey(this, t);
      if (r) {
        const t = this[r];
        if (!e) return t;
        if (!0 === e)
          return (function (t) {
            const e = Object.create(null),
              r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
            let n;
            for (; (n = r.exec(t)); ) e[n[1]] = n[2];
            return e;
          })(t);
        if (j.isFunction(e)) return e.call(this, t, r);
        if (j.isRegExp(e)) return e.exec(t);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, e) {
    if ((t = te(t))) {
      const r = j.findKey(this, t);
      return !(!r || void 0 === this[r] || (e && !re(0, this[r], r, e)));
    }
    return !1;
  }
  delete(t, e) {
    const r = this;
    let n = !1;
    function o(t) {
      if ((t = te(t))) {
        const o = j.findKey(r, t);
        !o || (e && !re(0, r[o], o, e)) || (delete r[o], (n = !0));
      }
    }
    return j.isArray(t) ? t.forEach(o) : o(t), n;
  }
  clear(t) {
    const e = Object.keys(this);
    let r = e.length,
      n = !1;
    for (; r--; ) {
      const o = e[r];
      (t && !re(0, this[o], o, t, !0)) || (delete this[o], (n = !0));
    }
    return n;
  }
  normalize(t) {
    const e = this,
      r = {};
    return (
      j.forEach(this, (n, o) => {
        const i = j.findKey(r, o);
        if (i) return (e[i] = ee(n)), void delete e[o];
        const s = t
          ? (function (t) {
              return t
                .trim()
                .toLowerCase()
                .replace(/([a-z\d])(\w*)/g, (t, e, r) => e.toUpperCase() + r);
            })(o)
          : String(o).trim();
        s !== o && delete e[o], (e[s] = ee(n)), (r[s] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const e = Object.create(null);
    return (
      j.forEach(this, (r, n) => {
        null != r && !1 !== r && (e[n] = t && j.isArray(r) ? r.join(", ") : r);
      }),
      e
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON())
      .map(([t, e]) => t + ": " + e)
      .join("\n");
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...e) {
    const r = new this(t);
    return e.forEach((t) => r.set(t)), r;
  }
  static accessor(t) {
    const e = (this[Zt] = this[Zt] = { accessors: {} }).accessors,
      r = this.prototype;
    function n(t) {
      const n = te(t);
      e[n] ||
        (!(function (t, e) {
          const r = j.toCamelCase(" " + e);
          ["get", "set", "has"].forEach((n) => {
            Object.defineProperty(t, n + r, {
              value: function (t, r, o) {
                return this[n].call(this, e, t, r, o);
              },
              configurable: !0,
            });
          });
        })(r, t),
        (e[n] = !0));
    }
    return j.isArray(t) ? t.forEach(n) : n(t), this;
  }
}
function oe(t, e) {
  const r = this || Xt,
    n = e || r,
    o = ne.from(n.headers);
  let i = n.data;
  return (
    j.forEach(t, function (t) {
      i = t.call(r, i, o.normalize(), e ? e.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function ie(t) {
  return !(!t || !t.__CANCEL__);
}
function se(t, e, r) {
  Nt.call(this, null == t ? "canceled" : t, Nt.ERR_CANCELED, e, r),
    (this.name = "CanceledError");
}
ne.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]),
  j.freezeMethods(ne.prototype),
  j.freezeMethods(ne),
  j.inherits(se, Nt, { __CANCEL__: !0 });
var ae = Kt.isStandardBrowserEnv
  ? {
      write: function (t, e, r, n, o, i) {
        const s = [];
        s.push(t + "=" + encodeURIComponent(e)),
          j.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()),
          j.isString(n) && s.push("path=" + n),
          j.isString(o) && s.push("domain=" + o),
          !0 === i && s.push("secure"),
          (document.cookie = s.join("; "));
      },
      read: function (t) {
        const e = document.cookie.match(
          new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
        );
        return e ? decodeURIComponent(e[3]) : null;
      },
      remove: function (t) {
        this.write(t, "", Date.now() - 864e5);
      },
    }
  : {
      write: function () {},
      read: function () {
        return null;
      },
      remove: function () {},
    };
function ue(t, e) {
  return t && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
    ? (function (t, e) {
        return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
      })(t, e)
    : e;
}
var ce = Kt.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        e = document.createElement("a");
      let r;
      function n(r) {
        let n = r;
        return (
          t && (e.setAttribute("href", n), (n = e.href)),
          e.setAttribute("href", n),
          {
            href: e.href,
            protocol: e.protocol ? e.protocol.replace(/:$/, "") : "",
            host: e.host,
            search: e.search ? e.search.replace(/^\?/, "") : "",
            hash: e.hash ? e.hash.replace(/^#/, "") : "",
            hostname: e.hostname,
            port: e.port,
            pathname:
              "/" === e.pathname.charAt(0) ? e.pathname : "/" + e.pathname,
          }
        );
      }
      return (
        (r = n(window.location.href)),
        function (t) {
          const e = j.isString(t) ? n(t) : t;
          return e.protocol === r.protocol && e.host === r.host;
        }
      );
    })()
  : function () {
      return !0;
    };
function fe(t, e) {
  let r = 0;
  const n = (function (t, e) {
    t = t || 10;
    const r = new Array(t),
      n = new Array(t);
    let o,
      i = 0,
      s = 0;
    return (
      (e = void 0 !== e ? e : 1e3),
      function (a) {
        const u = Date.now(),
          c = n[s];
        o || (o = u), (r[i] = a), (n[i] = u);
        let f = s,
          l = 0;
        for (; f !== i; ) (l += r[f++]), (f %= t);
        if (((i = (i + 1) % t), i === s && (s = (s + 1) % t), u - o < e))
          return;
        const h = c && u - c;
        return h ? Math.round((1e3 * l) / h) : void 0;
      }
    );
  })(50, 250);
  return (o) => {
    const i = o.loaded,
      s = o.lengthComputable ? o.total : void 0,
      a = i - r,
      u = n(a);
    r = i;
    const c = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: a,
      rate: u || void 0,
      estimated: u && s && i <= s ? (s - i) / u : void 0,
      event: o,
    };
    (c[e ? "download" : "upload"] = !0), t(c);
  };
}
const le = {
  http: null,
  xhr:
    "undefined" != typeof XMLHttpRequest &&
    function (t) {
      return new Promise(function (e, r) {
        let n = t.data;
        const o = ne.from(t.headers).normalize(),
          i = t.responseType;
        let s;
        function a() {
          t.cancelToken && t.cancelToken.unsubscribe(s),
            t.signal && t.signal.removeEventListener("abort", s);
        }
        j.isFormData(n) &&
          (Kt.isStandardBrowserEnv || Kt.isStandardBrowserWebWorkerEnv
            ? o.setContentType(!1)
            : o.setContentType("multipart/form-data;", !1));
        let u = new XMLHttpRequest();
        if (t.auth) {
          const e = t.auth.username || "",
            r = t.auth.password
              ? unescape(encodeURIComponent(t.auth.password))
              : "";
          o.set("Authorization", "Basic " + btoa(e + ":" + r));
        }
        const c = ue(t.baseURL, t.url);
        function f() {
          if (!u) return;
          const n = ne.from(
            "getAllResponseHeaders" in u && u.getAllResponseHeaders()
          );
          !(function (t, e, r) {
            const n = r.config.validateStatus;
            r.status && n && !n(r.status)
              ? e(
                  new Nt(
                    "Request failed with status code " + r.status,
                    [Nt.ERR_BAD_REQUEST, Nt.ERR_BAD_RESPONSE][
                      Math.floor(r.status / 100) - 4
                    ],
                    r.config,
                    r.request,
                    r
                  )
                )
              : t(r);
          })(
            function (t) {
              e(t), a();
            },
            function (t) {
              r(t), a();
            },
            {
              data:
                i && "text" !== i && "json" !== i ? u.response : u.responseText,
              status: u.status,
              statusText: u.statusText,
              headers: n,
              config: t,
              request: u,
            }
          ),
            (u = null);
        }
        if (
          (u.open(
            t.method.toUpperCase(),
            Jt(c, t.params, t.paramsSerializer),
            !0
          ),
          (u.timeout = t.timeout),
          "onloadend" in u
            ? (u.onloadend = f)
            : (u.onreadystatechange = function () {
                u &&
                  4 === u.readyState &&
                  (0 !== u.status ||
                    (u.responseURL && 0 === u.responseURL.indexOf("file:"))) &&
                  setTimeout(f);
              }),
          (u.onabort = function () {
            u &&
              (r(new Nt("Request aborted", Nt.ECONNABORTED, t, u)), (u = null));
          }),
          (u.onerror = function () {
            r(new Nt("Network Error", Nt.ERR_NETWORK, t, u)), (u = null);
          }),
          (u.ontimeout = function () {
            let e = t.timeout
              ? "timeout of " + t.timeout + "ms exceeded"
              : "timeout exceeded";
            const n = t.transitional || Wt;
            t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
              r(
                new Nt(
                  e,
                  n.clarifyTimeoutError ? Nt.ETIMEDOUT : Nt.ECONNABORTED,
                  t,
                  u
                )
              ),
              (u = null);
          }),
          Kt.isStandardBrowserEnv)
        ) {
          const e =
            (t.withCredentials || ce(c)) &&
            t.xsrfCookieName &&
            ae.read(t.xsrfCookieName);
          e && o.set(t.xsrfHeaderName, e);
        }
        void 0 === n && o.setContentType(null),
          "setRequestHeader" in u &&
            j.forEach(o.toJSON(), function (t, e) {
              u.setRequestHeader(e, t);
            }),
          j.isUndefined(t.withCredentials) ||
            (u.withCredentials = !!t.withCredentials),
          i && "json" !== i && (u.responseType = t.responseType),
          "function" == typeof t.onDownloadProgress &&
            u.addEventListener("progress", fe(t.onDownloadProgress, !0)),
          "function" == typeof t.onUploadProgress &&
            u.upload &&
            u.upload.addEventListener("progress", fe(t.onUploadProgress)),
          (t.cancelToken || t.signal) &&
            ((s = (e) => {
              u &&
                (r(!e || e.type ? new se(null, t, u) : e),
                u.abort(),
                (u = null));
            }),
            t.cancelToken && t.cancelToken.subscribe(s),
            t.signal &&
              (t.signal.aborted ? s() : t.signal.addEventListener("abort", s)));
        const l = (function (t) {
          const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
          return (e && e[1]) || "";
        })(c);
        l && -1 === Kt.protocols.indexOf(l)
          ? r(new Nt("Unsupported protocol " + l + ":", Nt.ERR_BAD_REQUEST, t))
          : u.send(n || null);
      });
    },
};
j.forEach(le, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch (t) {}
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
var he = (t) => {
  t = j.isArray(t) ? t : [t];
  const { length: e } = t;
  let r, n;
  for (
    let o = 0;
    o < e && ((r = t[o]), !(n = j.isString(r) ? le[r.toLowerCase()] : r));
    o++
  );
  if (!n) {
    if (!1 === n)
      throw new Nt(
        `Adapter ${r} is not supported by the environment`,
        "ERR_NOT_SUPPORT"
      );
    throw new Error(
      j.hasOwnProp(le, r)
        ? `Adapter '${r}' is not available in the build`
        : `Unknown adapter '${r}'`
    );
  }
  if (!j.isFunction(n)) throw new TypeError("adapter is not a function");
  return n;
};
function pe(t) {
  if (
    (t.cancelToken && t.cancelToken.throwIfRequested(),
    t.signal && t.signal.aborted)
  )
    throw new se(null, t);
}
function de(t) {
  pe(t),
    (t.headers = ne.from(t.headers)),
    (t.data = oe.call(t, t.transformRequest)),
    -1 !== ["post", "put", "patch"].indexOf(t.method) &&
      t.headers.setContentType("application/x-www-form-urlencoded", !1);
  return he(t.adapter || Xt.adapter)(t).then(
    function (e) {
      return (
        pe(t),
        (e.data = oe.call(t, t.transformResponse, e)),
        (e.headers = ne.from(e.headers)),
        e
      );
    },
    function (e) {
      return (
        ie(e) ||
          (pe(t),
          e &&
            e.response &&
            ((e.response.data = oe.call(t, t.transformResponse, e.response)),
            (e.response.headers = ne.from(e.response.headers)))),
        Promise.reject(e)
      );
    }
  );
}
const ge = (t) => (t instanceof ne ? t.toJSON() : t);
function ye(t, e) {
  e = e || {};
  const r = {};
  function n(t, e, r) {
    return j.isPlainObject(t) && j.isPlainObject(e)
      ? j.merge.call({ caseless: r }, t, e)
      : j.isPlainObject(e)
      ? j.merge({}, e)
      : j.isArray(e)
      ? e.slice()
      : e;
  }
  function o(t, e, r) {
    return j.isUndefined(e)
      ? j.isUndefined(t)
        ? void 0
        : n(void 0, t, r)
      : n(t, e, r);
  }
  function i(t, e) {
    if (!j.isUndefined(e)) return n(void 0, e);
  }
  function s(t, e) {
    return j.isUndefined(e)
      ? j.isUndefined(t)
        ? void 0
        : n(void 0, t)
      : n(void 0, e);
  }
  function a(r, o, i) {
    return i in e ? n(r, o) : i in t ? n(void 0, r) : void 0;
  }
  const u = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (t, e) => o(ge(t), ge(e), !0),
  };
  return (
    j.forEach(Object.keys(Object.assign({}, t, e)), function (n) {
      const i = u[n] || o,
        s = i(t[n], e[n], n);
      (j.isUndefined(s) && i !== a) || (r[n] = s);
    }),
    r
  );
}
const me = "1.4.0",
  we = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (t, e) => {
    we[t] = function (r) {
      return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
    };
  }
);
const be = {};
we.transitional = function (t, e, r) {
  function n(t, e) {
    return (
      "[Axios v1.4.0] Transitional option '" + t + "'" + e + (r ? ". " + r : "")
    );
  }
  return (r, o, i) => {
    if (!1 === t)
      throw new Nt(
        n(o, " has been removed" + (e ? " in " + e : "")),
        Nt.ERR_DEPRECATED
      );
    return (
      e &&
        !be[o] &&
        ((be[o] = !0),
        console.warn(
          n(
            o,
            " has been deprecated since v" +
              e +
              " and will be removed in the near future"
          )
        )),
      !t || t(r, o, i)
    );
  };
};
var Ee = {
  assertOptions: function (t, e, r) {
    if ("object" != typeof t)
      throw new Nt("options must be an object", Nt.ERR_BAD_OPTION_VALUE);
    const n = Object.keys(t);
    let o = n.length;
    for (; o-- > 0; ) {
      const i = n[o],
        s = e[i];
      if (s) {
        const e = t[i],
          r = void 0 === e || s(e, i, t);
        if (!0 !== r)
          throw new Nt(
            "option " + i + " must be " + r,
            Nt.ERR_BAD_OPTION_VALUE
          );
      } else if (!0 !== r)
        throw new Nt("Unknown option " + i, Nt.ERR_BAD_OPTION);
    }
  },
  validators: we,
};
const Ae = Ee.validators;
class Re {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Vt(), response: new Vt() });
  }
  request(t, e) {
    "string" == typeof t ? ((e = e || {}).url = t) : (e = t || {}),
      (e = ye(this.defaults, e));
    const { transitional: r, paramsSerializer: n, headers: o } = e;
    let i;
    void 0 !== r &&
      Ee.assertOptions(
        r,
        {
          silentJSONParsing: Ae.transitional(Ae.boolean),
          forcedJSONParsing: Ae.transitional(Ae.boolean),
          clarifyTimeoutError: Ae.transitional(Ae.boolean),
        },
        !1
      ),
      null != n &&
        (j.isFunction(n)
          ? (e.paramsSerializer = { serialize: n })
          : Ee.assertOptions(
              n,
              { encode: Ae.function, serialize: Ae.function },
              !0
            )),
      (e.method = (e.method || this.defaults.method || "get").toLowerCase()),
      (i = o && j.merge(o.common, o[e.method])),
      i &&
        j.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (t) => {
            delete o[t];
          }
        ),
      (e.headers = ne.concat(i, o));
    const s = [];
    let a = !0;
    this.interceptors.request.forEach(function (t) {
      ("function" == typeof t.runWhen && !1 === t.runWhen(e)) ||
        ((a = a && t.synchronous), s.unshift(t.fulfilled, t.rejected));
    });
    const u = [];
    let c;
    this.interceptors.response.forEach(function (t) {
      u.push(t.fulfilled, t.rejected);
    });
    let f,
      l = 0;
    if (!a) {
      const t = [de.bind(this), void 0];
      for (
        t.unshift.apply(t, s),
          t.push.apply(t, u),
          f = t.length,
          c = Promise.resolve(e);
        l < f;

      )
        c = c.then(t[l++], t[l++]);
      return c;
    }
    f = s.length;
    let h = e;
    for (l = 0; l < f; ) {
      const t = s[l++],
        e = s[l++];
      try {
        h = t(h);
      } catch (t) {
        e.call(this, t);
        break;
      }
    }
    try {
      c = de.call(this, h);
    } catch (t) {
      return Promise.reject(t);
    }
    for (l = 0, f = u.length; l < f; ) c = c.then(u[l++], u[l++]);
    return c;
  }
  getUri(t) {
    return Jt(
      ue((t = ye(this.defaults, t)).baseURL, t.url),
      t.params,
      t.paramsSerializer
    );
  }
}
j.forEach(["delete", "get", "head", "options"], function (t) {
  Re.prototype[t] = function (e, r) {
    return this.request(
      ye(r || {}, { method: t, url: e, data: (r || {}).data })
    );
  };
}),
  j.forEach(["post", "put", "patch"], function (t) {
    function e(e) {
      return function (r, n, o) {
        return this.request(
          ye(o || {}, {
            method: t,
            headers: e ? { "Content-Type": "multipart/form-data" } : {},
            url: r,
            data: n,
          })
        );
      };
    }
    (Re.prototype[t] = e()), (Re.prototype[t + "Form"] = e(!0));
  });
class ve {
  constructor(t) {
    if ("function" != typeof t)
      throw new TypeError("executor must be a function.");
    let e;
    this.promise = new Promise(function (t) {
      e = t;
    });
    const r = this;
    this.promise.then((t) => {
      if (!r._listeners) return;
      let e = r._listeners.length;
      for (; e-- > 0; ) r._listeners[e](t);
      r._listeners = null;
    }),
      (this.promise.then = (t) => {
        let e;
        const n = new Promise((t) => {
          r.subscribe(t), (e = t);
        }).then(t);
        return (
          (n.cancel = function () {
            r.unsubscribe(e);
          }),
          n
        );
      }),
      t(function (t, n, o) {
        r.reason || ((r.reason = new se(t, n, o)), e(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    this.reason
      ? t(this.reason)
      : this._listeners
      ? this._listeners.push(t)
      : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const e = this._listeners.indexOf(t);
    -1 !== e && this._listeners.splice(e, 1);
  }
  static source() {
    let t;
    return {
      token: new ve(function (e) {
        t = e;
      }),
      cancel: t,
    };
  }
}
const Oe = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Oe).forEach(([t, e]) => {
  Oe[e] = t;
});
const Se = (function t(r) {
  const n = new Re(r),
    o = e(Re.prototype.request, n);
  return (
    j.extend(o, Re.prototype, n, { allOwnKeys: !0 }),
    j.extend(o, n, null, { allOwnKeys: !0 }),
    (o.create = function (e) {
      return t(ye(r, e));
    }),
    o
  );
})(Xt);
(Se.Axios = Re),
  (Se.CanceledError = se),
  (Se.CancelToken = ve),
  (Se.isCancel = ie),
  (Se.VERSION = me),
  (Se.toFormData = Mt),
  (Se.AxiosError = Nt),
  (Se.Cancel = Se.CanceledError),
  (Se.all = function (t) {
    return Promise.all(t);
  }),
  (Se.spread = function (t) {
    return function (e) {
      return t.apply(null, e);
    };
  }),
  (Se.isAxiosError = function (t) {
    return j.isObject(t) && !0 === t.isAxiosError;
  }),
  (Se.mergeConfig = ye),
  (Se.AxiosHeaders = ne),
  (Se.formToJSON = (t) => Gt(j.isHTMLForm(t) ? new FormData(t) : t)),
  (Se.HttpStatusCode = Oe),
  (Se.default = Se);
const {
  Axios: Te,
  AxiosError: Pe,
  CanceledError: _e,
  isCancel: Ue,
  CancelToken: Ce,
  VERSION: Be,
  all: xe,
  Cancel: Ne,
  isAxiosError: Le,
  spread: je,
  toFormData: De,
  AxiosHeaders: Fe,
  HttpStatusCode: Ie,
  formToJSON: ke,
  mergeConfig: Me,
} = Se;
export {
  Te as Axios,
  Pe as AxiosError,
  Fe as AxiosHeaders,
  Ne as Cancel,
  Ce as CancelToken,
  _e as CanceledError,
  Ie as HttpStatusCode,
  Be as VERSION,
  xe as all,
  Se as default,
  ke as formToJSON,
  Le as isAxiosError,
  Ue as isCancel,
  Me as mergeConfig,
  je as spread,
  De as toFormData,
};
//# sourceMappingURL=/sm/c423e30eeaaa5cccaadda9928d20b973aab2da6ef9298b6d84870a2a8f365583.map
