type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <nav>
        <ul className="flex">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Reviews</li>
          <li>Contact</li>
        </ul>
      </nav>
      {children}
    </>
  );
}
