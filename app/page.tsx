export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial"
      }}
    >
      <div
        style={{
          padding: "30px",
          border: "1px solid #ddd",
          borderRadius: "12px"
        }}
      >
        <h1>Gamy Pedidos</h1>

        <p>
          Aplicación de generación de órdenes de envío.
        </p>
      </div>
    </main>
  );
}
