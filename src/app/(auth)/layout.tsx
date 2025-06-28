import { Frame3 } from "@/assets/png"
import { AppBanner } from "@/assets/svg"
import { Main, Page, Section } from "@/components/common"
import Image from "next/image"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Page>
            <Main className='relative'>
                {children}
                <Section className="flex-1 h-full hidden sm:block">
                    <Image src={Frame3} alt="app banner" className="h-full w-full object-cover"></Image>
                </Section>
            </Main>
        </Page>
    )
}

export default Layout