import Navbar from "../Navbar";

export default function NavbarExample() {
  return (
    <div className="min-h-[200px] bg-background">
      <Navbar />
      <div className="pt-24 px-4">
        <p className="text-muted-foreground text-center">
          Scroll down to see navbar compact effect
        </p>
      </div>
    </div>
  );
}