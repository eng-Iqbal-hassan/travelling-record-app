import React from "react";

export function NoDataImg() {
  return (
    <svg width='250' height='250' viewBox='0 0 250 250' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='125' cy='90' r='40' fill='#2563EB' opacity='0.2' />
      <path
        d='M95 170C95 150 155 150 155 170C155 180 125 190 125 190C125 190 95 180 95 170Z'
        fill='#2563EB'
        opacity='0.3'
      />
      <path
        d='M125 60C108.536 60 95 73.536 95 90C95 106.464 108.536 120 125 120C141.464 120 155 106.464 155 90C155 73.536 141.464 60 125 60ZM125 110C113.954 110 105 101.046 105 90C105 78.954 113.954 70 125 70C136.046 70 145 78.954 145 90C145 101.046 136.046 110 125 110Z'
        fill='#2563EB'
      />
      <text x='125' y='230' font-size='22' text-anchor='middle' fill='#2563EB' font-family='Arial, sans-serif'>
        No Data Found
      </text>
    </svg>
  );
}
