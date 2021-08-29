import * as React from "react";

function LogoutIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.895 9.23a.77.77 0 00-.783.77c0 .42.346.77.783.77H14v4.78C14 18 11.975 20 9.472 20H4.517C2.025 20 0 18.01 0 15.56V4.45C0 1.99 2.035 0 4.528 0h4.965C11.975 0 14 1.99 14 4.44v4.79H7.895zm9.735-2.69l2.92 2.91a.764.764 0 010 1.09l-2.92 2.91c-.15.15-.35.23-.54.23a.773.773 0 01-.55-1.32l1.6-1.59H14V9.23h4.14l-1.6-1.59c-.3-.3-.3-.79 0-1.09.3-.31.79-.31 1.09-.01z"
        fill="#ADADAD"
      />
    </svg>
  );
}

export default LogoutIcon;
