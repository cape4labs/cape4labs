import Link from "next/link"

const ASSETS = {
    shared: {
        gh: "/img/projects/gh.png",
        web: "/img/projects/web.png",
        article: "/img/projects/article.png",
    },
    zauth: {
        logo: "/img/projects/zauth-logo.png",
        problem: `The problem: Where is your data really stored when you
connect your X, Discord or Github to any SocialFi /
InfoFi platform?`,
        screenshot: "/img/projects/zauth-screenshot.png",
        solution: `Our solution: Store this data
on-chain and encrypted, using
Zama fhe. We built a widget to
make this idea come true.`,
        gh: "https://github.com/cape4labs/zauth_frontend",
    },
    sf: {
        logo: "/img/projects/sunflower-logo.png",
        problem: `The problem: 60% of all crypto is BTC. And only 2% of it is used.
There is no user-friendly mobile app that can drive the adoption of BTCFi`,
        screenshot1: "/img/projects/sunflower-screenshot-1.png",
        screenshot2: "/img/projects/sunflower-screenshot-2.png",
        solution: `Our solution: we are building the new wallet
on Stacks (L2 for Bitcoin with focus on DeFi).
We are to integrate all popular Stacks
protocols and AI-powered DeFi analytics in one
mobile wallet so you can finally unlock the
potencial of your Bitcoin.`,
        gh: "https://github.com/cape4labs/sunflower_wallet_app",
        web: "https://sunflower-wallet.webflow.io/",
        article:
            "https://medium.com/@no__hive/defi-lacks-fine-mobile-ui-ux-whoever-changes-it-wins-71274f07ceac",
    },
    audata: {
        logo: "/img/projects/audata-logo.png",
        problem: `The problem: The industry is struggling to get new audio data for its
models, voice assistants, studies, etc. All is because of people who are
rarely ready to give their private data away, especially their voice
messages where private topics might be discussed.`,
        solution: `Our solution:  We believe we have
already solved it: with
AudataDAO: All data encrypted
user-side and user-owned, all
data content kept unrevealed even
while it is used.`,
        gh: "https://github.com/cape4labs/audatadao_dlp_ui",
        web: "https://audata.space",
    },
}

export default function Projects() {
    // bg-[rgba(174, 174, 192, 0.85)
    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <Project
                data={ASSETS.zauth}
                children={
                    <>
                        <img src={ASSETS.zauth.logo} className="h-15 absolute left-5 top-3" />
                        <pre className="absolute left-50 font-primary">{ASSETS.zauth.problem}</pre>
                        <pre className="absolute left-5 top-40 font-primary text-3xl">
                            {ASSETS.zauth.solution}
                        </pre>
                        <img
                            src={ASSETS.zauth.screenshot}
                            className="w-45 absolute right-20 bottom-15"
                        />
                    </>
                }
            />
            <Project
                data={ASSETS.sf}
                children={
                    <>
                        <img src={ASSETS.sf.logo} className="h-25 absolute right-10 top-5" />
                        <pre className="absolute left-10 top-5 font-primary">
                            {ASSETS.sf.problem}
                        </pre>
                        <pre className="absolute left-10 bottom-30 font-primary text-2xl">
                            {ASSETS.sf.solution}
                        </pre>
                        <img
                            src={ASSETS.sf.screenshot1}
                            className="w-25 absolute right-10 bottom-5"
                        />
                        <img
                            src={ASSETS.sf.screenshot2}
                            className="w-25 absolute right-40 bottom-5"
                        />
                    </>
                }
            />
            <Project
                data={ASSETS.audata}
                children={
                    <>
                        <img src={ASSETS.audata.logo} className="h-6 absolute left-10 top-7" />
                        <pre className="absolute right-10 font-primary">
                            {ASSETS.audata.problem}
                        </pre>
                        <pre className="absolute left-10 top-30 font-primary text-2xl">
                            {ASSETS.audata.solution}
                        </pre>
                    </>
                }
            />
        </div>
    )
}

type ProjectData = {
    gh: string
    web?: string
    article?: string
}

function Project({ data, children }: { data: ProjectData; children: React.ReactNode }) {
    return (
        <div className="aspect-2/1 w-full max-w-4xl border-2 relative bg-linear-to-b from-white to-gray-300/55 via-gray-100/85">
            {children}
            <div className="flex flex-row gap-1 absolute left-0 right-0 bottom-3 justify-center">
                {data.gh ? <ProjectLink link={data.gh} imageSrc={ASSETS.shared.gh} /> : null}
                {data.web ? <ProjectLink link={data.web} imageSrc={ASSETS.shared.web} /> : null}
                {data.article ? (
                    <ProjectLink link={data.article} imageSrc={ASSETS.shared.article} />
                ) : null}
            </div>
        </div>
    )
}

function ProjectLink({ link, imageSrc }: { link: string; imageSrc: string }) {
    return (
        <Link href={link}>
            <img src={imageSrc} className="h-6" />
        </Link>
    )
}
