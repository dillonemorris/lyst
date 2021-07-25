import { Container } from './styles'
import { Tree } from './components/Tree'

export default function App() {
  return (
    <Container>
      <Tree defaultOpen>
        <Tree />
        <Tree>
          <Tree />
          <Tree>
            <Tree />
            <Tree />
            <Tree />
          </Tree>
          <Tree />
        </Tree>
        <Tree />
        <Tree />
      </Tree>
    </Container>
  )
}
