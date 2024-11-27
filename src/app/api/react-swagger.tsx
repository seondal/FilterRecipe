"use client";

import "swagger-ui-react/swagger-ui.css";

type Props = {
  spec: Record<string, any>;
};

function ReactSwagger({ spec }: Props) {
  return <ReactSwagger spec={spec} />;
}

export default ReactSwagger;
