import FloatingButtons from "../FloatingButtons";

export default function FloatingButtonsExample() {
  return (
    <div className="relative h-[200px] bg-background">
      <p className="text-center text-muted-foreground pt-8">
        Floating buttons visible on mobile (bottom right)
      </p>
      <FloatingButtons />
    </div>
  );
}