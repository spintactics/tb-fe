import { useUserPositions } from "../hooks/usePositions"
import { UserPosition } from "../types/UserPositions"
import { formatDate } from "../utils/DateFormatter"

function PositionsTableComponent({ refreshKey }: { refreshKey?: number}) {

  const { userPositions, loading, error } = useUserPositions(refreshKey)

  const columns: { header: string, accessor: keyof UserPosition }[] = [
    { header: 'User', accessor: 'user' },
    { header: 'channel', accessor: 'channel' },
    { header: 'Security Type', accessor: 'securityType' },
    { header: 'Direction', accessor: 'direction' },
    { header: 'Quantities', accessor: 'quantities' },
    { header: 'Open Quantities', accessor: 'openQuantities' },
    { header: 'Close Quantities', accessor: 'closeQuantities' },
    { header: 'Total Quantity', accessor: 'totalQuantity' },
    { header: 'Security Name', accessor: 'securityName' },
    { header: 'Prices', accessor: 'prices' },
    { header: 'open Prices', accessor: 'openPrices' },
    { header: 'Close Prices', accessor: 'closePrices' },
    { header: 'Avg Price', accessor: 'avgPrice' },
    { header: 'Avg Open Price', accessor: 'avgOpenPrice' },
    { header: 'Avg Close Price', accessor: 'avgClosePrice' },
    { header: 'Adjusted Cost Basis', accessor: 'adjustedCostBasis' },
    { header: 'Flags', accessor: 'flags' },
    { header: 'Date Opened', accessor: 'dateOpened' },
    { header: 'Date Closed', accessor: 'dateClosed' },
    { header: 'Sentiment', accessor: 'sentiment' },
    { header: 'Total Profit', accessor: 'totalProfit' },
    { header: 'Profit Percent', accessor: 'profitPercent' },
    { header: 'User Trades', accessor: 'userTrades' },
    { header: 'Expiration Date', accessor: 'expirationDate' },
    { header: 'Option Type', accessor: 'optionType' },
    { header: 'Strike Price', accessor: 'strikePrice' },
    { header: 'Edited', accessor: 'edited' },
    { header: 'Tags', accessor: 'tags' },
    { header: 'Info', accessor: 'info' },
  ]

  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => 
            <th key={col.accessor}>{col.header}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {userPositions.map((pos, idx) => (
          <tr key={`pos-tbl-${idx}`}>
            {columns.map((col) => (
              <td key={col.accessor}>
                {Array.isArray(pos[col.accessor])
                  ? Array.isArray(pos[col.accessor]) && typeof (pos[col.accessor] as any[])[0] === 'object' && (pos[col.accessor] as any[])[0] instanceof Date
                    ? (pos[col.accessor] as Date[]).map(date => formatDate(date)).join(', ')
                    : (pos[col.accessor] as any[]).join(', ')
                  : pos[col.accessor] instanceof Date
                  ? formatDate((pos[col.accessor] as Date))
                  : typeof pos[col.accessor] === 'boolean'
                  ? (pos[col.accessor] ?? '').toString()
                  : pos[col.accessor] !== undefined
                  ? pos[col.accessor]?.toString()
                  : ''}
              </td>            
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PositionsTableComponent