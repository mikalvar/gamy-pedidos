"use client";

import { useMemo, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { saveAs } from "file-saver";

export default function Home() {
  const previewRef = useRef<HTMLDivElement>(null);
  const [nombre, setNombre] = useState("");

const [fechaNacimiento, setFechaNacimiento] =
  useState("");

const [maps, setMaps] = useState("");

const [horario, setHorario] =
  useState("");
  
  const [ci, setCi] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const [ciudad, setCiudad] = useState("");
  const [barrio, setBarrio] = useState("");

  const [fragancia, setFragancia] = useState("");

  const [cuotas, setCuotas] = useState(1);
  const [montoCuota, setMontoCuota] = useState(0);

  const [entregaInicial, setEntregaInicial] = useState(0);
  const [delivery, setDelivery] = useState(0);

  const [vendedor, setVendedor] = useState("");

  const fechaRegistro = new Date().toLocaleDateString("es-PY");

  const total = useMemo(() => {
  return cuotas * montoCuota + entregaInicial + delivery;
}, [
  cuotas,
  montoCuota,
  entregaInicial,
  delivery,
]);

const descargarPNG = async () => {
  if (!previewRef.current) return;

  const boton =
    document.getElementById("btn-descargar");

  if (boton) {
    boton.style.display = "none";
  }

  const dataUrl = await toPng(previewRef.current, {
    quality: 1,
    pixelRatio: 2,
  });

  if (boton) {
    boton.style.display = "block";
  }

  saveAs(
    dataUrl,
    `pedido-${ci || "cliente"}.png`
  );
};

return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f4f5",
        padding: "24px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
        }}
      >
        {/* FORMULARIO */}

        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "24px",
            border: "1px solid #e5e7eb",
          }}
        >
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Gamy Pedidos
          </h1>

          <div
            style={{
              display: "grid",
              gap: "12px",
            }}
          >
            <div>
  <label
    style={{
      display: "block",
      marginBottom: "6px",
      fontWeight: "bold",
    }}
  >

<div>
  <label
    style={{
      display: "block",
      marginBottom: "6px",
      fontWeight: "bold",
    }}
  >
    Nombre y Apellido
  </label>

  <input
    value={nombre}
    onChange={(e) => setNombre(e.target.value)}
    style={{
      width: "100%",
      padding: "10px",
    }}
  />
</div>

<div>
  <label
    style={{
      display: "block",
      marginBottom: "6px",
      fontWeight: "bold",
    }}
  >
    Número de CI
  </label>

  <input
    value={ci}
    onChange={(e) => setCi(e.target.value)}
    style={{
      width: "100%",
      padding: "10px",
    }}
  />
</div>

  <input
    value={nombre}
    onChange={(e) =>
      setNombre(e.target.value)
    }
    style={{
      width: "100%",
      padding: "10px",
    }}
  />
</div>

            <div>
  <label
    style={{
      display: "block",
      marginBottom: "6px",
      fontWeight: "bold",
    }}
  >
    Fecha de Nacimiento
  </label>

  <input
    type="date"
    value={fechaNacimiento}
    onChange={(e) =>
      setFechaNacimiento(e.target.value)
    }
    style={{
      width: "100%",
      padding: "10px",
    }}
  />
</div>

            <input
              placeholder="WhatsApp"
              value={whatsapp}
              onChange={(e) =>
                setWhatsapp(e.target.value)
              }
            />

            <input
              placeholder="Ciudad"
              value={ciudad}
              onChange={(e) =>
                setCiudad(e.target.value)
              }
            />

            <input
              placeholder="Barrio"
              value={barrio}
              onChange={(e) =>
                setBarrio(e.target.value)
              }
            />

            <div>
  <label
    style={{
      display: "block",
      marginBottom: "6px",
      fontWeight: "bold",
    }}
  >
    Link Google Maps
  </label>

  <input
    value={maps}
    onChange={(e) =>
      setMaps(e.target.value)
    }
    style={{
      width: "100%",
      padding: "10px",
    }}
  />
</div>

            <input
              placeholder="Fragancia"
              value={fragancia}
              onChange={(e) =>
                setFragancia(e.target.value)
              }
            />

<div>
  <label
    style={{
      display: "block",
      marginBottom: "6px",
      fontWeight: "bold",
    }}
  >
    Disponibilidad Horaria
  </label>

  <input
    value={horario}
    onChange={(e) =>
      setHorario(e.target.value)
    }
    style={{
      width: "100%",
      padding: "10px",
    }}
  />
</div>
            
            <input
              type="number"
              placeholder="Cantidad de Cuotas"
              value={cuotas}
              onChange={(e) =>
                setCuotas(Number(e.target.value))
              }
            />

            <input
              type="number"
              placeholder="Monto por Cuota"
              value={montoCuota}
              onChange={(e) =>
                setMontoCuota(
                  Number(e.target.value)
                )
              }
            />

            <input
              type="number"
              placeholder="Entrega Inicial"
              value={entregaInicial}
              onChange={(e) =>
                setEntregaInicial(
                  Number(e.target.value)
                )
              }
            />

            <input
              type="number"
              placeholder="Delivery"
              value={delivery}
              onChange={(e) =>
                setDelivery(
                  Number(e.target.value)
                )
              }
            />

            <input
              placeholder="Vendedor"
              value={vendedor}
              onChange={(e) =>
                setVendedor(e.target.value)
              }
            />
          </div>

          <div
            style={{
              marginTop: "20px",
              background: "#fef3c7",
              padding: "16px",
              borderRadius: "12px",
            }}
          >
            <div>Total a Cobrar</div>

            <h2
              style={{
                fontSize: "32px",
                marginTop: "8px",
              }}
            >
              Gs {total.toLocaleString("es-PY")}
            </h2>
          </div>

