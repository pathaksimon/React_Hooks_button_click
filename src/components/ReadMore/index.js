import {useState} from 'react'
import {
  Container,
  Centerist,
  Head,
  Para,
  Image,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [first, changeSize] = useState(false)
  const bhil = reactHooksDescription.split(' ')
  const indexing = bhil.findIndex(each => each === 'components.')
  const slicing = bhil.slice(0, indexing + 1)
  const joining = slicing.join(' ')
  const clicking = event => {
    changeSize(prevState => !prevState)
  }
  console.log(first)

  return (
    <Container>
      <Centerist>
        <Head>React Hooks</Head>
        <Para>Hooks are a new addition to React</Para>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Para>{first ? reactHooksDescription : joining}</Para>
        <Button onClick={clicking}>{first ? 'Read Less' : 'Read More'}</Button>
      </Centerist>
    </Container>
  )
}

export default ReadMore
