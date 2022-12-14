import * as Styles from "./styles";
import { SectionPatternProps } from "./types";

export default function SectionPattern(props: SectionPatternProps) {
  const { children } = props;

  return (
    <Styles.Wrapper>
      <Styles.Container>{children}</Styles.Container>
    </Styles.Wrapper>
  );
}
