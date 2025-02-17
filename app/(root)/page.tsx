import SearchForm from '@/components/SearchForm'
import StartupCard from '@/components/StartupCard'

export default async function Home({
    searchParams,
}: {
    searchParams?: Promise<{ query?: string }>
}) {
    const query = (await searchParams)?.query

    const posts = [
        {
            _createdAt: new Date(),
            views: 55,
            author: { _id: 1, name: 'green' },
            _id: 1,
            description: 'This is a description',
            image: 'https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EC%A0%84%EA%B2%BD%EC%97%90-%EB%82%98%EB%AC%B4%EA%B0%80-%EC%9E%88%EB%8A%94-%EB%85%B9%EC%83%89%EA%B3%BC-%EB%B3%B4%EB%9D%BC%EC%83%89-%ED%95%98%EB%8A%98-O2YNKmrNMq0',
            category: 'Robots',
            title: 'We Robots',
        },
    ]

    return (
        <>
            <section className="pink_container">
                <h1 className="heading">
                    Pitch Your Startup, <br /> Connect With Entrepreneurs
                </h1>
                <p className="sub-heading !max-w-3xl">
                    Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
                    Competitions.
                </p>
                <SearchForm query={query} />
            </section>
            <section className="section_container">
                <p className="text-30-semibold">
                    {query ? `Search results for "${query}"` : 'All Startups'}
                </p>
                <ul className="card_grid mt-7">
                    {posts?.length > 0 ? (
                        posts?.map((post: StartupTypeCard, index: number) => (
                            <StartupCard key={post?._id} post={post} />
                        ))
                    ) : (
                        <p className="no-results">No startups found</p>
                    )}
                </ul>
            </section>
        </>
    )
}
