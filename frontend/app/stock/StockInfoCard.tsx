import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useState } from "react";

export default function StockInfoCard() {
  const [stock, setStock] = useState({
    name: "",
    price: "",
    currency: "USD",
    date: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setStock({ ...stock, [e.target.name]: e.target.value });
  };

  return (
    <Card className="w-full max-w-sm mx-auto p-4 space-y-4">
      <CardHeader>
        <CardTitle>Información de Acción</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>
          <Label htmlFor="name">Nombre de la acción</Label>
          <Input id="name" name="name" value={stock.name} onChange={handleChange} placeholder="Ej. Apple" />
        </div>
        <div>
          <Label htmlFor="price">Precio</Label>
          <Input id="price" name="price" type="number" value={stock.price} onChange={handleChange} placeholder="Ej. 150" />
        </div>
        <div>
          <Label htmlFor="currency">Moneda</Label>
          <Input id="currency" name="currency" value={stock.currency} onChange={handleChange} placeholder="Ej. USD" />
        </div>
        <div>
          <Label htmlFor="date">Fecha de compra</Label>
          {/* TODO: use DatePicker && VALIDATION */}
          <Input id="date" name="date" type="date" value={stock.date} onChange={handleChange} />
        </div>
      </CardContent>
    </Card>
  );
}
