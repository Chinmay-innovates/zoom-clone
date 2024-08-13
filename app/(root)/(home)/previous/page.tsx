import { CallList } from "@/components/call-list";
import { Wrapper } from "@/components/wrapper";
import React from "react";

const Previous = () => {
  return (
    <Wrapper label="Previous">
      <CallList type="ended" />
    </Wrapper>
  );
};

export default Previous;
