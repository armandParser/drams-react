import { jsx as s, jsxs as n, Fragment as f } from "react/jsx-runtime";
import { useState as g } from "react";
const y = ({ isActive: l, onToggle: e, className: t = "", size: r = "md", color: c }) => {
  const d = { xs: 0.6, s: 0.8, md: 1, lg: 1.2 }[r] * 1.25;
  return /* @__PURE__ */ s(
    "div",
    {
      style: { width: 24 * d, height: 84 * d, position: "relative" },
      className: t,
      children: /* @__PURE__ */ n(
        "div",
        {
          className: `slider-wrapper ${l ? "active" : "inactive"}`,
          onClick: e,
          style: {
            cursor: "pointer",
            transform: `scale(${d})`,
            transformOrigin: "top left",
            "--active-color": c
          },
          children: [
            /* @__PURE__ */ s("div", { className: "slider-track" }),
            /* @__PURE__ */ s("div", { className: "slider-handle" }),
            /* @__PURE__ */ s("div", { className: "indicator" })
          ]
        }
      )
    }
  );
}, S = ({
  isActive: l,
  onToggle: e,
  variant: t = "standard",
  className: r = "",
  size: c = "md",
  color: a
}) => {
  const d = t === "slurp" ? "slurp-switch" : "standard-switch", i = { xs: 0.6, s: 0.8, md: 1, lg: 1.2 }[c];
  return /* @__PURE__ */ s(
    "div",
    {
      className: r,
      style: {
        width: 60 * i,
        height: 30 * i,
        position: "relative"
      },
      children: /* @__PURE__ */ n(
        "div",
        {
          className: `${d} ${l ? "active" : ""}`,
          onClick: e,
          style: {
            transform: `scale(${i})`,
            transformOrigin: "top left",
            "--active-color": a
          },
          children: [
            /* @__PURE__ */ s("div", { className: "switch-track" }),
            /* @__PURE__ */ s("div", { className: "switch-knob" }),
            t === "slurp" && /* @__PURE__ */ n(f, { children: [
              /* @__PURE__ */ s("div", { className: "switch-indicator left" }),
              /* @__PURE__ */ s("div", { className: "switch-indicator right" })
            ] })
          ]
        }
      )
    }
  );
}, b = ({
  isActive: l,
  onToggle: e,
  variant: t = "simple",
  className: r = "",
  size: c = "md",
  color: a
}) => {
  const d = t === "simple" ? 1.3 : 1, i = { xs: 0.6, s: 0.8, md: 1, lg: 1.2 }[c] * d, o = t === "track" ? 126 : 60, m = t === "track" ? 30 : 23;
  return t === "track" ? /* @__PURE__ */ s("div", { style: { width: o * i, height: m * i, position: "relative" }, className: r, children: /* @__PURE__ */ n(
    "div",
    {
      className: `pinchin-track-switch ${l ? "active" : ""}`,
      onClick: e,
      style: {
        transform: `scale(${i})`,
        transformOrigin: "top left",
        "--active-color": a
      },
      children: [
        /* @__PURE__ */ s("div", { className: "track-bar" }),
        /* @__PURE__ */ s("div", { className: "switch-pill" }),
        /* @__PURE__ */ s("div", { className: "switch-indicator" })
      ]
    }
  ) }) : /* @__PURE__ */ s("div", { style: { width: o * i, height: m * i, position: "relative" }, className: r, children: /* @__PURE__ */ n(
    "div",
    {
      className: `pinchin-switch ${l ? "active" : ""}`,
      onClick: e,
      style: {
        transform: `scale(${i})`,
        transformOrigin: "top left",
        "--active-color": a
      },
      children: [
        /* @__PURE__ */ s("div", { className: "switch-track" }),
        /* @__PURE__ */ s("div", { className: "switch-pill" }),
        /* @__PURE__ */ s("div", { className: "switch-indicator left" }),
        /* @__PURE__ */ s("div", { className: "switch-indicator right" })
      ]
    }
  ) });
}, $ = ({
  isActive: l,
  onToggle: e,
  variant: t = "simple",
  className: r = "",
  size: c = "md",
  color: a
}) => {
  const d = t === "dots" ? "rollin-switch-dot" : "rollin-switch", i = { xs: 0.6, s: 0.8, md: 1, lg: 1.2 }[c];
  return /* @__PURE__ */ s("div", { style: { width: 60 * i, height: 30 * i, position: "relative" }, className: r, children: /* @__PURE__ */ n(
    "div",
    {
      className: `${d} ${l ? "active" : ""}`,
      onClick: e,
      style: {
        transform: `scale(${i})`,
        transformOrigin: "top left",
        "--active-color": a
      },
      children: [
        /* @__PURE__ */ s("div", { className: "switch-track", children: /* @__PURE__ */ s("div", { className: "track-fill" }) }),
        /* @__PURE__ */ s("div", { className: "switch-ball", children: t === "dots" && /* @__PURE__ */ n(f, { children: [
          /* @__PURE__ */ s("div", { className: "ball-dot gray" }),
          /* @__PURE__ */ s("div", { className: "ball-dot orange" })
        ] }) })
      ]
    }
  ) });
}, x = ({ isActive: l, onToggle: e, className: t = "", size: r = "md", color: c }) => {
  const d = { xs: 0.6, s: 0.8, md: 1, lg: 1.2 }[r] * 0.83;
  return /* @__PURE__ */ s("div", { style: { width: 120 * d, height: 36 * d, position: "relative" }, className: t, children: /* @__PURE__ */ n(
    "div",
    {
      className: `square-dots-switch ${l ? "active" : ""}`,
      onClick: e,
      style: {
        transform: `scale(${d})`,
        transformOrigin: "top left",
        "--active-color": c
      },
      children: [
        /* @__PURE__ */ s("div", { className: "switch-track", children: /* @__PURE__ */ s("div", { className: "track-fill" }) }),
        /* @__PURE__ */ s("div", { className: "switch-square", children: [...Array(9)].map((i, o) => /* @__PURE__ */ s("div", { className: "square-dot" }, o)) })
      ]
    }
  ) });
}, O = ({ isActive: l, onToggle: e, className: t = "", size: r = "md", color: c }) => {
  const a = { xs: 0.6, s: 0.8, md: 1, lg: 1.2 }[r];
  return /* @__PURE__ */ s(
    "div",
    {
      className: t,
      style: {
        width: 60 * a,
        height: 30 * a,
        position: "relative"
      },
      children: /* @__PURE__ */ n(
        "div",
        {
          className: `io-switch ${l ? "active" : ""}`,
          onClick: e,
          style: {
            transform: `scale(${a})`,
            transformOrigin: "top left",
            "--active-color": c
          },
          children: [
            /* @__PURE__ */ n("div", { className: "switch-track", children: [
              /* @__PURE__ */ s("div", { className: "letter-i io-letter", children: "I" }),
              /* @__PURE__ */ s("div", { className: "letter-o io-letter", children: "O" })
            ] }),
            /* @__PURE__ */ s("div", { className: "switch-knob" })
          ]
        }
      )
    }
  );
}, C = ({ isActive: l, onToggle: e, className: t = "", size: r = "md", color: c }) => {
  const a = { xs: 0.6, s: 0.8, md: 1, lg: 1.2 }[r];
  return /* @__PURE__ */ s("div", { style: { width: 120 * a, height: 30 * a, position: "relative" }, className: t, children: /* @__PURE__ */ n(
    "div",
    {
      className: `long-switch ${l ? "active" : ""}`,
      onClick: e,
      style: {
        transform: `scale(${a})`,
        transformOrigin: "top left",
        "--active-color": c
      },
      children: [
        /* @__PURE__ */ s("div", { className: "switch-track" }),
        /* @__PURE__ */ n("div", { className: "switch-handle", children: [
          /* @__PURE__ */ s("div", { className: "dip left", children: /* @__PURE__ */ s("div", { className: "dot" }) }),
          /* @__PURE__ */ s("div", { className: "dip right", children: /* @__PURE__ */ s("div", { className: "dot" }) })
        ] })
      ]
    }
  ) });
}, q = ({ initialState: l = 0, onChange: e, size: t = "md", color: r }) => {
  const [c, a] = g(l), i = { xs: 0.6, s: 0.8, md: 1, lg: 1.2 }[t] * 0.75, o = (h) => {
    a(h), e == null || e(h);
  }, m = () => c === 0 ? "2px" : c === 1 ? "calc(50% - 18px)" : "calc(100% - 38px)", p = () => c === 0 ? "100%" : "60%";
  return /* @__PURE__ */ s("div", { style: { width: 140 * i, height: 44 * i, position: "relative" }, children: /* @__PURE__ */ s(
    "div",
    {
      className: "three-state-switch",
      "data-state": c,
      style: {
        transform: `scale(${i})`,
        transformOrigin: "top left",
        "--active-color": r
      },
      onClick: (h) => {
        const v = h.currentTarget.getBoundingClientRect(), w = h.clientX - v.left, N = v.width;
        w < N / 3 ? o(0) : w < N / 3 * 2 ? o(1) : o(2);
      },
      children: /* @__PURE__ */ n("div", { className: "ts-track", children: [
        /* @__PURE__ */ s("div", { className: "ts-orange-bg" }),
        /* @__PURE__ */ s("div", { className: "ts-grey-overlay", style: { width: p() } }),
        /* @__PURE__ */ s("div", { className: "ts-knob", style: { left: m() }, children: /* @__PURE__ */ s("div", { className: "ts-knob-marker" }) })
      ] })
    }
  ) });
};
export {
  O as IOSwitch,
  C as LongSwitch,
  b as PinchinSwitch,
  $ as RollinSwitch,
  x as SquareDotsSwitch,
  S as StandardSwitch,
  q as ThreeStateSwitch,
  y as VerticalSlider
};
