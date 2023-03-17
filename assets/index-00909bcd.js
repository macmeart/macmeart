(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const r of o.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && i(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function i(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o);
  }
})();
function Bn(e, t) {
  const n = Object.create(null),
    i = e.split(",");
  for (let s = 0; s < i.length; s++) n[i[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
function Ne(e) {
  if (M(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n],
        s = ee(i) ? Xs(i) : Ne(i);
      if (s) for (const o in s) t[o] = s[o];
    }
    return t;
  } else {
    if (ee(e)) return e;
    if (W(e)) return e;
  }
}
const Vs = /;(?![^(]*\))/g,
  Js = /:([^]+)/,
  Ys = /\/\*.*?\*\//gs;
function Xs(e) {
  const t = {};
  return (
    e
      .replace(Ys, "")
      .split(Vs)
      .forEach((n) => {
        if (n) {
          const i = n.split(Js);
          i.length > 1 && (t[i[0].trim()] = i[1].trim());
        }
      }),
    t
  );
}
function _t(e) {
  let t = "";
  if (ee(e)) t = e;
  else if (M(e))
    for (let n = 0; n < e.length; n++) {
      const i = _t(e[n]);
      i && (t += i + " ");
    }
  else if (W(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Zs =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Qs = Bn(Zs);
function qi(e) {
  return !!e || e === "";
}
const ie = (e) =>
    ee(e)
      ? e
      : e == null
      ? ""
      : M(e) || (W(e) && (e.toString === Vi || !F(e.toString)))
      ? JSON.stringify(e, Ui, 2)
      : String(e),
  Ui = (e, t) =>
    t && t.__v_isRef
      ? Ui(e, t.value)
      : ft(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [i, s]) => ((n[`${i} =>`] = s), n),
            {}
          ),
        }
      : Ki(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : W(t) && !M(t) && !Ji(t)
      ? String(t)
      : t,
  K = {},
  ut = [],
  Te = () => {},
  Gs = () => !1,
  eo = /^on[^a-z]/,
  Gt = (e) => eo.test(e),
  Hn = (e) => e.startsWith("onUpdate:"),
  oe = Object.assign,
  qn = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  to = Object.prototype.hasOwnProperty,
  j = (e, t) => to.call(e, t),
  M = Array.isArray,
  ft = (e) => en(e) === "[object Map]",
  Ki = (e) => en(e) === "[object Set]",
  F = (e) => typeof e == "function",
  ee = (e) => typeof e == "string",
  Un = (e) => typeof e == "symbol",
  W = (e) => e !== null && typeof e == "object",
  Wi = (e) => W(e) && F(e.then) && F(e.catch),
  Vi = Object.prototype.toString,
  en = (e) => Vi.call(e),
  no = (e) => en(e).slice(8, -1),
  Ji = (e) => en(e) === "[object Object]",
  Kn = (e) =>
    ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  qt = Bn(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  tn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  io = /-(\w)/g,
  pt = tn((e) => e.replace(io, (t, n) => (n ? n.toUpperCase() : ""))),
  so = /\B([A-Z])/g,
  bt = tn((e) => e.replace(so, "-$1").toLowerCase()),
  Yi = tn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  gn = tn((e) => (e ? `on${Yi(e)}` : "")),
  Pt = (e, t) => !Object.is(e, t),
  _n = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Jt = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  oo = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  ro = (e) => {
    const t = ee(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let ui;
const lo = () =>
  ui ||
  (ui =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
let we;
class ao {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = we),
      !t && we && (this.index = (we.scopes || (we.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = we;
      try {
        return (we = this), t();
      } finally {
        we = n;
      }
    }
  }
  on() {
    we = this;
  }
  off() {
    we = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++) this.effects[n].stop();
      for (n = 0, i = this.cleanups.length; n < i; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, i = this.scopes.length; n < i; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function co(e, t = we) {
  t && t.active && t.effects.push(e);
}
function uo() {
  return we;
}
const Wn = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  Xi = (e) => (e.w & We) > 0,
  Zi = (e) => (e.n & We) > 0,
  fo = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= We;
  },
  ho = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let i = 0; i < t.length; i++) {
        const s = t[i];
        Xi(s) && !Zi(s) ? s.delete(e) : (t[n++] = s),
          (s.w &= ~We),
          (s.n &= ~We);
      }
      t.length = n;
    }
  },
  Tn = new WeakMap();
let Tt = 0,
  We = 1;
const In = 30;
let Ce;
const rt = Symbol(""),
  An = Symbol("");
class Vn {
  constructor(t, n = null, i) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      co(this, i);
  }
  run() {
    if (!this.active) return this.fn();
    let t = Ce,
      n = Ue;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = Ce),
        (Ce = this),
        (Ue = !0),
        (We = 1 << ++Tt),
        Tt <= In ? fo(this) : fi(this),
        this.fn()
      );
    } finally {
      Tt <= In && ho(this),
        (We = 1 << --Tt),
        (Ce = this.parent),
        (Ue = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Ce === this
      ? (this.deferStop = !0)
      : this.active &&
        (fi(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function fi(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let Ue = !0;
const Qi = [];
function vt() {
  Qi.push(Ue), (Ue = !1);
}
function yt() {
  const e = Qi.pop();
  Ue = e === void 0 ? !0 : e;
}
function de(e, t, n) {
  if (Ue && Ce) {
    let i = Tn.get(e);
    i || Tn.set(e, (i = new Map()));
    let s = i.get(n);
    s || i.set(n, (s = Wn())), Gi(s);
  }
}
function Gi(e, t) {
  let n = !1;
  Tt <= In ? Zi(e) || ((e.n |= We), (n = !Xi(e))) : (n = !e.has(Ce)),
    n && (e.add(Ce), Ce.deps.push(e));
}
function je(e, t, n, i, s, o) {
  const r = Tn.get(e);
  if (!r) return;
  let l = [];
  if (t === "clear") l = [...r.values()];
  else if (n === "length" && M(e)) {
    const c = Number(i);
    r.forEach((f, d) => {
      (d === "length" || d >= c) && l.push(f);
    });
  } else
    switch ((n !== void 0 && l.push(r.get(n)), t)) {
      case "add":
        M(e)
          ? Kn(n) && l.push(r.get("length"))
          : (l.push(r.get(rt)), ft(e) && l.push(r.get(An)));
        break;
      case "delete":
        M(e) || (l.push(r.get(rt)), ft(e) && l.push(r.get(An)));
        break;
      case "set":
        ft(e) && l.push(r.get(rt));
        break;
    }
  if (l.length === 1) l[0] && Pn(l[0]);
  else {
    const c = [];
    for (const f of l) f && c.push(...f);
    Pn(Wn(c));
  }
}
function Pn(e, t) {
  const n = M(e) ? e : [...e];
  for (const i of n) i.computed && di(i);
  for (const i of n) i.computed || di(i);
}
function di(e, t) {
  (e !== Ce || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const po = Bn("__proto__,__v_isRef,__isVue"),
  es = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Un)
  ),
  mo = Jn(),
  go = Jn(!1, !0),
  _o = Jn(!0),
  hi = bo();
function bo() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const i = R(this);
        for (let o = 0, r = this.length; o < r; o++) de(i, "get", o + "");
        const s = i[t](...n);
        return s === -1 || s === !1 ? i[t](...n.map(R)) : s;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        vt();
        const i = R(this)[t].apply(this, n);
        return yt(), i;
      };
    }),
    e
  );
}
function vo(e) {
  const t = R(this);
  return de(t, "has", e), t.hasOwnProperty(e);
}
function Jn(e = !1, t = !1) {
  return function (i, s, o) {
    if (s === "__v_isReactive") return !e;
    if (s === "__v_isReadonly") return e;
    if (s === "__v_isShallow") return t;
    if (s === "__v_raw" && o === (e ? (t ? So : os) : t ? ss : is).get(i))
      return i;
    const r = M(i);
    if (!e) {
      if (r && j(hi, s)) return Reflect.get(hi, s, o);
      if (s === "hasOwnProperty") return vo;
    }
    const l = Reflect.get(i, s, o);
    return (Un(s) ? es.has(s) : po(s)) || (e || de(i, "get", s), t)
      ? l
      : se(l)
      ? r && Kn(s)
        ? l
        : l.value
      : W(l)
      ? e
        ? rs(l)
        : sn(l)
      : l;
  };
}
const yo = ts(),
  xo = ts(!0);
function ts(e = !1) {
  return function (n, i, s, o) {
    let r = n[i];
    if (mt(r) && se(r) && !se(s)) return !1;
    if (
      !e &&
      (!Yt(s) && !mt(s) && ((r = R(r)), (s = R(s))), !M(n) && se(r) && !se(s))
    )
      return (r.value = s), !0;
    const l = M(n) && Kn(i) ? Number(i) < n.length : j(n, i),
      c = Reflect.set(n, i, s, o);
    return (
      n === R(o) && (l ? Pt(s, r) && je(n, "set", i, s) : je(n, "add", i, s)), c
    );
  };
}
function wo(e, t) {
  const n = j(e, t);
  e[t];
  const i = Reflect.deleteProperty(e, t);
  return i && n && je(e, "delete", t, void 0), i;
}
function Co(e, t) {
  const n = Reflect.has(e, t);
  return (!Un(t) || !es.has(t)) && de(e, "has", t), n;
}
function Eo(e) {
  return de(e, "iterate", M(e) ? "length" : rt), Reflect.ownKeys(e);
}
const ns = { get: mo, set: yo, deleteProperty: wo, has: Co, ownKeys: Eo },
  To = {
    get: _o,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  Io = oe({}, ns, { get: go, set: xo }),
  Yn = (e) => e,
  nn = (e) => Reflect.getPrototypeOf(e);
function Nt(e, t, n = !1, i = !1) {
  e = e.__v_raw;
  const s = R(e),
    o = R(t);
  n || (t !== o && de(s, "get", t), de(s, "get", o));
  const { has: r } = nn(s),
    l = i ? Yn : n ? Qn : Lt;
  if (r.call(s, t)) return l(e.get(t));
  if (r.call(s, o)) return l(e.get(o));
  e !== s && e.get(t);
}
function jt(e, t = !1) {
  const n = this.__v_raw,
    i = R(n),
    s = R(e);
  return (
    t || (e !== s && de(i, "has", e), de(i, "has", s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  );
}
function Rt(e, t = !1) {
  return (
    (e = e.__v_raw), !t && de(R(e), "iterate", rt), Reflect.get(e, "size", e)
  );
}
function pi(e) {
  e = R(e);
  const t = R(this);
  return nn(t).has.call(t, e) || (t.add(e), je(t, "add", e, e)), this;
}
function mi(e, t) {
  t = R(t);
  const n = R(this),
    { has: i, get: s } = nn(n);
  let o = i.call(n, e);
  o || ((e = R(e)), (o = i.call(n, e)));
  const r = s.call(n, e);
  return (
    n.set(e, t), o ? Pt(t, r) && je(n, "set", e, t) : je(n, "add", e, t), this
  );
}
function gi(e) {
  const t = R(this),
    { has: n, get: i } = nn(t);
  let s = n.call(t, e);
  s || ((e = R(e)), (s = n.call(t, e))), i && i.call(t, e);
  const o = t.delete(e);
  return s && je(t, "delete", e, void 0), o;
}
function _i() {
  const e = R(this),
    t = e.size !== 0,
    n = e.clear();
  return t && je(e, "clear", void 0, void 0), n;
}
function kt(e, t) {
  return function (i, s) {
    const o = this,
      r = o.__v_raw,
      l = R(r),
      c = t ? Yn : e ? Qn : Lt;
    return (
      !e && de(l, "iterate", rt), r.forEach((f, d) => i.call(s, c(f), c(d), o))
    );
  };
}
function Dt(e, t, n) {
  return function (...i) {
    const s = this.__v_raw,
      o = R(s),
      r = ft(o),
      l = e === "entries" || (e === Symbol.iterator && r),
      c = e === "keys" && r,
      f = s[e](...i),
      d = n ? Yn : t ? Qn : Lt;
    return (
      !t && de(o, "iterate", c ? An : rt),
      {
        next() {
          const { value: p, done: b } = f.next();
          return b
            ? { value: p, done: b }
            : { value: l ? [d(p[0]), d(p[1])] : d(p), done: b };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function De(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function Ao() {
  const e = {
      get(o) {
        return Nt(this, o);
      },
      get size() {
        return Rt(this);
      },
      has: jt,
      add: pi,
      set: mi,
      delete: gi,
      clear: _i,
      forEach: kt(!1, !1),
    },
    t = {
      get(o) {
        return Nt(this, o, !1, !0);
      },
      get size() {
        return Rt(this);
      },
      has: jt,
      add: pi,
      set: mi,
      delete: gi,
      clear: _i,
      forEach: kt(!1, !0),
    },
    n = {
      get(o) {
        return Nt(this, o, !0);
      },
      get size() {
        return Rt(this, !0);
      },
      has(o) {
        return jt.call(this, o, !0);
      },
      add: De("add"),
      set: De("set"),
      delete: De("delete"),
      clear: De("clear"),
      forEach: kt(!0, !1),
    },
    i = {
      get(o) {
        return Nt(this, o, !0, !0);
      },
      get size() {
        return Rt(this, !0);
      },
      has(o) {
        return jt.call(this, o, !0);
      },
      add: De("add"),
      set: De("set"),
      delete: De("delete"),
      clear: De("clear"),
      forEach: kt(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      (e[o] = Dt(o, !1, !1)),
        (n[o] = Dt(o, !0, !1)),
        (t[o] = Dt(o, !1, !0)),
        (i[o] = Dt(o, !0, !0));
    }),
    [e, n, t, i]
  );
}
const [Po, Lo, Mo, Oo] = Ao();
function Xn(e, t) {
  const n = t ? (e ? Oo : Mo) : e ? Lo : Po;
  return (i, s, o) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? i
      : Reflect.get(j(n, s) && s in i ? n : i, s, o);
}
const $o = { get: Xn(!1, !1) },
  Fo = { get: Xn(!1, !0) },
  zo = { get: Xn(!0, !1) },
  is = new WeakMap(),
  ss = new WeakMap(),
  os = new WeakMap(),
  So = new WeakMap();
function No(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function jo(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : No(no(e));
}
function sn(e) {
  return mt(e) ? e : Zn(e, !1, ns, $o, is);
}
function Ro(e) {
  return Zn(e, !1, Io, Fo, ss);
}
function rs(e) {
  return Zn(e, !0, To, zo, os);
}
function Zn(e, t, n, i, s) {
  if (!W(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = s.get(e);
  if (o) return o;
  const r = jo(e);
  if (r === 0) return e;
  const l = new Proxy(e, r === 2 ? i : n);
  return s.set(e, l), l;
}
function dt(e) {
  return mt(e) ? dt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function mt(e) {
  return !!(e && e.__v_isReadonly);
}
function Yt(e) {
  return !!(e && e.__v_isShallow);
}
function ls(e) {
  return dt(e) || mt(e);
}
function R(e) {
  const t = e && e.__v_raw;
  return t ? R(t) : e;
}
function as(e) {
  return Jt(e, "__v_skip", !0), e;
}
const Lt = (e) => (W(e) ? sn(e) : e),
  Qn = (e) => (W(e) ? rs(e) : e);
function cs(e) {
  Ue && Ce && ((e = R(e)), Gi(e.dep || (e.dep = Wn())));
}
function us(e, t) {
  e = R(e);
  const n = e.dep;
  n && Pn(n);
}
function se(e) {
  return !!(e && e.__v_isRef === !0);
}
function Ve(e) {
  return ko(e, !1);
}
function ko(e, t) {
  return se(e) ? e : new Do(e, t);
}
class Do {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : R(t)),
      (this._value = n ? t : Lt(t));
  }
  get value() {
    return cs(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Yt(t) || mt(t);
    (t = n ? t : R(t)),
      Pt(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Lt(t)), us(this));
  }
}
function me(e) {
  return se(e) ? e.value : e;
}
const Bo = {
  get: (e, t, n) => me(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const s = e[t];
    return se(s) && !se(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, i);
  },
};
function fs(e) {
  return dt(e) ? e : new Proxy(e, Bo);
}
var ds;
class Ho {
  constructor(t, n, i, s) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[ds] = !1),
      (this._dirty = !0),
      (this.effect = new Vn(t, () => {
        this._dirty || ((this._dirty = !0), us(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = i);
  }
  get value() {
    const t = R(this);
    return (
      cs(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
ds = "__v_isReadonly";
function qo(e, t, n = !1) {
  let i, s;
  const o = F(e);
  return (
    o ? ((i = e), (s = Te)) : ((i = e.get), (s = e.set)),
    new Ho(i, s, o || !s, n)
  );
}
function Ke(e, t, n, i) {
  let s;
  try {
    s = i ? e(...i) : e();
  } catch (o) {
    on(o, t, n);
  }
  return s;
}
function ve(e, t, n, i) {
  if (F(e)) {
    const o = Ke(e, t, n, i);
    return (
      o &&
        Wi(o) &&
        o.catch((r) => {
          on(r, t, n);
        }),
      o
    );
  }
  const s = [];
  for (let o = 0; o < e.length; o++) s.push(ve(e[o], t, n, i));
  return s;
}
function on(e, t, n, i = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const r = t.proxy,
      l = n;
    for (; o; ) {
      const f = o.ec;
      if (f) {
        for (let d = 0; d < f.length; d++) if (f[d](e, r, l) === !1) return;
      }
      o = o.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      Ke(c, null, 10, [e, r, l]);
      return;
    }
  }
  Uo(e, n, s, i);
}
function Uo(e, t, n, i = !0) {
  console.error(e);
}
let Mt = !1,
  Ln = !1;
const le = [];
let Fe = 0;
const ht = [];
let Se = null,
  nt = 0;
const hs = Promise.resolve();
let Gn = null;
function Ko(e) {
  const t = Gn || hs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Wo(e) {
  let t = Fe + 1,
    n = le.length;
  for (; t < n; ) {
    const i = (t + n) >>> 1;
    Ot(le[i]) < e ? (t = i + 1) : (n = i);
  }
  return t;
}
function ei(e) {
  (!le.length || !le.includes(e, Mt && e.allowRecurse ? Fe + 1 : Fe)) &&
    (e.id == null ? le.push(e) : le.splice(Wo(e.id), 0, e), ps());
}
function ps() {
  !Mt && !Ln && ((Ln = !0), (Gn = hs.then(gs)));
}
function Vo(e) {
  const t = le.indexOf(e);
  t > Fe && le.splice(t, 1);
}
function Jo(e) {
  M(e)
    ? ht.push(...e)
    : (!Se || !Se.includes(e, e.allowRecurse ? nt + 1 : nt)) && ht.push(e),
    ps();
}
function bi(e, t = Mt ? Fe + 1 : 0) {
  for (; t < le.length; t++) {
    const n = le[t];
    n && n.pre && (le.splice(t, 1), t--, n());
  }
}
function ms(e) {
  if (ht.length) {
    const t = [...new Set(ht)];
    if (((ht.length = 0), Se)) {
      Se.push(...t);
      return;
    }
    for (Se = t, Se.sort((n, i) => Ot(n) - Ot(i)), nt = 0; nt < Se.length; nt++)
      Se[nt]();
    (Se = null), (nt = 0);
  }
}
const Ot = (e) => (e.id == null ? 1 / 0 : e.id),
  Yo = (e, t) => {
    const n = Ot(e) - Ot(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function gs(e) {
  (Ln = !1), (Mt = !0), le.sort(Yo);
  const t = Te;
  try {
    for (Fe = 0; Fe < le.length; Fe++) {
      const n = le[Fe];
      n && n.active !== !1 && Ke(n, null, 14);
    }
  } finally {
    (Fe = 0),
      (le.length = 0),
      ms(),
      (Mt = !1),
      (Gn = null),
      (le.length || ht.length) && gs();
  }
}
function Xo(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || K;
  let s = n;
  const o = t.startsWith("update:"),
    r = o && t.slice(7);
  if (r && r in i) {
    const d = `${r === "modelValue" ? "model" : r}Modifiers`,
      { number: p, trim: b } = i[d] || K;
    b && (s = n.map((E) => (ee(E) ? E.trim() : E))), p && (s = n.map(oo));
  }
  let l,
    c = i[(l = gn(t))] || i[(l = gn(pt(t)))];
  !c && o && (c = i[(l = gn(bt(t)))]), c && ve(c, e, 6, s);
  const f = i[l + "Once"];
  if (f) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), ve(f, e, 6, s);
  }
}
function _s(e, t, n = !1) {
  const i = t.emitsCache,
    s = i.get(e);
  if (s !== void 0) return s;
  const o = e.emits;
  let r = {},
    l = !1;
  if (!F(e)) {
    const c = (f) => {
      const d = _s(f, t, !0);
      d && ((l = !0), oe(r, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  return !o && !l
    ? (W(e) && i.set(e, null), null)
    : (M(o) ? o.forEach((c) => (r[c] = null)) : oe(r, o),
      W(e) && i.set(e, r),
      r);
}
function rn(e, t) {
  return !e || !Gt(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      j(e, t[0].toLowerCase() + t.slice(1)) || j(e, bt(t)) || j(e, t));
}
let be = null,
  bs = null;
function Xt(e) {
  const t = be;
  return (be = e), (bs = (e && e.type.__scopeId) || null), t;
}
function vs(e, t = be, n) {
  if (!t || e._n) return e;
  const i = (...s) => {
    i._d && Ai(-1);
    const o = Xt(t);
    let r;
    try {
      r = e(...s);
    } finally {
      Xt(o), i._d && Ai(1);
    }
    return r;
  };
  return (i._n = !0), (i._c = !0), (i._d = !0), i;
}
function bn(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: s,
    props: o,
    propsOptions: [r],
    slots: l,
    attrs: c,
    emit: f,
    render: d,
    renderCache: p,
    data: b,
    setupState: E,
    ctx: S,
    inheritAttrs: P,
  } = e;
  let J, k;
  const ae = Xt(e);
  try {
    if (n.shapeFlag & 4) {
      const q = s || i;
      (J = $e(d.call(q, q, p, o, E, b, S))), (k = c);
    } else {
      const q = t;
      (J = $e(
        q.length > 1 ? q(o, { attrs: c, slots: l, emit: f }) : q(o, null)
      )),
        (k = t.props ? c : Zo(c));
    }
  } catch (q) {
    (At.length = 0), on(q, e, 1), (J = Q(Ie));
  }
  let $ = J;
  if (k && P !== !1) {
    const q = Object.keys(k),
      { shapeFlag: te } = $;
    q.length && te & 7 && (r && q.some(Hn) && (k = Qo(k, r)), ($ = Je($, k)));
  }
  return (
    n.dirs && (($ = Je($)), ($.dirs = $.dirs ? $.dirs.concat(n.dirs) : n.dirs)),
    n.transition && ($.transition = n.transition),
    (J = $),
    Xt(ae),
    J
  );
}
const Zo = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Gt(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Qo = (e, t) => {
    const n = {};
    for (const i in e) (!Hn(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
    return n;
  };
function Go(e, t, n) {
  const { props: i, children: s, component: o } = e,
    { props: r, children: l, patchFlag: c } = t,
    f = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return i ? vi(i, r, f) : !!r;
    if (c & 8) {
      const d = t.dynamicProps;
      for (let p = 0; p < d.length; p++) {
        const b = d[p];
        if (r[b] !== i[b] && !rn(f, b)) return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable)
      ? !0
      : i === r
      ? !1
      : i
      ? r
        ? vi(i, r, f)
        : !0
      : !!r;
  return !1;
}
function vi(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length) return !0;
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (t[o] !== e[o] && !rn(n, o)) return !0;
  }
  return !1;
}
function er({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const tr = (e) => e.__isSuspense;
function nr(e, t) {
  t && t.pendingBranch
    ? M(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Jo(e);
}
function ir(e, t) {
  if (G) {
    let n = G.provides;
    const i = G.parent && G.parent.provides;
    i === n && (n = G.provides = Object.create(i)), (n[e] = t);
  }
}
function Ut(e, t, n = !1) {
  const i = G || be;
  if (i) {
    const s =
      i.parent == null
        ? i.vnode.appContext && i.vnode.appContext.provides
        : i.parent.provides;
    if (s && e in s) return s[e];
    if (arguments.length > 1) return n && F(t) ? t.call(i.proxy) : t;
  }
}
const Bt = {};
function vn(e, t, n) {
  return ys(e, t, n);
}
function ys(
  e,
  t,
  { immediate: n, deep: i, flush: s, onTrack: o, onTrigger: r } = K
) {
  const l = uo() === (G == null ? void 0 : G.scope) ? G : null;
  let c,
    f = !1,
    d = !1;
  if (
    (se(e)
      ? ((c = () => e.value), (f = Yt(e)))
      : dt(e)
      ? ((c = () => e), (i = !0))
      : M(e)
      ? ((d = !0),
        (f = e.some(($) => dt($) || Yt($))),
        (c = () =>
          e.map(($) => {
            if (se($)) return $.value;
            if (dt($)) return ot($);
            if (F($)) return Ke($, l, 2);
          })))
      : F(e)
      ? t
        ? (c = () => Ke(e, l, 2))
        : (c = () => {
            if (!(l && l.isUnmounted)) return p && p(), ve(e, l, 3, [b]);
          })
      : (c = Te),
    t && i)
  ) {
    const $ = c;
    c = () => ot($());
  }
  let p,
    b = ($) => {
      p = k.onStop = () => {
        Ke($, l, 4);
      };
    },
    E;
  if (Ft)
    if (
      ((b = Te),
      t ? n && ve(t, l, 3, [c(), d ? [] : void 0, b]) : c(),
      s === "sync")
    ) {
      const $ = Zr();
      E = $.__watcherHandles || ($.__watcherHandles = []);
    } else return Te;
  let S = d ? new Array(e.length).fill(Bt) : Bt;
  const P = () => {
    if (k.active)
      if (t) {
        const $ = k.run();
        (i || f || (d ? $.some((q, te) => Pt(q, S[te])) : Pt($, S))) &&
          (p && p(),
          ve(t, l, 3, [$, S === Bt ? void 0 : d && S[0] === Bt ? [] : S, b]),
          (S = $));
      } else k.run();
  };
  P.allowRecurse = !!t;
  let J;
  s === "sync"
    ? (J = P)
    : s === "post"
    ? (J = () => fe(P, l && l.suspense))
    : ((P.pre = !0), l && (P.id = l.uid), (J = () => ei(P)));
  const k = new Vn(c, J);
  t
    ? n
      ? P()
      : (S = k.run())
    : s === "post"
    ? fe(k.run.bind(k), l && l.suspense)
    : k.run();
  const ae = () => {
    k.stop(), l && l.scope && qn(l.scope.effects, k);
  };
  return E && E.push(ae), ae;
}
function sr(e, t, n) {
  const i = this.proxy,
    s = ee(e) ? (e.includes(".") ? xs(i, e) : () => i[e]) : e.bind(i, i);
  let o;
  F(t) ? (o = t) : ((o = t.handler), (n = t));
  const r = G;
  gt(this);
  const l = ys(s, o.bind(i), n);
  return r ? gt(r) : lt(), l;
}
function xs(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let s = 0; s < n.length && i; s++) i = i[n[s]];
    return i;
  };
}
function ot(e, t) {
  if (!W(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), se(e))) ot(e.value, t);
  else if (M(e)) for (let n = 0; n < e.length; n++) ot(e[n], t);
  else if (Ki(e) || ft(e))
    e.forEach((n) => {
      ot(n, t);
    });
  else if (Ji(e)) for (const n in e) ot(e[n], t);
  return e;
}
function or() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    cn(() => {
      e.isMounted = !0;
    }),
    Is(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const _e = [Function, Array],
  rr = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: _e,
      onEnter: _e,
      onAfterEnter: _e,
      onEnterCancelled: _e,
      onBeforeLeave: _e,
      onLeave: _e,
      onAfterLeave: _e,
      onLeaveCancelled: _e,
      onBeforeAppear: _e,
      onAppear: _e,
      onAfterAppear: _e,
      onAppearCancelled: _e,
    },
    setup(e, { slots: t }) {
      const n = Hr(),
        i = or();
      let s;
      return () => {
        const o = t.default && Es(t.default(), !0);
        if (!o || !o.length) return;
        let r = o[0];
        if (o.length > 1) {
          for (const P of o)
            if (P.type !== Ie) {
              r = P;
              break;
            }
        }
        const l = R(e),
          { mode: c } = l;
        if (i.isLeaving) return yn(r);
        const f = yi(r);
        if (!f) return yn(r);
        const d = Mn(f, l, i, n);
        On(f, d);
        const p = n.subTree,
          b = p && yi(p);
        let E = !1;
        const { getTransitionKey: S } = f.type;
        if (S) {
          const P = S();
          s === void 0 ? (s = P) : P !== s && ((s = P), (E = !0));
        }
        if (b && b.type !== Ie && (!it(f, b) || E)) {
          const P = Mn(b, l, i, n);
          if ((On(b, P), c === "out-in"))
            return (
              (i.isLeaving = !0),
              (P.afterLeave = () => {
                (i.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              yn(r)
            );
          c === "in-out" &&
            f.type !== Ie &&
            (P.delayLeave = (J, k, ae) => {
              const $ = Cs(i, b);
              ($[String(b.key)] = b),
                (J._leaveCb = () => {
                  k(), (J._leaveCb = void 0), delete d.delayedLeave;
                }),
                (d.delayedLeave = ae);
            });
        }
        return r;
      };
    },
  },
  ws = rr;
function Cs(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || ((i = Object.create(null)), n.set(t.type, i)), i;
}
function Mn(e, t, n, i) {
  const {
      appear: s,
      mode: o,
      persisted: r = !1,
      onBeforeEnter: l,
      onEnter: c,
      onAfterEnter: f,
      onEnterCancelled: d,
      onBeforeLeave: p,
      onLeave: b,
      onAfterLeave: E,
      onLeaveCancelled: S,
      onBeforeAppear: P,
      onAppear: J,
      onAfterAppear: k,
      onAppearCancelled: ae,
    } = t,
    $ = String(e.key),
    q = Cs(n, e),
    te = (z, Y) => {
      z && ve(z, i, 9, Y);
    },
    ke = (z, Y) => {
      const U = Y[1];
      te(z, Y),
        M(z) ? z.every((re) => re.length <= 1) && U() : z.length <= 1 && U();
    },
    Pe = {
      mode: o,
      persisted: r,
      beforeEnter(z) {
        let Y = l;
        if (!n.isMounted)
          if (s) Y = P || l;
          else return;
        z._leaveCb && z._leaveCb(!0);
        const U = q[$];
        U && it(e, U) && U.el._leaveCb && U.el._leaveCb(), te(Y, [z]);
      },
      enter(z) {
        let Y = c,
          U = f,
          re = d;
        if (!n.isMounted)
          if (s) (Y = J || c), (U = k || f), (re = ae || d);
          else return;
        let T = !1;
        const V = (z._enterCb = (he) => {
          T ||
            ((T = !0),
            he ? te(re, [z]) : te(U, [z]),
            Pe.delayedLeave && Pe.delayedLeave(),
            (z._enterCb = void 0));
        });
        Y ? ke(Y, [z, V]) : V();
      },
      leave(z, Y) {
        const U = String(e.key);
        if ((z._enterCb && z._enterCb(!0), n.isUnmounting)) return Y();
        te(p, [z]);
        let re = !1;
        const T = (z._leaveCb = (V) => {
          re ||
            ((re = !0),
            Y(),
            V ? te(S, [z]) : te(E, [z]),
            (z._leaveCb = void 0),
            q[U] === e && delete q[U]);
        });
        (q[U] = e), b ? ke(b, [z, T]) : T();
      },
      clone(z) {
        return Mn(z, t, n, i);
      },
    };
  return Pe;
}
function yn(e) {
  if (ln(e)) return (e = Je(e)), (e.children = null), e;
}
function yi(e) {
  return ln(e) ? (e.children ? e.children[0] : void 0) : e;
}
function On(e, t) {
  e.shapeFlag & 6 && e.component
    ? On(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Es(e, t = !1, n) {
  let i = [],
    s = 0;
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    const l = n == null ? r.key : String(n) + String(r.key != null ? r.key : o);
    r.type === ge
      ? (r.patchFlag & 128 && s++, (i = i.concat(Es(r.children, t, l))))
      : (t || r.type !== Ie) && i.push(l != null ? Je(r, { key: l }) : r);
  }
  if (s > 1) for (let o = 0; o < i.length; o++) i[o].patchFlag = -2;
  return i;
}
const Kt = (e) => !!e.type.__asyncLoader,
  ln = (e) => e.type.__isKeepAlive;
function lr(e, t) {
  Ts(e, "a", t);
}
function ar(e, t) {
  Ts(e, "da", t);
}
function Ts(e, t, n = G) {
  const i =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
  if ((an(t, i, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      ln(s.parent.vnode) && cr(i, t, n, s), (s = s.parent);
  }
}
function cr(e, t, n, i) {
  const s = an(t, e, i, !0);
  As(() => {
    qn(i[t], s);
  }, n);
}
function an(e, t, n = G, i = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...r) => {
          if (n.isUnmounted) return;
          vt(), gt(n);
          const l = ve(t, n, e, r);
          return lt(), yt(), l;
        });
    return i ? s.unshift(o) : s.push(o), o;
  }
}
const Re =
    (e) =>
    (t, n = G) =>
      (!Ft || e === "sp") && an(e, (...i) => t(...i), n),
  ur = Re("bm"),
  cn = Re("m"),
  fr = Re("bu"),
  dr = Re("u"),
  Is = Re("bum"),
  As = Re("um"),
  hr = Re("sp"),
  pr = Re("rtg"),
  mr = Re("rtc");
function gr(e, t = G) {
  an("ec", e, t);
}
function $n(e, t) {
  const n = be;
  if (n === null) return e;
  const i = dn(n) || n.proxy,
    s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, l, c, f = K] = t[o];
    r &&
      (F(r) && (r = { mounted: r, updated: r }),
      r.deep && ot(l),
      s.push({
        dir: r,
        instance: i,
        value: l,
        oldValue: void 0,
        arg: c,
        modifiers: f,
      }));
  }
  return e;
}
function Ze(e, t, n, i) {
  const s = e.dirs,
    o = t && t.dirs;
  for (let r = 0; r < s.length; r++) {
    const l = s[r];
    o && (l.oldValue = o[r].value);
    let c = l.dir[i];
    c && (vt(), ve(c, n, 8, [e.el, l, e, t]), yt());
  }
}
const _r = Symbol();
function Ps(e, t, n, i) {
  let s;
  const o = n && n[i];
  if (M(e) || ee(e)) {
    s = new Array(e.length);
    for (let r = 0, l = e.length; r < l; r++)
      s[r] = t(e[r], r, void 0, o && o[r]);
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let r = 0; r < e; r++) s[r] = t(r + 1, r, void 0, o && o[r]);
  } else if (W(e))
    if (e[Symbol.iterator])
      s = Array.from(e, (r, l) => t(r, l, void 0, o && o[l]));
    else {
      const r = Object.keys(e);
      s = new Array(r.length);
      for (let l = 0, c = r.length; l < c; l++) {
        const f = r[l];
        s[l] = t(e[f], f, l, o && o[l]);
      }
    }
  else s = [];
  return n && (n[i] = s), s;
}
const Fn = (e) => (e ? (Ds(e) ? dn(e) || e.proxy : Fn(e.parent)) : null),
  It = oe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Fn(e.parent),
    $root: (e) => Fn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ti(e),
    $forceUpdate: (e) => e.f || (e.f = () => ei(e.update)),
    $nextTick: (e) => e.n || (e.n = Ko.bind(e.proxy)),
    $watch: (e) => sr.bind(e),
  }),
  xn = (e, t) => e !== K && !e.__isScriptSetup && j(e, t),
  br = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: i,
        data: s,
        props: o,
        accessCache: r,
        type: l,
        appContext: c,
      } = e;
      let f;
      if (t[0] !== "$") {
        const E = r[t];
        if (E !== void 0)
          switch (E) {
            case 1:
              return i[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (xn(i, t)) return (r[t] = 1), i[t];
          if (s !== K && j(s, t)) return (r[t] = 2), s[t];
          if ((f = e.propsOptions[0]) && j(f, t)) return (r[t] = 3), o[t];
          if (n !== K && j(n, t)) return (r[t] = 4), n[t];
          zn && (r[t] = 0);
        }
      }
      const d = It[t];
      let p, b;
      if (d) return t === "$attrs" && de(e, "get", t), d(e);
      if ((p = l.__cssModules) && (p = p[t])) return p;
      if (n !== K && j(n, t)) return (r[t] = 4), n[t];
      if (((b = c.config.globalProperties), j(b, t))) return b[t];
    },
    set({ _: e }, t, n) {
      const { data: i, setupState: s, ctx: o } = e;
      return xn(s, t)
        ? ((s[t] = n), !0)
        : i !== K && j(i, t)
        ? ((i[t] = n), !0)
        : j(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: i,
          appContext: s,
          propsOptions: o,
        },
      },
      r
    ) {
      let l;
      return (
        !!n[r] ||
        (e !== K && j(e, r)) ||
        xn(t, r) ||
        ((l = o[0]) && j(l, r)) ||
        j(i, r) ||
        j(It, r) ||
        j(s.config.globalProperties, r)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : j(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
let zn = !0;
function vr(e) {
  const t = ti(e),
    n = e.proxy,
    i = e.ctx;
  (zn = !1), t.beforeCreate && xi(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: o,
    methods: r,
    watch: l,
    provide: c,
    inject: f,
    created: d,
    beforeMount: p,
    mounted: b,
    beforeUpdate: E,
    updated: S,
    activated: P,
    deactivated: J,
    beforeDestroy: k,
    beforeUnmount: ae,
    destroyed: $,
    unmounted: q,
    render: te,
    renderTracked: ke,
    renderTriggered: Pe,
    errorCaptured: z,
    serverPrefetch: Y,
    expose: U,
    inheritAttrs: re,
    components: T,
    directives: V,
    filters: he,
  } = t;
  if ((f && yr(f, i, null, e.appContext.config.unwrapInjectedRef), r))
    for (const X in r) {
      const B = r[X];
      F(B) && (i[X] = B.bind(n));
    }
  if (s) {
    const X = s.call(n, n);
    W(X) && (e.data = sn(X));
  }
  if (((zn = !0), o))
    for (const X in o) {
      const B = o[X],
        Ye = F(B) ? B.bind(n, n) : F(B.get) ? B.get.bind(n, n) : Te,
        zt = !F(B) && F(B.set) ? B.set.bind(n) : Te,
        Xe = Jr({ get: Ye, set: zt });
      Object.defineProperty(i, X, {
        enumerable: !0,
        configurable: !0,
        get: () => Xe.value,
        set: (Le) => (Xe.value = Le),
      });
    }
  if (l) for (const X in l) Ls(l[X], i, n, X);
  if (c) {
    const X = F(c) ? c.call(n) : c;
    Reflect.ownKeys(X).forEach((B) => {
      ir(B, X[B]);
    });
  }
  d && xi(d, e, "c");
  function ne(X, B) {
    M(B) ? B.forEach((Ye) => X(Ye.bind(n))) : B && X(B.bind(n));
  }
  if (
    (ne(ur, p),
    ne(cn, b),
    ne(fr, E),
    ne(dr, S),
    ne(lr, P),
    ne(ar, J),
    ne(gr, z),
    ne(mr, ke),
    ne(pr, Pe),
    ne(Is, ae),
    ne(As, q),
    ne(hr, Y),
    M(U))
  )
    if (U.length) {
      const X = e.exposed || (e.exposed = {});
      U.forEach((B) => {
        Object.defineProperty(X, B, {
          get: () => n[B],
          set: (Ye) => (n[B] = Ye),
        });
      });
    } else e.exposed || (e.exposed = {});
  te && e.render === Te && (e.render = te),
    re != null && (e.inheritAttrs = re),
    T && (e.components = T),
    V && (e.directives = V);
}
function yr(e, t, n = Te, i = !1) {
  M(e) && (e = Sn(e));
  for (const s in e) {
    const o = e[s];
    let r;
    W(o)
      ? "default" in o
        ? (r = Ut(o.from || s, o.default, !0))
        : (r = Ut(o.from || s))
      : (r = Ut(o)),
      se(r) && i
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: (l) => (r.value = l),
          })
        : (t[s] = r);
  }
}
function xi(e, t, n) {
  ve(M(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Ls(e, t, n, i) {
  const s = i.includes(".") ? xs(n, i) : () => n[i];
  if (ee(e)) {
    const o = t[e];
    F(o) && vn(s, o);
  } else if (F(e)) vn(s, e.bind(n));
  else if (W(e))
    if (M(e)) e.forEach((o) => Ls(o, t, n, i));
    else {
      const o = F(e.handler) ? e.handler.bind(n) : t[e.handler];
      F(o) && vn(s, o, e);
    }
}
function ti(e) {
  const t = e.type,
    { mixins: n, extends: i } = t,
    {
      mixins: s,
      optionsCache: o,
      config: { optionMergeStrategies: r },
    } = e.appContext,
    l = o.get(t);
  let c;
  return (
    l
      ? (c = l)
      : !s.length && !n && !i
      ? (c = t)
      : ((c = {}), s.length && s.forEach((f) => Zt(c, f, r, !0)), Zt(c, t, r)),
    W(t) && o.set(t, c),
    c
  );
}
function Zt(e, t, n, i = !1) {
  const { mixins: s, extends: o } = t;
  o && Zt(e, o, n, !0), s && s.forEach((r) => Zt(e, r, n, !0));
  for (const r in t)
    if (!(i && r === "expose")) {
      const l = xr[r] || (n && n[r]);
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const xr = {
  data: wi,
  props: tt,
  emits: tt,
  methods: tt,
  computed: tt,
  beforeCreate: ce,
  created: ce,
  beforeMount: ce,
  mounted: ce,
  beforeUpdate: ce,
  updated: ce,
  beforeDestroy: ce,
  beforeUnmount: ce,
  destroyed: ce,
  unmounted: ce,
  activated: ce,
  deactivated: ce,
  errorCaptured: ce,
  serverPrefetch: ce,
  components: tt,
  directives: tt,
  watch: Cr,
  provide: wi,
  inject: wr,
};
function wi(e, t) {
  return t
    ? e
      ? function () {
          return oe(
            F(e) ? e.call(this, this) : e,
            F(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function wr(e, t) {
  return tt(Sn(e), Sn(t));
}
function Sn(e) {
  if (M(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ce(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function tt(e, t) {
  return e ? oe(oe(Object.create(null), e), t) : t;
}
function Cr(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = oe(Object.create(null), e);
  for (const i in t) n[i] = ce(e[i], t[i]);
  return n;
}
function Er(e, t, n, i = !1) {
  const s = {},
    o = {};
  Jt(o, fn, 1), (e.propsDefaults = Object.create(null)), Ms(e, t, s, o);
  for (const r in e.propsOptions[0]) r in s || (s[r] = void 0);
  n ? (e.props = i ? s : Ro(s)) : e.type.props ? (e.props = s) : (e.props = o),
    (e.attrs = o);
}
function Tr(e, t, n, i) {
  const {
      props: s,
      attrs: o,
      vnode: { patchFlag: r },
    } = e,
    l = R(s),
    [c] = e.propsOptions;
  let f = !1;
  if ((i || r > 0) && !(r & 16)) {
    if (r & 8) {
      const d = e.vnode.dynamicProps;
      for (let p = 0; p < d.length; p++) {
        let b = d[p];
        if (rn(e.emitsOptions, b)) continue;
        const E = t[b];
        if (c)
          if (j(o, b)) E !== o[b] && ((o[b] = E), (f = !0));
          else {
            const S = pt(b);
            s[S] = Nn(c, l, S, E, e, !1);
          }
        else E !== o[b] && ((o[b] = E), (f = !0));
      }
    }
  } else {
    Ms(e, t, s, o) && (f = !0);
    let d;
    for (const p in l)
      (!t || (!j(t, p) && ((d = bt(p)) === p || !j(t, d)))) &&
        (c
          ? n &&
            (n[p] !== void 0 || n[d] !== void 0) &&
            (s[p] = Nn(c, l, p, void 0, e, !0))
          : delete s[p]);
    if (o !== l) for (const p in o) (!t || !j(t, p)) && (delete o[p], (f = !0));
  }
  f && je(e, "set", "$attrs");
}
function Ms(e, t, n, i) {
  const [s, o] = e.propsOptions;
  let r = !1,
    l;
  if (t)
    for (let c in t) {
      if (qt(c)) continue;
      const f = t[c];
      let d;
      s && j(s, (d = pt(c)))
        ? !o || !o.includes(d)
          ? (n[d] = f)
          : ((l || (l = {}))[d] = f)
        : rn(e.emitsOptions, c) ||
          ((!(c in i) || f !== i[c]) && ((i[c] = f), (r = !0)));
    }
  if (o) {
    const c = R(n),
      f = l || K;
    for (let d = 0; d < o.length; d++) {
      const p = o[d];
      n[p] = Nn(s, c, p, f[p], e, !j(f, p));
    }
  }
  return r;
}
function Nn(e, t, n, i, s, o) {
  const r = e[n];
  if (r != null) {
    const l = j(r, "default");
    if (l && i === void 0) {
      const c = r.default;
      if (r.type !== Function && F(c)) {
        const { propsDefaults: f } = s;
        n in f ? (i = f[n]) : (gt(s), (i = f[n] = c.call(null, t)), lt());
      } else i = c;
    }
    r[0] &&
      (o && !l ? (i = !1) : r[1] && (i === "" || i === bt(n)) && (i = !0));
  }
  return i;
}
function Os(e, t, n = !1) {
  const i = t.propsCache,
    s = i.get(e);
  if (s) return s;
  const o = e.props,
    r = {},
    l = [];
  let c = !1;
  if (!F(e)) {
    const d = (p) => {
      c = !0;
      const [b, E] = Os(p, t, !0);
      oe(r, b), E && l.push(...E);
    };
    !n && t.mixins.length && t.mixins.forEach(d),
      e.extends && d(e.extends),
      e.mixins && e.mixins.forEach(d);
  }
  if (!o && !c) return W(e) && i.set(e, ut), ut;
  if (M(o))
    for (let d = 0; d < o.length; d++) {
      const p = pt(o[d]);
      Ci(p) && (r[p] = K);
    }
  else if (o)
    for (const d in o) {
      const p = pt(d);
      if (Ci(p)) {
        const b = o[d],
          E = (r[p] = M(b) || F(b) ? { type: b } : Object.assign({}, b));
        if (E) {
          const S = Ii(Boolean, E.type),
            P = Ii(String, E.type);
          (E[0] = S > -1),
            (E[1] = P < 0 || S < P),
            (S > -1 || j(E, "default")) && l.push(p);
        }
      }
    }
  const f = [r, l];
  return W(e) && i.set(e, f), f;
}
function Ci(e) {
  return e[0] !== "$";
}
function Ei(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Ti(e, t) {
  return Ei(e) === Ei(t);
}
function Ii(e, t) {
  return M(t) ? t.findIndex((n) => Ti(n, e)) : F(t) && Ti(t, e) ? 0 : -1;
}
const $s = (e) => e[0] === "_" || e === "$stable",
  ni = (e) => (M(e) ? e.map($e) : [$e(e)]),
  Ir = (e, t, n) => {
    if (t._n) return t;
    const i = vs((...s) => ni(t(...s)), n);
    return (i._c = !1), i;
  },
  Fs = (e, t, n) => {
    const i = e._ctx;
    for (const s in e) {
      if ($s(s)) continue;
      const o = e[s];
      if (F(o)) t[s] = Ir(s, o, i);
      else if (o != null) {
        const r = ni(o);
        t[s] = () => r;
      }
    }
  },
  zs = (e, t) => {
    const n = ni(t);
    e.slots.default = () => n;
  },
  Ar = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = R(t)), Jt(t, "_", n)) : Fs(t, (e.slots = {}));
    } else (e.slots = {}), t && zs(e, t);
    Jt(e.slots, fn, 1);
  },
  Pr = (e, t, n) => {
    const { vnode: i, slots: s } = e;
    let o = !0,
      r = K;
    if (i.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (o = !1)
          : (oe(s, t), !n && l === 1 && delete s._)
        : ((o = !t.$stable), Fs(t, s)),
        (r = t);
    } else t && (zs(e, t), (r = { default: 1 }));
    if (o) for (const l in s) !$s(l) && !(l in r) && delete s[l];
  };
function Ss() {
  return {
    app: null,
    config: {
      isNativeTag: Gs,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Lr = 0;
function Mr(e, t) {
  return function (i, s = null) {
    F(i) || (i = Object.assign({}, i)), s != null && !W(s) && (s = null);
    const o = Ss(),
      r = new Set();
    let l = !1;
    const c = (o.app = {
      _uid: Lr++,
      _component: i,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: Qr,
      get config() {
        return o.config;
      },
      set config(f) {},
      use(f, ...d) {
        return (
          r.has(f) ||
            (f && F(f.install)
              ? (r.add(f), f.install(c, ...d))
              : F(f) && (r.add(f), f(c, ...d))),
          c
        );
      },
      mixin(f) {
        return o.mixins.includes(f) || o.mixins.push(f), c;
      },
      component(f, d) {
        return d ? ((o.components[f] = d), c) : o.components[f];
      },
      directive(f, d) {
        return d ? ((o.directives[f] = d), c) : o.directives[f];
      },
      mount(f, d, p) {
        if (!l) {
          const b = Q(i, s);
          return (
            (b.appContext = o),
            d && t ? t(b, f) : e(b, f, p),
            (l = !0),
            (c._container = f),
            (f.__vue_app__ = c),
            dn(b.component) || b.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, c._container), delete c._container.__vue_app__);
      },
      provide(f, d) {
        return (o.provides[f] = d), c;
      },
    });
    return c;
  };
}
function jn(e, t, n, i, s = !1) {
  if (M(e)) {
    e.forEach((b, E) => jn(b, t && (M(t) ? t[E] : t), n, i, s));
    return;
  }
  if (Kt(i) && !s) return;
  const o = i.shapeFlag & 4 ? dn(i.component) || i.component.proxy : i.el,
    r = s ? null : o,
    { i: l, r: c } = e,
    f = t && t.r,
    d = l.refs === K ? (l.refs = {}) : l.refs,
    p = l.setupState;
  if (
    (f != null &&
      f !== c &&
      (ee(f)
        ? ((d[f] = null), j(p, f) && (p[f] = null))
        : se(f) && (f.value = null)),
    F(c))
  )
    Ke(c, l, 12, [r, d]);
  else {
    const b = ee(c),
      E = se(c);
    if (b || E) {
      const S = () => {
        if (e.f) {
          const P = b ? (j(p, c) ? p[c] : d[c]) : c.value;
          s
            ? M(P) && qn(P, o)
            : M(P)
            ? P.includes(o) || P.push(o)
            : b
            ? ((d[c] = [o]), j(p, c) && (p[c] = d[c]))
            : ((c.value = [o]), e.k && (d[e.k] = c.value));
        } else
          b
            ? ((d[c] = r), j(p, c) && (p[c] = r))
            : E && ((c.value = r), e.k && (d[e.k] = r));
      };
      r ? ((S.id = -1), fe(S, n)) : S();
    }
  }
}
const fe = nr;
function Or(e) {
  return $r(e);
}
function $r(e, t) {
  const n = lo();
  n.__VUE__ = !0;
  const {
      insert: i,
      remove: s,
      patchProp: o,
      createElement: r,
      createText: l,
      createComment: c,
      setText: f,
      setElementText: d,
      parentNode: p,
      nextSibling: b,
      setScopeId: E = Te,
      insertStaticContent: S,
    } = e,
    P = (
      a,
      u,
      h,
      g = null,
      m = null,
      y = null,
      w = !1,
      v = null,
      x = !!u.dynamicChildren
    ) => {
      if (a === u) return;
      a && !it(a, u) && ((g = St(a)), Le(a, m, y, !0), (a = null)),
        u.patchFlag === -2 && ((x = !1), (u.dynamicChildren = null));
      const { type: _, ref: I, shapeFlag: C } = u;
      switch (_) {
        case un:
          J(a, u, h, g);
          break;
        case Ie:
          k(a, u, h, g);
          break;
        case Wt:
          a == null && ae(u, h, g, w);
          break;
        case ge:
          T(a, u, h, g, m, y, w, v, x);
          break;
        default:
          C & 1
            ? te(a, u, h, g, m, y, w, v, x)
            : C & 6
            ? V(a, u, h, g, m, y, w, v, x)
            : (C & 64 || C & 128) && _.process(a, u, h, g, m, y, w, v, x, at);
      }
      I != null && m && jn(I, a && a.ref, y, u || a, !u);
    },
    J = (a, u, h, g) => {
      if (a == null) i((u.el = l(u.children)), h, g);
      else {
        const m = (u.el = a.el);
        u.children !== a.children && f(m, u.children);
      }
    },
    k = (a, u, h, g) => {
      a == null ? i((u.el = c(u.children || "")), h, g) : (u.el = a.el);
    },
    ae = (a, u, h, g) => {
      [a.el, a.anchor] = S(a.children, u, h, g, a.el, a.anchor);
    },
    $ = ({ el: a, anchor: u }, h, g) => {
      let m;
      for (; a && a !== u; ) (m = b(a)), i(a, h, g), (a = m);
      i(u, h, g);
    },
    q = ({ el: a, anchor: u }) => {
      let h;
      for (; a && a !== u; ) (h = b(a)), s(a), (a = h);
      s(u);
    },
    te = (a, u, h, g, m, y, w, v, x) => {
      (w = w || u.type === "svg"),
        a == null ? ke(u, h, g, m, y, w, v, x) : Y(a, u, m, y, w, v, x);
    },
    ke = (a, u, h, g, m, y, w, v) => {
      let x, _;
      const { type: I, props: C, shapeFlag: A, transition: O, dirs: N } = a;
      if (
        ((x = a.el = r(a.type, y, C && C.is, C)),
        A & 8
          ? d(x, a.children)
          : A & 16 &&
            z(a.children, x, null, g, m, y && I !== "foreignObject", w, v),
        N && Ze(a, null, g, "created"),
        Pe(x, a, a.scopeId, w, g),
        C)
      ) {
        for (const D in C)
          D !== "value" &&
            !qt(D) &&
            o(x, D, null, C[D], y, a.children, g, m, ze);
        "value" in C && o(x, "value", null, C.value),
          (_ = C.onVnodeBeforeMount) && Oe(_, g, a);
      }
      N && Ze(a, null, g, "beforeMount");
      const H = (!m || (m && !m.pendingBranch)) && O && !O.persisted;
      H && O.beforeEnter(x),
        i(x, u, h),
        ((_ = C && C.onVnodeMounted) || H || N) &&
          fe(() => {
            _ && Oe(_, g, a), H && O.enter(x), N && Ze(a, null, g, "mounted");
          }, m);
    },
    Pe = (a, u, h, g, m) => {
      if ((h && E(a, h), g)) for (let y = 0; y < g.length; y++) E(a, g[y]);
      if (m) {
        let y = m.subTree;
        if (u === y) {
          const w = m.vnode;
          Pe(a, w, w.scopeId, w.slotScopeIds, m.parent);
        }
      }
    },
    z = (a, u, h, g, m, y, w, v, x = 0) => {
      for (let _ = x; _ < a.length; _++) {
        const I = (a[_] = v ? qe(a[_]) : $e(a[_]));
        P(null, I, u, h, g, m, y, w, v);
      }
    },
    Y = (a, u, h, g, m, y, w) => {
      const v = (u.el = a.el);
      let { patchFlag: x, dynamicChildren: _, dirs: I } = u;
      x |= a.patchFlag & 16;
      const C = a.props || K,
        A = u.props || K;
      let O;
      h && Qe(h, !1),
        (O = A.onVnodeBeforeUpdate) && Oe(O, h, u, a),
        I && Ze(u, a, h, "beforeUpdate"),
        h && Qe(h, !0);
      const N = m && u.type !== "foreignObject";
      if (
        (_
          ? U(a.dynamicChildren, _, v, h, g, N, y)
          : w || B(a, u, v, null, h, g, N, y, !1),
        x > 0)
      ) {
        if (x & 16) re(v, u, C, A, h, g, m);
        else if (
          (x & 2 && C.class !== A.class && o(v, "class", null, A.class, m),
          x & 4 && o(v, "style", C.style, A.style, m),
          x & 8)
        ) {
          const H = u.dynamicProps;
          for (let D = 0; D < H.length; D++) {
            const Z = H[D],
              ye = C[Z],
              ct = A[Z];
            (ct !== ye || Z === "value") &&
              o(v, Z, ye, ct, m, a.children, h, g, ze);
          }
        }
        x & 1 && a.children !== u.children && d(v, u.children);
      } else !w && _ == null && re(v, u, C, A, h, g, m);
      ((O = A.onVnodeUpdated) || I) &&
        fe(() => {
          O && Oe(O, h, u, a), I && Ze(u, a, h, "updated");
        }, g);
    },
    U = (a, u, h, g, m, y, w) => {
      for (let v = 0; v < u.length; v++) {
        const x = a[v],
          _ = u[v],
          I =
            x.el && (x.type === ge || !it(x, _) || x.shapeFlag & 70)
              ? p(x.el)
              : h;
        P(x, _, I, null, g, m, y, w, !0);
      }
    },
    re = (a, u, h, g, m, y, w) => {
      if (h !== g) {
        if (h !== K)
          for (const v in h)
            !qt(v) && !(v in g) && o(a, v, h[v], null, w, u.children, m, y, ze);
        for (const v in g) {
          if (qt(v)) continue;
          const x = g[v],
            _ = h[v];
          x !== _ && v !== "value" && o(a, v, _, x, w, u.children, m, y, ze);
        }
        "value" in g && o(a, "value", h.value, g.value);
      }
    },
    T = (a, u, h, g, m, y, w, v, x) => {
      const _ = (u.el = a ? a.el : l("")),
        I = (u.anchor = a ? a.anchor : l(""));
      let { patchFlag: C, dynamicChildren: A, slotScopeIds: O } = u;
      O && (v = v ? v.concat(O) : O),
        a == null
          ? (i(_, h, g), i(I, h, g), z(u.children, h, I, m, y, w, v, x))
          : C > 0 && C & 64 && A && a.dynamicChildren
          ? (U(a.dynamicChildren, A, h, m, y, w, v),
            (u.key != null || (m && u === m.subTree)) && Ns(a, u, !0))
          : B(a, u, h, I, m, y, w, v, x);
    },
    V = (a, u, h, g, m, y, w, v, x) => {
      (u.slotScopeIds = v),
        a == null
          ? u.shapeFlag & 512
            ? m.ctx.activate(u, h, g, w, x)
            : he(u, h, g, m, y, w, x)
          : xt(a, u, x);
    },
    he = (a, u, h, g, m, y, w) => {
      const v = (a.component = Br(a, g, m));
      if ((ln(a) && (v.ctx.renderer = at), qr(v), v.asyncDep)) {
        if ((m && m.registerDep(v, ne), !a.el)) {
          const x = (v.subTree = Q(Ie));
          k(null, x, u, h);
        }
        return;
      }
      ne(v, a, u, h, m, y, w);
    },
    xt = (a, u, h) => {
      const g = (u.component = a.component);
      if (Go(a, u, h))
        if (g.asyncDep && !g.asyncResolved) {
          X(g, u, h);
          return;
        } else (g.next = u), Vo(g.update), g.update();
      else (u.el = a.el), (g.vnode = u);
    },
    ne = (a, u, h, g, m, y, w) => {
      const v = () => {
          if (a.isMounted) {
            let { next: I, bu: C, u: A, parent: O, vnode: N } = a,
              H = I,
              D;
            Qe(a, !1),
              I ? ((I.el = N.el), X(a, I, w)) : (I = N),
              C && _n(C),
              (D = I.props && I.props.onVnodeBeforeUpdate) && Oe(D, O, I, N),
              Qe(a, !0);
            const Z = bn(a),
              ye = a.subTree;
            (a.subTree = Z),
              P(ye, Z, p(ye.el), St(ye), a, m, y),
              (I.el = Z.el),
              H === null && er(a, Z.el),
              A && fe(A, m),
              (D = I.props && I.props.onVnodeUpdated) &&
                fe(() => Oe(D, O, I, N), m);
          } else {
            let I;
            const { el: C, props: A } = u,
              { bm: O, m: N, parent: H } = a,
              D = Kt(u);
            if (
              (Qe(a, !1),
              O && _n(O),
              !D && (I = A && A.onVnodeBeforeMount) && Oe(I, H, u),
              Qe(a, !0),
              C && mn)
            ) {
              const Z = () => {
                (a.subTree = bn(a)), mn(C, a.subTree, a, m, null);
              };
              D
                ? u.type.__asyncLoader().then(() => !a.isUnmounted && Z())
                : Z();
            } else {
              const Z = (a.subTree = bn(a));
              P(null, Z, h, g, a, m, y), (u.el = Z.el);
            }
            if ((N && fe(N, m), !D && (I = A && A.onVnodeMounted))) {
              const Z = u;
              fe(() => Oe(I, H, Z), m);
            }
            (u.shapeFlag & 256 ||
              (H && Kt(H.vnode) && H.vnode.shapeFlag & 256)) &&
              a.a &&
              fe(a.a, m),
              (a.isMounted = !0),
              (u = h = g = null);
          }
        },
        x = (a.effect = new Vn(v, () => ei(_), a.scope)),
        _ = (a.update = () => x.run());
      (_.id = a.uid), Qe(a, !0), _();
    },
    X = (a, u, h) => {
      u.component = a;
      const g = a.vnode.props;
      (a.vnode = u),
        (a.next = null),
        Tr(a, u.props, g, h),
        Pr(a, u.children, h),
        vt(),
        bi(),
        yt();
    },
    B = (a, u, h, g, m, y, w, v, x = !1) => {
      const _ = a && a.children,
        I = a ? a.shapeFlag : 0,
        C = u.children,
        { patchFlag: A, shapeFlag: O } = u;
      if (A > 0) {
        if (A & 128) {
          zt(_, C, h, g, m, y, w, v, x);
          return;
        } else if (A & 256) {
          Ye(_, C, h, g, m, y, w, v, x);
          return;
        }
      }
      O & 8
        ? (I & 16 && ze(_, m, y), C !== _ && d(h, C))
        : I & 16
        ? O & 16
          ? zt(_, C, h, g, m, y, w, v, x)
          : ze(_, m, y, !0)
        : (I & 8 && d(h, ""), O & 16 && z(C, h, g, m, y, w, v, x));
    },
    Ye = (a, u, h, g, m, y, w, v, x) => {
      (a = a || ut), (u = u || ut);
      const _ = a.length,
        I = u.length,
        C = Math.min(_, I);
      let A;
      for (A = 0; A < C; A++) {
        const O = (u[A] = x ? qe(u[A]) : $e(u[A]));
        P(a[A], O, h, null, m, y, w, v, x);
      }
      _ > I ? ze(a, m, y, !0, !1, C) : z(u, h, g, m, y, w, v, x, C);
    },
    zt = (a, u, h, g, m, y, w, v, x) => {
      let _ = 0;
      const I = u.length;
      let C = a.length - 1,
        A = I - 1;
      for (; _ <= C && _ <= A; ) {
        const O = a[_],
          N = (u[_] = x ? qe(u[_]) : $e(u[_]));
        if (it(O, N)) P(O, N, h, null, m, y, w, v, x);
        else break;
        _++;
      }
      for (; _ <= C && _ <= A; ) {
        const O = a[C],
          N = (u[A] = x ? qe(u[A]) : $e(u[A]));
        if (it(O, N)) P(O, N, h, null, m, y, w, v, x);
        else break;
        C--, A--;
      }
      if (_ > C) {
        if (_ <= A) {
          const O = A + 1,
            N = O < I ? u[O].el : g;
          for (; _ <= A; )
            P(null, (u[_] = x ? qe(u[_]) : $e(u[_])), h, N, m, y, w, v, x), _++;
        }
      } else if (_ > A) for (; _ <= C; ) Le(a[_], m, y, !0), _++;
      else {
        const O = _,
          N = _,
          H = new Map();
        for (_ = N; _ <= A; _++) {
          const pe = (u[_] = x ? qe(u[_]) : $e(u[_]));
          pe.key != null && H.set(pe.key, _);
        }
        let D,
          Z = 0;
        const ye = A - N + 1;
        let ct = !1,
          li = 0;
        const wt = new Array(ye);
        for (_ = 0; _ < ye; _++) wt[_] = 0;
        for (_ = O; _ <= C; _++) {
          const pe = a[_];
          if (Z >= ye) {
            Le(pe, m, y, !0);
            continue;
          }
          let Me;
          if (pe.key != null) Me = H.get(pe.key);
          else
            for (D = N; D <= A; D++)
              if (wt[D - N] === 0 && it(pe, u[D])) {
                Me = D;
                break;
              }
          Me === void 0
            ? Le(pe, m, y, !0)
            : ((wt[Me - N] = _ + 1),
              Me >= li ? (li = Me) : (ct = !0),
              P(pe, u[Me], h, null, m, y, w, v, x),
              Z++);
        }
        const ai = ct ? Fr(wt) : ut;
        for (D = ai.length - 1, _ = ye - 1; _ >= 0; _--) {
          const pe = N + _,
            Me = u[pe],
            ci = pe + 1 < I ? u[pe + 1].el : g;
          wt[_] === 0
            ? P(null, Me, h, ci, m, y, w, v, x)
            : ct && (D < 0 || _ !== ai[D] ? Xe(Me, h, ci, 2) : D--);
        }
      }
    },
    Xe = (a, u, h, g, m = null) => {
      const { el: y, type: w, transition: v, children: x, shapeFlag: _ } = a;
      if (_ & 6) {
        Xe(a.component.subTree, u, h, g);
        return;
      }
      if (_ & 128) {
        a.suspense.move(u, h, g);
        return;
      }
      if (_ & 64) {
        w.move(a, u, h, at);
        return;
      }
      if (w === ge) {
        i(y, u, h);
        for (let C = 0; C < x.length; C++) Xe(x[C], u, h, g);
        i(a.anchor, u, h);
        return;
      }
      if (w === Wt) {
        $(a, u, h);
        return;
      }
      if (g !== 2 && _ & 1 && v)
        if (g === 0) v.beforeEnter(y), i(y, u, h), fe(() => v.enter(y), m);
        else {
          const { leave: C, delayLeave: A, afterLeave: O } = v,
            N = () => i(y, u, h),
            H = () => {
              C(y, () => {
                N(), O && O();
              });
            };
          A ? A(y, N, H) : H();
        }
      else i(y, u, h);
    },
    Le = (a, u, h, g = !1, m = !1) => {
      const {
        type: y,
        props: w,
        ref: v,
        children: x,
        dynamicChildren: _,
        shapeFlag: I,
        patchFlag: C,
        dirs: A,
      } = a;
      if ((v != null && jn(v, null, h, a, !0), I & 256)) {
        u.ctx.deactivate(a);
        return;
      }
      const O = I & 1 && A,
        N = !Kt(a);
      let H;
      if ((N && (H = w && w.onVnodeBeforeUnmount) && Oe(H, u, a), I & 6))
        Ws(a.component, h, g);
      else {
        if (I & 128) {
          a.suspense.unmount(h, g);
          return;
        }
        O && Ze(a, null, u, "beforeUnmount"),
          I & 64
            ? a.type.remove(a, u, h, m, at, g)
            : _ && (y !== ge || (C > 0 && C & 64))
            ? ze(_, u, h, !1, !0)
            : ((y === ge && C & 384) || (!m && I & 16)) && ze(x, u, h),
          g && oi(a);
      }
      ((N && (H = w && w.onVnodeUnmounted)) || O) &&
        fe(() => {
          H && Oe(H, u, a), O && Ze(a, null, u, "unmounted");
        }, h);
    },
    oi = (a) => {
      const { type: u, el: h, anchor: g, transition: m } = a;
      if (u === ge) {
        Ks(h, g);
        return;
      }
      if (u === Wt) {
        q(a);
        return;
      }
      const y = () => {
        s(h), m && !m.persisted && m.afterLeave && m.afterLeave();
      };
      if (a.shapeFlag & 1 && m && !m.persisted) {
        const { leave: w, delayLeave: v } = m,
          x = () => w(h, y);
        v ? v(a.el, y, x) : x();
      } else y();
    },
    Ks = (a, u) => {
      let h;
      for (; a !== u; ) (h = b(a)), s(a), (a = h);
      s(u);
    },
    Ws = (a, u, h) => {
      const { bum: g, scope: m, update: y, subTree: w, um: v } = a;
      g && _n(g),
        m.stop(),
        y && ((y.active = !1), Le(w, a, u, h)),
        v && fe(v, u),
        fe(() => {
          a.isUnmounted = !0;
        }, u),
        u &&
          u.pendingBranch &&
          !u.isUnmounted &&
          a.asyncDep &&
          !a.asyncResolved &&
          a.suspenseId === u.pendingId &&
          (u.deps--, u.deps === 0 && u.resolve());
    },
    ze = (a, u, h, g = !1, m = !1, y = 0) => {
      for (let w = y; w < a.length; w++) Le(a[w], u, h, g, m);
    },
    St = (a) =>
      a.shapeFlag & 6
        ? St(a.component.subTree)
        : a.shapeFlag & 128
        ? a.suspense.next()
        : b(a.anchor || a.el),
    ri = (a, u, h) => {
      a == null
        ? u._vnode && Le(u._vnode, null, null, !0)
        : P(u._vnode || null, a, u, null, null, null, h),
        bi(),
        ms(),
        (u._vnode = a);
    },
    at = {
      p: P,
      um: Le,
      m: Xe,
      r: oi,
      mt: he,
      mc: z,
      pc: B,
      pbc: U,
      n: St,
      o: e,
    };
  let pn, mn;
  return (
    t && ([pn, mn] = t(at)), { render: ri, hydrate: pn, createApp: Mr(ri, pn) }
  );
}
function Qe({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Ns(e, t, n = !1) {
  const i = e.children,
    s = t.children;
  if (M(i) && M(s))
    for (let o = 0; o < i.length; o++) {
      const r = i[o];
      let l = s[o];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = s[o] = qe(s[o])), (l.el = r.el)),
        n || Ns(r, l)),
        l.type === un && (l.el = r.el);
    }
}
function Fr(e) {
  const t = e.slice(),
    n = [0];
  let i, s, o, r, l;
  const c = e.length;
  for (i = 0; i < c; i++) {
    const f = e[i];
    if (f !== 0) {
      if (((s = n[n.length - 1]), e[s] < f)) {
        (t[i] = s), n.push(i);
        continue;
      }
      for (o = 0, r = n.length - 1; o < r; )
        (l = (o + r) >> 1), e[n[l]] < f ? (o = l + 1) : (r = l);
      f < e[n[o]] && (o > 0 && (t[i] = n[o - 1]), (n[o] = i));
    }
  }
  for (o = n.length, r = n[o - 1]; o-- > 0; ) (n[o] = r), (r = t[r]);
  return n;
}
const zr = (e) => e.__isTeleport,
  ge = Symbol(void 0),
  un = Symbol(void 0),
  Ie = Symbol(void 0),
  Wt = Symbol(void 0),
  At = [];
let Ee = null;
function ue(e = !1) {
  At.push((Ee = e ? null : []));
}
function Sr() {
  At.pop(), (Ee = At[At.length - 1] || null);
}
let $t = 1;
function Ai(e) {
  $t += e;
}
function js(e) {
  return (
    (e.dynamicChildren = $t > 0 ? Ee || ut : null),
    Sr(),
    $t > 0 && Ee && Ee.push(e),
    e
  );
}
function Ae(e, t, n, i, s, o) {
  return js(L(e, t, n, i, s, o, !0));
}
function Qt(e, t, n, i, s) {
  return js(Q(e, t, n, i, s, !0));
}
function Rn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function it(e, t) {
  return e.type === t.type && e.key === t.key;
}
const fn = "__vInternal",
  Rs = ({ key: e }) => e ?? null,
  Vt = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? ee(e) || se(e) || F(e)
        ? { i: be, r: e, k: t, f: !!n }
        : e
      : null;
function L(
  e,
  t = null,
  n = null,
  i = 0,
  s = null,
  o = e === ge ? 0 : 1,
  r = !1,
  l = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Rs(t),
    ref: t && Vt(t),
    scopeId: bs,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: i,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: be,
  };
  return (
    l
      ? (ii(c, n), o & 128 && e.normalize(c))
      : n && (c.shapeFlag |= ee(n) ? 8 : 16),
    $t > 0 &&
      !r &&
      Ee &&
      (c.patchFlag > 0 || o & 6) &&
      c.patchFlag !== 32 &&
      Ee.push(c),
    c
  );
}
const Q = Nr;
function Nr(e, t = null, n = null, i = 0, s = null, o = !1) {
  if (((!e || e === _r) && (e = Ie), Rn(e))) {
    const l = Je(e, t, !0);
    return (
      n && ii(l, n),
      $t > 0 &&
        !o &&
        Ee &&
        (l.shapeFlag & 6 ? (Ee[Ee.indexOf(e)] = l) : Ee.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if ((Vr(e) && (e = e.__vccOpts), t)) {
    t = jr(t);
    let { class: l, style: c } = t;
    l && !ee(l) && (t.class = _t(l)),
      W(c) && (ls(c) && !M(c) && (c = oe({}, c)), (t.style = Ne(c)));
  }
  const r = ee(e) ? 1 : tr(e) ? 128 : zr(e) ? 64 : W(e) ? 4 : F(e) ? 2 : 0;
  return L(e, t, n, i, s, r, o, !0);
}
function jr(e) {
  return e ? (ls(e) || fn in e ? oe({}, e) : e) : null;
}
function Je(e, t, n = !1) {
  const { props: i, ref: s, patchFlag: o, children: r } = e,
    l = t ? ks(i || {}, t) : i;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Rs(l),
    ref:
      t && t.ref ? (n && s ? (M(s) ? s.concat(Vt(t)) : [s, Vt(t)]) : Vt(t)) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: r,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== ge ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Je(e.ssContent),
    ssFallback: e.ssFallback && Je(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function xe(e = " ", t = 0) {
  return Q(un, null, e, t);
}
function Rr(e, t) {
  const n = Q(Wt, null, e);
  return (n.staticCount = t), n;
}
function Pi(e = "", t = !1) {
  return t ? (ue(), Qt(Ie, null, e)) : Q(Ie, null, e);
}
function $e(e) {
  return e == null || typeof e == "boolean"
    ? Q(Ie)
    : M(e)
    ? Q(ge, null, e.slice())
    : typeof e == "object"
    ? qe(e)
    : Q(un, null, String(e));
}
function qe(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Je(e);
}
function ii(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null) t = null;
  else if (M(t)) n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), ii(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(fn in t)
        ? (t._ctx = be)
        : s === 3 &&
          be &&
          (be.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    F(t)
      ? ((t = { default: t, _ctx: be }), (n = 32))
      : ((t = String(t)), i & 64 ? ((n = 16), (t = [xe(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function ks(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const s in i)
      if (s === "class")
        t.class !== i.class && (t.class = _t([t.class, i.class]));
      else if (s === "style") t.style = Ne([t.style, i.style]);
      else if (Gt(s)) {
        const o = t[s],
          r = i[s];
        r &&
          o !== r &&
          !(M(o) && o.includes(r)) &&
          (t[s] = o ? [].concat(o, r) : r);
      } else s !== "" && (t[s] = i[s]);
  }
  return t;
}
function Oe(e, t, n, i = null) {
  ve(e, t, 7, [n, i]);
}
const kr = Ss();
let Dr = 0;
function Br(e, t, n) {
  const i = e.type,
    s = (t ? t.appContext : e.appContext) || kr,
    o = {
      uid: Dr++,
      vnode: e,
      type: i,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new ao(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Os(i, s),
      emitsOptions: _s(i, s),
      emit: null,
      emitted: null,
      propsDefaults: K,
      inheritAttrs: i.inheritAttrs,
      ctx: K,
      data: K,
      props: K,
      attrs: K,
      slots: K,
      refs: K,
      setupState: K,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = Xo.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let G = null;
const Hr = () => G || be,
  gt = (e) => {
    (G = e), e.scope.on();
  },
  lt = () => {
    G && G.scope.off(), (G = null);
  };
function Ds(e) {
  return e.vnode.shapeFlag & 4;
}
let Ft = !1;
function qr(e, t = !1) {
  Ft = t;
  const { props: n, children: i } = e.vnode,
    s = Ds(e);
  Er(e, n, s, t), Ar(e, i);
  const o = s ? Ur(e, t) : void 0;
  return (Ft = !1), o;
}
function Ur(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = as(new Proxy(e.ctx, br)));
  const { setup: i } = n;
  if (i) {
    const s = (e.setupContext = i.length > 1 ? Wr(e) : null);
    gt(e), vt();
    const o = Ke(i, e, 0, [e.props, s]);
    if ((yt(), lt(), Wi(o))) {
      if ((o.then(lt, lt), t))
        return o
          .then((r) => {
            Li(e, r, t);
          })
          .catch((r) => {
            on(r, e, 0);
          });
      e.asyncDep = o;
    } else Li(e, o, t);
  } else Bs(e, t);
}
function Li(e, t, n) {
  F(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : W(t) && (e.setupState = fs(t)),
    Bs(e, n);
}
let Mi;
function Bs(e, t, n) {
  const i = e.type;
  if (!e.render) {
    if (!t && Mi && !i.render) {
      const s = i.template || ti(e).template;
      if (s) {
        const { isCustomElement: o, compilerOptions: r } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = i,
          f = oe(oe({ isCustomElement: o, delimiters: l }, r), c);
        i.render = Mi(s, f);
      }
    }
    e.render = i.render || Te;
  }
  gt(e), vt(), vr(e), yt(), lt();
}
function Kr(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return de(e, "get", "$attrs"), t[n];
    },
  });
}
function Wr(e) {
  const t = (i) => {
    e.exposed = i || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Kr(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function dn(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(fs(as(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in It) return It[n](e);
        },
        has(t, n) {
          return n in t || n in It;
        },
      }))
    );
}
function Vr(e) {
  return F(e) && "__vccOpts" in e;
}
const Jr = (e, t) => qo(e, t, Ft);
function Yr(e, t, n) {
  const i = arguments.length;
  return i === 2
    ? W(t) && !M(t)
      ? Rn(t)
        ? Q(e, null, [t])
        : Q(e, t)
      : Q(e, null, t)
    : (i > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : i === 3 && Rn(n) && (n = [n]),
      Q(e, t, n));
}
const Xr = Symbol(""),
  Zr = () => Ut(Xr),
  Qr = "3.2.47",
  Gr = "http://www.w3.org/2000/svg",
  st = typeof document < "u" ? document : null,
  Oi = st && st.createElement("template"),
  el = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, i) => {
      const s = t
        ? st.createElementNS(Gr, e)
        : st.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          i &&
          i.multiple != null &&
          s.setAttribute("multiple", i.multiple),
        s
      );
    },
    createText: (e) => st.createTextNode(e),
    createComment: (e) => st.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => st.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, i, s, o) {
      const r = n ? n.previousSibling : t.lastChild;
      if (s && (s === o || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === o || !(s = s.nextSibling));

        );
      else {
        Oi.innerHTML = i ? `<svg>${e}</svg>` : e;
        const l = Oi.content;
        if (i) {
          const c = l.firstChild;
          for (; c.firstChild; ) l.appendChild(c.firstChild);
          l.removeChild(c);
        }
        t.insertBefore(l, n);
      }
      return [
        r ? r.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function tl(e, t, n) {
  const i = e._vtc;
  i && (t = (t ? [t, ...i] : [...i]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function nl(e, t, n) {
  const i = e.style,
    s = ee(n);
  if (n && !s) {
    if (t && !ee(t)) for (const o in t) n[o] == null && kn(i, o, "");
    for (const o in n) kn(i, o, n[o]);
  } else {
    const o = i.display;
    s ? t !== n && (i.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (i.display = o);
  }
}
const $i = /\s*!important$/;
function kn(e, t, n) {
  if (M(n)) n.forEach((i) => kn(e, t, i));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const i = il(e, t);
    $i.test(n)
      ? e.setProperty(bt(i), n.replace($i, ""), "important")
      : (e[i] = n);
  }
}
const Fi = ["Webkit", "Moz", "ms"],
  wn = {};
function il(e, t) {
  const n = wn[t];
  if (n) return n;
  let i = pt(t);
  if (i !== "filter" && i in e) return (wn[t] = i);
  i = Yi(i);
  for (let s = 0; s < Fi.length; s++) {
    const o = Fi[s] + i;
    if (o in e) return (wn[t] = o);
  }
  return t;
}
const zi = "http://www.w3.org/1999/xlink";
function sl(e, t, n, i, s) {
  if (i && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(zi, t.slice(6, t.length))
      : e.setAttributeNS(zi, t, n);
  else {
    const o = Qs(t);
    n == null || (o && !qi(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? "" : n);
  }
}
function ol(e, t, n, i, s, o, r) {
  if (t === "innerHTML" || t === "textContent") {
    i && r(i, s, o), (e[t] = n ?? "");
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const c = n ?? "";
    (e.value !== c || e.tagName === "OPTION") && (e.value = c),
      n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean"
      ? (n = qi(n))
      : n == null && c === "string"
      ? ((n = ""), (l = !0))
      : c === "number" && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(t);
}
function rl(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function ll(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
function al(e, t, n, i, s = null) {
  const o = e._vei || (e._vei = {}),
    r = o[t];
  if (i && r) r.value = i;
  else {
    const [l, c] = cl(t);
    if (i) {
      const f = (o[t] = dl(i, s));
      rl(e, l, f, c);
    } else r && (ll(e, l, r, c), (o[t] = void 0));
  }
}
const Si = /(?:Once|Passive|Capture)$/;
function cl(e) {
  let t;
  if (Si.test(e)) {
    t = {};
    let i;
    for (; (i = e.match(Si)); )
      (e = e.slice(0, e.length - i[0].length)), (t[i[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : bt(e.slice(2)), t];
}
let Cn = 0;
const ul = Promise.resolve(),
  fl = () => Cn || (ul.then(() => (Cn = 0)), (Cn = Date.now()));
function dl(e, t) {
  const n = (i) => {
    if (!i._vts) i._vts = Date.now();
    else if (i._vts <= n.attached) return;
    ve(hl(i, n.value), t, 5, [i]);
  };
  return (n.value = e), (n.attached = fl()), n;
}
function hl(e, t) {
  if (M(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((i) => (s) => !s._stopped && i && i(s))
    );
  } else return t;
}
const Ni = /^on[a-z]/,
  pl = (e, t, n, i, s = !1, o, r, l, c) => {
    t === "class"
      ? tl(e, i, s)
      : t === "style"
      ? nl(e, n, i)
      : Gt(t)
      ? Hn(t) || al(e, t, n, i, r)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : ml(e, t, i, s)
        )
      ? ol(e, t, i, o, r, l, c)
      : (t === "true-value"
          ? (e._trueValue = i)
          : t === "false-value" && (e._falseValue = i),
        sl(e, t, i, s));
  };
function ml(e, t, n, i) {
  return i
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && Ni.test(t) && F(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (Ni.test(t) && ee(n))
    ? !1
    : t in e;
}
const Be = "transition",
  Ct = "animation",
  si = (e, { slots: t }) => Yr(ws, gl(e), t);
si.displayName = "Transition";
const Hs = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
si.props = oe({}, ws.props, Hs);
const Ge = (e, t = []) => {
    M(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  ji = (e) => (e ? (M(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function gl(e) {
  const t = {};
  for (const T in e) T in Hs || (t[T] = e[T]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: i,
      duration: s,
      enterFromClass: o = `${n}-enter-from`,
      enterActiveClass: r = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: c = o,
      appearActiveClass: f = r,
      appearToClass: d = l,
      leaveFromClass: p = `${n}-leave-from`,
      leaveActiveClass: b = `${n}-leave-active`,
      leaveToClass: E = `${n}-leave-to`,
    } = e,
    S = _l(s),
    P = S && S[0],
    J = S && S[1],
    {
      onBeforeEnter: k,
      onEnter: ae,
      onEnterCancelled: $,
      onLeave: q,
      onLeaveCancelled: te,
      onBeforeAppear: ke = k,
      onAppear: Pe = ae,
      onAppearCancelled: z = $,
    } = t,
    Y = (T, V, he) => {
      et(T, V ? d : l), et(T, V ? f : r), he && he();
    },
    U = (T, V) => {
      (T._isLeaving = !1), et(T, p), et(T, E), et(T, b), V && V();
    },
    re = (T) => (V, he) => {
      const xt = T ? Pe : ae,
        ne = () => Y(V, T, he);
      Ge(xt, [V, ne]),
        Ri(() => {
          et(V, T ? c : o), He(V, T ? d : l), ji(xt) || ki(V, i, P, ne);
        });
    };
  return oe(t, {
    onBeforeEnter(T) {
      Ge(k, [T]), He(T, o), He(T, r);
    },
    onBeforeAppear(T) {
      Ge(ke, [T]), He(T, c), He(T, f);
    },
    onEnter: re(!1),
    onAppear: re(!0),
    onLeave(T, V) {
      T._isLeaving = !0;
      const he = () => U(T, V);
      He(T, p),
        yl(),
        He(T, b),
        Ri(() => {
          T._isLeaving && (et(T, p), He(T, E), ji(q) || ki(T, i, J, he));
        }),
        Ge(q, [T, he]);
    },
    onEnterCancelled(T) {
      Y(T, !1), Ge($, [T]);
    },
    onAppearCancelled(T) {
      Y(T, !0), Ge(z, [T]);
    },
    onLeaveCancelled(T) {
      U(T), Ge(te, [T]);
    },
  });
}
function _l(e) {
  if (e == null) return null;
  if (W(e)) return [En(e.enter), En(e.leave)];
  {
    const t = En(e);
    return [t, t];
  }
}
function En(e) {
  return ro(e);
}
function He(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t);
}
function et(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function Ri(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let bl = 0;
function ki(e, t, n, i) {
  const s = (e._endId = ++bl),
    o = () => {
      s === e._endId && i();
    };
  if (n) return setTimeout(o, n);
  const { type: r, timeout: l, propCount: c } = vl(e, t);
  if (!r) return i();
  const f = r + "end";
  let d = 0;
  const p = () => {
      e.removeEventListener(f, b), o();
    },
    b = (E) => {
      E.target === e && ++d >= c && p();
    };
  setTimeout(() => {
    d < c && p();
  }, l + 1),
    e.addEventListener(f, b);
}
function vl(e, t) {
  const n = window.getComputedStyle(e),
    i = (S) => (n[S] || "").split(", "),
    s = i(`${Be}Delay`),
    o = i(`${Be}Duration`),
    r = Di(s, o),
    l = i(`${Ct}Delay`),
    c = i(`${Ct}Duration`),
    f = Di(l, c);
  let d = null,
    p = 0,
    b = 0;
  t === Be
    ? r > 0 && ((d = Be), (p = r), (b = o.length))
    : t === Ct
    ? f > 0 && ((d = Ct), (p = f), (b = c.length))
    : ((p = Math.max(r, f)),
      (d = p > 0 ? (r > f ? Be : Ct) : null),
      (b = d ? (d === Be ? o.length : c.length) : 0));
  const E =
    d === Be && /\b(transform|all)(,|$)/.test(i(`${Be}Property`).toString());
  return { type: d, timeout: p, propCount: b, hasTransform: E };
}
function Di(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, i) => Bi(n) + Bi(e[i])));
}
function Bi(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function yl() {
  return document.body.offsetHeight;
}
const xl = ["ctrl", "shift", "alt", "meta"],
  wl = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => xl.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Ht =
    (e, t) =>
    (n, ...i) => {
      for (let s = 0; s < t.length; s++) {
        const o = wl[t[s]];
        if (o && o(n, t)) return;
      }
      return e(n, ...i);
    },
  Dn = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e._vod = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : Et(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: i }) {
      !t != !n &&
        (i
          ? t
            ? (i.beforeEnter(e), Et(e, !0), i.enter(e))
            : i.leave(e, () => {
                Et(e, !1);
              })
          : Et(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Et(e, t);
    },
  };
function Et(e, t) {
  e.style.display = t ? e._vod : "none";
}
const Cl = oe({ patchProp: pl }, el);
let Hi;
function El() {
  return Hi || (Hi = Or(Cl));
}
const Tl = (...e) => {
  const t = El().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (i) => {
      const s = Il(i);
      if (!s) return;
      const o = t._component;
      !F(o) && !o.render && !o.template && (o.template = s.innerHTML),
        (s.innerHTML = "");
      const r = n(s, !1, s instanceof SVGElement);
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        r
      );
    }),
    t
  );
};
function Il(e) {
  return ee(e) ? document.querySelector(e) : e;
}
const Al = {
    class:
      "fixed z-40 top-0 left-0 w-full space-x-1 overflow-x-auto h-16 md:h-20 flex justify-around items-center bg-neutral-900 bg-opacity-95 text-neutral-100 md:text-lg text-xs",
  },
  Pl = Rr(
    '<a href="https://www.saatchiart.com/paceprc" target="_blank" class="">SaatchiArt</a><a href="https://www.instagram.com/macmeart/" target="_blank" class="h-6 md:h-8"><svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.3z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg></a>',
    2
  ),
  Ll = {
    __name: "Header",
    props: ["lang"],
    setup(e) {
      function t(n) {
        document.getElementById(n).scrollIntoView({ behavior: "smooth" });
      }
      return (n, i) => (
        ue(),
        Ae("div", Al, [
          L(
            "a",
            {
              onClick: i[0] || (i[0] = Ht((s) => t("statement"), ["prevent"])),
              class: "cursor-pointer",
            },
            ie(e.lang == "eng" ? "Statement" : "Presentazione"),
            1
          ),
          L(
            "a",
            {
              onClick: i[1] || (i[1] = Ht((s) => t("gallery"), ["prevent"])),
              class: "cursor-pointer",
            },
            ie(e.lang == "eng" ? "Gallery" : "Galleria"),
            1
          ),
          L(
            "a",
            {
              onClick: i[2] || (i[2] = Ht((s) => t("contact"), ["prevent"])),
              class: "cursor-pointer",
            },
            ie(e.lang == "eng" ? "Contact" : "Contatta"),
            1
          ),
          Pl,
          L(
            "a",
            {
              onClick:
                i[3] ||
                (i[3] = Ht(
                  (s) => n.$emit("changeLang", e.lang == "eng" ? "ita" : "eng"),
                  ["prevent"]
                )),
              class:
                "cursor-pointer uppercase border-2 px-1 rounded-sm border-neutral-100",
            },
            ie(e.lang == "eng" ? "ita" : "eng"),
            1
          ),
        ])
      );
    },
  },
  Ml = "/macmeart/paintings/black-rain-in-gl/main.jpg",
  Ol = "/macmeart/paintings/corruption/main.jpg",
  $l = "/macmeart/paintings/empathy-would-be-the-answer/main.jpg",
  Fl = "/macmeart/paintings/to-the-absurd/main.jpg",
  zl = "/macmeart/paintings/the-last-supper/main.jpg";
const hn = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [i, s] of t) n[i] = s;
    return n;
  },
  Sl = {
    id: "hero",
    class:
      "bg-black w-full h-screen flex justify-center items-center relative overflow-hidden",
  },
  Nl = {
    __name: "Hero",
    emits: ["imagesLoaded"],
    setup(e, { emit: t }) {
      const n = Ve(null),
        i = Ve("");
      let s = 0;
      const o = 5;
      function r() {
        s++,
          o == s &&
            (t("imagesLoaded"),
            setTimeout(() => {
              l([..."macmeart".split(""), "macmeart", "macmeart"], 0);
            }, 500));
      }
      function l(c, f, d = !1) {
        f == c.length && (d = !0),
          (f = f % c.length),
          f % 2 == 0 && (n.value = f / 2),
          d || (i.value = c[f]),
          f++,
          setTimeout(() => {
            l(c, f, d);
          }, 1e3);
      }
      return (c, f) => (
        ue(),
        Ae("div", Sl, [
          L(
            "img",
            {
              class: "pointer-events-none",
              style: Ne([
                n.value == 0 ? "opacity:1" : "opacity:0; animation:none",
              ]),
              src: Ml,
              onLoad: r,
            },
            null,
            36
          ),
          L(
            "img",
            {
              class: "pointer-events-none",
              style: Ne([
                n.value == 1 ? "opacity:1" : "opacity:0; animation:none",
              ]),
              src: Ol,
              onLoad: r,
            },
            null,
            36
          ),
          L(
            "img",
            {
              class: "pointer-events-none",
              style: Ne([
                n.value == 2 ? "opacity:1" : "opacity:0; animation:none",
              ]),
              src: $l,
              onLoad: r,
            },
            null,
            36
          ),
          L(
            "img",
            {
              class: "pointer-events-none",
              style: Ne([
                n.value == 3 ? "opacity:1" : "opacity:0; animation:none",
              ]),
              src: Fl,
              onLoad: r,
            },
            null,
            36
          ),
          L(
            "img",
            {
              class: "pointer-events-none",
              style: Ne([
                n.value == 4 ? "opacity:1" : "opacity:0; animation:none",
              ]),
              src: zl,
              onLoad: r,
            },
            null,
            36
          ),
          L(
            "span",
            {
              style: {
                filter: "invert(1)",
                "mix-blend-mode": "difference",
                "text-shadow": "0px 0px 10px black",
              },
              class: _t([
                "uppercase font-bold z-10",
                [i.value == "macmeart" ? "text-[15vw]" : "text-[40vh]"],
              ]),
            },
            ie(i.value),
            3
          ),
        ])
      );
    },
  },
  jl = hn(Nl, [["__scopeId", "data-v-595e311c"]]),
  qs = "/macmeart/paintings/profile/main.jpg",
  Rl = {
    class: "flex flex-col items-center justify-center min-h-screen",
    id: "statement",
  },
  kl = { class: "py-12" },
  Dl = {
    class: "text-center text-2xl text-neutral-900 font-serif italic py-8",
  },
  Bl = L(
    "img",
    {
      src: qs,
      class: "w-1/2 md:w-[300px] block m-auto border-2 border-neutral-900 p-2",
    },
    null,
    -1
  ),
  Hl = {
    class:
      "overflow-auto mt-8 w-4/5 max-w-[60em] font-serif italic text-neutral-800",
  },
  ql = { class: "before:content-[open-quote] after:content-[close-quote]" },
  Ul = L("br", { class: "mb-2" }, null, -1),
  Kl = L("br", { class: "mb-2" }, null, -1),
  Wl = L("br", { class: "mb-2" }, null, -1),
  Vl = L("br", { class: "mb-2" }, null, -1),
  Jl = { class: "before:content-[open-quote] after:content-[close-quote]" },
  Yl = L("br", { class: "mb-2" }, null, -1),
  Xl = L("br", { class: "mb-2" }, null, -1),
  Zl = L("br", { class: "mb-2" }, null, -1),
  Ql = L("br", { class: "mb-2" }, null, -1),
  Gl = {
    __name: "Statement",
    props: ["lang"],
    setup(e) {
      return (t, n) => (
        ue(),
        Ae("div", Rl, [
          L("div", kl, [
            L(
              "h2",
              Dl,
              ie(e.lang == "eng" ? "Artist's Statement" : "Presentazione"),
              1
            ),
            Bl,
          ]),
          L("div", Hl, [
            $n(
              L(
                "p",
                ql,
                [
                  xe(
                    " Le mie opere vogliono generare un'immersione olistica nelle vite umane e in particolare nelle vite di chi sperimenta realtà anche differenti dalle nostre e sono guidate dalla speranza di stimolare in chi le osserva un principio di empatia che avvicini le persone e le renda consapevoli delle emozioni altrui. "
                  ),
                  Ul,
                  xe(
                    " L'alfabeto delle mie opere deriva dalla vita vissuta, che ci passa davanti e che non possiamo fingere di non vedere. Abbiamo tutti delle responsabilità per ciò che accade oggi e la denuncia, in qualsiasi modo venga espressa, ci offre l'illusione di non essere del tutto complici di quello che si offre ai nostri occhi quotidianamente. "
                  ),
                  Kl,
                  xe(
                    " Il mio lavoro è guidato dal bisogno di trovare un senso alla quotidianità attorno a me, per quanto essa appaia ingiusta, contraddittoria e assurda. Le immagini, le parole, i contenuti vengono raccolti in narrazioni che rappresentano la nostra società consumista, individualista, capitalista e gli oggetti, i personaggi, le evocazioni di espressioni culturali e artistiche passate e presenti si intrecciano in un turbine che emula il costante movimento della vita umana, sempre diversa ma in fondo sempre uguale nel tempo. "
                  ),
                  Wl,
                  xe(
                    " Le sopraffazioni, lo sfruttmento, il potere, l'egoismo si ripetono sempre simili nel corso della storia ma anche sempre più potenti e devastanti e la soluzione per raggiungere un'umanità migliore è sempre davanti a noi, ma la nostra individualità non ci permette mai di raggiungerla. Gli artisti passati e alcuni artisti contemporanei influenza fortemente il mio lavoro. I materiali come la tela, la carta, le vernici, i ritagli di lettere ricomposti in anagrammi e altri materiali raccolti per caso, mi permettono di rievocare atmosfere di altre opere e di creare composizioni che appaiono in un primo momento disaggregate e confuse ma che, ad un osservatore pià attento, rivelano storie, messaggi e associazioni chiare e dirette. Questi temi vengono trattati a volte con ironia o sarcasmo, altre con spirito riflessivo e analitico. "
                  ),
                  Vl,
                  xe(
                    " Le mie esperienze nella fotografia e nella pittura figurativa sono alla base dei miei lavori e rappresentano comunque ancora una buona parte della mia attività creativa. Vi ringrazio per l'attenzione prestatmi e ringrazio gli importanti artisti contemporanei che mi hanno dato il permessi di citarli in alcuni dei miei lavori. "
                  ),
                ],
                512
              ),
              [[Dn, e.lang == "ita"]]
            ),
            $n(
              L(
                "p",
                Jl,
                [
                  xe(
                    " My works want to generate a holistic immersion in lives and particularly in the lives of those who experience reality as well different from ours and are guided by the hope of stimulating in those who observe them a principle of empathy that brings people closer e make them aware of the emotions of others. "
                  ),
                  Yl,
                  xe(
                    " The alphabet of my works derives from lived life, which passes through it ahead and that we can not pretend not to see. We all have of the responsibilities for what happens today and the denunciation, in however it is expressed, it gives us the illusion of not being completely accomplices of what is offered to our eyes daily basis. "
                  ),
                  Xl,
                  xe(
                    " My work is driven by the need to make sense of everyday life around me, however unfair it may seem, contradictory and absurd. The images, the words, the contents are collected in narratives that represent our society consumerist, individualist, capitalist and the objects, the characters, the evocations of past cultural and artistic expressions e present intertwine in a whirlwind that emulates the constant movement of human life, always different but basically always the same in time. "
                  ),
                  Zl,
                  xe(
                    " Overwhelm, exploitation, power, selfishness yes always repeat similar throughout history but also more and more powerful and devastating and the solution to achieve a humanity best is always ahead of us, but our individuality is not there never allows you to reach it. Past artists and some artists contemporaries strongly influence my work. The materials like the canvas, the paper, the paints, the scraps of letters recomposed in anagrams and other materials collected by chance, allow me to evoke atmospheres of other works and to create compositions that appear at first disaggregated and confused but which, for a more attentive observer, they reveal stories, messages and associations clear and direct. These themes are sometimes treated with irony or sarcasm, others with a reflective and analytical spirit. "
                  ),
                  Ql,
                  xe(
                    " My experiences in photography and figurative painting are the basis of my works and still represent a good part of my creative activity. Thank you for your attention and I thank the important contemporary artists who have given me the permission to quote them in some of my works. "
                  ),
                ],
                512
              ),
              [[Dn, e.lang == "eng"]]
            ),
          ]),
        ])
      );
    },
  },
  ea = [
    {
      titolo: "Empathy would be the answer",
      anno: "2021",
      dimensioni: "100 x 100",
      descrizioneEnglish: `Blah...blah...blah... Powerful people talk and talk and talk about values, principles and what is right, but their actions converge on what is important to themselves only. Empathy and compassion are not inherent in the human being.

    I use different materials and techniques (canvass, paper, oil) ombined with original expedients (such as the use of the anagram) to express the hypocrisy that is leading the human race to its self-destruction.
    
    "Empathy would be the answer" shows the hypocrisy of the leaders and the distance between different worlds, when it would be enough to have an empathic proximity between people to easily aspire to a better world`,
      descrizioneItaliano: "descrizione",
      numeroDettagli: 2,
      path: "/macmeart/paintings/empathy-would-be-the-answer",
      centratura: "50% 50%",
      alt: "Loading",
      materialiItaliano: "Giornali e pittura su tela",
      materialiEnglish: "Paper and paint on canvas",
    },
    {
      titolo: "The last supper",
      anno: "2021",
      dimensioni: "100 x 100",
      descrizioneEnglish: `The world does not change with words. Man does not change with words. Politicians, big companies, States, hide their real &quot;to be&quot; behind a mask of &quot;to have&quot;. Search for power, vanity, selfishness, violence, greed, are hidden behind the mask.
    I use materials and techniques already seen in the artworks of important Italian artists of the previous century (i.e. Emilio Vedova) combined with original expedients (such as the use of the anagram) to sarcastically express the hypocrisy that is carrying human being to its self-destruction.
    &quot;The Last Supper (masquerade)&quot; shows a Minjun Christ laughing in front of human misery and all its false values.`,
      descrizioneItaliano: `Il mondo non cambia a parole. L'uomo non cambia a parole. I politici, le multinazionali, gli stati nascondono il loro vero &quot;essere&quot; dietro una maschera di &quot;avere&quot;. La ricerca del potere, la vanità, l'egoismo, la violenza, l'avarizia sono nascoste dietro la maschera.
    Uso materiali e tecniche già viste nei lavori di importanti artisti italiani del secolo scroso (i.e. Emilio Vedova) combinati ad originali espedienti (come l'uso di anagrammi) per esprimere sarcasticamente l'ipocrisia che sta trascinando l'essere umano alla sua autodistruzione. &quot;The Last Supper (masquerade)&quot;
    mostra un Cristo di Minjun che ride davanti all'umana miseria e a tutti i suoi falsi valori.`,
      numeroDettagli: 5,
      path: "/macmeart/paintings/the-last-supper",
      centratura: "50% 50%",
      alt: "Loading",
      materialiItaliano: "Giornali e pittura su tela",
      materialiEnglish: "Paper and paint on canvas",
    },
    {
      titolo: "Corruption",
      anno: "2021",
      dimensioni: "100 x 100",
      descrizioneEnglish: "description",
      descrizioneItaliano: "descrizione",
      numeroDettagli: 6,
      path: "/macmeart/paintings/corruption",
      centratura: "50% 50%",
      alt: "Loading",
      materialiItaliano: "Giornali e pittura su tela",
      materialiEnglish: "Paper and paint on canvas",
    },
    {
      titolo: "To the Absurd",
      anno: "2021",
      dimensioni: "100 x 100",
      descrizioneEnglish: `The world revolves around its own laws that are not the laws of the Man. Like Sisyphus, everyone climbs their own mountain but without caring for others and the lack of any goal.
    
    I use materials and techniques also used by main Italian artists of the previous century (Emilio Vedova, Mimmo Rotella,..) combined with original expedients (such as the use of the anagram) to express the misery of human being and his selfishness.
    
    "To the Absurd" shows the enormous distance between people, often running towards false myths`,
      descrizioneItaliano: "descrizione",
      numeroDettagli: 3,
      path: "/macmeart/paintings/to-the-absurd",
      centratura: "50% 50%",
      alt: "Loading",
      materialiItaliano: "Giornali e pittura su tela",
      materialiEnglish: "Paper and paint on canvas",
    },
    {
      titolo: "Black rain in Glasgow",
      anno: "2021",
      dimensioni: "100 x 100",
      descrizioneEnglish: "description",
      descrizioneItaliano: `Glasgow, città oscura e antica e nel contempo città contemporanea e culla di arte e di design. La sua
    architettura gotica e quella industriale, che hanno plasmato la sua estetica e contribuito alla sua passata
    buia reputazione, domina la scena con strutture oscure e imponenti, che ritagliano uno skyline in cui si
    alternano contorni medioevali con linee e spazi disegnati dai mattoni rossi della drammatica rivoluzione
    industriale.
    L&#39;atmosfera cupa della città, che si riflette talvolta nelle sue passate scene artistiche, musicali e letterarie,
    spesso inquietanti, si riflette nelle costruzioni e nelle lapidi della sua necropoli sulla collina, così come negli
    edifici vittoriani del centro.
    La pioggia scura non ripulisce Glasgow, ma ne rende più vividi i contrasti, esaltando le disparità e le
    contraddizioni di una città in bilico tra passato e futuro, tra storia e modernità, tra vecchi pub e nuove
    cittadelle universitarie, tra vecchie archeologie industriali e nuove scene artistiche e culturali.`,
      numeroDettagli: 0,
      path: "/macmeart/paintings/black-rain-in-gl",
      centratura: "20% 80%",
      alt: "Loading",
      materialiItaliano: "Pittura su tela",
      materialiEnglish: "Paint on canvas",
    },
    {
      titolo: "White city Black city",
      anno: "2022",
      dimensioni: "100 x 100",
      descrizioneEnglish: "description",
      descrizioneItaliano: `Palazzi che poggiano incerte fondamenta sulla sofferenza, la discriminazione, l’ignoranza e la povertà.
    Una vita inferiore, criminale, malata.
    Palazzi che poggiano le fondamenta sull’oro delle rapine legalizzate della finanza; bellezza chirurgica,
    educazione da web, onestà disonesta, felicità di plastica, segregazione comoda.
    Per entrambi un futuro incerto.`,
      numeroDettagli: 0,
      path: "/macmeart/paintings/white-city-black-city",
      centratura: "10% 50%",
      alt: "Loading",
      materialiItaliano: "Pittura su tela",
      materialiEnglish: "Paint on canvas",
    },
  ];
const ta = { id: "gallery", class: "scroll-my-24" },
  na = {
    class:
      "block m-auto w-fit uppercase border-neutral-900 text-neutral-900 text-2xl border-2 md:text-5xl md:border-4 font-serif py-4 px-12 my-20 tracking-widest",
  },
  ia = { class: "gallery" },
  sa = ["onClick"],
  oa = {
    __name: "Gallery",
    props: ["lang"],
    setup(e) {
      const t = Ve([]),
        n = Ve([
          "one",
          "two",
          "three",
          "four",
          "five",
          "six",
          "seven",
          "eight",
          "nine",
          "ten",
          "eleven",
          "twelve",
        ]);
      return (
        ea.forEach((i) => {
          t.value.push(i);
        }),
        (i, s) => (
          ue(),
          Ae(
            ge,
            null,
            [
              L("div", ta, [
                L("h1", na, ie(e.lang == "eng" ? "Gallery" : "Galleria"), 1),
              ]),
              L("div", ia, [
                (ue(!0),
                Ae(
                  ge,
                  null,
                  Ps(
                    t.value,
                    (o, r) => (
                      ue(),
                      Ae(
                        "div",
                        {
                          class: "shadow-lg cursor-pointer",
                          style: Ne([
                            "grid-area: " + n.value[r],
                            `background: url(${o.path + "/main.jpg"}) ${
                              o.centratura
                            }`,
                            "background-size:cover",
                          ]),
                          onClick: (l) => i.$emit("pictureSelected", o),
                        },
                        null,
                        12,
                        sa
                      )
                    )
                  ),
                  256
                )),
              ]),
            ],
            64
          )
        )
      );
    },
  },
  ra = hn(oa, [["__scopeId", "data-v-1f13e114"]]);
const la = {
    class:
      "w-screen h-screen fixed top-0 left-0 z-50 bg-slate-100 flex flex-col items-center justify-center",
  },
  aa = {
    __name: "LoadingOverlay",
    setup(e) {
      const t = Ve(!1);
      return (n, i) => (
        ue(),
        Ae("div", la, [
          $n(
            L(
              "img",
              {
                src: qs,
                id: "loading-profile",
                class:
                  "w-1/2 md:w-[300px] block m-auto border-2 border-neutral-900 p-2",
                onLoad: i[0] || (i[0] = () => (t.value = !0)),
              },
              null,
              544
            ),
            [[Dn, t.value]]
          ),
        ])
      );
    },
  },
  ca = hn(aa, [["__scopeId", "data-v-2a5d0c51"]]),
  ua = {
    id: "contact",
    class: "flex flex-col items-center justify-center my-28",
  },
  fa = { class: "text-center text-2xl font-serif italic text-neutral-900" },
  da = L(
    "span",
    { class: "text-center text-lg font-serif italic text-neutral-800 pt-8" },
    "macmeart@proton.me",
    -1
  ),
  ha = {
    __name: "Contact",
    props: ["lang"],
    setup(e) {
      return (t, n) => (
        ue(),
        Ae("div", ua, [
          L("h2", fa, ie(e.lang == "eng" ? "Contact" : "Contatta"), 1),
          da,
        ])
      );
    },
  },
  pa = {
    class:
      "h-screen w-screen fixed top-0 left-0 z-50 bg-neutral-100 overflow-auto",
  },
  ma = {
    class:
      "text-center text-3xl font-serif italic mt-12 md:mt-16 mb-8 text-neutral-900",
  },
  ga = { class: "flex flex-col justify-center items-center" },
  _a = ["src"],
  ba = {
    class: "flex w-full h-fit items-center justify-center flex-wrap gap-2",
  },
  va = ["src", "onClick"],
  ya = {
    class: "text-center text-2xl font-serif italic mt-8 text-neutral-900",
  },
  xa = {
    class:
      "block m-auto text-center my-8 text-neutral-800 w-4/5 max-w-[60em] font-serif italic before:content-[open-quote] after:content-[close-quote]",
  },
  wa = { class: "text-center text-2xl font-serif italic text-neutral-900" },
  Ca = {
    class:
      "block m-auto text-center my-8 text-neutral-800 w-4/5 max-w-[60em] font-serif italic",
  },
  Ea = { class: "text-center text-2xl font-serif italic text-neutral-900" },
  Ta = {
    class:
      "block m-auto text-center my-8 text-neutral-800 w-4/5 max-w-[60em] font-serif italic",
  },
  Ia = { class: "text-center text-2xl font-serif italic text-neutral-900" },
  Aa = {
    class:
      "block m-auto text-center my-8 text-neutral-800 w-4/5 max-w-[60em] font-serif italic",
  },
  Pa = L("div", { class: "mt-28" }, null, -1),
  La = {
    __name: "PictureModal",
    props: [
      "visible",
      "lang",
      "titolo",
      "anno",
      "dimensioni",
      "materialiItaliano",
      "materialiEnglish",
      "descrizioneItaliano",
      "descrizioneEnglish",
      "path",
      "centratura",
      "alt",
      "numeroDettagli",
    ],
    setup(e) {
      const t = e,
        n = [`${t.path}/main.jpg`];
      for (let p = 0; p < t.numeroDettagli; p++)
        n.push(`${t.path}/detail-${p + 1}.jpg`);
      const i = Ve(n[0]);
      cn(() => {
        window.addEventListener("keydown", s);
      });
      const s = function (p) {
        if (!t.visible) return;
        const b = n.indexOf(i.value);
        p.key == "ArrowRight"
          ? n[b + 1] && (i.value = n[b + 1])
          : p.key == "ArrowLeft" && n[b - 1] && (i.value = n[b - 1]);
      };
      let o,
        r,
        l = !1;
      function c(p) {
        (o = p.touches[0].clientX), p.touches.length > 1 && (l = !0);
      }
      function f(p) {
        var b;
        r = (b = p.touches[p.touches.length - 1]) == null ? void 0 : b.clientX;
      }
      function d() {
        if (l == !0) {
          setTimeout(() => {
            l = !1;
          }, 400);
          return;
        }
        let p = new Event("keydown", { bubbles: !0 });
        o - r < -80
          ? ((p.key = "ArrowLeft"), document.dispatchEvent(p))
          : r &&
            o - r > 80 &&
            ((p.key = "ArrowRight"), document.dispatchEvent(p)),
          (o = 0),
          (r = 0);
      }
      return (p, b) => (
        ue(),
        Ae("div", pa, [
          L(
            "div",
            {
              onClick: b[0] || (b[0] = (E) => p.$emit("closeModal")),
              class:
                "cursor-pointer inline-flex justify-center items-center h-6 w-6 sm:h-10 sm:w-10 fixed top-3 right-3 sm:left-3 border-b-2 border-neutral-900",
            },
            " ✕"
          ),
          L("h2", ma, ie(e.titolo), 1),
          L("div", ga, [
            L(
              "img",
              {
                src: i.value,
                class: "max-h-[80vh] cursor-pointer pb-6",
                onTouchstart: c,
                onTouchmove: f,
                onTouchend: d,
              },
              null,
              40,
              _a
            ),
            L("div", ba, [
              (ue(),
              Ae(
                ge,
                null,
                Ps(n, (E) =>
                  L(
                    "img",
                    {
                      src: E,
                      onClick: (S) => (i.value = E),
                      class: _t([
                        "shrink h-20 cursor-pointer",
                        { " opacity-50": E == i.value },
                      ]),
                    },
                    null,
                    10,
                    va
                  )
                ),
                64
              )),
            ]),
          ]),
          L("h3", ya, ie(e.lang == "eng" ? "Description" : "Descrizione"), 1),
          L(
            "span",
            xa,
            ie(
              " " +
                (e.lang == "eng"
                  ? e.descrizioneEnglish
                  : e.descrizioneItaliano) +
                " "
            ),
            1
          ),
          L("h3", wa, ie(e.lang == "eng" ? "Year" : "Anno"), 1),
          L("span", Ca, ie(e.anno), 1),
          L("h3", Ea, ie(e.lang == "eng" ? "Size" : "Dimensioni"), 1),
          L("span", Ta, ie(e.dimensioni), 1),
          L("h3", Ia, ie(e.lang == "eng" ? "Materials" : "Materiali"), 1),
          L(
            "span",
            Aa,
            ie(e.lang == "eng" ? e.materialiEnglish : e.materialiItaliano),
            1
          ),
          Pa,
        ])
      );
    },
  };
const Ma = {
    __name: "MainPage",
    setup(e) {
      const t = Ve(!0);
      let n = sn({ picture: void 0 }),
        i = Ve("eng");
      function s() {
        window.history.pushState(
          null,
          null,
          "/macmeart/" + n.picture.titolo.split(" ").join("-")
        );
      }
      function o() {
        window.history.replaceState(null, null, "/macmeart");
      }
      return (
        cn(() => {
          window.addEventListener("popstate", () => {
            (n.visible = !1),
              window.history.replaceState(null, null, "/macmeart");
          }),
            window.history.replaceState(null, null, "/macmeart");
        }),
        (r, l) => {
          var c, f;
          return (
            ue(),
            Ae(
              "div",
              {
                class: _t([
                  "h-screen relative bg-neutral-100",
                  [
                    t.value || ((c = me(n)) != null && c.visible)
                      ? "overflow-hidden"
                      : "overflow-auto",
                  ],
                ]),
              },
              [
                Q(
                  si,
                  { name: "vanish" },
                  {
                    default: vs(() => [
                      t.value ? (ue(), Qt(ca, { key: 0 })) : Pi("", !0),
                    ]),
                    _: 1,
                  }
                ),
                Q(
                  Ll,
                  {
                    lang: me(i),
                    onChangeLang:
                      l[0] ||
                      (l[0] = (d) => {
                        se(i) ? (i.value = d) : (i = d);
                      }),
                  },
                  null,
                  8,
                  ["lang"]
                ),
                Q(jl, {
                  onImagesLoaded: l[1] || (l[1] = (d) => (t.value = !1)),
                }),
                Q(Gl, { lang: me(i) }, null, 8, ["lang"]),
                Q(
                  ra,
                  {
                    lang: me(i),
                    onPictureSelected:
                      l[2] ||
                      (l[2] = (d) => {
                        (me(n).visible = !0), (me(n).picture = d), s();
                      }),
                  },
                  null,
                  8,
                  ["lang"]
                ),
                (f = me(n)) != null && f.visible
                  ? (ue(),
                    Qt(
                      La,
                      ks({ key: 0, lang: me(i) }, me(n).picture, {
                        visible: me(n).visible,
                        onCloseModal:
                          l[3] ||
                          (l[3] = (d) => {
                            (me(n).visible = !1), o();
                          }),
                      }),
                      null,
                      16,
                      ["lang", "visible"]
                    ))
                  : Pi("", !0),
                Q(ha, { lang: me(i) }, null, 8, ["lang"]),
              ],
              2
            )
          );
        }
      );
    },
  },
  Oa = hn(Ma, [["__scopeId", "data-v-aaaa2634"]]),
  $a = {
    __name: "App",
    setup(e) {
      return (t, n) => (ue(), Qt(Oa));
    },
  },
  Us = Tl($a);
Us.config.globalProperties.console = window.console;
Us.mount("#app");