<button
  id="btn-descargar"
  onClick={descargarPNG}
  style={{
    width: "100%",
    marginTop: "12px",
    padding: "12px",
    background: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontWeight: "bold",
    cursor: "pointer",
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
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid #e5e7eb",
          }}
        >
          <div
            style={{
              background: "#111827",
              color: "#f59e0b",
              padding: "16px",
              fontWeight: "bold",
            }}
          >
            ORDEN DE ENVÍO Y PAGARÉ
          </div>

          <div
            style={{
              padding: "24px",
            }}
          >
            <h2
  style={{
    textAlign: "center",
    color: "#b45309",
    fontSize: "26px",
  }}
>
  GAMY PERFUMES
</h2>

<p
  style={{
    textAlign: "center",
    color: "#64748b",
    fontSize: "12px",
    marginTop: "6px",
  }}
>
  Información para Delivery y Cobranza
</p>
            </h2>

            <div
              style={{
                marginTop: "20px",
                border: "2px solid #f59e0b",
                borderRadius: "12px",
                padding: "16px",
                textAlign: "center",
              }}
            >
              <div>
                TOTAL A COBRAR
              </div>

              <h3
                style={{
                  fontSize: "34px",
                  marginTop: "10px",
                }}
              >
                Gs {total.toLocaleString("es-PY")}
              </h3>
            </div>

            <div style={{ marginTop: "20px" }}>
              <b>Nombre:</b> {nombre}
            </div>

            <div style={{ marginTop: "12px" }}>
              <b>CI:</b> {ci}
            </div>

            <div style={{ marginTop: "12px" }}>
  <b>Fecha Nac:</b>
  {" "}
  {fechaNacimiento}
</div>
            
            <div style={{ marginTop: "12px" }}>
              <b>WhatsApp:</b> {whatsapp}
            </div>

            <div style={{ marginTop: "12px" }}>
              <b>Ciudad:</b> {ciudad}
            </div>

            <div style={{ marginTop: "12px" }}>
              <b>Barrio:</b> {barrio}
            </div>

<div style={{ marginTop: "12px" }}>
  <b>Ubicación:</b>
</div>

<div
  style={{
    wordBreak: "break-word",
    color: "#2563eb",
  }}
>
  {maps}
</div>
            
            <div style={{ marginTop: "12px" }}>
              <b>Fragancia:</b> {fragancia}
            </div>

<div style={{ marginTop: "12px" }}>
  <b>Horario:</b>
  {" "}
  {horario}
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
  <b>PLAN DE FINANCIACIÓN</b>

  <div style={{ marginTop: "10px" }}>
    {cuotas} cuotas x Gs{" "}
    {montoCuota.toLocaleString("es-PY")}
  </div>

  <div style={{ marginTop: "8px" }}>
    Entrega Inicial:
    {" "}
    Gs {entregaInicial.toLocaleString("es-PY")}
  </div>

  <div style={{ marginTop: "8px" }}>
    Delivery:
    {" "}
    Gs {delivery.toLocaleString("es-PY")}
  </div>

  <hr style={{ margin: "10px 0" }} />

  <div
    style={{
      fontSize: "20px",
      fontWeight: "bold",
      color: "#b45309",
    }}
  >
    TOTAL:
    {" "}
    Gs {total.toLocaleString("es-PY")}
  </div>
</div>

            <div style={{ marginTop: "10px" }}>
              Entrega Inicial: Gs{" "}
              {entregaInicial.toLocaleString("es-PY")}
            </div>

            <div style={{ marginTop: "10px" }}>
              {cuotas} cuotas de Gs{" "}
              {montoCuota.toLocaleString("es-PY")}
            </div>

            <div style={{ marginTop: "10px" }}>
              Delivery: Gs{" "}
              {delivery.toLocaleString("es-PY")}
            </div>

            <hr
              style={{
                marginTop: "20px",
                marginBottom: "20px",
              }}
            />

            <div>
              Fecha Registro: {fechaRegistro}
            </div>

            <div style={{ marginTop: "10px" }}>
              Vendedor: {vendedor}

<div
  style={{
    marginTop: "40px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  }}
>
  <div>
    <hr />
    <div
      style={{
        textAlign: "center",
        marginTop: "8px",
        fontSize: "12px",
      }}
    >
      Firma Cliente
    </div>
  </div>

  <div>
    <hr />
    <div
      style={{
        textAlign: "center",
        marginTop: "8px",
        fontSize: "12px",
      }}
    >
      Firma Vendedor
    </div>
  </div>
</div>
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
