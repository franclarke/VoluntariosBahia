import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ArrowUpRight, ArrowDownLeft } from "lucide-react"

export function RecentTransactions() {
  return (
    <div className="space-y-8">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center">
          <Avatar className="h-9 w-9 border">
            {transaction.type === "credit" ? (
              <ArrowDownLeft className="h-4 w-4 text-green-500" />
            ) : (
              <ArrowUpRight className="h-4 w-4 text-red-500" />
            )}
            <AvatarFallback>{transaction.name[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{transaction.name}</p>
            <p className="text-sm text-muted-foreground">{transaction.date}</p>
          </div>
          <div className={`ml-auto font-medium ${transaction.type === "credit" ? "text-green-500" : "text-red-500"}`}>
            {transaction.type === "credit" ? "+" : "-"}$ {transaction.amount.toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  )
}

const transactions = [
  {
    id: "1",
    name: "Juan Pérez",
    amount: 250.0,
    date: "14/11/2023",
    type: "credit",
  },
  {
    id: "2",
    name: "María González",
    amount: 1000.0,
    date: "13/11/2023",
    type: "debit",
  },
  {
    id: "3",
    name: "Carlos Rodríguez",
    amount: 500.0,
    date: "12/11/2023",
    type: "credit",
  },
  {
    id: "4",
    name: "Ana Martínez",
    amount: 750.0,
    date: "11/11/2023",
    type: "debit",
  },
  {
    id: "5",
    name: "Roberto López",
    amount: 2500.0,
    date: "10/11/2023",
    type: "credit",
  },
]

