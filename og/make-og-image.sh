#!/bin/zsh --no-rcs
# Rebuilds og-image.png, the link preview image, from the current index.html and generator.js.
# Usage: og/make-og-image.sh   (from anywhere; needs Google Chrome installed)

chrome="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
repo="${0:A:h:h}"
work=$(mktemp -d)

if [[ ! -x "${chrome}" ]]; then
	printf 'Google Chrome not found at %s\n' "${chrome}" >&2
	exit 1
fi

mkdir "${work}/site"
cp "${repo}/og/card.html" "${work}/card.html"
cp "${repo}/generator.js" "${work}/site/generator.js"

# The snapshot loads generator.js at the end of the body, then ticks a few topics and shows a fixed question so the image is the same every time.
perl -0pe '
	s#\t<script src="generator.js" defer></script>\n##;
	s#</body>#<script src="generator.js"></script>\n<script>\nfor (const key of ["crime", "consumers", "family"]) { document.querySelector("input[name=bank][value=" + key + "]").checked = true; }\nshowMessage("Crime: " + questions("2009", "crime", "essay").find((q) => q.startsWith("Evaluate the effectiveness of legal and non-legal measures") && q.includes("sentencing")));\n</script>\n</body>#;
' "${repo}/index.html" > "${work}/site/index.html"

"${chrome}" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files --force-device-scale-factor=1 --window-size=1200,630 --virtual-time-budget=3000 --screenshot="${repo}/og-image.png" "file://${work}/card.html" > /dev/null 2>&1
chromeExit=$?
rm -rf "${work}"
if [[ ${chromeExit} -ne 0 || ! -s "${repo}/og-image.png" ]]; then
	printf 'Screenshot failed (exit %d)\n' "${chromeExit}" >&2
	exit 1
fi
printf 'Wrote %s\n' "${repo}/og-image.png"
