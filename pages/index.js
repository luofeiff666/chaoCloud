import Head from 'next/head'

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">
        Welcome to LuoFei Server
      </h1>

      <p className="description">
        在这里， 得到自己的成长
      </p>
      <p className="description">
        开始吧 serverless
      </p>
    </main>
  </div>
)

export default Home