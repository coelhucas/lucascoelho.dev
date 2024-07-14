export { };

declare global {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    NETLIFY: string;
    GA_TRACKING_ID: string;
  }
  interface Process {
    env: ProcessEnv;
  }
  let process: Process;

  declare module "*.css";
  declare module "*.mdx";
}
