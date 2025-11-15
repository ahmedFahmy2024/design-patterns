import Card from "./_components/Card";

export default function ChildrenExample() {
  return (
    <main className="container mx-auto flex flex-col gap-6 items-center justify-center h-screen ">
      Children Example
      <Card>
        <h2>Hello Ahmed</h2>
        <p>This is a simple example of the Children Pattern.</p>
      </Card>
      <Card>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Click Me
        </button>
      </Card>
    </main>
  );
}
