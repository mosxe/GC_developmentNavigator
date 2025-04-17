/// <reference types="vite/client" />

declare module "*.svg?r" {
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  export default ReactComponent;
}
