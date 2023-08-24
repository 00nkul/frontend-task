import React from 'react'
import LeafletMap from './LeafletMap'
import LineGraph from './LineGraph'

export default function Layout() {
    return (
        <div className="flex flex-row p-5 gap-2 h-full">
            <div className="basis-4/6">
                <LeafletMap />
            </div>
            <div className="w-full">
                <LineGraph />
            </div>
        </div>
    )
}
