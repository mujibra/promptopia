import '@styles/globals.css';


import Nav from '@components/Nav';
import Provider from '@components/Provider';
export const metadata = {
    tittle : "Promtopia",
    description : 'Discover & Share AI Prompts'
}

const RootLayout = ({ children }) => {
    return (
        <html lang='e'>
            <Provider>
                <body>
                    <div className='main'>
                        <div className='gradient' />
                    </div>

                    <main className='app'>
                        <Nav/>
                        {children}
                    </main>
                </body>
            </Provider>
        </html>
    )
}

export default RootLayout