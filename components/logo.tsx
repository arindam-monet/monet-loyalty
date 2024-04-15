type Props = {
    className? : string;
}
const Logo: React.FC<Props> = ({className}) => {
  return (
    <svg
      viewBox="0 0 174 35"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="current"
      stroke="current"
    >
      <path
        d="M69.192 11.42C70.5573 11.42 71.7627 11.6867 72.808 12.22C73.8747 12.7533 74.7067 13.5747 75.304 14.684C75.9013 15.772 76.2 17.18 76.2 18.908V28.7H72.2V19.42C72.2 17.9053 71.8693 16.7747 71.208 16.028C70.5467 15.2813 69.5973 14.908 68.36 14.908C67.4853 14.908 66.7067 15.1 66.024 15.484C65.3627 15.868 64.84 16.4333 64.456 17.18C64.0933 17.9267 63.912 18.876 63.912 20.028V28.7H59.912V19.42C59.912 17.9053 59.5813 16.7747 58.92 16.028C58.2587 15.2813 57.3093 14.908 56.072 14.908C55.1973 14.908 54.4187 15.1 53.736 15.484C53.0747 15.868 52.552 16.4333 52.168 17.18C51.8053 17.9267 51.624 18.876 51.624 20.028V28.7H47.624V11.612H51.432V16.156L50.76 14.812C51.336 13.7027 52.168 12.86 53.256 12.284C54.3653 11.708 55.624 11.42 57.032 11.42C58.632 11.42 60.0187 11.8147 61.192 12.604C62.3867 13.3933 63.176 14.588 63.56 16.188L61.992 15.644C62.5467 14.364 63.464 13.34 64.744 12.572C66.024 11.804 67.5067 11.42 69.192 11.42ZM90.9427 28.924C89.1934 28.924 87.6361 28.5507 86.2707 27.804C84.9054 27.036 83.8281 25.9907 83.0387 24.668C82.2494 23.3453 81.8547 21.8413 81.8547 20.156C81.8547 18.4493 82.2494 16.9453 83.0387 15.644C83.8281 14.3213 84.9054 13.2867 86.2707 12.54C87.6361 11.7933 89.1934 11.42 90.9427 11.42C92.7134 11.42 94.2814 11.7933 95.6467 12.54C97.0334 13.2867 98.1107 14.3107 98.8787 15.612C99.6681 16.9133 100.063 18.428 100.063 20.156C100.063 21.8413 99.6681 23.3453 98.8787 24.668C98.1107 25.9907 97.0334 27.036 95.6467 27.804C94.2814 28.5507 92.7134 28.924 90.9427 28.924ZM90.9427 25.5C91.9241 25.5 92.7987 25.2867 93.5667 24.86C94.3347 24.4333 94.9321 23.8147 95.3587 23.004C95.8067 22.1933 96.0307 21.244 96.0307 20.156C96.0307 19.0467 95.8067 18.0973 95.3587 17.308C94.9321 16.4973 94.3347 15.8787 93.5667 15.452C92.7987 15.0253 91.9347 14.812 90.9747 14.812C89.9934 14.812 89.1187 15.0253 88.3507 15.452C87.6041 15.8787 87.0067 16.4973 86.5587 17.308C86.1107 18.0973 85.8867 19.0467 85.8867 20.156C85.8867 21.244 86.1107 22.1933 86.5587 23.004C87.0067 23.8147 87.6041 24.4333 88.3507 24.86C89.1187 25.2867 89.9827 25.5 90.9427 25.5ZM115.504 11.42C116.869 11.42 118.085 11.6867 119.152 12.22C120.24 12.7533 121.093 13.5747 121.712 14.684C122.33 15.772 122.64 17.18 122.64 18.908V28.7H118.64V19.42C118.64 17.9053 118.277 16.7747 117.552 16.028C116.848 15.2813 115.856 14.908 114.576 14.908C113.637 14.908 112.805 15.1 112.08 15.484C111.354 15.868 110.789 16.444 110.384 17.212C110 17.9587 109.808 18.908 109.808 20.06V28.7H105.808V11.612H109.616V16.22L108.944 14.812C109.541 13.724 110.405 12.892 111.536 12.316C112.688 11.7187 114.01 11.42 115.504 11.42ZM137.697 28.924C135.799 28.924 134.135 28.5507 132.705 27.804C131.297 27.036 130.199 25.9907 129.409 24.668C128.641 23.3453 128.257 21.8413 128.257 20.156C128.257 18.4493 128.631 16.9453 129.377 15.644C130.145 14.3213 131.191 13.2867 132.513 12.54C133.857 11.7933 135.383 11.42 137.089 11.42C138.753 11.42 140.236 11.7827 141.537 12.508C142.839 13.2333 143.863 14.2573 144.609 15.58C145.356 16.9027 145.729 18.46 145.729 20.252C145.729 20.4227 145.719 20.6147 145.697 20.828C145.697 21.0413 145.687 21.244 145.665 21.436H131.425V18.78H143.553L141.985 19.612C142.007 18.6307 141.804 17.7667 141.377 17.02C140.951 16.2733 140.364 15.6867 139.617 15.26C138.892 14.8333 138.049 14.62 137.089 14.62C136.108 14.62 135.244 14.8333 134.497 15.26C133.772 15.6867 133.196 16.284 132.769 17.052C132.364 17.7987 132.161 18.684 132.161 19.708V20.348C132.161 21.372 132.396 22.2787 132.865 23.068C133.335 23.8573 133.996 24.4653 134.849 24.892C135.703 25.3187 136.684 25.532 137.793 25.532C138.753 25.532 139.617 25.3827 140.385 25.084C141.153 24.7853 141.836 24.316 142.433 23.676L144.577 26.14C143.809 27.036 142.839 27.7293 141.665 28.22C140.513 28.6893 139.191 28.924 137.697 28.924ZM157.924 28.924C156.046 28.924 154.596 28.444 153.572 27.484C152.548 26.5027 152.036 25.0627 152.036 23.164V7.83601H156.036V23.068C156.036 23.8787 156.238 24.508 156.644 24.956C157.07 25.404 157.657 25.628 158.404 25.628C159.3 25.628 160.046 25.3933 160.644 24.924L161.764 27.772C161.294 28.156 160.718 28.444 160.036 28.636C159.353 28.828 158.649 28.924 157.924 28.924ZM149.22 14.94V11.74H160.612V14.94H149.22Z"
      />
      <path
        d="M163.94 10.14V0.780012H166.33V1.78001H165.19V9.14001H166.33V10.14H163.94ZM173.01 10.14H170.63V9.14001H171.76V1.78001H170.63V0.780012H173.01V10.14Z"
      />
      <ellipse cx="6.73948" cy="8.20001" rx="3.52073" ry="3.5" fill="current" />
      <ellipse cx="26.4558" cy="4.20001" rx="3.52073" ry="3.5" fill="current" />
      <ellipse cx="24.9465" cy="31.2" rx="3.52073" ry="3.5" fill="current" />
      <ellipse cx="4.02369" cy="27.3" rx="4.02369" ry="4" fill="current" />
      <ellipse cx="31.485" cy="22.2" rx="2.51481" ry="2.5" fill="current" />
      <ellipse
        cx="17.6422"
        cy="17.6702"
        rx="7.43514"
        ry="7.6119"
      />
      <line
        y1="-1"
        x2="6.50124"
        y2="-1"
        transform="matrix(0.77364 0.633626 -0.615728 0.787958 7.84619 10.7)"
        strokeWidth="2"
        stroke="current"
      />
      <line
        y1="-1"
        x2="8.72332"
        y2="-1"
        transform="matrix(0.8072 -0.590278 0.572195 0.820117 5.83398 27.4758)"
        strokeWidth="2"
        stroke="current"
      />
      <line
        y1="-1"
        x2="11.9367"
        y2="-1"
        transform="matrix(0.50563 -0.862751 0.852084 0.523405 21.9287 14.0879)"
        strokeWidth="2"
        stroke="current"
      />
      <line
        y1="-1"
        x2="8.79004"
        y2="-1"
        transform="matrix(0.572195 0.820117 -0.8072 0.590278 18.9111 24.3863)"
        strokeWidth="2"
        stroke="current"
      />
      <line
        y1="-1"
        x2="9.56595"
        y2="-1"
        transform="matrix(0.946409 0.32297 -0.309596 0.950868 22.9351 20.2669)"
        strokeWidth="2"
        stroke="current"
      />
    </svg>
  );
};

export default Logo;