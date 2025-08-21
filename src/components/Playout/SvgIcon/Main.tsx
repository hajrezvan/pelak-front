// <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">

// import menu from "../../../../SvgIcon/Main/menu.svg";
// import xMark from "../../../../SvgIcon/Main/x-mark.svg";
// import bookmark from "../../../../SvgIcon/Main/bookmark.svg";
// import xCircle from "../../../../SvgIcon/Main/x-circle.svg";

// import XXXXX from "../../../../SvgIcon/Main/XXXXXXXX.svg";

export const MainIcons = {
	menu: (
		<path d="M3 12H21M3 6H21M3 18H21" />
	),
	xMark: (
		<path d="M18 6L6 18M6 6L18 18" />
	),
	bookmark: (
		<path d="M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V21L12 17L5 21V7.8Z" />
	),
	xCircle: (
		<>
			<path d="M12,1c3,0,7,0,9,2s2,6,2,9,0,7-2,9-6,2-9,2-7,0-9-2S1,15,1,12,1,5,3,3,9,1,12,1Z" />
			<line x1="8" y1="8" x2="16" y2="16" />
			<line x1="16" y1="8" x2="8" y2="16" />
		</>
	),
	search: (
		<>
			<path d="M10.5,1c2.59,0,6.05,0,7.77,1.73s1.73,5.18,1.73,7.77,0,6.05-1.73,7.77-5.18,1.73-7.77,1.73-6.05,0-7.78-1.73-1.73-5.18-1.73-7.77,0-6.05,1.73-7.77,5.18-1.73,7.77-1.73h.01Z" />
			<line x1="18.27" y1="18.27" x2="23" y2="23" />
		</>
	),
	globe: (
		<>
			<path d="M12,1c3,0,7,0,9,2s2,6,2,9,0,7-2,9-6,2-9,2-7,0-9-2S1,15,1,12,1,5,3,3,9,1,12,1Z" />
			<path d="M12,1c1.09,0,3.27,1,4,3s1,5,1,8-.27,6-1,8-2.91,3-4,3-3.27-1-4-3-1-5-1-8,.27-6,1-8c.73-2,2.91-3,4-3Z" />
			<path d="M1,10s3-2,11-2,11,2,11,2" />
			<path d="M1,14s3,2,11,2,11-2,11-2" />
		</>
	)
}