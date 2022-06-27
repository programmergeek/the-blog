import React from "react";

export const Logo: React.FC<{ size: "big" | "small" }> = (props) => {
  const size = {
    small: {
      width: "234",
      height: "81",
    },
    big: {
      width: "542",
      height: "130",
    },
  };
  return (
    <div>
      <svg
        style={{ transition: "150ms" }}
        width={size[props.size].width}
        height={size[props.size].height}
        viewBox={`0 0 ${size["big"].width} ${size["big"].height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M65.632 5.656V20.12H41.824V95H23.904V20.12H0.0960002V5.656H65.632ZM118.643 23.064C124.019 23.064 128.798 24.2587 132.979 26.648C137.16 28.952 140.403 32.408 142.707 37.016C145.096 41.5387 146.291 47 146.291 53.4V95H128.371V55.832C128.371 50.2 126.963 45.8907 124.147 42.904C121.331 39.832 117.491 38.296 112.627 38.296C107.678 38.296 103.752 39.832 100.851 42.904C98.035 45.8907 96.627 50.2 96.627 55.832V95H78.707V0.279999H96.627V32.92C98.931 29.848 102.003 27.4587 105.843 25.752C109.683 23.96 113.95 23.064 118.643 23.064ZM229.252 58.008C229.252 60.568 229.081 62.872 228.74 64.92H176.9C177.327 70.04 179.119 74.0507 182.276 76.952C185.433 79.8533 189.316 81.304 193.924 81.304C200.58 81.304 205.316 78.4453 208.132 72.728H227.46C225.412 79.5547 221.487 85.1867 215.684 89.624C209.881 93.976 202.756 96.152 194.308 96.152C187.481 96.152 181.337 94.6587 175.876 91.672C170.5 88.6 166.276 84.2907 163.204 78.744C160.217 73.1973 158.724 66.7973 158.724 59.544C158.724 52.2053 160.217 45.7627 163.204 40.216C166.191 34.6693 170.372 30.4027 175.748 27.416C181.124 24.4293 187.311 22.936 194.308 22.936C201.049 22.936 207.065 24.3867 212.356 27.288C217.732 30.1893 221.871 34.328 224.772 39.704C227.759 44.9947 229.252 51.096 229.252 58.008ZM210.692 52.888C210.607 48.28 208.943 44.6107 205.7 41.88C202.457 39.064 198.489 37.656 193.796 37.656C189.359 37.656 185.604 39.0213 182.532 41.752C179.545 44.3973 177.711 48.1093 177.028 52.888H210.692ZM323.52 49.176C328.555 50.1147 332.693 52.632 335.936 56.728C339.179 60.824 340.8 65.5173 340.8 70.808C340.8 75.5867 339.605 79.8107 337.216 83.48C334.912 87.064 331.541 89.88 327.104 91.928C322.667 93.976 317.419 95 311.36 95H272.832V5.656H309.696C315.755 5.656 320.96 6.63733 325.312 8.6C329.749 10.5627 333.077 13.2933 335.296 16.792C337.6 20.2907 338.752 24.2587 338.752 28.696C338.752 33.9013 337.344 38.2533 334.528 41.752C331.797 45.2507 328.128 47.7253 323.52 49.176ZM290.752 42.52H307.136C311.403 42.52 314.688 41.5813 316.992 39.704C319.296 37.7413 320.448 34.968 320.448 31.384C320.448 27.8 319.296 25.0267 316.992 23.064C314.688 21.1013 311.403 20.12 307.136 20.12H290.752V42.52ZM308.8 80.408C313.152 80.408 316.523 79.384 318.912 77.336C321.387 75.288 322.624 72.3867 322.624 68.632C322.624 64.792 321.344 61.8053 318.784 59.672C316.224 57.4533 312.768 56.344 308.416 56.344H290.752V80.408H308.8ZM373.002 0.279999V95H355.082V0.279999H373.002ZM422.195 96.152C415.368 96.152 409.224 94.6587 403.763 91.672C398.302 88.6 393.992 84.2907 390.835 78.744C387.763 73.1973 386.227 66.7973 386.227 59.544C386.227 52.2907 387.806 45.8907 390.963 40.344C394.206 34.7973 398.6 30.5307 404.147 27.544C409.694 24.472 415.88 22.936 422.707 22.936C429.534 22.936 435.72 24.472 441.267 27.544C446.814 30.5307 451.166 34.7973 454.323 40.344C457.566 45.8907 459.187 52.2907 459.187 59.544C459.187 66.7973 457.523 73.1973 454.195 78.744C450.952 84.2907 446.515 88.6 440.883 91.672C435.336 94.6587 429.107 96.152 422.195 96.152ZM422.195 80.536C425.438 80.536 428.467 79.768 431.283 78.232C434.184 76.6107 436.488 74.2213 438.195 71.064C439.902 67.9067 440.755 64.0667 440.755 59.544C440.755 52.8027 438.963 47.64 435.379 44.056C431.88 40.3867 427.571 38.552 422.451 38.552C417.331 38.552 413.022 40.3867 409.523 44.056C406.11 47.64 404.403 52.8027 404.403 59.544C404.403 66.2853 406.067 71.4907 409.395 75.16C412.808 78.744 417.075 80.536 422.195 80.536ZM500.108 22.936C505.399 22.936 510.049 24.0027 514.06 26.136C518.071 28.184 521.228 30.872 523.532 34.2V24.088H541.58V95.512C541.58 102.083 540.257 107.928 537.612 113.048C534.967 118.253 530.999 122.349 525.708 125.336C520.417 128.408 514.017 129.944 506.508 129.944C496.439 129.944 488.161 127.597 481.676 122.904C475.276 118.211 471.649 111.811 470.796 103.704H488.588C489.527 106.947 491.532 109.507 494.604 111.384C497.761 113.347 501.559 114.328 505.996 114.328C511.201 114.328 515.425 112.749 518.668 109.592C521.911 106.52 523.532 101.827 523.532 95.512V84.504C521.228 87.832 518.028 90.6053 513.932 92.824C509.921 95.0427 505.313 96.152 500.108 96.152C494.135 96.152 488.673 94.616 483.724 91.544C478.775 88.472 474.849 84.1627 471.948 78.616C469.132 72.984 467.724 66.5413 467.724 59.288C467.724 52.12 469.132 45.7627 471.948 40.216C474.849 34.6693 478.732 30.4027 483.596 27.416C488.545 24.4293 494.049 22.936 500.108 22.936ZM523.532 59.544C523.532 55.192 522.679 51.48 520.972 48.408C519.265 45.2507 516.961 42.8613 514.06 41.24C511.159 39.5333 508.044 38.68 504.716 38.68C501.388 38.68 498.316 39.4907 495.5 41.112C492.684 42.7333 490.38 45.1227 488.588 48.28C486.881 51.352 486.028 55.0213 486.028 59.288C486.028 63.5547 486.881 67.3093 488.588 70.552C490.38 73.7093 492.684 76.1413 495.5 77.848C498.401 79.5547 501.473 80.408 504.716 80.408C508.044 80.408 511.159 79.5973 514.06 77.976C516.961 76.2693 519.265 73.88 520.972 70.808C522.679 67.6507 523.532 63.896 523.532 59.544Z"
          fill="black"
        />
      </svg>
    </div>
  );
};
