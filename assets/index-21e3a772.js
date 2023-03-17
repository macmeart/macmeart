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
function Hn(e, t) {
  const n = Object.create(null),
    i = e.split(",");
  for (let s = 0; s < i.length; s++) n[i[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
function je(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n],
        s = G(i) ? Qs(i) : je(i);
      if (s) for (const o in s) t[o] = s[o];
    }
    return t;
  } else {
    if (G(e)) return e;
    if (W(e)) return e;
  }
}
const Vs = /;(?![^(]*\))/g,
  Js = /:([^]+)/,
  Ys = /\/\*.*?\*\//gs;
function Qs(e) {
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
function Ft(e) {
  let t = "";
  if (G(e)) t = e;
  else if ($(e))
    for (let n = 0; n < e.length; n++) {
      const i = Ft(e[n]);
      i && (t += i + " ");
    }
  else if (W(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Xs =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Zs = Hn(Xs);
function qi(e) {
  return !!e || e === "";
}
const re = (e) =>
    G(e)
      ? e
      : e == null
      ? ""
      : $(e) || (W(e) && (e.toString === Vi || !F(e.toString)))
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
      : W(t) && !$(t) && !Ji(t)
      ? String(t)
      : t,
  K = {},
  ut = [],
  Ie = () => {},
  Gs = () => !1,
  eo = /^on[^a-z]/,
  Xt = (e) => eo.test(e),
  Bn = (e) => e.startsWith("onUpdate:"),
  se = Object.assign,
  kn = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  to = Object.prototype.hasOwnProperty,
  N = (e, t) => to.call(e, t),
  $ = Array.isArray,
  ft = (e) => Zt(e) === "[object Map]",
  Ki = (e) => Zt(e) === "[object Set]",
  F = (e) => typeof e == "function",
  G = (e) => typeof e == "string",
  qn = (e) => typeof e == "symbol",
  W = (e) => e !== null && typeof e == "object",
  Wi = (e) => W(e) && F(e.then) && F(e.catch),
  Vi = Object.prototype.toString,
  Zt = (e) => Vi.call(e),
  no = (e) => Zt(e).slice(8, -1),
  Ji = (e) => Zt(e) === "[object Object]",
  Un = (e) => G(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  kt = Hn(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Gt = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  io = /-(\w)/g,
  pt = Gt((e) => e.replace(io, (t, n) => (n ? n.toUpperCase() : ""))),
  so = /\B([A-Z])/g,
  _t = Gt((e) => e.replace(so, "-$1").toLowerCase()),
  Yi = Gt((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  hn = Gt((e) => (e ? `on${Yi(e)}` : "")),
  Pt = (e, t) => !Object.is(e, t),
  pn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Wt = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  oo = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  ro = (e) => {
    const t = G(e) ? Number(e) : NaN;
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
let Ce;
class ao {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Ce),
      !t && Ce && (this.index = (Ce.scopes || (Ce.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Ce;
      try {
        return (Ce = this), t();
      } finally {
        Ce = n;
      }
    }
  }
  on() {
    Ce = this;
  }
  off() {
    Ce = this.parent;
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
function co(e, t = Ce) {
  t && t.active && t.effects.push(e);
}
function uo() {
  return Ce;
}
const Kn = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  Qi = (e) => (e.w & We) > 0,
  Xi = (e) => (e.n & We) > 0,
  fo = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= We;
  },
  ho = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let i = 0; i < t.length; i++) {
        const s = t[i];
        Qi(s) && !Xi(s) ? s.delete(e) : (t[n++] = s),
          (s.w &= ~We),
          (s.n &= ~We);
      }
      t.length = n;
    }
  },
  En = new WeakMap();
let Et = 0,
  We = 1;
const Tn = 30;
let Ee;
const rt = Symbol(""),
  In = Symbol("");
class Wn {
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
    let t = Ee,
      n = Ue;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = Ee),
        (Ee = this),
        (Ue = !0),
        (We = 1 << ++Et),
        Et <= Tn ? fo(this) : fi(this),
        this.fn()
      );
    } finally {
      Et <= Tn && ho(this),
        (We = 1 << --Et),
        (Ee = this.parent),
        (Ue = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Ee === this
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
const Zi = [];
function bt() {
  Zi.push(Ue), (Ue = !1);
}
function vt() {
  const e = Zi.pop();
  Ue = e === void 0 ? !0 : e;
}
function de(e, t, n) {
  if (Ue && Ee) {
    let i = En.get(e);
    i || En.set(e, (i = new Map()));
    let s = i.get(n);
    s || i.set(n, (s = Kn())), Gi(s);
  }
}
function Gi(e, t) {
  let n = !1;
  Et <= Tn ? Xi(e) || ((e.n |= We), (n = !Qi(e))) : (n = !e.has(Ee)),
    n && (e.add(Ee), Ee.deps.push(e));
}
function Ne(e, t, n, i, s, o) {
  const r = En.get(e);
  if (!r) return;
  let l = [];
  if (t === "clear") l = [...r.values()];
  else if (n === "length" && $(e)) {
    const c = Number(i);
    r.forEach((f, h) => {
      (h === "length" || h >= c) && l.push(f);
    });
  } else
    switch ((n !== void 0 && l.push(r.get(n)), t)) {
      case "add":
        $(e)
          ? Un(n) && l.push(r.get("length"))
          : (l.push(r.get(rt)), ft(e) && l.push(r.get(In)));
        break;
      case "delete":
        $(e) || (l.push(r.get(rt)), ft(e) && l.push(r.get(In)));
        break;
      case "set":
        ft(e) && l.push(r.get(rt));
        break;
    }
  if (l.length === 1) l[0] && Pn(l[0]);
  else {
    const c = [];
    for (const f of l) f && c.push(...f);
    Pn(Kn(c));
  }
}
function Pn(e, t) {
  const n = $(e) ? e : [...e];
  for (const i of n) i.computed && di(i);
  for (const i of n) i.computed || di(i);
}
function di(e, t) {
  (e !== Ee || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const po = Hn("__proto__,__v_isRef,__isVue"),
  es = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(qn)
  ),
  mo = Vn(),
  go = Vn(!1, !0),
  _o = Vn(!0),
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
        bt();
        const i = R(this)[t].apply(this, n);
        return vt(), i;
      };
    }),
    e
  );
}
function vo(e) {
  const t = R(this);
  return de(t, "has", e), t.hasOwnProperty(e);
}
function Vn(e = !1, t = !1) {
  return function (i, s, o) {
    if (s === "__v_isReactive") return !e;
    if (s === "__v_isReadonly") return e;
    if (s === "__v_isShallow") return t;
    if (s === "__v_raw" && o === (e ? (t ? So : os) : t ? ss : is).get(i))
      return i;
    const r = $(i);
    if (!e) {
      if (r && N(hi, s)) return Reflect.get(hi, s, o);
      if (s === "hasOwnProperty") return vo;
    }
    const l = Reflect.get(i, s, o);
    return (qn(s) ? es.has(s) : po(s)) || (e || de(i, "get", s), t)
      ? l
      : ie(l)
      ? r && Un(s)
        ? l
        : l.value
      : W(l)
      ? e
        ? rs(l)
        : tn(l)
      : l;
  };
}
const yo = ts(),
  xo = ts(!0);
function ts(e = !1) {
  return function (n, i, s, o) {
    let r = n[i];
    if (mt(r) && ie(r) && !ie(s)) return !1;
    if (
      !e &&
      (!Vt(s) && !mt(s) && ((r = R(r)), (s = R(s))), !$(n) && ie(r) && !ie(s))
    )
      return (r.value = s), !0;
    const l = $(n) && Un(i) ? Number(i) < n.length : N(n, i),
      c = Reflect.set(n, i, s, o);
    return (
      n === R(o) && (l ? Pt(s, r) && Ne(n, "set", i, s) : Ne(n, "add", i, s)), c
    );
  };
}
function wo(e, t) {
  const n = N(e, t);
  e[t];
  const i = Reflect.deleteProperty(e, t);
  return i && n && Ne(e, "delete", t, void 0), i;
}
function Co(e, t) {
  const n = Reflect.has(e, t);
  return (!qn(t) || !es.has(t)) && de(e, "has", t), n;
}
function Eo(e) {
  return de(e, "iterate", $(e) ? "length" : rt), Reflect.ownKeys(e);
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
  Io = se({}, ns, { get: go, set: xo }),
  Jn = (e) => e,
  en = (e) => Reflect.getPrototypeOf(e);
function jt(e, t, n = !1, i = !1) {
  e = e.__v_raw;
  const s = R(e),
    o = R(t);
  n || (t !== o && de(s, "get", t), de(s, "get", o));
  const { has: r } = en(s),
    l = i ? Jn : n ? Xn : At;
  if (r.call(s, t)) return l(e.get(t));
  if (r.call(s, o)) return l(e.get(o));
  e !== s && e.get(t);
}
function Nt(e, t = !1) {
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
  return en(t).has.call(t, e) || (t.add(e), Ne(t, "add", e, e)), this;
}
function mi(e, t) {
  t = R(t);
  const n = R(this),
    { has: i, get: s } = en(n);
  let o = i.call(n, e);
  o || ((e = R(e)), (o = i.call(n, e)));
  const r = s.call(n, e);
  return (
    n.set(e, t), o ? Pt(t, r) && Ne(n, "set", e, t) : Ne(n, "add", e, t), this
  );
}
function gi(e) {
  const t = R(this),
    { has: n, get: i } = en(t);
  let s = n.call(t, e);
  s || ((e = R(e)), (s = n.call(t, e))), i && i.call(t, e);
  const o = t.delete(e);
  return s && Ne(t, "delete", e, void 0), o;
}
function _i() {
  const e = R(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Ne(e, "clear", void 0, void 0), n;
}
function Dt(e, t) {
  return function (i, s) {
    const o = this,
      r = o.__v_raw,
      l = R(r),
      c = t ? Jn : e ? Xn : At;
    return (
      !e && de(l, "iterate", rt), r.forEach((f, h) => i.call(s, c(f), c(h), o))
    );
  };
}
function Ht(e, t, n) {
  return function (...i) {
    const s = this.__v_raw,
      o = R(s),
      r = ft(o),
      l = e === "entries" || (e === Symbol.iterator && r),
      c = e === "keys" && r,
      f = s[e](...i),
      h = n ? Jn : t ? Xn : At;
    return (
      !t && de(o, "iterate", c ? In : rt),
      {
        next() {
          const { value: _, done: y } = f.next();
          return y
            ? { value: _, done: y }
            : { value: l ? [h(_[0]), h(_[1])] : h(_), done: y };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function He(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function Po() {
  const e = {
      get(o) {
        return jt(this, o);
      },
      get size() {
        return Rt(this);
      },
      has: Nt,
      add: pi,
      set: mi,
      delete: gi,
      clear: _i,
      forEach: Dt(!1, !1),
    },
    t = {
      get(o) {
        return jt(this, o, !1, !0);
      },
      get size() {
        return Rt(this);
      },
      has: Nt,
      add: pi,
      set: mi,
      delete: gi,
      clear: _i,
      forEach: Dt(!1, !0),
    },
    n = {
      get(o) {
        return jt(this, o, !0);
      },
      get size() {
        return Rt(this, !0);
      },
      has(o) {
        return Nt.call(this, o, !0);
      },
      add: He("add"),
      set: He("set"),
      delete: He("delete"),
      clear: He("clear"),
      forEach: Dt(!0, !1),
    },
    i = {
      get(o) {
        return jt(this, o, !0, !0);
      },
      get size() {
        return Rt(this, !0);
      },
      has(o) {
        return Nt.call(this, o, !0);
      },
      add: He("add"),
      set: He("set"),
      delete: He("delete"),
      clear: He("clear"),
      forEach: Dt(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      (e[o] = Ht(o, !1, !1)),
        (n[o] = Ht(o, !0, !1)),
        (t[o] = Ht(o, !1, !0)),
        (i[o] = Ht(o, !0, !0));
    }),
    [e, n, t, i]
  );
}
const [Ao, Lo, $o, Mo] = Po();
function Yn(e, t) {
  const n = t ? (e ? Mo : $o) : e ? Lo : Ao;
  return (i, s, o) =>
    s === "__v_isReactive"
      ? !e
      : s === "__v_isReadonly"
      ? e
      : s === "__v_raw"
      ? i
      : Reflect.get(N(n, s) && s in i ? n : i, s, o);
}
const Oo = { get: Yn(!1, !1) },
  Fo = { get: Yn(!1, !0) },
  zo = { get: Yn(!0, !1) },
  is = new WeakMap(),
  ss = new WeakMap(),
  os = new WeakMap(),
  So = new WeakMap();
function jo(e) {
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
function No(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : jo(no(e));
}
function tn(e) {
  return mt(e) ? e : Qn(e, !1, ns, Oo, is);
}
function Ro(e) {
  return Qn(e, !1, Io, Fo, ss);
}
function rs(e) {
  return Qn(e, !0, To, zo, os);
}
function Qn(e, t, n, i, s) {
  if (!W(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = s.get(e);
  if (o) return o;
  const r = No(e);
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
function Vt(e) {
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
  return Wt(e, "__v_skip", !0), e;
}
const At = (e) => (W(e) ? tn(e) : e),
  Xn = (e) => (W(e) ? rs(e) : e);
function cs(e) {
  Ue && Ee && ((e = R(e)), Gi(e.dep || (e.dep = Kn())));
}
function us(e, t) {
  e = R(e);
  const n = e.dep;
  n && Pn(n);
}
function ie(e) {
  return !!(e && e.__v_isRef === !0);
}
function Ve(e) {
  return Do(e, !1);
}
function Do(e, t) {
  return ie(e) ? e : new Ho(e, t);
}
class Ho {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : R(t)),
      (this._value = n ? t : At(t));
  }
  get value() {
    return cs(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Vt(t) || mt(t);
    (t = n ? t : R(t)),
      Pt(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : At(t)), us(this));
  }
}
function _e(e) {
  return ie(e) ? e.value : e;
}
const Bo = {
  get: (e, t, n) => _e(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const s = e[t];
    return ie(s) && !ie(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, i);
  },
};
function fs(e) {
  return dt(e) ? e : new Proxy(e, Bo);
}
var ds;
class ko {
  constructor(t, n, i, s) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[ds] = !1),
      (this._dirty = !0),
      (this.effect = new Wn(t, () => {
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
    o ? ((i = e), (s = Ie)) : ((i = e.get), (s = e.set)),
    new ko(i, s, o || !s, n)
  );
}
function Ke(e, t, n, i) {
  let s;
  try {
    s = i ? e(...i) : e();
  } catch (o) {
    nn(o, t, n);
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
          nn(r, t, n);
        }),
      o
    );
  }
  const s = [];
  for (let o = 0; o < e.length; o++) s.push(ve(e[o], t, n, i));
  return s;
}
function nn(e, t, n, i = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const r = t.proxy,
      l = n;
    for (; o; ) {
      const f = o.ec;
      if (f) {
        for (let h = 0; h < f.length; h++) if (f[h](e, r, l) === !1) return;
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
let Lt = !1,
  An = !1;
const le = [];
let Fe = 0;
const ht = [];
let Se = null,
  nt = 0;
const hs = Promise.resolve();
let Zn = null;
function Ko(e) {
  const t = Zn || hs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Wo(e) {
  let t = Fe + 1,
    n = le.length;
  for (; t < n; ) {
    const i = (t + n) >>> 1;
    $t(le[i]) < e ? (t = i + 1) : (n = i);
  }
  return t;
}
function Gn(e) {
  (!le.length || !le.includes(e, Lt && e.allowRecurse ? Fe + 1 : Fe)) &&
    (e.id == null ? le.push(e) : le.splice(Wo(e.id), 0, e), ps());
}
function ps() {
  !Lt && !An && ((An = !0), (Zn = hs.then(gs)));
}
function Vo(e) {
  const t = le.indexOf(e);
  t > Fe && le.splice(t, 1);
}
function Jo(e) {
  $(e)
    ? ht.push(...e)
    : (!Se || !Se.includes(e, e.allowRecurse ? nt + 1 : nt)) && ht.push(e),
    ps();
}
function bi(e, t = Lt ? Fe + 1 : 0) {
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
    for (Se = t, Se.sort((n, i) => $t(n) - $t(i)), nt = 0; nt < Se.length; nt++)
      Se[nt]();
    (Se = null), (nt = 0);
  }
}
const $t = (e) => (e.id == null ? 1 / 0 : e.id),
  Yo = (e, t) => {
    const n = $t(e) - $t(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function gs(e) {
  (An = !1), (Lt = !0), le.sort(Yo);
  const t = Ie;
  try {
    for (Fe = 0; Fe < le.length; Fe++) {
      const n = le[Fe];
      n && n.active !== !1 && Ke(n, null, 14);
    }
  } finally {
    (Fe = 0),
      (le.length = 0),
      ms(),
      (Lt = !1),
      (Zn = null),
      (le.length || ht.length) && gs();
  }
}
function Qo(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || K;
  let s = n;
  const o = t.startsWith("update:"),
    r = o && t.slice(7);
  if (r && r in i) {
    const h = `${r === "modelValue" ? "model" : r}Modifiers`,
      { number: _, trim: y } = i[h] || K;
    y && (s = n.map((P) => (G(P) ? P.trim() : P))), _ && (s = n.map(oo));
  }
  let l,
    c = i[(l = hn(t))] || i[(l = hn(pt(t)))];
  !c && o && (c = i[(l = hn(_t(t)))]), c && ve(c, e, 6, s);
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
      const h = _s(f, t, !0);
      h && ((l = !0), se(r, h));
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  return !o && !l
    ? (W(e) && i.set(e, null), null)
    : ($(o) ? o.forEach((c) => (r[c] = null)) : se(r, o),
      W(e) && i.set(e, r),
      r);
}
function sn(e, t) {
  return !e || !Xt(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      N(e, t[0].toLowerCase() + t.slice(1)) || N(e, _t(t)) || N(e, t));
}
let be = null,
  bs = null;
function Jt(e) {
  const t = be;
  return (be = e), (bs = (e && e.type.__scopeId) || null), t;
}
function vs(e, t = be, n) {
  if (!t || e._n) return e;
  const i = (...s) => {
    i._d && Pi(-1);
    const o = Jt(t);
    let r;
    try {
      r = e(...s);
    } finally {
      Jt(o), i._d && Pi(1);
    }
    return r;
  };
  return (i._n = !0), (i._c = !0), (i._d = !0), i;
}
function mn(e) {
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
    render: h,
    renderCache: _,
    data: y,
    setupState: P,
    ctx: S,
    inheritAttrs: A,
  } = e;
  let J, D;
  const ce = Jt(e);
  try {
    if (n.shapeFlag & 4) {
      const q = s || i;
      (J = Oe(h.call(q, q, _, o, P, y, S))), (D = c);
    } else {
      const q = t;
      (J = Oe(
        q.length > 1 ? q(o, { attrs: c, slots: l, emit: f }) : q(o, null)
      )),
        (D = t.props ? c : Xo(c));
    }
  } catch (q) {
    (It.length = 0), nn(q, e, 1), (J = ee(Pe));
  }
  let O = J;
  if (D && A !== !1) {
    const q = Object.keys(D),
      { shapeFlag: te } = O;
    q.length && te & 7 && (r && q.some(Bn) && (D = Zo(D, r)), (O = Je(O, D)));
  }
  return (
    n.dirs && ((O = Je(O)), (O.dirs = O.dirs ? O.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (O.transition = n.transition),
    (J = O),
    Jt(ce),
    J
  );
}
const Xo = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Xt(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Zo = (e, t) => {
    const n = {};
    for (const i in e) (!Bn(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
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
      const h = t.dynamicProps;
      for (let _ = 0; _ < h.length; _++) {
        const y = h[_];
        if (r[y] !== i[y] && !sn(f, y)) return !0;
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
    if (t[o] !== e[o] && !sn(n, o)) return !0;
  }
  return !1;
}
function er({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const tr = (e) => e.__isSuspense;
function nr(e, t) {
  t && t.pendingBranch
    ? $(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Jo(e);
}
function ir(e, t) {
  if (Z) {
    let n = Z.provides;
    const i = Z.parent && Z.parent.provides;
    i === n && (n = Z.provides = Object.create(i)), (n[e] = t);
  }
}
function qt(e, t, n = !1) {
  const i = Z || be;
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
function gn(e, t, n) {
  return ys(e, t, n);
}
function ys(
  e,
  t,
  { immediate: n, deep: i, flush: s, onTrack: o, onTrigger: r } = K
) {
  const l = uo() === (Z == null ? void 0 : Z.scope) ? Z : null;
  let c,
    f = !1,
    h = !1;
  if (
    (ie(e)
      ? ((c = () => e.value), (f = Vt(e)))
      : dt(e)
      ? ((c = () => e), (i = !0))
      : $(e)
      ? ((h = !0),
        (f = e.some((O) => dt(O) || Vt(O))),
        (c = () =>
          e.map((O) => {
            if (ie(O)) return O.value;
            if (dt(O)) return ot(O);
            if (F(O)) return Ke(O, l, 2);
          })))
      : F(e)
      ? t
        ? (c = () => Ke(e, l, 2))
        : (c = () => {
            if (!(l && l.isUnmounted)) return _ && _(), ve(e, l, 3, [y]);
          })
      : (c = Ie),
    t && i)
  ) {
    const O = c;
    c = () => ot(O());
  }
  let _,
    y = (O) => {
      _ = D.onStop = () => {
        Ke(O, l, 4);
      };
    },
    P;
  if (Ot)
    if (
      ((y = Ie),
      t ? n && ve(t, l, 3, [c(), h ? [] : void 0, y]) : c(),
      s === "sync")
    ) {
      const O = Qr();
      P = O.__watcherHandles || (O.__watcherHandles = []);
    } else return Ie;
  let S = h ? new Array(e.length).fill(Bt) : Bt;
  const A = () => {
    if (D.active)
      if (t) {
        const O = D.run();
        (i || f || (h ? O.some((q, te) => Pt(q, S[te])) : Pt(O, S))) &&
          (_ && _(),
          ve(t, l, 3, [O, S === Bt ? void 0 : h && S[0] === Bt ? [] : S, y]),
          (S = O));
      } else D.run();
  };
  A.allowRecurse = !!t;
  let J;
  s === "sync"
    ? (J = A)
    : s === "post"
    ? (J = () => fe(A, l && l.suspense))
    : ((A.pre = !0), l && (A.id = l.uid), (J = () => Gn(A)));
  const D = new Wn(c, J);
  t
    ? n
      ? A()
      : (S = D.run())
    : s === "post"
    ? fe(D.run.bind(D), l && l.suspense)
    : D.run();
  const ce = () => {
    D.stop(), l && l.scope && kn(l.scope.effects, D);
  };
  return P && P.push(ce), ce;
}
function sr(e, t, n) {
  const i = this.proxy,
    s = G(e) ? (e.includes(".") ? xs(i, e) : () => i[e]) : e.bind(i, i);
  let o;
  F(t) ? (o = t) : ((o = t.handler), (n = t));
  const r = Z;
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
  if ((t.add(e), ie(e))) ot(e.value, t);
  else if ($(e)) for (let n = 0; n < e.length; n++) ot(e[n], t);
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
    ei(() => {
      e.isMounted = !0;
    }),
    Is(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const ge = [Function, Array],
  rr = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: ge,
      onEnter: ge,
      onAfterEnter: ge,
      onEnterCancelled: ge,
      onBeforeLeave: ge,
      onLeave: ge,
      onAfterLeave: ge,
      onLeaveCancelled: ge,
      onBeforeAppear: ge,
      onAppear: ge,
      onAfterAppear: ge,
      onAppearCancelled: ge,
    },
    setup(e, { slots: t }) {
      const n = Br(),
        i = or();
      let s;
      return () => {
        const o = t.default && Es(t.default(), !0);
        if (!o || !o.length) return;
        let r = o[0];
        if (o.length > 1) {
          for (const A of o)
            if (A.type !== Pe) {
              r = A;
              break;
            }
        }
        const l = R(e),
          { mode: c } = l;
        if (i.isLeaving) return _n(r);
        const f = yi(r);
        if (!f) return _n(r);
        const h = Ln(f, l, i, n);
        $n(f, h);
        const _ = n.subTree,
          y = _ && yi(_);
        let P = !1;
        const { getTransitionKey: S } = f.type;
        if (S) {
          const A = S();
          s === void 0 ? (s = A) : A !== s && ((s = A), (P = !0));
        }
        if (y && y.type !== Pe && (!it(f, y) || P)) {
          const A = Ln(y, l, i, n);
          if (($n(y, A), c === "out-in"))
            return (
              (i.isLeaving = !0),
              (A.afterLeave = () => {
                (i.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              _n(r)
            );
          c === "in-out" &&
            f.type !== Pe &&
            (A.delayLeave = (J, D, ce) => {
              const O = Cs(i, y);
              (O[String(y.key)] = y),
                (J._leaveCb = () => {
                  D(), (J._leaveCb = void 0), delete h.delayedLeave;
                }),
                (h.delayedLeave = ce);
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
function Ln(e, t, n, i) {
  const {
      appear: s,
      mode: o,
      persisted: r = !1,
      onBeforeEnter: l,
      onEnter: c,
      onAfterEnter: f,
      onEnterCancelled: h,
      onBeforeLeave: _,
      onLeave: y,
      onAfterLeave: P,
      onLeaveCancelled: S,
      onBeforeAppear: A,
      onAppear: J,
      onAfterAppear: D,
      onAppearCancelled: ce,
    } = t,
    O = String(e.key),
    q = Cs(n, e),
    te = (z, Y) => {
      z && ve(z, i, 9, Y);
    },
    De = (z, Y) => {
      const U = Y[1];
      te(z, Y),
        $(z) ? z.every((oe) => oe.length <= 1) && U() : z.length <= 1 && U();
    },
    Ae = {
      mode: o,
      persisted: r,
      beforeEnter(z) {
        let Y = l;
        if (!n.isMounted)
          if (s) Y = A || l;
          else return;
        z._leaveCb && z._leaveCb(!0);
        const U = q[O];
        U && it(e, U) && U.el._leaveCb && U.el._leaveCb(), te(Y, [z]);
      },
      enter(z) {
        let Y = c,
          U = f,
          oe = h;
        if (!n.isMounted)
          if (s) (Y = J || c), (U = D || f), (oe = ce || h);
          else return;
        let E = !1;
        const V = (z._enterCb = (he) => {
          E ||
            ((E = !0),
            he ? te(oe, [z]) : te(U, [z]),
            Ae.delayedLeave && Ae.delayedLeave(),
            (z._enterCb = void 0));
        });
        Y ? De(Y, [z, V]) : V();
      },
      leave(z, Y) {
        const U = String(e.key);
        if ((z._enterCb && z._enterCb(!0), n.isUnmounting)) return Y();
        te(_, [z]);
        let oe = !1;
        const E = (z._leaveCb = (V) => {
          oe ||
            ((oe = !0),
            Y(),
            V ? te(S, [z]) : te(P, [z]),
            (z._leaveCb = void 0),
            q[U] === e && delete q[U]);
        });
        (q[U] = e), y ? De(y, [z, E]) : E();
      },
      clone(z) {
        return Ln(z, t, n, i);
      },
    };
  return Ae;
}
function _n(e) {
  if (on(e)) return (e = Je(e)), (e.children = null), e;
}
function yi(e) {
  return on(e) ? (e.children ? e.children[0] : void 0) : e;
}
function $n(e, t) {
  e.shapeFlag & 6 && e.component
    ? $n(e.component.subTree, t)
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
    r.type === me
      ? (r.patchFlag & 128 && s++, (i = i.concat(Es(r.children, t, l))))
      : (t || r.type !== Pe) && i.push(l != null ? Je(r, { key: l }) : r);
  }
  if (s > 1) for (let o = 0; o < i.length; o++) i[o].patchFlag = -2;
  return i;
}
const Ut = (e) => !!e.type.__asyncLoader,
  on = (e) => e.type.__isKeepAlive;
function lr(e, t) {
  Ts(e, "a", t);
}
function ar(e, t) {
  Ts(e, "da", t);
}
function Ts(e, t, n = Z) {
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
  if ((rn(t, i, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      on(s.parent.vnode) && cr(i, t, n, s), (s = s.parent);
  }
}
function cr(e, t, n, i) {
  const s = rn(t, e, i, !0);
  Ps(() => {
    kn(i[t], s);
  }, n);
}
function rn(e, t, n = Z, i = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...r) => {
          if (n.isUnmounted) return;
          bt(), gt(n);
          const l = ve(t, n, e, r);
          return lt(), vt(), l;
        });
    return i ? s.unshift(o) : s.push(o), o;
  }
}
const Re =
    (e) =>
    (t, n = Z) =>
      (!Ot || e === "sp") && rn(e, (...i) => t(...i), n),
  ur = Re("bm"),
  ei = Re("m"),
  fr = Re("bu"),
  dr = Re("u"),
  Is = Re("bum"),
  Ps = Re("um"),
  hr = Re("sp"),
  pr = Re("rtg"),
  mr = Re("rtc");
function gr(e, t = Z) {
  rn("ec", e, t);
}
function Mn(e, t) {
  const n = be;
  if (n === null) return e;
  const i = cn(n) || n.proxy,
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
function Xe(e, t, n, i) {
  const s = e.dirs,
    o = t && t.dirs;
  for (let r = 0; r < s.length; r++) {
    const l = s[r];
    o && (l.oldValue = o[r].value);
    let c = l.dir[i];
    c && (bt(), ve(c, n, 8, [e.el, l, e, t]), vt());
  }
}
const _r = Symbol();
function As(e, t, n, i) {
  let s;
  const o = n && n[i];
  if ($(e) || G(e)) {
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
const On = (e) => (e ? (Hs(e) ? cn(e) || e.proxy : On(e.parent)) : null),
  Tt = se(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => On(e.parent),
    $root: (e) => On(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ti(e),
    $forceUpdate: (e) => e.f || (e.f = () => Gn(e.update)),
    $nextTick: (e) => e.n || (e.n = Ko.bind(e.proxy)),
    $watch: (e) => sr.bind(e),
  }),
  bn = (e, t) => e !== K && !e.__isScriptSetup && N(e, t),
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
        const P = r[t];
        if (P !== void 0)
          switch (P) {
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
          if (bn(i, t)) return (r[t] = 1), i[t];
          if (s !== K && N(s, t)) return (r[t] = 2), s[t];
          if ((f = e.propsOptions[0]) && N(f, t)) return (r[t] = 3), o[t];
          if (n !== K && N(n, t)) return (r[t] = 4), n[t];
          Fn && (r[t] = 0);
        }
      }
      const h = Tt[t];
      let _, y;
      if (h) return t === "$attrs" && de(e, "get", t), h(e);
      if ((_ = l.__cssModules) && (_ = _[t])) return _;
      if (n !== K && N(n, t)) return (r[t] = 4), n[t];
      if (((y = c.config.globalProperties), N(y, t))) return y[t];
    },
    set({ _: e }, t, n) {
      const { data: i, setupState: s, ctx: o } = e;
      return bn(s, t)
        ? ((s[t] = n), !0)
        : i !== K && N(i, t)
        ? ((i[t] = n), !0)
        : N(e.props, t) || (t[0] === "$" && t.slice(1) in e)
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
        (e !== K && N(e, r)) ||
        bn(t, r) ||
        ((l = o[0]) && N(l, r)) ||
        N(i, r) ||
        N(Tt, r) ||
        N(s.config.globalProperties, r)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : N(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
let Fn = !0;
function vr(e) {
  const t = ti(e),
    n = e.proxy,
    i = e.ctx;
  (Fn = !1), t.beforeCreate && xi(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: o,
    methods: r,
    watch: l,
    provide: c,
    inject: f,
    created: h,
    beforeMount: _,
    mounted: y,
    beforeUpdate: P,
    updated: S,
    activated: A,
    deactivated: J,
    beforeDestroy: D,
    beforeUnmount: ce,
    destroyed: O,
    unmounted: q,
    render: te,
    renderTracked: De,
    renderTriggered: Ae,
    errorCaptured: z,
    serverPrefetch: Y,
    expose: U,
    inheritAttrs: oe,
    components: E,
    directives: V,
    filters: he,
  } = t;
  if ((f && yr(f, i, null, e.appContext.config.unwrapInjectedRef), r))
    for (const Q in r) {
      const B = r[Q];
      F(B) && (i[Q] = B.bind(n));
    }
  if (s) {
    const Q = s.call(n, n);
    W(Q) && (e.data = tn(Q));
  }
  if (((Fn = !0), o))
    for (const Q in o) {
      const B = o[Q],
        Ye = F(B) ? B.bind(n, n) : F(B.get) ? B.get.bind(n, n) : Ie,
        zt = !F(B) && F(B.set) ? B.set.bind(n) : Ie,
        Qe = Vr({ get: Ye, set: zt });
      Object.defineProperty(i, Q, {
        enumerable: !0,
        configurable: !0,
        get: () => Qe.value,
        set: (Le) => (Qe.value = Le),
      });
    }
  if (l) for (const Q in l) Ls(l[Q], i, n, Q);
  if (c) {
    const Q = F(c) ? c.call(n) : c;
    Reflect.ownKeys(Q).forEach((B) => {
      ir(B, Q[B]);
    });
  }
  h && xi(h, e, "c");
  function ne(Q, B) {
    $(B) ? B.forEach((Ye) => Q(Ye.bind(n))) : B && Q(B.bind(n));
  }
  if (
    (ne(ur, _),
    ne(ei, y),
    ne(fr, P),
    ne(dr, S),
    ne(lr, A),
    ne(ar, J),
    ne(gr, z),
    ne(mr, De),
    ne(pr, Ae),
    ne(Is, ce),
    ne(Ps, q),
    ne(hr, Y),
    $(U))
  )
    if (U.length) {
      const Q = e.exposed || (e.exposed = {});
      U.forEach((B) => {
        Object.defineProperty(Q, B, {
          get: () => n[B],
          set: (Ye) => (n[B] = Ye),
        });
      });
    } else e.exposed || (e.exposed = {});
  te && e.render === Ie && (e.render = te),
    oe != null && (e.inheritAttrs = oe),
    E && (e.components = E),
    V && (e.directives = V);
}
function yr(e, t, n = Ie, i = !1) {
  $(e) && (e = zn(e));
  for (const s in e) {
    const o = e[s];
    let r;
    W(o)
      ? "default" in o
        ? (r = qt(o.from || s, o.default, !0))
        : (r = qt(o.from || s))
      : (r = qt(o)),
      ie(r) && i
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
  ve($(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Ls(e, t, n, i) {
  const s = i.includes(".") ? xs(n, i) : () => n[i];
  if (G(e)) {
    const o = t[e];
    F(o) && gn(s, o);
  } else if (F(e)) gn(s, e.bind(n));
  else if (W(e))
    if ($(e)) e.forEach((o) => Ls(o, t, n, i));
    else {
      const o = F(e.handler) ? e.handler.bind(n) : t[e.handler];
      F(o) && gn(s, o, e);
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
      : ((c = {}), s.length && s.forEach((f) => Yt(c, f, r, !0)), Yt(c, t, r)),
    W(t) && o.set(t, c),
    c
  );
}
function Yt(e, t, n, i = !1) {
  const { mixins: s, extends: o } = t;
  o && Yt(e, o, n, !0), s && s.forEach((r) => Yt(e, r, n, !0));
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
  beforeCreate: ue,
  created: ue,
  beforeMount: ue,
  mounted: ue,
  beforeUpdate: ue,
  updated: ue,
  beforeDestroy: ue,
  beforeUnmount: ue,
  destroyed: ue,
  unmounted: ue,
  activated: ue,
  deactivated: ue,
  errorCaptured: ue,
  serverPrefetch: ue,
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
          return se(
            F(e) ? e.call(this, this) : e,
            F(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function wr(e, t) {
  return tt(zn(e), zn(t));
}
function zn(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ue(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function tt(e, t) {
  return e ? se(se(Object.create(null), e), t) : t;
}
function Cr(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = se(Object.create(null), e);
  for (const i in t) n[i] = ue(e[i], t[i]);
  return n;
}
function Er(e, t, n, i = !1) {
  const s = {},
    o = {};
  Wt(o, an, 1), (e.propsDefaults = Object.create(null)), $s(e, t, s, o);
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
      const h = e.vnode.dynamicProps;
      for (let _ = 0; _ < h.length; _++) {
        let y = h[_];
        if (sn(e.emitsOptions, y)) continue;
        const P = t[y];
        if (c)
          if (N(o, y)) P !== o[y] && ((o[y] = P), (f = !0));
          else {
            const S = pt(y);
            s[S] = Sn(c, l, S, P, e, !1);
          }
        else P !== o[y] && ((o[y] = P), (f = !0));
      }
    }
  } else {
    $s(e, t, s, o) && (f = !0);
    let h;
    for (const _ in l)
      (!t || (!N(t, _) && ((h = _t(_)) === _ || !N(t, h)))) &&
        (c
          ? n &&
            (n[_] !== void 0 || n[h] !== void 0) &&
            (s[_] = Sn(c, l, _, void 0, e, !0))
          : delete s[_]);
    if (o !== l) for (const _ in o) (!t || !N(t, _)) && (delete o[_], (f = !0));
  }
  f && Ne(e, "set", "$attrs");
}
function $s(e, t, n, i) {
  const [s, o] = e.propsOptions;
  let r = !1,
    l;
  if (t)
    for (let c in t) {
      if (kt(c)) continue;
      const f = t[c];
      let h;
      s && N(s, (h = pt(c)))
        ? !o || !o.includes(h)
          ? (n[h] = f)
          : ((l || (l = {}))[h] = f)
        : sn(e.emitsOptions, c) ||
          ((!(c in i) || f !== i[c]) && ((i[c] = f), (r = !0)));
    }
  if (o) {
    const c = R(n),
      f = l || K;
    for (let h = 0; h < o.length; h++) {
      const _ = o[h];
      n[_] = Sn(s, c, _, f[_], e, !N(f, _));
    }
  }
  return r;
}
function Sn(e, t, n, i, s, o) {
  const r = e[n];
  if (r != null) {
    const l = N(r, "default");
    if (l && i === void 0) {
      const c = r.default;
      if (r.type !== Function && F(c)) {
        const { propsDefaults: f } = s;
        n in f ? (i = f[n]) : (gt(s), (i = f[n] = c.call(null, t)), lt());
      } else i = c;
    }
    r[0] &&
      (o && !l ? (i = !1) : r[1] && (i === "" || i === _t(n)) && (i = !0));
  }
  return i;
}
function Ms(e, t, n = !1) {
  const i = t.propsCache,
    s = i.get(e);
  if (s) return s;
  const o = e.props,
    r = {},
    l = [];
  let c = !1;
  if (!F(e)) {
    const h = (_) => {
      c = !0;
      const [y, P] = Ms(_, t, !0);
      se(r, y), P && l.push(...P);
    };
    !n && t.mixins.length && t.mixins.forEach(h),
      e.extends && h(e.extends),
      e.mixins && e.mixins.forEach(h);
  }
  if (!o && !c) return W(e) && i.set(e, ut), ut;
  if ($(o))
    for (let h = 0; h < o.length; h++) {
      const _ = pt(o[h]);
      Ci(_) && (r[_] = K);
    }
  else if (o)
    for (const h in o) {
      const _ = pt(h);
      if (Ci(_)) {
        const y = o[h],
          P = (r[_] = $(y) || F(y) ? { type: y } : Object.assign({}, y));
        if (P) {
          const S = Ii(Boolean, P.type),
            A = Ii(String, P.type);
          (P[0] = S > -1),
            (P[1] = A < 0 || S < A),
            (S > -1 || N(P, "default")) && l.push(_);
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
  return $(t) ? t.findIndex((n) => Ti(n, e)) : F(t) && Ti(t, e) ? 0 : -1;
}
const Os = (e) => e[0] === "_" || e === "$stable",
  ni = (e) => ($(e) ? e.map(Oe) : [Oe(e)]),
  Ir = (e, t, n) => {
    if (t._n) return t;
    const i = vs((...s) => ni(t(...s)), n);
    return (i._c = !1), i;
  },
  Fs = (e, t, n) => {
    const i = e._ctx;
    for (const s in e) {
      if (Os(s)) continue;
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
  Pr = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = R(t)), Wt(t, "_", n)) : Fs(t, (e.slots = {}));
    } else (e.slots = {}), t && zs(e, t);
    Wt(e.slots, an, 1);
  },
  Ar = (e, t, n) => {
    const { vnode: i, slots: s } = e;
    let o = !0,
      r = K;
    if (i.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (o = !1)
          : (se(s, t), !n && l === 1 && delete s._)
        : ((o = !t.$stable), Fs(t, s)),
        (r = t);
    } else t && (zs(e, t), (r = { default: 1 }));
    if (o) for (const l in s) !Os(l) && !(l in r) && delete s[l];
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
function $r(e, t) {
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
      version: Xr,
      get config() {
        return o.config;
      },
      set config(f) {},
      use(f, ...h) {
        return (
          r.has(f) ||
            (f && F(f.install)
              ? (r.add(f), f.install(c, ...h))
              : F(f) && (r.add(f), f(c, ...h))),
          c
        );
      },
      mixin(f) {
        return o.mixins.includes(f) || o.mixins.push(f), c;
      },
      component(f, h) {
        return h ? ((o.components[f] = h), c) : o.components[f];
      },
      directive(f, h) {
        return h ? ((o.directives[f] = h), c) : o.directives[f];
      },
      mount(f, h, _) {
        if (!l) {
          const y = ee(i, s);
          return (
            (y.appContext = o),
            h && t ? t(y, f) : e(y, f, _),
            (l = !0),
            (c._container = f),
            (f.__vue_app__ = c),
            cn(y.component) || y.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, c._container), delete c._container.__vue_app__);
      },
      provide(f, h) {
        return (o.provides[f] = h), c;
      },
    });
    return c;
  };
}
function jn(e, t, n, i, s = !1) {
  if ($(e)) {
    e.forEach((y, P) => jn(y, t && ($(t) ? t[P] : t), n, i, s));
    return;
  }
  if (Ut(i) && !s) return;
  const o = i.shapeFlag & 4 ? cn(i.component) || i.component.proxy : i.el,
    r = s ? null : o,
    { i: l, r: c } = e,
    f = t && t.r,
    h = l.refs === K ? (l.refs = {}) : l.refs,
    _ = l.setupState;
  if (
    (f != null &&
      f !== c &&
      (G(f)
        ? ((h[f] = null), N(_, f) && (_[f] = null))
        : ie(f) && (f.value = null)),
    F(c))
  )
    Ke(c, l, 12, [r, h]);
  else {
    const y = G(c),
      P = ie(c);
    if (y || P) {
      const S = () => {
        if (e.f) {
          const A = y ? (N(_, c) ? _[c] : h[c]) : c.value;
          s
            ? $(A) && kn(A, o)
            : $(A)
            ? A.includes(o) || A.push(o)
            : y
            ? ((h[c] = [o]), N(_, c) && (_[c] = h[c]))
            : ((c.value = [o]), e.k && (h[e.k] = c.value));
        } else
          y
            ? ((h[c] = r), N(_, c) && (_[c] = r))
            : P && ((c.value = r), e.k && (h[e.k] = r));
      };
      r ? ((S.id = -1), fe(S, n)) : S();
    }
  }
}
const fe = nr;
function Mr(e) {
  return Or(e);
}
function Or(e, t) {
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
      setElementText: h,
      parentNode: _,
      nextSibling: y,
      setScopeId: P = Ie,
      insertStaticContent: S,
    } = e,
    A = (
      a,
      u,
      d,
      m = null,
      p = null,
      v = null,
      w = !1,
      b = null,
      x = !!u.dynamicChildren
    ) => {
      if (a === u) return;
      a && !it(a, u) && ((m = St(a)), Le(a, p, v, !0), (a = null)),
        u.patchFlag === -2 && ((x = !1), (u.dynamicChildren = null));
      const { type: g, ref: T, shapeFlag: C } = u;
      switch (g) {
        case ln:
          J(a, u, d, m);
          break;
        case Pe:
          D(a, u, d, m);
          break;
        case vn:
          a == null && ce(u, d, m, w);
          break;
        case me:
          E(a, u, d, m, p, v, w, b, x);
          break;
        default:
          C & 1
            ? te(a, u, d, m, p, v, w, b, x)
            : C & 6
            ? V(a, u, d, m, p, v, w, b, x)
            : (C & 64 || C & 128) && g.process(a, u, d, m, p, v, w, b, x, at);
      }
      T != null && p && jn(T, a && a.ref, v, u || a, !u);
    },
    J = (a, u, d, m) => {
      if (a == null) i((u.el = l(u.children)), d, m);
      else {
        const p = (u.el = a.el);
        u.children !== a.children && f(p, u.children);
      }
    },
    D = (a, u, d, m) => {
      a == null ? i((u.el = c(u.children || "")), d, m) : (u.el = a.el);
    },
    ce = (a, u, d, m) => {
      [a.el, a.anchor] = S(a.children, u, d, m, a.el, a.anchor);
    },
    O = ({ el: a, anchor: u }, d, m) => {
      let p;
      for (; a && a !== u; ) (p = y(a)), i(a, d, m), (a = p);
      i(u, d, m);
    },
    q = ({ el: a, anchor: u }) => {
      let d;
      for (; a && a !== u; ) (d = y(a)), s(a), (a = d);
      s(u);
    },
    te = (a, u, d, m, p, v, w, b, x) => {
      (w = w || u.type === "svg"),
        a == null ? De(u, d, m, p, v, w, b, x) : Y(a, u, p, v, w, b, x);
    },
    De = (a, u, d, m, p, v, w, b) => {
      let x, g;
      const { type: T, props: C, shapeFlag: I, transition: M, dirs: j } = a;
      if (
        ((x = a.el = r(a.type, v, C && C.is, C)),
        I & 8
          ? h(x, a.children)
          : I & 16 &&
            z(a.children, x, null, m, p, v && T !== "foreignObject", w, b),
        j && Xe(a, null, m, "created"),
        Ae(x, a, a.scopeId, w, m),
        C)
      ) {
        for (const H in C)
          H !== "value" &&
            !kt(H) &&
            o(x, H, null, C[H], v, a.children, m, p, ze);
        "value" in C && o(x, "value", null, C.value),
          (g = C.onVnodeBeforeMount) && Me(g, m, a);
      }
      j && Xe(a, null, m, "beforeMount");
      const k = (!p || (p && !p.pendingBranch)) && M && !M.persisted;
      k && M.beforeEnter(x),
        i(x, u, d),
        ((g = C && C.onVnodeMounted) || k || j) &&
          fe(() => {
            g && Me(g, m, a), k && M.enter(x), j && Xe(a, null, m, "mounted");
          }, p);
    },
    Ae = (a, u, d, m, p) => {
      if ((d && P(a, d), m)) for (let v = 0; v < m.length; v++) P(a, m[v]);
      if (p) {
        let v = p.subTree;
        if (u === v) {
          const w = p.vnode;
          Ae(a, w, w.scopeId, w.slotScopeIds, p.parent);
        }
      }
    },
    z = (a, u, d, m, p, v, w, b, x = 0) => {
      for (let g = x; g < a.length; g++) {
        const T = (a[g] = b ? qe(a[g]) : Oe(a[g]));
        A(null, T, u, d, m, p, v, w, b);
      }
    },
    Y = (a, u, d, m, p, v, w) => {
      const b = (u.el = a.el);
      let { patchFlag: x, dynamicChildren: g, dirs: T } = u;
      x |= a.patchFlag & 16;
      const C = a.props || K,
        I = u.props || K;
      let M;
      d && Ze(d, !1),
        (M = I.onVnodeBeforeUpdate) && Me(M, d, u, a),
        T && Xe(u, a, d, "beforeUpdate"),
        d && Ze(d, !0);
      const j = p && u.type !== "foreignObject";
      if (
        (g
          ? U(a.dynamicChildren, g, b, d, m, j, v)
          : w || B(a, u, b, null, d, m, j, v, !1),
        x > 0)
      ) {
        if (x & 16) oe(b, u, C, I, d, m, p);
        else if (
          (x & 2 && C.class !== I.class && o(b, "class", null, I.class, p),
          x & 4 && o(b, "style", C.style, I.style, p),
          x & 8)
        ) {
          const k = u.dynamicProps;
          for (let H = 0; H < k.length; H++) {
            const X = k[H],
              xe = C[X],
              ct = I[X];
            (ct !== xe || X === "value") &&
              o(b, X, xe, ct, p, a.children, d, m, ze);
          }
        }
        x & 1 && a.children !== u.children && h(b, u.children);
      } else !w && g == null && oe(b, u, C, I, d, m, p);
      ((M = I.onVnodeUpdated) || T) &&
        fe(() => {
          M && Me(M, d, u, a), T && Xe(u, a, d, "updated");
        }, m);
    },
    U = (a, u, d, m, p, v, w) => {
      for (let b = 0; b < u.length; b++) {
        const x = a[b],
          g = u[b],
          T =
            x.el && (x.type === me || !it(x, g) || x.shapeFlag & 70)
              ? _(x.el)
              : d;
        A(x, g, T, null, m, p, v, w, !0);
      }
    },
    oe = (a, u, d, m, p, v, w) => {
      if (d !== m) {
        if (d !== K)
          for (const b in d)
            !kt(b) && !(b in m) && o(a, b, d[b], null, w, u.children, p, v, ze);
        for (const b in m) {
          if (kt(b)) continue;
          const x = m[b],
            g = d[b];
          x !== g && b !== "value" && o(a, b, g, x, w, u.children, p, v, ze);
        }
        "value" in m && o(a, "value", d.value, m.value);
      }
    },
    E = (a, u, d, m, p, v, w, b, x) => {
      const g = (u.el = a ? a.el : l("")),
        T = (u.anchor = a ? a.anchor : l(""));
      let { patchFlag: C, dynamicChildren: I, slotScopeIds: M } = u;
      M && (b = b ? b.concat(M) : M),
        a == null
          ? (i(g, d, m), i(T, d, m), z(u.children, d, T, p, v, w, b, x))
          : C > 0 && C & 64 && I && a.dynamicChildren
          ? (U(a.dynamicChildren, I, d, p, v, w, b),
            (u.key != null || (p && u === p.subTree)) && js(a, u, !0))
          : B(a, u, d, T, p, v, w, b, x);
    },
    V = (a, u, d, m, p, v, w, b, x) => {
      (u.slotScopeIds = b),
        a == null
          ? u.shapeFlag & 512
            ? p.ctx.activate(u, d, m, w, x)
            : he(u, d, m, p, v, w, x)
          : yt(a, u, x);
    },
    he = (a, u, d, m, p, v, w) => {
      const b = (a.component = Hr(a, m, p));
      if ((on(a) && (b.ctx.renderer = at), kr(b), b.asyncDep)) {
        if ((p && p.registerDep(b, ne), !a.el)) {
          const x = (b.subTree = ee(Pe));
          D(null, x, u, d);
        }
        return;
      }
      ne(b, a, u, d, p, v, w);
    },
    yt = (a, u, d) => {
      const m = (u.component = a.component);
      if (Go(a, u, d))
        if (m.asyncDep && !m.asyncResolved) {
          Q(m, u, d);
          return;
        } else (m.next = u), Vo(m.update), m.update();
      else (u.el = a.el), (m.vnode = u);
    },
    ne = (a, u, d, m, p, v, w) => {
      const b = () => {
          if (a.isMounted) {
            let { next: T, bu: C, u: I, parent: M, vnode: j } = a,
              k = T,
              H;
            Ze(a, !1),
              T ? ((T.el = j.el), Q(a, T, w)) : (T = j),
              C && pn(C),
              (H = T.props && T.props.onVnodeBeforeUpdate) && Me(H, M, T, j),
              Ze(a, !0);
            const X = mn(a),
              xe = a.subTree;
            (a.subTree = X),
              A(xe, X, _(xe.el), St(xe), a, p, v),
              (T.el = X.el),
              k === null && er(a, X.el),
              I && fe(I, p),
              (H = T.props && T.props.onVnodeUpdated) &&
                fe(() => Me(H, M, T, j), p);
          } else {
            let T;
            const { el: C, props: I } = u,
              { bm: M, m: j, parent: k } = a,
              H = Ut(u);
            if (
              (Ze(a, !1),
              M && pn(M),
              !H && (T = I && I.onVnodeBeforeMount) && Me(T, k, u),
              Ze(a, !0),
              C && dn)
            ) {
              const X = () => {
                (a.subTree = mn(a)), dn(C, a.subTree, a, p, null);
              };
              H
                ? u.type.__asyncLoader().then(() => !a.isUnmounted && X())
                : X();
            } else {
              const X = (a.subTree = mn(a));
              A(null, X, d, m, a, p, v), (u.el = X.el);
            }
            if ((j && fe(j, p), !H && (T = I && I.onVnodeMounted))) {
              const X = u;
              fe(() => Me(T, k, X), p);
            }
            (u.shapeFlag & 256 ||
              (k && Ut(k.vnode) && k.vnode.shapeFlag & 256)) &&
              a.a &&
              fe(a.a, p),
              (a.isMounted = !0),
              (u = d = m = null);
          }
        },
        x = (a.effect = new Wn(b, () => Gn(g), a.scope)),
        g = (a.update = () => x.run());
      (g.id = a.uid), Ze(a, !0), g();
    },
    Q = (a, u, d) => {
      u.component = a;
      const m = a.vnode.props;
      (a.vnode = u),
        (a.next = null),
        Tr(a, u.props, m, d),
        Ar(a, u.children, d),
        bt(),
        bi(),
        vt();
    },
    B = (a, u, d, m, p, v, w, b, x = !1) => {
      const g = a && a.children,
        T = a ? a.shapeFlag : 0,
        C = u.children,
        { patchFlag: I, shapeFlag: M } = u;
      if (I > 0) {
        if (I & 128) {
          zt(g, C, d, m, p, v, w, b, x);
          return;
        } else if (I & 256) {
          Ye(g, C, d, m, p, v, w, b, x);
          return;
        }
      }
      M & 8
        ? (T & 16 && ze(g, p, v), C !== g && h(d, C))
        : T & 16
        ? M & 16
          ? zt(g, C, d, m, p, v, w, b, x)
          : ze(g, p, v, !0)
        : (T & 8 && h(d, ""), M & 16 && z(C, d, m, p, v, w, b, x));
    },
    Ye = (a, u, d, m, p, v, w, b, x) => {
      (a = a || ut), (u = u || ut);
      const g = a.length,
        T = u.length,
        C = Math.min(g, T);
      let I;
      for (I = 0; I < C; I++) {
        const M = (u[I] = x ? qe(u[I]) : Oe(u[I]));
        A(a[I], M, d, null, p, v, w, b, x);
      }
      g > T ? ze(a, p, v, !0, !1, C) : z(u, d, m, p, v, w, b, x, C);
    },
    zt = (a, u, d, m, p, v, w, b, x) => {
      let g = 0;
      const T = u.length;
      let C = a.length - 1,
        I = T - 1;
      for (; g <= C && g <= I; ) {
        const M = a[g],
          j = (u[g] = x ? qe(u[g]) : Oe(u[g]));
        if (it(M, j)) A(M, j, d, null, p, v, w, b, x);
        else break;
        g++;
      }
      for (; g <= C && g <= I; ) {
        const M = a[C],
          j = (u[I] = x ? qe(u[I]) : Oe(u[I]));
        if (it(M, j)) A(M, j, d, null, p, v, w, b, x);
        else break;
        C--, I--;
      }
      if (g > C) {
        if (g <= I) {
          const M = I + 1,
            j = M < T ? u[M].el : m;
          for (; g <= I; )
            A(null, (u[g] = x ? qe(u[g]) : Oe(u[g])), d, j, p, v, w, b, x), g++;
        }
      } else if (g > I) for (; g <= C; ) Le(a[g], p, v, !0), g++;
      else {
        const M = g,
          j = g,
          k = new Map();
        for (g = j; g <= I; g++) {
          const pe = (u[g] = x ? qe(u[g]) : Oe(u[g]));
          pe.key != null && k.set(pe.key, g);
        }
        let H,
          X = 0;
        const xe = I - j + 1;
        let ct = !1,
          li = 0;
        const xt = new Array(xe);
        for (g = 0; g < xe; g++) xt[g] = 0;
        for (g = M; g <= C; g++) {
          const pe = a[g];
          if (X >= xe) {
            Le(pe, p, v, !0);
            continue;
          }
          let $e;
          if (pe.key != null) $e = k.get(pe.key);
          else
            for (H = j; H <= I; H++)
              if (xt[H - j] === 0 && it(pe, u[H])) {
                $e = H;
                break;
              }
          $e === void 0
            ? Le(pe, p, v, !0)
            : ((xt[$e - j] = g + 1),
              $e >= li ? (li = $e) : (ct = !0),
              A(pe, u[$e], d, null, p, v, w, b, x),
              X++);
        }
        const ai = ct ? Fr(xt) : ut;
        for (H = ai.length - 1, g = xe - 1; g >= 0; g--) {
          const pe = j + g,
            $e = u[pe],
            ci = pe + 1 < T ? u[pe + 1].el : m;
          xt[g] === 0
            ? A(null, $e, d, ci, p, v, w, b, x)
            : ct && (H < 0 || g !== ai[H] ? Qe($e, d, ci, 2) : H--);
        }
      }
    },
    Qe = (a, u, d, m, p = null) => {
      const { el: v, type: w, transition: b, children: x, shapeFlag: g } = a;
      if (g & 6) {
        Qe(a.component.subTree, u, d, m);
        return;
      }
      if (g & 128) {
        a.suspense.move(u, d, m);
        return;
      }
      if (g & 64) {
        w.move(a, u, d, at);
        return;
      }
      if (w === me) {
        i(v, u, d);
        for (let C = 0; C < x.length; C++) Qe(x[C], u, d, m);
        i(a.anchor, u, d);
        return;
      }
      if (w === vn) {
        O(a, u, d);
        return;
      }
      if (m !== 2 && g & 1 && b)
        if (m === 0) b.beforeEnter(v), i(v, u, d), fe(() => b.enter(v), p);
        else {
          const { leave: C, delayLeave: I, afterLeave: M } = b,
            j = () => i(v, u, d),
            k = () => {
              C(v, () => {
                j(), M && M();
              });
            };
          I ? I(v, j, k) : k();
        }
      else i(v, u, d);
    },
    Le = (a, u, d, m = !1, p = !1) => {
      const {
        type: v,
        props: w,
        ref: b,
        children: x,
        dynamicChildren: g,
        shapeFlag: T,
        patchFlag: C,
        dirs: I,
      } = a;
      if ((b != null && jn(b, null, d, a, !0), T & 256)) {
        u.ctx.deactivate(a);
        return;
      }
      const M = T & 1 && I,
        j = !Ut(a);
      let k;
      if ((j && (k = w && w.onVnodeBeforeUnmount) && Me(k, u, a), T & 6))
        Ws(a.component, d, m);
      else {
        if (T & 128) {
          a.suspense.unmount(d, m);
          return;
        }
        M && Xe(a, null, u, "beforeUnmount"),
          T & 64
            ? a.type.remove(a, u, d, p, at, m)
            : g && (v !== me || (C > 0 && C & 64))
            ? ze(g, u, d, !1, !0)
            : ((v === me && C & 384) || (!p && T & 16)) && ze(x, u, d),
          m && oi(a);
      }
      ((j && (k = w && w.onVnodeUnmounted)) || M) &&
        fe(() => {
          k && Me(k, u, a), M && Xe(a, null, u, "unmounted");
        }, d);
    },
    oi = (a) => {
      const { type: u, el: d, anchor: m, transition: p } = a;
      if (u === me) {
        Ks(d, m);
        return;
      }
      if (u === vn) {
        q(a);
        return;
      }
      const v = () => {
        s(d), p && !p.persisted && p.afterLeave && p.afterLeave();
      };
      if (a.shapeFlag & 1 && p && !p.persisted) {
        const { leave: w, delayLeave: b } = p,
          x = () => w(d, v);
        b ? b(a.el, v, x) : x();
      } else v();
    },
    Ks = (a, u) => {
      let d;
      for (; a !== u; ) (d = y(a)), s(a), (a = d);
      s(u);
    },
    Ws = (a, u, d) => {
      const { bum: m, scope: p, update: v, subTree: w, um: b } = a;
      m && pn(m),
        p.stop(),
        v && ((v.active = !1), Le(w, a, u, d)),
        b && fe(b, u),
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
    ze = (a, u, d, m = !1, p = !1, v = 0) => {
      for (let w = v; w < a.length; w++) Le(a[w], u, d, m, p);
    },
    St = (a) =>
      a.shapeFlag & 6
        ? St(a.component.subTree)
        : a.shapeFlag & 128
        ? a.suspense.next()
        : y(a.anchor || a.el),
    ri = (a, u, d) => {
      a == null
        ? u._vnode && Le(u._vnode, null, null, !0)
        : A(u._vnode || null, a, u, null, null, null, d),
        bi(),
        ms(),
        (u._vnode = a);
    },
    at = {
      p: A,
      um: Le,
      m: Qe,
      r: oi,
      mt: he,
      mc: z,
      pc: B,
      pbc: U,
      n: St,
      o: e,
    };
  let fn, dn;
  return (
    t && ([fn, dn] = t(at)), { render: ri, hydrate: fn, createApp: $r(ri, fn) }
  );
}
function Ze({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function js(e, t, n = !1) {
  const i = e.children,
    s = t.children;
  if ($(i) && $(s))
    for (let o = 0; o < i.length; o++) {
      const r = i[o];
      let l = s[o];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = s[o] = qe(s[o])), (l.el = r.el)),
        n || js(r, l)),
        l.type === ln && (l.el = r.el);
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
  me = Symbol(void 0),
  ln = Symbol(void 0),
  Pe = Symbol(void 0),
  vn = Symbol(void 0),
  It = [];
let Te = null;
function ae(e = !1) {
  It.push((Te = e ? null : []));
}
function Sr() {
  It.pop(), (Te = It[It.length - 1] || null);
}
let Mt = 1;
function Pi(e) {
  Mt += e;
}
function Ns(e) {
  return (
    (e.dynamicChildren = Mt > 0 ? Te || ut : null),
    Sr(),
    Mt > 0 && Te && Te.push(e),
    e
  );
}
function ye(e, t, n, i, s, o) {
  return Ns(L(e, t, n, i, s, o, !0));
}
function Qt(e, t, n, i, s) {
  return Ns(ee(e, t, n, i, s, !0));
}
function Nn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function it(e, t) {
  return e.type === t.type && e.key === t.key;
}
const an = "__vInternal",
  Rs = ({ key: e }) => e ?? null,
  Kt = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? G(e) || ie(e) || F(e)
        ? { i: be, r: e, k: t, f: !!n }
        : e
      : null;
function L(
  e,
  t = null,
  n = null,
  i = 0,
  s = null,
  o = e === me ? 0 : 1,
  r = !1,
  l = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Rs(t),
    ref: t && Kt(t),
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
      : n && (c.shapeFlag |= G(n) ? 8 : 16),
    Mt > 0 &&
      !r &&
      Te &&
      (c.patchFlag > 0 || o & 6) &&
      c.patchFlag !== 32 &&
      Te.push(c),
    c
  );
}
const ee = jr;
function jr(e, t = null, n = null, i = 0, s = null, o = !1) {
  if (((!e || e === _r) && (e = Pe), Nn(e))) {
    const l = Je(e, t, !0);
    return (
      n && ii(l, n),
      Mt > 0 &&
        !o &&
        Te &&
        (l.shapeFlag & 6 ? (Te[Te.indexOf(e)] = l) : Te.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if ((Wr(e) && (e = e.__vccOpts), t)) {
    t = Nr(t);
    let { class: l, style: c } = t;
    l && !G(l) && (t.class = Ft(l)),
      W(c) && (ls(c) && !$(c) && (c = se({}, c)), (t.style = je(c)));
  }
  const r = G(e) ? 1 : tr(e) ? 128 : zr(e) ? 64 : W(e) ? 4 : F(e) ? 2 : 0;
  return L(e, t, n, i, s, r, o, !0);
}
function Nr(e) {
  return e ? (ls(e) || an in e ? se({}, e) : e) : null;
}
function Je(e, t, n = !1) {
  const { props: i, ref: s, patchFlag: o, children: r } = e,
    l = t ? Ds(i || {}, t) : i;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Rs(l),
    ref:
      t && t.ref ? (n && s ? ($(s) ? s.concat(Kt(t)) : [s, Kt(t)]) : Kt(t)) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: r,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== me ? (o === -1 ? 16 : o | 16) : o,
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
function we(e = " ", t = 0) {
  return ee(ln, null, e, t);
}
function Ai(e = "", t = !1) {
  return t ? (ae(), Qt(Pe, null, e)) : ee(Pe, null, e);
}
function Oe(e) {
  return e == null || typeof e == "boolean"
    ? ee(Pe)
    : $(e)
    ? ee(me, null, e.slice())
    : typeof e == "object"
    ? qe(e)
    : ee(ln, null, String(e));
}
function qe(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Je(e);
}
function ii(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null) t = null;
  else if ($(t)) n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), ii(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(an in t)
        ? (t._ctx = be)
        : s === 3 &&
          be &&
          (be.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    F(t)
      ? ((t = { default: t, _ctx: be }), (n = 32))
      : ((t = String(t)), i & 64 ? ((n = 16), (t = [we(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Ds(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const s in i)
      if (s === "class")
        t.class !== i.class && (t.class = Ft([t.class, i.class]));
      else if (s === "style") t.style = je([t.style, i.style]);
      else if (Xt(s)) {
        const o = t[s],
          r = i[s];
        r &&
          o !== r &&
          !($(o) && o.includes(r)) &&
          (t[s] = o ? [].concat(o, r) : r);
      } else s !== "" && (t[s] = i[s]);
  }
  return t;
}
function Me(e, t, n, i = null) {
  ve(e, t, 7, [n, i]);
}
const Rr = Ss();
let Dr = 0;
function Hr(e, t, n) {
  const i = e.type,
    s = (t ? t.appContext : e.appContext) || Rr,
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
      propsOptions: Ms(i, s),
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
    (o.emit = Qo.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let Z = null;
const Br = () => Z || be,
  gt = (e) => {
    (Z = e), e.scope.on();
  },
  lt = () => {
    Z && Z.scope.off(), (Z = null);
  };
function Hs(e) {
  return e.vnode.shapeFlag & 4;
}
let Ot = !1;
function kr(e, t = !1) {
  Ot = t;
  const { props: n, children: i } = e.vnode,
    s = Hs(e);
  Er(e, n, s, t), Pr(e, i);
  const o = s ? qr(e, t) : void 0;
  return (Ot = !1), o;
}
function qr(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = as(new Proxy(e.ctx, br)));
  const { setup: i } = n;
  if (i) {
    const s = (e.setupContext = i.length > 1 ? Kr(e) : null);
    gt(e), bt();
    const o = Ke(i, e, 0, [e.props, s]);
    if ((vt(), lt(), Wi(o))) {
      if ((o.then(lt, lt), t))
        return o
          .then((r) => {
            Li(e, r, t);
          })
          .catch((r) => {
            nn(r, e, 0);
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
let $i;
function Bs(e, t, n) {
  const i = e.type;
  if (!e.render) {
    if (!t && $i && !i.render) {
      const s = i.template || ti(e).template;
      if (s) {
        const { isCustomElement: o, compilerOptions: r } = e.appContext.config,
          { delimiters: l, compilerOptions: c } = i,
          f = se(se({ isCustomElement: o, delimiters: l }, r), c);
        i.render = $i(s, f);
      }
    }
    e.render = i.render || Ie;
  }
  gt(e), bt(), vr(e), vt(), lt();
}
function Ur(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return de(e, "get", "$attrs"), t[n];
    },
  });
}
function Kr(e) {
  const t = (i) => {
    e.exposed = i || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Ur(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function cn(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(fs(as(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in Tt) return Tt[n](e);
        },
        has(t, n) {
          return n in t || n in Tt;
        },
      }))
    );
}
function Wr(e) {
  return F(e) && "__vccOpts" in e;
}
const Vr = (e, t) => qo(e, t, Ot);
function Jr(e, t, n) {
  const i = arguments.length;
  return i === 2
    ? W(t) && !$(t)
      ? Nn(t)
        ? ee(e, null, [t])
        : ee(e, t)
      : ee(e, null, t)
    : (i > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : i === 3 && Nn(n) && (n = [n]),
      ee(e, t, n));
}
const Yr = Symbol(""),
  Qr = () => qt(Yr),
  Xr = "3.2.47",
  Zr = "http://www.w3.org/2000/svg",
  st = typeof document < "u" ? document : null,
  Mi = st && st.createElement("template"),
  Gr = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, i) => {
      const s = t
        ? st.createElementNS(Zr, e)
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
        Mi.innerHTML = i ? `<svg>${e}</svg>` : e;
        const l = Mi.content;
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
function el(e, t, n) {
  const i = e._vtc;
  i && (t = (t ? [t, ...i] : [...i]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function tl(e, t, n) {
  const i = e.style,
    s = G(n);
  if (n && !s) {
    if (t && !G(t)) for (const o in t) n[o] == null && Rn(i, o, "");
    for (const o in n) Rn(i, o, n[o]);
  } else {
    const o = i.display;
    s ? t !== n && (i.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (i.display = o);
  }
}
const Oi = /\s*!important$/;
function Rn(e, t, n) {
  if ($(n)) n.forEach((i) => Rn(e, t, i));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const i = nl(e, t);
    Oi.test(n)
      ? e.setProperty(_t(i), n.replace(Oi, ""), "important")
      : (e[i] = n);
  }
}
const Fi = ["Webkit", "Moz", "ms"],
  yn = {};
function nl(e, t) {
  const n = yn[t];
  if (n) return n;
  let i = pt(t);
  if (i !== "filter" && i in e) return (yn[t] = i);
  i = Yi(i);
  for (let s = 0; s < Fi.length; s++) {
    const o = Fi[s] + i;
    if (o in e) return (yn[t] = o);
  }
  return t;
}
const zi = "http://www.w3.org/1999/xlink";
function il(e, t, n, i, s) {
  if (i && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(zi, t.slice(6, t.length))
      : e.setAttributeNS(zi, t, n);
  else {
    const o = Zs(t);
    n == null || (o && !qi(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? "" : n);
  }
}
function sl(e, t, n, i, s, o, r) {
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
function ol(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function rl(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
function ll(e, t, n, i, s = null) {
  const o = e._vei || (e._vei = {}),
    r = o[t];
  if (i && r) r.value = i;
  else {
    const [l, c] = al(t);
    if (i) {
      const f = (o[t] = fl(i, s));
      ol(e, l, f, c);
    } else r && (rl(e, l, r, c), (o[t] = void 0));
  }
}
const Si = /(?:Once|Passive|Capture)$/;
function al(e) {
  let t;
  if (Si.test(e)) {
    t = {};
    let i;
    for (; (i = e.match(Si)); )
      (e = e.slice(0, e.length - i[0].length)), (t[i[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : _t(e.slice(2)), t];
}
let xn = 0;
const cl = Promise.resolve(),
  ul = () => xn || (cl.then(() => (xn = 0)), (xn = Date.now()));
function fl(e, t) {
  const n = (i) => {
    if (!i._vts) i._vts = Date.now();
    else if (i._vts <= n.attached) return;
    ve(dl(i, n.value), t, 5, [i]);
  };
  return (n.value = e), (n.attached = ul()), n;
}
function dl(e, t) {
  if ($(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((i) => (s) => !s._stopped && i && i(s))
    );
  } else return t;
}
const ji = /^on[a-z]/,
  hl = (e, t, n, i, s = !1, o, r, l, c) => {
    t === "class"
      ? el(e, i, s)
      : t === "style"
      ? tl(e, n, i)
      : Xt(t)
      ? Bn(t) || ll(e, t, n, i, r)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : pl(e, t, i, s)
        )
      ? sl(e, t, i, o, r, l, c)
      : (t === "true-value"
          ? (e._trueValue = i)
          : t === "false-value" && (e._falseValue = i),
        il(e, t, i, s));
  };
function pl(e, t, n, i) {
  return i
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && ji.test(t) && F(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (ji.test(t) && G(n))
    ? !1
    : t in e;
}
const Be = "transition",
  wt = "animation",
  si = (e, { slots: t }) => Jr(ws, ml(e), t);
si.displayName = "Transition";
const ks = {
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
si.props = se({}, ws.props, ks);
const Ge = (e, t = []) => {
    $(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Ni = (e) => (e ? ($(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function ml(e) {
  const t = {};
  for (const E in e) E in ks || (t[E] = e[E]);
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
      appearToClass: h = l,
      leaveFromClass: _ = `${n}-leave-from`,
      leaveActiveClass: y = `${n}-leave-active`,
      leaveToClass: P = `${n}-leave-to`,
    } = e,
    S = gl(s),
    A = S && S[0],
    J = S && S[1],
    {
      onBeforeEnter: D,
      onEnter: ce,
      onEnterCancelled: O,
      onLeave: q,
      onLeaveCancelled: te,
      onBeforeAppear: De = D,
      onAppear: Ae = ce,
      onAppearCancelled: z = O,
    } = t,
    Y = (E, V, he) => {
      et(E, V ? h : l), et(E, V ? f : r), he && he();
    },
    U = (E, V) => {
      (E._isLeaving = !1), et(E, _), et(E, P), et(E, y), V && V();
    },
    oe = (E) => (V, he) => {
      const yt = E ? Ae : ce,
        ne = () => Y(V, E, he);
      Ge(yt, [V, ne]),
        Ri(() => {
          et(V, E ? c : o), ke(V, E ? h : l), Ni(yt) || Di(V, i, A, ne);
        });
    };
  return se(t, {
    onBeforeEnter(E) {
      Ge(D, [E]), ke(E, o), ke(E, r);
    },
    onBeforeAppear(E) {
      Ge(De, [E]), ke(E, c), ke(E, f);
    },
    onEnter: oe(!1),
    onAppear: oe(!0),
    onLeave(E, V) {
      E._isLeaving = !0;
      const he = () => U(E, V);
      ke(E, _),
        vl(),
        ke(E, y),
        Ri(() => {
          E._isLeaving && (et(E, _), ke(E, P), Ni(q) || Di(E, i, J, he));
        }),
        Ge(q, [E, he]);
    },
    onEnterCancelled(E) {
      Y(E, !1), Ge(O, [E]);
    },
    onAppearCancelled(E) {
      Y(E, !0), Ge(z, [E]);
    },
    onLeaveCancelled(E) {
      U(E), Ge(te, [E]);
    },
  });
}
function gl(e) {
  if (e == null) return null;
  if (W(e)) return [wn(e.enter), wn(e.leave)];
  {
    const t = wn(e);
    return [t, t];
  }
}
function wn(e) {
  return ro(e);
}
function ke(e, t) {
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
let _l = 0;
function Di(e, t, n, i) {
  const s = (e._endId = ++_l),
    o = () => {
      s === e._endId && i();
    };
  if (n) return setTimeout(o, n);
  const { type: r, timeout: l, propCount: c } = bl(e, t);
  if (!r) return i();
  const f = r + "end";
  let h = 0;
  const _ = () => {
      e.removeEventListener(f, y), o();
    },
    y = (P) => {
      P.target === e && ++h >= c && _();
    };
  setTimeout(() => {
    h < c && _();
  }, l + 1),
    e.addEventListener(f, y);
}
function bl(e, t) {
  const n = window.getComputedStyle(e),
    i = (S) => (n[S] || "").split(", "),
    s = i(`${Be}Delay`),
    o = i(`${Be}Duration`),
    r = Hi(s, o),
    l = i(`${wt}Delay`),
    c = i(`${wt}Duration`),
    f = Hi(l, c);
  let h = null,
    _ = 0,
    y = 0;
  t === Be
    ? r > 0 && ((h = Be), (_ = r), (y = o.length))
    : t === wt
    ? f > 0 && ((h = wt), (_ = f), (y = c.length))
    : ((_ = Math.max(r, f)),
      (h = _ > 0 ? (r > f ? Be : wt) : null),
      (y = h ? (h === Be ? o.length : c.length) : 0));
  const P =
    h === Be && /\b(transform|all)(,|$)/.test(i(`${Be}Property`).toString());
  return { type: h, timeout: _, propCount: y, hasTransform: P };
}
function Hi(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, i) => Bi(n) + Bi(e[i])));
}
function Bi(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function vl() {
  return document.body.offsetHeight;
}
const yl = ["ctrl", "shift", "alt", "meta"],
  xl = {
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
    exact: (e, t) => yl.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Cn =
    (e, t) =>
    (n, ...i) => {
      for (let s = 0; s < t.length; s++) {
        const o = xl[t[s]];
        if (o && o(n, t)) return;
      }
      return e(n, ...i);
    },
  Dn = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e._vod = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : Ct(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: i }) {
      !t != !n &&
        (i
          ? t
            ? (i.beforeEnter(e), Ct(e, !0), i.enter(e))
            : i.leave(e, () => {
                Ct(e, !1);
              })
          : Ct(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Ct(e, t);
    },
  };
function Ct(e, t) {
  e.style.display = t ? e._vod : "none";
}
const wl = se({ patchProp: hl }, Gr);
let ki;
function Cl() {
  return ki || (ki = Mr(wl));
}
const El = (...e) => {
  const t = Cl().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (i) => {
      const s = Tl(i);
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
function Tl(e) {
  return G(e) ? document.querySelector(e) : e;
}
const Il = {
    class:
      "fixed z-40 top-0 left-0 w-full h-16 md:h-20 flex justify-around items-center bg-neutral-900 bg-opacity-95 text-neutral-100 md:text-lg",
  },
  Pl = L(
    "a",
    {
      href: "https://www.instagram.com/macmeart/",
      target: "_blank",
      class: "",
    },
    "Instagram",
    -1
  ),
  Al = L(
    "a",
    { href: "https://www.saatchiart.com/paceprc", target: "_blank", class: "" },
    "Saatchi",
    -1
  ),
  Ll = {
    __name: "Header",
    props: ["lang"],
    setup(e) {
      function t(n) {
        document.getElementById(n).scrollIntoView({ behavior: "smooth" });
      }
      return (n, i) => (
        ae(),
        ye("div", Il, [
          L(
            "a",
            {
              onClick: i[0] || (i[0] = Cn((s) => t("gallery"), ["prevent"])),
              class: "cursor-pointer",
            },
            re(e.lang == "eng" ? "Gallery" : "Galleria"),
            1
          ),
          Pl,
          Al,
          L(
            "a",
            {
              onClick: i[1] || (i[1] = Cn((s) => t("contact"), ["prevent"])),
              class: "cursor-pointer",
            },
            re(e.lang == "eng" ? "Contact" : "Contatta"),
            1
          ),
          L(
            "a",
            {
              onClick:
                i[2] ||
                (i[2] = Cn(
                  (s) => n.$emit("changeLang", e.lang == "eng" ? "ita" : "eng"),
                  ["prevent"]
                )),
              class: "cursor-pointer",
            },
            re(e.lang == "eng" ? "Italiano" : "English"),
            1
          ),
        ])
      );
    },
  },
  $l = "/macmeart/paintings/black-rain-in-gl/main.jpg",
  Ml = "/macmeart/paintings/corruption/main.jpg",
  Ol = "/macmeart/paintings/empathy-would-be-the-answer/main.jpg",
  Fl = "/macmeart/paintings/to-the-absurd/main.jpg",
  zl = "/macmeart/paintings/the-last-supper/main.jpg";
const un = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [i, s] of t) n[i] = s;
    return n;
  },
  Sl = {
    id: "hero",
    class:
      "bg-black w-full h-screen flex justify-center items-center relative overflow-hidden",
  },
  jl = {
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
      function l(c, f, h = !1) {
        f == c.length && (h = !0),
          (f = f % c.length),
          f % 2 == 0 && (n.value = f / 2),
          h || (i.value = c[f]),
          f++,
          setTimeout(() => {
            l(c, f, h);
          }, 1e3);
      }
      return (c, f) => (
        ae(),
        ye("div", Sl, [
          L(
            "img",
            {
              class: "pointer-events-none",
              style: je([
                n.value == 0 ? "opacity:1" : "opacity:0; animation:none",
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
              style: je([
                n.value == 1 ? "opacity:1" : "opacity:0; animation:none",
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
              style: je([
                n.value == 2 ? "opacity:1" : "opacity:0; animation:none",
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
              style: je([
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
              style: je([
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
              class: Ft([
                "uppercase font-bold z-10",
                [i.value == "macmeart" ? "text-[15vw]" : "text-[40vh]"],
              ]),
            },
            re(i.value),
            3
          ),
        ])
      );
    },
  },
  Nl = un(jl, [["__scopeId", "data-v-595e311c"]]),
  qs = "/macmeart/paintings/profile/main.jpg",
  Rl = { class: "flex flex-col items-center justify-center min-h-screen" },
  Dl = { class: "py-12" },
  Hl = {
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
  kl = {
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
  Ql = L("br", { class: "mb-2" }, null, -1),
  Xl = L("br", { class: "mb-2" }, null, -1),
  Zl = L("br", { class: "mb-2" }, null, -1),
  Gl = {
    __name: "Statement",
    props: ["lang"],
    setup(e) {
      return (t, n) => (
        ae(),
        ye("div", Rl, [
          L("div", Dl, [
            L(
              "h2",
              Hl,
              re(e.lang == "eng" ? "Artist's Statement" : "Presentazione"),
              1
            ),
            Bl,
          ]),
          L("div", kl, [
            Mn(
              L(
                "p",
                ql,
                [
                  we(
                    " Le mie opere vogliono generare un'immersione olistica nelle vite umane e in particolare nelle vite di chi sperimenta realtà anche differenti dalle nostre e sono guidate dalla speranza di stimolare in chi le osserva un principio di empatia che avvicini le persone e le renda consapevoli delle emozioni altrui. "
                  ),
                  Ul,
                  we(
                    " L'alfabeto delle mie opere deriva dalla vita vissuta, che ci passa davanti e che non possiamo fingere di non vedere. Abbiamo tutti delle responsabilità per ciò che accade oggi e la denuncia, in qualsiasi modo venga espressa, ci offre l'illusione di non essere del tutto complici di quello che si offre ai nostri occhi quotidianamente. "
                  ),
                  Kl,
                  we(
                    " Il mio lavoro è guidato dal bisogno di trovare un senso alla quotidianità attorno a me, per quanto essa appaia ingiusta, contraddittoria e assurda. Le immagini, le parole, i contenuti vengono raccolti in narrazioni che rappresentano la nostra società consumista, individualista, capitalista e gli oggetti, i personaggi, le evocazioni di espressioni culturali e artistiche passate e presenti si intrecciano in un turbine che emula il costante movimento della vita umana, sempre diversa ma in fondo sempre uguale nel tempo. "
                  ),
                  Wl,
                  we(
                    " Le sopraffazioni, lo sfruttmento, il potere, l'egoismo si ripetono sempre simili nel corso della storia ma anche sempre più potenti e devastanti e la soluzione per raggiungere un'umanità migliore è sempre davanti a noi, ma la nostra individualità non ci permette mai di raggiungerla. Gli artisti passati e alcuni artisti contemporanei influenza fortemente il mio lavoro. I materiali come la tela, la carta, le vernici, i ritagli di lettere ricomposti in anagrammi e altri materiali raccolti per caso, mi permettono di rievocare atmosfere di altre opere e di creare composizioni che appaiono in un primo momento disaggregate e confuse ma che, ad un osservatore pià attento, rivelano storie, messaggi e associazioni chiare e dirette. Questi temi vengono trattati a volte con ironia o sarcasmo, altre con spirito riflessivo e analitico. "
                  ),
                  Vl,
                  we(
                    " Le mie esperienze nella fotografia e nella pittura figurativa sono alla base dei miei lavori e rappresentano comunque ancora una buona parte della mia attività creativa. Vi ringrazio per l'attenzione prestatmi e ringrazio gli importanti artisti contemporanei che mi hanno dato il permessi di citarli in alcuni dei miei lavori. "
                  ),
                ],
                512
              ),
              [[Dn, e.lang == "ita"]]
            ),
            Mn(
              L(
                "p",
                Jl,
                [
                  we(
                    " My works want to generate a holistic immersion in lives and particularly in the lives of those who experience reality as well different from ours and are guided by the hope of stimulating in those who observe them a principle of empathy that brings people closer e make them aware of the emotions of others. "
                  ),
                  Yl,
                  we(
                    " The alphabet of my works derives from lived life, which passes through it ahead and that we can not pretend not to see. We all have of the responsibilities for what happens today and the denunciation, in however it is expressed, it gives us the illusion of not being completely accomplices of what is offered to our eyes daily basis. "
                  ),
                  Ql,
                  we(
                    " My work is driven by the need to make sense of everyday life around me, however unfair it may seem, contradictory and absurd. The images, the words, the contents are collected in narratives that represent our society consumerist, individualist, capitalist and the objects, the characters, the evocations of past cultural and artistic expressions e present intertwine in a whirlwind that emulates the constant movement of human life, always different but basically always the same in time. "
                  ),
                  Xl,
                  we(
                    " Overwhelm, exploitation, power, selfishness yes always repeat similar throughout history but also more and more powerful and devastating and the solution to achieve a humanity best is always ahead of us, but our individuality is not there never allows you to reach it. Past artists and some artists contemporaries strongly influence my work. The materials like the canvas, the paper, the paints, the scraps of letters recomposed in anagrams and other materials collected by chance, allow me to evoke atmospheres of other works and to create compositions that appear at first disaggregated and confused but which, for a more attentive observer, they reveal stories, messages and associations clear and direct. These themes are sometimes treated with irony or sarcasm, others with a reflective and analytical spirit. "
                  ),
                  Zl,
                  we(
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
          ae(),
          ye(
            me,
            null,
            [
              L("div", ta, [
                L("h1", na, re(e.lang == "eng" ? "Gallery" : "Galleria"), 1),
              ]),
              L("div", ia, [
                (ae(!0),
                ye(
                  me,
                  null,
                  As(
                    t.value,
                    (o, r) => (
                      ae(),
                      ye(
                        "div",
                        {
                          class: "shadow-lg cursor-pointer",
                          style: je([
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
  ra = un(oa, [["__scopeId", "data-v-1f13e114"]]);
const la = {
    class:
      "w-screen h-screen fixed top-0 left-0 z-50 bg-slate-100 flex flex-col items-center justify-center",
  },
  aa = {
    __name: "LoadingOverlay",
    setup(e) {
      const t = Ve(!1);
      return (n, i) => (
        ae(),
        ye("div", la, [
          Mn(
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
  ca = un(aa, [["__scopeId", "data-v-2a5d0c51"]]),
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
        ae(),
        ye("div", ua, [
          L("h2", fa, re(e.lang == "eng" ? "Contact" : "Contatta"), 1),
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
  va = ["src"],
  ya = ["src", "onClick"],
  xa = {
    class: "text-center text-2xl font-serif italic mt-8 text-neutral-900",
  },
  wa = {
    class:
      "block m-auto text-center my-8 text-neutral-800 w-4/5 max-w-[60em] font-serif italic before:content-[open-quote] after:content-[close-quote]",
  },
  Ca = { class: "text-center text-2xl font-serif italic text-neutral-900" },
  Ea = {
    class:
      "block m-auto text-center my-8 text-neutral-800 w-4/5 max-w-[60em] font-serif italic",
  },
  Ta = { class: "text-center text-2xl font-serif italic text-neutral-900" },
  Ia = {
    class:
      "block m-auto text-center my-8 text-neutral-800 w-4/5 max-w-[60em] font-serif italic",
  },
  Pa = { class: "text-center text-2xl font-serif italic text-neutral-900" },
  Aa = {
    class:
      "block m-auto text-center my-8 text-neutral-800 w-4/5 max-w-[60em] font-serif italic",
  },
  La = L("div", { class: "mt-28" }, null, -1),
  $a = {
    __name: "PictureModal",
    props: [
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
      const n = Ve(`${e.path}/main.jpg`);
      return (i, s) => (
        ae(),
        ye("div", pa, [
          L(
            "div",
            {
              onClick: s[0] || (s[0] = (o) => i.$emit("closeModal")),
              class:
                "cursor-pointer inline-flex justify-center items-center h-6 w-6 sm:h-10 sm:w-10 fixed top-3 right-3 sm:left-3 border-b-2 border-neutral-900",
            },
            " ✕"
          ),
          L("h2", ma, re(e.titolo), 1),
          L("div", ga, [
            L(
              "img",
              { src: n.value, class: "max-h-[80vh] cursor-pointer pb-6" },
              null,
              8,
              _a
            ),
            L("div", ba, [
              L(
                "img",
                {
                  src: e.path + "/main.jpg",
                  onClick:
                    s[1] || (s[1] = (o) => (n.value = e.path + "/main.jpg")),
                  class: "shrink h-20",
                },
                null,
                8,
                va
              ),
              (ae(!0),
              ye(
                me,
                null,
                As(
                  e.numeroDettagli,
                  (o) => (
                    ae(),
                    ye(
                      "img",
                      {
                        src: `${e.path}/detail-${o}.jpg`,
                        onClick: (r) => (n.value = `${e.path}/detail-${o}.jpg`),
                        class: "shrink h-20 cursor-pointer",
                      },
                      null,
                      8,
                      ya
                    )
                  )
                ),
                256
              )),
            ]),
          ]),
          L("h3", xa, re(e.lang == "eng" ? "Description" : "Descrizione"), 1),
          L(
            "span",
            wa,
            re(
              " " +
                (e.lang == "eng"
                  ? e.descrizioneEnglish
                  : e.descrizioneItaliano) +
                " "
            ),
            1
          ),
          L("h3", Ca, re(e.lang == "eng" ? "Year" : "Anno"), 1),
          L("span", Ea, re(e.anno), 1),
          L("h3", Ta, re(e.lang == "eng" ? "Size" : "Dimensioni"), 1),
          L("span", Ia, re(e.dimensioni), 1),
          L("h3", Pa, re(e.lang == "eng" ? "Materials" : "Materiali"), 1),
          L(
            "span",
            Aa,
            re(e.lang == "eng" ? e.materialiEnglish : e.materialiItaliano),
            1
          ),
          La,
        ])
      );
    },
  };
const Ma = {
    __name: "MainPage",
    setup(e) {
      const t = Ve(!0);
      let n = tn({ picture: void 0 }),
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
        ei(() => {
          window.addEventListener("popstate", () => {
            (n.visible = !1),
              window.history.replaceState(null, null, "/macmeart");
          }),
            window.history.replaceState(null, null, "/macmeart");
        }),
        (r, l) => {
          var c, f;
          return (
            ae(),
            ye(
              "div",
              {
                class: Ft([
                  "h-screen relative bg-neutral-100",
                  [
                    t.value || ((c = _e(n)) != null && c.visible)
                      ? "overflow-hidden"
                      : "overflow-auto",
                  ],
                ]),
              },
              [
                ee(
                  si,
                  { name: "vanish" },
                  {
                    default: vs(() => [
                      t.value ? (ae(), Qt(ca, { key: 0 })) : Ai("", !0),
                    ]),
                    _: 1,
                  }
                ),
                ee(
                  Ll,
                  {
                    lang: _e(i),
                    onChangeLang:
                      l[0] ||
                      (l[0] = (h) => {
                        ie(i) ? (i.value = h) : (i = h);
                      }),
                  },
                  null,
                  8,
                  ["lang"]
                ),
                ee(Nl, {
                  onImagesLoaded: l[1] || (l[1] = (h) => (t.value = !1)),
                }),
                ee(Gl, { lang: _e(i) }, null, 8, ["lang"]),
                ee(
                  ra,
                  {
                    lang: _e(i),
                    onPictureSelected:
                      l[2] ||
                      (l[2] = (h) => {
                        (_e(n).visible = !0), (_e(n).picture = h), s();
                      }),
                  },
                  null,
                  8,
                  ["lang"]
                ),
                (f = _e(n)) != null && f.visible
                  ? (ae(),
                    Qt(
                      $a,
                      Ds({ key: 0, lang: _e(i) }, _e(n).picture, {
                        onCloseModal:
                          l[3] ||
                          (l[3] = (h) => {
                            (_e(n).visible = !1), o();
                          }),
                      }),
                      null,
                      16,
                      ["lang"]
                    ))
                  : Ai("", !0),
                ee(ha, { lang: _e(i) }, null, 8, ["lang"]),
              ],
              2
            )
          );
        }
      );
    },
  },
  Oa = un(Ma, [["__scopeId", "data-v-6b50290c"]]),
  Fa = {
    __name: "App",
    setup(e) {
      return (t, n) => (ae(), Qt(Oa));
    },
  },
  Us = El(Fa);
Us.config.globalProperties.console = window.console;
Us.mount("#app");
