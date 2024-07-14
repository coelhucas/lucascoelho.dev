import styles from "./tag.module.css";

const keywordsToClass = {
  javascript: "color-js",
  typescript: "color-ts",
  gdscript: "color-gd",
  "c#": "color-cs",
  lua: "color-lua",
};

const Tag = ({
  text,
  ...props
}: React.HTMLProps<HTMLSpanElement> & {
  text: string;
}) => {
  const lowercase = text.toLowerCase();
  const className =
    lowercase in keywordsToClass
      ? keywordsToClass[lowercase as keyof typeof keywordsToClass]
      : "color-default";

  return (
    <span {...props}>
      {props.children}
      <span className={styles[className]}>{text}</span>
    </span>
  );
};

export default Tag;
