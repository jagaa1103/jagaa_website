import theme from "./../styles/theme";
const Home = () => {
    return (
        <div className="container">
            <h1>Welcome, I'm Enkhjargal</h1>
            <style jsx>{`
                .container {
                margin: 50px;
                }
                .container :global(.btn) {
                background: #000;
                color: #fff;
                }
            `}</style>
        </div>
    )
}

export default Home;