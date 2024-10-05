interface PageMainProps {
    pageName: string
    pageInfo: string
}

export function PageMain({pageName, pageInfo}: PageMainProps){
    return (
        <div
                className="
                h-[30vh]
                bg-[url(../assets/bannerHome.png)]
                flex
                flex-col
                justify-center
                items-center
            ">
                <h1 className="text-6xl font-bold text-white">{pageName}</h1>
                <p className="text-gray-300 text-lg">{pageInfo}</p>
        </div>
    )
}