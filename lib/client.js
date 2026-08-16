/**
 * dsh-skin-dark-gold · browser half
 *
 * Registers the plugin bundle with the client module loader. The factory body
 * (a) injects the dark-gold skin stylesheet at materialization and (b) defines
 * the plugin entry, whose `apply` forces the page into dark rendering and
 * mounts a floating gold-particle field over the whole app.
 *
 * The skin is deliberately UNCONDITIONAL: it always renders the dark-gold
 * look, regardless of the OS or in-app theme preference.
 */
window.__ModuleLoader__.load({
	id: "dsh-skin-dark-gold",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		//#region skin.css
		const css = `
/* ── dsh-skin-dark-gold · 暗金粒子主题（无条件） ─────────────────────── */
body {
  --dsw-alias-bg-base: #191208;
  --dsw-alias-bg-layer-1: #241a0b;
  --dsw-alias-bg-layer-2: #2c2010;
  --dsw-alias-bg-layer-3: #352713;
  --dsw-alias-bg-overlay: #3d2d15;
  --dsw-alias-bg-module-platform: #2c2010;
  --dsw-alias-bg-multi-select: #2c2010;
  --dsw-alias-bg-skeleton: rgba(238, 201, 95, 0.08);
  --dsw-alias-bg-mask-1: rgba(0, 0, 0, 0.55);
  --dsw-alias-bg-mask-drop: rgba(25, 18, 8, 0.78);
  --dsw-alias-label-primary: #f9efcf;
  --dsw-alias-label-primary-dimmed: #e6cd8b;
  --dsw-alias-label-primary-bluish: #f9efcf;
  --dsw-alias-label-primary-foreground: #191208;
  --dsw-alias-label-primary-inverted: #191208;
  --dsw-alias-label-secondary: #e6cd8b;
  --dsw-alias-label-tertiary: #c9a95c;
  --dsw-alias-label-caption: #ab8d45;
  --dsw-alias-label-dimmed: #8f7438;
  --dsw-alias-brand-primary: #eec95f;
  --dsw-alias-brand-primary-invert: #241a0b;
  --dsw-alias-brand-text: #eec95f;
  --dsw-alias-brand-primary-new-colorprimary-new-color: #eec95f;
  --dsw-alias-border-l1: rgba(238, 201, 95, 0.1);
  --dsw-alias-border-l2: rgba(238, 201, 95, 0.18);
  --dsw-alias-border-l2-darkmode-thin: rgba(238, 201, 95, 0.1);
  --dsw-alias-border-l3: rgba(238, 201, 95, 0.26);
  --dsw-alias-border-l4: rgba(238, 201, 95, 0.34);
  --dsw-alias-border-inverted: rgba(238, 201, 95, 0.14);
  --dsw-alias-border-inverted2: rgba(238, 201, 95, 0.2);
  --dsw-alias-interactive-bg-hover: rgba(238, 201, 95, 0.1);
  --dsw-alias-interactive-bg-active: rgba(238, 201, 95, 0.16);
  --dsw-alias-interactive-bg-hover-accent: rgba(238, 201, 95, 0.22);
  --dsw-alias-interactive-bg-hover-solid: #2c2010;
  --dsw-alias-interactive-bg-hover-danger: rgba(236, 19, 19, 0.18);
  --dsw-alias-button-primary-fill: #eec95f;
  --dsw-alias-button-primary-hover: #d4ae49;
  --dsw-alias-button-primary-dimmed: #3a2b12;
  --dsw-alias-button-contrast-fill: #f9efcf;
  --dsw-alias-button-elevated-fill: #2c2010;
  --dsw-alias-button-floating-fill: #2c2010;
  --dsw-alias-button-floating-hover: #3d2d15;
  --dsw-alias-button-ghost-active-fill: #3d2d15;
  --dsw-alias-button-ghost-active-hover: #43321a;
  --dsw-alias-button-ghost-active-border: #c9a95c;
  --dsw-alias-button-info-fill: #eec95f;
  --dsw-alias-button-info-hover: #d4ae49;
  --dsw-alias-button-tool-bar-fill: rgba(122, 96, 40, 0.55);
  --dsw-alias-button-tool-bar-fill-invisible: rgba(122, 96, 40, 0.4);
  --dsw-alias-button-tool-bar-hover: rgba(122, 96, 40, 0.7);
  --dsw-alias-scrollbar-bg-l1: #4a3a18;
  --dsw-alias-scrollbar-bg-l2: #4a3a18;
  --dsw-alias-scrollbar-hover-l1: #8f7438;
  --dsw-alias-scrollbar-hover-l2: #8f7438;
  --dsw-alias-toast-bg: #3d2d15;
  --dsw-alias-tooltip-bg: #352713;
  --dsw-alias-state-business-primary: #eec95f;
  --dsw-alias-state-business-tertiary: #3a2b12;
  --dsw-alias-state-success-primary: #96d173;
  --dsw-alias-state-success-secondary: #74b255;
  --dsw-alias-state-success-tertiary: #2c3a1a;
  --dsw-alias-state-warn-primary: #eec95f;
  --dsw-alias-state-warn-secondary: #dcb74e;
  --dsw-alias-state-warn-label: #eec95f;
  --dsw-alias-state-warn-tertiary: #3a2b12;
  --dsw-alias-state-error-primary: #e0705f;
  --dsw-alias-state-error-secondary: #d0594a;
  --dsw-specific-sidebar-fill: #1e1509;
  --dsw-specific-sidebar-nav-item-active: #352713;
  --dsw-specific-sidebar-nav-item-active-accent: #3d2d15;
  --dsw-specific-sidebar-nav-item-hover: #2c2010;
  --dsw-specific-bubble: #241a0b;
  --dsw-specific-bubble-highlight: #352713;
  --dsw-specific-input-major: #241a0b;
  --dsw-specific-login-input: #2c2010;
  --dsw-specific-menu: #352713;
  --dsw-specific-selector: #2c2010;
  --dsw-specific-tip: #2c2010;
  --dsw-alias-markdown-inline-code: #352713;
  --dsw-alias-markdown-code-block: #201608;
  --dsw-alias-markdown-code-block-banner: #2c2010;
  --dsw-alias-markdown-code-segment-selected: #352713;
  --dsw-alias-markdown-code-segment-unselected: #241a0b;
  --dsw-alias-markdown-citation: #352713;
  --dsw-alias-markdown-placeholder: #241a0b;
  --dsw-alias-markdown-tag: #2c2010;
}

/* 与主题样式同优先级，强制深色令牌（防止任何浅色回退） */
body[data-ds-dark-theme] {
  --dsw-alias-bg-base: #191208;
  --dsw-alias-bg-layer-1: #241a0b;
  --dsw-alias-bg-layer-2: #2c2010;
  --dsw-alias-bg-layer-3: #352713;
  --dsw-alias-bg-overlay: #3d2d15;
  --dsw-alias-bg-module-platform: #2c2010;
  --dsw-alias-bg-multi-select: #2c2010;
  --dsw-alias-bg-skeleton: rgba(238, 201, 95, 0.08);
  --dsw-alias-bg-mask-1: rgba(0, 0, 0, 0.55);
  --dsw-alias-bg-mask-drop: rgba(25, 18, 8, 0.78);
  --dsw-alias-label-primary: #f9efcf;
  --dsw-alias-label-primary-dimmed: #e6cd8b;
  --dsw-alias-label-primary-bluish: #f9efcf;
  --dsw-alias-label-primary-foreground: #191208;
  --dsw-alias-label-primary-inverted: #191208;
  --dsw-alias-label-secondary: #e6cd8b;
  --dsw-alias-label-tertiary: #c9a95c;
  --dsw-alias-label-caption: #ab8d45;
  --dsw-alias-label-dimmed: #8f7438;
  --dsw-alias-brand-primary: #eec95f;
  --dsw-alias-brand-primary-invert: #241a0b;
  --dsw-alias-brand-text: #eec95f;
  --dsw-alias-brand-primary-new-colorprimary-new-color: #eec95f;
  --dsw-alias-border-l1: rgba(238, 201, 95, 0.1);
  --dsw-alias-border-l2: rgba(238, 201, 95, 0.18);
  --dsw-alias-border-l2-darkmode-thin: rgba(238, 201, 95, 0.1);
  --dsw-alias-border-l3: rgba(238, 201, 95, 0.26);
  --dsw-alias-border-l4: rgba(238, 201, 95, 0.34);
  --dsw-alias-border-inverted: rgba(238, 201, 95, 0.14);
  --dsw-alias-border-inverted2: rgba(238, 201, 95, 0.2);
  --dsw-alias-interactive-bg-hover: rgba(238, 201, 95, 0.1);
  --dsw-alias-interactive-bg-active: rgba(238, 201, 95, 0.16);
  --dsw-alias-interactive-bg-hover-accent: rgba(238, 201, 95, 0.22);
  --dsw-alias-interactive-bg-hover-solid: #2c2010;
  --dsw-alias-interactive-bg-hover-danger: rgba(236, 19, 19, 0.18);
  --dsw-alias-button-primary-fill: #eec95f;
  --dsw-alias-button-primary-hover: #d4ae49;
  --dsw-alias-button-primary-dimmed: #3a2b12;
  --dsw-alias-button-contrast-fill: #f9efcf;
  --dsw-alias-button-elevated-fill: #2c2010;
  --dsw-alias-button-floating-fill: #2c2010;
  --dsw-alias-button-floating-hover: #3d2d15;
  --dsw-alias-button-ghost-active-fill: #3d2d15;
  --dsw-alias-button-ghost-active-hover: #43321a;
  --dsw-alias-button-ghost-active-border: #c9a95c;
  --dsw-alias-button-info-fill: #eec95f;
  --dsw-alias-button-info-hover: #d4ae49;
  --dsw-alias-button-tool-bar-fill: rgba(122, 96, 40, 0.55);
  --dsw-alias-button-tool-bar-fill-invisible: rgba(122, 96, 40, 0.4);
  --dsw-alias-button-tool-bar-hover: rgba(122, 96, 40, 0.7);
  --dsw-alias-scrollbar-bg-l1: #4a3a18;
  --dsw-alias-scrollbar-bg-l2: #4a3a18;
  --dsw-alias-scrollbar-hover-l1: #8f7438;
  --dsw-alias-scrollbar-hover-l2: #8f7438;
  --dsw-alias-toast-bg: #3d2d15;
  --dsw-alias-tooltip-bg: #352713;
  --dsw-alias-state-business-primary: #eec95f;
  --dsw-alias-state-business-tertiary: #3a2b12;
  --dsw-alias-state-success-primary: #96d173;
  --dsw-alias-state-success-secondary: #74b255;
  --dsw-alias-state-success-tertiary: #2c3a1a;
  --dsw-alias-state-warn-primary: #eec95f;
  --dsw-alias-state-warn-secondary: #dcb74e;
  --dsw-alias-state-warn-label: #eec95f;
  --dsw-alias-state-warn-tertiary: #3a2b12;
  --dsw-alias-state-error-primary: #e0705f;
  --dsw-alias-state-error-secondary: #d0594a;
  --dsw-specific-sidebar-fill: #1e1509;
  --dsw-specific-sidebar-nav-item-active: #352713;
  --dsw-specific-sidebar-nav-item-active-accent: #3d2d15;
  --dsw-specific-sidebar-nav-item-hover: #2c2010;
  --dsw-specific-bubble: #241a0b;
  --dsw-specific-bubble-highlight: #352713;
  --dsw-specific-input-major: #241a0b;
  --dsw-specific-login-input: #2c2010;
  --dsw-specific-menu: #352713;
  --dsw-specific-selector: #2c2010;
  --dsw-specific-tip: #2c2010;
  --dsw-alias-markdown-inline-code: #352713;
  --dsw-alias-markdown-code-block: #201608;
  --dsw-alias-markdown-code-block-banner: #2c2010;
  --dsw-alias-markdown-code-segment-selected: #352713;
  --dsw-alias-markdown-code-segment-unselected: #241a0b;
  --dsw-alias-markdown-citation: #352713;
  --dsw-alias-markdown-placeholder: #241a0b;
  --dsw-alias-markdown-tag: #2c2010;
}

/* 底层表面：暗金渐变（无条件） */
body {
  color: var(--dsw-alias-label-primary);
  background-color: var(--dsw-alias-bg-base);
  background-image:
    radial-gradient(1200px 700px at 78% -10%, rgba(238, 201, 95, 0.2), transparent 60%),
    radial-gradient(1000px 800px at -10% 110%, rgba(200, 155, 60, 0.16), transparent 55%),
    radial-gradient(900px 600px at 50% 50%, rgba(150, 110, 40, 0.1), transparent 70%),
    linear-gradient(160deg, #20160a 0%, #191208 45%, #151006 100%);
  background-attachment: fixed;
}
body[data-ds-dark-theme] {
  background-color: var(--dsw-alias-bg-base);
  background-image:
    radial-gradient(1200px 700px at 78% -10%, rgba(238, 201, 95, 0.2), transparent 60%),
    radial-gradient(1000px 800px at -10% 110%, rgba(200, 155, 60, 0.16), transparent 55%),
    radial-gradient(900px 600px at 50% 50%, rgba(150, 110, 40, 0.1), transparent 70%),
    linear-gradient(160deg, #20160a 0%, #191208 45%, #151006 100%);
  background-attachment: fixed;
}
#root {
  background: transparent;
}

/* 粒子画布层 */
.dsh-skin-particles {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 2147483000;
  opacity: 0.9;
  mix-blend-mode: screen;
}

/* 选中色 */
::selection {
  background: rgba(238, 201, 95, 0.35);
}
`;
		//#endregion
		const tagId = "dsh-skin-dark-gold/skin.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-skin-dark-gold";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		//#region force dark rendering
		/**
		* The skin is unconditional: force the page into dark rendering so the
		* dark-gold palette (and any non-token dark styles) always engage, and
		* re-assert it whenever the theme runtime flips the attribute away.
		* @returns disposer.
		*/
		function forceDark() {
			if (typeof document === "undefined") return () => {};
			const applyDark = () => {
				document.documentElement.style.colorScheme = "dark";
				if (!document.body.hasAttribute("data-ds-dark-theme")) document.body.setAttribute("data-ds-dark-theme", "");
			};
			applyDark();
			const observer = new MutationObserver((mutations) => {
				for (const mutation of mutations) {
					if (mutation.type !== "attributes" || mutation.attributeName !== "data-ds-dark-theme") continue;
					if (!document.body.hasAttribute("data-ds-dark-theme")) applyDark();
				}
			});
			observer.observe(document.body, { attributes: true, attributeFilter: ["data-ds-dark-theme"] });
			return () => {
				observer.disconnect();
			};
		}
		//#endregion
		//#region particle field
		/**
		* Mount a fixed, non-interactive canvas over the whole app and drive a
		* slow-drifting field of gold particles connected by proximity lines.
		* Animation pauses when the tab is hidden and never runs for users
		* preferring reduced motion (a single static frame is drawn instead).
		* @returns disposer removing the canvas and every listener.
		*/
		function mountParticles() {
			if (typeof document === "undefined") return () => {};
			const prefersReduced = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
			const canvas = document.createElement("canvas");
			canvas.className = "dsh-skin-particles";
			canvas.setAttribute("aria-hidden", "true");
			const ctx = canvas.getContext("2d");
			if (ctx === null) return () => {};
			document.body.appendChild(canvas);
			const DPR = Math.min(window.devicePixelRatio || 1, 2);
			let width = 0;
			let height = 0;
			let particles = [];
			let raf = 0;
			let running = false;
			const pointer = { x: -9999, y: -9999, active: false };
			const LINK = 120;
			const palette = () => ({ dot: "255, 216, 130", line: "243, 202, 115" });
			const resize = () => {
				width = window.innerWidth;
				height = window.innerHeight;
				canvas.width = Math.max(1, Math.floor(width * DPR));
				canvas.height = Math.max(1, Math.floor(height * DPR));
				ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
				const count = Math.min(110, Math.max(36, Math.floor((width * height) / 22000)));
				particles = [];
				for (let i = 0; i < count; i++) {
					particles.push({
						x: Math.random() * width,
						y: Math.random() * height,
						r: 0.6 + Math.random() * 1.8,
						vx: (Math.random() - 0.5) * 0.35,
						vy: (Math.random() - 0.5) * 0.35,
						tw: Math.random() * Math.PI * 2,
						tws: 0.01 + Math.random() * 0.03
					});
				}
			};
			const step = () => {
				raf = requestAnimationFrame(step);
				const p = palette();
				ctx.clearRect(0, 0, width, height);
				for (const q of particles) {
					q.x += q.vx;
					q.y += q.vy;
					q.tw += q.tws;
					if (q.x < -20) q.x = width + 20; else if (q.x > width + 20) q.x = -20;
					if (q.y < -20) q.y = height + 20; else if (q.y > height + 20) q.y = -20;
					if (pointer.active) {
						const dx = q.x - pointer.x;
						const dy = q.y - pointer.y;
						const d2 = dx * dx + dy * dy;
						if (d2 < LINK * LINK && d2 > 0.01) {
							const d = Math.sqrt(d2);
							const f = (LINK - d) / LINK;
							q.x += (dx / d) * f * 1.1;
							q.y += (dy / d) * f * 1.1;
						}
					}
				}
				for (let i = 0; i < particles.length; i++) {
					const a = particles[i];
					for (let j = i + 1; j < particles.length; j++) {
						const b = particles[j];
						const dx = a.x - b.x;
						const dy = a.y - b.y;
						const d2 = dx * dx + dy * dy;
						if (d2 < LINK * LINK) {
							const d = Math.sqrt(d2) || 1;
							const alpha = (1 - d / LINK) * 0.15;
							ctx.strokeStyle = `rgba(${p.line}, ${alpha})`;
							ctx.lineWidth = 1;
							ctx.beginPath();
							ctx.moveTo(a.x, a.y);
							ctx.lineTo(b.x, b.y);
							ctx.stroke();
						}
					}
				}
				for (const q of particles) {
					const twinkle = 0.55 + 0.45 * Math.sin(q.tw);
					ctx.fillStyle = `rgba(${p.dot}, ${(0.35 + 0.55 * twinkle) * 0.95})`;
					ctx.beginPath();
					ctx.arc(q.x, q.y, q.r, 0, Math.PI * 2);
					ctx.fill();
				}
			};
			const drawOnce = () => {
				const p = palette();
				ctx.clearRect(0, 0, width, height);
				for (let i = 0; i < particles.length; i++) {
					const a = particles[i];
					for (let j = i + 1; j < particles.length; j++) {
						const b = particles[j];
						const dx = a.x - b.x;
						const dy = a.y - b.y;
						const d2 = dx * dx + dy * dy;
						if (d2 < LINK * LINK) {
							const d = Math.sqrt(d2) || 1;
							ctx.strokeStyle = `rgba(${p.line}, ${(1 - d / LINK) * 0.15})`;
							ctx.lineWidth = 1;
							ctx.beginPath();
							ctx.moveTo(a.x, a.y);
							ctx.lineTo(b.x, b.y);
							ctx.stroke();
						}
					}
				}
				for (const q of particles) {
					ctx.fillStyle = `rgba(${p.dot}, 0.6)`;
					ctx.beginPath();
					ctx.arc(q.x, q.y, q.r, 0, Math.PI * 2);
					ctx.fill();
				}
			};
			const start = () => {
				if (!running && !prefersReduced) {
					running = true;
					raf = requestAnimationFrame(step);
				}
			};
			const stop = () => {
				if (running) {
					running = false;
					cancelAnimationFrame(raf);
				}
			};
			const onMove = (e) => {
				pointer.x = e.clientX;
				pointer.y = e.clientY;
				pointer.active = true;
			};
			const onOut = () => {
				pointer.active = false;
				pointer.x = -9999;
				pointer.y = -9999;
			};
			const onVisibility = () => {
				if (document.hidden) stop(); else start();
			};
			resize();
			if (prefersReduced) drawOnce();
			else start();
			window.addEventListener("resize", resize);
			window.addEventListener("mousemove", onMove, { passive: true });
			window.addEventListener("mouseout", onOut);
			document.addEventListener("visibilitychange", onVisibility);
			return () => {
				stop();
				window.removeEventListener("resize", resize);
				window.removeEventListener("mousemove", onMove);
				window.removeEventListener("mouseout", onOut);
				document.removeEventListener("visibilitychange", onVisibility);
				canvas.remove();
			};
		}
		//#endregion
		//#region plugin entry
		/** Cordis plugin name. */
		const name = "dsh-skin-dark-gold";
		/** Required services: none — pure visual skin. */
		const inject = [];
		/**
		* Client plugin body: force dark rendering and mount the particle field
		* (both disposed with the fiber).
		* @param ctx - client cordis context.
		*/
		function apply(ctx) {
			ctx.effect(() => forceDark(), "dsh-skin-dark-gold: force dark rendering");
			ctx.effect(() => mountParticles(), "dsh-skin-dark-gold: particle field");
		}
		//#endregion
		exports.name = name;
		exports.inject = inject;
		exports.apply = apply;
		return module.exports;
	}
});
