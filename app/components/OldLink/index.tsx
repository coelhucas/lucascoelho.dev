import { Link as RemixLink } from "@remix-run/react";
import { RemixLinkProps } from "@remix-run/react/dist/components";

type FontWeight = "thin" | "regular" | "bold";

export type ReusedLinkProps = {
  weight?: FontWeight;
  omitUnderline?: boolean;
  anchor?: boolean;
  tags?: string[];
  highlight?: boolean;
  unstyled?: boolean;
};

export type LinkProps = ReusedLinkProps &
  RemixLinkProps & {
    name?: string;
  };

type ClassOptions = {
  weight: FontWeight;
  hasTags: boolean;
  omitUnderline: boolean;
  highlight: boolean;
  className?: string;
  unstyled?: boolean;
};

const weightClasses = {
  thin: "link--thin",
  regular: "link--regular",
  bold: "link--bold",
};

const noUnderline = "no-underline";

const getClassNames = ({
  weight,
  omitUnderline,
  className,
  highlight,
  unstyled,
  hasTags,
}: ClassOptions) => {
  if (unstyled) return "link " + noUnderline;

  const classes = [
    "link",
    weightClasses[weight],
    hasTags ? "link-w-tags" : null,
    className,
    highlight ? "highlight" : null,
  ];
  if (omitUnderline) classes.push(noUnderline);
  return classes.filter(Boolean).join(" ");
};

function OldLink({
  unstyled = false,
  weight = "thin",
  omitUnderline = false,
  children,
  anchor = false,
  className,
  highlight = false,
  name = undefined,
  tags,
  to,
  ...props
}: LinkProps) {
  const resolvedTags = tags ? `[${tags.join(", ")}]` : "";
  const sharedProps = {
    className: getClassNames({
      unstyled,
      hasTags: !!tags?.length,
      weight,
      omitUnderline,
      className,
      highlight,
    }),
    "data-tags": resolvedTags,
  };

  return (
    <>
      {anchor ? (
        <a
          target="_blank"
          rel="noreferrer"
          href={to}
          {...props}
          {...sharedProps}
        >
          {children}
        </a>
      ) : (
        <RemixLink aria-label={name} to={to} {...sharedProps}>
          {children}
        </RemixLink>
      )}
    </>
  );
}

export default Link;
