/**
 * dsh-skin-dark-gold · node half
 *
 * The browser half (exports["./client"], discovered through the package.json
 * `dsh.client` declaration) applies the dark-gold particle skin. This host
 * half only pre-paints the page background so the shell never flashes white
 * before the browser half materializes.
 */

/** Cordis plugin name. */
const name = "dsh-skin-dark-gold";

/** Required services: the web server's index tap (optional — injected lazily). */
const inject = ["webServer"];

/**
 * Build the pre-plugin boot style: paint a dark gold background before the
 * shell bundle runs, so the first paint already matches the skin.
 * @returns the style tag HTML.
 */
function bootSkinStyle() {
	return `<style id="dsh-skin-dark-gold-boot">
html { background: #191208; }
</style>`;
}

/**
 * Insert the boot style at the top of the document head.
 * @param html - raw application index HTML.
 * @returns HTML containing the boot style.
 */
function injectBootSkin(html) {
	const style = bootSkinStyle();
	const head = /<head(?:\s[^>]*)?>/i.exec(html);
	if (head === null) return `${style}${html}`;
	const at = head.index + head[0].length;
	return `${html.slice(0, at)}${style}${html.slice(at)}`;
}

/**
 * Host plugin body: tap the index response once the web server exists.
 * @param ctx - host context that may acquire the web server service.
 */
function apply(ctx) {
	ctx.inject(["webServer"], (httpCtx) => {
		httpCtx.effect(() => httpCtx.webServer.tapIndex((html) => injectBootSkin(html)), "dsh-skin-dark-gold: boot background");
	});
}

export { apply, inject, name };
