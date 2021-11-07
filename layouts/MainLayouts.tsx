import React from 'react'
import { Header } from "../Components"
//import styles from './Layout.module.scss'
import { Container, Box } from '@mui/material'
import { WrapperLayouts } from "./WrapperLayouts"

export const MainLayouts: React.FC = ({ children }) => {
  return <WrapperLayouts >
    <Box>
      <Header />
      <Container style={{ marginTop: 84 }} maxWidth="xl">
        { children }
      </Container>
    </Box>
  </WrapperLayouts>

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