import React from 'react'
import { Layout, Collapse } from 'antd'
import AddictionPanel from './panels/Addiction'
import SubtractionPanel from './panels/Subtraction'
import LayoutSettingPanel from './panels/Layout'
import css from './index.module.css'

const { Header } = Layout
const { Panel } = Collapse


export default function Setting() {
  const onChange = (key) => {
    console.log(key)
    key.some(e => e === 'addition') ? console.log(`Addition Enabled.`) : console.log(`Addition Disabled.`)
    key.some(e => e === 'subtraction') ? console.log(`Subtraction Enabled.`) : console.log(`Subtraction Disabled.`)
  }
  return (
    <div className={css.settings_container}>
      <Layout>
        <Header>
          <h2 style={{ color: "#fff" }}>Settings</h2>
        </Header>
        <Collapse defaultActiveKey={['layout']}>
          <Panel header="Layout" key="layout" >
            <LayoutSettingPanel />
          </Panel>
        </Collapse>
        <Collapse defaultActiveKey={['addition', 'subtraction']} onChange={onChange} >
          <Panel header="Addition" key="addition">
            <AddictionPanel />
          </Panel>
          <Panel header="Subtraction" key="subtraction">
            <SubtractionPanel />
          </Panel>
        </Collapse>
      </Layout>
    </div>
  )
}
