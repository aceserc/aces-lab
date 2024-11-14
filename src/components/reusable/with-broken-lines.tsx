import { Fragment } from "react/jsx-runtime";

interface Props {
  children?: string;
}
const WithBrokenLines = ({ children }: Props) => {
  return children?.trim().split("\n").map((line, index) => (
    <Fragment key={index}>
      {index > 0 && <br />}
      {line}
    </Fragment>
  ));
};
export default WithBrokenLines;
