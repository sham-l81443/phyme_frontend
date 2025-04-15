import { Main, Page, Section } from "@/components/common"


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Page>
            <Main className='relative'>
                {children}
                <Section className="flex-1 bg-primary hidden sm:block"></Section>
            </Main>
        </Page>
    )
}

export default Layout