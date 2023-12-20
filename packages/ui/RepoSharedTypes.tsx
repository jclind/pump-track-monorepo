import * as React from "react";

interface Props {
  children?: React.ReactNode;
}

export const RepoSharedTypes = ({ children }: Props) => {
  return (
    <div>
      <h1>@repo/shared-types</h1>
      {children}
    </div>
  );
};
