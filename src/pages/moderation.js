import React from 'react'
import Navbar from '../components/navbar'
import {
  Button,
  Container,
  Heading,
  Select,
  Text
} from 'rebass'

var _ = require('lodash')

class Moderation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      productToDelete: 'Select Product',
      skuArray: null
    }
    this.handleSkuDelete = this.handleSkuDelete.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleProductSubmit = this.handleProductSubmit.bind(this)
    this.handleSkuSubmit = this.handleSkuSubmit.bind(this)
  }

  async addProduct (id, name, url, description) {
    const res = await fetch(process.env.STRIPE_ADD_PRODUCT_URL, {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        name: name,
        url: url,
        description: description
      })
    })
    const productData = await res.json()
    console.log(productData)
  }

  async addSku (id, style, size, colour, artist) {
    const res = await fetch(process.env.STRIPE_ADD_SKU_URL, {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        style: style,
        size: size,
        colour: colour,
        artist: artist
      })
    })
    const skuData = await res.json()
    console.log(skuData)
  }

  async deleteSku (id) {
    const res = await fetch(process.env.STRIPE_DELETE_SKU_URL, {
      method: 'POST',
      body: JSON.stringify({
        id: id
      })
    })
    const skuDeleteData = await res.json()
    console.log(skuDeleteData)
  }

  handleProductSubmit (e) {
    e.preventDefault()
    let data = _.filter(this.props.data.allContentfulDesign.edges, ['node.moderated', null])
    for (let design of data) {
      this.addProduct('prod_' + design.node.id, design.node.name, 'https:' + design.node.images[0].file.url, design.node.description)
    }
  }

  handleSkuSubmit (e) {
    e.preventDefault()
    let data = _.filter(this.props.data.allContentfulDesign.edges, ['node.moderated', null])
    for (let design of data) {
      for (let style of this.props.data.allContentfulProduct.edges) {
        for (let size of style.node.size) {
          for (let colour of style.node.colour) {
            this.addSku('prod_' + design.node.id, style.node.style, size, colour, design.node.artist.username)
          }
        }
      }
    }
  }

  handleSelectChange (e) {
    this.setState({
      productToDelete: e.target.value
    })
  }

  handleSkuDelete (e) {
    e.preventDefault()
    let skusToDelete = _.filter(this.props.data.allStripeProduct.edges, ['node.id', this.state.productToDelete])
    for (let sku of skusToDelete[0].node.skus.data) {
      this.deleteSku(sku.id)
    }
  }

  render () {
    console.log(this.props.data.allStripeProduct.edges)
    return (
      <div>
        <Navbar navigation={this.props.data.allContentfulNavigation.edges} />
        <Container>
          <Heading
            children='Moderation'
            pt={5}
          />
          <Text
            mb={3}
            children='Designs to be moderated: '
          />
          {_.chain(this.props.data.allContentfulDesign.edges).filter(['node.moderated', null]).map(({node}) => (
            <Text
              key={node.id}
              children={node.name}
            />
          )).value()}
          <Button
            children='Create Products'
            onClick={this.handleProductSubmit}
            mb={5}
          />
          <br />
          <Button
            children='Create Skus'
            onClick={this.handleSkuSubmit}
          />
          <br />
          <form onSubmit={this.handleSkuDelete}>
            <Select
              value={this.state.productToDelete}
              onChange={this.handleSelectChange}
            >
              {this.props.data.allStripeProduct.edges.map(({node}) => (
                <option
                  key={node.id}
                  value={node.id}
                  children={node.name}
                />
            ))}
            </Select>
            <input
              value='Delete Product'
              type='submit'
            />
          </form>
        </Container>
      </div>
    )
  }
}

export default Moderation

export const ModerationQuery = graphql`
query ModerationQuery {
  allContentfulDesign {
    edges {
      node {
        id
        name
        active
        images {
          sizes(maxHeight: 200) {
            ...GatsbyContentfulSizes
          }
          file {
            url
          }
        }
        artist {
          username
        }
        moderated
        description
      }
    }
  }
  allContentfulProduct {
    edges {
      node {
        style
        colour
        size
      }
    }
  }
  allContentfulNavigation {
    edges {
      node {
        order
        href
        position
        text
      }
    }
  }
  allStripeProduct {
    edges {
      node {
        id
        name
        skus {
          data {
            id
          }
        }
      }
    }
  }
}
`
