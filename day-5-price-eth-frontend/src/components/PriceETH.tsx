'use client'

import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { aggregatorV3InterfaceABI } from './abi'

const PRICE_FEED_ADDRESS = '0x694AA1769357215DE4FAC081bf1f309aDC325306'

export default function PriceETH() {
    const [ethPrice, setEthPrice] = useState<string>('Cargando...')

    useEffect(() => {
        const fetchPrice = async () => {
            try {
                const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL)
                const contract = new ethers.Contract(PRICE_FEED_ADDRESS, aggregatorV3InterfaceABI, provider)
                const data = await contract.latestRoundData()
                const formatted = Number(data.answer) / 1e8
                setEthPrice(`$${formatted.toFixed(2)}`)
            } catch (err) {
                console.error('Error al obtener el precio:', err)
                setEthPrice('Error al cargar precio')
            }
        }

        fetchPrice()
    }, [])

    return (
        <div className="flex flex-col items-center justify-center mt-20">
            <h1 className="text-3xl font-bold mb-4">Precio actual de ETH/USD</h1>
            <p className="text-2xl text-green-600">{ethPrice}</p>
        </div>
    )
}
