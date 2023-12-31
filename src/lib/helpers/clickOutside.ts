/** Dispatch event on click outside of node */
export function clickOutside(node: HTMLElement) {
	const handleClick = (event: MouseEvent | null) => {
		if (node && !node.contains(event?.target as Node) && !event?.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('click_outside', node as CustomEventInit))
		}
	}

	document.addEventListener('click', (e) => handleClick(e), true)

	return {
		destroy() {
			document.removeEventListener('click', (e) => handleClick(e), true)
		}
	}
}
