export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: "16px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        background: "white",
        marginBottom: "12px",
      }}
    >
      {children}
    </div>
  );
}
