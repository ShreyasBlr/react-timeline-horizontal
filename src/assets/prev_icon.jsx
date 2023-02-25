import { memo } from "react";

function PrevIcon({ style }) {
  return (
    <div style={{ ...style }}>
      <svg
        fill={style?.color || "#000000"}
        height={style?.height || "100%"}
        width={style?.width || "100%"}
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 477.175 477.175"
        xml:space="preserve"
      >
        <g>
          <path
            d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
		c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
          />
        </g>
      </svg>
    </div>
  );
}
export default memo(PrevIcon);
