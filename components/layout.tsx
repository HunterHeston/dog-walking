import Navigation from "./tailwindui/navigation";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navigation></Navigation>
      {children}
    </>
  );
}
