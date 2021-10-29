import { NextComponentType } from 'next'
import { useTypedSelector } from "../hooks/useTypedSelector"
import {Header, Progress} from "../Components"
//import styles from './Layout.module.scss'
import { Container, Box } from '@mui/material'

export const MainLayouts: NextComponentType = ({ children }) => {
  const { isLoading } = useTypedSelector(state => state.loadingPage)

  return <Box>
    <Header />
    <Container style={{ marginTop: 84 }} maxWidth="xl">
      { children }
    </Container>
    { isLoading && <Progress /> }
  </Box>

  // return <Layout>
  //   <Layout.Header className={ styles.header }>
  //     <NavBar />
  //   </Layout.Header>
  //   <Layout.Content className={`site-layout ${styles.myLayout}`}>
  //     <Breadcrumb style={{ margin: '16px 0' }}>
  //       <Breadcrumb.Item>
  //         <a href="">Home</a>
  //       </Breadcrumb.Item>
  //       <Breadcrumb.Item>
  //         <a href="">Application List</a>
  //       </Breadcrumb.Item>
  //       <Breadcrumb.Item>An Application</Breadcrumb.Item>
  //     </Breadcrumb>
  //     <div className={ styles.siteLayoutBackground }>
  //       12323132132
  //     </div>
  //   </Layout.Content>
  //   { children }
  //   <Layout.Footer>
  //     Footer
  //   </Layout.Footer>
  //   { isLoading && <Progress /> }
  // </Layout>
}