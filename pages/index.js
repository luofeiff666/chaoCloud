import Head from 'next/head'
import { Layout, Rate } from 'antd';
import 'antd/dist/antd.css';
const { Header, Footer, Sider, Content } = Layout;
const Home = () => (
  <div className="container">
    <Head>
      <title>LuoFei</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout style={{ width: "100%" }}>
      <Header>
        <h1 className="title">
          LuoFei Server
        </h1>
      </Header>
      <Layout>
        <Content>
          <p className="description">
            在这里， 得到自己的成长
          </p>
        </Content>
        <Sider><Rate allowHalf defaultValue={2.5} /></Sider>
      </Layout>
      <Footer>
        <p className="description">
          开始吧 serverless
        </p>
      </Footer>
    </Layout>


    <main>




    </main>
  </div>
)

export default Home
