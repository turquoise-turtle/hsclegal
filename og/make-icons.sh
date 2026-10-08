#!/bin/zsh --no-rcs
# Rebuilds favicon-32.png and apple-touch-icon.png from favicon.svg.
# Usage: og/make-icons.sh   (from anywhere; needs Google Chrome installed)

chrome="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
repo="${0:A:h:h}"
work=$(mktemp -d)

if [[ ! -x "${chrome}" ]]; then
	printf 'Google Chrome not found at %s\n' "${chrome}" >&2
	exit 1
fi

cp "${repo}/favicon.svg" "${work}/favicon.svg"

# The SVG goes in a page beside it because Chrome does not size a bare SVG to a small window reliably.
# apple-touch-icon.png is filled to the corners because iOS rounds them itself and turns transparency black.
render() {
	local size="$1" background="$2" out="$3"
	printf '<!DOCTYPE html><body style="margin:0;background:%s"><img src="favicon.svg" width="%d" height="%d" style="display:block"></body>' "${background}" "${size}" "${size}" > "${work}/icon.html"
	rm -f "${repo}/${out}"
	"${chrome}" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --default-background-color=00000000 --virtual-time-budget=1000 --window-size="${size},${size}" --screenshot="${repo}/${out}" "file://${work}/icon.html" > /dev/null 2>&1
	if [[ $? -ne 0 || ! -s "${repo}/${out}" ]]; then
		printf 'Screenshot of %s failed\n' "${out}" >&2
		return 1
	fi
	printf 'Wrote %s\n' "${repo}/${out}"
}

render 32 transparent favicon-32.png
smallExit=$?
render 180 "#8f4c38" apple-touch-icon.png
touchExit=$?
rm -rf "${work}"
if [[ ${smallExit} -ne 0 || ${touchExit} -ne 0 ]]; then
	exit 1
fi