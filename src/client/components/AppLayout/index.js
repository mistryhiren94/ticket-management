import React from 'react'
import { Layout } from 'antd'
import ErrorBoundary from 'components/ErrorBoundary'
import { ContentRoute } from 'routes'

const { Content, Footer } = Layout

const AppLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Content>
          <ErrorBoundary>
            <ContentRoute />
          </ErrorBoundary>
        </Content>
        <Footer style={{ textAlign: 'center' }}>created by Hiren</Footer>
      </Layout>
    </Layout>
  )
}
// AppLayout.propTypes = {}
export default AppLayout
