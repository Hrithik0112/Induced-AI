export const Button = ({ children, classname }: { children: string; classname: string }) => {
  return <button className={classname}>{children}</button>;
};
