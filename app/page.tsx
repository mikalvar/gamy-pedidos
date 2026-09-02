"use client";

import { useMemo, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { saveAs } from "file-saver";

export default function Home() {
  const previewRef = useRef<HTMLDivElement>(null);

  // Datos del Cliente
  const [nombre, setNombre] = useState("");
  const [ci, setCi] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  // Ubicación y Entrega
  const [ciudad, setCiudad] = useState("");
  const [barrio, setBarrio] = useState("");
  const [maps, setMaps] = useState("");
  const [horario, setHorario] = useState("");

  // Producto y Venta
  const [fragancia, setFragancia] = useState("");
  const [vendedor, setVendedor] = useState("");

  // Financiación
  const [cuotas, setCuotas] = useState<number>(1);
  const [montoCuota, setMontoCuota] = useState<number>(0);
  const [entregaInicial, setEntregaInicial] = useState<number>(0);
  const [delivery, setDelivery] = useState<number>(0);

  const fechaRegistro = new Date().toLocaleDateString("es-PY");

  const total = useMemo(() => {
    return cuotas * montoCuota + entregaInicial + delivery;
  }, [cuotas, montoCuota, entregaInicial, delivery]);

  const descargarPNG = async () => {
    if (!previewRef.current) return;

    try {
      const dataUrl = await toPng(previewRef.current, {
        quality: 1,
        pixelRatio: 2,
      });
      saveAs(dataUrl, `orden-envio-${ci || "cliente"}.png`);
    } catch (err) {
      console.error("Error al generar PNG:", err);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
    outline: "none",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "4px",
    fontWeight: "600" as const,
    fontSize: "13px",
    color: "#374151",
  };

  return (
    <main style={{ minHeight: "100vh", background: "#f3f4f6", padding: "32px 16px" }}>
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "24px",
          alignItems: "start",
        }}
      >
        {/* FORMULARIO */}
        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "28px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
          }}
        >
          <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px", color: "#111827" }}>
            Gamy Pedidos
          </h1>

          <div style={{ display: "grid", gap: "16px" }}>
            {/* Datos Personales */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div>
                <label style={labelStyle}>Nombre y Apellido</label>
                <input
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ej: María Pérez"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Número de CI</label>
                <input
                  value={ci}
                  onChange={(e) => setCi(e.target.value)}
                  placeholder="Ej: 1.234.567"
                  style={inputStyle}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div>
                <label style={labelStyle}>Fecha de Nacimiento</label>
                <input
                  type="date"
                  value={fechaNacimiento}
                  onChange={(e) => setFechaNacimiento(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>WhatsApp</label>
                <input
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="0981 xxx xxx"
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Dirección */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div>
                <label style={labelStyle}>Ciudad</label>
                <input
                  value={ciudad}
                  onChange={(e) => setCiudad(e.target.value)}
                  placeholder="Ej: Asunción"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Barrio</label>
                <input
                  value={barrio}
                  onChange={(e) => setBarrio(e.target.value)}
                  placeholder="Ej: Centro"
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Link Google Maps</label>
              <input
                value={maps}
                onChange={(e) => setMaps(e.target.value)}
                placeholder="https://maps.google.com/..."
                style={inputStyle}
              />
            </div>

            {/* Detalles del Pedido */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div>
                <label style={labelStyle}>Fragancia</label>
                <input
                  value={fragancia}
                  onChange={(e) => setFragancia(e.target.value)}
                  placeholder="Nombre del perfume"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Disponibilidad Horaria</label>
                <input
                  value={horario}
                  onChange={(e) => setHorario(e.target.value)}
                  placeholder="Ej: 08:00 a 17:00 hs"
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Financiación */}
            <div
              style={{
                background: "#f9fafb",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid #f3f4f6",
                display: "grid",
                gap: "12px",
              }}
            >
              <span style={{ fontWeight: "bold", fontSize: "14px", color: "#374151" }}>
                Detalles de Pago
              </span>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={labelStyle}>Cantidad de Cuotas</label>
                  <input
                    type="number"
                    min="1"
                    value={cuotas}
                    onChange={(e) => setCuotas(Number(e.target.value))}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Monto por Cuota (Gs)</label>
                  <input
                    type="number"
                    min="0"
                    value={montoCuota}
                    onChange={(e) => setMontoCuota(Number(e.target.value))}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={labelStyle}>Entrega Inicial (Gs)</label>
                  <input
                    type="number"
                    min="0"
                    value={entregaInicial}
                    onChange={(e) => setEntregaInicial(Number(e.target.value))}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Delivery (Gs)</label>
                  <input
                    type="number"
                    min="0"
                    value={delivery}
                    onChange={(e) => setDelivery(Number(e.target.value))}
                    style={inputStyle}
                  />
                </div>
              </div>
            </div>

            <div>
              <label style={labelStyle}>Vendedor</label>
              <input
                value={vendedor}
                onChange={(e) => setVendedor(e.target.value)}
                placeholder="Nombre del vendedor"
                style={inputStyle}
              />
            </div>
          </div>

          <div
            style={{
              marginTop: "20px",
              background: "#fef3c7",
              padding: "16px",
              borderRadius: "12px",
              border: "1px solid #fde68a",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "14px", fontWeight: "600", color: "#92400e" }}>TOTAL A COBRAR</div>
            <h2 style={{ fontSize: "32px", fontWeight: "bold", color: "#78350f", margin: "4px 0 0 0" }}>
              Gs {total.toLocaleString("es-PY")}
            </h2>
          </div>

          <button
            onClick={descargarPNG}
            style={{
              width: "100%",
              marginTop: "16px",
              padding: "14px",
              background: "#16a34a",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "15px",
              cursor: "pointer",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            📸 Descargar PNG
          </button>
        </div>

        {/* PREVIEW */}
        <div
          ref={previewRef}
          style={{
            background: "white",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid #e5e7eb",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
          }}
        >
          <div
            style={{
              background: "#111827",
              color: "#f59e0b",
              padding: "16px",
              fontWeight: "bold",
              textAlign: "center",
              letterSpacing: "1px",
              fontSize: "14px",
            }}
          >
            ORDEN DE ENVÍO Y PAGARÉ
          </div>

          <div style={{ padding: "24px" }}>
            <h2 style={{ textAlign: "center", color: "#b45309", fontSize: "24px", margin: 0 }}>
              GAMY PERFUMES
            </h2>
            <p style={{ textAlign: "center", color: "#64748b", fontSize: "12px", marginTop: "4px" }}>
              Información para Delivery y Cobranza
            </p>

            <div
              style={{
                marginTop: "16px",
                border: "2px solid #f59e0b",
                borderRadius: "12px",
                padding: "14px",
                textAlign: "center",
                background: "#fffbeb",
              }}
            >
              <div style={{ fontSize: "12px", fontWeight: "bold", color: "#92400e" }}>TOTAL A COBRAR</div>
              <h3 style={{ fontSize: "30px", fontWeight: "bold", color: "#78350f", margin: "4px 0 0 0" }}>
                Gs {total.toLocaleString("es-PY")}
              </h3>
            </div>

            <div style={{ marginTop: "20px", display: "grid", gap: "10px", fontSize: "14px" }}>
              <div><b>Nombre:</b> {nombre || "-"}</div>
              <div><b>CI:</b> {ci || "-"}</div>
              <div><b>Fecha Nac:</b> {fechaNacimiento || "-"}</div>
              <div><b>WhatsApp:</b> {whatsapp || "-"}</div>
              <div><b>Ciudad:</b> {ciudad || "-"}</div>
              <div><b>Barrio:</b> {barrio || "-"}</div>
              <div>
                <b>Ubicación:</b>
                <div style={{ wordBreak: "break-all", color: "#2563eb", marginTop: "2px", fontSize: "13px" }}>
                  {maps || "-"}
                </div>
              </div>
              <div><b>Fragancia:</b> {fragancia || "-"}</div>
              <div><b>Horario:</b> {horario || "-"}</div>
            </div>

            <div
              style={{
                marginTop: "20px",
                background: "#f8fafc",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
              }}
            >
              <b style={{ color: "#334155", display: "block", marginBottom: "8px" }}>PLAN DE FINANCIACIÓN</b>
              <div style={{ fontSize: "13px", display: "grid", gap: "4px" }}>
                <div>• Entrega Inicial: Gs {entregaInicial.toLocaleString("es-PY")}</div>
                <div>• {cuotas} cuota(s) de Gs {montoCuota.toLocaleString("es-PY")}</div>
                <div>• Delivery: Gs {delivery.toLocaleString("es-PY")}</div>
              </div>
            </div>

            <div style={{ marginTop: "20px", fontSize: "13px", color: "#64748b", display: "grid", gap: "4px" }}>
              <div><b>Fecha Registro:</b> {fechaRegistro}</div>
              <div><b>Vendedor:</b> {vendedor || "-"}</div>
            </div>

            <div
              style={{
                marginTop: "40px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "24px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <hr style={{ border: "none", borderTop: "1px solid #cbd5e1" }} />
                <span style={{ fontSize: "12px", color: "#64748b", marginTop: "6px", display: "block" }}>
                  Firma Cliente
                </span>
              </div>
              <div style={{ textAlign: "center" }}>
                <hr style={{ border: "none", borderTop: "1px solid #cbd5e1" }} />
                <span style={{ fontSize: "12px", color: "#64748b", marginTop: "6px", display: "block" }}>
                  Firma Vendedor
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
