import { LinkProps } from "react-router";
import { Link as BaseLink } from "react-router";

const Link = (props: LinkProps) => {
  const target =
    typeof props.to === "string" && props.to.startsWith("/")
      ? undefined
      : "_blank";
  return <BaseLink target={props.target || target} {...props} />;
};

export default Link;
