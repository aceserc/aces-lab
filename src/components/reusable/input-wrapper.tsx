import { Label } from "../ui/label";
import ErrorLine from "./error-line";

interface Props {
  children: React.ReactNode;
  htmlFor: string;
  label: string;
  error: unknown;
}
const InputWrapper = ({ children, error, htmlFor, label }: Props) => {
  return (
    <div
      className="flex flex-col"
    >
      <Label htmlFor={htmlFor} className="mb-1">
        {label}
      </Label>
      {children}
      <ErrorLine>
        {error}
      </ErrorLine>
    </div>
  );
};
export default InputWrapper;
