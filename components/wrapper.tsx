import { ReactNode } from "react";

export const Wrapper = ({
  label ,
  children,
}: {
  label?: string;
  children: ReactNode;
}) => {
  return (
    <section
      className="flex size-full flex-col gap-10
  text-white"
    >
      {label && <h1 className="text-3xl font-bold">{label}</h1>}
      {children}
    </section>
  );
};
