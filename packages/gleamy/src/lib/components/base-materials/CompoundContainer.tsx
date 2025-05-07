export function CompoundContainer(
  props: React.PropsWithChildren<{
    style?: React.CSSProperties;
    className?: string;
  }>,
) {
  return (
    <div
      {...props}
      style={{
        display: 'block',
        position: 'relative',
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
}
