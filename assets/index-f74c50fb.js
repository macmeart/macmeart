(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === "childList")
        for (const o of r.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const r = {};
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function s(i) {
    if (i.ep) return;
    i.ep = !0;
    const r = n(i);
    fetch(i.href, r);
  }
})();
function jn(e, t) {
  const n = Object.create(null),
    s = e.split(",");
  for (let i = 0; i < s.length; i++) n[s[i]] = !0;
  return t ? (i) => !!n[i.toLowerCase()] : (i) => !!n[i];
}
function Fe(e) {
  if (M(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        i = ee(s) ? Ji(s) : Fe(s);
      if (i) for (const r in i) t[r] = i[r];
    }
    return t;
  } else {
    if (ee(e)) return e;
    if (q(e)) return e;
  }
}
const qi = /;(?![^(]*\))/g,
  Wi = /:([^]+)/,
  Vi = /\/\*.*?\*\//gs;
function Ji(e) {
  const t = {};
  return (
    e
      .replace(Vi, "")
      .split(qi)
      .forEach((n) => {
        if (n) {
          const s = n.split(Wi);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function Lt(e) {
  let t = "";
  if (ee(e)) t = e;
  else if (M(e))
    for (let n = 0; n < e.length; n++) {
      const s = Lt(e[n]);
      s && (t += s + " ");
    }
  else if (q(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Yi =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Xi = jn(Yi);
function Ds(e) {
  return !!e || e === "";
}
const wt = (e) =>
    ee(e)
      ? e
      : e == null
      ? ""
      : M(e) || (q(e) && (e.toString === Ks || !F(e.toString)))
      ? JSON.stringify(e, Hs, 2)
      : String(e),
  Hs = (e, t) =>
    t && t.__v_isRef
      ? Hs(e, t.value)
      : ct(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, i]) => ((n[`${s} =>`] = i), n),
            {}
          ),
        }
      : Bs(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : q(t) && !M(t) && !Us(t)
      ? String(t)
      : t,
  W = {},
  lt = [],
  Ce = () => {},
  Zi = () => !1,
  Qi = /^on[^a-z]/,
  Zt = (e) => Qi.test(e),
  Nn = (e) => e.startsWith("onUpdate:"),
  se = Object.assign,
  Rn = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Gi = Object.prototype.hasOwnProperty,
  N = (e, t) => Gi.call(e, t),
  M = Array.isArray,
  ct = (e) => Qt(e) === "[object Map]",
  Bs = (e) => Qt(e) === "[object Set]",
  F = (e) => typeof e == "function",
  ee = (e) => typeof e == "string",
  zn = (e) => typeof e == "symbol",
  q = (e) => e !== null && typeof e == "object",
  ks = (e) => q(e) && F(e.then) && F(e.catch),
  Ks = Object.prototype.toString,
  Qt = (e) => Ks.call(e),
  er = (e) => Qt(e).slice(8, -1),
  Us = (e) => Qt(e) === "[object Object]",
  Dn = (e) =>
    ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Bt = jn(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Gt = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  tr = /-(\w)/g,
  ut = Gt((e) => e.replace(tr, (t, n) => (n ? n.toUpperCase() : ""))),
  nr = /\B([A-Z])/g,
  mt = Gt((e) => e.replace(nr, "-$1").toLowerCase()),
  qs = Gt((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  dn = Gt((e) => (e ? `on${qs(e)}` : "")),
  It = (e, t) => !Object.is(e, t),
  hn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  Wt = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  sr = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  ir = (e) => {
    const t = ee(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let rs;
const rr = () =>
  rs ||
  (rs =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
let ye;
class or {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = ye),
      !t && ye && (this.index = (ye.scopes || (ye.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = ye;
      try {
        return (ye = this), t();
      } finally {
        ye = n;
      }
    }
  }
  on() {
    ye = this;
  }
  off() {
    ye = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i &&
          i !== this &&
          ((this.parent.scopes[this.index] = i), (i.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function lr(e, t = ye) {
  t && t.active && t.effects.push(e);
}
function cr() {
  return ye;
}
const Hn = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  Ws = (e) => (e.w & Ke) > 0,
  Vs = (e) => (e.n & Ke) > 0,
  ar = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Ke;
  },
  fr = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let s = 0; s < t.length; s++) {
        const i = t[s];
        Ws(i) && !Vs(i) ? i.delete(e) : (t[n++] = i),
          (i.w &= ~Ke),
          (i.n &= ~Ke);
      }
      t.length = n;
    }
  },
  xn = new WeakMap();
let Ct = 0,
  Ke = 1;
const wn = 30;
let ve;
const nt = Symbol(""),
  Cn = Symbol("");
class Bn {
  constructor(t, n = null, s) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      lr(this, s);
  }
  run() {
    if (!this.active) return this.fn();
    let t = ve,
      n = Be;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = ve),
        (ve = this),
        (Be = !0),
        (Ke = 1 << ++Ct),
        Ct <= wn ? ar(this) : os(this),
        this.fn()
      );
    } finally {
      Ct <= wn && fr(this),
        (Ke = 1 << --Ct),
        (ve = this.parent),
        (Be = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    ve === this
      ? (this.deferStop = !0)
      : this.active &&
        (os(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function os(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let Be = !0;
const Js = [];
function gt() {
  Js.push(Be), (Be = !1);
}
function _t() {
  const e = Js.pop();
  Be = e === void 0 ? !0 : e;
}
function ue(e, t, n) {
  if (Be && ve) {
    let s = xn.get(e);
    s || xn.set(e, (s = new Map()));
    let i = s.get(n);
    i || s.set(n, (i = Hn())), Ys(i);
  }
}
function Ys(e, t) {
  let n = !1;
  Ct <= wn ? Vs(e) || ((e.n |= Ke), (n = !Ws(e))) : (n = !e.has(ve)),
    n && (e.add(ve), ve.deps.push(e));
}
function Se(e, t, n, s, i, r) {
  const o = xn.get(e);
  if (!o) return;
  let l = [];
  if (t === "clear") l = [...o.values()];
  else if (n === "length" && M(e)) {
    const a = Number(s);
    o.forEach((u, h) => {
      (h === "length" || h >= a) && l.push(u);
    });
  } else
    switch ((n !== void 0 && l.push(o.get(n)), t)) {
      case "add":
        M(e)
          ? Dn(n) && l.push(o.get("length"))
          : (l.push(o.get(nt)), ct(e) && l.push(o.get(Cn)));
        break;
      case "delete":
        M(e) || (l.push(o.get(nt)), ct(e) && l.push(o.get(Cn)));
        break;
      case "set":
        ct(e) && l.push(o.get(nt));
        break;
    }
  if (l.length === 1) l[0] && En(l[0]);
  else {
    const a = [];
    for (const u of l) u && a.push(...u);
    En(Hn(a));
  }
}
function En(e, t) {
  const n = M(e) ? e : [...e];
  for (const s of n) s.computed && ls(s);
  for (const s of n) s.computed || ls(s);
}
function ls(e, t) {
  (e !== ve || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const ur = jn("__proto__,__v_isRef,__isVue"),
  Xs = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(zn)
  ),
  dr = kn(),
  hr = kn(!1, !0),
  pr = kn(!0),
  cs = mr();
function mr() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const s = R(this);
        for (let r = 0, o = this.length; r < o; r++) ue(s, "get", r + "");
        const i = s[t](...n);
        return i === -1 || i === !1 ? s[t](...n.map(R)) : i;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        gt();
        const s = R(this)[t].apply(this, n);
        return _t(), s;
      };
    }),
    e
  );
}
function gr(e) {
  const t = R(this);
  return ue(t, "has", e), t.hasOwnProperty(e);
}
function kn(e = !1, t = !1) {
  return function (s, i, r) {
    if (i === "__v_isReactive") return !e;
    if (i === "__v_isReadonly") return e;
    if (i === "__v_isShallow") return t;
    if (i === "__v_raw" && r === (e ? (t ? Lr : ti) : t ? ei : Gs).get(s))
      return s;
    const o = M(s);
    if (!e) {
      if (o && N(cs, i)) return Reflect.get(cs, i, r);
      if (i === "hasOwnProperty") return gr;
    }
    const l = Reflect.get(s, i, r);
    return (zn(i) ? Xs.has(i) : ur(i)) || (e || ue(s, "get", i), t)
      ? l
      : oe(l)
      ? o && Dn(i)
        ? l
        : l.value
      : q(l)
      ? e
        ? ni(l)
        : tn(l)
      : l;
  };
}
const _r = Zs(),
  br = Zs(!0);
function Zs(e = !1) {
  return function (n, s, i, r) {
    let o = n[s];
    if (dt(o) && oe(o) && !oe(i)) return !1;
    if (
      !e &&
      (!Vt(i) && !dt(i) && ((o = R(o)), (i = R(i))), !M(n) && oe(o) && !oe(i))
    )
      return (o.value = i), !0;
    const l = M(n) && Dn(s) ? Number(s) < n.length : N(n, s),
      a = Reflect.set(n, s, i, r);
    return (
      n === R(r) && (l ? It(i, o) && Se(n, "set", s, i) : Se(n, "add", s, i)), a
    );
  };
}
function yr(e, t) {
  const n = N(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && Se(e, "delete", t, void 0), s;
}
function vr(e, t) {
  const n = Reflect.has(e, t);
  return (!zn(t) || !Xs.has(t)) && ue(e, "has", t), n;
}
function xr(e) {
  return ue(e, "iterate", M(e) ? "length" : nt), Reflect.ownKeys(e);
}
const Qs = { get: dr, set: _r, deleteProperty: yr, has: vr, ownKeys: xr },
  wr = {
    get: pr,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  Cr = se({}, Qs, { get: hr, set: br }),
  Kn = (e) => e,
  en = (e) => Reflect.getPrototypeOf(e);
function jt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const i = R(e),
    r = R(t);
  n || (t !== r && ue(i, "get", t), ue(i, "get", r));
  const { has: o } = en(i),
    l = s ? Kn : n ? Wn : At;
  if (o.call(i, t)) return l(e.get(t));
  if (o.call(i, r)) return l(e.get(r));
  e !== i && e.get(t);
}
function Nt(e, t = !1) {
  const n = this.__v_raw,
    s = R(n),
    i = R(e);
  return (
    t || (e !== i && ue(s, "has", e), ue(s, "has", i)),
    e === i ? n.has(e) : n.has(e) || n.has(i)
  );
}
function Rt(e, t = !1) {
  return (
    (e = e.__v_raw), !t && ue(R(e), "iterate", nt), Reflect.get(e, "size", e)
  );
}
function as(e) {
  e = R(e);
  const t = R(this);
  return en(t).has.call(t, e) || (t.add(e), Se(t, "add", e, e)), this;
}
function fs(e, t) {
  t = R(t);
  const n = R(this),
    { has: s, get: i } = en(n);
  let r = s.call(n, e);
  r || ((e = R(e)), (r = s.call(n, e)));
  const o = i.call(n, e);
  return (
    n.set(e, t), r ? It(t, o) && Se(n, "set", e, t) : Se(n, "add", e, t), this
  );
}
function us(e) {
  const t = R(this),
    { has: n, get: s } = en(t);
  let i = n.call(t, e);
  i || ((e = R(e)), (i = n.call(t, e))), s && s.call(t, e);
  const r = t.delete(e);
  return i && Se(t, "delete", e, void 0), r;
}
function ds() {
  const e = R(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Se(e, "clear", void 0, void 0), n;
}
function zt(e, t) {
  return function (s, i) {
    const r = this,
      o = r.__v_raw,
      l = R(o),
      a = t ? Kn : e ? Wn : At;
    return (
      !e && ue(l, "iterate", nt), o.forEach((u, h) => s.call(i, a(u), a(h), r))
    );
  };
}
function Dt(e, t, n) {
  return function (...s) {
    const i = this.__v_raw,
      r = R(i),
      o = ct(r),
      l = e === "entries" || (e === Symbol.iterator && o),
      a = e === "keys" && o,
      u = i[e](...s),
      h = n ? Kn : t ? Wn : At;
    return (
      !t && ue(r, "iterate", a ? Cn : nt),
      {
        next() {
          const { value: _, done: v } = u.next();
          return v
            ? { value: _, done: v }
            : { value: l ? [h(_[0]), h(_[1])] : h(_), done: v };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Re(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function Er() {
  const e = {
      get(r) {
        return jt(this, r);
      },
      get size() {
        return Rt(this);
      },
      has: Nt,
      add: as,
      set: fs,
      delete: us,
      clear: ds,
      forEach: zt(!1, !1),
    },
    t = {
      get(r) {
        return jt(this, r, !1, !0);
      },
      get size() {
        return Rt(this);
      },
      has: Nt,
      add: as,
      set: fs,
      delete: us,
      clear: ds,
      forEach: zt(!1, !0),
    },
    n = {
      get(r) {
        return jt(this, r, !0);
      },
      get size() {
        return Rt(this, !0);
      },
      has(r) {
        return Nt.call(this, r, !0);
      },
      add: Re("add"),
      set: Re("set"),
      delete: Re("delete"),
      clear: Re("clear"),
      forEach: zt(!0, !1),
    },
    s = {
      get(r) {
        return jt(this, r, !0, !0);
      },
      get size() {
        return Rt(this, !0);
      },
      has(r) {
        return Nt.call(this, r, !0);
      },
      add: Re("add"),
      set: Re("set"),
      delete: Re("delete"),
      clear: Re("clear"),
      forEach: zt(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      (e[r] = Dt(r, !1, !1)),
        (n[r] = Dt(r, !0, !1)),
        (t[r] = Dt(r, !1, !0)),
        (s[r] = Dt(r, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [Tr, Ir, Ar, Or] = Er();
function Un(e, t) {
  const n = t ? (e ? Or : Ar) : e ? Ir : Tr;
  return (s, i, r) =>
    i === "__v_isReactive"
      ? !e
      : i === "__v_isReadonly"
      ? e
      : i === "__v_raw"
      ? s
      : Reflect.get(N(n, i) && i in s ? n : s, i, r);
}
const Mr = { get: Un(!1, !1) },
  Pr = { get: Un(!1, !0) },
  $r = { get: Un(!0, !1) },
  Gs = new WeakMap(),
  ei = new WeakMap(),
  ti = new WeakMap(),
  Lr = new WeakMap();
function Fr(e) {
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
function Sr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Fr(er(e));
}
function tn(e) {
  return dt(e) ? e : qn(e, !1, Qs, Mr, Gs);
}
function jr(e) {
  return qn(e, !1, Cr, Pr, ei);
}
function ni(e) {
  return qn(e, !0, wr, $r, ti);
}
function qn(e, t, n, s, i) {
  if (!q(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const r = i.get(e);
  if (r) return r;
  const o = Sr(e);
  if (o === 0) return e;
  const l = new Proxy(e, o === 2 ? s : n);
  return i.set(e, l), l;
}
function at(e) {
  return dt(e) ? at(e.__v_raw) : !!(e && e.__v_isReactive);
}
function dt(e) {
  return !!(e && e.__v_isReadonly);
}
function Vt(e) {
  return !!(e && e.__v_isShallow);
}
function si(e) {
  return at(e) || dt(e);
}
function R(e) {
  const t = e && e.__v_raw;
  return t ? R(t) : e;
}
function ii(e) {
  return Wt(e, "__v_skip", !0), e;
}
const At = (e) => (q(e) ? tn(e) : e),
  Wn = (e) => (q(e) ? ni(e) : e);
function ri(e) {
  Be && ve && ((e = R(e)), Ys(e.dep || (e.dep = Hn())));
}
function oi(e, t) {
  e = R(e);
  const n = e.dep;
  n && En(n);
}
function oe(e) {
  return !!(e && e.__v_isRef === !0);
}
function ht(e) {
  return Nr(e, !1);
}
function Nr(e, t) {
  return oe(e) ? e : new Rr(e, t);
}
class Rr {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : R(t)),
      (this._value = n ? t : At(t));
  }
  get value() {
    return ri(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Vt(t) || dt(t);
    (t = n ? t : R(t)),
      It(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : At(t)), oi(this));
  }
}
function Ze(e) {
  return oe(e) ? e.value : e;
}
const zr = {
  get: (e, t, n) => Ze(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return oe(i) && !oe(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function li(e) {
  return at(e) ? e : new Proxy(e, zr);
}
var ci;
class Dr {
  constructor(t, n, s, i) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[ci] = !1),
      (this._dirty = !0),
      (this.effect = new Bn(t, () => {
        this._dirty || ((this._dirty = !0), oi(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !i),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = R(this);
    return (
      ri(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
ci = "__v_isReadonly";
function Hr(e, t, n = !1) {
  let s, i;
  const r = F(e);
  return (
    r ? ((s = e), (i = Ce)) : ((s = e.get), (i = e.set)),
    new Dr(s, i, r || !i, n)
  );
}
function ke(e, t, n, s) {
  let i;
  try {
    i = s ? e(...s) : e();
  } catch (r) {
    nn(r, t, n);
  }
  return i;
}
function ge(e, t, n, s) {
  if (F(e)) {
    const r = ke(e, t, n, s);
    return (
      r &&
        ks(r) &&
        r.catch((o) => {
          nn(o, t, n);
        }),
      r
    );
  }
  const i = [];
  for (let r = 0; r < e.length; r++) i.push(ge(e[r], t, n, s));
  return i;
}
function nn(e, t, n, s = !0) {
  const i = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const o = t.proxy,
      l = n;
    for (; r; ) {
      const u = r.ec;
      if (u) {
        for (let h = 0; h < u.length; h++) if (u[h](e, o, l) === !1) return;
      }
      r = r.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      ke(a, null, 10, [e, o, l]);
      return;
    }
  }
  Br(e, n, i, s);
}
function Br(e, t, n, s = !0) {
  console.error(e);
}
let Ot = !1,
  Tn = !1;
const re = [];
let Pe = 0;
const ft = [];
let Le = null,
  Ge = 0;
const ai = Promise.resolve();
let Vn = null;
function kr(e) {
  const t = Vn || ai;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Kr(e) {
  let t = Pe + 1,
    n = re.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1;
    Mt(re[s]) < e ? (t = s + 1) : (n = s);
  }
  return t;
}
function Jn(e) {
  (!re.length || !re.includes(e, Ot && e.allowRecurse ? Pe + 1 : Pe)) &&
    (e.id == null ? re.push(e) : re.splice(Kr(e.id), 0, e), fi());
}
function fi() {
  !Ot && !Tn && ((Tn = !0), (Vn = ai.then(di)));
}
function Ur(e) {
  const t = re.indexOf(e);
  t > Pe && re.splice(t, 1);
}
function qr(e) {
  M(e)
    ? ft.push(...e)
    : (!Le || !Le.includes(e, e.allowRecurse ? Ge + 1 : Ge)) && ft.push(e),
    fi();
}
function hs(e, t = Ot ? Pe + 1 : 0) {
  for (; t < re.length; t++) {
    const n = re[t];
    n && n.pre && (re.splice(t, 1), t--, n());
  }
}
function ui(e) {
  if (ft.length) {
    const t = [...new Set(ft)];
    if (((ft.length = 0), Le)) {
      Le.push(...t);
      return;
    }
    for (Le = t, Le.sort((n, s) => Mt(n) - Mt(s)), Ge = 0; Ge < Le.length; Ge++)
      Le[Ge]();
    (Le = null), (Ge = 0);
  }
}
const Mt = (e) => (e.id == null ? 1 / 0 : e.id),
  Wr = (e, t) => {
    const n = Mt(e) - Mt(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function di(e) {
  (Tn = !1), (Ot = !0), re.sort(Wr);
  const t = Ce;
  try {
    for (Pe = 0; Pe < re.length; Pe++) {
      const n = re[Pe];
      n && n.active !== !1 && ke(n, null, 14);
    }
  } finally {
    (Pe = 0),
      (re.length = 0),
      ui(),
      (Ot = !1),
      (Vn = null),
      (re.length || ft.length) && di();
  }
}
function Vr(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || W;
  let i = n;
  const r = t.startsWith("update:"),
    o = r && t.slice(7);
  if (o && o in s) {
    const h = `${o === "modelValue" ? "model" : o}Modifiers`,
      { number: _, trim: v } = s[h] || W;
    v && (i = n.map((A) => (ee(A) ? A.trim() : A))), _ && (i = n.map(sr));
  }
  let l,
    a = s[(l = dn(t))] || s[(l = dn(ut(t)))];
  !a && r && (a = s[(l = dn(mt(t)))]), a && ge(a, e, 6, i);
  const u = s[l + "Once"];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), ge(u, e, 6, i);
  }
}
function hi(e, t, n = !1) {
  const s = t.emitsCache,
    i = s.get(e);
  if (i !== void 0) return i;
  const r = e.emits;
  let o = {},
    l = !1;
  if (!F(e)) {
    const a = (u) => {
      const h = hi(u, t, !0);
      h && ((l = !0), se(o, h));
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  return !r && !l
    ? (q(e) && s.set(e, null), null)
    : (M(r) ? r.forEach((a) => (o[a] = null)) : se(o, r),
      q(e) && s.set(e, o),
      o);
}
function sn(e, t) {
  return !e || !Zt(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      N(e, t[0].toLowerCase() + t.slice(1)) || N(e, mt(t)) || N(e, t));
}
let xe = null,
  rn = null;
function Jt(e) {
  const t = xe;
  return (xe = e), (rn = (e && e.type.__scopeId) || null), t;
}
function pi(e) {
  rn = e;
}
function mi() {
  rn = null;
}
function gi(e, t = xe, n) {
  if (!t || e._n) return e;
  const s = (...i) => {
    s._d && ws(-1);
    const r = Jt(t);
    let o;
    try {
      o = e(...i);
    } finally {
      Jt(r), s._d && ws(1);
    }
    return o;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function pn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    props: r,
    propsOptions: [o],
    slots: l,
    attrs: a,
    emit: u,
    render: h,
    renderCache: _,
    data: v,
    setupState: A,
    ctx: S,
    inheritAttrs: O,
  } = e;
  let J, D;
  const ce = Jt(e);
  try {
    if (n.shapeFlag & 4) {
      const K = i || s;
      (J = Me(h.call(K, K, _, r, A, v, S))), (D = a);
    } else {
      const K = t;
      (J = Me(
        K.length > 1 ? K(r, { attrs: a, slots: l, emit: u }) : K(r, null)
      )),
        (D = t.props ? a : Jr(a));
    }
  } catch (K) {
    (Tt.length = 0), nn(K, e, 1), (J = Q(Ee));
  }
  let $ = J;
  if (D && O !== !1) {
    const K = Object.keys(D),
      { shapeFlag: te } = $;
    K.length && te & 7 && (o && K.some(Nn) && (D = Yr(D, o)), ($ = Ue($, D)));
  }
  return (
    n.dirs && (($ = Ue($)), ($.dirs = $.dirs ? $.dirs.concat(n.dirs) : n.dirs)),
    n.transition && ($.transition = n.transition),
    (J = $),
    Jt(ce),
    J
  );
}
const Jr = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Zt(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Yr = (e, t) => {
    const n = {};
    for (const s in e) (!Nn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Xr(e, t, n) {
  const { props: s, children: i, component: r } = e,
    { props: o, children: l, patchFlag: a } = t,
    u = r.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return s ? ps(s, o, u) : !!o;
    if (a & 8) {
      const h = t.dynamicProps;
      for (let _ = 0; _ < h.length; _++) {
        const v = h[_];
        if (o[v] !== s[v] && !sn(u, v)) return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable)
      ? !0
      : s === o
      ? !1
      : s
      ? o
        ? ps(s, o, u)
        : !0
      : !!o;
  return !1;
}
function ps(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (t[r] !== e[r] && !sn(n, r)) return !0;
  }
  return !1;
}
function Zr({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const Qr = (e) => e.__isSuspense;
function Gr(e, t) {
  t && t.pendingBranch
    ? M(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : qr(e);
}
function eo(e, t) {
  if (G) {
    let n = G.provides;
    const s = G.parent && G.parent.provides;
    s === n && (n = G.provides = Object.create(s)), (n[e] = t);
  }
}
function kt(e, t, n = !1) {
  const s = G || xe;
  if (s) {
    const i =
      s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides;
    if (i && e in i) return i[e];
    if (arguments.length > 1) return n && F(t) ? t.call(s.proxy) : t;
  }
}
const Ht = {};
function mn(e, t, n) {
  return _i(e, t, n);
}
function _i(
  e,
  t,
  { immediate: n, deep: s, flush: i, onTrack: r, onTrigger: o } = W
) {
  const l = cr() === (G == null ? void 0 : G.scope) ? G : null;
  let a,
    u = !1,
    h = !1;
  if (
    (oe(e)
      ? ((a = () => e.value), (u = Vt(e)))
      : at(e)
      ? ((a = () => e), (s = !0))
      : M(e)
      ? ((h = !0),
        (u = e.some(($) => at($) || Vt($))),
        (a = () =>
          e.map(($) => {
            if (oe($)) return $.value;
            if (at($)) return ot($);
            if (F($)) return ke($, l, 2);
          })))
      : F(e)
      ? t
        ? (a = () => ke(e, l, 2))
        : (a = () => {
            if (!(l && l.isUnmounted)) return _ && _(), ge(e, l, 3, [v]);
          })
      : (a = Ce),
    t && s)
  ) {
    const $ = a;
    a = () => ot($());
  }
  let _,
    v = ($) => {
      _ = D.onStop = () => {
        ke($, l, 4);
      };
    },
    A;
  if ($t)
    if (
      ((v = Ce),
      t ? n && ge(t, l, 3, [a(), h ? [] : void 0, v]) : a(),
      i === "sync")
    ) {
      const $ = Xo();
      A = $.__watcherHandles || ($.__watcherHandles = []);
    } else return Ce;
  let S = h ? new Array(e.length).fill(Ht) : Ht;
  const O = () => {
    if (D.active)
      if (t) {
        const $ = D.run();
        (s || u || (h ? $.some((K, te) => It(K, S[te])) : It($, S))) &&
          (_ && _(),
          ge(t, l, 3, [$, S === Ht ? void 0 : h && S[0] === Ht ? [] : S, v]),
          (S = $));
      } else D.run();
  };
  O.allowRecurse = !!t;
  let J;
  i === "sync"
    ? (J = O)
    : i === "post"
    ? (J = () => fe(O, l && l.suspense))
    : ((O.pre = !0), l && (O.id = l.uid), (J = () => Jn(O)));
  const D = new Bn(a, J);
  t
    ? n
      ? O()
      : (S = D.run())
    : i === "post"
    ? fe(D.run.bind(D), l && l.suspense)
    : D.run();
  const ce = () => {
    D.stop(), l && l.scope && Rn(l.scope.effects, D);
  };
  return A && A.push(ce), ce;
}
function to(e, t, n) {
  const s = this.proxy,
    i = ee(e) ? (e.includes(".") ? bi(s, e) : () => s[e]) : e.bind(s, s);
  let r;
  F(t) ? (r = t) : ((r = t.handler), (n = t));
  const o = G;
  pt(this);
  const l = _i(i, r.bind(s), n);
  return o ? pt(o) : st(), l;
}
function bi(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++) s = s[n[i]];
    return s;
  };
}
function ot(e, t) {
  if (!q(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), oe(e))) ot(e.value, t);
  else if (M(e)) for (let n = 0; n < e.length; n++) ot(e[n], t);
  else if (Bs(e) || ct(e))
    e.forEach((n) => {
      ot(n, t);
    });
  else if (Us(e)) for (const n in e) ot(e[n], t);
  return e;
}
function no() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    Ci(() => {
      e.isMounted = !0;
    }),
    Ei(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const me = [Function, Array],
  so = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: me,
      onEnter: me,
      onAfterEnter: me,
      onEnterCancelled: me,
      onBeforeLeave: me,
      onLeave: me,
      onAfterLeave: me,
      onLeaveCancelled: me,
      onBeforeAppear: me,
      onAppear: me,
      onAfterAppear: me,
      onAppearCancelled: me,
    },
    setup(e, { slots: t }) {
      const n = Bo(),
        s = no();
      let i;
      return () => {
        const r = t.default && xi(t.default(), !0);
        if (!r || !r.length) return;
        let o = r[0];
        if (r.length > 1) {
          for (const O of r)
            if (O.type !== Ee) {
              o = O;
              break;
            }
        }
        const l = R(e),
          { mode: a } = l;
        if (s.isLeaving) return gn(o);
        const u = ms(o);
        if (!u) return gn(o);
        const h = In(u, l, s, n);
        An(u, h);
        const _ = n.subTree,
          v = _ && ms(_);
        let A = !1;
        const { getTransitionKey: S } = u.type;
        if (S) {
          const O = S();
          i === void 0 ? (i = O) : O !== i && ((i = O), (A = !0));
        }
        if (v && v.type !== Ee && (!et(u, v) || A)) {
          const O = In(v, l, s, n);
          if ((An(v, O), a === "out-in"))
            return (
              (s.isLeaving = !0),
              (O.afterLeave = () => {
                (s.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              gn(o)
            );
          a === "in-out" &&
            u.type !== Ee &&
            (O.delayLeave = (J, D, ce) => {
              const $ = vi(s, v);
              ($[String(v.key)] = v),
                (J._leaveCb = () => {
                  D(), (J._leaveCb = void 0), delete h.delayedLeave;
                }),
                (h.delayedLeave = ce);
            });
        }
        return o;
      };
    },
  },
  yi = so;
function vi(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || ((s = Object.create(null)), n.set(t.type, s)), s;
}
function In(e, t, n, s) {
  const {
      appear: i,
      mode: r,
      persisted: o = !1,
      onBeforeEnter: l,
      onEnter: a,
      onAfterEnter: u,
      onEnterCancelled: h,
      onBeforeLeave: _,
      onLeave: v,
      onAfterLeave: A,
      onLeaveCancelled: S,
      onBeforeAppear: O,
      onAppear: J,
      onAfterAppear: D,
      onAppearCancelled: ce,
    } = t,
    $ = String(e.key),
    K = vi(n, e),
    te = (L, Y) => {
      L && ge(L, s, 9, Y);
    },
    Ne = (L, Y) => {
      const U = Y[1];
      te(L, Y),
        M(L) ? L.every((ie) => ie.length <= 1) && U() : L.length <= 1 && U();
    },
    Te = {
      mode: r,
      persisted: o,
      beforeEnter(L) {
        let Y = l;
        if (!n.isMounted)
          if (i) Y = O || l;
          else return;
        L._leaveCb && L._leaveCb(!0);
        const U = K[$];
        U && et(e, U) && U.el._leaveCb && U.el._leaveCb(), te(Y, [L]);
      },
      enter(L) {
        let Y = a,
          U = u,
          ie = h;
        if (!n.isMounted)
          if (i) (Y = J || a), (U = D || u), (ie = ce || h);
          else return;
        let E = !1;
        const V = (L._enterCb = (de) => {
          E ||
            ((E = !0),
            de ? te(ie, [L]) : te(U, [L]),
            Te.delayedLeave && Te.delayedLeave(),
            (L._enterCb = void 0));
        });
        Y ? Ne(Y, [L, V]) : V();
      },
      leave(L, Y) {
        const U = String(e.key);
        if ((L._enterCb && L._enterCb(!0), n.isUnmounting)) return Y();
        te(_, [L]);
        let ie = !1;
        const E = (L._leaveCb = (V) => {
          ie ||
            ((ie = !0),
            Y(),
            V ? te(S, [L]) : te(A, [L]),
            (L._leaveCb = void 0),
            K[U] === e && delete K[U]);
        });
        (K[U] = e), v ? Ne(v, [L, E]) : E();
      },
      clone(L) {
        return In(L, t, n, s);
      },
    };
  return Te;
}
function gn(e) {
  if (on(e)) return (e = Ue(e)), (e.children = null), e;
}
function ms(e) {
  return on(e) ? (e.children ? e.children[0] : void 0) : e;
}
function An(e, t) {
  e.shapeFlag & 6 && e.component
    ? An(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function xi(e, t = !1, n) {
  let s = [],
    i = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === pe
      ? (o.patchFlag & 128 && i++, (s = s.concat(xi(o.children, t, l))))
      : (t || o.type !== Ee) && s.push(l != null ? Ue(o, { key: l }) : o);
  }
  if (i > 1) for (let r = 0; r < s.length; r++) s[r].patchFlag = -2;
  return s;
}
const Kt = (e) => !!e.type.__asyncLoader,
  on = (e) => e.type.__isKeepAlive;
function io(e, t) {
  wi(e, "a", t);
}
function ro(e, t) {
  wi(e, "da", t);
}
function wi(e, t, n = G) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let i = n;
      for (; i; ) {
        if (i.isDeactivated) return;
        i = i.parent;
      }
      return e();
    });
  if ((ln(t, s, n), n)) {
    let i = n.parent;
    for (; i && i.parent; )
      on(i.parent.vnode) && oo(s, t, n, i), (i = i.parent);
  }
}
function oo(e, t, n, s) {
  const i = ln(t, e, s, !0);
  Ti(() => {
    Rn(s[t], i);
  }, n);
}
function ln(e, t, n = G, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []),
      r =
        t.__weh ||
        (t.__weh = (...o) => {
          if (n.isUnmounted) return;
          gt(), pt(n);
          const l = ge(t, n, e, o);
          return st(), _t(), l;
        });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const je =
    (e) =>
    (t, n = G) =>
      (!$t || e === "sp") && ln(e, (...s) => t(...s), n),
  lo = je("bm"),
  Ci = je("m"),
  co = je("bu"),
  ao = je("u"),
  Ei = je("bum"),
  Ti = je("um"),
  fo = je("sp"),
  uo = je("rtg"),
  ho = je("rtc");
function po(e, t = G) {
  ln("ec", e, t);
}
function Ve(e, t, n, s) {
  const i = e.dirs,
    r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let a = l.dir[s];
    a && (gt(), ge(a, n, 8, [e.el, l, e, t]), _t());
  }
}
const mo = Symbol();
function Ii(e, t, n, s) {
  let i;
  const r = n && n[s];
  if (M(e) || ee(e)) {
    i = new Array(e.length);
    for (let o = 0, l = e.length; o < l; o++)
      i[o] = t(e[o], o, void 0, r && r[o]);
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let o = 0; o < e; o++) i[o] = t(o + 1, o, void 0, r && r[o]);
  } else if (q(e))
    if (e[Symbol.iterator])
      i = Array.from(e, (o, l) => t(o, l, void 0, r && r[l]));
    else {
      const o = Object.keys(e);
      i = new Array(o.length);
      for (let l = 0, a = o.length; l < a; l++) {
        const u = o[l];
        i[l] = t(e[u], u, l, r && r[l]);
      }
    }
  else i = [];
  return n && (n[s] = i), i;
}
const On = (e) => (e ? (zi(e) ? Qn(e) || e.proxy : On(e.parent)) : null),
  Et = se(Object.create(null), {
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
    $options: (e) => Yn(e),
    $forceUpdate: (e) => e.f || (e.f = () => Jn(e.update)),
    $nextTick: (e) => e.n || (e.n = kr.bind(e.proxy)),
    $watch: (e) => to.bind(e),
  }),
  _n = (e, t) => e !== W && !e.__isScriptSetup && N(e, t),
  go = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: i,
        props: r,
        accessCache: o,
        type: l,
        appContext: a,
      } = e;
      let u;
      if (t[0] !== "$") {
        const A = o[t];
        if (A !== void 0)
          switch (A) {
            case 1:
              return s[t];
            case 2:
              return i[t];
            case 4:
              return n[t];
            case 3:
              return r[t];
          }
        else {
          if (_n(s, t)) return (o[t] = 1), s[t];
          if (i !== W && N(i, t)) return (o[t] = 2), i[t];
          if ((u = e.propsOptions[0]) && N(u, t)) return (o[t] = 3), r[t];
          if (n !== W && N(n, t)) return (o[t] = 4), n[t];
          Mn && (o[t] = 0);
        }
      }
      const h = Et[t];
      let _, v;
      if (h) return t === "$attrs" && ue(e, "get", t), h(e);
      if ((_ = l.__cssModules) && (_ = _[t])) return _;
      if (n !== W && N(n, t)) return (o[t] = 4), n[t];
      if (((v = a.config.globalProperties), N(v, t))) return v[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: i, ctx: r } = e;
      return _n(i, t)
        ? ((i[t] = n), !0)
        : s !== W && N(s, t)
        ? ((s[t] = n), !0)
        : N(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((r[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: i,
          propsOptions: r,
        },
      },
      o
    ) {
      let l;
      return (
        !!n[o] ||
        (e !== W && N(e, o)) ||
        _n(t, o) ||
        ((l = r[0]) && N(l, o)) ||
        N(s, o) ||
        N(Et, o) ||
        N(i.config.globalProperties, o)
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
let Mn = !0;
function _o(e) {
  const t = Yn(e),
    n = e.proxy,
    s = e.ctx;
  (Mn = !1), t.beforeCreate && gs(t.beforeCreate, e, "bc");
  const {
    data: i,
    computed: r,
    methods: o,
    watch: l,
    provide: a,
    inject: u,
    created: h,
    beforeMount: _,
    mounted: v,
    beforeUpdate: A,
    updated: S,
    activated: O,
    deactivated: J,
    beforeDestroy: D,
    beforeUnmount: ce,
    destroyed: $,
    unmounted: K,
    render: te,
    renderTracked: Ne,
    renderTriggered: Te,
    errorCaptured: L,
    serverPrefetch: Y,
    expose: U,
    inheritAttrs: ie,
    components: E,
    directives: V,
    filters: de,
  } = t;
  if ((u && bo(u, s, null, e.appContext.config.unwrapInjectedRef), o))
    for (const X in o) {
      const B = o[X];
      F(B) && (s[X] = B.bind(n));
    }
  if (i) {
    const X = i.call(n, n);
    q(X) && (e.data = tn(X));
  }
  if (((Mn = !0), r))
    for (const X in r) {
      const B = r[X],
        qe = F(B) ? B.bind(n, n) : F(B.get) ? B.get.bind(n, n) : Ce,
        Ft = !F(B) && F(B.set) ? B.set.bind(n) : Ce,
        We = Vo({ get: qe, set: Ft });
      Object.defineProperty(s, X, {
        enumerable: !0,
        configurable: !0,
        get: () => We.value,
        set: (Ie) => (We.value = Ie),
      });
    }
  if (l) for (const X in l) Ai(l[X], s, n, X);
  if (a) {
    const X = F(a) ? a.call(n) : a;
    Reflect.ownKeys(X).forEach((B) => {
      eo(B, X[B]);
    });
  }
  h && gs(h, e, "c");
  function ne(X, B) {
    M(B) ? B.forEach((qe) => X(qe.bind(n))) : B && X(B.bind(n));
  }
  if (
    (ne(lo, _),
    ne(Ci, v),
    ne(co, A),
    ne(ao, S),
    ne(io, O),
    ne(ro, J),
    ne(po, L),
    ne(ho, Ne),
    ne(uo, Te),
    ne(Ei, ce),
    ne(Ti, K),
    ne(fo, Y),
    M(U))
  )
    if (U.length) {
      const X = e.exposed || (e.exposed = {});
      U.forEach((B) => {
        Object.defineProperty(X, B, {
          get: () => n[B],
          set: (qe) => (n[B] = qe),
        });
      });
    } else e.exposed || (e.exposed = {});
  te && e.render === Ce && (e.render = te),
    ie != null && (e.inheritAttrs = ie),
    E && (e.components = E),
    V && (e.directives = V);
}
function bo(e, t, n = Ce, s = !1) {
  M(e) && (e = Pn(e));
  for (const i in e) {
    const r = e[i];
    let o;
    q(r)
      ? "default" in r
        ? (o = kt(r.from || i, r.default, !0))
        : (o = kt(r.from || i))
      : (o = kt(r)),
      oe(o) && s
        ? Object.defineProperty(t, i, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (l) => (o.value = l),
          })
        : (t[i] = o);
  }
}
function gs(e, t, n) {
  ge(M(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Ai(e, t, n, s) {
  const i = s.includes(".") ? bi(n, s) : () => n[s];
  if (ee(e)) {
    const r = t[e];
    F(r) && mn(i, r);
  } else if (F(e)) mn(i, e.bind(n));
  else if (q(e))
    if (M(e)) e.forEach((r) => Ai(r, t, n, s));
    else {
      const r = F(e.handler) ? e.handler.bind(n) : t[e.handler];
      F(r) && mn(i, r, e);
    }
}
function Yn(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: i,
      optionsCache: r,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    l = r.get(t);
  let a;
  return (
    l
      ? (a = l)
      : !i.length && !n && !s
      ? (a = t)
      : ((a = {}), i.length && i.forEach((u) => Yt(a, u, o, !0)), Yt(a, t, o)),
    q(t) && r.set(t, a),
    a
  );
}
function Yt(e, t, n, s = !1) {
  const { mixins: i, extends: r } = t;
  r && Yt(e, r, n, !0), i && i.forEach((o) => Yt(e, o, n, !0));
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = yo[o] || (n && n[o]);
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const yo = {
  data: _s,
  props: Qe,
  emits: Qe,
  methods: Qe,
  computed: Qe,
  beforeCreate: ae,
  created: ae,
  beforeMount: ae,
  mounted: ae,
  beforeUpdate: ae,
  updated: ae,
  beforeDestroy: ae,
  beforeUnmount: ae,
  destroyed: ae,
  unmounted: ae,
  activated: ae,
  deactivated: ae,
  errorCaptured: ae,
  serverPrefetch: ae,
  components: Qe,
  directives: Qe,
  watch: xo,
  provide: _s,
  inject: vo,
};
function _s(e, t) {
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
function vo(e, t) {
  return Qe(Pn(e), Pn(t));
}
function Pn(e) {
  if (M(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ae(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Qe(e, t) {
  return e ? se(se(Object.create(null), e), t) : t;
}
function xo(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = se(Object.create(null), e);
  for (const s in t) n[s] = ae(e[s], t[s]);
  return n;
}
function wo(e, t, n, s = !1) {
  const i = {},
    r = {};
  Wt(r, an, 1), (e.propsDefaults = Object.create(null)), Oi(e, t, i, r);
  for (const o in e.propsOptions[0]) o in i || (i[o] = void 0);
  n ? (e.props = s ? i : jr(i)) : e.type.props ? (e.props = i) : (e.props = r),
    (e.attrs = r);
}
function Co(e, t, n, s) {
  const {
      props: i,
      attrs: r,
      vnode: { patchFlag: o },
    } = e,
    l = R(i),
    [a] = e.propsOptions;
  let u = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const h = e.vnode.dynamicProps;
      for (let _ = 0; _ < h.length; _++) {
        let v = h[_];
        if (sn(e.emitsOptions, v)) continue;
        const A = t[v];
        if (a)
          if (N(r, v)) A !== r[v] && ((r[v] = A), (u = !0));
          else {
            const S = ut(v);
            i[S] = $n(a, l, S, A, e, !1);
          }
        else A !== r[v] && ((r[v] = A), (u = !0));
      }
    }
  } else {
    Oi(e, t, i, r) && (u = !0);
    let h;
    for (const _ in l)
      (!t || (!N(t, _) && ((h = mt(_)) === _ || !N(t, h)))) &&
        (a
          ? n &&
            (n[_] !== void 0 || n[h] !== void 0) &&
            (i[_] = $n(a, l, _, void 0, e, !0))
          : delete i[_]);
    if (r !== l) for (const _ in r) (!t || !N(t, _)) && (delete r[_], (u = !0));
  }
  u && Se(e, "set", "$attrs");
}
function Oi(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1,
    l;
  if (t)
    for (let a in t) {
      if (Bt(a)) continue;
      const u = t[a];
      let h;
      i && N(i, (h = ut(a)))
        ? !r || !r.includes(h)
          ? (n[h] = u)
          : ((l || (l = {}))[h] = u)
        : sn(e.emitsOptions, a) ||
          ((!(a in s) || u !== s[a]) && ((s[a] = u), (o = !0)));
    }
  if (r) {
    const a = R(n),
      u = l || W;
    for (let h = 0; h < r.length; h++) {
      const _ = r[h];
      n[_] = $n(i, a, _, u[_], e, !N(u, _));
    }
  }
  return o;
}
function $n(e, t, n, s, i, r) {
  const o = e[n];
  if (o != null) {
    const l = N(o, "default");
    if (l && s === void 0) {
      const a = o.default;
      if (o.type !== Function && F(a)) {
        const { propsDefaults: u } = i;
        n in u ? (s = u[n]) : (pt(i), (s = u[n] = a.call(null, t)), st());
      } else s = a;
    }
    o[0] &&
      (r && !l ? (s = !1) : o[1] && (s === "" || s === mt(n)) && (s = !0));
  }
  return s;
}
function Mi(e, t, n = !1) {
  const s = t.propsCache,
    i = s.get(e);
  if (i) return i;
  const r = e.props,
    o = {},
    l = [];
  let a = !1;
  if (!F(e)) {
    const h = (_) => {
      a = !0;
      const [v, A] = Mi(_, t, !0);
      se(o, v), A && l.push(...A);
    };
    !n && t.mixins.length && t.mixins.forEach(h),
      e.extends && h(e.extends),
      e.mixins && e.mixins.forEach(h);
  }
  if (!r && !a) return q(e) && s.set(e, lt), lt;
  if (M(r))
    for (let h = 0; h < r.length; h++) {
      const _ = ut(r[h]);
      bs(_) && (o[_] = W);
    }
  else if (r)
    for (const h in r) {
      const _ = ut(h);
      if (bs(_)) {
        const v = r[h],
          A = (o[_] = M(v) || F(v) ? { type: v } : Object.assign({}, v));
        if (A) {
          const S = xs(Boolean, A.type),
            O = xs(String, A.type);
          (A[0] = S > -1),
            (A[1] = O < 0 || S < O),
            (S > -1 || N(A, "default")) && l.push(_);
        }
      }
    }
  const u = [o, l];
  return q(e) && s.set(e, u), u;
}
function bs(e) {
  return e[0] !== "$";
}
function ys(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function vs(e, t) {
  return ys(e) === ys(t);
}
function xs(e, t) {
  return M(t) ? t.findIndex((n) => vs(n, e)) : F(t) && vs(t, e) ? 0 : -1;
}
const Pi = (e) => e[0] === "_" || e === "$stable",
  Xn = (e) => (M(e) ? e.map(Me) : [Me(e)]),
  Eo = (e, t, n) => {
    if (t._n) return t;
    const s = gi((...i) => Xn(t(...i)), n);
    return (s._c = !1), s;
  },
  $i = (e, t, n) => {
    const s = e._ctx;
    for (const i in e) {
      if (Pi(i)) continue;
      const r = e[i];
      if (F(r)) t[i] = Eo(i, r, s);
      else if (r != null) {
        const o = Xn(r);
        t[i] = () => o;
      }
    }
  },
  Li = (e, t) => {
    const n = Xn(t);
    e.slots.default = () => n;
  },
  To = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = R(t)), Wt(t, "_", n)) : $i(t, (e.slots = {}));
    } else (e.slots = {}), t && Li(e, t);
    Wt(e.slots, an, 1);
  },
  Io = (e, t, n) => {
    const { vnode: s, slots: i } = e;
    let r = !0,
      o = W;
    if (s.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (r = !1)
          : (se(i, t), !n && l === 1 && delete i._)
        : ((r = !t.$stable), $i(t, i)),
        (o = t);
    } else t && (Li(e, t), (o = { default: 1 }));
    if (r) for (const l in i) !Pi(l) && !(l in o) && delete i[l];
  };
function Fi() {
  return {
    app: null,
    config: {
      isNativeTag: Zi,
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
let Ao = 0;
function Oo(e, t) {
  return function (s, i = null) {
    F(s) || (s = Object.assign({}, s)), i != null && !q(i) && (i = null);
    const r = Fi(),
      o = new Set();
    let l = !1;
    const a = (r.app = {
      _uid: Ao++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Zo,
      get config() {
        return r.config;
      },
      set config(u) {},
      use(u, ...h) {
        return (
          o.has(u) ||
            (u && F(u.install)
              ? (o.add(u), u.install(a, ...h))
              : F(u) && (o.add(u), u(a, ...h))),
          a
        );
      },
      mixin(u) {
        return r.mixins.includes(u) || r.mixins.push(u), a;
      },
      component(u, h) {
        return h ? ((r.components[u] = h), a) : r.components[u];
      },
      directive(u, h) {
        return h ? ((r.directives[u] = h), a) : r.directives[u];
      },
      mount(u, h, _) {
        if (!l) {
          const v = Q(s, i);
          return (
            (v.appContext = r),
            h && t ? t(v, u) : e(v, u, _),
            (l = !0),
            (a._container = u),
            (u.__vue_app__ = a),
            Qn(v.component) || v.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, a._container), delete a._container.__vue_app__);
      },
      provide(u, h) {
        return (r.provides[u] = h), a;
      },
    });
    return a;
  };
}
function Ln(e, t, n, s, i = !1) {
  if (M(e)) {
    e.forEach((v, A) => Ln(v, t && (M(t) ? t[A] : t), n, s, i));
    return;
  }
  if (Kt(s) && !i) return;
  const r = s.shapeFlag & 4 ? Qn(s.component) || s.component.proxy : s.el,
    o = i ? null : r,
    { i: l, r: a } = e,
    u = t && t.r,
    h = l.refs === W ? (l.refs = {}) : l.refs,
    _ = l.setupState;
  if (
    (u != null &&
      u !== a &&
      (ee(u)
        ? ((h[u] = null), N(_, u) && (_[u] = null))
        : oe(u) && (u.value = null)),
    F(a))
  )
    ke(a, l, 12, [o, h]);
  else {
    const v = ee(a),
      A = oe(a);
    if (v || A) {
      const S = () => {
        if (e.f) {
          const O = v ? (N(_, a) ? _[a] : h[a]) : a.value;
          i
            ? M(O) && Rn(O, r)
            : M(O)
            ? O.includes(r) || O.push(r)
            : v
            ? ((h[a] = [r]), N(_, a) && (_[a] = h[a]))
            : ((a.value = [r]), e.k && (h[e.k] = a.value));
        } else
          v
            ? ((h[a] = o), N(_, a) && (_[a] = o))
            : A && ((a.value = o), e.k && (h[e.k] = o));
      };
      o ? ((S.id = -1), fe(S, n)) : S();
    }
  }
}
const fe = Gr;
function Mo(e) {
  return Po(e);
}
function Po(e, t) {
  const n = rr();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: i,
      patchProp: r,
      createElement: o,
      createText: l,
      createComment: a,
      setText: u,
      setElementText: h,
      parentNode: _,
      nextSibling: v,
      setScopeId: A = Ce,
      insertStaticContent: S,
    } = e,
    O = (
      c,
      f,
      d,
      m = null,
      p = null,
      y = null,
      w = !1,
      b = null,
      x = !!f.dynamicChildren
    ) => {
      if (c === f) return;
      c && !et(c, f) && ((m = St(c)), Ie(c, p, y, !0), (c = null)),
        f.patchFlag === -2 && ((x = !1), (f.dynamicChildren = null));
      const { type: g, ref: T, shapeFlag: C } = f;
      switch (g) {
        case cn:
          J(c, f, d, m);
          break;
        case Ee:
          D(c, f, d, m);
          break;
        case Ut:
          c == null && ce(f, d, m, w);
          break;
        case pe:
          E(c, f, d, m, p, y, w, b, x);
          break;
        default:
          C & 1
            ? te(c, f, d, m, p, y, w, b, x)
            : C & 6
            ? V(c, f, d, m, p, y, w, b, x)
            : (C & 64 || C & 128) && g.process(c, f, d, m, p, y, w, b, x, it);
      }
      T != null && p && Ln(T, c && c.ref, y, f || c, !f);
    },
    J = (c, f, d, m) => {
      if (c == null) s((f.el = l(f.children)), d, m);
      else {
        const p = (f.el = c.el);
        f.children !== c.children && u(p, f.children);
      }
    },
    D = (c, f, d, m) => {
      c == null ? s((f.el = a(f.children || "")), d, m) : (f.el = c.el);
    },
    ce = (c, f, d, m) => {
      [c.el, c.anchor] = S(c.children, f, d, m, c.el, c.anchor);
    },
    $ = ({ el: c, anchor: f }, d, m) => {
      let p;
      for (; c && c !== f; ) (p = v(c)), s(c, d, m), (c = p);
      s(f, d, m);
    },
    K = ({ el: c, anchor: f }) => {
      let d;
      for (; c && c !== f; ) (d = v(c)), i(c), (c = d);
      i(f);
    },
    te = (c, f, d, m, p, y, w, b, x) => {
      (w = w || f.type === "svg"),
        c == null ? Ne(f, d, m, p, y, w, b, x) : Y(c, f, p, y, w, b, x);
    },
    Ne = (c, f, d, m, p, y, w, b) => {
      let x, g;
      const { type: T, props: C, shapeFlag: I, transition: P, dirs: j } = c;
      if (
        ((x = c.el = o(c.type, y, C && C.is, C)),
        I & 8
          ? h(x, c.children)
          : I & 16 &&
            L(c.children, x, null, m, p, y && T !== "foreignObject", w, b),
        j && Ve(c, null, m, "created"),
        Te(x, c, c.scopeId, w, m),
        C)
      ) {
        for (const H in C)
          H !== "value" &&
            !Bt(H) &&
            r(x, H, null, C[H], y, c.children, m, p, $e);
        "value" in C && r(x, "value", null, C.value),
          (g = C.onVnodeBeforeMount) && Oe(g, m, c);
      }
      j && Ve(c, null, m, "beforeMount");
      const k = (!p || (p && !p.pendingBranch)) && P && !P.persisted;
      k && P.beforeEnter(x),
        s(x, f, d),
        ((g = C && C.onVnodeMounted) || k || j) &&
          fe(() => {
            g && Oe(g, m, c), k && P.enter(x), j && Ve(c, null, m, "mounted");
          }, p);
    },
    Te = (c, f, d, m, p) => {
      if ((d && A(c, d), m)) for (let y = 0; y < m.length; y++) A(c, m[y]);
      if (p) {
        let y = p.subTree;
        if (f === y) {
          const w = p.vnode;
          Te(c, w, w.scopeId, w.slotScopeIds, p.parent);
        }
      }
    },
    L = (c, f, d, m, p, y, w, b, x = 0) => {
      for (let g = x; g < c.length; g++) {
        const T = (c[g] = b ? He(c[g]) : Me(c[g]));
        O(null, T, f, d, m, p, y, w, b);
      }
    },
    Y = (c, f, d, m, p, y, w) => {
      const b = (f.el = c.el);
      let { patchFlag: x, dynamicChildren: g, dirs: T } = f;
      x |= c.patchFlag & 16;
      const C = c.props || W,
        I = f.props || W;
      let P;
      d && Je(d, !1),
        (P = I.onVnodeBeforeUpdate) && Oe(P, d, f, c),
        T && Ve(f, c, d, "beforeUpdate"),
        d && Je(d, !0);
      const j = p && f.type !== "foreignObject";
      if (
        (g
          ? U(c.dynamicChildren, g, b, d, m, j, y)
          : w || B(c, f, b, null, d, m, j, y, !1),
        x > 0)
      ) {
        if (x & 16) ie(b, f, C, I, d, m, p);
        else if (
          (x & 2 && C.class !== I.class && r(b, "class", null, I.class, p),
          x & 4 && r(b, "style", C.style, I.style, p),
          x & 8)
        ) {
          const k = f.dynamicProps;
          for (let H = 0; H < k.length; H++) {
            const Z = k[H],
              be = C[Z],
              rt = I[Z];
            (rt !== be || Z === "value") &&
              r(b, Z, be, rt, p, c.children, d, m, $e);
          }
        }
        x & 1 && c.children !== f.children && h(b, f.children);
      } else !w && g == null && ie(b, f, C, I, d, m, p);
      ((P = I.onVnodeUpdated) || T) &&
        fe(() => {
          P && Oe(P, d, f, c), T && Ve(f, c, d, "updated");
        }, m);
    },
    U = (c, f, d, m, p, y, w) => {
      for (let b = 0; b < f.length; b++) {
        const x = c[b],
          g = f[b],
          T =
            x.el && (x.type === pe || !et(x, g) || x.shapeFlag & 70)
              ? _(x.el)
              : d;
        O(x, g, T, null, m, p, y, w, !0);
      }
    },
    ie = (c, f, d, m, p, y, w) => {
      if (d !== m) {
        if (d !== W)
          for (const b in d)
            !Bt(b) && !(b in m) && r(c, b, d[b], null, w, f.children, p, y, $e);
        for (const b in m) {
          if (Bt(b)) continue;
          const x = m[b],
            g = d[b];
          x !== g && b !== "value" && r(c, b, g, x, w, f.children, p, y, $e);
        }
        "value" in m && r(c, "value", d.value, m.value);
      }
    },
    E = (c, f, d, m, p, y, w, b, x) => {
      const g = (f.el = c ? c.el : l("")),
        T = (f.anchor = c ? c.anchor : l(""));
      let { patchFlag: C, dynamicChildren: I, slotScopeIds: P } = f;
      P && (b = b ? b.concat(P) : P),
        c == null
          ? (s(g, d, m), s(T, d, m), L(f.children, d, T, p, y, w, b, x))
          : C > 0 && C & 64 && I && c.dynamicChildren
          ? (U(c.dynamicChildren, I, d, p, y, w, b),
            (f.key != null || (p && f === p.subTree)) && Si(c, f, !0))
          : B(c, f, d, T, p, y, w, b, x);
    },
    V = (c, f, d, m, p, y, w, b, x) => {
      (f.slotScopeIds = b),
        c == null
          ? f.shapeFlag & 512
            ? p.ctx.activate(f, d, m, w, x)
            : de(f, d, m, p, y, w, x)
          : yt(c, f, x);
    },
    de = (c, f, d, m, p, y, w) => {
      const b = (c.component = Ho(c, m, p));
      if ((on(c) && (b.ctx.renderer = it), ko(b), b.asyncDep)) {
        if ((p && p.registerDep(b, ne), !c.el)) {
          const x = (b.subTree = Q(Ee));
          D(null, x, f, d);
        }
        return;
      }
      ne(b, c, f, d, p, y, w);
    },
    yt = (c, f, d) => {
      const m = (f.component = c.component);
      if (Xr(c, f, d))
        if (m.asyncDep && !m.asyncResolved) {
          X(m, f, d);
          return;
        } else (m.next = f), Ur(m.update), m.update();
      else (f.el = c.el), (m.vnode = f);
    },
    ne = (c, f, d, m, p, y, w) => {
      const b = () => {
          if (c.isMounted) {
            let { next: T, bu: C, u: I, parent: P, vnode: j } = c,
              k = T,
              H;
            Je(c, !1),
              T ? ((T.el = j.el), X(c, T, w)) : (T = j),
              C && hn(C),
              (H = T.props && T.props.onVnodeBeforeUpdate) && Oe(H, P, T, j),
              Je(c, !0);
            const Z = pn(c),
              be = c.subTree;
            (c.subTree = Z),
              O(be, Z, _(be.el), St(be), c, p, y),
              (T.el = Z.el),
              k === null && Zr(c, Z.el),
              I && fe(I, p),
              (H = T.props && T.props.onVnodeUpdated) &&
                fe(() => Oe(H, P, T, j), p);
          } else {
            let T;
            const { el: C, props: I } = f,
              { bm: P, m: j, parent: k } = c,
              H = Kt(f);
            if (
              (Je(c, !1),
              P && hn(P),
              !H && (T = I && I.onVnodeBeforeMount) && Oe(T, k, f),
              Je(c, !0),
              C && un)
            ) {
              const Z = () => {
                (c.subTree = pn(c)), un(C, c.subTree, c, p, null);
              };
              H
                ? f.type.__asyncLoader().then(() => !c.isUnmounted && Z())
                : Z();
            } else {
              const Z = (c.subTree = pn(c));
              O(null, Z, d, m, c, p, y), (f.el = Z.el);
            }
            if ((j && fe(j, p), !H && (T = I && I.onVnodeMounted))) {
              const Z = f;
              fe(() => Oe(T, k, Z), p);
            }
            (f.shapeFlag & 256 ||
              (k && Kt(k.vnode) && k.vnode.shapeFlag & 256)) &&
              c.a &&
              fe(c.a, p),
              (c.isMounted = !0),
              (f = d = m = null);
          }
        },
        x = (c.effect = new Bn(b, () => Jn(g), c.scope)),
        g = (c.update = () => x.run());
      (g.id = c.uid), Je(c, !0), g();
    },
    X = (c, f, d) => {
      f.component = c;
      const m = c.vnode.props;
      (c.vnode = f),
        (c.next = null),
        Co(c, f.props, m, d),
        Io(c, f.children, d),
        gt(),
        hs(),
        _t();
    },
    B = (c, f, d, m, p, y, w, b, x = !1) => {
      const g = c && c.children,
        T = c ? c.shapeFlag : 0,
        C = f.children,
        { patchFlag: I, shapeFlag: P } = f;
      if (I > 0) {
        if (I & 128) {
          Ft(g, C, d, m, p, y, w, b, x);
          return;
        } else if (I & 256) {
          qe(g, C, d, m, p, y, w, b, x);
          return;
        }
      }
      P & 8
        ? (T & 16 && $e(g, p, y), C !== g && h(d, C))
        : T & 16
        ? P & 16
          ? Ft(g, C, d, m, p, y, w, b, x)
          : $e(g, p, y, !0)
        : (T & 8 && h(d, ""), P & 16 && L(C, d, m, p, y, w, b, x));
    },
    qe = (c, f, d, m, p, y, w, b, x) => {
      (c = c || lt), (f = f || lt);
      const g = c.length,
        T = f.length,
        C = Math.min(g, T);
      let I;
      for (I = 0; I < C; I++) {
        const P = (f[I] = x ? He(f[I]) : Me(f[I]));
        O(c[I], P, d, null, p, y, w, b, x);
      }
      g > T ? $e(c, p, y, !0, !1, C) : L(f, d, m, p, y, w, b, x, C);
    },
    Ft = (c, f, d, m, p, y, w, b, x) => {
      let g = 0;
      const T = f.length;
      let C = c.length - 1,
        I = T - 1;
      for (; g <= C && g <= I; ) {
        const P = c[g],
          j = (f[g] = x ? He(f[g]) : Me(f[g]));
        if (et(P, j)) O(P, j, d, null, p, y, w, b, x);
        else break;
        g++;
      }
      for (; g <= C && g <= I; ) {
        const P = c[C],
          j = (f[I] = x ? He(f[I]) : Me(f[I]));
        if (et(P, j)) O(P, j, d, null, p, y, w, b, x);
        else break;
        C--, I--;
      }
      if (g > C) {
        if (g <= I) {
          const P = I + 1,
            j = P < T ? f[P].el : m;
          for (; g <= I; )
            O(null, (f[g] = x ? He(f[g]) : Me(f[g])), d, j, p, y, w, b, x), g++;
        }
      } else if (g > I) for (; g <= C; ) Ie(c[g], p, y, !0), g++;
      else {
        const P = g,
          j = g,
          k = new Map();
        for (g = j; g <= I; g++) {
          const he = (f[g] = x ? He(f[g]) : Me(f[g]));
          he.key != null && k.set(he.key, g);
        }
        let H,
          Z = 0;
        const be = I - j + 1;
        let rt = !1,
          ns = 0;
        const vt = new Array(be);
        for (g = 0; g < be; g++) vt[g] = 0;
        for (g = P; g <= C; g++) {
          const he = c[g];
          if (Z >= be) {
            Ie(he, p, y, !0);
            continue;
          }
          let Ae;
          if (he.key != null) Ae = k.get(he.key);
          else
            for (H = j; H <= I; H++)
              if (vt[H - j] === 0 && et(he, f[H])) {
                Ae = H;
                break;
              }
          Ae === void 0
            ? Ie(he, p, y, !0)
            : ((vt[Ae - j] = g + 1),
              Ae >= ns ? (ns = Ae) : (rt = !0),
              O(he, f[Ae], d, null, p, y, w, b, x),
              Z++);
        }
        const ss = rt ? $o(vt) : lt;
        for (H = ss.length - 1, g = be - 1; g >= 0; g--) {
          const he = j + g,
            Ae = f[he],
            is = he + 1 < T ? f[he + 1].el : m;
          vt[g] === 0
            ? O(null, Ae, d, is, p, y, w, b, x)
            : rt && (H < 0 || g !== ss[H] ? We(Ae, d, is, 2) : H--);
        }
      }
    },
    We = (c, f, d, m, p = null) => {
      const { el: y, type: w, transition: b, children: x, shapeFlag: g } = c;
      if (g & 6) {
        We(c.component.subTree, f, d, m);
        return;
      }
      if (g & 128) {
        c.suspense.move(f, d, m);
        return;
      }
      if (g & 64) {
        w.move(c, f, d, it);
        return;
      }
      if (w === pe) {
        s(y, f, d);
        for (let C = 0; C < x.length; C++) We(x[C], f, d, m);
        s(c.anchor, f, d);
        return;
      }
      if (w === Ut) {
        $(c, f, d);
        return;
      }
      if (m !== 2 && g & 1 && b)
        if (m === 0) b.beforeEnter(y), s(y, f, d), fe(() => b.enter(y), p);
        else {
          const { leave: C, delayLeave: I, afterLeave: P } = b,
            j = () => s(y, f, d),
            k = () => {
              C(y, () => {
                j(), P && P();
              });
            };
          I ? I(y, j, k) : k();
        }
      else s(y, f, d);
    },
    Ie = (c, f, d, m = !1, p = !1) => {
      const {
        type: y,
        props: w,
        ref: b,
        children: x,
        dynamicChildren: g,
        shapeFlag: T,
        patchFlag: C,
        dirs: I,
      } = c;
      if ((b != null && Ln(b, null, d, c, !0), T & 256)) {
        f.ctx.deactivate(c);
        return;
      }
      const P = T & 1 && I,
        j = !Kt(c);
      let k;
      if ((j && (k = w && w.onVnodeBeforeUnmount) && Oe(k, f, c), T & 6))
        Ui(c.component, d, m);
      else {
        if (T & 128) {
          c.suspense.unmount(d, m);
          return;
        }
        P && Ve(c, null, f, "beforeUnmount"),
          T & 64
            ? c.type.remove(c, f, d, p, it, m)
            : g && (y !== pe || (C > 0 && C & 64))
            ? $e(g, f, d, !1, !0)
            : ((y === pe && C & 384) || (!p && T & 16)) && $e(x, f, d),
          m && es(c);
      }
      ((j && (k = w && w.onVnodeUnmounted)) || P) &&
        fe(() => {
          k && Oe(k, f, c), P && Ve(c, null, f, "unmounted");
        }, d);
    },
    es = (c) => {
      const { type: f, el: d, anchor: m, transition: p } = c;
      if (f === pe) {
        Ki(d, m);
        return;
      }
      if (f === Ut) {
        K(c);
        return;
      }
      const y = () => {
        i(d), p && !p.persisted && p.afterLeave && p.afterLeave();
      };
      if (c.shapeFlag & 1 && p && !p.persisted) {
        const { leave: w, delayLeave: b } = p,
          x = () => w(d, y);
        b ? b(c.el, y, x) : x();
      } else y();
    },
    Ki = (c, f) => {
      let d;
      for (; c !== f; ) (d = v(c)), i(c), (c = d);
      i(f);
    },
    Ui = (c, f, d) => {
      const { bum: m, scope: p, update: y, subTree: w, um: b } = c;
      m && hn(m),
        p.stop(),
        y && ((y.active = !1), Ie(w, c, f, d)),
        b && fe(b, f),
        fe(() => {
          c.isUnmounted = !0;
        }, f),
        f &&
          f.pendingBranch &&
          !f.isUnmounted &&
          c.asyncDep &&
          !c.asyncResolved &&
          c.suspenseId === f.pendingId &&
          (f.deps--, f.deps === 0 && f.resolve());
    },
    $e = (c, f, d, m = !1, p = !1, y = 0) => {
      for (let w = y; w < c.length; w++) Ie(c[w], f, d, m, p);
    },
    St = (c) =>
      c.shapeFlag & 6
        ? St(c.component.subTree)
        : c.shapeFlag & 128
        ? c.suspense.next()
        : v(c.anchor || c.el),
    ts = (c, f, d) => {
      c == null
        ? f._vnode && Ie(f._vnode, null, null, !0)
        : O(f._vnode || null, c, f, null, null, null, d),
        hs(),
        ui(),
        (f._vnode = c);
    },
    it = {
      p: O,
      um: Ie,
      m: We,
      r: es,
      mt: de,
      mc: L,
      pc: B,
      pbc: U,
      n: St,
      o: e,
    };
  let fn, un;
  return (
    t && ([fn, un] = t(it)), { render: ts, hydrate: fn, createApp: Oo(ts, fn) }
  );
}
function Je({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Si(e, t, n = !1) {
  const s = e.children,
    i = t.children;
  if (M(s) && M(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let l = i[r];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = i[r] = He(i[r])), (l.el = o.el)),
        n || Si(o, l)),
        l.type === cn && (l.el = o.el);
    }
}
function $o(e) {
  const t = e.slice(),
    n = [0];
  let s, i, r, o, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const u = e[s];
    if (u !== 0) {
      if (((i = n[n.length - 1]), e[i] < u)) {
        (t[s] = i), n.push(s);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        (l = (r + o) >> 1), e[n[l]] < u ? (r = l + 1) : (o = l);
      u < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), (n[r] = s));
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; ) (n[r] = o), (o = t[o]);
  return n;
}
const Lo = (e) => e.__isTeleport,
  pe = Symbol(void 0),
  cn = Symbol(void 0),
  Ee = Symbol(void 0),
  Ut = Symbol(void 0),
  Tt = [];
let we = null;
function le(e = !1) {
  Tt.push((we = e ? null : []));
}
function Fo() {
  Tt.pop(), (we = Tt[Tt.length - 1] || null);
}
let Pt = 1;
function ws(e) {
  Pt += e;
}
function ji(e) {
  return (
    (e.dynamicChildren = Pt > 0 ? we || lt : null),
    Fo(),
    Pt > 0 && we && we.push(e),
    e
  );
}
function _e(e, t, n, s, i, r) {
  return ji(z(e, t, n, s, i, r, !0));
}
function Xt(e, t, n, s, i) {
  return ji(Q(e, t, n, s, i, !0));
}
function Fn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function et(e, t) {
  return e.type === t.type && e.key === t.key;
}
const an = "__vInternal",
  Ni = ({ key: e }) => e ?? null,
  qt = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? ee(e) || oe(e) || F(e)
        ? { i: xe, r: e, k: t, f: !!n }
        : e
      : null;
function z(
  e,
  t = null,
  n = null,
  s = 0,
  i = null,
  r = e === pe ? 0 : 1,
  o = !1,
  l = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ni(t),
    ref: t && qt(t),
    scopeId: rn,
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
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: xe,
  };
  return (
    l
      ? (Zn(a, n), r & 128 && e.normalize(a))
      : n && (a.shapeFlag |= ee(n) ? 8 : 16),
    Pt > 0 &&
      !o &&
      we &&
      (a.patchFlag > 0 || r & 6) &&
      a.patchFlag !== 32 &&
      we.push(a),
    a
  );
}
const Q = So;
function So(e, t = null, n = null, s = 0, i = null, r = !1) {
  if (((!e || e === mo) && (e = Ee), Fn(e))) {
    const l = Ue(e, t, !0);
    return (
      n && Zn(l, n),
      Pt > 0 &&
        !r &&
        we &&
        (l.shapeFlag & 6 ? (we[we.indexOf(e)] = l) : we.push(l)),
      (l.patchFlag |= -2),
      l
    );
  }
  if ((Wo(e) && (e = e.__vccOpts), t)) {
    t = jo(t);
    let { class: l, style: a } = t;
    l && !ee(l) && (t.class = Lt(l)),
      q(a) && (si(a) && !M(a) && (a = se({}, a)), (t.style = Fe(a)));
  }
  const o = ee(e) ? 1 : Qr(e) ? 128 : Lo(e) ? 64 : q(e) ? 4 : F(e) ? 2 : 0;
  return z(e, t, n, s, i, o, r, !0);
}
function jo(e) {
  return e ? (si(e) || an in e ? se({}, e) : e) : null;
}
function Ue(e, t, n = !1) {
  const { props: s, ref: i, patchFlag: r, children: o } = e,
    l = t ? Ri(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Ni(l),
    ref:
      t && t.ref ? (n && i ? (M(i) ? i.concat(qt(t)) : [i, qt(t)]) : qt(t)) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== pe ? (r === -1 ? 16 : r | 16) : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ue(e.ssContent),
    ssFallback: e.ssFallback && Ue(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function No(e = " ", t = 0) {
  return Q(cn, null, e, t);
}
function Ro(e, t) {
  const n = Q(Ut, null, e);
  return (n.staticCount = t), n;
}
function Cs(e = "", t = !1) {
  return t ? (le(), Xt(Ee, null, e)) : Q(Ee, null, e);
}
function Me(e) {
  return e == null || typeof e == "boolean"
    ? Q(Ee)
    : M(e)
    ? Q(pe, null, e.slice())
    : typeof e == "object"
    ? He(e)
    : Q(cn, null, String(e));
}
function He(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Ue(e);
}
function Zn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (M(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Zn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !(an in t)
        ? (t._ctx = xe)
        : i === 3 &&
          xe &&
          (xe.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    F(t)
      ? ((t = { default: t, _ctx: xe }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [No(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Ri(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = Lt([t.class, s.class]));
      else if (i === "style") t.style = Fe([t.style, s.style]);
      else if (Zt(i)) {
        const r = t[i],
          o = s[i];
        o &&
          r !== o &&
          !(M(r) && r.includes(o)) &&
          (t[i] = r ? [].concat(r, o) : o);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function Oe(e, t, n, s = null) {
  ge(e, t, 7, [n, s]);
}
const zo = Fi();
let Do = 0;
function Ho(e, t, n) {
  const s = e.type,
    i = (t ? t.appContext : e.appContext) || zo,
    r = {
      uid: Do++,
      vnode: e,
      type: s,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new or(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(i.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Mi(s, i),
      emitsOptions: hi(s, i),
      emit: null,
      emitted: null,
      propsDefaults: W,
      inheritAttrs: s.inheritAttrs,
      ctx: W,
      data: W,
      props: W,
      attrs: W,
      slots: W,
      refs: W,
      setupState: W,
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
    (r.ctx = { _: r }),
    (r.root = t ? t.root : r),
    (r.emit = Vr.bind(null, r)),
    e.ce && e.ce(r),
    r
  );
}
let G = null;
const Bo = () => G || xe,
  pt = (e) => {
    (G = e), e.scope.on();
  },
  st = () => {
    G && G.scope.off(), (G = null);
  };
function zi(e) {
  return e.vnode.shapeFlag & 4;
}
let $t = !1;
function ko(e, t = !1) {
  $t = t;
  const { props: n, children: s } = e.vnode,
    i = zi(e);
  wo(e, n, i, t), To(e, s);
  const r = i ? Ko(e, t) : void 0;
  return ($t = !1), r;
}
function Ko(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = ii(new Proxy(e.ctx, go)));
  const { setup: s } = n;
  if (s) {
    const i = (e.setupContext = s.length > 1 ? qo(e) : null);
    pt(e), gt();
    const r = ke(s, e, 0, [e.props, i]);
    if ((_t(), st(), ks(r))) {
      if ((r.then(st, st), t))
        return r
          .then((o) => {
            Es(e, o, t);
          })
          .catch((o) => {
            nn(o, e, 0);
          });
      e.asyncDep = r;
    } else Es(e, r, t);
  } else Di(e, t);
}
function Es(e, t, n) {
  F(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : q(t) && (e.setupState = li(t)),
    Di(e, n);
}
let Ts;
function Di(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Ts && !s.render) {
      const i = s.template || Yn(e).template;
      if (i) {
        const { isCustomElement: r, compilerOptions: o } = e.appContext.config,
          { delimiters: l, compilerOptions: a } = s,
          u = se(se({ isCustomElement: r, delimiters: l }, o), a);
        s.render = Ts(i, u);
      }
    }
    e.render = s.render || Ce;
  }
  pt(e), gt(), _o(e), _t(), st();
}
function Uo(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return ue(e, "get", "$attrs"), t[n];
    },
  });
}
function qo(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Uo(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Qn(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(li(ii(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in Et) return Et[n](e);
        },
        has(t, n) {
          return n in t || n in Et;
        },
      }))
    );
}
function Wo(e) {
  return F(e) && "__vccOpts" in e;
}
const Vo = (e, t) => Hr(e, t, $t);
function Jo(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? q(t) && !M(t)
      ? Fn(t)
        ? Q(e, null, [t])
        : Q(e, t)
      : Q(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && Fn(n) && (n = [n]),
      Q(e, t, n));
}
const Yo = Symbol(""),
  Xo = () => kt(Yo),
  Zo = "3.2.47",
  Qo = "http://www.w3.org/2000/svg",
  tt = typeof document < "u" ? document : null,
  Is = tt && tt.createElement("template"),
  Go = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const i = t
        ? tt.createElementNS(Qo, e)
        : tt.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          i.setAttribute("multiple", s.multiple),
        i
      );
    },
    createText: (e) => tt.createTextNode(e),
    createComment: (e) => tt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => tt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, i, r) {
      const o = n ? n.previousSibling : t.lastChild;
      if (i && (i === r || i.nextSibling))
        for (
          ;
          t.insertBefore(i.cloneNode(!0), n),
            !(i === r || !(i = i.nextSibling));

        );
      else {
        Is.innerHTML = s ? `<svg>${e}</svg>` : e;
        const l = Is.content;
        if (s) {
          const a = l.firstChild;
          for (; a.firstChild; ) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        t.insertBefore(l, n);
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function el(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function tl(e, t, n) {
  const s = e.style,
    i = ee(n);
  if (n && !i) {
    if (t && !ee(t)) for (const r in t) n[r] == null && Sn(s, r, "");
    for (const r in n) Sn(s, r, n[r]);
  } else {
    const r = s.display;
    i ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (s.display = r);
  }
}
const As = /\s*!important$/;
function Sn(e, t, n) {
  if (M(n)) n.forEach((s) => Sn(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = nl(e, t);
    As.test(n)
      ? e.setProperty(mt(s), n.replace(As, ""), "important")
      : (e[s] = n);
  }
}
const Os = ["Webkit", "Moz", "ms"],
  bn = {};
function nl(e, t) {
  const n = bn[t];
  if (n) return n;
  let s = ut(t);
  if (s !== "filter" && s in e) return (bn[t] = s);
  s = qs(s);
  for (let i = 0; i < Os.length; i++) {
    const r = Os[i] + s;
    if (r in e) return (bn[t] = r);
  }
  return t;
}
const Ms = "http://www.w3.org/1999/xlink";
function sl(e, t, n, s, i) {
  if (s && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Ms, t.slice(6, t.length))
      : e.setAttributeNS(Ms, t, n);
  else {
    const r = Xi(t);
    n == null || (r && !Ds(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, r ? "" : n);
  }
}
function il(e, t, n, s, i, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    s && o(s, i, r), (e[t] = n ?? "");
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const a = n ?? "";
    (e.value !== a || e.tagName === "OPTION") && (e.value = a),
      n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean"
      ? (n = Ds(n))
      : n == null && a === "string"
      ? ((n = ""), (l = !0))
      : a === "number" && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(t);
}
function rl(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function ol(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function ll(e, t, n, s, i = null) {
  const r = e._vei || (e._vei = {}),
    o = r[t];
  if (s && o) o.value = s;
  else {
    const [l, a] = cl(t);
    if (s) {
      const u = (r[t] = ul(s, i));
      rl(e, l, u, a);
    } else o && (ol(e, l, o, a), (r[t] = void 0));
  }
}
const Ps = /(?:Once|Passive|Capture)$/;
function cl(e) {
  let t;
  if (Ps.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(Ps)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : mt(e.slice(2)), t];
}
let yn = 0;
const al = Promise.resolve(),
  fl = () => yn || (al.then(() => (yn = 0)), (yn = Date.now()));
function ul(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    ge(dl(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = fl()), n;
}
function dl(e, t) {
  if (M(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (i) => !i._stopped && s && s(i))
    );
  } else return t;
}
const $s = /^on[a-z]/,
  hl = (e, t, n, s, i = !1, r, o, l, a) => {
    t === "class"
      ? el(e, s, i)
      : t === "style"
      ? tl(e, n, s)
      : Zt(t)
      ? Nn(t) || ll(e, t, n, s, o)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : pl(e, t, s, i)
        )
      ? il(e, t, s, r, o, l, a)
      : (t === "true-value"
          ? (e._trueValue = s)
          : t === "false-value" && (e._falseValue = s),
        sl(e, t, s, i));
  };
function pl(e, t, n, s) {
  return s
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && $s.test(t) && F(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      ($s.test(t) && ee(n))
    ? !1
    : t in e;
}
const ze = "transition",
  xt = "animation",
  Gn = (e, { slots: t }) => Jo(yi, ml(e), t);
Gn.displayName = "Transition";
const Hi = {
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
Gn.props = se({}, yi.props, Hi);
const Ye = (e, t = []) => {
    M(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  Ls = (e) => (e ? (M(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function ml(e) {
  const t = {};
  for (const E in e) E in Hi || (t[E] = e[E]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: s,
      duration: i,
      enterFromClass: r = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: a = r,
      appearActiveClass: u = o,
      appearToClass: h = l,
      leaveFromClass: _ = `${n}-leave-from`,
      leaveActiveClass: v = `${n}-leave-active`,
      leaveToClass: A = `${n}-leave-to`,
    } = e,
    S = gl(i),
    O = S && S[0],
    J = S && S[1],
    {
      onBeforeEnter: D,
      onEnter: ce,
      onEnterCancelled: $,
      onLeave: K,
      onLeaveCancelled: te,
      onBeforeAppear: Ne = D,
      onAppear: Te = ce,
      onAppearCancelled: L = $,
    } = t,
    Y = (E, V, de) => {
      Xe(E, V ? h : l), Xe(E, V ? u : o), de && de();
    },
    U = (E, V) => {
      (E._isLeaving = !1), Xe(E, _), Xe(E, A), Xe(E, v), V && V();
    },
    ie = (E) => (V, de) => {
      const yt = E ? Te : ce,
        ne = () => Y(V, E, de);
      Ye(yt, [V, ne]),
        Fs(() => {
          Xe(V, E ? a : r), De(V, E ? h : l), Ls(yt) || Ss(V, s, O, ne);
        });
    };
  return se(t, {
    onBeforeEnter(E) {
      Ye(D, [E]), De(E, r), De(E, o);
    },
    onBeforeAppear(E) {
      Ye(Ne, [E]), De(E, a), De(E, u);
    },
    onEnter: ie(!1),
    onAppear: ie(!0),
    onLeave(E, V) {
      E._isLeaving = !0;
      const de = () => U(E, V);
      De(E, _),
        yl(),
        De(E, v),
        Fs(() => {
          E._isLeaving && (Xe(E, _), De(E, A), Ls(K) || Ss(E, s, J, de));
        }),
        Ye(K, [E, de]);
    },
    onEnterCancelled(E) {
      Y(E, !1), Ye($, [E]);
    },
    onAppearCancelled(E) {
      Y(E, !0), Ye(L, [E]);
    },
    onLeaveCancelled(E) {
      U(E), Ye(te, [E]);
    },
  });
}
function gl(e) {
  if (e == null) return null;
  if (q(e)) return [vn(e.enter), vn(e.leave)];
  {
    const t = vn(e);
    return [t, t];
  }
}
function vn(e) {
  return ir(e);
}
function De(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t);
}
function Xe(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function Fs(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let _l = 0;
function Ss(e, t, n, s) {
  const i = (e._endId = ++_l),
    r = () => {
      i === e._endId && s();
    };
  if (n) return setTimeout(r, n);
  const { type: o, timeout: l, propCount: a } = bl(e, t);
  if (!o) return s();
  const u = o + "end";
  let h = 0;
  const _ = () => {
      e.removeEventListener(u, v), r();
    },
    v = (A) => {
      A.target === e && ++h >= a && _();
    };
  setTimeout(() => {
    h < a && _();
  }, l + 1),
    e.addEventListener(u, v);
}
function bl(e, t) {
  const n = window.getComputedStyle(e),
    s = (S) => (n[S] || "").split(", "),
    i = s(`${ze}Delay`),
    r = s(`${ze}Duration`),
    o = js(i, r),
    l = s(`${xt}Delay`),
    a = s(`${xt}Duration`),
    u = js(l, a);
  let h = null,
    _ = 0,
    v = 0;
  t === ze
    ? o > 0 && ((h = ze), (_ = o), (v = r.length))
    : t === xt
    ? u > 0 && ((h = xt), (_ = u), (v = a.length))
    : ((_ = Math.max(o, u)),
      (h = _ > 0 ? (o > u ? ze : xt) : null),
      (v = h ? (h === ze ? r.length : a.length) : 0));
  const A =
    h === ze && /\b(transform|all)(,|$)/.test(s(`${ze}Property`).toString());
  return { type: h, timeout: _, propCount: v, hasTransform: A };
}
function js(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, s) => Ns(n) + Ns(e[s])));
}
function Ns(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function yl() {
  return document.body.offsetHeight;
}
const vl = ["ctrl", "shift", "alt", "meta"],
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
    exact: (e, t) => vl.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Rs =
    (e, t) =>
    (n, ...s) => {
      for (let i = 0; i < t.length; i++) {
        const r = xl[t[i]];
        if (r && r(n, t)) return;
      }
      return e(n, ...s);
    },
  wl = se({ patchProp: hl }, Go);
let zs;
function Cl() {
  return zs || (zs = Mo(wl));
}
const El = (...e) => {
  const t = Cl().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const i = Tl(s);
      if (!i) return;
      const r = t._component;
      !F(r) && !r.render && !r.template && (r.template = i.innerHTML),
        (i.innerHTML = "");
      const o = n(i, !1, i instanceof SVGElement);
      return (
        i instanceof Element &&
          (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")),
        o
      );
    }),
    t
  );
};
function Tl(e) {
  return ee(e) ? document.querySelector(e) : e;
}
const Il = {
    class:
      "fixed z-40 top-0 left-0 w-full h-16 md:h-20 flex justify-around items-center bg-neutral-900 bg-opacity-95 text-neutral-100 md:text-lg",
  },
  Al = z(
    "a",
    {
      href: "https://www.instagram.com/macmeart/",
      target: "_blank",
      class: "",
    },
    "Instagram",
    -1
  ),
  Ol = z(
    "a",
    { href: "https://www.saatchiart.com/paceprc", target: "_blank", class: "" },
    "Saatchi",
    -1
  ),
  Ml = {
    __name: "Header",
    setup(e) {
      function t(n) {
        document.getElementById(n).scrollIntoView({ behavior: "smooth" });
      }
      return (n, s) => (
        le(),
        _e("div", Il, [
          z(
            "a",
            {
              onClick: s[0] || (s[0] = Rs((i) => t("gallery"), ["prevent"])),
              class: "cursor-pointer",
            },
            "Gallery"
          ),
          Al,
          Ol,
          z(
            "a",
            {
              onClick: s[1] || (s[1] = Rs((i) => t("contact"), ["prevent"])),
              class: "cursor-pointer",
            },
            "Contact"
          ),
        ])
      );
    },
  },
  Pl = "/macmeart/paintings/black-rain-in-gl/main.jpg",
  $l = "/macmeart/paintings/corruption/main.jpg",
  Ll = "/macmeart/paintings/empathy-would-be-the-answer/main.jpg",
  Fl = "/macmeart/paintings/to-the-absurd/main.jpg",
  Sl = "/macmeart/paintings/the-last-supper/main.jpg";
const bt = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, i] of t) n[s] = i;
    return n;
  },
  jl = {
    id: "hero",
    class:
      "bg-black w-full h-screen flex justify-center items-center relative overflow-hidden",
  },
  Nl = {
    __name: "Hero",
    emits: ["imagesLoaded"],
    setup(e, { emit: t }) {
      const n = ht(null),
        s = ht("");
      let i = 0;
      const r = 5;
      function o() {
        i++,
          r == i &&
            (t("imagesLoaded"),
            setTimeout(() => {
              l([..."macmeart".split(""), "macmeart", "macmeart"], 0);
            }, 500));
      }
      function l(a, u, h = !1) {
        u == a.length && (h = !0),
          (u = u % a.length),
          u % 2 == 0 && (n.value = u / 2),
          h || (s.value = a[u]),
          u++,
          setTimeout(() => {
            l(a, u, h);
          }, 1e3);
      }
      return (a, u) => (
        le(),
        _e("div", jl, [
          z(
            "img",
            {
              class: "pointer-events-none",
              style: Fe([
                n.value == 0 ? "opacity:1" : "opacity:0; animation:none",
              ]),
              src: Pl,
              onLoad: o,
            },
            null,
            36
          ),
          z(
            "img",
            {
              class: "pointer-events-none",
              style: Fe([
                n.value == 1 ? "opacity:1" : "opacity:0; animation:none",
              ]),
              src: $l,
              onLoad: o,
            },
            null,
            36
          ),
          z(
            "img",
            {
              class: "pointer-events-none",
              style: Fe([
                n.value == 2 ? "opacity:1" : "opacity:0; animation:none",
              ]),
              src: Ll,
              onLoad: o,
            },
            null,
            36
          ),
          z(
            "img",
            {
              class: "pointer-events-none",
              style: Fe([
                n.value == 3 ? "opacity:1" : "opacity:0; animation:none",
              ]),
              src: Fl,
              onLoad: o,
            },
            null,
            36
          ),
          z(
            "img",
            {
              class: "pointer-events-none",
              style: Fe([
                n.value == 4 ? "opacity:1" : "opacity:0; animation:none",
              ]),
              src: Sl,
              onLoad: o,
            },
            null,
            36
          ),
          z(
            "span",
            {
              style: {
                filter: "invert(1)",
                "mix-blend-mode": "difference",
                "text-shadow": "0px 0px 10px black",
              },
              class: Lt([
                "uppercase font-bold z-10",
                [s.value == "macmeart" ? "text-[15vw]" : "text-[40vh]"],
              ]),
            },
            wt(s.value),
            3
          ),
        ])
      );
    },
  },
  Rl = bt(Nl, [["__scopeId", "data-v-f88dc472"]]),
  Bi = "/macmeart/paintings/profile/main.jpg",
  zl = {},
  Dl = { class: "flex flex-col items-center justify-center min-h-screen" },
  Hl = Ro(
    '<div class="py-12"><h2 class="text-center text-2xl text-neutral-900 font-serif italic py-8">Artist&#39;s Statement</h2><img src="' +
      Bi +
      '" class="w-1/2 md:w-[300px] block m-auto border-2 border-neutral-900 p-2"></div><div class="overflow-auto mt-8 w-4/5 max-w-[60em] font-serif italic before:content-[open-quote] after:content-[close-quote] text-neutral-800 md:max-h-fit"> My works want to generate a holistic immersion in lives and particularly in the lives of those who experience reality as well different from ours and are guided by the hope of stimulating in those who observe them a principle of empathy that brings people closer e make them aware of the emotions of others. <br class="mb-2"> The alphabet of my works derives from lived life, which passes through it ahead and that we can not pretend not to see. We all have of the responsibilities for what happens today and the denunciation, in however it is expressed, it gives us the illusion of not being completely accomplices of what is offered to our eyes daily basis. <br class="mb-2"> My work is driven by the need to make sense of everyday life around me, however unfair it may seem, contradictory and absurd. The images, the words, the contents are collected in narratives that represent our society consumerist, individualist, capitalist and the objects, the characters, the evocations of past cultural and artistic expressions e present intertwine in a whirlwind that emulates the constant movement of human life, always different but basically always the same in time. <br class="mb-2"> Overwhelm, exploitation, power, selfishness yes always repeat similar throughout history but also more and more powerful and devastating and the solution to achieve a humanity best is always ahead of us, but our individuality is not there never allows you to reach it. Past artists and some artists contemporaries strongly influence my work. The materials like the canvas, the paper, the paints, the scraps of letters recomposed in anagrams and other materials collected by chance, allow me to evoke atmospheres of other works and to create compositions that appear at first disaggregated and confused but which, for a more attentive observer, they reveal stories, messages and associations clear and direct. These themes are sometimes treated with irony or sarcasm, others with a reflective and analytical spirit. <br class="mb-2"> My experiences in photography and figurative painting are the basis of my works and still represent a good part of my creative activity. Thank you for your attention and I thank the important contemporary artists who have given me the permission to quote them in some of my works. </div>',
    2
  ),
  Bl = [Hl];
function kl(e, t) {
  return le(), _e("div", Dl, Bl);
}
const Kl = bt(zl, [["render", kl]]),
  Ul = [
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
    },
  ];
const ql = (e) => (pi("data-v-f0421aed"), (e = e()), mi(), e),
  Wl = ql(() =>
    z(
      "div",
      { id: "gallery", class: "scroll-my-24" },
      [
        z(
          "h1",
          {
            class:
              "block m-auto w-fit uppercase border-neutral-900 text-neutral-900 text-2xl border-2 md:text-5xl md:border-4 font-serif py-4 px-12 my-20 tracking-widest",
          },
          "gallery"
        ),
      ],
      -1
    )
  ),
  Vl = { class: "gallery" },
  Jl = ["onClick"],
  Yl = {
    __name: "Gallery",
    setup(e) {
      const t = ht([]),
        n = ht([
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
        Ul.forEach((s) => {
          t.value.push(s);
        }),
        (s, i) => (
          le(),
          _e(
            pe,
            null,
            [
              Wl,
              z("div", Vl, [
                (le(!0),
                _e(
                  pe,
                  null,
                  Ii(
                    t.value,
                    (r, o) => (
                      le(),
                      _e(
                        "div",
                        {
                          class: "shadow-lg cursor-pointer",
                          style: Fe([
                            "grid-area: " + n.value[o],
                            `background: url(${r.path + "/main.jpg"}) ${
                              r.centratura
                            }`,
                            "background-size:cover",
                          ]),
                          onClick: (l) => s.$emit("pictureSelected", r),
                        },
                        null,
                        12,
                        Jl
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
  Xl = bt(Yl, [["__scopeId", "data-v-f0421aed"]]);
const Zl = {},
  Ql = (e) => (pi("data-v-972ab249"), (e = e()), mi(), e),
  Gl = {
    class:
      "w-screen h-screen fixed top-0 left-0 z-50 bg-slate-100 flex flex-col items-center justify-center",
  },
  ec = Ql(() =>
    z(
      "img",
      {
        src: Bi,
        id: "loading-profile",
        class:
          "w-1/2 md:w-[300px] block m-auto border-2 border-neutral-900 p-2",
      },
      null,
      -1
    )
  ),
  tc = [ec];
function nc(e, t) {
  return le(), _e("div", Gl, tc);
}
const sc = bt(Zl, [
    ["render", nc],
    ["__scopeId", "data-v-972ab249"],
  ]),
  ic = {},
  rc = {
    id: "contact",
    class: "h-[20vh] flex flex-col items-center justify-center",
  },
  oc = z(
    "h2",
    { class: "text-center text-2xl font-serif italic text-neutral-900" },
    "Contact",
    -1
  ),
  lc = z(
    "span",
    { class: "text-center text-lg font-serif italic text-neutral-800" },
    "macmeart@proton.me",
    -1
  ),
  cc = [oc, lc];
function ac(e, t) {
  return le(), _e("div", rc, cc);
}
const fc = bt(ic, [["render", ac]]),
  uc = {
    class:
      "h-screen w-screen fixed top-0 left-0 z-50 bg-neutral-100 overflow-auto",
  },
  dc = {
    class:
      "text-center text-3xl font-serif italic mt-12 md:mt-16 mb-8 text-neutral-900",
  },
  hc = { class: "flex flex-col justify-center items-center" },
  pc = ["src"],
  mc = {
    class: "flex w-full h-fit items-center justify-center flex-wrap gap-2",
  },
  gc = ["src"],
  _c = ["src", "onClick"],
  bc = z(
    "h3",
    { class: "text-center text-2xl font-serif italic mt-8 text-neutral-900" },
    "Description",
    -1
  ),
  yc = {
    class:
      "block m-auto text-center my-8 text-neutral-800 w-4/5 max-w-[60em] font-serif italic before:content-[open-quote] after:content-[close-quote]",
  },
  vc = z(
    "h3",
    { class: "text-center text-2xl font-serif italic text-neutral-900" },
    "Year",
    -1
  ),
  xc = {
    class:
      "block m-auto text-center my-8 text-neutral-800 w-4/5 max-w-[60em] font-serif italic",
  },
  wc = z(
    "h3",
    { class: "text-center text-2xl font-serif italic text-neutral-900" },
    "Size",
    -1
  ),
  Cc = {
    class:
      "block m-auto text-center my-8 text-neutral-800 w-4/5 max-w-[60em] font-serif italic",
  },
  Ec = {
    __name: "PictureModal",
    props: [
      "titolo",
      "anno",
      "dimensioni",
      "descrizioneItaliano",
      "descrizioneEnglish",
      "path",
      "centratura",
      "alt",
      "numeroDettagli",
    ],
    setup(e) {
      const n = ht(`${e.path}/main.jpg`);
      return (s, i) => (
        le(),
        _e("div", uc, [
          z(
            "div",
            {
              onClick: i[0] || (i[0] = (r) => s.$emit("closeModal")),
              class:
                "cursor-pointer inline-flex justify-center items-center h-6 w-6 sm:h-10 sm:w-10 fixed top-3 right-3 sm:left-3 border-b-2 border-neutral-900",
            },
            " ✕"
          ),
          z("h2", dc, wt(e.titolo), 1),
          z("div", hc, [
            z(
              "img",
              { src: n.value, class: "max-h-[80vh] cursor-pointer pb-6" },
              null,
              8,
              pc
            ),
            z("div", mc, [
              z(
                "img",
                {
                  src: e.path + "/main.jpg",
                  onClick:
                    i[1] || (i[1] = (r) => (n.value = e.path + "/main.jpg")),
                  class: "shrink h-20",
                },
                null,
                8,
                gc
              ),
              (le(!0),
              _e(
                pe,
                null,
                Ii(
                  e.numeroDettagli,
                  (r) => (
                    le(),
                    _e(
                      "img",
                      {
                        src: `${e.path}/detail-${r}.jpg`,
                        onClick: (o) => (n.value = `${e.path}/detail-${r}.jpg`),
                        class: "shrink h-20 cursor-pointer",
                      },
                      null,
                      8,
                      _c
                    )
                  )
                ),
                256
              )),
            ]),
          ]),
          bc,
          z("span", yc, wt(" " + e.descrizioneEnglish + " "), 1),
          vc,
          z("span", xc, wt(e.anno), 1),
          wc,
          z("span", Cc, wt(e.dimensioni), 1),
        ])
      );
    },
  };
const Tc = {
    __name: "MainPage",
    setup(e) {
      const t = ht(!0);
      let n = tn({ picture: void 0 });
      return (s, i) => {
        var r, o;
        return (
          le(),
          _e(
            "div",
            {
              class: Lt([
                "h-screen relative bg-neutral-100",
                [
                  t.value || ((r = Ze(n)) != null && r.visible)
                    ? "overflow-hidden"
                    : "overflow-auto",
                ],
              ]),
            },
            [
              Q(
                Gn,
                { name: "vanish" },
                {
                  default: gi(() => [
                    t.value ? (le(), Xt(sc, { key: 0 })) : Cs("", !0),
                  ]),
                  _: 1,
                }
              ),
              Q(Ml),
              Q(Rl, { onImagesLoaded: i[0] || (i[0] = (l) => (t.value = !1)) }),
              Q(Kl),
              Q(Xl, {
                onPictureSelected:
                  i[1] ||
                  (i[1] = (l) => {
                    (Ze(n).visible = !0), (Ze(n).picture = l);
                  }),
              }),
              (o = Ze(n)) != null && o.visible
                ? (le(),
                  Xt(
                    Ec,
                    Ri({ key: 0 }, Ze(n).picture, {
                      onCloseModal:
                        i[2] || (i[2] = (l) => (Ze(n).visible = !1)),
                    }),
                    null,
                    16
                  ))
                : Cs("", !0),
              Q(fc),
            ],
            2
          )
        );
      };
    },
  },
  Ic = bt(Tc, [["__scopeId", "data-v-74aad8f5"]]),
  Ac = {
    __name: "App",
    setup(e) {
      return (t, n) => (le(), Xt(Ic));
    },
  },
  ki = El(Ac);
ki.config.globalProperties.console = window.console;
ki.mount("#app");
