import { Link as RemixLink } from "react-router";
import { RemixLinkProps } from "@react-router/react/dist/components";

export type LinkProps = RemixLinkProps;

const Link = (props: LinkProps) => {
  const target =
    typeof props.to === "string" && props.to.startsWith("/")
      ? undefined
      : "_blank";
  return <RemixLink target={props.target || target} {...props} />;
};

export default Link;
