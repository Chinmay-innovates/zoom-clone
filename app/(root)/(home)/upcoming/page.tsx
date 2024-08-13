import { CallList } from "@/components/call-list";
import { Wrapper } from "@/components/wrapper";

const Upcoming = () => {
  return (
    <Wrapper label="Upcoming">
      <CallList type="upcoming" />
    </Wrapper>
  );
};

export default Upcoming;
