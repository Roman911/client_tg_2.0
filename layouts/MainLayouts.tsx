import { NextComponentType } from 'next'
import { Breadcrumb, Layout } from 'antd'
import { NavBar } from "../Components"
import styles from './Layout.module.scss'

export const MainLayouts: NextComponentType = ({ children }) => {
  return <Layout>
    <Layout.Header className={ styles.header }>
      <NavBar />
    </Layout.Header>
    <Layout.Content className={`site-layout ${styles.myLayout}`}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>
          <a href="">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application List</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
      <div className={ styles.siteLayoutBackground }>
        12323132132
      </div>
    </Layout.Content>
    { children }
    <Layout.Footer>
      Footer
    </Layout.Footer>
  </Layout>
}