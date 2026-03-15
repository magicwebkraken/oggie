var oh = Object.defineProperty;
var hh = (s, t, e) =>
  t in s
    ? oh(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (s[t] = e);
var lh = (s, t) => () => (t || s((t = { exports: {} }).exports, t), t.exports);
var c = (s, t, e) => (hh(s, typeof t != "symbol" ? t + "" : t, e), e),
  Gn = (s, t, e) => {
    if (!t.has(s)) throw TypeError("Cannot " + e);
  };
var h = (s, t, e) => (
    Gn(s, t, "read from private field"), e ? e.call(s) : t.get(s)
  ),
  g = (s, t, e) => {
    if (t.has(s))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(s) : t.set(s, e);
  },
  m = (s, t, e, i) => (
    Gn(s, t, "write to private field"), i ? i.call(s, e) : t.set(s, e), e
  );
var b = (s, t, e) => (Gn(s, t, "access private method"), e);
var Df = lh((Vf, wr) => {
  var ch = {},
    Or = {
      rgb: (s, t, e) => (i) => {
        return (
          (a = e),
          `\x1B[38;5;${
            (n = s) === (r = t) && r === a
              ? n < 8
                ? 16
                : n > 248
                ? 231
                : Math.round(((n - 8) / 247) * 24) + 232
              : 16 +
                36 * Math.round((n / 255) * 5) +
                6 * Math.round((r / 255) * 5) +
                Math.round((a / 255) * 5)
          }m` +
            i +
            "\x1B[39m"
        );
        var n, r, a;
      },
      bold: (s) => "\x1B[1m" + s + "\x1B[22m",
    },
    uh = !(typeof window > "u" || !window.document),
    B =
      (s) =>
      (...t) => {
        const e = (function (n) {
            let r = 0;
            for (let a = 0; a < n.length; a++)
              (r = (r << 5) - r + n.charCodeAt(a)), (r = Math.abs(r & r));
            return [(16711680 & r) >> 16, (65280 & r) >> 8, 255 & r];
          })(s),
          i = (n) =>
            n != null && n.includes(":*")
              ? s.startsWith(n.split(":*")[0])
              : n === s || n === "*";
        uh
          ? i(localStorage.getItem("debug")) &&
            console.log(
              s && `%c${s}`,
              `color: rgb(${e[0]}, ${e[1]}, ${e[2]})`,
              ...t
            )
          : i(ch.DEBUG) &&
            console.log(s && Or.bold(Or.rgb(e[0], e[1], e[2])(s)), ...t);
      };
  typeof wr < "u" && (wr.exports = B);
  const zr = B("compose (internal)"),
    Li = "data-id";
  let ph = 0;
  var vs, Xe, $i, $a, bs, qn, Ui, Ua, Ni, Na;
  const Vi = class Vi {
    constructor(t, e = {}) {
      g(this, $i);
      g(this, bs);
      g(this, Ui);
      g(this, Ni);
      c(this, "root");
      c(this, "id");
      c(this, "name");
      c(this, "props");
      g(this, vs, void 0);
      g(this, Xe, !1);
      var i, n, r;
      this.beforeMount(),
        (this.root = t),
        (this.name =
          e.name ??
          ((n = (i = this.root) == null ? void 0 : i.classList) == null
            ? void 0
            : n[0])),
        (this.props = e.props),
        (this.id = ph++),
        (r = this.root) == null || r.setAttribute(Li, `${this.id}`),
        setTimeout(() => {
          b(this, $i, $a).call(this), b(this, Ui, Ua).call(this);
        }, 0);
    }
    get isMounted() {
      return h(this, Xe);
    }
    beforeMount() {}
    mounted() {}
    unmounted() {}
    _unmounted() {
      zr(`🔴 ${this.name} unmounted`),
        this.unmounted(),
        m(this, Xe, !1),
        b(this, bs, qn).call(this, (t) => {
          t && t._unmounted();
        });
    }
    add(t, e) {
      const i = (e == null ? void 0 : e.name) || (t == null ? void 0 : t.name),
        n = this.root.querySelector(`.${i}`);
      return n ? new t(n, e) : null;
    }
    addAll(t, e) {
      const i = [],
        n = (e == null ? void 0 : e.name) || (t == null ? void 0 : t.name),
        r = this.root.querySelectorAll(`.${n}`);
      if (!(r != null && r.length)) return i;
      for (let a = 0; a < r.length; a++) {
        const o = new t(r[a], e);
        i.push(o);
      }
      return i;
    }
    find(t) {
      var e;
      return (e = this.root) == null
        ? void 0
        : e.querySelector(t.startsWith("_") ? `.${this.name}${t}` : `.${t}`);
    }
    findAll(t) {
      var i;
      const e =
        (i = this.root) == null
          ? void 0
          : i.querySelectorAll(
              t.startsWith("_") ? `.${this.name}${t}` : `.${t}`
            );
      return Array.from(e || []);
    }
    playIn() {
      return Promise.resolve();
    }
    playOut() {
      return Promise.resolve();
    }
  };
  (vs = new WeakMap()),
    (Xe = new WeakMap()),
    ($i = new WeakSet()),
    ($a = function () {
      zr(`🟢 ${this.name} mounted`), this.mounted(), m(this, Xe, !0);
    }),
    (bs = new WeakSet()),
    (qn = function (t) {
      var e;
      (e = Object.keys(this)) == null ||
        e.forEach((i) => {
          const n = this == null ? void 0 : this[i];
          Array.isArray(n)
            ? n.forEach((r) => {
                r instanceof Vi && t(r);
              })
            : n instanceof Vi && t(n);
        });
    }),
    (Ui = new WeakSet()),
    (Ua = function () {
      m(
        this,
        vs,
        new MutationObserver((t) => {
          var e;
          for (const i of t)
            for (const n of i.removedNodes) {
              const r = b(this, Ni, Na).call(this, n),
                a =
                  (e = n.parentNode) == null
                    ? void 0
                    : e.querySelector(`*[${Li}='${r}']`);
              (r && a) ||
                b(this, bs, qn).call(this, (o) => {
                  var l, u;
                  o &&
                    r === (o == null ? void 0 : o.id) &&
                    o != null &&
                    o.isMounted &&
                    (o._unmounted(),
                    (u =
                      (l = o == null ? void 0 : o.observer) == null
                        ? void 0
                        : l.disconnect) == null || u.call(l));
                });
            }
        })
      ),
        this.root &&
          h(this, vs).observe(this.root, { subtree: !0, childList: !0 });
    }),
    (Ni = new WeakSet()),
    (Na = function (t) {
      var e;
      return (
        ((e = t == null ? void 0 : t.getAttribute) == null
          ? void 0
          : e.call(t, Li)) && parseInt(t.getAttribute(Li))
      );
    });
  let V = Vi;
  var be,
    Wt,
    jt,
    Se,
    zt,
    qt,
    Xt,
    He,
    Ht,
    kt,
    Yt,
    Wi,
    Va,
    ji,
    Wa,
    Ss,
    Ms,
    za,
    dh =
      ((za = class {
        constructor() {
          g(this, Wi);
          g(this, ji);
          g(this, be, !1);
          g(this, Wt, void 0);
          g(this, jt, void 0);
          g(this, Se, void 0);
          g(this, zt, void 0);
          g(this, qt, void 0);
          g(this, Xt, void 0);
          g(this, He, void 0);
          g(this, Ht, void 0);
          g(this, kt, void 0);
          g(this, Yt, void 0);
          g(this, Ss, () => {
            document.hidden ? this.pause() : this.play();
          });
          g(this, Ms, (s = performance.now()) => {
            h(this, be) &&
              (h(this, Yt) &&
                h(this, kt) &&
                m(this, Ht, requestAnimationFrame(h(this, Ms))),
              this.raf(s));
          });
          m(this, Wt, []),
            m(this, jt, { delta: null, time: null, elapsed: null }),
            m(this, Xt, 0),
            m(this, Yt, !0),
            m(this, kt, typeof window < "u"),
            b(this, Wi, Va).call(this),
            setTimeout(() => this.play(), 0);
        }
        disable() {
          m(this, Yt, !1);
        }
        add(s) {
          h(this, Wt).push(s);
        }
        remove(s) {
          m(
            this,
            Wt,
            h(this, Wt).filter((t) => t !== s)
          );
        }
        play() {
          m(this, be, !0),
            m(this, Se, performance.now()),
            m(this, zt, h(this, Se)),
            m(this, qt, h(this, Xt) + (h(this, zt) - h(this, Se))),
            m(this, He, 16),
            h(this, Yt) &&
              h(this, kt) &&
              m(this, Ht, requestAnimationFrame(h(this, Ms)));
        }
        pause() {
          m(this, be, !1), m(this, Xt, h(this, qt));
        }
        stop() {
          m(this, be, !1),
            m(this, Xt, 0),
            m(this, qt, 0),
            b(this, ji, Wa).call(this),
            h(this, Yt) &&
              h(this, kt) &&
              h(this, Ht) &&
              (cancelAnimationFrame(h(this, Ht)), m(this, Ht, null));
        }
        raf(s) {
          m(this, He, s - (h(this, zt) || s)),
            m(this, zt, s),
            m(this, qt, h(this, Xt) + (h(this, zt) - h(this, Se))),
            (h(this, jt).delta = h(this, He)),
            (h(this, jt).time = h(this, zt)),
            (h(this, jt).elapsed = h(this, qt));
          for (const t of h(this, Wt)) t(h(this, jt));
        }
      }),
      (be = new WeakMap()),
      (Wt = new WeakMap()),
      (jt = new WeakMap()),
      (Se = new WeakMap()),
      (zt = new WeakMap()),
      (qt = new WeakMap()),
      (Xt = new WeakMap()),
      (He = new WeakMap()),
      (Ht = new WeakMap()),
      (kt = new WeakMap()),
      (Yt = new WeakMap()),
      (Wi = new WeakSet()),
      (Va = function () {
        h(this, kt) &&
          document.addEventListener("visibilitychange", h(this, Ss));
      }),
      (ji = new WeakSet()),
      (Wa = function () {
        h(this, kt) &&
          document.removeEventListener("visibilitychange", h(this, Ss));
      }),
      (Ss = new WeakMap()),
      (Ms = new WeakMap()),
      za),
    We = { ticker: new dh(), duration: 1e3, ease: "linear" };
  function je() {
    const s = {};
    return (
      (s.promise = new Promise((t) => {
        s.resolve = t;
      })),
      s
    );
  }
  function de(s, t, e) {
    return Math.max(s, Math.min(t, e));
  }
  var Xn = (s, t = 1e3) => Math.round(s * t) / t,
    Fn = (s) => (typeof s == "function" ? s() : s),
    gs = () => {},
    fh = {
      in: (s) => s * s,
      out: (s) => s * (2 - s),
      inOut: (s) => (s < 0.5 ? 2 * s * s : (4 - 2 * s) * s - 1),
    },
    gh = {
      in: (s) => s * s * s,
      out: (s) => 1 - Math.pow(1 - s, 3),
      inOut: (s) => (s < 0.5 ? 4 * s * s * s : 1 - Math.pow(-2 * s + 2, 3) / 2),
    },
    mh = {
      in: (s) => s * s * s * s,
      out: (s) => 1 - Math.pow(1 - s, 4),
      inOut: (s) =>
        s < 0.5 ? 8 * s * s * s * s : 1 - Math.pow(-2 * s + 2, 4) / 2,
    },
    yh = {
      in: (s) => s * s * s * s * s,
      out: (s) => 1 - Math.pow(1 - s, 5),
      inOut: (s) =>
        s < 0.5 ? 16 * s * s * s * s * s : 1 - Math.pow(-2 * s + 2, 5) / 2,
    },
    xh = {
      in: (s) => (s === 0 ? 0 : Math.pow(2, 10 * (s - 1))),
      out: (s) => (s === 1 ? 1 : 1 - Math.pow(2, -10 * s)),
      inOut: (s) =>
        s === 0
          ? 0
          : s === 1
          ? 1
          : (s /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (s - 1))
          : 0.5 * (2 - Math.pow(2, -10 * --s)),
    },
    kr = (s) => s,
    wh = (s) => {
      var n;
      let [t, e] = s.split(".");
      t[0] === t[0].toLowerCase() && (t = t[0].toUpperCase() + t.slice(1));
      const i = {
        Linear: kr,
        Power1: fh,
        Power2: gh,
        Power3: mh,
        Power4: yh,
        Expo: xh,
      };
      return ((n = i == null ? void 0 : i[t]) == null ? void 0 : n[e]) ?? kr;
    },
    Rr = new Map(),
    Gr = ["x", "y", "z"],
    Hn = (s, t) => {
      if (s) {
        Array.isArray(s) || (s = [s]);
        for (const e of s) {
          const i = Rr.get(e) || {};
          for (let r in t)
            if (Gr.includes(r)) {
              const a = (o) =>
                (t == null ? void 0 : t[o]) ||
                (i == null ? void 0 : i[o]) ||
                "0px";
              (i.translate3d = `translate3d(${a("x")}, ${a("y")}, ${a("z")})`),
                (i[r] = `${t[r]}`);
            } else
              r.match(/^(translate|rotate|scale|skew)/)
                ? (i[r] = `${r}(${t[r]})`)
                : e.style
                ? (e.style[r] = t[r] && `${t[r]}`)
                : (e[r] = t[r]);
          const n = Object.keys(i)
            .reduce((r, a) => (Gr.includes(a) ? r : r + i[a] + " "), "")
            .trim();
          n !== "" && (e.style.transform = n), Rr.set(e, i);
        }
      }
    },
    vh = 0,
    Is,
    dt,
    Y,
    Rt,
    D,
    tt,
    rt,
    yt,
    ft,
    Z,
    Ps,
    As,
    Es,
    Cs,
    Ls,
    Kt,
    Me,
    _s,
    At,
    Ye,
    Ie,
    Zt,
    Gt,
    we,
    Ts,
    Yn,
    qi,
    ja,
    Xi,
    qa,
    Ke,
    Ti,
    Os,
    Kn,
    Pe,
    fs,
    ka,
    q =
      ((ka = class {
        constructor({
          props: t = null,
          duration: e = We.duration,
          ease: i = We.ease,
          reverseEase: n = i,
          paused: r = !1,
          delay: a = 0,
          initUpdate: o = !1,
          beforeStart: l = gs,
          onUpdate: u = gs,
          onComplete: p = gs,
          debug: d = !1,
          el: f = null,
        }) {
          g(this, Gt);
          g(this, Ts);
          g(this, qi);
          g(this, Xi);
          g(this, Ke);
          g(this, Os);
          g(this, Pe);
          c(this, "ID", ++vh);
          c(this, "ticker");
          c(this, "inTl", !1);
          c(this, "debugEnable");
          g(this, Is, void 0);
          g(this, dt, void 0);
          g(this, Y, 0);
          g(this, Rt, 0);
          g(this, D, 0);
          g(this, tt, !1);
          g(this, rt, !1);
          g(this, yt, !1);
          g(this, ft, void 0);
          g(this, Z, void 0);
          g(this, Ps, void 0);
          g(this, As, void 0);
          g(this, Es, void 0);
          g(this, Cs, void 0);
          g(this, Ls, void 0);
          g(this, Kt, void 0);
          g(this, Me, void 0);
          g(this, _s, void 0);
          g(this, At, je());
          g(this, Ye, void 0);
          g(this, Ie, !1);
          g(this, Zt, async ({ delta: t }) => {
            if (h(this, dt) <= 0) {
              b(this, Gt, we).call(this, (i) => (i.value = i._to));
              const e = {
                props: b(this, Ke, Ti).call(this, h(this, Z), h(this, ft)),
                time: h(this, dt),
                progress: 1,
              };
              return (
                h(this, Kt).call(this, e.props, e.time, e.progress),
                h(this, Me).call(this, e.props, e.time, e.progress),
                h(this, At).resolve(),
                void this.stop()
              );
            }
            m(this, Y, de(0, h(this, dt), h(this, Y) + (h(this, tt) ? -t : t))),
              m(this, D, de(0, Xn(h(this, Y) / h(this, dt)), 1)),
              b(this, Ts, Yn).call(this, h(this, D)),
              m(this, Z, b(this, Ke, Ti).call(this, h(this, Z), h(this, ft))),
              h(this, Kt).call(this, h(this, Z), h(this, Y), h(this, D)),
              b(this, Pe, fs).call(this, "handleTick onUpdate", {
                props: h(this, Z),
                t: h(this, Y),
                p: h(this, D),
              }),
              h(this, tt) ||
                h(this, D) !== 1 ||
                (b(this, Pe, fs).call(this, "handleTick onComplete!"),
                h(this, Me).call(this, h(this, Z), h(this, Y), h(this, D)),
                h(this, At).resolve(),
                this.stop()),
              h(this, tt) &&
                h(this, D) === 0 &&
                (h(this, At).resolve(), this.stop());
          });
          (this.ticker = We.ticker),
            m(this, Is, e),
            m(this, yt, r),
            m(this, As, a),
            m(this, Ps, o),
            m(this, Ls, l),
            m(this, Ye, f),
            m(this, Kt, (y, x, w) => {
              Hn(h(this, Ye), y), u(y, x, w);
            }),
            m(this, Me, (y, x, w) => {
              Hn(h(this, Ye), y), p(y, x, w);
            }),
            (this.debugEnable = d),
            m(this, Es, i),
            m(this, Cs, n),
            m(this, ft, b(this, qi, ja).call(this, t)),
            m(this, ft, this.refreshComputedValues()),
            m(this, Z, b(this, Xi, qa).call(this, h(this, ft))),
            h(this, Ps) &&
              h(this, Kt).call(this, h(this, Z), h(this, Y), h(this, D)),
            h(this, Ls).call(this, h(this, Z), h(this, Y), h(this, D)),
            h(this, yt) || this.play();
        }
        get duration() {
          return h(this, dt);
        }
        get time() {
          return h(this, Y);
        }
        get progress() {
          return h(this, D);
        }
        get isReversed() {
          return h(this, tt);
        }
        get isPlaying() {
          return h(this, rt);
        }
        get isPaused() {
          return h(this, yt);
        }
        get props() {
          return h(this, ft);
        }
        refreshComputedValues() {
          return (
            m(this, dt, Fn(h(this, Is))),
            b(this, Gt, we).call(this, (t) => {
              (t._from = Fn(t.from)), (t._to = Fn(t.to));
            }),
            h(this, ft)
          );
        }
        async play(t = 0, e = !0) {
          if (!h(this, rt) || e) {
            if (!h(this, rt) || !h(this, tt))
              return h(this, rt)
                ? (this.stop(), await this.play(t))
                : (b(this, Gt, we).call(this, (i) => (i.value = i._to * t)),
                  m(this, Y, h(this, dt) * t),
                  m(this, D, t),
                  m(this, tt, !1),
                  m(this, rt, !0),
                  m(this, yt, !1),
                  m(
                    this,
                    _s,
                    setTimeout(
                      () => {
                        this.ticker.add(h(this, Zt));
                      },
                      h(this, Y) > 0 ? 0 : h(this, As)
                    )
                  ),
                  m(this, At, je()),
                  h(this, At).promise);
            m(this, tt, !1);
          }
        }
        async reverse(t = 1, e = !0) {
          if (!h(this, rt) || e) {
            if (!h(this, rt) || h(this, tt))
              return h(this, rt) && h(this, tt)
                ? (this.stop(), await this.reverse(t))
                : (b(this, Gt, we).call(this, (i) => (i.value = i._to * t)),
                  m(this, Y, h(this, dt) * t),
                  m(this, D, t),
                  m(this, tt, !0),
                  m(this, rt, !0),
                  m(this, yt, !1),
                  this.ticker.add(h(this, Zt)),
                  m(this, At, je()),
                  h(this, At).promise);
            m(this, tt, !0);
          }
        }
        pause() {
          m(this, yt, !0),
            m(this, rt, !1),
            m(this, Rt, 0),
            this.inTl || this.ticker.remove(h(this, Zt));
        }
        resume() {
          h(this, yt) &&
            (m(this, yt, !1),
            m(this, rt, !0),
            this.inTl || this.ticker.add(h(this, Zt)));
        }
        stop() {
          (!this.inTl || (this.inTl && h(this, tt))) &&
            (b(this, Gt, we).call(this, (t) => (t.value = t._from)),
            m(this, Y, 0),
            m(this, D, 0)),
            m(this, rt, !1),
            m(this, yt, !1),
            m(this, Rt, 0),
            clearTimeout(h(this, _s)),
            this.inTl || (m(this, tt, !1), this.ticker.remove(h(this, Zt)));
        }
        seek(t, e = !0) {
          h(this, rt) && this.pause(),
            m(this, Rt, h(this, D)),
            m(this, D, de(0, t, 1)),
            m(this, Y, de(0, h(this, dt) * h(this, D), h(this, dt))),
            b(this, Ts, Yn).call(this, h(this, D)),
            m(this, Z, b(this, Ke, Ti).call(this, h(this, Z), h(this, ft))),
            h(this, Rt) !== h(this, D) &&
              (m(this, Ie, !1),
              h(this, Kt).call(this, h(this, Z), h(this, Y), h(this, D)),
              b(this, Pe, fs).call(this, "seek onUpdate", {
                props: h(this, Z),
                time: h(this, Y),
                progress: h(this, D),
              })),
            h(this, D) !== 1 ||
              h(this, Ie) ||
              e ||
              (b(this, Pe, fs).call(this, "seek onComplete", {
                props: h(this, Z),
                time: h(this, Y),
                progress: h(this, D),
              }),
              h(this, Me).call(this, h(this, Z), h(this, Y), h(this, D)),
              m(this, Rt, h(this, D)),
              m(this, Ie, !0)),
            h(this, D) === 0 && (m(this, Rt, h(this, D)), m(this, Ie, !1));
        }
      }),
      (Is = new WeakMap()),
      (dt = new WeakMap()),
      (Y = new WeakMap()),
      (Rt = new WeakMap()),
      (D = new WeakMap()),
      (tt = new WeakMap()),
      (rt = new WeakMap()),
      (yt = new WeakMap()),
      (ft = new WeakMap()),
      (Z = new WeakMap()),
      (Ps = new WeakMap()),
      (As = new WeakMap()),
      (Es = new WeakMap()),
      (Cs = new WeakMap()),
      (Ls = new WeakMap()),
      (Kt = new WeakMap()),
      (Me = new WeakMap()),
      (_s = new WeakMap()),
      (At = new WeakMap()),
      (Ye = new WeakMap()),
      (Ie = new WeakMap()),
      (Zt = new WeakMap()),
      (Gt = new WeakSet()),
      (we = function (t) {
        for (const e of Object.keys(h(this, ft))) t(h(this, ft)[e]);
      }),
      (Ts = new WeakSet()),
      (Yn = function (t) {
        const e = (i) =>
          h(this, tt) && i.reverseEase ? i.reverseEase : i.ease;
        b(this, Gt, we).call(
          this,
          (i) => (i.value = Xn(i._from + (i._to - i._from) * e(i)(t), 1e3))
        );
      }),
      (qi = new WeakSet()),
      (ja = function (t) {
        return Object.keys(t).reduce((e, i) => {
          let n = t[i];
          return (
            (e[i] = {
              from:
                (n == null ? void 0 : n[0]) ??
                (n == null ? void 0 : n.from) ??
                0,
              _from: null,
              to:
                (n == null ? void 0 : n[1]) ??
                (n == null ? void 0 : n.to) ??
                n ??
                0,
              _to: null,
              value: null,
              unit:
                (n == null ? void 0 : n[2]) ??
                (n == null ? void 0 : n.unit) ??
                null,
              ease: b(this, Os, Kn).call(
                this,
                (n == null ? void 0 : n.ease) || h(this, Es)
              ),
              reverseEase: b(this, Os, Kn).call(
                this,
                (n == null ? void 0 : n.reverseEase) ||
                  (n == null ? void 0 : n.ease) ||
                  h(this, Cs)
              ),
            }),
            e
          );
        }, {});
      }),
      (Xi = new WeakSet()),
      (qa = function (t) {
        return Object.keys(t).reduce(
          (e, i) => ((e[i] = t[i]._from + t[i].unit), e),
          {}
        );
      }),
      (Ke = new WeakSet()),
      (Ti = function (t, e) {
        for (const i of Object.keys(t)) t[i] = e[i].value + e[i].unit;
        return h(this, Z);
      }),
      (Os = new WeakSet()),
      (Kn = function (t) {
        return t != null ? (typeof t == "string" ? wh(t) : t) : null;
      }),
      (Pe = new WeakSet()),
      (fs = function (...t) {
        this.debugEnable &&
          console.log(
            "%cinterpol",
            "color: rgb(53,158,182)",
            this.ID || "",
            ...t
          );
      }),
      ka),
    bh = 0,
    at,
    ot,
    ct,
    ht,
    bt,
    xt,
    Hi,
    Yi,
    Ft,
    Et,
    Q,
    Ae,
    zs,
    Ze,
    Qe,
    Qt,
    Jt,
    ks,
    Zn,
    te,
    Ue,
    Ki,
    Xa,
    Ra,
    nt =
      ((Ra = class {
        constructor({
          onUpdate: t = gs,
          onComplete: e = gs,
          debug: i = !1,
          paused: n = !1,
        } = {}) {
          g(this, ks);
          g(this, te);
          g(this, Ki);
          c(this, "ID");
          g(this, at, 0);
          g(this, ot, 0);
          g(this, ct, !1);
          g(this, ht, !1);
          g(this, bt, !1);
          g(this, xt, []);
          g(this, Hi, 0);
          g(this, Yi, 1);
          g(this, Ft, je());
          g(this, Et, void 0);
          g(this, Q, 0);
          g(this, Ae, void 0);
          g(this, zs, void 0);
          g(this, Ze, void 0);
          g(this, Qe, 0);
          g(this, Qt, !1);
          g(this, Jt, async ({ delta: t }) => {
            m(
              this,
              ot,
              de(0, h(this, Q), h(this, ot) + (h(this, ht) ? -t : t))
            ),
              m(this, at, de(0, Xn(h(this, ot) / h(this, Q)), 1)),
              b(this, ks, Zn).call(this, h(this, ot), h(this, at), !1),
              ((!h(this, ht) && h(this, at) === 1) || h(this, Q) === 0) &&
                (h(this, Ze).call(this, h(this, ot), h(this, at)),
                h(this, Ft).resolve(),
                this.stop()),
              ((h(this, ht) && h(this, at) === 0) || h(this, Q) === 0) &&
                (h(this, Ft).resolve(), this.stop());
          });
          m(this, zs, t),
            m(this, Ze, e),
            m(this, Ae, i),
            m(this, bt, n),
            (this.ID = ++bh),
            m(this, Et, We.ticker),
            setTimeout(
              () => b(this, Ki, Xa).call(this, "adds", h(this, xt)),
              1
            );
        }
        get progress() {
          return h(this, at);
        }
        get time() {
          return h(this, ot);
        }
        get isPlaying() {
          return h(this, ct);
        }
        get isReversed() {
          return h(this, ht);
        }
        get isPaused() {
          return h(this, bt);
        }
        add(t, e = "0") {
          var o;
          const i = t instanceof q ? t : new q(t);
          i.stop(),
            i.refreshComputedValues(),
            (i.ticker = h(this, Et)),
            (i.inTl = !0),
            h(this, Ae) && (i.debugEnable = h(this, Ae));
          const n =
            (o = h(this, xt)) == null ? void 0 : o[h(this, xt).length - 1];
          let r, a;
          return (
            typeof e == "string"
              ? ((r = parseFloat(e.includes("=") ? e.split("=").join("") : e)),
                m(this, Q, Math.max(h(this, Q), h(this, Q) + i.duration + r)),
                (a = n ? n.time.end + r : 0))
              : typeof e == "number" &&
                ((r = e),
                m(this, Q, Math.max(0, h(this, Q), r + i.duration)),
                (a = r ?? 0)),
            h(this, xt).push({
              itp: i,
              time: { start: a, end: a + i.duration, offset: r },
              progress: { start: null, end: null, current: 0, last: 0 },
            }),
            b(this, te, Ue).call(this, (l, u) => {
              (h(this, xt)[u].progress.start = l.time.start / h(this, Q) || 0),
                (h(this, xt)[u].progress.end = l.time.end / h(this, Q) || 0);
            }),
            this.isPaused || setTimeout(() => this.play(), 0),
            this
          );
        }
        async play(t = 0) {
          if ((m(this, Hi, t), !h(this, ct) || !h(this, ht)))
            return h(this, ct)
              ? (this.stop(), await this.play(t))
              : (m(this, ot, h(this, Q) * t),
                m(this, at, t),
                m(this, ht, !1),
                m(this, ct, !0),
                m(this, bt, !1),
                h(this, Et).add(h(this, Jt)),
                m(this, Ft, je()),
                h(this, Ft).promise);
          m(this, ht, !1);
        }
        async reverse(t = 1) {
          if ((m(this, Yi, t), !h(this, ct) || h(this, ht)))
            return h(this, ct) && h(this, ht)
              ? (this.stop(), await this.reverse(t))
              : (m(this, ot, h(this, Q) * t),
                m(this, at, t),
                m(this, ht, !0),
                m(this, ct, !0),
                m(this, bt, !1),
                h(this, Et).add(h(this, Jt)),
                m(this, Ft, je()),
                h(this, Ft).promise);
          m(this, ht, !0);
        }
        pause() {
          m(this, ct, !1),
            m(this, bt, !0),
            b(this, te, Ue).call(this, (t) => t.itp.pause()),
            h(this, Et).remove(h(this, Jt));
        }
        resume() {
          h(this, bt) &&
            (m(this, bt, !1),
            m(this, ct, !0),
            b(this, te, Ue).call(this, (t) => t.itp.resume()),
            h(this, Et).add(h(this, Jt)));
        }
        stop() {
          m(this, at, 0),
            m(this, ot, 0),
            m(this, ct, !1),
            m(this, bt, !1),
            m(this, ht, !1),
            b(this, te, Ue).call(this, (t) => t.itp.stop()),
            h(this, Et).remove(h(this, Jt));
        }
        seek(t, e = !0, i = !0) {
          h(this, ct) && this.pause(),
            m(this, at, de(0, t, 1)),
            m(this, ot, de(0, h(this, Q) * h(this, at), h(this, Q))),
            b(this, ks, Zn).call(this, h(this, ot), h(this, at), e),
            t !== 1 || i || h(this, Ze).call(this, h(this, ot), h(this, at));
        }
      }),
      (at = new WeakMap()),
      (ot = new WeakMap()),
      (ct = new WeakMap()),
      (ht = new WeakMap()),
      (bt = new WeakMap()),
      (xt = new WeakMap()),
      (Hi = new WeakMap()),
      (Yi = new WeakMap()),
      (Ft = new WeakMap()),
      (Et = new WeakMap()),
      (Q = new WeakMap()),
      (Ae = new WeakMap()),
      (zs = new WeakMap()),
      (Ze = new WeakMap()),
      (Qe = new WeakMap()),
      (Qt = new WeakMap()),
      (Jt = new WeakMap()),
      (ks = new WeakSet()),
      (Zn = function (t, e, i = !0) {
        h(this, Qe) > e && !h(this, Qt) && m(this, Qt, !0),
          h(this, Qe) < e && h(this, Qt) && m(this, Qt, !1),
          m(this, Qe, e),
          h(this, zs).call(this, t, e),
          b(this, te, Ue).call(
            this,
            (n) => {
              (n.progress.last = n.progress.current),
                (n.progress.current = (t - n.time.start) / n.itp.duration),
                n.itp.seek(n.progress.current, i);
            },
            h(this, Qt)
          );
      }),
      (te = new WeakSet()),
      (Ue = function (t, e = !1) {
        const i = e ? h(this, xt).length - 1 : 0,
          n = e ? -1 : h(this, xt).length,
          r = e ? -1 : 1;
        for (let a = i; a !== n; a += r) t(h(this, xt)[a], a);
      }),
      (Ki = new WeakSet()),
      (Xa = function (...t) {
        h(this, Ae) &&
          console.log(
            "%ctimeline",
            "color: rgb(217,50,133)",
            this.ID || "",
            ...t
          );
      }),
      Ra),
    Ee,
    Je,
    Ct,
    Ga,
    it =
      ((Ga = class {
        constructor(s) {
          c(this, "initialState");
          g(this, Ee, void 0);
          g(this, Je, !1);
          g(this, Ct, []);
          (this.initialState = s), m(this, Ee, s);
        }
        get state() {
          return h(this, Ee);
        }
        get handlers() {
          return h(this, Ct);
        }
        add(s) {
          return h(this, Ct).push(s), () => this.remove(s);
        }
        once(s) {
          let t = () => this.remove(s);
          return h(this, Je) || (m(this, Je, !0), h(this, Ct).push(s)), t;
        }
        remove(s) {
          m(
            this,
            Ct,
            h(this, Ct).filter((t) => t !== s)
          );
        }
        dispatch(s) {
          var t;
          return (
            m(this, Ee, s),
            (t = h(this, Ct)) == null
              ? void 0
              : t.map((e) => (e == null ? void 0 : e(s)))
          );
        }
        reset() {
          m(this, Ct, []), m(this, Ee, this.initialState), m(this, Je, !1);
        }
      }),
      (Ee = new WeakMap()),
      (Je = new WeakMap()),
      (Ct = new WeakMap()),
      Ga);
  function Sh(s) {
    let t = s.length,
      e;
    for (; t != 0; )
      (e = Math.floor(Math.random() * t)), t--, ([s[t], s[e]] = [s[e], s[t]]);
    return s;
  }
  function Ha() {
    return typeof window > "u";
  }
  function Mh() {
    return !Ha();
  }
  function _t(s) {
    return Mh() ? (s == null ? void 0 : s()) : null;
  }
  function Ih() {
    return _t(() => /iPhone/i.test(navigator.userAgent));
  }
  function Ph() {
    return _t(() => /iPod/i.test(navigator.userAgent));
  }
  function Ah() {
    return _t(() => /iPad/i.test(navigator.userAgent));
  }
  function Eh() {
    return _t(() => Ih() || Ph() || Ah());
  }
  function os() {
    return _t(() =>
      /(tablet|ipad|playbook|silk)|(android(?!.*mobi))|Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(
        navigator.userAgent
      )
    );
  }
  function ms(s, t, e) {
    return (1 - e) * s + e * t;
  }
  function hs(s, t, e) {
    return Math.max(s, Math.min(t, e));
  }
  function Ya(s, t) {
    return ((s % t) + t) % t;
  }
  function O(s, t, e = 0) {
    if (!(e < 0)) return parseFloat((Math.random() * (t - s) + s).toFixed(e));
  }
  function An() {
    let s = {};
    return (
      (s.promise = new Promise((t, e) => {
        (s.resolve = t), (s.reject = e);
      })),
      s
    );
  }
  function Qn(s = 1e3) {
    return new Promise((t) => setTimeout(t, s));
  }
  const Ch = B("front:LangService");
  class Lh {
    constructor() {
      c(this, "langs", ["en", "en"]);
    }
    deduceLangFromPathname(t = window.location.pathname) {
      const i =
        this.langs.find((n) => t.match(new RegExp(`^/${n}(/|$)`))) ||
        this.langs[0];
      return Ch("deduced lang from pathname:", i), i;
    }
  }
  const _h = new Lh(),
    Fr = B("front:GlobalData"),
    Th = () => {
      let s,
        t = An();
      return {
        get: () => s,
        getAsync: async () => (await t.promise, s),
        queryDeferred: t,
        query: async () => {
          try {
            const i = _h.deduceLangFromPathname();
            (s = await (await fetch(`/${i}/global.json`)).json()),
              t.resolve(s),
              Fr("GlobalData", s);
          } catch (i) {
            Fr(i);
          }
        },
      };
    },
    Pi = Th();
  function ys(s) {
    let t = s[0],
      e = s[1],
      i = s[2];
    return Math.sqrt(t * t + e * e + i * i);
  }
  function Jn(s, t) {
    return (s[0] = t[0]), (s[1] = t[1]), (s[2] = t[2]), s;
  }
  function Oh(s, t, e, i) {
    return (s[0] = t), (s[1] = e), (s[2] = i), s;
  }
  function Dr(s, t, e) {
    return (s[0] = t[0] + e[0]), (s[1] = t[1] + e[1]), (s[2] = t[2] + e[2]), s;
  }
  function Br(s, t, e) {
    return (s[0] = t[0] - e[0]), (s[1] = t[1] - e[1]), (s[2] = t[2] - e[2]), s;
  }
  function zh(s, t, e) {
    return (s[0] = t[0] * e[0]), (s[1] = t[1] * e[1]), (s[2] = t[2] * e[2]), s;
  }
  function kh(s, t, e) {
    return (s[0] = t[0] / e[0]), (s[1] = t[1] / e[1]), (s[2] = t[2] / e[2]), s;
  }
  function Dn(s, t, e) {
    return (s[0] = t[0] * e), (s[1] = t[1] * e), (s[2] = t[2] * e), s;
  }
  function Rh(s, t) {
    let e = t[0] - s[0],
      i = t[1] - s[1],
      n = t[2] - s[2];
    return Math.sqrt(e * e + i * i + n * n);
  }
  function Gh(s, t) {
    let e = t[0] - s[0],
      i = t[1] - s[1],
      n = t[2] - s[2];
    return e * e + i * i + n * n;
  }
  function $r(s) {
    let t = s[0],
      e = s[1],
      i = s[2];
    return t * t + e * e + i * i;
  }
  function Fh(s, t) {
    return (s[0] = -t[0]), (s[1] = -t[1]), (s[2] = -t[2]), s;
  }
  function Dh(s, t) {
    return (s[0] = 1 / t[0]), (s[1] = 1 / t[1]), (s[2] = 1 / t[2]), s;
  }
  function tr(s, t) {
    let e = t[0],
      i = t[1],
      n = t[2],
      r = e * e + i * i + n * n;
    return (
      r > 0 && (r = 1 / Math.sqrt(r)),
      (s[0] = t[0] * r),
      (s[1] = t[1] * r),
      (s[2] = t[2] * r),
      s
    );
  }
  function Ka(s, t) {
    return s[0] * t[0] + s[1] * t[1] + s[2] * t[2];
  }
  function Ur(s, t, e) {
    let i = t[0],
      n = t[1],
      r = t[2],
      a = e[0],
      o = e[1],
      l = e[2];
    return (
      (s[0] = n * l - r * o), (s[1] = r * a - i * l), (s[2] = i * o - n * a), s
    );
  }
  function Bh(s, t, e, i) {
    let n = t[0],
      r = t[1],
      a = t[2];
    return (
      (s[0] = n + i * (e[0] - n)),
      (s[1] = r + i * (e[1] - r)),
      (s[2] = a + i * (e[2] - a)),
      s
    );
  }
  function $h(s, t, e) {
    let i = t[0],
      n = t[1],
      r = t[2],
      a = e[3] * i + e[7] * n + e[11] * r + e[15];
    return (
      (a = a || 1),
      (s[0] = (e[0] * i + e[4] * n + e[8] * r + e[12]) / a),
      (s[1] = (e[1] * i + e[5] * n + e[9] * r + e[13]) / a),
      (s[2] = (e[2] * i + e[6] * n + e[10] * r + e[14]) / a),
      s
    );
  }
  function Uh(s, t, e) {
    let i = t[0],
      n = t[1],
      r = t[2],
      a = e[3] * i + e[7] * n + e[11] * r + e[15];
    return (
      (a = a || 1),
      (s[0] = (e[0] * i + e[4] * n + e[8] * r) / a),
      (s[1] = (e[1] * i + e[5] * n + e[9] * r) / a),
      (s[2] = (e[2] * i + e[6] * n + e[10] * r) / a),
      s
    );
  }
  function Nh(s, t, e) {
    let i = t[0],
      n = t[1],
      r = t[2];
    return (
      (s[0] = i * e[0] + n * e[3] + r * e[6]),
      (s[1] = i * e[1] + n * e[4] + r * e[7]),
      (s[2] = i * e[2] + n * e[5] + r * e[8]),
      s
    );
  }
  function Vh(s, t, e) {
    let i = t[0],
      n = t[1],
      r = t[2],
      a = e[0],
      o = e[1],
      l = e[2],
      u = e[3],
      p = o * r - l * n,
      d = l * i - a * r,
      f = a * n - o * i,
      y = o * f - l * d,
      x = l * p - a * f,
      w = a * d - o * p,
      v = u * 2;
    return (
      (p *= v),
      (d *= v),
      (f *= v),
      (y *= 2),
      (x *= 2),
      (w *= 2),
      (s[0] = i + p + y),
      (s[1] = n + d + x),
      (s[2] = r + f + w),
      s
    );
  }
  const Wh = (function () {
    const s = [0, 0, 0],
      t = [0, 0, 0];
    return function (e, i) {
      Jn(s, e), Jn(t, i), tr(s, s), tr(t, t);
      let n = Ka(s, t);
      return n > 1 ? 0 : n < -1 ? Math.PI : Math.acos(n);
    };
  })();
  function jh(s, t) {
    return s[0] === t[0] && s[1] === t[1] && s[2] === t[2];
  }
  class P extends Array {
    constructor(t = 0, e = t, i = t) {
      return super(t, e, i), this;
    }
    get x() {
      return this[0];
    }
    get y() {
      return this[1];
    }
    get z() {
      return this[2];
    }
    set x(t) {
      this[0] = t;
    }
    set y(t) {
      this[1] = t;
    }
    set z(t) {
      this[2] = t;
    }
    set(t, e = t, i = t) {
      return t.length ? this.copy(t) : (Oh(this, t, e, i), this);
    }
    copy(t) {
      return Jn(this, t), this;
    }
    add(t, e) {
      return e ? Dr(this, t, e) : Dr(this, this, t), this;
    }
    sub(t, e) {
      return e ? Br(this, t, e) : Br(this, this, t), this;
    }
    multiply(t) {
      return t.length ? zh(this, this, t) : Dn(this, this, t), this;
    }
    divide(t) {
      return t.length ? kh(this, this, t) : Dn(this, this, 1 / t), this;
    }
    inverse(t = this) {
      return Dh(this, t), this;
    }
    len() {
      return ys(this);
    }
    distance(t) {
      return t ? Rh(this, t) : ys(this);
    }
    squaredLen() {
      return $r(this);
    }
    squaredDistance(t) {
      return t ? Gh(this, t) : $r(this);
    }
    negate(t = this) {
      return Fh(this, t), this;
    }
    cross(t, e) {
      return e ? Ur(this, t, e) : Ur(this, this, t), this;
    }
    scale(t) {
      return Dn(this, this, t), this;
    }
    normalize() {
      return tr(this, this), this;
    }
    dot(t) {
      return Ka(this, t);
    }
    equals(t) {
      return jh(this, t);
    }
    applyMatrix3(t) {
      return Nh(this, this, t), this;
    }
    applyMatrix4(t) {
      return $h(this, this, t), this;
    }
    scaleRotateMatrix4(t) {
      return Uh(this, this, t), this;
    }
    applyQuaternion(t) {
      return Vh(this, this, t), this;
    }
    angle(t) {
      return Wh(this, t);
    }
    lerp(t, e) {
      return Bh(this, this, t, e), this;
    }
    clone() {
      return new P(this[0], this[1], this[2]);
    }
    fromArray(t, e = 0) {
      return (this[0] = t[e]), (this[1] = t[e + 1]), (this[2] = t[e + 2]), this;
    }
    toArray(t = [], e = 0) {
      return (t[e] = this[0]), (t[e + 1] = this[1]), (t[e + 2] = this[2]), t;
    }
    transformDirection(t) {
      const e = this[0],
        i = this[1],
        n = this[2];
      return (
        (this[0] = t[0] * e + t[4] * i + t[8] * n),
        (this[1] = t[1] * e + t[5] * i + t[9] * n),
        (this[2] = t[2] * e + t[6] * i + t[10] * n),
        this.normalize()
      );
    }
  }
  const Nr = new P();
  let qh = 1,
    Xh = 1,
    Vr = !1;
  class Hh {
    constructor(t, e = {}) {
      t.canvas || console.error("gl not passed as first argument to Geometry"),
        (this.gl = t),
        (this.attributes = e),
        (this.id = qh++),
        (this.VAOs = {}),
        (this.drawRange = { start: 0, count: 0 }),
        (this.instancedCount = 0),
        this.gl.renderer.bindVertexArray(null),
        (this.gl.renderer.currentGeometry = null),
        (this.glState = this.gl.renderer.state);
      for (let i in e) this.addAttribute(i, e[i]);
    }
    addAttribute(t, e) {
      if (
        ((this.attributes[t] = e),
        (e.id = Xh++),
        (e.size = e.size || 1),
        (e.type =
          e.type ||
          (e.data.constructor === Float32Array
            ? this.gl.FLOAT
            : e.data.constructor === Uint16Array
            ? this.gl.UNSIGNED_SHORT
            : this.gl.UNSIGNED_INT)),
        (e.target =
          t === "index" ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER),
        (e.normalized = e.normalized || !1),
        (e.stride = e.stride || 0),
        (e.offset = e.offset || 0),
        (e.count =
          e.count ||
          (e.stride ? e.data.byteLength / e.stride : e.data.length / e.size)),
        (e.divisor = e.instanced || 0),
        (e.needsUpdate = !1),
        (e.usage = e.usage || this.gl.STATIC_DRAW),
        e.buffer || this.updateAttribute(e),
        e.divisor)
      ) {
        if (
          ((this.isInstanced = !0),
          this.instancedCount && this.instancedCount !== e.count * e.divisor)
        )
          return (
            console.warn(
              "geometry has multiple instanced buffers of different length"
            ),
            (this.instancedCount = Math.min(
              this.instancedCount,
              e.count * e.divisor
            ))
          );
        this.instancedCount = e.count * e.divisor;
      } else
        t === "index"
          ? (this.drawRange.count = e.count)
          : this.attributes.index ||
            (this.drawRange.count = Math.max(this.drawRange.count, e.count));
    }
    updateAttribute(t) {
      const e = !t.buffer;
      e && (t.buffer = this.gl.createBuffer()),
        this.glState.boundBuffer !== t.buffer &&
          (this.gl.bindBuffer(t.target, t.buffer),
          (this.glState.boundBuffer = t.buffer)),
        e
          ? this.gl.bufferData(t.target, t.data, t.usage)
          : this.gl.bufferSubData(t.target, 0, t.data),
        (t.needsUpdate = !1);
    }
    setIndex(t) {
      this.addAttribute("index", t);
    }
    setDrawRange(t, e) {
      (this.drawRange.start = t), (this.drawRange.count = e);
    }
    setInstancedCount(t) {
      this.instancedCount = t;
    }
    createVAO(t) {
      (this.VAOs[t.attributeOrder] = this.gl.renderer.createVertexArray()),
        this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),
        this.bindAttributes(t);
    }
    bindAttributes(t) {
      t.attributeLocations.forEach((e, { name: i, type: n }) => {
        if (!this.attributes[i]) {
          console.warn(`active attribute ${i} not being supplied`);
          return;
        }
        const r = this.attributes[i];
        this.gl.bindBuffer(r.target, r.buffer),
          (this.glState.boundBuffer = r.buffer);
        let a = 1;
        n === 35674 && (a = 2), n === 35675 && (a = 3), n === 35676 && (a = 4);
        const o = r.size / a,
          l = a === 1 ? 0 : a * a * 4,
          u = a === 1 ? 0 : a * 4;
        for (let p = 0; p < a; p++)
          this.gl.vertexAttribPointer(
            e + p,
            o,
            r.type,
            r.normalized,
            r.stride + l,
            r.offset + p * u
          ),
            this.gl.enableVertexAttribArray(e + p),
            this.gl.renderer.vertexAttribDivisor(e + p, r.divisor);
      }),
        this.attributes.index &&
          this.gl.bindBuffer(
            this.gl.ELEMENT_ARRAY_BUFFER,
            this.attributes.index.buffer
          );
    }
    draw({ program: t, mode: e = this.gl.TRIANGLES }) {
      var n;
      this.gl.renderer.currentGeometry !== `${this.id}_${t.attributeOrder}` &&
        (this.VAOs[t.attributeOrder] || this.createVAO(t),
        this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),
        (this.gl.renderer.currentGeometry = `${this.id}_${t.attributeOrder}`)),
        t.attributeLocations.forEach((r, { name: a }) => {
          const o = this.attributes[a];
          o.needsUpdate && this.updateAttribute(o);
        });
      let i = 2;
      ((n = this.attributes.index) == null ? void 0 : n.type) ===
        this.gl.UNSIGNED_INT && (i = 4),
        this.isInstanced
          ? this.attributes.index
            ? this.gl.renderer.drawElementsInstanced(
                e,
                this.drawRange.count,
                this.attributes.index.type,
                this.attributes.index.offset + this.drawRange.start * i,
                this.instancedCount
              )
            : this.gl.renderer.drawArraysInstanced(
                e,
                this.drawRange.start,
                this.drawRange.count,
                this.instancedCount
              )
          : this.attributes.index
          ? this.gl.drawElements(
              e,
              this.drawRange.count,
              this.attributes.index.type,
              this.attributes.index.offset + this.drawRange.start * i
            )
          : this.gl.drawArrays(e, this.drawRange.start, this.drawRange.count);
    }
    getPosition() {
      const t = this.attributes.position;
      if (t.data) return t;
      if (!Vr)
        return (
          console.warn("No position buffer data found to compute bounds"),
          (Vr = !0)
        );
    }
    computeBoundingBox(t) {
      t || (t = this.getPosition());
      const e = t.data,
        i = t.size;
      this.bounds ||
        (this.bounds = {
          min: new P(),
          max: new P(),
          center: new P(),
          scale: new P(),
          radius: 1 / 0,
        });
      const n = this.bounds.min,
        r = this.bounds.max,
        a = this.bounds.center,
        o = this.bounds.scale;
      n.set(1 / 0), r.set(-1 / 0);
      for (let l = 0, u = e.length; l < u; l += i) {
        const p = e[l],
          d = e[l + 1],
          f = e[l + 2];
        (n.x = Math.min(p, n.x)),
          (n.y = Math.min(d, n.y)),
          (n.z = Math.min(f, n.z)),
          (r.x = Math.max(p, r.x)),
          (r.y = Math.max(d, r.y)),
          (r.z = Math.max(f, r.z));
      }
      o.sub(r, n), a.add(n, r).divide(2);
    }
    computeBoundingSphere(t) {
      t || (t = this.getPosition());
      const e = t.data,
        i = t.size;
      this.bounds || this.computeBoundingBox(t);
      let n = 0;
      for (let r = 0, a = e.length; r < a; r += i)
        Nr.fromArray(e, r),
          (n = Math.max(n, this.bounds.center.squaredDistance(Nr)));
      this.bounds.radius = Math.sqrt(n);
    }
    remove() {
      for (let t in this.VAOs)
        this.gl.renderer.deleteVertexArray(this.VAOs[t]), delete this.VAOs[t];
      for (let t in this.attributes)
        this.gl.deleteBuffer(this.attributes[t].buffer),
          delete this.attributes[t];
    }
  }
  let Yh = 1;
  const Wr = {};
  class fe {
    constructor(
      t,
      {
        vertex: e,
        fragment: i,
        uniforms: n = {},
        transparent: r = !1,
        cullFace: a = t.BACK,
        frontFace: o = t.CCW,
        depthTest: l = !0,
        depthWrite: u = !0,
        depthFunc: p = t.LEQUAL,
      } = {}
    ) {
      t.canvas || console.error("gl not passed as first argument to Program"),
        (this.gl = t),
        (this.uniforms = n),
        (this.id = Yh++),
        e || console.warn("vertex shader not supplied"),
        i || console.warn("fragment shader not supplied"),
        (this.transparent = r),
        (this.cullFace = a),
        (this.frontFace = o),
        (this.depthTest = l),
        (this.depthWrite = u),
        (this.depthFunc = p),
        (this.blendFunc = {}),
        (this.blendEquation = {}),
        this.transparent &&
          !this.blendFunc.src &&
          (this.gl.renderer.premultipliedAlpha
            ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
            : this.setBlendFunc(
                this.gl.SRC_ALPHA,
                this.gl.ONE_MINUS_SRC_ALPHA
              )),
        (this.vertexShader = t.createShader(t.VERTEX_SHADER)),
        (this.fragmentShader = t.createShader(t.FRAGMENT_SHADER)),
        (this.program = t.createProgram()),
        t.attachShader(this.program, this.vertexShader),
        t.attachShader(this.program, this.fragmentShader),
        this.setShaders({ vertex: e, fragment: i });
    }
    setShaders({ vertex: t, fragment: e }) {
      if (
        (t &&
          (this.gl.shaderSource(this.vertexShader, t),
          this.gl.compileShader(this.vertexShader),
          this.gl.getShaderInfoLog(this.vertexShader) !== "" &&
            console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${jr(t)}`)),
        e &&
          (this.gl.shaderSource(this.fragmentShader, e),
          this.gl.compileShader(this.fragmentShader),
          this.gl.getShaderInfoLog(this.fragmentShader) !== "" &&
            console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${jr(e)}`)),
        this.gl.linkProgram(this.program),
        !this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS))
      )
        return console.warn(this.gl.getProgramInfoLog(this.program));
      this.uniformLocations = new Map();
      let i = this.gl.getProgramParameter(
        this.program,
        this.gl.ACTIVE_UNIFORMS
      );
      for (let a = 0; a < i; a++) {
        let o = this.gl.getActiveUniform(this.program, a);
        this.uniformLocations.set(
          o,
          this.gl.getUniformLocation(this.program, o.name)
        );
        const l = o.name.match(/(\w+)/g);
        (o.uniformName = l[0]), (o.nameComponents = l.slice(1));
      }
      this.attributeLocations = new Map();
      const n = [],
        r = this.gl.getProgramParameter(
          this.program,
          this.gl.ACTIVE_ATTRIBUTES
        );
      for (let a = 0; a < r; a++) {
        const o = this.gl.getActiveAttrib(this.program, a),
          l = this.gl.getAttribLocation(this.program, o.name);
        l !== -1 && ((n[l] = o.name), this.attributeLocations.set(o, l));
      }
      this.attributeOrder = n.join("");
    }
    setBlendFunc(t, e, i, n) {
      (this.blendFunc.src = t),
        (this.blendFunc.dst = e),
        (this.blendFunc.srcAlpha = i),
        (this.blendFunc.dstAlpha = n),
        t && (this.transparent = !0);
    }
    setBlendEquation(t, e) {
      (this.blendEquation.modeRGB = t), (this.blendEquation.modeAlpha = e);
    }
    applyState() {
      this.depthTest
        ? this.gl.renderer.enable(this.gl.DEPTH_TEST)
        : this.gl.renderer.disable(this.gl.DEPTH_TEST),
        this.cullFace
          ? this.gl.renderer.enable(this.gl.CULL_FACE)
          : this.gl.renderer.disable(this.gl.CULL_FACE),
        this.blendFunc.src
          ? this.gl.renderer.enable(this.gl.BLEND)
          : this.gl.renderer.disable(this.gl.BLEND),
        this.cullFace && this.gl.renderer.setCullFace(this.cullFace),
        this.gl.renderer.setFrontFace(this.frontFace),
        this.gl.renderer.setDepthMask(this.depthWrite),
        this.gl.renderer.setDepthFunc(this.depthFunc),
        this.blendFunc.src &&
          this.gl.renderer.setBlendFunc(
            this.blendFunc.src,
            this.blendFunc.dst,
            this.blendFunc.srcAlpha,
            this.blendFunc.dstAlpha
          ),
        this.gl.renderer.setBlendEquation(
          this.blendEquation.modeRGB,
          this.blendEquation.modeAlpha
        );
    }
    use({ flipFaces: t = !1 } = {}) {
      let e = -1;
      this.gl.renderer.state.currentProgram === this.id ||
        (this.gl.useProgram(this.program),
        (this.gl.renderer.state.currentProgram = this.id)),
        this.uniformLocations.forEach((n, r) => {
          let a = this.uniforms[r.uniformName];
          for (const o of r.nameComponents) {
            if (!a) break;
            if (o in a) a = a[o];
            else {
              if (Array.isArray(a.value)) break;
              a = void 0;
              break;
            }
          }
          if (!a) return qr(`Active uniform ${r.name} has not been supplied`);
          if (a && a.value === void 0)
            return qr(`${r.name} uniform is missing a value parameter`);
          if (a.value.texture)
            return (e = e + 1), a.value.update(e), Bn(this.gl, r.type, n, e);
          if (a.value.length && a.value[0].texture) {
            const o = [];
            return (
              a.value.forEach((l) => {
                (e = e + 1), l.update(e), o.push(e);
              }),
              Bn(this.gl, r.type, n, o)
            );
          }
          Bn(this.gl, r.type, n, a.value);
        }),
        this.applyState(),
        t &&
          this.gl.renderer.setFrontFace(
            this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW
          );
    }
    remove() {
      this.gl.deleteProgram(this.program);
    }
  }
  function Bn(s, t, e, i) {
    i = i.length ? Kh(i) : i;
    const n = s.renderer.state.uniformLocations.get(e);
    if (i.length)
      if (n === void 0 || n.length !== i.length)
        s.renderer.state.uniformLocations.set(e, i.slice(0));
      else {
        if (Zh(n, i)) return;
        n.set ? n.set(i) : Qh(n, i),
          s.renderer.state.uniformLocations.set(e, n);
      }
    else {
      if (n === i) return;
      s.renderer.state.uniformLocations.set(e, i);
    }
    switch (t) {
      case 5126:
        return i.length ? s.uniform1fv(e, i) : s.uniform1f(e, i);
      case 35664:
        return s.uniform2fv(e, i);
      case 35665:
        return s.uniform3fv(e, i);
      case 35666:
        return s.uniform4fv(e, i);
      case 35670:
      case 5124:
      case 35678:
      case 35680:
        return i.length ? s.uniform1iv(e, i) : s.uniform1i(e, i);
      case 35671:
      case 35667:
        return s.uniform2iv(e, i);
      case 35672:
      case 35668:
        return s.uniform3iv(e, i);
      case 35673:
      case 35669:
        return s.uniform4iv(e, i);
      case 35674:
        return s.uniformMatrix2fv(e, !1, i);
      case 35675:
        return s.uniformMatrix3fv(e, !1, i);
      case 35676:
        return s.uniformMatrix4fv(e, !1, i);
    }
  }
  function jr(s) {
    let t = s.split(`
`);
    for (let e = 0; e < t.length; e++) t[e] = e + 1 + ": " + t[e];
    return t.join(`
`);
  }
  function Kh(s) {
    const t = s.length,
      e = s[0].length;
    if (e === void 0) return s;
    const i = t * e;
    let n = Wr[i];
    n || (Wr[i] = n = new Float32Array(i));
    for (let r = 0; r < t; r++) n.set(s[r], r * e);
    return n;
  }
  function Zh(s, t) {
    if (s.length !== t.length) return !1;
    for (let e = 0, i = s.length; e < i; e++) if (s[e] !== t[e]) return !1;
    return !0;
  }
  function Qh(s, t) {
    for (let e = 0, i = s.length; e < i; e++) s[e] = t[e];
  }
  let $n = 0;
  function qr(s) {
    $n > 100 ||
      (console.warn(s),
      $n++,
      $n > 100 &&
        console.warn("More than 100 program warnings - stopping logs."));
  }
  const Un = new P();
  let Jh = 1;
  class tl {
    constructor({
      canvas: t = document.createElement("canvas"),
      width: e = 300,
      height: i = 150,
      dpr: n = 1,
      alpha: r = !1,
      depth: a = !0,
      stencil: o = !1,
      antialias: l = !1,
      premultipliedAlpha: u = !1,
      preserveDrawingBuffer: p = !1,
      powerPreference: d = "default",
      autoClear: f = !0,
      webgl: y = 2,
    } = {}) {
      const x = {
        alpha: r,
        depth: a,
        stencil: o,
        antialias: l,
        premultipliedAlpha: u,
        preserveDrawingBuffer: p,
        powerPreference: d,
      };
      (this.dpr = n),
        (this.alpha = r),
        (this.color = !0),
        (this.depth = a),
        (this.stencil = o),
        (this.premultipliedAlpha = u),
        (this.autoClear = f),
        (this.id = Jh++),
        y === 2 && (this.gl = t.getContext("webgl2", x)),
        (this.isWebgl2 = !!this.gl),
        this.gl || (this.gl = t.getContext("webgl", x)),
        this.gl || console.error("unable to create webgl context"),
        (this.gl.renderer = this),
        this.setSize(e, i),
        (this.state = {}),
        (this.state.blendFunc = { src: this.gl.ONE, dst: this.gl.ZERO }),
        (this.state.blendEquation = { modeRGB: this.gl.FUNC_ADD }),
        (this.state.cullFace = !1),
        (this.state.frontFace = this.gl.CCW),
        (this.state.depthMask = !0),
        (this.state.depthFunc = this.gl.LEQUAL),
        (this.state.premultiplyAlpha = !1),
        (this.state.flipY = !1),
        (this.state.unpackAlignment = 4),
        (this.state.framebuffer = null),
        (this.state.viewport = { x: 0, y: 0, width: null, height: null }),
        (this.state.textureUnits = []),
        (this.state.activeTextureUnit = 0),
        (this.state.boundBuffer = null),
        (this.state.uniformLocations = new Map()),
        (this.state.currentProgram = null),
        (this.extensions = {}),
        this.isWebgl2
          ? (this.getExtension("EXT_color_buffer_float"),
            this.getExtension("OES_texture_float_linear"))
          : (this.getExtension("OES_texture_float"),
            this.getExtension("OES_texture_float_linear"),
            this.getExtension("OES_texture_half_float"),
            this.getExtension("OES_texture_half_float_linear"),
            this.getExtension("OES_element_index_uint"),
            this.getExtension("OES_standard_derivatives"),
            this.getExtension("EXT_sRGB"),
            this.getExtension("WEBGL_depth_texture"),
            this.getExtension("WEBGL_draw_buffers")),
        this.getExtension("WEBGL_compressed_texture_astc"),
        this.getExtension("EXT_texture_compression_bptc"),
        this.getExtension("WEBGL_compressed_texture_s3tc"),
        this.getExtension("WEBGL_compressed_texture_etc1"),
        this.getExtension("WEBGL_compressed_texture_pvrtc"),
        this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
        (this.vertexAttribDivisor = this.getExtension(
          "ANGLE_instanced_arrays",
          "vertexAttribDivisor",
          "vertexAttribDivisorANGLE"
        )),
        (this.drawArraysInstanced = this.getExtension(
          "ANGLE_instanced_arrays",
          "drawArraysInstanced",
          "drawArraysInstancedANGLE"
        )),
        (this.drawElementsInstanced = this.getExtension(
          "ANGLE_instanced_arrays",
          "drawElementsInstanced",
          "drawElementsInstancedANGLE"
        )),
        (this.createVertexArray = this.getExtension(
          "OES_vertex_array_object",
          "createVertexArray",
          "createVertexArrayOES"
        )),
        (this.bindVertexArray = this.getExtension(
          "OES_vertex_array_object",
          "bindVertexArray",
          "bindVertexArrayOES"
        )),
        (this.deleteVertexArray = this.getExtension(
          "OES_vertex_array_object",
          "deleteVertexArray",
          "deleteVertexArrayOES"
        )),
        (this.drawBuffers = this.getExtension(
          "WEBGL_draw_buffers",
          "drawBuffers",
          "drawBuffersWEBGL"
        )),
        (this.parameters = {}),
        (this.parameters.maxTextureUnits = this.gl.getParameter(
          this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS
        )),
        (this.parameters.maxAnisotropy = this.getExtension(
          "EXT_texture_filter_anisotropic"
        )
          ? this.gl.getParameter(
              this.getExtension("EXT_texture_filter_anisotropic")
                .MAX_TEXTURE_MAX_ANISOTROPY_EXT
            )
          : 0);
    }
    setSize(t, e) {
      (this.width = t),
        (this.height = e),
        (this.gl.canvas.width = t * this.dpr),
        (this.gl.canvas.height = e * this.dpr),
        this.gl.canvas.style &&
          Object.assign(this.gl.canvas.style, {
            width: t + "px",
            height: e + "px",
          });
    }
    setViewport(t, e, i = 0, n = 0) {
      (this.state.viewport.width === t && this.state.viewport.height === e) ||
        ((this.state.viewport.width = t),
        (this.state.viewport.height = e),
        (this.state.viewport.x = i),
        (this.state.viewport.y = n),
        this.gl.viewport(i, n, t, e));
    }
    setScissor(t, e, i = 0, n = 0) {
      this.gl.scissor(i, n, t, e);
    }
    enable(t) {
      this.state[t] !== !0 && (this.gl.enable(t), (this.state[t] = !0));
    }
    disable(t) {
      this.state[t] !== !1 && (this.gl.disable(t), (this.state[t] = !1));
    }
    setBlendFunc(t, e, i, n) {
      (this.state.blendFunc.src === t &&
        this.state.blendFunc.dst === e &&
        this.state.blendFunc.srcAlpha === i &&
        this.state.blendFunc.dstAlpha === n) ||
        ((this.state.blendFunc.src = t),
        (this.state.blendFunc.dst = e),
        (this.state.blendFunc.srcAlpha = i),
        (this.state.blendFunc.dstAlpha = n),
        i !== void 0
          ? this.gl.blendFuncSeparate(t, e, i, n)
          : this.gl.blendFunc(t, e));
    }
    setBlendEquation(t, e) {
      (t = t || this.gl.FUNC_ADD),
        !(
          this.state.blendEquation.modeRGB === t &&
          this.state.blendEquation.modeAlpha === e
        ) &&
          ((this.state.blendEquation.modeRGB = t),
          (this.state.blendEquation.modeAlpha = e),
          e !== void 0
            ? this.gl.blendEquationSeparate(t, e)
            : this.gl.blendEquation(t));
    }
    setCullFace(t) {
      this.state.cullFace !== t &&
        ((this.state.cullFace = t), this.gl.cullFace(t));
    }
    setFrontFace(t) {
      this.state.frontFace !== t &&
        ((this.state.frontFace = t), this.gl.frontFace(t));
    }
    setDepthMask(t) {
      this.state.depthMask !== t &&
        ((this.state.depthMask = t), this.gl.depthMask(t));
    }
    setDepthFunc(t) {
      this.state.depthFunc !== t &&
        ((this.state.depthFunc = t), this.gl.depthFunc(t));
    }
    activeTexture(t) {
      this.state.activeTextureUnit !== t &&
        ((this.state.activeTextureUnit = t),
        this.gl.activeTexture(this.gl.TEXTURE0 + t));
    }
    bindFramebuffer({
      target: t = this.gl.FRAMEBUFFER,
      buffer: e = null,
    } = {}) {
      this.state.framebuffer !== e &&
        ((this.state.framebuffer = e), this.gl.bindFramebuffer(t, e));
    }
    getExtension(t, e, i) {
      return e && this.gl[e]
        ? this.gl[e].bind(this.gl)
        : (this.extensions[t] || (this.extensions[t] = this.gl.getExtension(t)),
          e
            ? this.extensions[t]
              ? this.extensions[t][i].bind(this.extensions[t])
              : null
            : this.extensions[t]);
    }
    sortOpaque(t, e) {
      return t.renderOrder !== e.renderOrder
        ? t.renderOrder - e.renderOrder
        : t.program.id !== e.program.id
        ? t.program.id - e.program.id
        : t.zDepth !== e.zDepth
        ? t.zDepth - e.zDepth
        : e.id - t.id;
    }
    sortTransparent(t, e) {
      return t.renderOrder !== e.renderOrder
        ? t.renderOrder - e.renderOrder
        : t.zDepth !== e.zDepth
        ? e.zDepth - t.zDepth
        : e.id - t.id;
    }
    sortUI(t, e) {
      return t.renderOrder !== e.renderOrder
        ? t.renderOrder - e.renderOrder
        : t.program.id !== e.program.id
        ? t.program.id - e.program.id
        : e.id - t.id;
    }
    getRenderList({ scene: t, camera: e, frustumCull: i, sort: n }) {
      let r = [];
      if (
        (e && i && e.updateFrustum(),
        t.traverse((a) => {
          if (!a.visible) return !0;
          a.draw &&
            ((i && a.frustumCulled && e && !e.frustumIntersectsMesh(a)) ||
              r.push(a));
        }),
        n)
      ) {
        const a = [],
          o = [],
          l = [];
        r.forEach((u) => {
          u.program.transparent
            ? u.program.depthTest
              ? o.push(u)
              : l.push(u)
            : a.push(u),
            (u.zDepth = 0),
            !(u.renderOrder !== 0 || !u.program.depthTest || !e) &&
              (u.worldMatrix.getTranslation(Un),
              Un.applyMatrix4(e.projectionViewMatrix),
              (u.zDepth = Un.z));
        }),
          a.sort(this.sortOpaque),
          o.sort(this.sortTransparent),
          l.sort(this.sortUI),
          (r = a.concat(o, l));
      }
      return r;
    }
    render({
      scene: t,
      camera: e,
      target: i = null,
      update: n = !0,
      sort: r = !0,
      frustumCull: a = !0,
      clear: o,
    }) {
      i === null
        ? (this.bindFramebuffer(),
          this.setViewport(this.width * this.dpr, this.height * this.dpr))
        : (this.bindFramebuffer(i), this.setViewport(i.width, i.height)),
        (o || (this.autoClear && o !== !1)) &&
          (this.depth &&
            (!i || i.depth) &&
            (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)),
          this.gl.clear(
            (this.color ? this.gl.COLOR_BUFFER_BIT : 0) |
              (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) |
              (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0)
          )),
        n && t.updateMatrixWorld(),
        e && e.updateMatrixWorld(),
        this.getRenderList({
          scene: t,
          camera: e,
          frustumCull: a,
          sort: r,
        }).forEach((u) => {
          u.draw({ camera: e });
        });
    }
  }
  function el(s, t) {
    return (s[0] = t[0]), (s[1] = t[1]), (s[2] = t[2]), (s[3] = t[3]), s;
  }
  function sl(s, t, e, i, n) {
    return (s[0] = t), (s[1] = e), (s[2] = i), (s[3] = n), s;
  }
  function il(s, t) {
    let e = t[0],
      i = t[1],
      n = t[2],
      r = t[3],
      a = e * e + i * i + n * n + r * r;
    return (
      a > 0 && (a = 1 / Math.sqrt(a)),
      (s[0] = e * a),
      (s[1] = i * a),
      (s[2] = n * a),
      (s[3] = r * a),
      s
    );
  }
  function nl(s, t) {
    return s[0] * t[0] + s[1] * t[1] + s[2] * t[2] + s[3] * t[3];
  }
  function rl(s) {
    return (s[0] = 0), (s[1] = 0), (s[2] = 0), (s[3] = 1), s;
  }
  function al(s, t, e) {
    e = e * 0.5;
    let i = Math.sin(e);
    return (
      (s[0] = i * t[0]),
      (s[1] = i * t[1]),
      (s[2] = i * t[2]),
      (s[3] = Math.cos(e)),
      s
    );
  }
  function Xr(s, t, e) {
    let i = t[0],
      n = t[1],
      r = t[2],
      a = t[3],
      o = e[0],
      l = e[1],
      u = e[2],
      p = e[3];
    return (
      (s[0] = i * p + a * o + n * u - r * l),
      (s[1] = n * p + a * l + r * o - i * u),
      (s[2] = r * p + a * u + i * l - n * o),
      (s[3] = a * p - i * o - n * l - r * u),
      s
    );
  }
  function ol(s, t, e) {
    e *= 0.5;
    let i = t[0],
      n = t[1],
      r = t[2],
      a = t[3],
      o = Math.sin(e),
      l = Math.cos(e);
    return (
      (s[0] = i * l + a * o),
      (s[1] = n * l + r * o),
      (s[2] = r * l - n * o),
      (s[3] = a * l - i * o),
      s
    );
  }
  function hl(s, t, e) {
    e *= 0.5;
    let i = t[0],
      n = t[1],
      r = t[2],
      a = t[3],
      o = Math.sin(e),
      l = Math.cos(e);
    return (
      (s[0] = i * l - r * o),
      (s[1] = n * l + a * o),
      (s[2] = r * l + i * o),
      (s[3] = a * l - n * o),
      s
    );
  }
  function ll(s, t, e) {
    e *= 0.5;
    let i = t[0],
      n = t[1],
      r = t[2],
      a = t[3],
      o = Math.sin(e),
      l = Math.cos(e);
    return (
      (s[0] = i * l + n * o),
      (s[1] = n * l - i * o),
      (s[2] = r * l + a * o),
      (s[3] = a * l - r * o),
      s
    );
  }
  function cl(s, t, e, i) {
    let n = t[0],
      r = t[1],
      a = t[2],
      o = t[3],
      l = e[0],
      u = e[1],
      p = e[2],
      d = e[3],
      f,
      y,
      x,
      w,
      v;
    return (
      (y = n * l + r * u + a * p + o * d),
      y < 0 && ((y = -y), (l = -l), (u = -u), (p = -p), (d = -d)),
      1 - y > 1e-6
        ? ((f = Math.acos(y)),
          (x = Math.sin(f)),
          (w = Math.sin((1 - i) * f) / x),
          (v = Math.sin(i * f) / x))
        : ((w = 1 - i), (v = i)),
      (s[0] = w * n + v * l),
      (s[1] = w * r + v * u),
      (s[2] = w * a + v * p),
      (s[3] = w * o + v * d),
      s
    );
  }
  function ul(s, t) {
    let e = t[0],
      i = t[1],
      n = t[2],
      r = t[3],
      a = e * e + i * i + n * n + r * r,
      o = a ? 1 / a : 0;
    return (s[0] = -e * o), (s[1] = -i * o), (s[2] = -n * o), (s[3] = r * o), s;
  }
  function pl(s, t) {
    return (s[0] = -t[0]), (s[1] = -t[1]), (s[2] = -t[2]), (s[3] = t[3]), s;
  }
  function dl(s, t) {
    let e = t[0] + t[4] + t[8],
      i;
    if (e > 0)
      (i = Math.sqrt(e + 1)),
        (s[3] = 0.5 * i),
        (i = 0.5 / i),
        (s[0] = (t[5] - t[7]) * i),
        (s[1] = (t[6] - t[2]) * i),
        (s[2] = (t[1] - t[3]) * i);
    else {
      let n = 0;
      t[4] > t[0] && (n = 1), t[8] > t[n * 3 + n] && (n = 2);
      let r = (n + 1) % 3,
        a = (n + 2) % 3;
      (i = Math.sqrt(t[n * 3 + n] - t[r * 3 + r] - t[a * 3 + a] + 1)),
        (s[n] = 0.5 * i),
        (i = 0.5 / i),
        (s[3] = (t[r * 3 + a] - t[a * 3 + r]) * i),
        (s[r] = (t[r * 3 + n] + t[n * 3 + r]) * i),
        (s[a] = (t[a * 3 + n] + t[n * 3 + a]) * i);
    }
    return s;
  }
  function fl(s, t, e = "YXZ") {
    let i = Math.sin(t[0] * 0.5),
      n = Math.cos(t[0] * 0.5),
      r = Math.sin(t[1] * 0.5),
      a = Math.cos(t[1] * 0.5),
      o = Math.sin(t[2] * 0.5),
      l = Math.cos(t[2] * 0.5);
    return (
      e === "XYZ"
        ? ((s[0] = i * a * l + n * r * o),
          (s[1] = n * r * l - i * a * o),
          (s[2] = n * a * o + i * r * l),
          (s[3] = n * a * l - i * r * o))
        : e === "YXZ"
        ? ((s[0] = i * a * l + n * r * o),
          (s[1] = n * r * l - i * a * o),
          (s[2] = n * a * o - i * r * l),
          (s[3] = n * a * l + i * r * o))
        : e === "ZXY"
        ? ((s[0] = i * a * l - n * r * o),
          (s[1] = n * r * l + i * a * o),
          (s[2] = n * a * o + i * r * l),
          (s[3] = n * a * l - i * r * o))
        : e === "ZYX"
        ? ((s[0] = i * a * l - n * r * o),
          (s[1] = n * r * l + i * a * o),
          (s[2] = n * a * o - i * r * l),
          (s[3] = n * a * l + i * r * o))
        : e === "YZX"
        ? ((s[0] = i * a * l + n * r * o),
          (s[1] = n * r * l + i * a * o),
          (s[2] = n * a * o - i * r * l),
          (s[3] = n * a * l - i * r * o))
        : e === "XZY" &&
          ((s[0] = i * a * l - n * r * o),
          (s[1] = n * r * l - i * a * o),
          (s[2] = n * a * o + i * r * l),
          (s[3] = n * a * l + i * r * o)),
      s
    );
  }
  const gl = el,
    ml = sl,
    yl = nl,
    xl = il;
  class wl extends Array {
    constructor(t = 0, e = 0, i = 0, n = 1) {
      super(t, e, i, n), (this.onChange = () => {}), (this._target = this);
      const r = ["0", "1", "2", "3"];
      return new Proxy(this, {
        set(a, o) {
          const l = Reflect.set(...arguments);
          return l && r.includes(o) && a.onChange(), l;
        },
      });
    }
    get x() {
      return this[0];
    }
    get y() {
      return this[1];
    }
    get z() {
      return this[2];
    }
    get w() {
      return this[3];
    }
    set x(t) {
      (this._target[0] = t), this.onChange();
    }
    set y(t) {
      (this._target[1] = t), this.onChange();
    }
    set z(t) {
      (this._target[2] = t), this.onChange();
    }
    set w(t) {
      (this._target[3] = t), this.onChange();
    }
    identity() {
      return rl(this._target), this.onChange(), this;
    }
    set(t, e, i, n) {
      return t.length
        ? this.copy(t)
        : (ml(this._target, t, e, i, n), this.onChange(), this);
    }
    rotateX(t) {
      return ol(this._target, this._target, t), this.onChange(), this;
    }
    rotateY(t) {
      return hl(this._target, this._target, t), this.onChange(), this;
    }
    rotateZ(t) {
      return ll(this._target, this._target, t), this.onChange(), this;
    }
    inverse(t = this._target) {
      return ul(this._target, t), this.onChange(), this;
    }
    conjugate(t = this._target) {
      return pl(this._target, t), this.onChange(), this;
    }
    copy(t) {
      return gl(this._target, t), this.onChange(), this;
    }
    normalize(t = this._target) {
      return xl(this._target, t), this.onChange(), this;
    }
    multiply(t, e) {
      return (
        e ? Xr(this._target, t, e) : Xr(this._target, this._target, t),
        this.onChange(),
        this
      );
    }
    dot(t) {
      return yl(this._target, t);
    }
    fromMatrix3(t) {
      return dl(this._target, t), this.onChange(), this;
    }
    fromEuler(t, e) {
      return fl(this._target, t, t.order), e || this.onChange(), this;
    }
    fromAxisAngle(t, e) {
      return al(this._target, t, e), this.onChange(), this;
    }
    slerp(t, e) {
      return cl(this._target, this._target, t, e), this.onChange(), this;
    }
    fromArray(t, e = 0) {
      return (
        (this._target[0] = t[e]),
        (this._target[1] = t[e + 1]),
        (this._target[2] = t[e + 2]),
        (this._target[3] = t[e + 3]),
        this.onChange(),
        this
      );
    }
    toArray(t = [], e = 0) {
      return (
        (t[e] = this[0]),
        (t[e + 1] = this[1]),
        (t[e + 2] = this[2]),
        (t[e + 3] = this[3]),
        t
      );
    }
  }
  const vl = 1e-6;
  function bl(s, t) {
    return (
      (s[0] = t[0]),
      (s[1] = t[1]),
      (s[2] = t[2]),
      (s[3] = t[3]),
      (s[4] = t[4]),
      (s[5] = t[5]),
      (s[6] = t[6]),
      (s[7] = t[7]),
      (s[8] = t[8]),
      (s[9] = t[9]),
      (s[10] = t[10]),
      (s[11] = t[11]),
      (s[12] = t[12]),
      (s[13] = t[13]),
      (s[14] = t[14]),
      (s[15] = t[15]),
      s
    );
  }
  function Sl(s, t, e, i, n, r, a, o, l, u, p, d, f, y, x, w, v) {
    return (
      (s[0] = t),
      (s[1] = e),
      (s[2] = i),
      (s[3] = n),
      (s[4] = r),
      (s[5] = a),
      (s[6] = o),
      (s[7] = l),
      (s[8] = u),
      (s[9] = p),
      (s[10] = d),
      (s[11] = f),
      (s[12] = y),
      (s[13] = x),
      (s[14] = w),
      (s[15] = v),
      s
    );
  }
  function Ml(s) {
    return (
      (s[0] = 1),
      (s[1] = 0),
      (s[2] = 0),
      (s[3] = 0),
      (s[4] = 0),
      (s[5] = 1),
      (s[6] = 0),
      (s[7] = 0),
      (s[8] = 0),
      (s[9] = 0),
      (s[10] = 1),
      (s[11] = 0),
      (s[12] = 0),
      (s[13] = 0),
      (s[14] = 0),
      (s[15] = 1),
      s
    );
  }
  function Il(s, t) {
    let e = t[0],
      i = t[1],
      n = t[2],
      r = t[3],
      a = t[4],
      o = t[5],
      l = t[6],
      u = t[7],
      p = t[8],
      d = t[9],
      f = t[10],
      y = t[11],
      x = t[12],
      w = t[13],
      v = t[14],
      S = t[15],
      T = e * o - i * a,
      C = e * l - n * a,
      I = e * u - r * a,
      M = i * l - n * o,
      A = i * u - r * o,
      G = n * u - r * l,
      X = p * w - d * x,
      W = p * v - f * x,
      $ = p * S - y * x,
      j = d * v - f * w,
      F = d * S - y * w,
      U = f * S - y * v,
      L = T * U - C * F + I * j + M * $ - A * W + G * X;
    return L
      ? ((L = 1 / L),
        (s[0] = (o * U - l * F + u * j) * L),
        (s[1] = (n * F - i * U - r * j) * L),
        (s[2] = (w * G - v * A + S * M) * L),
        (s[3] = (f * A - d * G - y * M) * L),
        (s[4] = (l * $ - a * U - u * W) * L),
        (s[5] = (e * U - n * $ + r * W) * L),
        (s[6] = (v * I - x * G - S * C) * L),
        (s[7] = (p * G - f * I + y * C) * L),
        (s[8] = (a * F - o * $ + u * X) * L),
        (s[9] = (i * $ - e * F - r * X) * L),
        (s[10] = (x * A - w * I + S * T) * L),
        (s[11] = (d * I - p * A - y * T) * L),
        (s[12] = (o * W - a * j - l * X) * L),
        (s[13] = (e * j - i * W + n * X) * L),
        (s[14] = (w * C - x * M - v * T) * L),
        (s[15] = (p * M - d * C + f * T) * L),
        s)
      : null;
  }
  function Za(s) {
    let t = s[0],
      e = s[1],
      i = s[2],
      n = s[3],
      r = s[4],
      a = s[5],
      o = s[6],
      l = s[7],
      u = s[8],
      p = s[9],
      d = s[10],
      f = s[11],
      y = s[12],
      x = s[13],
      w = s[14],
      v = s[15],
      S = t * a - e * r,
      T = t * o - i * r,
      C = t * l - n * r,
      I = e * o - i * a,
      M = e * l - n * a,
      A = i * l - n * o,
      G = u * x - p * y,
      X = u * w - d * y,
      W = u * v - f * y,
      $ = p * w - d * x,
      j = p * v - f * x,
      F = d * v - f * w;
    return S * F - T * j + C * $ + I * W - M * X + A * G;
  }
  function Hr(s, t, e) {
    let i = t[0],
      n = t[1],
      r = t[2],
      a = t[3],
      o = t[4],
      l = t[5],
      u = t[6],
      p = t[7],
      d = t[8],
      f = t[9],
      y = t[10],
      x = t[11],
      w = t[12],
      v = t[13],
      S = t[14],
      T = t[15],
      C = e[0],
      I = e[1],
      M = e[2],
      A = e[3];
    return (
      (s[0] = C * i + I * o + M * d + A * w),
      (s[1] = C * n + I * l + M * f + A * v),
      (s[2] = C * r + I * u + M * y + A * S),
      (s[3] = C * a + I * p + M * x + A * T),
      (C = e[4]),
      (I = e[5]),
      (M = e[6]),
      (A = e[7]),
      (s[4] = C * i + I * o + M * d + A * w),
      (s[5] = C * n + I * l + M * f + A * v),
      (s[6] = C * r + I * u + M * y + A * S),
      (s[7] = C * a + I * p + M * x + A * T),
      (C = e[8]),
      (I = e[9]),
      (M = e[10]),
      (A = e[11]),
      (s[8] = C * i + I * o + M * d + A * w),
      (s[9] = C * n + I * l + M * f + A * v),
      (s[10] = C * r + I * u + M * y + A * S),
      (s[11] = C * a + I * p + M * x + A * T),
      (C = e[12]),
      (I = e[13]),
      (M = e[14]),
      (A = e[15]),
      (s[12] = C * i + I * o + M * d + A * w),
      (s[13] = C * n + I * l + M * f + A * v),
      (s[14] = C * r + I * u + M * y + A * S),
      (s[15] = C * a + I * p + M * x + A * T),
      s
    );
  }
  function Pl(s, t, e) {
    let i = e[0],
      n = e[1],
      r = e[2],
      a,
      o,
      l,
      u,
      p,
      d,
      f,
      y,
      x,
      w,
      v,
      S;
    return (
      t === s
        ? ((s[12] = t[0] * i + t[4] * n + t[8] * r + t[12]),
          (s[13] = t[1] * i + t[5] * n + t[9] * r + t[13]),
          (s[14] = t[2] * i + t[6] * n + t[10] * r + t[14]),
          (s[15] = t[3] * i + t[7] * n + t[11] * r + t[15]))
        : ((a = t[0]),
          (o = t[1]),
          (l = t[2]),
          (u = t[3]),
          (p = t[4]),
          (d = t[5]),
          (f = t[6]),
          (y = t[7]),
          (x = t[8]),
          (w = t[9]),
          (v = t[10]),
          (S = t[11]),
          (s[0] = a),
          (s[1] = o),
          (s[2] = l),
          (s[3] = u),
          (s[4] = p),
          (s[5] = d),
          (s[6] = f),
          (s[7] = y),
          (s[8] = x),
          (s[9] = w),
          (s[10] = v),
          (s[11] = S),
          (s[12] = a * i + p * n + x * r + t[12]),
          (s[13] = o * i + d * n + w * r + t[13]),
          (s[14] = l * i + f * n + v * r + t[14]),
          (s[15] = u * i + y * n + S * r + t[15])),
      s
    );
  }
  function Al(s, t, e) {
    let i = e[0],
      n = e[1],
      r = e[2];
    return (
      (s[0] = t[0] * i),
      (s[1] = t[1] * i),
      (s[2] = t[2] * i),
      (s[3] = t[3] * i),
      (s[4] = t[4] * n),
      (s[5] = t[5] * n),
      (s[6] = t[6] * n),
      (s[7] = t[7] * n),
      (s[8] = t[8] * r),
      (s[9] = t[9] * r),
      (s[10] = t[10] * r),
      (s[11] = t[11] * r),
      (s[12] = t[12]),
      (s[13] = t[13]),
      (s[14] = t[14]),
      (s[15] = t[15]),
      s
    );
  }
  function El(s, t, e, i) {
    let n = i[0],
      r = i[1],
      a = i[2],
      o = Math.hypot(n, r, a),
      l,
      u,
      p,
      d,
      f,
      y,
      x,
      w,
      v,
      S,
      T,
      C,
      I,
      M,
      A,
      G,
      X,
      W,
      $,
      j,
      F,
      U,
      L,
      xe;
    return Math.abs(o) < vl
      ? null
      : ((o = 1 / o),
        (n *= o),
        (r *= o),
        (a *= o),
        (l = Math.sin(e)),
        (u = Math.cos(e)),
        (p = 1 - u),
        (d = t[0]),
        (f = t[1]),
        (y = t[2]),
        (x = t[3]),
        (w = t[4]),
        (v = t[5]),
        (S = t[6]),
        (T = t[7]),
        (C = t[8]),
        (I = t[9]),
        (M = t[10]),
        (A = t[11]),
        (G = n * n * p + u),
        (X = r * n * p + a * l),
        (W = a * n * p - r * l),
        ($ = n * r * p - a * l),
        (j = r * r * p + u),
        (F = a * r * p + n * l),
        (U = n * a * p + r * l),
        (L = r * a * p - n * l),
        (xe = a * a * p + u),
        (s[0] = d * G + w * X + C * W),
        (s[1] = f * G + v * X + I * W),
        (s[2] = y * G + S * X + M * W),
        (s[3] = x * G + T * X + A * W),
        (s[4] = d * $ + w * j + C * F),
        (s[5] = f * $ + v * j + I * F),
        (s[6] = y * $ + S * j + M * F),
        (s[7] = x * $ + T * j + A * F),
        (s[8] = d * U + w * L + C * xe),
        (s[9] = f * U + v * L + I * xe),
        (s[10] = y * U + S * L + M * xe),
        (s[11] = x * U + T * L + A * xe),
        t !== s &&
          ((s[12] = t[12]), (s[13] = t[13]), (s[14] = t[14]), (s[15] = t[15])),
        s);
  }
  function Cl(s, t) {
    return (s[0] = t[12]), (s[1] = t[13]), (s[2] = t[14]), s;
  }
  function Qa(s, t) {
    let e = t[0],
      i = t[1],
      n = t[2],
      r = t[4],
      a = t[5],
      o = t[6],
      l = t[8],
      u = t[9],
      p = t[10];
    return (
      (s[0] = Math.hypot(e, i, n)),
      (s[1] = Math.hypot(r, a, o)),
      (s[2] = Math.hypot(l, u, p)),
      s
    );
  }
  function Ll(s) {
    let t = s[0],
      e = s[1],
      i = s[2],
      n = s[4],
      r = s[5],
      a = s[6],
      o = s[8],
      l = s[9],
      u = s[10];
    const p = t * t + e * e + i * i,
      d = n * n + r * r + a * a,
      f = o * o + l * l + u * u;
    return Math.sqrt(Math.max(p, d, f));
  }
  const Ja = (function () {
    const s = [1, 1, 1];
    return function (t, e) {
      let i = s;
      Qa(i, e);
      let n = 1 / i[0],
        r = 1 / i[1],
        a = 1 / i[2],
        o = e[0] * n,
        l = e[1] * r,
        u = e[2] * a,
        p = e[4] * n,
        d = e[5] * r,
        f = e[6] * a,
        y = e[8] * n,
        x = e[9] * r,
        w = e[10] * a,
        v = o + d + w,
        S = 0;
      return (
        v > 0
          ? ((S = Math.sqrt(v + 1) * 2),
            (t[3] = 0.25 * S),
            (t[0] = (f - x) / S),
            (t[1] = (y - u) / S),
            (t[2] = (l - p) / S))
          : o > d && o > w
          ? ((S = Math.sqrt(1 + o - d - w) * 2),
            (t[3] = (f - x) / S),
            (t[0] = 0.25 * S),
            (t[1] = (l + p) / S),
            (t[2] = (y + u) / S))
          : d > w
          ? ((S = Math.sqrt(1 + d - o - w) * 2),
            (t[3] = (y - u) / S),
            (t[0] = (l + p) / S),
            (t[1] = 0.25 * S),
            (t[2] = (f + x) / S))
          : ((S = Math.sqrt(1 + w - o - d) * 2),
            (t[3] = (l - p) / S),
            (t[0] = (y + u) / S),
            (t[1] = (f + x) / S),
            (t[2] = 0.25 * S)),
        t
      );
    };
  })();
  function _l(s, t, e, i) {
    let n = ys([s[0], s[1], s[2]]);
    const r = ys([s[4], s[5], s[6]]),
      a = ys([s[8], s[9], s[10]]);
    Za(s) < 0 && (n = -n), (e[0] = s[12]), (e[1] = s[13]), (e[2] = s[14]);
    const l = s.slice(),
      u = 1 / n,
      p = 1 / r,
      d = 1 / a;
    (l[0] *= u),
      (l[1] *= u),
      (l[2] *= u),
      (l[4] *= p),
      (l[5] *= p),
      (l[6] *= p),
      (l[8] *= d),
      (l[9] *= d),
      (l[10] *= d),
      Ja(t, l),
      (i[0] = n),
      (i[1] = r),
      (i[2] = a);
  }
  function Tl(s, t, e, i) {
    const n = s,
      r = t[0],
      a = t[1],
      o = t[2],
      l = t[3],
      u = r + r,
      p = a + a,
      d = o + o,
      f = r * u,
      y = r * p,
      x = r * d,
      w = a * p,
      v = a * d,
      S = o * d,
      T = l * u,
      C = l * p,
      I = l * d,
      M = i[0],
      A = i[1],
      G = i[2];
    return (
      (n[0] = (1 - (w + S)) * M),
      (n[1] = (y + I) * M),
      (n[2] = (x - C) * M),
      (n[3] = 0),
      (n[4] = (y - I) * A),
      (n[5] = (1 - (f + S)) * A),
      (n[6] = (v + T) * A),
      (n[7] = 0),
      (n[8] = (x + C) * G),
      (n[9] = (v - T) * G),
      (n[10] = (1 - (f + w)) * G),
      (n[11] = 0),
      (n[12] = e[0]),
      (n[13] = e[1]),
      (n[14] = e[2]),
      (n[15] = 1),
      n
    );
  }
  function Ol(s, t) {
    let e = t[0],
      i = t[1],
      n = t[2],
      r = t[3],
      a = e + e,
      o = i + i,
      l = n + n,
      u = e * a,
      p = i * a,
      d = i * o,
      f = n * a,
      y = n * o,
      x = n * l,
      w = r * a,
      v = r * o,
      S = r * l;
    return (
      (s[0] = 1 - d - x),
      (s[1] = p + S),
      (s[2] = f - v),
      (s[3] = 0),
      (s[4] = p - S),
      (s[5] = 1 - u - x),
      (s[6] = y + w),
      (s[7] = 0),
      (s[8] = f + v),
      (s[9] = y - w),
      (s[10] = 1 - u - d),
      (s[11] = 0),
      (s[12] = 0),
      (s[13] = 0),
      (s[14] = 0),
      (s[15] = 1),
      s
    );
  }
  function zl(s, t, e, i, n) {
    let r = 1 / Math.tan(t / 2),
      a = 1 / (i - n);
    return (
      (s[0] = r / e),
      (s[1] = 0),
      (s[2] = 0),
      (s[3] = 0),
      (s[4] = 0),
      (s[5] = r),
      (s[6] = 0),
      (s[7] = 0),
      (s[8] = 0),
      (s[9] = 0),
      (s[10] = (n + i) * a),
      (s[11] = -1),
      (s[12] = 0),
      (s[13] = 0),
      (s[14] = 2 * n * i * a),
      (s[15] = 0),
      s
    );
  }
  function kl(s, t, e, i, n, r, a) {
    let o = 1 / (t - e),
      l = 1 / (i - n),
      u = 1 / (r - a);
    return (
      (s[0] = -2 * o),
      (s[1] = 0),
      (s[2] = 0),
      (s[3] = 0),
      (s[4] = 0),
      (s[5] = -2 * l),
      (s[6] = 0),
      (s[7] = 0),
      (s[8] = 0),
      (s[9] = 0),
      (s[10] = 2 * u),
      (s[11] = 0),
      (s[12] = (t + e) * o),
      (s[13] = (n + i) * l),
      (s[14] = (a + r) * u),
      (s[15] = 1),
      s
    );
  }
  function Rl(s, t, e, i) {
    let n = t[0],
      r = t[1],
      a = t[2],
      o = i[0],
      l = i[1],
      u = i[2],
      p = n - e[0],
      d = r - e[1],
      f = a - e[2],
      y = p * p + d * d + f * f;
    y === 0 ? (f = 1) : ((y = 1 / Math.sqrt(y)), (p *= y), (d *= y), (f *= y));
    let x = l * f - u * d,
      w = u * p - o * f,
      v = o * d - l * p;
    return (
      (y = x * x + w * w + v * v),
      y === 0 &&
        (u ? (o += 1e-6) : l ? (u += 1e-6) : (l += 1e-6),
        (x = l * f - u * d),
        (w = u * p - o * f),
        (v = o * d - l * p),
        (y = x * x + w * w + v * v)),
      (y = 1 / Math.sqrt(y)),
      (x *= y),
      (w *= y),
      (v *= y),
      (s[0] = x),
      (s[1] = w),
      (s[2] = v),
      (s[3] = 0),
      (s[4] = d * v - f * w),
      (s[5] = f * x - p * v),
      (s[6] = p * w - d * x),
      (s[7] = 0),
      (s[8] = p),
      (s[9] = d),
      (s[10] = f),
      (s[11] = 0),
      (s[12] = n),
      (s[13] = r),
      (s[14] = a),
      (s[15] = 1),
      s
    );
  }
  function Yr(s, t, e) {
    return (
      (s[0] = t[0] + e[0]),
      (s[1] = t[1] + e[1]),
      (s[2] = t[2] + e[2]),
      (s[3] = t[3] + e[3]),
      (s[4] = t[4] + e[4]),
      (s[5] = t[5] + e[5]),
      (s[6] = t[6] + e[6]),
      (s[7] = t[7] + e[7]),
      (s[8] = t[8] + e[8]),
      (s[9] = t[9] + e[9]),
      (s[10] = t[10] + e[10]),
      (s[11] = t[11] + e[11]),
      (s[12] = t[12] + e[12]),
      (s[13] = t[13] + e[13]),
      (s[14] = t[14] + e[14]),
      (s[15] = t[15] + e[15]),
      s
    );
  }
  function Kr(s, t, e) {
    return (
      (s[0] = t[0] - e[0]),
      (s[1] = t[1] - e[1]),
      (s[2] = t[2] - e[2]),
      (s[3] = t[3] - e[3]),
      (s[4] = t[4] - e[4]),
      (s[5] = t[5] - e[5]),
      (s[6] = t[6] - e[6]),
      (s[7] = t[7] - e[7]),
      (s[8] = t[8] - e[8]),
      (s[9] = t[9] - e[9]),
      (s[10] = t[10] - e[10]),
      (s[11] = t[11] - e[11]),
      (s[12] = t[12] - e[12]),
      (s[13] = t[13] - e[13]),
      (s[14] = t[14] - e[14]),
      (s[15] = t[15] - e[15]),
      s
    );
  }
  function Gl(s, t, e) {
    return (
      (s[0] = t[0] * e),
      (s[1] = t[1] * e),
      (s[2] = t[2] * e),
      (s[3] = t[3] * e),
      (s[4] = t[4] * e),
      (s[5] = t[5] * e),
      (s[6] = t[6] * e),
      (s[7] = t[7] * e),
      (s[8] = t[8] * e),
      (s[9] = t[9] * e),
      (s[10] = t[10] * e),
      (s[11] = t[11] * e),
      (s[12] = t[12] * e),
      (s[13] = t[13] * e),
      (s[14] = t[14] * e),
      (s[15] = t[15] * e),
      s
    );
  }
  class Ut extends Array {
    constructor(
      t = 1,
      e = 0,
      i = 0,
      n = 0,
      r = 0,
      a = 1,
      o = 0,
      l = 0,
      u = 0,
      p = 0,
      d = 1,
      f = 0,
      y = 0,
      x = 0,
      w = 0,
      v = 1
    ) {
      return super(t, e, i, n, r, a, o, l, u, p, d, f, y, x, w, v), this;
    }
    get x() {
      return this[12];
    }
    get y() {
      return this[13];
    }
    get z() {
      return this[14];
    }
    get w() {
      return this[15];
    }
    set x(t) {
      this[12] = t;
    }
    set y(t) {
      this[13] = t;
    }
    set z(t) {
      this[14] = t;
    }
    set w(t) {
      this[15] = t;
    }
    set(t, e, i, n, r, a, o, l, u, p, d, f, y, x, w, v) {
      return t.length
        ? this.copy(t)
        : (Sl(this, t, e, i, n, r, a, o, l, u, p, d, f, y, x, w, v), this);
    }
    translate(t, e = this) {
      return Pl(this, e, t), this;
    }
    rotate(t, e, i = this) {
      return El(this, i, t, e), this;
    }
    scale(t, e = this) {
      return Al(this, e, typeof t == "number" ? [t, t, t] : t), this;
    }
    add(t, e) {
      return e ? Yr(this, t, e) : Yr(this, this, t), this;
    }
    sub(t, e) {
      return e ? Kr(this, t, e) : Kr(this, this, t), this;
    }
    multiply(t, e) {
      return (
        t.length ? (e ? Hr(this, t, e) : Hr(this, this, t)) : Gl(this, this, t),
        this
      );
    }
    identity() {
      return Ml(this), this;
    }
    copy(t) {
      return bl(this, t), this;
    }
    fromPerspective({ fov: t, aspect: e, near: i, far: n } = {}) {
      return zl(this, t, e, i, n), this;
    }
    fromOrthogonal({ left: t, right: e, bottom: i, top: n, near: r, far: a }) {
      return kl(this, t, e, i, n, r, a), this;
    }
    fromQuaternion(t) {
      return Ol(this, t), this;
    }
    setPosition(t) {
      return (this.x = t[0]), (this.y = t[1]), (this.z = t[2]), this;
    }
    inverse(t = this) {
      return Il(this, t), this;
    }
    compose(t, e, i) {
      return Tl(this, t, e, i), this;
    }
    decompose(t, e, i) {
      return _l(this, t, e, i), this;
    }
    getRotation(t) {
      return Ja(t, this), this;
    }
    getTranslation(t) {
      return Cl(t, this), this;
    }
    getScaling(t) {
      return Qa(t, this), this;
    }
    getMaxScaleOnAxis() {
      return Ll(this);
    }
    lookAt(t, e, i) {
      return Rl(this, t, e, i), this;
    }
    determinant() {
      return Za(this);
    }
    fromArray(t, e = 0) {
      return (
        (this[0] = t[e]),
        (this[1] = t[e + 1]),
        (this[2] = t[e + 2]),
        (this[3] = t[e + 3]),
        (this[4] = t[e + 4]),
        (this[5] = t[e + 5]),
        (this[6] = t[e + 6]),
        (this[7] = t[e + 7]),
        (this[8] = t[e + 8]),
        (this[9] = t[e + 9]),
        (this[10] = t[e + 10]),
        (this[11] = t[e + 11]),
        (this[12] = t[e + 12]),
        (this[13] = t[e + 13]),
        (this[14] = t[e + 14]),
        (this[15] = t[e + 15]),
        this
      );
    }
    toArray(t = [], e = 0) {
      return (
        (t[e] = this[0]),
        (t[e + 1] = this[1]),
        (t[e + 2] = this[2]),
        (t[e + 3] = this[3]),
        (t[e + 4] = this[4]),
        (t[e + 5] = this[5]),
        (t[e + 6] = this[6]),
        (t[e + 7] = this[7]),
        (t[e + 8] = this[8]),
        (t[e + 9] = this[9]),
        (t[e + 10] = this[10]),
        (t[e + 11] = this[11]),
        (t[e + 12] = this[12]),
        (t[e + 13] = this[13]),
        (t[e + 14] = this[14]),
        (t[e + 15] = this[15]),
        t
      );
    }
  }
  function Fl(s, t, e = "YXZ") {
    return (
      e === "XYZ"
        ? ((s[1] = Math.asin(Math.min(Math.max(t[8], -1), 1))),
          Math.abs(t[8]) < 0.99999
            ? ((s[0] = Math.atan2(-t[9], t[10])),
              (s[2] = Math.atan2(-t[4], t[0])))
            : ((s[0] = Math.atan2(t[6], t[5])), (s[2] = 0)))
        : e === "YXZ"
        ? ((s[0] = Math.asin(-Math.min(Math.max(t[9], -1), 1))),
          Math.abs(t[9]) < 0.99999
            ? ((s[1] = Math.atan2(t[8], t[10])),
              (s[2] = Math.atan2(t[1], t[5])))
            : ((s[1] = Math.atan2(-t[2], t[0])), (s[2] = 0)))
        : e === "ZXY"
        ? ((s[0] = Math.asin(Math.min(Math.max(t[6], -1), 1))),
          Math.abs(t[6]) < 0.99999
            ? ((s[1] = Math.atan2(-t[2], t[10])),
              (s[2] = Math.atan2(-t[4], t[5])))
            : ((s[1] = 0), (s[2] = Math.atan2(t[1], t[0]))))
        : e === "ZYX"
        ? ((s[1] = Math.asin(-Math.min(Math.max(t[2], -1), 1))),
          Math.abs(t[2]) < 0.99999
            ? ((s[0] = Math.atan2(t[6], t[10])),
              (s[2] = Math.atan2(t[1], t[0])))
            : ((s[0] = 0), (s[2] = Math.atan2(-t[4], t[5]))))
        : e === "YZX"
        ? ((s[2] = Math.asin(Math.min(Math.max(t[1], -1), 1))),
          Math.abs(t[1]) < 0.99999
            ? ((s[0] = Math.atan2(-t[9], t[5])),
              (s[1] = Math.atan2(-t[2], t[0])))
            : ((s[0] = 0), (s[1] = Math.atan2(t[8], t[10]))))
        : e === "XZY" &&
          ((s[2] = Math.asin(-Math.min(Math.max(t[4], -1), 1))),
          Math.abs(t[4]) < 0.99999
            ? ((s[0] = Math.atan2(t[6], t[5])), (s[1] = Math.atan2(t[8], t[0])))
            : ((s[0] = Math.atan2(-t[9], t[10])), (s[1] = 0))),
      s
    );
  }
  const Zr = new Ut();
  class Ge extends Array {
    constructor(t = 0, e = t, i = t, n = "YXZ") {
      super(t, e, i),
        (this.order = n),
        (this.onChange = () => {}),
        (this._target = this);
      const r = ["0", "1", "2"];
      return new Proxy(this, {
        set(a, o) {
          const l = Reflect.set(...arguments);
          return l && r.includes(o) && a.onChange(), l;
        },
      });
    }
    get x() {
      return this[0];
    }
    get y() {
      return this[1];
    }
    get z() {
      return this[2];
    }
    set x(t) {
      (this._target[0] = t), this.onChange();
    }
    set y(t) {
      (this._target[1] = t), this.onChange();
    }
    set z(t) {
      (this._target[2] = t), this.onChange();
    }
    set(t, e = t, i = t) {
      return t.length
        ? this.copy(t)
        : ((this._target[0] = t),
          (this._target[1] = e),
          (this._target[2] = i),
          this.onChange(),
          this);
    }
    copy(t) {
      return (
        (this._target[0] = t[0]),
        (this._target[1] = t[1]),
        (this._target[2] = t[2]),
        this.onChange(),
        this
      );
    }
    reorder(t) {
      return (this._target.order = t), this.onChange(), this;
    }
    fromRotationMatrix(t, e = this.order) {
      return Fl(this._target, t, e), this.onChange(), this;
    }
    fromQuaternion(t, e = this.order, i) {
      return (
        Zr.fromQuaternion(t),
        this._target.fromRotationMatrix(Zr, e),
        i || this.onChange(),
        this
      );
    }
    fromArray(t, e = 0) {
      return (
        (this._target[0] = t[e]),
        (this._target[1] = t[e + 1]),
        (this._target[2] = t[e + 2]),
        this
      );
    }
    toArray(t = [], e = 0) {
      return (t[e] = this[0]), (t[e + 1] = this[1]), (t[e + 2] = this[2]), t;
    }
  }
  class Tt {
    constructor() {
      (this.parent = null),
        (this.children = []),
        (this.visible = !0),
        (this.matrix = new Ut()),
        (this.worldMatrix = new Ut()),
        (this.matrixAutoUpdate = !0),
        (this.worldMatrixNeedsUpdate = !1),
        (this.position = new P()),
        (this.quaternion = new wl()),
        (this.scale = new P(1)),
        (this.rotation = new Ge()),
        (this.up = new P(0, 1, 0)),
        (this.rotation._target.onChange = () =>
          this.quaternion.fromEuler(this.rotation, !0)),
        (this.quaternion._target.onChange = () =>
          this.rotation.fromQuaternion(this.quaternion, void 0, !0));
    }
    setParent(t, e = !0) {
      this.parent && t !== this.parent && this.parent.removeChild(this, !1),
        (this.parent = t),
        e && t && t.addChild(this, !1);
    }
    addChild(t, e = !0) {
      ~this.children.indexOf(t) || this.children.push(t),
        e && t.setParent(this, !1);
    }
    removeChild(t, e = !0) {
      ~this.children.indexOf(t) &&
        this.children.splice(this.children.indexOf(t), 1),
        e && t.setParent(null, !1);
    }
    updateMatrixWorld(t) {
      this.matrixAutoUpdate && this.updateMatrix(),
        (this.worldMatrixNeedsUpdate || t) &&
          (this.parent === null
            ? this.worldMatrix.copy(this.matrix)
            : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix),
          (this.worldMatrixNeedsUpdate = !1),
          (t = !0));
      for (let e = 0, i = this.children.length; e < i; e++)
        this.children[e].updateMatrixWorld(t);
    }
    updateMatrix() {
      this.matrix.compose(this.quaternion, this.position, this.scale),
        (this.worldMatrixNeedsUpdate = !0);
    }
    traverse(t) {
      if (!t(this))
        for (let e = 0, i = this.children.length; e < i; e++)
          this.children[e].traverse(t);
    }
    decompose() {
      this.matrix.decompose(this.quaternion._target, this.position, this.scale),
        this.rotation.fromQuaternion(this.quaternion);
    }
    lookAt(t, e = !1) {
      e
        ? this.matrix.lookAt(this.position, t, this.up)
        : this.matrix.lookAt(t, this.position, this.up),
        this.matrix.getRotation(this.quaternion._target),
        this.rotation.fromQuaternion(this.quaternion);
    }
  }
  const Dl = new Ut(),
    Bl = new P(),
    $l = new P();
  class Ul extends Tt {
    constructor(
      t,
      {
        near: e = 0.1,
        far: i = 100,
        fov: n = 45,
        aspect: r = 1,
        left: a,
        right: o,
        bottom: l,
        top: u,
        zoom: p = 1,
      } = {}
    ) {
      super(),
        Object.assign(this, {
          near: e,
          far: i,
          fov: n,
          aspect: r,
          left: a,
          right: o,
          bottom: l,
          top: u,
          zoom: p,
        }),
        (this.projectionMatrix = new Ut()),
        (this.viewMatrix = new Ut()),
        (this.projectionViewMatrix = new Ut()),
        (this.worldPosition = new P()),
        (this.type = a || o ? "orthographic" : "perspective"),
        this.type === "orthographic" ? this.orthographic() : this.perspective();
    }
    perspective({
      near: t = this.near,
      far: e = this.far,
      fov: i = this.fov,
      aspect: n = this.aspect,
    } = {}) {
      return (
        Object.assign(this, { near: t, far: e, fov: i, aspect: n }),
        this.projectionMatrix.fromPerspective({
          fov: i * (Math.PI / 180),
          aspect: n,
          near: t,
          far: e,
        }),
        (this.type = "perspective"),
        this
      );
    }
    orthographic({
      near: t = this.near,
      far: e = this.far,
      left: i = this.left || -1,
      right: n = this.right || 1,
      bottom: r = this.bottom || -1,
      top: a = this.top || 1,
      zoom: o = this.zoom,
    } = {}) {
      return (
        Object.assign(this, {
          near: t,
          far: e,
          left: i,
          right: n,
          bottom: r,
          top: a,
          zoom: o,
        }),
        (i /= o),
        (n /= o),
        (r /= o),
        (a /= o),
        this.projectionMatrix.fromOrthogonal({
          left: i,
          right: n,
          bottom: r,
          top: a,
          near: t,
          far: e,
        }),
        (this.type = "orthographic"),
        this
      );
    }
    updateMatrixWorld() {
      return (
        super.updateMatrixWorld(),
        this.viewMatrix.inverse(this.worldMatrix),
        this.worldMatrix.getTranslation(this.worldPosition),
        this.projectionViewMatrix.multiply(
          this.projectionMatrix,
          this.viewMatrix
        ),
        this
      );
    }
    lookAt(t) {
      return super.lookAt(t, !0), this;
    }
    project(t) {
      return (
        t.applyMatrix4(this.viewMatrix),
        t.applyMatrix4(this.projectionMatrix),
        this
      );
    }
    unproject(t) {
      return (
        t.applyMatrix4(Dl.inverse(this.projectionMatrix)),
        t.applyMatrix4(this.worldMatrix),
        this
      );
    }
    updateFrustum() {
      this.frustum ||
        (this.frustum = [new P(), new P(), new P(), new P(), new P(), new P()]);
      const t = this.projectionViewMatrix;
      (this.frustum[0].set(t[3] - t[0], t[7] - t[4], t[11] - t[8]).constant =
        t[15] - t[12]),
        (this.frustum[1].set(t[3] + t[0], t[7] + t[4], t[11] + t[8]).constant =
          t[15] + t[12]),
        (this.frustum[2].set(t[3] + t[1], t[7] + t[5], t[11] + t[9]).constant =
          t[15] + t[13]),
        (this.frustum[3].set(t[3] - t[1], t[7] - t[5], t[11] - t[9]).constant =
          t[15] - t[13]),
        (this.frustum[4].set(t[3] - t[2], t[7] - t[6], t[11] - t[10]).constant =
          t[15] - t[14]),
        (this.frustum[5].set(t[3] + t[2], t[7] + t[6], t[11] + t[10]).constant =
          t[15] + t[14]);
      for (let e = 0; e < 6; e++) {
        const i = 1 / this.frustum[e].distance();
        this.frustum[e].multiply(i), (this.frustum[e].constant *= i);
      }
    }
    frustumIntersectsMesh(t, e = t.worldMatrix) {
      if (
        !t.geometry.attributes.position ||
        ((!t.geometry.bounds || t.geometry.bounds.radius === 1 / 0) &&
          t.geometry.computeBoundingSphere(),
        !t.geometry.bounds)
      )
        return !0;
      const i = Bl;
      i.copy(t.geometry.bounds.center), i.applyMatrix4(e);
      const n = t.geometry.bounds.radius * e.getMaxScaleOnAxis();
      return this.frustumIntersectsSphere(i, n);
    }
    frustumIntersectsSphere(t, e) {
      const i = $l;
      for (let n = 0; n < 6; n++) {
        const r = this.frustum[n];
        if (i.copy(r).dot(t) + r.constant < -e) return !1;
      }
      return !0;
    }
  }
  function Nl(s, t) {
    return (
      (s[0] = t[0]),
      (s[1] = t[1]),
      (s[2] = t[2]),
      (s[3] = t[4]),
      (s[4] = t[5]),
      (s[5] = t[6]),
      (s[6] = t[8]),
      (s[7] = t[9]),
      (s[8] = t[10]),
      s
    );
  }
  function Vl(s, t) {
    let e = t[0],
      i = t[1],
      n = t[2],
      r = t[3],
      a = e + e,
      o = i + i,
      l = n + n,
      u = e * a,
      p = i * a,
      d = i * o,
      f = n * a,
      y = n * o,
      x = n * l,
      w = r * a,
      v = r * o,
      S = r * l;
    return (
      (s[0] = 1 - d - x),
      (s[3] = p - S),
      (s[6] = f + v),
      (s[1] = p + S),
      (s[4] = 1 - u - x),
      (s[7] = y - w),
      (s[2] = f - v),
      (s[5] = y + w),
      (s[8] = 1 - u - d),
      s
    );
  }
  function Wl(s, t) {
    return (
      (s[0] = t[0]),
      (s[1] = t[1]),
      (s[2] = t[2]),
      (s[3] = t[3]),
      (s[4] = t[4]),
      (s[5] = t[5]),
      (s[6] = t[6]),
      (s[7] = t[7]),
      (s[8] = t[8]),
      s
    );
  }
  function jl(s, t, e, i, n, r, a, o, l, u) {
    return (
      (s[0] = t),
      (s[1] = e),
      (s[2] = i),
      (s[3] = n),
      (s[4] = r),
      (s[5] = a),
      (s[6] = o),
      (s[7] = l),
      (s[8] = u),
      s
    );
  }
  function ql(s) {
    return (
      (s[0] = 1),
      (s[1] = 0),
      (s[2] = 0),
      (s[3] = 0),
      (s[4] = 1),
      (s[5] = 0),
      (s[6] = 0),
      (s[7] = 0),
      (s[8] = 1),
      s
    );
  }
  function Xl(s, t) {
    let e = t[0],
      i = t[1],
      n = t[2],
      r = t[3],
      a = t[4],
      o = t[5],
      l = t[6],
      u = t[7],
      p = t[8],
      d = p * a - o * u,
      f = -p * r + o * l,
      y = u * r - a * l,
      x = e * d + i * f + n * y;
    return x
      ? ((x = 1 / x),
        (s[0] = d * x),
        (s[1] = (-p * i + n * u) * x),
        (s[2] = (o * i - n * a) * x),
        (s[3] = f * x),
        (s[4] = (p * e - n * l) * x),
        (s[5] = (-o * e + n * r) * x),
        (s[6] = y * x),
        (s[7] = (-u * e + i * l) * x),
        (s[8] = (a * e - i * r) * x),
        s)
      : null;
  }
  function Qr(s, t, e) {
    let i = t[0],
      n = t[1],
      r = t[2],
      a = t[3],
      o = t[4],
      l = t[5],
      u = t[6],
      p = t[7],
      d = t[8],
      f = e[0],
      y = e[1],
      x = e[2],
      w = e[3],
      v = e[4],
      S = e[5],
      T = e[6],
      C = e[7],
      I = e[8];
    return (
      (s[0] = f * i + y * a + x * u),
      (s[1] = f * n + y * o + x * p),
      (s[2] = f * r + y * l + x * d),
      (s[3] = w * i + v * a + S * u),
      (s[4] = w * n + v * o + S * p),
      (s[5] = w * r + v * l + S * d),
      (s[6] = T * i + C * a + I * u),
      (s[7] = T * n + C * o + I * p),
      (s[8] = T * r + C * l + I * d),
      s
    );
  }
  function Hl(s, t, e) {
    let i = t[0],
      n = t[1],
      r = t[2],
      a = t[3],
      o = t[4],
      l = t[5],
      u = t[6],
      p = t[7],
      d = t[8],
      f = e[0],
      y = e[1];
    return (
      (s[0] = i),
      (s[1] = n),
      (s[2] = r),
      (s[3] = a),
      (s[4] = o),
      (s[5] = l),
      (s[6] = f * i + y * a + u),
      (s[7] = f * n + y * o + p),
      (s[8] = f * r + y * l + d),
      s
    );
  }
  function Yl(s, t, e) {
    let i = t[0],
      n = t[1],
      r = t[2],
      a = t[3],
      o = t[4],
      l = t[5],
      u = t[6],
      p = t[7],
      d = t[8],
      f = Math.sin(e),
      y = Math.cos(e);
    return (
      (s[0] = y * i + f * a),
      (s[1] = y * n + f * o),
      (s[2] = y * r + f * l),
      (s[3] = y * a - f * i),
      (s[4] = y * o - f * n),
      (s[5] = y * l - f * r),
      (s[6] = u),
      (s[7] = p),
      (s[8] = d),
      s
    );
  }
  function Kl(s, t, e) {
    let i = e[0],
      n = e[1];
    return (
      (s[0] = i * t[0]),
      (s[1] = i * t[1]),
      (s[2] = i * t[2]),
      (s[3] = n * t[3]),
      (s[4] = n * t[4]),
      (s[5] = n * t[5]),
      (s[6] = t[6]),
      (s[7] = t[7]),
      (s[8] = t[8]),
      s
    );
  }
  function Zl(s, t) {
    let e = t[0],
      i = t[1],
      n = t[2],
      r = t[3],
      a = t[4],
      o = t[5],
      l = t[6],
      u = t[7],
      p = t[8],
      d = t[9],
      f = t[10],
      y = t[11],
      x = t[12],
      w = t[13],
      v = t[14],
      S = t[15],
      T = e * o - i * a,
      C = e * l - n * a,
      I = e * u - r * a,
      M = i * l - n * o,
      A = i * u - r * o,
      G = n * u - r * l,
      X = p * w - d * x,
      W = p * v - f * x,
      $ = p * S - y * x,
      j = d * v - f * w,
      F = d * S - y * w,
      U = f * S - y * v,
      L = T * U - C * F + I * j + M * $ - A * W + G * X;
    return L
      ? ((L = 1 / L),
        (s[0] = (o * U - l * F + u * j) * L),
        (s[1] = (l * $ - a * U - u * W) * L),
        (s[2] = (a * F - o * $ + u * X) * L),
        (s[3] = (n * F - i * U - r * j) * L),
        (s[4] = (e * U - n * $ + r * W) * L),
        (s[5] = (i * $ - e * F - r * X) * L),
        (s[6] = (w * G - v * A + S * M) * L),
        (s[7] = (v * I - x * G - S * C) * L),
        (s[8] = (x * A - w * I + S * T) * L),
        s)
      : null;
  }
  class Ql extends Array {
    constructor(t = 1, e = 0, i = 0, n = 0, r = 1, a = 0, o = 0, l = 0, u = 1) {
      return super(t, e, i, n, r, a, o, l, u), this;
    }
    set(t, e, i, n, r, a, o, l, u) {
      return t.length
        ? this.copy(t)
        : (jl(this, t, e, i, n, r, a, o, l, u), this);
    }
    translate(t, e = this) {
      return Hl(this, e, t), this;
    }
    rotate(t, e = this) {
      return Yl(this, e, t), this;
    }
    scale(t, e = this) {
      return Kl(this, e, t), this;
    }
    multiply(t, e) {
      return e ? Qr(this, t, e) : Qr(this, this, t), this;
    }
    identity() {
      return ql(this), this;
    }
    copy(t) {
      return Wl(this, t), this;
    }
    fromMatrix4(t) {
      return Nl(this, t), this;
    }
    fromQuaternion(t) {
      return Vl(this, t), this;
    }
    fromBasis(t, e, i) {
      return (
        this.set(t[0], t[1], t[2], e[0], e[1], e[2], i[0], i[1], i[2]), this
      );
    }
    inverse(t = this) {
      return Xl(this, t), this;
    }
    getNormalMatrix(t) {
      return Zl(this, t), this;
    }
  }
  let Jl = 0;
  class vr extends Tt {
    constructor(
      t,
      {
        geometry: e,
        program: i,
        mode: n = t.TRIANGLES,
        frustumCulled: r = !0,
        renderOrder: a = 0,
      } = {}
    ) {
      super(),
        t.canvas || console.error("gl not passed as first argument to Mesh"),
        (this.gl = t),
        (this.id = Jl++),
        (this.geometry = e),
        (this.program = i),
        (this.mode = n),
        (this.frustumCulled = r),
        (this.renderOrder = a),
        (this.modelViewMatrix = new Ut()),
        (this.normalMatrix = new Ql()),
        (this.beforeRenderCallbacks = []),
        (this.afterRenderCallbacks = []);
    }
    onBeforeRender(t) {
      return this.beforeRenderCallbacks.push(t), this;
    }
    onAfterRender(t) {
      return this.afterRenderCallbacks.push(t), this;
    }
    draw({ camera: t } = {}) {
      t &&
        (this.program.uniforms.modelMatrix ||
          Object.assign(this.program.uniforms, {
            modelMatrix: { value: null },
            viewMatrix: { value: null },
            modelViewMatrix: { value: null },
            normalMatrix: { value: null },
            projectionMatrix: { value: null },
            cameraPosition: { value: null },
          }),
        (this.program.uniforms.projectionMatrix.value = t.projectionMatrix),
        (this.program.uniforms.cameraPosition.value = t.worldPosition),
        (this.program.uniforms.viewMatrix.value = t.viewMatrix),
        this.modelViewMatrix.multiply(t.viewMatrix, this.worldMatrix),
        this.normalMatrix.getNormalMatrix(this.modelViewMatrix),
        (this.program.uniforms.modelMatrix.value = this.worldMatrix),
        (this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix),
        (this.program.uniforms.normalMatrix.value = this.normalMatrix)),
        this.beforeRenderCallbacks.forEach(
          (i) => i && i({ mesh: this, camera: t })
        );
      let e = this.program.cullFace && this.worldMatrix.determinant() < 0;
      this.program.use({ flipFaces: e }),
        this.geometry.draw({ mode: this.mode, program: this.program }),
        this.afterRenderCallbacks.forEach(
          (i) => i && i({ mesh: this, camera: t })
        );
    }
  }
  const Jr = new Uint8Array(4);
  function ta(s) {
    return (s & (s - 1)) === 0;
  }
  let tc = 1;
  class ec {
    constructor(
      t,
      {
        image: e,
        target: i = t.TEXTURE_2D,
        type: n = t.UNSIGNED_BYTE,
        format: r = t.RGBA,
        internalFormat: a = r,
        wrapS: o = t.CLAMP_TO_EDGE,
        wrapT: l = t.CLAMP_TO_EDGE,
        generateMipmaps: u = !0,
        minFilter: p = u ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR,
        magFilter: d = t.LINEAR,
        premultiplyAlpha: f = !1,
        unpackAlignment: y = 4,
        flipY: x = i == t.TEXTURE_2D,
        anisotropy: w = 0,
        level: v = 0,
        width: S,
        height: T = S,
      } = {}
    ) {
      (this.gl = t),
        (this.id = tc++),
        (this.image = e),
        (this.target = i),
        (this.type = n),
        (this.format = r),
        (this.internalFormat = a),
        (this.minFilter = p),
        (this.magFilter = d),
        (this.wrapS = o),
        (this.wrapT = l),
        (this.generateMipmaps = u),
        (this.premultiplyAlpha = f),
        (this.unpackAlignment = y),
        (this.flipY = x),
        (this.anisotropy = Math.min(
          w,
          this.gl.renderer.parameters.maxAnisotropy
        )),
        (this.level = v),
        (this.width = S),
        (this.height = T),
        (this.texture = this.gl.createTexture()),
        (this.store = { image: null }),
        (this.glState = this.gl.renderer.state),
        (this.state = {}),
        (this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR),
        (this.state.magFilter = this.gl.LINEAR),
        (this.state.wrapS = this.gl.REPEAT),
        (this.state.wrapT = this.gl.REPEAT),
        (this.state.anisotropy = 0);
    }
    bind() {
      this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id &&
        (this.gl.bindTexture(this.target, this.texture),
        (this.glState.textureUnits[this.glState.activeTextureUnit] = this.id));
    }
    update(t = 0) {
      const e = !(this.image === this.store.image && !this.needsUpdate);
      if (
        ((e || this.glState.textureUnits[t] !== this.id) &&
          (this.gl.renderer.activeTexture(t), this.bind()),
        !!e)
      ) {
        if (
          ((this.needsUpdate = !1),
          this.flipY !== this.glState.flipY &&
            (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY),
            (this.glState.flipY = this.flipY)),
          this.premultiplyAlpha !== this.glState.premultiplyAlpha &&
            (this.gl.pixelStorei(
              this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
              this.premultiplyAlpha
            ),
            (this.glState.premultiplyAlpha = this.premultiplyAlpha)),
          this.unpackAlignment !== this.glState.unpackAlignment &&
            (this.gl.pixelStorei(
              this.gl.UNPACK_ALIGNMENT,
              this.unpackAlignment
            ),
            (this.glState.unpackAlignment = this.unpackAlignment)),
          this.minFilter !== this.state.minFilter &&
            (this.gl.texParameteri(
              this.target,
              this.gl.TEXTURE_MIN_FILTER,
              this.minFilter
            ),
            (this.state.minFilter = this.minFilter)),
          this.magFilter !== this.state.magFilter &&
            (this.gl.texParameteri(
              this.target,
              this.gl.TEXTURE_MAG_FILTER,
              this.magFilter
            ),
            (this.state.magFilter = this.magFilter)),
          this.wrapS !== this.state.wrapS &&
            (this.gl.texParameteri(
              this.target,
              this.gl.TEXTURE_WRAP_S,
              this.wrapS
            ),
            (this.state.wrapS = this.wrapS)),
          this.wrapT !== this.state.wrapT &&
            (this.gl.texParameteri(
              this.target,
              this.gl.TEXTURE_WRAP_T,
              this.wrapT
            ),
            (this.state.wrapT = this.wrapT)),
          this.anisotropy &&
            this.anisotropy !== this.state.anisotropy &&
            (this.gl.texParameterf(
              this.target,
              this.gl.renderer.getExtension("EXT_texture_filter_anisotropic")
                .TEXTURE_MAX_ANISOTROPY_EXT,
              this.anisotropy
            ),
            (this.state.anisotropy = this.anisotropy)),
          this.image)
        ) {
          if (
            (this.image.width &&
              ((this.width = this.image.width),
              (this.height = this.image.height)),
            this.target === this.gl.TEXTURE_CUBE_MAP)
          )
            for (let i = 0; i < 6; i++)
              this.gl.texImage2D(
                this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                this.level,
                this.internalFormat,
                this.format,
                this.type,
                this.image[i]
              );
          else if (ArrayBuffer.isView(this.image))
            this.gl.texImage2D(
              this.target,
              this.level,
              this.internalFormat,
              this.width,
              this.height,
              0,
              this.format,
              this.type,
              this.image
            );
          else if (this.image.isCompressedTexture)
            for (let i = 0; i < this.image.length; i++)
              this.gl.compressedTexImage2D(
                this.target,
                i,
                this.internalFormat,
                this.image[i].width,
                this.image[i].height,
                0,
                this.image[i].data
              );
          else
            this.gl.texImage2D(
              this.target,
              this.level,
              this.internalFormat,
              this.format,
              this.type,
              this.image
            );
          this.generateMipmaps &&
            (!this.gl.renderer.isWebgl2 &&
            (!ta(this.image.width) || !ta(this.image.height))
              ? ((this.generateMipmaps = !1),
                (this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE),
                (this.minFilter = this.gl.LINEAR))
              : this.gl.generateMipmap(this.target)),
            this.onUpdate && this.onUpdate();
        } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
          for (let i = 0; i < 6; i++)
            this.gl.texImage2D(
              this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
              0,
              this.gl.RGBA,
              1,
              1,
              0,
              this.gl.RGBA,
              this.gl.UNSIGNED_BYTE,
              Jr
            );
        else
          this.width
            ? this.gl.texImage2D(
                this.target,
                this.level,
                this.internalFormat,
                this.width,
                this.height,
                0,
                this.format,
                this.type,
                null
              )
            : this.gl.texImage2D(
                this.target,
                0,
                this.gl.RGBA,
                1,
                1,
                0,
                this.gl.RGBA,
                this.gl.UNSIGNED_BYTE,
                Jr
              );
        this.store.image = this.image;
      }
    }
  }
  const ea = {
    black: "#000000",
    white: "#ffffff",
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    fuchsia: "#ff00ff",
    cyan: "#00ffff",
    yellow: "#ffff00",
    orange: "#ff8000",
  };
  function sa(s) {
    s.length === 4 && (s = s[0] + s[1] + s[1] + s[2] + s[2] + s[3] + s[3]);
    const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(s);
    return (
      t || console.warn(`Unable to convert hex string ${s} to rgb values`),
      [
        parseInt(t[1], 16) / 255,
        parseInt(t[2], 16) / 255,
        parseInt(t[3], 16) / 255,
      ]
    );
  }
  function sc(s) {
    return (
      (s = parseInt(s)),
      [((s >> 16) & 255) / 255, ((s >> 8) & 255) / 255, (s & 255) / 255]
    );
  }
  function ia(s) {
    return s === void 0
      ? [0, 0, 0]
      : arguments.length === 3
      ? arguments
      : isNaN(s)
      ? s[0] === "#"
        ? sa(s)
        : ea[s.toLowerCase()]
        ? sa(ea[s.toLowerCase()])
        : (console.warn("Color format not recognised"), [0, 0, 0])
      : sc(s);
  }
  class qe extends Array {
    constructor(t) {
      return Array.isArray(t) ? super(...t) : super(...ia(...arguments));
    }
    get r() {
      return this[0];
    }
    get g() {
      return this[1];
    }
    get b() {
      return this[2];
    }
    set r(t) {
      this[0] = t;
    }
    set g(t) {
      this[1] = t;
    }
    set b(t) {
      this[2] = t;
    }
    set(t) {
      return Array.isArray(t) ? this.copy(t) : this.copy(ia(...arguments));
    }
    copy(t) {
      return (this[0] = t[0]), (this[1] = t[1]), (this[2] = t[2]), this;
    }
  }
  function ic(s, t) {
    return (s[0] = t[0]), (s[1] = t[1]), s;
  }
  function nc(s, t, e) {
    return (s[0] = t), (s[1] = e), s;
  }
  function na(s, t, e) {
    return (s[0] = t[0] + e[0]), (s[1] = t[1] + e[1]), s;
  }
  function ra(s, t, e) {
    return (s[0] = t[0] - e[0]), (s[1] = t[1] - e[1]), s;
  }
  function rc(s, t, e) {
    return (s[0] = t[0] * e[0]), (s[1] = t[1] * e[1]), s;
  }
  function ac(s, t, e) {
    return (s[0] = t[0] / e[0]), (s[1] = t[1] / e[1]), s;
  }
  function Nn(s, t, e) {
    return (s[0] = t[0] * e), (s[1] = t[1] * e), s;
  }
  function oc(s, t) {
    var e = t[0] - s[0],
      i = t[1] - s[1];
    return Math.sqrt(e * e + i * i);
  }
  function hc(s, t) {
    var e = t[0] - s[0],
      i = t[1] - s[1];
    return e * e + i * i;
  }
  function aa(s) {
    var t = s[0],
      e = s[1];
    return Math.sqrt(t * t + e * e);
  }
  function lc(s) {
    var t = s[0],
      e = s[1];
    return t * t + e * e;
  }
  function cc(s, t) {
    return (s[0] = -t[0]), (s[1] = -t[1]), s;
  }
  function uc(s, t) {
    return (s[0] = 1 / t[0]), (s[1] = 1 / t[1]), s;
  }
  function pc(s, t) {
    var e = t[0],
      i = t[1],
      n = e * e + i * i;
    return (
      n > 0 && (n = 1 / Math.sqrt(n)), (s[0] = t[0] * n), (s[1] = t[1] * n), s
    );
  }
  function dc(s, t) {
    return s[0] * t[0] + s[1] * t[1];
  }
  function oa(s, t) {
    return s[0] * t[1] - s[1] * t[0];
  }
  function fc(s, t, e, i) {
    var n = t[0],
      r = t[1];
    return (s[0] = n + i * (e[0] - n)), (s[1] = r + i * (e[1] - r)), s;
  }
  function gc(s, t, e) {
    var i = t[0],
      n = t[1];
    return (
      (s[0] = e[0] * i + e[3] * n + e[6]),
      (s[1] = e[1] * i + e[4] * n + e[7]),
      s
    );
  }
  function mc(s, t, e) {
    let i = t[0],
      n = t[1];
    return (
      (s[0] = e[0] * i + e[4] * n + e[12]),
      (s[1] = e[1] * i + e[5] * n + e[13]),
      s
    );
  }
  function yc(s, t) {
    return s[0] === t[0] && s[1] === t[1];
  }
  class Fe extends Array {
    constructor(t = 0, e = t) {
      return super(t, e), this;
    }
    get x() {
      return this[0];
    }
    get y() {
      return this[1];
    }
    set x(t) {
      this[0] = t;
    }
    set y(t) {
      this[1] = t;
    }
    set(t, e = t) {
      return t.length ? this.copy(t) : (nc(this, t, e), this);
    }
    copy(t) {
      return ic(this, t), this;
    }
    add(t, e) {
      return e ? na(this, t, e) : na(this, this, t), this;
    }
    sub(t, e) {
      return e ? ra(this, t, e) : ra(this, this, t), this;
    }
    multiply(t) {
      return t.length ? rc(this, this, t) : Nn(this, this, t), this;
    }
    divide(t) {
      return t.length ? ac(this, this, t) : Nn(this, this, 1 / t), this;
    }
    inverse(t = this) {
      return uc(this, t), this;
    }
    len() {
      return aa(this);
    }
    distance(t) {
      return t ? oc(this, t) : aa(this);
    }
    squaredLen() {
      return this.squaredDistance();
    }
    squaredDistance(t) {
      return t ? hc(this, t) : lc(this);
    }
    negate(t = this) {
      return cc(this, t), this;
    }
    cross(t, e) {
      return e ? oa(t, e) : oa(this, t);
    }
    scale(t) {
      return Nn(this, this, t), this;
    }
    normalize() {
      return pc(this, this), this;
    }
    dot(t) {
      return dc(this, t);
    }
    equals(t) {
      return yc(this, t);
    }
    applyMatrix3(t) {
      return gc(this, this, t), this;
    }
    applyMatrix4(t) {
      return mc(this, this, t), this;
    }
    lerp(t, e) {
      return fc(this, this, t, e), this;
    }
    clone() {
      return new Fe(this[0], this[1]);
    }
    fromArray(t, e = 0) {
      return (this[0] = t[e]), (this[1] = t[e + 1]), this;
    }
    toArray(t = [], e = 0) {
      return (t[e] = this[0]), (t[e + 1] = this[1]), t;
    }
  }
  class Ai extends Hh {
    constructor(
      t,
      {
        width: e = 1,
        height: i = 1,
        widthSegments: n = 1,
        heightSegments: r = 1,
        attributes: a = {},
      } = {}
    ) {
      const o = n,
        l = r,
        u = (o + 1) * (l + 1),
        p = o * l * 6,
        d = new Float32Array(u * 3),
        f = new Float32Array(u * 3),
        y = new Float32Array(u * 2),
        x = p > 65536 ? new Uint32Array(p) : new Uint16Array(p);
      Ai.buildPlane(d, f, y, x, e, i, 0, o, l),
        Object.assign(a, {
          position: { size: 3, data: d },
          normal: { size: 3, data: f },
          uv: { size: 2, data: y },
          index: { data: x },
        }),
        super(t, a);
    }
    static buildPlane(
      t,
      e,
      i,
      n,
      r,
      a,
      o,
      l,
      u,
      p = 0,
      d = 1,
      f = 2,
      y = 1,
      x = -1,
      w = 0,
      v = 0
    ) {
      const S = w,
        T = r / l,
        C = a / u;
      for (let I = 0; I <= u; I++) {
        let M = I * C - a / 2;
        for (let A = 0; A <= l; A++, w++) {
          let G = A * T - r / 2;
          if (
            ((t[w * 3 + p] = G * y),
            (t[w * 3 + d] = M * x),
            (t[w * 3 + f] = o / 2),
            (e[w * 3 + p] = 0),
            (e[w * 3 + d] = 0),
            (e[w * 3 + f] = o >= 0 ? 1 : -1),
            (i[w * 2] = A / l),
            (i[w * 2 + 1] = 1 - I / u),
            I === u || A === l)
          )
            continue;
          let X = S + A + I * (l + 1),
            W = S + A + (I + 1) * (l + 1),
            $ = S + A + (I + 1) * (l + 1) + 1,
            j = S + A + I * (l + 1) + 1;
          (n[v * 6] = X),
            (n[v * 6 + 1] = W),
            (n[v * 6 + 2] = j),
            (n[v * 6 + 3] = W),
            (n[v * 6 + 4] = $),
            (n[v * 6 + 5] = j),
            v++;
        }
      }
    }
  }
  const xc = new Fe(),
    wc = new Fe(),
    vc = new Fe(),
    Vn = new P(),
    ha = new P(),
    la = new P(),
    bc = new P(),
    Sc = new P(),
    Mc = new P(),
    ca = new P(),
    Wn = new P(),
    ua = new P(),
    pa = new P(),
    Ic = new P(),
    da = new Ut();
  class Pc {
    constructor() {
      (this.origin = new P()), (this.direction = new P());
    }
    castMouse(t, e = [0, 0]) {
      if (t.type === "orthographic") {
        const { left: i, right: n, bottom: r, top: a, zoom: o } = t,
          l = i / o + ((n - i) / o) * (e[0] * 0.5 + 0.5),
          u = r / o + ((a - r) / o) * (e[1] * 0.5 + 0.5);
        this.origin.set(l, u, 0),
          this.origin.applyMatrix4(t.worldMatrix),
          (this.direction.x = -t.worldMatrix[8]),
          (this.direction.y = -t.worldMatrix[9]),
          (this.direction.z = -t.worldMatrix[10]);
      } else
        t.worldMatrix.getTranslation(this.origin),
          this.direction.set(e[0], e[1], 0.5),
          t.unproject(this.direction),
          this.direction.sub(this.origin).normalize();
    }
    intersectBounds(t, { maxDistance: e, output: i = [] } = {}) {
      Array.isArray(t) || (t = [t]);
      const n = da,
        r = Vn,
        a = ha,
        o = i;
      return (
        (o.length = 0),
        t.forEach((l) => {
          (!l.geometry.bounds || l.geometry.bounds.radius === 1 / 0) &&
            l.geometry.computeBoundingSphere();
          const u = l.geometry.bounds;
          n.inverse(l.worldMatrix);
          let p;
          if (
            (e &&
              (a.copy(this.direction).scaleRotateMatrix4(n), (p = e * a.len())),
            r.copy(this.origin).applyMatrix4(n),
            a.copy(this.direction).transformDirection(n),
            e && r.distance(u.center) - u.radius > p)
          )
            return;
          let d = 0;
          if (l.geometry.raycast === "sphere") {
            if (
              r.distance(u.center) > u.radius &&
              ((d = this.intersectSphere(u, r, a)), !d)
            )
              return;
          } else if (
            (r.x < u.min.x ||
              r.x > u.max.x ||
              r.y < u.min.y ||
              r.y > u.max.y ||
              r.z < u.min.z ||
              r.z > u.max.z) &&
            ((d = this.intersectBox(u, r, a)), !d)
          )
            return;
          (e && d > p) ||
            (l.hit || (l.hit = { localPoint: new P(), point: new P() }),
            l.hit.localPoint.copy(a).multiply(d).add(r),
            l.hit.point.copy(l.hit.localPoint).applyMatrix4(l.worldMatrix),
            (l.hit.distance = l.hit.point.distance(this.origin)),
            o.push(l));
        }),
        o.sort((l, u) => l.hit.distance - u.hit.distance),
        o
      );
    }
    intersectMeshes(
      t,
      {
        cullFace: e = !0,
        maxDistance: i,
        includeUV: n = !0,
        includeNormal: r = !0,
        output: a = [],
      } = {}
    ) {
      const o = this.intersectBounds(t, { maxDistance: i, output: a });
      if (!o.length) return o;
      const l = da,
        u = Vn,
        p = ha,
        d = la,
        f = bc,
        y = Sc,
        x = Mc,
        w = ca,
        v = Wn,
        S = xc,
        T = wc,
        C = vc;
      for (let I = o.length - 1; I >= 0; I--) {
        const M = o[I];
        l.inverse(M.worldMatrix);
        let A;
        i && (p.copy(this.direction).scaleRotateMatrix4(l), (A = i * p.len())),
          u.copy(this.origin).applyMatrix4(l),
          p.copy(this.direction).transformDirection(l);
        let G = 0,
          X,
          W,
          $;
        const j = M.geometry,
          F = j.attributes,
          U = F.index,
          L = F.position,
          xe = Math.max(0, j.drawRange.start),
          ah = Math.min(
            U ? U.count : L.count,
            j.drawRange.start + j.drawRange.count
          ),
          Rn = L.size;
        for (let Vt = xe; Vt < ah; Vt += 3) {
          const Lr = U ? U.data[Vt] : Vt,
            _r = U ? U.data[Vt + 1] : Vt + 1,
            Tr = U ? U.data[Vt + 2] : Vt + 2;
          d.fromArray(L.data, Lr * Rn),
            f.fromArray(L.data, _r * Rn),
            y.fromArray(L.data, Tr * Rn);
          const Ci = this.intersectTriangle(d, f, y, e, u, p, w);
          Ci &&
            ((i && Ci > A) ||
              ((!G || Ci < G) &&
                ((G = Ci), (X = Lr), (W = _r), ($ = Tr), x.copy(w))));
        }
        G || o.splice(I, 1),
          M.hit.localPoint.copy(p).multiply(G).add(u),
          M.hit.point.copy(M.hit.localPoint).applyMatrix4(M.worldMatrix),
          (M.hit.distance = M.hit.point.distance(this.origin)),
          M.hit.faceNormal ||
            ((M.hit.localFaceNormal = new P()),
            (M.hit.faceNormal = new P()),
            (M.hit.uv = new Fe()),
            (M.hit.localNormal = new P()),
            (M.hit.normal = new P())),
          M.hit.localFaceNormal.copy(x),
          M.hit.faceNormal
            .copy(M.hit.localFaceNormal)
            .transformDirection(M.worldMatrix),
          (n || r) &&
            (d.fromArray(L.data, X * 3),
            f.fromArray(L.data, W * 3),
            y.fromArray(L.data, $ * 3),
            this.getBarycoord(M.hit.localPoint, d, f, y, v)),
          n &&
            F.uv &&
            (S.fromArray(F.uv.data, X * 2),
            T.fromArray(F.uv.data, W * 2),
            C.fromArray(F.uv.data, $ * 2),
            M.hit.uv.set(
              S.x * v.x + T.x * v.y + C.x * v.z,
              S.y * v.x + T.y * v.y + C.y * v.z
            )),
          r &&
            F.normal &&
            (d.fromArray(F.normal.data, X * 3),
            f.fromArray(F.normal.data, W * 3),
            y.fromArray(F.normal.data, $ * 3),
            M.hit.localNormal.set(
              d.x * v.x + f.x * v.y + y.x * v.z,
              d.y * v.x + f.y * v.y + y.y * v.z,
              d.z * v.x + f.z * v.y + y.z * v.z
            ),
            M.hit.normal
              .copy(M.hit.localNormal)
              .transformDirection(M.worldMatrix));
      }
      return o.sort((I, M) => I.hit.distance - M.hit.distance), o;
    }
    intersectPlane(t, e = this.origin, i = this.direction) {
      const n = Vn;
      n.sub(t.origin, e);
      const r = n.dot(t.normal),
        a = i.dot(t.normal);
      if (a == 0) return 0;
      const o = r / a;
      return o <= 0 ? 0 : e.add(i.scale(o));
    }
    intersectSphere(t, e = this.origin, i = this.direction) {
      const n = la;
      n.sub(t.center, e);
      const r = n.dot(i),
        a = n.dot(n) - r * r,
        o = t.radius * t.radius;
      if (a > o) return 0;
      const l = Math.sqrt(o - a),
        u = r - l,
        p = r + l;
      return u < 0 && p < 0 ? 0 : u < 0 ? p : u;
    }
    intersectBox(t, e = this.origin, i = this.direction) {
      let n, r, a, o, l, u;
      const p = 1 / i.x,
        d = 1 / i.y,
        f = 1 / i.z,
        y = t.min,
        x = t.max;
      return (
        (n = ((p >= 0 ? y.x : x.x) - e.x) * p),
        (r = ((p >= 0 ? x.x : y.x) - e.x) * p),
        (a = ((d >= 0 ? y.y : x.y) - e.y) * d),
        (o = ((d >= 0 ? x.y : y.y) - e.y) * d),
        n > o ||
        a > r ||
        (a > n && (n = a),
        o < r && (r = o),
        (l = ((f >= 0 ? y.z : x.z) - e.z) * f),
        (u = ((f >= 0 ? x.z : y.z) - e.z) * f),
        n > u || l > r) ||
        (l > n && (n = l), u < r && (r = u), r < 0)
          ? 0
          : n >= 0
          ? n
          : r
      );
    }
    intersectTriangle(
      t,
      e,
      i,
      n = !0,
      r = this.origin,
      a = this.direction,
      o = ca
    ) {
      const l = Wn,
        u = ua,
        p = pa;
      l.sub(e, t), u.sub(i, t), o.cross(l, u);
      let d = a.dot(o);
      if (!d) return 0;
      let f;
      if (d > 0) {
        if (n) return 0;
        f = 1;
      } else (f = -1), (d = -d);
      p.sub(r, t);
      let y = f * a.dot(u.cross(p, u));
      if (y < 0) return 0;
      let x = f * a.dot(l.cross(p));
      if (x < 0 || y + x > d) return 0;
      let w = -f * p.dot(o);
      return w < 0 ? 0 : w / d;
    }
    getBarycoord(t, e, i, n, r = Wn) {
      const a = ua,
        o = pa,
        l = Ic;
      a.sub(n, e), o.sub(i, e), l.sub(t, e);
      const u = a.dot(a),
        p = a.dot(o),
        d = a.dot(l),
        f = o.dot(o),
        y = o.dot(l),
        x = u * f - p * p;
      if (x === 0) return r.set(-2, -1, -1);
      const w = 1 / x,
        v = (f * d - p * y) * w,
        S = (u * y - p * d) * w;
      return r.set(1 - v - S, S, v);
    }
  }
  class Ac {
    constructor() {
      c(this, "appGL");
      c(this, "sizes");
      c(this, "instance");
      c(this, "gl");
      (this.appGL = new ge()), (this.sizes = this.appGL.sizes), this.init();
    }
    init() {
      (this.instance = new tl({
        alpha: !0,
        antialias: !0,
        dpr: Math.min(2, window.devicePixelRatio),
        canvas: document.querySelector("canvas"),
      })),
        (this.gl = this.instance.gl);
    }
    handleResize() {
      this.instance.setSize(this.sizes.width, this.sizes.height);
    }
    handleTick() {
      this.instance.render({
        scene: this.appGL.scene.instance,
        camera: this.appGL.camera.instance,
      });
    }
  }
  class Ec {
    constructor() {
      c(this, "appGL");
      c(this, "width", innerWidth);
      c(this, "height", innerHeight);
      c(this, "pixelRatio");
      c(
        this,
        "resizeEmitter",
        new it({ width: innerWidth, height: innerHeight })
      );
      c(this, "handleResize", () => {
        var t;
        this.updateSizes(),
          (t = this.resizeEmitter) == null ||
            t.dispatch({ width: this.width, height: this.height });
      });
      (this.appGL = new ge()),
        this.updateSizes(),
        this.initEvents(),
        setTimeout(() => {
          this.handleResize();
        }, 100);
    }
    initEvents() {
      addEventListener("resize", this.handleResize);
    }
    removeEvents() {
      removeEventListener("resize", this.handleResize);
    }
    updateSizes() {
      (this.width = innerWidth),
        (this.height = innerHeight),
        (this.pixelRatio = Math.min(devicePixelRatio, 2));
    }
  }
  class Cc {
    constructor() {
      c(this, "appGL");
      c(this, "sizes");
      c(this, "instance");
      c(this, "viewport");
      (this.appGL = new ge()), (this.sizes = this.appGL.sizes), this.init();
    }
    init() {
      (this.instance = new Ul(this.appGL.gl)),
        (this.instance.position.z = 1),
        (this.instance.fov = 45);
    }
    handleResize() {
      const t = this.appGL.gl.canvas.width / this.appGL.gl.canvas.height;
      this.instance.perspective({ aspect: t });
      const e = this.instance.fov * (Math.PI / 180),
        i = 2 * Math.tan(e / 2),
        n = i * (this.appGL.gl.canvas.width / this.appGL.gl.canvas.height);
      this.viewport = { width: n, height: i };
    }
  }
  class Lc {
    constructor() {
      c(this, "instance");
      this.instance = new Tt();
    }
  }
  var De = ((s) => (
      (s[(s.SCROLL = 0)] = "SCROLL"),
      (s[(s.INTERPOL = 1)] = "INTERPOL"),
      (s[(s.GL_RENDER = 2)] = "GL_RENDER"),
      s
    ))(De || {}),
    Ce,
    Dt,
    ee,
    Le,
    Bt,
    se,
    ie,
    ts,
    St,
    ne,
    Rs,
    er,
    Gs,
    sr,
    Zi,
    to,
    Qi,
    eo,
    Fs,
    Ds;
  class _c {
    constructor() {
      g(this, Rs);
      g(this, Gs);
      g(this, Zi);
      g(this, Qi);
      g(this, Ce, !1);
      g(this, Dt, void 0);
      g(this, ee, void 0);
      g(this, Le, void 0);
      g(this, Bt, void 0);
      g(this, se, void 0);
      g(this, ie, void 0);
      g(this, ts, void 0);
      g(this, St, void 0);
      g(this, ne, void 0);
      g(this, Fs, () => {
        document.hidden ? this.pause() : this.play();
      });
      g(this, Ds, (t = performance.now()) => {
        h(this, Ce) &&
          (m(this, St, b(this, Rs, er).call(this, h(this, Ds))), this.raf(t));
      });
      m(this, Dt, []),
        m(this, ee, { delta: null, time: null, elapsed: null }),
        m(this, ie, 0),
        m(this, ne, Ha()),
        b(this, Zi, to).call(this),
        setTimeout(() => this.play(), 0);
    }
    add(t, e = 2) {
      h(this, Dt).push({ handler: t, rank: e }),
        h(this, Dt).sort((i, n) => i.rank - n.rank);
    }
    remove(t) {
      m(
        this,
        Dt,
        h(this, Dt).filter((e) => e.handler !== t)
      );
    }
    play() {
      m(this, Ce, !0),
        m(this, Le, performance.now()),
        m(this, Bt, h(this, Le)),
        m(this, se, h(this, ie) + (h(this, Bt) - h(this, Le))),
        m(this, ts, 16),
        m(this, St, b(this, Rs, er).call(this, h(this, Ds)));
    }
    pause() {
      m(this, Ce, !1),
        m(this, ie, h(this, se)),
        h(this, St) &&
          (b(this, Gs, sr).call(this, h(this, St)), m(this, St, null));
    }
    stop() {
      m(this, Ce, !1),
        m(this, ie, 0),
        m(this, se, 0),
        b(this, Qi, eo).call(this),
        h(this, St) &&
          (b(this, Gs, sr).call(this, h(this, St)), m(this, St, null));
    }
    raf(t) {
      m(this, ts, t - (h(this, Bt) || t)),
        m(this, Bt, t),
        m(this, se, h(this, ie) + (h(this, Bt) - h(this, Le))),
        (h(this, ee).delta = h(this, ts)),
        (h(this, ee).time = h(this, Bt)),
        (h(this, ee).elapsed = h(this, se));
      for (const e of h(this, Dt)) e.handler(h(this, ee));
    }
  }
  (Ce = new WeakMap()),
    (Dt = new WeakMap()),
    (ee = new WeakMap()),
    (Le = new WeakMap()),
    (Bt = new WeakMap()),
    (se = new WeakMap()),
    (ie = new WeakMap()),
    (ts = new WeakMap()),
    (St = new WeakMap()),
    (ne = new WeakMap()),
    (Rs = new WeakSet()),
    (er = function (t) {
      return h(this, ne) ? setTimeout(t, 16) : requestAnimationFrame(t);
    }),
    (Gs = new WeakSet()),
    (sr = function (t) {
      return h(this, ne) ? clearTimeout(t) : cancelAnimationFrame(t);
    }),
    (Zi = new WeakSet()),
    (to = function () {
      h(this, ne) || document.addEventListener("visibilitychange", h(this, Fs));
    }),
    (Qi = new WeakSet()),
    (eo = function () {
      h(this, ne) ||
        document.removeEventListener("visibilitychange", h(this, Fs));
    }),
    (Fs = new WeakMap()),
    (Ds = new WeakMap());
  const gt = new _c();
  class Tc {
    constructor() {
      c(this, "mouseEventEmitter", new it());
      c(this, "mousePositionEmitter", new it({ x: 0, y: 0 }));
      c(this, "handleMouseMove", (t) => {
        this.mouseEventEmitter.dispatch(t),
          this.mousePositionEmitter.dispatch({
            x: (t.clientX / innerWidth) * 2 - 1,
            y: -(t.clientY / innerHeight) * 2 + 1,
          });
      });
      this.initEvents();
    }
    initEvents() {
      addEventListener("mousemove", this.handleMouseMove);
    }
    removeEvents() {
      removeEventListener("mousemove", this.handleMouseMove);
    }
  }
  const ls = (s) =>
      typeof window < "u"
        ? getComputedStyle(document.documentElement).getPropertyValue(s)
        : null,
    Oc = (s) => {
      const t = so("--font-size"),
        e = zc(t);
      return s * e;
    },
    zc = (s) => {
      const t = s.includes("calc"),
        e = s.endsWith("vw"),
        i = s.endsWith("vh");
      if (t)
        return (
          (1 / parseFloat(so("--viewport-reference-desktop-height"))) *
          window.innerHeight
        );
      if (e) return (parseFloat(s.split("vw")[0]) * window.innerWidth) / 100;
      if (i) return (parseFloat(s.split("vh")[0]) * window.innerHeight) / 100;
    },
    so = (s) =>
      window.getComputedStyle(document.documentElement).getPropertyValue(s);
  class kc {
    constructor() {
      c(this, "appGL");
      c(this, "viewport");
      c(this, "sizes");
      c(this, "gridColumnNumber");
      c(this, "gridGutterSizeRem");
      c(this, "gridGutterSizePx");
      c(this, "gridGutterSizeGl");
      c(this, "gridColumnWidthGl");
      c(this, "gridColumnWidthPlusGutterGl");
      this.appGL = new ge();
    }
    init() {
      var t, e;
      (this.sizes = this.appGL.sizes),
        (this.viewport = this.appGL.camera.viewport),
        (this.gridColumnNumber = parseFloat(ls("--grid-columns-number"))),
        (this.gridGutterSizeRem = parseFloat(ls("--grid-gutter-size"))),
        (this.gridGutterSizePx = Oc(this.gridGutterSizeRem)),
        (this.gridGutterSizeGl =
          (((t = this.viewport) == null ? void 0 : t.width) *
            this.gridGutterSizePx) /
          this.sizes.width),
        (this.gridColumnWidthGl =
          (((e = this.viewport) == null ? void 0 : e.width) -
            this.gridGutterSizeGl * (this.gridColumnNumber - 1)) /
          this.gridColumnNumber),
        (this.gridColumnWidthPlusGutterGl =
          this.gridColumnWidthGl + this.gridGutterSizeGl);
    }
    handleResize() {
      this.init();
    }
  }
  function Rc(s, t, e) {
    return Math.max(t, Math.min(s, e));
  }
  const et = {
    toVector(s, t) {
      return s === void 0 && (s = t), Array.isArray(s) ? s : [s, s];
    },
    add(s, t) {
      return [s[0] + t[0], s[1] + t[1]];
    },
    sub(s, t) {
      return [s[0] - t[0], s[1] - t[1]];
    },
    addTo(s, t) {
      (s[0] += t[0]), (s[1] += t[1]);
    },
    subTo(s, t) {
      (s[0] -= t[0]), (s[1] -= t[1]);
    },
  };
  function fa(s, t, e) {
    return t === 0 || Math.abs(t) === 1 / 0
      ? Math.pow(s, e * 5)
      : (s * t * e) / (t + e * s);
  }
  function ga(s, t, e, i = 0.15) {
    return i === 0
      ? Rc(s, t, e)
      : s < t
      ? -fa(t - s, e - t, i) + t
      : s > e
      ? +fa(s - e, e - t, i) + e
      : s;
  }
  function Gc(s, [t, e], [i, n]) {
    const [[r, a], [o, l]] = s;
    return [ga(t, r, a, i), ga(e, o, l, n)];
  }
  function Fc(s, t) {
    if (typeof s != "object" || s === null) return s;
    var e = s[Symbol.toPrimitive];
    if (e !== void 0) {
      var i = e.call(s, t || "default");
      if (typeof i != "object") return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(s);
  }
  function Dc(s) {
    var t = Fc(s, "string");
    return typeof t == "symbol" ? t : String(t);
  }
  function lt(s, t, e) {
    return (
      (t = Dc(t)),
      t in s
        ? Object.defineProperty(s, t, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (s[t] = e),
      s
    );
  }
  function ma(s, t) {
    var e = Object.keys(s);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(s);
      t &&
        (i = i.filter(function (n) {
          return Object.getOwnPropertyDescriptor(s, n).enumerable;
        })),
        e.push.apply(e, i);
    }
    return e;
  }
  function H(s) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? ma(Object(e), !0).forEach(function (i) {
            lt(s, i, e[i]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(e))
        : ma(Object(e)).forEach(function (i) {
            Object.defineProperty(s, i, Object.getOwnPropertyDescriptor(e, i));
          });
    }
    return s;
  }
  const io = {
    pointer: { start: "down", change: "move", end: "up" },
    mouse: { start: "down", change: "move", end: "up" },
    touch: { start: "start", change: "move", end: "end" },
    gesture: { start: "start", change: "change", end: "end" },
  };
  function ya(s) {
    return s ? s[0].toUpperCase() + s.slice(1) : "";
  }
  const Bc = ["enter", "leave"];
  function $c(s = !1, t) {
    return s && !Bc.includes(t);
  }
  function Uc(s, t = "", e = !1) {
    const i = io[s],
      n = (i && i[t]) || t;
    return "on" + ya(s) + ya(n) + ($c(e, n) ? "Capture" : "");
  }
  const Nc = ["gotpointercapture", "lostpointercapture"];
  function Vc(s) {
    let t = s.substring(2).toLowerCase();
    const e = !!~t.indexOf("passive");
    e && (t = t.replace("passive", ""));
    const i = Nc.includes(t) ? "capturecapture" : "capture",
      n = !!~t.indexOf(i);
    return (
      n && (t = t.replace("capture", "")), { device: t, capture: n, passive: e }
    );
  }
  function Wc(s, t = "") {
    const e = io[s],
      i = (e && e[t]) || t;
    return s + i;
  }
  function En(s) {
    return "touches" in s;
  }
  function no(s) {
    return En(s) ? "touch" : "pointerType" in s ? s.pointerType : "mouse";
  }
  function jc(s) {
    return Array.from(s.touches).filter((t) => {
      var e, i;
      return (
        t.target === s.currentTarget ||
        ((e = s.currentTarget) === null ||
        e === void 0 ||
        (i = e.contains) === null ||
        i === void 0
          ? void 0
          : i.call(e, t.target))
      );
    });
  }
  function qc(s) {
    return s.type === "touchend" || s.type === "touchcancel"
      ? s.changedTouches
      : s.targetTouches;
  }
  function ro(s) {
    return En(s) ? qc(s)[0] : s;
  }
  function Xc(s) {
    return jc(s).map((t) => t.identifier);
  }
  function jn(s) {
    const t = ro(s);
    return En(s) ? t.identifier : t.pointerId;
  }
  function xa(s) {
    const t = ro(s);
    return [t.clientX, t.clientY];
  }
  const wa = 40,
    va = 800;
  function Hc(s) {
    let { deltaX: t, deltaY: e, deltaMode: i } = s;
    return (
      i === 1 ? ((t *= wa), (e *= wa)) : i === 2 && ((t *= va), (e *= va)),
      [t, e]
    );
  }
  function Yc(s) {
    const t = {};
    if (("buttons" in s && (t.buttons = s.buttons), "shiftKey" in s)) {
      const { shiftKey: e, altKey: i, metaKey: n, ctrlKey: r } = s;
      Object.assign(t, { shiftKey: e, altKey: i, metaKey: n, ctrlKey: r });
    }
    return t;
  }
  function Ri(s, ...t) {
    return typeof s == "function" ? s(...t) : s;
  }
  function Kc() {}
  function Zc(...s) {
    return s.length === 0
      ? Kc
      : s.length === 1
      ? s[0]
      : function () {
          let t;
          for (const e of s) t = e.apply(this, arguments) || t;
          return t;
        };
  }
  function ba(s, t) {
    return Object.assign({}, t, s || {});
  }
  const Qc = 32;
  class Jc {
    constructor(t, e, i) {
      (this.ctrl = t),
        (this.args = e),
        (this.key = i),
        this.state ||
          ((this.state = {}),
          this.computeValues([0, 0]),
          this.computeInitial(),
          this.init && this.init(),
          this.reset());
    }
    get state() {
      return this.ctrl.state[this.key];
    }
    set state(t) {
      this.ctrl.state[this.key] = t;
    }
    get shared() {
      return this.ctrl.state.shared;
    }
    get eventStore() {
      return this.ctrl.gestureEventStores[this.key];
    }
    get timeoutStore() {
      return this.ctrl.gestureTimeoutStores[this.key];
    }
    get config() {
      return this.ctrl.config[this.key];
    }
    get sharedConfig() {
      return this.ctrl.config.shared;
    }
    get handler() {
      return this.ctrl.handlers[this.key];
    }
    reset() {
      const { state: t, shared: e, ingKey: i, args: n } = this;
      (e[i] = t._active = t.active = t._blocked = t._force = !1),
        (t._step = [!1, !1]),
        (t.intentional = !1),
        (t._movement = [0, 0]),
        (t._distance = [0, 0]),
        (t._direction = [0, 0]),
        (t._delta = [0, 0]),
        (t._bounds = [
          [-1 / 0, 1 / 0],
          [-1 / 0, 1 / 0],
        ]),
        (t.args = n),
        (t.axis = void 0),
        (t.memo = void 0),
        (t.elapsedTime = t.timeDelta = 0),
        (t.direction = [0, 0]),
        (t.distance = [0, 0]),
        (t.overflow = [0, 0]),
        (t._movementBound = [!1, !1]),
        (t.velocity = [0, 0]),
        (t.movement = [0, 0]),
        (t.delta = [0, 0]),
        (t.timeStamp = 0);
    }
    start(t) {
      const e = this.state,
        i = this.config;
      e._active ||
        (this.reset(),
        this.computeInitial(),
        (e._active = !0),
        (e.target = t.target),
        (e.currentTarget = t.currentTarget),
        (e.lastOffset = i.from ? Ri(i.from, e) : e.offset),
        (e.offset = e.lastOffset),
        (e.startTime = e.timeStamp = t.timeStamp));
    }
    computeValues(t) {
      const e = this.state;
      (e._values = t), (e.values = this.config.transform(t));
    }
    computeInitial() {
      const t = this.state;
      (t._initial = t._values), (t.initial = t.values);
    }
    compute(t) {
      const { state: e, config: i, shared: n } = this;
      e.args = this.args;
      let r = 0;
      if (
        (t &&
          ((e.event = t),
          i.preventDefault && t.cancelable && e.event.preventDefault(),
          (e.type = t.type),
          (n.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size),
          (n.locked = !!document.pointerLockElement),
          Object.assign(n, Yc(t)),
          (n.down = n.pressed = n.buttons % 2 === 1 || n.touches > 0),
          (r = t.timeStamp - e.timeStamp),
          (e.timeStamp = t.timeStamp),
          (e.elapsedTime = e.timeStamp - e.startTime)),
        e._active)
      ) {
        const A = e._delta.map(Math.abs);
        et.addTo(e._distance, A);
      }
      this.axisIntent && this.axisIntent(t);
      const [a, o] = e._movement,
        [l, u] = i.threshold,
        { _step: p, values: d } = e;
      if (
        (i.hasCustomTransform
          ? (p[0] === !1 && (p[0] = Math.abs(a) >= l && d[0]),
            p[1] === !1 && (p[1] = Math.abs(o) >= u && d[1]))
          : (p[0] === !1 && (p[0] = Math.abs(a) >= l && Math.sign(a) * l),
            p[1] === !1 && (p[1] = Math.abs(o) >= u && Math.sign(o) * u)),
        (e.intentional = p[0] !== !1 || p[1] !== !1),
        !e.intentional)
      )
        return;
      const f = [0, 0];
      if (i.hasCustomTransform) {
        const [A, G] = d;
        (f[0] = p[0] !== !1 ? A - p[0] : 0),
          (f[1] = p[1] !== !1 ? G - p[1] : 0);
      } else
        (f[0] = p[0] !== !1 ? a - p[0] : 0),
          (f[1] = p[1] !== !1 ? o - p[1] : 0);
      this.restrictToAxis && !e._blocked && this.restrictToAxis(f);
      const y = e.offset,
        x = (e._active && !e._blocked) || e.active;
      x &&
        ((e.first = e._active && !e.active),
        (e.last = !e._active && e.active),
        (e.active = n[this.ingKey] = e._active),
        t &&
          (e.first &&
            ("bounds" in i && (e._bounds = Ri(i.bounds, e)),
            this.setup && this.setup()),
          (e.movement = f),
          this.computeOffset()));
      const [w, v] = e.offset,
        [[S, T], [C, I]] = e._bounds;
      (e.overflow = [w < S ? -1 : w > T ? 1 : 0, v < C ? -1 : v > I ? 1 : 0]),
        (e._movementBound[0] = e.overflow[0]
          ? e._movementBound[0] === !1
            ? e._movement[0]
            : e._movementBound[0]
          : !1),
        (e._movementBound[1] = e.overflow[1]
          ? e._movementBound[1] === !1
            ? e._movement[1]
            : e._movementBound[1]
          : !1);
      const M = e._active ? i.rubberband || [0, 0] : [0, 0];
      if (
        ((e.offset = Gc(e._bounds, e.offset, M)),
        (e.delta = et.sub(e.offset, y)),
        this.computeMovement(),
        x && (!e.last || r > Qc))
      ) {
        e.delta = et.sub(e.offset, y);
        const A = e.delta.map(Math.abs);
        et.addTo(e.distance, A),
          (e.direction = e.delta.map(Math.sign)),
          (e._direction = e._delta.map(Math.sign)),
          !e.first &&
            r > 0 &&
            ((e.velocity = [A[0] / r, A[1] / r]), (e.timeDelta = r));
      }
    }
    emit() {
      const t = this.state,
        e = this.shared,
        i = this.config;
      if (
        (t._active || this.clean(),
        (t._blocked || !t.intentional) && !t._force && !i.triggerAllEvents)
      )
        return;
      const n = this.handler(
        H(H(H({}, e), t), {}, { [this.aliasKey]: t.values })
      );
      n !== void 0 && (t.memo = n);
    }
    clean() {
      this.eventStore.clean(), this.timeoutStore.clean();
    }
  }
  function tu([s, t], e) {
    const i = Math.abs(s),
      n = Math.abs(t);
    if (i > n && i > e) return "x";
    if (n > i && n > e) return "y";
  }
  class ao extends Jc {
    constructor(...t) {
      super(...t), lt(this, "aliasKey", "xy");
    }
    reset() {
      super.reset(), (this.state.axis = void 0);
    }
    init() {
      (this.state.offset = [0, 0]), (this.state.lastOffset = [0, 0]);
    }
    computeOffset() {
      this.state.offset = et.add(this.state.lastOffset, this.state.movement);
    }
    computeMovement() {
      this.state.movement = et.sub(this.state.offset, this.state.lastOffset);
    }
    axisIntent(t) {
      const e = this.state,
        i = this.config;
      if (!e.axis && t) {
        const n =
          typeof i.axisThreshold == "object"
            ? i.axisThreshold[no(t)]
            : i.axisThreshold;
        e.axis = tu(e._movement, n);
      }
      e._blocked =
        ((i.lockDirection || !!i.axis) && !e.axis) ||
        (!!i.axis && i.axis !== e.axis);
    }
    restrictToAxis(t) {
      if (this.config.axis || this.config.lockDirection)
        switch (this.state.axis) {
          case "x":
            t[1] = 0;
            break;
          case "y":
            t[0] = 0;
            break;
        }
    }
  }
  const eu = (s) => s,
    Sa = 0.15,
    oo = {
      enabled(s = !0) {
        return s;
      },
      eventOptions(s, t, e) {
        return H(H({}, e.shared.eventOptions), s);
      },
      preventDefault(s = !1) {
        return s;
      },
      triggerAllEvents(s = !1) {
        return s;
      },
      rubberband(s = 0) {
        switch (s) {
          case !0:
            return [Sa, Sa];
          case !1:
            return [0, 0];
          default:
            return et.toVector(s);
        }
      },
      from(s) {
        if (typeof s == "function") return s;
        if (s != null) return et.toVector(s);
      },
      transform(s, t, e) {
        const i = s || e.shared.transform;
        return (this.hasCustomTransform = !!i), i || eu;
      },
      threshold(s) {
        return et.toVector(s, 0);
      },
    },
    su = 0,
    us = H(
      H({}, oo),
      {},
      {
        axis(s, t, { axis: e }) {
          if (((this.lockDirection = e === "lock"), !this.lockDirection))
            return e;
        },
        axisThreshold(s = su) {
          return s;
        },
        bounds(s = {}) {
          if (typeof s == "function") return (r) => us.bounds(s(r));
          if ("current" in s) return () => s.current;
          if (typeof HTMLElement == "function" && s instanceof HTMLElement)
            return s;
          const {
            left: t = -1 / 0,
            right: e = 1 / 0,
            top: i = -1 / 0,
            bottom: n = 1 / 0,
          } = s;
          return [
            [t, e],
            [i, n],
          ];
        },
      }
    ),
    Ma = {
      ArrowRight: (s, t = 1) => [s * t, 0],
      ArrowLeft: (s, t = 1) => [-1 * s * t, 0],
      ArrowUp: (s, t = 1) => [0, -1 * s * t],
      ArrowDown: (s, t = 1) => [0, s * t],
    };
  class iu extends ao {
    constructor(...t) {
      super(...t), lt(this, "ingKey", "dragging");
    }
    reset() {
      super.reset();
      const t = this.state;
      (t._pointerId = void 0),
        (t._pointerActive = !1),
        (t._keyboardActive = !1),
        (t._preventScroll = !1),
        (t._delayed = !1),
        (t.swipe = [0, 0]),
        (t.tap = !1),
        (t.canceled = !1),
        (t.cancel = this.cancel.bind(this));
    }
    setup() {
      const t = this.state;
      if (t._bounds instanceof HTMLElement) {
        const e = t._bounds.getBoundingClientRect(),
          i = t.currentTarget.getBoundingClientRect(),
          n = {
            left: e.left - i.left + t.offset[0],
            right: e.right - i.right + t.offset[0],
            top: e.top - i.top + t.offset[1],
            bottom: e.bottom - i.bottom + t.offset[1],
          };
        t._bounds = us.bounds(n);
      }
    }
    cancel() {
      const t = this.state;
      t.canceled ||
        ((t.canceled = !0),
        (t._active = !1),
        setTimeout(() => {
          this.compute(), this.emit();
        }, 0));
    }
    setActive() {
      this.state._active =
        this.state._pointerActive || this.state._keyboardActive;
    }
    clean() {
      this.pointerClean(),
        (this.state._pointerActive = !1),
        (this.state._keyboardActive = !1),
        super.clean();
    }
    pointerDown(t) {
      const e = this.config,
        i = this.state;
      if (
        t.buttons != null &&
        (Array.isArray(e.pointerButtons)
          ? !e.pointerButtons.includes(t.buttons)
          : e.pointerButtons !== -1 && e.pointerButtons !== t.buttons)
      )
        return;
      const n = this.ctrl.setEventIds(t);
      e.pointerCapture && t.target.setPointerCapture(t.pointerId),
        !(n && n.size > 1 && i._pointerActive) &&
          (this.start(t),
          this.setupPointer(t),
          (i._pointerId = jn(t)),
          (i._pointerActive = !0),
          this.computeValues(xa(t)),
          this.computeInitial(),
          e.preventScrollAxis && no(t) !== "mouse"
            ? ((i._active = !1), this.setupScrollPrevention(t))
            : e.delay > 0
            ? (this.setupDelayTrigger(t),
              e.triggerAllEvents && (this.compute(t), this.emit()))
            : this.startPointerDrag(t));
    }
    startPointerDrag(t) {
      const e = this.state;
      (e._active = !0),
        (e._preventScroll = !0),
        (e._delayed = !1),
        this.compute(t),
        this.emit();
    }
    pointerMove(t) {
      const e = this.state,
        i = this.config;
      if (!e._pointerActive) return;
      const n = jn(t);
      if (e._pointerId !== void 0 && n !== e._pointerId) return;
      const r = xa(t);
      if (
        (document.pointerLockElement === t.target
          ? (e._delta = [t.movementX, t.movementY])
          : ((e._delta = et.sub(r, e._values)), this.computeValues(r)),
        et.addTo(e._movement, e._delta),
        this.compute(t),
        e._delayed && e.intentional)
      ) {
        this.timeoutStore.remove("dragDelay"),
          (e.active = !1),
          this.startPointerDrag(t);
        return;
      }
      if (i.preventScrollAxis && !e._preventScroll)
        if (e.axis)
          if (e.axis === i.preventScrollAxis || i.preventScrollAxis === "xy") {
            (e._active = !1), this.clean();
            return;
          } else {
            this.timeoutStore.remove("startPointerDrag"),
              this.startPointerDrag(t);
            return;
          }
        else return;
      this.emit();
    }
    pointerUp(t) {
      this.ctrl.setEventIds(t);
      try {
        this.config.pointerCapture &&
          t.target.hasPointerCapture(t.pointerId) &&
          t.target.releasePointerCapture(t.pointerId);
      } catch {}
      const e = this.state,
        i = this.config;
      if (!e._active || !e._pointerActive) return;
      const n = jn(t);
      if (e._pointerId !== void 0 && n !== e._pointerId) return;
      (this.state._pointerActive = !1), this.setActive(), this.compute(t);
      const [r, a] = e._distance;
      if (
        ((e.tap = r <= i.tapsThreshold && a <= i.tapsThreshold),
        e.tap && i.filterTaps)
      )
        e._force = !0;
      else {
        const [o, l] = e._delta,
          [u, p] = e._movement,
          [d, f] = i.swipe.velocity,
          [y, x] = i.swipe.distance,
          w = i.swipe.duration;
        if (e.elapsedTime < w) {
          const v = Math.abs(o / e.timeDelta),
            S = Math.abs(l / e.timeDelta);
          v > d && Math.abs(u) > y && (e.swipe[0] = Math.sign(o)),
            S > f && Math.abs(p) > x && (e.swipe[1] = Math.sign(l));
        }
      }
      this.emit();
    }
    pointerClick(t) {
      !this.state.tap &&
        t.detail > 0 &&
        (t.preventDefault(), t.stopPropagation());
    }
    setupPointer(t) {
      const e = this.config,
        i = e.device;
      e.pointerLock && t.currentTarget.requestPointerLock(),
        e.pointerCapture ||
          (this.eventStore.add(
            this.sharedConfig.window,
            i,
            "change",
            this.pointerMove.bind(this)
          ),
          this.eventStore.add(
            this.sharedConfig.window,
            i,
            "end",
            this.pointerUp.bind(this)
          ),
          this.eventStore.add(
            this.sharedConfig.window,
            i,
            "cancel",
            this.pointerUp.bind(this)
          ));
    }
    pointerClean() {
      this.config.pointerLock &&
        document.pointerLockElement === this.state.currentTarget &&
        document.exitPointerLock();
    }
    preventScroll(t) {
      this.state._preventScroll && t.cancelable && t.preventDefault();
    }
    setupScrollPrevention(t) {
      (this.state._preventScroll = !1), nu(t);
      const e = this.eventStore.add(
        this.sharedConfig.window,
        "touch",
        "change",
        this.preventScroll.bind(this),
        { passive: !1 }
      );
      this.eventStore.add(this.sharedConfig.window, "touch", "end", e),
        this.eventStore.add(this.sharedConfig.window, "touch", "cancel", e),
        this.timeoutStore.add(
          "startPointerDrag",
          this.startPointerDrag.bind(this),
          this.config.preventScrollDelay,
          t
        );
    }
    setupDelayTrigger(t) {
      (this.state._delayed = !0),
        this.timeoutStore.add(
          "dragDelay",
          () => {
            (this.state._step = [0, 0]), this.startPointerDrag(t);
          },
          this.config.delay
        );
    }
    keyDown(t) {
      const e = Ma[t.key];
      if (e) {
        const i = this.state,
          n = t.shiftKey ? 10 : t.altKey ? 0.1 : 1;
        this.start(t),
          (i._delta = e(this.config.keyboardDisplacement, n)),
          (i._keyboardActive = !0),
          et.addTo(i._movement, i._delta),
          this.compute(t),
          this.emit();
      }
    }
    keyUp(t) {
      t.key in Ma &&
        ((this.state._keyboardActive = !1),
        this.setActive(),
        this.compute(t),
        this.emit());
    }
    bind(t) {
      const e = this.config.device;
      t(e, "start", this.pointerDown.bind(this)),
        this.config.pointerCapture &&
          (t(e, "change", this.pointerMove.bind(this)),
          t(e, "end", this.pointerUp.bind(this)),
          t(e, "cancel", this.pointerUp.bind(this)),
          t("lostPointerCapture", "", this.pointerUp.bind(this))),
        this.config.keys &&
          (t("key", "down", this.keyDown.bind(this)),
          t("key", "up", this.keyUp.bind(this))),
        this.config.filterTaps &&
          t("click", "", this.pointerClick.bind(this), {
            capture: !0,
            passive: !1,
          });
    }
  }
  function nu(s) {
    "persist" in s && typeof s.persist == "function" && s.persist();
  }
  const Ei =
    typeof window < "u" && window.document && window.document.createElement;
  function ho() {
    return Ei && "ontouchstart" in window;
  }
  function ru() {
    return ho() || (Ei && window.navigator.maxTouchPoints > 1);
  }
  function au() {
    return Ei && "onpointerdown" in window;
  }
  function ou() {
    return Ei && "exitPointerLock" in window.document;
  }
  function hu() {
    try {
      return "constructor" in GestureEvent;
    } catch {
      return !1;
    }
  }
  const vt = {
      isBrowser: Ei,
      gesture: hu(),
      touch: ho(),
      touchscreen: ru(),
      pointer: au(),
      pointerLock: ou(),
    },
    lu = 250,
    cu = 180,
    uu = 0.5,
    pu = 50,
    du = 250,
    fu = 10,
    Ia = { mouse: 0, touch: 0, pen: 8 },
    gu = H(
      H({}, us),
      {},
      {
        device(
          s,
          t,
          { pointer: { touch: e = !1, lock: i = !1, mouse: n = !1 } = {} }
        ) {
          return (
            (this.pointerLock = i && vt.pointerLock),
            vt.touch && e
              ? "touch"
              : this.pointerLock
              ? "mouse"
              : vt.pointer && !n
              ? "pointer"
              : vt.touch
              ? "touch"
              : "mouse"
          );
        },
        preventScrollAxis(s, t, { preventScroll: e }) {
          if (
            ((this.preventScrollDelay =
              typeof e == "number"
                ? e
                : e || (e === void 0 && s)
                ? lu
                : void 0),
            !(!vt.touchscreen || e === !1))
          )
            return s || (e !== void 0 ? "y" : void 0);
        },
        pointerCapture(
          s,
          t,
          { pointer: { capture: e = !0, buttons: i = 1, keys: n = !0 } = {} }
        ) {
          return (
            (this.pointerButtons = i),
            (this.keys = n),
            !this.pointerLock && this.device === "pointer" && e
          );
        },
        threshold(
          s,
          t,
          { filterTaps: e = !1, tapsThreshold: i = 3, axis: n = void 0 }
        ) {
          const r = et.toVector(s, e ? i : n ? 1 : 0);
          return (this.filterTaps = e), (this.tapsThreshold = i), r;
        },
        swipe({ velocity: s = uu, distance: t = pu, duration: e = du } = {}) {
          return {
            velocity: this.transform(et.toVector(s)),
            distance: this.transform(et.toVector(t)),
            duration: e,
          };
        },
        delay(s = 0) {
          switch (s) {
            case !0:
              return cu;
            case !1:
              return 0;
            default:
              return s;
          }
        },
        axisThreshold(s) {
          return s ? H(H({}, Ia), s) : Ia;
        },
        keyboardDisplacement(s = fu) {
          return s;
        },
      }
    );
  function mu(s) {
    const [t, e] = s.overflow,
      [i, n] = s._delta,
      [r, a] = s._direction;
    ((t < 0 && i > 0 && r < 0) || (t > 0 && i < 0 && r > 0)) &&
      (s._movement[0] = s._movementBound[0]),
      ((e < 0 && n > 0 && a < 0) || (e > 0 && n < 0 && a > 0)) &&
        (s._movement[1] = s._movementBound[1]);
  }
  H(
    H({}, oo),
    {},
    {
      device(s, t, { shared: e, pointer: { touch: i = !1 } = {} }) {
        if (e.target && !vt.touch && vt.gesture) return "gesture";
        if (vt.touch && i) return "touch";
        if (vt.touchscreen) {
          if (vt.pointer) return "pointer";
          if (vt.touch) return "touch";
        }
      },
      bounds(s, t, { scaleBounds: e = {}, angleBounds: i = {} }) {
        const n = (a) => {
            const o = ba(Ri(e, a), { min: -1 / 0, max: 1 / 0 });
            return [o.min, o.max];
          },
          r = (a) => {
            const o = ba(Ri(i, a), { min: -1 / 0, max: 1 / 0 });
            return [o.min, o.max];
          };
        return typeof e != "function" && typeof i != "function"
          ? [n(), r()]
          : (a) => [n(a), r(a)];
      },
      threshold(s, t, e) {
        return (
          (this.lockDirection = e.axis === "lock"),
          et.toVector(s, this.lockDirection ? [0.1, 3] : 0)
        );
      },
      modifierKey(s) {
        return s === void 0 ? "ctrlKey" : s;
      },
      pinchOnWheel(s = !0) {
        return s;
      },
    }
  );
  H(H({}, us), {}, { mouseOnly: (s = !0) => s });
  class yu extends ao {
    constructor(...t) {
      super(...t), lt(this, "ingKey", "wheeling");
    }
    wheel(t) {
      this.state._active || this.start(t),
        this.wheelChange(t),
        this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
    }
    wheelChange(t) {
      const e = this.state;
      (e._delta = Hc(t)),
        et.addTo(e._movement, e._delta),
        mu(e),
        this.compute(t),
        this.emit();
    }
    wheelEnd() {
      this.state._active &&
        ((this.state._active = !1), this.compute(), this.emit());
    }
    bind(t) {
      t("wheel", "", this.wheel.bind(this));
    }
  }
  const xu = us;
  H(H({}, us), {}, { mouseOnly: (s = !0) => s });
  const lo = new Map(),
    ir = new Map();
  function co(s) {
    lo.set(s.key, s.engine), ir.set(s.key, s.resolver);
  }
  const wu = { key: "drag", engine: iu, resolver: gu },
    vu = { key: "wheel", engine: yu, resolver: xu };
  function bu(s, t) {
    if (s == null) return {};
    var e = {},
      i = Object.keys(s),
      n,
      r;
    for (r = 0; r < i.length; r++)
      (n = i[r]), !(t.indexOf(n) >= 0) && (e[n] = s[n]);
    return e;
  }
  function Su(s, t) {
    if (s == null) return {};
    var e = bu(s, t),
      i,
      n;
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(s);
      for (n = 0; n < r.length; n++)
        (i = r[n]),
          !(t.indexOf(i) >= 0) &&
            Object.prototype.propertyIsEnumerable.call(s, i) &&
            (e[i] = s[i]);
    }
    return e;
  }
  const Mu = {
      target(s) {
        if (s) return () => ("current" in s ? s.current : s);
      },
      enabled(s = !0) {
        return s;
      },
      window(s = vt.isBrowser ? window : void 0) {
        return s;
      },
      eventOptions({ passive: s = !0, capture: t = !1 } = {}) {
        return { passive: s, capture: t };
      },
      transform(s) {
        return s;
      },
    },
    Iu = ["target", "eventOptions", "window", "enabled", "transform"];
  function Oi(s = {}, t) {
    const e = {};
    for (const [i, n] of Object.entries(t))
      switch (typeof n) {
        case "function":
          e[i] = n.call(e, s[i], i, s);
          break;
        case "object":
          e[i] = Oi(s[i], n);
          break;
        case "boolean":
          n && (e[i] = s[i]);
          break;
      }
    return e;
  }
  function Pu(s, t, e = {}) {
    const i = s,
      { target: n, eventOptions: r, window: a, enabled: o, transform: l } = i,
      u = Su(i, Iu);
    if (
      ((e.shared = Oi(
        { target: n, eventOptions: r, window: a, enabled: o, transform: l },
        Mu
      )),
      t)
    ) {
      const p = ir.get(t);
      e[t] = Oi(H({ shared: e.shared }, u), p);
    } else
      for (const p in u) {
        const d = ir.get(p);
        d && (e[p] = Oi(H({ shared: e.shared }, u[p]), d));
      }
    return e;
  }
  class uo {
    constructor(t, e) {
      lt(this, "_listeners", new Set()),
        (this._ctrl = t),
        (this._gestureKey = e);
    }
    add(t, e, i, n, r) {
      const a = this._listeners,
        o = Wc(e, i),
        l = this._gestureKey
          ? this._ctrl.config[this._gestureKey].eventOptions
          : {},
        u = H(H({}, l), r);
      t.addEventListener(o, n, u);
      const p = () => {
        t.removeEventListener(o, n, u), a.delete(p);
      };
      return a.add(p), p;
    }
    clean() {
      this._listeners.forEach((t) => t()), this._listeners.clear();
    }
  }
  class Au {
    constructor() {
      lt(this, "_timeouts", new Map());
    }
    add(t, e, i = 140, ...n) {
      this.remove(t), this._timeouts.set(t, window.setTimeout(e, i, ...n));
    }
    remove(t) {
      const e = this._timeouts.get(t);
      e && window.clearTimeout(e);
    }
    clean() {
      this._timeouts.forEach((t) => void window.clearTimeout(t)),
        this._timeouts.clear();
    }
  }
  class Eu {
    constructor(t) {
      lt(this, "gestures", new Set()),
        lt(this, "_targetEventStore", new uo(this)),
        lt(this, "gestureEventStores", {}),
        lt(this, "gestureTimeoutStores", {}),
        lt(this, "handlers", {}),
        lt(this, "config", {}),
        lt(this, "pointerIds", new Set()),
        lt(this, "touchIds", new Set()),
        lt(this, "state", {
          shared: { shiftKey: !1, metaKey: !1, ctrlKey: !1, altKey: !1 },
        }),
        Cu(this, t);
    }
    setEventIds(t) {
      if (En(t)) return (this.touchIds = new Set(Xc(t))), this.touchIds;
      if ("pointerId" in t)
        return (
          t.type === "pointerup" || t.type === "pointercancel"
            ? this.pointerIds.delete(t.pointerId)
            : t.type === "pointerdown" && this.pointerIds.add(t.pointerId),
          this.pointerIds
        );
    }
    applyHandlers(t, e) {
      (this.handlers = t), (this.nativeHandlers = e);
    }
    applyConfig(t, e) {
      this.config = Pu(t, e, this.config);
    }
    clean() {
      this._targetEventStore.clean();
      for (const t of this.gestures)
        this.gestureEventStores[t].clean(),
          this.gestureTimeoutStores[t].clean();
    }
    effect() {
      return (
        this.config.shared.target && this.bind(),
        () => this._targetEventStore.clean()
      );
    }
    bind(...t) {
      const e = this.config.shared,
        i = {};
      let n;
      if (!(e.target && ((n = e.target()), !n))) {
        if (e.enabled) {
          for (const a of this.gestures) {
            const o = this.config[a],
              l = Pa(i, o.eventOptions, !!n);
            if (o.enabled) {
              const u = lo.get(a);
              new u(this, t, a).bind(l);
            }
          }
          const r = Pa(i, e.eventOptions, !!n);
          for (const a in this.nativeHandlers)
            r(
              a,
              "",
              (o) =>
                this.nativeHandlers[a](
                  H(H({}, this.state.shared), {}, { event: o, args: t })
                ),
              void 0,
              !0
            );
        }
        for (const r in i) i[r] = Zc(...i[r]);
        if (!n) return i;
        for (const r in i) {
          const { device: a, capture: o, passive: l } = Vc(r);
          this._targetEventStore.add(n, a, "", i[r], {
            capture: o,
            passive: l,
          });
        }
      }
    }
  }
  function Be(s, t) {
    s.gestures.add(t),
      (s.gestureEventStores[t] = new uo(s, t)),
      (s.gestureTimeoutStores[t] = new Au());
  }
  function Cu(s, t) {
    t.drag && Be(s, "drag"),
      t.wheel && Be(s, "wheel"),
      t.scroll && Be(s, "scroll"),
      t.move && Be(s, "move"),
      t.pinch && Be(s, "pinch"),
      t.hover && Be(s, "hover");
  }
  const Pa =
    (s, t, e) =>
    (i, n, r, a = {}, o = !1) => {
      var l, u;
      const p = (l = a.capture) !== null && l !== void 0 ? l : t.capture,
        d = (u = a.passive) !== null && u !== void 0 ? u : t.passive;
      let f = o ? i : Uc(i, n, p);
      e && d && (f += "Passive"), (s[f] = s[f] || []), s[f].push(r);
    };
  function Lu(s, t) {
    if (typeof s != "object" || s === null) return s;
    var e = s[Symbol.toPrimitive];
    if (e !== void 0) {
      var i = e.call(s, t || "default");
      if (typeof i != "object") return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(s);
  }
  function _u(s) {
    var t = Lu(s, "string");
    return typeof t == "symbol" ? t : String(t);
  }
  function Tu(s, t, e) {
    return (
      (t = _u(t)),
      t in s
        ? Object.defineProperty(s, t, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (s[t] = e),
      s
    );
  }
  function Aa(s, t) {
    var e = Object.keys(s);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(s);
      t &&
        (i = i.filter(function (n) {
          return Object.getOwnPropertyDescriptor(s, n).enumerable;
        })),
        e.push.apply(e, i);
    }
    return e;
  }
  function _i(s) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? Aa(Object(e), !0).forEach(function (i) {
            Tu(s, i, e[i]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(e))
        : Aa(Object(e)).forEach(function (i) {
            Object.defineProperty(s, i, Object.getOwnPropertyDescriptor(e, i));
          });
    }
    return s;
  }
  class po {
    constructor(t, e, i, n, r) {
      (this._target = t),
        (this._gestureKey = n),
        (this._ctrl = new Eu(e)),
        this._ctrl.applyHandlers(e, r),
        this._ctrl.applyConfig(_i(_i({}, i), {}, { target: t }), n),
        this._ctrl.effect();
    }
    destroy() {
      this._ctrl.clean();
    }
    setConfig(t) {
      this._ctrl.clean(),
        this._ctrl.applyConfig(
          _i(_i({}, t), {}, { target: this._target }),
          this._gestureKey
        ),
        this._ctrl.effect();
    }
  }
  const br = function (t, e, i) {
      return co(wu), new po(t, { drag: e }, i || {}, "drag");
    },
    Ou = function (t, e, i) {
      return co(vu), new po(t, { wheel: e }, i || {}, "wheel");
    },
    zu = B("front:RayCasting");
  class ku {
    constructor(t = []) {
      c(this, "appGL");
      c(this, "gl");
      c(this, "renderer");
      c(this, "camera");
      c(this, "scene");
      c(this, "raycast");
      c(this, "mouse");
      c(this, "glObjects", []);
      c(this, "meshes");
      c(this, "hitMeshes");
      c(this, "currentHitMesh");
      c(this, "isDragging", !1);
      c(this, "sizes");
      c(this, "dragGesture");
      c(this, "lastMouseMoveEvent");
      c(this, "handleMove", (t) => {
        var e, i, n, r, a, o;
        if (
          ((this.hitMeshes = this.getHitMeshes(t)),
          (this.lastMouseMoveEvent = t),
          this.hitMeshes.length)
        ) {
          const l = this.meshes.indexOf(this.currentHitMesh),
            u = this.meshes.indexOf(this.hitMeshes[0]);
          if (l !== u) {
            if (this.currentHitMesh) {
              const d = this.glObjects[l];
              (i = d.onMouseLeave) == null ||
                i.call(
                  d,
                  t,
                  (e = this.currentHitMesh) == null ? void 0 : e.hit
                ),
                this.glObjects
                  .filter((f) => f != d)
                  .forEach((f) => {
                    var y;
                    return (y = f == null ? void 0 : f.onOtherMouseLeave) ==
                      null
                      ? void 0
                      : y.call(f, t);
                  }),
                (this.currentHitMesh = null);
            }
            this.currentHitMesh = this.hitMeshes[0];
            const p = this.glObjects[u];
            (n = p.onMouseEnter) == null ||
              n.call(p, t, this.currentHitMesh.hit),
              this.glObjects
                .filter((d) => d != p)
                .forEach((d) => {
                  var f;
                  return (f = d == null ? void 0 : d.onOtherMouseEnter) == null
                    ? void 0
                    : f.call(d, t);
                }),
              (document.body.style.cursor = "pointer"),
              (this.appGL.gl.canvas.style.pointerEvents = "auto");
          } else {
            const p = this.glObjects[l];
            (r = p.onMouseMove) == null ||
              r.call(p, t, this.currentHitMesh.hit);
          }
        } else if (this.currentHitMesh) {
          const l = this.glObjects[this.meshes.indexOf(this.currentHitMesh)];
          (o = l.onMouseLeave) == null ||
            o.call(l, t, (a = this.currentHitMesh) == null ? void 0 : a.hit),
            this.glObjects
              .filter((u) => u != l)
              .forEach((u) => {
                var p;
                return (p = u == null ? void 0 : u.onOtherMouseLeave) == null
                  ? void 0
                  : p.call(u, t);
              }),
            (this.currentHitMesh = null),
            (document.body.style.cursor = "default"),
            (this.appGL.gl.canvas.style.pointerEvents = "none");
        }
      });
      c(this, "handleDrag", ({ active: t, event: e, tap: i }) => {
        var n, r;
        if (
          ((this.isDragging = t),
          (this.hitMeshes = this.getHitMeshes(e)),
          this.hitMeshes.length)
        ) {
          const a = this.glObjects[this.meshes.indexOf(this.hitMeshes[0])];
          if (i) {
            const o = e == null ? void 0 : e.target;
            if (o == null ? void 0 : o.closest("[data-pr]")) {
              zu("as data-pr (prevent-raycast), return");
              return;
            }
            (n = a.onClick) == null || n.call(a, e);
          } else (r = a.onDrag) == null || r.call(a, e);
        }
      });
      (this.appGL = new ge()),
        (this.gl = this.appGL.gl),
        (this.sizes = this.appGL.sizes),
        (this.renderer = this.appGL.renderer),
        (this.camera = this.appGL.camera.instance),
        (this.scene = this.appGL.scene.instance),
        this.add(t),
        (this.raycast = new Pc()),
        (this.mouse = new Fe());
    }
    start() {
      this.initEvents();
    }
    stop() {
      this.removeEvents();
    }
    add(t, e) {
      if (t instanceof Tt) for (let i of t.children) this.glObjects.push(i);
      else if (Array.isArray(t)) for (let i of t) this.glObjects.push(i);
      else this.glObjects.push(t);
      this.meshes = this.glObjects
        .map((i) => (i == null ? void 0 : i.mesh))
        .filter((i) => i);
    }
    initEvents() {
      window.addEventListener("mousemove", this.handleMove, !1),
        (this.dragGesture = new br(window, this.handleDrag, {
          eventOptions: { passive: !1 },
          preventDefault: !0,
        })),
        this.dragGesture.setConfig({ pointer: { keys: !1 } });
    }
    removeEvents() {
      window.removeEventListener("mousemove", this.handleMove, !1),
        this.dragGesture.destroy();
    }
    getHitMeshes(t) {
      return (
        this.mouse.set(
          2 * (t.x / this.sizes.width) - 1,
          2 * (1 - t.y / this.sizes.height) - 1
        ),
        this.raycast.castMouse(this.camera, this.mouse),
        this.raycast.intersectMeshes(this.meshes, {
          includeNormal: !0,
          includeUV: !0,
        })
      );
    }
  }
  const Ve = class Ve {
    constructor() {
      c(this, "gl");
      c(this, "sizes");
      c(this, "camera");
      c(this, "renderer");
      c(this, "scene");
      c(this, "viewport");
      c(this, "mouse");
      c(this, "grid");
      c(this, "raycasting");
      c(this, "resize", () => {
        this.renderer.handleResize(),
          this.camera.handleResize(),
          (this.viewport = this.camera.viewport),
          this.grid.handleResize();
      });
      c(this, "loop", () => {
        this.renderer.handleTick();
      });
      if (Ve.instance) return Ve.instance;
      (Ve.instance = this),
        (this.sizes = new Ec()),
        (this.mouse = new Tc()),
        (this.camera = new Cc()),
        (this.renderer = new Ac()),
        (this.scene = new Lc()),
        (this.grid = new kc()),
        (this.gl = this.renderer.gl),
        (this.raycasting = new ku()),
        this.resize(),
        this.initEvents();
    }
    initEvents() {
      gt.add(this.loop, De.GL_RENDER),
        this.sizes.resizeEmitter.add(this.resize),
        this.raycasting.start();
    }
    removeEvents() {
      gt.remove(this.loop),
        this.sizes.resizeEmitter.remove(this.resize),
        this.raycasting.removeEvents();
    }
  };
  c(Ve, "instance");
  let nr = Ve;
  const ge = nr,
    Ru = "TextureLoader",
    Ea = B(`front:${Ru}`);
  class Gu {
    constructor() {
      c(this, "appGL", new ge());
    }
    loads(t) {
      return (
        Array.isArray(t) || (t = [t]),
        new Promise((e) => {
          const i = [];
          t.forEach(async (n, r) => {
            try {
              const a = await this.load(n);
              i.push(a);
            } catch (a) {
              Ea("error on preload", a);
            }
            r === (t == null ? void 0 : t.length) - 1 &&
              (Ea("texture preloaded", t.length), e(i));
          });
        })
      );
    }
    load(t, e = this.appGL.gl) {
      return new Promise(async (i, n) => {
        try {
          const r = await new Promise((a) => {
            const o = new ec(e, { generateMipmaps: !0 }),
              l = new Image();
            (l.src = t),
              (l.crossOrigin = "anonymous"),
              (l.onload = () => {
                (o.image = l), a(o);
              });
          });
          i(r);
        } catch {
          n(t);
        }
      });
    }
  }
  const Fu = new Gu(),
    Du = "/o-DV-T1dP8.webp",
    Bu = "/g1-BqFXahlp.webp",
    $u = "/g2-BUZb1J4f.webp",
    Uu = "/y-DbIPF7fG.webp",
    Nu = "/bar-BpTfnzw8.webp",
    Vu = "/point-DOlsY0ze.webp",
    ds = 5e-4,
    Wu = {
      o: {
        path: Du,
        ratio: 175 / 198,
        position: { x: -0.17, y: -0.076 },
        scale: { x: 175 * ds },
      },
      g1: {
        path: Bu,
        ratio: 206 / 348,
        position: { x: -0.1, y: -0.022 },
        scale: { x: 206 * ds },
      },
      g2: {
        path: $u,
        ratio: 205 / 354,
        position: { x: 0, y: 0 },
        scale: { x: 205 * ds },
      },
      y: {
        path: Uu,
        ratio: 233 / 375,
        position: { x: 0.108, y: -0.01 },
        scale: { x: 233 * ds },
      },
      bar: {
        path: Nu,
        ratio: 142 / 156,
        position: { x: 0.172, y: -0.0201 },
        scale: { x: 142 * ds },
      },
      point: {
        path: Vu,
        ratio: 1,
        position: { x: 0.127, y: -0.076 },
        scale: { x: 0.025 },
      },
    },
    ju = "/star-01-Co9lMad0.webp",
    qu = "/star-02-Czh-oDt6.webp",
    Xu = "/star-03-CoD34VFi.webp",
    Hu = "/star-04-D19qfdFJ.webp",
    Yu = "/star-05-Cro5GBAw.webp",
    Ku = "/star-06-1iSbppyO.webp",
    Zu = "/star-07-Cxt4F7tZ.webp",
    Qu = "/star-08-B9Vm0Ghv.webp",
    Ju = "/star-09-CdqIMRXz.webp",
    tp = "/star-10-BPQq8nXs.webp",
    ep = "/star-11-C3uK4s5M.webp",
    sp = {
      star01: { path: ju, position: { x: -0.3, y: 0.3 } },
      star02: { path: qu, position: { x: -0.19, y: 0.33 } },
      star03: { path: Xu, position: { x: -0.1, y: 0.3 } },
      star04: { path: Hu, position: { x: -0.04, y: 0.32 } },
      star05: { path: Yu, position: { x: 0.01, y: 0.22 } },
      star06: { path: Ku, position: { x: 0.08, y: 0.17 } },
      star07: { path: Zu, position: { x: 0.1, y: 0.3 } },
      star08: { path: Qu, position: { x: 0.15, y: 0.1 } },
      star09: { path: Ju, position: { x: 0.16, y: 0.2 } },
      star10: { path: tp, position: { x: 0.22, y: 0.24 } },
      star11: { path: ep, position: { x: 0.26, y: 0.14 } },
    },
    Cn = (s) => s[Math.floor(Math.random() * s.length)],
    ip = "/bubble-01-HCIPEKtO.webp",
    np = "/bubble-02-BTvMUbO-.webp",
    rp = "/bubble-03-DBNhk02l.webp",
    ap = "/bubble-04-BZLAmfwY.webp",
    op = "/bubble-05-K1P_8GBL.webp",
    hp = "/bubble-06-C_oKIykT.webp",
    lp = 16,
    cp = new Array(lp)
      .fill(null)
      .reduce(
        (s, t, e) => ({
          ...s,
          [`bubble${e + 1}`]: { path: Cn([ip, np, rp, ap, op, hp]) },
        }),
        {}
      ),
    up = "/stain-old-01-CS__Dcam.webp",
    pp = "/stain-08-DW6KAtki.webp",
    dp = "/stain-09-pJRl2q-4.webp",
    fp = "/stain-10-BBOL-_MT.webp",
    gp = [
      { path: up, scale: { x: 138, y: 68 }, ratio: 138 / 68 },
      { path: pp, scale: { x: 194, y: 216 }, ratio: 194 / 216 },
      { path: dp, scale: { x: 201, y: 186 }, ratio: 201 / 186 },
      { path: fp, scale: { x: 209, y: 230 }, ratio: 209 / 230 },
    ],
    mp = 40,
    yp = new Array(mp)
      .fill(null)
      .reduce((s, t, e) => ({ ...s, [`stain${e}`]: { ...Cn(gp) } }), {}),
    xp = "/01-hi-BYSgWhvE.webp",
    wp = "/02-hi-D8T6mcwz.webp",
    vp = "/03-hi-BAvBMF7W.webp",
    bp = "/04-hi-5PeLlKGo.webp",
    Sp = "/05-hi-DV7efBRz.webp",
    Mp = "/06-hi-WFOG0hfl.webp",
    Ip = [
      { path: xp, scale: { x: 65, y: 81 }, ratio: 65 / 81 },
      { path: wp, scale: { x: 65, y: 81 }, ratio: 65 / 81 },
      { path: vp, scale: { x: 53, y: 62 }, ratio: 53 / 62 },
      { path: bp, scale: { x: 61, y: 109 }, ratio: 61 / 109 },
      { path: Sp, scale: { x: 80, y: 104 }, ratio: 80 / 104 },
      { path: Mp, scale: { x: 87, y: 92 }, ratio: 87 / 92 },
    ],
    Pp = 10,
    Ap = new Array(Pp)
      .fill(null)
      .reduce((s, t, e) => ({ ...s, [`hi${e}`]: { ...Cn(Ip) } }), {}),
    Ep = "/dead-star-01-EuwjS0UA.webp",
    Cp = "/dead-star-02-CDnEFQ7X.webp",
    Lp = "/dead-star-03-DmCwYeto.webp",
    _p = "/dead-star-04-CSnjMwPL.webp",
    Tp = "/dead-star-05-C6v3-TDM.webp",
    Op = "/dead-star-06-B4JPONGX.webp",
    zp = "/dead-star-07-C-AVnRDJ.webp",
    kp = "/dead-star-08-DSA4Cq7S.webp",
    Rp = "/dead-star-09-Nj3K44w3.webp",
    Gp = "/dead-star-10-qqkuzkLn.webp",
    Fp = "/dead-star-11-D9q7oMWJ.webp",
    Dp = {
      star01: {
        path: Ep,
        position: { x: -0.2, y: -0.3 },
        desktopPosition: { x: -0.32, y: -0.3 },
      },
      star02: {
        path: Cp,
        position: { x: -0.19, y: -0.15 },
        desktopPosition: { x: -0.25, y: -0.19 },
      },
      star03: {
        path: Lp,
        position: { x: -0.14, y: -0.18 },
        desktopPosition: { x: -0.21, y: -0.25 },
      },
      star04: {
        path: _p,
        position: { x: -0.12, y: -0.13 },
        desktopPosition: { x: -0.17, y: -0.17 },
      },
      star05: {
        path: Tp,
        position: { x: -0.07, y: -0.18 },
        desktopPosition: { x: -0.12, y: -0.22 },
      },
      star06: {
        path: Op,
        position: { x: -0.02, y: -0.14 },
        desktopPosition: { x: -0.05, y: -0.2 },
      },
      star07: {
        path: zp,
        position: { x: 0, y: -0.2 },
        desktopPosition: { x: -0.02, y: -0.25 },
      },
      star08: {
        path: kp,
        position: { x: 0.07, y: -0.19 },
        desktopPosition: { x: 0.07, y: -0.24 },
      },
      star09: {
        path: Rp,
        position: { x: 0.19, y: -0.25 },
        desktopPosition: { x: 0.27, y: -0.34 },
      },
      star10: {
        path: Gp,
        position: { x: 0.17, y: -0.05 },
        desktopPosition: { x: 0.32, y: -0.08 },
      },
      star11: {
        path: Fp,
        position: { x: 0.22, y: -0.09 },
        desktopPosition: { x: 0.42, y: -0.1 },
      },
    },
    Bp = "/papa-mama-01-DXCvbVdX.webp",
    $p = "/papa-mama-02-DUyqV7AS.webp",
    Up = "/papa-mama-03-DiBDAf0i.webp",
    Np = "/papa-mama-04-B__ZQX_q.webp",
    Vp = "/papa-mama-05-J6zF4sbJ.webp",
    Wp = "/papa-mama-06-Hh6gRLXk.webp",
    jp = "/papa-mama-08-_F8UIxaQ.webp",
    qp = {
      papaMama01: {
        path: Bp,
        scale: { x: 86 },
        ratio: 86 / 63,
        position: { x: 0, y: 0.3 },
        desktopPosition: { x: 0, y: 0 },
      },
      papaMama02: {
        path: $p,
        scale: { x: 100 },
        ratio: 143 / 107,
        position: { x: 0.1, y: 0.24 },
        desktopPosition: { x: 0, y: 0 },
      },
      papaMama03: {
        path: Up,
        scale: { x: 143 },
        ratio: 143 / 65,
        position: { x: -0.02, y: 0.24 },
        desktopPosition: { x: 0, y: 0 },
      },
      papaMama04: {
        path: Np,
        scale: { x: 113 },
        ratio: 113 / 47,
        position: { x: 0.06, y: 0.19 },
        desktopPosition: { x: 0, y: 0 },
      },
      papaMama05: {
        path: Vp,
        scale: { x: 125 },
        ratio: 95 / 40,
        position: { x: 0.1, y: 0.3 },
        desktopPosition: { x: 0, y: 0 },
      },
      papaMama06: {
        path: Wp,
        scale: { x: 64 },
        ratio: 64 / 90,
        position: { x: 0.18, y: 0.28 },
        desktopPosition: { x: 0, y: 0 },
      },
      papaMama08: {
        path: jp,
        scale: { x: 70 },
        ratio: 134 / 102,
        position: { x: 0.17, y: 0.18 },
        desktopPosition: { x: 0, y: 0 },
      },
    };
  class Xp {
    constructor() {
      c(this, "texturesList");
      c(this, "assetsLength");
      c(this, "onReadyBeeper", new it(null));
      c(this, "onAssetLoad", new it({ count: 0, percent: 0 }));
      this.init();
    }
    async init() {
      const e = (await Pi.getAsync()).routes,
        i = (n) => {
          const r = {};
          for (let a of n) r[a.name] = a.props.data.matter.frames;
          return r;
        };
      (this.texturesList = {
        ...i(e),
        logo: Wu,
        stars: sp,
        bubbles: cp,
        stains: yp,
        hi: Ap,
        deadStars: Dp,
        papaMama: qp,
      }),
        (this.assetsLength = Object.values(this.texturesList).reduce(
          (n, r) => n + Object.keys(r).length,
          0
        ));
    }
    async load() {
      let t = [];
      for (let e of Object.values(this.texturesList))
        for (let i of Object.values(e)) t.push(i);
      return (
        await Promise.all(
          t.map(async (e) => {
            (e.texture = await Fu.load(e.path)), this.incrementCounter();
          })
        ),
        this.texturesList
      );
    }
    incrementCounter() {
      const t = this.onAssetLoad.state.count + 1,
        e = Math.floor((100 / this.assetsLength) * t);
      this.onAssetLoad.dispatch({ count: t, percent: e }),
        e === 100 && this.onReadyBeeper.dispatch(this.texturesList);
    }
  }
  const K = new Xp(),
    Hp = "Loader";
  var Fa;
  const ve = class ve extends V {
    constructor() {
      super(...arguments);
      c(this, "currentPercent", 0);
      c(this, "$count", this.find("_count"));
      c(this, "$wall", this.find("_wall"));
      c(this, "handleAssetLoad", async ({ percent: e }) => {
        await this.percentAnim(e),
          await this.playOutComponent(() => {
            ve.onReadyBeeper.dispatch(K.texturesList),
              ve.preloadEndedDeferred.resolve();
          }),
          this.root.remove();
      });
      c(this, "currentPercentItp");
      c(
        this,
        "doneText",
        Cn((Fa = Pi.get().dictionary) == null ? void 0 : Fa.loaderDone)
      );
    }
    async mounted() {
      K.onAssetLoad.add(this.handleAssetLoad), await K.load();
    }
    unmounted() {
      K.onAssetLoad.remove(this.handleAssetLoad);
    }
    percentAnim(e) {
      var i;
      return (
        (i = this.currentPercentItp) == null || i.stop(),
        new Promise((n) => {
          this.currentPercentItp = new q({
            props: { v: [this.currentPercent, e] },
            duration: 2e3,
            ease: "expo.inOut",
            onUpdate: ({ v: r }) => {
              if (((r = Math.round(r)), (this.currentPercent = r), r === 100)) {
                (this.$count.innerHTML = this.doneText), n();
                return;
              }
              this.$count.innerHTML = `${r}`;
            },
          });
        })
      );
    }
    playOutComponent(e, i = 1e3) {
      let n = !1;
      return new nt({
        paused: !0,
        onUpdate: (a, o) => {
          o >= 0.8 && !n && ((n = !0), e());
        },
      })
        .add(
          {
            el: this.$count,
            ease: "power4.out",
            duration: i * 0.6,
            props: { scale: [1, 1.6] },
          },
          0
        )
        .add({
          el: this.$count,
          ease: "expo.out",
          duration: i * 0.3,
          props: { scale: [1, 0] },
        })
        .add(
          {
            el: this.$wall,
            ease: "power3.out",
            duration: i,
            props: { opacity: [1, 0] },
          },
          0
        )
        .play();
    }
  };
  c(ve, "name", Hp),
    c(ve, "onReadyBeeper", new it()),
    c(ve, "preloadEndedDeferred", An());
  let Gi = ve;
  const R = (s, t) => {
      const e = (s.speed ?? s.initialSpeed) * (t ?? 1);
      return (
        (s.current.x = ms(s.current.x, s.target.x, e)),
        (s.current.y = ms(s.current.y, s.target.y, e)),
        (s.current.z = ms(s.current.z, s.target.z, e)),
        s
      );
    },
    Sr = (s, t) => {
      const e = (s.speed ?? s.initialSpeed) * (t ?? 1);
      return (s.current = ms(s.current, s.target, e)), s;
    },
    Mr = 0.006,
    Ir = null,
    E = ({ x: s, y: t, z: e } = {}) => ({
      initial: new P(s, t, e),
      current: new P(s, t, e),
      target: new P(s, t, e),
      initialSpeed: Mr,
      speed: Ir,
    }),
    xs = ({ x: s, y: t, z: e } = {}) => ({
      initial: new Ge(s, t, e),
      current: new Ge(s, t, e),
      target: new Ge(s, t, e),
      initialSpeed: Mr,
      speed: Ir,
    }),
    Pr = (s = 0) => ({
      initial: s,
      current: s,
      target: s,
      initialSpeed: Mr,
      speed: Ir,
    });
  class Ln {
    constructor() {
      c(this, "position");
      c(this, "scale");
      c(this, "rotation");
      c(this, "mouse");
      c(this, "appGL");
      (this.appGL = new ge()),
        (this.position = E({ x: 0, y: 0, z: 0 })),
        (this.scale = E({ x: 1, y: 1, z: 1 })),
        (this.rotation = xs()),
        (this.mouse = E());
    }
  }
  var Yp = (s = Kp) => {
      let t = {},
        e = (i) => t[i] || (t[i] = s(i));
      return (i, n) => {
        let r = {},
          a = null,
          o = n.indexOf("?"),
          l = n.indexOf("#");
        if ((l !== -1 && (a = n.slice(l + 1)), o !== -1)) {
          let f = n.slice(o + 1, l !== -1 ? l : void 0);
          new URLSearchParams(f).forEach((y, x) => (r[x] = y));
        }
        for (let f of ["?", "#"]) n = n.includes(f) ? n.split(f)[0] : n;
        let { regexp: u, keys: p } = e(i || ""),
          d = u.exec(n);
        return d
          ? [!0, p.reduce((f, y, x) => ((f[y.name] = d[x + 1]), f), {}), r, a]
          : [!1, null, null, null];
      };
    },
    Kp = (s) => {
      let t = (l) => l.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
        e = (l, u, p) => {
          let d = l ? "((?:[^\\/]+?)(?:\\/(?:[^\\/]+?))*)" : "([^\\/]+?)";
          return u && p && (d = "(?:\\/" + d + ")"), d + (u ? "?" : "");
        },
        i = /:([A-Za-z0-9_]+)([?+*]?)/g,
        n = null,
        r = 0,
        a = [],
        o = "";
      for (; (n = i.exec(s)) !== null; ) {
        let [l, u, p] = n,
          d = p === "+" || p === "*",
          f = p === "?" || p === "*",
          y = f && s[n.index - 1] === "/" ? 1 : 0,
          x = s.substring(r, n.index - y);
        a.push({ name: u }), (r = i.lastIndex), (o += t(x) + e(d, f, y));
      }
      return (
        (o += t(s.substring(r))),
        { keys: a, regexp: new RegExp("^" + o + "(?:\\/)?$", "i") }
      );
    },
    Zp = B("low-router"),
    J,
    Bs,
    $s,
    rr,
    re,
    Ne,
    Da,
    Qp =
      ((Da = class {
        constructor(s, t = {}) {
          g(this, $s);
          g(this, re);
          c(this, "routes");
          c(this, "currentContext");
          g(this, J, void 0);
          g(this, Bs, void 0);
          var e, i;
          (this.routes = s),
            m(this, J, t),
            (h(this, J).base = h(this, J).base || "/"),
            (h(this, J).id = h(this, J).id || 1),
            b(this, re, Ne).call(this, "routes", this.routes),
            b(this, re, Ne).call(this, "options", h(this, J)),
            m(this, Bs, h(this, J).matcher || Yp()),
            (i = (e = h(this, J)).onInit) == null || i.call(e);
        }
        async resolve(s) {
          var e, i, n;
          let t = b(this, $s, rr).call(this, s);
          return (
            typeof ((e = t.context.route) == null ? void 0 : e.action) ==
              "function" &&
              (t.response = await t.context.route.action(t.context)),
            (n = (i = h(this, J)).onResolve) == null || n.call(i, t),
            Promise.resolve(t)
          );
        }
        resolveSync(s) {
          var e, i, n, r;
          let t = b(this, $s, rr).call(this, s);
          return (
            typeof ((i = (e = t.context) == null ? void 0 : e.route) == null
              ? void 0
              : i.action) == "function" &&
              (t.response = t.context.route.action(t.context)),
            (r = (n = h(this, J)).onResolve) == null || r.call(n, t),
            t
          );
        }
        dispose() {
          var s, t;
          (this.currentContext = null),
            (t = (s = h(this, J)).onDispose) == null || t.call(s);
        }
        matchRoute(s, t = h(this, J).base, e = this.routes) {
          let i = (r, a, o, l) => {
              for (let u of o) {
                let p = `${a}${u.path}`.replace(/(\/)+/g, "/"),
                  [d, f, y, x] = h(this, Bs).call(this, p, r);
                b(this, re, Ne).call(this, `'${p}' match with '${r}'?`, d);
                let w = {
                  pathname: r,
                  params: f,
                  query: y,
                  hash: x,
                  route: u,
                  base: a,
                  parent: l,
                };
                if (d) return w;
                if (u.children) {
                  let v = i(r, p, u.children, w);
                  if (v) return v;
                }
              }
            },
            n = i(s, t, e, null);
          if (n) return n;
        }
        createUrl({ name: s, params: t = {} }) {
          let e = (n, r) => {
              let a = n.replace(
                /:([^/?]+)(\?)?/g,
                (o, l) => (r == null ? void 0 : r[l]) ?? ""
              );
              return a.endsWith("/") ? a.slice(0, -1) : a;
            },
            i = (n, r, a, o) => {
              var l;
              for (let u of a) {
                if (u.name === n)
                  return (o + e(u.path, r)).replace(/(\/)+/g, "/");
                if (((l = u.children) == null ? void 0 : l.length) > 0) {
                  let p = i(n, r, u.children, o + e(u.path, r));
                  if (p) return p;
                }
              }
            };
          return i(s, t, this.routes, h(this, J).base);
        }
      }),
      (J = new WeakMap()),
      (Bs = new WeakMap()),
      ($s = new WeakSet()),
      (rr = function (s) {
        var e, i;
        let t = this.matchRoute(
          typeof s == "string"
            ? s
            : this.createUrl({
                name: s == null ? void 0 : s.name,
                params: s == null ? void 0 : s.params,
              })
        );
        return t
          ? ((this.currentContext = t),
            b(this, re, Ne).call(this, "routeContext", t),
            { response: void 0, context: t })
          : (b(this, re, Ne).call(
              this,
              `No matching route found with pathname ${s}`,
              this.routes
            ),
            (i = (e = h(this, J)).onError) == null || i.call(e),
            { response: void 0, context: void 0 });
      }),
      (re = new WeakSet()),
      (Ne = function (...s) {
        var t;
        Zp(((t = h(this, J)) == null ? void 0 : t.id) || "", ...s);
      }),
      Da),
    Jp = () => {
      let s = window,
        t = history,
        e = location,
        i = [],
        n = (r, a) => {
          i.forEach((o) => {
            o(r, a);
          });
        };
      return {
        listen: (r) => {
          i.push(r);
          let a = () => {
            r({ pathname: e.pathname, search: e.search, hash: e.hash }, "POP");
          };
          return (
            s.addEventListener("popstate", a),
            () => {
              let o = i.indexOf(r);
              o !== -1 && i.splice(o, 1), s.removeEventListener("popstate", a);
            }
          );
        },
        push: (r, a = "pushState") => {
          t[a]({}, null, r),
            n(
              { pathname: r, search: e.search, hash: e.hash },
              a === "pushState" ? "PUSH" : "REPLACE"
            );
        },
      };
    };
  const Ca = 1e3,
    La = {
      playIn(s) {
        return new q({
          el: s,
          duration: Ca,
          props: { opacity: [0, 1] },
          ease: "expo.out",
        }).play();
      },
      playOut(s) {
        return new q({
          el: s,
          duration: Ca * 0.3,
          props: { opacity: [1, 0] },
          ease: "expo.out",
        }).play();
      },
    };
  class fo extends V {
    playIn() {
      return La.playIn(this.root);
    }
    playOut() {
      return La.playOut(this.root);
    }
  }
  c(fo, "name", "Default");
  class _n {
    constructor() {
      c(this, "onShow", new it());
    }
    show() {
      this.onShow.state !== !0 && this.onShow.dispatch(!0);
    }
    hide() {
      this.onShow.state !== !1 && this.onShow.dispatch(!1);
    }
    toggle() {
      this.onShow.state ? this.hide() : this.show();
    }
  }
  class td extends _n {}
  const zi = new td(),
    ut = (s, t = 1, e = 0) => {
      const i = new nt({ paused: !0 });
      return (
        i.add(
          {
            initUpdate: !0,
            el: s,
            props: { opacity: [0, 1], y: [50, 0, "px"] },
            duration: 500 * t,
            ease: "power2.out",
            reverseEase: "power2.in",
          },
          500 * e
        ),
        i
      );
    };
  class ed {
    constructor() {
      c(this, "backgroundColorBeeper", new it());
      c(this, "interfaceColorBeeper", new it());
      c(this, "prevInterfaceColor", null);
    }
    updateBackgroundColor(t) {
      this.backgroundColorBeeper.state !== t &&
        this.backgroundColorBeeper.dispatch(t);
    }
    updateInterfaceColor(t) {
      (this.prevInterfaceColor = this.interfaceColorBeeper.state),
        this.interfaceColorBeeper.dispatch(t);
    }
    setPrevInterfaceColor() {
      this.interfaceColorBeeper.dispatch(this.prevInterfaceColor);
    }
  }
  const st = new ed(),
    sd = "AboutButton";
  var Us, Ns;
  class Tn extends V {
    constructor() {
      super(...arguments);
      c(this, "isShow", !1);
      g(this, Us, () => {
        zi.show();
      });
      g(this, Ns, (e) => {
        this.root.style.color = e;
      });
    }
    mounted() {
      this.root.addEventListener("click", h(this, Us)),
        st.interfaceColorBeeper.add(h(this, Ns));
    }
    unmounted() {
      this.root.removeEventListener("click", h(this, Us)),
        st.interfaceColorBeeper.remove(h(this, Ns));
    }
    async playIn() {
      this.isShow ||
        ((this.root.style.pointerEvents = "auto"),
        await ut(this.root).play(),
        (this.isShow = !0));
    }
    async playOut() {
      this.isShow &&
        ((this.root.style.pointerEvents = "none"),
        await ut(this.root).reverse(),
        (this.isShow = !1));
    }
  }
  (Us = new WeakMap()), (Ns = new WeakMap()), c(Tn, "name", sd);
  const id = "LangSwitcher";
  var Vs, Ws, ar;
  class On extends V {
    constructor() {
      super(...arguments);
      g(this, Ws);
      c(this, "isShow", !1);
      c(this, "links", this.findAll("_link"));
      g(this, Vs, ({ context: e }) => {
        var i, n;
        b(this, Ws, ar).call(
          this,
          (n = (i = e.route) == null ? void 0 : i.props) == null
            ? void 0
            : n.alternateLangs
        );
      });
    }
    mounted() {
      var e, i;
      b(this, Ws, ar).call(
        this,
        (i = (e = k.currContext) == null ? void 0 : e.route.props) == null
          ? void 0
          : i.alternateLangs
      ),
        k.onResolve.add(h(this, Vs));
    }
    unmounted() {
      k.onResolve.remove(h(this, Vs));
    }
    async playIn() {
      this.isShow ||
        ((this.root.style.pointerEvents = "auto"),
        await ut(this.root, 1, 0).play(),
        (this.isShow = !0));
    }
    async playOut() {
      this.isShow &&
        ((this.root.style.pointerEvents = "none"),
        await ut(this.root, 1, 0).reverse(),
        (this.isShow = !1));
    }
  }
  (Vs = new WeakMap()),
    (Ws = new WeakSet()),
    (ar = function (e) {
      for (const i of this.links)
        i.setAttribute("href", e[i.getAttribute("data-lang")]);
    }),
    c(On, "name", id);
  const nd = B("front:Home");
  var ae, es, Ji, js, qs, tn, mo;
  class go extends V {
    constructor() {
      super(...arguments);
      g(this, tn);
      c(this, "gl", _.scenes.home);
      g(this, ae, void 0);
      c(this, "aboutButton", this.add(Tn));
      c(this, "LangSwitcher", this.add(On));
      c(this, "aboutButtonWrapper", this.find("_aboutButtonWrapper"));
      c(this, "enterButtonWrapper", this.find("_enterButtonWrapper"));
      c(this, "subtitle", this.find("_subtitle"));
      c(this, "container", this.find("_container"));
      c(this, "clickZone", this.find("_clickZone"));
      c(this, "dragGesture");
      g(this, es, [
        this.enterButtonWrapper,
        this.subtitle,
        this.aboutButtonWrapper,
        this.LangSwitcher.root,
      ]);
      g(this, Ji, ({ tap: e, event: i }) => {
        e && (nd("tap"), k.navigateBySceneIndex(1));
      });
      c(this, "first", !0);
      g(this, js, { opacity: 1 });
      g(this, qs, (e) => {
        if (this.first) {
          this.first = !1;
          return;
        }
        const i = Math.round(_.onFirstDragIndexChange.state) - e;
        i > 0 ||
          new q({
            el: this.container,
            duration: 200,
            ease: "power2.out",
            props: {
              opacity: [h(this, js).opacity, hs(0, 1 - Math.abs(i) * 20, 1)],
            },
            onUpdate: ({ opacity: n }) => {
              h(this, js).opacity = n;
            },
          });
      });
      c(this, "timeout");
    }
    mounted() {
      _.onSceneIndexChange.add(h(this, qs)),
        (this.dragGesture = new br(this.clickZone, h(this, Ji), {
          eventOptions: { passive: !0 },
        }));
    }
    unmounted() {
      _.onSceneIndexChange.remove(h(this, qs)), this.dragGesture.destroy();
    }
    async playIn() {
      var e;
      return (
        (e = h(this, ae)) == null || e.stop(),
        m(this, ae, b(this, tn, mo).call(this)),
        (this.timeout = setTimeout(() => {
          h(this, ae).play();
        }, 1200)),
        this.gl.playIn()
      );
    }
    async playOut() {
      var e, i;
      clearTimeout(this.timeout),
        (e = h(this, ae)) == null || e.seek(0),
        (i = h(this, ae)) == null || i.stop(),
        this.gl.playOut();
    }
  }
  (ae = new WeakMap()),
    (es = new WeakMap()),
    (Ji = new WeakMap()),
    (js = new WeakMap()),
    (qs = new WeakMap()),
    (tn = new WeakSet()),
    (mo = function () {
      const e = new nt({ paused: !0 });
      for (let i = 0; i < h(this, es).length; i++)
        e.add(
          {
            el: h(this, es)[i],
            initUpdate: !0,
            duration: 1500,
            ease: "power2.out",
            props: { scale: [0.9, 1], y: [20, 0, "px"], opacity: [0, 1] },
            onComplete: () => {
              h(this, es)[i].style.transform = "";
            },
          },
          0 + i * 100
        );
      return e;
    }),
    c(go, "name", "Home");
  const rd = "SplitText";
  class yo extends V {}
  c(yo, "name", rd);
  class ad extends _n {}
  const Fi = new ad(),
    od = "IlluText";
  var Xs, Hs, Ys;
  class me extends V {
    constructor() {
      super(...arguments);
      c(this, "splitText", this.add(yo));
      c(this, "letters", this.splitText.findAll("_letter"));
      c(this, "wrapper", this.find("_wrapper"));
      g(this, Xs, (e) => {
        this.root.style.color = e;
      });
      g(this, Hs, (e) => {
        const i = Math.abs(e - this.props.pageIndex),
          n = hs(0, 1 - i * 5, 1);
        Hn(this.root, { opacity: n });
      });
      g(this, Ys, (e) => {
        e ? ut(this.wrapper, 1).play() : ut(this.wrapper, 0.5).reverse();
      });
    }
    mounted() {
      st.interfaceColorBeeper.add(h(this, Xs)),
        _.onSceneIndexChange.add(h(this, Hs)),
        Fi.onShow.add(h(this, Ys));
    }
    unmounted() {
      st.interfaceColorBeeper.remove(h(this, Xs)),
        _.onSceneIndexChange.remove(h(this, Hs)),
        Fi.onShow.remove(h(this, Ys));
    }
    playIn(e = 1) {
      const i = new nt({ paused: !0 });
      for (let n = 0; n < this.letters.length; n++)
        i.add(
          {
            el: this.letters[n],
            ease: "power3.out",
            duration: 1300 * e,
            initUpdate: !0,
            props: { y: { from: 5, to: 0, unit: "px" }, opacity: [0, 1] },
          },
          n * 30 + 1e3
        );
      return i.play();
    }
    playOut() {
      return Promise.resolve();
    }
  }
  (Xs = new WeakMap()),
    (Hs = new WeakMap()),
    (Ys = new WeakMap()),
    c(me, "name", od);
  const hd = "Floor";
  class ye extends V {
    playIn() {
      return new nt({ paused: !0 })
        .add({
          el: this.root,
          initUpdate: !0,
          duration: 1e3,
          props: { y: { from: 100, to: -10, unit: "%", ease: "power3.inOut" } },
        })
        .add({
          el: this.root,
          duration: 1200,
          props: { y: { from: -10, to: 0, unit: "%", ease: "power1.out" } },
        })
        .play();
    }
    playOut() {
      return new q({
        el: this.root,
        duration: 300,
        ease: "expo.out",
        props: {
          y: { from: 0, to: 100, unit: "%" },
          opacity: { from: 1, to: 0 },
        },
      }).play();
    }
  }
  c(ye, "name", hd);
  const ld = "Wakeup";
  class xo extends V {
    constructor() {
      super(...arguments);
      c(this, "gl", _.scenes.wakeup);
      c(
        this,
        "illuText",
        this.add(me, { props: { pageIndex: this.props.index } })
      );
      c(this, "floor", this.add(ye));
    }
    async playIn() {
      var e;
      this.floor.playIn(),
        (e = this.illuText) == null || e.playIn(),
        await this.gl.playIn();
    }
    async playOut() {
      var e;
      await this.floor.playOut(),
        (e = this.illuText) == null || e.playOut(),
        await this.gl.playOut();
    }
  }
  c(xo, "name", ld);
  const wo = "Laugh",
    cd = B(`front:${wo}`);
  class vo extends V {
    constructor() {
      super(...arguments);
      c(this, "gl", _.scenes.laugh);
      c(
        this,
        "illuText",
        this.add(me, { props: { pageIndex: this.props.index } })
      );
      c(this, "floor", this.add(ye));
    }
    async playIn() {
      var e;
      cd("this.props", this.props),
        this.floor.playIn(),
        (e = this.illuText) == null || e.playIn(),
        await this.gl.playIn();
    }
    async playOut() {
      var e;
      this.floor.playOut(),
        (e = this.illuText) == null || e.playOut(),
        await this.gl.playOut();
    }
  }
  c(vo, "name", wo);
  const ud = "Bath";
  class bo extends V {
    constructor() {
      super(...arguments);
      c(this, "gl", _.scenes.bath);
      c(
        this,
        "illuText",
        this.add(me, { props: { pageIndex: this.props.index } })
      );
      c(this, "floor", this.add(ye));
    }
    async playIn() {
      var e;
      this.floor.playIn(),
        (e = this.illuText) == null || e.playIn(),
        await this.gl.playIn();
    }
    async playOut() {
      var e;
      await this.floor.playOut(),
        (e = this.illuText) == null || e.playOut(),
        await this.gl.playOut();
    }
  }
  c(bo, "name", ud);
  const pd = "Meal";
  class So extends V {
    constructor() {
      super(...arguments);
      c(this, "gl", _.scenes.meal);
      c(
        this,
        "illuText",
        this.add(me, { props: { pageIndex: this.props.index } })
      );
      c(this, "floor", this.add(ye));
    }
    async playIn() {
      var e;
      this.floor.playIn(),
        (e = this.illuText) == null || e.playIn(),
        await this.gl.playIn();
    }
    async playOut() {
      var e;
      await this.floor.playOut(),
        (e = this.illuText) == null || e.playOut(),
        await this.gl.playOut();
    }
  }
  c(So, "name", pd);
  const dd = "Concert";
  class Mo extends V {
    constructor() {
      super(...arguments);
      c(this, "gl", _.scenes.concert);
      c(
        this,
        "illuText",
        this.add(me, { props: { pageIndex: this.props.index } })
      );
      c(this, "floor", this.add(ye));
    }
    async playIn() {
      var e;
      this.floor.playIn(),
        (e = this.illuText) == null || e.playIn(),
        await this.gl.playIn();
    }
    async playOut() {
      var e;
      await this.floor.playOut(),
        (e = this.illuText) == null || e.playOut(),
        await this.gl.playOut();
    }
  }
  c(Mo, "name", dd);
  const fd = "Mamma";
  class Io extends V {
    constructor() {
      super(...arguments);
      c(this, "gl", _.scenes.mamma);
      c(
        this,
        "illuText",
        this.add(me, { props: { pageIndex: this.props.index } })
      );
      c(this, "floor", this.add(ye));
    }
    async playIn() {
      var e;
      this.floor.playIn(),
        (e = this.illuText) == null || e.playIn(),
        await this.gl.playIn();
    }
    async playOut() {
      var e;
      await this.floor.playOut(),
        (e = this.illuText) == null || e.playOut(),
        await this.gl.playOut();
    }
  }
  c(Io, "name", fd);
  const gd = "Bigboy";
  class Po extends V {
    constructor() {
      super(...arguments);
      c(this, "gl", _.scenes.bigboy);
      c(
        this,
        "illuText",
        this.add(me, { props: { pageIndex: this.props.index } })
      );
      c(this, "floor", this.add(ye));
    }
    async playIn() {
      var e;
      this.floor.playIn(),
        (e = this.illuText) == null || e.playIn(),
        await this.gl.playIn();
    }
    async playOut() {
      var e;
      await this.floor.playOut(),
        (e = this.illuText) == null || e.playOut(),
        await this.gl.playOut();
    }
  }
  c(Po, "name", gd);
  const Ao = {
      outBack: (s) =>
        1 + 2.70158 * Math.pow(s - 1, 3) + 1.70158 * Math.pow(s - 1, 2),
    },
    md = "Again";
  var Ks, Zs, Qs;
  class Eo extends V {
    constructor() {
      super(...arguments);
      c(this, "link", this.find("_link"));
      c(this, "arrowWrapper", this.find("_arrow"));
      c(this, "contentInner", this.find("_contentInner"));
      c(this, "els", [this.link, this.contentInner, this.arrowWrapper]);
      c(this, "first", !0);
      g(this, Ks, { opacity: 1 });
      g(this, Zs, async (e) => {
        if (this.first) {
          await Qn(1e3), (this.first = !1);
          return;
        }
        const i = Math.round(_.onFirstDragIndexChange.state) - e,
          n = hs(0, 1 - Math.abs(i) * 10, 1);
        i < 0 ||
          new q({
            el: this.els,
            duration: 100,
            ease: "power2.out",
            props: { opacity: [h(this, Ks).opacity, n] },
            onUpdate: ({ opacity: r }) => {
              h(this, Ks).opacity = r;
            },
          });
      });
      g(this, Qs, () => {
        new q({
          el: this.els,
          props: { opacity: [1, 0] },
          duration: 100,
          ease: "power3.out",
        });
      });
      c(this, "playInItp");
      c(this, "playOutItp");
    }
    mounted() {
      var e;
      _.onSceneIndexChange.add(h(this, Zs)),
        (e = this.link) == null || e.addEventListener("click", h(this, Qs));
    }
    unmounted() {
      var e;
      _.onSceneIndexChange.remove(h(this, Zs)),
        (e = this.link) == null || e.removeEventListener("click", h(this, Qs));
    }
    async playIn() {
      var e;
      return (
        (e = this.playOutItp) == null || e.stop(),
        (this.playInItp = new q({
          el: this.els,
          props: { opacity: [0, 1], scale: [1.4, 1] },
          delay: 600,
          duration: 250,
          ease: Ao.outBack,
        })),
        this.playInItp.play()
      );
    }
    async playOut() {}
  }
  (Ks = new WeakMap()),
    (Zs = new WeakMap()),
    (Qs = new WeakMap()),
    c(Eo, "name", md);
  const yd = [fo, go, xo, vo, bo, So, Mo, Io, Po, Eo],
    $e = B("front:Router (wrapper)");
  var en, Co, sn, Lo;
  class xd {
    constructor() {
      g(this, en);
      g(this, sn);
      c(this, "history");
      c(this, "instance");
      c(this, "onResolve");
      c(this, "routes");
      c(this, "prevContext");
      c(this, "currContext");
      b(this, en, Co).call(this);
    }
    get isFirstRoute() {
      return !this.prevContext;
    }
    navigateBySceneIndex(t) {
      var i;
      const e =
        (i = this.routes.find(({ props: n }) => n.index === t)) == null
          ? void 0
          : i.path;
      if (!e) {
        $e("navigateBySceneIndex > path not found", { path: e, index: t });
        return;
      }
      if (e === this.currContext.route.path) {
        $e("navigateBySceneIndex > is same path, return", {
          path: e,
          index: t,
        });
        return;
      }
      $e(`navigate by scene index: ${t}, to path: ${e}`), this.history.push(e);
    }
  }
  (en = new WeakSet()),
    (Co = async function () {
      (this.history = Jp()), (this.onResolve = new it());
      const t = await Pi.getAsync();
      (this.routes = b(this, sn, Lo).call(this, t.routes, yd)),
        (this.instance = new Qp(this.routes, {
          base: "/",
          onResolve: ({ context: e, response: i }) => {
            var n;
            if (
              ($e("onResolve", e.pathname),
              e.pathname ===
                ((n = this.currContext) == null ? void 0 : n.pathname))
            ) {
              $e("is same route, return", e.pathname);
              return;
            }
            (this.prevContext = this.currContext),
              (this.currContext = e),
              this.onResolve.dispatch({
                prevContext: this.prevContext,
                context: e,
                response: i,
              });
          },
        }));
    }),
    (sn = new WeakSet()),
    (Lo = function (t, e) {
      return t.map((i, n) => {
        i.props.index = n;
        const { name: r } = i,
          a = r.charAt(0).toUpperCase() + r.slice(1);
        for (let o of e) o.name === a && (i.action = () => o);
        return i;
      });
    });
  const k = new xd();
  class wd {
    constructor() {
      c(this, "onShow", new it());
      c(this, "isInTransition", new it(!1));
    }
    show() {
      this.onShow.state === !0 ||
        !this.menuIsAvailable() ||
        this.onShow.dispatch(!0);
    }
    hide() {
      this.onShow.state !== !1 && this.onShow.dispatch(!1);
    }
    toggle() {
      this.menuIsAvailable() && (this.onShow.state ? this.hide() : this.show());
    }
    menuIsAvailable() {
      return (
        k.currContext.route.name !== "home" &&
        k.currContext.route.name !== "again"
      );
    }
  }
  const N = new wd();
  var Js, ti, or;
  class vd {
    constructor() {
      g(this, ti);
      g(this, Js, os() ? 0.5 : 0.6);
      c(this, "velocity", h(this, Js));
      c(this, "itp");
    }
    clickLickToNextScene(t = this.velocity) {
      this.itp = b(this, ti, or).call(this, [-t, 0]);
    }
    clickLickToPrevScene(t = this.velocity) {
      this.itp = b(this, ti, or).call(this, [t, 0]);
    }
    kill() {
      var t;
      (t = this.itp) == null || t.stop();
    }
  }
  (Js = new WeakMap()),
    (ti = new WeakSet()),
    (or = function (t) {
      return new q({
        props: { v: t },
        ease: "power2.out",
        duration: 1800,
        onUpdate: ({ v: e }) => _.onSceneDragVelocity.dispatch(e),
        onComplete: () => {
          this.velocity = h(this, Js);
        },
      });
    });
  const Pt = new vd();
  class Ar {
    constructor() {
      c(this, "appGL");
      c(this, "sizes");
      c(this, "scale");
      c(this, "position");
      c(this, "rotation");
      c(this, "parentScale");
      c(this, "parentPosition");
      c(this, "parentRotation");
      c(this, "mouse");
      (this.appGL = new ge()),
        (this.sizes = this.appGL.sizes),
        (this.position = E({ x: 0, y: 0, z: 0 })),
        (this.scale = E({ x: 1, y: 1, z: 1 })),
        (this.rotation = xs()),
        (this.parentPosition = E({ x: 0, y: 0, z: 0 })),
        (this.parentScale = E({ x: 1, y: 1, z: 1 })),
        (this.parentRotation = xs()),
        (this.mouse = E());
    }
    onClick(t) {}
    onMouseMove(t) {}
    onMouseEnter(t) {}
    onMouseLeave(t) {}
    onOtherMouseEnter(t) {}
    onOtherMouseLeave(t) {}
    onDrag(t) {}
    setPositionX(t) {
      this.position.initial.x =
        this.position.current.x =
        this.position.target.x =
          t;
    }
    setPositionY(t) {
      this.position.initial.y =
        this.position.current.y =
        this.position.target.y =
          t;
    }
    setPositionZ(t) {
      this.position.initial.z =
        this.position.current.z =
        this.position.target.z =
          t;
    }
    setScaleX(t) {
      this.scale.initial.x = this.scale.current.x = this.scale.target.x = t;
    }
    setScaleY(t) {
      this.scale.initial.y = this.scale.current.y = this.scale.target.y = t;
    }
    setScaleZ(t) {
      this.scale.initial.z = this.scale.current.z = this.scale.target.z = t;
    }
  }
  class zn extends Ar {
    constructor() {
      super();
      c(this, "program");
      c(this, "geometry");
      c(this, "mesh");
      c(this, "parent");
      c(this, "uAlpha");
      c(this, "color");
      (this.uAlpha = 1),
        (this.geometry = this.createGeometry()),
        (this.program = this.createProgram()),
        (this.mesh = this.createMesh()),
        (this.parent = new Tt()),
        this.mesh.setParent(this.parent),
        (this.color = new qe("red"));
    }
    createGeometry() {
      return new Ai(this.appGL.gl, { widthSegments: 32, heightSegments: 32 });
    }
    createProgram() {
      return new fe(this.appGL.gl, {
        vertex: `
            attribute vec2 uv;
            attribute vec3 position;
            uniform mat4 modelViewMatrix;
            uniform mat4 projectionMatrix;
            varying vec2 vUv;
            uniform float uTime;
    
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
        fragment: `
            precision highp float;
            uniform float uAlpha;
            uniform vec3 uColor;
            uniform sampler2D tMap;
            varying vec2 vUv;
            
            void main() {
              gl_FragColor = vec4(uColor, uAlpha);
            }
          `,
        cullFace: !1,
        transparent: !0,
        uniforms: {
          uAlpha: { value: this.uAlpha },
          uTime: { value: 0 },
          uColor: { value: this.color },
        },
      });
    }
    createMesh() {
      return (this.mesh = new vr(this.appGL.gl, {
        geometry: this.geometry,
        program: this.program,
      }));
    }
    loop(e) {
      this.mesh.position.set(R(this.position, e.delta).current),
        this.mesh.scale.set(R(this.scale, e.delta).current),
        this.mesh.rotation.set(R(this.rotation, e.delta).current),
        this.parent.scale.set(R(this.parentScale, e.delta).current),
        this.parent.position.set(R(this.parentPosition, e.delta).current),
        this.parent.rotation.set(R(this.parentRotation, e.delta).current),
        (this.mouse = R(this.mouse, e.delta)),
        (this.program.uniforms.uTime.value = e.time);
    }
    dispose() {
      var e, i;
      this.mesh && this.appGL.scene.instance.removeChild(this.mesh),
        (e = this.geometry) == null || e.remove(),
        (i = this.program) == null || i.remove();
    }
  }
  const _o = (s) =>
      typeof window < "u"
        ? getComputedStyle(document.documentElement).getPropertyValue(s)
        : null,
    kn = (s = "--breakpoint-tablet") =>
      _t(() => window.innerWidth >= parseInt(_o(s))),
    bd = (s = "--breakpoint-tablet") =>
      _t(() => window.innerWidth < parseInt(_o(s))),
    z = () => !kn("--breakpoint-tablet"),
    Sd = () => _t(() => window.innerWidth < window.innerHeight),
    Md = () => _t(() => window.innerWidth > window.innerHeight),
    Id = () => _t(() => window.innerWidth === window.innerHeight);
  var nn, To;
  class Pd extends zn {
    constructor({ color: e, sceneIndex: i, scenesLength: n }) {
      super();
      g(this, nn);
      c(this, "DEBUG_ALPHA");
      c(this, "velocity");
      c(this, "ratio");
      c(this, "sceneIndex");
      c(this, "scenesWithWallLength");
      c(this, "raycasting");
      c(this, "menuIsInTransition");
      c(this, "currentSceneIndex");
      c(this, "currentSceneIndexDeferredPromise");
      c(this, "isFirstRender");
      c(this, "itpPlayIn");
      c(this, "onClick", () => {
        (Pt.velocity = 0.3),
          k.navigateBySceneIndex(this.sceneIndex),
          N.onShow.state && N.hide();
      });
      c(this, "handleSceneChange", (e) => {
        var i;
        this.currentSceneIndexDeferredPromise.resolve(e),
          (this.currentSceneIndex = e),
          this.isFirstRender ||
            ((this.program.uniforms.uAlpha.value = this.DEBUG_ALPHA ?? 1),
            (i = this.itpPlayIn) == null || i.stop()),
          (this.isFirstRender = !1);
      });
      c(this, "handleMenuIsInTransition", (e) => {
        this.menuIsInTransition = e;
      });
      c(this, "handleDragVelocity", (e) => {
        this.velocity.target = e;
      });
      c(this, "loop", (e) => {
        super.loop(e),
          (this.mesh.program.uniforms.uVelocity.value = Sr(
            this.velocity,
            e.delta
          ).current),
          (this.program.uniforms.uTime.value = e.time * 0.004);
      });
      (this.color = e),
        (this.sceneIndex = i),
        (this.scenesWithWallLength = n - 1),
        (this.raycasting = this.appGL.raycasting),
        (this.menuIsInTransition = N.isInTransition.state),
        (this.velocity = Pr(0)),
        (this.scale = this.createILerpScale()),
        (this.position = E({ x: 0, y: 0, z: (this.sceneIndex + 1) * 1e-4 })),
        (this.position.initialSpeed = this.getPositionSpeed()),
        (this.currentSceneIndexDeferredPromise = An()),
        (this.isFirstRender = !0),
        (this.program = this.createProgram()),
        (this.mesh.program = this.program),
        this.appGL.scene.instance.addChild(this.mesh),
        this.raycasting.add(this, "wall"),
        this.initEvents(),
        b(this, nn, To).call(this);
    }
    createILerpScale() {
      return E({
        x: this.appGL.viewport.width * 2,
        y: this.appGL.viewport.height,
        z: 1,
      });
    }
    getPositionSpeed() {
      return z() ? 0.004 : 0.0027;
    }
    createProgram() {
      return new fe(this.appGL.gl, {
        vertex: `
        uniform mat4 projectionMatrix;
        uniform mat4 viewMatrix;
        uniform mat4 modelMatrix;
        attribute vec3 position;
        uniform float uTime;
        uniform float uFrequency;
        uniform float uVelocity;
        const float PI = 3.1415926535897932384626433832795;

        void main() {
          // Position originale du sommet
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);

          // Distortion depends on uVelocity
          float limit = 0.5;
          float force = clamp(uVelocity, -limit, limit);
          float x = sin((modelPosition.y * force - .5) * PI) + 1.;
          // Utilisez mix pour une transition plus douce entre l'ajout et la soustraction
          float directionFactor = mix(1.0, -1.0, step(0.0, uVelocity));
          modelPosition.x += x * directionFactor;

          // Ondulation flopy, depends on uTime
          // Calcul de l'effet d'ondulation
          float amplitude = 0.005; // Amplitude de l'ondulation
          float frequency = uFrequency; // Fréquence de l'ondulation
          float offsetX = sin(modelPosition.y * frequency + uTime*.5) * amplitude;
          float offsetY = sin(modelPosition.x * frequency + uTime*.5) * amplitude;
          // Application de l'effet d'ondulation à la position y
          modelPosition.x += offsetX;

          // Calcul de la position finale du sommet
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectedPosition = projectionMatrix * viewPosition;

          gl_Position = projectedPosition;
        }

      `,
        fragment: `
        precision highp float;
        uniform float uAlpha;
        uniform vec3 uColor;
        void main() {
          gl_FragColor = vec4(uColor, uAlpha);
        }
      `,
        cullFace: !1,
        transparent: !0,
        uniforms: {
          uTime: { value: 0 },
          uVelocity: { value: 0 },
          uAlpha: { value: this.DEBUG_ALPHA ?? 0 },
          uColor: { value: this.color },
          uFrequency: { value: O(1, 15) },
        },
      });
    }
    initEvents() {
      _.onSceneDragVelocity.add(this.handleDragVelocity),
        N.isInTransition.add(this.handleMenuIsInTransition),
        this.appGL.sizes.resizeEmitter.add(this.onResize.bind(this)),
        _.onSceneIndexChange.add(this.handleSceneChange.bind(this));
    }
    removeEvents() {
      _.onSceneDragVelocity.remove(this.handleDragVelocity),
        N.isInTransition.remove(this.handleMenuIsInTransition),
        this.appGL.sizes.resizeEmitter.remove(this.onResize),
        _.onSceneIndexChange.remove(this.handleSceneChange);
    }
    getWallPositionXWhenMenuOpen() {
      const e = this.appGL.viewport.width,
        i = this.appGL.grid.gridColumnWidthPlusGutterGl,
        n = !kn("--breakpoint-tablet"),
        r =
          e * 1.5 -
          (e / (this.scenesWithWallLength - 1.08)) *
            (this.scenesWithWallLength - this.sceneIndex),
        a = e * 1.5 - i * (this.scenesWithWallLength - this.sceneIndex);
      return (
        e * 1.5 -
          (e / 2 / (this.scenesWithWallLength - 1)) *
            (this.scenesWithWallLength - this.sceneIndex),
        n ? r : a
      );
    }
    getWallPositionXWhenMenuClose(e = this.currentSceneIndex) {
      const i = this.appGL.viewport.width,
        n = this.appGL.grid.gridColumnWidthPlusGutterGl,
        r = this.sceneIndex - e,
        a = i * (3 * r - 1.5),
        o = n / 2;
      return a - o;
    }
    setTargetWallInitialPositionX() {
      this.position.target.x = this.getWallPositionXWhenMenuClose();
    }
    setWallToMenuPositionX() {
      this.position.current.x = this.position.target.x =
        this.getWallPositionXWhenMenuOpen();
    }
    setWallToNormalPosition(e = this.currentSceneIndex) {
      this.position.current.x = this.position.target.x =
        this.getWallPositionXWhenMenuClose(e);
    }
    onResize() {
      (this.scale = this.createILerpScale()),
        (this.position.speed = this.getPositionSpeed());
    }
    onMouseMove() {
      if (!this.menuIsInTransition) {
        const i = N.onShow.state ? 0.11 : 0.09;
        this.scale.target.x = this.scale.initial.x + i;
      }
    }
    onMouseLeave() {
      this.menuIsInTransition || (this.scale.target.x = this.scale.initial.x);
    }
    dispose() {
      var e, i;
      super.dispose(),
        (e = this.geometry) == null || e.remove(),
        (i = this.program) == null || i.remove(),
        this.removeEvents();
    }
  }
  (nn = new WeakSet()),
    (To = async function () {
      const e = await this.currentSceneIndexDeferredPromise.promise;
      (this.position.current.x = this.position.target.x =
        this.getWallPositionXWhenMenuClose(e) +
        this.appGL.grid.gridColumnWidthPlusGutterGl / 2),
        (this.itpPlayIn = new q({
          duration: 1500,
          delay: 2e3,
          ease: Ao.outBack,
          props: {
            x: {
              from: this.position.current.x,
              to: this.getWallPositionXWhenMenuClose(e),
            },
          },
          onUpdate: ({ x: i }) => {
            (this.program.uniforms.uAlpha.value = this.DEBUG_ALPHA ?? 1),
              (this.position.current.x = this.position.target.x = i);
          },
        }));
    });
  function Di(s, t, e) {
    let i;
    return function () {
      let n = this,
        r = arguments;
      clearTimeout(i),
        e && !i && s.apply(n, r),
        (i = setTimeout(function () {
          (i = null), e || s.apply(n, r);
        }, t));
    };
  }
  var rn, Oo, an, zo, ei, hr, si, ii;
  class Nt extends Ln {
    constructor({
      assets: e,
      wallColor: i,
      sceneIndex: n,
      scenesLength: r,
      routeName: a,
      log: o,
    }) {
      super();
      g(this, rn);
      g(this, an);
      g(this, ei);
      c(this, "log");
      c(this, "raycasting");
      c(this, "group");
      c(this, "assets");
      c(this, "instances");
      c(this, "sceneIndex");
      c(this, "scenesLength");
      c(this, "currentSceneIndex");
      c(this, "isCurrentScene");
      c(this, "lastSceneIndex");
      c(this, "wallColor");
      c(this, "glWall");
      c(this, "glOverlay");
      c(this, "menuIsOpen");
      c(this, "routeName");
      c(this, "routePath");
      c(this, "isFirstRender");
      c(this, "forceGroupVisible");
      g(this, si, ({ context: e }) => {
        this.isCurrentScene = e.route.path === this.routePath;
      });
      g(this, ii, ({ x: e, y: i }) => {
        if (!this.isCurrentScene) return;
        const n = 0.05;
        (this.rotation.target.x = -i * Math.PI * n),
          (this.rotation.target.y = e * Math.PI * n),
          this.instances.forEach((r) => {
            (r.mouse.target.x = e), (r.mouse.target.y = i);
            const a = 0.0075;
            (r.position.target.x =
              r.position.initial.x + (r.index + 1) * r.mouse.current.x * a),
              (r.position.target.y =
                r.position.initial.y + (r.index + 1) * r.mouse.current.y * a);
          });
      });
      c(this, "loop", (e) => {
        var i, n;
        (this.group.position = R(this.position, e.delta).current),
          (this.group.scale = R(this.scale, e.delta).current),
          (this.group.rotation = R(this.rotation, e.delta).current),
          (this.mouse = R(this.mouse, e.delta));
        for (let r of this.instances) r.loop(e);
        (i = this.glWall) == null || i.loop(e),
          (n = this.glOverlay) == null || n.loop(e),
          this.setGroupVisibility();
      });
      if (
        ((this.assets = this.createInstances(e) ?? e),
        (this.wallColor = i),
        (this.log = o),
        (this.routeName = a),
        (this.isFirstRender = !0),
        (this.routePath = k.instance.routes.find((d) => d.name === a).path),
        (this.isCurrentScene = k.currContext.route.path === this.routePath),
        (this.sceneIndex = n),
        (this.scenesLength = r),
        (this.raycasting = this.appGL.raycasting),
        (this.instances = this.extractInstancesFromAssetsObj(this.assets)),
        this.wallColor)
      ) {
        const d = new qe(this.wallColor);
        this.glWall = new Pd({
          color: d,
          sceneIndex: this.sceneIndex,
          scenesLength: this.scenesLength,
        });
      }
      const [l, u, p] = [100, 0, -0.1];
      (this.position = {
        initial: new P(l, u, p),
        current: new P(l, u, p),
        target: new P(l, u, p),
        initialSpeed: 0.004,
        speed: null,
      }),
        (this.group = new Tt()),
        (this.group.visible = !1);
      for (let d of this.instances) this.group.addChild(d.parent);
      this.group.setParent(this.appGL.scene.instance),
        (this.forceGroupVisible = null),
        b(this, rn, Oo).call(this),
        setTimeout(() => this.afterInit(), 0);
    }
    createInstances(e) {}
    afterInit() {}
    extractInstancesFromAssetsObj(e) {
      return Object.values(e)
        .map((i) => i.instance)
        .filter(Boolean);
    }
    dispose() {
      b(this, an, zo).call(this), this.instances.forEach((e) => e.dispose());
    }
    onResize() {
      this.setScenePosition(),
        this.glWall &&
          (this.menuIsOpen
            ? this.glWall.setWallToMenuPositionX()
            : this.glWall.setWallToNormalPosition());
    }
    handleSceneChange(e) {
      (this.currentSceneIndex = e),
        this.setScenePosition(),
        !this.isFirstRender &&
          this.glWall &&
          this.glWall.setTargetWallInitialPositionX(),
        this.setOverlayUAlpha(),
        (this.isFirstRender = !1),
        (this.lastSceneIndex = e);
    }
    setSceneScale() {}
    setInstancesPosition() {}
    setScenePosition(e) {
      let i = this.appGL.viewport.width;
      (Sd() || Id()) &&
        (bd("--breakpoint-tablet") && (i *= 1.2),
        kn("--breakpoint-tablet") && (i *= 1.6)),
        Md() && (i *= 1.2);
      const n = this.sceneIndex - (this.currentSceneIndex ?? 0);
      (this.position.speed = e ?? (this.isFirstRender ? 0.005 : 0.0025)),
        this.isFirstRender &&
          (this.sceneIndex === this.currentSceneIndex
            ? (this.position.current.x = this.position.target.x = i)
            : (this.position.current.x = this.position.target.x = n * i)),
        (this.position.target.x = n * i),
        this.instances.forEach((r, a) => {
          (r.position.target.x = r.position.initial.x + n * (a + 1) * 0.08),
            (r.position.target.z =
              r.position.initial.z + -Math.abs(n * (z() ? 0.5 : 1)));
        });
    }
    setGroupVisibility() {
      if (this.forceGroupVisible !== null) {
        this.group.visible = this.forceGroupVisible;
        return;
      }
      const e = z() ? 0.3 : 0.75;
      this.group.visible = !(
        this.position.current.x > e || this.position.current.x < -e
      );
    }
    setForceGroupVisible(e) {
      this.forceGroupVisible = e;
    }
    setOverlayUAlpha() {
      if (!this.glOverlay) return;
      const e = this.appGL.viewport.width,
        i = os() ? e * 4 : e * 2,
        n = os() ? e * 2 : e,
        r = Math.abs(this.sceneIndex - this.currentSceneIndex) * i;
      let a = hs(0, r, n);
      this.glOverlay.uAlpha.target = a === n ? 0 : a;
    }
    async firstAppStartDefaultPlayin(e = this.instances) {
      const i = new nt({ paused: !0 });
      for (let n = 0; n < e.length; n++) {
        const r = e[n],
          a = r.program.uniforms.uAlpha.value;
        (r.program.uniforms.uAlpha.value = 0),
          i.add(
            {
              initUpdate: !0,
              props: { z: [-7.5, r.parentPosition.initial.z], a: [0, a] },
              duration: 1300,
              ease: "power3.inOut",
              onUpdate: ({ z: o, a: l }) => {
                (r.parentPosition.current.z = r.parentPosition.target.z = o),
                  (r.program.uniforms.uAlpha.value = l);
              },
            },
            500 + (e.length - n) * 50
          );
      }
      return i.play();
    }
    async playIn() {
      if (this.isCurrentScene && k.isFirstRoute)
        this.firstAppStartDefaultPlayin();
      else return Promise.resolve();
    }
    async playOut() {
      return Promise.resolve();
    }
  }
  (rn = new WeakSet()),
    (Oo = function () {
      gt.add(this.loop, De.GL_RENDER),
        _.onSceneIndexChange.add(this.handleSceneChange.bind(this)),
        this.appGL.sizes.resizeEmitter.add(
          Di(this.onResize.bind(this), 10, !1)
        ),
        this.appGL.mouse.mousePositionEmitter.add(h(this, ii)),
        N.onShow.add(b(this, ei, hr).bind(this)),
        k.onResolve.add(h(this, si).bind(this));
    }),
    (an = new WeakSet()),
    (zo = function () {
      gt.remove(this.loop),
        _.onSceneIndexChange.remove(this.handleSceneChange),
        this.appGL.mouse.mousePositionEmitter.remove(h(this, ii)),
        N.onShow.remove(b(this, ei, hr)),
        k.onResolve.remove(h(this, si));
    }),
    (ei = new WeakSet()),
    (hr = function (e) {
      this.menuIsOpen = e;
    }),
    (si = new WeakMap()),
    (ii = new WeakMap());
  const Ad = `attribute vec2 uv;
attribute vec3 position;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
varying vec2 vUv;
attribute float aRandom;
uniform float uTime;
uniform float uRandomOffset;

void main() {
  vUv = uv;
  vec3 newPosition = position;
  newPosition.y += sin(uTime + aRandom * .02 + uRandomOffset)*.015;
  newPosition.x += cos(uTime*.7 + aRandom * .02 + uRandomOffset)*.015;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
`,
    Ed = `precision highp float;

uniform float uOffset;
uniform float uAlpha;
uniform sampler2D tMap;

varying vec2 vUv;

void main() {
  vec4 texture = texture2D(tMap,vUv);
  texture.a *= uAlpha;
  gl_FragColor = texture;
}
`;
  class Cd extends Ar {
    constructor({
      name: e,
      texture: i,
      index: n,
      position: r,
      ratio: a = 1,
      scale: o = { x: 1 },
    }) {
      var w, v, S, T, C, I;
      super();
      c(this, "name");
      c(this, "program");
      c(this, "geometry");
      c(this, "mesh");
      c(this, "texture");
      c(this, "index");
      c(this, "ratio");
      c(this, "pPosition");
      c(this, "pScale");
      c(this, "randomOffset");
      c(this, "updateInterval", 2e3);
      c(this, "lastUpdate", 0);
      c(this, "itpPlayIn");
      c(this, "itpPlayOut");
      (this.name = e),
        (this.texture = i),
        (this.index = n),
        (this.pPosition = r),
        (this.pScale = o),
        (this.ratio = a);
      const l = (w = this.pScale) == null ? void 0 : w.x,
        u = ((v = this.pScale) == null ? void 0 : v.y) ?? l / this.ratio,
        [p, d] = [l, u];
      this.scale = {
        initial: new P(p, d),
        current: new P(p, d),
        target: new P(p, d),
        initialSpeed: 0.006,
        speed: null,
      };
      const [f, y, x] = [
        ((S = this.pPosition) == null ? void 0 : S.x) ?? 0,
        ((T = this.pPosition) == null ? void 0 : T.y) ?? 0,
        (C = this.pPosition) != null && C.z
          ? ((I = this.pPosition) == null ? void 0 : I.z) * 0.1
          : 0.5,
      ];
      (this.position = {
        initial: new P(f, y, x),
        current: new P(f, y, x),
        target: new P(f, y, x),
        initialSpeed: 0.006,
        speed: null,
      }),
        (this.rotation = {
          initial: new Ge(),
          current: new Ge(),
          target: new Ge(),
          initialSpeed: 0.006,
          speed: null,
        }),
        (this.mouse = {
          initial: new P(),
          current: new P(),
          target: new P(),
          initialSpeed: 0.006,
          speed: null,
        }),
        (this.randomOffset = {
          initial: 0,
          current: 0,
          target: 0,
          initialSpeed: 0.003,
          speed: null,
        }),
        this.init();
    }
    init() {
      (this.geometry = this.createGeometry()),
        (this.program = this.createProgram()),
        (this.mesh = this.createMesh()),
        this.initEvents();
    }
    createGeometry() {
      const e = new Ai(this.appGL.gl),
        i = e.attributes.position.count,
        n = new Float32Array(i);
      for (let r = 0; r < i; r++) n[r] = Math.random();
      return e.addAttribute("aRandom", { data: n }), e;
    }
    createProgram() {
      return new fe(this.appGL.gl, {
        vertex: Ad,
        fragment: Ed,
        cullFace: !1,
        transparent: !0,
        uniforms: {
          tMap: { value: this.texture },
          uOffset: { value: 0 },
          uAlpha: { value: 0 },
          uTime: { value: 0 },
          uRandomOffset: { value: 0 },
        },
      });
    }
    createMesh() {
      return (this.mesh = new vr(this.appGL.gl, {
        geometry: this.geometry,
        program: this.program,
      }));
    }
    initEvents() {}
    removeEvents() {}
    dispose() {
      var e, i, n, r;
      this.mesh && this.appGL.scene.instance.removeChild(this.mesh),
        (e = this.geometry) == null || e.remove(),
        (i = this.program) == null || i.remove(),
        (n = this.itpPlayIn) == null || n.stop(),
        (r = this.itpPlayOut) == null || r.stop(),
        this.removeEvents();
    }
    loop(e) {
      (this.mesh.position = R(this.position, e.delta).current),
        (this.mesh.scale = R(this.scale, e.delta).current),
        (this.mesh.rotation = R(this.rotation, e.delta).current),
        (this.mouse = R(this.mouse, e.delta)),
        e.time - this.lastUpdate > this.updateInterval &&
          ((this.randomOffset.target = this.random(0, 2)),
          (this.lastUpdate = e.time)),
        (this.randomOffset.current = ms(
          this.randomOffset.current,
          this.randomOffset.target,
          this.randomOffset.initialSpeed * e.delta
        )),
        (this.program.uniforms.uRandomOffset.value = this.randomOffset.current),
        (this.program.uniforms.uTime.value = e.time * 0.004);
    }
    playIn() {}
    playOut() {}
    setPosition({
      x: e = this.position.initial.x,
      y: i = this.position.initial.y,
      z: n = this.position.initial.z,
    }) {
      this.position.current = this.position.target = new P(e, i, n);
    }
    random(e, i) {
      return Math.random() * (i - e) + e;
    }
  }
  var Lt;
  class ko extends Ln {
    constructor() {
      super();
      c(this, "assets");
      c(this, "textures");
      c(this, "group");
      c(this, "instances");
      c(this, "loop", (e) => {
        (this.group.position = R(this.position, e.delta).current),
          (this.group.scale = R(this.scale, e.delta).current),
          (this.group.rotation = R(this.rotation, e.delta).current),
          (this.mouse = R(this.mouse, e.delta)),
          this.instances.map((i) => i.loop(e));
      });
      g(this, Lt, void 0);
      c(this, "playOut", (e = 1) => {
        h(this, Lt).stop();
        const i = new nt({ paused: !0 });
        for (let n = 0; n < this.instances.length; n++) {
          const r = this.instances[n];
          i.add(
            {
              initUpdate: !0,
              duration: 800 * e,
              props: { uAlpha: [r.program.uniforms.uAlpha.value, 0] },
              ease: "expo.out",
              onUpdate: ({ uAlpha: a }) => {
                r.program.uniforms.uAlpha.value = a;
              },
            },
            0
          );
        }
        i.add(
          {
            duration: 800 * e,
            ease: "power3.out",
            props: {
              z: {
                from: this.position.initial.z,
                to: this.position.initial.z - 0.3,
              },
            },
            onUpdate: ({ z: n }) => {
              this.position.target.z = n;
            },
          },
          0
        ),
          i.play();
      });
      (this.assets = K.texturesList.logo),
        (this.textures = Object.values(this.assets).map((e) => e.texture)),
        (this.scale = E({ x: 1, y: 1, z: 0.01 })),
        (this.instances = this.createLettersInstances()),
        (this.group = new Tt());
      for (let e of this.instances) this.group.addChild(e.mesh);
      this.group.setParent(this.appGL.scene.instance), this.initEvents();
    }
    dispose() {
      this.removeEvents();
    }
    initEvents() {
      gt.add(this.loop, De.GL_RENDER);
    }
    removeEvents() {
      gt.remove(this.loop);
    }
    createLettersInstances() {
      var e;
      for (let i = 0; i < Object.keys(this.assets).length; i++) {
        const n = Object.keys(this.assets)[i],
          r = this.assets[n];
        this.assets[n].instance = new Cd({
          name: n,
          texture: r.texture,
          index: i,
          ratio: r.ratio,
          scale: r.scale,
          position: {
            ...(r.position || {}),
            z: ((e = r.position) == null ? void 0 : e.z) ?? i * 0.01,
          },
        });
      }
      return Object.values(this.assets).map((i) => i.instance);
    }
    playIn() {
      (this.position.speed = this.position.initialSpeed),
        m(this, Lt, new nt({ paused: !0 }));
      for (let r = 0; r < this.instances.length; r++) {
        const a = this.instances[r],
          o = 0.1,
          l = a.position.initial.y;
        h(this, Lt).add(
          {
            initUpdate: !0,
            duration: 900,
            ease: "expo.inOut",
            props: { y: { from: -0.5, to: l + o }, uAlpha: [0, 1] },
            onUpdate: ({ y: u, uAlpha: p }) => {
              a.setPosition({ y: u }), (a.program.uniforms.uAlpha.value = p);
            },
          },
          r * 50
        ),
          h(this, Lt).add({
            duration: 300,
            ease: "power2.in",
            props: { y: { from: l + o, to: l } },
            onUpdate: ({ y: u }) => {
              a.setPosition({ y: u });
            },
          });
      }
      const e = 100,
        i = 0.3,
        n = 800;
      return (
        h(this, Lt).add(
          {
            duration: n,
            ease: "power3.inOut",
            props: {
              z: {
                from: this.position.initial.z - 0.9,
                to: this.position.initial.z + i,
              },
            },
            onUpdate: ({ z: r }) => {
              this.position.target.z = r;
            },
          },
          e
        ),
        h(this, Lt).add(
          {
            duration: 200,
            ease: "expo.in",
            props: {
              z: {
                from: this.position.initial.z + i,
                to: this.position.initial.z,
              },
            },
            onUpdate: ({ z: r }) => {
              this.position.target.z = r;
            },
          },
          n + e
        ),
        h(this, Lt).play()
      );
    }
    setPosition({
      x: e = this.position.initial.x,
      y: i = this.position.initial.y,
      z: n = this.position.initial.z,
    }) {
      this.position.current = this.position.target = new P(e, i, n);
    }
    setScale({
      x: e = this.scale.initial.x,
      y: i = this.scale.initial.y,
      z: n = this.scale.initial.z,
    }) {
      this.scale.current = this.scale.target = new P(e, i, n);
    }
  }
  Lt = new WeakMap();
  const mt = ({ x: s = 1, y: t = 1, z: e = 1, ratio: i }) => {
      const n = s,
        r = i ? s / i : t;
      return { x: n, y: r, z: e };
    },
    Er = (s) => {
      const t = s.attributes.position.count,
        e = new Float32Array(t);
      for (let i = 0; i < t; i++) e[i] = Math.random();
      s.addAttribute("aRandom", { data: e });
    };
  class pt extends Ar {
    constructor(e) {
      super();
      c(this, "name");
      c(this, "texture");
      c(this, "program");
      c(this, "geometry");
      c(this, "mesh");
      c(this, "index");
      c(this, "parent");
      c(this, "uAlpha");
      (this.name = e.name),
        (this.texture = e.texture),
        (this.index = e.index),
        (this.scale = e.scale ?? E({ x: 1, y: 1, z: 1 })),
        (this.position = e.position ?? E()),
        (this.rotation = e.rotation ?? xs()),
        (this.parentScale = e.parentScale ?? E({ x: 1, y: 1, z: 1 })),
        (this.parentPosition = e.parentPosition ?? E()),
        (this.parentRotation = e.parentRotation ?? xs()),
        (this.mouse = e.mouse ?? E()),
        (this.uAlpha = e.uAlpha ?? 1),
        this.init();
    }
    init() {
      (this.geometry = this.createGeometry()),
        (this.program = this.createProgram()),
        (this.mesh = this.createMesh()),
        (this.parent = new Tt()),
        this.mesh.setParent(this.parent);
    }
    createGeometry() {
      return new Ai(this.appGL.gl, { widthSegments: 32, heightSegments: 32 });
    }
    createProgram() {
      return new fe(this.appGL.gl, {
        vertex: `
        attribute vec2 uv;
        attribute vec3 position;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        uniform float uTime;

        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
        fragment: `
        precision highp float;
        uniform float uAlpha;
        uniform sampler2D tMap;
        varying vec2 vUv;
        
        void main() {
          vec4 texture = texture2D(tMap,vUv);
          texture.a *= uAlpha;
          gl_FragColor = texture;
        }
      `,
        cullFace: !1,
        transparent: !0,
        uniforms: {
          tMap: { value: this.texture },
          uAlpha: { value: this.uAlpha },
          uTime: { value: 0 },
        },
      });
    }
    createMesh() {
      return (this.mesh = new vr(this.appGL.gl, {
        geometry: this.geometry,
        program: this.program,
      }));
    }
    loop(e) {
      this.mesh.position.set(R(this.position, e.delta).current),
        this.mesh.scale.set(R(this.scale, e.delta).current),
        this.mesh.rotation.set(R(this.rotation, e.delta).current),
        this.parent.scale.set(R(this.parentScale, e.delta).current),
        this.parent.position.set(R(this.parentPosition, e.delta).current),
        this.parent.rotation.set(R(this.parentRotation, e.delta).current),
        (this.mouse = R(this.mouse, e.delta)),
        (this.program.uniforms.uTime.value = e.time);
    }
    dispose() {
      var e, i;
      this.mesh && this.appGL.scene.instance.removeChild(this.mesh),
        (e = this.geometry) == null || e.remove(),
        (i = this.program) == null || i.remove();
    }
  }
  class It extends pt {
    constructor(e) {
      super(e);
      c(this, "uMoveForce");
      c(this, "uMoveSpeed");
      (this.uMoveForce = (e == null ? void 0 : e.uMoveForce) ?? 1.9),
        (this.uMoveSpeed = (e == null ? void 0 : e.uMoveSpeed) ?? 1),
        Er(this.geometry),
        (this.program = this.createProgram()),
        (this.mesh.program = this.program);
    }
    createProgram() {
      return new fe(this.appGL.gl, {
        vertex: `
        attribute vec2 uv;
        attribute vec3 position;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        attribute float aRandom;
        uniform float uTime;
        uniform float uRandomOffset;
        uniform float uMoveForce;
        uniform float uMoveSpeed;

        void main() {
          vUv = uv;
          vec3 newPosition = position;
          float moveForce = uMoveForce * .0009;
          float time = (uTime * .002) * uMoveSpeed;
          newPosition.y += sin(time + aRandom * .01 + uRandomOffset) * moveForce;
          newPosition.x += cos(time + aRandom * .01 + uRandomOffset) * moveForce;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
      `,
        fragment: `
        precision highp float;
        uniform float uAlpha;
        uniform sampler2D tMap;
        varying vec2 vUv;
        
        void main() {
          vec4 texture = texture2D(tMap,vUv);
          texture.a *= uAlpha;
          gl_FragColor = texture;
        }
      `,
        cullFace: !1,
        transparent: !0,
        uniforms: {
          tMap: { value: this.texture },
          uAlpha: { value: this.uAlpha },
          uOffset: { value: 0 },
          uTime: { value: 0 },
          uRandomOffset: { value: O(0, 10, 100) },
          uMoveForce: { value: this.uMoveForce },
          uMoveSpeed: { value: this.uMoveSpeed },
        },
      });
    }
  }
  var on, Ro, hn, Go;
  class ws {
    constructor(t, e = 2100) {
      g(this, on);
      g(this, hn);
      c(this, "instances");
      c(this, "isVisibleIndex");
      c(this, "interval");
      c(this, "isRunning", !1);
      c(this, "intervalTime");
      (this.instances = t),
        (this.intervalTime = e),
        (this.isVisibleIndex = 0),
        this.instances.forEach((i, n) => {
          i.mesh.visible = n === 0;
        });
    }
    start() {
      this.isRunning ||
        ((this.isRunning = !0),
        (this.interval = setInterval(() => {
          b(this, hn, Go).call(this);
        }, this.intervalTime)));
    }
    stop() {
      (this.isRunning = !1), this.interval && clearInterval(this.interval);
    }
  }
  (on = new WeakSet()),
    (Ro = function (t = this.isVisibleIndex) {
      return Ya(t + 1, this.instances.length);
    }),
    (hn = new WeakSet()),
    (Go = function () {
      (this.isVisibleIndex = b(this, on, Ro).call(this)),
        (this.instances[this.isVisibleIndex].mesh.visible = !0),
        this.instances
          .filter((t, e) => e !== this.isVisibleIndex)
          .forEach((t) => {
            t.mesh.visible = !1;
          });
    });
  const Ld = B("front:HomeGL");
  class _d extends Nt {
    constructor(e) {
      super({ ...e, log: Ld });
      c(this, "tl");
      c(this, "glLogo");
      c(this, "toggleImageMahe");
    }
    createInstances(e) {
      for (let i = 0; i < Object.keys(e).length; i++) {
        const n = Object.keys(e)[i],
          { scale: r, position: a, texture: o } = e[n];
        e[n].instance = new It({
          name: n,
          texture: o,
          index: i,
          scale: E(
            mt({
              ratio: 1,
              x: (r == null ? void 0 : r.x) ?? 0.9,
              y: (r == null ? void 0 : r.y) ?? null,
              z: (r == null ? void 0 : r.z) ?? 0,
            })
          ),
          position: E({
            x: a == null ? void 0 : a.x,
            y: (a == null ? void 0 : a.y) ?? -0.02,
            z: (a == null ? void 0 : a.z) ?? i * 0.02,
          }),
        });
      }
      return e;
    }
    afterInit() {
      (this.glLogo = new ko()),
        (this.glLogo.position = E({ y: 0.22, z: z() ? -0.5 : -0.4 })),
        this.setSceneScale(),
        this.instances.forEach((i) => (i.program.uniforms.uAlpha.value = 0));
      const e = 500;
      this.toggleImageMahe = new ws(
        [this.assets.mahe1.instance, this.assets.mahe2.instance],
        e * 3
      );
    }
    onResize() {
      this.setSceneScale();
    }
    handleSceneChange(e) {
      (this.currentSceneIndex = e),
        (this.position.target.z = this.position.initial.z - e),
        (this.glLogo.position.target.z = this.glLogo.position.initial.z - e);
    }
    setSceneScale() {
      this.scale.current.x =
        this.scale.current.y =
        this.scale.target.x =
        this.scale.target.y =
          z() ? 0.64 : 0.8;
    }
    setGroupVisibility() {
      this.group.visible = this.currentSceneIndex - this.sceneIndex < 0.8;
    }
    initTl() {
      return new q({
        paused: !0,
        props: { z: [-1, this.position.initial.z], u: [0, 1] },
        duration: 800,
        ease: "power3.in",
        onUpdate: ({ z: e, u: i }) => {
          (this.position.current.x = this.position.target.x = 0),
            (this.position.target.z = e),
            this.instances.forEach(
              (n) => (n.program.uniforms.uAlpha.value = i)
            );
        },
      });
    }
    async playIn() {
      return (
        this.toggleImageMahe.start(),
        this.glLogo.playIn(),
        (this.tl = this.initTl()),
        this.tl.play()
      );
    }
    async playOut() {
      return (
        this.toggleImageMahe.stop(),
        this.glLogo.playOut(0.1),
        (this.tl = this.initTl()),
        this.tl.reverse()
      );
    }
  }
  class Td extends pt {
    constructor(e) {
      super(e);
      c(this, "lerpAlpha");
      c(this, "randomUAlpha");
      c(this, "randomParallaxForce");
      (this.lerpAlpha = Pr(0)),
        (this.randomUAlpha = O(0, 1, 100)),
        (this.randomParallaxForce = O(0, 1, 100)),
        Er(this.geometry),
        (this.program = this.createProgram()),
        (this.mesh.program = this.program);
    }
    createProgram() {
      return new fe(this.appGL.gl, {
        vertex: `
        attribute vec2 uv;
        attribute vec3 position;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        attribute float aRandom;
        uniform float uTime;
        uniform float uRandomOffset;

        void main() {
          vUv = uv;
          float scale = (sin(uTime + uRandomOffset) + 1.0) / 4.0 + 0.4;
          vec3 newPosition = position * scale;
          newPosition.y += sin(uTime + aRandom * .02 + uRandomOffset)*.02;
          newPosition.x += cos(uTime*.7 + aRandom * .02 + uRandomOffset)*.02;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
      `,
        fragment: `
        precision highp float;
        uniform float uAlpha;
        uniform sampler2D tMap;
        varying vec2 vUv;
        
        void main() {
          vec4 texture = texture2D(tMap,vUv);
          texture.a *= uAlpha;
          gl_FragColor = texture;
        }
      `,
        cullFace: !1,
        transparent: !0,
        uniforms: {
          tMap: { value: this.texture },
          uAlpha: { value: 0 },
          uTime: { value: 0 },
          uOffset: { value: 0 },
          uRandomOffset: { value: O(-10, 10, 100) },
        },
      });
    }
    loop(e) {
      super.loop(e),
        (this.program.uniforms.uAlpha.value = Sr(
          this.lerpAlpha,
          e.delta
        ).current),
        (this.program.uniforms.uTime.value = e.time * 0.002);
    }
  }
  class ps extends Ln {
    constructor(e, i) {
      super();
      c(this, "textures");
      c(this, "assets");
      c(this, "group");
      c(this, "instances");
      c(this, "log");
      c(this, "loop", (e) => {
        (this.group.position = R(this.position, e.delta).current),
          (this.group.scale = R(this.scale, e.delta).current),
          (this.group.rotation = R(this.rotation, e.delta).current),
          (this.mouse = R(this.mouse, e.delta)),
          this.instances.map((i) => i.loop(e));
      });
      (this.log = i),
        (this.assets = e),
        (this.textures = Object.values(this.assets).map((n) => n.texture)),
        (this.instances = this.createInstances()),
        (this.group = new Tt()),
        (this.group.visible = !1);
      for (let n of this.instances) this.group.addChild(n.parent);
      this.group.setParent(this.appGL.scene.instance), this.initEvents();
    }
    createInstances() {
      return [];
    }
    initEvents() {
      gt.add(this.loop, De.GL_RENDER),
        this.appGL.mouse.mousePositionEmitter.add(
          this.handleWindowMousePosition.bind(this)
        ),
        this.appGL.sizes.resizeEmitter.add(this.handleResize.bind(this));
    }
    removeEvents() {
      gt.remove(this.loop),
        this.appGL.mouse.mousePositionEmitter.remove(
          this.handleWindowMousePosition
        ),
        this.appGL.sizes.resizeEmitter.remove(this.handleResize);
    }
    handleResize() {}
    handleSceneChange(e, i, n) {}
    handleWindowMousePosition({ x: e, y: i }) {
      this.instances.forEach((n) => {
        (this.mouse.target.x = e), (this.mouse.target.y = i);
        const r = this.instances.length,
          a = Math.abs(n.index / r - 0.5) * 0.3;
        (n.parentPosition.target.x =
          n.parentPosition.initial.x + this.mouse.current.x * a),
          (n.parentPosition.target.y =
            n.parentPosition.initial.y + this.mouse.current.y * a);
      });
    }
    dispose() {
      this.removeEvents();
    }
  }
  const Od = B("front:GLStars");
  class zd extends ps {
    constructor(e = K.texturesList.stars) {
      super(e, Od);
      c(this, "playIn");
      c(this, "isFirstSceneChange");
      (this.isFirstSceneChange = !0), (this.playIn = this.initPlayInTl());
    }
    createInstances() {
      for (let e = 0; e < Object.keys(this.assets).length; e++) {
        const i = Object.keys(this.assets)[e],
          { position: n, texture: r } = this.assets[i];
        this.assets[i].instance = new Td({
          name: i,
          index: e,
          texture: r,
          scale: E(mt({ x: 0.06, ratio: 1 })),
          position: E({ ...n, z: 1e-5 * e }),
          alpha: 0,
        });
      }
      return Object.values(this.assets).map((e) => e.instance);
    }
    handleSceneChange(e, i, n) {
      const r = i - (e ?? 0);
      (this.group.visible = r < 0.5 && r > -0.5),
        n
          ? this.isFirstSceneChange &&
            (this.playIn.stop(),
            this.playIn.play(),
            (this.isFirstSceneChange = !1))
          : (this.isFirstSceneChange = !0),
        this.instances.forEach((a) => {
          (a.position.target.x =
            a.position.initial.x + r * 1.5 * a.randomParallaxForce),
            (a.position.target.y = a.position.initial.y + Math.abs(r * 0.1)),
            (a.position.target.z = -Math.abs(
              a.position.initial.z + r * (a.randomParallaxForce * 2)
            ));
        });
    }
    handleWindowMousePosition({ x: e, y: i }) {
      this.instances.forEach((n) => {
        (this.mouse.target.x = e), (this.mouse.target.y = i);
        const r = this.instances.length,
          a = Math.abs(n.index / r - 0.5) * 0.1;
        (n.position.target.x = n.position.initial.x + this.mouse.current.x * a),
          (n.position.target.y =
            n.position.initial.y + this.mouse.current.y * a);
      });
    }
    initPlayInTl() {
      const e = new nt({ paused: !0 });
      return (
        this.instances.forEach((i, n) => {
          e.add(
            {
              initUpdate: !0,
              duration: 2e3,
              ease: "power4.out",
              props: {
                x: { from: O(-1, 1), to: i.position.initial.x },
                y: { from: O(0, 1), to: i.position.initial.y },
                u: { from: 0, to: 1 },
              },
              beforeStart: ({ x: r, y: a, u: o }) => {
                (i.position.current.x = i.position.target.x = r),
                  (i.position.current.y = i.position.target.y = a),
                  (i.lerpAlpha.initial =
                    i.lerpAlpha.current =
                    i.lerpAlpha.target =
                      o);
              },
              onUpdate: ({ x: r, y: a, u: o }) => {
                (i.position.target.x = r),
                  (i.position.target.y = a),
                  (i.lerpAlpha.target = o);
              },
            },
            n * 100
          );
        }),
        e
      );
    }
  }
  var ln, Fo;
  class kd extends pt {
    constructor() {
      super(...arguments);
      g(this, ln);
    }
    loop(e) {
      super.loop(e),
        (this.rotation.target.z = b(this, ln, Fo).call(this, e.time * 0.0025));
    }
  }
  (ln = new WeakSet()),
    (Fo = function (e, i = -5, n = 5) {
      return ((((Math.sin(e) + 1) / 2) * (n - i) + i) * Math.PI) / 180;
    });
  const Rd = B("front:WakeupGL");
  class Gd extends Nt {
    constructor(e) {
      super({ ...e, log: Rd });
      c(this, "glStars");
      c(this, "glImageToggle");
    }
    createInstances(e) {
      e.toysMobile.GLClass = kd;
      for (let i = 0; i < Object.keys(e).length; i++) {
        const n = Object.keys(e)[i],
          {
            GLClass: r,
            scale: a,
            ratio: o,
            parentPosition: l,
            position: u,
            texture: p,
          } = e[n],
          d = r ?? It;
        e[n].instance = new d({
          name: n,
          texture: p,
          index: i,
          scale: E(
            mt({
              ratio: o ?? 1,
              x: (a == null ? void 0 : a.x) ?? 0.9,
              y: a == null ? void 0 : a.y,
              z: a == null ? void 0 : a.z,
            })
          ),
          position: E({
            x: u == null ? void 0 : u.x,
            y: u == null ? void 0 : u.y,
            z: (u == null ? void 0 : u.z) ?? i * 0.003,
          }),
          parentPosition: E(l),
          uMoveForce: 2,
        });
      }
      return e;
    }
    afterInit() {
      this.setSceneScale(),
        this.setInstancesPosition(),
        (this.glImageToggle = new ws([
          this.assets.mahe1.instance,
          this.assets.mahe2.instance,
        ])),
        (this.glStars = new zd());
    }
    onResize() {
      super.onResize(), this.setSceneScale(), this.setInstancesPosition();
    }
    handleSceneChange(e) {
      super.handleSceneChange(e),
        this.glStars.handleSceneChange(e, this.sceneIndex, this.isCurrentScene),
        this.isCurrentScene
          ? this.glImageToggle.start()
          : this.glImageToggle.stop();
    }
    setSceneScale() {
      this.scale.target.x = this.scale.target.y = z() ? 0.93 : 1.1;
    }
    setInstancesPosition() {
      this.instances.forEach((e) => {
        e.setPositionX(z() ? -this.appGL.viewport.width * 0.07 : 0),
          e.setPositionY(z() ? this.appGL.viewport.width * 0.05 : 0);
      });
    }
  }
  var oe, _e, ni, lr;
  class Fd extends pt {
    constructor(e) {
      super(e);
      g(this, ni);
      g(this, oe, void 0);
      g(this, _e, void 0);
      c(this, "randomParallaxForce");
      m(this, oe, !1), (this.randomParallaxForce = O(0, 0.5, 3));
    }
    playAnim() {
      h(this, oe) || (m(this, oe, !0), b(this, ni, lr).call(this));
    }
    stopAnim() {
      var e;
      m(this, oe, !1),
        (this.program.uniforms.uAlpha.value = 0),
        (e = h(this, _e)) == null || e.stop();
    }
  }
  (oe = new WeakMap()),
    (_e = new WeakMap()),
    (ni = new WeakSet()),
    (lr = async function () {
      var a;
      if (!h(this, oe)) return;
      (a = h(this, _e)) == null || a.stop();
      const e = this.scale.initial.x / this.scale.initial.y,
        i = O(0, 0.05, 2),
        n = this.scale.initial.x + i,
        r = n / e;
      m(
        this,
        _e,
        new q({
          paused: !0,
          ease: "linear",
          duration: 3e3,
          delay: 1e3 + this.index * 300,
          props: {
            px: {
              from: this.position.initial.x,
              to: O(this.position.initial.x, this.position.initial.x + 0.2, 2),
            },
            py: {
              from: this.position.initial.y,
              to: (this.appGL.viewport.height / 2) * O(0.6, 1, 2),
            },
            sx: { from: this.scale.initial.x, to: n },
            sy: { from: this.scale.initial.y, to: r },
            alpha: { from: 0.2, to: 2.5, ease: "linear" },
          },
          beforeStart: () => {
            this.program.uniforms.uAlpha.value = 0;
          },
          onUpdate: ({ px: o, py: l, pz: u, sx: p, sy: d, alpha: f }) => {
            (this.position.current.x = this.position.target.x = o),
              (this.position.current.y = this.position.target.y = l),
              (this.scale.current.x = this.scale.target.x =
                p <= n / 1.5 ? p : n - p / 2),
              (this.scale.current.y = this.scale.target.y =
                d <= r / 1.5 ? d : r - d / 2),
              (this.program.uniforms.uAlpha.value = f <= 1 ? f : 2 - f);
          },
          onComplete: () => {
            this.program.uniforms.uAlpha.value = 0;
          },
        })
      ),
        await h(this, _e).play(),
        b(this, ni, lr).call(this);
    });
  const Dd = B("front:GLBubbles");
  class Bd extends ps {
    constructor(e = K.texturesList.hi) {
      super(e, Dd);
      c(this, "isFirstSceneChange", !0);
      c(this, "handleResize", () => {
        this.instances.forEach((e, i) => {
          e.parentPosition = this.getInstanceParentPosition(i);
        });
      });
    }
    initEvents() {
      super.initEvents(), this.appGL.sizes.resizeEmitter.add(this.handleResize);
    }
    removeEvents() {
      super.removeEvents(),
        this.appGL.sizes.resizeEmitter.remove(this.handleResize);
    }
    createInstances() {
      for (let e = 0; e < Object.keys(this.assets).length; e++) {
        const i = Object.keys(this.assets)[e],
          { position: n, scale: r, texture: a } = this.assets[i],
          o = 5e-4;
        this.assets[i].instance = new Fd({
          uAlpha: 0,
          name: i,
          index: e,
          texture: a,
          scale: E({ x: r.x * o, y: r.y * o }),
          position: E({ ...n }),
          parentPosition: this.getInstanceParentPosition(e),
        });
      }
      return Object.values(this.assets).map((e) => e.instance);
    }
    handleSceneChange(e, i, n) {
      const r = i - (e ?? 0);
      (this.group.visible = r < 0.5 && r > -0.5),
        this.group.visible
          ? this.isFirstSceneChange && (this.isFirstSceneChange = !1)
          : ((this.isFirstSceneChange = !0), this.stop()),
        this.instances.forEach((a) => {
          (a.parentPosition.target.x =
            a.parentPosition.initial.x + r * 4 * a.randomParallaxForce),
            (a.parentPosition.target.y =
              a.parentPosition.initial.y + Math.abs(r * 0.1)),
            (a.parentPosition.target.z = -Math.abs(
              a.parentPosition.initial.z + r * (a.randomParallaxForce * 2)
            ));
        });
    }
    getInstanceParentPosition(e) {
      return E({ x: z() ? 0 : 0.1, y: 0, z: -1e-4 * e });
    }
    start() {
      this.instances.forEach((e) => e.playAnim());
    }
    stop() {
      this.instances.forEach((e) => e.stopAnim());
    }
  }
  var wt, Te, ri, cr, cn, Do, un, Bo;
  class _a extends pt {
    constructor(e) {
      super(e);
      g(this, ri);
      g(this, cn);
      g(this, un);
      g(this, wt, void 0);
      g(this, Te, void 0);
      c(this, "randomParallaxForce");
      (this.randomParallaxForce = O(0, 0.5, 3)),
        m(this, wt, b(this, cn, Do).call(this)),
        m(this, Te, b(this, un, Bo).call(this, h(this, wt))),
        (this.program.uniforms.uAlpha.value = 0.5),
        (this.scale.current.x = this.scale.target.x = 0),
        (this.scale.current.y = this.scale.target.y = 0);
    }
    async playAnim() {
      var e;
      h(this, wt).isPlaying ||
        (await ((e = h(this, wt)) == null ? void 0 : e.play()),
        b(this, ri, cr).call(this));
    }
    stopAnim() {
      var e, i;
      h(this, wt).seek(0),
        (e = h(this, wt)) == null || e.stop(),
        (i = h(this, Te)) == null || i.stop();
    }
  }
  (wt = new WeakMap()),
    (Te = new WeakMap()),
    (ri = new WeakSet()),
    (cr = async function () {
      var e, i;
      await ((e = h(this, Te)) == null ? void 0 : e.reverse()),
        await ((i = h(this, Te)) == null ? void 0 : i.play()),
        b(this, ri, cr).call(this);
    }),
    (cn = new WeakSet()),
    (Do = function () {
      const e = this.scale.initial.x / this.scale.initial.y,
        i = this.scale.initial.x + 0.02,
        n = i / e;
      return (
        m(this, wt, new nt({ paused: !0 })),
        h(this, wt).add({
          ease: "power1.out",
          duration: 5e3,
          props: {
            px: { from: -0.15, to: 0 },
            py: { from: -0.2, to: 0.02 },
            sx: { from: 0, to: i },
            sy: { from: 0, to: n },
            alpha: { from: 0.3, to: 0.65 },
          },
          onUpdate: ({ px: r, py: a, sx: o, sy: l, alpha: u }) => {
            (this.parentPosition.current.x = this.parentPosition.target.x = r),
              (this.parentPosition.current.y = this.parentPosition.target.y =
                a),
              (this.scale.current.x = this.scale.target.x = o),
              (this.scale.current.y = this.scale.target.y = l),
              (this.program.uniforms.uAlpha.value = u);
          },
        }),
        h(this, wt)
      );
    }),
    (un = new WeakSet()),
    (Bo = function (e) {
      return new q({
        paused: !0,
        ease: "power1.in",
        duration: 2500,
        props: { v: [0.65, 1] },
        onUpdate: ({ v: i }) => {
          e.seek(i);
        },
      });
    });
  var pn, $o, dn, Uo;
  class $d {
    constructor(t, e = 700) {
      g(this, pn);
      g(this, dn);
      c(this, "instances");
      c(this, "isVisibleIndex");
      c(this, "interval");
      c(this, "isRunning", !1);
      c(this, "timer");
      (this.instances = t),
        (this.timer = e),
        (this.isVisibleIndex = 0),
        this.instances.forEach((i, n) => (i.mesh.visible = n === 0));
    }
    start() {
      this.isRunning ||
        ((this.isRunning = !0),
        this.instances.forEach((t) => t.playAnim()),
        (this.interval = setInterval(
          () => b(this, dn, Uo).call(this),
          this.timer
        )));
    }
    stop() {
      (this.isRunning = !1),
        this.instances.forEach((t) => t.stopAnim()),
        clearInterval(this.interval);
    }
  }
  (pn = new WeakSet()),
    ($o = function (t = this.isVisibleIndex) {
      return Ya(t + 1, this.instances.length);
    }),
    (dn = new WeakSet()),
    (Uo = function () {
      (this.isVisibleIndex = b(this, pn, $o).call(this)),
        (this.instances[this.isVisibleIndex].mesh.visible = !0),
        this.instances
          .filter((t, e) => e !== this.isVisibleIndex)
          .forEach((t) => {
            t.mesh.visible = !1;
          });
    });
  const Ud = B("front:LaughGL");
  class Nd extends Nt {
    constructor(e) {
      super({ ...e, log: Ud });
      c(this, "glHi");
      c(this, "glShadowManager");
    }
    createInstances(e) {
      (e.oggyOmbre1.GLClass = _a), (e.oggyOmbre2.GLClass = _a);
      for (let i = 0; i < Object.keys(e).length; i++) {
        const n = Object.keys(e)[i],
          {
            GLClass: r,
            scale: a,
            position: o,
            texture: l,
            parentPosition: u,
          } = e[n],
          p = r ?? It;
        e[n].instance = new p({
          name: n,
          texture: l,
          index: i,
          scale: E(
            mt({
              ratio: 1,
              x: (a == null ? void 0 : a.x) ?? 0.9,
              y: a == null ? void 0 : a.y,
              z: a == null ? void 0 : a.z,
            })
          ),
          position: E({
            x: o == null ? void 0 : o.x,
            y: (o == null ? void 0 : o.y) ?? 0.05,
            z: (o == null ? void 0 : o.z) ?? i * 0.002,
          }),
          parentPosition: E(u),
        });
      }
      return e;
    }
    afterInit() {
      this.setSceneScale(),
        this.setInstancesPosition(),
        (this.glHi = new Bd()),
        (this.glShadowManager = new $d([
          this.assets.oggyOmbre1.instance,
          this.assets.oggyOmbre2.instance,
        ]));
    }
    onResize() {
      super.onResize(), this.setSceneScale(), this.setInstancesPosition();
    }
    handleSceneChange(e) {
      var i;
      super.handleSceneChange(e),
        (i = this.glHi) == null ||
          i.handleSceneChange(
            this.currentSceneIndex,
            this.sceneIndex,
            this.isCurrentScene
          );
    }
    setSceneScale() {
      this.scale.target.x = this.scale.target.y = z() ? 0.63 : 0.82;
    }
    setInstancesPosition() {
      this.instances.forEach((e) => {
        e.setPositionX(z() ? -this.appGL.viewport.width * 0.18 : 0);
      });
    }
    async playIn() {
      this.isCurrentScene &&
        k.isFirstRoute &&
        this.firstAppStartDefaultPlayin(),
        setTimeout(() => {
          this.glShadowManager.start(), this.glHi.start();
        }, 1e3);
    }
    async playOut() {
      this.glShadowManager.stop();
    }
  }
  var he, Oe, ai, ur;
  class Vd extends pt {
    constructor(e) {
      super(e);
      g(this, ai);
      g(this, he, void 0);
      g(this, Oe, void 0);
      c(this, "randomParallaxForce");
      m(this, he, !1),
        (this.randomParallaxForce = O(0, 0.5, 3)),
        (this.mesh.visible = !1);
    }
    playAnim() {
      h(this, he) ||
        ((this.mesh.visible = !0), m(this, he, !0), b(this, ai, ur).call(this));
    }
    stopAnim() {
      var e;
      m(this, he, !1),
        (this.mesh.visible = !1),
        (this.program.uniforms.uAlpha.value = 0),
        (e = h(this, Oe)) == null || e.stop();
    }
  }
  (he = new WeakMap()),
    (Oe = new WeakMap()),
    (ai = new WeakSet()),
    (ur = async function () {
      var o;
      if (!h(this, he)) return;
      (o = h(this, Oe)) == null || o.stop();
      const e = this.scale.initial.x / this.scale.initial.y,
        i = z() ? O(-0.1, 0.04, 2) : O(-0.1, 0.07, 2),
        n = this.scale.initial.x + i,
        r = n / e,
        a = (l) =>
          O(this.position.initial.x - l, this.position.initial.x + l, 3);
      m(
        this,
        Oe,
        new q({
          paused: !0,
          ease: "linear",
          duration: 2500,
          delay: 1e3 + this.index * 300,
          props: {
            px: { from: z() ? a(0.15) : a(0.22), to: a(0.2) },
            py: {
              from: this.position.initial.y,
              to: this.appGL.viewport.height * 0.7,
            },
            sx: { from: this.scale.initial.x, to: n },
            sy: { from: this.scale.initial.y, to: r },
            alpha: { from: this.uAlpha - 0.1, to: this.uAlpha, ease: "linear" },
          },
          beforeStart: () => {
            this.program.uniforms.uAlpha.value = 0;
          },
          onUpdate: ({ px: l, py: u, sx: p, sy: d, alpha: f }) => {
            (this.position.current.x = this.position.target.x = l),
              (this.position.current.y = this.position.target.y = u),
              (this.scale.current.x = this.scale.target.x = p),
              (this.scale.current.y = this.scale.target.y = d),
              (this.program.uniforms.uAlpha.value = f);
          },
        })
      ),
        await h(this, Oe).play(),
        b(this, ai, ur).call(this);
    });
  function Wd() {
    const s = window.navigator.userAgent;
    return s.includes("Safari") && !s.includes("Chrome");
  }
  const Cr = () => Wd() || Eh(),
    jd = B("front:GLBubbles");
  class qd extends ps {
    constructor(e = K.texturesList.bubbles) {
      super(e, jd);
      c(this, "isFirstSceneChange", !0);
    }
    createInstances() {
      for (let e = 0; e < Object.keys(this.assets).length; e++) {
        const i = Object.keys(this.assets)[e],
          { position: n, texture: r } = this.assets[i];
        this.assets[i].instance = new Vd({
          name: i,
          index: e,
          texture: r,
          scale: E(mt({ x: 0.085, ratio: 1 })),
          position: E({ ...n, z: 1e-5 * e }),
          parentPosition: E({ x: 0, y: 0, z: -0.1 }),
          uAlpha: Cr() ? 0.2 : 1,
        });
      }
      return Object.values(this.assets).map((e) => e.instance);
    }
    handleSceneChange(e, i, n) {
      const r = i - (e ?? 0);
      (this.group.visible = r < 0.5 && r > -0.5),
        this.group.visible
          ? this.isFirstSceneChange && (this.isFirstSceneChange = !1)
          : ((this.isFirstSceneChange = !0), this.stop()),
        this.instances.forEach((a) => {
          (a.parentPosition.target.x =
            a.parentPosition.initial.x + r * 4 * a.randomParallaxForce),
            (a.parentPosition.target.y =
              a.parentPosition.initial.y + Math.abs(r * 0.1)),
            (a.parentPosition.target.z = -Math.abs(
              0.1 - a.parentPosition.initial.z + r * (a.randomParallaxForce * 2)
            ));
        });
    }
    start() {
      this.instances.forEach((e) => e.playAnim());
    }
    stop() {
      this.instances.forEach((e) => e.stopAnim());
    }
  }
  class Xd extends pt {
    constructor(t) {
      super(t), (this.program.uniforms.uAlpha = { value: Cr() ? 0.5 : 1 });
    }
    calcForce(t, e = -5, i = 15) {
      return ((((Math.sin(t * 0.001) + 1) / 2) * (i - e) + e) * Math.PI) / 180;
    }
    loop(t) {
      super.loop(t),
        (this.scale.target.x =
          this.scale.initial.x + this.calcForce(t.time) * 0.5),
        (this.scale.target.y =
          this.scale.initial.y + this.calcForce(t.time) * 0.5);
    }
  }
  const Hd = B("front:BathGL");
  class Yd extends Nt {
    constructor(e) {
      super({ ...e, log: Hd });
      c(this, "glBubbles");
      c(this, "glImageToggle");
    }
    createInstances(e) {
      e.vapeur.GLClass = Xd;
      for (let i = 0; i < Object.keys(e).length; i++) {
        const n = Object.keys(e)[i],
          { GLClass: r, scale: a, position: o, texture: l } = e[n],
          u = r ?? It;
        e[n].instance = new u({
          name: n,
          texture: l,
          index: i,
          scale: E(
            mt({
              ratio: 1,
              x: (a == null ? void 0 : a.x) ?? 0.9,
              y: a == null ? void 0 : a.y,
              z: a == null ? void 0 : a.z,
            })
          ),
          position: E({
            x: o == null ? void 0 : o.x,
            y: o == null ? void 0 : o.y,
            z: (o == null ? void 0 : o.z) ?? i * 0.002,
          }),
        });
      }
      return e;
    }
    afterInit() {
      this.setSceneScale(),
        this.setInstancesPosition(),
        (this.glBubbles = new qd()),
        (this.glImageToggle = new ws(
          [this.assets.mahe1.instance, this.assets.mahe2.instance],
          100
        ));
    }
    onResize() {
      super.onResize(), this.setSceneScale(), this.setInstancesPosition();
    }
    handleSceneChange(e) {
      super.handleSceneChange(e),
        this.glBubbles.handleSceneChange(
          e,
          this.sceneIndex,
          this.isCurrentScene
        );
    }
    setSceneScale() {
      this.scale.target.x = this.scale.target.y = z() ? 0.8 : 1.15;
    }
    setInstancesPosition() {
      this.instances.forEach((e) => {
        e.setPositionX(z() ? -this.appGL.viewport.width * 0.05 : 0),
          e.setPositionY(z() ? 0 : 0.02);
      });
    }
    async playIn() {
      this.glImageToggle.start(),
        this.isCurrentScene && k.isFirstRoute
          ? (this.firstAppStartDefaultPlayin(),
            setTimeout(() => this.glBubbles.start(), 400))
          : this.glBubbles.start();
    }
    async playOut() {
      this.glImageToggle.stop();
    }
  }
  class Kd extends zn {
    constructor() {
      super();
      c(this, "menuIsOpen");
      c(this, "glLogo");
      c(this, "onResize", () => {
        (this.scale = this.initScale()),
          this.menuIsOpen
            ? this.setToMenuOpenPosition()
            : this.seToMenuClosePosition(),
          this.setGLLogoScaleAndPosition();
      });
      c(this, "handleMenuOpen", (e) => {
        this.menuIsOpen = e;
      });
      c(this, "loop", (e) => {
        super.loop(e);
      });
      (this.scale = this.initScale()),
        (this.position = this.initPosition()),
        this.appGL.scene.instance.addChild(this.mesh),
        (this.program.uniforms.uColor = {
          value: new qe(ls("--color-bg-menu")),
        }),
        (this.glLogo = new ko()),
        (this.glLogo.position = E({ z: 5e-4 })),
        this.setGLLogoScaleAndPosition(),
        this.initEvents();
    }
    initScale(e = -this.appGL.viewport.width, i = 1, n = 1) {
      return {
        initial: new P(e, i, n),
        current: new P(e, i, n),
        target: new P(e, i, n),
        initialSpeed: 0.006,
        speed: null,
      };
    }
    initPosition() {
      const [e, i, n] = [-this.appGL.viewport.width * 2, 0, 2e-5];
      return {
        initial: new P(e, i, n),
        current: new P(e, i, n),
        target: new P(e, i, n),
        initialSpeed: 0.03,
        speed: null,
      };
    }
    initEvents() {
      this.appGL.sizes.resizeEmitter.add(Di(this.onResize, 80, !1)),
        N.onShow.add(this.handleMenuOpen),
        gt.add(this.loop, De.GL_RENDER);
    }
    removeEvents() {
      this.appGL.sizes.resizeEmitter.remove(this.onResize),
        N.onShow.remove(this.handleMenuOpen),
        gt.remove(this.loop);
    }
    seToMenuClosePosition() {
      this.position.target.x = -this.appGL.viewport.width * 2;
    }
    setToMenuOpenPosition() {
      this.position.target.x = 0;
    }
    setGLLogoScaleAndPosition() {
      const e = !kn("--breakpoint-tablet"),
        i = e ? 0.8 : 0.6;
      this.glLogo.setScale({
        x: this.glLogo.scale.initial.x * i,
        y: this.glLogo.scale.initial.y * i,
      });
      const n = this.appGL.viewport.width / this.appGL.viewport.height,
        r = Object.keys(_.scenes).length - 1,
        { gridColumnNumber: a } = this.appGL.grid,
        o = a - r,
        l = a / o,
        u = -0.31 * (n / l);
      this.glLogo.setPosition({
        x: e ? 0 : u,
        z: e ? 0.1 : this.glLogo.scale.initial.z,
      });
    }
    playIn() {
      (this.position.target.x = 0), this.glLogo.playIn();
    }
    playOut(e = this.position.speed) {
      (this.position.speed = e ?? this.position.initialSpeed),
        (this.position.target.x = this.position.initial.x),
        this.glLogo.playOut(1);
    }
    dispose() {
      var e, i;
      this.mesh && this.appGL.scene.instance.removeChild(this.mesh),
        (e = this.geometry) == null || e.remove(),
        (i = this.program) == null || i.remove(),
        this.removeEvents();
    }
  }
  var ss, le, oi, pr;
  class Zd extends pt {
    constructor(e) {
      super(e);
      g(this, oi);
      g(this, ss, void 0);
      g(this, le, void 0);
      c(this, "play");
      (this.play = !1), (this.mesh.visible = !1);
    }
    playSplashAnim() {
      this.play ||
        ((this.mesh.visible = !0),
        (this.play = !0),
        b(this, oi, pr).call(this));
    }
    stopSplashAnim() {
      var e, i;
      (this.play = !1),
        (this.mesh.visible = !1),
        (e = h(this, ss)) == null || e.stop(),
        (i = h(this, le)) == null || i.stop();
    }
  }
  (ss = new WeakMap()),
    (le = new WeakMap()),
    (oi = new WeakSet()),
    (pr = function () {
      var l, u;
      (l = h(this, ss)) == null || l.stop(),
        (u = h(this, le)) == null || u.stop();
      const e = this.scale.initial.x / this.scale.initial.y,
        i = O(1, 2, 3),
        n = O(0.05, 0.09, 3),
        r = O(0.1, 1, 3),
        a = {
          x: { from: r, to: n, local: null },
          y: { from: r, to: (n / e) * O(1, 1.5, 3), local: null },
        },
        o = {
          x: {
            from: O(-1, 1, 3),
            to: z() ? O(-0.25, 0.25, 3) : O(-0.5, 0.5, 3),
            local: null,
          },
          y: { from: O(5, 8, 100), to: O(-0.35, 0.35, 3), local: null },
          z: { from: -40, to: this.position.initial.z, local: null },
        };
      m(
        this,
        ss,
        new q({
          initUpdate: !0,
          ease: "power4.in",
          duration: 3e3,
          delay: O(0, 1e4),
          props: {
            sx: { from: a.x.from, to: a.x.to },
            sy: { from: a.y.from, to: a.y.to },
            px: { from: o.x.from, to: o.x.to },
            py: { from: o.y.from, to: o.y.to },
            pz: { from: o.z.from, to: o.z.to },
            a: { from: 0, to: 1, ease: "power3.in" },
          },
          onUpdate: ({ sx: p, sy: d, px: f, py: y, pz: x, a: w }) => {
            (a.x.local = this.scale.current.x = this.scale.target.x = p),
              (a.y.local = this.scale.current.y = this.scale.target.y = d),
              (o.x.local =
                this.position.current.x =
                this.position.target.x =
                  f),
              (o.y.local =
                this.position.current.y =
                this.position.target.y =
                  y),
              (o.z.local =
                this.parentPosition.current.z =
                this.parentPosition.target.z =
                  x),
              (this.program.uniforms.uAlpha.value = w);
          },
          onComplete: ({ sx: p, sy: d }) => {
            (a.x.local = this.scale.current.x = this.scale.target.x = p * i),
              (a.y.local = this.scale.current.y = this.scale.target.y = d * i);
            const f = O(0.01, 0.05, 3),
              y = O(4, 5, 0);
            m(this, le, new nt()),
              h(this, le).add({
                duration: 700,
                ease: "power3.out",
                props: {
                  sx: { from: a.x.local, to: a.x.local + f },
                  sy: { from: a.y.local, to: a.y.local + f },
                },
                onUpdate: ({ sx: x, sy: w }) => {
                  (a.x.local = this.scale.current.x = this.scale.target.x = x),
                    (a.y.local =
                      this.scale.current.y =
                      this.scale.target.y =
                        w);
                },
              }),
              h(this, le).add({
                ease: "power2.inOut",
                duration: 1e3 * y,
                props: {
                  sy: {
                    from: () => a.y.local + f,
                    to: () => (a.y.local + f) * y,
                  },
                  py: { from: () => o.y.local, to: o.y.local - y * 0.3 },
                  uAlpha: { from: 1, to: 0, ease: "power3.in" },
                },
                onUpdate: ({ sy: x, py: w, uAlpha: v }) => {
                  (a.y.local = this.scale.current.y = this.scale.target.y = x),
                    (o.y.local =
                      this.position.current.y =
                      this.position.target.y =
                        w),
                    (this.program.uniforms.uAlpha.value = v);
                },
                onComplete: () => {
                  (this.play = !1), b(this, oi, pr).call(this);
                },
              });
          },
        })
      );
    });
  const Qd = B("front:GLStains");
  class Jd extends ps {
    constructor(e = K.texturesList.stains) {
      super(e, Qd);
      c(this, "isFirstSceneChange", !0);
    }
    initEvents() {
      super.initEvents(), N.onShow.add(this.handleMenuOpen.bind(this));
    }
    removeEvents() {
      super.removeEvents(), N.onShow.remove(this.handleMenuOpen);
    }
    handleMenuOpen(e) {
      this.group.visible = !e;
    }
    createInstances() {
      for (let e = 0; e < Object.keys(this.assets).length; e++) {
        const i = Object.keys(this.assets)[e],
          { position: n, scale: r, texture: a } = this.assets[i];
        this.assets[i].instance = new Zd({
          name: i,
          index: e,
          texture: a,
          scale: E({ x: r.x * 0.001, y: r.y * 0.001 }),
          position: E({ ...n, z: -0.001 * e }),
          uAlpha: 0,
        });
      }
      return Object.values(this.assets).map((e) => e.instance);
    }
    handleSceneChange(e, i, n) {
      const r = i - (e ?? 0);
      (this.group.visible = r < 0.5 && r > -0.5),
        this.group.visible
          ? this.isFirstSceneChange && (this.isFirstSceneChange = !1)
          : ((this.isFirstSceneChange = !0), this.stop());
    }
    handleWindowMousePosition({ x: e, y: i }) {}
    start() {
      this.instances.forEach((e) => e.playSplashAnim());
    }
    stop() {
      this.instances.forEach((e) => e.stopSplashAnim());
    }
  }
  var fn, No, Ba;
  let tf =
    ((Ba = class extends It {
      constructor() {
        super(...arguments);
        g(this, fn);
      }
      loop(e) {
        super.loop(e),
          (this.rotation.target.z = b(this, fn, No).call(
            this,
            e.time * 0.0025
          ));
      }
    }),
    (fn = new WeakSet()),
    (No = function (e, i = -3, n = 3) {
      return ((((Math.sin(e) + 1) / 2) * (n - i) + i) * Math.PI) / 180;
    }),
    Ba);
  const ef = B("front:MealGL");
  class sf extends Nt {
    constructor(e) {
      super({ ...e, log: ef });
      c(this, "glStains");
    }
    createInstances(e) {
      e.lampe.GLClass = tf;
      for (let i = 0; i < Object.keys(e).length; i++) {
        const n = Object.keys(e)[i],
          {
            scale: r,
            position: a,
            ratio: o,
            parentPosition: l,
            texture: u,
          } = e[n],
          p = e[n].GLClass ?? It;
        e[n].instance = new p({
          name: n,
          texture: u,
          index: i,
          scale: E(
            mt({
              ratio: o,
              x: (r == null ? void 0 : r.x) ?? 0.9,
              y: r == null ? void 0 : r.y,
              z: r == null ? void 0 : r.z,
            })
          ),
          position: E({
            x: a == null ? void 0 : a.x,
            y: (a == null ? void 0 : a.y) ?? 0.02,
            z: (a == null ? void 0 : a.z) ?? i * 0.002,
          }),
          parentPosition: E(l),
        });
      }
      return e;
    }
    afterInit() {
      this.setSceneScale(),
        this.setInstancesPosition(),
        (this.glStains = new Jd());
    }
    onResize() {
      super.onResize(), this.setSceneScale(), this.setInstancesPosition();
    }
    handleSceneChange(e) {
      var i;
      super.handleSceneChange(e),
        (i = this.glStains) == null ||
          i.handleSceneChange(e, this.sceneIndex, this.isCurrentScene);
    }
    setSceneScale() {
      this.scale.target.x = this.scale.target.y = z() ? 0.65 : 0.85;
    }
    setInstancesPosition() {
      this.instances.forEach((e) => {
        e.setPositionX(z() ? 0 : this.appGL.viewport.width / 4.5);
      });
    }
    async playIn() {
      this.isCurrentScene && k.isFirstRoute
        ? (this.firstAppStartDefaultPlayin(),
          setTimeout(() => this.glStains.start(), 500))
        : this.glStains.start();
    }
    async playOut() {}
  }
  var ze, is, ce, gn, Vo, hi, dr;
  class Ta extends pt {
    constructor(e) {
      super(e);
      g(this, gn);
      g(this, hi);
      g(this, ze, void 0);
      g(this, is, void 0);
      g(this, ce, void 0);
      (this.mesh.visible = !1),
        (this.program.uniforms.uAlpha.value = Cr() ? 0.3 : 0.5),
        m(this, is, b(this, gn, Vo).call(this));
    }
    async playAnim() {
      h(this, ze) ||
        ((this.mesh.visible = !0),
        m(this, ze, !0),
        await h(this, is).play(),
        b(this, hi, dr).call(this));
    }
    stopAnim() {
      var e, i;
      (this.mesh.visible = !1),
        m(this, ze, !1),
        (e = h(this, is)) == null || e.stop(),
        (i = h(this, ce)) == null || i.stop();
    }
  }
  (ze = new WeakMap()),
    (is = new WeakMap()),
    (ce = new WeakMap()),
    (gn = new WeakSet()),
    (Vo = function () {
      const i = (this.position.initial.x < 0 ? 45 : -45) * (Math.PI / 180);
      return new q({
        paused: !0,
        ease: "power2.out",
        duration: 2e3,
        initUpdate: !0,
        props: {
          a: { from: 0, to: this.program.uniforms.uAlpha.value },
          sx: { from: this.scale.current.x, to: this.scale.initial.x },
          sy: { from: 0, to: this.scale.initial.y * 1.1 },
          rz: { from: 0, to: i },
        },
        onUpdate: ({ a: n, sx: r, sy: a, rz: o }) => {
          (this.program.uniforms.uAlpha.value = n),
            (this.scale.current.x = this.scale.target.x = r),
            (this.scale.current.y = this.scale.target.y = a),
            (this.rotation.current.z = this.rotation.target.z = o);
        },
      });
    }),
    (hi = new WeakSet()),
    (dr = async function () {
      var a;
      if (!h(this, ze)) return;
      (a = h(this, ce)) == null || a.stop();
      const i =
          (this.position.initial.x < 0 ? O(0, 40, 2) : O(-40, -0, 2)) *
          (Math.PI / 180),
        n = O(this.scale.initial.x, this.scale.initial.x + Math.abs(i), 3),
        r = O(this.scale.initial.y, this.scale.initial.y + Math.abs(i), 3);
      m(
        this,
        ce,
        new q({
          ease: "power2.inOut",
          duration: O(2500, 4e3),
          props: {
            rz: { from: this.rotation.current.z, to: i },
            a: {
              from: this.program.uniforms.uAlpha.value,
              to: O(
                this.program.uniforms.uAlpha.value,
                this.program.uniforms.uAlpha.value + 0.1,
                3
              ),
            },
            sx: { from: this.scale.current.x, to: n },
            sy: { from: this.scale.current.y, to: r },
          },
          onUpdate: ({ rz: o, sx: l, sy: u, a: p }) => {
            (this.rotation.current.z = this.rotation.target.z = o),
              (this.scale.current.x = this.scale.target.x = l),
              (this.scale.current.y = this.scale.target.y = u),
              (this.program.uniforms.uAlpha.value = p);
          },
        })
      ),
        await h(this, ce).play(),
        await h(this, ce).reverse(),
        b(this, hi, dr).call(this);
    });
  class nf {
    constructor(t) {
      c(this, "instances");
      this.instances = t;
    }
    start() {
      this.instances.forEach((t) => t.playAnim());
    }
    stop() {
      this.instances.forEach((t) => t.stopAnim());
    }
  }
  var ue, li, fr, mn, Wo, yn, jo;
  class Oa extends pt {
    constructor(e) {
      super(e);
      g(this, li);
      g(this, mn);
      g(this, yn);
      g(this, ue, void 0);
      m(this, ue, b(this, yn, jo).call(this));
    }
    playAnim() {
      h(this, ue).isPlaying || b(this, li, fr).call(this);
    }
    stopAnim() {
      h(this, ue).isPlaying && b(this, mn, Wo).call(this);
    }
  }
  (ue = new WeakMap()),
    (li = new WeakSet()),
    (fr = async function () {
      await h(this, ue).play(), b(this, li, fr).call(this);
    }),
    (mn = new WeakSet()),
    (Wo = function () {
      h(this, ue).stop();
    }),
    (yn = new WeakSet()),
    (jo = function ({
      force: e = 0.05,
      duration: i = 0.5,
      delayBetweenLoops: n = 500,
    } = {}) {
      const r = new nt({ paused: !0 }),
        a = this.scale.initial.x / this.scale.initial.y,
        o = this.scale.initial.x,
        l = this.scale.initial.y,
        u = o + e,
        p = u / a;
      for (let d = 0; d < 2; d++)
        r.add(
          {
            ease: "expo.in",
            duration: 350 * i,
            props: { sx: [o, u], sy: [l, p] },
            onUpdate: ({ sx: f, sy: y }) => {
              (this.scale.current.x = this.scale.target.x = f),
                (this.scale.current.y = this.scale.target.y = y);
            },
          },
          d === 0 ? `${n}` : "0"
        ),
          r.add({
            ease: "expo.out",
            duration: 500 * i,
            props: { sx: [u, o], sy: [p, l] },
            onUpdate: ({ sx: f, sy: y }) => {
              (this.scale.current.x = this.scale.target.x = f),
                (this.scale.current.y = this.scale.target.y = y);
            },
          });
      return r;
    });
  class rf {
    constructor(t) {
      c(this, "instances");
      this.instances = t;
    }
    start() {
      this.instances.forEach((t) => t.playAnim());
    }
    stop() {
      this.instances.forEach((t) => t.stopAnim());
    }
  }
  const af = B("front:ConcertGL");
  class of extends Nt {
    constructor(e) {
      super({ ...e, log: af });
      c(this, "glSpotsManager");
      c(this, "glBoomBoxManager");
    }
    createInstances(e) {
      (e.spot01.GLClass = Ta),
        (e.spot02.GLClass = Ta),
        (e.ampli01.GLClass = Oa),
        (e.ampli02.GLClass = Oa);
      for (let i = 0; i < Object.keys(e).length; i++) {
        const n = Object.keys(e)[i],
          {
            scale: r,
            position: a,
            texture: o,
            parentPosition: l,
            GLClass: u,
            ratio: p,
          } = e[n],
          d = u ?? It;
        e[n].instance = new d({
          name: n,
          texture: o,
          index: i,
          scale: E(
            mt({
              ratio: p ?? 1,
              x: (r == null ? void 0 : r.x) ?? 0.9,
              y: r == null ? void 0 : r.y,
              z: r == null ? void 0 : r.z,
            })
          ),
          position: E({
            x: a == null ? void 0 : a.x,
            y: (a == null ? void 0 : a.y) ?? 0.05,
            z: (a == null ? void 0 : a.z) ?? i * 0.003,
          }),
        });
      }
      return e;
    }
    afterInit() {
      (this.glSpotsManager = new nf([
        this.assets.spot01.instance,
        this.assets.spot02.instance,
      ])),
        (this.glBoomBoxManager = new rf([
          this.assets.ampli01.instance,
          this.assets.ampli02.instance,
        ])),
        this.setSceneScale();
    }
    onResize() {
      super.onResize(), this.setSceneScale();
    }
    handleSceneChange(e) {
      super.handleSceneChange(e);
    }
    setSceneScale() {
      this.scale.target.x = this.scale.target.y = z() ? 0.63 : 0.8;
    }
    async firstAppStartDefaultPlayin(e = this.instances) {
      const i = new nt({ paused: !0 });
      for (let n = 0; n < e.length; n++) {
        const r = e[n],
          a = r.program.uniforms.uAlpha.value;
        (r.program.uniforms.uAlpha.value = 0),
          i.add(
            {
              initUpdate: !0,
              props: { z: [-7.5, r.parentPosition.initial.z], a: [0, a] },
              duration: 1300,
              ease: "power3.inOut",
              onUpdate: ({ z: o, a: l }) => {
                (r.parentPosition.current.z = r.parentPosition.target.z = o),
                  (r.program.uniforms.uAlpha.value = l);
              },
            },
            500 + (e.length - n) * 50
          );
      }
      return i.play();
    }
    async playIn() {
      const e = this.isCurrentScene && k.isFirstRoute;
      if (e) {
        const i = this.instances.filter((n) => !n.name.includes("spot"));
        this.firstAppStartDefaultPlayin(i);
      }
      setTimeout(
        () => {
          this.glSpotsManager.start(), this.glBoomBoxManager.start();
        },
        e ? 1500 : 0
      );
    }
    async playOut() {
      this.glSpotsManager.stop(), this.glBoomBoxManager.stop();
    }
  }
  class hf extends pt {
    constructor(e) {
      super(e);
      c(this, "lerpAlpha");
      c(this, "randomUAlpha");
      c(this, "randomParallaxForce");
      (this.lerpAlpha = Pr(0)),
        (this.randomUAlpha = O(0, 1, 100)),
        (this.randomParallaxForce = O(0, 1, 100)),
        Er(this.geometry),
        (this.program = this.createProgram()),
        (this.mesh.program = this.program);
    }
    createProgram() {
      return new fe(this.appGL.gl, {
        vertex: `
        attribute vec2 uv;
        attribute vec3 position;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        attribute float aRandom;
        uniform float uTime;
        uniform float uRandomOffset;

        void main() {
          vUv = uv;
          float scale = (sin(uTime + uRandomOffset) + 1.0) / 10. + 0.9;
          vec3 newPosition = position * scale;
          newPosition.y += sin(uTime + aRandom * .02 + uRandomOffset)*.01;
          newPosition.x += cos(uTime*.7 + aRandom * .02 + uRandomOffset)*.01;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
      `,
        fragment: `
        precision highp float;
        uniform float uAlpha;
        uniform sampler2D tMap;
        varying vec2 vUv;
        
        void main() {
          vec4 texture = texture2D(tMap,vUv);
          texture.a *= uAlpha;
          gl_FragColor = texture;
        }
      `,
        cullFace: !1,
        transparent: !0,
        uniforms: {
          tMap: { value: this.texture },
          uAlpha: { value: 0 },
          uTime: { value: 0 },
          uOffset: { value: 0 },
          uRandomOffset: { value: O(-10, 10, 100) },
        },
      });
    }
    loop(e) {
      super.loop(e),
        (this.program.uniforms.uAlpha.value = Sr(
          this.lerpAlpha,
          e.delta
        ).current),
        (this.program.uniforms.uTime.value = e.time * 0.002);
    }
  }
  const lf = B("front:GLDeadStars");
  class cf extends ps {
    constructor(e = K.texturesList.deadStars) {
      super(e, lf);
      c(this, "playInTl");
      c(this, "isFirstSceneChange");
      (this.isFirstSceneChange = !0), (this.playInTl = this.initPlayInTl());
    }
    createInstances() {
      for (let e = 0; e < Object.keys(this.assets).length; e++) {
        const i = Object.keys(this.assets)[e],
          {
            position: n,
            texture: r,
            scale: a,
            desktopPosition: o,
          } = this.assets[i];
        this.assets[i].instance = new hf({
          name: i,
          index: e,
          texture: r,
          scale: E(mt({ x: 0.03, ratio: 1.6 })),
          position: E({ ...(z() ? n : o), z: 1e-5 * e }),
          alpha: 0,
        });
      }
      return Object.values(this.assets).map((e) => e.instance);
    }
    handleResize() {
      for (let e = 0; e < Object.keys(this.assets).length; e++) {
        const {
          instance: i,
          position: n,
          desktopPosition: r,
        } = this.assets[Object.keys(this.assets)[e]];
        i.position = E({ ...(z() ? n : r), z: 1e-5 * e });
      }
    }
    handleSceneChange(e, i, n) {
      const r = i - (e ?? 0);
      (this.group.visible = n),
        n
          ? this.isFirstSceneChange && (this.isFirstSceneChange = !1)
          : (this.playInTl.stop(), (this.isFirstSceneChange = !0)),
        this.instances.forEach((a) => {
          (a.position.target.x =
            a.position.initial.x + r * 1.5 * a.randomParallaxForce),
            (a.position.target.y = a.position.initial.y + Math.abs(r * 0.1)),
            (a.position.target.z = -Math.abs(
              a.position.initial.z + r * (a.randomParallaxForce * 2)
            ));
        });
    }
    handleWindowMousePosition({ x: e, y: i }) {
      this.instances.forEach((n) => {
        (this.mouse.target.x = e), (this.mouse.target.y = i);
        const r = this.instances.length,
          a = Math.abs(n.index / r - 0.5) * 0.1;
        (n.position.target.x = n.position.initial.x + this.mouse.current.x * a),
          (n.position.target.y =
            n.position.initial.y + this.mouse.current.y * a);
      });
    }
    initPlayInTl() {
      const e = new nt({ paused: !0 });
      return (
        [...Sh(this.instances)].forEach((n, r) => {
          e.add(
            {
              initUpdate: !0,
              duration: 50,
              props: {},
              onComplete: () => {
                (n.lerpAlpha.current = n.lerpAlpha.target = 0),
                  (n.position.current.y = n.position.target.y = 0.5);
              },
            },
            0
          ),
            e.add(
              {
                duration: 1500,
                ease: "expo.in",
                props: {
                  y: { from: 0.5, to: n.position.initial.y },
                  alpha: { from: 0, to: 0.5 },
                },
                onUpdate: ({ x: o, y: l, alpha: u }) => {
                  (n.lerpAlpha.current = n.lerpAlpha.target = z() ? u : 0.5),
                    (n.position.current.y = n.position.target.y = l);
                },
              },
              r * 300
            );
          const a = 0.012;
          e.add({
            duration: 300,
            ease: "expo.out",
            props: {
              sx: { from: n.scale.initial.x, to: n.scale.initial.x + a },
              sy: { from: n.scale.initial.y, to: n.scale.initial.y + a },
            },
            onUpdate: ({ sx: o, sy: l }) => {
              (n.scale.current.x = n.scale.target.x = o),
                (n.scale.current.y = n.scale.target.y = l);
            },
          }),
            e.add({
              duration: 300,
              ease: "power2.in",
              props: {
                sx: { from: n.scale.initial.x + a, to: n.scale.initial.x },
                sy: { from: n.scale.initial.y + a, to: n.scale.initial.y },
              },
              onUpdate: ({ sx: o, sy: l }) => {
                (n.scale.current.x = n.scale.target.x = o),
                  (n.scale.current.y = n.scale.target.y = l);
              },
            });
        }),
        e
      );
    }
    playIn() {
      var e;
      (e = this.playInTl) == null || e.stop(), this.playInTl.play();
    }
  }
  var ke, pe, ci, gr;
  class uf extends pt {
    constructor(e) {
      super(e);
      g(this, ci);
      c(this, "randomParallaxForce");
      g(this, ke, void 0);
      g(this, pe, void 0);
      (this.randomParallaxForce = O(0, 1, 100)),
        (this.program.uniforms.uAlpha.value = 0);
    }
    playAnim() {
      h(this, ke) ||
        ((this.mesh.visible = !0), m(this, ke, !0), b(this, ci, gr).call(this));
    }
    stopAnim() {
      var e;
      m(this, ke, !1),
        (this.mesh.visible = !1),
        (this.program.uniforms.uAlpha.value = 0),
        (e = h(this, pe)) == null || e.stop();
    }
  }
  (ke = new WeakMap()),
    (pe = new WeakMap()),
    (ci = new WeakSet()),
    (gr = async function () {
      var e;
      h(this, ke) &&
        ((e = h(this, pe)) == null || e.stop(),
        m(
          this,
          pe,
          new q({
            paused: !0,
            ease: "power2.in",
            duration: O(1e3, 1300),
            delay: O(10, 3e3),
            props: {
              alpha: { from: 0, to: 1 },
              sx: {
                from: this.scale.current.x,
                to: this.scale.current.x * 1.2,
              },
              sy: {
                from: this.scale.current.y,
                to: this.scale.current.y * 1.2,
              },
            },
            beforeStart: () => {
              this.program.uniforms.uAlpha.value = 0;
            },
            onUpdate: ({ alpha: i, sx: n, sy: r }) => {
              (this.program.uniforms.uAlpha.value = i),
                (this.scale.target.x = n),
                (this.scale.target.y = r);
            },
          })
        ),
        await h(this, pe).play(),
        await h(this, pe).reverse(),
        b(this, ci, gr).call(this));
    });
  const pf = B("front:GLDeadStars");
  class df extends ps {
    constructor(e = K.texturesList.papaMama) {
      super(e, pf);
      c(this, "playInTl");
      c(this, "isFirstSceneChange");
      this.isFirstSceneChange = !0;
    }
    createInstances() {
      for (let e = 0; e < Object.keys(this.assets).length; e++) {
        const i = Object.keys(this.assets)[e],
          {
            position: n,
            texture: r,
            scale: a,
            desktopPosition: o,
            ratio: l,
          } = this.assets[i];
        this.assets[i].instance = new uf({
          name: i,
          index: e,
          texture: r,
          scale: E(mt({ x: a.x * 69e-5, ratio: l })),
          position: E({ ...(z(), n), z: 1e-5 * e }),
          alpha: 0,
        });
      }
      return Object.values(this.assets).map((e) => e.instance);
    }
    handleResize() {
      for (let e = 0; e < Object.keys(this.assets).length; e++) {
        const {
          instance: i,
          position: n,
          desktopPosition: r,
        } = this.assets[Object.keys(this.assets)[e]];
        i.position = E({ ...(z(), n), z: 1e-5 * e });
      }
    }
    handleSceneChange(e, i, n) {
      var a;
      const r = i - (e ?? 0);
      (this.group.visible = r < 0.5 && r > -0.5),
        this.group.visible
          ? this.isFirstSceneChange && (this.isFirstSceneChange = !1)
          : ((a = this.playInTl) == null || a.stop(),
            this.stop(),
            (this.isFirstSceneChange = !0)),
        this.instances.forEach((o) => {
          (o.position.target.x =
            o.position.initial.x + r * 1.5 * o.randomParallaxForce),
            (o.position.target.y = o.position.initial.y + Math.abs(r * 0.1)),
            (o.position.target.z = -Math.abs(
              o.position.initial.z + r * (o.randomParallaxForce * 2)
            ));
        });
    }
    handleWindowMousePosition({ x: e, y: i }) {
      this.instances.forEach((n) => {
        (this.mouse.target.x = e), (this.mouse.target.y = i);
        const r = this.instances.length,
          a = Math.abs(n.index / r - 0.5) * 0.1;
        (n.position.target.x = n.position.initial.x + this.mouse.current.x * a),
          (n.position.target.y =
            n.position.initial.y + this.mouse.current.y * a);
      });
    }
    start() {
      this.instances.forEach((e) => e.playAnim());
    }
    stop() {
      this.instances.forEach((e) => e.stopAnim());
    }
  }
  const ff = B("front:MammaGL");
  class gf extends Nt {
    constructor(e) {
      super({ ...e, log: ff });
      c(this, "glImageToggleMahe");
      c(this, "glImageToggleOggy");
      c(this, "glDeadStars");
      c(this, "glPapaMama");
    }
    createInstances(e) {
      (e.mahe1.GLClass = pt), (e.mahe2.GLClass = pt);
      for (let i = 0; i < Object.keys(e).length; i++) {
        const n = Object.keys(e)[i],
          { scale: r, position: a, texture: o, GLClass: l } = e[n],
          u = l ?? It;
        e[n].instance = new u({
          name: n,
          texture: o,
          index: i,
          scale: E(
            mt({
              ratio: 1,
              x: r == null ? void 0 : r.x,
              y: r == null ? void 0 : r.y,
              z: r == null ? void 0 : r.z,
            })
          ),
          position: E({
            x: (a == null ? void 0 : a.x) ?? 0.1,
            y: (a == null ? void 0 : a.y) ?? 0.03,
            z: (a == null ? void 0 : a.z) ?? i * 0.003,
          }),
        });
      }
      return e;
    }
    afterInit() {
      this.setSceneScale(),
        this.setInstancesPosition(),
        (this.glImageToggleMahe = new ws(
          [this.assets.mahe1.instance, this.assets.mahe2.instance],
          500
        )),
        (this.glImageToggleOggy = new ws([
          this.assets.oggy1.instance,
          this.assets.oggy2.instance,
        ])),
        (this.glDeadStars = new cf()),
        (this.glPapaMama = new df());
    }
    onResize() {
      super.onResize(), this.setSceneScale(), this.setInstancesPosition();
    }
    handleSceneChange(e) {
      super.handleSceneChange(e),
        this.glDeadStars.handleSceneChange(
          e,
          this.sceneIndex,
          this.isCurrentScene
        ),
        this.glPapaMama.handleSceneChange(
          e,
          this.sceneIndex,
          this.isCurrentScene
        );
    }
    setSceneScale() {
      this.scale.target.x = this.scale.target.y = z() ? 0.73 : 0.95;
    }
    setInstancesPosition() {
      this.instances.forEach((e) => {
        e.setPositionX(z() ? 0 : 0.1), e.setPositionY(z() ? 0.1 : 0.06);
      });
    }
    async playIn() {
      this.isCurrentScene && k.isFirstRoute
        ? (this.firstAppStartDefaultPlayin(),
          setTimeout(() => {
            this.glDeadStars.playIn(), this.glPapaMama.start();
          }, 500))
        : (this.glDeadStars.playIn(), this.glPapaMama.start()),
        this.glImageToggleMahe.start(),
        this.glImageToggleOggy.start();
    }
    async playOut() {
      this.glImageToggleMahe.stop(), this.glImageToggleOggy.stop();
    }
  }
  var xn, qo;
  class mf extends It {
    constructor() {
      super(...arguments);
      g(this, xn);
    }
    loop(e) {
      super.loop(e),
        (this.rotation.target.z = b(this, xn, qo).call(this, e.time * 0.0025));
    }
  }
  (xn = new WeakSet()),
    (qo = function (e, i = -3, n = 3) {
      return ((((Math.sin(e) + 1) / 2) * (n - i) + i) * Math.PI) / 180;
    });
  const yf = B("front:BigboyGL");
  class xf extends Nt {
    constructor(t) {
      super({ ...t, log: yf });
    }
    createInstances(t) {
      t.arbre04.GLClass = mf;
      for (let e = 0; e < Object.keys(t).length; e++) {
        const i = Object.keys(t)[e],
          { scale: n, position: r, texture: a, GLClass: o } = t[i],
          l = o ?? It;
        t[i].instance = new l({
          uMoveForce: 2,
          name: i,
          texture: a,
          index: e,
          scale: E(
            mt({
              ratio: 1.5,
              x: (n == null ? void 0 : n.x) ?? 0.9,
              y: n == null ? void 0 : n.y,
              z: n == null ? void 0 : n.z,
            })
          ),
          position: E({
            x: r == null ? void 0 : r.x,
            y: r == null ? void 0 : r.y,
            z: (r == null ? void 0 : r.z) ?? e * 0.002,
          }),
        });
      }
      return t;
    }
    afterInit() {
      this.setSceneScale(), this.setAssetsPosition();
    }
    onResize() {
      super.onResize(), this.setSceneScale(), this.setAssetsPosition();
    }
    handleSceneChange(t) {
      this.currentSceneIndex = t;
      const e = this.sceneIndex - (t ?? 0);
      !this.isFirstRender &&
        this.glWall &&
        this.glWall.setTargetWallInitialPositionX(),
        this.setOverlayUAlpha(),
        this.setScenePosition(),
        this.instances.forEach(
          (i) => (i.program.uniforms.uAlpha.value = 1 + e * 0.2)
        ),
        e <= 0 &&
          ((this.position.target.x = 0),
          (this.position.target.z =
            this.position.initial.z - e * (z() ? 2 : 3))),
        (this.isFirstRender = !1),
        (this.lastSceneIndex = t);
    }
    setSceneScale() {
      (this.scale.target.x = this.scale.target.y = z() ? 0.9 : 1.02),
        (this.assets.mahe.instance.scale.target.x = z()
          ? this.assets.mahe.instance.scale.initial.x * 1.2
          : this.assets.mahe.instance.scale.initial.x * 1.2),
        (this.assets.mahe.instance.scale.target.y = z()
          ? this.assets.mahe.instance.scale.initial.y * 1.2
          : this.assets.mahe.instance.scale.initial.y * 1.2);
    }
    setAssetsPosition() {
      (this.assets.oggy.instance.parentPosition.target.x = z() ? 0.15 : 0),
        (this.assets.mahe.instance.parentPosition.target.x = (z(), 0.17)),
        (this.assets.enfant.instance.parentPosition.target.x =
          this.assets.jeu02.instance.parentPosition.target.x =
            z() ? -0.07 : 0),
        (this.assets.jeu01.instance.parentPosition.target.x = z() ? -0.12 : 0);
    }
  }
  function mr(s, t, e) {
    const i = (y) => {
        const x = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(y);
        return x
          ? {
              r: parseInt(x[1], 16),
              g: parseInt(x[2], 16),
              b: parseInt(x[3], 16),
            }
          : null;
      },
      n = (y) => {
        const { r: x, g: w, b: v } = y;
        return (
          "#" + (16777216 + (x << 16) + (w << 8) + v).toString(16).slice(1)
        );
      },
      r = (y) => {
        const [x, w, v] = y.match(/\d+/g);
        return { r: parseInt(x), g: parseInt(w), b: parseInt(v) };
      },
      a = (y) => `rgb(${y.r}, ${y.g}, ${y.b})`,
      o = (y) => y.startsWith("#"),
      l = o(s) ? i(s) : r(s),
      u = o(t) ? i(t) : r(t),
      p = Math.round(l.r + (u.r - l.r) * e),
      d = Math.round(l.g + (u.g - l.g) * e),
      f = Math.round(l.b + (u.b - l.b) * e);
    return o(s) ? n({ r: p, g: d, b: f }) : a({ r: p, g: d, b: f });
  }
  const Bi = new it();
  class wf extends zn {
    constructor() {
      super();
      c(this, "handleResize", () => {
        (this.scale = this.computeScale()),
          (this.position = this.computePosition());
      });
      (this.uAlpha = 0),
        (this.program = this.createProgram()),
        (this.mesh.program = this.program),
        (this.scale = this.computeScale()),
        (this.position = this.computePosition()),
        this.initEvents();
    }
    initEvents() {
      this.appGL.sizes.resizeEmitter.add(this.handleResize);
    }
    removeEvent() {
      this.appGL.sizes.resizeEmitter.remove(this.handleResize);
    }
    onClick(e) {
      N.menuIsAvailable() && N.toggle();
    }
    onMouseEnter(e) {
      N.menuIsAvailable() || this.setDefaultCursor(), Bi.dispatch(!0);
    }
    onMouseMove(e) {
      N.menuIsAvailable() || this.setDefaultCursor();
    }
    onMouseLeave(e) {
      super.onMouseLeave(e), Bi.dispatch(!1);
    }
    computeScale() {
      return E({ x: 0.06, y: 0.06, z: 1 });
    }
    computePosition() {
      const { gridColumnWidthGl: e } = this.appGL.grid,
        i = z() ? e * 1.1 : e * 0.5;
      return E({
        x: -(this.appGL.viewport.width / 2) + i + 0.01,
        y: this.appGL.viewport.height / 1.93 - i - this.scale.current.y / 2,
        z: 1e-6,
      });
    }
    setDefaultCursor() {
      document.body.style.cursor = "default";
    }
    dispose() {
      super.dispose(), this.removeEvent();
    }
  }
  class vf extends zn {
    constructor(e) {
      super();
      c(this, "index");
      c(this, "currentColor");
      c(this, "prevColor");
      c(this, "colorItp");
      c(this, "handleResize", () => {
        (this.scale = this.computeScale()),
          (this.position = this.computePosition());
      });
      c(this, "handleInterfaceColor", (e) => {
        var i;
        (this.prevColor = this.currentColor ?? ls("--color-black")),
          (this.currentColor = e),
          (i = this.colorItp) == null || i.stop(),
          (this.colorItp = new q({
            props: { v: 1 },
            duration: 900,
            ease: "power2.out",
            onUpdate: ({ v: n }) => {
              const r = mr(this.prevColor, this.currentColor, n);
              this.program.uniforms.uColor.value = new qe(r);
            },
          }));
      });
      c(this, "handZoneIsHit", (e) => {
        this.program.uniforms.uForce.value = e ? 10 : 1;
      });
      (this.index = e),
        (this.prevColor = null),
        (this.currentColor = st.interfaceColorBeeper.state),
        (this.uAlpha = 1),
        (this.program = this.createProgram()),
        (this.mesh.program = this.program),
        (this.scale = this.computeScale()),
        (this.position = this.computePosition()),
        this.initEvents();
    }
    initEvents() {
      this.appGL.sizes.resizeEmitter.add(this.handleResize),
        st.interfaceColorBeeper.add(this.handleInterfaceColor),
        Bi.add(this.handZoneIsHit);
    }
    removeEvent() {
      this.appGL.sizes.resizeEmitter.remove(this.handleResize),
        st.interfaceColorBeeper.remove(this.handleInterfaceColor),
        Bi.remove(this.handZoneIsHit);
    }
    computeScale() {
      return E({ x: 0.0035, y: 0.03, z: 1 });
    }
    computePosition() {
      const { gridColumnWidthGl: e } = this.appGL.grid,
        i = z() ? e * 1.1 : e * 0.5 * 1.2,
        n = this.index * 0.008;
      return E({
        x: -(this.appGL.viewport.width / 2) + i + n,
        y: this.appGL.viewport.height / 2 - i - this.scale.current.y / 2,
        z: 0,
      });
    }
    createProgram() {
      return new fe(this.appGL.gl, {
        vertex: `
            attribute vec2 uv;
            attribute vec3 position;
            uniform mat4 projectionMatrix;
            uniform mat4 viewMatrix;
            uniform mat4 modelMatrix;
            varying vec2 vUv;
            uniform float uTime;
            uniform float uIndex;
            uniform float uForce;
    
            void main() {
              vUv = uv;
              vec4 modelPosition = modelMatrix * vec4(position, 1.0);
              
              float amplitude = 0.001; // Amplitude de l'ondulation
              float frequency = 100.; // Fréquence de l'ondulation
              float time = uTime * 0.002 * uForce * ((uIndex+1.) *.5); 
              float offsetX = sin(modelPosition.y * frequency + time) * amplitude;
              // Application de l'effet d'ondulation à la position y
              modelPosition.x += offsetX;

              // Calcul de la position finale du sommet
              vec4 viewPosition = viewMatrix * modelPosition;
              vec4 projectedPosition = projectionMatrix * viewPosition;

              gl_Position = projectedPosition;
            }
          `,
        fragment: `
            precision highp float;
            uniform float uAlpha;
            uniform sampler2D tMap;
            varying vec2 vUv;
            uniform float uIndex;
            uniform vec3 uPrevColor;
            uniform vec3 uColor;
          
            void main() {
              vec3 mixedColor = mix(uPrevColor, uColor, 1.);
              gl_FragColor = vec4(mixedColor, uAlpha);
            }
          `,
        cullFace: !1,
        transparent: !0,
        uniforms: {
          uTime: { value: 0 },
          uIndex: { value: this.index },
          uPrevColor: { value: new qe("#000000") },
          uColor: { value: new qe("#000000") },
          uAlpha: { value: this.uAlpha },
          uForce: { value: 1 },
        },
      });
    }
    dispose() {
      super.dispose(), this.removeEvent();
    }
  }
  class bf extends Ln {
    constructor() {
      super();
      c(this, "group");
      c(this, "bars");
      c(this, "hitZone");
      c(this, "handleRouteChange", ({ context: e }) => {
        this.changeVisibility(e.route.name);
      });
      c(this, "isFirstRender", !0);
      c(this, "isVisible", !1);
      c(this, "changeVisibility", (e) => {
        const i = e !== "home" && e !== "again";
        if (this.isFirstRender)
          i ? this.playInItp.play() : this.playInItp.seek(1e-4),
            (this.isFirstRender = !1);
        else {
          if (this.isVisible === i) return;
          this.playInItp.stop(),
            i ? this.playInItp.play() : this.playInItp.reverse();
        }
        this.isVisible = i;
      });
      c(this, "playInItp");
      c(this, "loop", (e) => {
        (this.group.position = R(this.position, e.delta).current),
          (this.group.scale = R(this.scale, e.delta).current),
          (this.group.rotation = R(this.rotation, e.delta).current),
          (this.mouse = R(this.mouse, e.delta)),
          this.bars.map((i) => i.loop(e)),
          this.hitZone.loop(e);
      });
      (this.bars = this.createBarsInstances()),
        (this.hitZone = this.createBackgroundInstance()),
        (this.group = new Tt());
      for (let e of this.bars) this.group.addChild(e.parent);
      this.group.addChild(this.hitZone.parent),
        this.group.setParent(this.appGL.scene.instance),
        this.appGL.raycasting.add(this.hitZone),
        (this.position = E({ z: 8e-4 })),
        (this.playInItp = this.initPlayInItp()),
        this.changeVisibility(k.currContext.route.name),
        this.initEvents();
    }
    createBarsInstances() {
      return new Array(3).fill(0).map((e, i) => new vf(i));
    }
    createBackgroundInstance() {
      return new wf();
    }
    initEvents() {
      gt.add(this.loop), k.onResolve.add(this.handleRouteChange);
    }
    removeEvents() {
      gt.remove(this.loop), k.onResolve.remove(this.handleRouteChange);
    }
    initPlayInItp() {
      return new q({
        paused: !0,
        initUpdate: !0,
        duration: 500,
        ease: "power2.out",
        reverseEase: "power2.in",
        props: {
          y: [this.position.initial.y + 0.03, this.position.initial.y],
          a: [0, 1],
        },
        onUpdate: ({ y: e, a: i }) => {
          (this.position.target.y = e),
            this.bars.forEach((n) => (n.program.uniforms.uAlpha.value = i));
        },
      });
    }
  }
  const Sf = B("front:AgainGL");
  class Mf extends Nt {
    constructor(t) {
      super({ ...t, log: Sf });
    }
    createInstances(t) {
      for (let e = 0; e < Object.keys(t).length; e++) {
        const i = Object.keys(t)[e],
          {
            scale: n,
            ratio: r,
            parentPosition: a,
            position: o,
            texture: l,
          } = t[i];
        t[i].instance = new It({
          name: i,
          texture: l,
          index: e,
          scale: E(
            mt({
              ratio: r ?? 1,
              x: (n == null ? void 0 : n.x) ?? 0.5,
              y: n == null ? void 0 : n.y,
              z: n == null ? void 0 : n.z,
            })
          ),
          position: E({
            x: o == null ? void 0 : o.x,
            y: o == null ? void 0 : o.y,
            z: (o == null ? void 0 : o.z) ?? e * 0.003,
          }),
          parentPosition: E(a),
          uMoveForce: 12,
        });
      }
      return t;
    }
    afterInit() {
      this.position.current.z = this.position.target.z = -6;
    }
    handleSceneChange(t) {
      this.currentSceneIndex = t;
      const e = this.sceneIndex - t;
      (this.position.target.z = this.position.initial.z - e * (z() ? 4 : 6)),
        (this.position.initial.x =
          this.position.current.x =
          this.position.target.x =
            0),
        this.instances.forEach(
          (i) => (i.program.uniforms.uAlpha.value = 1 - e * 2)
        );
    }
    setGroupVisibility() {
      this.group.visible = this.currentSceneIndex - this.sceneIndex < 0.5;
    }
    onResize() {
      this.glWall &&
        (this.menuIsOpen
          ? this.glWall.setWallToMenuPositionX()
          : this.glWall.setWallToNormalPosition());
    }
  }
  class If {
    constructor() {
      c(this, "onSceneIndexChange", new it(null));
      c(this, "onSceneDragVelocity", new it(null));
      c(this, "onFirstDragIndexChange", new it(null));
      c(this, "scenes", {
        home: null,
        wakeup: null,
        meal: null,
        bath: null,
        laugh: null,
        concert: null,
        mamma: null,
        bigboy: null,
        again: null,
      });
      c(this, "elements", { burgerButton: null, menu: null });
    }
    createScenes() {
      const t = Pi.get(),
        e = (a) =>
          t.routes.find((o) => o.name === a).props.data.matter
            .floorBackgroundColor,
        i = (a) =>
          t.routes.find((o) => o.name === a).props.data.matter.backgroundColor,
        n = Object.keys(this.scenes).length,
        r = (a) => t.routes.findIndex((o) => o.name === a);
      (this.scenes.home = new _d({
        routeName: "home",
        assets: K.texturesList.home,
        sceneIndex: r("home"),
        scenesLength: n,
      })),
        (this.scenes.wakeup = new Gd({
          routeName: "wakeup",
          assets: K.texturesList.wakeup,
          wallColor: e("wakeup"),
          sceneIndex: r("wakeup"),
          scenesLength: n,
        })),
        (this.scenes.meal = new sf({
          routeName: "meal",
          assets: K.texturesList.meal,
          wallColor: e("meal"),
          sceneIndex: r("meal"),
          scenesLength: n,
        })),
        (this.scenes.bath = new Yd({
          routeName: "bath",
          assets: K.texturesList.bath,
          wallColor: e("bath"),
          sceneIndex: r("bath"),
          scenesLength: n,
        })),
        (this.scenes.laugh = new Nd({
          routeName: "laugh",
          assets: K.texturesList.laugh,
          wallColor: e("laugh"),
          sceneIndex: r("laugh"),
          scenesLength: n,
        })),
        (this.scenes.concert = new of({
          routeName: "concert",
          assets: K.texturesList.concert,
          wallColor: i("concert"),
          sceneIndex: r("concert"),
          scenesLength: n,
        })),
        (this.scenes.mamma = new gf({
          routeName: "mamma",
          assets: K.texturesList.mamma,
          wallColor: e("mamma"),
          sceneIndex: r("mamma"),
          scenesLength: n,
        })),
        (this.scenes.bigboy = new xf({
          routeName: "bigboy",
          assets: K.texturesList.bigboy,
          wallColor: e("bigboy"),
          sceneIndex: r("bigboy"),
          scenesLength: n,
        })),
        (this.scenes.again = new Mf({
          routeName: "again",
          assets: K.texturesList.again,
          sceneIndex: r("again"),
          scenesLength: n,
        })),
        (this.elements.menu = new Kd()),
        (this.elements.burgerButton = new bf());
    }
    getScenes(t = this.scenes) {
      return Object.values(t);
    }
  }
  const _ = new If(),
    Pf = "Arrow";
  class Xo extends V {
    constructor() {
      super(...arguments);
      c(this, "svg", this.find("_svg"));
      c(this, "paths", this.svg.querySelectorAll("path"));
    }
  }
  c(Xo, "name", Pf);
  class Af extends _n {}
  const cs = new Af(),
    Ef = "Navigation";
  var ui, pi;
  class Ho extends V {
    constructor() {
      super(...arguments);
      c(this, "arrows", this.addAll(Xo));
      c(this, "prev", this.arrows[0]);
      c(this, "next", this.arrows[1]);
      c(this, "els", [this.prev.root, this.next.root]);
      c(this, "handleArrowPrevClick", () => {
        const e = k.currContext.route.props.index;
        k.navigateBySceneIndex(e - 1), Pt.clickLickToPrevScene(0.4);
      });
      c(this, "handleArrowNextClick", () => {
        const e = k.currContext.route.props.index;
        k.navigateBySceneIndex(e + 1), Pt.clickLickToNextScene(0.6);
      });
      g(this, ui, (e) => {
        for (let i of this.arrows) i.paths.forEach((n) => (n.style.fill = e));
      });
      g(this, pi, (e) => {
        e ? ut(this.els).play() : ut(this.els).reverse();
      });
    }
    mounted() {
      this.prev.root.addEventListener(
        "click",
        Di(this.handleArrowPrevClick, 300, !0)
      ),
        this.next.root.addEventListener(
          "click",
          Di(this.handleArrowNextClick, 300, !0)
        ),
        st.interfaceColorBeeper.add(h(this, ui)),
        cs.onShow.add(h(this, pi));
    }
    unmounted() {
      this.prev.root.removeEventListener("click", this.handleArrowPrevClick),
        this.next.root.removeEventListener("click", this.handleArrowNextClick),
        st.interfaceColorBeeper.remove(h(this, ui)),
        cs.onShow.remove(h(this, pi));
    }
    playIn() {
      return ut(this.els).play();
    }
    playOut() {
      return ut(this.els).reverse();
    }
  }
  (ui = new WeakMap()), (pi = new WeakMap()), c(Ho, "name", Ef);
  class Cf extends _n {
    constructor() {
      super(...arguments);
      c(this, "counterBeeper", new it());
    }
    updateCounter(e) {
      this.counterBeeper.dispatch(e);
    }
  }
  const $t = new Cf(),
    Lf = "PageCounter";
  var di, fi, gi;
  class Yo extends V {
    constructor() {
      super(...arguments);
      c(this, "current", this.find("_current"));
      g(this, di, (e) => {
        this.current.innerHTML = `${e}`;
      });
      g(this, fi, (e) => {
        this.root.style.color = e;
      });
      g(this, gi, (e) => {
        e ? ut(this.root).play() : ut(this.root).reverse();
      });
    }
    mounted() {
      $t.onShow.add(h(this, gi)),
        $t.counterBeeper.add(h(this, di)),
        st.interfaceColorBeeper.add(h(this, fi));
    }
    unmounted() {
      $t.onShow.remove(h(this, gi)),
        $t.counterBeeper.remove(h(this, di)),
        st.interfaceColorBeeper.remove(h(this, fi));
    }
    playIn() {
      return ut(this.root).play();
    }
    playOut() {
      return ut(this.root).reverse();
    }
  }
  (di = new WeakMap()),
    (fi = new WeakMap()),
    (gi = new WeakMap()),
    c(Yo, "name", Lf);
  const _f = "Menu";
  var ns, Mt, mi, rs, ki, wn, Zo;
  class Ko extends V {
    constructor() {
      super(...arguments);
      g(this, rs);
      g(this, wn);
      c(this, "aboutButton", this.add(Tn));
      c(this, "langSwitcher", this.add(On));
      g(this, ns, void 0);
      c(this, "subtitles", this.find("_subtitles"));
      c(this, "textContent", this.find("_textContent"));
      g(this, Mt, void 0);
      g(this, mi, void 0);
      c(this, "handleOpen", (e) => {
        var n, r;
        N.isInTransition.dispatch(!0), clearTimeout(h(this, mi));
        const i = _.getScenes()
          .filter((a) => (a == null ? void 0 : a.glWall))
          .reverse();
        e
          ? (m(this, ns, b(this, wn, Zo).call(this, i)),
            h(this, ns).play(),
            _.elements.menu.playIn(),
            Fi.hide(),
            cs.hide(),
            $t.hide(),
            (n = h(this, Mt)) == null || n.stop(),
            m(this, Mt, b(this, rs, ki).call(this, !0)),
            h(this, Mt).play(),
            st.updateInterfaceColor(ls("--color-black")))
          : (h(this, ns).stop(),
            i.map((a) => a.glWall.setTargetWallInitialPositionX()),
            _.elements.menu.playOut(),
            m(
              this,
              mi,
              setTimeout(() => {
                Fi.show(), cs.show(), $t.show();
              }, 300)
            ),
            (r = h(this, Mt)) == null || r.stop(),
            m(this, Mt, b(this, rs, ki).call(this, !1, 0.5, 0.1)),
            h(this, Mt).play(),
            st.setPrevInterfaceColor()),
          N.isInTransition.dispatch(!1);
      });
    }
    mounted() {
      m(this, Mt, b(this, rs, ki).call(this, !1, 0.1)),
        h(this, Mt).seek(1),
        N.onShow.add(this.handleOpen);
    }
    unmounted() {
      N.onShow.remove(this.handleOpen);
    }
  }
  (ns = new WeakMap()),
    (Mt = new WeakMap()),
    (mi = new WeakMap()),
    (rs = new WeakSet()),
    (ki = function (e, i = 1, n = 1) {
      const r = new nt({ paused: !0 });
      return (
        r.add(
          {
            el: this.root,
            initUpdate: !0,
            duration: 0.1,
            props: { y: { from: e ? 100 : 0, to: e ? 0 : 100, unit: "%" } },
          },
          0
        ),
        r.add(
          {
            el: [this.langSwitcher.root, this.aboutButton.root, this.subtitles],
            duration: 600 * i,
            ease: "power4.out",
            props: {
              opacity: { from: e ? 0 : 1, to: e ? 1 : 0 },
              y: { from: e ? 40 : 0, to: e ? 0 : 40, unit: "px" },
            },
          },
          1e3 * n
        ),
        r
      );
    }),
    (wn = new WeakSet()),
    (Zo = function (e) {
      const n = new nt({ paused: !0 });
      for (let r = 0; r < e.length; r++) {
        const a = e[r],
          o = -a.glWall.scale.current.x;
        a.glWall.position.current.x = a.glWall.position.target.x = o;
        const l = o,
          u = a.glWall.getWallPositionXWhenMenuOpen();
        n.add(
          {
            props: { x: { from: l, to: u + 0.03 } },
            duration: 800,
            ease: "power3.out",
            onUpdate: ({ x: p }) => {
              a.glWall.position.current.x = a.glWall.position.target.x = p;
            },
            onComplete: () => {
              N.isInTransition.dispatch(!1);
            },
          },
          r * 60 + 200
        ),
          n.add({
            props: { x: { from: u + 0.03, to: u } },
            duration: 1e3,
            ease: "expo.out",
            onUpdate: ({ x: p }) => {
              a.glWall.position.current.x = a.glWall.position.target.x = p;
            },
          });
      }
      return n;
    }),
    c(Ko, "name", _f);
  const Tf = "BurgerButton";
  class Qo extends V {}
  c(Qo, "name", Tf);
  const Jo = "AboutWall",
    Of = B(`front:${Jo}`);
  var as, yi, vn, Re;
  class th extends V {
    constructor() {
      super(...arguments);
      c(this, "background", this.find("_background"));
      c(this, "backButton", this.find("_backButtonInner"));
      c(this, "texts", [...this.root.querySelectorAll(".text-anim")]);
      g(this, as, void 0);
      g(this, yi, (e) => {
        e ? h(this, as).play() : h(this, as).reverse();
      });
      g(this, vn, () => {
        const e = new nt({ paused: !0 });
        e.add({
          el: this.root,
          ease: "power4.out",
          duration: 0.1,
          props: { opacity: 1, y: { from: 100, to: 0, unit: "%" } },
        }),
          e.add(
            {
              el: this.background,
              duration: 800,
              ease: "power4.out",
              reverseEase: "expo.out",
              props: { y: { from: 100, to: 0, unit: "%" } },
            },
            0
          );
        for (let i = 0; i < this.texts.length; i++)
          e.add(
            {
              duration: 800,
              el: this.texts[i],
              ease: "expo.out",
              reverseEase: "expo.out",
              props: {
                scale: { from: 0.98, to: 1 },
                opacity: { from: 0, to: 1 },
                y: { from: 50, to: 0, unit: "px" },
              },
            },
            i * 60 + 250
          );
        return e;
      });
      g(this, Re, () => {
        zi.hide();
      });
    }
    mounted() {
      m(this, as, h(this, vn).call(this)),
        zi.onShow.add(h(this, yi)),
        this.background.addEventListener("click", h(this, Re)),
        this.backButton.addEventListener("click", h(this, Re));
    }
    unmounted() {
      Of("unmounted"),
        zi.onShow.remove(h(this, yi)),
        this.background.removeEventListener("click", h(this, Re)),
        this.backButton.removeEventListener("click", h(this, Re));
    }
  }
  (as = new WeakMap()),
    (yi = new WeakMap()),
    (vn = new WeakMap()),
    (Re = new WeakMap()),
    c(th, "name", Jo);
  const zf = "LandscapeScreen";
  class eh extends V {}
  c(eh, "name", zf);
  const Ot = B("front:App");
  var xi, bn, sh, wi, vi, yr, Sn, ih, Mn, nh, bi, xr, Si, Mi, Ii, In, rh, Pn;
  class kf extends V {
    constructor() {
      super(...arguments);
      g(this, bn);
      g(this, vi);
      g(this, Sn);
      g(this, Mn);
      g(this, bi);
      g(this, In);
      c(this, "stackClass", "stack");
      c(this, "linkClass", "link");
      c(this, "stack", document.querySelector(`.${this.stackClass}`));
      c(this, "parser", new DOMParser());
      c(this, "links");
      c(this, "isFirstRoute", !0);
      c(this, "isAnimating", !1);
      c(this, "onReadyDeferred", An());
      c(this, "menuIsOpen", N.onShow.state);
      c(this, "navigateFromDrag", !1);
      g(this, xi, void 0);
      c(this, "backgroundColor", document.querySelector(".backgroundColor"));
      c(this, "loader", this.add(Gi));
      c(this, "burgerButton", this.add(Qo));
      c(
        this,
        "aboutButton",
        new Tn(this.root.querySelector(".App_aboutButton"))
      );
      c(
        this,
        "langSwitcher",
        new On(this.root.querySelector(".App_langSwitcher"))
      );
      c(
        this,
        "menu",
        this.add(Ko, {
          props: {
            AppAboutButton: this.aboutButton,
            AppLangSwitcher: this.langSwitcher,
          },
        })
      );
      c(this, "navigation", this.add(Ho));
      c(this, "pageCounter", this.add(Yo));
      c(this, "aboutWall", this.add(th));
      c(this, "landscapeScreen", this.add(eh));
      c(this, "dragGesture");
      c(this, "wheelGesture");
      c(this, "firstActiveDragValue", _.onSceneIndexChange.state);
      c(
        this,
        "handleDrag",
        ({
          delta: [e],
          active: i,
          first: n,
          velocity: [r],
          direction: a,
          tap: o,
        }) => {
          if (this.isAnimating) {
            Ot("handleDrag: route is animating, return");
            return;
          }
          if (this.menuIsOpen) {
            Ot("handleDrag: menu is open, prevent the drag event");
            return;
          }
          const l = Object.keys(_.scenes).length,
            u = os() ? 0.002 : 6e-4,
            p = 0.18;
          let d = _.onSceneIndexChange.state - e * u;
          n &&
            (_.onFirstDragIndexChange.dispatch(d),
            (this.firstActiveDragValue = d));
          const f = hs(
            -1,
            this.firstActiveDragValue - _.onSceneIndexChange.state,
            1
          );
          if (!i)
            if (Math.abs(f) < p) d = Math.round(d);
            else {
              const w = Math.sign(f),
                v = Math.round(this.firstActiveDragValue);
              (d = hs(0, v - w, l - 1)),
                Ot("handleDrag: go to prev or next", {
                  localValue: f,
                  value: d,
                  firstActiveValue: this.firstActiveDragValue,
                  roundFirstActiveValue: v,
                  dirX: w,
                }),
                k.navigateBySceneIndex(d),
                (this.navigateFromDrag = !0);
            }
          _.onSceneIndexChange.dispatch(d);
          const y = os() ? 0.5 : 0.3;
          let x = r * y * Math.sign(a[0]);
          i ? Pt.kill() : (x = 0), _.onSceneDragVelocity.dispatch(x);
        }
      );
      c(this, "wheelEnabled", !0);
      c(
        this,
        "wheelTimeout",
        setTimeout(() => {})
      );
      c(
        this,
        "handleWheel",
        ({
          delta: [e],
          active: i,
          first: n,
          velocity: [r],
          direction: a,
          tap: o,
        }) => {
          if (this.wheelEnabled) {
            if (this.wheelTimeout) {
              clearTimeout(this.wheelTimeout);
              const [l, u] = a;
              l === 1 || u === 1
                ? (k.navigateBySceneIndex(_.onSceneIndexChange.state + 1),
                  Pt.clickLickToNextScene(0.6))
                : (l === -1 || u == -1) &&
                  (k.navigateBySceneIndex(_.onSceneIndexChange.state - 1),
                  Pt.clickLickToPrevScene(0.4));
            }
            (this.wheelEnabled = !1),
              (this.wheelTimeout = setTimeout(() => {
                this.wheelEnabled = !0;
              }, 1700));
          }
        }
      );
      g(
        this,
        wi,
        (
          e = {
            pathname: window.location.pathname,
            search: window.location.search,
            hash: window.location.hash,
          }
        ) => {
          k.instance.resolve(e.pathname + e.search + e.hash);
        }
      );
      g(this, Si, (e) => {
        e.preventDefault();
        const i = e.currentTarget.getAttribute("href");
        i
          ? k.history.push(i)
          : console.error("No href attribute found on link", e.currentTarget);
      });
      g(this, Mi, (e) => {
        this.menuIsOpen = e;
      });
      g(this, Ii, (e) => {
        var i;
        (i = h(this, xi)) == null || i.stop(),
          m(this, xi, b(this, In, rh).call(this, e));
      });
      g(this, Pn, (e) => {
        e.metaKey ||
          (e.key === "ArrowRight" &&
            k.navigateBySceneIndex(_.onSceneIndexChange.state + 1),
          e.key === "ArrowLeft" &&
            k.navigateBySceneIndex(_.onSceneIndexChange.state - 1));
      });
    }
    async mounted() {
      b(this, bi, xr).call(this),
        h(this, wi).call(this),
        k.history.listen(h(this, wi)),
        k.onResolve.add(b(this, vi, yr).bind(this)),
        st.backgroundColorBeeper.add(h(this, Ii)),
        await Gi.preloadEndedDeferred.promise,
        _.createScenes(),
        (this.dragGesture = new br(window, this.handleDrag, {
          eventOptions: { passive: !1 },
          preventDefault: !0,
          pointer: { keys: !1 },
        })),
        (this.wheelGesture = new Ou(window, this.handleWheel, {
          preventDefault: !0,
        })),
        N.onShow.add(h(this, Mi)),
        window.addEventListener("keydown", h(this, Pn)),
        this.onReadyDeferred.resolve();
    }
    unmounted() {
      st.backgroundColorBeeper.remove(h(this, Ii)),
        k.onResolve.remove(b(this, vi, yr)),
        this.dragGesture.destroy(),
        N.onShow.remove(h(this, Mi));
    }
  }
  (xi = new WeakMap()),
    (bn = new WeakSet()),
    (sh = async function (e, i) {
      Ot("manageTransitions", { prevContext: e, currContext: i });
      const n = e == null ? void 0 : e.route.props.instance,
        r = i.route.props,
        a = r.instance,
        o = r.index,
        l = e == null ? void 0 : e.route.props.index,
        u = o > l,
        p = i.route.path.includes("/scenes/"),
        d = k.isFirstRoute && !p,
        f = Math.abs(o - l) > 1;
      Ot("isJumpToFarScene", f);
      const y = () => {
        n == null ||
          n.playOut().then(() => {
            n == null || n._unmounted(), n == null || n.root.remove();
          });
      };
      (a.root.style.opacity = "0"),
        f
          ? (Ot("manageTransitions > Is jumping to a far scene", {
              routeIndex: o,
              prevRouteIndex: l,
            }),
            _.getScenes().forEach((w) => {
              w.setForceGroupVisible(w.sceneIndex === o);
            }),
            y(),
            await new q({
              props: { v: { from: _.onSceneIndexChange.state, to: o } },
              duration: 400,
              ease: "power2.inOut",
              onUpdate: ({ v: w }) => _.onSceneIndexChange.dispatch(w),
            }).play(),
            setTimeout(() => {
              _.getScenes().forEach((w) => w.setForceGroupVisible(null));
            }, 1e3),
            u && Pt.clickLickToNextScene(),
            await Qn(400))
          : _.onSceneIndexChange.state !== o && !this.isFirstRoute
          ? (Ot(
              "manageTransitions > Navigate from keyboard or click on the navigation"
            ),
            u && Pt.clickLickToNextScene(),
            await new q({
              props: { v: { from: _.onSceneIndexChange.state, to: o } },
              duration: 800,
              ease: "power2.inOut",
              onUpdate: ({ v: w }) => _.onSceneIndexChange.dispatch(w),
            }).play(),
            y())
          : (Ot("manageTransitions > init or Navigate from drag"),
            _.onSceneIndexChange.dispatch(o),
            setTimeout(() => {
              y();
            }, 10)),
        N.onShow.state && N.hide(),
        this.isFirstRoute ||
          (o > (e == null ? void 0 : e.route.props.index)
            ? Pt.clickLickToNextScene()
            : Pt.clickLickToPrevScene()),
        p ? cs.show() : d || cs.hide(),
        i.route.name === "again"
          ? this.aboutButton.playIn()
          : d || this.aboutButton.playOut(),
        i.route.name === "again"
          ? this.langSwitcher.playIn()
          : d || this.langSwitcher.playOut(),
        p && $t.updateCounter(o),
        p ? $t.show() : d || $t.hide();
      const x = r.data.matter;
      st.updateBackgroundColor(x.backgroundColor),
        st.updateInterfaceColor(x.interfaceColor),
        (a.root.style.opacity = "1"),
        await a.playIn(),
        (this.navigateFromDrag = !1);
    }),
    (wi = new WeakMap()),
    (vi = new WeakSet()),
    (yr = async function ({ prevContext: e, context: i }) {
      if (this.isAnimating) {
        const n = this.stack.querySelectorAll(":scope > *");
        for (let r = 0; r < n.length - 1; r += 1)
          Ot("page to remove-", n[r]), n[r].remove();
      }
      await this.onReadyDeferred.promise;
      try {
        if (this.isFirstRoute) {
          const n = this.stack.querySelector(":scope > *"),
            r = i.route.action(i);
          i.route.props.instance = new r(n, {
            props: {
              ...(i.route.props.data.matter || {}),
              index: i.route.props.index,
            },
          });
        } else {
          const { cache: n } = i.route.props,
            r = this.parser.parseFromString(n, "text/html").body.childNodes[0];
          this.stack.appendChild(r);
          const a = i.route.action(i);
          i.route.props.instance = new a(r, {
            props: {
              ...(i.route.props.data.matter || {}),
              index: i.route.props.index,
            },
          });
        }
        (this.isAnimating = !0),
          b(this, bi, xr).call(this),
          await Qn(0),
          await b(this, bn, sh).call(this, e, i);
      } catch (n) {
        console.error("preTransition error", n);
      }
      (this.isFirstRoute = !1), (this.isAnimating = !1);
    }),
    (Sn = new WeakSet()),
    (ih = function () {
      for (let e of this.links) e.addEventListener("click", h(this, Si));
    }),
    (Mn = new WeakSet()),
    (nh = function () {
      for (let e of this.links)
        e == null || e.removeEventListener("click", h(this, Si));
    }),
    (bi = new WeakSet()),
    (xr = function () {
      this.links && b(this, Mn, nh).call(this),
        (this.links = document.querySelectorAll(`.${this.linkClass}`)),
        this.links && b(this, Sn, ih).call(this);
    }),
    (Si = new WeakMap()),
    (Mi = new WeakMap()),
    (Ii = new WeakMap()),
    (In = new WeakSet()),
    (rh = function (e, i = k.isFirstRoute ? 3e3 : 1500) {
      var o, l;
      if (!this.backgroundColor) return;
      const n =
          (l = (o = this.backgroundColor) == null ? void 0 : o.style) == null
            ? void 0
            : l.backgroundColor,
        r = document.querySelector("#meta-theme-color"),
        a = n === "" ? ls("--color-bg") : n;
      return new q({
        props: { v: 1 },
        duration: i,
        ease: "power2.out",
        onUpdate: ({ v: u }) => {
          (this.backgroundColor.style.backgroundColor = mr(a, e, u)),
            r.setAttribute("content", mr(a, e, u));
        },
      });
    }),
    (Pn = new WeakMap());
  const Rf = () => {
    Array.from(document.links)
      .filter((s) => s.hostname != window.location.hostname)
      .forEach((s) => (s.target = "_blank"));
  };
  var Gf = {
    BASE_URL: "/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1,
    HOST: "localhost",
    SERVER_PORT: "3000",
    CLIENT_PORT: "5173",
  };
  const Ff = B("front:index");
  Ff(Gf);
  addEventListener("load", async () => {
    {
      const s = `
      var _paq = window._paq = window._paq || [];
      /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      (function() {
        var u="//matomo.vps.willybrauner.com/";
        _paq.push(['setTrackerUrl', u+'matomo.php']);
        _paq.push(['setSiteId', '1']);
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
      })();
          `,
        t = document.createElement("script");
      (t.innerHTML = s), document.head.appendChild(t);
    }
    Rf(),
      We.ticker.disable(),
      gt.add(({ time: s }) => We.ticker.raf(s), De.INTERPOL),
      await Pi.query(),
      document.body.classList.add(
        os() ? "isHandheldDevice" : "isDesktopDevice"
      ),
      new kf(document.querySelector(".App"));
  });
});
export default Df();
