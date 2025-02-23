import React from 'react'
import Ping from '@/components/Ping'
import { client } from '@/sanity/lib/client'
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries'

const View = async ({ id }: { id: string }) => {
    const { views: totalViews } = await client
        .withConfig({ useCdn: false })
        .fetch(STARTUP_VIEWS_QUERY, { id })

    // TODO: Update the number of views

    return (
        <div className="view-container">
            <div className="absolute -right-2 -top-2">
                <Ping />
            </div>

            <p className="view-text">
                <span className="font-black">{totalViews} views</span>
            </p>
        </div>
    )
}

export default View
