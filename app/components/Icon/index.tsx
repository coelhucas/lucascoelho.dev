import { SVGProps } from "react";

const icons = {
  email: (props: SVGProps<SVGSVGElement>) => (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>E-mail icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.96802 4H18.032C18.4706 3.99999 18.8491 3.99998 19.1624 4.02135C19.4922 4.04386 19.8221 4.09336 20.1481 4.22836C20.8831 4.53284 21.4672 5.11687 21.7716 5.85195C21.9066 6.17788 21.9561 6.50779 21.9787 6.83762C22 7.15088 22 7.52936 22 7.96801V16.032C22 16.4706 22 16.8491 21.9787 17.1624C21.9561 17.4922 21.9066 17.8221 21.7716 18.1481C21.4672 18.8831 20.8831 19.4672 20.1481 19.7716C19.8221 19.9066 19.4922 19.9561 19.1624 19.9787C18.8491 20 18.4706 20 18.032 20H5.96801C5.52936 20 5.15088 20 4.83762 19.9787C4.50779 19.9561 4.17788 19.9066 3.85195 19.7716C3.11687 19.4672 2.53284 18.8831 2.22836 18.1481C2.09336 17.8221 2.04386 17.4922 2.02135 17.1624C1.99998 16.8491 1.99999 16.4706 2 16.032V7.96802C1.99999 7.52937 1.99998 7.15088 2.02135 6.83762C2.04386 6.50779 2.09336 6.17788 2.22836 5.85195C2.53284 5.11687 3.11687 4.53284 3.85195 4.22836C4.17788 4.09336 4.50779 4.04386 4.83762 4.02135C5.15088 3.99998 5.52937 3.99999 5.96802 4ZM4.31745 6.27777C4.68114 5.86214 5.3129 5.82002 5.72854 6.1837L11.3415 11.095C11.7185 11.4249 12.2815 11.4249 12.6585 11.095L18.2715 6.1837C18.6871 5.82002 19.3189 5.86214 19.6825 6.27777C20.0462 6.69341 20.0041 7.32517 19.5885 7.68885L13.9755 12.6002C12.8444 13.5899 11.1556 13.5899 10.0245 12.6002L4.41153 7.68885C3.99589 7.32517 3.95377 6.69341 4.31745 6.27777Z"
      />
    </svg>
  ),
  github: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <title>Github icon</title>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  linkedin: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <title>LinkedIn icon</title>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  youtube: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M10 9.333l5.333 2.662-5.333 2.672v-5.334zm14-4.333v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5zm-4 7c-.02-4.123-.323-5.7-2.923-5.877-2.403-.164-7.754-.163-10.153 0-2.598.177-2.904 1.747-2.924 5.877.02 4.123.323 5.7 2.923 5.877 2.399.163 7.75.164 10.153 0 2.598-.177 2.904-1.747 2.924-5.877z" />
      <title>Youtube icon</title>
    </svg>
  ),
  blog: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        fill="#010002"
        d="M49.325 17.554c-.785-3.31-4.095-5.663-7.467-5.382v-.642c0-.575-.251-1.118-.708-1.527-1.41-1.266-4.614-1.068-5.925-.927l-19.072 2.08-2.603-1.465 21.055-2.187a1.5 1.5 0 10-.31-2.984L10.023 7.041c-.124-.32-.344-.6-.653-.774l-.564-.317L30.37 3.606a1.5 1.5 0 10-.324-2.982L3.407 3.52c-.33.036-.62.18-.847.388C1.162 4.43 0 5.915 0 8.563v27.45c0 3.296 1.903 6.947 4.331 8.313l3.567 2.007c.229.128.482.192.735.192.04 0 .078-.013.118-.016.75 1.271 1.708 2.337 2.783 2.941l3.566 2.006a1.502 1.502 0 002.235-1.308v-26.56l5.291 25.796c.649 3.166 3.207 5.553 5.949 5.553.23 0 .461-.017.692-.05l3.951-.577c.016-.002.03-.009.045-.012.014-.002.028-.001.042-.004l17.173-3.556a6.315 6.315 0 004.084-2.804 6.315 6.315 0 00.812-4.891l-6.049-25.489zM7.134 42.461l-1.332-.749C4.31 40.873 3 38.21 3 36.013V8.563c0-1.056.325-1.883.739-1.883.157 0 .367.07.593.197l2.802 1.575v34.009zm7.202 5.125l-1.331-.749c-1.493-.84-2.802-3.503-2.802-5.699v-27.45c0-1.056.325-1.883.739-1.883.157 0 .368.069.592.196l2.802 1.576v34.009zm3-27.809v-5.731l18.213-1.986c1.626-.175 2.759-.05 3.309.091v.398l-13.686 1.785c-.043.006-.083.02-.125.029-.034.008-.068.009-.102.018l-3.817 1.113c-1.894.554-3.271 2.216-3.792 4.283zm11.497 32.141c-1.415.202-2.882-1.252-3.269-3.138l-5.36-26.134c-.394-1.921.414-3.877 1.764-4.271l2.256-.658 6.985 33.854-2.376.347zm23.199-5.595a3.339 3.339 0 01-2.162 1.478l-15.703 3.251L27.162 17.1l14.785-1.929c1.957-.256 4.003 1.152 4.459 3.077l6.05 25.489c.213.902.063 1.82-.424 2.586z"
      ></path>
      <path
        fill="#010002"
        d="M43.929 19.242a1.498 1.498 0 00-1.712-1.108l-11.48 2.006a1.498 1.498 0 00-1.212 1.772l1.561 7.802a1.5 1.5 0 001.706 1.187l11.926-1.895a1.5 1.5 0 001.219-1.85l-2.008-7.914zm-10.186 8.469l-.976-4.881 8.596-1.502 1.261 4.973-8.881 1.41z"
      ></path>
    </svg>
  ),
  twitter: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <title>Twitter icon</title>
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
    </svg>
  ),
  sun: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        className="theme-button"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 4V2m0 18v2M6.414 6.414 5 5m12.728 12.728 1.414 1.414M4 12H2m18 0h2m-4.271-5.586L19.143 5M6.415 17.728 5 19.142M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z"
      />
    </svg>
  ),
  moon: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <title>Moon icon</title>
      <path
        className="theme-button"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 6a9 9 0 0 0 9 9c.91 0 1.787-.134 2.614-.385A9.004 9.004 0 0 1 12 21 9 9 0 0 1 9.386 3.386 8.999 8.999 0 0 0 9 6Z"
      />
    </svg>
  ),
  rss: (props: SVGProps<SVGSVGElement>) => (
    <svg
      height="24"
      width="24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="-143 145 512 512"
      xmlSpace="preserve"
      {...props}
    >
      <title>RSS icon</title>
      <path
        d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z
	 M43.1,518.7c-6.2,6.2-14.7,9.9-24.1,9.9c-9.4,0-17.8-3.8-24-9.9c-6.2-6.2-10-14.6-10-23.9c0-9.4,3.8-17.8,10-24s14.6-10,24-10
	c9.4,0,17.9,3.8,24,10c6.2,6.2,10,14.6,10,24C53,504.2,49.2,512.6,43.1,518.7z M104.8,529c-0.1-32.1-12.5-62.3-35.1-84.9
	c-22.6-22.6-52.8-35.2-84.7-35.2V360c46.6,0,88.7,19,119.3,49.6c30.6,30.6,49.5,72.8,49.6,119.4H104.8z M192,529
	c-0.1-114.2-92.8-207.1-206.9-207.1V273c70.6,0,134.5,28.7,180.8,75.1c46.3,46.4,75,110.3,75.1,180.9H192z"
      />
    </svg>
  ),
  mastodon: (props: SVGProps<SVGSVGElement>) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Mastodon icon</title>
      <path d="M23.193 7.879c0-5.206-3.411-6.732-3.411-6.732C18.062.357 15.108.025 12.041 0h-.076c-3.068.025-6.02.357-7.74 1.147 0 0-3.411 1.526-3.411 6.732 0 1.192-.023 2.618.015 4.129.124 5.092.934 10.109 5.641 11.355 2.17.574 4.034.695 5.535.612 2.722-.15 4.25-.972 4.25-.972l-.09-1.975s-1.945.613-4.129.539c-2.165-.074-4.449-.233-4.799-2.891a5.499 5.499 0 0 1-.048-.745s2.125.52 4.817.643c1.646.075 3.19-.097 4.758-.283 3.007-.359 5.625-2.212 5.954-3.905.517-2.665.475-6.507.475-6.507zm-4.024 6.709h-2.497V8.469c0-1.29-.543-1.944-1.628-1.944-1.2 0-1.802.776-1.802 2.312v3.349h-2.483v-3.35c0-1.536-.602-2.312-1.802-2.312-1.085 0-1.628.655-1.628 1.944v6.119H4.832V8.284c0-1.289.328-2.313.987-3.07.68-.758 1.569-1.146 2.674-1.146 1.278 0 2.246.491 2.886 1.474L12 6.585l.622-1.043c.64-.983 1.608-1.474 2.886-1.474 1.104 0 1.994.388 2.674 1.146.658.757.986 1.781.986 3.07v6.304z" />
    </svg>
  ),
} as const;

export type IconNames = keyof typeof icons;

type IconProps = SVGProps<SVGSVGElement> & {
  as: IconNames;
};

function Icon({ as, ...props }: IconProps) {
  const Component = icons[as];
  return <Component {...props} className="icon" />;
}

export default Icon;
