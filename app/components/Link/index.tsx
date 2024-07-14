import { Link as RemixLink } from "@remix-run/react";
import { RemixLinkProps } from "@remix-run/react/dist/components";

export type LinkProps = RemixLinkProps;

const Link = (props: LinkProps) => {
  const target =
    typeof props.to === "string" && props.to.startsWith("/")
      ? undefined
      : "_blank";
  return <RemixLink target={props.target || target} {...props} />;
};

export default Link;
