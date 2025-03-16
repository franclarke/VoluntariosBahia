"use client"
import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export function DashboardChart() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-[350px] w-full bg-muted/20 rounded-md">
        <p className="text-muted-foreground">Cargando gráfico...</p>
      </div>
    )
  }

  return (
    <div className="h-[350px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
          <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value: number) => `${value}`}
          />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <Tooltip
            formatter={(value: number) => [`${value}`, "Cantidad"]}
            contentStyle={{
              backgroundColor: "hsl(var(--background))",
              borderColor: "hsl(var(--border))",
              borderRadius: "var(--radius)",
            }}
          />
          <Bar name="Donaciones" dataKey="donaciones" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          <Bar name="Limpiezas" dataKey="limpiezas" fill="#22c55e" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

const data = [
  {
    name: "Ene",
    donaciones: 45,
    limpiezas: 12,
  },
  {
    name: "Feb",
    donaciones: 63,
    limpiezas: 18,
  },
  {
    name: "Mar",
    donaciones: 58,
    limpiezas: 15,
  },
  {
    name: "Abr",
    donaciones: 72,
    limpiezas: 22,
  },
  {
    name: "May",
    donaciones: 85,
    limpiezas: 28,
  },
  {
    name: "Jun",
    donaciones: 92,
    limpiezas: 32,
  },
  {
    name: "Jul",
    donaciones: 105,
    limpiezas: 38,
  },
  {
    name: "Ago",
    donaciones: 91,
    limpiezas: 30,
  },
  {
    name: "Sep",
    donaciones: 97,
    limpiezas: 34,
  },
  {
    name: "Oct",
    donaciones: 110,
    limpiezas: 42,
  },
  {
    name: "Nov",
    donaciones: 142,
    limpiezas: 48,
  },
  {
    name: "Dic",
    donaciones: 168,
    limpiezas: 52,
  },
]

