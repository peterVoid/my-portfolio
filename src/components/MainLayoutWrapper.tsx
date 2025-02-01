export default function MainLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="mx-auto w-full max-w-[1100px] px-5">{children}</main>;
}
