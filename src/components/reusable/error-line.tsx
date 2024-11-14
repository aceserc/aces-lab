interface Props {
  children?: unknown;
}
const ErrorLine = ({ children }: Props) => {
  if (!children)
    return null;
  return (
    <span className="text-sm text-destructive">
      {String(children)}
    </span>
  );
};
export default ErrorLine;
