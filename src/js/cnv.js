const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
export const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);
